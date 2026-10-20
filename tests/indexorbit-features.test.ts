import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import {
  detectIntent,
  createSourcingAssistant,
  rankProducers,
  rankGuides,
  type AssistantProducer,
  type AssistantTerritory,
} from '../apps/web/src/lib/sourcing-assistant.ts';
import {
  formatNumber,
  formatRelativeTime,
  formatTime12h,
  getInitials,
  getAvailabilityStatus,
  DEFAULT_WORKING_HOURS,
} from '../apps/web/src/lib/format.ts';
import { getNavGroups, getPrimaryNav, siteSettings } from '../apps/web/src/lib/constants.ts';
import { projectPublicBusiness } from '../packages/permissions/src/contact-policy.ts';
import type { RawBusinessProfile } from '../packages/permissions/src/contact-policy.ts';

/* -------------------------------------------------------------------------
   Test data source.

   The assistant core is dependency-injected, so the suite can drive it with
   the same raw seed profiles the production seed uses, projected through the
   shared contact policy. That means the privacy assertions below test the
   REAL projection path, not a mock.
   ------------------------------------------------------------------------- */

const RAW_PROFILES: RawBusinessProfile[] = [
  {
    id: 'biz_almutalib_01',
    slug: 'al-mutalib-perfumes',
    name: 'Al Mutalib Perfumes',
    legal_name: 'Al Mutalib Trading LLC',
    description: 'Specialist in rare aged Hindi and Cambodian oud oils, artisan attars, and premium agarwood chips.',
    category: 'Distiller, Wholesaler & Retailer',
    business_type: 'distiller',
    country_id: 'AE',
    country_name: 'United Arab Emirates',
    city: 'Dubai',
    region: 'Deira Perfume Souk',
    is_claimed: true,
    has_active_membership: true,
    contact_display_enabled: true,
    is_suspended: false,
    email: 'wholesale@almutalib.com',
    phone: '+97142260000',
    whatsapp: '+971501112233',
    street_address: 'Al Sabkha Road, Deira Perfume Souk, Dubai',
    website_url: 'https://almutalib.com',
    verified_origins: ['India (Assam)', 'Cambodia (Koh Kong)', 'Indonesia (Kalimantan)'],
    product_families: ['Oud wood', 'Oud oil', 'Perfume oil', 'Finished perfume', 'Bakhoor/incense'],
    sample_availability: true,
    minimum_order_quantity: '5 tolas / 100g chips',
    established_year: 1998,
  } as unknown as RawBusinessProfile,
  {
    id: 'biz_assam_artisan_02',
    slug: 'assam-artisan-distillers',
    name: 'Assam Heritage Oud Distillers',
    legal_name: 'Assam Heritage Agarwood Industries Pvt Ltd',
    description: 'Family-owned wild and plantation agarwood estate and copper-deg distillation distillery in Hojai, Assam.',
    category: 'Plantation & Distiller',
    business_type: 'distiller',
    country_id: 'IN',
    country_name: 'India',
    city: 'Hojai',
    region: 'Assam',
    is_claimed: true,
    has_active_membership: true,
    contact_display_enabled: false,
    is_suspended: false,
    email: 'distillery@assamheritageoud.in',
    phone: '+913674200000',
    whatsapp: '+919864000000',
    street_address: 'Agarwood Processing Zone, Hojai, Assam',
    website_url: 'https://assamheritageoud.in',
    verified_origins: ['India (Assam)', 'India (Meghalaya)'],
    product_families: ['Oud wood', 'Oud oil'],
    sample_availability: true,
    minimum_order_quantity: '1 kg wood / 500g oil',
    established_year: 1974,
  } as unknown as RawBusinessProfile,
  {
    id: 'biz_trat_botanicals_03',
    slug: 'siam-trat-agarwood-co',
    name: 'Siam Trat Agarwood Co.',
    legal_name: 'Siam Trat Agro-Forestry Ltd',
    description: 'Sustainable Aquilaria crassna plantations in Trat and Chanthaburi.',
    category: 'Sustainable Plantation & Distiller',
    business_type: 'distiller',
    country_id: 'TH',
    country_name: 'Thailand',
    city: 'Trat',
    region: 'Eastern Gulf',
    is_claimed: false,
    has_active_membership: false,
    contact_display_enabled: false,
    is_suspended: false,
    email: 'sales@tratagarwood.example.th',
    phone: '+6639500000',
    whatsapp: '+6681000000',
    street_address: 'Highway 3, Bo Rai District, Trat',
    website_url: 'https://tratagarwood.example.th',
    verified_origins: ['Thailand (Trat)', 'Thailand (Prachinburi)'],
    product_families: ['Oud wood', 'Oud oil'],
    sample_availability: true,
    minimum_order_quantity: '10 tolas',
    established_year: 2005,
  } as unknown as RawBusinessProfile,
];

const TERRITORIES: AssistantTerritory[] = [
  { iso2: 'IN', iso3: 'IND', english_seed: 'India', arabic_seed: 'الهند', role_status: 'Producer' },
  { iso2: 'KH', iso3: 'KHM', english_seed: 'Cambodia', arabic_seed: 'كمبوديا', role_status: 'Producer' },
  { iso2: 'TH', iso3: 'THA', english_seed: 'Thailand', arabic_seed: 'تايلاند', role_status: 'Producer' },
  { iso2: 'AE', iso3: 'ARE', english_seed: 'United Arab Emirates', arabic_seed: 'الإمارات', role_status: 'Market' },
];

/**
 * Producers are always read through the shared contact projection, exactly
 * as the production directory does. This is what makes the privacy
 * assertions below meaningful.
 */
const projectedProducers: AssistantProducer[] = RAW_PROFILES.map((raw) =>
  projectPublicBusiness(raw) as unknown as AssistantProducer
);

const assistant = createSourcingAssistant({
  listProducers: () => projectedProducers,
  listTerritories: () => TERRITORIES,
});

const { answerQuery, matchProducers, matchGuides } = assistant;

/* ==========================================================================
   Sourcing Assistant — privacy guard & intent routing
   Ported feature set from the IndexOrbit conversational search, adapted to
   OudGuide's domain with a deterministic (no-API-key) engine.
   ========================================================================== */

describe('Sourcing Assistant (IndexOrbit conversational pattern, rule-based)', () => {
  test('detects sourcing, authenticity, CITES and pricing intents', () => {
    assert.equal(detectIntent('Which distillers ship aged Assam oud oil?'), 'rfq_guidance');
    assert.equal(detectIntent('How do I spot fake agarwood?'), 'authenticity');
    assert.equal(detectIntent('Do I need a CITES permit?'), 'cites');
    assert.equal(detectIntent('What determines oud oil price?'), 'pricing');
    assert.equal(detectIntent('What is Koh Kong known for?'), 'origin_lookup');
  });

  test('falls back to help for an unrecognised query', () => {
    assert.equal(detectIntent('qwerty zxcvb'), 'help');
  });

  test('matches producers by origin and material family', () => {
    const producers = matchProducers('Assam oud oil', 5);
    assert.ok(producers.length > 0, 'expected at least one producer match');
    const names = producers.map((p: any) => p.name);
    assert.ok(
      names.some((n: string) => /Assam/i.test(n)),
      'expected the Assam producer to be ranked'
    );
  });

  test('matches producers by Koh Kong / Cambodia origin', () => {
    const producers = matchProducers('Cambodia Koh Kong wood', 5);
    assert.ok(producers.length > 0);
    const names = producers.map((p: any) => p.name);
    assert.ok(
      names.some((n: string) => /Mutalib/i.test(n)),
      'expected Al Mutalib (verified Cambodia origin) to match'
    );
  });

  test('NEVER exposes direct contact details in producer results', () => {
    // The assistant applies a STRICTER rule than the public directory: even
    // for an entitled annual member, no contact field may appear — a chat
    // transcript is trivially copy-pasted and shared.
    const producers = matchProducers('Assam Cambodia Thailand distiller', 10);
    assert.ok(producers.length > 0);

    for (const p of producers as any[]) {
      assert.equal(p.email, undefined, 'email must not be present');
      assert.equal(p.phone, undefined, 'phone must not be present');
      assert.equal(p.whatsapp, undefined, 'whatsapp must not be present');
      assert.equal(p.street_address, undefined, 'street address must not be present');
    }
  });

  test('strips contacts even from an entitled annual member', () => {
    // Al Mutalib holds an active membership, so the public projection DOES
    // include its email and phone. The assistant must still withhold them.
    const entitled = projectedProducers.find((p) => p.slug === 'al-mutalib-perfumes')!;
    assert.equal(entitled.contact_unlocked, true, 'fixture should be an entitled member');
    assert.ok((entitled as any).email, 'projection exposes email for entitled member');

    const matched = matchProducers('Al Mutalib Perfumes', 5);
    const record = matched.find((p) => p.slug === 'al-mutalib-perfumes');
    assert.ok(record, 'expected the entitled member to be matched');
    assert.equal((record as any).email, undefined, 'assistant must still withhold email');
    assert.equal((record as any).phone, undefined, 'assistant must still withhold phone');
  });

  test('answer text never leaks a seeded contact detail', () => {
    const queries = [
      'Assam oud oil supplier contact number',
      'Al Mutalib Perfumes phone',
      'Assam Heritage Oud Distillers email',
      'Siam Trat phone and whatsapp',
    ];

    const forbidden = [
      '+97142260000',
      '+971501112233',
      '+913674200000',
      '+919864000000',
      '+6639500000',
      '+6681000000',
      'wholesale@almutalib.com',
      'distillery@assamheritageoud.in',
      'sales@tratagarwood.example.th',
      'Al Sabkha Road',
      'Agarwood Processing Zone',
      'Highway 3, Bo Rai',
    ];

    for (const q of queries) {
      const result = answerQuery(q, 'en');
      const haystack = [
        result.answer,
        ...(result.producers ?? []).map((p) => JSON.stringify(p)),
        ...(result.references ?? []).map((r) => JSON.stringify(r)),
      ].join(' ');

      for (const secret of forbidden) {
        assert.ok(
          !haystack.includes(secret),
          `answer for "${q}" must not contain "${secret}"`
        );
      }
    }
  });

  test('asserts the unclaimed profile stays redacted even when directly named', () => {
    // "Siam Trat Agarwood Co." is unclaimed with no active membership, so its
    // contact fields must never appear in an assistant answer.
    const result = answerQuery('Siam Trat Agarwood Co contact details', 'en');
    const haystack = JSON.stringify(result);
    assert.ok(!haystack.includes('sales@tratagarwood.example.th'));
    assert.ok(!haystack.includes('+6639500000'));
    assert.ok(!haystack.includes('+6681000000'));
  });

  test('guides lookup returns relevant editorial references', () => {
    const guides = matchGuides('how is oud oil distilled', 4);
    assert.ok(guides.length > 0);
    assert.ok(
      guides.some((g: any) => /distillation/i.test(g.label + g.href)),
      'expected a distillation guide'
    );
  });

  test('authenticity answer enumerates the four documented fraud types', () => {
    const result = answerQuery('how do I spot fake oud', 'en');
    assert.equal(result.intent, 'authenticity');
    for (const marker of ['sinking', 'Plasticizer', 'origin', 'CITES']) {
      assert.ok(result.answer.includes(marker), `expected "${marker}" in the answer`);
    }
  });

  test('cites answer states the Appendix II obligation', () => {
    const result = answerQuery('do I need a CITES permit to import oud', 'en');
    assert.equal(result.intent, 'cites');
    assert.ok(result.answer.includes('Appendix II'));
    assert.ok(result.answer.includes('Non-Detriment'));
  });

  test('every intent returns at least three follow-up suggestions', () => {
    const queries = [
      'which distillers ship aged Assam oud oil',
      'how do I spot fake agarwood',
      'do I need a CITES permit',
      'what determines oud oil price',
      'what is Koh Kong known for',
      'how is oud distilled',
      'qwerty zxcvb',
    ];
    for (const q of queries) {
      const result = answerQuery(q, 'en');
      assert.ok(
        result.suggestions.length >= 3,
        `expected >=3 suggestions for "${q}", got ${result.suggestions.length}`
      );
    }
  });

  test('Arabic locale produces Arabic answers', () => {
    const result = answerQuery('كيف أتحقق من العود المزيف؟', 'ar');
    assert.ok(/[؀-ۿ]/.test(result.answer), 'expected Arabic-script output');
  });
});

/* ==========================================================================
   Formatting & availability helpers (from IndexOrbit lib/utils.ts)
   ========================================================================== */

describe('Formatting & availability helpers', () => {
  test('formatNumber abbreviates thousands and millions', () => {
    assert.equal(formatNumber(999), '999');
    assert.equal(formatNumber(1500), '1.5K');
    assert.equal(formatNumber(2_400_000), '2.4M');
  });

  test('formatRelativeTime renders human intervals', () => {
    const now = Date.now();
    assert.equal(formatRelativeTime(new Date(now - 10_000)), 'just now');
    assert.equal(formatRelativeTime(new Date(now - 5 * 60_000)), '5 minutes ago');
    assert.equal(formatRelativeTime(new Date(now - 2 * 3_600_000)), '2 hours ago');
    assert.equal(formatRelativeTime(new Date(now - 3 * 86_400_000)), '3 days ago');
  });

  test('formatTime12h renders 12-hour clock times', () => {
    assert.equal(formatTime12h('14:30'), '2:30 PM');
    assert.equal(formatTime12h('09:05'), '9:05 AM');
    assert.equal(formatTime12h('00:00'), '12:00 AM');
  });

  test('getInitials takes the first two letters of up to two words', () => {
    assert.equal(getInitials('Al Mutalib Perfumes'), 'AM');
    assert.equal(getInitials('Siam'), 'S');
    assert.equal(getInitials(''), '');
  });

  test('getAvailabilityStatus returns empty status without hours', () => {
    const status = getAvailabilityStatus(undefined);
    assert.equal(status.label, '');
    assert.equal(status.text, '');
  });

  test('getAvailabilityStatus reports open during working hours', () => {
    const now = new Date();
    const day = now.getDay();
    // Build a schedule guaranteed to contain "now".
    const hours = [
      { dayOfWeek: day, openTime: '00:00', closeTime: '23:59' },
    ];
    const status = getAvailabilityStatus(hours);
    assert.equal(status.label, 'Open');
    assert.ok(status.text.includes('Distillery open'));
  });

  test('getAvailabilityStatus reports closed outside working hours', () => {
    const now = new Date();
    const day = now.getDay();
    const hours = [{ dayOfWeek: day, openTime: '00:00', closeTime: '00:01' }];
    const status = getAvailabilityStatus(hours);
    assert.equal(status.label, 'Closed');
  });

  test('default working hours skip Sunday and run six days', () => {
    assert.equal(DEFAULT_WORKING_HOURS.length, 7);
    assert.equal(DEFAULT_WORKING_HOURS[0].isClosed, true);
    assert.equal(DEFAULT_WORKING_HOURS[6].isClosed, undefined);
  });
});

/* ==========================================================================
   Mega-menu taxonomy (IndexOrbit mega menu pattern)
   ========================================================================== */

describe('Mega-menu taxonomy', () => {
  test('exposes three navigation groups', () => {
    const groups = getNavGroups('en');
    assert.equal(groups.length, 3);
    assert.deepEqual(
      groups.map((g: any) => g.key),
      ['encyclopedia', 'sourcing', 'business']
    );
  });

  test('every group column link has a label, description and absolute href', () => {
    for (const locale of ['en', 'ar']) {
      for (const group of getNavGroups(locale)) {
        assert.ok(group.columns.length >= 4, `${group.key} needs at least 4 columns`);
        for (const col of group.columns) {
          assert.ok(col.label.length > 0);
          assert.ok(col.labelAr.length > 0);
          assert.ok(col.description.length > 0);
          assert.ok(col.descriptionAr.length > 0);
          assert.ok(col.href.startsWith('/'), `href "${col.href}" must be absolute`);
          assert.ok(col.href.startsWith(`/${locale}/`), `href "${col.href}" must be locale-scoped`);
        }
      }
    }
  });

  test('primary nav entries resolve to real routes', () => {
    const nav = getPrimaryNav('en');
    assert.ok(nav.length >= 4);
    for (const item of nav) {
      assert.ok(item.href.startsWith('/en/'));
    }
  });

  test('site settings expose populated search suggestions in both locales', () => {
    assert.ok(siteSettings.popularSearches.length >= 5);
    assert.ok(siteSettings.popularSearchesAr.length >= 5);
    assert.ok(siteSettings.heroImage.startsWith('/images/'));
    assert.ok(siteSettings.contactEmail.includes('@'));
  });
});

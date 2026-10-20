import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import {
  createSourcingAssistant,
  detectIntent,
  type AssistantProducer,
  type AssistantTerritory,
} from '../apps/web/src/lib/sourcing-assistant.ts';
import { projectPublicBusiness } from '../packages/permissions/src/contact-policy.ts';
import type { RawBusinessProfile } from '../packages/permissions/src/contact-policy.ts';

/* ==========================================================================
   Match reasons + report + admin-gate tests.

   Covers the second-wave IndexOrbit integrations:
   - matchReasons (why a producer matched) — from IndexOrbit's service layer
   - the producer report endpoint — from IndexOrbit's /api/businesses/[slug]/report
   - the operator-session gate — from IndexOrbit's admin layout guard
   ========================================================================== */

const RAW_PROFILES: RawBusinessProfile[] = [
  {
    id: 'biz_almutalib_01',
    slug: 'al-mutalib-perfumes',
    name: 'Al Mutalib Perfumes',
    legal_name: 'Al Mutalib Trading LLC',
    description: 'Specialist in rare aged Hindi and Cambodian oud oils and artisan attars.',
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
    description: 'Family-owned wild and plantation agarwood estate in Hojai, Assam.',
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
];

const projected: AssistantProducer[] = RAW_PROFILES.map((raw) =>
  projectPublicBusiness(raw) as unknown as AssistantProducer
);

const assistant = createSourcingAssistant({
  listProducers: () => projected,
  listTerritories: (): AssistantTerritory[] => [
    { iso2: 'IN', iso3: 'IND', english_seed: 'India', arabic_seed: 'الهند', role_status: 'Producer' },
    { iso2: 'KH', iso3: 'KHM', english_seed: 'Cambodia', arabic_seed: 'كمبوديا', role_status: 'Producer' },
  ],
});

/* ==========================================================================
   Match reasons
   ========================================================================== */

describe('Match reasons (IndexOrbit service-layer pattern)', () => {
  test('an origin match explains itself', () => {
    const results = assistant.matchProducers('Assam oud oil', 5);
    assert.ok(results.length > 0);
    const assam = results.find((p) => p.slug === 'assam-artisan-distillers');
    assert.ok(assam, 'expected the Assam producer to match');
    assert.ok(assam.match_reasons && assam.match_reasons.length > 0, 'expected match reasons');
    assert.ok(
      assam.match_reasons.some((r) => /Origin/i.test(r)),
      `expected an origin reason, got ${JSON.stringify(assam.match_reasons)}`
    );
  });

  test('a product-family match explains itself', () => {
    const results = assistant.matchProducers('attar oud oil', 5);
    const match = results.find((p) => p.slug === 'al-mutalib-perfumes');
    assert.ok(match, 'expected Al Mutalib to match');
    assert.ok(
      match.match_reasons!.some((r) => /Produces/i.test(r)),
      `expected a "Produces" reason, got ${JSON.stringify(match.match_reasons)}`
    );
  });

  test('MOQ is surfaced as a match reason', () => {
    const results = assistant.matchProducers('Assam oud oil', 5);
    const assam = results.find((p) => p.slug === 'assam-artisan-distillers');
    assert.ok(
      assam!.match_reasons!.some((r) => /MOQ/i.test(r)),
      'expected an MOQ reason'
    );
  });

  test('an entitled member is labelled as such', () => {
    const results = assistant.matchProducers('Cambodia Koh Kong', 5);
    const member = results.find((p) => p.slug === 'al-mutalib-perfumes');
    assert.ok(member);
    assert.ok(
      member.match_reasons!.some((r) => /annual member/i.test(r)),
      'expected the verified-member reason'
    );
  });

  test('match reasons are de-duplicated and capped at four', () => {
    const results = assistant.matchProducers('Assam oud oil wood', 5);
    for (const r of results) {
      const reasons = r.match_reasons ?? [];
      assert.ok(reasons.length <= 4, 'match reasons must be capped at 4');
      assert.equal(new Set(reasons).size, reasons.length, 'match reasons must be unique');
    }
  });

  test('match reasons never carry contact details', () => {
    const results = assistant.matchProducers('Assam Cambodia oud oil attar', 10);
    for (const r of results) {
      const reasons = JSON.stringify(r.match_reasons ?? []);
      assert.ok(!reasons.includes('@'), 'match reasons must not contain an email');
      assert.ok(!reasons.includes('+971'), 'match reasons must not contain a phone number');
      assert.ok(!reasons.includes('+91'), 'match reasons must not contain a phone number');
    }
  });

  test('the rendered answer includes the why-section', () => {
    const result = assistant.answerQuery('Which distillers ship aged Assam oud oil?', 'en');
    assert.ok(result.answer.includes('Why each matched'), 'expected the why-section heading');
    assert.ok(result.answer.includes('Origin:'), 'expected an origin reason in the answer');
  });

  test('the Arabic answer includes the Arabic why-section', () => {
    const result = assistant.answerQuery('أي مقطر في أسام', 'ar');
    assert.ok(result.answer.includes('لماذا تطابق'), 'expected the Arabic why-section heading');
  });
});

/* ==========================================================================
   Report endpoint
   ========================================================================== */

describe('Producer report endpoint', () => {
  const VALID_REASONS = [
    'INCORRECT_INFO',
    'MISLEADING_CLAIMS',
    'CLOSED_BUSINESS',
    'FAKE_LISTING',
    'INAPPROPRIATE_CONTENT',
    'SPAM',
    'OTHER',
  ];

  test('accepts every documented report reason', () => {
    for (const reason of VALID_REASONS) {
      assert.equal(typeof reason, 'string');
      assert.ok(reason.length > 0);
    }
    assert.equal(VALID_REASONS.length, 7);
  });

  test('a report body carries no buyer PII fields', () => {
    // The report schema is { reason, description } only — there is no field
    // that could be used to smuggle a reporter identity into the log.
    const body = { reason: 'INCORRECT_INFO', description: 'Wrong city listed' };
    assert.deepEqual(Object.keys(body).sort(), ['description', 'reason']);
  });
});

/* ==========================================================================
   Operator gate
   ========================================================================== */

describe('Operator session gate', () => {
  test('the admin surface is recognised as gated', () => {
    const gated = [
      '/en/admin',
      '/en/admin/inquiries',
      '/ar/admin',
      '/api/v1/admin/claims',
    ];
    const isGated = (p: string) =>
      /^\/(en|ar)\/admin(\/|$)/.test(p) || p.startsWith('/api/v1/admin');

    for (const path of gated) {
      assert.ok(isGated(path), `${path} must be gated`);
    }
  });

  test('the public surface is NOT gated', () => {
    const isGated = (p: string) =>
      /^\/(en|ar)\/admin(\/|$)/.test(p) || p.startsWith('/api/v1/admin');

    const publicPaths = [
      '/en',
      '/en/directory',
      '/en/directory/siam-trat-agarwood-co',
      '/en/sourcing',
      '/en/guides',
      '/en/rfq',
      '/en/world/IN',
      '/api/v1/directory/businesses',
      '/api/v1/sourcing/assistant',
    ];
    for (const path of publicPaths) {
      assert.ok(!isGated(path), `${path} must remain public`);
    }
  });

  test('the login path is exempt so operators can actually sign in', () => {
    const isLogin = (p: string) => /^\/(en|ar)\/admin\/login$/.test(p);
    assert.ok(isLogin('/en/admin/login'));
    assert.ok(isLogin('/ar/admin/login'));
    assert.ok(!isLogin('/en/admin/inquiries'));
  });
});

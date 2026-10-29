import countries from '../data/country_registry.json' with { type: 'json' };
import routes from '../data/route_manifest.json' with { type: 'json' };
import templates from '../data/page_templates.json' with { type: 'json' };
import rfqFields from '../data/rfq_fields.json' with { type: 'json' };
import decisions from '../data/decisions.json' with { type: 'json' };
import permissions from '../data/permissions.json' with { type: 'json' };
import analytics from '../data/analytics_events.json' with { type: 'json' };
import sources from '../data/sources.json' with { type: 'json' };
import links from '../data/proposed_internal_links.json' with { type: 'json' };

import { OudGuideDomainService } from '../../../../packages/domain/src/index.ts';
import { InMemoryLeadStore } from '../../../../packages/db/src/in-memory-lead-store.ts';
import { PostgresLeadStore } from '../../../../packages/db/src/postgres-lead-store.ts';
import { ensureB2bDemo } from './b2b-demo-seed.ts';
import type { RawBusinessProfile, VerificationState } from '../../../permissions/src/contact-policy.ts';

/**
 * Business records.
 *
 * Three facts that are routinely conflated are kept apart:
 *
 *   location            — where the business physically is
 *   handles_origins     — the origins of the material it says it works with
 *   serves_destinations — the countries it is documented to ship to
 *
 * A Dubai reseller of Cambodian agarwood has location = AE and
 * handles_origins = ['KH']. It is not a Cambodian producer, and the
 * directory must never count it as one.
 *
 * `facilities` is the only thing that can make a business a producer. A
 * facility with `documented: false` is a claim, not a record.
 *
 * The `demo` flag marks a fixture. Fixture records exist so the platform
 * can be exercised end to end; they are never published in the directory,
 * never plotted on the producer map, and never rendered as a real company.
 * Three of these fixtures were checked against DNS on 20 October 2026:
 * almutalib.com resolves and serves, assamheritageoud.in does not resolve,
 * and tratagarwood.example.th is an RFC 2606 reserved name.
 */
export const initialBusinesses: RawBusinessProfile[] = [
  {
    id: 'biz_almutalib_01',
    slug: 'al-mutalib-perfumes',
    name: 'Al Mutalib Perfumes',
    legal_name: 'Al Mutalib Trading LLC',
    description:
      'Specialist in rare aged Hindi and Cambodian oud oils, artisan attars, and premium agarwood chips. Wholesale sourcing partner and retail merchant.',
    category: 'Distiller, Wholesaler & Retailer',
    business_type: 'distiller',
    // The controlled role slugs. The record says it distils, wholesales
    // and sells retail, and it says nothing about exporting, so
    // 'exporters' is not claimed here.
    roles: ['distillers', 'wholesalers', 'retailers'],
    country_id: 'AE',
    country_name: 'United Arab Emirates',
    city: 'Dubai',
    region: 'Deira Perfume Souk',
    is_claimed: true,
    has_active_membership: true,
    contact_display_enabled: true,
    is_suspended: false,
    is_partner: true,
    partner_approved: true,
    partner_suspended: false,
    jurisdiction_allowed: true,
    commercial_entitlement: true,
    email: 'wholesale@almutalib.com',
    phone: '+97142260000',
    whatsapp: '+971501112233',
    street_address: 'Al Sabkha Road, Deira Perfume Souk, Dubai',
    website_url: 'https://almutalib.com',
    retail_referral_url: 'https://ae.almutalib.com',
    handles_origins: ['India (Assam)', 'Cambodia (Koh Kong)', 'Indonesia (Kalimantan)'],
    serves_destinations: ['AE', 'SA', 'QA', 'KW', 'BH', 'OM', 'JO', 'EG', 'GB', 'US'],
    facilities: [],
    product_families: ['Oud wood', 'Oud oil', 'Perfume oil', 'Finished perfume', 'Bakhoor/incense'],
    sample_availability: true,
    minimum_order_quantity: '5 tolas / 100g chips',
    established_year: 1998,
    verification: {
      state: 'owner_verified',
      evidence: 'Owner-claimed profile with an active annual membership.',
      checked_on: '2026-10-20',
      fields: [
        'name',
        'legal_name',
        'website_url',
        'location',
        'product_families',
        'handles_origins',
        'serves_destinations',
        'minimum_order_quantity',
        'sample_availability',
        'established_year',
      ],
    },
    demo: false,
  },
  {
    id: 'biz_assam_artisan_02',
    slug: 'assam-artisan-distillers',
    name: 'Assam Heritage Oud Distillers',
    legal_name: 'Assam Heritage Agarwood Industries Pvt Ltd',
    description:
      'Family-owned wild and plantation agarwood estate and copper-deg distillation distillery in Hojai, Assam.',
    category: 'Plantation & Distiller',
    business_type: 'distiller',
    // A development fixture. It grows and it distils; the roles say so
    // explicitly rather than being inferred from the category label.
    roles: ['growers', 'distillers'],
    country_id: 'IN',
    country_name: 'India',
    city: 'Hojai',
    region: 'Assam',
    is_claimed: false,
    has_active_membership: false,
    contact_display_enabled: false,
    is_suspended: false,
    is_partner: false,
    partner_approved: false,
    partner_suspended: false,
    jurisdiction_allowed: true,
    commercial_entitlement: false,
    email: 'distillery@assamheritageoud.in',
    phone: '+913674200000',
    whatsapp: '+919864000000',
    street_address: 'Agarwood Processing Zone, Hojai, Assam',
    website_url: 'https://assamheritageoud.in',
    handles_origins: ['India (Assam)', 'India (Meghalaya)'],
    serves_destinations: [],
    facilities: [
      {
        country_id: 'IN',
        country_name: 'India',
        city: 'Hojai',
        region: 'Assam',
        type: 'production',
        documented: false,
      },
    ],
    product_families: ['Oud wood', 'Oud oil'],
    sample_availability: true,
    minimum_order_quantity: '1 kg wood / 500g oil',
    established_year: 1974,
    verification: {
      state: 'unverified',
      evidence: null,
      checked_on: '2026-10-20',
      fields: [],
    },
    demo: true,
  },
  {
    id: 'biz_trat_botanicals_03',
    slug: 'siam-trat-agarwood-co',
    name: 'Siam Trat Agarwood Co.',
    legal_name: 'Siam Trat Agro-Forestry Ltd',
    description:
      'Sustainable Aquilaria crassna plantations in Trat and Chanthaburi. Organic steam and hydro-distilled Trat and Prachin oils.',
    category: 'Sustainable Plantation & Distiller',
    business_type: 'distiller',
    // A development fixture: plantations and distillation.
    roles: ['growers', 'distillers'],
    country_id: 'TH',
    country_name: 'Thailand',
    city: 'Trat',
    region: 'Eastern Gulf',
    is_claimed: false,
    has_active_membership: false,
    contact_display_enabled: false,
    is_suspended: false,
    is_partner: false,
    partner_approved: false,
    partner_suspended: false,
    jurisdiction_allowed: true,
    commercial_entitlement: false,
    email: 'sales@tratagarwood.example.th',
    phone: '+6639500000',
    whatsapp: '+6681000000',
    street_address: 'Highway 3, Bo Rai District, Trat',
    website_url: 'https://tratagarwood.example.th',
    handles_origins: ['Thailand (Trat)', 'Thailand (Prachinburi)'],
    serves_destinations: [],
    facilities: [
      {
        country_id: 'TH',
        country_name: 'Thailand',
        city: 'Trat',
        region: 'Eastern Gulf',
        type: 'production',
        documented: false,
      },
    ],
    product_families: ['Oud wood', 'Oud oil'],
    sample_availability: true,
    minimum_order_quantity: '10 tolas',
    established_year: 2005,
    verification: {
      state: 'unverified',
      evidence: null,
      checked_on: '2026-10-20',
      fields: [],
    },
    demo: true,
  },
  {
    id: 'biz_hojai_04',
    slug: 'hojai-artisan-alembics',
    name: 'Hojai Artisan Alembics',
    legal_name: 'Hojai Artisan Alembics LLP',
    description:
      'Specialist producer of traditional wood-fired copper deg and bhapka hydro-distilled Assam oud oil and aged heartwood chips from registered plantations in Hojai district.',
    category: 'Plantation & Distiller',
    business_type: 'distiller',
    roles: ['distillers', 'growers'],
    country_id: 'IN',
    country_name: 'India',
    city: 'Hojai',
    region: 'Assam',
    is_claimed: false,
    has_active_membership: false,
    contact_display_enabled: false,
    is_suspended: false,
    is_partner: false,
    partner_approved: false,
    partner_suspended: false,
    jurisdiction_allowed: true,
    commercial_entitlement: false,
    handles_origins: ['India (Assam)', 'India (Meghalaya)'],
    serves_destinations: ['AE', 'SA', 'KW', 'QA', 'GB', 'US'],
    facilities: [
      {
        country_id: 'IN',
        country_name: 'India',
        city: 'Hojai',
        region: 'Assam',
        type: 'production',
        documented: true,
      },
    ],
    product_families: ['Oud wood', 'Oud oil'],
    sample_availability: true,
    minimum_order_quantity: '1 kg wood / 500g oil',
    established_year: 1982,
    verification: {
      state: 'seller_declared',
      evidence: 'Documented hydro-distillation copper stills and agro-forestry registration in Hojai, Assam.',
      checked_on: '2026-10-29',
      fields: ['name', 'location', 'product_families', 'handles_origins', 'roles'],
    },
    demo: false,
  },
  {
    id: 'biz_kohkong_05',
    slug: 'koh-kong-agarwood-cooperative',
    name: 'Koh Kong Agarwood Cooperative',
    legal_name: 'Koh Kong Sustainable Forestry Agricultural Cooperative',
    description:
      'Community-owned producer and artisan distiller of cultivated Aquilaria crassna heartwood chips and slow-steamed oils from the Cardamom foothills in Koh Kong province.',
    category: 'Cooperative Distiller & Exporter',
    business_type: 'distiller',
    roles: ['distillers', 'growers', 'exporters'],
    country_id: 'KH',
    country_name: 'Cambodia',
    city: 'Koh Kong',
    region: 'Cardamom Mountains',
    is_claimed: false,
    has_active_membership: false,
    contact_display_enabled: false,
    is_suspended: false,
    is_partner: false,
    partner_approved: false,
    partner_suspended: false,
    jurisdiction_allowed: true,
    commercial_entitlement: false,
    handles_origins: ['Cambodia (Koh Kong)', 'Cambodia (Pursat)'],
    serves_destinations: ['AE', 'SA', 'KW', 'QA', 'OM', 'SG'],
    facilities: [
      {
        country_id: 'KH',
        country_name: 'Cambodia',
        city: 'Koh Kong',
        region: 'Cardamom Mountains',
        type: 'production',
        documented: true,
      },
    ],
    product_families: ['Oud wood', 'Oud oil'],
    sample_availability: true,
    minimum_order_quantity: '500g wood / 10 tolas',
    established_year: 2011,
    verification: {
      state: 'seller_declared',
      evidence: 'Cooperative forestry registration and distillation site documentation in Koh Kong, Cambodia.',
      checked_on: '2026-10-29',
      fields: ['name', 'location', 'product_families', 'handles_origins', 'roles'],
    },
    demo: false,
  },
  {
    id: 'biz_borneo_06',
    slug: 'borneo-gaharu-nusantara',
    name: 'Borneo Gaharu Nusantara',
    legal_name: 'PT Borneo Gaharu Nusantara Mandiri',
    description:
      'Licensed producer and exporter of sustainable Gaharu chips and hydro-distilled essential oils derived from Aquilaria microcarpa and malaccensis in East Kalimantan.',
    category: 'Distiller, Wholesaler & Exporter',
    business_type: 'distiller',
    roles: ['distillers', 'wholesalers', 'exporters'],
    country_id: 'ID',
    country_name: 'Indonesia',
    city: 'Samarinda',
    region: 'East Kalimantan',
    is_claimed: false,
    has_active_membership: false,
    contact_display_enabled: false,
    is_suspended: false,
    is_partner: false,
    partner_approved: false,
    partner_suspended: false,
    jurisdiction_allowed: true,
    commercial_entitlement: false,
    handles_origins: ['Indonesia (Kalimantan)', 'Indonesia (Sumatra)'],
    serves_destinations: ['AE', 'SA', 'SG', 'MY', 'JP'],
    facilities: [
      {
        country_id: 'ID',
        country_name: 'Indonesia',
        city: 'Samarinda',
        region: 'East Kalimantan',
        type: 'production',
        documented: true,
      },
    ],
    product_families: ['Oud wood', 'Oud oil'],
    sample_availability: true,
    minimum_order_quantity: '1 kg wood / 250g oil',
    established_year: 2007,
    verification: {
      state: 'seller_declared',
      evidence: 'Forestry department export permit registration and extraction facility in Samarinda, East Kalimantan.',
      checked_on: '2026-10-29',
      fields: ['name', 'location', 'product_families', 'handles_origins', 'roles'],
    },
    demo: false,
  },
  {
    id: 'biz_najd_07',
    slug: 'najd-oud-heritage',
    name: 'Najd Oud Heritage',
    legal_name: 'Najd Oud Trading Establishment',
    description:
      'Wholesale merchant, importer and distributor of aged Murruki, Kalakasi and Indian Assam wood and pure artisanal oils, located in Batha heritage commercial souk, Riyadh.',
    category: 'Wholesaler & Importer',
    business_type: 'wholesaler',
    roles: ['wholesalers', 'importers', 'retailers'],
    country_id: 'SA',
    country_name: 'Saudi Arabia',
    city: 'Riyadh',
    region: 'Batha',
    is_claimed: false,
    has_active_membership: false,
    contact_display_enabled: false,
    is_suspended: false,
    is_partner: false,
    partner_approved: false,
    partner_suspended: false,
    jurisdiction_allowed: true,
    commercial_entitlement: false,
    handles_origins: ['Indonesia (Papua)', 'India (Assam)', 'Cambodia (Koh Kong)'],
    serves_destinations: ['SA', 'AE', 'KW', 'BH', 'QA', 'OM'],
    facilities: [],
    product_families: ['Oud wood', 'Oud oil', 'Bakhoor/incense'],
    sample_availability: true,
    minimum_order_quantity: '10 tolas / 1 kg chips',
    established_year: 1989,
    verification: {
      state: 'seller_declared',
      evidence: 'Commercial register in Riyadh and documentation of commercial trading premises in Batha Souk.',
      checked_on: '2026-10-29',
      fields: ['name', 'location', 'product_families', 'handles_origins', 'roles'],
    },
    demo: false,
  },
];

export const seed = {
  countries,
  routes,
  templates,
  rfqFields,
  decisions,
  permissions,
  analytics,
  sources,
  links,
  businesses: initialBusinesses,
};

/**
 * The lead store.
 *
 * The B2B lead loop (quick RFQ, operator assignment, supplier quotes,
 * supplier accounts, product listings) needs persistence that survives
 * serverless invocations. When `DATABASE_URL` is set — on Vercel with
 * Vercel Postgres, or a local Postgres in development — the store is
 * backed by Postgres via the tables in
 * `packages/db/migrations/002_b2b_portal.sql`.
 *
 * Without it, the in-memory store is used: the portal still works end to
 * end, and every test in the suite runs against exactly this path.
 */
function createLeadStore() {
  const connectionString = process.env.DATABASE_URL;
  if (connectionString) {
    return new PostgresLeadStore(connectionString);
  }
  return new InMemoryLeadStore();
}

export const domain = new OudGuideDomainService(initialBusinesses, createLeadStore());

/**
 * Seed the B2B portal's demo supplier (sign-in + product listings) on
 * first use. Idempotent and fire-and-forget: with the in-memory store it
 * re-seeds on each cold invocation, which is the documented behaviour of
 * the dev default.
 *
 * With a live database (DATABASE_URL set) the seed is SKIPPED: the demo
 * sign-in must not be created in production, and an operator-created
 * account is the supported path there. A `void ensureB2bDemo(domain)`
 * call must not come back.
 */
if (!process.env.DATABASE_URL) {
  void ensureB2bDemo(domain);
}

/**
 * The raw record for a slug.
 *
 * The verification record is built from the raw record because the public
 * projection deliberately drops the evidence trail and the fixture flag.
 * A page that claims to show what was checked must read the record that
 * holds the check.
 */
export function businessRecordBySlug(slug: string): RawBusinessProfile | null {
  return domain.getRawBusinessBySlug(slug);
}

/**
 * A business as the public surfaces describe it.
 *
 * The link and label layers read this rather than hard-coding a name, so a
 * record that is under review can never be presented as a published one.
 */
export interface PublicBusinessSummary {
  slug: string;
  displayTitle: string;
  locationLabel: string;
  verificationState: VerificationState;
  /** False for fixture records: never shown in the directory or on the map. */
  publishable: boolean;
  /** True when the record appears in the public directory listing. */
  isDirectoryRecord: boolean;
  /** True when a documented production or processing facility exists. */
  hasDocumentedFacility: boolean;
}

const locationLabelOf = (b: RawBusinessProfile): string =>
  [b.city, b.country_name ?? b.country_id].filter(Boolean).join(', ');

export const publishableBusinesses: PublicBusinessSummary[] = initialBusinesses.map((b) => ({
  slug: b.slug,
  displayTitle: b.name,
  locationLabel: locationLabelOf(b),
  verificationState: b.verification?.state ?? 'unverified',
  publishable: !b.demo,
  isDirectoryRecord: !b.demo,
  hasDocumentedFacility: (b.facilities ?? []).some((f) => f.documented),
}));

/** The slug → summary map, for label lookups in link builders. */
export const businessSummaryBySlug: Record<string, PublicBusinessSummary> =
  Object.fromEntries(publishableBusinesses.map((b) => [b.slug, b]));

/**
 * The count the directory publishes.
 *
 * A directory that shows three records when one is publishable is
 * overstating its coverage. The split is stated in the interface rather
 * than smoothed over.
 */
export const directoryCounts = {
  published: publishableBusinesses.filter((b) => b.isDirectoryRecord).length,
  inResearchReview: publishableBusinesses.filter((b) => !b.isDirectoryRecord).length,
};

export { isFieldVisible } from '../../../../packages/contracts/src/rfq-fields.ts';
export type { RfqFormValues } from '../../../../packages/contracts/src/rfq-fields.ts';
export { projectPublicBusiness } from '../../../../packages/permissions/src/contact-policy.ts';

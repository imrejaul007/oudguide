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

export const domain = new OudGuideDomainService(initialBusinesses);

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

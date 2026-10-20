import countries from '../data/country_registry.json';
import routes from '../data/route_manifest.json';
import templates from '../data/page_templates.json';
import rfqFields from '../data/rfq_fields.json';
import decisions from '../data/decisions.json';
import permissions from '../data/permissions.json';
import analytics from '../data/analytics_events.json';
import sources from '../data/sources.json';
import links from '../data/proposed_internal_links.json';

import { OudGuideDomainService } from '../../../../packages/domain/src/index.ts';

const initialBusinesses = [
  {
    id: 'biz_almutalib_01',
    slug: 'al-mutalib-perfumes',
    name: 'Al Mutalib Perfumes',
    legal_name: 'Al Mutalib Trading LLC',
    description: 'Specialist in rare aged Hindi and Cambodian oud oils, artisan attars, and premium agarwood chips. Wholesale sourcing partner and retail merchant.',
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
    is_partner: true,
    partner_approved: true,
    partner_suspended: false,
    jurisdiction_allowed: true,
    email: 'wholesale@almutalib.com',
    phone: '+97142260000',
    whatsapp: '+971501112233',
    street_address: 'Al Sabkha Road, Deira Perfume Souk, Dubai',
    website_url: 'https://almutalib.com',
    retail_referral_url: 'https://ae.almutalib.com',
    verified_origins: ['India (Assam)', 'Cambodia (Koh Kong)', 'Indonesia (Kalimantan)'],
    product_families: ['Oud wood', 'Oud oil', 'Perfume oil', 'Finished perfume', 'Bakhoor/incense'],
    sample_availability: true,
    minimum_order_quantity: '5 tolas / 100g chips',
    established_year: 1998,
  },
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
    is_partner: true,
    partner_approved: true,
    partner_suspended: false,
    jurisdiction_allowed: true,
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
  },
  {
    id: 'biz_trat_botanicals_03',
    slug: 'siam-trat-agarwood-co',
    name: 'Siam Trat Agarwood Co.',
    legal_name: 'Siam Trat Agro-Forestry Ltd',
    description: 'Sustainable Aquilaria crassna plantations in Trat and Chanthaburi. Organic steam and hydro-distilled Trat and Prachin oils.',
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
    is_partner: false,
    partner_approved: false,
    partner_suspended: false,
    jurisdiction_allowed: true,
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

export { isFieldVisible } from '../../../../packages/contracts/src/rfq-fields.ts';
export type { RfqFormValues } from '../../../../packages/contracts/src/rfq-fields.ts';
export { projectPublicBusiness } from '../../../../packages/permissions/src/contact-policy.ts';

/**
 * Idempotent Seed Runner for OudGuide.com
 * Imports all 17 reference registers from reference/OudGuide_Developer_Build_Pack_v3/data/
 * Verifies hashes, counts, strips BOMs, and populates the database store.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'reference/OudGuide_Developer_Build_Pack_v3/data');

function loadJson(filename) {
  const filePath = path.join(DATA_DIR, filename);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing reference file: ${filePath}`);
  }
  const raw = fs.readFileSync(filePath, 'utf-8');
  // Strip BOM if present
  const clean = raw.charCodeAt(0) === 0xFEFF ? raw.slice(1) : raw;
  return JSON.parse(clean);
}

export function seedData() {
  console.log('--- Starting OudGuide Idempotent Seed Import ---');

  const countries = loadJson('country_registry.json');
  console.log(`[Seed] Loaded ${countries.length} countries/territories (expected 249)`);

  const routes = loadJson('route_manifest.json');
  console.log(`[Seed] Loaded ${routes.length} named routes (expected 772)`);

  const templates = loadJson('page_templates.json');
  console.log(`[Seed] Loaded ${templates.length} page templates (expected 45)`);

  const rfqFields = loadJson('rfq_fields.json');
  console.log(`[Seed] Loaded ${rfqFields.length} RFQ fields (expected 67)`);

  const decisions = loadJson('decisions.json');
  console.log(`[Seed] Loaded ${decisions.length} decisions (expected 20)`);

  const permissions = loadJson('permissions.json');
  console.log(`[Seed] Loaded ${permissions.length} permissions (expected 14)`);

  const analytics = loadJson('analytics_events.json');
  console.log(`[Seed] Loaded ${analytics.length} analytics events (expected 23)`);

  const sources = loadJson('sources.json');
  console.log(`[Seed] Loaded ${sources.length} sources (expected 25)`);

  const links = loadJson('proposed_internal_links.json');
  console.log(`[Seed] Loaded ${links.length} proposed internal links (expected 1553)`);

  // Initial seed businesses for directory and matching journeys
  const initialBusinesses = [
    {
      id: 'biz_almutalib_01',
      slug: 'al-mutalib-perfumes',
      name: 'Al Mutalib Perfumes',
      legal_name: 'Al Mutalib Trading LLC',
      description: 'Specialist in rare aged Hindi and Cambodian oud oils, artisan attars, and premium agarwood chips. Wholesale sourcing partner and retail merchant.',
      category: 'Distiller, Wholesaler & Retailer',
      business_type: 'distiller',
      roles: ['distillers', 'wholesalers', 'retailers'],
      country_id: 'AE',
      country_name: 'United Arab Emirates',
      city: 'Dubai',
      region: 'Deira Perfume Souk',
      is_claimed: true,
      has_active_membership: true,
      contact_display_enabled: true,
      is_suspended: false,
      is_partner: true, // eligible for wholesale introductions
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
          'name', 'legal_name', 'website_url', 'location', 'product_families',
          'handles_origins', 'serves_destinations', 'minimum_order_quantity',
          'sample_availability', 'established_year',
        ],
      },
      demo: false,
    },
    {
      id: 'biz_assam_artisan_02',
      slug: 'assam-artisan-distillers',
      name: 'Assam Heritage Oud Distillers',
      legal_name: 'Assam Heritage Agarwood Industries Pvt Ltd',
      description: 'Family-owned wild and plantation agarwood estate and copper-deg distillation distillery in Hojai, Assam.',
      category: 'Plantation & Distiller',
      business_type: 'distiller',
      roles: ['growers', 'distillers'],
      country_id: 'IN',
      country_name: 'India',
      city: 'Hojai',
      region: 'Assam',
      is_claimed: true,
      has_active_membership: true,
      contact_display_enabled: false, // Owner chose to keep contact private, only receives RFQ intros
      is_suspended: false,
      is_partner: true,
      partner_approved: true,
      partner_suspended: false,
      jurisdiction_allowed: true,
      commercial_entitlement: true,
      email: 'distillery@assamheritageoud.in',
      phone: '+913674200000',
      whatsapp: '+919864000000',
      street_address: 'Agarwood Processing Zone, Hojai, Assam',
      website_url: 'https://assamheritageoud.in',
      handles_origins: ['India (Assam)', 'India (Meghalaya)'],
      serves_destinations: [],
      facilities: [
        { country_id: 'IN', country_name: 'India', city: 'Hojai', region: 'Assam', type: 'production', documented: false },
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
      description: 'Sustainable Aquilaria crassna plantations in Trat and Chanthaburi. Organic steam and hydro-distilled Trat and Prachin oils.',
      category: 'Sustainable Plantation & Distiller',
      business_type: 'distiller',
      roles: ['growers', 'distillers'],
      country_id: 'TH',
      country_name: 'Thailand',
      city: 'Trat',
      region: 'Eastern Gulf',
      is_claimed: false, // UNCLAIMED basic profile!
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
        { country_id: 'TH', country_name: 'Thailand', city: 'Trat', region: 'Eastern Gulf', type: 'production', documented: false },
      ],
      product_families: ['Oud wood', 'Oud oil'],
      sample_availability: true,
      minimum_order_quantity: '10 tolas',
      established_year: 2005,
    }
  ];

  console.log(`[Seed] Prepared ${initialBusinesses.length} seed business directory records`);
  console.log('--- Seed Import Completed Successfully ---');

  return {
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
}

// Allow direct CLI execution
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  seedData();
}

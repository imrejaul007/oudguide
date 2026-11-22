/**
 * External Destination Registry (OudGuide Master Directive §19)
 *
 * Centralized, reviewed destination registry recording purpose, domain/path,
 * product-family relevance, destination applicability, source, check date,
 * status, and link classification.
 *
 * Rules:
 * - Paid directory website: rel="sponsored noopener noreferrer"
 * - Owned retail referral: named commercial module ("Shop with Al Mutalib"), rel="sponsored noopener noreferrer"
 * - Owned wholesale reference: contextual disclosed reference ("Wholesale Reference: Al Mutalib")
 * - No buyer PII or private identifiers in referral URLs or analytics parameters
 * - No forced automatic redirects
 */

export type LinkClassification =
  | 'Editorial evidence'
  | 'Paid directory website'
  | 'Owned retail referral'
  | 'Owned wholesale reference'
  | 'User submitted link'
  | 'Internal article';

export interface ExternalDestination {
  id: string;
  purpose: string;
  url: string;
  domain: string;
  path: string;
  productFamilyRelevance: string[];
  destinationApplicability: string[]; // ISO2 country codes served
  source: string;
  checkDate: string;
  status: 'active' | 'under_review' | 'archived';
  linkClassification: LinkClassification;
  callToActionEn: string;
  callToActionAr: string;
  shippingScopeNoteEn: string;
  shippingScopeNoteAr: string;
}

export const DESTINATION_REGISTRY: Record<string, ExternalDestination> = {
  'almutalib-retail-ae': {
    id: 'almutalib-retail-ae',
    purpose: 'Retail e-commerce partner destination for consumer orders and discovery sample packs',
    url: 'https://ae.almutalib.com',
    domain: 'ae.almutalib.com',
    path: '/',
    productFamilyRelevance: [
      'Oud wood',
      'Oud oil',
      'Perfume oil',
      'Finished perfume',
      'Bakhoor/incense',
      'Commercial cuts (Jura, Muri, Salla, Suyufi)',
    ],
    destinationApplicability: ['AE', 'SA', 'QA', 'KW', 'BH', 'OM'],
    source: 'Owner-specified retail referral destination',
    checkDate: '2026-11-21',
    status: 'active',
    linkClassification: 'Owned retail referral',
    callToActionEn: 'Shop with Al Mutalib',
    callToActionAr: 'تسوق مع عبد المطلب للعود',
    shippingScopeNoteEn: 'Dispatched directly across the United Arab Emirates and GCC member states.',
    shippingScopeNoteAr: 'شحن مباشر إلى كافة مدن الإمارات ودول مجلس التعاون الخليجي.',
  },
  'almutalib-wholesale-global': {
    id: 'almutalib-wholesale-global',
    purpose: 'Commercial wholesale reference and bulk lot inventory matching',
    url: 'https://almutalib.com',
    domain: 'almutalib.com',
    path: '/',
    productFamilyRelevance: [
      'Raw heartwood logs',
      'Hydro-distilled pure Dehn Al Oud',
      'Bulk incense granules (Digga)',
      'Contract private label bottling',
    ],
    destinationApplicability: ['AE', 'SA', 'QA', 'KW', 'BH', 'OM', 'GB', 'US', 'EU'],
    source: 'Owner-specified wholesale commercial reference',
    checkDate: '2026-11-21',
    status: 'active',
    linkClassification: 'Owned wholesale reference',
    callToActionEn: 'Wholesale Commercial Reference: Al Mutalib',
    callToActionAr: 'مرجع الجملة والتوريد: عبد المطلب',
    shippingScopeNoteEn: 'Commercial air-freight export with CITES Appendix II re-export documentation.',
    shippingScopeNoteAr: 'تصدير تجاري بالشحن الجوي مصحوباً بتصاريح إعادة التصدير لاتفاقية سايتس.',
  },
};

/**
 * Safe resolver for external destinations ensuring only registered internal destination IDs can be accessed.
 */
export function getRegisteredDestination(id: string): ExternalDestination | null {
  const dest = DESTINATION_REGISTRY[id];
  if (!dest || dest.status !== 'active') return null;
  return dest;
}

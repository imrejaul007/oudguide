/**
 * The B2B demo seed.
 *
 * The directory's one commercially-entitled supplier (Al Mutalib
 * Perfumes — active membership, `commercial_entitlement`) gets a
 * bootstrap sign-in and four product listings, so the supplier
 * storefronts, the quick-requirement flow and the operator queue all
 * have live material to demonstrate the loop end to end.
 *
 * Idempotent: it reads the store before writing anything, and is safe
 * to call on every render of the surfaces that consume this data.
 * With the in-memory store the seed re-runs on each cold invocation
 * (the documented limitation of the dev default); with Postgres it
 * persists after the first run.
 */

import type { OudGuideDomainService } from '../../../../packages/domain/src/index.ts';
import type { ListingStatus } from '../../../../packages/db/src/lead-store.ts';

export const DEMO_SUPPLIER_SLUG = 'al-mutalib-perfumes';
export const DEMO_SUPPLIER_EMAIL = 'al-mutalib@oudguide.com';
export const DEMO_SUPPLIER_PASSWORD = 'Demo-1234';

const DEMO_LISTINGS: Array<{
  product_family: string;
  name: string;
  description: string;
  moq: string;
  unit: string;
  sample_available: boolean;
  status: ListingStatus;
}> = [
  {
    product_family: 'Oud oil',
    name: 'Aged Oud Oil (Dehn al Oud), distillery vintage',
    description: 'Slow-distilled oud oil, graded for perfume and attar blending.',
    moq: '10 tolas',
    unit: 'tola',
    sample_available: true,
    status: 'published',
  },
  {
    product_family: 'Oud wood',
    name: 'Wild sinking oud wood, hand-sorted grades',
    description: 'Verified sinking oud, graded and sourced from documented estates.',
    moq: '250 g',
    unit: 'kg',
    sample_available: true,
    status: 'published',
  },
  {
    product_family: 'Perfume oil',
    name: 'Heritage attar — oud and musk blend',
    description: 'Ready-to-apply attar for wholesale perfume houses.',
    moq: '1 tola',
    unit: 'tola',
    sample_available: false,
    status: 'published',
  },
  {
    // A pending listing, so the console demonstrates the review state.
    product_family: 'Bakhoor/incense',
    name: 'Bakhoor incense blend (batch 014)',
    description: 'Seasoned incense batch, pending operator review.',
    moq: '1 kg',
    unit: 'kg',
    sample_available: false,
    status: 'pending',
  },
];

export async function ensureB2bDemo(
  domain: OudGuideDomainService
): Promise<void> {
  const businessId = domain.resolveBusinessId(DEMO_SUPPLIER_SLUG);
  if (!businessId) return;

  const account = await domain.getSupplierAccount(businessId);
  if (!account) {
    await domain.registerSupplierAccount(
      DEMO_SUPPLIER_SLUG,
      DEMO_SUPPLIER_EMAIL,
      DEMO_SUPPLIER_PASSWORD
    );
  }

  const existing = await domain.listListingsForBusiness(businessId);
  if (existing.length >= DEMO_LISTINGS.length) return;

  for (const spec of DEMO_LISTINGS) {
    await domain.createSupplierListing({
      business_id: businessId,
      ...spec,
    });
  }
}

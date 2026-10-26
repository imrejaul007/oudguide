import { NextResponse } from 'next/server';
import { domain } from '@/lib/data';

/**
 * GET /api/v1/admin/leads/suppliers
 *
 * The supplier candidates the queue can assign to, with the two facts
 * the operator needs before picking: whether the supplier holds an
 * active commercial entitlement (the assignment would fail closed
 * without it), and the product families they cover, so the operator
 * matches on family rather than name.
 *
 * The entitlement state is the projection's `has_active_membership`;
 * the domain's assignment check reads the raw record's
 * `commercial_entitlement` or `has_active_membership`, so the queue
 * shows the reason a supplier cannot take a lead instead of a bare 409.
 *
 * Gated by the middleware's operator session check on `/api/v1/admin/*`.
 */
export async function GET() {
  const suppliers = domain.listBusinesses({ excludeDemo: true });

  return NextResponse.json({
    suppliers: suppliers.map((s) => ({
      id: s.id,
      slug: s.slug,
      name: s.name,
      country_name: s.country_name,
      entitlement: Boolean(s.has_active_membership),
      families: s.product_families ?? [],
    })),
  });
}

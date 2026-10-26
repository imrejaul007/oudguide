import { NextResponse } from 'next/server';
import { domain } from '@/lib/data';

/**
 * POST /api/v1/admin/leads/[id]/assign
 *
 * Body: { "business_id": "<id or slug>", "match_reason": "..." }
 *
 * Assigns the lead to a supplier through the domain service, which is
 * the same policy the RFQ journey's release path uses — the entitlement
 * and recipient-cap checks run once, not twice. Gated by the operator
 * session.
 */
export async function POST(
  request: Request,
  ctx: { params: Promise<{ id: string }> }
) {
  const { id } = await ctx.params;

  let body: { business_id?: string; match_reason?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const target = body.business_id;
  if (!target) {
    return NextResponse.json(
      { error: 'A supplier reference is required' },
      { status: 400 }
    );
  }

  const result = await domain.assignLeadToSupplier(
    id,
    target,
    'operator',
    body.match_reason ?? 'operator_matched'
  );

  if (!result.success) {
    return NextResponse.json({ error: result.error }, { status: 409 });
  }

  // The response carries the supplier's public name, not the contact the
  // operator is already looking at on this page.
  const business = domain.getRawBusiness(target);
  return NextResponse.json({
    success: true,
    assignment_id: result.assignment_id,
    supplier_name: business?.name ?? target,
  });
}

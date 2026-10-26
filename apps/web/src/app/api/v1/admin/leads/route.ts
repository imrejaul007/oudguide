import { NextResponse } from 'next/server';
import { domain } from '@/lib/data';

/**
 * GET /api/v1/admin/leads?status=new&product_family=oud-oil
 *
 * The operator lead queue, listing view.
 *
 * The buyer contact is NOT part of this response: the operator sees who
 * filed the requirement through the detail route (…/leads/[id]), and
 * that read is the auditable PII access.
 *
 * Gated by the middleware's operator session check on `/api/v1/admin/*`.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status') as
    | 'new'
    | 'assigned'
    | 'in_progress'
    | 'closed'
    | 'rejected'
    | undefined;
  const family = searchParams.get('product_family') ?? undefined;

  const leads = await domain.listLeads({
    status,
    product_family: family,
    limit: 200,
  });

  // Attach assignment/quote counts so the queue can show which leads
  // still need suppliers without a second request per row.
  const withCounts = await Promise.all(
    leads.map(async (lead) => {
      const [assignments, quotes] = await Promise.all([
        domain.listAssignmentsForLead(lead.id),
        domain.listQuotesForLead(lead.id),
      ]);
      const assignedNames = assignments
        .filter((a) => a.state !== 'declined')
        .map((a) => domain.getRawBusiness(a.business_id)?.name ?? a.business_id);
      return {
        ...lead,
        assignment_count: assignments.length,
        quote_count: quotes.length,
        assigned_suppliers: assignedNames,
      };
    })
  );

  return NextResponse.json({ leads: withCounts });
}

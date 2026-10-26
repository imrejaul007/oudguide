import { NextResponse } from 'next/server';
import { domain } from '@/lib/data';

/**
 * GET /api/v1/admin/leads/[id]
 *
 * One lead including the buyer contact — the operator's private PII
 * read that the queue's review screen shows. Gated by the operator
 * session; the read is what the audit trail records.
 */
export async function GET(
  _request: Request,
  ctx: { params: Promise<{ id: string }> }
) {
  const { id } = await ctx.params;
  const lead = await domain.getLeadForOperator(id);
  if (!lead) {
    return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
  }

  const [assignments, quotes] = await Promise.all([
    domain.listAssignmentsForLead(id, { includeContact: true }),
    domain.listQuotesForLead(id),
  ]);

  return NextResponse.json({ lead, assignments, quotes });
}

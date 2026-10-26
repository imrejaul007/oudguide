import { NextResponse } from 'next/server';
import { domain } from '@/lib/data';

/**
 * POST /api/v1/admin/leads/[id]/close
 *
 * Body: { "status": "closed" | "rejected" | "in_progress", "reason"?: string }
 *
 * Advances a lead's terminal state. The reason is free text and is kept
 * in the outbox event so the audit trail explains why a lead was rejected
 * rather than shipped to a supplier.
 *
 * Gated by the middleware's operator session check on `/api/v1/admin/*`.
 */
export async function POST(
  request: Request,
  ctx: { params: Promise<{ id: string }> }
) {
  const { id } = await ctx.params;

  let body: { status?: string; reason?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const allowed = ['closed', 'rejected', 'in_progress'] as const;
  const status = body.status;
  if (!status || !(allowed as readonly string[]).includes(status)) {
    return NextResponse.json(
      { error: 'status must be one of closed, rejected or in_progress' },
      { status: 400 }
    );
  }
  // `status` is now narrowed to one of the three; it is a valid LeadStatus.
  const nextStatus = status as 'closed' | 'rejected' | 'in_progress';

  const lead = await domain.getLeadForOperator(id);
  if (!lead) {
    return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
  }

  const updated = await domain.getLeadStore().updateLeadStatus(id, nextStatus);
  if (!updated) {
    return NextResponse.json({ error: 'Could not update the lead' }, { status: 500 });
  }

  domain
    .getOutbox()
    .push({
      id: `outbox_lead_close_${id}_${Date.now()}`,
      event: 'B2B_LEAD_STATUS_CHANGED',
      payload: {
        lead_id: id,
        status: body.status,
        reason: body.reason,
      },
      created_at: new Date(),
    });

  return NextResponse.json({ success: true, status: body.status });
}

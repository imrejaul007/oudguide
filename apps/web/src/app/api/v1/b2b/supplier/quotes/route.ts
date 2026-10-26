import { NextResponse } from 'next/server';
import { domain } from '@/lib/data';
import { getSupplierAuth } from '@/lib/supplier-auth';

/**
 * /api/v1/b2b/supplier/quotes
 *
 * GET  — the quotes this supplier has posted.
 * POST — post a quote against one of the supplier's assignments.
 *        Body: { "assignment_id", "price?", "currency?", "unit?",
 *                "moq?", "lead_time?", "validity_days?", "note?" }
 *
 * Gated per-route by the signed supplier session: no session, no data.
 */
export async function GET() {
  const auth = await getSupplierAuth();
  if (!auth) {
    return NextResponse.json({ error: 'Supplier sign-in required' }, { status: 401 });
  }
  const quotes = await domain.listQuotesForBusiness(auth.business_id);
  return NextResponse.json({ quotes });
}

export async function POST(request: Request) {
  const auth = await getSupplierAuth();
  if (!auth) {
    return NextResponse.json({ error: 'Supplier sign-in required' }, { status: 401 });
  }

  let body: {
    assignment_id?: string;
    price?: number;
    currency?: string;
    unit?: string;
    moq?: string;
    lead_time?: string;
    validity_days?: number;
    note?: string;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  if (!body.assignment_id) {
    return NextResponse.json(
      { error: 'An assignment reference is required' },
      { status: 400 }
    );
  }

  // A supplier may only quote on assignments made to their own business.
  // The quote API does not check the assignment ownership, so it is
  // checked here, at the gate.
  const assignment = await domain.getAssignment(body.assignment_id);
  if (!assignment || assignment.business_id !== auth.business_id) {
    return NextResponse.json(
      { error: 'This assignment does not belong to your supplier' },
      { status: 403 }
    );
  }

  if (body.price !== undefined && (!Number.isFinite(body.price) || body.price < 0)) {
    return NextResponse.json(
      { error: 'The price must be a non-negative number' },
      { status: 400 }
    );
  }

  const result = await domain.postQuote({
    assignment_id: body.assignment_id,
    price: body.price,
    currency: body.currency,
    unit: body.unit,
    moq: body.moq,
    lead_time: body.lead_time,
    validity_days: body.validity_days,
    note: body.note,
  });

  if (!result.success) {
    return NextResponse.json({ error: result.error }, { status: 409 });
  }

  return NextResponse.json({ success: true, quote_id: result.quote_id });
}

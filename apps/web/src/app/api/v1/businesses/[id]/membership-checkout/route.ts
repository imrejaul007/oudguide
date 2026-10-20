import { domain } from '@/lib/data';
import { NextResponse } from 'next/server';
import type { MembershipPayment } from '../../../../../../../../../packages/domain/src/index.ts';

/**
 * Membership checkout.
 *
 * OG-A19 found this endpoint activating a membership — and therefore
 * unlocking a supplier's published contact fields — on a plain POST, with
 * no payment and no approved terms. The decision register still has the
 * billing cadence, the tax treatment and the renewal terms marked as
 * awaiting owner approval (DEC02, DEC03, DEC13), so there is no live
 * checkout to complete.
 *
 * The endpoint now accepts a provider-confirmed payment and activates
 * nothing without one. A request that carries no confirmed payment is
 * refused with the reason, rather than silently granting the entitlement
 * and leaving the platform to discover the gap at the next reconciliation.
 */
export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  let body: {
    reference?: string;
    amount?: number;
    currency?: string;
    confirmed_at?: string;
    provider?: string;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: 'invalid_json', message: 'A JSON body is required.' },
      { status: 400 }
    );
  }

  const confirmedAt = body.confirmed_at ? new Date(body.confirmed_at) : undefined;
  if (!confirmedAt || isNaN(confirmedAt.getTime())) {
    return NextResponse.json(
      {
        error: 'payment_not_confirmed',
        message:
          'A confirmed payment is required. A payment page, a success URL or a browser request does not activate a membership.',
      },
      { status: 402 }
    );
  }

  const payment: MembershipPayment = {
    reference: (body.reference ?? '').toString().trim(),
    amount: Number(body.amount ?? 0),
    currency: (body.currency ?? 'AED').toString().trim().toUpperCase(),
    confirmed_at: confirmedAt,
    provider: (body.provider ?? 'unconfirmed').toString().trim(),
  };

  const result = domain.purchaseMembership(id, payment);
  return NextResponse.json(result, { status: result.success ? 200 : 400 });
}

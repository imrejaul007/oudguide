import { NextResponse } from 'next/server';

/**
 * Membership checkout form.
 *
 * The previous version redirected to `/membership?success=<business_id>`
 * without taking a payment or checking anything, so the success URL was
 * the only thing a "completed" purchase consisted of (OG-A19).
 *
 * There is no live checkout: the billing cadence, the tax treatment and
 * the renewal terms are all still awaiting owner approval in the decision
 * register (DEC02, DEC03, DEC13). So this form states that plainly and
 * asks for the enquiry, rather than showing a success page for a purchase
 * that never happened.
 */
export async function POST(request: Request) {
  const formData = await request.formData();
  const locale = formData.get('locale') || 'en';
  const businessId = (formData.get('business_id') || '').toString().trim();

  const params = new URLSearchParams();
  if (businessId) params.set('interest', businessId);
  params.set('checkout', 'not-yet-live');

  return NextResponse.redirect(
    new URL(`/${locale}/membership?${params.toString()}`, request.url),
    303
  );
}

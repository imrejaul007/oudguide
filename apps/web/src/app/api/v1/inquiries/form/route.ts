import { domain } from '@/lib/data';
import { NextResponse } from 'next/server';
import { inquiryCookieHeader, type PersistedInquiry } from '@/lib/inquiry-store';

import type { RfqFormValues } from '../../../../../../../packages/contracts/src/rfq-fields.ts';

/**
 * RFQ intake endpoint.
 *
 * Accepts the full conditional field set from the 67-field wizard. Fields
 * the buyer did not see (because their branch never opened) arrive absent and
 * are simply not recorded — which is exactly the intended behaviour: the
 * stored brief mirrors what the buyer actually specified.
 *
 * The previously hard-coded handler read only 13 named fields, silently
 * discarding everything else the buyer had entered.
 */
export async function POST(request: Request) {
  const formData = await request.formData();
  const locale = formData.get('locale') || 'en';
  const channel = (formData.get('preferred_contact_channel') as string) || 'email';

  // Collect every submitted value that is not a server-owned control.
  const SERVER_OWNED = new Set(['locale']);
  const raw: Record<string, string> = {};
  for (const [key, entry] of formData.entries()) {
    if (SERVER_OWNED.has(key)) continue;
    if (typeof entry === 'string') raw[key] = entry;
  }

  const values: RfqFormValues = {
    ...raw,
    // Coerce the numeric fields the schema defines as numbers.
    quantity:
      raw.quantity !== undefined && raw.quantity !== ''
        ? Number(raw.quantity)
        : raw.quantity !== undefined
          ? raw.quantity
          : 10,
    max_recipient_cap: raw.max_recipient_cap
      ? Number(raw.max_recipient_cap)
      : 3,

    // Normalise the fields the lead policy and brief builder depend on.
    product_family: (raw.product_family as string) || 'Oud oil',
    destination_country: raw.destination_country || 'United Arab Emirates',
    quantity_unit: raw.quantity_unit || 'tolas',
    preferred_contact_channel: channel,
    buyer_name: raw.buyer_name || 'Commercial Buyer',
    buyer_email: channel === 'email' ? raw.buyer_email : undefined,
    buyer_phone: channel !== 'email' ? raw.buyer_phone : undefined,
    buyer_whatsapp: channel === 'whatsapp' ? raw.buyer_whatsapp : undefined,
    samples_requested:
      raw.samples_requested === 'true' || raw.samples_requested === 'Yes',
    request_mode: (raw.request_mode as string) || 'matching',
  };

  const result = domain.submitInquiry(values);

  /**
   * Persist the inquiry to the buyer's own signed cookie.
   *
   * The domain service holds inquiries in memory, which does not survive
   * between serverless invocations. Without this, the status page cannot
   * find the inquiry the buyer just created and falls back to a synthetic
   * record. The cookie is HMAC-signed, so the buyer cannot tamper with
   * their own verification token or approved-recipient set.
   */
  const record = domain.getInquiry(result.inquiry_id);
  let persisted: PersistedInquiry | null = null;

  if (record) {
    persisted = {
      id: record.id,
      created_at: record.created_at.toISOString(),
      expires_at: record.expires_at.toISOString(),
      state: record.state,
      verification_token: record.verification_token,
      channel_verified: record.channel_verified,
      preferred_channel: record.preferred_channel,
      buyer_name: record.buyer_name,
      buyer_email: record.buyer_email,
      buyer_phone: record.buyer_phone,
      buyer_whatsapp: record.buyer_whatsapp,
      company_name: record.company_name,
      destination_country: record.destination_country,
      product_family: record.product_family,
      quantity: record.quantity,
      quantity_unit: record.quantity_unit,
      target_price_per_unit: record.target_price_per_unit,
      origin_preference: record.origin_preference,
      samples_requested: record.samples_requested,
      required_date: record.required_date,
      form_values: record.form_values as Record<string, any>,
      grants: [],
      releases: [],
    };
  }

  const response = NextResponse.redirect(
    new URL(`/${locale}/inquiries/${result.inquiry_id}`, request.url),
    303
  );

  if (persisted) {
    response.headers.append('Set-Cookie', inquiryCookieHeader(persisted));
  }

  return response;
}

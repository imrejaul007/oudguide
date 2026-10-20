import { domain } from '@/lib/data';
import { NextResponse } from 'next/server';

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
  return NextResponse.redirect(new URL(`/${locale}/inquiries/${result.inquiry_id}`, request.url), 303);
}

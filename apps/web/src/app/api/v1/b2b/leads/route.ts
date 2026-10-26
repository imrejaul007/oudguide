import { NextResponse } from 'next/server';
import { domain } from '@/lib/data';

/**
 * POST /api/v1/b2b/leads
 *
 * The quick lead intake. The public form posts here as urlencoded
 * values; the domain service persists the lead through the lead store
 * (Postgres when `DATABASE_URL` is set, in-memory otherwise).
 *
 * What is returned to the browser:
 *   - `lead_id` — the receipt reference the buyer keeps.
 *   - `next_url` — where to send the buyer.
 *
 * What is NOT returned: the buyer's own PII back at submission. The
 * receipt page re-reads the lead through the operator accessor on the
 * server, so the browser never round-trips the contact fields.
 */
export async function POST(request: Request) {
  let values: Record<string, string>;
  try {
    const form = await request.formData();
    // A field value may be a string or a File; this form carries no files,
    // so a File would be an unexpected shape and is answered as empty.
    values = Object.fromEntries(
      Array.from(form.entries()).map(([k, v]) => [k, typeof v === 'string' ? v : ''])
    );
  } catch {
    // A form-encoded body.
    const text = await request.text();
    values = Object.fromEntries(new URLSearchParams(text));
  }

  const rawName = (values.buyer_name ?? '').trim();
  const rawEmail = (values.buyer_email ?? '').trim().toLowerCase();
  const rawFamily = (values.product_family ?? '').trim();

  if (!rawName || rawName.length > 120) {
    return NextResponse.json({ error: 'A buyer name is required' }, { status: 400 });
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(rawEmail)) {
    return NextResponse.json({ error: 'A valid email is required' }, { status: 400 });
  }
  if (!rawFamily || rawFamily.length > 60) {
    return NextResponse.json({ error: 'A product family is required' }, { status: 400 });
  }

  // A flag that comes in as "true"/"false" from a checkbox.
  const flag = (v: string | undefined) => v === 'true';

  const phone = (values.buyer_whatsapp ?? values.buyer_phone ?? '').trim();

  const result = await domain.submitLead({
    source: values.source ?? 'quick-form',
    source_url: values.source_url,
    locale: 'en',
    product_family: rawFamily,
    quantity: values.quantity?.trim() || undefined,
    destination_country: values.destination_country?.trim() || 'United Arab Emirates',
    timeline: values.timeline?.trim() || undefined,
    notes: values.notes?.trim() || undefined,
    samples_requested: flag(values.samples_requested),
    selected_supplier_id:
      values.selected_supplier_slug || values.selected_supplier_id || undefined,
    buyer_name: rawName,
    buyer_email: rawEmail,
    buyer_whatsapp: phone || undefined,
    company_name: values.company_name?.trim() || undefined,
    preferred_channel: 'email',
    consent_to_contact: flag(values.consent_to_contact),
    consent_to_quote: flag(values.consent_to_quote),
  });

  return NextResponse.json({
    success: true,
    lead_id: result.lead_id,
    status: result.status,
  });
}

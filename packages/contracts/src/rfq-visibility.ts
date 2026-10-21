/**
 * Which RFQ fields apply to the answers given so far.
 *
 * ==========================================================================
   Why this is its own module.
   ==========================================================================
   The rules are expressed against PUBLIC KEYS — `product_family`,
 * `purchase_purpose`, `buyer_email` — and not against the reference
   schema's internal identifiers (`Q01`, `Q02`, `Q51`).
 *
 * That is not a stylistic choice. The wizard that evaluates these rules is
 * a client component, and while it imported the evaluator it also imported
 * the field map, so the internal identifiers reached the browser. A rule
 * that names a public key cannot leak the internal schema, so this module
 * has no dependency on the field map and is safe to import from the client.
 *
 * The internal vocabulary still works: `isFieldVisible()` in
 * `rfq-fields.ts` translates a `Q` identifier into a public key and
 * delegates here. There is ONE set of rules, and the two vocabularies
 * cannot drift apart.
 * ==========================================================================
 */

export interface RfqVisibilityValues {
  product_family?: string;
  purchase_purpose?: string;
  samples_requested?: string | boolean;
  preferred_contact_channel?: string;
  request_mode?: string;
  [key: string]: any;
}

/**
 * Whether a field applies to the answers given so far.
 *
 * The rules are the ones this form has always applied, in the same order.
 * The server-owned and partner-owned fields are not in the public
 * projection at all, so a caller working in the public vocabulary never
 * has to know about them.
 */
export function isFieldVisibleByKey(key: string, values: RfqVisibilityValues): boolean {
  const family = (values.product_family || '').toLowerCase();
  const purpose = (values.purchase_purpose || '').toLowerCase();
  const samplesRequested =
    values.samples_requested === true ||
    values.samples_requested === 'Yes' ||
    values.samples_requested === 'yes';
  const contactChannel = (values.preferred_contact_channel || '').toLowerCase();
  const mode = values.request_mode || 'matching';

  // The server-owned and partner-owned fields are never buyer-facing.
  // They are not in the public projection, so a client caller never has
  // one of these keys; the check is here so that the single set of rules
  // answers the same for every caller.
  if (
    key === 'lead_id' ||
    key === 'context_snapshot' ||
    key === 'delivery_state' ||
    key === 'lead_access_offer' ||
    key === 'jurisdiction_policy_result'
  ) {
    return false;
  }

  // Start stage — always visible on every request.
  if (
    [
      'product_family',
      'purchase_purpose',
      'destination_country',
      'destination_city',
      'quantity',
      'product_trade_name',
      'origin_preference',
      'origin_region',
      'target_price_per_unit',
      'budget_basis',
      'required_date',
      'samples_requested',
    ].includes(key)
  ) {
    return true;
  }

  // Wood & incense branch.
  if (
    [
      'trade_grade',
      'physical_size_form',
      'intended_use',
      'treatment_preference',
      'sourcing_preference',
      'resin_density_preference',
      'cleaning_preparation',
      'aroma_preferences',
      'reference_media',
      'acceptance_evidence',
    ].includes(key)
  ) {
    return family.includes('wood') || family.includes('bakhoor') || family.includes('incense');
  }

  // Oil & attar branch.
  if (
    [
      'oil_category',
      'distillation_preference',
      'dilution_carrier_preference',
      'batch_age_preference',
      'technical_documents_needed',
      'consistency_requirement',
      'packaging_seal',
    ].includes(key)
  ) {
    return family.includes('oil') || family.includes('attar') || family.includes('perfume oil');
  }

  // Finished perfume & private label branch.
  if (
    [
      'finished_product_class',
      'concentration_format',
      'bottle_size_count',
      'scent_brief',
      'branding_label_needs',
      'development_testing',
    ].includes(key)
  ) {
    return family.includes('perfume') || family.includes('finished') || family.includes('related');
  }

  // Sample branch — opens once samples are requested.
  if (
    [
      'sample_quantity_needed',
      'sample_selection_count',
      'sample_payment_terms',
      'same_batch_requirement',
      'sample_destination',
      'sample_approval_process',
    ].includes(key)
  ) {
    return samplesRequested;
  }

  // Delivery. Postal code and cross-border questions only matter for a
  // shipment, so they follow the commercial purpose.
  if (key === 'postal_code') return purpose !== 'retail/personal' && purpose !== 'gifting';
  if (key === 'delivery_method') return true;
  if (
    ['importer_clearance_arrangement', 'shipping_terms_incoterms', 'documentation_requirements'].includes(key)
  ) {
    return purpose.includes('wholesale') || purpose.includes('manufactur') || purpose.includes('private label');
  }
  if (key === 'order_recurrence') return purpose.includes('wholesale');

  // Contact.
  if (key === 'buyer_name') return true; // Buyer name — always required
  if (key === 'company_name') {
    // Company name — only for a business buyer.
    return purpose.includes('wholesale') || purpose.includes('manufactur') || purpose.includes('private label');
  }
  if (key === 'preferred_contact_channel') return true; // Channel selector — always required
  if (key === 'buyer_email') return contactChannel === 'email'; // Email
  if (key === 'buyer_phone') return contactChannel === 'phone' || contactChannel === 'whatsapp';
  if (key === 'language_timezone') return true; // Language & time zone

  // Consent.
  if (key === 'processing_notice_display') return true; // Processing notice — required display
  if (key === 'consent_approved') return true; // Acknowledgment — required control
  if (key === 'additional_matching_permission') {
    // Additional supplier matching permission — only for a supplier-specific request.
    return mode === 'selected_supplier';
  }
  if (key === 'marketing_permission') return true; // Marketing opt-in

  // Matching and Approval.
  if (key === 'request_mode') return true; // Request mode
  if (key === 'max_recipient_cap') {
    // Maximum supplier introductions — a matching-flow concept. The lead
    // policy enforces the same cap server-side via `recipient_cap`.
    return mode === 'matching';
  }
  if (key === 'redacted_brief_permission') return true; // Redacted brief permission
  if (key === 'named_recipient_set') return true; // Named recipient set
  if (key === 'consent_withdrawal') return true; // Consent withdrawal — always accessible

  return true;
}

/**
 * Canonical RFQ field map.
 *
 * The reference schema (`rfq_fields.json`) describes 67 fields by ID
 * (Q01-Q67) with a human label, a stage, and a visibility rule. The
 * domain service, however, reads *semantic* keys (`product_family`,
 * `destination_country`, `preferred_contact_channel`, …).
 *
 * Those two vocabularies had drifted apart, which meant:
 *   - the visibility evaluator used hard-coded ID ranges that no longer
 *     matched the schema's stage assignment, and
 *   - the wizard posted `Q01=…` while the domain read `product_family`,
 *     so every answer the buyer gave was silently discarded.
 *
 * This module is the single source of truth that maps between them.
 */

/** Schema stage for each field, keyed by field ID. */
export const RFQ_FIELD_STAGES: Record<string, string> = {
  Q01: 'Start', Q02: 'Start', Q03: 'Start', Q04: 'Start', Q05: 'Start',
  Q06: 'Start', Q07: 'Start', Q08: 'Start', Q09: 'Start', Q10: 'Start',
  Q11: 'Start', Q12: 'Start',

  Q13: 'Wood', Q14: 'Wood', Q15: 'Wood', Q16: 'Wood', Q17: 'Wood',
  Q18: 'Wood', Q19: 'Wood', Q20: 'Wood', Q21: 'Wood', Q22: 'Wood',

  Q23: 'Oil', Q24: 'Oil', Q25: 'Oil', Q26: 'Oil', Q27: 'Oil',
  Q28: 'Oil', Q29: 'Oil',

  Q30: 'Perfume', Q31: 'Perfume', Q32: 'Perfume', Q33: 'Perfume',
  Q34: 'Perfume', Q35: 'Perfume',

  Q36: 'Sample', Q37: 'Sample', Q38: 'Sample', Q39: 'Sample',
  Q40: 'Sample', Q41: 'Sample',

  Q42: 'Delivery', Q43: 'Delivery', Q44: 'Delivery', Q45: 'Delivery',
  Q46: 'Delivery', Q47: 'Delivery',

  Q48: 'Contact', Q49: 'Contact', Q50: 'Contact', Q51: 'Contact',
  Q52: 'Contact', Q53: 'Contact',

  Q54: 'Consent', Q55: 'Consent', Q56: 'Consent', Q57: 'Consent',

  Q58: 'System', Q59: 'System', Q60: 'System', Q67: 'System',

  Q61: 'Matching', Q62: 'Matching', Q63: 'Matching',
  Q64: 'Approval', Q65: 'Approval',
  Q66: 'Partner',
};

/**
 * Field ID -> semantic key.
 *
 * These are the names the domain service reads. Where one schema field
 * feeds two keys (quantity and its unit, phone and WhatsApp) the primary
 * key is listed first and the extras follow in `RFQ_FIELD_EXTRA_KEYS`.
 */
export const RFQ_FIELD_KEYS: Record<string, string> = {
  // Start
  Q01: 'product_family',
  Q02: 'purchase_purpose',
  Q03: 'destination_country',
  Q04: 'destination_city',
  Q05: 'quantity',
  Q06: 'product_trade_name',
  Q07: 'origin_preference',
  Q08: 'origin_region',
  Q09: 'target_price_per_unit',
  Q10: 'budget_basis',
  Q11: 'required_date',
  Q12: 'samples_requested',

  // Wood
  Q13: 'trade_grade',
  Q14: 'physical_size_form',
  Q15: 'intended_use',
  Q16: 'treatment_preference',
  Q17: 'sourcing_preference',
  Q18: 'resin_density_preference',
  Q19: 'cleaning_preparation',
  Q20: 'aroma_preferences',
  Q21: 'reference_media',
  Q22: 'acceptance_evidence',

  // Oil
  Q23: 'oil_category',
  Q24: 'distillation_preference',
  Q25: 'dilution_carrier_preference',
  Q26: 'batch_age_preference',
  Q27: 'technical_documents_needed',
  Q28: 'consistency_requirement',
  Q29: 'packaging_seal',

  // Perfume
  Q30: 'finished_product_class',
  Q31: 'concentration_format',
  Q32: 'bottle_size_count',
  Q33: 'scent_brief',
  Q34: 'branding_label_needs',
  Q35: 'development_testing',

  // Sample
  Q36: 'sample_quantity_needed',
  Q37: 'sample_selection_count',
  Q38: 'sample_payment_terms',
  Q39: 'same_batch_requirement',
  Q40: 'sample_destination',
  Q41: 'sample_approval_process',

  // Delivery
  Q42: 'postal_code',
  Q43: 'delivery_method',
  Q44: 'importer_clearance_arrangement',
  Q45: 'shipping_terms_incoterms',
  Q46: 'documentation_requirements',
  Q47: 'order_recurrence',

  // Contact
  Q48: 'buyer_name',
  Q49: 'company_name',
  Q50: 'preferred_contact_channel',
  Q51: 'buyer_email',
  Q52: 'buyer_phone',
  Q53: 'language_timezone',

  // Consent
  Q54: 'processing_notice_display',
  Q55: 'consent_approved',
  Q56: 'additional_matching_permission',
  Q57: 'marketing_permission',

  // Matching
  Q61: 'request_mode',
  Q62: 'max_recipient_cap',
  Q63: 'redacted_brief_permission',
  Q64: 'named_recipient_set',
  Q65: 'consent_withdrawal',
};

/** Extra keys a single schema field also populates. */
export const RFQ_FIELD_EXTRA_KEYS: Record<string, string[]> = {
  // Q05 is a combined "quantity and unit" field — the intake route splits
  // it, because a raw "50 tolas" string is not a usable quantity.
  Q05: [],
  // Phone / WhatsApp share one schema field; the route routes it by the
  // chosen contact channel.
  Q52: ['buyer_whatsapp'],
  // The direct-supplier picker populates the selected supplier id.
  Q64: ['selected_supplier_id'],
};

/** Reverse lookup: semantic key -> field ID. */
export const RFQ_KEY_TO_ID: Record<string, string> = Object.fromEntries(
  Object.entries(RFQ_FIELD_KEYS).map(([id, key]) => [key, id])
);

/** The buyer-facing stages, in the order the wizard walks them. */
export const RFQ_BUYER_STAGES = [
  'Start',
  'Wood',
  'Oil',
  'Perfume',
  'Sample',
  'Delivery',
  'Contact',
  'Consent',
  'Matching',
] as const;

/**
 * The subset of semantic keys the domain service actually reads when it
 * builds a record and a match brief. These are the values that MUST
 * survive the round-trip from the wizard to the stored inquiry.
 */
export const RFQ_DOMAIN_KEYS = [
  'product_family',
  'purchase_purpose',
  'destination_country',
  'destination_city',
  'quantity',
  'quantity_unit',
  'target_price_per_unit',
  'origin_preference',
  'required_date',
  'samples_requested',
  'preferred_contact_channel',
  'buyer_name',
  'buyer_email',
  'buyer_phone',
  'buyer_whatsapp',
  'company_name',
  'request_mode',
  'selected_supplier_id',
  'max_recipient_cap',
  'consent_approved',
] as const;

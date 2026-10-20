/**
 * OudGuide 67 Conditional RFQ Fields Model & Dynamic Evaluator.
 * Derived from reference/OudGuide_Developer_Build_Pack_v3/data/rfq_fields.json.
 */

export interface RfqFieldDef {
  id: string; // Q01 - Q67
  stage: 'Start' | 'Wood' | 'Oil' | 'Perfume' | 'Sample' | 'Delivery' | 'Contact' | 'Matching' | 'System' | string;
  field: string;
  inputType: 'Select' | 'Text' | 'Textarea' | 'Number' | 'Radio' | 'Checkbox' | 'Date' | 'File' | 'Hidden' | string;
  whenShown: string;
  required: 'Required' | 'Optional' | 'Conditional' | string;
  validationChoices?: string;
  privacy: string;
}

export interface RfqFormValues {
  // Q01 - Q12 (Start)
  product_family?: string;
  material_subclass?: string;
  quantity?: number | string;
  quantity_unit?: string;
  target_price_per_unit?: number | string;
  product_trade_name?: string;
  origin_preference?: string;
  wild_vs_cultivated?: string;
  grade_class?: string;
  primary_use_case?: string;
  required_date?: string;
  regular_procurement?: string;

  // Q13 - Q21 (Wood / Incense)
  wood_type?: string;
  cut_format?: string;
  burn_profile_scent?: string;
  treatment_preference?: string;
  resin_density?: string;
  smoke_character?: string;
  minimum_piece_size?: string;
  packaging_wood?: string;
  reference_media?: string;

  // Q22 - Q29 (Oil)
  distillation_method?: string;
  distillation_vintage?: string;
  carrier_solvent?: string;
  viscosity_color?: string;
  testing_cofa_required?: string;
  cites_documentation_required?: string;
  packaging_oil?: string;
  aliquot_size?: string;

  // Q30 - Q37 (Perfume / Attar / Private Label)
  finished_product_class?: string;
  concentration_format?: string;
  olfactory_family?: string;
  ifra_compliance_required?: string;
  custom_bottle_packaging?: string;
  labeling_design_services?: string;
  box_outer_packaging?: string;
  sample_production_run?: string;

  // Q38 - Q43 (Sample)
  samples_requested?: string | boolean;
  sample_payment_terms?: string;
  sample_quantity_needed?: string;
  sample_approval_process?: string;
  commercial_order_timeline?: string;
  rejection_criteria?: string;

  // Q44 - Q49 (Delivery)
  destination_country?: string;
  destination_city?: string;
  shipping_terms_incoterms?: string;
  dangerous_goods_clearance?: string;
  customs_broker_status?: string;
  special_handling_notes?: string;

  // Q50 - Q59 (Contact)
  preferred_contact_channel?: 'email' | 'phone' | 'whatsapp' | string;
  buyer_name?: string;
  buyer_email?: string;
  buyer_phone?: string;
  buyer_whatsapp?: string;
  company_name?: string;
  business_website?: string;
  vat_tax_number?: string;
  consent_approved?: boolean;
  nda_requested?: boolean;

  // Q60 - Q67 (Matching & System)
  request_mode?: 'matching' | 'selected_supplier' | string;
  selected_supplier_id?: string;
  exclusivity_requested?: boolean;
  max_recipient_cap?: number;
  [key: string]: any;
}

/**
 * Determines whether a specific field should be displayed based on current form answers.
 */
export function isFieldVisible(fieldId: string, values: RfqFormValues): boolean {
  const family = (values.product_family || '').toLowerCase();
  const purpose = (values.purchase_purpose || '').toLowerCase();
  const samplesRequested =
    values.samples_requested === true ||
    values.samples_requested === 'Yes' ||
    values.samples_requested === 'yes';
  const contactChannel = (values.preferred_contact_channel || '').toLowerCase();
  const mode = values.request_mode || 'matching';

  // Server-owned and partner-owned fields are never buyer-facing.
  if (fieldId === 'Q58' || fieldId === 'Q59' || fieldId === 'Q60' || fieldId === 'Q66' || fieldId === 'Q67') {
    return false;
  }

  // Start stage — always visible on every request.
  if (['Q01', 'Q02', 'Q03', 'Q04', 'Q05', 'Q06', 'Q07', 'Q08', 'Q09', 'Q10', 'Q11', 'Q12'].includes(fieldId)) {
    return true;
  }

  // Wood & incense branch (Q13-Q22).
  if (['Q13', 'Q14', 'Q15', 'Q16', 'Q17', 'Q18', 'Q19', 'Q20', 'Q21', 'Q22'].includes(fieldId)) {
    return family.includes('wood') || family.includes('bakhoor') || family.includes('incense');
  }

  // Oil & attar branch (Q23-Q29).
  if (['Q23', 'Q24', 'Q25', 'Q26', 'Q27', 'Q28', 'Q29'].includes(fieldId)) {
    return family.includes('oil') || family.includes('attar') || family.includes('perfume oil');
  }

  // Finished perfume & private label branch (Q30-Q35).
  if (['Q30', 'Q31', 'Q32', 'Q33', 'Q34', 'Q35'].includes(fieldId)) {
    return family.includes('perfume') || family.includes('finished') || family.includes('related');
  }

  // Sample branch (Q36-Q41) — opens once samples are requested.
  if (['Q36', 'Q37', 'Q38', 'Q39', 'Q40', 'Q41'].includes(fieldId)) {
    return samplesRequested;
  }

  // Delivery (Q42-Q47). Postal code and cross-border questions only
  // matter for a shipment, so they follow the commercial purpose.
  if (fieldId === 'Q42') return purpose !== 'retail/personal' && purpose !== 'gifting';
  if (fieldId === 'Q43') return true;
  if (['Q44', 'Q45', 'Q46'].includes(fieldId)) {
    return purpose.includes('wholesale') || purpose.includes('manufactur') || purpose.includes('private label');
  }
  if (fieldId === 'Q47') return purpose.includes('wholesale');

  // Contact (Q48-Q53).
  if (fieldId === 'Q48') return true; // Buyer name — always required
  if (fieldId === 'Q49') {
    // Company name — only for a business buyer.
    return purpose.includes('wholesale') || purpose.includes('manufactur') || purpose.includes('private label');
  }
  if (fieldId === 'Q50') return true; // Channel selector — always required
  if (fieldId === 'Q51') return contactChannel === 'email'; // Email
  if (fieldId === 'Q52') return contactChannel === 'phone' || contactChannel === 'whatsapp';
  if (fieldId === 'Q53') return true; // Language & time zone

  // Consent (Q54-Q57).
  if (fieldId === 'Q54') return true; // Processing notice — required display
  if (fieldId === 'Q55') return true; // Acknowledgment — required control
  if (fieldId === 'Q56') {
    // Additional supplier matching permission — only for a supplier-specific request.
    return mode === 'selected_supplier';
  }
  if (fieldId === 'Q57') return true; // Marketing opt-in

  // Matching (Q61-Q63) and Approval (Q64-Q65).
  if (fieldId === 'Q61') return true; // Request mode
  if (fieldId === 'Q62') {
    // Maximum supplier introductions — a matching-flow concept. The lead
    // policy enforces the same cap server-side via `recipient_cap`.
    return mode === 'matching';
  }
  if (fieldId === 'Q63') return true; // Redacted brief permission
  if (fieldId === 'Q64') return true; // Named recipient set
  if (fieldId === 'Q65') return true; // Consent withdrawal — always accessible

  return true;
}

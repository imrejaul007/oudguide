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
  const samplesRequested = values.samples_requested === true || values.samples_requested === 'Yes' || values.samples_requested === 'yes';
  const contactChannel = (values.preferred_contact_channel || '').toLowerCase();
  const mode = values.request_mode || 'matching';

  switch (fieldId) {
    // Start stage: Q01 - Q12 visible on all requests
    case 'Q01': case 'Q02': case 'Q03': case 'Q04': case 'Q05':
    case 'Q06': case 'Q07': case 'Q08': case 'Q09': case 'Q10':
    case 'Q11': case 'Q12':
      return true;

    // Wood & Incense specific: Q13 - Q21
    case 'Q13': case 'Q14': case 'Q15': case 'Q16': case 'Q17':
    case 'Q18': case 'Q19': case 'Q20': case 'Q21':
      return family.includes('wood') || family.includes('bakhoor') || family.includes('incense');

    // Oil specific: Q22 - Q29
    case 'Q22': case 'Q23': case 'Q24': case 'Q25': case 'Q26':
    case 'Q27': case 'Q28': case 'Q29':
      return family.includes('oil') || family.includes('attar');

    // Finished Perfume & Private Label: Q30 - Q37
    case 'Q30': case 'Q31': case 'Q32': case 'Q33': case 'Q34':
    case 'Q35': case 'Q36': case 'Q37':
      return family.includes('perfume') || family.includes('finished') || family.includes('related');

    // Sample fields: Q38 always visible, Q39 - Q43 only if samples requested
    case 'Q38':
      return true;
    case 'Q39': case 'Q40': case 'Q41': case 'Q42': case 'Q43':
      return samplesRequested;

    // Delivery fields: Q44 - Q49 visible on all requests
    case 'Q44': case 'Q45': case 'Q46': case 'Q47': case 'Q48': case 'Q49':
      return true;

    // Contact fields: Q50 (channel selector), Q51 (buyer name), Q55 (company), Q58 (consent) always visible
    case 'Q50': case 'Q51': case 'Q55': case 'Q58':
      return true;

    // Conditional contact channels
    case 'Q52': // Email
      return contactChannel === 'email' || !contactChannel;
    case 'Q53': // Phone
      return contactChannel === 'phone';
    case 'Q54': // WhatsApp
      return contactChannel === 'whatsapp';
    case 'Q56': case 'Q57': case 'Q59':
      return true;

    // Matching mode fields: Q60 - Q66
    case 'Q60': case 'Q61':
      return true;
    case 'Q62': // Maximum supplier introductions — shown in the matching flow.
      // The buyer caps how many producers may be introduced; the lead
      // policy enforces the same cap server-side via `recipient_cap`.
      return mode === 'matching';
    case 'Q63': case 'Q64': case 'Q65': case 'Q66':
      return true;

    // System fields
    case 'Q67':
      return false; // internal only

    default:
      return true;
  }
}

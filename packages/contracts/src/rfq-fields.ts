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
 * ==========================================================================
   The RFQ field visibility evaluator.
   ==========================================================================
   The rules live in `rfq-visibility.ts`, expressed against the PUBLIC KEYS
   the buyer-facing form uses. That module has no dependency on the field
   map, so a client component can import it without pulling the internal
   `Q` identifiers into the browser.

   This file keeps the internal vocabulary working for the server-side and
   test callers that use it: `isFieldVisible('Q13', values)` translates the
   identifier to a public key and delegates. There is ONE set of rules.
   ==========================================================================
 */

import { RFQ_FIELD_KEYS } from './rfq-field-map.ts';
import {
  isFieldVisibleByKey as isFieldVisibleByKeyImpl,
  type RfqVisibilityValues,
} from './rfq-visibility.ts';

/**
 * The public keys of the fields no buyer ever sees.
 *
 * These are the server-owned and partner-owned records: the lead id and
 * idempotency key, the context and recipient snapshot, the delivery state
 * and access log, the partner access offer, and the jurisdiction and
 * channel policy result. They have no public key in the field map, because
 * no public form ever carries them, and they are never buyer-facing.
 */
const SERVER_OWNED_KEYS: Record<string, string> = {
  Q58: 'lead_id',
  Q59: 'context_snapshot',
  Q60: 'delivery_state',
  Q66: 'lead_access_offer',
  Q67: 'jurisdiction_policy_result',
};

/**
 * The public key for a schema field.
 *
 * A server-owned field has a key of its own, which is what the visibility
 * rules test for. Every other field has the key the domain service reads.
 */
export function keyForFieldId(fieldId: string): string {
  return SERVER_OWNED_KEYS[fieldId] ?? RFQ_FIELD_KEYS[fieldId] ?? fieldId;
}

/**
 * Whether a field should be displayed, given the answers so far.
 *
 * The public-key form. Safe to call from a client component.
 */
export function isFieldVisibleByKey(key: string, values: RfqFormValues): boolean {
  return isFieldVisibleByKeyImpl(key, values);
}

/**
 * Whether a field should be displayed, given the answers so far.
 *
 * The internal form, kept for the server-side and test callers. It
 * translates and delegates, so the two vocabularies cannot diverge.
 */
export function isFieldVisible(fieldId: string, values: RfqFormValues): boolean {
  return isFieldVisibleByKeyImpl(keyForFieldId(fieldId), values);
}

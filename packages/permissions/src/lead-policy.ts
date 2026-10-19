/**
 * OudGuide v4 Reference Release Policy.
 * Port of engineering/lead_policy.py.
 * Pure decision helper, fail-closed, with zero contact information in failure reasons.
 */

export interface ReleaseContext {
  inquiry_id: string;
  target_business_id: string;
  grant_business_id: string;
  grant_inquiry_id: string;
  mode: 'matching' | 'selected_supplier' | string;
  selected_business_id?: string | null;
  inquiry_state: 'authorized' | 'dispatch_pending' | string;
  channel_verified: boolean;
  partner_approved: boolean;
  partner_suspended: boolean;
  jurisdiction_allowed: boolean;
  consent_approved: boolean;
  consent_withdrawn: boolean;
  consent_expires_at: Date;
  inquiry_expires_at: Date;
  now: Date;
  requested_fields: Set<string> | ReadonlySet<string>;
  granted_fields: Set<string> | ReadonlySet<string>;
  requested_channel: string;
  granted_channels: Set<string> | ReadonlySet<string>;
  purpose: string;
  granted_purpose: string;
  released_business_ids: Set<string> | ReadonlySet<string>;
  recipient_cap: number;
  commercial_entitlement: boolean;
  exclusive: boolean;
}

export function isSubset<T>(sub: Set<T> | ReadonlySet<T>, sup: Set<T> | ReadonlySet<T>): boolean {
  for (const item of sub) {
    if (!sup.has(item)) return false;
  }
  return true;
}

export function canRelease(c: ReleaseContext): [boolean, string] {
  // 1. Timezone / Valid Date check
  if (
    !(c.now instanceof Date) || isNaN(c.now.getTime()) ||
    !(c.consent_expires_at instanceof Date) || isNaN(c.consent_expires_at.getTime()) ||
    !(c.inquiry_expires_at instanceof Date) || isNaN(c.inquiry_expires_at.getTime())
  ) {
    return [false, 'timezone_required'];
  }

  // 2. Identity required
  if (!c.inquiry_id || !c.target_business_id) {
    return [false, 'identity_required'];
  }

  // 3. Recipient or request mismatch
  if (
    c.target_business_id !== c.grant_business_id ||
    c.inquiry_id !== c.grant_inquiry_id
  ) {
    return [false, 'recipient_or_request_mismatch'];
  }

  // 4. Valid mode
  if (c.mode !== 'matching' && c.mode !== 'selected_supplier') {
    return [false, 'invalid_mode'];
  }

  // 5. Selected supplier substitution check
  if (c.mode === 'selected_supplier' && c.selected_business_id !== c.target_business_id) {
    return [false, 'supplier_substitution'];
  }

  // 6. Inquiry state must be authorized or dispatch_pending
  if (c.inquiry_state !== 'authorized' && c.inquiry_state !== 'dispatch_pending') {
    return [false, 'request_not_authorized'];
  }

  // 7. Channel verified
  if (!c.channel_verified) {
    return [false, 'contact_not_verified'];
  }

  // 8. Partner eligibility
  if (!c.partner_approved || c.partner_suspended) {
    return [false, 'partner_ineligible'];
  }

  // 9. Jurisdiction check
  if (!c.jurisdiction_allowed) {
    return [false, 'policy_hold'];
  }

  // 10. Consent check
  if (!c.consent_approved || c.consent_withdrawn) {
    return [false, 'permission_missing'];
  }

  // 11. Expiry check
  if (c.now.getTime() >= c.consent_expires_at.getTime() || c.now.getTime() >= c.inquiry_expires_at.getTime()) {
    return [false, 'expired'];
  }

  // 12. Field scope check
  if (c.requested_fields.size === 0 || !isSubset(c.requested_fields, c.granted_fields)) {
    return [false, 'field_scope'];
  }

  // 13. Channel scope check
  if (!c.granted_channels.has(c.requested_channel)) {
    return [false, 'channel_scope'];
  }

  // 14. Purpose scope check
  if (c.purpose !== c.granted_purpose || c.purpose !== 'requested_quotation') {
    return [false, 'purpose_scope'];
  }

  // 15. Duplicate release
  if (c.released_business_ids.has(c.target_business_id)) {
    return [false, 'duplicate_release'];
  }

  // 16. Recipient cap
  if (c.recipient_cap < 1 || c.released_business_ids.size >= c.recipient_cap) {
    return [false, 'recipient_cap'];
  }

  // 17. Exclusivity check
  if (c.exclusive && c.released_business_ids.size > 0) {
    return [false, 'not_exclusive'];
  }

  // 18. Commercial entitlement check
  if (!c.commercial_entitlement) {
    return [false, 'no_commercial_entitlement'];
  }

  return [true, 'allowed'];
}

import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { canRelease, type ReleaseContext } from '../packages/permissions/src/lead-policy.ts';

function createDefaultContext(): ReleaseContext {
  const now = new Date('2026-10-19T00:00:00.000Z');
  const tomorrow = new Date(now.getTime() + 86400000);
  const dayAfter = new Date(now.getTime() + 172800000);

  return {
    inquiry_id: 'request-1',
    target_business_id: 'supplier-1',
    grant_business_id: 'supplier-1',
    grant_inquiry_id: 'request-1',
    mode: 'matching',
    selected_business_id: null,
    inquiry_state: 'authorized',
    channel_verified: true,
    partner_approved: true,
    partner_suspended: false,
    jurisdiction_allowed: true,
    consent_approved: true,
    consent_withdrawn: false,
    consent_expires_at: tomorrow,
    inquiry_expires_at: dayAfter,
    now: now,
    requested_fields: new Set(['email', 'requirements']),
    granted_fields: new Set(['email', 'requirements']),
    requested_channel: 'email',
    granted_channels: new Set(['email']),
    purpose: 'requested_quotation',
    granted_purpose: 'requested_quotation',
    released_business_ids: new Set(),
    recipient_cap: 3,
    commercial_entitlement: true,
    exclusive: false,
  };
}

describe('Lead Release Policy (TypeScript parity with v3 Python suite)', () => {
  test('test_allowed: valid matching release passes', () => {
    const ctx = createDefaultContext();
    const [allowed, reason] = canRelease(ctx);
    assert.equal(allowed, true);
    assert.equal(reason, 'allowed');
  });

  test('test_wrong_recipient: fails on grant/target business mismatch', () => {
    const ctx = { ...createDefaultContext(), grant_business_id: 'supplier-2' };
    const [allowed, reason] = canRelease(ctx);
    assert.equal(allowed, false);
    assert.equal(reason, 'recipient_or_request_mismatch');
  });

  test('test_wrong_request: fails on grant/inquiry id mismatch', () => {
    const ctx = { ...createDefaultContext(), grant_inquiry_id: 'request-2' };
    const [allowed, reason] = canRelease(ctx);
    assert.equal(allowed, false);
    assert.equal(reason, 'recipient_or_request_mismatch');
  });

  test('test_profile_substitution: fails if selected supplier differs in direct mode', () => {
    const ctx = {
      ...createDefaultContext(),
      mode: 'selected_supplier',
      selected_business_id: 'supplier-2',
    };
    const [allowed, reason] = canRelease(ctx);
    assert.equal(allowed, false);
    assert.equal(reason, 'supplier_substitution');
  });

  test('test_not_verified: fails if buyer contact channel unverified', () => {
    const ctx = { ...createDefaultContext(), channel_verified: false };
    const [allowed, reason] = canRelease(ctx);
    assert.equal(allowed, false);
    assert.equal(reason, 'contact_not_verified');
  });

  test('test_withdrawn: fails if consent withdrawn', () => {
    const ctx = { ...createDefaultContext(), consent_withdrawn: true };
    const [allowed, reason] = canRelease(ctx);
    assert.equal(allowed, false);
    assert.equal(reason, 'permission_missing');
  });

  test('test_expired: fails if consent expired', () => {
    const base = createDefaultContext();
    const ctx = { ...base, consent_expires_at: base.now };
    const [allowed, reason] = canRelease(ctx);
    assert.equal(allowed, false);
    assert.equal(reason, 'expired');
  });

  test('test_extra_field: fails if requested field not in granted scope', () => {
    const ctx = {
      ...createDefaultContext(),
      requested_fields: new Set(['email', 'phone']),
    };
    const [allowed, reason] = canRelease(ctx);
    assert.equal(allowed, false);
    assert.equal(reason, 'field_scope');
  });

  test('test_extra_channel: fails if requested channel not granted', () => {
    const ctx = {
      ...createDefaultContext(),
      requested_channel: 'whatsapp',
    };
    const [allowed, reason] = canRelease(ctx);
    assert.equal(allowed, false);
    assert.equal(reason, 'channel_scope');
  });

  test('test_marketing: fails if purpose is newsletter / not requested_quotation', () => {
    const ctx = {
      ...createDefaultContext(),
      purpose: 'newsletter',
    };
    const [allowed, reason] = canRelease(ctx);
    assert.equal(allowed, false);
    assert.equal(reason, 'purpose_scope');
  });

  test('test_suspended: fails if partner suspended', () => {
    const ctx = { ...createDefaultContext(), partner_suspended: true };
    const [allowed, reason] = canRelease(ctx);
    assert.equal(allowed, false);
    assert.equal(reason, 'partner_ineligible');
  });

  test('test_jurisdiction: fails if jurisdiction blocked', () => {
    const ctx = { ...createDefaultContext(), jurisdiction_allowed: false };
    const [allowed, reason] = canRelease(ctx);
    assert.equal(allowed, false);
    assert.equal(reason, 'policy_hold');
  });

  test('test_duplicate: fails if supplier already received release', () => {
    const ctx = {
      ...createDefaultContext(),
      released_business_ids: new Set(['supplier-1']),
    };
    const [allowed, reason] = canRelease(ctx);
    assert.equal(allowed, false);
    assert.equal(reason, 'duplicate_release');
  });

  test('test_cap: fails if recipient cap reached', () => {
    const ctx = {
      ...createDefaultContext(),
      recipient_cap: 1,
      released_business_ids: new Set(['supplier-2']),
    };
    const [allowed, reason] = canRelease(ctx);
    assert.equal(allowed, false);
    assert.equal(reason, 'recipient_cap');
  });

  test('test_affiliate_counts_for_exclusive: fails exclusivity if any prior release', () => {
    const ctx = {
      ...createDefaultContext(),
      exclusive: true,
      released_business_ids: new Set(['affiliate-supplier']),
    };
    const [allowed, reason] = canRelease(ctx);
    assert.equal(allowed, false);
    assert.equal(reason, 'not_exclusive');
  });

  test('test_unpaid: fails if commercial entitlement missing', () => {
    const ctx = { ...createDefaultContext(), commercial_entitlement: false };
    const [allowed, reason] = canRelease(ctx);
    assert.equal(allowed, false);
    assert.equal(reason, 'no_commercial_entitlement');
  });

  test('test_closed: fails if inquiry state closed', () => {
    const ctx = { ...createDefaultContext(), inquiry_state: 'closed' };
    const [allowed, reason] = canRelease(ctx);
    assert.equal(allowed, false);
    assert.equal(reason, 'request_not_authorized');
  });

  test('test_naive_time: fails if date invalid', () => {
    const ctx = { ...createDefaultContext(), now: new Date('invalid') };
    const [allowed, reason] = canRelease(ctx);
    assert.equal(allowed, false);
    assert.equal(reason, 'timezone_required');
  });
});

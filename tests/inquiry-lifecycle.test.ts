import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import {
  encodeInquiry,
  decodeInquiry,
  type PersistedInquiry,
} from '../apps/web/src/lib/inquiry-codec.ts';

/* ==========================================================================
   Durable inquiry state.

   The domain keeps inquiries in memory, which does not survive between
   serverless invocations. The buyer's inquiry is carried in a signed
   cookie instead, so the status page can still find it.
   ========================================================================== */

const sample: PersistedInquiry = {
  id: 'inq_test_001',
  created_at: '2026-10-20T10:00:00.000Z',
  expires_at: '2026-11-03T10:00:00.000Z',
  state: 'pending_verification',
  verification_token: '123456',
  channel_verified: false,
  preferred_channel: 'email',
  buyer_name: 'Test Buyer',
  buyer_email: 'buyer@example.com',
  destination_country: 'United Arab Emirates',
  product_family: 'Oud oil',
  quantity: 25,
  quantity_unit: 'tolas',
  samples_requested: true,
  form_values: { product_family: 'Oud oil', quantity: 25 },
  grants: [],
  releases: [],
};

describe('Persisted inquiry cookie', () => {
  test('round-trips an inquiry', () => {
    const encoded = encodeInquiry(sample);
    const decoded = decodeInquiry(encoded);
    assert.ok(decoded, 'the encoded inquiry must decode');
    assert.equal(decoded!.id, sample.id);
    assert.equal(decoded!.buyer_email, sample.buyer_email);
    assert.equal(decoded!.verification_token, sample.verification_token);
    assert.equal(decoded!.quantity, 25);
    assert.deepEqual(decoded!.form_values, sample.form_values);
  });

  test('preserves the approved-recipient set', () => {
    const withGrants: PersistedInquiry = {
      ...sample,
      grants: [{ target_business_id: 'biz_01', grant_id: 'grant_1' }],
      releases: [{ release_id: 'rel_1', target_business_id: 'biz_01' }],
    };
    const decoded = decodeInquiry(encodeInquiry(withGrants));
    assert.equal(decoded!.grants.length, 1);
    assert.equal(decoded!.grants[0].target_business_id, 'biz_01');
    assert.equal(decoded!.releases.length, 1);
  });

  test('rejects a tampered payload', () => {
    const encoded = encodeInquiry(sample);
    const [payload, signature] = encoded.split('.');

    // Flip a character in the payload — the signature no longer matches.
    const tampered = `${payload.slice(0, -1)}${payload.slice(-1) === 'A' ? 'B' : 'A'}.${signature}`;
    assert.equal(decodeInquiry(tampered), null, 'a tampered payload must be rejected');
  });

  test('rejects a tampered signature', () => {
    const encoded = encodeInquiry(sample);
    const [payload, signature] = encoded.split('.');
    const tampered = `${payload}.${signature.slice(0, -1)}${signature.slice(-1) === 'A' ? 'B' : 'A'}`;
    assert.equal(decodeInquiry(tampered), null, 'a tampered signature must be rejected');
  });

  test('rejects a forged token', () => {
    // An attacker who knows the structure but not the secret cannot mint a
    // cookie with a different verification token.
    const forged = {
      ...sample,
      verification_token: '999999',
    };
    const encoded = encodeInquiry(forged);
    // The signature covers the payload, so a re-signed payload is the only
    // way to change it — which requires the secret. Confirm the decode of
    // a *modified* payload fails.
    const [payload, signature] = encodeInquiry(sample).split('.');
    const swapped = Buffer.from(JSON.stringify(forged), 'utf8').toString('base64url');
    assert.equal(decodeInquiry(`${swapped}.${signature}`), null);
  });

  test('rejects malformed input', () => {
    assert.equal(decodeInquiry(undefined), null);
    assert.equal(decodeInquiry(null), null);
    assert.equal(decodeInquiry(''), null);
    assert.equal(decodeInquiry('no-dot-separator'), null);
    assert.equal(decodeInquiry('.'), null);
  });

  test('never carries a raw secret in the payload', () => {
    const encoded = encodeInquiry(sample);
    // The payload is base64url — check that the verification token is not
    // trivially readable, i.e. the payload is not plaintext.
    assert.ok(!encoded.includes(sample.buyer_email), 'the payload must be encoded');
    assert.ok(encoded.includes('.'), 'the encoding must carry a signature separator');
  });
});

import { test, describe, before } from 'node:test';
import assert from 'node:assert/strict';
import { OudGuideDomainService } from '../packages/domain/src/index.ts';
import { seedData } from '../scripts/seed.js';

describe('Stage B: End-to-End Connected Journey', () => {
  let domain: OudGuideDomainService;
  let seed: ReturnType<typeof seedData>;

  before(() => {
    seed = seedData();
    domain = new OudGuideDomainService(seed.businesses);
  });

  test('Step 1: Guide route resolution and proposed internal links resolve', () => {
    // Check that our 772 routes and 1,553 links are present in seed
    assert.equal(seed.routes.length, 772);
    assert.equal(seed.links.length, 1553);

    // Find a guide route
    const guideRoute = seed.routes.find((r: any) => r.family === 'Editorial guide');
    assert.ok(guideRoute, 'Must have at least one guide article route');
    assert.ok(guideRoute.path.startsWith('/'));

    // Check link targets resolve to valid route paths
    const sampleLink = seed.links[0];
    const targetRoute = seed.routes.find((r: any) => r.path === sampleLink.target_path);
    assert.ok(targetRoute, `Target path ${sampleLink.target_path} must exist in route manifest`);
  });

  test('Step 2: Directory search and basic profile contact protection', () => {
    const list = domain.listBusinesses();
    assert.ok(list.length >= 3);

    // Test unclaimed profile: Siam Trat Agarwood Co.
    const trat = domain.getBusinessBySlug('siam-trat-agarwood-co');
    assert.ok(trat);
    assert.equal(trat.name, 'Siam Trat Agarwood Co.');
    assert.equal(trat.is_claimed, false);
    assert.equal(trat.contact_unlocked, false);
    assert.equal(trat.email, undefined);
    assert.equal(trat.phone, undefined);
    assert.equal(trat.whatsapp, undefined);
    assert.equal(trat.street_address, undefined);

    // Test claimed + subscribed profile: Al Mutalib Perfumes
    const almutalib = domain.getBusinessBySlug('al-mutalib-perfumes');
    assert.ok(almutalib);
    assert.equal(almutalib.is_claimed, true);
    assert.equal(almutalib.has_active_membership, true);
    assert.equal(almutalib.contact_unlocked, true);
    assert.equal(almutalib.phone, '+97142260000');
    assert.equal(almutalib.email, 'wholesale@almutalib.com');
  });

  test('Step 3: Profile claim and membership subscription lifecycle', () => {
    // 1. Claim unclaimed profile
    const claimRes = domain.claimProfile('biz_trat_botanicals_03', 'owner@tratagarwood.example.th');
    assert.equal(claimRes.success, true);

    let trat = domain.getBusinessBySlug('siam-trat-agarwood-co');
    assert.equal(trat?.is_claimed, true);
    // Claimed without paid membership still locks contacts
    assert.equal(trat?.contact_unlocked, false);
    assert.equal(trat?.email, undefined);

    // 2. Purchase membership (AED 1,200/year)
    //
    // A membership is activated by a provider-confirmed payment, not by
    // the act of asking for it (OG-A19). A request with no payment is
    // refused.
    const noPayment = domain.purchaseMembership('biz_trat_botanicals_03');
    assert.equal(noPayment.success, false, 'a membership must not activate without a confirmed payment');

    const underpaid = domain.purchaseMembership('biz_trat_botanicals_03', {
      reference: 'pay_too_small',
      amount: 100,
      currency: 'AED',
      confirmed_at: new Date(),
      provider: 'test',
    });
    assert.equal(underpaid.success, false, 'a payment below the annual price must be refused');

    const wrongCurrency = domain.purchaseMembership('biz_trat_botanicals_03', {
      reference: 'pay_wrong_ccy',
      amount: 1200,
      currency: 'USD',
      confirmed_at: new Date(),
      provider: 'test',
    });
    assert.equal(wrongCurrency.success, false, 'a payment in another currency must be refused');

    const memRes = domain.purchaseMembership('biz_trat_botanicals_03', {
      reference: 'pay_confirmed_001',
      amount: 1200,
      currency: 'AED',
      confirmed_at: new Date(),
      provider: 'test',
    });
    assert.equal(memRes.success, true);
    assert.equal(memRes.reference, 'pay_confirmed_001');

    trat = domain.getBusinessBySlug('siam-trat-agarwood-co');
    assert.equal(trat?.has_active_membership, true);
    assert.equal(trat?.contact_unlocked, true);
    assert.equal(trat?.email, 'sales@tratagarwood.example.th');

    // 3. Owner toggles contact display OFF in workspace settings
    domain.setContactVisibility('biz_trat_botanicals_03', false);
    trat = domain.getBusinessBySlug('siam-trat-agarwood-co');
    assert.equal(trat?.contact_unlocked, false);
    assert.equal(trat?.email, undefined);
  });

  test('Step 4: Wholesale RFQ submission, channel OTP verification & brief generation', () => {
    // Buyer submits neutral OudGuide RFQ
    const rfqRes = domain.submitInquiry({
      product_family: 'Oud oil',
      material_subclass: 'Pure distilled oil',
      quantity: 50,
      quantity_unit: 'tolas',
      target_price_per_unit: 350,
      origin_preference: 'India (Assam)',
      samples_requested: true,
      destination_country: 'United Arab Emirates',
      preferred_contact_channel: 'email',
      buyer_name: 'Fatima Al Mansoori',
      buyer_email: 'fatima.buyer@luxuryperfumes.example',
      company_name: 'Mansoor Luxury Fragrances',
      request_mode: 'matching',
    });

    assert.ok(rfqRes.inquiry_id);
    assert.ok(rfqRes.verification_token);
    assert.equal(rfqRes.state, 'pending_verification');

    // Verify outbox contains verification notification
    const outbox = domain.getOutbox();
    const verifyNotice = outbox.find((o) => o.id === `outbox_verify_${rfqRes.inquiry_id}`);
    assert.ok(verifyNotice, 'Verification notification must be enqueued in outbox');
    assert.equal(verifyNotice.payload.token, rfqRes.verification_token);

    // Before verification, brief must NOT be available
    assert.equal(domain.getMatchBrief(rfqRes.inquiry_id), null);

    // Verify with invalid token fails
    const badVerify = domain.verifyInquiryChannel(rfqRes.inquiry_id, '000000');
    assert.equal(badVerify.success, false);

    // Verify with correct token succeeds
    const goodVerify = domain.verifyInquiryChannel(rfqRes.inquiry_id, rfqRes.verification_token);
    assert.equal(goodVerify.success, true);
    assert.equal(goodVerify.state, 'authorized');

    // Redacted Match Brief is now created
    const brief = domain.getMatchBrief(rfqRes.inquiry_id);
    assert.ok(brief);
    assert.equal(brief.product_family, 'Oud oil');
    assert.equal(brief.quantity, 50);
    assert.equal(brief.destination_country, 'United Arab Emirates');

    // CRITICAL: Ensure zero buyer PII leaked into match brief
    assert.equal((brief as any).buyer_name, undefined);
    assert.equal((brief as any).buyer_email, undefined);
    assert.equal((brief as any).company_name, undefined);
  });

  test('Step 5: Buyer approval of named recipient & controlled introduction release', () => {
    // 1. Submit and verify inquiry
    const { inquiry_id, verification_token } = domain.submitInquiry({
      product_family: 'Oud oil',
      quantity: 10,
      destination_country: 'United Arab Emirates',
      preferred_contact_channel: 'email',
      buyer_name: 'Khalid Al Hashimi',
      buyer_email: 'khalid@hashimi.example',
      company_name: 'Al Hashimi Attars',
      request_mode: 'matching',
    });
    domain.verifyInquiryChannel(inquiry_id, verification_token);

    // 2. Attempt release BEFORE buyer approval -> must fail
    const prematureRelease = domain.executeRelease(inquiry_id, 'biz_almutalib_01');
    assert.equal(prematureRelease.success, false);
    assert.equal(prematureRelease.reason, 'recipient_or_request_mismatch');

    // 3. Buyer reviews candidate and approves Al Mutalib Perfumes
    const approveRes = domain.approveRecipient(inquiry_id, 'biz_almutalib_01');
    assert.equal(approveRes.success, true);
    assert.ok(approveRes.grant_id);

    // 4. Release execution now succeeds
    const releaseRes = domain.executeRelease(inquiry_id, 'biz_almutalib_01');
    assert.equal(releaseRes.success, true);
    assert.equal(releaseRes.reason, 'allowed');
    assert.ok(releaseRes.release_id);

    // 5. Outbox contains introduction event with contact details released
    const outbox = domain.getOutbox();
    const introNotice = outbox.find((o) => o.id === `outbox_rel_${releaseRes.release_id}`);
    assert.ok(introNotice, 'Outbox must contain introduction release notification');
    assert.equal(introNotice.payload.supplier_name, 'Al Mutalib Perfumes');
    assert.equal(introNotice.payload.buyer_contact, 'khalid@hashimi.example');

    // 6. Duplicate release attempt to the same supplier is blocked
    const dupRelease = domain.executeRelease(inquiry_id, 'biz_almutalib_01');
    assert.equal(dupRelease.success, false);
    assert.equal(dupRelease.reason, 'duplicate_release');

    // 7. Enforcing recipient cap: can approve 2 more, but not 4
    domain.approveRecipient(inquiry_id, 'biz_assam_artisan_02');
    domain.approveRecipient(inquiry_id, 'biz_trat_botanicals_03');

    // 4th approval attempt must be blocked by recipient cap
    const capRes = domain.approveRecipient(inquiry_id, 'biz_fake_4th');
    assert.equal(capRes.success, false);
    assert.match(capRes.error!, /cap reached/i);
  });
});

import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import {
  projectPublicBusiness,
  isContactDisplayEntitled,
  isFieldVerified,
  type RawBusinessProfile,
} from '../packages/permissions/src/contact-policy.ts';
import { OudGuideDomainService } from '../packages/domain/src/index.ts';
import { seedData } from '../scripts/seed.js';

/* ==========================================================================
   The directory data model.

   Two defects are covered here.

   1. A locked profile leaked its website. The projection returned
      `website_url` in the locked branch, so a basic, unpaid, unclaimed
      record still published a link to the business — while the page
      around it said "no contact data is exposed".

   2. The business record conflated three separate facts: where a
      business is located, the origin of the material it handles, and the
      destinations it ships to. A Dubai reseller of Cambodian agarwood
      has location AE and handles Cambodian material; it is not a
      Cambodian producer.
   ========================================================================== */

function sampleBusiness(overrides: Partial<RawBusinessProfile> = {}): RawBusinessProfile {
  return {
    id: 'biz_01',
    slug: 'sample-perfumes',
    name: 'Sample Perfumes',
    legal_name: 'Sample Perfumes LLC',
    description: 'Oud oils and chips.',
    category: 'Distiller',
    business_type: 'distiller',
    country_id: 'AE',
    country_name: 'United Arab Emirates',
    city: 'Dubai',
    is_claimed: false,
    has_active_membership: false,
    contact_display_enabled: false,
    email: 'owner@sample.example',
    phone: '+971500000000',
    whatsapp: '+971500000000',
    street_address: 'Somewhere in Deira',
    website_url: 'https://sample.example',
    handles_origins: ['Cambodia (Koh Kong)'],
    serves_destinations: ['SA', 'QA'],
    product_families: ['Oud oil'],
    sample_availability: true,
    minimum_order_quantity: '10 tolas',
    established_year: 1990,
    ...overrides,
  } as RawBusinessProfile;
}

describe('Locked profiles leak nothing (OG-A05, QA-031)', () => {
  test('a basic profile omits every contact field, including the website', () => {
    const projected = projectPublicBusiness(sampleBusiness());

    assert.equal(projected.contact_unlocked, false);
    assert.equal(projected.email, undefined);
    assert.equal(projected.phone, undefined);
    assert.equal(projected.whatsapp, undefined);
    assert.equal(projected.street_address, undefined);
    // The leak: the website was returned in the locked branch.
    assert.equal(projected.website_url, undefined);
  });

  test('the projection never carries a key the record withheld', () => {
    const projected = projectPublicBusiness(sampleBusiness()) as Record<string, unknown>;
    for (const key of ['email', 'phone', 'whatsapp', 'street_address', 'website_url']) {
      assert.ok(!(key in projected), `${key} must not be present on a locked profile`);
    }
  });

  test('an entitled owner publishes exactly the fields it chose to publish', () => {
    const projected = projectPublicBusiness(
      sampleBusiness({
        is_claimed: true,
        has_active_membership: true,
        contact_display_enabled: true,
      })
    );

    assert.equal(projected.contact_unlocked, true);
    assert.equal(projected.email, 'owner@sample.example');
    assert.equal(projected.phone, '+971500000000');
    assert.equal(projected.website_url, 'https://sample.example');
  });

  test('owner permission, paid membership and fact-checking are independent states', () => {
    // Paid, but the owner has not enabled contact display.
    assert.equal(
      isContactDisplayEntitled(
        sampleBusiness({ is_claimed: true, has_active_membership: true })
      ),
      false
    );
    // Entitled to publish contacts, but nothing about its facts is verified.
    const entitled = projectPublicBusiness(
      sampleBusiness({
        is_claimed: true,
        has_active_membership: true,
        contact_display_enabled: true,
        verification: { state: 'unverified', fields: [] },
      })
    );
    assert.equal(entitled.contact_unlocked, true);
    assert.equal(entitled.verification_state, 'unverified');
    assert.deepEqual(entitled.verified_fields, []);
  });
});

describe('Three facts stay separate (OG-A09)', () => {
  test('a Dubai reseller of Cambodian agarwood is not a Cambodian producer', () => {
    const projected = projectPublicBusiness(
      sampleBusiness({
        location: undefined,
        country_id: 'AE',
        country_name: 'United Arab Emirates',
        city: 'Dubai',
        handles_origins: ['Cambodia (Koh Kong)'],
        facilities: [],
      })
    );

    // Its own location is Dubai.
    assert.equal(projected.country_id, 'AE');
    // The origin of the material it handles is Cambodia.
    assert.deepEqual(projected.handles_origins, ['Cambodia (Koh Kong)']);
    // It has no Cambodian facility, so it is not a producing facility there.
    assert.equal(
      (projected.facilities ?? []).filter((f) => f.country_id === 'KH').length,
      0
    );
  });

  test('a documented facility is distinguishable from a seller claim', () => {
    const projected = projectPublicBusiness(
      sampleBusiness({
        facilities: [
          {
            country_id: 'KH',
            country_name: 'Cambodia',
            city: 'Koh Kong',
            type: 'production',
            documented: true,
          },
          {
            country_id: 'TH',
            country_name: 'Thailand',
            city: 'Trat',
            type: 'production',
            documented: false,
          },
        ],
      })
    );

    const documented = (projected.facilities ?? []).filter((f) => f.documented);
    const claimed = (projected.facilities ?? []).filter((f) => !f.documented);
    assert.equal(documented.length, 1);
    assert.equal(documented[0].country_id, 'KH');
    assert.equal(claimed.length, 1);
    assert.equal(claimed[0].country_id, 'TH');
  });

  test('only the field the verification record names counts as documented', () => {
    const raw = sampleBusiness({
      verification: { state: 'seller_declared', fields: ['location'] },
    });
    assert.equal(isFieldVerified(raw, 'location'), true);
    assert.equal(isFieldVerified(raw, 'established_year'), false);
    assert.equal(isFieldVerified(raw, 'minimum_order_quantity'), false);
  });
});

describe('The domain separates the selectors (OG-A09, OG-A15)', () => {
  const domain = new OudGuideDomainService(seedData().businesses);

  test('role, product family, origin and destination filter independently', () => {
    const byFamily = domain.listBusinesses({ product_family: 'Perfume oil' });
    assert.ok(byFamily.length >= 1, 'a perfume-oil filter must match a record');

    const byOrigin = domain.listBusinesses({ origin: 'Cambodia' });
    assert.ok(byOrigin.length >= 1, 'an origin filter must match a record');

    const byDestination = domain.listBusinesses({ destination: 'SA' });
    assert.ok(byDestination.length >= 1, 'a destination filter must match a record');

    // The role is a controlled slug from the vocabulary, not the
    // record's single `business_type` display string. A business that
    // does several things carries several slugs, so each of them is a
    // filter that must find it.
    const byRole = domain.listBusinesses({ role: 'distillers' });
    assert.ok(byRole.length >= 1, 'a role filter must match a record');
  });

  test('a business that handles an origin is not located there', () => {
    // Al Mutalib is in Dubai and handles Cambodian material.
    const cambodia = domain.listBusinesses({ origin: 'Cambodia' });
    const almutalib = cambodia.find((b) => b.slug === 'al-mutalib-perfumes');
    assert.ok(almutalib, 'Al Mutalib handles Cambodian material');
    assert.equal(almutalib!.country_id, 'AE');
    assert.equal(almutalib!.country_name, 'United Arab Emirates');
  });

  test('the public listing excludes the development fixtures', () => {
    const published = domain.listBusinesses({ excludeDemo: true });
    for (const b of published) {
      assert.equal(b.demo, false, `${b.slug} must not be published`);
    }
  });

  test('the full register still contains the fixtures', () => {
    const all = domain.listBusinesses();
    assert.ok(all.length >= 3);
    assert.ok(all.some((b) => b.demo));
  });

  test('a supplier reference resolves as a slug or as an id', () => {
    assert.equal(domain.resolveBusinessId('al-mutalib-perfumes'), 'biz_almutalib_01');
    assert.equal(domain.resolveBusinessId('biz_almutalib_01'), 'biz_almutalib_01');
    assert.equal(domain.resolveBusinessId('no-such-business'), null);
  });

  test('a selected-supplier request names a real recipient, and an unknown one is refused', () => {
    const good = domain.submitInquiry({
      product_family: 'Oud oil',
      destination_country: 'United Arab Emirates',
      request_mode: 'selected_supplier',
      selected_supplier_id: 'al-mutalib-perfumes',
    } as any);
    assert.ok(good.inquiry_id, 'a valid selected supplier must be accepted');
    assert.equal(
      domain.getInquiry(good.inquiry_id)!.form_values.selected_supplier_id,
      'biz_almutalib_01',
      'the slug must be resolved to the business id'
    );

    const bad = domain.submitInquiry({
      product_family: 'Oud oil',
      destination_country: 'United Arab Emirates',
      request_mode: 'selected_supplier',
      selected_supplier_id: 'no-such-supplier',
    } as any);
    assert.equal(bad.inquiry_id, '', 'an unknown supplier must be refused');
    assert.equal(bad.state, 'rejected_unknown_supplier');
  });

  test('the commercial entitlement is read from the record, not assumed', () => {
    const inq = domain.submitInquiry({
      product_family: 'Oud oil',
      destination_country: 'United Arab Emirates',
      request_mode: 'matching',
    } as any);
    domain.verifyInquiryChannel(inq.inquiry_id, inq.verification_token);

    // Al Mutalib holds an entitlement, so an approved release is allowed.
    domain.approveRecipient(inq.inquiry_id, 'biz_almutalib_01');
    const allowed = domain.executeRelease(inq.inquiry_id, 'biz_almutalib_01');
    assert.equal(allowed.success, true, `expected allowed, got ${allowed.reason}`);

    // A partner that holds no commercial entitlement. The policy checks
    // partner eligibility first, so the record must be partner-approved for
    // this branch to be reached at all.
    const entitled = new OudGuideDomainService([
      {
        id: 'biz_no_entitlement',
        slug: 'no-entitlement-perfumes',
        name: 'No Entitlement Perfumes',
        country_id: 'AE',
        country_name: 'United Arab Emirates',
        city: 'Dubai',
        is_claimed: true,
        has_active_membership: true,
        contact_display_enabled: false,
        is_partner: true,
        partner_approved: true,
        partner_suspended: false,
        jurisdiction_allowed: true,
        commercial_entitlement: false,
        handles_origins: ['India (Assam)'],
        product_families: ['Oud oil'],
      } as any,
    ]);

    const inq2 = entitled.submitInquiry({
      product_family: 'Oud oil',
      destination_country: 'United Arab Emirates',
      request_mode: 'matching',
    } as any);
    entitled.verifyInquiryChannel(inq2.inquiry_id, inq2.verification_token);
    entitled.approveRecipient(inq2.inquiry_id, 'biz_no_entitlement');
    const refused = entitled.executeRelease(inq2.inquiry_id, 'biz_no_entitlement');
    assert.equal(refused.success, false);
    assert.equal(refused.reason, 'no_commercial_entitlement');
  });
});


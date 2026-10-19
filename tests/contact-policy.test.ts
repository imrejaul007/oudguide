import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import {
  projectPublicBusiness,
  isContactDisplayEntitled,
  type RawBusinessProfile,
} from '../packages/permissions/src/contact-policy.ts';

function createSampleBusiness(): RawBusinessProfile {
  return {
    id: 'biz_01',
    slug: 'arabian-oud-perfumes',
    name: 'Arabian Oud Masters',
    legal_name: 'Arabian Oud Masters LLC',
    description: 'Artisanal oud oils and aged Hindi chips.',
    category: 'Distiller & Retailer',
    business_type: 'distiller',
    country_id: 'AE',
    country_name: 'United Arab Emirates',
    city: 'Dubai',
    region: 'Deira Perfume Souk',
    is_claimed: false,
    has_active_membership: false,
    contact_display_enabled: false,
    is_suspended: false,
    email: 'secret-owner@arabianoud.example',
    phone: '+971500000000',
    whatsapp: '+971500000000',
    street_address: 'Building 14, Al Sabkha Rd, Deira',
    postal_code: '12345',
    contact_person: 'Sheikh Ahmed',
    tax_id: 'TRN-100200300',
    internal_notes: 'High priority VIP lead source',
    website_url: 'https://arabianoud.example',
    verified_origins: ['India (Assam)', 'Cambodia (Koh Kong)'],
    product_families: ['Dehn Al Oud', 'Agarwood Chips'],
    sample_availability: true,
    minimum_order_quantity: '10 tolas',
    established_year: 1985,
  };
}

describe('Contact Projection & Leakage Prevention Policy (QA-007, QA-008, QA-010)', () => {
  test('Unclaimed basic profile: completely strips phone, email, WhatsApp, street address, tax_id, internal notes', () => {
    const raw = createSampleBusiness();
    assert.equal(isContactDisplayEntitled(raw), false);

    const projected = projectPublicBusiness(raw);
    assert.equal(projected.contact_unlocked, false);
    assert.equal(projected.email, undefined);
    assert.equal(projected.phone, undefined);
    assert.equal(projected.whatsapp, undefined);
    assert.equal(projected.street_address, undefined);
    assert.equal((projected as any).tax_id, undefined);
    assert.equal((projected as any).internal_notes, undefined);
    assert.equal((projected as any).contact_person, undefined);

    // Non-contact metadata remains intact
    assert.equal(projected.name, 'Arabian Oud Masters');
    assert.equal(projected.city, 'Dubai');
    assert.equal(projected.country_name, 'United Arab Emirates');
    assert.deepEqual(projected.verified_origins, ['India (Assam)', 'Cambodia (Koh Kong)']);
  });

  test('Claimed but unpaid profile: still hides contacts', () => {
    const raw = { ...createSampleBusiness(), is_claimed: true, has_active_membership: false };
    assert.equal(isContactDisplayEntitled(raw), false);

    const projected = projectPublicBusiness(raw);
    assert.equal(projected.contact_unlocked, false);
    assert.equal(projected.phone, undefined);
    assert.equal(projected.email, undefined);
  });

  test('Claimed + paid membership + contact display disabled by owner: contacts remain hidden', () => {
    const raw = {
      ...createSampleBusiness(),
      is_claimed: true,
      has_active_membership: true,
      contact_display_enabled: false,
    };
    assert.equal(isContactDisplayEntitled(raw), false);

    const projected = projectPublicBusiness(raw);
    assert.equal(projected.contact_unlocked, false);
    assert.equal(projected.phone, undefined);
  });

  test('Claimed + paid + contact display enabled: contacts projected safely', () => {
    const raw = {
      ...createSampleBusiness(),
      is_claimed: true,
      has_active_membership: true,
      contact_display_enabled: true,
    };
    assert.equal(isContactDisplayEntitled(raw), true);

    const projected = projectPublicBusiness(raw);
    assert.equal(projected.contact_unlocked, true);
    assert.equal(projected.phone, '+971500000000');
    assert.equal(projected.email, 'secret-owner@arabianoud.example');
    assert.equal(projected.street_address, 'Building 14, Al Sabkha Rd, Deira');

    // Internal notes and tax IDs are STILL hidden even when contacts unlocked
    assert.equal((projected as any).tax_id, undefined);
    assert.equal((projected as any).internal_notes, undefined);
  });

  test('Suspended business: always locks contacts even if paid and enabled', () => {
    const raw = {
      ...createSampleBusiness(),
      is_claimed: true,
      has_active_membership: true,
      contact_display_enabled: true,
      is_suspended: true,
    };
    assert.equal(isContactDisplayEntitled(raw), false);

    const projected = projectPublicBusiness(raw);
    assert.equal(projected.contact_unlocked, false);
    assert.equal(projected.phone, undefined);
    assert.equal(projected.email, undefined);
  });
});

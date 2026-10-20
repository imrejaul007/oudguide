import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { isFieldVisible, type RfqFormValues } from '../packages/contracts/src/rfq-fields.ts';

describe('67 Conditional RFQ Fields Evaluator (V4-RFQ-02)', () => {
  test('Start stage fields (Q01-Q12) are visible for all requests', () => {
    const values: RfqFormValues = { product_family: 'Oud wood' };
    assert.equal(isFieldVisible('Q01', values), true); // Product family
    assert.equal(isFieldVisible('Q06', values), true); // Product trade name
    assert.equal(isFieldVisible('Q11', values), true); // Required date
    assert.equal(isFieldVisible('Q12', values), true); // Regular procurement
  });

  test('Wood fields (Q13-Q21) show only when product_family is wood/incense', () => {
    const woodValues: RfqFormValues = { product_family: 'Oud wood' };
    const oilValues: RfqFormValues = { product_family: 'Oud oil' };

    assert.equal(isFieldVisible('Q13', woodValues), true); // Wood type
    assert.equal(isFieldVisible('Q16', woodValues), true); // Treatment preference
    assert.equal(isFieldVisible('Q21', woodValues), true); // Reference media

    assert.equal(isFieldVisible('Q13', oilValues), false);
    assert.equal(isFieldVisible('Q16', oilValues), false);
  });

  test('Oil fields (Q22-Q29) show only when product_family is oil/attar', () => {
    const oilValues: RfqFormValues = { product_family: 'Oud oil' };
    const woodValues: RfqFormValues = { product_family: 'Oud wood' };

    assert.equal(isFieldVisible('Q22', oilValues), true); // Distillation method
    assert.equal(isFieldVisible('Q26', oilValues), true); // CITES documentation
    assert.equal(isFieldVisible('Q22', woodValues), false);
  });

  test('Perfume fields (Q30-Q37) show only when product_family is perfume/finished', () => {
    const perfumeValues: RfqFormValues = { product_family: 'Finished perfume' };
    const woodValues: RfqFormValues = { product_family: 'Oud wood' };

    assert.equal(isFieldVisible('Q30', perfumeValues), true); // Finished product class
    assert.equal(isFieldVisible('Q33', perfumeValues), true); // IFRA compliance
    assert.equal(isFieldVisible('Q30', woodValues), false);
  });

  test('Sample conditional fields (Q39-Q43) show only when samples_requested is true', () => {
    const withSamples: RfqFormValues = { product_family: 'Oud oil', samples_requested: true };
    const withoutSamples: RfqFormValues = { product_family: 'Oud oil', samples_requested: false };

    assert.equal(isFieldVisible('Q38', withoutSamples), true); // Q38 is the toggle itself
    assert.equal(isFieldVisible('Q39', withoutSamples), false); // Sample payment terms
    assert.equal(isFieldVisible('Q41', withoutSamples), false); // Sample approval process

    assert.equal(isFieldVisible('Q39', withSamples), true);
    assert.equal(isFieldVisible('Q41', withSamples), true);
  });

  test('Contact channel conditional fields (Q52-Q54) toggle based on preferred channel', () => {
    const emailPref: RfqFormValues = { preferred_contact_channel: 'email' };
    const phonePref: RfqFormValues = { preferred_contact_channel: 'phone' };
    const waPref: RfqFormValues = { preferred_contact_channel: 'whatsapp' };

    assert.equal(isFieldVisible('Q52', emailPref), true);  // Email field
    assert.equal(isFieldVisible('Q53', emailPref), false); // Phone field
    assert.equal(isFieldVisible('Q54', emailPref), false); // WA field

    assert.equal(isFieldVisible('Q52', phonePref), false);
    assert.equal(isFieldVisible('Q53', phonePref), true);

    assert.equal(isFieldVisible('Q52', waPref), false);
    assert.equal(isFieldVisible('Q54', waPref), true);
  });

  test('Maximum supplier introductions (Q62) is visible in matching mode', () => {
    // Q62 is "Maximum supplier introductions", shown in the matching flow —
    // the buyer caps how many producers may be introduced. The direct
    // supplier is chosen through Q61 (request mode) plus the pre-selected
    // supplier, not through a separate picker field.
    const matchingMode: RfqFormValues = { request_mode: 'matching' };
    const directMode: RfqFormValues = { request_mode: 'selected_supplier' };

    assert.equal(isFieldVisible('Q62', matchingMode), true);
    assert.equal(isFieldVisible('Q62', directMode), false);
  });
});

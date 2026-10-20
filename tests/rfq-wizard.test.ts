import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { isFieldVisible } from '../packages/contracts/src/rfq-fields.ts';
import defs from '../apps/web/src/data/rfq_fields.json' with { type: 'json' };

/* ==========================================================================
   The 67-field conditional RFQ wizard.

   The reference schema defines 67 fields across 12 stages with
   conditional visibility. The live form previously rendered roughly six of
   them; these tests lock in the branching behaviour the wizard relies on.
   ========================================================================== */

type FieldDef = {
  ID: string;
  'Form stage': string;
  Field: string;
  'Input type': string;
  'When shown': string;
  'Required?': string;
  'Validation / choices': string;
  'Privacy / interpretation': string;
};

const FIELDS = defs as unknown as FieldDef[];

const visible = (values: Record<string, any>) =>
  FIELDS.filter(
    (f) => f['Form stage'] !== 'System' && isFieldVisible(f.ID, values as any)
  ).map((f) => f.ID);

describe('67-field conditional RFQ wizard', () => {
  test('the schema has all 67 fields across 12 stages', () => {
    assert.equal(FIELDS.length, 67);
    const stages = new Set(FIELDS.map((f) => f['Form stage']));
    assert.equal(stages.size, 12);
  });

  test('every field carries a definition, a privacy rule and a stage', () => {
    for (const f of FIELDS) {
      assert.ok(f.ID, 'field must have an ID');
      assert.ok(f['Form stage'], `${f.ID} must have a stage`);
      assert.ok(f.Field, `${f.ID} must have a label`);
      assert.ok(
        f['Privacy / interpretation'],
        `${f.ID} must carry a privacy handling rule`
      );
    }
  });

  test('Start-stage fields are always visible', () => {
    const ids = visible({});
    for (let n = 1; n <= 12; n++) {
      const id = `Q${String(n).padStart(2, '0')}`;
      assert.ok(ids.includes(id), `${id} must always be visible`);
    }
  });

  test('the Wood branch opens only for wood / bakhoor / incense', () => {
    // The reference schema places Q13-Q22 in the Wood stage.
    const woodIds = visible({ product_family: 'Oud wood' });
    for (const id of ['Q13', 'Q14', 'Q15', 'Q16', 'Q17', 'Q18', 'Q19', 'Q20', 'Q21', 'Q22']) {
      assert.ok(woodIds.includes(id), `${id} must be visible for Oud wood`);
    }

    const oilIds = visible({ product_family: 'Oud oil' });
    for (const id of ['Q13', 'Q14', 'Q15', 'Q22']) {
      assert.ok(!oilIds.includes(id), `${id} must be hidden for Oud oil`);
    }
  });

  test('the Oil branch opens only for oil / attar', () => {
    const oilIds = visible({ product_family: 'Oud oil' });
    for (const id of ['Q23', 'Q24', 'Q25', 'Q26', 'Q27', 'Q28', 'Q29']) {
      assert.ok(oilIds.includes(id), `${id} must be visible for Oud oil`);
    }

    const woodIds = visible({ product_family: 'Oud wood' });
    for (const id of ['Q23', 'Q24', 'Q25', 'Q26']) {
      assert.ok(!woodIds.includes(id), `${id} must be hidden for Oud wood`);
    }
  });

  test('the Perfume branch opens only for finished perfume', () => {
    const perfumeIds = visible({ product_family: 'Finished perfume' });
    for (const id of ['Q30', 'Q31', 'Q32', 'Q33', 'Q34', 'Q35']) {
      assert.ok(perfumeIds.includes(id), `${id} must be visible for Finished perfume`);
    }

    const woodIds = visible({ product_family: 'Oud wood' });
    for (const id of ['Q30', 'Q31', 'Q32']) {
      assert.ok(!woodIds.includes(id), `${id} must be hidden for Oud wood`);
    }
  });

  test('the Sample branch opens only once samples are requested', () => {
    // The reference schema places Q36-Q41 in the Sample stage.
    const withoutSamples = visible({ product_family: 'Oud wood' });
    for (const id of ['Q36', 'Q37', 'Q38', 'Q39', 'Q40', 'Q41']) {
      assert.ok(!withoutSamples.includes(id), `${id} must be hidden without samples`);
    }

    const withSamples = visible({
      product_family: 'Oud wood',
      samples_requested: 'Yes',
    });
    for (const id of ['Q36', 'Q37', 'Q38', 'Q39', 'Q40', 'Q41']) {
      assert.ok(withSamples.includes(id), `${id} must be visible with samples`);
    }
  });

  test('the contact branch follows the chosen channel', () => {
    // Q51 is the email field, Q52 the phone/WhatsApp field.
    const email = visible({ preferred_contact_channel: 'email' });
    assert.ok(email.includes('Q51'), 'email branch must show the email field');
    assert.ok(!email.includes('Q52'), 'email branch must hide the phone field');

    const phone = visible({ preferred_contact_channel: 'phone' });
    assert.ok(phone.includes('Q52'), 'phone branch must show the phone field');
    assert.ok(!phone.includes('Q51'), 'phone branch must hide the email field');

    const whatsapp = visible({ preferred_contact_channel: 'whatsapp' });
    assert.ok(whatsapp.includes('Q52'), 'whatsapp branch must show the phone field');
  });

  test('system fields are never buyer-visible', () => {
    const ids = visible({ product_family: 'Oud wood', samples_requested: 'Yes' });
    for (const id of ['Q58', 'Q59', 'Q60', 'Q67']) {
      assert.ok(!ids.includes(id), `${id} is server-side only`);
    }
  });

  test('the field count grows as branches open', () => {
    const base = visible({}).length;
    const wood = visible({ product_family: 'Oud wood' }).length;
    const oil = visible({ product_family: 'Oud oil' }).length;
    const perfume = visible({ product_family: 'Finished perfume' }).length;
    const full = visible({
      product_family: 'Oud wood',
      samples_requested: 'Yes',
      preferred_contact_channel: 'email',
    }).length;

    assert.ok(base > 0, 'the base form must have fields');
    assert.ok(wood > base, 'the wood branch must add fields');
    assert.ok(oil > base, 'the oil branch must add fields');
    assert.ok(perfume > base, 'the perfume branch must add fields');
    assert.ok(full > wood, 'the sample branch must add fields');
    assert.ok(full <= 63, 'system fields must stay hidden');
  });

  test('every required field has a validation rule', () => {
    for (const f of FIELDS) {
      if (f['Required?'] === 'Required') {
        assert.ok(
          f['Validation / choices'] && f['Validation / choices'].length > 0,
          `${f.ID} is required but has no validation rule`
        );
      }
    }
  });

  test('consent fields are marked as the required affirmative control', () => {
    const consent = FIELDS.filter((f) => f['Form stage'] === 'Consent');
    assert.ok(consent.length >= 4, 'the consent stage must define its controls');
    const acknowledgment = consent.find((f) => f.ID === 'Q55');
    assert.ok(acknowledgment, 'Q55 must exist');
    assert.equal(acknowledgment['Required?'], 'Required for chosen service');
  });

  test('the matching stage exposes the recipient cap and redaction consent', () => {
    const ids = visible({ request_mode: 'matching' });
    assert.ok(ids.includes('Q61'), 'request mode must be visible');
    assert.ok(ids.includes('Q62'), 'recipient cap must be visible in matching mode');
    assert.ok(ids.includes('Q63'), 'redaction consent must be visible');
  });

  test('the recipient cap is not asked for in direct-supplier mode', () => {
    // Q62 is "Maximum supplier introductions" — the buyer caps how many
    // producers may be introduced, which is a matching-flow concept.
    // In direct mode a single named supplier is already chosen.
    const direct = visible({ request_mode: 'selected_supplier' });
    assert.ok(!direct.includes('Q62'), 'the cap does not apply in direct mode');
    assert.ok(direct.includes('Q61'), 'request mode is still visible');
  });
});

import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

import {
  PUBLIC_FIELDS,
  PUBLIC_FIELD_LIST,
  PUBLIC_STAGES,
  publicOptionLabel,
} from '../packages/contracts/src/rfq-public-schema.ts';
import { isFieldVisible, isFieldVisibleByKey, keyForFieldId } from '../packages/contracts/src/rfq-fields.ts';
import { RFQ_FIELD_KEYS, RFQ_FIELD_STAGES, RFQ_BUYER_STAGES } from '../packages/contracts/src/rfq-field-map.ts';
import defs from '../apps/web/src/data/rfq_fields.json' with { type: 'json' };
import { extractStrings } from '../apps/web/src/lib/content/text-integrity.ts';

/**
 * ==========================================================================
   The public RFQ projection, and the port that produced it.
   ==========================================================================
   The RFQ wizard is a client component. It used to import the reference
   schema (`apps/web/src/data/rfq_fields.json`) and the field map directly,
   which put two internal things into the browser bundle and into the RSC
   payload:

     - the `Q01`-style internal identifiers, including as the `id` and
       `for` attributes of the form controls;
     - the "Privacy / interpretation" column, whose values are operator
       guidance — "No exact street address at first step", "Do not reject
       genuine buyers without a registered business".

   OG-A10 removed that vocabulary from the *visible* form. It never removed
   it from the *document*.

   The fix is a public projection: `packages/contracts/src/rfq-public-schema.ts`
   carries the public key, the stage, the control, the required flag, the
   localised label and help, and the options with their machine values.
   The wizard imports that and nothing else.

   ==========================================================================
   What this test holds in place.
   ==========================================================================
   A projection is a rewrite, and a rewrite can quietly change the form.
   So the rewrite is pinned against two fixtures captured from the
   pre-port code:

     - `tests/fixtures/rfq-visibility.json` — which fields are visible
       across 504 combinations of buyer answers;
     - `tests/fixtures/rfq-options.json` — the option values each choice
       field rendered.

   The visibility fixture is the important one. It is a bitmask per field
   over a fixed matrix of answers, captured from the evaluator as it
   behaved BEFORE the port. If the port changes which fields appear for
   which answers, this test fails and names the field.

   The option fixture records the values the server reads, so a translated
   value — which would stop the wood, oil and supplier-introduction
   branches from matching — fails here rather than in production.
   ==========================================================================
 */

/**
 * The module specifiers a source file imports.
 *
 * Read from the import declarations, so a file name mentioned in a
 * comment is not mistaken for an import.
 */
function importSpecifiers(source: string): string[] {
  const out: string[] = [];
  const pattern = /(?:^|\n)\s*(?:import|export)\b[^;]*?from\s*['"]([^'"]+)['"]/g;
  const bare = /(?:^|\n)\s*import\s*['"]([^'"]+)['"]/g;
  for (const m of source.matchAll(pattern)) out.push(m[1]);
  for (const m of source.matchAll(bare)) out.push(m[1]);
  return out;
}

const SCHEMA = defs as unknown as Array<{
  ID: string;
  'Form stage': string;
  Field: string;
  'Input type': string;
  'When shown': string;
  'Required?': string;
  'Validation / choices': string;
  'Privacy / interpretation': string;
}>;

const visibilityFixture = JSON.parse(
  readFileSync(new URL('./fixtures/rfq-visibility.json', import.meta.url), 'utf8')
);
const optionsFixture = JSON.parse(
  readFileSync(new URL('./fixtures/rfq-options.json', import.meta.url), 'utf8')
);

/** The buyer-facing stages, as the wizard walks them. */
const BUYER_STAGES = RFQ_BUYER_STAGES as readonly string[];

/** The schema fields the wizard can render. */
const BUYER_FIELDS = SCHEMA.filter((f) => BUYER_STAGES.includes(f['Form stage']));

/**
 * The control the old renderer produced for a schema input type.
 *
 * This is the old renderer's own rule set, in its own order. It is
 * repeated here rather than imported, because the old renderer is gone:
 * this is now the only record of what the form used to do, and the
 * projection has to match it.
 */
function oldControl(inputType: string): string {
  if (/Read-only/.test(inputType)) return 'Read-only';
  if (/Unticked|Affirmative/.test(inputType)) return 'Checkbox';
  if (['Select', 'Radio', 'Multi-select', 'Choice'].includes(inputType)) return 'Select';
  if (inputType === 'Textarea') return 'Textarea';
  if (inputType === 'Number' || inputType === 'Integer') return 'Number';
  if (inputType === 'Date') return 'Date';
  if (inputType === 'File' || inputType === 'Private upload') return 'File';
  return 'Text';
}

/** The old renderer's required rule. */
function oldRequired(f: (typeof SCHEMA)[number]): boolean {
  return (
    f['Required?'] === 'Required' ||
    (f['Required?'] === 'Conditional' && f['When shown'] !== 'All requests')
  );
}

/** The matrix of answers the visibility fixture was captured over. */
const MATRIX = visibilityFixture.matrix as {
  product_family: string[];
  purchase_purpose: string[];
  samples_requested: boolean[];
  preferred_contact_channel: string[];
  request_mode: string[];
};

function combinations(): Array<Record<string, any>> {
  const out: Array<Record<string, any>> = [];
  for (const product_family of MATRIX.product_family)
    for (const purchase_purpose of MATRIX.purchase_purpose)
      for (const samples_requested of MATRIX.samples_requested)
        for (const preferred_contact_channel of MATRIX.preferred_contact_channel)
          for (const request_mode of MATRIX.request_mode)
            out.push({
              product_family,
              purchase_purpose,
              samples_requested,
              preferred_contact_channel,
              request_mode,
            });
  return out;
}

function packBits(bits: string): string {
  const bytes = new Uint8Array(Math.ceil(bits.length / 8));
  for (let i = 0; i < bits.length; i++) if (bits[i] === '1') bytes[i >> 3] |= 0x80 >> (i & 7);
  return Buffer.from(bytes).toString('base64');
}

describe('The public RFQ projection', () => {
  test('the projection covers exactly the fields the wizard can render', () => {
    const wanted = new Set(BUYER_FIELDS.map((f) => RFQ_FIELD_KEYS[f.ID]));
    const have = new Set(Object.keys(PUBLIC_FIELDS));

    const missing = [...wanted].filter((k) => !have.has(k));
    const extra = [...have].filter((k) => !wanted.has(k));

    assert.deepEqual(missing, [], 'these fields the form can show have no public entry');
    assert.deepEqual(extra, [], 'these public entries are not fields the form can show');
  });

  test('no internal identifier and no interpretation column reach the client', () => {
    const source = readFileSync(
      new URL('../packages/contracts/src/rfq-public-schema.ts', import.meta.url),
      'utf8'
    );

    // The projection is the one file the client imports, so it must not
    // carry the internal schema. A `Q01` here would be a `Q01` in the
    // browser.
    //
    // The check is on the CODE, not on the file's prose. Both files
    // explain what they removed, and an explanation that names the thing
    // it removed is not a leak.
    const literals = extractStrings(source).map((s) => s.value);
    const identifiers = literals.filter((v) => /\bQ\d{2}\b/.test(v));
    assert.deepEqual(
      identifiers,
      [],
      'the public projection must not contain a Q identifier in a value'
    );

    assert.ok(
      !literals.some((v) => v.includes('Privacy / interpretation')),
      'the public projection must not carry the internal interpretation column'
    );
    assert.ok(
      !literals.some((v) => v.includes('rfq_fields.json')),
      'the public projection must not read the reference schema at runtime'
    );
  });

  test('the wizard no longer imports the reference schema or the field map', () => {
    const source = readFileSync(
      new URL('../apps/web/src/components/rfq/rfq-wizard.tsx', import.meta.url),
      'utf8'
    );

    // The imports are CODE, so they are read from the source's import
    // declarations rather than by searching the text, which would also
    // find the file names in the explanatory comment.
    const imported = importSpecifiers(source);

    assert.ok(
      !imported.some((m) => m.includes('rfq_fields.json')),
      'the wizard must not import the reference schema'
    );
    assert.ok(
      !imported.some((m) => m.includes('rfq-field-map')),
      'the wizard must not import the field map, which carries the Q identifiers'
    );
    assert.ok(
      !imported.some((m) => m.includes('rfq-public-copy')),
      'the copy now lives in the public projection'
    );
    assert.ok(
      imported.some((m) => m.includes('rfq-public-schema')),
      'the wizard must import the public projection'
    );
  });

  test('every public field carries a localised label and help in both languages', () => {
    for (const field of PUBLIC_FIELD_LIST) {
      assert.ok(field.label.en.trim(), `${field.key} has no English label`);
      assert.ok(field.label.ar.trim(), `${field.key} has no Arabic label`);
      assert.ok(field.help.en.trim(), `${field.key} has no English help`);
      assert.ok(field.help.ar.trim(), `${field.key} has no Arabic help`);
    }
  });

  test('every option carries a localised display text in both languages', () => {
    for (const field of PUBLIC_FIELD_LIST) {
      for (const option of field.options) {
        assert.ok(option.label.en.trim(), `${field.key}/${option.value} has no English text`);
        assert.ok(option.label.ar.trim(), `${field.key}/${option.value} has no Arabic text`);
      }
    }
  });

  test('the stage and the control match the schema the field came from', () => {
    for (const f of BUYER_FIELDS) {
      const key = RFQ_FIELD_KEYS[f.ID];
      const field = PUBLIC_FIELDS[key];

      assert.equal(
        field.stage,
        RFQ_FIELD_STAGES[f.ID] ?? f['Form stage'],
        `${key} is in the wrong stage`
      );
      assert.equal(
        field.inputType,
        oldControl(f['Input type']),
        `${key} must render as the control it always rendered as`
      );
      assert.equal(
        field.required,
        oldRequired(f),
        `${key} must carry the required flag it always carried`
      );
    }
  });

  test('a field that is not a select carries no option list', () => {
    for (const field of PUBLIC_FIELD_LIST) {
      if (field.inputType === 'Select') continue;
      assert.deepEqual(
        field.options,
        [],
        `${field.key} is not a select, so it must not be offered a list`
      );
    }
  });

  test('the option values the server reads are unchanged, except the four that were broken', () => {
    // The four fields whose values were wrong before the port. Each entry
    // says what was wrong, so the record of the change is in the test
    // rather than only in a commit message.
    const FIXED: Record<string, { before: string[]; after: string[]; why: string }> = {
      Q27: {
        before: ['sDS', 'applicable conformity information', 'cOA', 'batch test report', 'ingredient information'],
        after: ['SDS', 'applicable conformity information', 'COA', 'batch test report', 'ingredient information'],
        why: 'the parser lower-cased the first character, so the acronyms read "sDS" and "cOA"',
      },
      Q50: {
        before: ['email or phone/WhatsApp'],
        after: ['email', 'phone', 'whatsapp'],
        why: 'the schema column had no semicolons, so the select offered one option and neither the email nor the phone field ever appeared',
      },
      Q61: {
        before: ['oudGuide matching / chosen supplier only'],
        after: ['matching', 'selected_supplier'],
        why: 'the value was prose, and the domain compares request_mode against "selected_supplier" exactly',
      },
      Q62: {
        before: ['1 or up to 3 default policy', 'configurable after approval'],
        after: ['1', '2', '3'],
        why: 'the values were two prose fragments, neither of which is a number the lead policy can cap',
      },
    };

    const changed: string[] = [];
    const unexpected: string[] = [];

    for (const [id, before] of Object.entries(optionsFixture.fields as Record<string, string[]>)) {
      const key = RFQ_FIELD_KEYS[id];
      const after = (PUBLIC_FIELDS[key]?.options ?? []).map((o) => o.value);

      if (JSON.stringify(before) === JSON.stringify(after)) continue;

      if (FIXED[id] && JSON.stringify(FIXED[id].after) === JSON.stringify(after)) {
        changed.push(id);
        continue;
      }
      unexpected.push(`${id}: ${JSON.stringify(before)} -> ${JSON.stringify(after)}`);
    }

    assert.deepEqual(
      unexpected,
      [],
      'an option value changed and was not one of the four documented corrections'
    );
    assert.deepEqual(
      changed.sort(),
      Object.keys(FIXED).sort(),
      'the four documented corrections are the only ones that should have changed'
    );
  });
});

describe('The port preserved which fields appear', () => {
  const combos = combinations();

  test('the fixture was captured over the matrix the test rebuilds', () => {
    assert.equal(combos.length, visibilityFixture.combinations);
  });

  test('every field has the same visibility it had before the port', () => {
    const changed: string[] = [];

    for (const [id, packed] of Object.entries(visibilityFixture.fields as Record<string, string>)) {
      const bits = combos
        .map((values) => (isFieldVisible(id, values as any) ? '1' : '0'))
        .join('');

      if (packBits(bits) !== packed) {
        changed.push(`${id} (${keyForFieldId(id)})`);
      }
    }

    assert.deepEqual(
      changed,
      [],
      `these fields now appear for different answers than before the port:\n  ${changed.join('\n  ')}`
    );
  });

  test('the public-key evaluator and the internal one agree', () => {
    const disagree: string[] = [];

    for (const f of SCHEMA) {
      const key = keyForFieldId(f.ID);
      for (const values of combos) {
        const byId = isFieldVisible(f.ID, values as any);
        const byKey = isFieldVisibleByKey(key, values as any);
        if (byId !== byKey) {
          disagree.push(`${f.ID}/${key}`);
          break;
        }
      }
    }

    assert.deepEqual(
      disagree,
      [],
      'the two vocabularies disagree, so one of them is not the same rule'
    );
  });

  test('the fields no buyer ever sees stay hidden', () => {
    const SERVER_OWNED = ['Q58', 'Q59', 'Q60', 'Q66', 'Q67'];
    for (const id of SERVER_OWNED) {
      for (const values of combos) {
        assert.equal(
          isFieldVisible(id, values as any),
          false,
          `${id} is server-owned and must never be visible`
        );
      }
    }
  });
});

describe('The option display text', () => {
  test('an option the form offers is labelled in the reader\'s language', () => {
    const productFamily = PUBLIC_FIELDS.product_family;
    assert.equal(publicOptionLabel('product_family', 'oud wood', false), 'Oud wood');
    assert.equal(publicOptionLabel('product_family', 'oud wood', true), 'خشب العود');
  });

  test('an unknown value falls back to itself rather than to nothing', () => {
    assert.equal(publicOptionLabel('product_family', 'not a real value', true), 'not a real value');
  });
});

describe('The stages', () => {
  test('the projection walks the same stages the wizard does', () => {
    assert.deepEqual([...PUBLIC_STAGES], [...BUYER_STAGES]);
  });
});

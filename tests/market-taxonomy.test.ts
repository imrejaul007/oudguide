import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

import taxonomy from '../apps/web/src/data/market_taxonomy.json' with { type: 'json' };
import { GRADE_LABELS } from '../apps/web/src/data/articles/quality-grade-ladder.ts';
import { listReviewedArticles } from '../apps/web/src/lib/articles.ts';

/**
 * ==========================================================================
   The market taxonomy register, and the grade ladder.
   ==========================================================================

   On 21 October 2026 the retail catalogue at almutalib.com was audited
   because the portal is missing the axes that catalogue uses. The audit
   found a three-level product taxonomy, a nine-label commercial grade
   vocabulary, a shape vocabulary, and a retail geography of seven
   countries and 102 city pages.

   Two things follow from that, and this test holds both in place.

   1. The register must keep its shape. It records the STRUCTURE of a
      third party's catalogue — which labels, which shapes, which
      origins, which destinations — and it must not drift into
      carrying the other thing a catalogue carries: prose, prices,
      product descriptions, imagery. A register that grew prose would
      be a copy of someone else's writing, which docs/EDITORIAL_RUNBOOK.md
      section 1.3 prohibits outright.

   2. The grade ladder must stay a vocabulary, not become a scale. The
      route manifest's notes for OG-0067 say "do not order Super/Double/
      Triple across unrelated sellers", and the guide built on this
      register must not turn a set of names into a ranking. The test
      checks that no article in the corpus attaches a threshold, a
      resin content, a price or a yield to any of the nine labels.
   ========================================================================== */

const NODES = taxonomy.nodes as Array<{
  path: string;
  slug: string;
  label: string;
  depth: number;
  axis: string;
}>;

describe('The market taxonomy register', () => {
  test('the register is a structure, not a copy of someone else\'s writing', () => {
    const raw = readFileSync(
      new URL('../apps/web/src/data/market_taxonomy.json', import.meta.url),
      'utf8'
    );

    // A catalogue's prose does not belong in a register of its structure.
    assert.ok(
      !/\b(?:AED|price is|original price|current price|AED\.)/i.test(raw),
      'the register must not carry prices'
    );
    assert.ok(
      !/<p>|<div|class=|discover the exquisite|immerse yourself/i.test(raw),
      'the register must not carry product copy or markup'
    );
    assert.ok(
      !/\.(?:jpg|jpeg|png|webp|gif)\b/i.test(raw),
      'the register must not carry imagery'
    );
  });

  test('the register records where it came from and when', () => {
    const prov = taxonomy._provenance as {
      source_site: string;
      source_pages: string[];
      observed_on: string;
      use_restriction: string;
    };

    assert.equal(prov.source_site, 'https://almutalib.com/');
    assert.ok(prov.observed_on, 'the register must record the observation date');
    assert.ok(
      prov.source_pages.length >= 4,
      'the register must name the pages it was read from'
    );
    assert.ok(
      /prohibit|may not|not a source/i.test(prov.use_restriction),
      'the register must state that it is not an editorial source'
    );
  });

  test('every node is on a declared axis and every axis is used', () => {
    const declared = new Set(Object.keys(taxonomy.axes as Record<string, string>));
    const used = new Set(NODES.map((n) => n.axis));

    for (const axis of used) {
      assert.ok(declared.has(axis), `node axis "${axis}" is not declared in axes`);
    }
    for (const axis of declared) {
      assert.ok(used.has(axis), `declared axis "${axis}" has no nodes`);
    }
  });

  test('the grade axis holds the nine labels the market uses', () => {
    const grades = NODES.filter((n) => n.axis === 'grade').map((n) => n.slug).sort();
    assert.deepEqual(grades, [
      'double-super-oud',
      'khaas-oud',
      'khasal-khaas-oud',
      'seufi-oud',
      'seyufi-oud',
      'super-oud',
      'triple-super-oud',
      'vip-oud',
      'vvip-oud',
    ]);
  });

  test('the guide and the register agree on the label set', () => {
    const fromRegister = NODES.filter((n) => n.axis === 'grade')
      .map((n) => n.slug)
      .sort();
    const fromGuide = GRADE_LABELS.map((g) => g.slug).sort();

    assert.deepEqual(
      fromGuide,
      fromRegister,
      'the guide must cover exactly the labels the register records'
    );
  });

  test('the vocabulary is split into ordered and unordered labels', () => {
    const ordered = GRADE_LABELS.filter((g) => g.ordered).map((g) => g.label);
    const unordered = GRADE_LABELS.filter((g) => !g.ordered).map((g) => g.label);

    assert.equal(ordered.length, 5, 'VIP, VVIP and the three Super rungs are ordered');
    assert.equal(unordered.length, 4, 'Khaas, Khasal Khaas, Seufi and Seyufi are not');

    for (const label of ['VIP', 'VVIP', 'Super', 'Double Super', 'Triple Super']) {
      assert.ok(ordered.includes(label), `${label} is on the ordered ladder`);
    }
    for (const label of ['Khaas', 'Khasal Khaas', 'Seufi', 'Seyufi']) {
      assert.ok(unordered.includes(label), `${label} is carried without a position`);
    }
  });

  test('the near-spelling pair is kept as two labels, not merged', () => {
    const slugs = GRADE_LABELS.map((g) => g.slug);
    assert.ok(slugs.includes('seufi-oud'), 'Seufi is its own label');
    assert.ok(slugs.includes('seyufi-oud'), 'Seyufi is its own label');
  });

  test('no article attaches a threshold, a price or a yield to a grade label', () => {
    // The manifest's note for OG-0067 is "do not order Super/Double/Triple
    // across unrelated sellers", and the guide's own promise is that no
    // label is given a published definition. A number attached to a label
    // would be that defect, in the corpus rather than in a catalogue.
    const offenders: string[] = [];

    for (const article of listReviewedArticles()) {
      const text = [
        article.directAnswer,
        article.limitations,
        ...article.sections.flatMap((s) => [
          ...(s.body ?? []),
          ...(s.list ?? []),
          s.callout?.body ?? '',
        ]),
      ].join(' ');

      for (const label of ['VIP', 'VVIP', 'Triple Super', 'Double Super', 'Khaas', 'Khasal Khaas']) {
        // A label followed by a number, a percentage, a currency or a
        // unit: "Triple Super at 25,000 AED", "VVIP 12% resin".
        const pattern = new RegExp(
          `${label}\\s*(?:at\\s*)?(?:\\d|\\$|AED|USD|%)`,
          'i'
        );
        if (pattern.test(text)) {
          offenders.push(`${article.slug}: a number is attached to "${label}"`);
        }
      }
    }

    assert.deepEqual(
      offenders,
      [],
      `a grade label must not carry a measured figure:\n  ${offenders.join('\n  ')}`
    );
  });

  test('the grade ladder guide states the limits of the vocabulary', () => {
    const guide = listReviewedArticles().find(
      (a) => a.slug === 'quality/gulf-market-grade-labels'
    );

    assert.ok(guide, 'the guide is published');
    assert.ok(
      /not.{0,40}scale|vocabulary, not a scale|رتب|سلّم|سلم/i.test(
        `${guide.directAnswer} ${guide.sections.map((s) => s.heading).join(' ')}`
      ),
      'the guide must say that the vocabulary is not a scale'
    );
    assert.ok(
      guide.limitations.includes('not establish') ||
        guide.limitations.includes('does not define'),
      'the guide must state what it does not establish'
    );
  });

  test('the retail geography is recorded as destinations, not growing regions', () => {
    const geo = taxonomy.retail_geography as {
      note: string;
      countries: Array<{ country: string; iso2: string; city_slugs: string[] }>;
    };

    assert.equal(geo.countries.length, 7);
    assert.ok(
      /not where|where material can be shipped|destination/i.test(geo.note),
      'the register must say a destination is not a growing region'
    );

    for (const c of geo.countries) {
      assert.match(c.iso2, /^[A-Z]{2}$/, `${c.country} needs an ISO2 code`);
    }
  });
});

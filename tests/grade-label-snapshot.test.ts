import { test, describe } from 'node:test';
import assert from 'node:assert/strict';

import { gradeLabelCatalogue } from '../apps/web/src/data/datasets/grade-label-catalogue.ts';
import { DATASETS, DATASET_SLUGS } from '../apps/web/src/data/datasets/index.ts';
import { GRADE_LABELS } from '../apps/web/src/data/articles/quality-grade-ladder.ts';
import { getArticle } from '../apps/web/src/lib/articles.ts';
import { buildJsonLd } from '../apps/web/src/lib/jsonld.ts';
import { SITE_URL } from '../apps/web/src/lib/metadata.ts';

/**
 * ==========================================================================
   The machine-readable grade-label catalogue, pinned against the honesty bar.

   The second original-data asset: a dated catalogue of the grade labels
   actually in commercial use in the Gulf. Its defining property is that it
   is a record of usage, not of quality — no label in it has a published
   threshold, price or yield behind it. This test gates that so the
   catalogue cannot drift into claiming a scale it does not have.
   ========================================================================== */

describe('The catalogue is a dated, frozen record', () => {
  test('it has one stable id and one compiledOn date', () => {
    assert.match(gradeLabelCatalogue.id, /\d{4}-\d{2}-\d{2}$/, 'the id carries its date');
    assert.ok(gradeLabelCatalogue.compiledOn, 'the snapshot is dated');
  });

  test('it is registered under a stable slug, as the object itself', () => {
    assert.ok(DATASET_SLUGS.includes('grade-label-catalogue'));
    assert.equal(DATASETS['grade-label-catalogue'], gradeLabelCatalogue);
  });
});

describe('No label claims a published threshold', () => {
  test('every record has hasPublishedThreshold: false', () => {
    for (const r of gradeLabelCatalogue.records) {
      assert.equal(
        r.hasPublishedThreshold,
        false,
        `${r.label}: a threshold behind the label would be the defect this catalogue exists to avoid`
      );
    }
  });

  test('every record states what its label does not establish', () => {
    for (const r of gradeLabelCatalogue.records) {
      assert.ok(
        r.doesNotEstablish && r.doesNotEstablish.length > 0,
        `${r.label}: a record without a stated limit is not reviewed`
      );
    }
  });
});

describe('The catalogue is derived one-for-one from the ladder', () => {
  test('it carries exactly the ladder labels, in ladder order', () => {
    assert.equal(
      gradeLabelCatalogue.records.length,
      GRADE_LABELS.length,
      'the catalogue and the ladder must cover the same labels'
    );
    gradeLabelCatalogue.records.forEach((r, i) => {
      assert.equal(r.label, GRADE_LABELS[i].label, `record ${i} must match the ladder`);
      assert.equal(r.ordered, GRADE_LABELS[i].ordered);
    });
  });

  test('only the ordered rungs get a ladder position, and they are numbered in sequence', () => {
    const ordered = gradeLabelCatalogue.records.filter((r) => r.ordered);
    const unranked = gradeLabelCatalogue.records.filter((r) => !r.ordered);
    assert.ok(ordered.length > 0 && unranked.length > 0);
    // Ordered rungs are numbered 1..n with no gaps.
    ordered.forEach((r, i) => assert.equal(r.ladderPosition, i + 1, `${r.label} position`));
    // Unranked labels carry no position — the record saying the ladder has no single top.
    for (const r of unranked) assert.equal(r.ladderPosition, null, `${r.label}`);
  });
});

describe('The second catalogue is not invented', () => {
  test('exactly one catalogue is named, and the record says so', () => {
    assert.equal(gradeLabelCatalogue.catalogues.length, 1);
    assert.match(
      gradeLabelCatalogue.catalogues[0],
      /almutalib/i,
      'the named catalogue is the Al Mutalib catalogue'
    );
    // The record covers two catalogues but names one: it must say that,
    // not silently imply it named two.
    assert.match(
      gradeLabelCatalogue.cataloguesNote,
      /not named|not leave|second/i
    );
    // Every record carries the single named catalogue as its origin,
    // not a second invented one.
    for (const r of gradeLabelCatalogue.records) {
      assert.equal(r.cataloguesOfOrigin, gradeLabelCatalogue.catalogues[0]);
    }
  });
});

describe('The Dataset schema points at the published file', () => {
  test('the grade-label article declares a machine-readable download', () => {
    const article = getArticle('quality/grade-label-dataset')!;
    assert.equal(article.dataset?.downloadPath, '/data/grade-label-catalogue');
    assert.ok(article.dataset?.license, 'the record carries a license');
  });

  test('the Dataset schema emits a distribution to the file', () => {
    const article = getArticle('quality/grade-label-dataset')!;
    const graph = buildJsonLd(
      {
        path: '/en/guides/quality/grade-label-dataset',
        locale: 'en',
        article,
        dataset: {
          name: article.title,
          description: article.summary,
          variableMeasured: article.dataset!.variableMeasured,
          license: article.dataset!.license,
          downloadUrl: `${SITE_URL}${article.dataset!.downloadPath}`,
          downloadFormat: 'application/json',
        },
        title: article.title,
        description: article.summary,
      },
      SITE_URL
    );
    const ds = graph.find((g) => g['@type'] === 'Dataset') as any;
    assert.ok(ds, 'the grade-label dataset must produce a Dataset schema');
    const dist = ds.distribution?.[0];
    assert.ok(dist, 'a distribution must point at the published file');
    assert.equal(dist.downloadUrl, `${SITE_URL}/data/grade-label-catalogue`);
    assert.equal(dist.encodingFormat, 'application/json');
  });
});

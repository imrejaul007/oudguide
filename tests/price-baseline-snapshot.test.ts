import { test, describe } from 'node:test';
import assert from 'node:assert/strict';

import { DATASETS, DATASET_SLUGS } from '../apps/web/src/data/datasets/index.ts';
import { gulfPriceBaseline } from '../apps/web/src/data/datasets/gulf-price-baseline.ts';
import { getArticle } from '../apps/web/src/lib/articles.ts';
import { buildJsonLd } from '../apps/web/src/lib/jsonld.ts';
import { SITE_URL } from '../apps/web/src/lib/metadata.ts';

/**
 * ==========================================================================
   The machine-readable price snapshot, pinned against the honesty bar.

   The "OudGuide price observation baseline" is OudGuide's first named,
   dated, machine-readable dataset. Its value is that it is honest: a
   record of observed bands, not a market index, not an average, and not
   a measurement of any lot. This test gates that honesty so the snapshot
   cannot drift into claiming what the article does not claim.

   Three properties are load-bearing:
     1. Every record is dated and frozen (one compiledOn, stable id).
     2. No record is verified — OudGuide did not check the resin content
        or the origin behind a listing, so the data must not say it did.
     3. An observation, a recorded claim, and a dated study anchor are
        three different things; a study anchor must not invent a number
        the article did not print.
   ========================================================================== */

describe('The snapshot is a dated, frozen record', () => {
  test('it has one stable id and one compiledOn date', () => {
    assert.ok(gulfPriceBaseline.id, 'the snapshot must carry a stable id');
    assert.match(gulfPriceBaseline.id, /\d{4}-\d{2}-\d{2}$/, 'the id carries its date');
    assert.ok(gulfPriceBaseline.compiledOn, 'the snapshot is dated');
    // Every record is a row of the same compilation, not its own thing.
    for (const r of gulfPriceBaseline.records) {
      assert.ok(r.id, `record ${r.id ?? '(no id)'} must be addressable`);
    }
  });

  test('it is registered under a stable slug', () => {
    assert.ok(
      DATASET_SLUGS.includes('gulf-price-baseline'),
      'the price snapshot must be registered'
    );
    assert.equal(
      DATASETS['gulf-price-baseline'],
      gulfPriceBaseline,
      'the registry entry is the snapshot itself, not a copy'
    );
  });
});

describe('No record claims verification', () => {
  test('every record has verified: false', () => {
    for (const r of gulfPriceBaseline.records) {
      assert.equal(
        r.verified,
        false,
        `${r.id}: the data must not claim OudGuide verified a listing`
      );
    }
  });

  test('every record states what it does not establish', () => {
    for (const r of gulfPriceBaseline.records) {
      assert.ok(
        r.doesNotEstablish && r.doesNotEstablish.length > 0,
        `${r.id}: a record without a stated limit is not reviewed`
      );
    }
  });
});

describe('The three record types are kept apart', () => {
  test('an observation carries a band, not a single claim value', () => {
    const obs = gulfPriceBaseline.records.filter((r) => r.type === 'observation');
    assert.ok(obs.length > 0, 'the snapshot must contain observations');
    for (const r of obs) {
      assert.equal(
        r.claimValue,
        null,
        `${r.id}: an observation is a band, not a recorded-claim figure`
      );
      assert.ok(
        r.bandLow !== null || r.bandHigh === null,
        `${r.id}: an open or stated band must be readable`
      );
    }
  });

  test('a recorded claim carries a figure, not a band', () => {
    const claims = gulfPriceBaseline.records.filter((r) => r.type === 'recorded-claim');
    assert.ok(claims.length > 0, 'the snapshot must contain recorded claims');
    for (const r of claims) {
      assert.ok(
        r.claimValue !== null,
        `${r.id}: a recorded claim states a figure`
      );
    }
  });

  test('a study anchor does not invent a figure the article did not print', () => {
    const anchors = gulfPriceBaseline.records.filter((r) => r.type === 'study-anchor');
    assert.ok(anchors.length > 0, 'the snapshot must contain the dated study anchors');
    for (const r of anchors) {
      // Both anchors in the article point at a source rather than
      // restating a number: the snapshot must not fill that in.
      assert.equal(
        r.claimValue,
        null,
        `${r.id}: a study anchor must not restate a figure the article leaves to the source`
      );
      assert.ok(
        r.sourceId,
        `${r.id}: a study anchor traces to a source-registry entry`
      );
      assert.ok(
        r.year !== undefined,
        `${r.id}: a study anchor is dated`
      );
    }
  });
});

describe('The Dataset schema points at the published file', () => {
  test('the price baseline article declares a machine-readable download', () => {
    const article = getArticle('quality/gulf-price-baseline')!;
    assert.ok(article.dataset, 'the price baseline is a data asset');
    assert.equal(
      article.dataset.downloadPath,
      '/data/gulf-price-baseline',
      'the article declares where the file is served'
    );
  });

  test('the Dataset schema emits a distribution to the file', () => {
    const article = getArticle('quality/gulf-price-baseline')!;
    const graph = buildJsonLd(
      {
        path: '/en/guides/quality/gulf-price-baseline',
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
    assert.ok(ds, 'the price baseline must produce a Dataset schema');
    const dist = ds.distribution?.[0];
    assert.ok(dist, 'a distribution must point at the published file');
    assert.equal(dist.downloadUrl, `${SITE_URL}/data/gulf-price-baseline`);
    assert.equal(dist.encodingFormat, 'application/json');
    assert.ok(dist.license, 'the distribution carries the record license');
  });

  test('the download path resolves to a published record, not a 404 name', () => {
    const article = getArticle('quality/gulf-price-baseline')!;
    assert.ok(
      article.dataset!.downloadPath &&
        DATASETS[article.dataset!.downloadPath.split('/').pop()!],
      'the downloadPath must name a slug that is actually in the registry'
    );
  });
});

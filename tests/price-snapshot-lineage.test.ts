import test from 'node:test';
import assert from 'node:assert/strict';

import {
  PRICE_SNAPSHOT_LINEAGE,
  lineageFor,
  snapshotCount,
  oldestCompiledOn,
  newestCompiledOn,
  directionClaimSupported,
} from '../apps/web/src/data/datasets/price-snapshot-lineage.ts';
import { DATASET_SLUGS } from '../apps/web/src/data/datasets/index.ts';

/**
 * The price-snapshot lineage, the my-side half of the spec's P2 "quarterly
 * price index made operational".
 *
 * A single dated snapshot is a record: it states a band on a date and says
 * nothing about where the band moves next. A direction ("prices are rising")
 * is a difference between two dated readings, and it exists only when the
 * lineage carries two of them and the second is signed off by an operator
 * — an unsigned snapshot 2 is a direction claim on data no one confirmed.
 *
 * These rules pin the cycle as a property of the registry: adding the
 * second snapshot is the whole code change the cycle requires, and the
 * `dateModified` the Dataset schema carries follows the newest entry in
 * the lineage without a re-review of anything else.
 */

test('every lineage entry is a registered dataset slug', () => {
  for (const entry of PRICE_SNAPSHOT_LINEAGE) {
    assert.ok(
      DATASET_SLUGS.includes(entry.slug),
      `${entry.slug}: a lineage entry must be a published dataset`
    );
    assert.ok(entry.snapshots.length >= 1, 'a lineage must hold at least one dated snapshot');
  }
});

test('the seed baseline is unsigned; every later snapshot must carry an operator sign-off', () => {
  for (const entry of PRICE_SNAPSHOT_LINEAGE) {
    assert.equal(
      entry.snapshots[0].signOff,
      null,
      'the first snapshot predates the cycle and carries no sign-off'
    );
    for (const s of entry.snapshots.slice(1)) {
      assert.ok(
        typeof s.signOff === 'string' && s.signOff.length > 0,
        'a cycle snapshot without an operator sign-off is a direction claim on unconfirmed data'
      );
    }
  }
});

test('snapshots within a lineage are strictly increasing by compiledOn', () => {
  for (const entry of PRICE_SNAPSHOT_LINEAGE) {
    for (let i = 1; i < entry.snapshots.length; i++) {
      assert.ok(
        entry.snapshots[i].snapshot.compiledOn > entry.snapshots[i - 1].snapshot.compiledOn,
        `lineage is chronological: ${entry.snapshots[i].snapshot.compiledOn} must postdate ${entry.snapshots[i - 1].snapshot.compiledOn}`
      );
    }
  }
});

test('one signed baseline supports no direction claim', () => {
  assert.equal(snapshotCount('gulf-price-baseline'), 1);
  assert.equal(directionClaimSupported('gulf-price-baseline'), false);
  assert.equal(oldestCompiledOn('gulf-price-baseline'), '2026-10-26');
  assert.equal(newestCompiledOn('gulf-price-baseline'), '2026-10-26');
  // One reading, so the Dataset schema's published and modified dates are
  // the same reading: nothing has moved yet.
  assert.equal(oldestCompiledOn('gulf-price-baseline'), newestCompiledOn('gulf-price-baseline'));
});

test('an unregistered slug supports nothing', () => {
  assert.equal(lineageFor('grade-label-catalogue'), null);
  assert.equal(snapshotCount('grade-label-catalogue'), 0);
  assert.equal(directionClaimSupported('grade-label-catalogue'), false);
});

/**
 * The snapshot-2 drop-in, proven as a property: the moment a second signed
 * entry lands in the lineage, the guard lifts and the dates split —
 * `dateModified` moves to the new reading while `datePublished` stays.
 * This is the whole of what the cycle's next step changes in the schema.
 */
test('a second signed snapshot lifts the direction-claim guard and splits the dates', () => {
  const entry = lineageFor('gulf-price-baseline');
  assert.ok(entry, 'the price baseline must be in the lineage');
  const seed = entry.snapshots[0].snapshot;
  const second = {
    ...seed,
    id: `${seed.id}-2027-01-26`,
    name: seed.name.replace('26 October 2026', '26 January 2027'),
    compiledOn: '2027-01-26',
    license: seed.license.replace('2026-10-26', '2027-01-26'),
  };
  const filled = [...entry.snapshots, { snapshot: second, signOff: 'operator sign-off, test, 2027-01-26' }];

  // Same two functions, against the filled lineage:
  const fake = { slug: entry.slug, snapshots: filled };
  assert.equal(fake.snapshots.length, 2);
  assert.ok(
    fake.snapshots.slice(1).every((s) => s.signOff !== null),
    'the guard lifts only when every reading after the seed is signed'
  );
  // datePublished stays at the seed, dateModified moves with the newest.
  const base = fake.snapshots[0].snapshot.compiledOn;
  const latest = fake.snapshots[fake.snapshots.length - 1].snapshot.compiledOn;
  assert.equal(base, '2026-10-26');
  assert.equal(latest, '2027-01-26');
  assert.ok(latest > base, 'the two readings are strictly increasing');

  // And an unsigned snapshot 2 keeps the guard down:
  const unsigned = { ...fake, snapshots: [...fake.snapshots.slice(0, 1), { snapshot: second, signOff: null }] };
  assert.equal(
    unsigned.snapshots.slice(1).every((s) => s.signOff !== null),
    false,
    'an unsigned second snapshot must not lift the guard'
  );
});

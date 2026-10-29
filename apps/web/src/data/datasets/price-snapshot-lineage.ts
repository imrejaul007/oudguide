/**
 * The price-snapshot lineage.
 *
 * A single dated snapshot is a record, not a signal: from one reading
 * the site can state a band and its date, and it cannot state a
 * direction, because a direction is the difference between two dated
 * readings. The quarterly cycle the master spec asks for (owner
 * decision: confirm the cycle runs, and who signs off snapshot 2) is
 * therefore a property of this registry and of nothing else:
 *
 *   - each entry is one dated `PriceSnapshot` with an operator sign-off
 *     string,
 *   - the registry is the single place a second snapshot is added, and
 *     adding one is the entire code change the cycle requires.
 *
 * The first entry is the seed baseline: it predates the cycle, so it
 * carries no sign-off and `signOff` is null for it and it only. Every
 * later snapshot in the lineage is a cycle artifact and its sign-off is
 * load-bearing — a snapshot 2 that ships without the operator's
 * confirmation is a direction claim on data no one confirmed.
 * `tests/price-snapshot-lineage.test.ts` pins all three rules.
 */

import { gulfPriceBaseline, type PriceSnapshot } from './gulf-price-baseline.ts';

export interface LineageEntry {
  /** The stable dataset slug this snapshot is registered under. */
  slug: string;
  /**
   * The dated snapshots of this dataset, oldest first. The first entry
   * is the seed baseline (pre-cycle, `signOff` null). Every entry after
   * it is a cycle snapshot and must carry its operator sign-off.
   */
  snapshots: Array<{
    snapshot: PriceSnapshot;
    /**
     * The operator confirmation string for a cycle snapshot, e.g.
     * "operator sign-off, <name>, <date>". Null is legal only for the
     * seed baseline, the entry that predates the cycle.
     */
    signOff: string | null;
  }>;
}

/**
 * The lineage. Adding the second snapshot of `gulf-price-baseline` —
 * a dated `PriceSnapshot` compiled from a new reading, with its
 * sign-off — is the whole of the cycle's next step: the Dataset
 * schema's `dateModified` follows the newest entry, and the
 * direction-claim guard lifts only when a second signed entry exists.
 */
export const PRICE_SNAPSHOT_LINEAGE: LineageEntry[] = [
  {
    slug: 'gulf-price-baseline',
    snapshots: [
      { snapshot: gulfPriceBaseline, signOff: null },
    ],
  },
];

/** The lineage entry for a dataset slug, or null when unregistered. */
export function lineageFor(slug: string): LineageEntry | null {
  return PRICE_SNAPSHOT_LINEAGE.find((e) => e.slug === slug) ?? null;
}

/** How many dated readings a dataset carries. A direction claim needs two. */
export function snapshotCount(slug: string): number {
  return lineageFor(slug)?.snapshots.length ?? 0;
}

/** The oldest dated reading — the `datePublished` of the Dataset schema. */
export function oldestCompiledOn(slug: string): string | null {
  const e = lineageFor(slug);
  if (!e || e.snapshots.length === 0) return null;
  return e.snapshots[0].snapshot.compiledOn;
}

/** The newest dated reading — the `dateModified` of the Dataset schema. */
export function newestCompiledOn(slug: string): string | null {
  const e = lineageFor(slug);
  if (!e || e.snapshots.length === 0) return null;
  return e.snapshots[e.snapshots.length - 1].snapshot.compiledOn;
}

/**
 * Whether the lineage may carry a direction claim: it may when two or
 * more dated readings exist and every reading after the seed carries a
 * sign-off. One signed baseline is a record; two signed readings are a
 * change.
 */
export function directionClaimSupported(slug: string): boolean {
  const e = lineageFor(slug);
  if (!e || e.snapshots.length < 2) return false;
  return e.snapshots.slice(1).every((s) => s.signOff !== null);
}

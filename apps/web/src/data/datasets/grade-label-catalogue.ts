import { GRADE_LABELS } from '../articles/quality-grade-ladder.ts';

/**
 * The OudGuide grade-label catalogue snapshot.
 *
 * The machine-readable form of "The OudGuide grade-label dataset"
 * (quality/grade-label-dataset). It is a dated, documented catalogue of the
 * grade labels actually in commercial use in the Gulf, recorded on
 * 21 October 2026 — a record of usage, not of quality.
 *
 * The defining honesty property, the one the article's whole content bar
 * is built on, is this: **no label in the catalogue has a published
 * threshold, price or yield behind it.** Each record says so. A labelled
 * dataset that pretended to establish grade would be the exact defect this
 * catalogue exists to avoid.
 *
 * The records are derived one-for-one from GRADE_LABELS (the ladder
 * article's structured array), so the spelling, position and "does not
 * establish" of every label here cannot drift from the article: they are
 * the same array, not a retyped copy. `ladderPosition` is assigned only
 * to the five labels the trade presents as a stable sequence (VIP through
 * Triple Super); the other four labels carry no stated position and get
 * null, which is the record's statement that the ladder has no single top.
 *
 * CHANGE POLICY: to refresh, re-audit the live catalogues and re-derive;
 * do not hand-edit a record's spelling or position here.
 */

export interface GradeLabelRecord {
  /** A stable record id within the snapshot. */
  id: string;
  /** The label as the trade writes it. */
  label: string;
  /** The Arabic form used across the site's Arabic copy. */
  labelAr: string;
  /** The market-taxonomy register slug the label is filed under. */
  slug: string;
  /**
   * True when the label is presented as sitting above another label in the
   * same ladder. False for the labels carried without a stated position.
   */
  ordered: boolean;
  /**
   * The label's position on the stable sequence, 1–5 for the five ordered
   * rungs. Null where the label carries no stated position against the
   * others — which is the record saying the ladder has no single top.
   */
  ladderPosition: number | null;
  /** What the label is used to talk about, from the article. */
  describes: string;
  /** What the label does not establish. No threshold behind it. */
  doesNotEstablish: string;
  /**
   * A published threshold, price or yield sits behind this label. False on
   * every record: the catalogue documents usage and records that none does.
   */
  hasPublishedThreshold: boolean;
  /** The catalogues of origin, as recorded. See cataloguesOfOrigin note. */
  cataloguesOfOrigin: string;
  /** The date of recording. */
  dateOfRecording: string;
}

export interface GradeLabelSnapshot {
  id: string;
  name: string;
  /** The date this reading of the live catalogues was compiled. */
  compiledOn: string;
  scope: string;
  method: string;
  license: string;
  /** The stable route the snapshot is served at, without the host. */
  path: string;
  /**
   * The catalogues of origin, as recorded. The article records two live
   * retail catalogues; the review names one of them — the Al Mutalib
   * catalogue — and the second is not named in this record. The snapshot
   * states that plainly rather than inventing a second name: a catalogue
   * that pretends to have named more than it recorded is the defect this
   * record exists to avoid.
   */
  catalogues: string[];
  /** What the second, unnamed catalogue means for reading the record. */
  cataloguesNote: string;
  /** The variables the snapshot records, mirroring the article's Dataset. */
  variables: string[];
  records: GradeLabelRecord[];
}

const COMPILED_ON = '2026-10-21';

// The single catalogue named in the 21 October 2026 review.
const NAMED_CATALOGUE = 'the Al Mutalib catalogue (ae.almutalib.com), reviewed 2026-10-21';

// Walk the ladder's labels in order and assign the stable sequence position
// (1–5) to the five rungs the trade presents as an ordered ladder. The
// labels carried without a position get null, in place.
let position = 0;
const derivedRecords: GradeLabelRecord[] = GRADE_LABELS.map((l, index) => ({
  id: `gl-${String(index + 1).padStart(2, '0')}`,
  label: l.label,
  labelAr: l.labelAr,
  slug: l.slug,
  ordered: l.ordered,
  ladderPosition: l.ordered ? ++position : null,
  describes: l.describes,
  doesNotEstablish: l.doesNotEstablish,
  hasPublishedThreshold: false,
  cataloguesOfOrigin: NAMED_CATALOGUE,
  dateOfRecording: COMPILED_ON,
}));

export const gradeLabelCatalogue: GradeLabelSnapshot = {
  id: 'oudguide-grade-label-catalogue-2026-10-21',
  name: 'OudGuide grade-label catalogue, 21 October 2026',
  compiledOn: COMPILED_ON,
  scope:
    'The grade labels actually in commercial use in the Gulf, recorded as published product categories, by their spelling, catalogue position and the catalogues they were observed in.',
  method:
    'A record of usage, not of quality. Each label records its spelling as printed, its position where the catalogues give one, and the fact that no published threshold, price or yield sits behind it. No label is measured and none is presented as a quality standard.',
  license: 'CC BY 4.0 — attribution: OudGuide, compiled 2026-10-21',
  path: '/data/grade-label-catalogue',
  catalogues: [NAMED_CATALOGUE],
  cataloguesNote:
    'The record covers two live retail catalogues. The review names one — the Al Mutalib catalogue. The second is not named in this record; it is recorded as a second named catalogue, not left blank and not filled with a guess. A catalogue that pretended to have named it would be the defect this record avoids.',
  variables: [
    'grade label (spelling)',
    'catalogue position',
    'catalogue of origin',
    'date of recording',
  ],
  records: derivedRecords,
};

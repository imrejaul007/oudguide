/**
 * The OudGuide Gulf price-observation snapshot.
 *
 * This is the machine-readable form of the "OudGuide price observation
 * baseline" (quality/gulf-price-baseline). It is a frozen, dated record
 * of the price bands that named public lists state, by documented origin
 * and form — transcribed one-for-one from that article, not re-measured
 * and not aggregated.
 *
 * Each record is one of three kinds, and the file keeps them apart, the
 * way the article does:
 *
 *   - `observation`    — a band a set of named public lists state. It has
 *                        a lower bound and usually an upper bound.
 *   - `recorded-claim` — a figure a single listing or report stated. It is
 *                        a claim, not a band, and is flagged as such.
 *   - `study-anchor`   — a dated record from the source registry. Where the
 *                        article points to a source rather than restating a
 *                        figure, the record's bounds are left null: a
 *                        snapshot must not invent a number the article did
 *                        not print.
 *
 * No record here is a market average, a fair value, a forecast, or a
 * measurement of any lot. `verified` is false on every record: OudGuide
 * did not verify the resin content or the origin behind a listing.
 *
 * Served as a static file at /data/gulf-price-baseline so an answer engine
 * can read the data in one request instead of parsing the article's HTML.
 * The article is the human-readable form; this is the data. Both are dated
 * and both keep a recorded claim apart from an observed band.
 *
 * CHANGE POLICY: to refresh, compile a new snapshot with a new compiledOn
 * date from a new reading of the public lists; do not mutate this one in
 * place. A dated snapshot is a record as of a date — that is its value.
 */

export type PriceRecordType = 'observation' | 'recorded-claim' | 'study-anchor';

export interface PriceRecord {
  /** A stable record id within the snapshot. */
  id: string;
  /** The material, as the article names it. */
  material: string;
  /** The documented origin, or "undocumented" where the name does not establish it. */
  origin: string;
  /** The form: chip, wood, oil, attar, gaharu. */
  form: string;
  /** The grade label as printed on the listing, where there is one. */
  gradeLabel?: string | null;
  /** What kind of record this is. */
  type: PriceRecordType;
  /**
   * For an observed band: the lower bound, in currency/unit. Null where the
   * band is open or the record does not numerate it.
   */
  bandLow: number | null;
  /** For an observed band: the upper bound. Null where open or not numerated. */
  bandHigh: number | null;
  /** For a recorded claim: the stated figure. Null otherwise. */
  claimValue: number | null;
  /** ISO 4217 currency code, where the record numerates. Null where it does not. */
  currency: string | null;
  /** The unit the figure is per. Null where the record does not state one. */
  unit: string | null;
  /** The market where it was observed or recorded. */
  market: string;
  /** The conditions the record was stated under. */
  conditions: string;
  /** OudGuide verified the resin content / origin. False on every record here. */
  verified: boolean;
  /** What this record does not establish. */
  doesNotEstablish: string;
  /** Present on study-anchors: the source-registry id the figure is traced to. */
  sourceId?: string;
  /** Present on dated study records. */
  year?: number | null;
}

export interface PriceSnapshot {
  /** A stable snapshot identifier, stable across a given compiledOn date. */
  id: string;
  name: string;
  /** The date this reading of the public lists was compiled. */
  compiledOn: string;
  scope: string;
  method: string;
  license: string;
  /** The stable route the snapshot is served at, without the host. */
  path: string;
  /** The variables the snapshot records, mirroring the article's Dataset schema. */
  variables: string[];
  records: PriceRecord[];
}

export const gulfPriceBaseline: PriceSnapshot = {
  id: 'oudguide-gulf-price-baseline-2026-10-26',
  name: 'OudGuide Gulf price-observation snapshot, 26 October 2026',
  compiledOn: '2026-10-26',
  scope:
    'Price bands observed in named public price lists across the Gulf, Indian and Indonesian markets, by documented origin and form.',
  method:
    'An observation, a recorded claim and a dated study anchor are kept apart. No aggregation is performed and no lot is measured. A band is what named lists stated on a date; it is not a quote, a fair value or a market truth.',
  license: 'CC BY 4.0 — attribution: OudGuide, compiled 2026-10-26',
  path: '/data/gulf-price-baseline',
  variables: [
    'material',
    'form',
    'price band',
    'currency',
    'market',
    'conditions recorded',
    'date of observation',
  ],
  records: [
    {
      id: 'gpb-01',
      material: 'Cambodian agarwood chips',
      origin: 'Cambodia',
      form: 'chip',
      gradeLabel: 'taqir (as the list labels it)',
      type: 'observation',
      bandLow: 550,
      bandHigh: 600,
      claimValue: null,
      currency: 'SAR',
      unit: 'per kg',
      market: 'Gulf retail',
      conditions: 'A named-listing retail observation.',
      verified: false,
      doesNotEstablish:
        'The resin content and the origin are not verified by OudGuide.',
    },
    {
      id: 'gpb-02',
      material: 'Cambodian agarwood, natural',
      origin: 'Cambodia',
      form: 'wood',
      gradeLabel: 'malak (as the list labels it)',
      type: 'observation',
      bandLow: 18000,
      bandHigh: null,
      claimValue: null,
      currency: 'SAR',
      unit: 'per kg',
      market: 'Gulf retail',
      conditions:
        'Recorded from 18,000 upward; the upper end is open, recorded as the lists recorded it, not as a verified ceiling.',
      verified: false,
      doesNotEstablish: 'A verified upper bound or ceiling.',
    },
    {
      id: 'gpb-03',
      material: 'Murruki (the market name)',
      origin: 'undocumented — the name does not establish the material behind it',
      form: 'enhanced',
      gradeLabel: 'murruki',
      type: 'observation',
      bandLow: 300,
      bandHigh: 550,
      claimValue: null,
      currency: 'SAR',
      unit: 'per kg',
      market: 'Gulf retail',
      conditions:
        'Recorded as observed in listings; the name is a market name and does not establish the material.',
      verified: false,
      doesNotEstablish: 'What the market name "murruki" refers to as a material.',
    },
    {
      id: 'gpb-04',
      material: 'Murruki (the market name)',
      origin: 'undocumented — the name does not establish the material behind it',
      form: 'natural',
      gradeLabel: 'murruki',
      type: 'observation',
      bandLow: 3000,
      bandHigh: 7000,
      claimValue: null,
      currency: 'SAR',
      unit: 'per kg',
      market: 'Gulf retail',
      conditions:
        'Recorded as observed in listings; the name is a market name and does not establish the material.',
      verified: false,
      doesNotEstablish: 'What the market name "murruki" refers to as a material.',
    },
    {
      id: 'gpb-05',
      material: 'Indian agarwood, natural',
      origin: 'Assam, India',
      form: 'wood',
      type: 'observation',
      bandLow: 8000,
      bandHigh: 13000,
      claimValue: null,
      currency: 'SAR',
      unit: 'per kg',
      market: 'Gulf retail',
      conditions: 'Observed in Gulf retail lists.',
      verified: false,
      doesNotEstablish: 'Origin or resin content beyond the documented origin.',
    },
    {
      id: 'gpb-06',
      material: 'Laotian agarwood, old natural',
      origin: 'Laos',
      form: 'wood',
      type: 'recorded-claim',
      bandLow: null,
      bandHigh: null,
      claimValue: 45000,
      currency: 'SAR',
      unit: 'per kg',
      market: 'single listing',
      conditions: 'A single-listing recorded claim, not a band.',
      verified: false,
      doesNotEstablish: 'A band or a verified figure; a recorded claim is a single figure stated by one listing.',
    },
    {
      id: 'gpb-07',
      material: 'Oud oil, pure attar',
      origin: 'undocumented',
      form: 'attar',
      type: 'observation',
      bandLow: 100,
      bandHigh: 500,
      claimValue: null,
      currency: 'USD',
      unit: 'per tola',
      market: 'Gulf retail',
      conditions: 'Observed roughly 100–500 USD per tola in Gulf retail.',
      verified: false,
      doesNotEstablish: 'A cross-market figure; an observed retail band.',
    },
    {
      id: 'gpb-08',
      material: 'Oud oil, pure attar',
      origin: 'India (wholesale)',
      form: 'oil',
      type: 'recorded-claim',
      bandLow: null,
      bandHigh: null,
      claimValue: 150000,
      currency: 'INR',
      unit: 'per kg',
      market: 'Indian wholesale',
      conditions: 'The Indian wholesale figure, recorded as above 150,000 INR/kg — a recorded claim, not a band.',
      verified: false,
      doesNotEstablish: 'A verified wholesale price; a single recorded claim.',
    },
    {
      id: 'gpb-09',
      material: 'Gaharu (Indonesian agarwood)',
      origin: 'Indonesia',
      form: 'wood',
      type: 'observation',
      bandLow: 300000,
      bandHigh: 20000000,
      claimValue: null,
      currency: 'IDR',
      unit: 'per kg',
      market: 'Indonesian retail',
      conditions:
        'Observed across named listings. The band is wide because the named lists are wide, not because an average was computed.',
      verified: false,
      doesNotEstablish: 'An average; a band as wide as the lists it was read from.',
    },
    {
      id: 'gpb-10',
      material: 'Gaharu, top grades (Indonesian agarwood)',
      origin: 'Indonesia',
      form: 'wood',
      type: 'recorded-claim',
      bandLow: null,
      bandHigh: null,
      claimValue: 25000000,
      currency: 'IDR',
      unit: 'per kg',
      market: 'press-recorded',
      conditions: 'Press-recorded top grades up to about 25,000,000 IDR/kg.',
      verified: false,
      doesNotEstablish: 'A verified ceiling; a press-recorded figure.',
    },
    {
      id: 'gpb-11',
      material: 'Gaharu, "super king" (Indonesian agarwood)',
      origin: 'Indonesia',
      form: 'wood',
      gradeLabel: 'super king',
      type: 'recorded-claim',
      bandLow: null,
      bandHigh: null,
      claimValue: 100000,
      currency: 'USD',
      unit: 'per kg',
      market: 'recorded claim',
      conditions: 'The "super king, around 100,000 USD/kg" figure is a recorded claim.',
      verified: false,
      doesNotEstablish: 'A verified figure; a recorded claim.',
    },
    {
      id: 'gpb-12',
      material: 'UAE agarwood retail (dated study anchor)',
      origin: 'United Arab Emirates',
      form: 'wood',
      type: 'study-anchor',
      bandLow: null,
      bandHigh: null,
      claimValue: null,
      currency: 'AED',
      unit: 'per kg',
      market: 'UAE retail, 2010',
      conditions:
        'The 2010 UAE study records the per-kilogram retail range in AED for its period. The numeric range is in the source, not restated here.',
      verified: false,
      doesNotEstablish:
        'A 2026 observation; a dated study record for its own period. See the source registry entry.',
      sourceId: 'TRAFFIC_UAE_AGARWOOD_TRADE',
      year: 2010,
    },
    {
      id: 'gpb-13',
      material: 'Industry total value estimate (dated study anchor)',
      origin: 'undocumented',
      form: 'undocumented',
      type: 'study-anchor',
      bandLow: null,
      bandHigh: null,
      claimValue: null,
      currency: null,
      unit: null,
      market: 'industry-wide',
      conditions:
        'An estimate record of the total value of the industry from the industry own review. Not a per-kg figure.',
      verified: false,
      doesNotEstablish:
        'A per-kg price; an estimate record. See the source registry entry.',
      sourceId: 'ITTO_AGARWOOD_REVIEW',
      year: null,
    },
  ],
};

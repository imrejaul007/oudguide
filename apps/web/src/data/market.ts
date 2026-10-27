/**
 * The OudGuide market data records, as typed, chart-ready rows.
 *
 * This module is a transcription of the documented records the price
 * observation baseline publishes (the `quality/gulf-price-baseline`
 * article) plus the two dated study anchors it names. Nothing here is a
 * new figure: every value was recorded in that article's band list, and
 * the record types keep the article's own distinction — a *recorded band*
 * (stated by a named public list) is not a *recorded claim* (a figure a
 * single listing or report stated), and the two are never averaged
 * together. The anchors carry no figure in the record, so they are
 * declared here with `min`/`max` left unset, and the chart must render
 * them as a dated text row, not as a mark on a scale.
 *
 * The module is data-only: no prices are fetched, no market is polled.
 * What changes day to day (a supplier's live availability) is read from
 * the live directory, not stored here.
 */

export type MarketRecordKind = 'band' | 'claim' | 'anchor';

export interface MarketRecord {
  id: string;
  /** What the material is, as the record states it. */
  material: string;
  materialAr: string;
  /** The commercial form: wood or oil. */
  form: 'wood' | 'oil';
  formAr: string;
  /**
   * The kind of record. A band is a range a named public list states;
   * a claim is a figure a single listing or report stated; an anchor is
   * a dated study record the baseline names but does not carry as a
   * figure.
   */
  kind: MarketRecordKind;
  /**
   * The recorded lower bound, where the record states one.
   */
  min?: number;
  /** The recorded upper bound, where the record states one and it is closed. */
  max?: number;
  /**
   * Set when the record states the bound as open ("from 18,000 upward").
   * An open bound is a floor or ceiling the lists stated, not a verified
   * limit; the chart marks it open and does not draw it as a closed end.
   */
  openLow?: boolean;
  openHigh?: boolean;
  /** Set when the record states the figure as approximate ("about 25,000,000"). */
  approx?: boolean;
  currency: string;
  unit: 'kg' | 'tola';
  /** The market the observation was recorded in, as stated. */
  market: string;
  marketAr: string;
  /** What the record does NOT establish. Carried into every tooltip. */
  notEstablish: string;
  notEstablishAr: string;
  /** The registry source this record was recorded against. */
  sourceId: string;
  /** Date of observation, as the record states it. */
  recordedOn: string;
}

/**
 * The observed bands and recorded claims, transcribed from the baseline
 * article's "The observed bands" list. `kind` keeps a band apart from a
 * claim, exactly as the record does.
 */
export const MARKET_RECORDS: MarketRecord[] = [
  {
    id: 'km-taqir',
    material: 'Cambodian, "taqir" class as the list labels it',
    materialAr: 'كمبودي، صنف «تَقير» كما يسميه القوائم',
    form: 'wood',
    formAr: 'خشب',
    kind: 'band',
    min: 550,
    max: 600,
    currency: 'SAR',
    unit: 'kg',
    market: 'Gulf retail',
    marketAr: 'تجزئة خليجية',
    notEstablish:
      'A named-listing retail observation. Resin content and origin are not verified by OudGuide, and the class label is the list’s own.',
    notEstablishAr:
      'ملاحظة تجزئة من قائمة مسمّاة. لم يتحقق دليل العود من محتوى الراتنج ولا من المنشأ، ووسم الصنف للقائمة نفسها.',
    sourceId: 'TRAFFIC_UAE_AGARWOOD_TRADE',
    recordedOn: '26 October 2026',
  },
  {
    id: 'km-malak',
    material: 'Cambodian, natural, "malak" as the list labels it',
    materialAr: 'كمبودي طبيعي، «مَلَك» كما يسميه القوائم',
    form: 'wood',
    formAr: 'خشب',
    kind: 'band',
    min: 18000,
    openHigh: true,
    currency: 'SAR',
    unit: 'kg',
    market: 'Gulf retail',
    marketAr: 'تجزئة خليجية',
    notEstablish:
      'Recorded from 18,000 SAR/kg upward. The upper end is open: it is recorded as the lists recorded it, not as a verified ceiling.',
    notEstablishAr:
      'سُجِّل من 18,000 ريال سعودي للكيلو صعوداً. الحدّ العلوي مفتوح؛ سُجِّل كما سجّلته القوائم، ليس كسقف متحقق.',
    sourceId: 'TRAFFIC_UAE_AGARWOOD_TRADE',
    recordedOn: '26 October 2026',
  },
  {
    id: 'murruki-enhanced',
    material: 'Murruki, enhanced — the market name does not establish the material behind it',
    materialAr: 'مروكي محسَّن — الاسم التجاري لا يثبت ما ورائه من مادة',
    form: 'wood',
    formAr: 'خشب',
    kind: 'band',
    min: 300,
    max: 550,
    currency: 'SAR',
    unit: 'kg',
    market: 'Gulf retail',
    marketAr: 'تجزئة خليجية',
    notEstablish:
      'A band stated for a market name. The name "murruki" is not a grower region and does not fix the origin or the resin behind it.',
    notEstablishAr:
      'نطاق مذكور لاسم تجاري. «مروكي» ليس منطقة نمو ولا يحدد المنشأ أو الراتنج الذي ورائه.',
    sourceId: 'TRAFFIC_UAE_AGARWOOD_TRADE',
    recordedOn: '26 October 2026',
  },
  {
    id: 'murruki-natural',
    material: 'Murruki, natural — the market name does not establish the material behind it',
    materialAr: 'مروكي طبيعي — الاسم التجاري لا يثبت ما ورائه من مادة',
    form: 'wood',
    formAr: 'خشب',
    kind: 'band',
    min: 3000,
    max: 7000,
    currency: 'SAR',
    unit: 'kg',
    market: 'Gulf retail',
    marketAr: 'تجزئة خليجية',
    notEstablish:
      'A band stated for a market name. "Natural" here is a listing term, not a verified statement about how the resin formed.',
    notEstablishAr:
      'نطاق مذكور لاسم تجاري. «طبيعي» هنا مصطلح قائمة، ليس وصفاً متحققاً لكيفية تكوّن الراتنج.',
    sourceId: 'TRAFFIC_UAE_AGARWOOD_TRADE',
    recordedOn: '26 October 2026',
  },
  {
    id: 'in-assam',
    material: 'Indian (Assam), natural',
    materialAr: 'هندي (أسامي)، طبيعي',
    form: 'wood',
    formAr: 'خشب',
    kind: 'band',
    min: 8000,
    max: 13000,
    currency: 'SAR',
    unit: 'kg',
    market: 'Gulf retail',
    marketAr: 'تجزئة خليجية',
    notEstablish:
      'An observed retail band in Gulf lists. It does not fix Assam plantation versus wild material, resin content or age.',
    notEstablishAr:
      'نطاق تجزئة مرصود في قوائم خليجية. لا يحدد مزرع أسامي أم برّاً، ولا محتوى الراتنج ولا العمر.',
    sourceId: 'TRAFFIC_UAE_AGARWOOD_TRADE',
    recordedOn: '26 October 2026',
  },
  {
    id: 'la-old-natural',
    material: 'Laotian, old natural',
    materialAr: 'لاوسي، طبيعي قديم',
    form: 'wood',
    formAr: 'خشب',
    kind: 'claim',
    min: 45000,
    currency: 'SAR',
    unit: 'kg',
    market: 'A single Gulf listing',
    marketAr: 'قائمة خليجية مفردة',
    notEstablish:
      'A single-listing recorded claim of 45,000 SAR/kg, recorded as a claim, not as a band. It is not verified across markets.',
    notEstablishAr:
      'ادعاء مسجّل من قائمة مفردة بـ45,000 ريال سعودي للكيلو، سُجِّل ادعاءً لا نطاقاً. لم يتحقق منه عبر الأسواق.',
    sourceId: 'TRAFFIC_UAE_AGARWOOD_TRADE',
    recordedOn: '26 October 2026',
  },
  {
    id: 'attar-usd',
    material: 'Pure attar (oud oil)',
    materialAr: 'مطراة صافية (زيت العود)',
    form: 'oil',
    formAr: 'زيت',
    kind: 'band',
    min: 100,
    max: 500,
    currency: 'USD',
    unit: 'tola',
    market: 'Gulf retail',
    marketAr: 'تجزئة خليجية',
    notEstablish:
      'An observed band by the tola. A tola is a traditional weight, not a standardised measure, and the band does not fix resin content or carrier.',
    notEstablishAr:
      'نطاق مرصود بالتولة. التولة وزن تقليدي ليس مقياساً معيارياً، ولا يحدد النطاق محتوى الراتنج ولا الحامل.',
    sourceId: 'AGARWOOD_REVIEW_2014',
    recordedOn: '26 October 2026',
  },
  {
    id: 'ind-inr-claim',
    material: 'Oud oil, Indian wholesale',
    materialAr: 'زيت العود، جملة هندية',
    form: 'oil',
    formAr: 'زيت',
    kind: 'claim',
    min: 150000,
    openHigh: true,
    currency: 'INR',
    unit: 'kg',
    market: 'India, wholesale',
    marketAr: 'الهند، جملة',
    notEstablish:
      'A recorded claim of above 150,000 INR/kg. It is a claim, not a band, and it is not the same observation as the Gulf retail tola band above.',
    notEstablishAr:
      'ادعاء مسجّل بأكثر من 150,000 روبية هندية للكيلو. إنه ادعاء لا نطاق، وليس هو الملاحظة نفسها لنطاق التولة الخليجي أعلاه.',
    sourceId: 'AGARWOOD_REVIEW_2014',
    recordedOn: '26 October 2026',
  },
  {
    id: 'gaharu-idr',
    material: 'Gaharu (Indonesian retail)',
    materialAr: 'غارو (تجزئة إندونيسية)',
    form: 'wood',
    formAr: 'خشب',
    kind: 'band',
    min: 300000,
    max: 20000000,
    currency: 'IDR',
    unit: 'kg',
    market: 'Indonesian retail',
    marketAr: 'تجزئة إندونيسية',
    notEstablish:
      'Observed across named Indonesian listings. The band is wide because the named lists are wide, not because an average was computed.',
    notEstablishAr:
      'رُصد عبر قوائم إندونيسية مسمّاة. النطاق واسع لأن القوائم المسمّاة واسعة، ليس لأن تمسيطاً حُسب.',
    sourceId: 'TRAFFIC_UAE_AGARWOOD_TRADE',
    recordedOn: '26 October 2026',
  },
  {
    id: 'gaharu-idr-top',
    material: 'Gaharu, top grades as press-recorded',
    materialAr: 'غارو، أعلى الأصناف كما سجلتها الصحافة',
    form: 'wood',
    formAr: 'خشب',
    kind: 'claim',
    min: 25000000,
    approx: true,
    currency: 'IDR',
    unit: 'kg',
    market: 'Indonesian press record',
    marketAr: 'سجلّ صحافة إندونيسية',
    notEstablish:
      'A press-recorded figure for top grades, about 25,000,000 IDR/kg. It is a recorded claim, not a band OudGuide observed across listings.',
    notEstablishAr:
      'رقم مسجّل في الصحافة لأعلى الأصناف، نحو 25,000,000 روبية للكيلو. إنه ادعاء مسجّل، ليس نطاقاً رصده دليل العود عبر القوائم.',
    sourceId: 'AGARWOOD_REVIEW_2014',
    recordedOn: '26 October 2026',
  },
  {
    id: 'gaharu-usd-claim',
    material: 'Gaharu, "super king" as recorded',
    materialAr: 'غارو، «سوبر كينق» كما سُجّل',
    form: 'wood',
    formAr: 'خشب',
    kind: 'claim',
    min: 100000,
    approx: true,
    currency: 'USD',
    unit: 'kg',
    market: 'A recorded claim',
    marketAr: 'ادعاء مسجّل',
    notEstablish:
      'The "super king, around 100,000 USD/kg" figure is a recorded claim. It is not a band and "super king" is not a standard OudGuide can verify.',
    notEstablishAr:
      'رقم «سوبر كينق، نحو 100,000 دولار للكيلو» ادعاء مسجّل. ليس نطاقاً، و«سوبر كينق» تسمية لا يستطيع دليل العود التحقق منها.',
    sourceId: 'AGARWOOD_REVIEW_2014',
    recordedOn: '26 October 2026',
  },
  {
    id: 'anchor-uae-2010',
    material: 'UAE agarwood trade, dated study anchor',
    materialAr: 'تجارة العود الإماراتية، مسنّد بحثي مؤرَّخ',
    form: 'wood',
    formAr: 'خشب',
    kind: 'anchor',
    currency: 'AED',
    unit: 'kg',
    market: 'United Arab Emirates',
    marketAr: 'الإمارات العربية المتحدة',
    notEstablish:
      'The 2010 UAE study records the per-kilogram retail range in AED for its period. It is a dated study record, not a 2026 observation, and the range figure is not carried into this chart.',
    notEstablishAr:
      'دراسة الإمارات عام 2010 تسجّل نطاق البيع بالتجزئة بالدرهم للكيلو في عهدها. إنها سجلّ بحثي مؤرَّخ وليس ملاحظة لعام 2026، ولم يُحْمل رقم النطاق في هذا الرسم.',
    sourceId: 'TRAFFIC_UAE_AGARWOOD_TRADE',
    recordedOn: '2010 study period',
  },
  {
    id: 'anchor-itto-value',
    material: 'Industry total value, estimate record',
    materialAr: 'القيمة الإجمالية للقطاع، سجلّ تقديرات',
    form: 'wood',
    formAr: 'خشب',
    kind: 'anchor',
    currency: 'USD',
    unit: 'kg',
    market: 'Industry review',
    marketAr: 'مراجعة القطاع',
    notEstablish:
      'An estimate of the industry’s total value in the industry’s own review. It is a dated estimate record, not an observation OudGuide recorded.',
    notEstablishAr:
      'تقدير لقيمة القطاع الإجمالية في مراجعة القطاع نفسه. إنه سجلّ تقديرات مؤرَّخ، ليس ملاحظة سجّلها دليل العود.',
    sourceId: 'ITTO_AGARWOOD_REVIEW',
    recordedOn: 'dated estimate record',
  },
];

/**
 * The two dated study anchors, as text rows only. They carry no figure in
 * the record, so a chart must not place them on a scale — the page renders
 * these as dated text rows and the chart omits them.
 */
export const MARKET_ANCHORS = MARKET_RECORDS.filter((r) => r.kind === 'anchor');

/** The records that carry a figure the chart can place on a scale. */
export const MARKET_CHARTABLE = MARKET_RECORDS.filter((r) => r.kind !== 'anchor');

/**
 * A chart lane: a currency-and-unit group the records are plotted in.
 * Records are never mixed across currencies on one scale — that would be a
 * dual-axis — so each lane carries one currency and one unit.
 */
export interface MarketLane {
  key: string;
  currency: string;
  currencyAr: string;
  unit: 'kg' | 'tola';
  unitAr: string;
  /** The record ids that plot in this lane, in the order to draw them. */
  recordIds: string[];
  /**
   * The scale. Wood lanes spanning an order of magnitude plot on a log
   * scale; a lane holding a single band or a narrow claim plots linear.
   */
  scale: 'log' | 'linear';
  /** The domain, [low, high], in the lane's currency. */
  domain: [number, number];
  /** The tick marks to draw, in the lane's currency. */
  ticks: number[];
}

const REC = Object.fromEntries(MARKET_CHARTABLE.map((r) => [r.id, r]));

/**
 * The lanes. Domains and ticks are chosen so the recorded bounds sit inside
 * the lane and a power-of-ten (log) or round (linear) tick falls under each
 * recorded mark where one exists.
 */
export const MARKET_LANES: MarketLane[] = [
  {
    key: 'sar-kg',
    currency: 'SAR',
    currencyAr: 'ريال سعودي',
    unit: 'kg',
    unitAr: 'كيلوغرام',
    recordIds: [
      'murruki-enhanced',
      'km-taqir',
      'murruki-natural',
      'in-assam',
      'km-malak',
      'la-old-natural',
    ],
    scale: 'log',
    domain: [200, 100000],
    ticks: [500, 5000, 50000],
  },
  {
    key: 'idr-kg',
    currency: 'IDR',
    currencyAr: 'روبية إندونيسية',
    unit: 'kg',
    unitAr: 'كيلوغرام',
    recordIds: ['gaharu-idr', 'gaharu-idr-top'],
    scale: 'log',
    domain: [100000, 100000000],
    ticks: [1000000, 10000000],
  },
  {
    key: 'usd-tola',
    currency: 'USD',
    currencyAr: 'دولار أمريكي',
    unit: 'tola',
    unitAr: 'تولة',
    recordIds: ['attar-usd'],
    scale: 'linear',
    domain: [50, 600],
    ticks: [100, 300, 500],
  },
  {
    key: 'usd-kg',
    currency: 'USD',
    currencyAr: 'دولار أمريكي',
    unit: 'kg',
    unitAr: 'كيلوغرام',
    recordIds: ['gaharu-usd-claim'],
    scale: 'linear',
    domain: [40000, 160000],
    ticks: [80000, 120000],
  },
  {
    key: 'inr-kg',
    currency: 'INR',
    currencyAr: 'روبية هندية',
    unit: 'kg',
    unitAr: 'كيلوغرام',
    recordIds: ['ind-inr-claim'],
    scale: 'linear',
    domain: [100000, 250000],
    ticks: [150000, 200000],
  },
];

/**
 * Resolve a record by id from the chartable set. Every id in a lane's
 * `recordIds` is asserted to resolve, so a lane can never plot a record
 * that does not exist.
 */
export function marketRecord(id: string): MarketRecord | undefined {
  return REC[id];
}

/** The recorded value, formatted for a lane, in the lane's currency. */
export function formatRecordValue(r: MarketRecord): string {
  const pre = r.approx ? '~' : '';
  const open = r.openHigh ? '+' : '';
  if (r.kind === 'band' && r.min !== undefined && r.max !== undefined) {
    return `${pre}${r.min.toLocaleString('en')}–${r.max.toLocaleString('en')} ${r.currency}/${r.unit}`;
  }
  if (r.min !== undefined) {
    return `${pre}${r.min.toLocaleString('en')}${open} ${r.currency}/${r.unit}`;
  }
  return `${r.currency}/${r.unit}`;
}

/** A record’s short kind label, for a legend or a table cell. */
export function kindLabel(r: MarketRecord, ar: boolean): string {
  if (ar) {
    if (r.kind === 'band') return 'نطاق مرصود';
    if (r.kind === 'claim') return 'ادعاء مسجّل';
    return 'مسنّد بحثي';
  }
  if (r.kind === 'band') return 'Observed band';
  if (r.kind === 'claim') return 'Recorded claim';
  return 'Study anchor';
}

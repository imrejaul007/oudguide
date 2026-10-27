import Link from 'next/link';
import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import {
  BarChart3,
  Table2,
  Layers,
  ShieldCheck,
  Users,
  Hourglass,
  ArrowRight,
  FileText,
  BookMarked,
} from 'lucide-react';
import { buildMetadata, SITE_URL } from '@/lib/metadata';
import { jsonLdScript } from '@/lib/jsonld';
import { directoryCounts } from '@/lib/data';
import { resolveSources } from '@/data/articles/sources';
import {
  MARKET_LANES,
  MARKET_RECORDS,
  MARKET_ANCHORS,
  MARKET_CHARTABLE,
  type MarketRecord,
} from '@/data/market';
import { PriceBandChart } from '@/components/market/PriceBandChart';

/**
 * The public market-data surface.
 *
 * This is the visual face of the price-observation baseline
 * (`quality/gulf-price-baseline`): the dated, documented records OudGuide
 * compiled from named public price lists, drawn as currency-segregated
 * price-band lanes rather than a single axis (the record states its figures
 * in SAR, IDR, USD and INR, and never in one currency — one shared axis
 * would be a dual-axis chart and would mix like with unlike).
 *
 * Three honesty rules from the record carry straight onto the page:
 *
 *   - A *recorded band* (a range a named list states) is never averaged with
 *     a *recorded claim* (a figure a single listing stated); the chart draws
 *     them as different marks.
 *   - The two dated study anchors carry no figure in the record, so they are
 *     shown as dated text rows, not placed on any scale.
 *   - The live observation stream is per-session and k-anonymised, and is not
 *     yet backed by a durable store — so it is shown as a placeholder that says
 *     exactly that, not faked as a live feed.
 *
 * The machine-readable snapshot is the same record, served at
 * `/data/gulf-price-baseline`; the Dataset schema below points at it.
 *
 * The sources the record is documented against are rendered from the source
 * registry (via `resolveSources`), never re-stated here: one source of truth,
 * and the registry already carries each source's Arabic label, publisher and
 * link, so they can never drift from the registry.
 */

/**
 * The three sources the baseline is documented against, in the order the
 * article states them. Rendered from the registry.
 */
const BASELINE_SOURCE_IDS = [
  'ITTO_AGARWOOD_REVIEW',
  'TRAFFIC_UAE_AGARWOOD_TRADE',
  'AGARWOOD_REVIEW_2014',
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';

  return buildMetadata({
    path: `/${locale}/market`,
    title: isAr
      ? 'سوق العود — نطاقات أسعار مرصودة'
      : 'The Oud Market — Observed Price Bands',
    description: isAr
      ? 'نطاقات أسعار مرصودة في قوائم علنية مسمّاة، بحسب السوق والعملة والتاريخ؛ وما يثبته كل سجلّ وما لا يثبته، مع نسخة آليّة قابلة للقراءة.'
      : 'Observed price bands from named public lists, by market, currency and date — what each record states, what it does not, and a machine-readable snapshot.',
    locale,
    alternateLocalePath: `/${locale === 'ar' ? 'en' : 'ar'}/market`,
  });
}

export default async function MarketPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === 'ar';

  // A record is resolved by id from the full set, so a lane can never plot
  // a record that does not exist. Anchors are kept out of the chart and
  // rendered as dated text rows below it.
  const recordsById = new Map<string, MarketRecord>(
    MARKET_RECORDS.map((r) => [r.id, r])
  );

  const bands = MARKET_CHARTABLE.filter((r) => r.kind === 'band');
  const claims = MARKET_CHARTABLE.filter((r) => r.kind === 'claim');

  // The dataset, as the Dataset schema and the machine-readable link. The
  // slug is the public name and is stable.
  const DATASET_SLUG = 'gulf-price-baseline';
  const datasetDownload = `${SITE_URL}/data/${DATASET_SLUG}`;

  const marketDesc = isAr
    ? 'سجلّ مؤرَّخ لنطاقات الأسعار المرصودة في قوائم أسعار علنية مسمّاة، بحسب المصدر والشكل والعملة والسوق، مع ما يثبته كل بند وما لا يثبته.'
    : 'A dated record of the price bands observed in named public price lists, by origin, form, currency and market, with what each entry states and what it does not.';

  // The one figure the directory count stands behind. A directory that
  // shows three records when one is publishable would be overstating; the
  // split is stated, not smoothed.
  const suppliersLive = directoryCounts.published;
  const suppliersInReview = directoryCounts.inResearchReview;

  // The sources the record is documented against, from the registry.
  const sources = resolveSources(BASELINE_SOURCE_IDS);

  return (
    <div className="section">
      <div className="container">
        {/* STRUCTURED DATA — the Dataset record this page renders, a
            breadcrumb, and an ItemList of the records shown, so a crawler
            reading the JSON-LD meets the same record the page draws. The
            distribution points at the stable machine-readable snapshot. */}
        {(() => {
          const script = jsonLdScript(
            {
              path: `/${locale}/market`,
              locale,
              title: isAr ? 'سوق العود' : 'The Oud Market',
              description: marketDesc,
              breadcrumbs: [
                { label: isAr ? 'الرئيسية' : 'Home', href: `/${locale}` },
                { label: isAr ? 'سوق العود' : 'Market', href: `/${locale}/market` },
              ],
              dataset: {
                name: isAr
                  ? 'خطّ الأساس لملاحظات أسعار دليل العود'
                  : 'The OudGuide price observation baseline',
                description: marketDesc,
                url: `${SITE_URL}/${locale}/market`,
                license:
                  'CC BY 4.0 — attribution: OudGuide, compiled 2026-10-26. A dated record of observed bands, not a market index or average.',
                variableMeasured: [
                  'material',
                  'form',
                  'price band',
                  'currency',
                  'market',
                  'conditions recorded',
                  'date of observation',
                ],
                datePublished: '2026-10-26',
                dateModified: '2026-10-26',
                downloadUrl: datasetDownload,
                downloadFormat: 'application/json',
              },
              itemList: MARKET_RECORDS.map((r) => ({
                label: isAr ? r.materialAr : r.material,
                href: `/${locale}/market`,
              })),
            },
            SITE_URL
          );
          return script ? (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: script }}
            />
          ) : null;
        })()}

        {/* MASTHEAD */}
        <section className="masthead">
          <div className="masthead-inner">
            <div className="hero-tag">
              <BarChart3 size={13} />
              <span>{isAr ? 'سوق العود' : 'The oud market'}</span>
            </div>
            <h1>
              {isAr ? 'نطاقات أسعار مرصودة' : 'Observed price bands'}
              <span className="accent">
                {isAr
                  ? 'من قوائم علنية مسمّاة، 26 أكتوبر 2026'
                  : 'from named public lists, 26 October 2026'}
              </span>
            </h1>
            <p className="hero-lead">
              {isAr
                ? 'هذا هو الوجه المرئيّ لسجلّ دليل العود المؤرَّخ: فكلّ نطاق ذُكر في تاريخٍ معيّن، بعملةٍ معيّنة، في سوقٍ معيّن، وبالظروف المسجَّلة؛ والنطاق ملاحظةٌ لا قيمةٌ عادلةٌ ولا توقُّع ولا مؤشرُ سوق. والنسخة الآليّة قابلة للقراءة أدناه.'
                : 'This is the visual face of the record OudGuide compiled. Each band was stated on a date, in a currency, in a market, under the conditions named — and a band is an observation, not a fair value, a forecast or a market index. The machine-readable snapshot is below.'}
            </p>

            <div className="cluster" style={{ marginTop: 24, gap: 10 }}>
              <a
                href={datasetDownload}
                className="btn btn-outline btn-sm"
                download
              >
                <FileText size={14} />
                {isAr ? 'نسخة JSON للقراءة' : 'Machine-readable JSON'}
              </a>
              <Link
                href={`/${locale}/guides/quality/gulf-price-baseline`}
                className="btn btn-outline btn-sm"
              >
                {isAr ? 'السجلّ المؤرَّخ كاملا' : 'Read the full record'}
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* THE PRICE-BAND LANES */}
        <section style={{ marginTop: 44 }}>
          <div className="row-between" style={{ marginBottom: 16 }}>
            <div>
              <span className="eyebrow">{isAr ? 'الرسم' : 'The chart'}</span>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.35rem',
                  fontWeight: 500,
                  margin: 0,
                }}
              >
                {isAr
                  ? 'النطاقات المرصودة، صفّا بعد صفّ'
                  : 'Observed bands, lane by lane'}
              </h2>
            </div>
          </div>

          <p
            style={{
              color: 'var(--ink-soft)',
              fontSize: '0.94rem',
              maxWidth: 640,
              margin: '0 0 22px',
            }}
          >
            {isAr
              ? 'كلّ صفّ يجمع عملةً واحدة ووحدة قياسٍ واحدة على مقياسه الخاص، لأنّ السجلّ يذكر أرقامه بالريال السعوديّ والروبية الإندونيسية والدولار والروبية الهندية ولا يذكرها بعملةٍ واحدة؛ فمقياسٌ مشتركٌ كان سيعني ضمَّ مقياسَين على محورٍ واحد. والأشرطة الخضراء نطاقاتٌ مرصودة، والعلامات البرونزيّة ادعاءاتٌ مسجَّلة، والحدّ المفتوح يمتدّ إلى طرف الصفّ ولا يدّعي سقفاً متحقّقا.'
              : 'Each currency-and-unit group is its own lane on its own scale, because the record states its figures in SAR, IDR, USD and INR and never in one currency — a shared axis would be a dual-axis. The green bars are observed bands, the brass marks are recorded claims, and an open end extends to the lane edge rather than claiming a verified ceiling.'}
          </p>

          <PriceBandChart lanes={MARKET_LANES} recordsById={recordsById} isAr={isAr} />
        </section>

        {/* WHAT A RECORD IS AND IS NOT — the three mark kinds, in words,
            so a reader who does not look at colour can still tell them apart. */}
        <section style={{ marginTop: 36 }}>
          <div
            style={{
              display: 'grid',
              gap: 16,
              gridTemplateColumns:
                'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            }}
          >
            <div className="card-frame" style={{ padding: 18 }}>
              <Layers size={18} style={{ color: 'var(--green-600)' }} />
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1rem',
                  fontWeight: 500,
                  margin: '10px 0 6px',
                }}
              >
                {isAr ? 'نطاقٌ مرصود' : 'Observed band'}
              </h3>
              <p
                style={{
                  color: 'var(--ink-soft)',
                  fontSize: '0.88rem',
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                {isAr
                  ? 'نطاقٌ ذكرته قائمةٌ علنيّةٌ مسمّاة لظروفٍ محدَّدة، فيُصوَّر بشريطٍ أخضر. وليس تمسيطا ولا قيمةً عادلة.'
                  : 'A range a named public list stated for stated conditions, drawn as a green bar. Not a computed average and not a fair value.'}
              </p>
            </div>
            <div className="card-frame" style={{ padding: 18 }}>
              <ShieldCheck size={18} style={{ color: 'var(--brass)' }} />
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1rem',
                  fontWeight: 500,
                  margin: '10px 0 6px',
                }}
              >
                {isAr ? 'ادعاءٌ مسجَّل' : 'Recorded claim'}
              </h3>
              <p
                style={{
                  color: 'var(--ink-soft)',
                  fontSize: '0.88rem',
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                {isAr
                  ? 'رقمٌ ذكرته قائمةٌ أو تقريرٌ مفرد، لم يتحقَّق منه دليل العود عبر الأسواق، ويُصوَّر بعلامةٍ برونزيّة حتى لا يُقرأ نطاقاً.'
                  : 'A figure a single listing or report stated, not verified across markets. Drawn as a brass mark so it is never read as a band.'}
              </p>
            </div>
            <div className="card-frame" style={{ padding: 18 }}>
              <Hourglass size={18} style={{ color: 'var(--ink-muted)' }} />
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1rem',
                  fontWeight: 500,
                  margin: '10px 0 6px',
                }}
              >
                {isAr ? 'مسنِدٌ بحثيٌّ مؤرَّخ' : 'Dated study anchor'}
              </h3>
              <p
                style={{
                  color: 'var(--ink-soft)',
                  fontSize: '0.88rem',
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                {isAr
                  ? 'سجلٌّ بحثيٌّ من مراجعة القطاع نفسها، لا يحمل رقماً في السجلّ؛ لذلك يُعرض سطرًا نصّيًّا مؤرَّخًا، ولا يُوضع على أيّ مقياس.'
                  : 'A study record from the industry’s own review that carries no figure in the record — shown as a dated text row, not placed on any scale.'}
              </p>
            </div>
          </div>
        </section>

        {/* THE TWO DATED ANCHORS — text rows, because they carry no figure
            and must not sit on a scale. */}
        <section style={{ marginTop: 30 }}>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.1rem',
              fontWeight: 500,
              margin: '0 0 12px',
            }}
          >
            {isAr
              ? 'المسندان البحثيَّان المؤرَّخان'
              : 'The two dated study anchors'}
          </h3>
          <div style={{ display: 'grid', gap: 10 }}>
            {MARKET_ANCHORS.map((r) => (
              <div
                key={r.id}
                className="card-frame"
                style={{
                  padding: '14px 16px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 8,
                  alignItems: 'baseline',
                }}
              >
                <strong style={{ color: 'var(--ink)', fontSize: '0.94rem' }}>
                  {isAr ? r.materialAr : r.material}
                </strong>
                <span style={{ color: 'var(--ink-soft)', fontSize: '0.86rem' }}>
                  {r.recordedOn}
                </span>
                <span
                  style={{
                    color: 'var(--ink-muted)',
                    fontSize: '0.86rem',
                    flexBasis: '100%',
                  }}
                >
                  {isAr ? r.notEstablishAr : r.notEstablish}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* SUPPLIER AVAILABILITY — real register numbers, stated honestly. */}
        <section style={{ marginTop: 44 }}>
          <div className="row-between" style={{ marginBottom: 16 }}>
            <div>
              <span className="eyebrow">
                {isAr ? 'توفُّر الموردين' : 'Supplier availability'}
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.35rem',
                  fontWeight: 500,
                  margin: 0,
                }}
              >
                {isAr ? 'ما يمثّله السجلّ اليوم' : 'What the register holds today'}
              </h2>
            </div>
            <Link href={`/${locale}/directory`} className="btn btn-outline btn-sm">
              <Users size={14} />
              {isAr ? 'افتح الدليل' : 'Open the directory'}
              <ArrowRight size={13} />
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gap: 14,
              gridTemplateColumns:
                'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            }}
          >
            <div className="card-frame" style={{ padding: 18 }}>
              <div
                style={{
                  fontSize: '1.7rem',
                  fontWeight: 600,
                  color: 'var(--green-600)',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {suppliersLive}
              </div>
              <div
                style={{ color: 'var(--ink-soft)', fontSize: '0.86rem', marginTop: 4 }}
              >
                {isAr
                  ? 'سجلا منشورا في الدليل العام'
                  : 'published record in the public directory'}
              </div>
            </div>
            <div className="card-frame" style={{ padding: 18 }}>
              <div
                style={{
                  fontSize: '1.7rem',
                  fontWeight: 600,
                  color: 'var(--ink)',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {suppliersInReview}
              </div>
              <div
                style={{ color: 'var(--ink-soft)', fontSize: '0.86rem', marginTop: 4 }}
              >
                {isAr
                  ? 'سجلا قيد المراجعة البحثية'
                  : 'record in research review'}
              </div>
            </div>
            <div className="card-frame" style={{ padding: 18 }}>
              <div
                style={{
                  fontSize: '1.7rem',
                  fontWeight: 600,
                  color: 'var(--ink)',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {bands.length}
              </div>
              <div
                style={{ color: 'var(--ink-soft)', fontSize: '0.86rem', marginTop: 4 }}
              >
                {isAr ? 'نطاقاتٌ مرصودة في السجلّ' : 'observed bands in the record'}
              </div>
            </div>
            <div className="card-frame" style={{ padding: 18 }}>
              <div
                style={{
                  fontSize: '1.7rem',
                  fontWeight: 600,
                  color: 'var(--brass)',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {claims.length}
              </div>
              <div
                style={{ color: 'var(--ink-soft)', fontSize: '0.86rem', marginTop: 4 }}
              >
                {isAr
                  ? 'ادعاءاتٌ مسجَّلة (قوائم مفردة)'
                  : 'recorded claims (single listings)'}
              </div>
            </div>
          </div>

          <p
            style={{
              color: 'var(--ink-muted)',
              fontSize: '0.84rem',
              marginTop: 14,
              maxWidth: 620,
            }}
          >
            {isAr
              ? 'العدد المنشور هو العدد الفعليّ؛ فما لم يجتزّ المراجعة لا يُعرض. وهذه أرقامُ الدليل، لا أرقامُ السجلّ.'
              : 'The published count is the live figure; a record that has not cleared review is not shown. These are the directory’s numbers, not the record’s.'}
          </p>
        </section>

        {/* THE LIVE OBSERVATION STREAM — a placeholder that says exactly
            what exists: per-session capture, k-anonymised, no durable
            store yet. It does not fake a live feed. */}
        <section style={{ marginTop: 44 }}>
          <div
            className="card-frame"
            style={{ padding: '22px 24px', background: 'var(--bg-sage)' }}
          >
            <div className="cluster" style={{ gap: 10 }}>
              <Hourglass size={18} style={{ color: 'var(--green-600)' }} />
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  margin: 0,
                }}
              >
                {isAr
                  ? 'تدفُّقُ الملاحظات — قيدُ البناء'
                  : 'The live observation stream — in build'}
              </h3>
            </div>
            <p
              style={{
                color: 'var(--ink-muted)',
                fontSize: '0.92rem',
                lineHeight: 1.7,
                marginTop: 10,
                maxWidth: 660,
              }}
            >
              {isAr
                ? 'يرصد دليل العود ملاحظات المشترين عبر قناة طلب التوريد، دون أيّ بياناتٍ شخصيّة، ولا يُعرض منها للعامة سوى نطاقاتٍ تمويهها رقميّ (خمسة مشترين على الأقلّ لكلّ صنف). وهذا الالتقاط يعمل ضمن الجلسة ولم يُوصَل بعدُ بمخزنٍ دائم؛ لذلك يبقى خطّ الأساس المنشور هذا التجميعَ المؤرَّخ، يُحدَّث بتجمّعاتٍ جديدة لا بتدفّقٍ حيّ.'
                : 'OudGuide captures buyer observations through the RFQ channel, PII-free and held so no later surface can leak them; the only public form is a k-anonymised band (n ≥ 5 per family). The capture is per-session and not yet backed by a durable store, so the published baseline remains this dated compilation — updated by new compilations, not by a live feed.'}
            </p>
            <div className="cluster" style={{ marginTop: 14, gap: 10 }}>
              <Link href={`/${locale}/rfq`} className="btn btn-primary btn-sm">
                {isAr ? 'سجِّل ملاحظة عبر طلب توريد' : 'Log an observation via an RFQ'}
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* THE DOCUMENTED DATA TABLE — the full record, row by row, so the
            chart is always re-readable and colour is never the only channel. */}
        <section style={{ marginTop: 44 }}>
          <div className="row-between" style={{ marginBottom: 14 }}>
            <div>
              <span className="eyebrow">{isAr ? 'الجدول' : 'The table'}</span>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.35rem',
                  fontWeight: 500,
                  margin: 0,
                }}
              >
                {isAr ? 'السجلّ سطرًا بعد سطر' : 'The record, row by row'}
              </h2>
            </div>
            <Table2 size={20} style={{ color: 'var(--ink-soft)' }} />
          </div>

          <div
            style={{
              overflowX: 'auto',
              border: '1px solid var(--line)',
              borderRadius: 8,
            }}
          >
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '0.88rem',
              }}
            >
              <thead>
                <tr
                  style={{
                    background: 'var(--bg-eggshell)',
                    textAlign: isAr ? 'right' : 'left',
                  }}
                >
                  <th style={th}>{isAr ? 'المادة' : 'Material'}</th>
                  <th style={th}>{isAr ? 'الشكل' : 'Form'}</th>
                  <th style={th}>{isAr ? 'النوع' : 'Kind'}</th>
                  <th style={th}>{isAr ? 'النطاق / الادعاء' : 'Band / claim'}</th>
                  <th style={th}>{isAr ? 'السوق' : 'Market'}</th>
                  <th style={th}>{isAr ? 'تاريخ الرصد' : 'Recorded'}</th>
                </tr>
              </thead>
              <tbody>
                {MARKET_RECORDS.map((r, i) => (
                  <tr
                    key={r.id}
                    style={{
                      borderTop: i === 0 ? 'none' : '1px solid var(--line)',
                      background:
                        r.kind === 'anchor' ? 'var(--bg-sage)' : 'var(--bg)',
                    }}
                  >
                    <td style={td}>
                      <div style={{ color: 'var(--ink)', fontWeight: 500 }}>
                        {isAr ? r.materialAr : r.material}
                      </div>
                      <div
                        style={{
                          color: 'var(--ink-muted)',
                          fontSize: '0.78rem',
                          marginTop: 2,
                        }}
                      >
                        {isAr ? r.notEstablishAr : r.notEstablish}
                      </div>
                    </td>
                    <td style={td}>{isAr ? r.formAr : r.form}</td>
                    <td style={td}>
                      <MarkKind kind={r.kind} isAr={isAr} />
                    </td>
                    <td style={{ ...td, fontVariantNumeric: 'tabular-nums' }}>
                      <RecordValue r={r} isAr={isAr} />
                    </td>
                    <td style={td}>{isAr ? r.marketAr : r.market}</td>
                    <td style={{ ...td, whiteSpace: 'nowrap' }}>{r.recordedOn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SOURCES — rendered from the registry, never re-stated here. */}
        <section
          style={{
            marginTop: 44,
            borderTop: '1px solid var(--line)',
            paddingTop: 28,
          }}
        >
          <div className="cluster" style={{ gap: 10 }}>
            <BookMarked size={18} style={{ color: 'var(--green-600)' }} />
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1rem',
                fontWeight: 500,
                margin: 0,
              }}
            >
              {isAr
                ? 'ما وثِّق به السجلّ'
                : 'What the record is documented against'}
            </h3>
          </div>
          <p
            style={{
              color: 'var(--ink-soft)',
              fontSize: '0.9rem',
              margin: '8px 0 18px',
              maxWidth: 680,
              lineHeight: 1.7,
            }}
          >
            {isAr
              ? 'بنود السجلّ موثَّقةٌ مقابل ثلاثة مصادر من سجلّ المصادر، تُذكر أسماؤها ونشرتُها أدناه. والمسندان البحثيَّان مؤرَّخان من مراجعات القطاع نفسها، لا ملاحظتان لعام 2026.'
              : 'The record’s entries are documented against three registry sources, listed with their names and publishers below. The two study anchors are dated records from the industry’s own reviews, not 2026 observations.'}
          </p>

          <div style={{ display: 'grid', gap: 12 }}>
            {sources.map((s) => (
              <div
                key={s.id}
                className="card-frame"
                style={{
                  padding: '14px 16px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px 12px',
                  alignItems: 'baseline',
                }}
              >
                <span
                  style={{
                    color: 'var(--ink)',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                  }}
                >
                  {isAr ? s.labelAr : s.label}
                </span>
                {s.publisherAr && (
                  <span style={{ color: 'var(--ink-muted)', fontSize: '0.82rem' }}>
                    {isAr ? s.publisherAr : s.publisher}
                  </span>
                )}
                {s.url && (
                  <a
                    href={s.url}
                    style={{
                      color: 'var(--green-600)',
                      fontSize: '0.82rem',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {isAr ? 'المستند ←' : 'The document →'}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="cluster" style={{ marginTop: 18, gap: 10 }}>
            <Link
              href={`/${locale}/guides/quality/gulf-price-baseline`}
              className="btn btn-outline btn-sm"
            >
              {isAr ? 'السجلّ المؤرَّخ كاملا' : 'The full dated record'}
              <ArrowRight size={14} />
            </Link>
            <a
              href={datasetDownload}
              className="btn btn-outline btn-sm"
              download
            >
              <FileText size={14} />
              {isAr ? 'نسخة JSON للقراءة' : 'Machine-readable JSON'}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

/** A record's value, as it should read in a table cell. */
function RecordValue({ r, isAr }: { r: MarketRecord; isAr: boolean }) {
  const pre = r.approx ? '≈ ' : '';
  const plus = r.openHigh ? '+' : '';
  if (r.kind === 'anchor') {
    return (
      <span style={{ color: 'var(--ink-soft)' }}>
        {isAr
          ? 'مسنِدٌ مؤرَّخ — لا رقم في السجلّ'
          : 'Dated anchor — no figure in the record'}
      </span>
    );
  }
  if (r.kind === 'band' && r.min !== undefined && r.max !== undefined) {
    return (
      <>
        {pre}
        {r.min.toLocaleString('en')}–{r.max.toLocaleString('en')}{' '}
        {r.currency}/{r.unit}
      </>
    );
  }
  if (r.min !== undefined) {
    return (
      <>
        {pre}
        {r.min.toLocaleString('en')}
        {plus} {r.currency}/{r.unit}
      </>
    );
  }
  return <span style={{ color: 'var(--ink-soft)' }}>{r.currency}/{r.unit}</span>;
}

/** The kind, with a mark so a reader who does not look at colour still
    reads it as text. */
function MarkKind({
  kind,
  isAr,
}: {
  kind: MarketRecord['kind'];
  isAr: boolean;
}) {
  const swatch =
    kind === 'band'
      ? { w: 16, h: 10, bg: 'var(--green-600)', br: 3, rot: 'none' }
      : kind === 'claim'
        ? { w: 10, h: 10, bg: 'var(--brass)', br: 2, rot: '45deg' }
        : { w: 0, h: 0, bg: 'transparent', br: 0, rot: 'none' };
  const label =
    kind === 'band'
      ? isAr
        ? 'نطاقٌ مرصود'
        : 'Observed band'
      : kind === 'claim'
        ? isAr
          ? 'ادعاءٌ مسجَّل'
          : 'Recorded claim'
        : isAr
          ? 'مسنِدٌ بحثيٌّ'
          : 'Study anchor';
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
      {swatch.w > 0 && (
        <span
          style={{
            width: swatch.w,
            height: swatch.h,
            background: swatch.bg,
            borderRadius: swatch.br,
            transform: `rotate(${swatch.rot})`,
            display: 'inline-block',
            flexShrink: 0,
          }}
        />
      )}
      {label}
    </span>
  );
}

const th: CSSProperties = {
  padding: '10px 12px',
  fontSize: '0.78rem',
  fontWeight: 600,
  color: 'var(--ink-muted)',
  borderBottom: '1px solid var(--line)',
  whiteSpace: 'nowrap',
};
const td: CSSProperties = {
  padding: '12px',
  verticalAlign: 'top',
  color: 'var(--ink)',
};

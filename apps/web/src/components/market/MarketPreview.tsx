'use client';

import Link from 'next/link';
import { ArrowRight, BarChart3 } from 'lucide-react';
import {
  MARKET_CHARTABLE,
  MARKET_ANCHORS,
  formatRecordValue,
} from '@/data/market';

/**
 * The home-page preview of the market surface.
 *
 * The full currency-segregated chart lives at `/market`. This is a
 * compact strip on the home page that (a) signals OudGuide publishes
 * original, dated market data, and (b) points at the surface. It shows a
 * few representative records — each with its own currency, so no two
 * currencies are placed on a shared scale here either — and the two
 * dated anchors are not shown: they carry no figure, so they are not a
 * "sample". Colour is never the only channel: each value is spelled
 * out in text.
 */

interface MarketPreviewProps {
  locale: string;
  isAr: boolean;
}

export function MarketPreview({ locale, isAr }: MarketPreviewProps) {
  // A handful of records that show the spread of the record: a Gulf
  // retail band, the oil band, an Indonesian band and a recorded claim.
  // Chosen so the strip reads as "this is what the record holds", not as
  // a ranking.
  const sampleIds = [
    'km-taqir',
    'in-assam',
    'attar-usd',
    'gaharu-usd-claim',
  ];
  const byId = new Map(MARKET_CHARTABLE.map((r) => [r.id, r]));
  const samples = sampleIds
    .map((id) => byId.get(id))
    .filter((r) => r !== undefined);

  return (
    <section className="section section-white">
      <div className="container">
        <div className="row-between" style={{ marginBottom: 22 }}>
          <div>
            <span className="eyebrow">
              <BarChart3 size={13} style={{ verticalAlign: '-2px', marginRight: 6 }} />
              {isAr ? 'بيانات أصلية' : 'Original data'}
            </span>
            <h2 className="h2" style={{ marginBottom: 0 }}>
              {isAr
                ? 'نطاقات أسعار مرصودة، مؤرَّخة'
                : 'Observed price bands, dated'}
            </h2>
            <p
              style={{
                color: 'var(--ink-soft)',
                fontSize: '0.92rem',
                margin: '8px 0 0',
                maxWidth: 560,
              }}
            >
              {isAr
                ? 'رصد دليل العود نطاقات أسعار تذكرها قوائم علنية مسمّاة، في تاريخ وعملة وسوق معيّنين. النطاق ملاحظةٌ ليست قيمةً عادلة. هذه مساحاتُ تمثيلية من السجلّ؛ الكامل في صفحة السوق.'
                : 'OudGuide records the price bands named public lists state, on a date, in a currency and a market. A band is an observation, not a fair value. These are representative slices of the record; the full surface is on the market page.'}
            </p>
          </div>
          <Link href={`/${locale}/market`} className="btn btn-outline btn-sm">
            {isAr ? 'افتح صفحة السوق' : 'Open the market page'}
            <ArrowRight size={14} className="icon-dir-flip" />
          </Link>
        </div>

        {/* Representative records. Each carries its own currency, so the
            strip is a labelled list, not a scale. */}
        <div
          style={{
            display: 'grid',
            gap: 12,
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
          }}
        >
          {samples.map((r) => (
            <div
              key={r.id}
              className="card-frame"
              style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 6 }}
            >
              <span style={{ color: 'var(--ink-soft)', fontSize: '0.78rem' }}>
                {isAr ? r.materialAr : r.material}
              </span>
              <span
                style={{
                  color: 'var(--ink)',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {formatRecordValue(r)}
              </span>
              <span style={{ color: 'var(--ink-muted)', fontSize: '0.74rem' }}>
                {isAr ? r.marketAr : r.market} · {r.recordedOn}
              </span>
            </div>
          ))}
        </div>

        <p style={{ color: 'var(--ink-muted)', fontSize: '0.8rem', marginTop: 16 }}>
          {isAr
            ? `في السجلّ ${MARKET_CHARTABLE.length} بنداً مرصوداً أو مسجّلاً، مع ${MARKET_ANCHORS.length} مسندين بحثيَّين مؤرَّخين لا يحملان رقماً في السجلّ. لا يُجمع أيّ نطاقٍ مع ادعاء.`
            : `${MARKET_CHARTABLE.length} observed or recorded entries in the record, with ${MARKET_ANCHORS.length} dated study anchors that carry no figure. No band is ever averaged with a claim.`}
        </p>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import {
  type MarketLane,
  type MarketRecord,
  formatRecordValue,
  kindLabel,
} from '@/data/market';

/**
 * The observed price bands, as small-multiple lanes.
 *
 * Each currency-and-unit group is its own lane on its own scale, because
 * the record states its figures in SAR, IDR, USD and INR and never in one
 * currency: mixing two of them on a shared axis would be a dual-axis chart,
 * the one thing this visualisation does not do. A lane that spans an order
 * of magnitude plots on a log scale; a single-band or narrow lane plots
 * linear. An observed band is a solid forest-green range bar; a recorded
 * claim is a distinct brass marker, so a claim is never read as a band; an
 * open end ("from 18,000 upward") extends to the lane edge with a chevron
 * and never pretends to a closed limit.
 *
 * Every mark carries a direct value label, and the whole row is always
 * re-readable from the data table on the page, so colour is never the only
 * channel. The two dated study anchors are NOT plotted here: the record
 * carries no figure for them, and the page shows them as dated text rows.
 */

/**
 * Fixed intrinsic plot width. The lanes render at this exact pixel width
 * (SVG width === viewBox width), so a centred 640px container is 1:1 and
 * the HTML material-label overlay lines up with the SVG with no
 * measurement; below 640px the plot scrolls horizontally inside its row
 * rather than the SVG shrinking and desynchronising from its labels.
 */
const W = 640;
const PAD_L = 172; // room for the material label column
const PAD_R = 60; // room for the open-end chevron
const PAD_T = 10;
const PAD_B = 34; // tick labels
const ROW_H = 30;
const ROW_GAP = 10;

interface LaneProps {
  lane: MarketLane;
  records: MarketRecord[];
  isAr: boolean;
}

interface ChartProps {
  lanes: MarketLane[];
  recordsById: Map<string, MarketRecord>;
  isAr: boolean;
}

/** A log or linear scale over a lane's domain. */
function makeX(lane: MarketLane) {
  const [d0, d1] = lane.domain;
  const plotRight = W - PAD_R;
  if (lane.scale === 'log') {
    const l0 = Math.log10(d0);
    const l1 = Math.log10(d1);
    return (v: number) =>
      PAD_L + ((Math.log10(v) - l0) / (l1 - l0)) * (plotRight - PAD_L);
  }
  return (v: number) => PAD_L + ((v - d0) / (d1 - d0)) * (plotRight - PAD_L);
}

function fmtTick(v: number): string {
  if (v >= 1_000_000) {
    const m = v / 1_000_000;
    return `${Number.isInteger(m) ? m : m.toLocaleString('en')}M`;
  }
  if (v >= 1000) {
    const k = v / 1000;
    return `${Number.isInteger(k) ? k : k.toLocaleString('en')}k`;
  }
  return String(v);
}

function num(v: number): string {
  return v.toLocaleString('en');
}

/**
 * The compact value that sits directly above a mark: just the digits,
 * since the lane header already names the currency and unit. A band is
 * "300–550"; a claim or open bound is "45,000" / "18,000+" / "~25,000,000".
 */
function compactValue(r: MarketRecord): string {
  const pre = r.approx ? '~' : '';
  const plus = r.openHigh ? '+' : '';
  if (r.kind === 'band' && r.min !== undefined && r.max !== undefined) {
    return `${pre}${num(r.min)}–${num(r.max)}`;
  }
  if (r.min !== undefined) {
    return `${pre}${num(r.min)}${plus}`;
  }
  return '';
}

/**
 * The short label in the left column: the record's material name up to the
 * first em-dash (the "what the market name does not establish" clause is
 * dropped for the label; the reading strip and the data table carry it).
 */
function shortLabel(r: MarketRecord, isAr: boolean): string {
  const full = isAr ? r.materialAr : r.material;
  let s = full
    .split('—')[0]
    .trim();
  if (s.length > 24) s = `${s.slice(0, 23)}…`;
  return s;
}

function Lane({ lane, records, isAr }: LaneProps) {
  const [hovered, setHovered] = useState<string | null>(null);
  const x = makeX(lane);
  const plotRight = W - PAD_R;
  const plotH = records.length * ROW_H + (records.length - 1) * ROW_GAP;
  const baselineY = PAD_T + plotH;
  const H = PAD_T + plotH + PAD_B;

  const hoveredRec = hovered
    ? records.find((r) => r.id === hovered) ?? null
    : null;

  return (
    <div>
      {/* Lane header: currency + unit, and the scale kind. */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          fontSize: '0.82rem',
          fontWeight: 600,
          color: 'var(--ink)',
          marginBottom: 4,
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        <span>
          {isAr
            ? `${lane.currencyAr} / ${lane.unitAr}`
            : `${lane.currency} / ${lane.unit}`}
        </span>
        <span
          style={{
            color: 'var(--ink-soft)',
            fontWeight: 400,
            fontSize: '0.72rem',
          }}
        >
          {lane.scale === 'log'
            ? isAr
              ? 'مقياس لوغاريتمي'
              : 'log scale'
            : isAr
              ? 'مقياس خطي'
              : 'linear'}
        </span>
      </div>

      {/* The reading strip. A hover updates this fixed panel rather than
          floating a tooltip that could clip past the plot or sit off the
          mark: it always fits in its slot, wraps long Arabic text, and
          names the record so the reader knows which bar it describes. */}
      <div
        style={{
          minHeight: 54,
          border: '1px solid var(--line)',
          borderRadius: 6,
          background: 'var(--bg)',
          padding: '8px 12px',
          marginBottom: 10,
          fontSize: '0.8rem',
          lineHeight: 1.5,
        }}
      >
        {hoveredRec ? (
          <>
            <div style={{ color: 'var(--ink)', fontWeight: 600 }}>
              {isAr ? hoveredRec.materialAr : hoveredRec.material}
            </div>
            <div style={{ color: 'var(--ink-soft)', marginTop: 2 }}>
              {formatRecordValue(hoveredRec)} ·{' '}
              {kindLabel(hoveredRec, isAr)} · {hoveredRec.recordedOn}
            </div>
            <div style={{ color: 'var(--ink-muted)', marginTop: 4 }}>
              {isAr ? hoveredRec.notEstablishAr : hoveredRec.notEstablish}
            </div>
          </>
        ) : (
          <div style={{ color: 'var(--ink-soft)' }}>
            {isAr
              ? 'مرِّر فوق سطرٍ لعرض ما يثبته هذا السجلّ وما لا يثبته.'
              : 'Hover a row for what this record states, and what it does not establish.'}
          </div>
        )}
      </div>

      {/* The plot. Fixed width so the label overlay and the SVG stay in
          step; the wrapper scrolls horizontally below 640px. */}
      <div
        style={{
          overflowX: 'auto',
          overflowY: 'hidden',
          paddingBottom: 4,
        }}
      >
        <div dir="ltr" style={{ position: 'relative', width: W, height: H }}>
          <svg
            viewBox={`0 0 ${W} ${H}`}
            width={W}
            height={H}
            style={{ display: 'block' }}
            role="img"
            aria-label={
              isAr
                ? `نطاقات الأسعار المرصودة بالعملة ${lane.currencyAr} لكل ${lane.unitAr}`
                : `Observed price bands for ${lane.currency}/${lane.unit}`
            }
          >
            {/* Tick gridlines + tick numerals. */}
            {lane.ticks.map((t) => {
              const tx = x(t);
              return (
                <g key={`tick-${t}`}>
                  <line
                    x1={tx}
                    x2={tx}
                    y1={PAD_T}
                    y2={baselineY}
                    stroke="var(--line)"
                    strokeWidth={1}
                  />
                  <text
                    x={tx}
                    y={H - 10}
                    textAnchor="middle"
                    fontSize={11}
                    fill="var(--ink-soft)"
                    style={{ fontVariantNumeric: 'tabular-nums' }}
                  >
                    {fmtTick(t)}
                  </text>
                </g>
              );
            })}

            {/* Baseline axis. */}
            <line
              x1={PAD_L}
              x2={plotRight}
              y1={baselineY}
              y2={baselineY}
              stroke="var(--line-strong)"
              strokeWidth={1}
            />

            {records.map((r, i) => {
              const y = PAD_T + i * (ROW_H + ROW_GAP) + ROW_H / 2;
              const isBand = r.kind === 'band';
              const isClaim = r.kind === 'claim';
              const active = hovered === r.id;

              // An open high end reaches the lane edge; a closed band or a
              // point claim ends at its recorded value.
              const right = r.openHigh
                ? plotRight
                : x(r.max ?? r.min ?? lane.domain[0]);

              return (
                <g
                  key={r.id}
                  onMouseEnter={() => setHovered(r.id)}
                  onMouseLeave={() => setHovered(null)}
                  style={{ cursor: 'default' }}
                >
                  {/* Row hit area + hover wash. */}
                  <rect
                    x={0}
                    y={PAD_T + i * (ROW_H + ROW_GAP)}
                    width={W}
                    height={ROW_H}
                    fill={active ? 'var(--bg-sage)' : 'transparent'}
                    rx={4}
                  />

                  {isBand && r.min !== undefined && (
                    <g>
                      <rect
                        x={x(r.min)}
                        y={y - 7}
                        width={Math.max(2, right - x(r.min))}
                        height={14}
                        rx={4}
                        fill="var(--green-600)"
                        fillOpacity={active ? 1 : 0.9}
                      />
                      {r.openHigh && (
                        <path
                          d={`M ${plotRight} ${y - 7} L ${plotRight + 10} ${y} L ${plotRight} ${y + 7} Z`}
                          fill="var(--green-600)"
                        />
                      )}
                    </g>
                  )}

                  {isClaim && r.min !== undefined && (
                    <g>
                      {r.openHigh && (
                        <line
                          x1={x(r.min)}
                          y1={y}
                          x2={plotRight}
                          y2={y}
                          stroke="var(--brass)"
                          strokeWidth={2}
                          strokeDasharray="4 3"
                        />
                      )}
                      <rect
                        x={x(r.min) - 6}
                        y={y - 6}
                        width={12}
                        height={12}
                        rx={2}
                        transform={`rotate(45 ${x(r.min)} ${y})`}
                        fill="var(--brass)"
                        stroke="var(--bg)"
                        strokeWidth={1}
                      />
                    </g>
                  )}

                  {/* Direct value label — digits only; the lane header
                      names currency and unit, the reading strip and the
                      table state them in full. This is the relief that
                      keeps colour from being the only channel. */}
                  {(isBand || isClaim) && (
                    <text
                      x={isClaim ? x(r.min ?? lane.domain[0]) : x(r.min ?? 0)}
                      y={y - 11}
                      textAnchor={isClaim ? 'middle' : 'start'}
                      fontSize={11}
                      fontWeight={600}
                      fill={active ? 'var(--ink)' : 'var(--ink-muted)'}
                      style={{ fontVariantNumeric: 'tabular-nums' }}
                    >
                      {compactValue(r)}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Material labels, as an HTML overlay in the left column. HTML
              (not SVG text) so an Arabic label wraps and shapes RTL; the
              fixed plot width keeps it in step with the SVG. */}
          {records.map((r, i) => {
            const y = PAD_T + i * (ROW_H + ROW_GAP) + ROW_H / 2;
            const active = hovered === r.id;
            return (
              <div
                key={`label-${r.id}`}
                style={{
                  position: 'absolute',
                  left: 8,
                  top: y - 13,
                  width: PAD_L - 18,
                  textAlign: 'end',
                  fontSize: 11,
                  lineHeight: 1.25,
                  color: active ? 'var(--ink)' : 'var(--ink-muted)',
                  fontWeight: active ? 600 : 400,
                  cursor: 'default',
                }}
                onMouseEnter={() => setHovered(r.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {shortLabel(r, isAr)}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function PriceBandChart({ lanes, recordsById, isAr }: ChartProps) {
  return (
    <div>
      {/* Legend — each mark kind is named, so a band, a claim and an open
          end are told apart without relying on hue alone. */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px 20px',
          marginBottom: 18,
          fontSize: '0.8rem',
          color: 'var(--ink-muted)',
        }}
      >
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          <span
            style={{
              width: 16,
              height: 10,
              borderRadius: 3,
              background: 'var(--green-600)',
              display: 'inline-block',
            }}
          />
          {isAr ? 'نطاق مرصود' : 'Observed band'}
        </span>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              background: 'var(--brass)',
              display: 'inline-block',
              transform: 'rotate(45deg)',
              borderRadius: 2,
            }}
          />
          {isAr ? 'ادعاء مسجّل' : 'Recorded claim'}
        </span>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            color: 'var(--ink-soft)',
          }}
        >
          {isAr
            ? 'حدّ مفتوح — سُجِّل كما سجّلته القوائم، ليس سقفاً متحققاً'
            : 'Open end — as the lists recorded it, not a verified limit'}
        </span>
      </div>

      <div
        style={{
          display: 'grid',
          gap: 24,
          gridTemplateColumns:
            'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
        }}
      >
        {lanes.map((lane) => (
          <div
            key={lane.key}
            style={{
              border: '1px solid var(--line)',
              borderRadius: 8,
              padding: '16px 16px 8px',
              background: 'var(--bg)',
            }}
          >
            <Lane
              lane={lane}
              isAr={isAr}
              records={lane.recordIds
                .map((id) => recordsById.get(id))
                .filter((r): r is MarketRecord => Boolean(r))}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

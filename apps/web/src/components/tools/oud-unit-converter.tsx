'use client';

import { useState, useMemo } from 'react';
import { Calculator, ArrowRightLeft, Scale, Droplet } from 'lucide-react';

interface OudUnitConverterProps {
  locale: string;
}

const TOLA_GRAMS = 11.6638;
const WAQIYA_GRAMS = 30.0;
const OUNCE_GRAMS = 28.3495;
const OIL_DENSITY = 0.955; // average g/ml for pure Dehn Al Oud

export function OudUnitConverter({ locale }: OudUnitConverterProps) {
  const isAr = locale === 'ar';
  const [amount, setAmount] = useState<number>(1);
  const [unit, setUnit] = useState<string>('tola');
  const [mode, setMode] = useState<'wood' | 'oil'>('wood');

  // Convert input amount to grams
  const grams = useMemo(() => {
    const val = Number(amount) || 0;
    switch (unit) {
      case 'tola':
        return val * TOLA_GRAMS;
      case 'gram':
        return val;
      case 'kg':
        return val * 1000;
      case 'waqiya':
        return val * WAQIYA_GRAMS;
      case 'ounce':
        return val * OUNCE_GRAMS;
      case 'ml':
        return mode === 'oil' ? val * OIL_DENSITY : val;
      default:
        return val;
    }
  }, [amount, unit, mode]);

  // Derive all equivalent units from grams
  const conversions = useMemo(() => {
    return {
      tolas: (grams / TOLA_GRAMS).toFixed(3),
      grams: grams.toFixed(2),
      kg: (grams / 1000).toFixed(4),
      waqiya: (grams / WAQIYA_GRAMS).toFixed(2),
      ounces: (grams / OUNCE_GRAMS).toFixed(3),
      milliliters: mode === 'oil' ? (grams / OIL_DENSITY).toFixed(2) : grams.toFixed(2),
      robTolas: ((grams / TOLA_GRAMS) * 4).toFixed(1),
    };
  }, [grams, mode]);

  return (
    <div
      className="card-frame"
      style={{
        padding: 24,
        margin: '28px 0',
        borderRadius: 8,
        border: '1px solid var(--border)',
        background: 'var(--surface)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 18 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Calculator size={20} style={{ color: 'var(--green-700)' }} />
          <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>
            {isAr ? 'حاسبة تحويل مقاييس وأوزان العود' : 'Oud & Attar Unit Converter'}
          </h3>
        </div>

        {/* Mode selector: Wood vs Oil */}
        <div style={{ display: 'flex', gap: 6, background: 'var(--surface-sunken)', padding: 4, borderRadius: 6, border: '1px solid var(--border)' }}>
          <button
            type="button"
            onClick={() => setMode('wood')}
            style={{
              padding: '4px 10px',
              borderRadius: 4,
              border: 'none',
              fontSize: 12,
              fontWeight: 500,
              cursor: 'pointer',
              background: mode === 'wood' ? 'var(--green-700)' : 'transparent',
              color: mode === 'wood' ? '#fff' : 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <Scale size={13} />
            <span>{isAr ? 'خشب العود (كتلة)' : 'Raw Wood (Mass)'}</span>
          </button>
          <button
            type="button"
            onClick={() => setMode('oil')}
            style={{
              padding: '4px 10px',
              borderRadius: 4,
              border: 'none',
              fontSize: 12,
              fontWeight: 500,
              cursor: 'pointer',
              background: mode === 'oil' ? 'var(--green-700)' : 'transparent',
              color: mode === 'oil' ? '#fff' : 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <Droplet size={13} />
            <span>{isAr ? 'دهن العود (كثافة وحجم)' : 'Oud Oil (Volume/Density)'}</span>
          </button>
        </div>
      </div>

      {/* Input controls */}
      <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', marginBottom: 20 }}>
        <div>
          <label style={{ display: 'block', fontSize: 12, fontWeight: 500, color: 'var(--text-muted)', marginBottom: 6 }}>
            {isAr ? 'الكمية المراد تحويلها' : 'Amount to Convert'}
          </label>
          <input
            type="number"
            min="0"
            step="any"
            value={amount}
            onChange={(e) => setAmount(Math.max(0, parseFloat(e.target.value) || 0))}
            style={{
              width: '100%',
              padding: '8px 12px',
              borderRadius: 6,
              border: '1px solid var(--border)',
              background: 'var(--surface-sunken)',
              color: 'var(--text)',
              fontSize: 15,
            }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: 12, fontWeight: 500, color: 'var(--text-muted)', marginBottom: 6 }}>
            {isAr ? 'الوحدة المدخلة' : 'Input Unit'}
          </label>
          <select
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            style={{
              width: '100%',
              padding: '8px 12px',
              borderRadius: 6,
              border: '1px solid var(--border)',
              background: 'var(--surface-sunken)',
              color: 'var(--text)',
              fontSize: 14,
            }}
          >
            <option value="tola">{isAr ? 'تولة (11.6638 جم)' : 'Tola (11.6638g)'}</option>
            <option value="gram">{isAr ? 'جرام' : 'Gram (g)'}</option>
            <option value="kg">{isAr ? 'كيلوغرام' : 'Kilogram (kg)'}</option>
            <option value="waqiya">{isAr ? 'واقية / أوقية (~30 جم)' : 'Khaleeji Waqiya (~30g)'}</option>
            <option value="ounce">{isAr ? 'أونصة دولية (28.35 جم)' : 'Imperial Ounce (28.35g)'}</option>
            {mode === 'oil' && <option value="ml">{isAr ? 'مليلتر (قارورة 12 مل = تولة)' : 'Milliliter (12ml = 1 Tola)'}</option>}
          </select>
        </div>
      </div>

      {/* Real-time conversion results grid */}
      <div style={{ display: 'grid', gap: 10, gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))' }}>
        <div style={{ padding: 12, borderRadius: 6, background: 'var(--surface-sunken)', border: '1px solid var(--border)' }}>
          <div style={{ fontSize: 11, color: 'var(--text-faint)' }}>{isAr ? 'بالتولة' : 'In Tolas'}</div>
          <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--green-700)', marginTop: 2 }}>{conversions.tolas}</div>
          <div style={{ fontSize: 10, color: 'var(--text-muted)' }}>{isAr ? 'تولة كاملة' : 'Full tolas'}</div>
        </div>

        <div style={{ padding: 12, borderRadius: 6, background: 'var(--surface-sunken)', border: '1px solid var(--border)' }}>
          <div style={{ fontSize: 11, color: 'var(--text-faint)' }}>{isAr ? 'بربع التولة' : 'Quarter-Tolas'}</div>
          <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--text)', marginTop: 2 }}>{conversions.robTolas}</div>
          <div style={{ fontSize: 10, color: 'var(--text-muted)' }}>{isAr ? 'قارورة ربع تولة' : '3ml bottles'}</div>
        </div>

        <div style={{ padding: 12, borderRadius: 6, background: 'var(--surface-sunken)', border: '1px solid var(--border)' }}>
          <div style={{ fontSize: 11, color: 'var(--text-faint)' }}>{isAr ? 'بالجرام' : 'In Grams'}</div>
          <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--text)', marginTop: 2 }}>{conversions.grams}</div>
          <div style={{ fontSize: 10, color: 'var(--text-muted)' }}>{isAr ? 'جم' : 'g'}</div>
        </div>

        <div style={{ padding: 12, borderRadius: 6, background: 'var(--surface-sunken)', border: '1px solid var(--border)' }}>
          <div style={{ fontSize: 11, color: 'var(--text-faint)' }}>{isAr ? 'بالواقية' : 'In Waqiyas'}</div>
          <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--text)', marginTop: 2 }}>{conversions.waqiya}</div>
          <div style={{ fontSize: 10, color: 'var(--text-muted)' }}>{isAr ? 'أوقية خليجية' : '30g portions'}</div>
        </div>

        <div style={{ padding: 12, borderRadius: 6, background: 'var(--surface-sunken)', border: '1px solid var(--border)' }}>
          <div style={{ fontSize: 11, color: 'var(--text-faint)' }}>{isAr ? 'بالكيلوغرام' : 'In Kilograms'}</div>
          <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--text)', marginTop: 2 }}>{conversions.kg}</div>
          <div style={{ fontSize: 10, color: 'var(--text-muted)' }}>{isAr ? 'كغم' : 'kg'}</div>
        </div>

        {mode === 'oil' && (
          <div style={{ padding: 12, borderRadius: 6, background: 'var(--surface-sunken)', border: '1px solid var(--border)' }}>
            <div style={{ fontSize: 11, color: 'var(--text-faint)' }}>{isAr ? 'بالحجم (مل)' : 'Volume (ml)'}</div>
            <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--green-700)', marginTop: 2 }}>{conversions.milliliters}</div>
            <div style={{ fontSize: 10, color: 'var(--text-muted)' }}>{isAr ? 'مل (كثافة 0.955)' : 'ml (@0.955 g/ml)'}</div>
          </div>
        )}
      </div>
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, GitCompare, MapPin, Check, Minus, ArrowRight } from 'lucide-react';

export interface ComparableProducer {
  id: string;
  slug: string;
  name: string;
  city?: string | null;
  country_name?: string | null;
  category?: string | null;
  product_families?: string[];
  handles_origins?: string[];
  contact_unlocked: boolean;
  minimum_order_quantity?: string | null;
  established_year?: number | null;
  sample_availability?: boolean;
}

/**
 * Side-by-side producer comparison drawer.
 *
 * Ported from IndexOrbit's business-comparison UX. The pattern that makes
 * it work: a sticky trigger bar that counts the selection, and a drawer
 * that renders the producers as parallel columns so the buyer compares
 * attribute-by-attribute rather than memory-by-memory.
 *
 * The comparison is deliberately a *redacted* comparison — it shows the
 * commercial attributes a buyer can act on (material families, origins, MOQ,
 * sample availability) but never contact details.
 */
export function ComparisonDrawer({
  producers,
  locale,
  isAr,
}: {
  producers: ComparableProducer[];
  locale: string;
  isAr: boolean;
}) {
  const [selected, setSelected] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Load any shortlist saved by the BookmarkButton.
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('oudguide_shortlist') || '[]');
      if (Array.isArray(saved)) setSelected(saved);
    } catch {}
  }, []);

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      try {
        localStorage.setItem('oudguide_shortlist', JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const chosen = producers.filter((p) => selected.includes(p.id));

  // Attribute rows — the axes a wholesale buyer actually compares on.
  const rows: { key: keyof ComparableProducer; label: string; labelAr: string; render?: (p: ComparableProducer) => React.ReactNode }[] = [
    {
      key: 'location',
      label: 'Location',
      labelAr: 'الموقع',
      render: (p) => (
        <span className="cluster" style={{ gap: 4, fontSize: '0.82rem' }}>
          <MapPin size={11} />
          {p.city ? `${p.city}, ` : ''}{p.country_name}
        </span>
      ),
    },
    {
      key: 'category',
      label: 'Category',
      labelAr: 'التصنيف',
      render: (p) => <span style={{ fontSize: '0.82rem' }}>{p.category || 'Producer'}</span>,
    },
    {
      key: 'product_families',
      label: 'Material families',
      labelAr: 'أصناف المواد',
      render: (p) => (
        <div className="cluster" style={{ gap: 4 }}>
          {(p.product_families ?? []).map((f) => (
            <span key={f} className="chip" style={{ fontSize: '0.66rem', padding: '2px 7px' }}>{f}</span>
          ))}
        </div>
      ),
    },
    {
      key: 'handles_origins',
      label: 'Verified origins',
      labelAr: 'الأقاليم الموثقة',
      render: (p) => (
        <div className="cluster" style={{ gap: 4 }}>
          {(p.handles_origins ?? []).map((o) => (
            <span key={o} className="chip chip-gold" style={{ fontSize: '0.66rem', padding: '2px 7px' }}>{o}</span>
          ))}
        </div>
      ),
    },
    {
      key: 'minimum_order_quantity',
      label: 'Minimum order',
      labelAr: 'الحد الأدنى للطلب',
      render: (p) => (
        <span style={{ fontSize: '0.92rem', fontFamily: 'var(--font-sans)', color: 'var(--ink)' }}>
          {p.minimum_order_quantity || '—'}
        </span>
      ),
    },
    {
      key: 'sample_availability',
      label: 'Samples available',
      labelAr: ' العينات متاحة',
      render: (p) => (
        <span className="cluster" style={{ gap: 5, fontSize: '0.8rem' }}>
          {p.sample_availability ? (
            <>
              <Check size={13} style={{ color: 'var(--green-600)' }} />
              {isAr ? 'نعم' : 'Yes'}
            </>
          ) : (
            <>
              <Minus size={13} style={{ color: 'var(--ink-soft)' }} />
              {isAr ? 'غير محدد' : 'Not stated'}
            </>
          )}
        </span>
      ),
    },
    {
      key: 'established_year',
      label: 'Established',
      labelAr: 'سنة التأسيس',
      render: (p) => <span style={{ fontSize: '0.82rem' }}>{p.established_year ?? '—'}</span>,
    },
    {
      key: 'contact',
      label: 'Contact availability',
      labelAr: 'إتاحة بيانات الاتصال',
      render: (p) => (
        <span style={{ fontSize: '0.8rem', color: p.contact_unlocked ? 'var(--green-700)' : 'var(--ink-soft)' }}>
          {p.contact_unlocked
            ? (isAr ? 'متاح (عضوية سنوية)' : 'Available (annual member)')
            : (isAr ? 'عبر خدمة الربط' : 'Via neutral matching')}
        </span>
      ),
    },
  ];

  return (
    <>
      {/* TRIGGER BAR */}
      {chosen.length > 0 && (
        <div
          style={{
            position: 'fixed',
            bottom: 20,
            insetInlineStart: '50%',
            transform: 'translateX(-50%)',
            zIndex: 120,
            background: 'var(--green-800)',
            color: '#fff',
            borderRadius: 999,
            padding: '10px 10px 10px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            boxShadow: 'var(--shadow-xl)',
          }}
        >
          <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>
            {chosen.length} {isAr ? 'محدد للمقارنة' : 'selected to compare'}
          </span>
          <button
            onClick={() => setIsOpen(true)}
            className="btn btn-primary btn-sm"
            style={{ borderRadius: 999 }}
          >
            <GitCompare size={14} />
            {isAr ? 'مقارنة' : 'Compare'}
          </button>
          <button
            onClick={() => {
              setSelected([]);
              try { localStorage.removeItem('oudguide_shortlist'); } catch {}
            }}
            className="icon-button"
            style={{ width: 30, height: 30, border: 'none', background: 'rgba(255,255,255,0.12)', color: '#fff' }}
            aria-label={isAr ? 'مسح' : 'Clear'}
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* DRAWER */}
      {isOpen && (
        <div className="mihrab-modal" onClick={() => setIsOpen(false)}>
          <div
            className="mihrab-modal-content"
            style={{ maxWidth: 1080, maxHeight: '88vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mihrab-modal-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span className="meta">{isAr ? 'مقارنة جانبية' : 'Side-by-side comparison'}</span>
                <h2 style={{ fontSize: '1.25rem', margin: '4px 0 0' }}>
                  {isAr ? 'قارن المنتجين جنباً إلى جنب' : 'Compare producers'}
                </h2>
              </div>
              <button onClick={() => setIsOpen(false)} className="icon-button" aria-label="Close">
                <X size={17} />
              </button>
            </div>

            <div className="mihrab-modal-body">
              {chosen.length === 0 ? (
                <p className="text-body" style={{ textAlign: 'center', padding: '32px 0' }}>
                  {isAr ? 'لم تختر أي منتج للمقارنة.' : 'No producers selected for comparison.'}
                </p>
              ) : (
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr>
                        <th style={{ width: 180, textAlign: 'start' }} />
                        {chosen.map((p) => (
                          <th key={p.id} style={{ textAlign: 'start', paddingBottom: 12, verticalAlign: 'top' }}>
                            <Link
                              href={`/${locale}/directory/${p.slug}`}
                              style={{
                                fontFamily: 'var(--font-display)',
                                fontSize: '1.05rem',
                                fontWeight: 500,
                                color: 'var(--green-800)',
                              }}
                            >
                              {p.name}
                            </Link>
                            <div style={{ marginTop: 8 }}>
                              <Link
                                href={`/${locale}/rfq?supplier=${p.slug}`}
                                className="btn btn-outline btn-sm"
                              >
                                {isAr ? 'طلب تسعير' : 'Request quote'}
                                <ArrowRight size={12} />
                              </Link>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((row, ri) => (
                        <tr key={String(row.key)} style={{ borderTop: '1px solid var(--line)' }}>
                          <td
                            style={{
                              padding: '14px 12px 14px 0',
                              verticalAlign: 'top',
                              fontSize: '0.78rem',
                              fontWeight: 600,
                              color: 'var(--ink-soft)',
                              letterSpacing: '0.04em',
                              textTransform: 'uppercase',
                            }}
                          >
                            {isAr ? row.labelAr : row.label}
                          </td>
                          {chosen.map((p) => (
                            <td key={p.id} style={{ padding: '14px 16px 14px 0', verticalAlign: 'top' }}>
                              {row.render ? row.render(p) : (p as any)[row.key] ?? '—'}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              <div
                className="cluster"
                style={{
                  marginTop: 24,
                  padding: '14px 18px',
                  background: 'var(--green-50)',
                  border: '1px solid var(--green-100)',
                  borderRadius: 8,
                  gap: 10,
                }}
              >
                <span style={{ fontSize: '0.82rem', color: 'var(--green-800)' }}>
                  {isAr
                    ? 'المقارنة تعرض الصفات التجارية فقط. بيانات اتصال المورد تظهر على ملفه عندما يمنحها هو، وبيانات المشتري تُسلَّم للمورد الذي تعتمده أنت بالاسم.'
                    : 'This comparison shows commercial attributes only. A producer\u2019s own contact details appear on its profile when it publishes them, and a buyer\u2019s details are released only to a supplier that buyer approves by name.'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

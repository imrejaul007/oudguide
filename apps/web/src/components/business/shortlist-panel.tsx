'use client';

const producerCovers: Record<string, string> = {
  'al-mutalib-perfumes': '/images/hero-attar-still.svg',
  'assam-artisan-distillers': '/images/hero-oud-chip.svg',
  'siam-trat-agarwood-co': '/images/hero-dehn-al-oud.svg',
};

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bookmark, Trash2, GitCompare, ArrowRight, MapPin } from 'lucide-react';

export interface ShortlistProducer {
  id: string;
  slug: string;
  name: string;
  city?: string | null;
  country_name?: string | null;
  category?: string | null;
  product_families?: string[];
  minimum_order_quantity?: string | null;
  contact_unlocked: boolean;
}

/**
 * Buyer shortlist.
 *
 * Backed by the same `oudguide_shortlist` localStorage key the
 * BookmarkButton writes, so a producer saved from any page appears here.
 * The shortlist is a purely client-side convenience — it never transmits
 * anything, which is consistent with the platform's privacy posture.
 */
export function ShortlistPanel({
  producers,
  locale,
  isAr,
}: {
  producers: ShortlistProducer[];
  locale: string;
  isAr: boolean;
}) {
  const [ids, setIds] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('oudguide_shortlist') || '[]');
      if (Array.isArray(saved)) setIds(saved);
    } catch {}
    setHydrated(true);
  }, []);

  const saved = producers.filter((p) => ids.includes(p.id));

  const remove = (id: string) => {
    const next = ids.filter((x) => x !== id);
    setIds(next);
    try {
      localStorage.setItem('oudguide_shortlist', JSON.stringify(next));
    } catch {}
  };

  const clearAll = () => {
    setIds([]);
    try {
      localStorage.removeItem('oudguide_shortlist');
    } catch {}
  };

  if (!hydrated) return null;

  if (saved.length === 0) {
    return (
      <div className="card-frame text-center" style={{ padding: 56 }}>
        <Bookmark size={26} style={{ color: 'var(--line-strong)', margin: '0 auto 14px' }} />
        <h3 className="h3">{isAr ? 'قائمة الحفظ فارغة' : 'Your shortlist is empty'}</h3>
        <p className="lede" style={{ margin: '10px auto 22px', maxWidth: '44ch' }}>
          {isAr
            ? 'احفظ أي منتج من الدليل لمقارنته جنباً إلى جنب.'
            : 'Save any producer from the directory to compare them side by side.'}
        </p>
        <Link href={`/${locale}/directory`} className="btn btn-primary">
          {isAr ? 'تصفح الدليل ←' : 'Browse the directory →'}
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="row-between" style={{ marginBottom: 24 }}>
        <span className="meta" style={{ textTransform: 'none', letterSpacing: '0.02em' }}>
          {saved.length} {isAr ? 'منتج محفوظ' : 'saved producers'}
        </span>
        <div className="cluster" style={{ gap: 8 }}>
          <Link href={`/${locale}/directory`} className="btn btn-outline btn-sm">
            <GitCompare size={14} />
            {isAr ? 'قارن في الدليل' : 'Compare in directory'}
          </Link>
          <button onClick={clearAll} className="btn btn-ghost btn-sm">
            <Trash2 size={13} />
            {isAr ? 'مسح الكل' : 'Clear all'}
          </button>
        </div>
      </div>

      <div className="grid-3">
        {saved.map((p) => (
          <article key={p.id} className="data-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div className="data-card-cover" style={{ height: 110 }}>
                <img
                  src={producerCovers[p.slug] || '/images/hero-oud-chip.svg'}
                  alt={p.name}
                />
                <div className="data-card-cover-overlay" />
              </div>
              <div className="row-between" style={{ marginBottom: 8, alignItems: 'flex-start' }}>
                <h3 className="data-card-name" style={{ fontSize: '1.05rem', margin: 0 }}>
                  <Link href={`/${locale}/directory/${p.slug}`}>{p.name}</Link>
                </h3>
                <button
                  onClick={() => remove(p.id)}
                  className="icon-button"
                  style={{ width: 28, height: 28 }}
                  aria-label={isAr ? 'إزالة' : 'Remove'}
                >
                  <Trash2 size={13} />
                </button>
              </div>

              <div className="biz-location" style={{ marginBottom: 10 }}>
                <MapPin size={11} />
                {p.city ? `${p.city}, ` : ''}{p.country_name}
              </div>

              {p.product_families && p.product_families.length > 0 && (
                <div className="biz-tags" style={{ marginBottom: 12 }}>
                  {p.product_families.slice(0, 3).map((f) => (
                    <span key={f} className="chip" style={{ fontSize: '0.7rem' }}>{f}</span>
                  ))}
                </div>
              )}

              {p.minimum_order_quantity && (
                <p className="meta" style={{ textTransform: 'none', letterSpacing: '0.02em', marginBottom: 14 }}>
                  {isAr ? 'الحد الأدنى' : 'MOQ'}: {p.minimum_order_quantity}
                </p>
              )}
            </div>

            <div className="cluster" style={{ gap: 8, marginTop: 14, paddingTop: 12, borderTop: '1px solid var(--line)' }}>
              <Link href={`/${locale}/directory/${p.slug}`} className="btn btn-outline btn-sm">
                {isAr ? 'الملف' : 'Profile'}
              </Link>
              <Link href={`/${locale}/rfq?supplier=${p.slug}`} className="btn btn-primary btn-sm" style={{ gap: 5 }}>
                <span>{isAr ? 'طلب تسعير' : 'Request quote'}</span>
                <ArrowRight size={12} className="icon-dir-flip" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { Search, Filter, MapPin, X, Loader2, SlidersHorizontal } from 'lucide-react';
import { BusinessCard } from './business-card';
import { ComparisonDrawer, type ComparableProducer } from './comparison-drawer';

export interface DirectoryBusiness {
  id: string;
  slug: string;
  name: string;
  description?: string | null;
  category?: string | null;
  business_type?: string | null;
  country_id: string;
  country_name?: string | null;
  city?: string | null;
  is_claimed: boolean;
  has_active_membership: boolean;
  contact_unlocked: boolean;
  verification_state?: 'owner_verified' | 'seller_declared' | 'unverified';
  verified_fields?: string[];
  demo?: boolean;
  handles_origins?: string[];
  serves_destinations?: string[];
  product_families?: string[];
  sample_availability?: boolean;
  minimum_order_quantity?: string | null;
  established_year?: number | null;
}

const FAMILY_FILTERS: { key: string; label: string; labelAr: string; icon: string }[] = [
  { key: 'all', label: 'All Materials', labelAr: 'كل الأصناف', icon: '✦' },
  { key: 'Oud wood', label: 'Oud Wood & Chips', labelAr: 'خشب وبخور', icon: '🪵' },
  { key: 'Oud oil', label: 'Pure Dehn Al Oud', labelAr: 'دهن عود خالص', icon: '🧪' },
  { key: 'Perfume oil', label: 'Perfume Oils', labelAr: 'زيوت عطرية', icon: '🌹' },
  { key: 'Finished perfume', label: 'Finished Perfume', labelAr: 'عطور منتهية', icon: '✨' },
  { key: 'Bakhoor/incense', label: 'Bakhoor & Incense', labelAr: 'بخور وعود مبخّر', icon: '🔥' },
];

const PAGE_SIZE = 6;

export function DirectoryBrowser({
  businesses,
  locale,
  isAr,
  initialSearch = '',
  initialCountry = '',
  initialFamily = 'all',
}: {
  businesses: DirectoryBusiness[];
  locale: string;
  isAr: boolean;
  initialSearch?: string;
  initialCountry?: string;
  initialFamily?: string;
}) {
  const [query, setQuery] = useState(initialSearch);
  const [debounced, setDebounced] = useState(initialSearch);
  const [family, setFamily] = useState(initialFamily);
  const [country, setCountry] = useState(initialCountry);
  const [page, setPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  // Debounced search — 300ms, matching IndexOrbit's directory behaviour.
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(query);
      setPage(1);
    }, 300);
    return () => clearTimeout(timer);
  }, [query]);

  const countries = useMemo(() => {
    const set = new Map<string, string>();
    for (const b of businesses) {
      if (b.country_name) set.set(b.country_id, b.country_name);
    }
    return Array.from(set.entries()).sort((a, b) => a[1].localeCompare(b[1]));
  }, [businesses]);

  const filtered = useMemo(() => {
    const q = debounced.trim().toLowerCase();
    return businesses.filter((b) => {
      if (family !== 'all') {
        if (!(b.product_families ?? []).includes(family)) return false;
      }
      // A fixture record is never shown in the public listing.
      if (b.demo) return false;
      if (country && b.country_id !== country) return false;
      if (!q) return true;
      const hay = [
        b.name,
        b.description ?? '',
        b.city ?? '',
        b.country_name ?? '',
        (b.handles_origins ?? []).join(' '),
        (b.product_families ?? []).join(' '),
      ]
        .join(' ')
        .toLowerCase();
      return hay.includes(q);
    });
  }, [businesses, debounced, family, country]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const visible = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  const resetFilters = () => {
    setQuery('');
    setDebounced('');
    setFamily(initialFamily);
    setCountry('');
    setPage(1);
  };

  const hasFilters = Boolean(query || family !== 'all' || country);

  return (
    <div>
      {/* FILTER BAR */}
      <div className="card" style={{ padding: 20, marginBottom: 24 }}>
        <div className="row-between" style={{ marginBottom: 14 }}>
          <div style={{ position: 'relative', flex: '1 1 320px', maxWidth: 520 }}>
            <Search
              size={16}
              style={{
                position: 'absolute',
                insetInlineStart: 14,
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--color-gold-dark)',
                pointerEvents: 'none',
              }}
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={isAr
                ? 'ابحث بالاسم، الصنف، أو الإقليم...'
                : 'Search by name, material, or terroir...'}
              className="form-input"
              style={{ paddingInlineStart: 40 }}
              aria-label={isAr ? 'بحث في الدليل' : 'Search directory'}
            />
          </div>

          <div className="cluster">
            <span className="badge badge-gold">
              <Filter size={11} />
              {filtered.length} {isAr ? 'نتيجة' : 'Results'}
            </span>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="btn btn-outline btn-sm"
            >
              <SlidersHorizontal size={14} />
              {isAr ? 'عوامل التصفية' : 'Filters'}
            </button>
            {hasFilters && (
              <button onClick={resetFilters} className="btn btn-ghost btn-sm">
                <X size={14} />
                {isAr ? 'إعادة تعيين' : 'Reset'}
              </button>
            )}
          </div>
        </div>

        {/* Material family chips */}
        <div className="filter-chip-row">
          {FAMILY_FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => { setFamily(f.key); setPage(1); }}
              className={`filter-chip ${family === f.key ? 'active' : ''}`}
            >
              <span>{f.icon}</span>
              <span>{isAr ? f.labelAr : f.label}</span>
            </button>
          ))}
        </div>

        {/* Country filter */}
        {showFilters && (
          <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--color-border)' }}>
            <span className="eyebrow" style={{ display: 'block', marginBottom: 10 }}>
              {isAr ? 'بلد المنشأ' : 'Country of Origin'}
            </span>
            <div className="filter-chip-row">
              <button
                onClick={() => { setCountry(''); setPage(1); }}
                className={`filter-chip ${country === '' ? 'active' : ''}`}
              >
                {isAr ? 'كل الدول' : 'All countries'}
              </button>
              {countries.map(([code, name]) => (
                <button
                  key={code}
                  onClick={() => { setCountry(code); setPage(1); }}
                  className={`filter-chip ${country === code ? 'active' : ''}`}
                >
                  <MapPin size={12} />
                  {name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* EMPTY STATE */}
      {filtered.length === 0 && (
        <div className="card-frame text-center" style={{ padding: 56 }}>
          <h3 className="h3">{isAr ? 'لا توجد نتائج مطابقة' : 'No matching producers'}</h3>
          <p className="lede" style={{ margin: '12px auto 24px', maxWidth: 520 }}>
            {isAr
              ? 'جرّب توسيع معايير البحث أو إزالة عوامل التصفية، أو استكشف الدليل الكامل.'
              : 'Try widening your search or clearing the filters, or browse the complete directory.'}
          </p>
          <div className="cluster" style={{ justifyContent: 'center' }}>
            <button onClick={resetFilters} className="btn btn-gold">
              {isAr ? 'إعادة تعيين البحث' : 'Reset Search'}
            </button>
            <Link href={`/${locale}/sourcing`} className="btn btn-outline">
              {isAr ? 'اسأل مساعد التوريد' : 'Ask the Sourcing Assistant'}
            </Link>
          </div>
        </div>
      )}

      {/* RESULTS */}
      {filtered.length > 0 && (
        <>
          <div className="grid-3">
            {visible.map((b) => (
              <BusinessCard key={b.id} business={b as any} locale={locale} />
            ))}
          </div>

          {/* COMPARISON DRAWER — reads the shared shortlist */}
          <ComparisonDrawer
            locale={locale}
            isAr={isAr}
            producers={businesses as unknown as ComparableProducer[]}
          />

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="pagination">
              <button
                onClick={() => setPage(Math.max(1, safePage - 1))}
                disabled={safePage === 1}
                className="pagination-btn"
              >
                ←
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  className={`pagination-btn ${n === safePage ? 'active' : ''}`}
                >
                  {n}
                </button>
              ))}
              <button
                onClick={() => setPage(Math.min(totalPages, safePage + 1))}
                disabled={safePage === totalPages}
                className="pagination-btn"
              >
                →
              </button>
              <span className="pagination-info">
                {isAr
                  ? `صفحة ${safePage} من ${totalPages}`
                  : `Page ${safePage} of ${totalPages}`}
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
}

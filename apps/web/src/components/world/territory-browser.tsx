'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import Link from 'next/link';
import { LayoutGrid, List, Search, MapPin, ArrowRight, X } from 'lucide-react';
import { useDebounce, useRevealOnScroll } from '@/lib/hooks';

export interface Territory {
  iso2: string;
  iso3: string;
  name: string;
  nameAr: string;
  role_status: string;
  public_readiness: string;
  region?: string;
}

/**
 * Territory browser.
 *
 * Ports three IndexOrbit taxonomy patterns that were missing from OudGuide's
 * world page:
 *   1. Grid / List view toggle (from `business-types/page.tsx`)
 *   2. Infinite scroll via an IntersectionObserver sentinel
 *   3. Lazy section reveal on scroll
 *
 * The list view also adds the country/region meta row and a count badge
 * that the plain grid did not carry.
 */
export function TerritoryBrowser({
  territories,
  locale,
  isAr,
}: {
  territories: Territory[];
  locale: string;
  isAr: boolean;
}) {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [query, setQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(24);
  const debouncedQuery = useDebounce(query, 300);

  const filtered = useMemo(() => {
    const q = debouncedQuery.trim().toLowerCase();
    if (!q) return territories;
    return territories.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.nameAr.includes(debouncedQuery.trim()) ||
        t.iso2.toLowerCase() === q ||
        t.iso3.toLowerCase() === q ||
        (t.region ?? '').toLowerCase().includes(q)
    );
  }, [territories, debouncedQuery]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visible.length < filtered.length;

  // Infinite-scroll sentinel — load the next page when it scrolls into view.
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el || !hasMore || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCount((c) => c + 24);
        }
      },
      { threshold: 0, rootMargin: '200px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasMore, filtered.length]);

  return (
    <div>
      {/* Toolbar */}
      <div className="row-between" style={{ marginBottom: 24 }}>
        <div style={{ position: 'relative', flex: '1 1 300px', maxWidth: 440 }}>
          <Search
            size={16}
            style={{
              position: 'absolute',
              insetInlineStart: 14,
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--ink-soft)',
              pointerEvents: 'none',
            }}
          />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setVisibleCount(24);
            }}
            placeholder={isAr
              ? 'ابحث عن دولة أو الإقليم...'
              : 'Search a country or region...'}
            className="form-input"
            style={{ paddingInlineStart: 40, paddingInlineEnd: query ? 40 : 14 }}
            aria-label={isAr ? 'بحث في الأقاليم' : 'Search territories'}
          />
          {query && (
            <button
              onClick={() => {
                setQuery('');
                setVisibleCount(24);
              }}
              className="icon-button"
              style={{
                position: 'absolute',
                insetInlineEnd: 4,
                top: '50%',
                transform: 'translateY(-50%)',
                width: 30,
                height: 30,
                border: 'none',
                background: 'transparent',
              }}
              aria-label={isAr ? 'مسح' : 'Clear'}
            >
              <X size={15} />
            </button>
          )}
        </div>

        <div className="cluster" style={{ gap: 12 }}>
          <span className="meta" style={{ textTransform: 'none', letterSpacing: '0.02em' }}>
            {filtered.length} {isAr ? 'إقليم' : 'territories'}
          </span>
          <div className="view-toggle" role="group" aria-label={isAr ? 'طريقة العرض' : 'View mode'}>
            <button
              onClick={() => setView('grid')}
              className={`view-toggle-btn ${view === 'grid' ? 'active' : ''}`}
              aria-label={isAr ? 'عرض شبكي' : 'Grid view'}
              aria-pressed={view === 'grid'}
            >
              <LayoutGrid size={15} />
            </button>
            <button
              onClick={() => setView('list')}
              className={`view-toggle-btn ${view === 'list' ? 'active' : ''}`}
              aria-label={isAr ? 'عرض قائمة' : 'List view'}
              aria-pressed={view === 'list'}
            >
              <List size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="card-frame text-center" style={{ padding: 56 }}>
          <Search size={28} style={{ color: 'var(--line-strong)', margin: '0 auto 14px' }} />
          <h3 className="h3">{isAr ? 'لا توجد نتائج' : 'No territories matched'}</h3>
          <p className="lede" style={{ marginTop: 8, marginBottom: 20 }}>
            {isAr ? 'جرّب اسماً مختلفاً أو رمز الدولة.' : 'Try a different name or a country code.'}
          </p>
          <button onClick={() => setQuery('')} className="btn btn-outline btn-sm">
            {isAr ? 'مسح البحث' : 'Clear search'}
          </button>
        </div>
      ) : view === 'grid' ? (
        <div className="grid-4">
          {visible.map((t) => (
            <TerritoryCard key={t.iso2} territory={t} locale={locale} isAr={isAr} />
          ))}
        </div>
      ) : (
        <div className="stack-2">
          {visible.map((t) => (
            <TerritoryRow key={t.iso2} territory={t} locale={locale} isAr={isAr} />
          ))}
        </div>
      )}

      {/* Load-more sentinel */}
      {hasMore && (
        <div ref={sentinelRef} style={{ height: 1 }} aria-hidden="true" />
      )}

      {hasMore && (
        <div className="text-center" style={{ marginTop: 28 }}>
          <button
            onClick={() => setVisibleCount((c) => c + 24)}
            className="btn btn-outline btn-sm"
          >
            {isAr ? 'عرض المزيد' : 'Load more'}
            <ArrowRight size={14} />
          </button>
        </div>
      )}
    </div>
  );
}

function TerritoryCard({ territory, locale, isAr }: { territory: Territory; locale: string; isAr: boolean }) {
  const { ref, className } = useRevealOnScroll();

  return (
    <Link
      ref={ref as React.Ref<HTMLAnchorElement>}
      href={`/${locale}/world/${territory.iso2}`}
      className={`card ${className}`}
      style={{ padding: 20, textDecoration: 'none' }}
    >
      <div className="cluster" style={{ justifyContent: 'space-between', marginBottom: 10 }}>
        <span className="badge badge-locked">{territory.iso2}</span>
        <span className="meta" style={{ fontSize: '0.62rem', textTransform: 'none', letterSpacing: '0.02em' }}>
          {territory.role_status}
        </span>
      </div>
      <h3 className="discipline-title" style={{ fontSize: '1.02rem', marginBottom: 4 }}>
        {isAr ? territory.nameAr : territory.name}
      </h3>
      <p className="meta" style={{ textTransform: 'none', letterSpacing: '0.02em' }}>
        {territory.public_readiness}
      </p>
    </Link>
  );
}

function TerritoryRow({ territory, locale, isAr }: { territory: Territory; locale: string; isAr: boolean }) {
  const { ref, className } = useRevealOnScroll();

  return (
    <Link
      ref={ref as React.Ref<HTMLAnchorElement>}
      href={`/${locale}/world/${territory.iso2}`}
      className={`card ${className}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        padding: '15px 20px',
        textDecoration: 'none',
        flexWrap: 'wrap',
      }}
    >
      <div className="cluster" style={{ gap: 14, minWidth: 0 }}>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: '50%',
            background: 'var(--green-50)',
            border: '1px solid var(--green-100)',
            color: 'var(--green-700)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <MapPin size={15} />
        </div>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 500, color: 'var(--ink)' }}>
            {isAr ? territory.nameAr : territory.name}
          </div>
          <div className="meta" style={{ textTransform: 'none', letterSpacing: '0.02em' }}>
            {territory.iso2} · {territory.iso3} · {territory.public_readiness}
          </div>
        </div>
      </div>
      <ArrowRight size={16} style={{ color: 'var(--ink-soft)', flexShrink: 0 }} />
    </Link>
  );
}

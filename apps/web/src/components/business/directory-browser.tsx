'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import {
  Search,
  Filter,
  X,
  SlidersHorizontal,
  Layers,
  TreePine,
  FlaskConical,
  Flower2,
  Sparkles,
  Flame,
  List,
  LayoutGrid,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { BookmarkButton } from './interactive-tools';
import { ComparisonDrawer, type ComparableProducer } from './comparison-drawer';
import {
  DIRECTORY_ROLE_SLUGS,
  directoryRoleLabel,
  isDirectoryRole,
} from '../../../../../packages/contracts/src/directory-roles.ts';
import {
  handlesOrigin,
  holdsRole,
  isInArea,
  isInCity,
  isLocatedIn,
  servesDestination,
  tradesFamily,
} from '../../../../../packages/contracts/src/directory-filters.ts';
import {
  DirectoryGeographyFilters,
  type DirectoryFilterOption,
} from './directory-geography-filters';

export interface DirectoryBusiness {
  id: string;
  slug: string;
  name: string;
  description?: string | null;
  category?: string | null;
  business_type?: string | null;
  /** The controlled role slugs the directory filters on. */
  roles?: string[];
  country_id: string;
  country_name?: string | null;
  city?: string | null;
  /**
   * The neighbourhood or district, where the record states one.
   *
   * The area filter matches on this and on the published street
   * address, so both have to be declared here: a filter that reads a
   * field the interface does not declare is a filter that silently
   * matches nothing.
   */
  region?: string | null;
  /**
   * The street address.
   *
   * Present only on a record whose owner published it. The projection
   * puts it behind the same contact gate as the phone number, so a
   * locked record does not carry one at all and cannot be claimed to be
   * in a neighbourhood.
   */
  street_address?: string | null;
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

type SortKey = 'name' | 'established' | 'type';

const FAMILY_FILTERS: {
  key: string;
  label: string;
  labelAr: string;
  icon: React.ComponentType<{ size?: number }>;
}[] = [
  { key: 'all', label: 'All Materials', labelAr: 'كل الأصناف', icon: Layers },
  { key: 'Oud wood', label: 'Oud Wood & Chips', labelAr: 'خشب وبخور', icon: TreePine },
  { key: 'Oud oil', label: 'Pure Dehn Al Oud', labelAr: 'دهن عود خالص', icon: FlaskConical },
  { key: 'Perfume oil', label: 'Perfume Oils', labelAr: 'زيوت عطرية', icon: Flower2 },
  { key: 'Finished perfume', label: 'Finished Perfume', labelAr: 'عطور منتهية', icon: Sparkles },
  { key: 'Bakhoor/incense', label: 'Bakhoor & Incense', labelAr: 'بخور وعود مبخّر', icon: Flame },
];

const PAGE_SIZE = 8;

function sortRecords(records: DirectoryBusiness[], sort: SortKey): DirectoryBusiness[] {
  const sorted = [...records];
  switch (sort) {
    case 'established':
      sorted.sort((a, b) => (b.established_year ?? 0) - (a.established_year ?? 0));
      break;
    case 'type':
      sorted.sort((a, b) =>
        Number(b.contact_unlocked) - Number(a.contact_unlocked) ||
        (b.has_active_membership ? 1 : 0) - (a.has_active_membership ? 1 : 0)
      );
      break;
    default:
      sorted.sort((a, b) => a.name.localeCompare(b.name));
  }
  return sorted;
}

export function DirectoryBrowser({
  businesses,
  samples = [],
  locale,
  isAr,
  initialSearch = '',
  initialCountry = '',
  initialFamily = 'all',
  initialRole = '',
  initialCity = '',
  initialArea = '',
  initialOrigin = '',
  initialDestination = '',
  locationCountries = [],
  cityOptions = [],
  originCountries = [],
  destinationCountries = [],
  locationNames = {},
}: {
  businesses: DirectoryBusiness[];
  /** Fixture records, shown in a labelled panel apart from the register. */
  samples?: DirectoryBusiness[];
  locale: string;
  isAr: boolean;
  initialSearch?: string;
  /** An ISO2 code: where the business is located. */
  initialCountry?: string;
  initialFamily?: string;
  /** A role slug from the controlled vocabulary. */
  initialRole?: string;
  /** A city slug. */
  initialCity?: string;
  /** A neighbourhood slug. */
  initialArea?: string;
  /** A country slug: the origin of the material the business handles. */
  initialOrigin?: string;
  /** An ISO2 code: a country the business is documented to ship to. */
  initialDestination?: string;
  locationCountries?: DirectoryFilterOption[];
  cityOptions?: DirectoryFilterOption[];
  originCountries?: DirectoryFilterOption[];
  destinationCountries?: DirectoryFilterOption[];
  /** The display name for each location code. */
  locationNames?: Record<string, string>;
}) {
  const [query, setQuery] = useState(initialSearch);
  const [debounced, setDebounced] = useState(initialSearch);
  const [family, setFamily] = useState(initialFamily);
  const [country, setCountry] = useState(initialCountry);
  const [city, setCity] = useState(initialCity);
  const [area, setArea] = useState(initialArea);
  const [origin, setOrigin] = useState(initialOrigin);
  const [destination, setDestination] = useState(initialDestination);
  // A role outside the vocabulary is ignored rather than applied, so a
  // hand-edited URL cannot put the browser into a state the directory
  // cannot explain.
  const [role, setRole] = useState(isDirectoryRole(initialRole) ? initialRole : '');
  const [page, setPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [view, setView] = useState<'list' | 'grid'>('list');
  const [sort, setSort] = useState<SortKey>('name');

  // Debounced search — 300ms, matching IndexOrbit's directory behaviour.
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(query);
      setPage(1);
    }, 300);
    return () => clearTimeout(timer);
  }, [query]);

  const filterOne = (b: DirectoryBusiness) => {
    const q = debounced.trim().toLowerCase();

    // The filters are independent questions, and each one is answered
    // by the record's own fields. Where the business is, what origin
    // of material it handles and which destinations it serves are
    // three separate facts: a Dubai company that ships to Saudi
    // Arabia is not in Saudi Arabia, and one that handles Cambodian
    // agarwood is not in Cambodia.
    if (!tradesFamily(b, family)) return false;
    if (!holdsRole(b, role)) return false;
    if (!isLocatedIn(b, country)) return false;
    if (!isInCity(b, city)) return false;
    if (!isInArea(b, area)) return false;
    if (!handlesOrigin(b, origin)) return false;
    if (!servesDestination(b, destination)) return false;

    if (!q) return true;
    const hay = [
      b.name,
      b.description ?? '',
      b.city ?? '',
      b.country_name ?? '',
      (b.handles_origins ?? []).join(' '),
      (b.product_families ?? []).join(' '),
      (b.roles ?? []).join(' '),
    ]
      .join(' ')
      .toLowerCase();
    return hay.includes(q);
  };

  const filtered = useMemo(
    () => sortRecords(businesses.filter(filterOne), sort),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [businesses, debounced, family, country, city, area, origin, destination, role, sort]
  );

  /**
   * The fixture panel honours the reader's own filters but never
   * pretends to be the register: samples that match nothing for the
   * active filters are not shown, and samples never fill in an
   * empty register.
   */
  const sampleMatches = useMemo(
    () => samples.filter((s) => s.demo !== true || !query).filter(filterOne),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [samples, debounced, family, country, city, area, origin, destination, role]
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const visible = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  const resetFilters = () => {
    setQuery('');
    setDebounced('');
    setFamily(initialFamily);
    setCountry('');
    setCity('');
    setArea('');
    setOrigin('');
    setDestination('');
    setRole('');
    setPage(1);
  };

  const hasFilters = Boolean(
    query ||
    family !== 'all' ||
    country ||
    city ||
    area ||
    origin ||
    destination ||
    role
  );

  /**
   * The roles that at least one published business actually holds.
   *
   * A chip for a role no record claims would be a filter that always
   * returns nothing, which reads as "this directory is empty" rather than
   * "no supplier in this category is documented yet".
   */
  const availableRoles = useMemo(() => {
    const held = new Set<string>();
    for (const b of businesses) {
      if (b.demo) continue;
      for (const r of b.roles ?? []) held.add(r);
    }
    return DIRECTORY_ROLE_SLUGS.filter((r) => held.has(r));
  }, [businesses]);

  const recordTypeOf = (b: DirectoryBusiness) => {
    if (b.contact_unlocked) return isAr ? 'عضو معتمد' : 'Verified member';
    if (b.has_active_membership) return isAr ? 'عضوية نشطة' : 'Active membership';
    return isAr ? 'سجل أساسي' : 'Basic record';
  };

  const renderRow = (b: DirectoryBusiness, extraBadge: React.ReactNode = null) => (
    <div className="directory-row" key={b.id}>
      <div>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center', marginBottom: 4 }}>
          <h3 className="directory-row-name" style={{ flex: '1 1 auto', minWidth: 0 }}>
            <Link href={`/${locale}/directory/${b.slug}`}>{b.name}</Link>
          </h3>
          <BookmarkButton slug={b.slug} locale={locale} />
          {extraBadge}
        </div>
        <div className="directory-row-value" style={{ color: 'var(--ink-muted)', fontSize: '0.8rem' }}>
          {b.city ? `${b.city}, ` : ''}
          {b.country_name || b.country_id}
          {b.established_year ? ` · ${isAr ? 'تأسس في' : 'Est.'} ${b.established_year}` : ''}
        </div>
      </div>

      <div>
        <span className="directory-row-label">{isAr ? 'الأصناف' : 'Materials'}</span>
        <div className="directory-row-list" style={{ display: 'block' }}>
          <span className="directory-row-value">
            {(b.product_families ?? []).slice(0, 3).join(' · ') || '—'}
          </span>
          {(b.product_families?.length ?? 0) > 3 && (
            <span style={{ color: 'var(--ink-soft)', fontSize: '0.72rem' }}>
              {isAr ? `+${b.product_families!.length - 3} أخرى` : `+${b.product_families!.length - 3} more`}
            </span>
          )}
        </div>
      </div>

      <div>
        <span className="directory-row-label">{isAr ? 'ينقل إلى' : 'Ships to'}</span>
        <span className="directory-row-value">
          {b.serves_destinations?.length
            ? `${b.serves_destinations.length} ${isAr ? 'وجهات موثقة' : 'documented destination' + (b.serves_destinations.length === 1 ? '' : 's')}`
            : '—'}
        </span>
        {b.sample_availability != null && (
          <span style={{ display: 'block', fontSize: '0.72rem', color: b.sample_availability ? 'var(--green-600)' : 'var(--ink-soft)', marginTop: 3 }}>
            {b.sample_availability ? (isAr ? 'العينات متاحة' : 'Samples available') : isAr ? 'لا عينات' : 'No samples'}
          </span>
        )}
      </div>

      <div>
        <span className="directory-row-label">{isAr ? 'الحد الأدنى' : 'Min. order'}</span>
        <span className="directory-row-value" style={{ fontSize: '0.8rem' }}>
          {b.minimum_order_quantity || '—'}
        </span>
      </div>

      <div>
        <span className="directory-row-label">{isAr ? 'الحالة' : 'Status'}</span>
        <span
          className={`badge ${b.contact_unlocked ? 'badge-emerald' : 'badge-locked'}`}
          style={{ display: 'inline-flex' }}
        >
          {recordTypeOf(b)}
        </span>
      </div>

      <div style={{ textAlign: 'end' }}>
        <Link
          href={`/${locale}/directory/${b.slug}`}
          className="btn btn-outline btn-sm"
          style={{ gap: 5 }}
        >
          {isAr ? 'الملف' : 'Profile'}
          <ArrowRight size={12} />
        </Link>
      </div>
    </div>
  );

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
                color: 'var(--ink-soft)',
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
            <span className="badge badge-crimson">
              <Filter size={11} />
              {filtered.length} {isAr ? 'نتيجة' : 'Results'}
            </span>
            <button
              onClick={() => setView(view === 'list' ? 'grid' : 'list')}
              className="icon-button"
              title={view === 'list' ? (isAr ? 'عرض شبكي' : 'Grid view') : (isAr ? 'عرض قائمة' : 'List view')}
              aria-label={isAr ? 'تبديل طريقة العرض' : 'Toggle view'}
            >
              {view === 'list' ? <LayoutGrid size={15} /> : <List size={15} />}
            </button>
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

        {/*
          The active role, stated outside the filter panel.

          The role chips live behind the "Filters" toggle, so a reader who
          arrives at /en/directory/wholesalers saw a filtered list with
          no indication of what had filtered it. The role is a published
          URL and a reader has to be able to see what it means.
        */}
        {role && (
          <div className="cluster" style={{ marginBottom: 14 }}>
            <span className="eyebrow" style={{ marginBottom: 0 }}>
              {isAr ? 'الدور' : 'Role'}
            </span>
            <span className="chip">{directoryRoleLabel(role, locale)}</span>
          </div>
        )}

        {/* Material family chips */}
        <div className="filter-chip-row">
          {FAMILY_FILTERS.map((f) => {
            const Icon = f.icon;
            return (
              <button
                key={f.key}
                onClick={() => { setFamily(f.key); setPage(1); }}
                className={`filter-chip ${family === f.key ? 'active' : ''}`}
              >
                <Icon size={13} />
                <span>{isAr ? f.labelAr : f.label}</span>
              </button>
            );
          })}
        </div>

        {/* Role filter — the business's own roles, not a parsed label. */}
        {showFilters && availableRoles.length > 0 && (
          <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--line)' }}>
            <span className="eyebrow" style={{ display: 'block', marginBottom: 10 }}>
              {isAr ? 'دور المورد' : 'Business role'}
            </span>
            <div className="filter-chip-row">
              <button
                onClick={() => { setRole(''); setPage(1); }}
                className={`filter-chip ${role === '' ? 'active' : ''}`}
              >
                {isAr ? 'كل الأدوار' : 'All roles'}
              </button>
              {availableRoles.map((r) => (
                <button
                  key={r}
                  onClick={() => { setRole(r); setPage(1); }}
                  className={`filter-chip ${role === r ? 'active' : ''}`}
                >
                  {directoryRoleLabel(r, locale)}
                </button>
              ))}
            </div>
          </div>
        )}

        {/*
          The geography filters: where it is, what origin it handles,
          where it ships.

          The badge that states the active filters is always shown. The
          choices sit behind the "Filters" toggle, because a reader
          who arrived at a published path is looking at a filtered list
          and needs to know what filtered it — not a panel of choices
          they did not open.
        */}
        <DirectoryGeographyFilters
            locale={locale}
            isAr={isAr}
            showChoices={showFilters}
            country={country}
            city={city}
            area={area}
            origin={origin}
            destination={destination}
            locationNames={locationNames}
            locationCountries={locationCountries}
            cityOptions={cityOptions}
            originCountries={originCountries}
            destinationCountries={destinationCountries}
            onCountry={(value) => { setCountry(value); setCity(''); setArea(''); setPage(1); }}
            onCity={(value) => { setCity(value); setArea(''); setPage(1); }}
            onOrigin={(value) => { setOrigin(value); setPage(1); }}
            onDestination={(value) => { setDestination(value); setPage(1); }}
          />
      </div>

      {/* EMPTY STATE */}
      {filtered.length === 0 && sampleMatches.length === 0 && (
        <div className="card-frame text-center" style={{ padding: 56 }}>
          <h3 className="h3">{isAr ? 'لا توجد نتائج مطابقة' : 'No matching producers'}</h3>
          <p className="lede" style={{ margin: '12px auto 24px', maxWidth: 520 }}>
            {isAr
              ? 'جرّب توسيع معايير البحث أو إزالة عوامل التصفية، أو استكشف الدليل الكامل.'
              : 'Try widening your search or clearing the filters, or browse the complete directory.'}
          </p>
          <div className="cluster" style={{ justifyContent: 'center' }}>
            <button onClick={resetFilters} className="btn btn-primary">
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
          {view === 'list' ? (
            <div className="card" style={{ overflow: 'hidden', border: '1px solid var(--line)' }}>
              <div className="directory-head">
                <span className="directory-row-label" style={{ marginBottom: 0 }}>{isAr ? 'السجل' : 'Record'}</span>
                <span className="directory-row-label" style={{ marginBottom: 0 }}>{isAr ? 'الأصناف' : 'Materials'}</span>
                <span className="directory-row-label" style={{ marginBottom: 0 }}>{isAr ? 'الشحن والعيّنة' : 'Ships & samples'}</span>
                <span className="directory-row-label" style={{ marginBottom: 0 }}>{isAr ? 'الحد الأدنى' : 'Min. order'}</span>
                <span className="directory-row-label" style={{ marginBottom: 0 }}>{isAr ? 'الحالة' : 'Status'}</span>
                <span className="directory-row-label" style={{ marginBottom: 0, textAlign: 'end' }}>{isAr ? 'الإجراء' : 'Action'}</span>
              </div>
              {visible.map((b) => renderRow(b))}
            </div>
          ) : (
            <div className="grid-2">
              {visible.map((b) => (
                <GridCard key={b.id} b={b} locale={locale} isAr={isAr} />
              ))}
            </div>
          )}

          {/* SAMPLE RECORDS — fixtures, kept apart from the register */}
          {sampleMatches.length > 0 && (
            <div className="sample-panel">
              <div className="sample-panel-head">
                <h3 className="sample-panel-title">
                  {isAr ? 'سجلات تجريبية' : 'Sample records'}
                </h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--ink-soft)' }}>
                  {isAr ? 'لأغراض العرض فقط — موردون غير نشطين' : 'illustrative only — not live suppliers'}
                </span>
              </div>
              <p className="sample-panel-note">
                {isAr
                  ? 'تظهر هذه السجلات شكل الملف الكامل كما سيبدو بعد التوثيق. لا يمثل موردون حقيقيون وقد أُنشئوا لإظهار عمق الحقول المتاحة.'
                  : 'These records show what a fully documented profile looks like. They are not live suppliers — they were created to illustrate the depth of fields a published record carries.'}
              </p>
              <div className="sample-panel-body">
                {view === 'list'
                  ? sampleMatches.map((b) => renderRow(b, <span className="badge badge-gold" style={{ display: 'inline-flex' }}>{isAr ? 'سجل تجريبي' : 'Sample record'}</span>))
                  : sampleMatches.map((b) => (
                      <GridCard key={b.id} b={b} locale={locale} isAr={isAr} sample />
                    ))}
              </div>
            </div>
          )}

          {/* COMPARISON DRAWER — reads the shared shortlist */}
          <ComparisonDrawer
            locale={locale}
            isAr={isAr}
            producers={businesses as unknown as ComparableProducer[]}
          />

          {/* SORT + PAGINATION */}
          {(totalPages > 1 || filtered.length > 0) && (
            <div className="cluster" style={{ justifyContent: 'space-between', marginTop: 18 }}>
              <div className="cluster">
                <span className="meta">{isAr ? 'ترتيب' : 'Sort by'}</span>
                <select
                  value={sort}
                  onChange={(e) => { setSort(e.target.value as SortKey); setPage(1); }}
                  className="form-select"
                  style={{ width: 'auto', padding: '6px 10px', fontSize: '0.8rem' }}
                  aria-label={isAr ? 'ترتيب النتائج' : 'Sort results'}
                >
                  <option value="name">{isAr ? 'الاسم (أ–ي)' : 'Name (A–Z)'}</option>
                  <option value="established">{isAr ? 'أقدم تأسسًا' : 'Oldest first'}</option>
                  <option value="type">{isAr ? 'النوع (معتمد أولاً)' : 'Type (verified first)'}</option>
                </select>
              </div>
              {totalPages > 1 && (
                <div className="pagination">
                  <button
                    onClick={() => setPage(Math.max(1, safePage - 1))}
                    disabled={safePage === 1}
                    className="pagination-btn"
                    aria-label={isAr ? 'الصفحة السابقة' : 'Previous page'}
                  >
                    <ChevronLeft size={16} className="icon-dir-flip" />
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
                    aria-label={isAr ? 'الصفحة التالية' : 'Next page'}
                  >
                    <ChevronRight size={16} className="icon-dir-flip" />
                  </button>
                  <span className="pagination-info">
                    {isAr
                      ? `صفحة ${safePage} من ${totalPages}`
                      : `Page ${safePage} of ${totalPages}`}
                  </span>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}

/**
 * The grid-view counterpart of the dense row: a compact card with the
 * key facts in a two-column grid. Shares the record shape, so the two
 * views always agree on what a record shows.
 */
function GridCard({
  b,
  locale,
  isAr,
  sample = false,
}: {
  b: DirectoryBusiness;
  locale: string;
  isAr: boolean;
  sample?: boolean;
}) {
  const locationLabel =
    (b.city ? `${b.city}, ` : '') + (b.country_name || b.country_id);

  return (
    <article className="data-card">
      <div className="data-card-head">
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 8 }}>
            {sample && (
              <span className="badge badge-gold" style={{ display: 'inline-flex' }}>
                {isAr ? 'سجل تجريبي' : 'Sample record'}
              </span>
            )}
            <span className={`badge ${b.contact_unlocked ? 'badge-emerald' : 'badge-locked'}`} style={{ display: 'inline-flex' }}>
              {b.contact_unlocked
                ? (isAr ? 'عضو معتمد' : 'Verified member')
                : (isAr ? 'ملف محمي' : 'Basic record')}
            </span>
          </div>
          <h3 className="data-card-name">
            <Link href={`/${locale}/directory/${b.slug}`}>{b.name}</Link>
          </h3>
          <div className="biz-location" style={{ marginBottom: 0, marginTop: 4 }}>
            {locationLabel}
          </div>
        </div>
        <div className="cluster" style={{ gap: 4, flexShrink: 0 }}>
          <BookmarkButton slug={b.slug} locale={locale} />
        </div>
      </div>

      <div className="data-card-facts">
        <div>
          <span className="data-card-fact-label">{isAr ? 'الأصناف' : 'Materials'}</span>
          <span className="data-card-fact-value">
            {(b.product_families ?? []).slice(0, 3).join(' · ') || '—'}
          </span>
        </div>
        <div>
          <span className="data-card-fact-label">{isAr ? 'تأسس في' : 'Established'}</span>
          <span className="data-card-fact-value">{b.established_year ?? '—'}</span>
        </div>
        <div>
          <span className="data-card-fact-label">{isAr ? 'الحد الأدنى' : 'Min. order'}</span>
          <span className="data-card-fact-value">{b.minimum_order_quantity || '—'}</span>
        </div>
        <div>
          <span className="data-card-fact-label">{isAr ? 'الشحن إلى' : 'Ships to'}</span>
          <span className="data-card-fact-value">
            {b.serves_destinations?.length
              ? `${b.serves_destinations.length} ${isAr ? 'وجهات' : 'dest.'}`
              : '—'}
          </span>
        </div>
      </div>

      <div className="cluster" style={{ gap: 12, marginTop: 4 }}>
        <Link
          href={`/${locale}/directory/${b.slug}`}
          className="btn btn-outline btn-sm"
          style={{ gap: 5 }}
        >
          {isAr ? 'الملف الكامل' : 'View profile'}
          <ArrowRight size={12} />
        </Link>
      </div>
    </article>
  );
}

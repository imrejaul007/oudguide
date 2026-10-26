'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, Menu, X, ArrowRight, ChevronDown, Clock, MapPin, Compass, BookOpen, Crown, Leaf, Globe, Lock, Sparkles, Map as MapIcon, ShieldCheck } from 'lucide-react';
import { getNavGroups, getPrimaryNav, siteSettings } from '@/lib/constants';

interface HeaderProps {
  locale: string;
}

const groupIcons: Record<string, typeof Compass> = {
  book: BookOpen,
  compass: Compass,
  crown: Crown,
};

export function Header({ locale }: HeaderProps) {
  const router = useRouter();
  const isAr = locale === 'ar';
  const otherLocale = isAr ? 'en' : 'ar';
  const otherLocaleLabel = isAr ? 'English' : 'العربية';

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navGroups = getNavGroups(locale);
  const primaryNav = getPrimaryNav(locale);
  const popularSearches = isAr ? siteSettings.popularSearchesAr : siteSettings.popularSearches;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setIsMenuOpen(false);
        setOpenGroup(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isMenuOpen]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('oudguide_recent_searches');
      if (saved) setRecentSearches(JSON.parse(saved));
    } catch {}
  }, []);

  const handleSearchSubmit = (query: string) => {
    const trimmed = query.trim();
    if (!trimmed) return;
    const next = [trimmed, ...recentSearches.filter((s) => s !== trimmed)].slice(0, 5);
    setRecentSearches(next);
    try {
      localStorage.setItem('oudguide_recent_searches', JSON.stringify(next));
    } catch {}
    setIsSearchOpen(false);
    setIsMenuOpen(false);
    router.push(`/${locale}/directory?search=${encodeURIComponent(trimmed)}`);
  };

  const clearRecent = () => {
    setRecentSearches([]);
    try {
      localStorage.removeItem('oudguide_recent_searches');
    } catch {}
  };

  const handleGroupEnter = (key: string) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setOpenGroup(key);
  };

  const handleGroupLeave = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => setOpenGroup(null), 160);
  };

  return (
    <>
      {/* 1. Green ribbon — the one dark band above the header */}
      <div className="ribbon">
        <div className="container ribbon-inner">
          <span className="ribbon-item">
            <Leaf size={11} style={{ color: 'var(--green-300)' }} />
            {isAr ? 'وثائق سايتس — الملحق الثاني' : 'CITES Appendix II documented'}
          </span>
          <span className="ribbon-sep">•</span>
          <span className="ribbon-item">
            <Globe size={11} style={{ color: 'var(--green-300)' }} />
            {isAr ? '249 دولة وإقليماً في السجل' : '249 territories in the register'}
          </span>
          <span className="ribbon-sep">•</span>
          <span className="ribbon-item">
            <Lock size={11} style={{ color: 'var(--green-300)' }} />
            {isAr ? 'بيانات الاتصال تُحجب افتراضياً' : 'Contact fields withheld by default'}
          </span>
        </div>
      </div>

      {/* 2. Sticky white nav */}
      <header className="site-header">
        <div className="container site-header-row">
          <Link href={`/${locale}`} className="brand" aria-label="OudGuide home">
            <div className="brand-mark">
              <img
                src="/logo.png"
                alt="OudGuide"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            <div className="brand-text">
              <div className="brand-name">OudGuide</div>
              <div className="brand-tagline">
                {isAr ? 'دَلِيلُ العُود' : 'Heritage & Wholesale'}
              </div>
            </div>
          </Link>

          {/* Primary nav with mega menu */}
          <nav className="primary-nav hidden-mobile">
            {primaryNav.map((item) => {
              const group = item.groupKey ? navGroups.find((g) => g.key === item.groupKey) : undefined;
              if (!group) {
                return <Link key={item.href} href={item.href}>{item.label}</Link>;
              }
              const Icon = groupIcons[group.icon] ?? Compass;
              const isOpen = openGroup === group.key;
              return (
                <div
                  key={item.href}
                  className={`nav-group ${isOpen ? 'open' : ''}`}
                  onMouseEnter={() => handleGroupEnter(group.key)}
                  onMouseLeave={handleGroupLeave}
                >
                  <Link href={item.href} className="nav-group-trigger">
                    <Icon size={14} style={{ color: 'var(--green-600)' }} />
                    {item.label}
                    <ChevronDown size={12} style={{ opacity: 0.55 }} />
                  </Link>

                  {isOpen && (
                    <div className="mega-menu" onMouseEnter={() => handleGroupEnter(group.key)}>
                      <div className="mega-menu-grid">
                        {group.columns.map((col) => (
                          <Link key={col.href + col.label} href={col.href} className="mega-menu-item">
                            <span className="mega-menu-item-label">{isAr ? col.labelAr : col.label}</span>
                            <span className="mega-menu-item-desc">
                              {isAr ? col.descriptionAr : col.description}
                            </span>
                          </Link>
                        ))}
                      </div>
                      <div className="mega-menu-footer">
                        <Link href={`/${locale}/guides`} className="btn-link" style={{ fontSize: '0.84rem' }}>
                          {isAr ? 'تصفح كل الأدلة' : 'Browse the full encyclopedia'}
                        </Link>
                        <Link href={`/${locale}/directory`} style={{ fontSize: '0.86rem', color: 'var(--ink-soft)', fontFamily: 'var(--font-sans)' }}>
                          {isAr ? 'دليل المنتجين ←' : 'Producer directory →'}
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* CTA cluster */}
          <div className="header-cta">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="search-trigger hidden-mobile"
              title="Search"
              aria-label="Open search"
            >
              <Search size={14} />
              <span>{isAr ? 'بحث' : 'Search'}</span>
              <kbd>⌘K</kbd>
            </button>

            <Link href={`/${otherLocale}`} className="lang-pill hidden-mobile" title="Switch language">
              {otherLocale === 'ar' ? 'العربية' : 'EN'}
            </Link>

            <Link href={`/${locale}/rfq`} className="btn btn-primary btn-sm hidden-mobile">
              {isAr ? 'طلب توريد' : 'Start RFQ'}
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="nav-toggle icon-button"
              aria-label={isMenuOpen ? (isAr ? 'إغلاق القائمة' : 'Close menu') : (isAr ? 'فتح القائمة' : 'Open menu')}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Off-canvas mobile navigation drawer */}
        {isMenuOpen && (
          <>
            <div
              className="mobile-drawer-backdrop"
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            />
            <aside
              id="mobile-navigation-drawer"
              className="mobile-drawer"
              role="dialog"
              aria-modal="true"
              aria-label={isAr ? 'قائمة التنقل' : 'Navigation menu'}
            >
              <div className="mobile-drawer-head">
                <div className="brand" style={{ gap: 10 }}>
                  <div className="brand-mark" style={{ width: 32, height: 32 }}>
                    <img
                      src="/logo.png"
                      alt="OudGuide"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>
                  <span className="brand-name" style={{ fontSize: '1.2rem' }}>OudGuide</span>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="icon-button"
                  aria-label={isAr ? 'إغلاق' : 'Close'}
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="mobile-drawer-nav">
                {primaryNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={14} className="icon-dir-flip" style={{ transform: 'rotate(-90deg)', opacity: 0.4 }} />
                  </Link>
                ))}
                <Link href={`/${locale}/sourcing`} onClick={() => setIsMenuOpen(false)}>
                  <span className="cluster" style={{ gap: 8 }}>
                    <Sparkles size={15} style={{ color: 'var(--green-600)' }} />
                    {isAr ? 'مساعد التوريد' : 'Sourcing Assistant'}
                  </span>
                  <ChevronDown size={14} className="icon-dir-flip" style={{ transform: 'rotate(-90deg)', opacity: 0.4 }} />
                </Link>
                <Link href={`/${locale}/directory/map`} onClick={() => setIsMenuOpen(false)}>
                  <span className="cluster" style={{ gap: 8 }}>
                    <MapIcon size={15} style={{ color: 'var(--green-600)' }} />
                    {isAr ? 'خريطة المنتجين' : 'Producer Map'}
                  </span>
                  <ChevronDown size={14} className="icon-dir-flip" style={{ transform: 'rotate(-90deg)', opacity: 0.4 }} />
                </Link>
              </nav>

              <div className="mobile-drawer-footer">
                <Link
                  href={`/${otherLocale}`}
                  className="btn btn-outline btn-sm"
                  style={{ justifyContent: 'center' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Globe size={14} />
                  <span>{otherLocaleLabel}</span>
                </Link>
                <Link
                  href={`/${locale}/rfq`}
                  className="btn btn-primary btn-sm"
                  style={{ justifyContent: 'center' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{isAr ? 'طلب توريد بالجملة' : 'Start Wholesale RFQ'}</span>
                  <ArrowRight size={14} className="icon-dir-flip" />
                </Link>
              </div>
            </aside>
          </>
        )}
      </header>

      {/* 3. Search dialog */}
      {isSearchOpen && (
        <div className="mihrab-modal" onClick={() => setIsSearchOpen(false)}>
          <div className="mihrab-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="mihrab-modal-header">
              <div className="cluster" style={{ gap: 14 }}>
                <Search size={19} style={{ color: 'var(--green-600)', flexShrink: 0 }} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSearchSubmit(searchQuery);
                  }}
                  placeholder={isAr
                    ? 'ابحث عن المقطرين، الأقاليم، الأخشاب، أو الأدلة...'
                    : 'Search distillers, terroirs, wood grades, guides...'}
                  className="form-input"
                  style={{ border: 'none', padding: 0, fontSize: '1.05rem', background: 'transparent' }}
                  autoFocus
                />
                <button onClick={() => setIsSearchOpen(false)} className="icon-button" aria-label="Close">
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="mihrab-modal-body">
              {recentSearches.length > 0 && !searchQuery && (
                <div style={{ marginBottom: 24 }}>
                  <div className="row-between" style={{ marginBottom: 10 }}>
                    <span className="meta">{isAr ? 'عمليات بحث سابقة' : 'Recent Searches'}</span>
                    <button onClick={clearRecent} className="btn-link" style={{ fontSize: '0.78rem' }}>
                      {isAr ? 'مسح' : 'Clear'}
                    </button>
                  </div>
                  <div className="stack-2">
                    {recentSearches.map((search, i) => (
                      <button
                        key={i}
                        onClick={() => handleSearchSubmit(search)}
                        className="search-pill"
                        style={{ width: '100%' }}
                      >
                        <Clock size={13} style={{ color: 'var(--ink-soft)' }} />
                        <span>{search}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {!searchQuery && (
                <div style={{ marginBottom: 24 }}>
                  <span className="meta" style={{ display: 'block', marginBottom: 12 }}>
                    {isAr ? 'عمليات بحث شائعة' : 'Popular Sourcing Searches'}
                  </span>
                  <div className="search-pills">
                    {popularSearches.map((query, idx) => (
                      <button key={idx} onClick={() => handleSearchSubmit(query)} className="search-pill">
                        <MapPin size={13} style={{ color: 'var(--ink-soft)' }} />
                        <span>{query}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="privacy-shield" style={{ margin: 0 }}>
                <ShieldCheck size={20} className="privacy-shield-icon" />
                <div className="privacy-shield-body">
                  <h4>{isAr ? 'هل تحتاج متطلبات خاصة أو كميات تجارية؟' : 'Need custom volume or private label?'}</h4>
                  <p>{isAr ? 'أرسل طلبك عبر استمارة التوريد المحايدة مع حماية تامة للبيانات.' : 'Submit an anonymous RFQ across 67 conditional specifications.'}</p>
                </div>
                <Link href={`/${locale}/rfq`} onClick={() => setIsSearchOpen(false)} className="btn btn-primary btn-sm">
                  {isAr ? 'طلب تسعير' : 'Start RFQ →'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

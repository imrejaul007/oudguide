'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, Menu, X } from 'lucide-react';

interface HeaderProps {
  locale: string;
}

export function Header({ locale }: HeaderProps) {
  const router = useRouter();
  const isAr = locale === 'ar';
  const otherLocale = isAr ? 'en' : 'ar';
  const otherLocaleLabel = isAr ? 'English' : 'العربية';

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSearchSubmit = (query: string) => {
    setIsSearchOpen(false);
    setIsMenuOpen(false);
    if (query.trim()) {
      router.push(`/${locale}/directory?search=${encodeURIComponent(query)}`);
    }
  };

  const navItems = [
    { href: `/${locale}/guides`, label: isAr ? 'الموسوعة' : 'Encyclopedia' },
    { href: `/${locale}/directory`, label: isAr ? 'الدليل' : 'Directory' },
    { href: `/${locale}/world`, label: isAr ? 'خريطة الأقاليم' : 'Origins Map' },
    { href: `/${locale}/for-businesses`, label: isAr ? 'لأصحاب الأعمال' : 'For Distillers' },
    { href: `/${locale}/partners/opportunities`, label: isAr ? 'بوابة الشركاء' : 'Partner Portal' },
  ];

  const quickLinks = [
    { label: isAr ? 'خشب عود غطاس' : 'Sinking-Grade Agarwood', query: 'wood', icon: '🪵' },
    { label: isAr ? 'دهن عود هندي معتق' : 'Aged Assam Oud Oil', query: 'Assam', icon: '🧪' },
    { label: isAr ? 'عود كوه كونغ كمبودي' : 'Cambodian Koh Kong', query: 'Cambodia', icon: '🇰🇭' },
    { label: isAr ? 'عود ترات تايلاندي' : 'Trat Sweet Distillation', query: 'Trat', icon: '🇹🇭' },
    { label: isAr ? 'عطور شرقية' : 'Traditional Sandalwood Attars', query: 'Attar', icon: '🪔' },
  ];

  return (
    <>
      {/* 1. Saffron ribbon */}
      <div className="ribbon">
        <div className="container ribbon-inner">
          <span className="ribbon-item">🌿 {isAr ? 'مرجع سايتس (CITES Appendix II)' : 'CITES Appendix II Verified'}</span>
          <span className="ribbon-sep">•</span>
          <span className="ribbon-item">🌍 {isAr ? '249 دولة وإقليماً' : '249 Global Terroirs'}</span>
          <span className="ribbon-sep">•</span>
          <span className="ribbon-item">🔒 {isAr ? 'حماية تامة لبيانات الاتصال' : 'Zero Contact Leakage'}</span>
        </div>
      </div>

      {/* 2. Sticky glass nav */}
      <header className="site-header">
        <div className="container site-header-row">
          {/* Brand */}
          <Link href={`/${locale}`} className="brand" aria-label="OudGuide home">
            <div className="brand-mark">
              <img
                src="/logo.png"
                alt="OudGuide"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <div className="brand-text">
              <div className="brand-name">OudGuide</div>
              <div className="brand-tagline">
                {isAr ? 'دَلِيلُ العُود' : 'Heritage & Wholesale Reference'}
              </div>
            </div>
          </Link>

          {/* Primary nav (desktop) */}
          <nav className="primary-nav hidden-mobile">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </nav>

          {/* CTA cluster */}
          <div className="header-cta">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="search-trigger hidden-mobile"
              title="Search (⌘K)"
              aria-label="Open search"
            >
              <Search size={14} />
              <span>{isAr ? 'بحث' : 'Search'}</span>
              <kbd>⌘K</kbd>
            </button>

            <Link href={`/${otherLocale}`} className="lang-pill hidden-mobile" title="Switch language">
              {otherLocale === 'ar' ? 'العربية' : 'EN'}
            </Link>

            <Link href={`/${locale}/rfq`} className="btn btn-gold btn-sm hidden-mobile">
              {isAr ? 'طلب توريد' : 'Start RFQ'}
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="nav-toggle icon-button"
              aria-label="Toggle menu"
              style={{ display: 'none' }}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {isMenuOpen && (
          <div className="mobile-drawer">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
            <div className="cluster" style={{ marginTop: 16, borderTop: '1px solid var(--color-border)', paddingTop: 16 }}>
              <Link href={`/${otherLocale}`} className="btn btn-outline btn-sm">{otherLocaleLabel}</Link>
              <Link href={`/${locale}/rfq`} className="btn btn-gold btn-sm">{isAr ? 'طلب توريد' : 'Start RFQ'}</Link>
            </div>
          </div>
        )}
      </header>

      {/* 3. Mihrab search modal */}
      {isSearchOpen && (
        <div className="mihrab-modal" onClick={() => setIsSearchOpen(false)}>
          <div className="mihrab-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="mihrab-modal-header">
              <div className="cluster" style={{ gap: 14 }}>
                <Search size={20} style={{ color: 'var(--color-gold-dark)' }} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && searchQuery.trim()) {
                      handleSearchSubmit(searchQuery);
                    }
                  }}
                  placeholder={isAr ? 'ابحث عن المقطرين، الأقاليم، الأخشاب...' : 'Search distillers, terroirs, wood grades...'}
                  className="form-input"
                  style={{ border: 'none', padding: 0, fontSize: '1.1rem', background: 'transparent' }}
                  autoFocus
                />
                <button onClick={() => setIsSearchOpen(false)} className="icon-button" aria-label="Close">
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="mihrab-modal-body">
              <div style={{ marginBottom: 24 }}>
                <span className="eyebrow" style={{ marginBottom: 12, display: 'block' }}>
                  {isAr ? 'عمليات بحث شائعة' : 'Popular Sourcing Searches'}
                </span>
                <div className="search-pills">
                  {quickLinks.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSearchSubmit(item.query)}
                      className="search-pill"
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="privacy-shield">
                <div className="privacy-shield-icon" style={{ fontSize: 24 }}>✦</div>
                <div className="privacy-shield-body">
                  <h4>{isAr ? 'هل تحتاج متطلبات خاصة أو كميات تجارية؟' : 'Need custom volume or private label?'}</h4>
                  <p>{isAr ? 'أرسل طلبك عبر استمارة التوريد المحايدة مع حماية تامة للبيانات.' : 'Submit an anonymous RFQ across 67 conditional specifications.'}</p>
                </div>
                <Link href={`/${locale}/rfq`} onClick={() => setIsSearchOpen(false)} className="btn btn-gold btn-sm">
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
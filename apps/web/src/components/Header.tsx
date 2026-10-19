'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, Menu, X, MapPin, BookOpen, Compass, Award, ShieldCheck, ArrowRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

interface HeaderProps {
  locale: string;
}

export function Header({ locale }: HeaderProps) {
  const router = useRouter();
  const isAr = locale === 'ar';
  const otherLocale = isAr ? 'en' : 'ar';
  const otherLocaleLabel = isAr ? 'English (EN)' : 'العربية (AR)';

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Handle keyboard shortcut (⌘K or Ctrl+K)
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
    router.push(`/${locale}/directory?search=${encodeURIComponent(query)}`);
  };

  const quickLinks = [
    { label: isAr ? 'خشب عود غطاس' : 'Sinking Grade Agarwood', query: 'wood', icon: '🪵' },
    { label: isAr ? 'دهن عود هندي معتق' : 'Aged Assam Oud Oil', query: 'Assam', icon: '🧪' },
    { label: isAr ? 'عود كوه كونغ كمبودي' : 'Cambodian Koh Kong', query: 'Cambodia', icon: '🇰🇭' },
    { label: isAr ? 'عود ترات تايلاندي' : 'Trat Sweet Distillation', query: 'Trat', icon: '🇹🇭' },
    { label: isAr ? 'عطور شرقية على الصندل' : 'Traditional Sandalwood Attars', query: 'Attar', icon: '🪔' },
  ];

  return (
    <>
      {/* 1. TOP ANNOUNCEMENT TICKER */}
      <div style={{
        background: 'linear-gradient(90deg, #180507 0%, #3d0f14 50%, #180507 100%)',
        color: '#dfba55',
        fontSize: '11.5px',
        fontWeight: 600,
        letterSpacing: '0.5px',
        padding: '7px 0',
        textAlign: 'center',
        borderBottom: '1px solid rgba(197, 155, 39, 0.3)',
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ color: '#68d391' }}>🌿</span>
            {isAr ? 'مرجع موثق لاتفاقية سايتس الدولية (CITES Appendix II)' : 'CITES Appendix II Verified International Reference'}
          </span>
          <span style={{ opacity: 0.5 }}>•</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
            <span>🌍</span>
            {isAr ? '249 دولة وإقليماً مسجلاً' : 'Direct Sourcing across 249 Global Terroirs'}
          </span>
          <span style={{ opacity: 0.5 }}>•</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
            <span>🔒</span>
            {isAr ? 'حماية تامة لبيانات المشترين والموردين' : 'Guaranteed Zero Contact Leakage'}
          </span>
        </div>
      </div>

      {/* 2. STICKY GLASSMORPHIC NAVBAR */}
      <header className="header-sticky">
        <div className="container nav-wrapper">
          {/* Logo & Emblem */}
          <div className="brand-emblem">
            <Link href={`/${locale}`} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                position: 'relative',
                height: '48px',
                width: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #1c1012 0%, #0d0607 100%)',
                border: '1.5px solid rgba(197, 155, 39, 0.4)',
                boxShadow: '0 4px 16px rgba(92, 22, 29, 0.35)',
                overflow: 'hidden',
                flexShrink: 0,
              }}>
                <img
                  src="/logo.png"
                  alt="OudGuide Logo"
                  style={{
                    height: '40px',
                    width: '40px',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 2px 6px rgba(197, 155, 39, 0.5))',
                  }}
                  onError={(e) => {
                    // Fallback to text initials if image is not yet cached
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.parentElement) {
                      e.currentTarget.parentElement.innerHTML = '<span style="color:#dfba55;font-weight:900;font-size:18px;font-family:serif">OG</span>';
                    }
                  }}
                />
              </div>

              <div>
                <div className="brand-title">
                  OudGuide
                  <span className="brand-subtitle">{isAr ? 'دَلِيلُ العُود' : 'Heritage & Wholesale'}</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="nav-links hidden md:flex">
            <Link href={`/${locale}/guides`}>{isAr ? 'الموسوعة' : 'Encyclopedia'}</Link>
            <Link href={`/${locale}/directory`}>{isAr ? 'دليل الموردين' : 'Directory'}</Link>
            <Link href={`/${locale}/world`}>{isAr ? 'خريطة الأقاليم' : 'Origins Map'}</Link>
            <Link href={`/${locale}/for-businesses`}>{isAr ? 'لأصحاب الأعمال' : 'For Distillers'}</Link>
            <Link href={`/${locale}/partners/opportunities`}>{isAr ? 'بوابة الشركاء' : 'Partner Portal'}</Link>
          </nav>

          {/* Action CTAs */}
          <div className="nav-cta">
            {/* Quick Search Button (⌘K) */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 rounded-lg border border-[#e6dfd1] bg-white hover:bg-[#fcfaf6] hover:border-[#c59b27] transition-all flex items-center gap-2 text-xs font-semibold text-[#5c5545]"
              title="Search directory and guides (⌘K)"
            >
              <Search className="h-4 w-4 text-[#8c6a15]" />
              <span className="hidden lg:inline">{isAr ? 'بحث' : 'Search'}</span>
              <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] bg-[#f0ede6] text-[#6a6458] rounded border border-[#ddd7ca]">
                ⌘K
              </kbd>
            </button>

            {/* Language Switcher */}
            <Link href={`/${otherLocale}`} className="lang-pill hidden sm:inline-flex">
              🌐 {otherLocaleLabel}
            </Link>

            {/* Wholesale Intake CTA */}
            <Link href={`/${locale}/rfq`} className="btn-gold hidden sm:inline-flex">
              <span>{isAr ? 'طلب توريد بالجملة' : 'Wholesale RFQ'}</span>
              <span>{isAr ? '←' : '→'}</span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg border border-[#e6dfd1] bg-white text-[#14161d]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* 3. MOBILE SLIDE-OUT DRAWER */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[#e6dfd1] bg-white/95 backdrop-blur-md px-6 py-6 space-y-4">
            <div className="space-y-3 font-semibold text-base">
              <Link
                href={`/${locale}/guides`}
                onClick={() => setIsMenuOpen(false)}
                className="block text-[#14161d] hover:text-[#5c161d]"
              >
                📚 {isAr ? 'الموسوعة المعرفية (83 دليلاً)' : 'Encyclopedia (83 Guides)'}
              </Link>
              <Link
                href={`/${locale}/directory`}
                onClick={() => setIsMenuOpen(false)}
                className="block text-[#14161d] hover:text-[#5c161d]"
              >
                🏪 {isAr ? 'دليل معامل التقطير والمزارع' : 'Directory of Distillers & Farms'}
              </Link>
              <Link
                href={`/${locale}/world`}
                onClick={() => setIsMenuOpen(false)}
                className="block text-[#14161d] hover:text-[#5c161d]"
              >
                🌍 {isAr ? 'خريطة الأقاليم العالمية (249 دولة)' : 'Global Terroirs Map (249 Countries)'}
              </Link>
              <Link
                href={`/${locale}/for-businesses`}
                onClick={() => setIsMenuOpen(false)}
                className="block text-[#14161d] hover:text-[#5c161d]"
              >
                👑 {isAr ? 'خدمات الشركات والعضوية السنوية' : 'For Distillers & Annual Membership'}
              </Link>
              <Link
                href={`/${locale}/partners/opportunities`}
                onClick={() => setIsMenuOpen(false)}
                className="block text-[#14161d] hover:text-[#5c161d]"
              >
                🤝 {isAr ? 'بوابة الموردين والموجزات المشفرة' : 'Partner Portal (Redacted Briefs)'}
              </Link>
            </div>

            <div className="pt-4 border-t border-[#e6dfd1] flex flex-col gap-3">
              <Link href={`/${otherLocale}`} className="btn-outline justify-center text-sm">
                🌐 Switch to {otherLocaleLabel}
              </Link>
              <Link href={`/${locale}/rfq`} className="btn-gold justify-center text-sm">
                <span>{isAr ? 'تقديم طلب توريد بالجملة' : 'Start Wholesale RFQ'}</span>
                <span>{isAr ? '←' : '→'}</span>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* 4. LUXURY GLOBAL SEARCH MODAL (⌘K) */}
      <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <DialogContent className="max-w-2xl bg-[#fcfaf6] border-[#e6dfd1] p-0 overflow-hidden shadow-2xl">
          <DialogHeader className="p-4 border-b border-[#e6dfd1] bg-white">
            <div className="flex items-center gap-3">
              <Search className="h-5 w-5 text-[#c59b27] shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && searchQuery.trim()) {
                    handleSearchSubmit(searchQuery);
                  }
                }}
                placeholder={isAr ? 'ابحث عن المقطرين، المناطق، الأخشاب، أو الأدلة العلمية...' : 'Search distillers, terroirs (Assam, Trat, Pursat), species, or guides...'}
                className="w-full bg-transparent text-base outline-none text-[#14161d] placeholder:text-[#9d988d]"
                autoFocus
              />
            </div>
          </DialogHeader>

          <div className="p-6 space-y-6">
            {/* Quick Category Chips */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#68645c] block mb-3">
                {isAr ? 'عمليات البحث الأكثر شيوعاً:' : 'Popular Sourcing Searches:'}
              </span>
              <div className="flex flex-wrap gap-2">
                {quickLinks.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSearchSubmit(item.query)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#e6dfd1] hover:border-[#c59b27] hover:bg-[#fffdf8] text-xs font-medium text-[#3a3834] transition-all"
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Direct Sourcing Link */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#1c1214] to-[#120a0c] text-white flex items-center justify-between border border-[#c59b27]/30">
              <div>
                <h4 className="font-serif font-bold text-sm text-[#dfba55] m-0">
                  {isAr ? 'هل تحتاج متطلبات خاصة أو كميات تجارية؟' : 'Need custom volume or private label extraction?'}
                </h4>
                <p className="text-xs text-[#dedbd2] m-0 mt-0.5">
                  {isAr ? 'أرسل طلبك عبر استمارة التوريد المحايدة مع حماية تامة للبيانات.' : 'Submit an anonymous RFQ across 67 conditional specifications.'}
                </p>
              </div>
              <Link href={`/${locale}/rfq`} onClick={() => setIsSearchOpen(false)}>
                <button className="btn-gold py-1.5 px-3.5 text-xs whitespace-nowrap">
                  {isAr ? 'طلب تسعير' : 'Start RFQ →'}
                </button>
              </Link>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

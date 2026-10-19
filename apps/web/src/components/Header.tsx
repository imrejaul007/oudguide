import Link from 'next/link';

export function Header({ locale }: { locale: string }) {
  const isAr = locale === 'ar';
  const otherLocale = isAr ? 'en' : 'ar';
  const otherLocaleLabel = isAr ? 'English (EN)' : 'العربية (AR)';

  return (
    <>
      {/* TOP ANNOUNCEMENT TICKER */}
      <div style={{
        background: 'linear-gradient(90deg, #1b0609 0%, #3d0f14 50%, #1b0609 100%)',
        color: '#dfba55',
        fontSize: '11.5px',
        fontWeight: 600,
        letterSpacing: '0.5px',
        padding: '6px 0',
        textAlign: 'center',
        borderBottom: '1px solid rgba(197, 155, 39, 0.25)',
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <span>🌿 {isAr ? 'مرجع موثق لاتفاقية سايتس الدولية (CITES Appendix II)' : 'CITES Appendix II Verified Reference'}</span>
          <span>•</span>
          <span>🌍 {isAr ? '249 دولة وإقليماً مسجلاً' : 'Direct Sourcing from 249 Global Terroirs'}</span>
          <span>•</span>
          <span>🔒 {isAr ? 'حماية تامة لبيانات المشترين والموردين' : 'Guaranteed Zero Contact Leakage'}</span>
        </div>
      </div>

      {/* STICKY GLASSMORPHIC NAVBAR */}
      <header className="header-sticky">
        <div className="container nav-wrapper">
          <div className="brand-emblem">
            <Link href={`/${locale}`} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <img
                src="/logo.png"
                alt="OudGuide Logo"
                style={{
                  height: '46px',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 2px 8px rgba(197, 155, 39, 0.35))',
                }}
              />
              <div>
                <div className="brand-title">
                  OudGuide
                  <span className="brand-subtitle">{isAr ? 'دَلِيلُ العُود' : 'Heritage & Wholesale'}</span>
                </div>
              </div>
            </Link>
          </div>

          <nav className="nav-links">
            <Link href={`/${locale}/guides`}>{isAr ? 'الموسوعة' : 'Encyclopedia'}</Link>
            <Link href={`/${locale}/directory`}>{isAr ? 'دليل الموردين' : 'Directory'}</Link>
            <Link href={`/${locale}/world`}>{isAr ? 'خريطة الأقاليم' : 'Origins Map'}</Link>
            <Link href={`/${locale}/for-businesses`}>{isAr ? 'لأصحاب الأعمال' : 'For Distillers'}</Link>
            <Link href={`/${locale}/partners/opportunities`}>{isAr ? 'بوابة الشركاء' : 'Partner Portal'}</Link>
          </nav>

          <div className="nav-cta">
            <Link href={`/${otherLocale}`} className="lang-pill">
              🌐 {otherLocaleLabel}
            </Link>
            <Link href={`/${locale}/rfq`} className="btn-gold">
              <span>{isAr ? 'طلب تور��د بالجملة' : 'Wholesale RFQ'}</span>
              <span>{isAr ? '←' : '→'}</span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

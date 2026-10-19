import Link from 'next/link';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === 'ar';
  const otherLocale = isAr ? 'en' : 'ar';
  const otherLocaleLabel = isAr ? 'English (EN)' : 'العربية (AR)';

  return (
    <html lang={locale} dir={isAr ? 'rtl' : 'ltr'}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <header className="header-sticky">
          <div className="container nav-wrapper">
            <div className="brand-emblem">
              <Link href={`/${locale}`} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #5c161d 0%, #1e0508 100%)',
                  border: '1px solid rgba(197, 155, 39, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#dfba55',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 900,
                  fontSize: '18px',
                  boxShadow: '0 4px 12px rgba(92, 22, 29, 0.25)'
                }}>
                  OG
                </div>
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
                <span>{isAr ? 'طلب توريد بالجملة' : 'Wholesale RFQ'}</span>
                <span>{isAr ? '←' : '→'}</span>
              </Link>
            </div>
          </div>
        </header>

        <main className="container" style={{ minHeight: '80vh', paddingBottom: '60px' }}>
          {children}
        </main>

        <footer className="luxury-footer">
          <div className="container">
            <div className="footer-grid">
              <div>
                <div className="brand-title" style={{ color: '#ffffff', marginBottom: '12px' }}>
                  OudGuide <span style={{ color: 'var(--color-gold)' }}>· دَلِيلُ العُود</span>
                </div>
                <p style={{ fontSize: '14px', color: '#a8a49a', lineHeight: 1.7, maxWidth: '380px', margin: '0 0 16px' }}>
                  {isAr
                    ? 'المرجع العالمي المستقل لأبحاث العود الطبيعي، دهن العود الخالص، الزيوت العطرية، وخدمة الربط التجاري المحايدة بين كبار المنتجين والمشترين الدوليين.'
                    : 'The global independent authority on natural agarwood, artisanal Dehn Al Oud, traditional attars, and neutral wholesale B2B matching for commercial perfumers.'}
                </p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span className="badge-forest">CITES Appendix II Verified</span>
                  <span className="badge-gold">Zero Contact Leakage</span>
                </div>
              </div>

              <div className="footer-col">
                <h4>{isAr ? 'الموسوعة المعرفية' : 'Encyclopedia'}</h4>
                <ul>
                  <li><Link href={`/${locale}/guides/oud-basics/what-is-agarwood`}>What is Agarwood</Link></li>
                  <li><Link href={`/${locale}/guides/wild-vs-cultivated`}>Wild vs Plantation</Link></li>
                  <li><Link href={`/${locale}/guides/copper-deg-distillation`}>Copper-Deg Alembics</Link></li>
                  <li><Link href={`/${locale}/guides/cites-regulations`}>CITES & Export Laws</Link></li>
                  <li><Link href={`/${locale}/guides`}>All 83 Researched Guides →</Link></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>{isAr ? 'مناطق التوريد' : 'Origins & Directory'}</h4>
                <ul>
                  <li><Link href={`/${locale}/world/IN`}>India (Assam Estates)</Link></li>
                  <li><Link href={`/${locale}/world/KH`}>Cambodia (Koh Kong)</Link></li>
                  <li><Link href={`/${locale}/world/TH`}>Thailand (Trat & Prachin)</Link></li>
                  <li><Link href={`/${locale}/world/ID`}>Indonesia (Kalimantan)</Link></li>
                  <li><Link href={`/${locale}/world/AE`}>United Arab Emirates</Link></li>
                  <li><Link href={`/${locale}/directory`}>Directory of Distillers →</Link></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>{isAr ? 'الحوكمة والامتثال' : 'Governance'}</h4>
                <ul>
                  <li><Link href={`/${locale}/policies`}>Neutral Matching Rules</Link></li>
                  <li><Link href={`/${locale}/for-businesses`}>Business Membership</Link></li>
                  <li><Link href={`/${locale}/privacy`}>Privacy & Data Erasure</Link></li>
                  <li><Link href={`/${locale}/corrections`}>Correction Register</Link></li>
                  <li><Link href={`/${locale}/admin/inquiries`}>Operator Dashboard</Link></li>
                </ul>
              </div>
            </div>

            <div className="footer-bottom">
              <div>
                &copy; 2026 OudGuide.com. All international rights reserved. Commercial referrals to ae.almutalib.com carry verified rel=&quot;sponsored&quot; attribution.
              </div>
              <div style={{ display: 'flex', gap: '18px' }}>
                <Link href={`/${locale}/policies`}>Terms</Link>
                <Link href={`/${locale}/privacy`}>Privacy</Link>
                <Link href={`/${locale}/corrections`}>Corrections</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

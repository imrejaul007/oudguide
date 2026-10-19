import Link from 'next/link';

export function Footer({ locale }: { locale: string }) {
  const isAr = locale === 'ar';

  return (
    <footer className="luxury-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <img
                src="/logo.png"
                alt="OudGuide Logo"
                style={{
                  height: '42px',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 2px 8px rgba(197, 155, 39, 0.35))',
                }}
              />
              <div className="brand-title" style={{ color: '#ffffff', fontSize: '22px', margin: 0 }}>
                OudGuide <span style={{ color: 'var(--color-gold)' }}>· دَلِيلُ العُود</span>
              </div>
            </div>

            <p style={{ fontSize: '14px', color: '#a8a49a', lineHeight: 1.75, maxWidth: '400px', margin: '0 0 18px' }}>
              {isAr
                ? 'المرجع العالمي المستقل لأبحاث العود الطبيعي، دهن العود الخالص، الزيوت العطرية، وخدمة الربط التجاري المحايدة بين كبار المنتجين والمشترين الدوليين.'
                : 'The global independent authority on natural agarwood, artisanal Dehn Al Oud, traditional attars, and neutral wholesale B2B matching for commercial perfumers.'}
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <span className="badge-forest">🌿 CITES Appendix II Verified</span>
              <span className="badge-gold">🔒 Zero Contact Leakage</span>
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
            <Link href={`/${locale}/policies`}>{isAr ? 'الشروط والسياسات' : 'Terms'}</Link>
            <Link href={`/${locale}/privacy`}>{isAr ? 'حماية البيانات' : 'Privacy'}</Link>
            <Link href={`/${locale}/corrections`}>{isAr ? 'سجل التصحيحات' : 'Corrections'}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

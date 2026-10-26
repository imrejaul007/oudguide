import Link from 'next/link';
import { Leaf, Lock } from 'lucide-react';

export function Footer({ locale }: { locale: string }) {
  const isAr = locale === 'ar';

  const columns = [
    {
      title: isAr ? 'الموسوعة المعرفية' : 'Encyclopedia',
      links: [
        { href: `/${locale}/guides/oud-basics/what-is-agarwood`, label: isAr ? 'ما هو العود؟' : 'What is Agarwood' },
        { href: `/${locale}/guides/sourcing/wild-and-cultivated-oud`, label: isAr ? 'البرّي والمستزرع' : 'Wild vs Plantation' },
        { href: `/${locale}/guides/production/oud-extraction-methods`, label: isAr ? 'تقطير الدِّق النحاسي' : 'Copper-Deg Alembics' },
        { href: `/${locale}/guides/trade/agarwood-documentation`, label: isAr ? 'لوائح سايتس' : 'CITES & Export Laws' },
        { href: `/${locale}/guides`, label: isAr ? 'كل الأدلة ←' : 'All Guides →' },
      ],
    },
    {
      title: isAr ? 'الدليل والأقاليم' : 'Origins & Directory',
      links: [
        { href: `/${locale}/directory`, label: isAr ? 'دليل المقطرين' : 'Distillers Directory' },
        { href: `/${locale}/directory/map`, label: isAr ? 'خريطة المنتجين' : 'Producer Map' },
        { href: `/${locale}/world`, label: isAr ? 'خريطة 249 دولة' : '249 Country Map' },
        { href: `/${locale}/world/IN`, label: isAr ? 'الهند (أسام)' : 'India (Assam Estates)' },
        { href: `/${locale}/world/KH`, label: isAr ? 'كمبوديا (كوه كونغ)' : 'Cambodia (Koh Kong)' },
      ],
    },
    {
      title: isAr ? 'للموردين والمشترين' : 'For Distillers & Buyers',
      links: [
        { href: `/${locale}/sourcing`, label: isAr ? 'مساعد التوريد' : 'Sourcing Assistant' },
        { href: `/${locale}/rfq`, label: isAr ? 'طلب توريد محايد' : 'Submit a Wholesale RFQ' },
        { href: `/${locale}/for-businesses`, label: isAr ? 'انضم كعضو سنوي' : 'Annual Membership (AED 1,200)' },
        { href: `/${locale}/partners/opportunities`, label: isAr ? 'بوابة الشركاء' : 'Partner Portal' },
        { href: `/${locale}/membership`, label: isAr ? 'مزايا العضوية' : 'Membership Benefits' },
        { href: `/${locale}/shortlist`, label: isAr ? 'الموردون المحفوظون' : 'Saved suppliers' },
      ],
    },
    {
      title: isAr ? 'السياسات' : 'Policies',
      links: [
        { href: `/${locale}/about`, label: isAr ? 'عن دليل العود' : 'About OudGuide' },
        { href: `/${locale}/editorial-policy`, label: isAr ? 'سياسة التحرير' : 'Editorial Policy' },
        { href: `/${locale}/verification`, label: isAr ? 'معنى شارات الملفات' : 'Profile Labels' },
        { href: `/${locale}/how-supplier-matching-works`, label: isAr ? 'كيف يعمل الربط' : 'How Matching Works' },
        { href: `/${locale}/accessibility`, label: isAr ? 'إمكانية الوصول' : 'Accessibility' },
      ],
    },
  ];

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer-grid">
          {/* Brand block */}
          <div className="footer-brand-block">
            <div className="footer-brand-row">
              <div className="brand-mark">
                <img src="/logo.png" alt="OudGuide" />
              </div>
              <div>
                <span className="brand-name">OudGuide</span>
                <span className="brand-name-ar">· دَلِيلُ العُود</span>
              </div>
            </div>
            <p className="footer-lead">
              {isAr
                ? 'المرجع العالمي المستقل لأبحاث العود الطبيعي، دهن العود، العطور الشرقية، وخدمة الربط التجاري المحايدة بين المنتجين والمشترين الدوليين.'
                : 'The global independent reference for natural agarwood, artisanal Dehn Al Oud, heritage attars, and neutral wholesale B2B matching for commercial perfumers.'}
            </p>
            <div className="footer-col-trust">
              <span className="badge badge-glass"><Leaf size={11} /> CITES Appendix II documented</span>
              <span className="badge badge-glass"><Lock size={11} /> {isAr ? 'بيانات الاتصال محجوبة افتراضياً' : 'Contact fields withheld by default'}</span>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title} className="footer-col">
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} OudGuide · {isAr ? 'مرجع الأبحاث المستقل' : 'Independent Research Reference'}
          </span>
          <div className="footer-meta">
            <Link href={`/${locale}/policies`}>{isAr ? 'الشروط والسياسات' : 'Policies'}</Link>
            <Link href={`/${locale}/privacy`}>{isAr ? 'الخصوصية' : 'Privacy'}</Link>
            <Link href={`/${locale}/corrections`}>{isAr ? 'تصحيحات' : 'Corrections'}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

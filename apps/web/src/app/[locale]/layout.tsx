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
  const otherLocaleLabel = isAr ? 'English' : 'العربية';

  return (
    <html lang={locale} dir={isAr ? 'rtl' : 'ltr'}>
      <body>
        <div className="container">
          <header>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h1 className="brand">
                <Link href={`/${locale}`}>OudGuide {isAr ? '(دليل العود)' : ''}</Link>
              </h1>
              <div>
                <Link href={`/${otherLocale}`} className="btn-secondary" style={{ padding: '4px 10px', fontSize: '12px' }}>
                  {otherLocaleLabel}
                </Link>
              </div>
            </div>
            <nav>
              <Link href={`/${locale}/guides`}>{isAr ? 'الموسوعة المعرفية' : 'Learn'}</Link>
              <Link href={`/${locale}/directory`}>{isAr ? 'دليل الشركات' : 'Find Businesses'}</Link>
              <Link href={`/${locale}/world`}>{isAr ? 'دول ومناطق العود' : 'Explore the World'}</Link>
              <Link href={`/${locale}/rfq`}>{isAr ? 'طلب توريد بالجملة' : 'Request Suppliers'}</Link>
              <Link href={`/${locale}/for-businesses`}>{isAr ? 'لأصحاب الأعمال' : 'For Businesses'}</Link>
              <Link href={`/${locale}/partners/opportunities`}>{isAr ? 'بوابة الموردين' : 'Supplier Portal'}</Link>
            </nav>
          </header>

          <main>{children}</main>

          <footer>
            <p>
              &copy; 2026 OudGuide.com — {isAr ? 'منصة معرفية محايدة وخدمة ربط تجاري لتوريد العود والعطور.' : 'A neutral wholesale fragrance matchmaker and knowledge portal.'}
              {' · '}
              <Link href={`/${locale}/policies`}>{isAr ? 'السياسات' : 'Policies'}</Link>
              {' · '}
              <Link href={`/${locale}/corrections`}>{isAr ? 'التصحيحات' : 'Corrections'}</Link>
              {' · '}
              <Link href={`/${locale}/privacy`}>{isAr ? 'الخصوصية' : 'Privacy'}</Link>
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}

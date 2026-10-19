import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === 'ar';

  return (
    <html lang={locale} dir={isAr ? 'rtl' : 'ltr'}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Header locale={locale} />
        <main className="container" style={{ minHeight: '80vh', paddingBottom: '60px' }}>
          {children}
        </main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}

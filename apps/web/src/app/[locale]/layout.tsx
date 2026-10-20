import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ToasterProvider } from '@/components/ui/use-toast';

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
        <link
          rel="preload"
          as="image"
          href="/ornaments/gold-pattern.svg"
          fetchPriority="low"
        />
      </head>
      <body>
        <ToasterProvider>
          <Header locale={locale} />
          <main style={{ minHeight: '80vh' }}>{children}</main>
          <Footer locale={locale} />
        </ToasterProvider>
      </body>
    </html>
  );
}
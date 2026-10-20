import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ToasterProvider } from '@/components/ui/use-toast';
import { isSupportedLocale } from '@/lib/articles';

/**
 * The locale layout.
 *
 * The `[locale]` segment is a dynamic parameter, so it matches ANY first
 * path segment. That is how the audit's malformed URL
 * `/%24/directory/al-mutalib-perfumes` rendered a directory page: the
 * segment was read as the locale "%24" and the rest matched the
 * directory route.
 *
 * The middleware used to "normalise" such a path into
 * `/en/%24/directory/al-mutalib-perfumes`, which can never match a route.
 * Neither behaviour is right. A first segment that is not one of the
 * two published locales is not a locale at all, and the page for it does
 * not exist — so it is a 404, here, once, for every page under
 * `[locale]`, rather than a rule that has to be repeated in each of
 * them.
 */
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

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

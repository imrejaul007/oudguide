import Link from 'next/link';
import { Compass, MapPin, Search, ArrowRight } from 'lucide-react';

/**
 * Global 404.
 *
 * Next.js renders the ROOT `app/not-found.tsx` for URLs that match no route
 * at all (a path under /en that isn't a page). The `[locale]/not-found.tsx`
 * only covers `notFound()` calls thrown inside the locale segment.
 *
 * The root layout does not render <html>/<body> — the [locale] layout does —
 * so this file supplies its own document shell, exactly as Next.js expects
 * for the global not-found boundary.
 *
 * Pattern ported from IndexOrbit's `src/app/not-found.tsx`: a branded
 * not-found that keeps the site chrome and offers real routes out instead of
 * a dead end.
 */
export default function RootNotFound() {
  const alternatives = [
    {
      href: '/en/directory',
      icon: Compass,
      label: 'Producer Directory',
      hint: 'Browse verified distillers and estates',
    },
    {
      href: '/en/guides',
      icon: Search,
      label: 'Encyclopedia',
      hint: 'Reviewed editorial guides',
    },
    {
      href: '/en/world',
      icon: MapPin,
      label: 'Origins Map',
      hint: '249 documented territories',
    },
  ];

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Page Not Found — OudGuide</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <div className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
          <div className="container container-narrow text-center">
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(5rem, 16vw, 9rem)',
                fontWeight: 300,
                lineHeight: 0.9,
                letterSpacing: '-0.04em',
                color: 'var(--green-100)',
                marginBottom: -12,
              }}
            >
              404
            </div>

            <div className="rule-short" style={{ margin: '0 auto 24px' }} />

            <h1 style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.3rem)', marginBottom: 14 }}>
              You&rsquo;ve wandered off the map
            </h1>
            <p className="lede" style={{ margin: '0 auto 40px', maxWidth: '48ch' }}>
              The page you&rsquo;re looking for has moved, been retired, or never
              existed. One of these routes will get you back on track.
            </p>

            <div className="grid-3" style={{ textAlign: 'start' }}>
              {alternatives.map((alt) => (
                <Link key={alt.href} href={alt.href} className="card" style={{ padding: 24 }}>
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: '50%',
                      background: 'var(--green-50)',
                      border: '1px solid var(--green-100)',
                      color: 'var(--green-700)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 14,
                    }}
                  >
                    <alt.icon size={17} />
                  </div>
                  <h2 style={{ fontSize: '1.05rem', marginBottom: 4 }}>{alt.label}</h2>
                  <p className="meta" style={{ textTransform: 'none', letterSpacing: '0.02em' }}>
                    {alt.hint}
                  </p>
                </Link>
              ))}
            </div>

            <div className="cluster" style={{ justifyContent: 'center', marginTop: 40 }}>
              <Link href="/en" className="btn btn-primary">
                ← Back to home
              </Link>
              <Link href="/en/sourcing" className="btn btn-outline">
                Ask the sourcing assistant
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

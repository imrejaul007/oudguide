import Link from 'next/link';
import { Compass, MapPin, Search, ArrowRight } from 'lucide-react';

/**
 * Branded 404.
 *
 * Pattern ported from IndexOrbit's `src/app/not-found.tsx`, which replaces
 * Next.js's default unbranded error page with a directory-specific one that
 * keeps the header/footer chrome and offers search alternatives rather than
 * a dead end.
 *
 * NOTE: `params` is OPTIONAL here. Next.js does not pass the route
 * parameters to a not-found boundary — it renders it outside the matched
 * route. Destructuring them unconditionally threw
 * "Cannot destructure property 'locale' of '(intermediate value)'", which
 * turned every real error into an opaque 500. The locale therefore falls
 * back to the default.
 */
export default async function NotFound({
  params,
}: {
  params?: Promise<{ locale?: string }>;
}) {
  const resolved = await params?.catch(() => undefined);
  const locale = resolved?.locale ?? 'en';
  const isAr = locale === 'ar';

  const alternatives = [
    {
      href: `/${locale}/directory`,
      icon: Compass,
      label: isAr ? 'دليل المنتجين' : 'Producer Directory',
      hint: isAr ? 'تصفح المقطرين والمزارع المعتمدة' : 'Browse verified distillers and estates',
    },
    {
      href: `/${locale}/guides`,
      icon: Search,
      label: isAr ? 'الموسوعة المعرفية' : 'Encyclopedia',
      hint: isAr ? '83 دليلاً علمياً موثقاً' : '83 documented scientific guides',
    },
    {
      href: `/${locale}/world`,
      icon: MapPin,
      label: isAr ? 'خريطة الأقاليم' : 'Origins Map',
      hint: isAr ? '249 دولة وإقليم موثق' : '249 documented territories',
    },
  ];

  return (
    <div className="section" style={{ minHeight: '72vh' }}>
      <div className="container container-narrow text-center">
        {/* 404 numeral */}
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
          {isAr ? 'لقد خرجت عن المسار' : 'You’ve wandered off the map'}
        </h1>
        <p className="lede" style={{ margin: '0 auto 40px', maxWidth: '48ch' }}>
          {isAr
            ? 'الصفحة التي تبحث عنها غير موجودة أو تم نقلها. جرّب أحد المسارات أدناه.'
            : 'The page you’re looking for has moved, been retired, or never existed. One of these routes will get you back on track.'}
        </p>

        {/* Alternatives */}
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
          <Link href={`/${locale}`} className="btn btn-primary">
            {isAr ? '← العودة إلى الرئيسية' : '← Back to home'}
          </Link>
          <Link href={`/${locale}/sourcing`} className="btn btn-outline">
            {isAr ? 'اسأل مساعد التوريد' : 'Ask the sourcing assistant'}
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}

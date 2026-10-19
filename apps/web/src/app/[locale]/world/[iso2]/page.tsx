import { seed, domain } from '@/lib/data';
import Link from 'next/link';
import { notFound } from 'next/navigation';




export default async function CountryDetailPage({
  params,
}: {
  params: Promise<{ locale: string; iso2: string }>;
}) {
  const { locale, iso2 } = await params;
  const isAr = locale === 'ar';
  const code = iso2.toUpperCase();

  const country = seed.countries.find((c: any) => c.iso2.toUpperCase() === code);
  if (!country) {
    notFound();
  }

  // Find businesses associated with this country
  const businesses = seed.businesses.filter(
    (b: any) => b.country_id.toUpperCase() === code
  );

  // Find routes associated with this country
  const routes = seed.routes.filter(
    (r: any) =>
      r.path.includes(`/${country.proposed_slug}/`) ||
      r.title_brief.toLowerCase().includes(country.english_seed.toLowerCase())
  ).slice(0, 8);

  return (
    <div>
      <div style={{ marginBottom: '16px', fontSize: '13px', color: 'var(--color-muted)' }}>
        <Link href={`/${locale}`}>Home</Link>
        {' > '}
        <Link href={`/${locale}/world`}>{isAr ? 'الدول والمناطق' : 'World Explorer'}</Link>
        {' > '}
        <span>{isAr ? country.arabic_seed : country.english_seed}</span>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
        <span className="badge badge-unlocked">ISO: {country.iso2} / {country.iso3}</span>
        <span className="badge badge-member">{country.role_status}</span>
        <span className="badge badge-locked">{country.public_readiness}</span>
      </div>

      <h2 style={{ fontSize: '30px', margin: '6px 0 12px 0', color: 'var(--color-primary)' }}>
        {isAr ? country.arabic_seed : country.english_seed}
      </h2>

      <div className="card">
        <h3>{isAr ? 'النطاق الجغرافي والتجاري' : 'Market Profile & Sourcing Scope'}</h3>
        <p>
          {isAr
            ? `سجل توثيقي معتمد لدولة ${country.arabic_seed} ضمن شبكة التوريد والبحث الخاصة بدليل العود.`
            : `Documented territory profile for ${country.english_seed} in the OudGuide international fragrance registry.`}
        </p>
        <p style={{ fontSize: '13px', color: 'var(--color-muted)', margin: 0 }}>
          <strong>Reference standard:</strong> {country.source_version}
        </p>
      </div>

      <div className="section-box">
        <h3>{isAr ? 'الشركات والموردون الموثقون في هذه الدولة' : `Documented Businesses in ${country.english_seed}`}</h3>
        {businesses.length > 0 ? (
          <div className="grid-2" style={{ marginTop: '12px' }}>
            {businesses.map((b: any) => (
              <div key={b.id} className="card" style={{ margin: '4px 0' }}>
                <h4 style={{ margin: '0 0 6px 0' }}>
                  <Link href={`/${locale}/directory/${b.slug}`}>{b.name}</Link>
                </h4>
                <p style={{ margin: '0 0 8px 0', fontSize: '13px', color: 'var(--color-muted)' }}>
                  📍 {b.city} · <strong>{b.category}</strong>
                </p>
                <Link href={`/${locale}/directory/${b.slug}`} className="btn-secondary" style={{ padding: '4px 10px', fontSize: '12px' }}>
                  {isAr ? 'عرض الملف' : 'View Profile'}
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ fontSize: '14px', color: 'var(--color-muted)', margin: '8px 0 0' }}>
            {isAr
              ? 'لا توجد شركات مدرجة بشكل مستقل في هذا البلد حتى الآن. يمكنك تقديم طلب توريد وسيقوم فريقنا بربطك بموردين دوليين يشحنون إلى هذه الوجهة.'
              : `No independent supplier profiles are currently registered for ${country.english_seed}. You can submit a wholesale requirement and OudGuide will connect you with qualified international distillers shipping to this destination.`}
          </p>
        )}
      </div>

      {routes.length > 0 && (
        <div className="card" style={{ marginTop: '24px' }}>
          <h3>{isAr ? 'الأدلة والتقارير المرتبطة بهذا السوق' : `Related Guides & Market Briefs`}</h3>
          <ul style={{ paddingInlineStart: '20px', margin: '8px 0' }}>
            {routes.map((r: any) => (
              <li key={r.route_id} style={{ marginBottom: '6px' }}>
                <Link href={r.path} style={{ fontWeight: 600 }}>
                  {r.title_brief}
                </Link>
                <span style={{ fontSize: '12px', color: 'var(--color-muted)', marginInlineStart: '8px' }}>
                  [{r.family}]
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="hero" style={{ marginTop: '30px' }}>
        <h3>{isAr ? `طلب توريد مخصص لوجهة ${country.arabic_seed}` : `Request Wholesale Supply for ${country.english_seed}`}</h3>
        <p>
          {isAr
            ? 'حدد متطلباتك وسنربطك بموردين مؤهلين يشحنون بانتظام إلى هذه الدولة مع كافة وثائق سايتس والتخليص الجمركي.'
            : `Specify your volume requirement, and OudGuide will match you with verified suppliers offering legal CITES documentation and reliable shipping to ${country.english_seed}.`}
        </p>
        <p style={{ marginTop: '12px' }}>
          <Link href={`/${locale}/rfq?country=${encodeURIComponent(country.english_seed)}`} className="btn-primary">
            {isAr ? 'تقديم طلب توريد لهذه الوجهة ←' : `Submit RFQ for ${country.english_seed} →`}
          </Link>
        </p>
      </div>
    </div>
  );
}

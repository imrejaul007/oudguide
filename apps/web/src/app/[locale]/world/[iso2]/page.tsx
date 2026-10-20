import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { seed } from '@/lib/data';
import { buildMetadata } from '@/lib/metadata';
import { editorialCopy, pick } from '@/lib/copy/policy';

/**
 * Per-territory metadata.
 *
 * The territory page was reachable but said nothing: it inherited the
 * site-wide title and description, so 249 pages looked identical to a
 * search engine. The title comes from the registry's own country name and
 * the description states what the page actually covers.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; iso2: string }>;
}): Promise<Metadata> {
  const { locale, iso2 } = await params;
  const country = (seed.countries as any[]).find(
    (c: any) => c.iso2.toUpperCase() === iso2.toUpperCase()
  );

  if (!country) {
    return { title: 'Territory not found · OudGuide' };
  }

  const name = locale === 'ar' ? country.arabic_seed : country.english_seed;
  const title = `${name} — Oud and Fragrance Territory · OudGuide`;
  const description =
    locale === 'ar'
      ? `صفحة الإقليم لـ ${country.arabic_seed}: تغطية العود والعطور، ومنشأ المنتجين، وخيارات التوريد للمشترين الذين يشحنون إلى ${country.arabic_seed}.`
      : `Territory reference for ${country.english_seed}: agarwood and fragrance coverage, producer origin, and wholesale sourcing options for buyers shipping to ${country.english_seed}.`;

  return buildMetadata({
    path: `/${locale}/world/${country.iso2.toUpperCase()}`,
    title,
    description,
    locale,
    alternateLocalePath: `/${locale === 'ar' ? 'en' : 'ar'}/world/${country.iso2.toUpperCase()}`,
  });
}

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

  // The businesses physically located in this country. Development
  // fixtures are excluded: a fixture is not a producer in a country.
  const businesses = (seed.businesses as any[]).filter(
    (b: any) => !b.demo && b.country_id.toUpperCase() === code
  );

  // Find routes associated with this country
  const routes = seed.routes.filter(
    (r: any) =>
      r.path.includes(`/${country.proposed_slug}/`) ||
      r.title_brief.toLowerCase().includes(country.english_seed.toLowerCase())
  ).slice(0, 8);

  return (
    <div style={{ maxWidth: '960px', margin: '0 auto', padding: '10px 0 60px' }}>
      {/* BREADCRUMB */}
      <nav style={{ margin: '20px 0 16px', fontSize: '13.5px', color: 'var(--color-text-muted)' }}>
        <Link href={`/${locale}`}>Home</Link>
        {' > '}
        <Link href={`/${locale}/world`}>{isAr ? 'خريطة الأقاليم' : 'World Terroirs'}</Link>
        {' > '}
        <span>{isAr ? country.arabic_seed : country.english_seed}</span>
      </nav>

      {/* LUXURY COUNTRY HERO */}
      <section className="masthead" style={{ marginBottom: 36 }}>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
          <span className="badge-forest">ISO: {country.iso2} / {country.iso3}</span>
          <span className="badge-gold">{country.role_status}</span>
          <span className="badge-locked">{country.public_readiness}</span>
        </div>

        <h1>
          {isAr ? country.arabic_seed : country.english_seed}
        </h1>
        <p className="hero-lead" style={{ marginBottom: 24 }}>
          {isAr
            ? `إقليم مسجَّل في دليل العود ضمن 249 دولة وإقليماً. حالة التقييم المعروضة أدناه هي ما يحمله السجل لهذا الإقليم.`
            : `A registered territory in the OudGuide reference, covering ${country.english_seed}. The assessment status below is what the register actually records for it.`}
        </p>

        <div className="masthead-actions">
          <Link href={`/${locale}/rfq?country=${encodeURIComponent(country.english_seed)}`} className="btn btn-primary">
            {isAr ? `طلب توريد لهذه الوجهة (${country.arabic_seed})` : `Submit Wholesale RFQ for ${country.english_seed}`}
          </Link>
        </div>
      </section>

      {/* METADATA PROFILE */}
      <div className="form-card" style={{ marginBottom: '32px' }}>
        <h3 className="card-title font-display" style={{ fontSize: '20px', borderBottom: '1px solid var(--color-border)', paddingBottom: '10px', marginBottom: '14px' }}>
          {isAr ? 'المواصفات الجغرافية والأنظمة القياسية' : 'Standard Territorial & Regulatory Specifications'}
        </h3>
        <div className="grid-3" style={{ fontSize: '14px' }}>
          <div>
            <strong>ISO 3166-1 Alpha-2:</strong> <code>{country.iso2}</code>
          </div>
          <div>
            <strong>ISO 3166-1 Alpha-3:</strong> <code>{country.iso3}</code>
          </div>
          <div>
            <strong>Standard Source:</strong> {country.source_version}
          </div>
        </div>
      </div>

      {/* DOCUMENTED DISTILLERS & PRODUCERS */}
      <div className="luxury-card" style={{ marginBottom: '36px' }}>
        <h3 className="card-title font-display" style={{ fontSize: '22px', borderBottom: '1px solid var(--color-border)', paddingBottom: '12px', marginBottom: '18px' }}>
          🏛️ {isAr ? `المنتجون والمقطرون المسجلون في ${country.arabic_seed}` : `Documented Producers & Distillers in ${country.english_seed}`}
        </h3>

        {businesses.length > 0 ? (
          <div className="grid-2">
            {businesses.map((b: any) => (
              <div key={b.id} className="luxury-card" style={{ padding: '20px', background: '#fdfcf9' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <h4 style={{ margin: 0, fontSize: '17px' }}>
                    <Link href={`/${locale}/directory/${b.slug}`}>{b.name}</Link>
                  </h4>
                  {b.contact_unlocked ? <span className="badge-gold">Member</span> : <span className="badge-locked">Protected</span>}
                </div>
                <p style={{ margin: '0 0 10px', fontSize: '13px', color: 'var(--color-text-muted)' }}>
                  📍 {b.city} · <strong>{b.category}</strong>
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '12px', color: '#666' }}>MOQ: {b.minimum_order_quantity || 'Flexible'}</span>
                  <Link href={`/${locale}/directory/${b.slug}`} className="btn-outline" style={{ padding: '4px 10px', fontSize: '12px' }}>
                    {isAr ? 'عرض الملف' : 'View Profile'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="privacy-shield" style={{ margin: 0 }}>
            <div className="privacy-shield-icon">ℹ️</div>
            <div className="privacy-shield-text">
              {isAr
                ? `لا توجد شركات مدرجة بشكل مستقل في ${country.arabic_seed} حالياً. يمكنك تقديم طلب توريد وسيقوم فريقنا بربطك بموردين دوليين معتمدين يشحنون بانتظام إلى هذه الوجهة مع شهادات سايتس والتخليص الجمركي.`
                : `${pick(editorialCopy.coverageGap, locale)} You can submit an RFQ requirement and OudGuide will introduce you to suppliers that have agreed to work with this destination — a supplier is introduced to a destination only where it has documented one.`}
            </div>
          </div>
        )}
      </div>

      {/* RELATED GUIDES */}
      {routes.length > 0 && (
        <div className="luxury-card" style={{ marginBottom: '40px' }}>
          <h3 className="card-title font-display" style={{ fontSize: '20px', borderBottom: '1px solid var(--color-border)', paddingBottom: '10px', marginBottom: '14px' }}>
            📚 {isAr ? 'الأدلة والتقارير المرتبطة بهذا السوق' : `Related Market Briefs & Research Guides`}
          </h3>
          <ul style={{ paddingInlineStart: '20px', margin: 0, fontSize: '14.5px' }}>
            {routes.map((r: any) => (
              <li key={r.route_id} style={{ marginBottom: '8px' }}>
                <Link href={r.path} style={{ fontWeight: 600, color: 'var(--color-primary)' }}>
                  {r.title_brief}
                </Link>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginInlineStart: '8px' }}>
                  [{r.family}]
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* CTA SECTION */}
      <div className="luxury-hero" style={{ padding: '36px', textAlign: 'center' }}>
        <h3 className="font-display" style={{ fontSize: '24px', color: '#fff', margin: '0 0 10px' }}>
          {isAr
            ? `طلب توريد إلى ${country.arabic_seed}`
            : `Request a supplier introduction for ${country.english_seed}`}
        </h3>
        <p style={{ color: '#d0ccc3', fontSize: '15px', maxWidth: '640px', margin: '0 auto 18px' }}>
          {isAr
              ? 'حدد متطلباتك. يتولى دليل العود مطابقتك مع موردين، ولا يقدّم طلبك إلا لمن تعتمدهم بالاسم. وتُراجع متطلبات التوثيق لكل منتج ومسار ووجهة على حدة.'
              : 'Specify your requirement. OudGuide matches you with suppliers, and nothing is sent to one unless you approve them by name. Documentation requirements are assessed per product, route and destination.'}
        </p>
        <Link href={`/${locale}/rfq?country=${encodeURIComponent(country.english_seed)}`} className="btn-gold" style={{ padding: '12px 28px', fontSize: '15px' }}>
          <span>{isAr ? 'تقديم طلب توريد لهذه الوجهة' : `Submit RFQ for ${country.english_seed}`}</span>
          <span>{isAr ? '←' : '→'}</span>
        </Link>
      </div>
    </div>
  );
}

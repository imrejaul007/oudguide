import { seed, domain } from '@/lib/data';
import Link from 'next/link';
import { notFound } from 'next/navigation';




export default async function GuideArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string[] }>;
}) {
  const { locale, slug } = await params;
  const isAr = locale === 'ar';

  const fullSlug = slug.join('/');
  const expectedPath = `/${locale}/guides/${fullSlug}/`;
  const altPath = `/${locale}/guides/${fullSlug}`;
  const enPath = `/en/guides/${fullSlug}/`;
  const enAlt = `/en/guides/${fullSlug}`;

  // Find guide route in seed
  const guide = seed.routes.find(
    (r: any) =>
      r.path === expectedPath ||
      r.path === altPath ||
      r.path === enPath ||
      r.path === enAlt ||
      r.path.endsWith(`/${fullSlug}/`)
  );

  if (!guide) {
    notFound();
  }

  // Resolve related internal links for this path
  const relatedLinks = seed.links
    .filter((l: any) => l.source_path === guide.path || l.source_path === enPath)
    .slice(0, 6);

  return (
    <div>
      <div style={{ marginBottom: '16px', fontSize: '13px', color: 'var(--color-muted)' }}>
        <Link href={`/${locale}`}>Home</Link>
        {' > '}
        <Link href={`/${locale}/guides`}>{isAr ? 'الموسوعة' : 'Guides'}</Link>
        {' > '}
        <span>{guide.title_brief}</span>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
        <span className="badge badge-unlocked">{guide.family}</span>
        <span className="badge badge-locked">{guide.phase}</span>
        <span className="badge badge-member">
          {guide.index_state.includes('approved') ? 'Approved' : 'Candidate Brief'}
        </span>
      </div>

      <h2 style={{ fontSize: '30px', margin: '6px 0 12px 0', color: 'var(--color-primary)' }}>
        {guide.h1_brief || guide.title_brief}
      </h2>

      <p style={{ fontSize: '16px', fontStyle: 'italic', color: 'var(--color-muted)', margin: '0 0 24px 0' }}>
        {guide.primary_intent}
      </p>

      <div className="card">
        <h3>{isAr ? 'نطاق الدليل والمعلومات التوثيقية' : 'Executive Summary & Material Scope'}</h3>
        <p>
          This guide synthesizes independent research across documented Aquilaria and Gyrinops botanical taxa, traditional copper-deg distillation systems, and commercial trade nomenclature.
        </p>
        <p>
          <strong>Publication gate:</strong> {guide.publication_gate}.
        </p>
      </div>

      <div className="section-box">
        <h3>{isAr ? 'المعايير التوثيقية والفحص المخبري' : 'Quality Indicators & Botanical Evidence'}</h3>
        <p>
          Authentic agarwood resin forms as an immune response to fungal infection (primarily <em>Phaeoacremonium parasiticum</em>) within the heartwood. Quality grading relies on:
        </p>
        <ul style={{ paddingInlineStart: '20px', margin: '8px 0' }}>
          <li><strong>Resin saturation & density:</strong> Submergence in water (&quot;underwater grade&quot; / sinking wood).</li>
          <li><strong>Distillation method:</strong> Low-temperature steam vs traditional hydro-distillation in copper or stainless steel alembics.</li>
          <li><strong>GC-MS profile:</strong> Presence of characteristic sesquiterpenes (agarospirol, jinkoh-eremol, valencene).</li>
          <li><strong>CITES compliance:</strong> Appendix II export certification verifying non-detriment findings.</li>
        </ul>
      </div>

      {/* CONTEXTUAL RETAIL REFERRAL CALLOUT */}
      <div className="section-box" style={{ background: '#fdf8f0', borderColor: '#b88a2c' }}>
        <h4 style={{ margin: '0 0 6px 0', color: '#b88a2c' }}>
          🛍️ {isAr ? 'عينة تجزئة موثقة من هذا الصنف' : 'Looking to sample authentic retail batches?'}
        </h4>
        <p style={{ margin: '0 0 10px 0', fontSize: '14px' }}>
          {isAr
            ? 'للراغبين في اقتناء عينات شخصية أو تولة مفردة مفحوصة، استعرض تشكيلة التجزئة المعتمدة لدى متجر المطلب التجاري في دبي.'
            : 'For individual bottles and personal sampling of artisanal Hindi, Trat, and Cambodian distillations, explore authorized retail collections at our merchant partner, Al Mutalib Perfumes.'}
        </p>
        <a
          href="https://ae.almutalib.com"
          target="_blank"
          rel="sponsored noopener"
          className="btn-secondary"
          style={{ fontSize: '13px', padding: '6px 14px' }}
        >
          {isAr ? 'استعراض منتجات التجزئة في متجر المطلب (دبي) ↗' : 'Explore Retail Selections at ae.almutalib.com ↗'}
        </a>
      </div>

      {/* RELATED INTERNAL LINKS */}
      {relatedLinks.length > 0 && (
        <div className="card" style={{ marginTop: '24px' }}>
          <h3>{isAr ? 'مقالات وأدلة ذات صلة' : 'Related Researched Guides & Directories'}</h3>
          <ul style={{ paddingInlineStart: '20px', margin: '8px 0' }}>
            {relatedLinks.map((link: any, idx: number) => (
              <li key={idx} style={{ marginBottom: '6px' }}>
                <Link href={link.target_path} style={{ fontWeight: 600 }}>
                  {link.target_path.replace(/^\/(en|ar)\//, '').replace(/\/$/, '').replace(/-/g, ' ')}
                </Link>
                <span style={{ fontSize: '12px', color: 'var(--color-muted)', marginInlineStart: '8px' }}>
                  [{link.intent}]
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* WHOLESALE CTA */}
      <div className="hero" style={{ marginTop: '32px' }}>
        <h3>{isAr ? 'هل تحتاج كميات تجارية أو تصنيع خاص؟' : 'Need commercial volume or private label production?'}</h3>
        <p>
          {isAr
            ? 'يقوم فريق دليل العود بربطك مع المنتجين والمقطرين المعتمدين في الإمارات، الهند، تايلاند، وكمبوديا.'
            : 'OudGuide provides neutral wholesale matching to verified distillers and raw material plantations. You approve which suppliers receive your details.'}
        </p>
        <p style={{ marginTop: '12px' }}>
          <Link href={`/${locale}/rfq`} className="btn-primary">
            {isAr ? 'تقديم طلب توريد بالجملة ←' : 'Submit a Wholesale Requirement →'}
          </Link>
        </p>
      </div>
    </div>
  );
}

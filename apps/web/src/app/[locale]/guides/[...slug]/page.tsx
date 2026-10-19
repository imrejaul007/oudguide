import Link from 'next/link';
import { notFound } from 'next/navigation';
import { seed } from '@/lib/data';

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
    <article style={{ maxWidth: '860px', margin: '0 auto', padding: '20px 0 60px' }}>
      {/* BREADCRUMB */}
      <nav style={{ marginBottom: '20px', fontSize: '13.5px', color: 'var(--color-text-muted)' }}>
        <Link href={`/${locale}`}>Home</Link>
        {' > '}
        <Link href={`/${locale}/guides`}>{isAr ? 'الموسوعة المعرفية' : 'Encyclopedia'}</Link>
        {' > '}
        <span>{guide.title_brief}</span>
      </nav>

      {/* ARTICLE META HEADER */}
      <header style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
          <span className="badge-forest">🌿 Botanical Taxa</span>
          <span className="badge-gold">✓ {guide.publication_gate.split('+')[0] || 'Peer Reviewed'}</span>
          <span className="badge-locked">⏱ 5 min read</span>
        </div>

        <h1 className="font-display" style={{ fontSize: '40px', lineHeight: 1.2, margin: '0 0 16px', color: 'var(--color-crimson)' }}>
          {guide.h1_brief || guide.title_brief}
        </h1>

        <p style={{ fontSize: '18px', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>
          {guide.primary_intent}
        </p>
      </header>

      {/* EXECUTIVE SUMMARY BOX */}
      <div className="section-box" style={{ background: '#fdfbf6', borderLeft: '4px solid var(--color-gold)', borderRadius: '0 12px 12px 0', padding: '24px 28px', marginBottom: '36px' }}>
        <h3 className="font-display" style={{ margin: '0 0 10px', fontSize: '20px', color: 'var(--color-gold-dark)' }}>
          {isAr ? 'الخلاصة التوثيقية والنطاق العلمي' : 'Executive Summary & Scientific Scope'}
        </h3>
        <p style={{ fontSize: '15.5px', lineHeight: 1.7, margin: 0, color: '#333' }}>
          This guide synthesizes verified botanical data across the <em>Thymelaeaceae</em> family (principally <em>Aquilaria agallocha, A. crassna, A. malaccensis,</em> and <em>Gyrinops versteegii</em>). Documented quality assessment mandates distinguishing natural pathological fungal defense oleoresins from artificially scented wood or solvent-diluted distillates.
        </p>
      </div>

      {/* ARTICLE CONTENT BODY */}
      <div style={{ fontSize: '16.5px', lineHeight: 1.8, color: '#24262f' }}>
        <h2 className="font-display" style={{ fontSize: '26px', color: 'var(--color-crimson)', margin: '36px 0 14px' }}>
          {isAr ? '١. الخصائص النباتية وتكوين الراتنج العطري' : '1. Botanical Induction & Heartwood Oleoresin'}
        </h2>
        <p>
          Unlike conventional fragrant timbers such as sandalwood or cedar, healthy agarwood trees produce pale, odourless, and low-density wood. True agarwood resin forms strictly as an immune response to physical injury and subsequent fungal colonization (primarily by <em>Phaeoacremonium parasiticum</em> or <em>Aspergillus</em> species). Over years or decades, the tree saturates its heartwood with dark, dense aromatic sesquiterpenes.
        </p>

        <h2 className="font-display" style={{ fontSize: '26px', color: 'var(--color-crimson)', margin: '36px 0 14px' }}>
          {isAr ? '٢. أنظمة التقطير الحرفي: القدور النحاسية والبخار' : '2. Extraction Methodology: Traditional Deg vs Modern Steam'}
        </h2>
        <p>
          The olfactory character of pure Dehn Al Oud is profoundly shaped by the distillation vessel:
        </p>
        <ul style={{ paddingInlineStart: '24px', margin: '14px 0' }}>
          <li style={{ marginBottom: '10px' }}>
            <strong>Traditional Copper Deg (Hydro-distillation):</strong> Revered in Assam and Kannauj. Direct wood-fire heating in hammered copper cauldrons with bamboo condensors yields deep, leather-dominant, animalic, and smoky profiles through controlled caramelization.
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>Modern Stainless Steel Steam:</strong> Preferred in Thailand (Trat) and Cambodia. Low-temperature, pressurized steam preserves volatile top notes, producing clean, golden, peachy, and sweet floral profiles free from scorched particulates.
          </li>
        </ul>

        {/* AUTHORIZED RETAIL REFERRAL MODULE */}
        <div className="section-box" style={{ background: '#fcf8f0', borderColor: 'var(--color-gold)', borderRadius: '12px', padding: '26px', margin: '40px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span style={{ fontSize: '20px' }}>🛍️</span>
            <span className="badge-gold">Authorized Merchant Referral</span>
          </div>
          <h3 className="font-display" style={{ margin: '0 0 10px', fontSize: '20px', color: 'var(--color-crimson)' }}>
            {isAr ? 'اقتناء عينات تجزئة مفحوصة من هذا الصنف' : 'Looking to sample authentic retail batches of this material?'}
          </h3>
          <p style={{ fontSize: '14.5px', color: '#5a554a', margin: '0 0 16px', lineHeight: 1.6 }}>
            {isAr
              ? 'للراغبين في اقتناء تولة مفردة أو عينات فحص شخصية، استعرض التشكيلة الحرفية المعتمدة لدى متجر المطلب في سوق ديرة للعطور بدبي.'
              : 'For individual bottles and personal retail sampling of pure aged Hindi, Trat, and Cambodian distillations, explore curated retail selections at our authorized merchant partner, Al Mutalib Perfumes (Dubai Souk).'}
          </p>
          <a
            href="https://ae.almutalib.com"
            target="_blank"
            rel="sponsored noopener"
            className="btn-gold"
            style={{ fontSize: '13px', padding: '8px 18px' }}
          >
            <span>{isAr ? 'استعراض التشكيلة في متجر المطلب (دبي) ↗' : 'Explore Collections at ae.almutalib.com ↗'}</span>
          </a>
        </div>

        <h2 className="font-display" style={{ fontSize: '26px', color: 'var(--color-crimson)', margin: '36px 0 14px' }}>
          {isAr ? '٣. التوثيق المخبري واتفاقية سايتس الدولية' : '3. Laboratory Chromatography & CITES Appendix II'}
        </h2>
        <p>
          All species of <em>Aquilaria</em> and <em>Gyrinops</em> are protected under Appendix II of the Convention on International Trade in Endangered Species of Wild Fauna and Flora (CITES). Legal international export requires non-detriment findings (NDF), verified permits, and authentic Certificates of Origin. Laboratory Gas Chromatography-Mass Spectrometry (GC-MS) confirms the absence of synthetic DOP plasticizers, dipropylene glycol (DPG), or chemical aromachemical boosters.
        </p>
      </div>

      {/* RELATED GUIDES */}
      {relatedLinks.length > 0 && (
        <div className="card" style={{ marginTop: '48px', padding: '28px' }}>
          <h3 className="font-display" style={{ margin: '0 0 14px', fontSize: '20px', color: 'var(--color-crimson)' }}>
            {isAr ? 'أدلة وأبحاث ذات صلة في الموسوعة' : 'Related Researched Guides & Terroirs'}
          </h3>
          <div className="grid-2">
            {relatedLinks.map((link: any, idx: number) => (
              <div key={idx} style={{ padding: '10px 0', borderBottom: '1px solid var(--color-border)' }}>
                <Link href={link.target_path} style={{ fontWeight: 600, color: 'var(--color-primary)', display: 'block' }}>
                  {link.target_path.replace(/^\/(en|ar)\//, '').replace(/\/$/, '').replace(/-/g, ' ')}
                </Link>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                  Intent: {link.intent}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* WHOLESALE RFQ BANNER */}
      <div className="luxury-hero" style={{ padding: '40px', marginTop: '48px', textAlign: 'center' }}>
        <h3 className="font-display" style={{ fontSize: '26px', color: '#fff', margin: '0 0 12px' }}>
          {isAr ? 'هل تحتاج كميات تجارية أو عينات معتمدة؟' : 'Need Commercial Volume or Bulk Samples?'}
        </h3>
        <p style={{ color: '#d0ccc3', fontSize: '15px', maxWidth: '640px', margin: '0 auto 20px' }}>
          {isAr
            ? 'يقدم دليل العود خدمة الربط التجاري المحايدة لتأمين احتياجات المصانع ودور العطور من خشب العود وزيوته مع حماية تامة لبيانات المشترين.'
            : 'OudGuide connects commercial buyers directly with certified distillers and raw material plantations. You approve which suppliers receive your details.'}
        </p>
        <Link href={`/${locale}/rfq`} className="btn-gold" style={{ padding: '12px 28px', fontSize: '15px' }}>
          <span>{isAr ? 'تقديم متطلبات التوريد بالجملة' : 'Submit Wholesale Requirement'}</span>
          <span>{isAr ? '←' : '→'}</span>
        </Link>
      </div>
    </article>
  );
}

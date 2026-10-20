import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { seed } from '@/lib/data';
import { findRouteRecord, pageDescription, pageTitle } from '@/lib/route-coverage';
import { ArrowRight, ExternalLink } from 'lucide-react';

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.oudguide.com'
).replace(/\/$/, '');

/**
 * Per-page metadata.
 *
 * Every guide previously shared one site-wide title and description, which
 * made 83 pages indistinguishable to a search engine. The manifest carries
 * an `h1_brief` for each guide (21-56 characters) and a
 * `meta_description_brief` that is an instruction to a writer rather than a
 * finished description — so the description is composed from the record's
 * own intent instead of publishing the instruction verbatim.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string[] }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const fullSlug = slug.join('/');
  const guide = findRouteRecord(`/${locale}/guides/${fullSlug}/`);

  if (!guide) {
    return { title: 'Guide not found · OudGuide' };
  }

  const title = pageTitle(guide);
  const description = pageDescription(guide);
  const canonical = `${SITE_URL}/${locale}/guides/${fullSlug}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: `${SITE_URL}/en/guides/${fullSlug}`,
        ar: `${SITE_URL}/ar/guides/${fullSlug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'OudGuide',
      type: 'article',
      locale: locale === 'ar' ? 'ar_AE' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

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

  const relatedLinks = seed.links
    .filter((l: any) => l.source_path === guide.path || l.source_path === enPath)
    .slice(0, 6);

  return (
    <article className="container container-narrow" style={{ paddingTop: 40, paddingBottom: 60 }}>
      {/* BREADCRUMB */}
      <nav className="meta" style={{ marginBottom: 32, textTransform: 'none', letterSpacing: '0.02em' }}>
        <Link href={`/${locale}`} style={{ color: 'var(--ink-soft)' }}>{isAr ? 'الرئيسية' : 'Home'}</Link>
        <span style={{ margin: '0 10px', color: 'var(--line-strong)' }}>/</span>
        <Link href={`/${locale}/guides`} style={{ color: 'var(--ink-soft)' }}>{isAr ? 'الموسوعة' : 'Encyclopedia'}</Link>
        <span style={{ margin: '0 10px', color: 'var(--line-strong)' }}>/</span>
        <span style={{ color: 'var(--green-700)' }}>{guide.title_brief}</span>
      </nav>

      {/* ARTICLE HEADER */}
      <header style={{ marginBottom: 40 }}>
        <div className="cluster" style={{ gap: 8, marginBottom: 18 }}>
          <span className="badge badge-emerald">🌿 Botanical Taxa</span>
          <span className="badge badge-locked">
            {guide.phase === 'P1' ? 'Core reference' : guide.phase === 'P2' ? 'Extended reference' : 'Specialised reference'}
          </span>
          <span className="badge badge-locked">⏱ 5 min read</span>
        </div>

        <h1 style={{ marginBottom: 18, maxWidth: '18ch' }}>
          {guide.h1_brief || guide.title_brief}
        </h1>

        <p className="lede">{guide.primary_intent}</p>
      </header>

      <hr className="rule" style={{ marginBottom: 40 }} />

      {/* EXECUTIVE SUMMARY */}
      <div
        style={{
          background: 'var(--bg-eggshell)',
          border: '1px solid var(--line)',
          borderInlineStart: '2px solid var(--green-600)',
          borderRadius: 6,
          padding: '24px 28px',
          marginBottom: 44,
        }}
      >
        <h3 style={{ marginBottom: 10 }}>{isAr ? 'الخلاصة التوثيقية والنطاق العلمي' : 'Executive Summary & Scientific Scope'}</h3>
        <p className="text-body" style={{ margin: 0 }}>
          This guide synthesizes verified botanical data across the <em>Thymelaeaceae</em> family (principally <em>Aquilaria agallocha, A. crassna, A. malaccensis,</em> and <em>Gyrinops versteegii</em>). Documented quality assessment mandates distinguishing natural pathological fungal defense oleoresins from artificially scented wood or solvent-diluted distillates.
        </p>
      </div>

      {/* ARTICLE BODY */}
      <div className="text-body" style={{ fontSize: '1rem' }}>
        <h2 style={{ marginTop: 44, marginBottom: 14 }}>
          {isAr ? '١. الخصائص النباتية وتكوين الراتنج العطري' : '1. Botanical Induction & Heartwood Oleoresin'}
        </h2>
        <p>
          Unlike conventional fragrant timbers such as sandalwood or cedar, healthy agarwood trees produce pale, odourless, and low-density wood. True agarwood resin forms strictly as an immune response to physical injury and subsequent fungal colonization (primarily by <em>Phaeoacremonium parasiticum</em> or <em>Aspergillus</em> species). Over years or decades, the tree saturates its heartwood with dark, dense aromatic sesquiterpenes.
        </p>

        <h2 style={{ marginTop: 44, marginBottom: 14 }}>
          {isAr ? '٢. أنظمة التقطير الحرفي: القدور النحاسية والبخار' : '2. Extraction Methodology: Traditional Deg vs Modern Steam'}
        </h2>
        <p>
          The olfactory character of pure Dehn Al Oud is profoundly shaped by the distillation vessel:
        </p>
        <ul style={{ paddingInlineStart: '22px', margin: '16px 0' }}>
          <li style={{ marginBottom: '10px' }}>
            <strong>Traditional Copper Deg (Hydro-distillation):</strong> Revered in Assam and Kannauj. Direct wood-fire heating in hammered copper cauldrons with bamboo condensors yields deep, leather-dominant, animalic, and smoky profiles through controlled caramelization.
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>Modern Stainless Steel Steam:</strong> Preferred in Thailand (Trat) and Cambodia. Low-temperature, pressurized steam preserves volatile top notes, producing clean, golden, peachy, and sweet floral profiles free from scorched particulates.
          </li>
        </ul>

        {/* AUTHORIZED RETAIL REFERRAL */}
        <div
          style={{
            background: 'var(--brass-tint)',
            border: '1px solid #e6d7ba',
            borderRadius: 6,
            padding: 28,
            margin: '44px 0',
          }}
        >
          <div className="cluster" style={{ gap: 10, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>🛍️</span>
            <span className="badge badge-gold">Authorized Merchant Referral</span>
          </div>
          <h3 style={{ marginBottom: 10 }}>
            {isAr ? 'اقتناء عينات تجزئة مفحوصة من هذا الصنف' : 'Looking to sample authentic retail batches of this material?'}
          </h3>
          <p className="text-body" style={{ marginBottom: 18 }}>
            {isAr
              ? 'للراغبين في اقتناء تولة مفردة أو عينات فحص شخصية، استعرض التشكيلة الحرفية المعتمدة لدى متجر المطلب في سوق ديرة للعطور بدبي.'
              : 'For individual bottles and personal retail sampling of pure aged Hindi, Trat, and Cambodian distillations, explore curated retail selections at our authorized merchant partner, Al Mutalib Perfumes (Dubai Souk).'}
          </p>
          <a
            href="https://ae.almutalib.com"
            target="_blank"
            rel="sponsored noopener"
            className="btn btn-outline btn-sm"
          >
            {isAr ? 'استعرض التشكيلة في متجر المطلب (دبي)' : 'Explore Collections at ae.almutalib.com'}
            <ExternalLink size={13} />
          </a>
        </div>

        <h2 style={{ marginTop: 44, marginBottom: 14 }}>
          {isAr ? '٣. التوثيق المخبري واتفاقية سايتس الدولية' : '3. Laboratory Chromatography & CITES Appendix II'}
        </h2>
        <p>
          All species of <em>Aquilaria</em> and <em>Gyrinops</em> are protected under Appendix II of the Convention on International Trade in Endangered Species of Wild Fauna and Flora (CITES). Legal international export requires non-detriment findings (NDF), verified permits, and authentic Certificates of Origin. Laboratory Gas Chromatography-Mass Spectrometry (GC-MS) confirms the absence of synthetic DOP plasticizers, dipropylene glycol (DPG), or chemical aromachemical boosters.
        </p>
      </div>

      {/* RELATED GUIDES */}
      {relatedLinks.length > 0 && (
        <section style={{ marginTop: 56 }}>
          <div className="rule" style={{ marginBottom: 28 }} />
          <span className="eyebrow" style={{ marginBottom: 18 }}>{isAr ? 'أدلة ذات صلة' : 'Related Research'}</span>
          <h2 style={{ marginBottom: 24, fontSize: '1.6rem' }}>
            {isAr ? 'أدلة وأبحاث ذات صلة في الموسوعة' : 'Related Researched Guides & Terroirs'}
          </h2>
          <div className="grid-2">
            {relatedLinks.map((link: any, idx: number) => (
              <div key={idx} style={{ padding: '12px 0', borderBottom: '1px solid var(--line)' }}>
                <Link
                  href={link.target_path}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.05rem',
                    fontWeight: 500,
                    color: 'var(--ink)',
                    display: 'block',
                    marginBottom: 3,
                  }}
                >
                  {link.target_path.replace(/^\/(en|ar)\//, '').replace(/\/$/, '').replace(/-/g, ' ')}
                </Link>
                <span className="meta" style={{ textTransform: 'none', letterSpacing: '0.02em' }}>
                  {link.suggested_anchor}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* WHOLESALE CTA — the one green field on this page */}
      <section
        className="section-green grain"
        style={{
          marginTop: 56,
          marginInline: 'calc(var(--gutter) * -1)',
          padding: 'clamp(40px, 5vw, 64px) var(--gutter)',
          borderRadius: 0,
        }}
      >
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
          <h2 style={{ color: '#ffffff', marginBottom: 14, fontSize: '1.8rem' }}>
            {isAr ? 'هل تحتاج كميات تجارية أو عينات معتمدة؟' : 'Need Commercial Volume or Bulk Samples?'}
          </h2>
          <p style={{ color: 'rgba(232,239,233,0.72)', fontSize: '0.95rem', lineHeight: 1.68, margin: '0 auto 24px' }}>
            {isAr
              ? 'يقدّم دليل العود خدمة الربط التجاري المحايدة لتأمين احتياجات المصانع ودور العطور من خشب العود وزيوته مع حماية تامة لبيانات المشترين.'
              : 'OudGuide connects commercial buyers directly with certified distillers and raw material plantations. You approve which suppliers receive your details.'}
          </p>
          <Link href={`/${locale}/rfq`} className="btn btn-gold btn-lg">
            {isAr ? 'تقديم متطلبات التوريد بالجملة' : 'Submit Wholesale Requirement'}
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </article>
  );
}

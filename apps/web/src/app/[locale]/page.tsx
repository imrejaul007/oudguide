import Link from 'next/link';
import { domain, directoryCounts } from '@/lib/data';
import {
  articleCounts,
  getArticle,
  hubChildren,
  listReviewedArticles,
  articlePath,
  articleTitle,
  articleSummary,
} from '@/lib/articles';
import { HeroSearch } from '@/components/home/hero-search';
import { MarketplaceExplorer } from '@/components/home/marketplace-explorer';
import { HeroQuickRfq } from '@/components/home/hero-quick-rfq';
import { BusinessCard } from '@/components/business/business-card';
import { MarketPreview } from '@/components/market/MarketPreview';
import {
  List,
  BookOpen,
  Globe,
  Package,
  ScrollText,
  FileText,
  AlertTriangle,
  Compass,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Award,
  CheckCircle2,
  MapPin,
  Flame,
  FlaskConical,
  TreePine,
  Building2,
} from 'lucide-react';
import type { Metadata } from 'next';
import { buildMetadata, SITE_URL } from '@/lib/metadata';
import { websiteSchema, organizationSchema } from '@/lib/jsonld';

/**
 * The WebSite/Organization JSON-LD for the home page, as a script body.
 *
 * Emitted on the English home only, in English only. The Arabic tree is
 * noindexed pending its human editorial review, and a SearchAction that
 * tells a crawler where to send searches must not point that crawler at
 * a noindexed tree: the only indexable surface this site has is the
 * English one, so the schema lives with it and says nothing about any
 * other. The root layout deliberately carries no schema — there is no
 * <html> to hang one on there, and a page that serves two languages
 * should not share one structured-data payload.
 */
function homeSchemaScript(): string {
  const graph = [websiteSchema(SITE_URL, 'en'), organizationSchema(SITE_URL)];
  return JSON.stringify(graph.length === 1 ? graph[0] : { '@context': 'https://schema.org', '@graph': graph });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';
  return buildMetadata({
    path: `/${locale}`,
    title: isAr
      ? 'دليل العود — المرجع المستقل للعود الطبيعي وتوريد العطور بالجملة'
      : 'OudGuide — The natural oud & wholesale fragrance reference',
    description: isAr
      ? 'المرجع المستقل للعود الطبيعي ودهن العود والعطور الشرقية، مع دليل منتجين موثّقين، موسوعة معارف، وخريطة أقاليم — وخدمة ربط تجارية محايدة.'
      : 'The independent reference for natural agarwood and heritage attars: a verified producer directory, an encyclopedia, and a neutral matching service.',
    locale,
    alternateLocalePath: `/${locale === 'ar' ? 'en' : 'ar'}`,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === 'ar';

  // Honest, computed counts — no hard-coded figures.
  const reviewed = articleCounts().reviewed;
  const briefs = articleCounts().briefs;
  const publishedRecords = directoryCounts.published;

  const reviewedArticles = listReviewedArticles();
  const productCount = reviewedArticles.filter((a) => a.kind === 'product').length;
  const glossaryCount = getArticle('glossary')
    ? hubChildren(getArticle('glossary')!, locale).length
    : 0;

  const recent = [...reviewedArticles]
    .filter((a) => a.kind !== 'hub')
    .sort((a, b) => (b.reviewedOn || '').localeCompare(a.reviewedOn || ''))
    .slice(0, 6);

  const featured = (domain.listBusinesses({ excludeDemo: true }) as any[]).slice(0, 3);

  const tiles: {
    key: string;
    icon: React.ComponentType<{ size?: number }>;
    title: string;
    desc: string;
    count: string;
    href: string;
  }[] = [
    {
      key: 'directory',
      icon: List,
      title: isAr ? 'دليل المنتجين' : 'Producer Directory',
      desc: isAr
        ? 'سجلات مقطرين ومزارع وموزعين موثّقة، بفلاتر مستقلة للصنف والدور والمنشأ والوجهة.'
        : 'Documented distiller, plantation and wholesaler records, with independent filters for material, role, origin and destination.',
      count: `${publishedRecords} ${isAr ? 'سجلاً منشوراً' : 'published record' + (publishedRecords === 1 ? '' : 's')}`,
      href: `/${locale}/directory`,
    },
    {
      key: 'encyclopedia',
      icon: BookOpen,
      title: isAr ? 'الموسوعة' : 'Encyclopedia',
      desc: isAr
        ? 'أدلة معاد مراجعتها عن العود: الأقسام، التقطير، التقييم، الأصالة، والتجارة.'
        : 'Reviewed guides to oud: botany, distillation, grading, authenticity and trade.',
      count: `${reviewed} ${isAr ? 'مقالاً راجعاً' : 'reviewed article' + (reviewed === 1 ? '' : 's')}`,
      href: `/${locale}/guides`,
    },
    {
      key: 'world',
      icon: Globe,
      title: isAr ? 'سجل الأقاليم' : 'Territory Register',
      desc: isAr
        ? 'أقاليم موثّقة بحالات التوثيق والجاهزية — ما هو معلوم عن العود هنا، وما ليس كذلك.'
        : 'Documented territories with readiness status — what is known about oud here, and what is not.',
      count: '249 ' + (isAr ? 'أقالماً' : 'territories'),
      href: `/${locale}/world`,
    },
    {
      key: 'products',
      icon: Package,
      title: isAr ? 'الأصناف' : 'Product Families',
      desc: isAr
        ? 'الأنواع التجارية الموثقة: الخشب، الدهن، الزيوت، والعطور النهائية.'
        : 'Documented commercial formats: wood, dehn, oils and finished perfumes.',
      count: `${productCount} ${isAr ? 'صيغاً' : 'families'}`,
      href: `/${locale}/products`,
    },
    {
      key: 'glossary',
      icon: ScrollText,
      title: isAr ? 'المفردات' : 'Glossary',
      desc: isAr
        ? 'مصطلحات العود والعطور الموثقة بالمراجع — من «دهن العود» إلى «درجة الغطاس».'
        : 'Documented oud and fragrance terms with cited references — from Dehn Al Oud to sinking grade.',
      count: `${glossaryCount} ${isAr ? 'مصطلحاً' : 'terms'}`,
      href: `/${locale}/glossary`,
    },
    {
      key: 'rfq',
      icon: FileText,
      title: isAr ? 'طلب توريد بالجملة' : 'Wholesale RFQ',
      desc: isAr
        ? 'استمارة شرطية محايدة لحماية بيانات المصنعين، تُقدَّم لأعضاء معتمدين فقط.'
        : 'A neutral conditional form that protects supplier data, released only to accredited members.',
      count: '67 ' + (isAr ? 'مواصفة' : 'specifications'),
      href: `/${locale}/rfq`,
    },
  ];

  return (
    <>
      {/* =============================================================
          JSON-LD — WebSite + Organization, English home only.

          The Arabic home renders nothing here: see homeSchemaScript,
          which documents why the SearchAction must not point a
          crawler at the noindexed tree.
          ============================================================== */}
      {!isAr && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: homeSchemaScript() }}
        />
      )}

      {/* ==============================================================
          1. ASYMMETRIC B2B PORTAL HERO — Command Masthead & Live Dossier
          ============================================================== */}
      <section className="hero" style={{ padding: 'clamp(40px, 6vw, 76px) 0' }}>
        <div className="container">
          <div className="hero-split-layout">
            {/* Left Column: Command Editorial Masthead */}
            <div className="hero-main-column">
              <div className="hero-tag" style={{ marginBottom: 18, alignSelf: 'flex-start' }}>
                <Compass size={12} />
                <span>
                  {isAr
                    ? 'السجل العالمي الموثق للعود الطبيعي والتوريد التجاري'
                    : 'The Verified Global Repository for Natural Oud & Wholesale Trade'}
                </span>
              </div>

              <h1 className="hero-title" style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3.2rem)', lineHeight: 1.15, marginBottom: 18 }}>
                {isAr
                  ? 'السجل المستقل لمصادقة العود الطبيعي والتقطير التراثي.'
                  : 'The independent authority for authentic agarwood & artisan distillates.'}
              </h1>

              <p className="hero-lead" style={{ marginBottom: 28, maxWidth: '54ch' }}>
                {isAr
                  ? 'دليل منتجين محكَّم، موسوعة معارف راجعة، سجل أقاليم، وبروتوكول مطابقة محايد لحماية بيانات المشترين.'
                  : 'Documented distillers, reviewed botanical references, territory registers, and a neutral matching protocol engineered for wholesale procurement.'}
              </p>

              {/* Qogita-Style Marketplace Category Pills */}
              <div className="qogita-category-strip">
                <Link href={`/${locale}/products/oud-wood`} className="qogita-category-pill">
                  <TreePine size={14} style={{ color: "var(--green-700)" }} />
                  <span>{isAr ? 'خشب وغطاس' : 'Raw Heartwood'}</span>
                </Link>
                <Link href={`/${locale}/products/dehn-al-oud`} className="qogita-category-pill">
                  <FlaskConical size={14} style={{ color: "var(--green-700)" }} />
                  <span>{isAr ? 'دهن عود نقي' : 'Pure Dehn Al Oud'}</span>
                </Link>
                <Link href={`/${locale}/products/agarwood-chips`} className="qogita-category-pill">
                  <Flame size={14} style={{ color: "var(--brass)" }} />
                  <span>{isAr ? 'رقائق بخور بري' : 'Incense Chips'}</span>
                </Link>
                <Link href={`/${locale}/products/traditional-attars`} className="qogita-category-pill">
                  <Sparkles size={14} style={{ color: "var(--brass)" }} />
                  <span>{isAr ? 'عطور تراثية' : 'Heritage Attars'}</span>
                </Link>
                <Link href={`/${locale}/products/private-label`} className="qogita-category-pill">
                  <Package size={14} style={{ color: "var(--green-700)" }} />
                  <span>{isAr ? 'تصنيع خاص' : 'Private Label'}</span>
                </Link>
                <Link href={`/${locale}/directory`} className="qogita-category-pill">
                  <Building2 size={14} style={{ color: "var(--green-700)" }} />
                  <span>{isAr ? 'المصانع المعتمدة' : 'Verified Distillers'}</span>
                </Link>
              </div>
              <div style={{ maxWidth: 640, marginBottom: 24 }}>
                <HeroSearch locale={locale} />
              </div>

              {/* Fast 1-Minute RFQ Dock (Tradeling Pattern) */}
              <div className="fast-rfq-hero-dock">
                <div className="cluster" style={{ gap: 10 }}>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--green-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--green-700)' }}>
                    <FileText size={16} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.86rem', fontWeight: 600, color: 'var(--green-950)', display: 'block' }}>
                      {isAr ? 'هل تحتاج كميات تجارية أو عينات مخصصة؟' : 'Need wholesale volume or custom distillation?'}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--ink-muted)' }}>
                      {isAr ? 'قدّم متطلباتك واستلم عروض أسعار مباشرة دون عمولات وساطة' : 'Submit technical RFQ in 60s — zero commission bias'}
                    </span>
                  </div>
                </div>
                <Link href={`/${locale}/rfq`} className="btn btn-outline btn-sm" style={{ whiteSpace: 'nowrap', gap: 5 }}>
                  <span>{isAr ? 'تقديم طلب توريد' : 'Post Bulk RFQ'}</span>
                  <ArrowRight size={12} className="icon-dir-flip" />
                </Link>
              </div>

              {/* 3 Core Trust Markers */}
              <div className="cluster" style={{ gap: 18, color: 'var(--ink-muted)', fontSize: '0.84rem' }}>
                <span className="cluster" style={{ gap: 6 }}>
                  <CheckCircle2 size={15} style={{ color: 'var(--green-700)' }} />
                  <span>{isAr ? 'أقاليم منشأ موثقة' : 'Verified Provenance'}</span>
                </span>
                <span className="cluster" style={{ gap: 6 }}>
                  <CheckCircle2 size={15} style={{ color: 'var(--green-700)' }} />
                  <span>{isAr ? 'فحص النقاء الكروماتوغرافي' : 'GC-MS Purity Profiles'}</span>
                </span>
                <span className="cluster" style={{ gap: 6 }}>
                  <CheckCircle2 size={15} style={{ color: 'var(--green-700)' }} />
                  <span>{isAr ? 'حجب الاتصال حتى الموافقة' : 'Encrypted Contact Redaction'}</span>
                </span>
              </div>
            </div>

            {/* Right Column: Tradeling-Style Quick RFQ Engine */}
            <div>
              <HeroQuickRfq locale={locale} isAr={isAr} />
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          2. TWO-TRACK DISCOVERY — Material Families & Producing Terroirs
          ============================================================== */}
      <section className="section section-white" style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div className="row-between" style={{ marginBottom: 14 }}>
            <div>
              <span className="eyebrow">{isAr ? 'المصفوفة المرجعية' : 'Discovery Tracks'}</span>
              <h2 className="h2" style={{ margin: 0 }}>
                {isAr ? 'استكشف أصناف العود والأقاليم المنتجة' : 'Material Classifications & Producing Terroirs'}
              </h2>
            </div>
            <Link href={`/${locale}/products`} className="btn btn-outline btn-sm">
              {isAr ? 'جميع الأصناف' : 'All Product Families'}
              <ArrowRight size={13} className="icon-dir-flip" />
            </Link>
          </div>

          <div className="two-track-grid">
            {/* Track 1: 4 Visual Pillar Cards */}
            <div className="visual-showcase-grid" style={{ marginTop: 0 }}>
              <Link href={`/${locale}/products/oud-wood`} className="visual-card">
                <img src="/images/hero-oud-wood.svg" alt="Raw Agarwood Heartwood" className="visual-card-img" />
                <div className="visual-card-overlay" />
                <div className="visual-card-content">
                  <span className="visual-card-badge">{isAr ? 'خشب خام' : 'Heartwood'}</span>
                  <h3 className="visual-card-title">{isAr ? 'خشب العود والغطاس' : 'Agarwood Heartwood'}</h3>
                  <p className="visual-card-desc">{isAr ? 'كثافة الراتنج وفحص الغطاس.' : 'Resin density & flotation metrics.'}</p>
                </div>
              </Link>

              <Link href={`/${locale}/products/dehn-al-oud`} className="visual-card">
                <img src="/images/hero-dehn-al-oud.svg" alt="Artisan Dehn Al Oud" className="visual-card-img" />
                <div className="visual-card-overlay" />
                <div className="visual-card-content">
                  <span className="visual-card-badge">{isAr ? 'تقطير نقي' : 'Distillate'}</span>
                  <h3 className="visual-card-title">{isAr ? 'دهن العود المُعتَّق' : 'Artisan Dehn Al Oud'}</h3>
                  <p className="visual-card-desc">{isAr ? 'التقطير المائي والفحص المخبري.' : 'Hydro-distillates & aging chemistry.'}</p>
                </div>
              </Link>

              <Link href={`/${locale}/products/agarwood-chips`} className="visual-card">
                <img src="/images/hero-oud-chip.svg" alt="Wild Incense Chips" className="visual-card-img" />
                <div className="visual-card-overlay" />
                <div className="visual-card-content">
                  <span className="visual-card-badge">{isAr ? 'بخور بري' : 'Incense'}</span>
                  <h3 className="visual-card-title">{isAr ? 'رقائق البخور البري' : 'Wild Incense Chips'}</h3>
                  <p className="visual-card-desc">{isAr ? 'نقاء الاحتراق وكشف الشمع.' : 'Burn aromas & wax detection.'}</p>
                </div>
              </Link>

              <Link href={`/${locale}/products/traditional-attars`} className="visual-card">
                <img src="/images/hero-attar-still.svg" alt="Traditional Copper Stills" className="visual-card-img" />
                <div className="visual-card-overlay" />
                <div className="visual-card-content">
                  <span className="visual-card-badge">{isAr ? 'تقطير ديغ' : 'Heritage'}</span>
                  <h3 className="visual-card-title">{isAr ? 'العطور التراثية والديغ' : 'Heritage Attars'}</h3>
                  <p className="visual-card-desc">{isAr ? 'التقطير النحاسي على خشب الصندل.' : 'Copper Deg over pure sandalwood.'}</p>
                </div>
              </Link>
            </div>

            {/* Track 2: Producing Terroirs & Trade Hubs */}
            <div className="terroir-register-card">
              <div>
                <span className="eyebrow" style={{ display: 'block', marginBottom: 6 }}>
                  {isAr ? 'السجل الجغرافي' : 'Territory Index'}
                </span>
                <h3 style={{ fontSize: '1.2rem', margin: '0 0 10px', fontFamily: 'var(--font-display)' }}>
                  {isAr ? 'أهم مراكز الإنتاج والتجارة' : 'Key Producing Terroirs & Trade Hubs'}
                </h3>
                <p style={{ margin: '0 0 16px', fontSize: '0.85rem', color: 'var(--ink-muted)', lineHeight: 1.5 }}>
                  {isAr
                    ? 'تصفح التقارير الميدانية وحالات التوثيق عبر 249 إقليماً مسجلاً.'
                    : 'Inspect field reports and documentation status across 249 registered territories.'}
                </p>

                <div className="stack-2">
                  <Link href={`/${locale}/world/IN`} className="terroir-item-link">
                    <div className="cluster" style={{ gap: 8 }}>
                      <span className="badge badge-forest" style={{ fontSize: '0.7rem' }}>IN</span>
                      <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{isAr ? 'الهند (أسام وسيلهيت)' : 'India (Assam & Upper Valleys)'}</span>
                    </div>
                    <ArrowRight size={13} className="icon-dir-flip" />
                  </Link>

                  <Link href={`/${locale}/world/TH`} className="terroir-item-link">
                    <div className="cluster" style={{ gap: 8 }}>
                      <span className="badge badge-forest" style={{ fontSize: '0.7rem' }}>TH</span>
                      <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{isAr ? 'تايلاند (ترات وخاو ياي)' : 'Thailand (Trat & Khao Yai)'}</span>
                    </div>
                    <ArrowRight size={13} className="icon-dir-flip" />
                  </Link>

                  <Link href={`/${locale}/world/KH`} className="terroir-item-link">
                    <div className="cluster" style={{ gap: 8 }}>
                      <span className="badge badge-forest" style={{ fontSize: '0.7rem' }}>KH</span>
                      <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{isAr ? 'كمبوديا (كوه كونغ وبورسات)' : 'Cambodia (Koh Kong & Pursat)'}</span>
                    </div>
                    <ArrowRight size={13} className="icon-dir-flip" />
                  </Link>

                  <Link href={`/${locale}/world/AE`} className="terroir-item-link">
                    <div className="cluster" style={{ gap: 8 }}>
                      <span className="badge badge-forest" style={{ fontSize: '0.7rem' }}>AE</span>
                      <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{isAr ? 'الإمارات (مركز ديرة العالمي)' : 'United Arab Emirates (Deira Hub)'}</span>
                    </div>
                    <ArrowRight size={13} className="icon-dir-flip" />
                  </Link>
                </div>
              </div>

              <Link href={`/${locale}/world`} className="btn btn-outline btn-sm" style={{ marginTop: 14, justifyContent: 'center' }}>
                <Globe size={13} />
                <span>{isAr ? 'عرض كافة الـ 249 إقليماً' : 'Browse All 249 Territories'}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          3. LIVE B2B MARKETPLACE & INTELLIGENCE ENGINE (Apollo & Qogita Pattern)
          ============================================================== */}
      <section className="section section-eggshell">
        <div className="container">
          <MarketplaceExplorer
            locale={locale}
            isAr={isAr}
            reviewedArticles={reviewedArticles}
            producers={domain.listBusinesses() as any[]}
          />
        </div>
      </section>
      {/* ==============================================================
          2. METRICS — the thin stat strip
          ============================================================== */}
      <div className="container" style={{ marginTop: 56 }}>
        <div className="metrics">
          <div className="metric">
            <div className="metric-value">{reviewed}</div>
            <div className="metric-label">{isAr ? 'مقالاً راجعاً' : 'Reviewed articles'}</div>
          </div>
          <div className="metric">
            <div className="metric-value">249</div>
            <div className="metric-label">{isAr ? 'أقالماً في السجل' : 'Territories in the register'}</div>
          </div>
          <div className="metric">
            <div className="metric-value">{publishedRecords}</div>
            <div className="metric-label">{isAr ? 'سجلاً منشوراً في الدليل' : 'Published directory records'}</div>
          </div>
          <div className="metric">
            <div className="metric-value">{briefs}</div>
            <div className="metric-label">{isAr ? 'موجزاً بحثياً قيد الإعداد' : 'Research briefs in preparation'}</div>
          </div>
        </div>
      </div>

      {/* ==============================================================
          3. FEATURED RECORDS — the register at a glance
          ============================================================== */}
      <section className="section section-white">
        <div className="container">
          <div className="row-between" style={{ marginBottom: 28 }}>
            <div>
              <span className="eyebrow">{isAr ? 'سجلات منشورة' : 'From the register'}</span>
              <h2 className="h2" style={{ marginBottom: 0 }}>
                {isAr ? 'السجلات المنشورة في الدليل' : 'Published directory records'}
              </h2>
            </div>
            <Link href={`/${locale}/directory`} className="btn btn-outline btn-sm">
              {isAr ? 'تصفح الدليل الكامل' : 'Browse the full directory'}
              <ArrowRight size={13} />
            </Link>
          </div>

          {featured.length > 0 ? (
            <div className="grid-3" style={{ gap: 20 }}>
              {featured.map((b: any) => (
                <BusinessCard key={b.id} business={b} locale={locale} variant="compact" />
              ))}
            </div>
          ) : (
            <div className="card-frame" style={{ textAlign: 'center', padding: 44 }}>
              <p className="lede" style={{ margin: '0 auto 14px', maxWidth: 520 }}>
                {isAr
                  ? 'السجل يُمثّل كلَّ مرة يُوثَّق فيها مورد. ما يظهر هنا هو السجلات المنشورة فقط — والعدد أعلى هو العدد الفعلي.'
                  : 'The register grows each time a supplier is documented. Only published records are shown here — the count above is the live figure.'}
              </p>
              <Link href={`/${locale}/directory`} className="btn btn-outline">
                {isAr ? 'افتح الدليل' : 'Open the directory'}
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* 3b. MARKET SURFACE PREVIEW — the visual face of the price-observation
            baseline; the full currency-segregated chart lives at /market. */}
      <MarketPreview locale={locale} isAr={isAr} />

      {/* ==============================================================
          4. RECENTLY REVIEWED — the editorial lane
          ============================================================== */}
      <section className="section-tight section-eggshell">
        <div className="container">
          <div className="row-between" style={{ marginBottom: 28 }}>
            <div>
              <span className="eyebrow">{isAr ? 'الأدلة' : 'From the encyclopedia'}</span>
              <h2 className="h2" style={{ marginBottom: 0 }}>
                {isAr ? 'آخر المواد المعاد مراجعتها' : 'Recently reviewed'}
              </h2>
            </div>
            <Link href={`/${locale}/guides`} className="btn btn-outline btn-sm">
              {isAr ? 'كل المواد' : 'All guides'}
              <ArrowRight size={13} />
            </Link>
          </div>

          <div className="review-lane">
            {recent.map((a) => {
              const Kind = a.kind === 'product' ? Package : a.kind === 'glossary' ? ScrollText : BookOpen;
              const kindLabel =
                a.kind === 'product'
                  ? (isAr ? 'صيغة' : 'Product')
                  : a.kind === 'glossary'
                  ? (isAr ? 'مصطلح' : 'Term')
                  : (isAr ? 'دليل' : 'Guide');
              return (
                <Link key={a.slug} href={articlePath(locale, a.slug)} className="review-item">
                  <div className="cluster" style={{ gap: 8 }}>
                    <span className="badge badge-accent" style={{ display: 'inline-flex' }}>
                      <Kind size={11} />
                      {kindLabel}
                    </span>
                    {a.reviewedOn && (
                      <span className="meta">{a.reviewedOn}</span>
                    )}
                  </div>
                  <h3 className="review-item-title">{articleTitle(a, locale)}</h3>
                  <p className="review-item-summary">{reviewLaneSummary(a, locale)}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==============================================================
          5. SURVEILLANCE & AUTHENTICITY DASHBOARD — Laboratory Standards
          ============================================================== */}
      <section className="section section-white">
        <div className="container">
          <div className="surveillance-dashboard">
            <div className="row-between" style={{ alignItems: 'flex-start' }}>
              <div>
                <span className="badge badge-terracotta" style={{ marginBottom: 12 }}>
                  <AlertTriangle size={11} />
                  {isAr ? 'مرصد الرقابة وفحص الجودة' : 'Market Surveillance & Lab Standards'}
                </span>
                <h2 className="h2" style={{ margin: '0 0 8px' }}>
                  {isAr ? 'الكشف المخبري عن أشكال الغش الأربعة' : 'Laboratory Detection of Market Adulteration'}
                </h2>
                <p className="lede" style={{ margin: 0, maxWidth: '64ch' }}>
                  {isAr
                    ? 'التعطير الاصطناعي، الحقن الكيميائي، وتزوير درجات الغطاس تستدعي تدقيقاً مخبرياً صارماً قبل أي صفقة جملة.'
                    : 'Synthetic reconstitution, chemical fortification and inflated sinking grades demand strict laboratory protocols before wholesale commitment.'}
                </p>
              </div>
              <Link href={`/${locale}/guides`} className="btn btn-outline btn-sm">
                <span>{isAr ? 'دليل الأصالة الكامل' : 'Full Authenticity Guide'}</span>
                <ArrowRight size={13} className="icon-dir-flip" />
              </Link>
            </div>

            <div className="surveillance-grid">
              <div className="surveillance-card">
                <div className="surveillance-card-head">
                  <h4>{isAr ? 'خشب الغطاس المحقون' : 'Injected Sinking Timber'}</h4>
                  <span className="surveillance-method-badge">X-Ray & Flotation</span>
                </div>
                <p>
                  {isAr
                    ? 'حقن الرصاص المصهور أو الشمع لتقليد كثافة الغاطس. يُكشف بالأشعة السينية وفحص رماد الاحتراق.'
                    : 'Low-grade wild timber injected with molten lead or dental wax to mimic sinker density. Detected via X-ray radiography and burn-ash analysis.'}
                </p>
              </div>

              <div className="surveillance-card">
                <div className="surveillance-card-head">
                  <h4>{isAr ? 'التخفيف الكيميائي والمذيبات' : 'Solvent Dilution & Fortification'}</h4>
                  <span className="surveillance-method-badge">GC-MS Chromatography</span>
                </div>
                <p>
                  {isAr
                    ? 'تخفيف الزيوت بالمذيبات عديمة الرائحة أو إضافة مركبات صناعية لزيادة الثبات. يُكشف بالكروماتوغرافيا الغازية.'
                    : 'Oud oils diluted with odorless solvents or fortified with chemical aromachemicals to fake longevity. Detected via GC-MS chromatography.'}
                </p>
              </div>

              <div className="surveillance-card">
                <div className="surveillance-card-head">
                  <h4>{isAr ? 'تزوير المنشأ والنوع النباتي' : 'Botanical & Terroir Substitution'}</h4>
                  <span className="surveillance-method-badge">Botanical Tracing</span>
                </div>
                <p>
                  {isAr
                    ? 'بيع الخشب المستزرع كعود أسام بري عتيق بفارق سعر هائل. يُكشف بالفحص المجهري لسجلات المنشأ.'
                    : 'Plantation-grown wood sold as vintage wild Assam at up to 10x the price. Detected via documented facility logs and anatomical inspection.'}
                </p>
              </div>

              <div className="surveillance-card">
                <div className="surveillance-card-head">
                  <h4>{isAr ? 'تزوير تصاريح سايتس CITES' : 'Fabricated CITES Quotas'}</h4>
                  <span className="surveillance-method-badge">National Registry</span>
                </div>
                <p>
                  {isAr
                    ? 'تصاريح تصدير وهمية تؤدي إلى مصادرة الشحنات في الجمارك. تُكشف بالمطابقة مع السجلات الرسمية.'
                    : 'Uncertified parcels seized by customs for counterfeit permits or unrecorded quotas. Verified against national forestry authority databases.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          6. SOURCING ASSISTANT — the single dark green band
          ============================================================== */}
      <section className="section section-green grain">
        <div className="container">
          <div className="split-editorial">
            <div style={{ position: 'relative', zIndex: 1 }}>
              <span className="eyebrow eyebrow-no-rule">
                <Sparkles size={13} />
                {isAr ? 'مساعد التوريد' : 'Sourcing Assistant'}
              </span>
              <h2 className="h2" style={{ marginTop: 14 }}>
                {isAr ? 'اطرح سؤالك واحصل على ترشيح موثق' : 'Ask a question, get a documented answer'}
              </h2>
              <p className="lede">
                {isAr
                  ? `يعمل المساعد مباشرة على سجل OudGuide الموثق: 249 أقالماً، ${reviewed} مقالاً راجعاً، و67 مواصفة توريد شرطية. يطابق متطلباتك مع المنتجين المسجلين ويشرح الأقاليم والتقديرة وسياسات سايتس — على الإسقاط العلني الذي حُذفت منه حقول الاتصال على الخادم.`
                  : `The assistant reads OudGuide's documented register directly: 249 territories, ${reviewed} reviewed articles and 67 conditional RFQ specifications. It matches your requirements against listed producers and explains terroirs, grading and CITES policy — on the public projection with contact fields already removed on the server.`}
              </p>
              <div className="cluster" style={{ marginTop: 28 }}>
                <Link href={`/${locale}/sourcing`} className="btn btn-inverse btn-lg">
                  {isAr ? 'ابدأ المحادثة' : 'Start the conversation'}
                  <ArrowRight size={14} className="icon-dir-flip" />
                </Link>
                <Link href={`/${locale}/directory/map`} className="btn btn-outline btn-lg" style={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.3)' }}>
                  <Globe size={14} />
                  {isAr ? 'خريطة المنتجين' : 'Producer map'}
                </Link>
              </div>
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.16)',
                  borderRadius: 6,
                  padding: '22px 24px',
                }}
              >
                <div className="meta" style={{ color: 'var(--green-200)', marginBottom: 12 }}>
                  {isAr ? 'ما يغطيه المساعد' : 'What it covers'}
                </div>
                <ul style={{ margin: 0, paddingLeft: 18, color: 'rgba(232,239,233,0.78)', fontSize: '0.88rem', lineHeight: 1.8 }}>
                  <li>{isAr ? 'تتابق الإقليم، الصنف، ونطاق الكمية' : 'Terroir, product family and volume matching'}</li>
                  <li>{isAr ? 'أشكال الغش الأربعة وطرق الكشف المخبرية' : 'The four fraud types and lab detection methods'}</li>
                  <li>{isAr ? 'متطلبات سايتس الملحق الثاني وقرارات عدم الإضرار' : 'CITES Appendix II duties and non-detriment findings'}</li>
                  <li>{isAr ? 'سياسة حماية البيانات وحجز حقول الاتصال' : 'Data-protection policy and contact-field withholding'}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          7. THE MATCHING PROTOCOL — how the service works
          ============================================================== */}
      <section className="section section-sage">
        <div className="container">
          <div className="section-head section-head-center">
            <span className="eyebrow eyebrow-no-rule">
              <ShieldCheck size={13} />
              {isAr ? 'بروتوكول الربط المحايد' : 'The Neutral Matching Protocol'}
            </span>
            <h2 className="h2">
              {isAr ? 'كيف تعمل خدمة الربط التجارية المحايدة' : 'How the neutral matching service works'}
            </h2>
            <p className="lede">
              {isAr
                ? 'صُممت لحماية خصوصية مشترٍ البيانات مع ضمان محاسبة مورد موثقة.'
                : 'Engineered to protect buyer data privacy while holding suppliers to documented accountability.'}
            </p>
          </div>

          <div className="grid-4">
            {[
              { n: '01', t: isAr ? 'الاستفسار الشرطية' : 'Conditional RFQ', d: isAr ? 'قدم متطلبات الصنف والكمية وجهة الوصول. لا تكشف هويتك حتى الخطوة الأخيرة.' : 'Submit your material, volume and destination requirements. Your identity stays hidden until the final step.' },
              { n: '02', t: isAr ? 'التحقق' : 'OTP verification', d: isAr ? 'رمز تحقق لمرة واحدة يؤكد ملكية وسيلة الاتصال قبل أي تسليم.' : 'A one-time code confirms you own the contact channel before anything is released.' },
              { n: '03', t: isAr ? 'الموجز المحجوب' : 'Redacted brief', d: isAr ? 'يرى الموردون المؤهلون المواصفات التقنية فقط — بدون أي اسم أو بريد أو هاتف.' : 'Eligible suppliers see technical specs only — no name, email or phone.' },
              { n: '04', t: isAr ? 'الموافقة بالاسم' : 'Named approval', d: isAr ? 'تراجع المرشحين واعتمد حتى ثلاثة موردين بالاسم قبل تسليم بياناتك لهم.' : 'Review candidates and approve up to three suppliers by name before your details are released.' },
            ].map((s) => (
              <div className="step-tile" key={s.n}>
                <div className="step-tile-num">
                  {s.n}
                </div>
                <h3 className="step-tile-title">{s.t}</h3>
                <p className="step-tile-desc">{s.d}</p>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: 44 }}>
            <Link href={`/${locale}/rfq`} className="btn btn-primary btn-lg">
              {isAr ? 'ابدأ طلب توريد جملة' : 'Start a wholesale RFQ'}
              <ArrowRight size={14} className="icon-dir-flip" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/**
 * One line for the recently-reviewed lane: the article's own reviewed
 * summary, locale-aware, truncated at a word boundary. No filler.
 */
function reviewLaneSummary(article: Parameters<typeof articleSummary>[0], locale: string): string {
  const full = articleSummary(article, locale);
  if (full.length <= 140) return full;
  const cut = full.slice(0, 140);
  const at = cut.lastIndexOf(' ');
  return cut.slice(0, at > 90 ? at : 140).trimEnd() + '…';
}

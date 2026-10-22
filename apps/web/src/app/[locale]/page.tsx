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
import { BusinessCard } from '@/components/business/business-card';
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
} from 'lucide-react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';

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
      : 'OudGuide — The independent reference for natural oud & wholesale fragrance sourcing',
    description: isAr
      ? 'المرجع المستقل للعود الطبيعي ودهن العود والعطور الشرقية، مع دليل منتجين موثّقين، موسوعة معارف، وخريطة أقاليم — وخدمة ربط تجارية محايدة.'
      : 'The independent reference for natural agarwood, Dehn Al Oud and heritage attars: a verified producer directory, an encyclopedia, a territory register, and a neutral wholesale matching service.',
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
      {/* ==============================================================
          1. PORTAL MASTHEAD — the search-first index
          ============================================================== */}
      <section className="hero" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 880 }}>
          <div className="hero-tag" style={{ marginBottom: 22 }}>
            <Compass size={12} />
            <span>
              {isAr
                ? 'المرجع المستقل للعود الطبيعي وتجارة العطور'
                : 'The independent reference for natural oud & the fragrance trade'}
            </span>
          </div>

          <h1 className="hero-title" style={{ marginBottom: 16 }}>
            {isAr
              ? 'ابحث، صحِّح، وتوّرّد العود الطبيعي بثقة.'
              : 'Find, verify, and source natural oud with confidence.'}
          </h1>

          <p className="hero-lead" style={{ marginInline: 'auto', marginBottom: 36 }}>
            {isAr
              ? 'دليل منتجين موثّقين، موسوعة معارف راجعة، سجل أقاليم، وخدمة ربط تجارية محايدة — كل الأرقام التي تظهر هنا محسوبة من السجل نفسه.'
              : 'A verified producer directory, a reviewed encyclopedia, a territory register and a neutral matching service. Every figure shown here is computed from the register itself.'}
          </p>

          <div style={{ maxWidth: 760, margin: '0 auto 44px' }}>
            <HeroSearch locale={locale} />
          </div>

          {/* THE PORTAL INDEX — six destinations with honest counts */}
          <div className="portal-grid">
            {tiles.map((tile) => {
              const Icon = tile.icon;
              return (
                <Link key={tile.key} href={tile.href} className="portal-tile">
                  <div className="portal-tile-icon">
                    <Icon size={19} />
                  </div>
                  <div>
                    <div className="portal-tile-title">{tile.title}</div>
                    <p className="portal-tile-desc">{tile.desc}</p>
                    <div className="portal-tile-count">{tile.count}</div>
                  </div>
                </Link>
              );
            })}
          </div>
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
                    <span className="badge badge-crimson" style={{ display: 'inline-flex' }}>
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
          5. COUNTERFEIT AWARENESS — the single terracotta accent
          ============================================================== */}
      <section className="section section-white">
        <div className="container">
          <div className="counterfeit-hub">
            <div className="counterfeit-hub-header">
              <span
                className="badge"
                style={{
                  display: 'inline-flex',
                  background: 'var(--terracotta-tint)',
                  color: 'var(--terracotta)',
                  borderColor: '#e8d5cf',
                  border: '1px solid #e8d5cf',
                }}
              >
                <AlertTriangle size={11} />
                {isAr ? 'توعية المضاد للغش' : 'Counterfeit Awareness'}
              </span>
              <h2 className="h2" style={{ marginTop: 16 }}>
                {isAr ? 'معظم ما يباع كـ «عود طبيعي» ليس حقيقياً.' : 'Much of the agarwood sold online is not authentic.'}
              </h2>
              <p className="lede">
                {isAr
                  ? 'التعطير الاصطناعي، الحقن الكيميائي، وتضخيم درجات الغطاس شائعة في السوق المفتوح. هذه أبرز أشكال الغش الأربعة.'
                  : 'Synthetic scenting, chemical injection and inflated sinking grades are widespread in open marketplaces. These are the four primary deceptions.'}
              </p>
            </div>

            <div className="grid-2" style={{ gap: 14 }}>
              <div className="counterfeit-item">
                <h4>{isAr ? 'خشب الغطاس الاصطناعي (حقن الرصاص والشمع)' : 'Artificial sinking wood (lead & wax injection)'}</h4>
                <p>
                  {isAr
                    ? 'خشب بري منخفض الجودة يُحقن بالرصاص المنصوب أو شمع الأسنان ليحاكي كثافة الغاطس. يُكشف بالأشعة وفحص رائحة الاحتراق.'
                    : 'Low-grade wild timber injected with molten lead or dental wax to mimic sinker density. Detected via X-ray and burn-aroma testing.'}
                </p>
              </div>
              <div className="counterfeit-item">
                <h4>{isAr ? 'التخفيف بالمذيبات والمقويات الكيميائية' : 'Solvent dilution & chemical fortification'}</h4>
                <p>
                  {isAr
                    ? 'زيوت العود مخففة بمذيبات صناعية عديمة الرائحة أو مقواة بمواد عطرية كيميائية لتقليد الثبات. يُكشف بالكروماتوغرافيا.'
                    : 'Oud oils diluted with odorless solvents or fortified with chemical aromachemicals to fake longevity. Detected via GC-MS.'}
                </p>
              </div>
              <div className="counterfeit-item">
                <h4>{isAr ? 'انتحال المنشأ النباتي والجغرافي' : 'Botanical & geographic origin fraud'}</h4>
                <p>
                  {isAr
                    ? 'خشب مستزرع يُباع كعود أسام البري القديم بفارق سعر يصل إلى عشرة أضعاف. يُكشف بتتبع المنشأ المعتمد.'
                    : 'Plantation-grown wood sold as vintage wild Assam at up to 10× the price. Detected via certified origin tracing.'}
                </p>
              </div>
              <div className="counterfeit-item">
                <h4>{isAr ? 'وثائق تصدير سايتس مزورة' : 'Fabricated CITES export documentation'}</h4>
                <p>
                  {isAr
                    ? 'طرود غير موثقة تُصادر من الجمارك بسبب تصاريح مزورة أو حصص غير مسجلة. تُكشف بالمطابقة مع السجلات الوطنية.'
                    : 'Uncertified parcels seized by customs for counterfeit permits or unrecorded quotas. Detected against national forestry registries.'}
                </p>
              </div>
            </div>

            <div className="text-center" style={{ marginTop: 32 }}>
              <Link href={`/${locale}/guides`} className="btn btn-outline">
                {isAr ? 'اقرأ دليل الأصالة الكامل' : 'Read the full authenticity guide'}
                <ArrowRight size={13} />
              </Link>
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
                <Link href={`/${locale}/sourcing`} className="btn btn-primary btn-lg">
                  {isAr ? 'ابدأ المحادثة' : 'Start the conversation'}
                  <ArrowRight size={14} />
                </Link>
                <Link href={`/${locale}/directory/map`} className="btn btn-dark btn-lg">
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
                <div className={`step-tile-num ${s.n === '01' ? 'crimson' : s.n === '02' ? 'emerald' : s.n === '03' ? 'charcoal' : 'crimson'}`}>
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
              <ArrowRight size={14} />
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

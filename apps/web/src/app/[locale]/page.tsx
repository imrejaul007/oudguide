import Link from 'next/link';
import { domain, directoryCounts } from '@/lib/data';
import { articleCounts } from '@/lib/articles';
import { HeroSearch } from '@/components/home/hero-search';
import { FeaturedCarousel } from '@/components/business/featured-carousel';
import { Sparkles, AlertTriangle, Compass, ShieldCheck, ArrowRight, Map as MapIcon } from 'lucide-react';
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
      ? 'دليل العود — العود الطبيعي وتوريد العطور بالجملة'
      : 'OudGuide — Natural Oud, Agarwood & Wholesale Fragrance Sourcing',
    description: isAr
      ? 'المرجع المستقل للعود الطبيعي ودهن العود والعطور الشرقية، مع دليل منتجين معتمدين وخدمة ربط تجاري محايدة.'
      : 'The independent reference for natural agarwood, Dehn Al Oud and heritage attars, with a directory of verified producers and a neutral wholesale matching service.',
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

  const businesses = domain.listBusinesses();

  return (
    <>
      {/* ==============================================================
          1. HERO — clean white, asymmetric editorial split
          ============================================================== */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-tag">
                <Sparkles size={12} />
                <span>
                  {isAr
                    ? 'المرجع التوثيقي العالمي للعود الطبيعي والعطور'
                    : 'The Global Reference for Natural Oud & Fragrance'}
                </span>
              </div>

              <h1 className="hero-title">
                {isAr
                  ? 'توريد العود الطبيعي بالوساطة المحايدة.'
                  : 'Neutral wholesale sourcing for natural oud.'}
                <span className="accent">
                  {isAr
                    ? 'ربط المنتجين المعتمدين بكبار المشترين الدوليين.'
                    : 'Connecting certified distillers with institutional buyers.'}
                </span>
              </h1>

              <p className="hero-lead">
                {isAr
                  ? 'نربط دور العطور والمشترين التجاريين بالمقطرين والمزارع الموثّقة في أسام وكمبوديا وتايلاند وإندونيسيا. ينشر المورد بيانات اتصاله هو حيث اختار ذلك، ولا تُسلَّم بيانات المشتري إلا لمورد يعتمده المشتري بالاسم.'
                  : 'Connecting bespoke perfume houses, institutional buyers, and collectors with documented distillers and estates across Assam, Indochina, and the Malay Archipelago. A supplier publishes its own contact details only where it has chosen to; a buyer\u2019s details are released only to a supplier they approve by name.'}
              </p>

              <HeroSearch locale={locale} />

              <div className="cluster" style={{ marginTop: 28 }}>
                <Link href={`/${locale}/sourcing`} className="btn btn-outline btn-sm">
                  <Sparkles size={14} />
                  {isAr ? 'اسأل المساعد' : 'Ask the assistant'}
                </Link>
                <Link href={`/${locale}/directory/map`} className="btn btn-ghost btn-sm">
                  <MapIcon size={14} />
                  {isAr ? 'خريطة المنتجين' : 'Producer map'}
                </Link>
              </div>
            </div>

            {/* Figure — the single visual anchor */}
            <div className="hero-figure">
              <img src="/images/hero-dehn-al-oud.svg" alt={isAr ? 'تقطير دهن العود بالنحاس' : 'Copper alembic oud distillation'} />
              <div className="hero-figure-caption">
                <div className="meta">{isAr ? 'قدور نحاسية تقليدية' : 'Traditional copper alembic'}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', marginTop: 4 }}>
                  {isAr ? 'دهن العود الخالص' : 'Pure Dehn Al Oud'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          2. METRICS — a thin stat strip
          ============================================================== */}
      <div className="container">
        <div className="metrics">
          <div className="metric">
            <div className="metric-value">{articleCounts.reviewed}</div>
            <div className="metric-label">{isAr ? 'مقالاً مُراجَعاً' : 'Reviewed articles'}</div>
          </div>
          <div className="metric">
            <div className="metric-value">249</div>
            <div className="metric-label">{isAr ? 'دولة وإقليم في السجل' : 'Territories in the register'}</div>
          </div>
          <div className="metric">
            <div className="metric-value">{directoryCounts.published}</div>
            <div className="metric-label">{isAr ? 'سجلاً منشوراً في الدليل' : 'Published directory records'}</div>
          </div>
          <div className="metric">
            <div className="metric-value">{articleCounts.briefs}</div>
            <div className="metric-label">{isAr ? 'موجزاً بحثياً قيد الإعداد' : 'Research briefs in preparation'}</div>
          </div>
        </div>
      </div>

      {/* ==============================================================
          3. FOUR DISCIPLINES
          ============================================================== */}
      <section className="section section-white">
        <div className="container">
          <div className="section-head section-head-center">
            <span className="eyebrow">{isAr ? 'التصنيفات الأربعة المعتمدة' : 'Four Core Disciplines'}</span>
            <h2 className="h2">
              {isAr ? 'أصناف العود ومواد العطور الموثقة' : 'Curated Fragrance & Agarwood Disciplines'}
            </h2>
            <p className="lede">
              {isAr
                ? 'نوثق المصادر الأصلية لكل صنف مع شروط التقطير وفحوصات السلامة المخبرية ولوائح التصدير.'
                : 'Every category is mapped to documented botanical habitats, extraction systems, GC-MS lab protocols, and CITES export regulations.'}
            </p>
          </div>

          <div className="grid-4">
            <article className="discipline-card">
              <div className="discipline-cover">
                <div className="discipline-cover-badges">
                  <span className="badge badge-glass-light">Natural Wood</span>
                </div>
                <img src="/images/hero-oud-chip.svg" alt={isAr ? 'خشب العود الطبيعي' : 'Artisanal Agarwood Wood'} />
              </div>
              <div className="discipline-body">
                <span className="badge badge-crimson">Forest & Plantation</span>
                <h3 className="discipline-title">{isAr ? 'خشب العود الطبيعي' : 'Artisanal Agarwood'}</h3>
                <p className="discipline-desc">
                  {isAr
                    ? 'رقائق غابات طبيعية، عود غطاس، وخشب مستزرع مستدام من أسام وكاليمانتان وكمبوديا.'
                    : 'Wild forest heartwood, sinking underwater grades, and sustainably inoculated plantation chips with certified resin density.'}
                </p>
                <div className="discipline-notes">Balsamic · Smoky · Ancient Wood</div>
              </div>
            </article>

            <article className="discipline-card">
              <div className="discipline-cover">
                <div className="discipline-cover-badges">
                  <span className="badge badge-glass-light">Hydro-Distillation</span>
                </div>
                <img src="/images/hero-dehn-al-oud.svg" alt={isAr ? 'دهن العود الخالص' : 'Pure Dehn Al Oud Oil'} />
              </div>
              <div className="discipline-body">
                <span className="badge badge-gold">Pure Distillation</span>
                <h3 className="discipline-title">{isAr ? 'دهن العود الخالص' : 'Pure Dehn Al Oud'}</h3>
                <p className="discipline-desc">
                  {isAr
                    ? 'تقطير قدور النحاس التقليدية والبخار منخفض الحرارة. زيوت معتقة هندي وبراشين وكوه كونغ ومروكي.'
                    : 'Traditional copper alembic deg and modern steam extractions. Aged vintages from Assam, Koh Kong, Trat, and Merauke.'}
                </p>
                <div className="discipline-notes">Leather · Animalic · Warm Hay</div>
              </div>
            </article>

            <article className="discipline-card">
              <div className="discipline-cover">
                <div className="discipline-cover-badges">
                  <span className="badge badge-glass-light">Sandalwood Base</span>
                </div>
                <img src="/images/hero-attar-still.svg" alt={isAr ? 'عطور شرقية' : 'Heritage Attars'} />
              </div>
              <div className="discipline-body">
                <span className="badge badge-emerald">Heritage Attar</span>
                <h3 className="discipline-title">{isAr ? 'العطور الشرقية والمخلطات' : 'Heritage Attars'}</h3>
                <p className="discipline-desc">
                  {isAr
                    ? 'تقطير مشترك على قاعدة خشب الصندل النقي. شمامة العنبر، الورد الدمشقي، الطين الهندي والمسك الطبيعي.'
                    : 'True hydro-distillations over pure Mysore sandalwood base. Shamamatul Amber, Ruh Gulab, Mitti, and Royal Musk accords.'}
                </p>
                <div className="discipline-notes">Earthy · Floral · Sacred Amber</div>
              </div>
            </article>

            <article className="discipline-card">
              <div className="discipline-cover">
                <div className="discipline-cover-badges">
                  <span className="badge badge-glass-light">IFRA standards</span>
                </div>
                <img src="/images/hero-private-label.svg" alt={isAr ? 'التصنيع الخاص' : 'Private Label & Flacons'} />
              </div>
              <div className="discipline-body">
                <span className="badge badge-charcoal">Private Label</span>
                <h3 className="discipline-title">{isAr ? 'التصنيع الخاص والتعبئة' : 'Private Label & Flacons'}</h3>
                <p className="discipline-desc">
                  {isAr
                    ? 'تركيب وتصنيع العطور الفاخرة، مع مطابقة موثّقة لمنتج بعينه لاستخدام بعينه، وزجاجات كريستال مخصصة.'
                    : 'Custom formulation, documented conformity for a specific product and intended use, bespoke crystal flacons, and low-MOQ luxury production runs.'}
                </p>
                <div className="discipline-notes">Documented conformity · Crystal flacons</div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ==============================================================
          4. BROWSE BY MATERIAL — a hairline tile grid
          ============================================================== */}
      <section className="section-tight section-eggshell">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 32 }}>
            <span className="eyebrow">{isAr ? 'تصفح حسب الصنف' : 'Browse by Material'}</span>
            <h2 className="h2" style={{ marginBottom: 0 }}>
              {isAr ? 'اختر خط الإنتاج الذي تبحث عنه' : 'Choose the Production Line You Need'}
            </h2>
          </div>

          <div className="tile-grid">
            {[
              { icon: '🪵', title: isAr ? 'خشب العود الطبيعي' : 'Natural Agarwood', desc: isAr ? 'رقائق برية ومزارع مستدامة' : 'Wild forest chips & plantations', href: '?family=Oud%20wood' },
              { icon: '🧪', title: isAr ? 'دهن العود الخالص' : 'Pure Dehn Al Oud', desc: isAr ? 'تقطير نحاسي وبخار' : 'Copper deg & steam extraction', href: '?family=Oud%20oil' },
              { icon: '🌹', title: isAr ? 'العطور الشرقية' : 'Heritage Attars', desc: isAr ? 'قاعدة صندل نقية' : 'Pure sandalwood base', href: '?family=Perfume%20oil' },
              { icon: '✨', title: isAr ? 'التصنيع الخاص' : 'Private Label', desc: isAr ? 'تركيب وزجاجات مخصصة' : 'Formulation & bespoke flacons', href: '?family=Finished%20perfume' },
              { icon: '🔥', title: isAr ? 'بخور وعود مبخّر' : 'Bakhoor & Incense', desc: isAr ? 'رقائق معتّقة' : 'Cured resin chips', href: '?family=Bakhoor%2Fincense' },
              { icon: '🗺', title: isAr ? 'خريطة الأقاليم' : 'Origins Map', desc: isAr ? '249 دولة موثقة' : '249 documented territories', href: `/${locale}/world` },
            ].map((tile) => (
              <Link
                key={tile.title}
                href={tile.href.startsWith('/') ? tile.href : `/${locale}/directory${tile.href}`}
                className="tile"
              >
                <div className="tile-icon">{tile.icon}</div>
                <h3 className="tile-title">{tile.title}</h3>
                <p className="tile-count">{tile.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==============================================================
          5. COUNTERFEIT AWARENESS — the one terracotta accent
          ============================================================== */}
      <section className="section section-white">
        <div className="container">
          <div className="counterfeit-hub">
            <div className="counterfeit-hub-header">
              <span className="badge badge-crimson" style={{ background: 'var(--terracotta-tint)', color: 'var(--terracotta)', borderColor: '#e8d5cf' }}>
                <AlertTriangle size={11} />
                {isAr ? 'دليل كشف الغش التجاري' : 'Counterfeit Awareness'}
              </span>
              <h2 className="h2" style={{ marginTop: 16 }}>
                {isAr ? 'معظم ما يباع كـ "عود طبيعي" ليس حقيقياً' : 'Much of the Agarwood Sold Online Isn’t Authentic.'}
              </h2>
              <p className="lede">
                {isAr
                  ? 'التعطير الكيميائي، طلاء الراتنج السطحي، وتزييف درجات الغطاس شائعة جداً. هذه أبرز 4 أشكال للغش التجاري.'
                  : 'Synthetic scenting, chemical injection with plasticizers, and inflated sinking grades are ubiquitous in open marketplaces. Here are the four primary deceptions.'}
              </p>
            </div>

            <div className="grid-2" style={{ gap: 14 }}>
              <div className="counterfeit-item">
                <h4>{isAr ? '❌ خشب غطاس مزيف (حقن الرصاص والشمع)' : '❌ Artificial Sinking Wood (Lead & Wax Injection)'}</h4>
                <p>
                  {isAr
                    ? 'خشب بري منخفض الجودة يُحقن بالرصاص المنصوب أو شمع الأسنان ليبدو ثقيلاً كأنه غطاس. يُكشف بالأشعة وفحص رائحة الاحتراق.'
                    : 'Low-grade wild timber injected with molten lead shot, dental wax, or synthetic glue to simulate heavy underwater sinker density. Verified via X-ray and burning aroma testing.'}
                </p>
              </div>
              <div className="counterfeit-item">
                <h4>{isAr ? '❌ تخفيف بالبلاستيك والمواد الكيميائية' : '❌ Plasticizer & Booster Adulteration'}</h4>
                <p>
                  {isAr
                    ? 'زيوت العود مخففة بمذيبات صناعية عديمة الرائحة ومقواة بمواد كيميائية عطرية مقلدة. يُكشف بالتحليل الكروماتوغرافي.'
                    : 'Oud oils diluted with odorless synthetic solvents (dipropylene glycol) or fortified with chemical aromachemicals to fake longevity. Verified via GC-MS chromatography.'}
                </p>
              </div>
              <div className="counterfeit-item">
                <h4>{isAr ? '❌ انتحال المنشأ النباتي والجغرافي' : '❌ Misrepresented Botanical Origins'}</h4>
                <p>
                  {isAr
                    ? 'خشب مستزرع يُباع على أنه عود أسام بري قديم بفارق سعر عشرة أضعاف. يُكشف بتتبع المنشأ المعتمد ومراجعة المقطر.'
                    : 'Plantation-grown A. crassna falsely marketed as wild vintage Assam A. agallocha to command 10x price markups. Verified via certified origin tracing and distiller audit.'}
                </p>
              </div>
              <div className="counterfeit-item">
                <h4>{isAr ? '❌ وثائق تصدير سايتس مزورة' : '❌ Fabricated CITES Export Documentation'}</h4>
                <p>
                  {isAr
                    ? 'طرود دولية غير موثقة تُصادر من الجمارك بسبب تصاريح مزورة أو حصص غير مسجلة. يُكشف بالمطابقة المباشرة مع سجلات الغابات الوطنية.'
                    : 'Uncertified international parcels seized by customs due to counterfeit permits or unrecorded quotas. Verified via cross-check against official national forestry registries.'}
                </p>
              </div>
            </div>

            <div className="text-center" style={{ marginTop: 32 }}>
              <Link href={`/${locale}/guides`} className="btn btn-outline">
                {isAr ? 'اقرأ الدليل التوثيقي الكامل ←' : 'Explore the Full Authenticity Guide →'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          6. FEATURED PRODUCERS — scroll-snap carousel
          ============================================================== */}
      <FeaturedCarousel
        businesses={businesses as any}
        locale={locale}
        title={isAr ? 'نخبة معامل التقطير والمزارع المستدامة' : 'Featured Distillers & Accredited Plantations'}
        subtitle={
          isAr
            ? 'اسحب لاستكشاف شبكة المنتجين المعتمدين — كل ملف موثّق ميدانياً.'
            : 'Scroll through the verified producer network — every profile is field-documented.'
        }
      />

      {/* ==============================================================
          7. SOURCING ASSISTANT — the one dark green field
          ============================================================== */}
      <section className="section section-green grain">
        <div className="container">
          <div className="split-editorial">
            <div style={{ position: 'relative', zIndex: 1 }}>
              <span className="eyebrow eyebrow-no-rule">{isAr ? 'مساعد التوريد' : 'Sourcing Assistant'}</span>
              <h2 className="h2" style={{ marginTop: 14 }}>
                {isAr ? 'اطرح سؤالك واحصل على ترشيح فوري' : 'Ask a Question, Get a Matched Answer'}
              </h2>
              <p className="lede">
                {isAr
                  ? 'يعمل المساعد مباشرة على سجل OudGuide الموثق: 249 دولة ومقالات مُراجَعة و67 مواصفة توريد شرطية. يطابق متطلباتك مع المنتجين المسجلين ويشرح الأقاليم والتقطير وسياسات سايتس. ويعمل على النسخة العلنية التي حُذفت منها حقول الاتصال على الخادم.'
                  : 'The assistant reads OudGuide\'s documented register directly: 249 territories, reviewed articles, and 67 conditional RFQ specifications. It matches your requirements against listed producers and explains terroirs, distillation, and CITES policy. It operates on the public projection, in which contact fields have already been removed on the server.'}
              </p>
              <div className="cluster" style={{ marginTop: 28 }}>
                <Link href={`/${locale}/sourcing`} className="btn btn-gold btn-lg">
                  {isAr ? 'ابدأ المحادثة ←' : 'Start the conversation →'}
                </Link>
                <Link href={`/${locale}/directory/map`} className="btn btn-dark btn-lg">
                  {isAr ? 'خريطة المنتجين' : 'Producer Map'}
                </Link>
              </div>
            </div>

            <div className="stack-3" style={{ position: 'relative', zIndex: 1 }}>
              {[
                { q: isAr ? 'أي مقطر يوفّر دهن عود معتقاً؟' : 'Which distillers ship aged oud oil?', a: isAr ? 'يطابق المساعد الإقليم ونوع الصنف ودرجة الطلب.' : 'Matches terroir, product family, and volume band.' },
                { q: isAr ? 'كيف أكشف العود المزيف؟' : 'How do I spot fake agarwood?', a: isAr ? 'يلخص أشكال الغش الأربعة وطرق الكشف المخبرية.' : 'Summarises the four fraud types and lab detection methods.' },
                { q: isAr ? 'هل أحتاج تصريح سايتس؟' : 'Do I need a CITES permit?', a: isAr ? 'يشرح متطلبات الملحق الثاني والتقييم غير الضار.' : 'Explains Appendix II duties and Non-Detriment Findings.' },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.16)',
                    borderRadius: 6,
                    padding: '18px 20px',
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 500, color: '#ffffff', marginBottom: 4 }}>
                    “{item.q}”
                  </div>
                  <div style={{ fontSize: '0.84rem', color: 'rgba(232,239,233,0.7)', lineHeight: 1.6 }}>{item.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          8. FOUR-STEP PROTOCOL
          ============================================================== */}
      <section className="section section-sage">
        <div className="container">
          <div className="section-head section-head-center">
            <span className="eyebrow">
              <ShieldCheck size={13} />
              {isAr ? 'بروتوكول الربط المحايد' : 'Neutral Matching Protocol'}
            </span>
            <h2 className="h2">
              {isAr ? 'كيف تعمل خدمة الربط التجاري المحايدة؟' : 'How the Neutral Matching Service Works'}
            </h2>
            <p className="lede">
              {isAr
                ? 'صُممت المنصة لضمان النزاهة وحماية خصوصية المشترين، وتقديم خدمات التوريد دون أي استبدال صامت للموردين.'
                : 'Engineered for transparency, buyer data protection, and verified supplier accountability.'}
            </p>
          </div>

          <div className="grid-4">
            <div className="step-tile">
              <div className="step-tile-num">01</div>
              <h3 className="step-tile-title">{isAr ? 'المتطلبات الفنية' : 'Technical RFQ'}</h3>
              <p className="step-tile-desc">
                {isAr
                  ? 'املأ الاستمارة التدريجية (الصنف، الكمية، بلد الوصول، درجة العود، شروط فحص العينات).'
                  : 'Submit detailed material requirements across 67 conditional specifications with target pricing and delivery.'}
              </p>
            </div>
            <div className="step-tile">
              <div className="step-tile-num crimson">02</div>
              <h3 className="step-tile-title">{isAr ? 'التحقق برمز التحقق' : 'OTP Verification'}</h3>
              <p className="step-tile-desc">
                {isAr
                  ? 'رمز تحقق لمرة واحدة من 6 أرقام يؤكد ملكيتك لوسيلة الاتصال قبل أي خطوة.'
                  : 'A 6-digit one-time passcode confirms your contact channel prior to brief authorization.'}
              </p>
            </div>
            <div className="step-tile">
              <div className="step-tile-num emerald">03</div>
              <h3 className="step-tile-title">{isAr ? 'موجز مشفر' : 'Redacted Brief'}</h3>
              <p className="step-tile-desc">
                {isAr
                  ? 'يطلع الموردون المؤهلون على المواصفات الفنية فقط دون أي اسم أو بريد أو هاتف.'
                  : 'Verified partners inspect technical specifications with zero buyer identifying data exposed.'}
              </p>
            </div>
            <div className="step-tile">
              <div className="step-tile-num charcoal">04</div>
              <h3 className="step-tile-title">{isAr ? 'موافقتك الصريحة' : 'Buyer Approval'}</h3>
              <p className="step-tile-desc">
                {isAr
                  ? 'تراجع المرشحين وتعتمد بالاسم حتى 3 موردين قبل تسليم بياناتك لهم.'
                  : 'Review matching distillers and explicitly approve up to 3 named businesses before contact release.'}
              </p>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: 44 }}>
            <Link href={`/${locale}/rfq`} className="btn btn-primary btn-lg">
              {isAr ? 'تقديم طلب توريد بالجملة الآن ←' : 'Start Your Wholesale Requirement →'}
            </Link>
          </div>
        </div>
      </section>

      {/* ==============================================================
          9. FINAL CTA
          ============================================================== */}
      <section className="section section-white">
        <div className="container container-narrow text-center">
          <span className="eyebrow eyebrow-no-rule" style={{ justifyContent: 'center' }}>
            <ArrowRight size={13} />
            {isAr ? 'ابدأ اليوم' : 'Begin Today'}
          </span>
          <h2 className="h2" style={{ marginTop: 14 }}>
            {isAr ? 'انضم إلى كبار المشترين والموردين المعتمدين' : 'Join the World’s Institutional Buyers & Verified Producers'}
          </h2>
          <p className="lede" style={{ margin: '0 auto 30px' }}>
            {isAr
              ? `اكتشف ${articleCounts.reviewed} مقالاً مُراجَعاً و${directoryCounts.published} سجلاً منشوراً في الدليل، و${articleCounts.briefs} موجزاً بحثياً قيد الإعداد. وتُحجب بيانات الاتصال افتراضياً، ولا تُسلَّم بيانات المشتري إلا لمورد يعتمده المشتري بالاسم.`
              : `Explore ${articleCounts.reviewed} reviewed articles and ${directoryCounts.published} published directory records, with ${articleCounts.briefs} research briefs in preparation. Contact fields are withheld by default, and a buyer’s details are released only to a supplier they approve by name.`}
          </p>
          <div className="cluster" style={{ justifyContent: 'center' }}>
            <Link href={`/${locale}/rfq`} className="btn btn-primary btn-lg">
              {isAr ? 'طلب توريد جديد ←' : 'Submit Wholesale RFQ →'}
            </Link>
            <Link href={`/${locale}/membership`} className="btn btn-outline btn-lg">
              {isAr ? 'انضم كعضو سنوي (1,200 درهم)' : 'Annual Membership (AED 1,200)'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

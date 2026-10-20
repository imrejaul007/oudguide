import Link from 'next/link';
import { domain } from '@/lib/data';
import { HeroSearch } from '@/components/home/hero-search';
import { FeaturedCarousel } from '@/components/business/featured-carousel';
import { Sparkles, AlertTriangle, Compass, Award, ShieldCheck, ArrowRight } from 'lucide-react';

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
          1. CINEMATIC MAJLIS HERO
          ============================================================== */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-tag">
            <Sparkles size={13} />
            <span>
              {isAr
                ? 'المرجع التوثيقي العالمي للعود الطبيعي والعطور'
                : 'The Global Reference for Natural Oud & Heritage Fragrance'}
            </span>
          </div>

          <h1 className="hero-title">
            {isAr
              ? 'خدمة الربط التجاري المحايدة لتوريد العود الطبيعي بالجملة.'
              : 'Direct Sourcing for Natural Oud, Artisan Oils & Verified Wholesale Introductions.'}
            <span className="accent">
              {isAr
                ? 'ربط المنتجين المعتمدين بكبار المشترين الدوليين.'
                : 'Connecting certified distillers with institutional buyers worldwide.'}
            </span>
          </h1>

          <p className="hero-lead">
            {isAr
              ? 'نربط دور العطور والمشترين التجاريين والمقتنين بأفضل المقطرين والمزارع المعتمدة في أسام، كمبوديا، تايلاند، وإندونيسيا. حماية تامة لبيانات المشترين مع اشتراط الموافقة الصريحة قبل تسليم بيانات الاتصال.'
              : 'Connecting bespoke perfume houses, institutional buyers, and luxury collectors with certified distillers and sustainable estates across Assam, Indochina, and the Malay Archipelago. Zero contact leakage with mandatory buyer approval.'}
          </p>

          <HeroSearch locale={locale} />
        </div>
      </section>

      {/* ==============================================================
          2. METRICS RIBBON
          ============================================================== */}
      <div className="container">
        <div className="metrics">
          <div className="metric">
            <div className="metric-value">772</div>
            <div className="metric-label">{isAr ? 'مسار بحثي معتمد' : 'Researched Route Briefs'}</div>
          </div>
          <div className="metric">
            <div className="metric-value">249</div>
            <div className="metric-label">{isAr ? 'دولة وإقليم' : 'Documented Territories'}</div>
          </div>
          <div className="metric">
            <div className="metric-value">83</div>
            <div className="metric-label">{isAr ? 'دليل علمي متعمق' : 'Editorial & Sourcing Guides'}</div>
          </div>
          <div className="metric">
            <div className="metric-value">100<span className="unit">%</span></div>
            <div className="metric-label">{isAr ? 'حماية بيانات الاتصال' : 'Zero Contact Leakage'}</div>
          </div>
        </div>
      </div>

      {/* ==============================================================
          3. FOUR DISCIPLINES — Wood / Oil / Attar / Private Label
          ============================================================== */}
      <section className="section section-pearl">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 56, maxWidth: 760, marginLeft: 'auto', marginRight: 'auto' }}>
            <div className="hero-eyebrow-line">
              <span>{isAr ? 'التصنيفات الأربعة المعتمدة' : 'Four Core Disciplines'}</span>
            </div>
            <h2 className="h2 text-crimson">
              {isAr ? 'أصناف العود ومواد العطور الموثقة' : 'Curated Fragrance & Agarwood Disciplines'}
            </h2>
            <p className="lede">
              {isAr
                ? 'نوثق المصادر الأصلية لكل صنف مع شروط التقطير وفحوصات السلامة المخبرية ولوائح التصدير.'
                : 'Every category is mapped to documented botanical habitats, extraction systems, GC-MS lab protocols, and CITES export regulations.'}
            </p>
          </div>

          <div className="grid-2">
            {/* DISCIPLINE 1: ARTISANAL WOOD */}
            <article className="discipline-card">
              <div className="discipline-cover">
                <div className="discipline-cover-badges">
                  <span className="badge badge-glass-light">Natural Wood</span>
                  <span className="badge badge-glass">CITES II</span>
                </div>
                <img src="/images/hero-oud-chip.svg" alt="Artisanal Agarwood Wood" />
              </div>
              <div className="discipline-body">
                <span className="badge badge-crimson" style={{ marginBottom: 12 }}>Forest & Plantation</span>
                <h3 className="discipline-title">{isAr ? 'خشب العود الطبيعي' : 'Artisanal Agarwood'}</h3>
                <p className="discipline-desc">
                  {isAr
                    ? 'رقائق غابات طبيعية، عود غطاس (Sinking Grade)، وخشب مستزرع مستدام من أسام وكاليمانتان وكمبوديا.'
                    : 'Wild forest heartwood, sinking underwater grades, and sustainably inoculated plantation chips with certified resin density.'}
                </p>
                <div className="discipline-notes">
                  Balsamic · Smoky · Ancient Wood
                </div>
              </div>
            </article>

            {/* DISCIPLINE 2: PURE DEHN AL OUD OIL */}
            <article className="discipline-card">
              <div className="discipline-cover">
                <div className="discipline-cover-badges">
                  <span className="badge badge-glass-light">Hydro-Distillation</span>
                  <span className="badge badge-glass">Copper Alembic</span>
                </div>
                <img src="/images/hero-dehn-al-oud.svg" alt="Pure Dehn Al Oud Oil" />
              </div>
              <div className="discipline-body">
                <span className="badge badge-gold" style={{ marginBottom: 12 }}>Pure Distillation</span>
                <h3 className="discipline-title">{isAr ? 'دهن العود الخالص' : 'Pure Dehn Al Oud'}</h3>
                <p className="discipline-desc">
                  {isAr
                    ? 'تقطير قدور النحاس التقليدية والبخار منخفض الحرارة. زيوت معتقة هندي وبراشين وكوه كونغ ومروكي.'
                    : 'Traditional copper alembic deg and modern steam extractions. Aged vintages from Assam, Koh Kong, Trat, and Merauke.'}
                </p>
                <div className="discipline-notes">
                  Leather · Animalic · Warm Hay · Honey
                </div>
              </div>
            </article>

            {/* DISCIPLINE 3: HERITAGE ATTAR */}
            <article className="discipline-card">
              <div className="discipline-cover">
                <div className="discipline-cover-badges">
                  <span className="badge badge-glass-light">Sandalwood Base</span>
                  <span className="badge badge-glass">Mysore</span>
                </div>
                <img src="/images/hero-attar-still.svg" alt="Traditional Copper Deg Distillation" />
              </div>
              <div className="discipline-body">
                <span className="badge badge-emerald" style={{ marginBottom: 12 }}>Heritage Attar</span>
                <h3 className="discipline-title">{isAr ? 'العطور الشرقية والمخلطات' : 'Heritage Attars'}</h3>
                <p className="discipline-desc">
                  {isAr
                    ? 'تقطير مشترك على قاعدة خشب الصندل النقي. شمامة العنبر، الورد الدمشقي، الطين الهندي والمسك الطبيعي.'
                    : 'True hydro-distillations over pure Mysore sandalwood base. Shamamatul Amber, Ruh Gulab, Mitti, and Royal Musk accords.'}
                </p>
                <div className="discipline-notes">
                  Earthy · Floral · Sacred Amber
                </div>
              </div>
            </article>

            {/* DISCIPLINE 4: PRIVATE LABEL */}
            <article className="discipline-card">
              <div className="discipline-cover">
                <div className="discipline-cover-badges">
                  <span className="badge badge-glass-light">IFRA Certified</span>
                  <span className="badge badge-glass">GC-MS</span>
                </div>
                <img src="/images/hero-private-label.svg" alt="Private Label Crystal Flacon" />
              </div>
              <div className="discipline-body">
                <span className="badge badge-charcoal" style={{ marginBottom: 12 }}>Private Label</span>
                <h3 className="discipline-title">{isAr ? 'التصنيع الخاص والتعبئة' : 'Private Label & Flacons'}</h3>
                <p className="discipline-desc">
                  {isAr
                    ? 'تركيب وتصنيع العطور الفاخرة (Extrait de Parfum)، مع مطابقة معايير إفرا العالمية وزجاجات كريستال مخصصة.'
                    : 'Custom formulation, IFRA safety compliance, bespoke crystal flacons, and low-MOQ luxury production runs.'}
                </p>
                <div className="discipline-notes">
                  IFRA · GC-MS Lab Tested · Crystal Flacons
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ==============================================================
          4. ARABESQUE DIVIDER
          ============================================================== */}
      <div className="section-divider">
        <img src="/ornaments/arabesque-border.svg" alt="" aria-hidden="true" />
      </div>

      {/* ==============================================================
          5. COUNTERFEIT AWARENESS HUB
          ============================================================== */}
      <section className="section section-cream">
        <div className="container">
          <div className="counterfeit-hub">
            <div className="counterfeit-hub-header">
              <span className="badge badge-crimson" style={{ marginBottom: 18 }}>
                <AlertTriangle size={12} />
                {isAr ? 'دليل كشف الغش التجاري' : 'Counterfeit Awareness'}
              </span>
              <h2 className="h2 text-crimson">
                {isAr ? 'معظم ما يباع كـ "عود طبيعي" ليس حقيقياً' : 'Much of the Agarwood Sold Online Isn’t Authentic.'}
              </h2>
              <p className="lede">
                {isAr
                  ? 'التعطير الكيميائي، طلاء الراتنج السطحي، وتزييف درجات الغطاس شائعة جداً. هذه أبرز 4 أشكال للغش التجاري.'
                  : 'Synthetic scenting, chemical injection with plasticizers, and inflated sinking grades are ubiquitous in open marketplaces. Here are the four primary deceptions.'}
              </p>
            </div>

            <div className="grid-2" style={{ gap: 16 }}>
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
                    ? 'زيوت العود مخففة بمذيبات صناعية عديمة الرائحة (DPG) ومقواة بمواد كيميائية عطرية مقلدة. يُكشف بجهاز GC-MS.'
                    : 'Oud oils diluted with odorless synthetic solvents (dipropylene glycol) or fortified with chemical aromachemicals to fake longevity. Verified via GC-MS chromatography.'}
                </p>
              </div>
              <div className="counterfeit-item">
                <h4>{isAr ? '❌ انتحال المنشأ النباتي والجغرافي' : '❌ Misrepresented Botanical Origins'}</h4>
                <p>
                  {isAr
                    ? 'خشب A. crassna مستزرع يُباع على أنه عود أسام بري قديم بفارق سعر 10 أضعاف. يُكشف بتتبع المنشأ المعتمد ومراجعة المقطر.'
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

            <div className="text-center" style={{ marginTop: 36 }}>
              <Link href={`/${locale}/guides`} className="btn btn-outline">
                {isAr ? 'اقرأ الدليل التوثيقي الكامل ←' : 'Explore the Full Authenticity Guide →'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          6. REGIONAL OLFactory TERROIRS (DARK MAJLIS SECTION)
          ============================================================== */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48, maxWidth: 780, marginLeft: 'auto', marginRight: 'auto' }}>
            <div className="hero-eyebrow-line" style={{ color: 'var(--color-gold-light)' }}>
              <span><Compass size={14} style={{ display: 'inline', verticalAlign: 'middle', marginInlineEnd: 6 }} />{isAr ? 'الخريطة الشمية الإقليمية' : 'Regional Olfactory Terroirs'}</span>
            </div>
            <h2 className="h2" style={{ color: '#f5e1a4' }}>
              {isAr ? 'الأقاليم الجغرافية وبصماتها الشمية' : 'Distinct Geographic Terroirs of the Oud World'}
            </h2>
            <p className="lede" style={{ color: '#a8a094' }}>
              {isAr
                ? 'تختلف الرائحة والمكونات الكيميائية للعود بحسب نوع الشجرة والمناخ وفطريات العدوى وطريقة التقطير.'
                : 'Soil mineralogy, indigenous fungus species, and ambient humidity create radically distinct olfactory signatures across major producing regions.'}
            </p>
          </div>

          <div className="grid-4">
            <div className="terroir-card">
              <div className="terroir-flag">🇮🇳 India · Assam</div>
              <div className="terroir-species">Aquilaria agallocha</div>
              <p className="terroir-notes">
                Deep animalic barnyard, tanned saddle leather, dried dark fruits, and rich sweet tobacco smoke.
              </p>
            </div>
            <div className="terroir-card">
              <div className="terroir-flag">🇰🇭 Cambodia · Koh Kong</div>
              <div className="terroir-species">Aquilaria crassna</div>
              <p className="terroir-notes">
                Ripe red cherries, sun-dried figs, golden wildflower honey, and smooth resinous incense.
              </p>
            </div>
            <div className="terroir-card">
              <div className="terroir-flag">🇹🇭 Thailand · Trat</div>
              <div className="terroir-species">Aquilaria crassna</div>
              <p className="terroir-notes">
                Delicate sweet florals, ripe peach skin, light golden nectar, and clean polished sandalwood.
              </p>
            </div>
            <div className="terroir-card">
              <div className="terroir-flag">🇮🇩 Indonesia · Kalimantan</div>
              <div className="terroir-species">Aquilaria malaccensis</div>
              <p className="terroir-notes">
                Airy jungle rain, cooling medicinal camphor, green herbal resins, and creamy vanillic wood.
              </p>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: 48 }}>
            <Link href={`/${locale}/world`} className="btn btn-gold btn-lg">
              {isAr ? 'استكشف 249 دولة في الخريطة العالمية ←' : 'Explore All 249 World Terroirs →'}
            </Link>
          </div>
        </div>
      </section>

      {/* ==============================================================
          7. FEATURED PRODUCERS — scroll-snap showcase carousel
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
          7b. SOURCE BY MATERIAL — tile grid (IndexOrbit category pattern)
          ============================================================== */}
      <section className="section-tight" style={{ background: 'var(--bg-sandstone)' }}>
        <div className="container">
          <div className="row-between" style={{ marginBottom: 28 }}>
            <div>
              <span className="eyebrow eyebrow-crimson" style={{ display: 'block', marginBottom: 8 }}>
                {isAr ? 'تصفح حسب الصنف' : 'Browse by Material'}
              </span>
              <h2 className="h2 text-crimson">
                {isAr ? 'اختر خط الإنتاج الذي تبحث عنه' : 'Choose the Production Line You Need'}
              </h2>
            </div>
            <Link href={`/${locale}/directory`} className="btn btn-outline btn-sm">
              {isAr ? 'الكل ←' : 'All materials →'}
            </Link>
          </div>

          <div className="tile-grid">
            {[
              { icon: '🪵', title: isAr ? 'خشب العود الطبيعي' : 'Natural Agarwood', desc: isAr ? 'رقائق برية ومزارع مستدامة' : 'Wild forest chips & plantations', href: '?role=distiller' },
              { icon: '🧪', title: isAr ? 'دهن العود الخالص' : 'Pure Dehn Al Oud', desc: isAr ? 'تقطير نحاسي و بخار' : 'Copper deg & steam extraction', href: '?role=wholesaler' },
              { icon: '🌹', title: isAr ? 'العطور الشرقية' : 'Heritage Attars', desc: isAr ? 'قاعدة صندل نقية' : 'Pure sandalwood base', href: '?role=wholesaler' },
              { icon: '✨', title: isAr ? 'التصنيع الخاص' : 'Private Label', desc: isAr ? 'تركيب وزجاجات مخصصة' : 'Formulation & bespoke flacons', href: '?role=wholesaler' },
              { icon: '🔥', title: isAr ? 'بخور وعود مبخّر' : 'Bakhoor & Incense', desc: isAr ? 'رقائق معتّقة' : 'Cured resin chips', href: '?role=wholesaler' },
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
          8. FOUR-STEP NEUTRAL MATCHING PROTOCOL
          ============================================================== */}
      <section className="section section-cream">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 56, maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}>
            <div className="hero-eyebrow-line">
              <span><ShieldCheck size={14} style={{ display: 'inline', verticalAlign: 'middle', marginInlineEnd: 6 }} />{isAr ? 'بروتوكول الربط المحايد' : 'Neutral Matching Protocol'}</span>
            </div>
            <h2 className="h2 text-crimson">
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
              <h3 className="step-tile-title">{isAr ? 'التحقق بـ OTP' : 'OTP Verification'}</h3>
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

          <div className="text-center" style={{ marginTop: 48 }}>
            <Link href={`/${locale}/rfq`} className="btn btn-gold btn-lg">
              {isAr ? 'تقديم طلب توريد بالجملة الآن ←' : 'Start Your Wholesale Requirement →'}
            </Link>
          </div>
        </div>
      </section>

      {/* ==============================================================
          8b. SOURCING ASSISTANT CTA
          ============================================================== */}
      <section className="section section-dark">
        <div className="container">
          <div className="grid-2" style={{ gap: 40, alignItems: 'center' }}>
            <div>
              <div className="hero-eyebrow-line" style={{ justifyContent: 'flex-start' }}>
                <span><Sparkles size={14} style={{ display: 'inline', verticalAlign: 'middle', marginInlineEnd: 6 }} />{isAr ? 'مساعد التوريد' : 'Sourcing Assistant'}</span>
              </div>
              <h2 className="h2" style={{ color: '#f5e1a4' }}>
                {isAr ? 'اطرح سؤالك واحصل على ترشيح فوري' : 'Ask a Question, Get a Matched Answer'}
              </h2>
              <p className="lede" style={{ color: '#a8a094' }}>
                {isAr
                  ? 'يعمل المساعد مباشرة على سجل OudGuide الموثق: 249 دولة و772 مساراً بحثياً و67 مواصفة RFQ شرطية. يطابق متطلباتك مع المنتجين المؤهلين ويشرح الأقاليم والتقطير وسياسات سايتس — دون كشف أي بيانات اتصال.'
                  : 'The assistant reads OudGuide\'s documented register directly: 249 territories, 772 route briefs, and 67 conditional RFQ specifications. It matches your requirements against qualified producers and explains terroirs, distillation, and CITES policy — without exposing a single contact detail.'}
              </p>
              <div className="cluster" style={{ marginTop: 24 }}>
                <Link href={`/${locale}/sourcing`} className="btn btn-gold btn-lg">
                  {isAr ? 'ابدأ المحادثة ←' : 'Start the conversation →'}
                </Link>
                <Link href={`/${locale}/directory/map`} className="btn btn-dark btn-lg">
                  {isAr ? 'خريطة المنتجين' : 'Producer Map'}
                </Link>
              </div>
            </div>

            <div className="stack-3">
              {[
                { q: isAr ? 'أي مقطر يوفّر دهن عود معتقاً؟' : 'Which distillers ship aged oud oil?', a: isAr ? 'يطابق المساعد الإقليم ونوع الصنف ودرجة الطلب.' : 'Matches terroir, product family, and volume band.' },
                { q: isAr ? 'كيف أكشف العود المزيف؟' : 'How do I spot fake agarwood?', a: isAr ? 'يلخص أشكال الغش الأربعة وطرق الكشف المخبرية.' : 'Summarises the four fraud types and lab detection methods.' },
                { q: isAr ? 'هل أحتاج تصريح سايتس؟' : 'Do I need a CITES permit?', a: isAr ? 'يشرح متطلبات الملحق الثاني والتقييم غير الضار.' : 'Explains Appendix II duties and Non-Detriment Findings.' },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(197,155,39,0.25)',
                    borderRadius: 12,
                    padding: '18px 20px',
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 600, color: '#f5ede0', marginBottom: 4 }}>
                    “{item.q}”
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#a8a094', lineHeight: 1.55 }}>{item.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          9. FINAL CTA PANEL
          ============================================================== */}
      <section className="section">
        <div className="container container-narrow text-center">
          <div className="card-frame" style={{ padding: 'clamp(36px, 5vw, 64px) clamp(28px, 5vw, 56px)' }}>
            <span className="eyebrow eyebrow-crimson" style={{ marginBottom: 14 }}>
              <ArrowRight size={14} />
              {isAr ? 'ابدأ اليوم' : 'Begin Today'}
            </span>
            <h2 className="h2 text-crimson">
              {isAr ? 'انضم إلى كبار المشترين والموردين المعتمدين' : 'Join the World’s Institutional Buyers & Verified Producers'}
            </h2>
            <p className="lede" style={{ marginBottom: 32 }}>
              {isAr
                ? 'اكتشف 772 مساراً بحثياً و249 دولة و83 دليلاً معمارياً متعمقاً. كل ذلك مع حماية بيانات اتصال صارمة.'
                : 'Discover 772 researched route briefs, 249 documented countries, and 83 in-depth editorial guides. All under strict contact data protection.'}
            </p>
            <div className="cluster" style={{ justifyContent: 'center' }}>
              <Link href={`/${locale}/rfq`} className="btn btn-gold btn-lg">
                {isAr ? 'طلب توريد جديد ←' : 'Submit Wholesale RFQ →'}
              </Link>
              <Link href={`/${locale}/membership`} className="btn btn-outline btn-lg">
                {isAr ? 'انضم كعضو سنوي (1,200 درهم)' : 'Annual Membership (AED 1,200)'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
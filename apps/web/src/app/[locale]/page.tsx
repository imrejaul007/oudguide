import Link from 'next/link';
import Image from 'next/image';
import { domain, seed } from '@/lib/data';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === 'ar';

  const businesses = domain.listBusinesses();

  return (
    <div>
      {/* 1. CINEMATIC LUXURY HERO SECTION */}
      <section className="luxury-hero" style={{ padding: '72px 48px', position: 'relative' }}>
        <div className="hero-glow-1"></div>
        <div className="hero-glow-2"></div>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '960px' }}>
          <div className="hero-tag">
            <span>✨</span>
            <span>{isAr ? 'المرجع التوثيقي العالمي لتجارة العود والزيوت العطرية النادرة' : 'The Global Authority on Natural Oud & Fragrance Sourcing'}</span>
          </div>

          <h1 className="hero-headline font-display" style={{ fontSize: '46px', lineHeight: 1.15, margin: '0 0 18px', color: '#ffffff' }}>
            {isAr
              ? 'خدمة الربط التجاري المحايدة لتوريد العود الطبيعي والزيوت العطرية بالجملة.'
              : 'Direct Sourcing for Natural Oud, Artisan Oils & Verified Wholesale Introductions.'}
          </h1>

          <p className="hero-lead" style={{ fontSize: '18px', color: '#dedbd2', maxWidth: '820px', margin: '0 0 36px', lineHeight: 1.65 }}>
            {isAr
              ? 'نربط دور العطور والمشترين التجاريين والمقتنين بأفضل المقطرين والمزارع المعتمدة في أسام، كمبوديا، تايلاند، وإندونيسيا. حماية تامة لبيانات المشترين مع اشتراط الموافقة الصريحة قبل تسليم معلومات الاتصال.'
              : 'Connecting bespoke perfume houses, institutional buyers, and luxury collectors directly with certified distillers and sustainable estates across Assam, Indochina, and the Malay Archipelago. Zero contact leakage with mandatory buyer approval.'}
          </p>

          {/* DUAL-MODE QUICK SEARCH BAR */}
          <div className="search-box-hero" style={{ padding: '10px 14px', borderRadius: '14px' }}>
            <input
              type="text"
              placeholder={isAr ? 'ابحث بالصنف، المنطقة، أو فصيلة الشجرة (مثل Aquilaria Agallocha)...' : 'Search by material, region (Assam, Trat, Koh Kong), or botanical species...'}
              style={{ fontSize: '16px' }}
            />
            <select defaultValue="Oud oil" style={{ fontSize: '14px', padding: '10px 16px' }}>
              <option value="Oud wood">{isAr ? 'خشب عود وبخور' : 'Oud Wood / Chips'}</option>
              <option value="Oud oil">{isAr ? 'دهن عود خالص' : 'Pure Dehn Al Oud'}</option>
              <option value="Attar">{isAr ? 'عطور شرقية وزيوت' : 'Artisan Attars'}</option>
              <option value="Finished perfume">{isAr ? 'تصنيع عطور خاص' : 'Private Label Fragrance'}</option>
            </select>
            <Link href={`/${locale}/rfq`} className="btn-gold" style={{ padding: '12px 28px', whiteSpace: 'nowrap' }}>
              <span>{isAr ? 'طلب تسعير' : 'Find Suppliers'}</span>
              <span>{isAr ? '←' : '→'}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. LIVE VERIFIED MARKET METRICS RIBBON */}
      <section className="metrics-ribbon" style={{ margin: '-20px 0 50px', position: 'relative', zIndex: 10 }}>
        <div className="metric-item">
          <div className="metric-value">772</div>
          <div className="metric-label">{isAr ? 'مسار بحثي وتوثيقي معتمد' : 'Researched Route Briefs'}</div>
        </div>
        <div className="metric-item">
          <div className="metric-value">249</div>
          <div className="metric-label">{isAr ? 'دولة وإقليم مسجل' : 'Documented Territories'}</div>
        </div>
        <div className="metric-item">
          <div className="metric-value">83</div>
          <div className="metric-label">{isAr ? 'دليل علمي وتجاري متعمق' : 'Editorial & Sourcing Guides'}</div>
        </div>
        <div className="metric-item">
          <div className="metric-value">100%</div>
          <div className="metric-label">{isAr ? 'حماية بيانات الاتصال للأساسيات' : 'Zero Contact Leakage'}</div>
        </div>
      </section>

      {/* 3. FOUR CURATED PRODUCT DISCIPLINES (WITH RICH SVG VISUALS) */}
      <section style={{ marginBottom: '70px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="hero-tag" style={{ background: '#fcf6e8', color: 'var(--color-gold-dark)', border: '1px solid rgba(197, 155, 39, 0.4)' }}>
            <span>🏺</span>
            <span>{isAr ? 'التصنيفات الأربعة المعتمدة' : 'Four Core Sourcing Disciplines'}</span>
          </div>
          <h2 className="font-display" style={{ fontSize: '36px', margin: '8px 0 12px', color: 'var(--color-crimson)' }}>
            {isAr ? 'أصناف العود ومواد العطور المعتمدة' : 'Curated Fragrance & Agarwood Disciplines'}
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '16.5px', maxWidth: '680px', margin: '0 auto' }}>
            {isAr
              ? 'نوثق المصادر الأصلية لكل صنف مع شروط التقطير وفحوصات السلامة المخبرية.'
              : 'Every material category is mapped to documented botanical habitats, extraction systems, and CITES export regulations.'}
          </p>
        </div>

        <div className="grid-4">
          {/* DISCIPLINE 1: ARTISANAL WOOD */}
          <div className="luxury-card" style={{ padding: 0 }}>
            <div style={{ height: '220px', width: '100%', position: 'relative', background: '#0e0c0a', borderBottom: '1px solid var(--color-border)' }}>
              <img
                src="/images/hero-oud-wood.svg"
                alt="Artisanal Agarwood Wood"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '24px' }}>
              <span className="badge-crimson" style={{ marginBottom: '8px' }}>Natural Wood</span>
              <h3 className="card-title font-display" style={{ fontSize: '20px', margin: '6px 0 10px' }}>
                {isAr ? 'خشب العود الطبيعي' : 'Artisanal Agarwood'}
              </h3>
              <p className="card-desc" style={{ fontSize: '13.5px', lineHeight: 1.6 }}>
                {isAr
                  ? 'رقائق غابات طبيعية، عود غطاس (Sinking Grade)، وخشب مستزرع مستدام من أسام وكاليمانتان وكمبوديا.'
                  : 'Wild forest heartwood, sinking underwater grades, and sustainably inoculated plantation chips with certified resin density.'}
              </p>
              <div style={{ fontSize: '12.5px', color: 'var(--color-gold-dark)', fontWeight: 700, borderTop: '1px solid #f0ece1', paddingTop: '10px' }}>
                Notes: Balsamic, Smoky, Ancient Wood
              </div>
            </div>
          </div>

          {/* DISCIPLINE 2: PURE DEHN AL OUD OIL */}
          <div className="luxury-card" style={{ padding: 0 }}>
            <div style={{ height: '220px', width: '100%', position: 'relative', background: '#120b05', borderBottom: '1px solid var(--color-border)' }}>
              <img
                src="/images/hero-dehn-al-oud.svg"
                alt="Pure Dehn Al Oud Oil"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '24px' }}>
              <span className="badge-gold" style={{ marginBottom: '8px' }}>Pure Distillation</span>
              <h3 className="card-title font-display" style={{ fontSize: '20px', margin: '6px 0 10px' }}>
                {isAr ? 'دهن العود الخالص' : 'Pure Dehn Al Oud'}
              </h3>
              <p className="card-desc" style={{ fontSize: '13.5px', lineHeight: 1.6 }}>
                {isAr
                  ? 'تقطير قدور النحاس التقليدية والبخار منخفض الحرارة. زيوت معتقة هندي وبراشين وكوه كونغ ومروكي.'
                  : 'Traditional copper alembic deg and modern steam extractions. Aged vintages from Assam, Koh Kong, Trat, and Merauke.'}
              </p>
              <div style={{ fontSize: '12.5px', color: 'var(--color-gold-dark)', fontWeight: 700, borderTop: '1px solid #f0ece1', paddingTop: '10px' }}>
                Notes: Leather, Animalic, Warm Hay, Honey
              </div>
            </div>
          </div>

          {/* DISCIPLINE 3: HERITAGE ATTAR */}
          <div className="luxury-card" style={{ padding: 0 }}>
            <div style={{ height: '220px', width: '100%', position: 'relative', background: '#110a08', borderBottom: '1px solid var(--color-border)' }}>
              <img
                src="/images/hero-attar-still.svg"
                alt="Traditional Copper Deg Distillation"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '24px' }}>
              <span className="badge-forest" style={{ marginBottom: '8px' }}>Traditional Attar</span>
              <h3 className="card-title font-display" style={{ fontSize: '20px', margin: '6px 0 10px' }}>
                {isAr ? 'العطور الشرقية والمخلطات' : 'Heritage Attars'}
              </h3>
              <p className="card-desc" style={{ fontSize: '13.5px', lineHeight: 1.6 }}>
                {isAr
                  ? 'تقطير مشترك على قاعدة خشب الصندل النقي. شمامة العنبر، الورد الدمشقي، الطين الهندي والمسك الطبيعي.'
                  : 'True hydro-distillations over pure Mysore sandalwood base. Shamamatul Amber, Ruh Gulab, Mitti, and Royal Musk accords.'}
              </p>
              <div style={{ fontSize: '12.5px', color: 'var(--color-gold-dark)', fontWeight: 700, borderTop: '1px solid #f0ece1', paddingTop: '10px' }}>
                Notes: Earthy, Floral, Sacred Amber
              </div>
            </div>
          </div>

          {/* DISCIPLINE 4: PRIVATE LABEL FLACONS */}
          <div className="luxury-card" style={{ padding: 0 }}>
            <div style={{ height: '220px', width: '100%', position: 'relative', background: '#0c0d12', borderBottom: '1px solid var(--color-border)' }}>
              <img
                src="/images/hero-private-label.svg"
                alt="Private Label Perfume Flacon"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '24px' }}>
              <span className="badge-crimson" style={{ marginBottom: '8px' }}>Private Label</span>
              <h3 className="card-title font-display" style={{ fontSize: '20px', margin: '6px 0 10px' }}>
                {isAr ? 'التصنيع الخاص والتعبئة' : 'Private Label & Flacons'}
              </h3>
              <p className="card-desc" style={{ fontSize: '13.5px', lineHeight: 1.6 }}>
                {isAr
                  ? 'تركيب وتصنيع العطور الفاخرة (Extrait de Parfum)، مع مطابقة معايير إفرا العالمية وزجاجات كريستال مخصصة.'
                  : 'Custom formulation, IFRA safety compliance certificates, bespoke crystal flacons, and low-MOQ luxury production runs.'}
              </p>
              <div style={{ fontSize: '12.5px', color: 'var(--color-gold-dark)', fontWeight: 700, borderTop: '1px solid #f0ece1', paddingTop: '10px' }}>
                Specs: IFRA Certified, GC-MS Lab Tested
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COUNTERFEIT WARNING & AUTHENTICITY HUB (AGARWOOD GUIDE INSIGHT) */}
      <section className="form-card" style={{ padding: '44px 40px', marginBottom: '70px', background: '#fffdf9', borderColor: 'var(--color-gold)' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center', marginBottom: '32px' }}>
          <span className="badge-crimson" style={{ fontSize: '12px', padding: '6px 14px' }}>
            ⚠️ {isAr ? 'دليل كشف الغش والتزييف التجاري' : 'Counterfeit Awareness & Authenticity Standard'}
          </span>
          <h2 className="font-display" style={{ fontSize: '32px', margin: '14px 0 10px', color: 'var(--color-crimson)' }}>
            {isAr ? 'معظم ما يباع كـ "عود طبيعي" عبر الإنترنت ليس حقيقياً' : 'Much of the Agarwood Sold Online Isn’t Authentic.'}
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '16px', lineHeight: 1.65 }}>
            {isAr
              ? 'التعطير الكيميائي، طلاء الراتنج السطحي، وتزييف درجات الغطاس شائعة جداً. هذه هي أبرز 4 أشكال للغش التجاري في الأسواق العالمية وكيف يكشفها فحص دليل العود.'
              : 'Synthetic scenting, chemical injection with DOP/DPG plasticizers, and inflated sinking grades are ubiquitous in open marketplaces. Here are the four primary deceptions verified by OudGuide protocols.'}
          </p>
        </div>

        <div className="grid-2" style={{ gap: '20px' }}>
          <div style={{ background: '#fdfbf6', padding: '22px', borderRadius: '10px', border: '1px solid var(--color-border)' }}>
            <h4 style={{ color: 'var(--color-crimson)', margin: '0 0 6px', fontSize: '17px' }}>
              ❌ 1. Artificial Sinking Wood (Lead & Wax Injection)
            </h4>
            <p style={{ margin: 0, fontSize: '13.5px', color: '#555', lineHeight: 1.6 }}>
              Low-grade wild timber injected with molten lead shot, dental wax, or synthetic glue to simulate heavy underwater sinker density. Verified via X-ray and burning aroma testing.
            </p>
          </div>

          <div style={{ background: '#fdfbf6', padding: '22px', borderRadius: '10px', border: '1px solid var(--color-border)' }}>
            <h4 style={{ color: 'var(--color-crimson)', margin: '0 0 6px', fontSize: '17px' }}>
              ❌ 2. Plasticizer & Booster Adulteration (DPG & DOP)
            </h4>
            <p style={{ margin: 0, fontSize: '13.5px', color: '#555', lineHeight: 1.6 }}>
              Oud oils diluted with odorless synthetic solvents (dipropylene glycol) or fortified with chemical aromachemicals (Kephalis, Javanol) to fake longevity. Verified via GC-MS chromatography.
            </p>
          </div>

          <div style={{ background: '#fdfbf6', padding: '22px', borderRadius: '10px', border: '1px solid var(--color-border)' }}>
            <h4 style={{ color: 'var(--color-crimson)', margin: '0 0 6px', fontSize: '17px' }}>
              ❌ 3. Misrepresented Botanical Origins & Species
            </h4>
            <p style={{ margin: 0, fontSize: '13.5px', color: '#555', lineHeight: 1.6 }}>
              Plantation-grown <em>A. crassna</em> falsely marketed as wild vintage Assam <em>A. agallocha</em> to command 10x price markups. Verified via certified origin tracing and distiller audit.
            </p>
          </div>

          <div style={{ background: '#fdfbf6', padding: '22px', borderRadius: '10px', border: '1px solid var(--color-border)' }}>
            <h4 style={{ color: 'var(--color-crimson)', margin: '0 0 6px', fontSize: '17px' }}>
              ❌ 4. Fabricated CITES Export Documentation
            </h4>
            <p style={{ margin: 0, fontSize: '13.5px', color: '#555', lineHeight: 1.6 }}>
              Uncertified international parcels seized by customs due to counterfeit permits or unrecorded quotas. Verified via direct cross-check against official national forestry export registries.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <Link href={`/${locale}/guides`} className="btn-outline" style={{ borderColor: 'var(--color-gold)', color: 'var(--color-gold-dark)' }}>
            <span>{isAr ? 'اقرأ الدليل التوثيقي الكامل لفحص الجودة' : 'Explore the Full Authenticity & Grading Guide →'}</span>
          </Link>
        </div>
      </section>

      {/* 5. INTERACTIVE REGIONAL OLFATORY TERROIRS MAP */}
      <section className="luxury-hero" style={{ padding: '60px 48px', marginBottom: '70px', background: 'linear-gradient(145deg, #181415 0%, #221a1e 50%, #120e10 100%)' }}>
        <div style={{ maxWidth: '820px', marginBottom: '36px' }}>
          <div className="hero-tag" style={{ color: '#dfba55', borderColor: 'rgba(223, 186, 85, 0.4)' }}>
            🗺️ {isAr ? 'الخريطة الشمية الإقليمية' : 'Regional Olfactory Terroirs & Botanical Taxa'}
          </div>
          <h2 className="font-display" style={{ fontSize: '36px', color: '#ffffff', margin: '0 0 14px' }}>
            {isAr ? 'الأقاليم الجغرافية وبصماتها الشمية المميزة' : 'Distinct Geographic Terroirs of the Oud World'}
          </h2>
          <p style={{ color: '#d0ccc3', fontSize: '16px', lineHeight: 1.7, margin: 0 }}>
            {isAr
              ? 'تختلف الرائحة والمكونات الكيميائية للعود بحسب نوع الشجرة والمناخ وفطريات العدوى وطريقة التقطير.'
              : 'Soil mineralogy, indigenous fungus species, and ambient humidity create radically distinct olfactory signatures across major producing regions.'}
          </p>
        </div>

        <div className="grid-4">
          <div style={{ background: 'rgba(255, 255, 255, 0.06)', borderRadius: '12px', padding: '24px', border: '1px solid rgba(255, 255, 255, 0.14)' }}>
            <div style={{ color: '#dfba55', fontWeight: 800, fontSize: '18px', marginBottom: '4px' }}>🇮🇳 India (Assam)</div>
            <div style={{ fontSize: '12px', color: '#a09d94', marginBottom: '10px' }}>Aquilaria Agallocha</div>
            <p style={{ fontSize: '13.5px', color: '#ece8de', margin: 0, lineHeight: 1.6 }}>
              Deep animalic barnyard, tanned saddle leather, dried dark fruits, and rich sweet tobacco smoke.
            </p>
          </div>

          <div style={{ background: 'rgba(255, 255, 255, 0.06)', borderRadius: '12px', padding: '24px', border: '1px solid rgba(255, 255, 255, 0.14)' }}>
            <div style={{ color: '#dfba55', fontWeight: 800, fontSize: '18px', marginBottom: '4px' }}>🇰🇭 Cambodia (Koh Kong)</div>
            <div style={{ fontSize: '12px', color: '#a09d94', marginBottom: '10px' }}>Aquilaria Crassna</div>
            <p style={{ fontSize: '13.5px', color: '#ece8de', margin: 0, lineHeight: 1.6 }}>
              Ripe red cherries, sun-dried figs, golden wildflower honey, and smooth resinous incense.
            </p>
          </div>

          <div style={{ background: 'rgba(255, 255, 255, 0.06)', borderRadius: '12px', padding: '24px', border: '1px solid rgba(255, 255, 255, 0.14)' }}>
            <div style={{ color: '#dfba55', fontWeight: 800, fontSize: '18px', marginBottom: '4px' }}>🇹🇭 Thailand (Trat)</div>
            <div style={{ fontSize: '12px', color: '#a09d94', marginBottom: '10px' }}>Aquilaria Crassna</div>
            <p style={{ fontSize: '13.5px', color: '#ece8de', margin: 0, lineHeight: 1.6 }}>
              Delicate sweet florals, ripe peach skin, light golden nectar, and clean polished sandalwood.
            </p>
          </div>

          <div style={{ background: 'rgba(255, 255, 255, 0.06)', borderRadius: '12px', padding: '24px', border: '1px solid rgba(255, 255, 255, 0.14)' }}>
            <div style={{ color: '#dfba55', fontWeight: 800, fontSize: '18px', marginBottom: '4px' }}>🇮🇩 Indonesia (Kalimantan)</div>
            <div style={{ fontSize: '12px', color: '#a09d94', marginBottom: '10px' }}>Aquilaria Malaccensis</div>
            <p style={{ fontSize: '13.5px', color: '#ece8de', margin: 0, lineHeight: 1.6 }}>
              Airy jungle rain, cooling medicinal camphor, green herbal resins, and creamy vanillic wood.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '36px', textAlign: 'center' }}>
          <Link href={`/${locale}/world`} className="btn-gold" style={{ padding: '12px 32px' }}>
            <span>{isAr ? 'استكشف 249 دولة في الخريطة العالمية ←' : 'Explore All 249 World Terroirs →'}</span>
          </Link>
        </div>
      </section>

      {/* 6. VERIFIED DISTILLER DIRECTORY HIGHLIGHTS */}
      <section style={{ marginBottom: '70px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '28px', flexWrap: 'wrap', gap: '14px' }}>
          <div>
            <span className="badge-forest" style={{ marginBottom: '8px' }}>Verified Producer Network</span>
            <h2 className="font-display" style={{ fontSize: '32px', margin: '6px 0 6px', color: 'var(--color-crimson)' }}>
              {isAr ? 'دليل المنتجين والمقطرين المعتمدين' : 'Documented Distillers & Producer Directory'}
            </h2>
            <p style={{ color: 'var(--color-text-muted)', margin: 0, fontSize: '15px' }}>
              {isAr
                ? 'ملفات موثقة للمنتجين والمزارع مع حماية تامة لبيانات الاتصال لغير المشتركين.'
                : 'Independently researched distilleries with contact gating protection on all basic profiles.'}
            </p>
          </div>
          <Link href={`/${locale}/directory`} className="btn-outline">
            {isAr ? 'عرض كامل الدليل ←' : 'Browse All Distillers →'}
          </Link>
        </div>

        <div className="grid-3">
          {businesses.map((biz) => (
            <div key={biz.id} className="luxury-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '28px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                  <span className="badge-forest">📍 {biz.country_name}</span>
                  <div>
                    {biz.contact_unlocked ? (
                      <span className="badge-gold">{isAr ? 'عضوية معتمدة' : 'Subscribed Member'}</span>
                    ) : (
                      <span className="badge-locked">{isAr ? 'ملف أساسي محمي' : 'Basic Protected'}</span>
                    )}
                  </div>
                </div>

                <h3 className="card-title font-display" style={{ fontSize: '20px' }}>
                  <Link href={`/${locale}/directory/${biz.slug}`}>{biz.name}</Link>
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--color-gold-dark)', fontWeight: 600, margin: '0 0 12px' }}>
                  {biz.category} · {biz.city}
                </p>
                <p className="card-desc" style={{ fontSize: '13.5px', lineHeight: 1.6 }}>
                  {biz.description}
                </p>

                <div style={{ fontSize: '12.5px', color: '#555', marginBottom: '16px', background: '#fbf9f4', padding: '8px 12px', borderRadius: '6px', border: '1px solid var(--color-border)' }}>
                  <strong>{isAr ? 'المصادر المعتمدة:' : 'Documented Origins:'}</strong>{' '}
                  {(biz.verified_origins || []).join(', ')}
                </div>
              </div>

              <div style={{ paddingTop: '16px', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '12.5px', color: 'var(--color-text-muted)' }}>
                  MOQ: <strong>{biz.minimum_order_quantity || 'Flexible'}</strong>
                </span>
                <Link href={`/${locale}/rfq?profile=${encodeURIComponent(biz.slug)}`} className="btn-gold" style={{ padding: '7px 16px', fontSize: '12.5px' }}>
                  {isAr ? 'طلب تسعير' : 'Request Quote'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FOUR-STEP NEUTRAL MATCHING PROTOCOL */}
      <section style={{ marginBottom: '70px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 className="font-display" style={{ fontSize: '32px', margin: '0 0 10px', color: 'var(--color-crimson)' }}>
            {isAr ? 'كيف تعمل خدمة الربط التجاري المحايدة؟' : 'The Four-Step Neutral Matching Protocol'}
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '16px', maxWidth: '660px', margin: '0 auto' }}>
            {isAr
              ? 'صممت المنصة لضمان النزاهة وحماية خصوصية المشترين، مع تقديم خدمات التوريد دون أي استبدال صامت للموردين.'
              : 'Engineered for transparency, buyer data protection, and verified supplier accountability.'}
          </p>
        </div>

        <div className="grid-4">
          <div className="luxury-card" style={{ borderTop: '4px solid var(--color-gold)' }}>
            <div style={{ fontSize: '28px', fontWeight: 900, color: 'var(--color-gold)', marginBottom: '8px' }}>01</div>
            <h3 className="card-title" style={{ fontSize: '17px' }}>{isAr ? 'المتطلبات الفنية' : 'Technical RFQ'}</h3>
            <p className="card-desc" style={{ fontSize: '13.5px' }}>
              {isAr
                ? 'املأ الاستمارة التدريجية (الصنف، الكمية، بلد الوصول، درجة العود، وشروط فحص العينات).'
                : 'Submit detailed material requirements across 67 conditional specifications with target pricing and delivery.'}
            </p>
          </div>

          <div className="luxury-card" style={{ borderTop: '4px solid var(--color-crimson)' }}>
            <div style={{ fontSize: '28px', fontWeight: 900, color: 'var(--color-crimson)', marginBottom: '8px' }}>02</div>
            <h3 className="card-title" style={{ fontSize: '17px' }}>{isAr ? 'التحقق بـ OTP' : 'OTP Verification'}</h3>
            <p className="card-desc" style={{ fontSize: '13.5px' }}>
              {isAr
                ? 'رمز تحقق لمرة واحدة مكون من 6 أرقام يؤكد ملكيتك لوسيلة الاتصال قبل اتخاذ أي خطوة.'
                : 'A 6-digit one-time passcode confirms your contact channel prior to brief authorization.'}
            </p>
          </div>

          <div className="luxury-card" style={{ borderTop: '4px solid var(--color-forest)' }}>
            <div style={{ fontSize: '28px', fontWeight: 900, color: 'var(--color-forest)', marginBottom: '8px' }}>03</div>
            <h3 className="card-title" style={{ fontSize: '17px' }}>{isAr ? 'موجز مشفر' : 'Redacted Brief'}</h3>
            <p className="card-desc" style={{ fontSize: '13.5px' }}>
              {isAr
                ? 'يطلع الموردون المؤهلون على المواصفات الفنية فقط دون أي اسم أو بريد أو هاتف خاص بك.'
                : 'Verified partners inspect technical specifications with zero buyer identifying data exposed.'}
            </p>
          </div>

          <div className="luxury-card" style={{ borderTop: '4px solid #111' }}>
            <div style={{ fontSize: '28px', fontWeight: 900, color: '#111', marginBottom: '8px' }}>04</div>
            <h3 className="card-title" style={{ fontSize: '17px' }}>{isAr ? 'موافقتك الصريحة' : 'Buyer Approval'}</h3>
            <p className="card-desc" style={{ fontSize: '13.5px' }}>
              {isAr
                ? 'تراجع المرشحين وتعتمد بالاسم حتى 3 موردين قبل تسليم بيانات التنسيق لهم.'
                : 'Review matching distillers and explicitly approve up to 3 named businesses before contact release.'}
            </p>
          </div>
        </div>

        <div style={{ marginTop: '36px', textAlign: 'center' }}>
          <Link href={`/${locale}/rfq`} className="btn-gold" style={{ padding: '14px 38px', fontSize: '16px' }}>
            <span>{isAr ? 'تقديم طلب توريد بالجملة الآن' : 'Start Your Wholesale Requirement Now'}</span>
            <span>{isAr ? '←' : '→'}</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

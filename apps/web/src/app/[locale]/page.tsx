import Link from 'next/link';
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
      {/* LUXURY HERO SECTION */}
      <section className="luxury-hero">
        <div className="hero-glow-1"></div>
        <div className="hero-glow-2"></div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-tag">
            <span>✨</span>
            <span>{isAr ? 'المرجع التوثيقي العالمي لتجارة العود والزيوت العطرية' : 'The Global Authority on Natural Oud & Fragrance Sourcing'}</span>
          </div>

          <h1 className="hero-headline font-display">
            {isAr
              ? 'خدمة الربط التجاري المحايدة لتوريد العود الطبيعي والزيوت العطرية بالجملة.'
              : 'Direct Sourcing for Natural Oud, Artisan Oils & Verified Wholesale Introductions.'}
          </h1>

          <p className="hero-lead">
            {isAr
              ? 'نربط دور العطور والمشترين التجاريين والمقتنين بأفضل المقطرين والمزارع المعتمدة في أسام، كمبوديا، تايلاند، وإندونيسيا. حماية تامة لبيانات المشترين مع اشتراط الموافقة الصريحة قبل تسليم معلومات الاتصال.'
              : 'Connecting bespoke perfume houses, institutional buyers, and luxury collectors directly with certified distillers and sustainable estates across Assam, Indochina, and the Malay Archipelago. Zero contact leakage with mandatory buyer approval.'}
          </p>

          <div className="search-box-hero">
            <input
              type="text"
              placeholder={isAr ? 'ابحث بالصنف، المنطقة، أو فصيلة الشجرة (مثل Aquilaria Agallocha)...' : 'Search by material, region (e.g. Assam, Trat), or botanical species...'}
            />
            <select defaultValue="Oud oil">
              <option value="Oud wood">{isAr ? 'خشب وبخور' : 'Oud Wood / Chips'}</option>
              <option value="Oud oil">{isAr ? 'دهن عود مقطر' : 'Pure Dehn Al Oud'}</option>
              <option value="Attar">{isAr ? 'عطور شرقية وزيوت' : 'Artisan Attars'}</option>
              <option value="Finished perfume">{isAr ? 'تصنيع عطور خاص' : 'Private Label Fragrance'}</option>
            </select>
            <Link href={`/${locale}/rfq`} className="btn-gold" style={{ whiteSpace: 'nowrap' }}>
              <span>{isAr ? 'طلب تسعير' : 'Find Suppliers'}</span>
              <span>{isAr ? '←' : '→'}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* METRICS RIBBON */}
      <section className="metrics-ribbon">
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

      {/* FOUR CURATED PRODUCT PILLARS */}
      <section style={{ marginBottom: '60px' }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <h2 className="font-display" style={{ fontSize: '32px', margin: '0 0 10px', color: 'var(--color-crimson)' }}>
            {isAr ? 'أصناف العود ومواد العطور المعتمدة' : 'Curated Fragrance & Agarwood Disciplines'}
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '16px', maxWidth: '640px', margin: '0 auto' }}>
            {isAr
              ? 'نوثق المصادر الأصلية لكل صنف مع شروط التقطير وفحوصات السلامة المخبرية.'
              : 'Every material category is mapped to documented botanical habitats, extraction systems, and CITES export regulations.'}
          </p>
        </div>

        <div className="grid-4">
          <div className="luxury-card">
            <div className="card-icon">🪵</div>
            <span className="badge-crimson" style={{ marginBottom: '10px' }}>Natural Wood</span>
            <h3 className="card-title">{isAr ? 'خشب العود الطبيعي' : 'Artisanal Agarwood'}</h3>
            <p className="card-desc">
              {isAr
                ? 'رقائق غابات طبيعية، عود غطاس (Sinking Grade)، وخشب مستزرع مستدام من أسام وكاليمانتان وكمبوديا.'
                : 'Wild forest heartwood, sinking underwater grades, and sustainably inoculated plantation chips with certified resin density.'}
            </p>
            <div style={{ fontSize: '12px', color: 'var(--color-gold-dark)', fontWeight: 600 }}>
              Scent: Balsamic, Smoky, Ancient Wood
            </div>
          </div>

          <div className="luxury-card">
            <div className="card-icon">🧪</div>
            <span className="badge-gold" style={{ marginBottom: '10px' }}>Pure Distillation</span>
            <h3 className="card-title">{isAr ? 'دهن العود الخالص' : 'Pure Dehn Al Oud'}</h3>
            <p className="card-desc">
              {isAr
                ? 'تقطير قدور النحاس التقليدية والبخار منخفض الحرارة. زيوت معتقة هندي وبراشين وكوه كونغ ومروكي.'
                : 'Traditional copper alembic deg and modern steam extractions. Aged vintages from Assam, Koh Kong, Trat, and Merauke.'}
            </p>
            <div style={{ fontSize: '12px', color: 'var(--color-gold-dark)', fontWeight: 600 }}>
              Scent: Leather, Animalic, Warm Hay, Honey
            </div>
          </div>

          <div className="luxury-card">
            <div className="card-icon">🪔</div>
            <span className="badge-forest" style={{ marginBottom: '10px' }}>Traditional Attar</span>
            <h3 className="card-title">{isAr ? 'العطور الشرقية والمخلطات' : 'Heritage Attars'}</h3>
            <p className="card-desc">
              {isAr
                ? 'تقطير مشترك على قاعدة خشب الصندل النقي. شمامة العنبر، الورد الدمشقي، الطين الهندي والمسك الطبيعي.'
                : 'True hydro-distillations over pure Mysore sandalwood base. Shamamatul Amber, Ruh Gulab, Mitti, and Royal Musk accords.'}
            </p>
            <div style={{ fontSize: '12px', color: 'var(--color-gold-dark)', fontWeight: 600 }}>
              Scent: Earthy, Floral, Sacred Amber
            </div>
          </div>

          <div className="luxury-card">
            <div className="card-icon">💎</div>
            <span className="badge-crimson" style={{ marginBottom: '10px' }}>Private Label</span>
            <h3 className="card-title">{isAr ? 'التصنيع الخاص والتعبئة' : 'Private Label & Flacons'}</h3>
            <p className="card-desc">
              {isAr
                ? 'تركيب وتصنيع العطور الفاخرة (Extrait de Parfum)، مع مطابقة معايير إفرا العالمية وزجاجات كريستال مخصصة.'
                : 'Custom formulation, IFRA safety compliance certificates, bespoke crystal flacons, and low-MOQ luxury production runs.'}
            </p>
            <div style={{ fontSize: '12px', color: 'var(--color-gold-dark)', fontWeight: 600 }}>
              Compliance: IFRA Certified, GC-MS Tested
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED SUPPLIER DIRECTORY SECTION */}
      <section style={{ marginBottom: '60px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h2 className="font-display" style={{ fontSize: '30px', margin: '0 0 6px', color: 'var(--color-crimson)' }}>
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
            <div key={biz.id} className="luxury-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <span className="badge-forest">📍 {biz.country_name}</span>
                  <div>
                    {biz.contact_unlocked ? (
                      <span className="badge-gold">{isAr ? 'عضوية معتمدة' : 'Subscribed Member'}</span>
                    ) : (
                      <span className="badge-locked">{isAr ? 'ملف أساسي محمي' : 'Basic Protected'}</span>
                    )}
                  </div>
                </div>

                <h3 className="card-title" style={{ fontSize: '19px' }}>
                  <Link href={`/${locale}/directory/${biz.slug}`}>{biz.name}</Link>
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', margin: '0 0 12px' }}>
                  {biz.category} · {biz.city}
                </p>
                <p className="card-desc" style={{ fontSize: '13.5px' }}>
                  {biz.description}
                </p>

                <div style={{ fontSize: '12.5px', color: '#555', marginBottom: '14px' }}>
                  <strong>{isAr ? 'المصادر المعتمدة:' : 'Documented Origins:'}</strong>{' '}
                  {(biz.verified_origins || []).join(', ')}
                </div>
              </div>

              <div style={{ paddingTop: '16px', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                  MOQ: {biz.minimum_order_quantity || 'Flexible'}
                </span>
                <Link href={`/${locale}/rfq?profile=${encodeURIComponent(biz.slug)}`} className="btn-crimson" style={{ padding: '6px 14px', fontSize: '12px' }}>
                  {isAr ? 'طلب تسعير' : 'Request Quote'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REGIONAL OLFACORY TASTE MAP */}
      <section className="luxury-hero" style={{ padding: '56px 40px', marginBottom: '60px', background: 'linear-gradient(145deg, #181415 0%, #201a1d 50%, #120e10 100%)' }}>
        <div style={{ maxWidth: '800px', marginBottom: '32px' }}>
          <div className="hero-tag" style={{ color: '#dfba55', borderColor: 'rgba(223, 186, 85, 0.4)' }}>
            🗺️ {isAr ? 'الخريطة الشمية الإقليمية' : 'Regional Olfactory Terroirs & Species'}
          </div>
          <h2 className="font-display" style={{ fontSize: '32px', color: '#ffffff', margin: '0 0 12px' }}>
            {isAr ? 'الأقاليم الجغرافية وبصماتها الشمية المميزة' : 'Distinct Geographic Terroirs of the Oud World'}
          </h2>
          <p style={{ color: '#d0ccc3', fontSize: '15px', lineHeight: 1.7, margin: 0 }}>
            {isAr
              ? 'تختلف الرائحة والمكونات الكيميائية للعود بحسب نوع الشجرة والمناخ وفطريات العدوى وطريقة التقطير.'
              : 'Soil mineralogy, indigenous fungus species, and ambient humidity create radically distinct olfactory signatures across major producing regions.'}
          </p>
        </div>

        <div className="grid-4">
          <div style={{ background: 'rgba(255, 255, 255, 0.06)', borderRadius: '10px', padding: '20px', border: '1px solid rgba(255, 255, 255, 0.12)' }}>
            <div style={{ color: '#dfba55', fontWeight: 800, fontSize: '16px', marginBottom: '4px' }}>🇮🇳 India (Assam)</div>
            <div style={{ fontSize: '12px', color: '#a09d94', marginBottom: '8px' }}>Aquilaria Agallocha</div>
            <p style={{ fontSize: '13px', color: '#ece8de', margin: 0 }}>
              Deep animalic barnyard, tanned saddle leather, dried dark fruits, and rich sweet tobacco smoke.
            </p>
          </div>

          <div style={{ background: 'rgba(255, 255, 255, 0.06)', borderRadius: '10px', padding: '20px', border: '1px solid rgba(255, 255, 255, 0.12)' }}>
            <div style={{ color: '#dfba55', fontWeight: 800, fontSize: '16px', marginBottom: '4px' }}>🇰🇭 Cambodia (Koh Kong)</div>
            <div style={{ fontSize: '12px', color: '#a09d94', marginBottom: '8px' }}>Aquilaria Crassna</div>
            <p style={{ fontSize: '13px', color: '#ece8de', margin: 0 }}>
              Ripe red cherries, sun-dried figs, golden wildflower honey, and smooth resinous incense.
            </p>
          </div>

          <div style={{ background: 'rgba(255, 255, 255, 0.06)', borderRadius: '10px', padding: '20px', border: '1px solid rgba(255, 255, 255, 0.12)' }}>
            <div style={{ color: '#dfba55', fontWeight: 800, fontSize: '16px', marginBottom: '4px' }}>🇹🇭 Thailand (Trat)</div>
            <div style={{ fontSize: '12px', color: '#a09d94', marginBottom: '8px' }}>Aquilaria Crassna</div>
            <p style={{ fontSize: '13px', color: '#ece8de', margin: 0 }}>
              Delicate sweet florals, ripe peach skin, light golden nectar, and clean polished sandalwood.
            </p>
          </div>

          <div style={{ background: 'rgba(255, 255, 255, 0.06)', borderRadius: '10px', padding: '20px', border: '1px solid rgba(255, 255, 255, 0.12)' }}>
            <div style={{ color: '#dfba55', fontWeight: 800, fontSize: '16px', marginBottom: '4px' }}>🇮🇩 Indonesia (Kalimantan)</div>
            <div style={{ fontSize: '12px', color: '#a09d94', marginBottom: '8px' }}>Aquilaria Malaccensis</div>
            <p style={{ fontSize: '13px', color: '#ece8de', margin: 0 }}>
              Airy jungle rain, cooling medicinal camphor, green herbal resins, and creamy vanillic wood.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '24px', textAlign: 'center' }}>
          <Link href={`/${locale}/world`} className="btn-gold">
            {isAr ? 'استكشف 249 دولة في الخريطة العالمية ←' : 'Explore All 249 World Terroirs →'}
          </Link>
        </div>
      </section>

      {/* HOW NEUTRAL MATCHING WORKS */}
      <section style={{ marginBottom: '60px' }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
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
          <Link href={`/${locale}/rfq`} className="btn-gold" style={{ padding: '12px 32px', fontSize: '16px' }}>
            <span>{isAr ? 'تقديم طلب توريد بالجملة الآن' : 'Start Your Wholesale Requirement Now'}</span>
            <span>{isAr ? '←' : '→'}</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

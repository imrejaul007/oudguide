'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Package, Building2, BookOpen, ArrowRight, ShieldCheck, MapPin, Award, CheckCircle2, FileText, Lock } from 'lucide-react';

interface MarketplaceExplorerProps {
  locale: string;
  isAr: boolean;
  reviewedArticles: Array<{
    slug: string;
    title: string;
    titleAr?: string;
    summary: string;
    summaryAr?: string;
    kind: string;
    reviewedOn?: string;
  }>;
  producers: Array<{
    id: string;
    slug: string;
    name: string;
    city?: string | null;
    country_name?: string | null;
    category?: string | null;
    product_families?: string[];
    contact_unlocked: boolean;
    minimum_order_quantity?: string | null;
    sample_availability?: boolean;
    established_year?: number | null;
  }>;
}

const marketplaceProducts = [
  {
    slug: 'oud-wood',
    nameEn: 'Natural Agarwood Heartwood & Sinking Timber',
    nameAr: 'خشب العود الطبيعي والغطاس الملكي',
    descEn: 'Raw heartwood logs, wild sinking grade pieces, and carvable incense blocks with verified resin saturation.',
    descAr: 'قطع خشب عود بري طبيعي، درجات غطاس عالية الكثافة، وكتل بخور براتنج أصيل مشبّع.',
    cover: '/images/hero-oud-wood.svg',
    categoryEn: 'Raw Heartwood',
    categoryAr: 'خشب خام',
    originsEn: 'Assam, Trat, Koh Kong',
    originsAr: 'أسام، ترات، كوه كونغ',
    moqEn: '500g / 1kg',
    moqAr: '500 غ / 1 كغ',
    sampleEn: 'Available',
    sampleAr: 'متاحة للفحص',
  },
  {
    slug: 'dehn-al-oud',
    nameEn: 'Artisan Dehn Al Oud & Pure Distillates',
    nameAr: 'دهن العود الصافي والتقطير الحرفي',
    descEn: 'Single-estate copper hydro-distillates and aged plantation oils with GC-MS laboratory purity verification.',
    descAr: 'تقطير مائي نحاسي نقي وزيوت معتقة مثبتة بفحوصات الكروماتوغرافيا الغازية الكروماتوغرافية المخبرية.',
    cover: '/images/hero-dehn-al-oud.svg',
    categoryEn: 'Pure Distillate',
    categoryAr: 'دهن مقطر',
    originsEn: 'Upper Assam, Trat, Pursat',
    originsAr: 'أعالي أسام، ترات، بورسات',
    moqEn: '5 Tolas (60ml)',
    moqAr: '5 تولات (60 مل)',
    sampleEn: '1g Lab Vial',
    sampleAr: 'عينة مخبرية 1غ',
  },
  {
    slug: 'agarwood-chips',
    nameEn: 'Wild Incense Chips & Grade A Shavings',
    nameAr: 'رقائق وبخور العود البري الفاخر',
    descEn: 'Triple-sorted wild incense chips and shavings with zero resin injection and verified bubble burn aroma.',
    descAr: 'رقائق بخور برية منقاة بعناية خالية من الشمع والرصاص برائحة الفوران الأصيلة.',
    cover: '/images/hero-oud-chip.svg',
    categoryEn: 'Incense Chips',
    categoryAr: 'رقائق بخور',
    originsEn: 'Kalimantan, Merauke, Assam',
    originsAr: 'كليمنتان، ميراوكي، أسام',
    moqEn: '1 kg / 5 kg',
    moqAr: '1 كغ / 5 كغ',
    sampleEn: 'Available',
    sampleAr: 'متاحة للفحص',
  },
  {
    slug: 'traditional-attars',
    nameEn: 'Heritage Attars & Deg Distillation',
    nameAr: 'العطور التراثية وتقطير الديغ التقليدي',
    descEn: 'Authentic Indian Deg & Bhapka distillation onto pure Mysore sandalwood bases, free from synthetic musk.',
    descAr: 'تقطير كانوج التقليدي فوق قاعدة خشب الصندل الصافي خالٍ من المركبات الكيميائية.',
    cover: '/images/hero-attar-still.svg',
    categoryEn: 'Heritage Attar',
    categoryAr: 'عطور تراثية',
    originsEn: 'Kannauj, Uttar Pradesh',
    originsAr: 'كانوج، الهند',
    moqEn: '10 Tolas / 500ml',
    moqAr: '10 تولات / 500 مل',
    sampleEn: 'Available',
    sampleAr: 'متاحة للفحص',
  },
  {
    slug: 'private-label',
    nameEn: 'Private Label & Bulk Formulation Supply',
    nameAr: 'التصنيع الخاص وتوريد الخلطات الملكية',
    descEn: 'Contract blending, IFRA-compliant fragrance concentrates, and luxury wholesale packaging for perfume houses.',
    descAr: 'توريد الخلطات الحصرية وتركيبات العطور الفاخرة المطابقة لمعايير إيفرا لدور العطور.',
    cover: '/images/hero-private-label.svg',
    categoryEn: 'Contract Sourcing',
    categoryAr: 'تصنيع تعاقدي',
    originsEn: 'UAE, Switzerland, India',
    originsAr: 'الإمارات، سويسرا، الهند',
    moqEn: 'Custom Volume',
    moqAr: 'حسب الاتفاق',
    sampleEn: 'Pre-production',
    sampleAr: 'عينة ما قبل الإنتاج',
  },
];

export function MarketplaceExplorer({
  locale,
  isAr,
  reviewedArticles,
  producers,
}: MarketplaceExplorerProps) {
  const [activeTab, setActiveTab] = useState<'products' | 'suppliers' | 'guides'>('products');

  return (
    <div className="b2b-marketplace-explorer">
      {/* Explorer Header & Controls */}
      <div className="b2b-explorer-header">
        <div>
          <span className="eyebrow" style={{ display: 'block', marginBottom: 4 }}>
            {isAr ? 'كتالوج التوريد والاستخبارات التجارية' : 'Live Wholesale Catalog & Intelligence Engine'}
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem, 2.4vw, 1.9rem)', margin: 0, color: 'var(--ink)' }}>
            {isAr ? 'تصفح الأصناف، الموردين المعتمدين، والأدلة' : 'Explore Products, Verified Distillers & Lab Reports'}
          </h2>
        </div>

        {/* Tab Switcher (Apollo/Qogita Pattern) */}
        <div className="b2b-tab-bar" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'products'}
            onClick={() => setActiveTab('products')}
            className={`b2b-tab-btn ${activeTab === 'products' ? 'active' : ''}`}
          >
            <Package size={15} />
            <span>{isAr ? 'الأصناف والمواد (طلب سعر)' : 'Materials & Products (Ask for Price)'}</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'suppliers'}
            onClick={() => setActiveTab('suppliers')}
            className={`b2b-tab-btn ${activeTab === 'suppliers' ? 'active' : ''}`}
          >
            <Building2 size={15} />
            <span>{isAr ? 'المقطرون والمصانع المعتمدة' : 'Verified Distillers'}</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'guides'}
            onClick={() => setActiveTab('guides')}
            className={`b2b-tab-btn ${activeTab === 'guides' ? 'active' : ''}`}
          >
            <BookOpen size={15} />
            <span>{isAr ? 'تقارير الجودة والمختبر' : 'Lab Reports & Guides'}</span>
          </button>
        </div>
      </div>

      {/* TAB 1: WHOLESALE PRODUCTS WITH "ASK FOR PRICE / RFQ" (Qogita & Tradeling Pattern) */}
      {activeTab === 'products' && (
        <div className="b2b-catalog-grid">
          {marketplaceProducts.map((p) => (
            <div key={p.slug} className="b2b-catalog-card">
              <div className="b2b-catalog-cover">
                <img src={p.cover} alt={isAr ? p.nameAr : p.nameEn} />
                <div className="b2b-catalog-cover-overlay" />
                <span className="badge badge-glass-light" style={{ position: 'absolute', top: 12, insetInlineStart: 12 }}>
                  {isAr ? p.categoryAr : p.categoryEn}
                </span>
                <span className="b2b-quote-pill" style={{ position: 'absolute', bottom: 12, insetInlineEnd: 12 }}>
                  {isAr ? 'تسعير جملة مخصص' : 'Price on Request'}
                </span>
              </div>

              <div className="b2b-catalog-body">
                <h3 className="b2b-catalog-title">
                  <Link href={`/${locale}/products/${p.slug}`}>
                    {isAr ? p.nameAr : p.nameEn}
                  </Link>
                </h3>
                <p className="b2b-catalog-desc">
                  {isAr ? p.descAr : p.descEn}
                </p>

                <div className="b2b-catalog-specs">
                  <div className="b2b-spec-row">
                    <span className="b2b-spec-label">{isAr ? 'الأقاليم المتاحة' : 'Documented Origins'}</span>
                    <span className="b2b-spec-val">{isAr ? p.originsAr : p.originsEn}</span>
                  </div>
                  <div className="b2b-spec-row">
                    <span className="b2b-spec-label">{isAr ? 'الحد الأدنى للطلب ' : 'Minimum Order'}</span>
                    <span className="b2b-spec-val" style={{ color: 'var(--green-800)', fontWeight: 600 }}>
                      {isAr ? p.moqAr : p.moqEn}
                    </span>
                  </div>
                  <div className="b2b-spec-row">
                    <span className="b2b-spec-label">{isAr ? 'سياسة العينات' : 'Sample Availability'}</span>
                    <span className="b2b-spec-val">{isAr ? p.sampleAr : p.sampleEn}</span>
                  </div>
                </div>

                <div className="b2b-catalog-actions">
                  <Link
                    href={`/${locale}/rfq?family=${encodeURIComponent(p.nameEn)}`}
                    className="btn btn-primary btn-sm b2b-btn-rfq"
                  >
                    <span>{isAr ? 'اطلب تسعير الجملة' : 'Ask for Wholesale Price'}</span>
                    <ArrowRight size={13} className="icon-dir-flip" />
                  </Link>
                  <Link
                    href={`/${locale}/products/${p.slug}`}
                    className="btn btn-outline btn-sm"
                  >
                    {isAr ? 'المواصفات' : 'Specs'}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 2: VERIFIED DISTILLERS & SUPPLIERS (Apollo / Kompass Pattern) */}
      {activeTab === 'suppliers' && (
        <div className="b2b-catalog-grid">
          {producers.map((b) => (
            <div key={b.id} className="b2b-catalog-card">
              <div className="b2b-catalog-cover">
                <img src="/images/hero-attar-still.svg" alt={b.name} />
                <div className="b2b-catalog-cover-overlay" />
                <span className="badge badge-emerald" style={{ position: 'absolute', top: 12, insetInlineStart: 12 }}>
                  <Award size={11} />
                  {isAr ? 'مورد معتمد' : 'Verified Producer'}
                </span>
                <span className="badge badge-glass" style={{ position: 'absolute', top: 12, insetInlineEnd: 12 }}>
                  <MapPin size={11} />
                  {b.city ? `${b.city}, ` : ''}{b.country_name}
                </span>
              </div>

              <div className="b2b-catalog-body">
                <h3 className="b2b-catalog-title">
                  <Link href={`/${locale}/directory/${b.slug}`}>{b.name}</Link>
                </h3>
                <p className="b2b-catalog-desc">
                  {b.category || (isAr ? 'مقطر ومورد معتمد' : 'Verified Distiller & Exporter')}
                  {b.established_year ? ` · ${isAr ? 'تأسس' : 'Est.'} ${b.established_year}` : ''}
                </p>

                <div className="b2b-catalog-specs">
                  <div className="b2b-spec-row">
                    <span className="b2b-spec-label">{isAr ? 'الحد الأدنى' : 'Minimum Order'}</span>
                    <span className="b2b-spec-val" style={{ fontWeight: 600 }}>{b.minimum_order_quantity || 'Flexible'}</span>
                  </div>
                  <div className="b2b-spec-row">
                    <span className="b2b-spec-label">{isAr ? 'العينات' : 'Samples'}</span>
                    <span className="b2b-spec-val" style={{ color: 'var(--green-700)' }}>
                      {b.sample_availability ? (isAr ? 'متاحة' : 'Available') : (isAr ? 'حسب الاتفاق' : 'On Request')}
                    </span>
                  </div>
                </div>

                <div className="b2b-catalog-actions">
                  <Link
                    href={`/${locale}/rfq?supplier=${b.slug}`}
                    className="btn btn-primary btn-sm b2b-btn-rfq"
                  >
                    <span>{isAr ? 'طلب ربط وتسعير' : 'Request Introduction'}</span>
                    <ArrowRight size={13} className="icon-dir-flip" />
                  </Link>
                  <Link
                    href={`/${locale}/directory/${b.slug}`}
                    className="btn btn-outline btn-sm"
                  >
                    {isAr ? 'الملف الكامل' : 'View Profile'}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: KNOWLEDGE BASE & LAB GUIDES */}
      {activeTab === 'guides' && (
        <div className="b2b-catalog-grid">
          {reviewedArticles.slice(0, 6).map((a) => (
            <div key={a.slug} className="b2b-catalog-card">
              <div className="b2b-catalog-body" style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <div>
                  <div className="cluster" style={{ gap: 8, marginBottom: 12 }}>
                    <span className="badge badge-accent">
                      <BookOpen size={11} />
                      {isAr ? 'تقرير مخبري' : 'Lab Dossier'}
                    </span>
                    {a.reviewedOn && <span className="meta">{a.reviewedOn}</span>}
                  </div>
                  <h3 className="b2b-catalog-title" style={{ fontSize: '1.05rem', marginBottom: 8 }}>
                    <Link href={`/${locale}/guides/${a.slug}`}>
                      {isAr && a.titleAr ? a.titleAr : a.title}
                    </Link>
                  </h3>
                  <p className="b2b-catalog-desc" style={{ marginBottom: 16 }}>
                    {isAr && a.summaryAr ? a.summaryAr : a.summary}
                  </p>
                </div>

                <Link
                  href={`/${locale}/guides/${a.slug}`}
                  className="btn-link"
                  style={{ fontSize: '0.84rem', fontWeight: 600, display: 'inline-flex', gap: 5, color: 'var(--green-700)' }}
                >
                  <span>{isAr ? 'قراءة التقرير الكامل' : 'Read Full Investigation'}</span>
                  <ArrowRight size={13} className="icon-dir-flip" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

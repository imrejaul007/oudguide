import Link from 'next/link';
import { Factory, CheckCircle2, ShieldCheck, Sparkles, ArrowRight, FileCheck, Layers, Beaker, PackageCheck } from 'lucide-react';
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
    path: `/${locale}/for-businesses/perfume-manufacturing`,
    title: isAr
      ? 'تصنيع العطور والعلامات الخاصة في الإمارات والخليج · دليل العود'
      : 'Private Label & Contract Perfume Manufacturing in the UAE & GCC · OudGuide',
    description: isAr
      ? 'الدليل المهني لتصنيع العطور لحساب الغير: صياغة التراكيب، تعتيق الزيوت، مطابقة معايير إفرا ومواصفات وزارة الصناعة الإماراتية وهيئة الغذاء والدواء السعودية، وربط العلامات بالمصانع المعتمدة.'
      : 'Comprehensive guide to contract perfume manufacturing and private labeling in the UAE and GCC: custom formulation, oil maceration, IFRA compliance, MoIAT and SFDA cosmetics registration, and connecting with verified fragrance facilities.',
    locale,
    alternateLocalePath: `/${locale === 'ar' ? 'en' : 'ar'}/for-businesses/perfume-manufacturing`,
  });
}

export default async function PerfumeManufacturingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === 'ar';

  const steps = [
    {
      num: '01',
      titleEn: 'Formulation & Olfactory Brief',
      titleAr: 'تطوير التركيبة وتحديد الهوية العطرية',
      descEn:
        'Translating your brand vision into an industrial formulation. Master perfumers balance high-impact natural Dehn Al Oud heart notes with floral top notes and amber fixatives, adhering strictly to IFRA 51st Amendment maximum concentration limits.',
      descAr:
        'تحويل رؤية علامتك التجارية إلى تركيبة صناعية متزنة. يوازن خبراء العطور بين دهن العود الطبيعي والنوتات الزهرية العلوية والمثبتات العنبرية، مع الالتزام الصارم بنسب التركيز الآمنة المعتمدة دولياً.',
      icon: Beaker,
    },
    {
      num: '02',
      titleEn: 'Batch Maceration & Cryogenic Filtration',
      titleAr: 'التعتيق والتصفية بالتبريد العميق',
      descEn:
        'Aged in temperature-controlled stainless steel maturation tanks for four to eight weeks. The mixture undergoes sub-zero cryogenic filtration at -4°C to precipitate waxes and insoluble plant fats, ensuring crystal-clear spray clarity.',
      descAr:
        'تعتيق الخليط في خزانات فولاذية مبردة لأربعة إلى ثمانية أسابيع. ثم يخضع المحلول لفلترة تبريد دقيقة عند أربع درجات تحت الصفر لترسيب الشموع والدهون النباتية غير الذائبة لضمان نقاء البخاخ وصفائه.',
      icon: Layers,
    },
    {
      num: '03',
      titleEn: 'GCC Regulatory Compliance & Registration',
      titleAr: 'المطابقة الرقابية والتسجيل في الأسواق الخليجية',
      descEn:
        'Obtaining official laboratory Certificate of Analysis (COA), safety data sheets (MSDS), and product registration with MoIAT in the United Arab Emirates and the SFDA Cosmetic Notification Portal in Saudi Arabia.',
      descAr:
        'استخراج شهادات التحليل المخبري ووثائق السلامة الكيميائية، وتسجيل المنتج لدى وزارة الصناعة والتكنولوجيا المتقدمة في الإمارات ومنصة إدراج بهيئة الغذاء والدواء السعودية.',
      icon: ShieldCheck,
    },
    {
      num: '04',
      titleEn: 'Bottling, Crimping, & Luxury Packaging',
      titleAr: 'التعبئة وكبس المضخات والتغليف الفاخر',
      descEn:
        'Automated pneumatic filling, high-precision spray pump crimping, custom crystal bottle labeling, magnetic cap assembly, and cellophane over-wrapping conforming to luxury duty-free standards.',
      descAr:
        'التعبئة الآلية الدقيقة، وكبس مضخات البخاخ، ولصق العلامات على الزجاج الكريستالي، وتركيب الأغطية المغناطيسية، والتغليف بالسيلوفان الحراري وفق معايير الأسواق الحرة الفاخرة.',
      icon: PackageCheck,
    },
  ];

  const standards = [
    {
      titleEn: 'MoIAT / ESMA UAE Standards',
      titleAr: 'مواصفات وزارة الصناعة الإماراتية',
      bodyEn:
        'Perfumes manufactured in Dubai, Sharjah, or Ajman free zones must comply with UAE.S 5005 for fragrance safety and heavy metal testing.',
      bodyAr:
        'تخضع العطور المصنعة في المناطق الحرة بالإمارات للمواصفة القياسية الوطنية لفحص السلامة والمعادن الثقيلة.',
    },
    {
      titleEn: 'Saudi SFDA eCosma System',
      titleAr: 'نظام إدراج بهيئة الغذاء والدواء السعودية',
      bodyEn:
        'Mandatory notification and toxicological ingredient clearance before any finished fragrance shipment can clear customs in Jeddah, Riyadh, or Dammam.',
      bodyAr:
        'إدراج إلزامي للتركيبة وشهادات الفحص المخبري لفسح الشحنات العطرية في الجمارك السعودية.',
    },
    {
      titleEn: 'IFRA 51st Amendment Safe Limits',
      titleAr: 'حدود السلامة للجمعية الدولية للعطور',
      bodyEn:
        'Restricting agarwood extract, oakmoss, and natural citrals to verified safe skin sensitization concentration thresholds.',
      bodyAr:
        'تحديد نسب التركيز الآمنة لمستخلصات العود الطبيعي والسيترال لمنع أي تحسس جلدي وضمان سلامة المستهلك.',
    },
  ];

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 1100 }}>
        {/* Masthead */}
        <section className="masthead">
          <div className="masthead-inner">
            <div className="hero-tag">
              <Factory size={13} />
              <span>{isAr ? 'تصنيع العطور والعلامات الخاصة' : 'Private Label & Contract Manufacturing'}</span>
            </div>
            <h1>
              {isAr ? 'حلول تصنيع العطور لحساب الغير في الإمارات والخليج' : 'Contract Perfume Manufacturing in the UAE & GCC'}
              <span className="accent">
                {isAr ? 'من التركيبة المخصصة إلى المنتج النهائي الجاهز للرفوف' : 'From custom formulation to shelf-ready retail delivery'}
              </span>
            </h1>
            <p className="hero-lead">
              {isAr
                ? 'يربط دليل العود العلامات التجارية الصاعدة ودور العطور بمرافق التصنيع والتقطير المعتمدة في دولة الإمارات العربية المتحدة ودول مجلس التعاون. تراكيب عود نقية، مطابقة رقابية، وتعبئة احترافية وفق المعايير العالمية.'
                : 'OudGuide connects emerging fragrance brands and luxury houses with verified contract manufacturing facilities and toll distillers across the UAE and GCC. Pure agarwood formulations, strict regulatory clearance, and luxury turnkey packaging.'}
            </p>
            <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href={`/${locale}/rfq`} className="btn btn-primary">
                {isAr ? 'طلب عروض أسعار التصنيع' : 'Request Manufacturing Quotations'}
                <ArrowRight size={14} style={{ [isAr ? 'marginRight' : 'marginLeft']: 8 }} />
              </Link>
              <Link href={`/${locale}/b2b/suppliers`} className="btn btn-secondary">
                {isAr ? 'تصفح المصانع المعتمدة' : 'Browse Verified Facilities'}
              </Link>
            </div>
          </div>
        </section>

        {/* 4 Steps Section */}
        <section style={{ marginTop: 56 }}>
          <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 40px' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: 12 }}>
              {isAr ? 'مراحل دورة التصنيع المتكاملة' : 'The Turnkey Production Lifecycle'}
            </h2>
            <p style={{ color: 'var(--text-muted, #64748b)', fontSize: '0.95rem' }}>
              {isAr
                ? 'كيف تنتقل فكرة عطرك من مجرد تصور مبدئي إلى زجاجة عطر مسجلة رسمياً وجاهزة للبيع في الأسواق الكبرى.'
                : 'How your fragrance vision moves from initial concept to a fully registered, shelf-ready luxury product in top markets.'}
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
              gap: 20,
            }}
          >
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.num}
                  style={{
                    background: 'var(--card-bg, #ffffff)',
                    border: '1px solid var(--border-color, #e2e8f0)',
                    borderRadius: 12,
                    padding: 24,
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: 16,
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: 'var(--accent, #0E8A6A)',
                        fontFamily: 'monospace',
                      }}
                    >
                      {step.num}
                    </span>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 8,
                        background: 'rgba(14, 138, 106, 0.08)',
                        color: '#0E8A6A',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon size={18} />
                    </div>
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: 10 }}>
                    {isAr ? step.titleAr : step.titleEn}
                  </h3>
                  <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--text-muted, #64748b)' }}>
                    {isAr ? step.descAr : step.descEn}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Regulatory & Compliance Section */}
        <section
          style={{
            marginTop: 64,
            padding: 36,
            background: 'var(--surface-subtle, #f8fafc)',
            borderRadius: 16,
            border: '1px solid var(--border-color, #e2e8f0)',
          }}
        >
          <div style={{ maxWidth: 750, marginBottom: 28 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#0E8A6A', marginBottom: 8 }}>
              <FileCheck size={18} />
              <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {isAr ? 'الامتثال القانوني الخليجي' : 'GCC Regulatory Framework'}
              </span>
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 10 }}>
              {isAr ? 'ضمان التسجيل والمطابقة في الأسواق المستهدفة' : 'Guaranteed Clearance & Registration Standards'}
            </h2>
            <p style={{ color: 'var(--text-muted, #64748b)', fontSize: '0.925rem' }}>
              {isAr
                ? 'لا يمكن لأي منتج عطري دخول منافذ البيع الرسمية في الخليج دون استيفاء معايير الفحص والسلامة الصارمة.'
                : 'Commercial fragrance distribution in GCC retail channels requires complete laboratory accreditation and toxicological notification.'}
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: 20,
            }}
          >
            {standards.map((std, i) => (
              <div
                key={i}
                style={{
                  background: '#ffffff',
                  padding: 20,
                  borderRadius: 10,
                  border: '1px solid #e2e8f0',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                  <CheckCircle2 size={16} color="#0E8A6A" />
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 600 }}>{isAr ? std.titleAr : std.titleEn}</h3>
                </div>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.55, color: '#64748b' }}>
                  {isAr ? std.bodyAr : std.bodyEn}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Card */}
        <section
          style={{
            marginTop: 56,
            marginBottom: 40,
            padding: 40,
            background: 'linear-gradient(135deg, #0E8A6A 0%, #095945 100%)',
            borderRadius: 16,
            color: '#ffffff',
            textAlign: 'center',
          }}
        >
          <Sparkles size={32} style={{ margin: '0 auto 16px', opacity: 0.9 }} />
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: 12 }}>
            {isAr ? 'ابدأ مشروع تصنيع علامتك العطرية اليوم' : 'Launch Your Fragrance Production with Verified Partners'}
          </h2>
          <p
            style={{
              maxWidth: 600,
              margin: '0 auto 28px',
              fontSize: '0.975rem',
              opacity: 0.9,
              lineHeight: 1.6,
            }}
          >
            {isAr
              ? 'قدم متطلبات مشروعك عبر منصة التوريد بالجملة في دليل العود. احصل على عروض أسعار تنافسية من مصانع معتمدة ومطابقة لكافة اللوائح.'
              : 'Submit your batch volume, packaging requirements, and target launch window through OudGuide’s B2B procurement engine to receive direct quotations from verified facilities.'}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <Link
              href={`/${locale}/rfq`}
              style={{
                background: '#ffffff',
                color: '#0E8A6A',
                padding: '12px 28px',
                borderRadius: 8,
                fontWeight: 600,
                fontSize: '0.925rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                textDecoration: 'none',
              }}
            >
              {isAr ? 'تقديم طلب التصنيع' : 'Submit Manufacturing Brief'}
              <ArrowRight size={14} />
            </Link>
            <Link
              href={`/${locale}/for-businesses`}
              style={{
                background: 'rgba(255,255,255,0.15)',
                color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.3)',
                padding: '12px 24px',
                borderRadius: 8,
                fontWeight: 600,
                fontSize: '0.925rem',
                textDecoration: 'none',
              }}
            >
              {isAr ? 'معلومات المنتجين والمصانع' : 'Facility Provider Services'}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

import Link from 'next/link';
import { Mail, MessageSquare, ShieldCheck, FileText, Sparkles, Building2, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import { buildMetadata, SITE_URL } from '@/lib/metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';

  return buildMetadata({
    path: `/${locale}/contact`,
    title: isAr ? 'اتصل بنا · دليل العود' : 'Contact & Inquiries · OudGuide',
    description: isAr
      ? 'قنوات التواصل المعتمدة مع دليل العود: طلبات التوريد بالجملة، مساعد التوريد الذكي، تصحيح البيانات، وقنوات الشراكة المؤسسية.'
      : 'Official contact and inquiry channels for OudGuide: wholesale sourcing RFQ, AI sourcing assistant, editorial corrections, and partnership opportunities.',
    locale,
    alternateLocalePath: `/${locale === 'ar' ? 'en' : 'ar'}/contact`,
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === 'ar';

  const channels = [
    {
      icon: FileText,
      titleEn: 'Wholesale Sourcing & RFQ',
      titleAr: 'طلب توريد بالجملة وعروض أسعار',
      descEn: 'Submit your material specifications for neutral matching with verified distillers and plantations.',
      descAr: 'حدد متطلبات الصنف والكمية للحصول على عروض أسعار مباشرة من مقطرين ومزارع معتمدة دون عمولات.',
      href: `/${locale}/rfq`,
      btnTextEn: 'Start Wholesale RFQ',
      btnTextAr: 'تقديم طلب توريد',
      primary: true,
    },
    {
      icon: Sparkles,
      titleEn: 'AI Sourcing Assistant',
      titleAr: 'مساعد التوريد الذكي',
      descEn: 'Consult our verified knowledge base regarding origins, extraction methods, lab testing, and CITES compliance.',
      descAr: 'استشر المساعد حول أقاليم المنشأ، طرق التقطير، الفحوصات المخبرية، ولوائح اتفاقية سايتس.',
      href: `/${locale}/sourcing`,
      btnTextEn: 'Open Assistant',
      btnTextAr: 'بدء المحادثة',
      primary: false,
    },
    {
      icon: Building2,
      titleEn: 'Producer Membership & Claims',
      titleAr: 'عضوية وتوثيق المنتجين',
      descEn: 'Verified distillers and plantations can publish direct contact channels and showcase verified facilities.',
      descAr: 'يمكن للمقطرين والمزارع المعتمدة توثيق سجلاتهم ونشر بيانات الاتصال المباشرة للمشترين.',
      href: `/${locale}/membership`,
      btnTextEn: 'Supplier Membership',
      btnTextAr: 'عضوية الموردين',
      primary: false,
    },
    {
      icon: ShieldCheck,
      titleEn: 'Editorial & Fact Corrections',
      titleAr: 'التصحيحات والتدقيق التحريري',
      descEn: 'Report factual discrepancies, obsolete regulations, or citation adjustments to our editorial team.',
      descAr: 'أبلغ عن أي ملاحظات في التوثيق أو تصحيحات للمراجع العلمية إلى فريق التحرير.',
      href: `/${locale}/corrections`,
      btnTextEn: 'Submit Correction',
      btnTextAr: 'إرسال تصحيح',
      primary: false,
    },
    {
      icon: MessageSquare,
      titleEn: 'Corporate Partnerships',
      titleAr: 'الشراكات المؤسسية',
      descEn: 'Inquiries regarding institutional research data, laboratory accreditation, and wholesale integration.',
      descAr: 'استفسارات مراكز الأبحاث، المختبرات المعتمدة، وتكامل بيانات التجارة الدولية.',
      href: `/${locale}/partners/opportunities`,
      btnTextEn: 'Partner Inquiries',
      btnTextAr: 'فرص الشراكة',
      primary: false,
    },
    {
      icon: Mail,
      titleEn: 'Data Protection & Privacy',
      titleAr: 'حماية البيانات والخصوصية',
      descEn: 'Exercise your data rights under GDPR/NDMO or request buyer inquiry redaction.',
      descAr: 'ممارسة حقوق حماية البيانات الشخصية أو طلب تعديل بيانات طلبات التوريد.',
      href: `/${locale}/privacy`,
      btnTextEn: 'Privacy Portal',
      btnTextAr: 'بوابة الخصوصية',
      primary: false,
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: isAr ? 'اتصل بدليل العود' : 'Contact OudGuide',
    url: `${SITE_URL}/${locale}/contact`,
    description: isAr
      ? 'قنوات التواصل المعتمدة مع دليل العود لتوريد العود بالجملة وحماية بيانات المشترين.'
      : 'Official contact and procurement channels for OudGuide wholesale agarwood intelligence.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="section">
        <div className="container" style={{ maxWidth: 960 }}>
          <div className="section-head section-head-center" style={{ marginBottom: 36 }}>
            <span className="eyebrow eyebrow-no-rule">
              {isAr ? 'قنوات التواصل المعتمدة' : 'Official Channels'}
            </span>
            <h1 className="h1" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', margin: '8px 0 16px' }}>
              {isAr ? 'كيف يمكننا مساعدتك اليوم؟' : 'How can we assist you today?'}
            </h1>
            <p className="lede" style={{ maxWidth: '64ch', margin: '0 auto' }}>
              {isAr
                ? 'لحماية خصوصية المشترين والموردين ومنع التلاعب التجاري، يُوجَّه كل استفسار إلى مساره المتخصص والمشفر مباشرة.'
                : 'To protect buyer and supplier privacy while eliminating broker bias, inquiries are routed directly to dedicated, encrypted procurement protocols.'}
            </p>
          </div>

          <div className="grid-2" style={{ gap: 20 }}>
            {channels.map((ch, idx) => {
              const Icon = ch.icon;
              return (
                <div
                  key={idx}
                  className="card-frame"
                  style={{
                    padding: '28px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    background: ch.primary ? 'var(--green-50)' : '#fff',
                    borderColor: ch.primary ? 'var(--green-600)' : 'var(--line)',
                    borderRadius: 8,
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                      <div
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: '50%',
                          background: ch.primary ? 'var(--green-600)' : 'var(--surface-sunken)',
                          color: ch.primary ? '#fff' : 'var(--green-800)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon size={18} />
                      </div>
                      <h3 style={{ fontSize: '1.15rem', margin: 0, fontWeight: 600 }}>
                        {isAr ? ch.titleAr : ch.titleEn}
                      </h3>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--ink-muted)', lineHeight: 1.6, marginBottom: 20 }}>
                      {isAr ? ch.descAr : ch.descEn}
                    </p>
                  </div>

                  <Link
                    href={ch.href}
                    className={`btn ${ch.primary ? 'btn-primary' : 'btn-outline'} btn-sm`}
                    style={{ alignSelf: 'flex-start', gap: 6 }}
                  >
                    <span>{isAr ? ch.btnTextAr : ch.btnTextEn}</span>
                    <ArrowRight size={13} className="icon-dir-flip" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

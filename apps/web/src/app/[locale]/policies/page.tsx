import { Scale } from 'lucide-react';

export default async function PoliciesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === 'ar';

  const sections = [
    {
      title: isAr ? 'حيادية الربط التجاري وعدم التمييز' : 'Neutral Wholesale Matching',
      body: isAr
        ? 'تعمل منصة دليل العود كخدمة ربط تجاري مستقلة. يتلقى الموردون المؤهلون موجزات فنية مشفرة للمتطلبات. لا يتم تسليم بيانات المشتري لأي جهة إلا بعد اعتماده الصريح بالاسم.'
        : 'OudGuide acts as a neutral wholesale introduction service. All initial inquiry matching is brand-neutral. Eligible suppliers receive redacted technical briefs with zero buyer contact information until explicit buyer approval.',
    },
    {
      title: isAr ? 'الإفصاح عن الروابط التجارية وشراكة متجر المطلب' : 'Commercial Affiliation & Referral Disclosure',
      body: isAr
        ? 'قد تتضمن بعض الأدلة المعرفية روابط إحالة تسويقية واضحة لمتجر المطلب للتجزئة في دبي (ae.almutalib.com) لتوفير عينات مفحوصة. تحمل جميع هذه الروابط وسوم rel="sponsored" القانونية.'
        : 'Certain educational guides include clearly identified retail referral modules to our authorized merchant partner, Al Mutalib Perfumes in Dubai (ae.almutalib.com), for personal retail sampling. All referral links carry standard rel="sponsored" attributes.',
    },
    {
      title: isAr ? 'حماية بيانات الاتصال ومنع الاستخراج الآلي' : 'Public Contact Protection Standard',
      body: isAr
        ? 'يتم حجب أرقام الهواتف والبريد الإلكتروني وعناوين الشوارع في الملفات البحثية الأساسية حمايةً للموردين والمزارع من رسائل الاحتيال والجمع الآلي غير المصرح به.'
        : 'Direct contact numbers, emails, and street addresses remain completely hidden on all basic research profiles. Contact information is only unlocked for businesses that have verified ownership and activated Annual Business Visibility.',
    },
  ];

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 920 }}>
        <section className="masthead">
          <div className="masthead-inner">
            <div className="hero-tag">
              <Scale size={13} />
              <span>{isAr ? 'السياسات' : 'Editorial Policies'}</span>
            </div>
            <h1>
              {isAr ? 'سياسات النزاهة والعمليات التحريرية' : 'OudGuide Operating & Editorial Policies'}
              <span className="accent">
                {isAr ? 'حيادية · شفافية · حماية بيانات' : 'Neutrality · Transparency · Data Protection'}
              </span>
            </h1>
            <p className="hero-lead">
              {isAr
                ? 'المعايير المعتمدة لضمان حيادية المعلومات، حماية بيانات المشترين، والشفافية التامة في الروابط التجارية التابعة.'
                : 'Operational principles governing editorial neutrality, buyer privacy protection, and transparent commercial affiliations.'}
            </p>
          </div>
        </section>

        <div style={{ marginTop: 56, display: 'flex', flexDirection: 'column', gap: 24 }}>
          {sections.map((s, i) => (
            <article key={i} className="card-frame" style={{ padding: 36 }}>
              <span className="eyebrow eyebrow-crimson" style={{ display: 'block', marginBottom: 8 }}>
                {isAr ? `البند ${String(i + 1).padStart(2, '0')}` : `Section ${String(i + 1).padStart(2, '0')}`}
              </span>
              <h2 className="h3 text-crimson">{s.title}</h2>
              <p className="lede">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
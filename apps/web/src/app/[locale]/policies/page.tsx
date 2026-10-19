import Link from 'next/link';

export default async function PoliciesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === 'ar';

  return (
    <div>
      <div className="hero">
        <h2>{isAr ? 'سياسات النزاهة والعمليات التحريرية' : 'OudGuide Operating & Editorial Policies'}</h2>
        <p>
          {isAr
            ? 'المعايير المعتمدة لضمان حيادية المعلومات، حماية بيانات المشترين، والشفافية التامة في الروابط التجارية التابعة.'
            : 'Operational principles governing editorial neutrality, buyer privacy protection, and transparent commercial affiliations.'}
        </p>
      </div>

      <div className="section-box">
        <h3>1. {isAr ? 'حيادية الربط التجاري وعدم التمييز' : 'Neutral Wholesale Matching'}</h3>
        <p>
          {isAr
            ? 'تعمل منصة دليل العود كخدمة ربط تجاري مستقلة. يتلقى الموردون المؤهلون موجزات فنية مشفرة للمتطلبات. لا يتم تسليم بيانات المشتري لأي جهة إلا بعد اعتماده الصريح بالاسم.'
            : 'OudGuide acts as a neutral wholesale introduction service. All initial inquiry matching is brand-neutral. Eligible suppliers receive redacted technical briefs with zero buyer contact information until explicit buyer approval.'}
        </p>
      </div>

      <div className="section-box">
        <h3>2. {isAr ? 'الإفصاح عن الروابط التجارية وشراكة متجر المطلب' : 'Commercial Affiliation & Referral Disclosure'}</h3>
        <p>
          {isAr
            ? 'قد تتضمن بعض الأدلة المعرفية روابط إحالة تسويقية واضحة لمتجر المطلب للتجزئة في دبي (ae.almutalib.com) لتوفير عينات مفحوصة. تحمل جميع هذه الروابط وسوم rel="sponsored" القانونية.'
            : 'Certain educational guides include clearly identified retail referral modules to our authorized merchant partner, Al Mutalib Perfumes in Dubai (ae.almutalib.com), for personal retail sampling. All referral links carry standard rel="sponsored" attributes.'}
        </p>
      </div>

      <div className="section-box">
        <h3>3. {isAr ? 'حماية بيانات الاتصال ومنع الاستخراج الآلي' : 'Public Contact Protection Standard'}</h3>
        <p>
          {isAr
            ? 'يتم حجب أرقام الهواتف والبريد الإلكتروني وعناوين الشوارع في الملفات البحثية الأساسية حمايةً للموردين والمزارع من رسائل الاحتيال والجمع الآلي غير المصرح به.'
            : 'Direct contact numbers, emails, and street addresses remain completely hidden on all basic research profiles. Contact information is only unlocked for businesses that have verified ownership and activated Annual Business Visibility.'}
        </p>
      </div>
    </div>
  );
}

import Link from 'next/link';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === 'ar';

  return (
    <div>
      <div className="hero">
        <h2>
          {isAr
            ? 'خدمة الربط التجاري المحايدة لتوريد العود الطبيعي والزيوت العطرية بالجملة.'
            : 'Find verified suppliers for your wholesale oud & fragrance requirement.'}
        </h2>
        <p>
          {isAr
            ? 'حدد متطلباتك بدقة. يراجع فريق دليل العود طلبك ويرشح أفضل الموردين المؤهلين. لن يتم تسليم معلومات الاتصال الخاصة بك إلا بعد موافقتك الصريحة على أسماء الشركات المختارة.'
            : 'Tell us what you need. OudGuide will review your technical requirement and help you choose suitable distillers and wholesalers. You approve who receives your contact details.'}
        </p>
        <p style={{ marginTop: '16px' }}>
          <Link href={`/${locale}/rfq`} className="btn-primary">
            {isAr ? 'تقديم طلب توريد بالجملة ←' : 'Start a Wholesale Requirement →'}
          </Link>
        </p>
      </div>

      <div className="grid-2">
        <div className="card">
          <h3>{isAr ? '📚 الموسوعة المعرفية' : '📚 Researched Guides'}</h3>
          <p>
            {isAr
              ? 'أكثر من 80 دليلاً توثيقياً عن مناطق الاستخراج، طرق التقطير، درجات الجودة، والأنظمة الرقابية واتفاقية سايتس.'
              : 'Over 80 researched guides covering wild vs cultivated wood, copper-deg distillation, grading methods, and regulatory compliance.'}
          </p>
          <Link href={`/${locale}/guides`} className="btn-secondary">
            {isAr ? 'استعراض الموسوعة' : 'Explore Guides'}
          </Link>
        </div>

        <div className="card">
          <h3>{isAr ? '🏪 دليل الموردين والمزارع' : '🏪 Verified Supplier Directory'}</h3>
          <p>
            {isAr
              ? 'دليل للمنتجين والمقطرين والتجار حول العالم مع حجب بيانات الاتصال للحفاظ على نزاهة المعاملات.'
              : 'Global directory of distillers, plantations, and wholesalers with strict contact protection for basic profiles.'}
          </p>
          <Link href={`/${locale}/directory`} className="btn-secondary">
            {isAr ? 'استعراض دليل الشركات' : 'Browse Directory'}
          </Link>
        </div>
      </div>

      <div className="card" style={{ marginTop: '24px' }}>
        <h3>{isAr ? '🌍 دول ومناطق الإنتاج العالمية' : '🌍 Producing Regions & Global Markets'}</h3>
        <p>
          {isAr
            ? 'استكشف 249 دولة وإقليماً مع التركيز على مناطق العود الطبيعي: أسام، ترات، كوه كونغ، كاليمانتان، بابوا، وغيرها.'
            : 'Discover 249 researched countries and territories, detailing indigenous Aquilaria species and major trading hubs.'}
        </p>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '12px' }}>
          <Link href={`/${locale}/world/IN`} className="badge badge-unlocked">India (Assam)</Link>
          <Link href={`/${locale}/world/KH`} className="badge badge-unlocked">Cambodia (Koh Kong)</Link>
          <Link href={`/${locale}/world/TH`} className="badge badge-unlocked">Thailand (Trat)</Link>
          <Link href={`/${locale}/world/ID`} className="badge badge-unlocked">Indonesia (Kalimantan)</Link>
          <Link href={`/${locale}/world/AE`} className="badge badge-member">United Arab Emirates</Link>
          <Link href={`/${locale}/world`} className="badge badge-locked">View All 249 Markets →</Link>
        </div>
      </div>

      <div className="section-box" style={{ marginTop: '30px' }}>
        <h3>{isAr ? 'كيف تعمل خدمة الربط التجاري المحايدة؟' : 'How OudGuide Neutral Matching Works'}</h3>
        <ol style={{ paddingInlineStart: '20px', margin: '10px 0' }}>
          <li style={{ marginBottom: '8px' }}>
            <strong>{isAr ? 'تقديم المتطلبات:' : 'Submit your requirement:'}</strong>{' '}
            {isAr
              ? 'املأ استمارة التوريد التدريجية (نوع العود، الكمية، بلد الوصول، عينات، الميزانية).'
              : 'Complete the progressive RFQ specification (wood/oil, quantity, destination, samples, target price).'}
          </li>
          <li style={{ marginBottom: '8px' }}>
            <strong>{isAr ? 'التحقق من وسيلة الاتصال:' : 'Verify contact channel:'}</strong>{' '}
            {isAr
              ? 'تحقق من بريدك أو هاتفك عبر رمز لمرة واحدة (OTP) قبل اتخاذ أي إجراء.'
              : 'Confirm your email or phone via a one-time 6-digit OTP before any brief dispatch.'}
          </li>
          <li style={{ marginBottom: '8px' }}>
            <strong>{isAr ? 'موجز مشفر بدون بيانات شخصية:' : 'Redacted brief to eligible suppliers:'}</strong>{' '}
            {isAr
              ? 'يطلع الموردون المؤهلون على المواصفات الفنية فقط بدون اسمك أو بيانات اتصالك.'
              : 'Verified partners inspect requirement specifications with zero buyer identifying data.'}
          </li>
          <li>
            <strong>{isAr ? 'موافقة المشتري الصريحة:' : 'Explicit buyer approval:'}</strong>{' '}
            {isAr
              ? 'تراجع المرشحين وتعتمد ما يصل إلى 3 موردين بالاسم قبل كشف بياناتك لهم.'
              : 'Review candidate suppliers and approve up to 3 named businesses before contact details are released.'}
          </li>
        </ol>
      </div>
    </div>
  );
}

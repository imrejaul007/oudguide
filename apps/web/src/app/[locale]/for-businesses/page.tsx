import Link from 'next/link';

export default async function ForBusinessesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === 'ar';

  return (
    <div>
      <div className="hero">
        <h2>{isAr ? 'خدمات دليل العود للشركات والموردين والمقطرين' : 'OudGuide for Distillers, Wholesalers & Brand Owners'}</h2>
        <p>
          {isAr
            ? 'ارتقِ بظهور مؤسستك وتواصل مع المشترين التجاريين الدوليين. اختر بين توثيق ملفك مجاناً أو الاشتراك في العضوية التجارية السنوية لإتاحة بيانات الاتصال المباشرة.'
            : 'Enhance your international credibility and receive qualified wholesale buyer inquiries. Claim your basic profile or activate Annual Business Visibility to enable direct contact display.'}
        </p>
      </div>

      <div className="grid-2">
        <div className="card">
          <span className="badge badge-locked">{isAr ? 'مجاني' : 'Standard'}</span>
          <h3>{isAr ? 'توثيق الملف البحثي (Claim Profile)' : 'Verified Ownership Claim'}</h3>
          <p style={{ fontSize: '14px' }}>
            {isAr
              ? 'وثق ملكيتك لملف شركتك في دليل العود. حدث بيانات الوصف والمنتجات ومناطق الاستخراج المعتمدة مجاناً.'
              : 'Claim your existing directory profile, verify business ownership, and update your catalog specifications, distillation methods, and verified origin declarations.'}
          </p>
          <ul style={{ fontSize: '13px', paddingInlineStart: '20px', margin: '14px 0' }}>
            <li>{isAr ? 'شارة جهة موثقة (Claimed Badge)' : 'Verified Claim Badge on Profile'}</li>
            <li>{isAr ? 'تحديث وتصحيح البيانات الفنية' : 'Update catalog & origin specs'}</li>
            <li>{isAr ? 'المشاركة في فرص التوريد المحايدة' : 'Participate in neutral RFQ matching'}</li>
            <li>{isAr ? 'أرقام الاتصال تظل محجوبة لحمايتك' : 'Contacts protected from scrapers'}</li>
          </ul>
          <Link href={`/${locale}/directory`} className="btn-secondary" style={{ width: '100%', textAlign: 'center' }}>
            {isAr ? 'ابحث عن شركتك لتوثيقها' : 'Find Your Company in Directory'}
          </Link>
        </div>

        <div className="card" style={{ borderColor: 'var(--color-gold)', background: '#fffdf8' }}>
          <span className="badge badge-member">{isAr ? 'عضوية مدفوعة' : 'Recommended'}</span>
          <h3>{isAr ? 'العضوية التجارية السنوية' : 'Annual Business Visibility'}</h3>
          <p style={{ fontSize: '26px', fontWeight: 700, color: 'var(--color-primary)', margin: '4px 0 10px' }}>
            1,200 AED <span style={{ fontSize: '14px', fontWeight: 400, color: 'var(--color-muted)' }}>{isAr ? '/ سنوياً (ما يعادل 100 د.إ / شهرياً)' : '/ year (equiv. 100 AED/mo)'}</span>
          </p>
          <p style={{ fontSize: '14px' }}>
            {isAr
              ? 'أتح للمشترين التواصل معك مباشرة عبر البريد والهاتف والواتساب والموقع الرسمي مع أولوية الظهور في نتائج البحث.'
              : 'Unlock full direct contact display (Email, Phone, WhatsApp, Official Address) and receive priority matching for international wholesale buyers.'}
          </p>
          <ul style={{ fontSize: '13px', paddingInlineStart: '20px', margin: '14px 0' }}>
            <li><strong>{isAr ? 'إتاحة بيانات الاتصال المباشرة' : 'Direct Contact Display Unlocked'}</strong></li>
            <li>{isAr ? 'شارة عضوية سنوية ذهبية' : 'Gold Subscribed Member Badge'}</li>
            <li>{isAr ? 'ظهور مميز في الدليل والبحث' : 'Featured directory placement'}</li>
            <li>{isAr ? 'أولوية الترشيح لطلبات التوريد' : 'Priority matching in RFQ candidate pools'}</li>
          </ul>
          <Link href={`/${locale}/membership`} className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>
            {isAr ? 'الاشتراك وتفعيل العضوية ←' : 'Subscribe & Unlock Contacts →'}
          </Link>
        </div>
      </div>
    </div>
  );
}

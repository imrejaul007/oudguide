import Link from 'next/link';

export default async function ForBusinessesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === 'ar';

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '10px 0 60px' }}>
      {/* HERO BANNER */}
      <div className="luxury-hero" style={{ padding: '48px 36px', marginBottom: '40px' }}>
        <div className="hero-tag">
          <span>🏛️</span>
          <span>{isAr ? 'منظومة دليل العود للمنتجين والمقطرين' : 'Distiller & Producer Commercial System'}</span>
        </div>
        <h1 className="hero-headline font-display" style={{ fontSize: '36px', margin: '0 0 12px' }}>
          {isAr
            ? 'خدمات دليل العود لشركات التقطير والمزارع المستدامة'
            : 'Grow Your Wholesale Reach with Institutional Perfumers'}
        </h1>
        <p className="hero-lead" style={{ fontSize: '16px', margin: 0, maxWidth: '780px' }}>
          {isAr
            ? 'احصل على ظهور تجاري دولي وتواصل مع المشترين ومصممي العطور في الخليج وأوروبا. اختر بين توثيق ملفك الأساسي مجاناً أو تفعيل العضوية السنوية لإتاحة بيانات الاتصال المباشرة.'
            : 'Establish international provenance, receive qualified buyer match briefs, and publish verified laboratory testing. Choose between free ownership claim or annual business visibility.'}
        </p>
      </div>

      {/* TIER COMPARISON */}
      <div className="grid-2" style={{ gap: '30px' }}>
        {/* FREE CLAIM TIER */}
        <div className="luxury-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '36px' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span className="badge-locked" style={{ fontSize: '11px' }}>{isAr ? 'مجاني مدى الحياة' : 'Standard Tier'}</span>
              <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-text-muted)' }}>0 AED</span>
            </div>
            <h2 className="card-title font-display" style={{ fontSize: '24px', margin: '0 0 10px' }}>
              {isAr ? 'توثيق الملكية (Verified Claim)' : 'Verified Ownership Claim'}
            </h2>
            <p className="card-desc" style={{ fontSize: '14.5px' }}>
              {isAr
                ? 'وثق ملكيتك لملف معملك أو شركتك في دليل العود. حدث بيانات الوصف والمنتجات ومناطق الاستخراج المعتمدة مجاناً.'
                : 'Claim your existing directory profile, verify business credentials, and update your catalog specifications, distillation methods, and verified origin declarations.'}
            </p>

            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '20px', marginTop: '20px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-crimson)', margin: '0 0 14px' }}>
                {isAr ? 'المزايا المشمولة:' : 'Included Features:'}
              </h3>
              <ul style={{ paddingInlineStart: '20px', fontSize: '14px', color: '#444', lineHeight: 1.8 }}>
                <li>{isAr ? 'شارة جهة موثقة (Claimed Badge)' : 'Verified Claim Badge on Profile'}</li>
                <li>{isAr ? 'تحديث وتصحيح البيانات الفنية والأصناف' : 'Update catalog & origin specs'}</li>
                <li>{isAr ? 'المشاركة في فرص التوريد المحايدة (Match Briefs)' : 'Participate in neutral RFQ matching'}</li>
                <li>{isAr ? 'أرقام الاتصال تظل محجوبة لحمايتك من الاستخراج الآلي' : 'Contacts protected from scrapers'}</li>
              </ul>
            </div>
          </div>

          <div style={{ marginTop: '28px' }}>
            <Link href={`/${locale}/directory`} className="btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
              {isAr ? 'البحث عن ملف شركتك لتوثيقه ←' : 'Find Your Profile to Claim →'}
            </Link>
          </div>
        </div>

        {/* ANNUAL MEMBERSHIP TIER */}
        <div className="luxury-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '36px', borderColor: 'var(--color-gold)', background: '#fffdfa', boxShadow: 'var(--shadow-md)' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span className="badge-gold">{isAr ? 'العضوية الذهبية' : 'Commercial Priority'}</span>
              <span style={{ fontSize: '12px', color: 'var(--color-gold-dark)', fontWeight: 700 }}>ANNUAL PLAN</span>
            </div>
            <h2 className="card-title font-display" style={{ fontSize: '24px', margin: '0 0 6px', color: 'var(--color-crimson)' }}>
              {isAr ? 'العضوية التجارية السنوية' : 'Annual Business Visibility'}
            </h2>
            <div style={{ margin: '0 0 16px' }}>
              <span style={{ fontSize: '32px', fontWeight: 900, color: 'var(--color-crimson)', fontFamily: 'var(--font-display)' }}>1,200 AED</span>
              <span style={{ fontSize: '13.5px', color: 'var(--color-text-muted)', marginInlineStart: '8px' }}>
                {isAr ? '/ سنوياً (ما يعادل 100 د.إ / شهرياً)' : '/ year (equiv. 100 AED/mo)'}
              </span>
            </div>
            <p className="card-desc" style={{ fontSize: '14.5px' }}>
              {isAr
                ? 'أتح للمشترين التواصل معك مباشرة عبر البريد والهاتف والواتساب والموقع الرسمي مع أولوية الظهور في نتائج البحث وترشيحات المور��ين.'
                : 'Unlock full direct contact display (Email, Phone, WhatsApp, Official Physical Address) and receive priority placement in international wholesale buyer matching pools.'}
            </p>

            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '20px', marginTop: '20px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-gold-dark)', margin: '0 0 14px' }}>
                {isAr ? 'جميع مزايا التوثيق بالإضافة إلى:' : 'All Verified Features Plus:'}
              </h3>
              <ul style={{ paddingInlineStart: '20px', fontSize: '14px', color: '#333', lineHeight: 1.8 }}>
                <li><strong>{isAr ? 'إتاحة بيانات الاتصال المباشرة للمشترين' : 'Direct Contact Display Unlocked (Email, Phone, WA)'}</strong></li>
                <li>{isAr ? 'شارة عضوية سنوية ذهبية موثقة' : 'Gold Subscribed Member Badge'}</li>
                <li>{isAr ? 'أولوية الظهور في نتائج الدليل والبحث' : 'Featured directory placement in regional hubs'}</li>
                <li>{isAr ? 'ترشيح ذو أولوية في طلبات التوريد بالجملة' : 'Priority matching in RFQ candidate pools'}</li>
              </ul>
            </div>
          </div>

          <div style={{ marginTop: '28px' }}>
            <Link href={`/${locale}/membership`} className="btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
              <span>{isAr ? 'الاشتراك وتفعيل العضوية السنوية' : 'Subscribe & Unlock Contacts (1,200 AED)'}</span>
              <span>{isAr ? '←' : '→'}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

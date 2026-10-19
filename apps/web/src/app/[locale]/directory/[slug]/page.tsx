import Link from 'next/link';
import { notFound } from 'next/navigation';
import { domain, seed } from '@/lib/data';


export default async function BusinessProfilePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const isAr = locale === 'ar';

  const biz = domain.getBusinessBySlug(slug);
  if (!biz) {
    notFound();
  }

  return (
    <div>
      {/* BREADCRUMB */}
      <div style={{ margin: '20px 0 16px', fontSize: '13.5px', color: 'var(--color-text-muted)' }}>
        <Link href={`/${locale}`}>Home</Link>
        {' > '}
        <Link href={`/${locale}/directory`}>{isAr ? 'دليل الشركات' : 'Directory'}</Link>
        {' > '}
        <span>{biz.name}</span>
      </div>

      {/* LUXURY ENTITY HERO HEADER */}
      <div className="luxury-hero" style={{ padding: '48px 40px', marginBottom: '32px' }}>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
          <span className="badge-forest">📍 {biz.country_name || biz.country_id}</span>
          {biz.is_claimed && <span className="badge-crimson">{isAr ? 'ملكية موثقة' : 'Verified Ownership Claim'}</span>}
          {biz.contact_unlocked ? (
            <span className="badge-gold">{isAr ? 'عضوية تجارية سنوية' : 'Subscribed Member'}</span>
          ) : (
            <span className="badge-locked">{isAr ? 'ملف أساسي محمي' : 'Basic Research Record'}</span>
          )}
        </div>

        <h1 className="hero-headline font-display" style={{ fontSize: '38px', margin: '0 0 10px' }}>
          {biz.name}
        </h1>
        <p className="hero-lead" style={{ fontSize: '16px', margin: '0 0 24px', maxWidth: '820px' }}>
          📍 {biz.city ? `${biz.city}, ` : ''}{biz.country_name || biz.country_id} · <strong>{biz.category || biz.business_type}</strong>
          {biz.established_year ? ` · Est. ${biz.established_year}` : ''}
        </p>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Link href={`/${locale}/rfq?profile=${encodeURIComponent(slug)}`} className="btn-gold">
            <span>{isAr ? 'طلب تسعير بالجملة من هذه الشركة' : 'Request Wholesale Quotation'}</span>
            <span>{isAr ? '←' : '→'}</span>
          </Link>
          {!biz.is_claimed && (
            <Link href={`/${locale}/for-businesses`} className="btn-outline" style={{ background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>
              {isAr ? 'هل أنت صاحب هذا العمل؟ وثق ملفك' : 'Claim This Business Profile'}
            </Link>
          )}
        </div>
      </div>

      {/* STRICT CONTACT GATING SECTION */}
      {biz.contact_unlocked ? (
        <div className="form-card" style={{ background: '#f6fbf8', borderColor: '#c8e6d5', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <span style={{ fontSize: '20px' }}>✓</span>
            <h3 style={{ margin: 0, color: '#1b4d3e', fontSize: '18px' }}>
              {isAr ? 'بيانات الاتصال المباشرة المعتمدة' : 'Verified Commercial Contact Coordinates'}
            </h3>
          </div>
          <p style={{ fontSize: '14px', color: '#385e49', margin: '0 0 16px' }}>
            {isAr
              ? 'هذه المنشأة مشتركة في العضوية السنوية لدليل العود وبياناتها متاحة للاتصال المباشر.'
              : 'This organization holds an active Annual Business Visibility membership with public contact display authorized.'}
          </p>

          <div className="grid-2" style={{ fontSize: '14.5px' }}>
            <div>
              <p style={{ margin: '6px 0' }}>📧 <strong>Official Email:</strong> <a href={`mailto:${biz.email}`} style={{ textDecoration: 'underline' }}>{biz.email}</a></p>
              {biz.phone && <p style={{ margin: '6px 0' }}>📞 <strong>Direct Phone:</strong> {biz.phone}</p>}
              {biz.whatsapp && <p style={{ margin: '6px 0' }}>💬 <strong>WhatsApp Business:</strong> <a href={`https://wa.me/${biz.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener">{biz.whatsapp}</a></p>}
            </div>
            <div>
              {biz.street_address && <p style={{ margin: '6px 0' }}>🏢 <strong>Physical Address:</strong> {biz.street_address}</p>}
              {biz.website_url && <p style={{ margin: '6px 0' }}>🌐 <strong>Official Website:</strong> <a href={biz.website_url} target="_blank" rel="noopener" style={{ textDecoration: 'underline' }}>{biz.website_url} ↗</a></p>}
            </div>
          </div>
        </div>
      ) : (
        <div className="privacy-shield" style={{ marginBottom: '32px' }}>
          <div className="privacy-shield-icon">🔒</div>
          <div className="privacy-shield-text">
            <h4 style={{ margin: '0 0 6px 0', color: '#856404', fontSize: '16px' }}>
              {isAr ? 'ملف بحثي أساسي — بيانات الاتصال محجوبة تلقائياً' : 'Basic Directory Record — Contacts Protected by Default'}
            </h4>
            <p style={{ margin: '0 0 12px 0', fontSize: '14px' }}>
              {isAr
                ? 'تم توثيق هذا الملف من السجلات العامة لقطاع العود. لمنع الرسائل غير المرغوبة وحماية نزاهة المعاملات، لا تظهر أرقام الهواتف أو البريد المباشر. استخدم خدمة الربط المحايدة لطلب التسعير.'
                : 'This profile is an objective industry reference entry. To prevent automated harvesting and protect producers, direct phone numbers, email addresses, and street locations remain hidden on basic profiles. You can obtain authentic pricing and samples via OudGuide neutral wholesale matching.'}
            </p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <Link href={`/${locale}/rfq?profile=${encodeURIComponent(slug)}`} className="btn-crimson" style={{ padding: '8px 16px', fontSize: '13px' }}>
                {isAr ? 'طلب تسعير عبر خدمة الربط المحايدة' : 'Request Quote via Neutral Matching'}
              </Link>
              {!biz.is_claimed && (
                <Link href={`/${locale}/for-businesses`} className="btn-outline" style={{ padding: '8px 16px', fontSize: '13px' }}>
                  {isAr ? 'هل أنت صاحب العمل؟ وثق ملفك الآن' : 'Are you the owner? Claim this profile →'}
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

      {/* OVERVIEW & CATALOG */}
      <div className="luxury-card" style={{ marginBottom: '32px' }}>
        <h3 className="card-title" style={{ fontSize: '22px', borderBottom: '1px solid var(--color-border)', paddingBottom: '12px' }}>
          {isAr ? 'عن المنشأة والقدرات الإنتاجية' : 'Distillery Profile & Commercial Scope'}
        </h3>
        <p style={{ fontSize: '15.5px', lineHeight: 1.7, margin: '16px 0 0' }}>
          {biz.description}
        </p>
      </div>

      <div className="grid-2" style={{ marginBottom: '32px' }}>
        <div className="luxury-card">
          <h3 className="card-title" style={{ fontSize: '20px' }}>
            🪵 {isAr ? 'أصناف العود والمنتجات المعتمدة' : 'Verified Product Catalog'}
          </h3>
          <ul style={{ paddingInlineStart: '20px', margin: '14px 0', fontSize: '14.5px' }}>
            {(biz.product_families || ['Oud wood', 'Oud oil', 'Perfume oil']).map((f, i) => (
              <li key={i} style={{ marginBottom: '6px' }}>{f}</li>
            ))}
          </ul>
        </div>

        <div className="luxury-card">
          <h3 className="card-title" style={{ fontSize: '20px' }}>
            🗺️ {isAr ? 'مناطق التوريد وغابات الاستخراج' : 'Documented Terroirs & Habitats'}
          </h3>
          <ul style={{ paddingInlineStart: '20px', margin: '14px 0', fontSize: '14.5px' }}>
            {(biz.verified_origins || ['Natural forest & plantation']).map((o, i) => (
              <li key={i} style={{ marginBottom: '6px' }}>{o}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="luxury-card" style={{ marginBottom: '40px' }}>
        <h3 className="card-title" style={{ fontSize: '20px' }}>
          📦 {isAr ? 'سياسة العينات والحد الأدنى للطلب' : 'Sampling Protocol & Commercial Policy'}
        </h3>
        <div className="grid-2" style={{ marginTop: '14px', fontSize: '14.5px' }}>
          <div>
            <strong>{isAr ? 'إمكانية توفير عينات فحص:' : 'Sample Availability:'}</strong>{' '}
            {biz.sample_availability ? (isAr ? 'نعم، متاحة للطلبات المؤهلة' : 'Available for qualified commercial inquiries') : (isAr ? 'غير محدد' : 'Not specified')}
          </div>
          <div>
            <strong>{isAr ? 'الحد الأدنى للطلب (MOQ):' : 'Minimum Order Quantity (MOQ):'}</strong>{' '}
            {biz.minimum_order_quantity || (isAr ? 'يحدد بناءً على نوع الصنف' : 'Determined upon quotation')}
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', padding: '30px 0' }}>
        <Link href={`/${locale}/rfq?profile=${encodeURIComponent(slug)}`} className="btn-gold" style={{ padding: '14px 36px', fontSize: '16px' }}>
          <span>{isAr ? 'تقديم طلب توريد بالجملة من هذه الشركة' : 'Submit Wholesale Requirement for this Supplier'}</span>
          <span>{isAr ? '←' : '→'}</span>
        </Link>
      </div>
    </div>
  );
}

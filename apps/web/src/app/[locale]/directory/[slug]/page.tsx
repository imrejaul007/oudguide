import { seed, domain } from '@/lib/data';
import Link from 'next/link';
import { notFound } from 'next/navigation';





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
      <div style={{ marginBottom: '16px' }}>
        <Link href={`/${locale}/directory`} style={{ fontSize: '14px' }}>
          {isAr ? '← العودة إلى دليل الشركات' : '← Back to Directory'}
        </Link>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
        {biz.is_claimed && <span className="badge badge-member">{isAr ? 'جهة موثقة' : 'Verified Claim'}</span>}
        {biz.has_active_membership && <span className="badge badge-member">{isAr ? 'عضوية تجارية سنوية' : 'Subscribed Member'}</span>}
        {biz.contact_unlocked ? (
          <span className="badge badge-unlocked">{isAr ? 'بيانات الاتصال متاحة' : 'Direct Contact Enabled'}</span>
        ) : (
          <span className="badge badge-locked">{isAr ? 'ملف بحثي أساسي — الاتصال محجوب' : 'Basic Profile — Contacts Hidden'}</span>
        )}
      </div>

      <h2 style={{ fontSize: '32px', margin: '4px 0 8px 0', color: 'var(--color-primary)' }}>{biz.name}</h2>
      <p style={{ fontSize: '15px', color: 'var(--color-muted)', margin: '0 0 20px 0' }}>
        📍 {biz.city ? `${biz.city}, ` : ''}{biz.country_name || biz.country_id} · <strong>{biz.category || biz.business_type}</strong>
        {biz.established_year ? ` · Est. ${biz.established_year}` : ''}
      </p>

      {/* STRICT CONTACT GATING BANNER */}
      {biz.contact_unlocked ? (
        <div className="section-box" style={{ background: '#f8fdf9', borderColor: '#c3e6cb' }}>
          <h3 style={{ color: '#155724' }}>{isAr ? 'بيانات الاتصال المعتمدة' : 'Verified Contact Information'}</h3>
          <p style={{ margin: '8px 0' }}>
            📧 <strong>Email:</strong> <a href={`mailto:${biz.email}`}>{biz.email}</a>
          </p>
          {biz.phone && (
            <p style={{ margin: '8px 0' }}>
              📞 <strong>Phone:</strong> {biz.phone}
            </p>
          )}
          {biz.whatsapp && (
            <p style={{ margin: '8px 0' }}>
              💬 <strong>WhatsApp:</strong> <a href={`https://wa.me/${biz.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener">{biz.whatsapp}</a>
            </p>
          )}
          {biz.street_address && (
            <p style={{ margin: '8px 0' }}>
              🏢 <strong>Address:</strong> {biz.street_address}
            </p>
          )}
          {biz.website_url && (
            <p style={{ margin: '8px 0' }}>
              🌐 <strong>Official Website:</strong> <a href={biz.website_url} target="_blank" rel="noopener">{biz.website_url}</a>
            </p>
          )}
        </div>
      ) : (
        <div className="banner-warning">
          <h4 style={{ margin: '0 0 6px 0', color: '#856404' }}>
            {isAr ? 'ملف بحثي أساسي — بيانات الاتصال محجوبة تلقائياً' : 'Basic Research Profile — Contacts Hidden by Default'}
          </h4>
          <p style={{ margin: '0 0 10px 0', fontSize: '14px' }}>
            {isAr
              ? 'تم توثيق هذا الملف من المصادر والسجلات العامة. لحماية المشترين والموردين ومنع الرسائل غير المرغوبة، لا يتم عرض البريد أو أرقام الهواتف مباشرة لغير المشتركين.'
              : 'This profile is compiled from public industry records. To protect businesses from automated scraping and spam, direct phone numbers, email addresses, and street locations remain hidden on basic profiles.'}
          </p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <Link href={`/${locale}/rfq?profile=${encodeURIComponent(slug)}`} className="btn-primary" style={{ padding: '8px 16px', fontSize: '13px' }}>
              {isAr ? 'طلب توريد من خلال خدمة الربط المحايدة' : 'Request Quotation via Neutral Matching'}
            </Link>
            {!biz.is_claimed && (
              <Link href={`/${locale}/for-businesses`} className="btn-secondary" style={{ padding: '8px 16px', fontSize: '13px' }}>
                {isAr ? 'هل أنت صاحب هذا العمل؟ وثق ملفك' : 'Are you the owner? Claim this profile'}
              </Link>
            )}
          </div>
        </div>
      )}

      <div className="card">
        <h3>{isAr ? 'عن الشركة والنشاط' : 'About the Organization'}</h3>
        <p style={{ fontSize: '15px' }}>{biz.description}</p>
      </div>

      <div className="grid-2">
        <div className="section-box">
          <h3>{isAr ? 'أصناف العود والمنتجات' : 'Verified Product Families'}</h3>
          <ul style={{ paddingInlineStart: '20px', margin: '8px 0' }}>
            {(biz.product_families || ['Oud wood', 'Oud oil']).map((f, i) => (
              <li key={i} style={{ marginBottom: '4px' }}>{f}</li>
            ))}
          </ul>
        </div>

        <div className="section-box">
          <h3>{isAr ? 'مصادر ومناطق الاستخراج' : 'Documented Material Origins'}</h3>
          <ul style={{ paddingInlineStart: '20px', margin: '8px 0' }}>
            {(biz.verified_origins || ['Natural forest & plantation']).map((o, i) => (
              <li key={i} style={{ marginBottom: '4px' }}>{o}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="section-box">
        <h3>{isAr ? 'شروط التوريد والعينات' : 'Sample & Commercial Terms'}</h3>
        <p>
          <strong>{isAr ? 'إمكانية توفير عينات فحص:' : 'Sample Availability:'}</strong>{' '}
          {biz.sample_availability ? (isAr ? 'نعم، متاحة للطلبات المؤهلة' : 'Available for qualified commercial inquiries') : (isAr ? 'غير محدد' : 'Not specified')}
        </p>
        <p>
          <strong>{isAr ? 'الحد الأدنى للطلب (MOQ):' : 'Minimum Order Quantity (MOQ):'}</strong>{' '}
          {biz.minimum_order_quantity || (isAr ? 'يحدد بناءً على نوع الصنف' : 'Determined upon quotation')}
        </p>
      </div>

      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <Link href={`/${locale}/rfq?profile=${encodeURIComponent(slug)}`} className="btn-primary" style={{ padding: '12px 28px', fontSize: '16px' }}>
          {isAr ? 'تقديم طلب توريد بالجملة من هذه الشركة ←' : 'Submit a Wholesale Requirement for this Supplier →'}
        </Link>
      </div>
    </div>
  );
}

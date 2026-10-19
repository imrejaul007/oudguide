import { seed, domain } from '@/lib/data';
import Link from 'next/link';





export default async function DirectoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ country?: string; role?: string; search?: string }>;
}) {
  const { locale } = await params;
  const { country, role, search } = await searchParams;
  const isAr = locale === 'ar';

  const businesses = domain.listBusinesses({
    country_id: country,
    role: role,
    search: search,
  });

  return (
    <div>
      <div className="hero">
        <h2>{isAr ? 'دليل مصنعي وموردي العود المعتمدين' : 'Worldwide Oud Supplier Directory'}</h2>
        <p>
          {isAr
            ? 'تصفح شركات التقطير والمزارع والتجار المستقلين. يتم حجب بيانات الاتصال للملفات الأساسية حمايةً للمشترين والموردين.'
            : 'Independent discovery of distillers, plantations, and wholesalers. Contact details are hidden by default on basic research profiles.'}
        </p>
      </div>

      <div className="card" style={{ padding: '16px 20px', marginBottom: '24px' }}>
        <form method="GET" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ flex: '1 1 200px' }}>
            <input
              type="text"
              name="search"
              placeholder={isAr ? 'البحث بالاسم أو المدينة...' : 'Search by name, city or material...'}
              defaultValue={search || ''}
            />
          </div>
          <div style={{ flex: '0 1 160px' }}>
            <select name="role" defaultValue={role || ''}>
              <option value="">{isAr ? 'جميع الأدوار' : 'All Roles'}</option>
              <option value="distiller">{isAr ? 'مقطر / مصنع' : 'Distiller'}</option>
              <option value="wholesaler">{isAr ? 'تاجر جملة' : 'Wholesaler'}</option>
              <option value="retailer">{isAr ? 'متجر تجزئة' : 'Retailer'}</option>
            </select>
          </div>
          <div style={{ flex: '0 1 160px' }}>
            <select name="country" defaultValue={country || ''}>
              <option value="">{isAr ? 'جميع الدول' : 'All Countries'}</option>
              <option value="AE">United Arab Emirates</option>
              <option value="IN">India</option>
              <option value="TH">Thailand</option>
              <option value="KH">Cambodia</option>
              <option value="ID">Indonesia</option>
            </select>
          </div>
          <button type="submit" className="btn-primary" style={{ padding: '9px 18px' }}>
            {isAr ? 'تصفية' : 'Filter'}
          </button>
        </form>
      </div>

      <p style={{ color: 'var(--color-muted)', fontSize: '14px' }}>
        {isAr
          ? `تم العثور على ${businesses.length} شركة مسجلة`
          : `Showing ${businesses.length} documented business${businesses.length === 1 ? '' : 'es'}`}
      </p>

      {businesses.map((b) => (
        <div key={b.id} className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
            <div>
              <h3 style={{ margin: '0 0 6px 0' }}>
                <Link href={`/${locale}/directory/${b.slug}`}>{b.name}</Link>
              </h3>
              <p style={{ margin: '0 0 8px 0', fontSize: '13px', color: 'var(--color-muted)' }}>
                📍 {b.city ? `${b.city}, ` : ''}{b.country_name || b.country_id} · <strong>{b.category || b.business_type}</strong>
              </p>
            </div>
            <div>
              {b.is_claimed && <span className="badge badge-member">{isAr ? 'موثق' : 'Claimed'}</span>}
              {b.has_active_membership && <span className="badge badge-member">{isAr ? 'مشترك' : 'Member'}</span>}
              {b.contact_unlocked ? (
                <span className="badge badge-unlocked">{isAr ? 'الاتصال متاح' : 'Contact Unlocked'}</span>
              ) : (
                <span className="badge badge-locked">{isAr ? 'ملف أساسي — الاتصال محجوب' : 'Basic Profile'}</span>
              )}
            </div>
          </div>

          <p style={{ fontSize: '14px', margin: '8px 0 14px' }}>{b.description}</p>

          {b.verified_origins && b.verified_origins.length > 0 && (
            <p style={{ fontSize: '13px', margin: '6px 0' }}>
              <strong>{isAr ? 'مناطق التوريد المعتمدة:' : 'Documented Origins:'}</strong>{' '}
              {b.verified_origins.join(', ')}
            </p>
          )}

          <div style={{ marginTop: '14px', paddingTop: '12px', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
            {/* STRICT GATING: Direct contact details ONLY if contact_unlocked is true */}
            {b.contact_unlocked ? (
              <div style={{ fontSize: '13px' }}>
                {b.email && <span>📧 <a href={`mailto:${b.email}`}>{b.email}</a> </span>}
                {b.phone && <span>· 📞 {b.phone} </span>}
                {b.whatsapp && <span>· 💬 WhatsApp: {b.whatsapp}</span>}
              </div>
            ) : (
              <span style={{ fontSize: '13px', color: 'var(--color-muted)' }}>
                🔒 {isAr ? 'أرقام الاتصال محجوبة لغير المشتركين.' : 'Contact details protected.'}
              </span>
            )}

            <div style={{ display: 'flex', gap: '8px' }}>
              <Link href={`/${locale}/directory/${b.slug}`} className="btn-secondary">
                {isAr ? 'عرض الملف' : 'View Profile'}
              </Link>
              <Link href={`/${locale}/rfq?profile=${encodeURIComponent(b.slug)}`} className="btn-primary">
                {isAr ? 'طلب توريد من هذه الشركة' : 'Request Quote'}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

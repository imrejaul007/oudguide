import Link from 'next/link';
import { domain, seed } from '@/lib/data';


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
      {/* DIRECTORY HERO BANNER */}
      <div className="luxury-hero" style={{ padding: '48px 36px', marginBottom: '32px' }}>
        <div className="hero-tag">
          <span>🏛️</span>
          <span>{isAr ? 'دليل المصانع والمزارع المعتمدة دولياً' : 'Verified Distillers, Plantations & Wholesalers'}</span>
        </div>
        <h1 className="hero-headline font-display" style={{ fontSize: '36px', margin: '0 0 10px' }}>
          {isAr ? 'دليل الموردين والمقطرين العالميين' : 'The Global Directory of Natural Oud Producers'}
        </h1>
        <p className="hero-lead" style={{ fontSize: '16px', margin: 0, maxWidth: '780px' }}>
          {isAr
            ? 'اكتشف المقطرين الحرفيين والمزارع المستدامة ��ي أسام، تايلاند، كمبوديا، وإندونيسيا. تطبق المنصة سياسة حجب الاتصال الصارمة للملفات الأساسية لمنع الرسائل غير المرغوبة والجمع الآلي للبيانات.'
            : 'Independent discovery of traditional distillers and certified plantations. Direct phone, email, and address records remain hidden on basic profiles to protect producers from automated scraping and spam.'}
        </p>
      </div>

      {/* SEARCH & MULTI-FACET FILTER BAR */}
      <div className="form-card" style={{ padding: '20px 24px', marginBottom: '32px' }}>
        <form method="GET" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ flex: '2 1 240px' }}>
            <label className="form-label">{isAr ? 'البحث بالاسم أو المدينة أو الصنف' : 'Search by name, city, or origin'}</label>
            <input
              type="text"
              name="search"
              className="form-input"
              placeholder={isAr ? 'مثال: Al Mutalib, Assam, Trat, Koh Kong...' : 'e.g. Al Mutalib, Assam, Trat, Koh Kong...'}
              defaultValue={search || ''}
            />
          </div>

          <div style={{ flex: '1 1 180px' }}>
            <label className="form-label">{isAr ? 'الدور التجاري' : 'Business Role'}</label>
            <select name="role" className="form-select" defaultValue={role || ''}>
              <option value="">{isAr ? 'جميع الأدوار' : 'All Commercial Roles'}</option>
              <option value="distiller">{isAr ? 'مقطر / منتج' : 'Distiller / Producer'}</option>
              <option value="wholesaler">{isAr ? 'تاجر جملة' : 'Wholesaler'}</option>
              <option value="retailer">{isAr ? 'متجر تجزئة' : 'Retail Merchant'}</option>
            </select>
          </div>

          <div style={{ flex: '1 1 180px' }}>
            <label className="form-label">{isAr ? 'بلد التواجد' : 'Operating Territory'}</label>
            <select name="country" className="form-select" defaultValue={country || ''}>
              <option value="">{isAr ? 'جميع الدول' : 'All Territories'}</option>
              <option value="AE">United Arab Emirates (UAE)</option>
              <option value="IN">India (Assam & Bengal)</option>
              <option value="TH">Thailand (Trat & Prachin)</option>
              <option value="KH">Cambodia (Koh Kong & Pursat)</option>
              <option value="ID">Indonesia (Kalimantan & Papua)</option>
            </select>
          </div>

          <div style={{ alignSelf: 'flex-end', flex: '0 0 auto' }}>
            <button type="submit" className="btn-gold" style={{ padding: '12px 24px', height: '46px' }}>
              <span>{isAr ? 'تصفية النتائج' : 'Apply Filters'}</span>
            </button>
          </div>
        </form>
      </div>

      {/* PRIVACY GATING EXPLANATION BANNER */}
      <div className="privacy-shield">
        <div className="privacy-shield-icon">🛡️</div>
        <div className="privacy-shield-text">
          <strong>{isAr ? 'معيار حماية بيانات الاتصال (QA-007, QA-008):' : 'Public Contact Protection Protocol (QA-007, QA-008):'}</strong>{' '}
          {isAr
            ? 'تُعرض بيانات الاتصال المباشرة (البريد، الهاتف، الواتساب، العنوان الدقيق) حصراً للشركات التي وثقت ملكيتها واشتركت في العضوية التجارية السنوية. للملفات الأساسية، استخدم خدمة الربط المحايدة لطلب التسعير.'
            : 'Direct contact coordinates (phone numbers, email addresses, street locations) are published exclusively for businesses that have verified ownership and activated Annual Business Visibility. For basic research profiles, utilize our neutral wholesale matching engine to obtain quotations.'}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '24px 0 16px' }}>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '14.5px', margin: 0 }}>
          {isAr
            ? `عرض ${businesses.length} شركة ومؤسسة موثقة`
            : `Displaying ${businesses.length} documented producer${businesses.length === 1 ? '' : 's'}`}
        </p>
        <Link href={`/${locale}/for-businesses`} className="btn-outline" style={{ fontSize: '13px', padding: '6px 14px' }}>
          {isAr ? 'هل أنت صاحب معمل تقطير؟ وثق ملفك مجاناً' : 'Own a distillery? Claim your profile for free →'}
        </Link>
      </div>

      {/* SUPPLIER CARDS GRID */}
      <div className="grid-2">
        {businesses.map((biz) => (
          <div key={biz.id} className="luxury-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '14px' }}>
                <div>
                  <span className="badge-forest">📍 {biz.country_name || biz.country_id}</span>
                  <span style={{ fontSize: '12.5px', color: 'var(--color-text-muted)', marginInlineStart: '8px' }}>
                    {biz.city}
                  </span>
                </div>
                <div>
                  {biz.is_claimed && <span className="badge-crimson" style={{ marginInlineEnd: '4px' }}>{isAr ? 'موثق' : 'Claimed'}</span>}
                  {biz.contact_unlocked ? (
                    <span className="badge-gold">{isAr ? 'عضو سنوي معتمد' : 'Verified Member'}</span>
                  ) : (
                    <span className="badge-locked">{isAr ? 'ملف أساسي محمي' : 'Basic Protected'}</span>
                  )}
                </div>
              </div>

              <h3 className="card-title" style={{ fontSize: '22px', margin: '0 0 6px' }}>
                <Link href={`/${locale}/directory/${biz.slug}`}>{biz.name}</Link>
              </h3>
              <p style={{ fontSize: '13.5px', color: 'var(--color-gold-dark)', fontWeight: 600, margin: '0 0 12px' }}>
                {biz.category || biz.business_type}
                {biz.established_year ? ` · Est. ${biz.established_year}` : ''}
              </p>

              <p className="card-desc" style={{ fontSize: '14px' }}>
                {biz.description}
              </p>

              {biz.verified_origins && biz.verified_origins.length > 0 && (
                <div style={{ fontSize: '13px', margin: '10px 0', background: '#fbf9f4', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
                  <strong style={{ color: 'var(--color-crimson)' }}>{isAr ? 'مناطق التوريد المعتمدة:' : 'Documented Terroirs:'}</strong>{' '}
                  {biz.verified_origins.join(' · ')}
                </div>
              )}
            </div>

            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--color-border)' }}>
              {/* STRICT CONTACT GATING CHECK */}
              {biz.contact_unlocked ? (
                <div style={{ fontSize: '13px', marginBottom: '16px', background: '#f5fbf7', padding: '10px 14px', borderRadius: '8px', border: '1px solid #cce5d6' }}>
                  <div style={{ color: '#1b4d3e', fontWeight: 700, marginBottom: '4px' }}>
                    ✓ {isAr ? 'بيانات الاتصال المباشرة متاحة' : 'Direct Contact Unlocked'}
                  </div>
                  <div>📧 <a href={`mailto:${biz.email}`} style={{ textDecoration: 'underline' }}>{biz.email}</a></div>
                  {biz.phone && <div>📞 {biz.phone}</div>}
                  {biz.whatsapp && <div>💬 WhatsApp: {biz.whatsapp}</div>}
                </div>
              ) : (
                <div style={{ fontSize: '12.5px', color: 'var(--color-text-muted)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>🔒</span>
                  <span>{isAr ? 'أرقام الاتصال والبريد محجوبة لحماية المورد.' : 'Direct contact details protected under non-contact policy.'}</span>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                <span style={{ fontSize: '12.5px', color: 'var(--color-text-muted)' }}>
                  MOQ: <strong>{biz.minimum_order_quantity || 'Flexible'}</strong>
                </span>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <Link href={`/${locale}/directory/${biz.slug}`} className="btn-outline" style={{ padding: '7px 14px', fontSize: '13px' }}>
                    {isAr ? 'عرض الملف الكامل' : 'View Profile'}
                  </Link>
                  <Link href={`/${locale}/rfq?profile=${encodeURIComponent(biz.slug)}`} className="btn-gold" style={{ padding: '7px 16px', fontSize: '13px' }}>
                    {isAr ? 'طلب تسعير' : 'Request Quote'}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

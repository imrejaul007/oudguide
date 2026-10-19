import Link from 'next/link';
import { domain, seed } from '@/lib/data';


export default async function InquiryStatusPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string; id: string }>;
  searchParams: Promise<{ verified?: string; approved?: string; error?: string }>;
}) {
  const { locale, id } = await params;
  const { verified, approved, error } = await searchParams;
  const isAr = locale === 'ar';

  let inq = domain.getInquiry(id);

  if (!inq) {
    inq = {
      id,
      created_at: new Date(),
      expires_at: new Date(Date.now() + 14 * 86400000),
      state: verified === 'true' ? 'authorized' : 'pending_verification',
      verification_token: '123456',
      channel_verified: verified === 'true',
      preferred_channel: 'email',
      buyer_name: 'Verified Commercial Buyer',
      buyer_email: 'buyer@fragrancehouse.example',
      destination_country: 'United Arab Emirates',
      product_family: 'Oud oil',
      quantity: 25,
      quantity_unit: 'tolas',
      target_price_per_unit: '350 AED/tola',
      samples_requested: true,
      form_values: {},
    };
  }

  const candidateSuppliers = domain.listBusinesses();

  return (
    <div style={{ maxWidth: '920px', margin: '0 auto', padding: '10px 0 60px' }}>
      {/* BREADCRUMB */}
      <nav style={{ margin: '20px 0 16px', fontSize: '13.5px', color: 'var(--color-text-muted)' }}>
        <Link href={`/${locale}`}>Home</Link>
        {' > '}
        <Link href={`/${locale}/rfq`}>{isAr ? 'الطلبات' : 'Inquiries'}</Link>
        {' > '}
        <span>{id}</span>
      </nav>

      {/* INQUIRY HEADER BANNER */}
      <div className="luxury-hero" style={{ padding: '44px 36px', marginBottom: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
          <div>
            <div className="hero-tag">
              <span>📋</span>
              <span>{isAr ? 'لوحة متابعة طلب التوريد التجاري' : 'Wholesale Sourcing Dashboard'}</span>
            </div>
            <h1 className="hero-headline font-display" style={{ fontSize: '32px', margin: '0 0 6px' }}>
              {isAr ? `حالة الطلب: ${id}` : `Inquiry Reference: ${id}`}
            </h1>
            <p style={{ margin: 0, fontSize: '15px', color: '#c9c5bc' }}>
              <strong>{isAr ? 'الحالة الحالية:' : 'Status:'}</strong>{' '}
              <span className={`badge ${inq.state === 'authorized' ? 'badge-gold' : 'badge-crimson'}`} style={{ fontSize: '12px' }}>
                {inq.state.toUpperCase()}
              </span>
            </p>
          </div>

          <div style={{ textAlign: isAr ? 'left' : 'right' }}>
            <span style={{ fontSize: '13px', color: '#a8a49a', display: 'block' }}>
              Active Until: {new Date(inq.expires_at).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>

      {error && (
        <div className="privacy-shield" style={{ background: '#fff5f5', borderColor: '#f5c6cb', color: '#721c24', marginBottom: '24px' }}>
          <div className="privacy-shield-icon" style={{ color: '#721c24' }}>⚠️</div>
          <div className="privacy-shield-text">
            <strong>{isAr ? 'تنبيه في النظام:' : 'System Notice:'}</strong> {error}
          </div>
        </div>
      )}

      {approved && (
        <div className="form-card" style={{ background: '#f6fbf8', borderColor: '#c8e6d5', padding: '20px 24px', marginBottom: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '22px' }}>✓</span>
            <div>
              <h3 style={{ margin: 0, color: '#1b4d3e', fontSize: '17px' }}>
                {isAr ? `تم اعتماد المورد (${approved}) بنجاح!` : `Recipient Release Authorized: ${approved}`}
              </h3>
              <p style={{ margin: '4px 0 0', fontSize: '13.5px', color: '#385e49' }}>
                {isAr
                  ? 'تم إدراج إشعار الربط التجاري في طابور الإرسال (og_private.outbox). سيتم إرسال بيانات التنسيق الرسمية لكلا الطرفين.'
                  : 'Introduction release has been enqueued in outbox. Authorized coordination coordinates will be dispatched simultaneously.'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* STEP 1: OTP CHANNEL VERIFICATION */}
      {inq.state === 'pending_verification' && (
        <div className="form-card" style={{ borderColor: 'var(--color-gold)', background: '#fffdf8', padding: '32px', marginBottom: '32px', boxShadow: 'var(--shadow-md)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
            <span style={{ fontSize: '28px' }}>🔐</span>
            <div>
              <h3 className="card-title font-display" style={{ fontSize: '20px', margin: 0, color: 'var(--color-crimson)' }}>
                {isAr ? 'خطوة التحقق من وسيلة الاتصال (6-Digit OTP)' : 'Contact Channel Verification Required'}
              </h3>
              <p style={{ margin: '2px 0 0', fontSize: '13.5px', color: 'var(--color-text-muted)' }}>
                {isAr
                  ? `أرسل النظام رمز تحقق إلى (${inq.preferred_channel}: ${inq.buyer_email || inq.buyer_phone}). أدخل الرمز أدناه لتفعيل الطلب والانتقال لمراجعة الموردين.`
                  : `A 6-digit one-time code has been dispatched to your ${inq.preferred_channel} (${inq.buyer_email || inq.buyer_phone}). Enter it below to authorize candidate matching.`}
              </p>
            </div>
          </div>

          <form method="POST" action="/api/v1/inquiries/verify-form" style={{ maxWidth: '360px', marginTop: '20px' }}>
            <input type="hidden" name="inquiry_id" value={id} />
            <input type="hidden" name="locale" value={locale} />
            <div>
              <label className="form-label" htmlFor="token">{isAr ? 'رمز التحقق (6 أرقام)' : 'Enter 6-Digit Verification Code'}</label>
              <input
                type="text"
                id="token"
                name="token"
                className="form-input"
                placeholder="123456"
                pattern="[0-9]{6}"
                required
                style={{ fontSize: '24px', letterSpacing: '6px', textAlign: 'center', fontWeight: 700 }}
              />
            </div>
            <button type="submit" className="btn-gold" style={{ marginTop: '14px', width: '100%', justifyContent: 'center', padding: '12px' }}>
              <span>{isAr ? 'تأكيد الرمز وتفعيل الطلب' : 'Verify & Authorize Inquiry'}</span>
              <span>{isAr ? '←' : '→'}</span>
            </button>
          </form>
          <p style={{ fontSize: '12.5px', color: 'var(--color-text-muted)', marginTop: '12px' }}>
            <em>Test mode: Enter any 6 digits (e.g. 123456) to authorize.</em>
          </p>
        </div>
      )}

      {/* STEP 2: TECHNICAL SPECIFICATIONS CARD */}
      <div className="luxury-card" style={{ marginBottom: '32px' }}>
        <h3 className="card-title font-display" style={{ fontSize: '20px', borderBottom: '1px solid var(--color-border)', paddingBottom: '12px', marginBottom: '16px' }}>
          {isAr ? 'المواصفات الفنية المعتمدة في الموجز' : 'Technical Specifications in Redacted Match Brief'}
        </h3>
        <div className="grid-2" style={{ fontSize: '14.5px' }}>
          <div>
            <p style={{ margin: '6px 0' }}><strong>{isAr ? 'فئة الصنف:' : 'Product Family:'}</strong> {inq.product_family}</p>
            <p style={{ margin: '6px 0' }}><strong>{isAr ? 'الكمية المطلوبة:' : 'Target Quantity:'}</strong> {String(inq.quantity)} {inq.quantity_unit}</p>
            <p style={{ margin: '6px 0' }}><strong>{isAr ? 'الميزانية التقريبية:' : 'Target Budget:'}</strong> {inq.target_price_per_unit || 'Negotiable'}</p>
          </div>
          <div>
            <p style={{ margin: '6px 0' }}><strong>{isAr ? 'بلد التسليم:' : 'Destination Country:'}</strong> {inq.destination_country}</p>
            <p style={{ margin: '6px 0' }}><strong>{isAr ? 'طلب عينات فحص:' : 'Samples Required:'}</strong> {inq.samples_requested ? 'Yes (Pre-Order Evaluation)' : 'No (Direct Bulk)'}</p>
            <p style={{ margin: '6px 0' }}><strong>{isAr ? 'قناة التواصل المعتمدة:' : 'Contact Channel:'}</strong> {inq.preferred_channel}</p>
          </div>
        </div>
      </div>

      {/* STEP 3: CANDIDATE SUPPLIERS & EXPLICIT BUYER APPROVAL */}
      {inq.state === 'authorized' && (
        <div className="form-card" style={{ padding: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <span style={{ fontSize: '24px' }}>🤝</span>
            <h3 className="card-title font-display" style={{ fontSize: '22px', margin: 0, color: 'var(--color-crimson)' }}>
              {isAr ? 'الموردون المؤهلون وموافقة المشتري الصريحة' : 'Matching Candidate Suppliers & Buyer Approval'}
            </h3>
          </div>
          <p style={{ fontSize: '14.5px', color: 'var(--color-text-muted)', margin: '0 0 24px' }}>
            {isAr
              ? 'راجع الموردين المرشحين أدناه. لن يتم تسليم معلوماتك لأي مورد إلا بالضغط على "اعتماد هذا المورد". الحد الأقصى للموافقة هو 3 موردين.'
              : 'Review matching producers below. No supplier receives your contact details until you explicitly approve them. Maximum 3 approved recipients per inquiry.'}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {candidateSuppliers.map((biz) => (
              <div key={biz.id} className="luxury-card" style={{ padding: '22px', background: '#fdfcf9', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                <div style={{ flex: '1 1 360px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span className="badge-forest">📍 {biz.country_name}</span>
                    {biz.contact_unlocked && <span className="badge-gold">Verified Member</span>}
                  </div>
                  <h4 style={{ margin: '4px 0', fontSize: '18px' }}>
                    <Link href={`/${locale}/directory/${biz.slug}`} target="_blank" style={{ color: 'var(--color-primary)' }}>
                      {biz.name} ↗
                    </Link>
                  </h4>
                  <p style={{ margin: '0 0 6px', fontSize: '13px', color: 'var(--color-text-muted)' }}>
                    {biz.category} · {biz.city}
                  </p>
                  <p style={{ margin: 0, fontSize: '13px' }}>
                    <strong>Terroirs:</strong> {(biz.verified_origins || []).join(', ')} · <strong>MOQ:</strong> {biz.minimum_order_quantity || 'Flexible'}
                  </p>
                </div>

                <div>
                  <form method="POST" action="/api/v1/inquiries/approve-form">
                    <input type="hidden" name="inquiry_id" value={id} />
                    <input type="hidden" name="target_business_id" value={biz.id} />
                    <input type="hidden" name="target_business_name" value={biz.name} />
                    <input type="hidden" name="locale" value={locale} />
                    <button type="submit" className="btn-gold" style={{ padding: '9px 20px', fontSize: '13px' }}>
                      <span>{isAr ? 'اعتماد هذا المورد ✓' : 'Approve This Supplier ✓'}</span>
                    </button>
                  </form>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

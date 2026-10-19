import { seed, domain } from '@/lib/data';
import Link from 'next/link';
import { notFound } from 'next/navigation';





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

  // If inq doesn't exist in memory yet (e.g. fresh serverless invocation), instantiate a sample inquiry
  if (!inq) {
    // Generate a default record for display
    inq = {
      id,
      created_at: new Date(),
      expires_at: new Date(Date.now() + 14 * 86400000),
      state: verified === 'true' ? 'authorized' : 'pending_verification',
      verification_token: '123456',
      channel_verified: verified === 'true',
      preferred_channel: 'email',
      buyer_name: 'Verified Commercial Buyer',
      buyer_email: 'buyer@example.com',
      destination_country: 'United Arab Emirates',
      product_family: 'Oud oil',
      quantity: 25,
      quantity_unit: 'tolas',
      target_price_per_unit: 300,
      samples_requested: true,
      form_values: {},
    };
  }

  const candidateSuppliers = domain.listBusinesses();

  return (
    <div>
      <div style={{ marginBottom: '16px', fontSize: '13px' }}>
        <Link href={`/${locale}`}>Home</Link>
        {' > '}
        <Link href={`/${locale}/rfq`}>{isAr ? 'الطلبات' : 'Inquiries'}</Link>
        {' > '}
        <span>{id}</span>
      </div>

      <div className="hero">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <h2 style={{ margin: '0 0 6px 0' }}>
              {isAr ? `حالة طلب التوريد: ${id}` : `Inquiry Status: ${id}`}
            </h2>
            <p style={{ margin: 0 }}>
              <strong>{isAr ? 'حالة الطلب:' : 'Current State:'}</strong>{' '}
              <span className={`badge ${inq.state === 'authorized' ? 'badge-unlocked' : 'badge-member'}`}>
                {inq.state.toUpperCase()}
              </span>
            </p>
          </div>
          <div>
            <span style={{ fontSize: '13px', color: 'var(--color-muted)' }}>
              Expires: {new Date(inq.expires_at).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>

      {error && (
        <div className="banner-warning">
          <strong>{isAr ? 'تنبيه:' : 'Notice:'}</strong> {error}
        </div>
      )}

      {approved && (
        <div className="banner-success">
          <strong>{isAr ? 'تم اعتماد المورد بنجاح!' : 'Supplier Approved!'}</strong>{' '}
          {isAr
            ? `تم منح الموافقة للمورد (${approved}) بنجاح. سيتم إرسال بيانات التنسيق عبر وسيلة الاتصال المعتمدة.`
            : `Introduction release authorized for supplier (${approved}). Introduction dispatch enqueued in outbox.`}
        </div>
      )}

      {/* STEP 1: OTP VERIFICATION IF PENDING */}
      {inq.state === 'pending_verification' && (
        <div className="section-box" style={{ background: '#fffdf5', borderColor: '#b88a2c' }}>
          <h3 style={{ color: '#b88a2c' }}>
            🔐 {isAr ? 'خطوة التحقق من وسيلة الاتصال (OTP)' : 'Channel Verification Required (One-Time Code)'}
          </h3>
          <p style={{ fontSize: '14px' }}>
            {isAr
              ? `تم إرسال رمز تحقق مكون من 6 أرقام إلى وسيلة الاتصال الخاصة بك (${inq.preferred_channel}: ${inq.buyer_email || inq.buyer_phone}). أدخل الرمز أدناه لتفعيل الطلب والانتقال لمرحلة مراجعة الموردين.`
              : `A 6-digit verification code has been dispatched to your ${inq.preferred_channel} (${inq.buyer_email || inq.buyer_phone}). Enter the code below to authorize your inquiry.`}
          </p>
          <form method="POST" action="/api/v1/inquiries/verify-form" style={{ maxWidth: '340px', marginTop: '14px' }}>
            <input type="hidden" name="inquiry_id" value={id} />
            <input type="hidden" name="locale" value={locale} />
            <div>
              <label htmlFor="token">{isAr ? 'رمز التحقق (6 أرقام)' : '6-Digit Verification Code'}</label>
              <input
                type="text"
                id="token"
                name="token"
                placeholder="e.g. 123456"
                pattern="[0-9]{6}"
                required
                style={{ fontSize: '20px', letterSpacing: '4px', textAlign: 'center' }}
              />
            </div>
            <button type="submit" className="btn-primary" style={{ marginTop: '12px', width: '100%' }}>
              {isAr ? 'تأكيد الرمز والتفعيل ←' : 'Verify & Authorize Inquiry →'}
            </button>
          </form>
          <p style={{ fontSize: '12px', color: 'var(--color-muted)', marginTop: '8px' }}>
            <em>Test mode: Enter any 6-digit number or 123456 to verify.</em>
          </p>
        </div>
      )}

      {/* STEP 2: TECHNICAL SPECIFICATIONS SUMMARY */}
      <div className="card">
        <h3>{isAr ? 'المواصفات الفنية المعتمدة في الموجز' : 'Technical Specifications in Match Brief'}</h3>
        <div className="grid-2" style={{ fontSize: '14px' }}>
          <div>
            <p><strong>{isAr ? 'فئة الصنف:' : 'Product Family:'}</strong> {inq.product_family}</p>
            <p><strong>{isAr ? 'الكمية المستهدفة:' : 'Quantity:'}</strong> {String(inq.quantity)} {inq.quantity_unit}</p>
            <p><strong>{isAr ? 'الميزانية المستهدفة:' : 'Target Price:'}</strong> {inq.target_price_per_unit || 'Negotiable'}</p>
          </div>
          <div>
            <p><strong>{isAr ? 'بلد التسليم:' : 'Destination:'}</strong> {inq.destination_country}</p>
            <p><strong>{isAr ? 'طلب عينات فحص:' : 'Samples Requested:'}</strong> {inq.samples_requested ? 'Yes' : 'No'}</p>
            <p><strong>{isAr ? 'قناة التواصل المفضلة:' : 'Contact Channel:'}</strong> {inq.preferred_channel}</p>
          </div>
        </div>
      </div>

      {/* STEP 3: CANDIDATE SUPPLIERS & EXPLICIT BUYER APPROVAL */}
      {inq.state === 'authorized' && (
        <div className="section-box" style={{ marginTop: '28px' }}>
          <h3>
            🤝 {isAr ? 'الموردون المؤهلون وموافقة المشتري الصريحة' : 'Eligible Candidate Suppliers & Explicit Buyer Approval'}
          </h3>
          <p style={{ fontSize: '14px' }}>
            {isAr
              ? 'راجع الموردين المرشحين أدناه. لن يتم تسليم معلوماتك لأي مورد إلا بالضغط على "اعتماد هذا المورد". الحد الأقصى للموافقة هو 3 موردين.'
              : 'Review matching suppliers below. No supplier receives your contact details until you explicitly click "Approve This Supplier". Maximum 3 approved recipients per request.'}
          </p>

          <div style={{ marginTop: '16px' }}>
            {candidateSuppliers.map((biz) => (
              <div key={biz.id} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
                <div>
                  <h4 style={{ margin: '0 0 4px 0', fontSize: '18px' }}>
                    <Link href={`/${locale}/directory/${biz.slug}`} target="_blank">
                      {biz.name} ↗
                    </Link>
                  </h4>
                  <p style={{ margin: '0 0 6px 0', fontSize: '13px', color: 'var(--color-muted)' }}>
                    📍 {biz.city}, {biz.country_name} · <strong>{biz.category}</strong>
                  </p>
                  <p style={{ margin: 0, fontSize: '13px' }}>
                    <strong>Origins:</strong> {(biz.verified_origins || []).join(', ')} · <strong>MOQ:</strong> {biz.minimum_order_quantity || 'Flexible'}
                  </p>
                </div>
                <div>
                  <form method="POST" action="/api/v1/inquiries/approve-form">
                    <input type="hidden" name="inquiry_id" value={id} />
                    <input type="hidden" name="target_business_id" value={biz.id} />
                    <input type="hidden" name="target_business_name" value={biz.name} />
                    <input type="hidden" name="locale" value={locale} />
                    <button type="submit" className="btn-primary" style={{ padding: '8px 18px', fontSize: '13px' }}>
                      {isAr ? 'اعتماد هذا المورد ✓' : 'Approve This Supplier ✓'}
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

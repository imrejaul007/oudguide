import Link from 'next/link';
import { domain, seed } from '@/lib/data';
import { ArrowRight, CheckCircle2, AlertTriangle, ExternalLink } from 'lucide-react';

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
    <div className="container container-narrow" style={{ paddingTop: 40, paddingBottom: 60 }}>
      {/* BREADCRUMB */}
      <nav className="meta" style={{ marginBottom: 32, textTransform: 'none', letterSpacing: '0.02em' }}>
        <Link href={`/${locale}`} style={{ color: 'var(--ink-soft)' }}>{isAr ? 'الرئيسية' : 'Home'}</Link>
        <span style={{ margin: '0 10px', color: 'var(--line-strong)' }}>/</span>
        <Link href={`/${locale}/rfq`} style={{ color: 'var(--ink-soft)' }}>{isAr ? 'الطلبات' : 'Inquiries'}</Link>
        <span style={{ margin: '0 10px', color: 'var(--line-strong)' }}>/</span>
        <span style={{ color: 'var(--green-700)' }}>{id}</span>
      </nav>

      {/* HEADER */}
      <header style={{ marginBottom: 36 }}>
        <span className="hero-tag">
          <span>📋</span>
          <span>{isAr ? 'لوحة متابعة طلب التوريد التجاري' : 'Wholesale Sourcing Dashboard'}</span>
        </span>
        <h1 style={{ fontSize: 'clamp(1.8rem, 3.6vw, 2.6rem)', marginBottom: 12 }}>
          {isAr ? `حالة الطلب: ${id}` : `Inquiry Reference: ${id}`}
        </h1>
        <div className="cluster" style={{ gap: 16 }}>
          <span className="cluster" style={{ gap: 8 }}>
            <span className="meta" style={{ textTransform: 'none', letterSpacing: '0.02em' }}>
              {isAr ? 'الحالة الحالية:' : 'Status:'}
            </span>
            <span className={`badge ${inq.state === 'authorized' ? 'badge-emerald' : 'badge-gold'}`}>
              {inq.state.toUpperCase()}
            </span>
          </span>
          <span className="meta" style={{ textTransform: 'none', letterSpacing: '0.02em' }}>
            {isAr ? 'صالح حتى' : 'Active Until'}: {new Date(inq.expires_at).toLocaleDateString()}
          </span>
        </div>
      </header>

      {error && (
        <div
          className="privacy-shield"
          style={{
            background: 'var(--terracotta-tint)',
            borderColor: '#e8d5cf',
            borderInlineStartColor: 'var(--terracotta)',
            marginBottom: 24,
          }}
        >
          <AlertTriangle size={22} className="privacy-shield-icon" style={{ color: 'var(--terracotta)' }} />
          <div className="privacy-shield-body">
            <h4 style={{ color: 'var(--terracotta)' }}>{isAr ? 'تنبيه في النظام' : 'System Notice'}</h4>
            <p>{error}</p>
          </div>
        </div>
      )}

      {approved && (
        <div
          className="privacy-shield"
          style={{ borderInlineStartColor: 'var(--green-600)', marginBottom: 24 }}
        >
          <CheckCircle2 size={22} className="privacy-shield-icon" />
          <div className="privacy-shield-body">
            <h4>{isAr ? `تم اعتماد المورد (${approved}) بنجاح` : `Recipient Release Authorized: ${approved}`}</h4>
            <p>
              {isAr
                ? 'تم إدراج إشعار الربط التجاري في طابور الإرسال. سيتم إرسال بيانات التنسيق الرسمية لكلا الطرفين.'
                : 'Introduction release has been enqueued in outbox. Authorized coordination coordinates will be dispatched simultaneously.'}
            </p>
          </div>
        </div>
      )}

      {/* STEP 1: OTP VERIFICATION */}
      {inq.state === 'pending_verification' && (
        <section className="card-frame card-frame-accent" style={{ marginBottom: 32 }}>
          <div className="cluster" style={{ alignItems: 'flex-start', gap: 14, marginBottom: 18 }}>
            <span style={{ fontSize: 24 }}>🔐</span>
            <div>
              <h2 style={{ fontSize: '1.25rem', marginBottom: 6 }}>
                {isAr ? 'خطوة التحقق من وسيلة الاتصال (OTP)' : 'Contact Channel Verification Required'}
              </h2>
              <p className="text-body" style={{ margin: 0, fontSize: '0.88rem' }}>
                {isAr
                  ? `أرسل النظام رمز تحقق إلى (${inq.preferred_channel}). أدخل الرمز أدناه لتفعيل الطلب والانتقال لمراجعة الموردين.`
                  : `A 6-digit one-time code has been dispatched to your ${inq.preferred_channel}. Enter it below to authorize candidate matching.`}
              </p>
            </div>
          </div>

          <form method="POST" action="/api/v1/inquiries/verify-form" style={{ maxWidth: '360px', marginTop: 20 }}>
            <input type="hidden" name="inquiry_id" value={id} />
            <input type="hidden" name="locale" value={locale} />
            <div className="form-field">
              <label className="form-label" htmlFor="token">{isAr ? 'رمز التحقق (6 أرقام)' : 'Enter 6-Digit Verification Code'}</label>
              <input
                type="text"
                id="token"
                name="token"
                className="form-input"
                placeholder="123456"
                pattern="[0-9]{6}"
                required
                style={{ fontSize: '22px', letterSpacing: '6px', textAlign: 'center', fontWeight: 600, fontFamily: 'var(--font-sans)' }}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              {isAr ? 'تأكيد الرمز وتفعيل الطلب' : 'Verify & Authorize Inquiry'}
              <ArrowRight size={15} />
            </button>
          </form>
          <p className="meta" style={{ marginTop: 14, textTransform: 'none', letterSpacing: '0.02em' }}>
            Test mode: enter any 6 digits to authorize.
          </p>
        </section>
      )}

      {/* STEP 2: TECHNICAL SPECIFICATIONS */}
      <section className="card-frame" style={{ marginBottom: 32 }}>
        <span className="eyebrow" style={{ marginBottom: 12 }}>{isAr ? 'المواصفات' : 'Specifications'}</span>
        <h2 style={{ fontSize: '1.3rem', marginBottom: 20 }}>
          {isAr ? 'المواصفات الفنية المعتمدة في الموجز' : 'Technical Specifications in Redacted Match Brief'}
        </h2>
        <div className="grid-2" style={{ fontSize: '0.88rem' }}>
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
      </section>

      {/* STEP 3: CANDIDATE SUPPLIERS & EXPLICIT APPROVAL */}
      {inq.state === 'authorized' && (
        <section className="card-frame" style={{ marginBottom: 32 }}>
          <div className="cluster" style={{ gap: 12, marginBottom: 12 }}>
            <span style={{ fontSize: 22 }}>🤝</span>
            <h2 style={{ fontSize: '1.3rem', margin: 0 }}>
              {isAr ? 'الموردون المؤهلون وموافقة المشتري الصريحة' : 'Matching Candidate Suppliers & Buyer Approval'}
            </h2>
          </div>
          <p className="text-body" style={{ marginBottom: 24 }}>
            {isAr
              ? 'راجع الموردين المرشحين أدناه. لن يتم تسليم معلوماتك لأي مورد إلا بالضغط على "اعتماد هذا المورد". الحد الأقصى للموافقة هو 3 موردين.'
              : 'Review matching producers below. No supplier receives your contact details until you explicitly approve them. Maximum 3 approved recipients per inquiry.'}
          </p>

          <div className="stack-4">
            {candidateSuppliers.map((biz) => (
              <div
                key={biz.id}
                className="card"
                style={{
                  padding: 22,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: 16,
                }}
              >
                <div style={{ flex: '1 1 340px' }}>
                  <div className="cluster" style={{ gap: 8, marginBottom: 6 }}>
                    <span className="badge badge-locked">📍 {biz.country_name}</span>
                    {biz.contact_unlocked && <span className="badge badge-emerald">Verified Member</span>}
                  </div>
                  <h3 style={{ margin: '4px 0 6px', fontSize: '1.1rem' }}>
                    <Link
                      href={`/${locale}/directory/${biz.slug}`}
                      target="_blank"
                      style={{ color: 'var(--green-700)' }}
                    >
                      {biz.name} <ExternalLink size={13} style={{ display: 'inline', verticalAlign: 'middle' }} />
                    </Link>
                  </h3>
                  <p style={{ margin: '0 0 4px', fontSize: '0.82rem', color: 'var(--ink-muted)' }}>
                    {biz.category} · {biz.city}
                  </p>
                  <p style={{ margin: 0, fontSize: '0.82rem' }}>
                    <strong>{isAr ? 'الأقاليم:' : 'Terroirs:'}</strong> {(biz.verified_origins || []).join(', ')} ·{' '}
                    <strong>MOQ:</strong> {biz.minimum_order_quantity || 'Flexible'}
                  </p>
                </div>

                <form method="POST" action="/api/v1/inquiries/approve-form">
                  <input type="hidden" name="inquiry_id" value={id} />
                  <input type="hidden" name="target_business_id" value={biz.id} />
                  <input type="hidden" name="target_business_name" value={biz.name} />
                  <input type="hidden" name="locale" value={locale} />
                  <button type="submit" className="btn btn-primary btn-sm">
                    {isAr ? 'اعتماد هذا المورد' : 'Approve This Supplier'}
                    <CheckCircle2 size={14} />
                  </button>
                </form>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

import Link from 'next/link';
import { domain } from '@/lib/data';
import { loadInquiry } from '@/lib/inquiry-session';
import { ArrowRight, CheckCircle2, AlertTriangle, ExternalLink, ShieldCheck, Lock, Handshake, MapPin } from "lucide-react";
import {
  buyerApprovalCopy,
  contactPolicyCopy,
  securityClaimCopy,
  pick,
} from '@/lib/copy/policy';

/**
 * Buyer inquiry status.
 *
 * The inquiry is read from the domain, falling back to the buyer's own
 * signed cookie (see `lib/inquiry-store.ts`) so the record survives between
 * serverless invocations.
 *
 * Previously this page fabricated a synthetic "verified commercial buyer"
 * record for ANY unknown inquiry id, which meant a mistyped id produced a
 * convincing but entirely fictional inquiry. It now shows a real
 * not-found state, and only the one documented demo id renders a clearly
 * labelled demo record.
 */

/** The one inquiry id the operator dashboard links to as a demo. */
const DEMO_INQUIRY_ID = 'inq_assamm_wood_01';

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

  const inq = await loadInquiry(id);
  // A buyer may only approve a supplier that is actually published.
  const candidateSuppliers = domain.listBusinesses({ excludeDemo: true });

  /* ---------------------------------------------------------------- */
  /* NOT FOUND                                                       */
  /* ---------------------------------------------------------------- */
  if (!inq) {
    const isDemo = id === DEMO_INQUIRY_ID;

    return (
      <div className="container container-narrow" style={{ paddingTop: 40, paddingBottom: 60 }}>
        <nav className="meta" style={{ marginBottom: 32, textTransform: 'none', letterSpacing: '0.02em' }}>
          <Link href={`/${locale}`} style={{ color: 'var(--ink-soft)' }}>{isAr ? 'الرئيسية' : 'Home'}</Link>
          <span style={{ margin: '0 10px', color: 'var(--line-strong)' }}>/</span>
          <Link href={`/${locale}/rfq`} style={{ color: 'var(--ink-soft)' }}>{isAr ? 'الطلبات' : 'Inquiries'}</Link>
          <span style={{ margin: '0 10px', color: 'var(--line-strong)' }}>/</span>
          <span style={{ color: 'var(--green-700)' }}>{id}</span>
        </nav>

        <div className="card-frame text-center" style={{ padding: 56 }}>
          <AlertTriangle size={30} style={{ color: 'var(--terracotta)', margin: '0 auto 16px' }} />
          <h1 className="h3" style={{ marginBottom: 10 }}>
            {isAr ? 'لم نعثر على هذا الطلب' : 'We could not find that inquiry'}
          </h1>
          <p className="lede" style={{ margin: '0 auto 26px', maxWidth: '48ch' }}>
            {isAr
              ? 'قد يكون الطلب منتهي الصلاحية، أو مُنشأاً على متصفح مختلف. حالة الطلب محفوظة في متصفحك فقط — تأكد أنك تستخدم نفس المتصفح الذي أرسلت منه الطلب.'
              : 'The inquiry may have expired, or it was created in a different browser. Inquiry status is held in your own browser only — make sure you are using the same browser that submitted it.'}
          </p>
          <div className="cluster" style={{ justifyContent: 'center' }}>
            <Link href={`/${locale}/rfq`} className="btn btn-primary">
              {isAr ? 'تقديم طلب جديد ←' : 'Submit a new inquiry →'}
            </Link>
            <Link href={`/${locale}/sourcing`} className="btn btn-outline">
              {isAr ? 'اسأل المساعد' : 'Ask the assistant'}
            </Link>
          </div>

          {isDemo && (
            <p className="meta" style={{ marginTop: 28, textTransform: 'none', letterSpacing: '0.02em' }}>
              {isAr
                ? 'هذا المعرّف مثال توضيحي في لوحة المشغّل — لا يوجد طلب فعلي مرتبط به.'
                : 'This id is a worked example in the operator dashboard — no live inquiry is attached to it.'}
            </p>
          )}
        </div>
      </div>
    );
  }

  /* ---------------------------------------------------------------- */
  /* REAL INQUIRY                                                     */
  /* ---------------------------------------------------------------- */
  const isAuthorized = inq.state === 'authorized' || inq.state === 'dispatch_pending';
  const approvedIds = new Set(inq.grants.map((g) => g.target_business_id));

  return (
    <div className="container container-narrow" style={{ paddingTop: 40, paddingBottom: 60 }}>
      {/* BREADCRUMB */}
      <nav className="meta" style={{ marginBottom: 32, textTransform: 'none', letterSpacing: '0.02em' }}>
        <Link href={`/${locale}`} style={{ color: 'var(--ink-soft)' }}>{isAr ? 'الرئيسية' : 'Home'}</Link>
        <span style={{ margin: '0 10px', color: 'var(--line-strong)' }}>/</span>
        <Link href={`/${locale}/rfq`} style={{ color: 'var(--ink-soft)' }}>{isAr ? 'الطلبات' : 'Inquiries'}</Link>
        <span style={{ margin: '0 10px', color: 'var(--line-strong)' }}>/</span>
        <span style={{ color: 'var(--green-700)' }}>{inq.id}</span>
      </nav>

      {/* HEADER */}
      <header style={{ marginBottom: 32 }}>
        <div className="cluster" style={{ gap: 10, marginBottom: 14 }}>
          <span className="hero-tag">
            <ShieldCheck size={12} />
            {isAr ? 'لوحة متابعة طلب التوريد' : 'Wholesale Sourcing Dashboard'}
          </span>
        </div>
        <h1 style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.4rem)', marginBottom: 14 }}>
          {isAr ? `حالة الطلب: ${inq.id}` : `Inquiry Reference: ${inq.id}`}
        </h1>
        <div className="cluster" style={{ gap: 16 }}>
          <span className="cluster" style={{ gap: 8 }}>
            <span className="meta" style={{ textTransform: 'none', letterSpacing: '0.02em' }}>
              {isAr ? 'الحالة الحالية:' : 'Status:'}
            </span>
            <span className={`badge ${isAuthorized ? 'badge-emerald' : 'badge-gold'}`}>
              {inq.state.toUpperCase()}
            </span>
          </span>
          <span className="meta" style={{ textTransform: 'none', letterSpacing: '0.02em' }}>
            {isAr ? 'صالح حتى' : 'Active Until'}: {inq.expires_at.toLocaleDateString()}
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
            <h4 style={{ color: 'var(--terracotta)' }}>{isAr ? 'تعذّر إتمام الإجراء' : 'That action could not be completed'}</h4>
            <p>{error}</p>
          </div>
        </div>
      )}

      {approved && (
        <div className="privacy-shield" style={{ borderInlineStartColor: 'var(--green-600)', marginBottom: 24 }}>
          <CheckCircle2 size={22} className="privacy-shield-icon" />
          <div className="privacy-shield-body">
            <h4>{isAr ? `تم اعتماد المورد (${approved})` : `Recipient Release Authorized: ${approved}`}</h4>
            <p>
              {isAr
                ? 'تم اجتياز سياسة الإفراج بالكامل، وأُدرج إشعار الربط في طابور الإرسال. ستصل بيانات التنسيق الرسمية للطرفين.'
                : 'The fail-closed lead policy was fully satisfied and the introduction has been queued for dispatch. Official coordination coordinates will reach both parties.'}
            </p>
          </div>
        </div>
      )}

      {verified && !error && (
        <div className="privacy-shield" style={{ borderInlineStartColor: 'var(--green-600)', marginBottom: 24 }}>
          <CheckCircle2 size={22} className="privacy-shield-icon" />
          <div className="privacy-shield-body">
            <h4>{isAr ? 'تم التحقق من وسيلة الاتصال' : 'Contact channel verified'}</h4>
            <p>
              {isAr
                ? 'يمكنك الآن مراجعة الموردين المؤهلين والاعتماد بالحرف.'
                : 'You can now review the qualified producers and approve them by name.'}
            </p>
          </div>
        </div>
      )}

      {/* STEP 1: OTP VERIFICATION */}
      {inq.state === 'pending_verification' && (
        <section className="card-frame card-frame-accent" style={{ marginBottom: 32 }}>
          <div className="cluster" style={{ alignItems: 'flex-start', gap: 14, marginBottom: 18 }}>
            <Lock size={22} style={{ color: "var(--green-600)", flexShrink: 0, marginTop: 2 }} />
            <div>
              <h2 style={{ fontSize: '1.25rem', marginBottom: 6 }}>
                {isAr ? 'خطوة التحقق من وسيلة الاتصال (رمز التحقق)' : 'Contact Channel Verification Required'}
              </h2>
              <p className="text-body" style={{ margin: 0, fontSize: '0.88rem' }}>
                {isAr
                  ? `أرسل النظام رمز تحقق من 6 أرقام إلى قناة الاتصال المختارة. أدخل الرمز أدناه لتفعيل الطلب والانتقال لمراجعة الموردين.`
                  : `A 6-digit one-time code has been dispatched to your ${inq.preferred_channel}. Enter it below to authorize candidate matching.`}
              </p>
            </div>
          </div>

          <form method="POST" action="/api/v1/inquiries/verify-form" style={{ maxWidth: '360px', marginTop: 20 }}>
            <input type="hidden" name="inquiry_id" value={id} />
            <input type="hidden" name="locale" value={locale} />
            <div className="form-field">
              <label className="form-label" htmlFor="token">
                {isAr ? 'رمز التحقق (6 أرقام)' : 'Enter 6-Digit Verification Code'}
              </label>
              <input
                type="text"
                id="token"
                name="token"
                className="form-input"
                placeholder="123456"
                pattern="[0-9]{6}"
                maxLength={6}
                required
                autoComplete="one-time-code"
                style={{ fontSize: '22px', letterSpacing: '6px', textAlign: 'center', fontWeight: 600, fontFamily: 'var(--font-sans)' }}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              {isAr ? 'تأكيد الرمز وتفعيل الطلب' : 'Verify & Authorize Inquiry'}
              <ArrowRight size={15} />
            </button>
          </form>
        </section>
      )}

      {/* STEP 2: TECHNICAL SPECIFICATIONS */}
      <section className="card-frame" style={{ marginBottom: 32 }}>
        <span className="eyebrow" style={{ display: 'block', marginBottom: 8 }}>
          {isAr ? 'المواصفات' : 'Specifications'}
        </span>
        <h2 style={{ fontSize: '1.3rem', marginBottom: 20 }}>
          {isAr ? 'المواصفات الفنية المعتمدة في الموجز' : 'Technical Specifications in Redacted Match Brief'}
        </h2>
        <div className="grid-2" style={{ fontSize: '0.88rem' }}>
          <div>
            <p style={{ margin: '6px 0' }}><strong>{isAr ? 'فئة الصنف:' : 'Product Family:'}</strong> {inq.product_family}</p>
            <p style={{ margin: '6px 0' }}><strong>{isAr ? 'الكمية المطلوبة:' : 'Target Quantity:'}</strong> {String(inq.quantity ?? '—')} {inq.quantity_unit}</p>
            <p style={{ margin: '6px 0' }}><strong>{isAr ? 'الميزانية التقريبية:' : 'Target Budget:'}</strong> {inq.target_price_per_unit || (isAr ? 'قابل للتفاوض' : 'Negotiable')}</p>
            <p style={{ margin: '6px 0' }}><strong>{isAr ? 'الإقليم المطلوب:' : 'Origin Preference:'}</strong> {inq.origin_preference || '—'}</p>
          </div>
          <div>
            <p style={{ margin: '6px 0' }}><strong>{isAr ? 'بلد التسليم:' : 'Destination Country:'}</strong> {inq.destination_country}</p>
            <p style={{ margin: '6px 0' }}><strong>{isAr ? 'طلب عينات فحص:' : 'Samples Required:'}</strong> {inq.samples_requested ? 'Yes (Pre-Order Evaluation)' : 'No (Direct Bulk)'}</p>
            <p style={{ margin: '6px 0' }}><strong>{isAr ? 'قناة التواصل المعتمدة:' : 'Contact Channel:'}</strong> {inq.preferred_channel}</p>
            <p style={{ margin: '6px 0' }}><strong>{isAr ? 'الطلب المتكرر:' : 'Order Recurrence:'}</strong> {String(inq.form_values?.order_recurrence || '—')}</p>
          </div>
        </div>
      </section>

      {/* STEP 3: CANDIDATE SUPPLIERS & EXPLICIT APPROVAL */}
      {isAuthorized && (
        <section className="card-frame" style={{ marginBottom: 32 }}>
          <div className="cluster" style={{ gap: 12, marginBottom: 12 }}>
            <Handshake size={20} style={{ color: "var(--green-600)", flexShrink: 0 }} />
            <h2 style={{ fontSize: '1.3rem', margin: 0 }}>
              {isAr ? 'الموردون المؤهلون وموافقة المشتري الصريحة' : 'Matching Candidate Suppliers & Buyer Approval'}
            </h2>
          </div>
          <p className="text-body" style={{ marginBottom: 12 }}>
            {isAr
              ? 'راجع الموردين المرشحين أدناه. لا يتلقى أي مورد معلوماتك إلا بعد الضغط على "اعتماد هذا المورد". الحد الأقصى ثلاثة موردين معتمدين لكل طلب.'
              : 'Review matching producers below. No supplier receives your contact details until you approve them by name. Maximum 3 approved recipients per inquiry.'}
          </p>
          <p className="text-body" style={{ marginBottom: 12, color: 'var(--ink-muted)' }}>
            {pick(securityClaimCopy.noAbsoluteSecurity, locale)}
          </p>
          <p className="text-body" style={{ marginBottom: 24, color: 'var(--ink-muted)' }}>
            {pick(buyerApprovalCopy.additionalRecipientRequiresApproval, locale)}
          </p>

          <div className="stack-4">
            {candidateSuppliers.map((biz: any) => {
              const isApproved = approvedIds.has(biz.id);
              return (
                <div key={biz.id} className="card" style={{ padding: 22, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
                  <div style={{ flex: '1 1 340px' }}>
                    <div className="cluster" style={{ gap: 8, marginBottom: 6 }}>
                      <span className="badge badge-locked"><MapPin size={10} /> {biz.country_name}</span>
                      {biz.contact_unlocked && <span className="badge badge-emerald">Verified Member</span>}
                      {isApproved && (
                        <span className="badge badge-gold">
                          <CheckCircle2 size={11} />
                          {isAr ? 'تم الاعتماد' : 'Approved'}
                        </span>
                      )}
                    </div>
                    <h3 style={{ margin: '4px 0 6px', fontSize: '1.1rem' }}>
                      <Link href={`/${locale}/directory/${biz.slug}`} target="_blank" style={{ color: 'var(--green-700)' }}>
                        {biz.name} <ExternalLink size={13} style={{ display: 'inline', verticalAlign: 'middle' }} />
                      </Link>
                    </h3>
                    <p style={{ margin: '0 0 4px', fontSize: '0.82rem', color: 'var(--ink-muted)' }}>
                      {biz.category} · {biz.city}
                    </p>
                    <p style={{ margin: 0, fontSize: '0.82rem' }}>
                      <strong>{isAr ? 'الأقاليم التي يتعامل معها:' : 'Origins handled:'}</strong>{' '}
                      {(biz.handles_origins || []).join(', ') || (isAr ? 'غير مذكورة' : 'not stated')}
                      {biz.minimum_order_quantity &&
                        (biz.verified_fields || []).includes('minimum_order_quantity') && (
                          <>
                            {' · '}
                            <strong>MOQ:</strong> {biz.minimum_order_quantity}
                          </>
                        )}
                    </p>
                  </div>

                  {!isApproved && (
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
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* CONSENT WITHDRAWAL — always accessible (Q65) */}
      {inq.state !== 'pending_verification' && (
        <div className="cluster" style={{ justifyContent: 'space-between', marginTop: 8 }}>
          <span className="meta" style={{ textTransform: 'none', letterSpacing: '0.02em' }}>
            {isAr
              ? 'يمكنك سحب موافقتك على مشاركة بياناتك في أي وقت.'
              : 'You may withdraw consent to share your details at any time.'}
          </span>
          <Link href={`/${locale}/privacy`} className="btn btn-ghost btn-sm">
            {isAr ? 'سحب الموافقة' : 'Withdraw consent'}
          </Link>
        </div>
      )}
    </div>
  );
}

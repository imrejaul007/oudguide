import Link from 'next/link';
import { seed } from '@/lib/data';

export default async function MembershipCheckoutPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ success?: string }>;
}) {
  const { locale } = await params;
  const { success } = await searchParams;
  const isAr = locale === 'ar';

  const businesses = seed.businesses;

  return (
    <div style={{ maxWidth: '920px', margin: '0 auto', padding: '10px 0 60px' }}>
      {/* CHECKOUT HERO */}
      <div className="luxury-hero" style={{ padding: '44px 36px', marginBottom: '36px' }}>
        <div className="hero-tag">
          <span>👑</span>
          <span>{isAr ? 'تفعيل العضوية التجارية السنوية' : 'Annual Commercial Membership'}</span>
        </div>
        <h1 className="hero-headline font-display" style={{ fontSize: '34px', margin: '0 0 10px' }}>
          {isAr ? 'ترقية الملف التجاري وإتاحة الاتصال المباشر' : 'Unlock Direct Commercial Contact Display'}
        </h1>
        <p className="hero-lead" style={{ fontSize: '15.5px', margin: 0, maxWidth: '760px' }}>
          {isAr
            ? 'تتيح العضوية السنوية عرض البريد الإلكتروني الرسمي، أرقام الهواتف، والواتساب التجاري مباشرة على ملف شركتك لجميع المشترين الدوليين.'
            : 'Subscribed membership activates direct telephone, WhatsApp, official email, and physical facility coordinates on your directory profile.'}
        </p>
      </div>

      {success && (
        <div className="form-card" style={{ background: '#f6fbf8', borderColor: '#c8e6d5', padding: '24px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <span style={{ fontSize: '24px' }}>🎉</span>
            <h3 style={{ margin: 0, color: '#1b4d3e', fontSize: '20px' }}>
              {isAr ? 'تم تفعيل العضوية السنوية بنجاح!' : 'Annual Membership Activated Successfully!'}
            </h3>
          </div>
          <p style={{ margin: '0 0 16px', fontSize: '14.5px', color: '#385e49' }}>
            {isAr
              ? `تم ترقية ملف المنشأة (${success}) إلى حالة "��ضو سنوي معتمد" وتم فتح إمكانية عرض بيانات الاتصال المباشرة للمشترين.`
              : `Your business profile (${success}) has been upgraded to Subscribed Member status. Direct contact display is now live in the global directory.`}
          </p>
          <Link href={`/${locale}/directory`} className="btn-gold" style={{ padding: '8px 20px', fontSize: '13px' }}>
            {isAr ? 'مشاهدة الملف في الدليل ←' : 'View Profile in Directory →'}
          </Link>
        </div>
      )}

      <div className="grid-2" style={{ gap: '30px' }}>
        {/* INVOICE SUMMARY */}
        <div className="form-card">
          <h3 className="card-title font-display" style={{ fontSize: '20px', borderBottom: '1px solid var(--color-border)', paddingBottom: '12px', marginBottom: '16px' }}>
            {isAr ? 'ملخص الفاتورة السنوية' : 'Annual Commercial Order Summary'}
          </h3>

          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #f0ece1', fontSize: '14.5px' }}>
            <span>{isAr ? 'العضوية التجارية السنوية:' : 'Annual Business Visibility:'}</span>
            <strong>1,200 AED</strong>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #f0ece1', fontSize: '14.5px' }}>
            <span>{isAr ? 'المدة الزمنية:' : 'Billing Term:'}</span>
            <span>{isAr ? '12 شهراً (تجديد سنوي)' : '12 Months (Annual)'}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #f0ece1', fontSize: '14.5px' }}>
            <span>{isAr ? 'ضريبة القيمة المضافة (0%):' : 'VAT / Regional Tax (0%):'}</span>
            <span>0.00 AED</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0', fontSize: '20px', color: 'var(--color-crimson)', fontWeight: 800 }}>
            <span>{isAr ? 'المجموع الإجمالي:' : 'Total Payable:'}</span>
            <span>1,200 AED</span>
          </div>

          <div className="privacy-shield" style={{ margin: '16px 0 0', padding: '14px 18px' }}>
            <div className="privacy-shield-icon" style={{ fontSize: '18px' }}>ℹ️</div>
            <div className="privacy-shield-text" style={{ fontSize: '12.5px' }}>
              <strong>DEC02 / DEC03 Policy:</strong> Billed upfront annually at AED 1,200 (equivalent to AED 100/mo). Immediate activation upon transaction confirmation.
            </div>
          </div>
        </div>

        {/* SELF-SERVICE CHECKOUT FORM */}
        <div className="form-card" style={{ borderColor: 'var(--color-gold)', background: '#fffdfa' }}>
          <h3 className="card-title font-display" style={{ fontSize: '20px', margin: '0 0 16px' }}>
            {isAr ? 'تأكيد السداد وتفعيل الحساب' : 'Payment & Account Activation'}
          </h3>

          <form method="POST" action="/api/v1/businesses/membership-checkout-form">
            <input type="hidden" name="locale" value={locale} />

            <div>
              <label className="form-label" htmlFor="business_id">
                {isAr ? 'اختر المنشأة المراد ترقيتها *' : 'Select Registered Business *'}
              </label>
              <select id="business_id" name="business_id" className="form-select" required defaultValue={businesses[0].id}>
                {businesses.map((b: any) => (
                  <option key={b.id} value={b.id}>
                    {b.name} ({b.city}, {b.country_name})
                  </option>
                ))}
              </select>
            </div>

            <div style={{ marginTop: '14px' }}>
              <label className="form-label" htmlFor="owner_email">
                {isAr ? 'البريد الإلكتروني المعتمد للمالك *' : 'Authorized Signatory Email *'}
              </label>
              <input
                type="email"
                id="owner_email"
                name="owner_email"
                className="form-input"
                required
                placeholder="owner@distillery.example"
                defaultValue="owner@distillery.example"
              />
            </div>

            <div style={{ marginTop: '14px' }}>
              <label className="form-label" htmlFor="payment_method">
                {isAr ? 'طريقة السداد (Test Gateway) *' : 'Payment Method (Test Mode) *'}
              </label>
              <select id="payment_method" name="payment_method" className="form-select">
                <option value="test_card">Credit / Debit Card (Instant Test Clearance)</option>
                <option value="bank_transfer">Corporate Wire Transfer / Bank Invoice (UAE)</option>
              </select>
            </div>

            <div style={{ marginTop: '24px' }}>
              <button type="submit" className="btn-gold" style={{ width: '100%', justifyContent: 'center', padding: '12px' }}>
                <span>{isAr ? 'إتمام السداد وتفعيل العضوية (1,200 د.إ)' : 'Confirm Payment & Unlock Contacts (1,200 AED)'}</span>
                <span>{isAr ? '←' : '→'}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

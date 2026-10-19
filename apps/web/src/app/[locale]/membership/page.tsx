import { seed, domain } from '@/lib/data';
import Link from 'next/link';




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
    <div>
      <div className="hero">
        <h2>{isAr ? 'تفعيل العضوية السنوية للشركات (AED 1,200/سنة)' : 'Annual Business Visibility Checkout'}</h2>
        <p>
          {isAr
            ? 'احصل على شارة العضوية المعتمدة وافتح إمكانية عرض البريد والهاتف والواتساب المباشر لجميع زوار دليل العود.'
            : 'Activate annual visibility to display direct contact information (phone, email, WhatsApp, and physical souk/distillery address) on your profile.'}
        </p>
      </div>

      {success && (
        <div className="banner-success">
          <strong>{isAr ? 'تم تفعيل العضوية السنوية بنجاح!' : 'Annual Membership Activated Successfully!'}</strong>{' '}
          {isAr
            ? 'تم ترقية ملف شركتك إلى "عضوية تجارية سنوية" وتم فتح إمكانية عرض بيانات الاتصال المباشرة.'
            : 'Your business profile has been upgraded to Subscribed Member status. Direct contact display is now enabled.'}
        </div>
      )}

      <div className="grid-2">
        <div className="section-box">
          <h3>{isAr ? 'تفاصيل الاشتراك والتسعير المعتمد' : 'Subscription Summary'}</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--color-border)' }}>
            <span>{isAr ? 'العضوية التجارية السنوية:' : 'Annual Business Visibility:'}</span>
            <strong>1,200 AED</strong>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--color-border)' }}>
            <span>{isAr ? 'المدة:' : 'Billing Period:'}</span>
            <span>{isAr ? '12 شهراً (تجديد سنوي)' : '12 Months (1 Year)'}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--color-border)' }}>
            <span>{isAr ? 'الضريبة التقديرية:' : 'VAT (Estimated):'}</span>
            <span>0.00 AED</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', fontSize: '18px', color: 'var(--color-primary)' }}>
            <strong>{isAr ? 'المجموع المستحق:' : 'Total Due:'}</strong>
            <strong>1,200 AED</strong>
          </div>

          <div style={{ fontSize: '13px', color: 'var(--color-muted)', marginTop: '10px' }}>
            <em>DEC02 / DEC03 Policy: Subscription is billed annually upfront. Terms subject to verified ownership check.</em>
          </div>
        </div>

        <div className="card">
          <h3>{isAr ? 'اختر الشركة لتفعيل العضوية' : 'Select Business Profile'}</h3>
          <form method="POST" action="/api/v1/businesses/membership-checkout-form">
            <input type="hidden" name="locale" value={locale} />
            <div>
              <label htmlFor="business_id">{isAr ? 'اسم الشركة المسجلة *' : 'Registered Business *'}</label>
              <select id="business_id" name="business_id" required defaultValue={businesses[0].id}>
                {businesses.map((b: any) => (
                  <option key={b.id} value={b.id}>
                    {b.name} ({b.city}, {b.country_name})
                  </option>
                ))}
              </select>
            </div>

            <div style={{ marginTop: '12px' }}>
              <label htmlFor="owner_email">{isAr ? 'بريد المسؤول المعتمد *' : 'Authorized Owner Email *'}</label>
              <input type="email" id="owner_email" name="owner_email" required placeholder="owner@distillery.example" defaultValue="owner@distillery.example" />
            </div>

            <div style={{ marginTop: '12px' }}>
              <label htmlFor="payment_method">{isAr ? 'طريقة السداد (Test Mode) *' : 'Payment Method (Test Mode) *'}</label>
              <select id="payment_method" name="payment_method">
                <option value="test_card">Credit / Debit Card (Test Mode)</option>
                <option value="bank_transfer">UAE Bank Transfer (Invoice)</option>
              </select>
            </div>

            <button type="submit" className="btn-primary" style={{ marginTop: '20px', width: '100%', padding: '10px' }}>
              {isAr ? 'تأكيد السداد وتفعيل العضوية (1,200 د.إ)' : 'Confirm Payment & Unlock Contacts (1,200 AED)'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

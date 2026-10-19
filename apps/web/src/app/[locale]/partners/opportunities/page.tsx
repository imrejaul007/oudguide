import Link from 'next/link';





export default async function PartnerOpportunitiesPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ expressed?: string }>;
}) {
  const { locale } = await params;
  const { expressed } = await searchParams;
  const isAr = locale === 'ar';

  // Seed sample match briefs for partner discovery
  const sampleBriefs = [
    {
      inquiry_id: 'inq_sample_01',
      product_family: 'Oud oil',
      quantity: 50,
      quantity_unit: 'tolas',
      target_price_per_unit: '350 AED/tola',
      destination_country: 'United Arab Emirates',
      origin_preference: 'India (Assam) or Cambodia',
      samples_requested: true,
      required_date: '2026-11-15',
      created_at: new Date('2026-10-19'),
    },
    {
      inquiry_id: 'inq_sample_02',
      product_family: 'Oud wood',
      quantity: 20,
      quantity_unit: 'kg',
      target_price_per_unit: 'Negotiable (High-grade sinking)',
      destination_country: 'Saudi Arabia',
      origin_preference: 'Indonesia (Kalimantan / Merauke)',
      samples_requested: false,
      required_date: '2026-12-01',
      created_at: new Date('2026-10-18'),
    },
    {
      inquiry_id: 'inq_sample_03',
      product_family: 'Finished perfume',
      quantity: 500,
      quantity_unit: 'bottles (50ml)',
      target_price_per_unit: 'Private label MOQ',
      destination_country: 'United Kingdom',
      origin_preference: 'IFRA-compliant pure blends',
      samples_requested: true,
      required_date: '2027-01-20',
      created_at: new Date('2026-10-19'),
    },
  ];

  return (
    <div>
      <div className="hero">
        <h2>{isAr ? 'بوابة الموردين: فرص التوريد وعروض الأسعار' : 'Supplier Partner Portal: Live Wholesale Opportunities'}</h2>
        <p>
          {isAr
            ? 'موجز مشفر ومحايد للمتطلبات التجارية الواردة. لا تحتوي هذه الموجزات على أي بيانات شخصية للمشتري حتى يتم اختياره واعتماده رسمياً.'
            : 'Redacted match briefs for verified suppliers. All buyer personal data remains strictly confidential until you are explicitly approved by the buyer.'}
        </p>
      </div>

      {expressed && (
        <div className="banner-success">
          <strong>{isAr ? 'تم تسجيل اهتمامك بنجاح!' : 'Interest Registered!'}</strong>{' '}
          {isAr
            ? `تم إشعار المشتري بأن مؤسستك مرشحة لتوريد هذا الطلب (${expressed}). ستصلك بيانات الاتصال بمجرد اعتماده.`
            : `Your interest in inquiry (${expressed}) has been logged. The buyer has been notified and can approve introduction release.`}
        </div>
      )}

      <div className="section-box" style={{ background: '#fdfbf6' }}>
        <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-muted)' }}>
          🔒 <strong>{isAr ? 'سياسة حماية بيانات المشترين (QA-025):' : 'Buyer Data Protection Standard (QA-025):'}</strong>{' '}
          {isAr
            ? 'تعرض هذه الصفحة المواصفات الفنية للصنف والكمية وبلد الوصول فقط. لا يتم كشف أسماء الشركات أو المشترين أو وسائل اتصالهم في هذه البوابة.'
            : 'This workspace displays technical material specifications, target volume, and delivery country only. Zero buyer identifying data is exposed.'}
        </p>
      </div>

      <div style={{ marginTop: '24px' }}>
        <h3>{isAr ? 'المتطلبات النشطة المتاحة للتسعير' : 'Active Requirements Open for Sourcing'}</h3>

        {sampleBriefs.map((brief) => (
          <div key={brief.inquiry_id} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <span className="badge badge-unlocked">{brief.product_family}</span>
                <span className="badge badge-member">{brief.destination_country}</span>
                <span style={{ fontSize: '12px', color: 'var(--color-muted)', marginInlineStart: '8px' }}>
                  ID: {brief.inquiry_id}
                </span>
                <h4 style={{ margin: '8px 0 6px 0', fontSize: '18px' }}>
                  Requirement for {brief.quantity} {brief.quantity_unit} {brief.product_family}
                </h4>
              </div>
              <div>
                <form method="POST" action="/api/v1/partners/interest-form">
                  <input type="hidden" name="inquiry_id" value={brief.inquiry_id} />
                  <input type="hidden" name="locale" value={locale} />
                  <button type="submit" className="btn-primary" style={{ padding: '8px 16px', fontSize: '13px' }}>
                    {isAr ? 'إبداء الرغبة في التوريد ←' : 'Express Sourcing Interest →'}
                  </button>
                </form>
              </div>
            </div>

            <div className="grid-3" style={{ fontSize: '13px', marginTop: '12px', background: '#faf7ed', padding: '10px 14px', borderRadius: '4px' }}>
              <div>
                <strong>{isAr ? 'الكمية المستهدفة:' : 'Volume:'}</strong> {brief.quantity} {brief.quantity_unit}
              </div>
              <div>
                <strong>{isAr ? 'الميزانية التقريبية:' : 'Target Price:'}</strong> {brief.target_price_per_unit}
              </div>
              <div>
                <strong>{isAr ? 'المنطقة المطلوبة:' : 'Origin Preference:'}</strong> {brief.origin_preference}
              </div>
              <div>
                <strong>{isAr ? 'بلد الوصول:' : 'Destination:'}</strong> {brief.destination_country}
              </div>
              <div>
                <strong>{isAr ? 'طلب عينات:' : 'Samples:'}</strong> {brief.samples_requested ? 'Required' : 'Bulk Direct'}
              </div>
              <div>
                <strong>{isAr ? 'تاريخ التسليم:' : 'Target Date:'}</strong> {brief.required_date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

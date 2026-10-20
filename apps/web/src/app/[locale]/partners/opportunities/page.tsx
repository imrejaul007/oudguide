import { Briefcase, Lock, Globe, Calendar, FileText, CheckCircle2 } from 'lucide-react';

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
    },
  ];

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 1100 }}>
        <section className="masthead">
          <div className="masthead-inner">
            <div className="hero-tag">
              <Briefcase size={13} />
              <span>{isAr ? 'بوابة الشركاء' : 'Supplier Portal'}</span>
            </div>
            <h1>
              {isAr ? 'بوابة الموردين: فرص التوريد' : 'Supplier Partner Portal: Live Wholesale Opportunities'}
              <span className="accent">{isAr ? 'موجزات مشفرة.' : 'Redacted match briefs.'}</span>
            </h1>
            <p className="hero-lead">
              {isAr
                ? 'موجز مشفر ومحايد للمتطلبات التجارية الواردة. لا تحتوي هذه الموجزات على أي بيانات شخصية للمشتري حتى يتم اختياره واعتماده رسمياً.'
                : 'Redacted match briefs for verified suppliers. All buyer personal data remains strictly confidential until you are explicitly approved by the buyer.'}
            </p>
          </div>
        </section>

        {expressed && (
          <div className="privacy-shield" style={{ marginTop: 32, borderLeftColor: 'var(--color-emerald)', background: 'linear-gradient(135deg, #f0faf5, #e3f2ea)' }}>
            <CheckCircle2 size={28} className="privacy-shield-icon" style={{ color: 'var(--color-emerald)' }} />
            <div className="privacy-shield-body">
              <h4 style={{ color: 'var(--color-emerald)' }}>
                {isAr ? 'تم تسجيل اهتمامك بنجاح!' : 'Interest Registered!'}
              </h4>
              <p>
                {isAr
                  ? `تم إشعار المشتري بأن مؤسستك مرشحة لتوريد هذا الطلب (${expressed}).`
                  : `Your interest in inquiry (${expressed}) has been logged. The buyer has been notified and can approve introduction release.`}
              </p>
            </div>
          </div>
        )}

        <div className="privacy-shield" style={{ marginTop: 40 }}>
          <Lock size={24} className="privacy-shield-icon" />
          <div className="privacy-shield-body">
            <h4>{isAr ? 'سياسة حماية بيانات المشترين (QA-025)' : 'Buyer Data Protection Standard (QA-025)'}</h4>
            <p>
              {isAr
                ? 'تعرض هذه الصفحة المواصفات الفنية للصنف والكمية وبلد الوصول فقط. لا يتم كشف أسماء الشركات أو المشترين أو وسائل اتصالهم.'
                : 'This workspace displays technical material specifications, target volume, and delivery country only. Zero buyer identifying data is exposed.'}
            </p>
          </div>
        </div>

        <h2 className="h2 text-crimson" style={{ margin: '48px 0 24px' }}>
          {isAr ? 'المتطلبات النشطة المتاحة للتسعير' : 'Active Requirements Open for Sourcing'}
        </h2>

        <div className="stack-6">
          {sampleBriefs.map((brief) => (
            <article key={brief.inquiry_id} className="card" style={{ padding: 28 }}>
              <div className="row-between" style={{ marginBottom: 16 }}>
                <div>
                  <div className="cluster" style={{ gap: 8, marginBottom: 10 }}>
                    <span className="badge badge-gold">{brief.product_family}</span>
                    <span className="badge badge-crimson">
                      <Globe size={11} />
                      {brief.destination_country}
                    </span>
                    <span className="badge badge-locked">ID: {brief.inquiry_id}</span>
                  </div>
                  <h3 className="discipline-title" style={{ fontSize: '1.2rem', margin: '0 0 4px' }}>
                    {isAr
                      ? `طلب توريد ${brief.quantity} ${brief.quantity_unit} ${brief.product_family}`
                      : `Requirement: ${brief.quantity} ${brief.quantity_unit} of ${brief.product_family}`}
                  </h3>
                </div>
                <form method="POST" action="/api/v1/partners/interest-form">
                  <input type="hidden" name="inquiry_id" value={brief.inquiry_id} />
                  <input type="hidden" name="locale" value={locale} />
                  <button type="submit" className="btn btn-gold btn-sm">
                    {isAr ? 'إبداء الرغبة في التوريد ←' : 'Express Sourcing Interest →'}
                  </button>
                </form>
              </div>

              <div className="grid-3" style={{ gap: 14 }}>
                <div className="card" style={{ padding: 16, background: 'var(--bg-sandstone)' }}>
                  <div className="cluster" style={{ marginBottom: 6, gap: 6 }}>
                    <FileText size={12} style={{ color: 'var(--color-gold-dark)' }} />
                    <strong style={{ fontSize: '0.78rem', letterSpacing: '0.05em' }}>
                      {isAr ? 'الكمية المستهدفة' : 'Volume'}
                    </strong>
                  </div>
                  <span className="display-serif" style={{ fontSize: '1.05rem', fontStyle: 'italic' }}>
                    {brief.quantity} {brief.quantity_unit}
                  </span>
                </div>
                <div className="card" style={{ padding: 16, background: 'var(--bg-sandstone)' }}>
                  <div className="cluster" style={{ marginBottom: 6, gap: 6 }}>
                    <FileText size={12} style={{ color: 'var(--color-gold-dark)' }} />
                    <strong style={{ fontSize: '0.78rem', letterSpacing: '0.05em' }}>
                      {isAr ? 'الميزانية التقريبية' : 'Target Price'}
                    </strong>
                  </div>
                  <span className="display-serif" style={{ fontSize: '1.05rem', fontStyle: 'italic' }}>
                    {brief.target_price_per_unit}
                  </span>
                </div>
                <div className="card" style={{ padding: 16, background: 'var(--bg-sandstone)' }}>
                  <div className="cluster" style={{ marginBottom: 6, gap: 6 }}>
                    <Globe size={12} style={{ color: 'var(--color-gold-dark)' }} />
                    <strong style={{ fontSize: '0.78rem', letterSpacing: '0.05em' }}>
                      {isAr ? 'المنطقة المطلوبة' : 'Origin Preference'}
                    </strong>
                  </div>
                  <span className="display-serif" style={{ fontSize: '1.05rem', fontStyle: 'italic' }}>
                    {brief.origin_preference}
                  </span>
                </div>
                <div className="card" style={{ padding: 16, background: 'var(--bg-sandstone)' }}>
                  <div className="cluster" style={{ marginBottom: 6, gap: 6 }}>
                    <Globe size={12} style={{ color: 'var(--color-gold-dark)' }} />
                    <strong style={{ fontSize: '0.78rem', letterSpacing: '0.05em' }}>
                      {isAr ? 'بلد الوصول' : 'Destination'}
                    </strong>
                  </div>
                  <span className="display-serif" style={{ fontSize: '1.05rem', fontStyle: 'italic' }}>
                    {brief.destination_country}
                  </span>
                </div>
                <div className="card" style={{ padding: 16, background: 'var(--bg-sandstone)' }}>
                  <div className="cluster" style={{ marginBottom: 6, gap: 6 }}>
                    <FileText size={12} style={{ color: 'var(--color-gold-dark)' }} />
                    <strong style={{ fontSize: '0.78rem', letterSpacing: '0.05em' }}>
                      {isAr ? 'طلب عينات' : 'Samples'}
                    </strong>
                  </div>
                  <span className="display-serif" style={{ fontSize: '1.05rem', fontStyle: 'italic' }}>
                    {brief.samples_requested ? (isAr ? 'مطلوبة' : 'Required') : (isAr ? 'بدون عينات' : 'Bulk Direct')}
                  </span>
                </div>
                <div className="card" style={{ padding: 16, background: 'var(--bg-sandstone)' }}>
                  <div className="cluster" style={{ marginBottom: 6, gap: 6 }}>
                    <Calendar size={12} style={{ color: 'var(--color-gold-dark)' }} />
                    <strong style={{ fontSize: '0.78rem', letterSpacing: '0.05em' }}>
                      {isAr ? 'تاريخ التسليم' : 'Target Date'}
                    </strong>
                  </div>
                  <span className="display-serif" style={{ fontSize: '1.05rem', fontStyle: 'italic' }}>
                    {brief.required_date}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
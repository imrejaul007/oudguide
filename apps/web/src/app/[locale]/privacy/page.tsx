export default async function PrivacyPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ submitted?: string }>;
}) {
  const { locale } = await params;
  const { submitted } = await searchParams;
  const isAr = locale === 'ar';

  return (
    <div>
      <div className="hero">
        <h2>{isAr ? 'سياسة الخصوصية وحقوق حماية البيانات' : 'Privacy Policy & Data Subject Rights'}</h2>
        <p>
          {isAr
            ? 'نلتزم بحماية بياناتك الشخصية والتجارية وفقاً لأعلى معايير الخصوصية وأنظمة حماية البيانات في الإمارات والاتحاد الأوروبي.'
            : 'OudGuide complies with international data protection principles (GDPR / UAE PDPL). You retain full control over your contact data, consent withdrawal, and record erasure.'}
        </p>
      </div>

      {submitted && (
        <div className="banner-success">
          <strong>{isAr ? 'تم استلام طلب الخصوصية بنجاح!' : 'Privacy Request Received!'}</strong>{' '}
          {isAr ? 'تم تسجيل طلبك وسيقوم مسؤول حماية البيانات بمعالجته خلال المدة النظامية.' : 'Your request has been logged and will be processed within statutory timelines.'}
        </div>
      )}

      <div className="grid-2">
        <div className="section-box">
          <h3>{isAr ? 'حقوقك القانونية' : 'Your Privacy Rights'}</h3>
          <ul style={{ paddingInlineStart: '20px', fontSize: '14px' }}>
            <li><strong>Right to Erasure:</strong> Request deletion of your inquiries and submitted files.</li>
            <li><strong>Consent Withdrawal:</strong> Revoke recipient grants at any time prior to introduction dispatch.</li>
            <li><strong>Access & Portability:</strong> Request an export of your recorded transactions.</li>
            <li><strong>Contact Suppression:</strong> Permanently suppress your business contacts from directory indexing.</li>
          </ul>
        </div>

        <div className="card">
          <h3>{isAr ? 'تقديم طلب خصوصية أو حذف بيانات' : 'Submit a Data Privacy Request'}</h3>
          <form method="POST" action="/api/v1/privacy/requests-form">
            <input type="hidden" name="locale" value={locale} />
            <div>
              <label htmlFor="subject_email">{isAr ? 'بريدك الإلكتروني المسجل *' : 'Your Registered Email *'}</label>
              <input type="email" id="subject_email" name="subject_email" required placeholder="user@example.com" />
            </div>

            <div style={{ marginTop: '10px' }}>
              <label htmlFor="request_type">{isAr ? 'نوع الطلب *' : 'Request Type *'}</label>
              <select id="request_type" name="request_type" required>
                <option value="erasure">Complete Data Erasure (حذف شامل للبيانات)</option>
                <option value="access">Access & Export (تصدير نسخة من البيانات)</option>
                <option value="suppression">Directory Contact Suppression (حجب دائم من الدليل)</option>
                <option value="consent_revocation">Consent Revocation (إلغاء الموافقة على المشاركة)</option>
              </select>
            </div>

            <div style={{ marginTop: '10px' }}>
              <label htmlFor="details">{isAr ? 'تفاصيل إضافية' : 'Additional Reference Details'}</label>
              <textarea id="details" name="details" placeholder="Inquiry ID, business name, or specific URLs..." />
            </div>

            <button type="submit" className="btn-primary" style={{ marginTop: '14px', width: '100%' }}>
              {isAr ? 'إرسال طلب الخصوصية ←' : 'Submit Privacy Request →'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

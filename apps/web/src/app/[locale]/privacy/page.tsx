import { Lock, CheckCircle2 } from 'lucide-react';

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

  const rights = [
    { title: 'Right to Erasure', desc: isAr ? 'طلب حذف استفساراتك وملفاتك المقدمة.' : 'Request deletion of your inquiries and submitted files.' },
    { title: 'Consent Withdrawal', desc: isAr ? 'سحب موافقتك على مشاركة البيانات مع الموردين في أي وقت.' : 'Revoke recipient grants at any time prior to introduction dispatch.' },
    { title: 'Access & Portability', desc: isAr ? 'طلب تصدير نسخة من معاملاتك المسجلة.' : 'Request an export of your recorded transactions.' },
    { title: 'Contact Suppression', desc: isAr ? 'حجب بيانات شركتك نهائياً من فهرسة الدليل.' : 'Permanently suppress your business contacts from directory indexing.' },
  ];

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 1000 }}>
        <section className="hero" style={{ padding: 'clamp(36px, 5vw, 56px) clamp(24px, 4vw, 48px)' }}>
          <div className="hero-content" style={{ textAlign: 'left', margin: 0, maxWidth: 760 }}>
            <div className="hero-tag">
              <Lock size={13} />
              <span>{isAr ? 'الخصوصية' : 'Privacy'}</span>
            </div>
            <h1 className="hero-title" style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.6rem)' }}>
              {isAr ? 'سياسة الخصوصية وحقوق حماية البيانات' : 'Privacy Policy & Data Subject Rights'}
              <span className="accent">GDPR · UAE PDPL</span>
            </h1>
            <p className="hero-lead" style={{ margin: 0, textAlign: 'left' }}>
              {isAr
                ? 'نلتزم بحماية بياناتك الشخصية والتجارية وفقاً لأعلى معايير الخصوصية وأنظمة حماية البيانات في الإمارات والاتحاد الأوروبي.'
                : 'OudGuide complies with international data protection principles (GDPR / UAE PDPL). You retain full control over your contact data, consent withdrawal, and record erasure.'}
            </p>
          </div>
        </section>

        {submitted && (
          <div className="privacy-shield" style={{ marginTop: 32, borderLeftColor: 'var(--color-emerald)', background: 'linear-gradient(135deg, #f0faf5, #e3f2ea)' }}>
            <CheckCircle2 size={28} className="privacy-shield-icon" style={{ color: 'var(--color-emerald)' }} />
            <div className="privacy-shield-body">
              <h4 style={{ color: 'var(--color-emerald)' }}>
                {isAr ? 'تم استلام طلب الخصوصية بنجاح!' : 'Privacy Request Received!'}
              </h4>
              <p>
                {isAr
                  ? 'تم تسجيل طلبك وسيقوم مسؤول حماية البيانات بمعالجته خلال المدة النظامية.'
                  : 'Your request has been logged and will be processed within statutory timelines.'}
              </p>
            </div>
          </div>
        )}

        <div className="grid-2" style={{ marginTop: 40, gap: 28 }}>
          <article className="card-frame" style={{ padding: 36 }}>
            <span className="eyebrow eyebrow-crimson" style={{ display: 'block', marginBottom: 8 }}>{isAr ? 'الحقوق' : 'Your Rights'}</span>
            <h2 className="h3 text-crimson" style={{ marginBottom: 16 }}>{isAr ? 'حقوقك الق��نونية' : 'Your Privacy Rights'}</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }} className="stack-4">
              {rights.map((r, i) => (
                <li key={i}>
                  <h3 className="step-tile-title" style={{ fontSize: '0.95rem', marginBottom: 4 }}>{r.title}</h3>
                  <p className="step-tile-desc" style={{ fontSize: '0.88rem', margin: 0 }}>{r.desc}</p>
                </li>
              ))}
            </ul>
          </article>

          <article className="card-frame" style={{ padding: 36 }}>
            <span className="eyebrow eyebrow-crimson" style={{ display: 'block', marginBottom: 8 }}>{isAr ? 'إرسال طلب' : 'Submit Request'}</span>
            <h2 className="h3 text-crimson" style={{ marginBottom: 16 }}>{isAr ? 'تقديم طلب خصوصية' : 'Submit a Data Privacy Request'}</h2>
            <form method="POST" action="/api/v1/privacy/requests-form">
              <input type="hidden" name="locale" value={locale} />

              <div className="form-field">
                <label className="form-label" htmlFor="subject_email">{isAr ? 'بريدك الإلكتروني المسجل *' : 'Your Registered Email *'}</label>
                <input type="email" id="subject_email" name="subject_email" required placeholder="user@example.com" className="form-input" />
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="request_type">{isAr ? 'نوع الطلب *' : 'Request Type *'}</label>
                <select id="request_type" name="request_type" required className="form-select">
                  <option value="erasure">Complete Data Erasure (حذف شامل للبيانات)</option>
                  <option value="access">Access & Export (تصدير نسخة من البيانات)</option>
                  <option value="suppression">Directory Contact Suppression (حجب دائم من الدليل)</option>
                  <option value="consent_revocation">Consent Revocation (إلغاء الموافقة على المشاركة)</option>
                </select>
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="details">{isAr ? 'تفاصيل إضافية' : 'Additional Reference Details'}</label>
                <textarea id="details" name="details" placeholder="Inquiry ID, business name, or specific URLs..." className="form-textarea" />
              </div>

              <button type="submit" className="btn btn-gold" style={{ width: '100%', marginTop: 8 }}>
                {isAr ? 'إرسال طلب الخصوصية ←' : 'Submit Privacy Request →'}
              </button>
            </form>
          </article>
        </div>
      </div>
    </div>
  );
}
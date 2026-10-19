export default async function CorrectionsPage({
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
        <h2>{isAr ? 'تقديم طلب تصحيح أو تدقيق علمي' : 'Submit an Editorial or Directory Correction'}</h2>
        <p>
          {isAr
            ? 'نرحب بملاحظات الخبراء والموردين والباحثين لتصحيح أو تحديث أي معلومات نباتية أو جغرافية أو تجارية مدرجة في دليل العود.'
            : 'OudGuide maintains a transparent public correction register. If you notice inaccurate botanical terminology, outdated supplier details, or invalid links, submit a correction below.'}
        </p>
      </div>

      {submitted && (
        <div className="banner-success">
          <strong>{isAr ? 'تم استلام طلب التصحيح بنجاح!' : 'Correction Submission Received!'}</strong>{' '}
          {isAr ? 'شكراً لتعاونك. سيتم مراجعة الملاحظة وتوثيق التحديث في السجل التحريري.' : 'Thank you. Our editorial team will review the claim evidence and update the live register.'}
        </div>
      )}

      <div className="card" style={{ maxWidth: '600px', margin: '20px auto' }}>
        <h3>{isAr ? 'نموذج التدقيق التحريري' : 'Editorial Review Form'}</h3>
        <form method="POST" action="/api/v1/corrections/form">
          <input type="hidden" name="locale" value={locale} />
          <div>
            <label htmlFor="target_url">{isAr ? 'رابط الصفحة المعنية *' : 'Page URL or Route Path *'}</label>
            <input type="text" id="target_url" name="target_url" required placeholder="e.g. /en/guides/what-is-agarwood or business slug" />
          </div>

          <div style={{ marginTop: '10px' }}>
            <label htmlFor="submitter_email">{isAr ? 'بريدك الإلكتروني للتواصل *' : 'Your Email Address *'}</label>
            <input type="email" id="submitter_email" name="submitter_email" required placeholder="expert@perfumery.example" />
          </div>

          <div style={{ marginTop: '10px' }}>
            <label htmlFor="correction_details">{isAr ? 'تفاصيل التصحيح والدليل المرجعي *' : 'Correction Details & Evidence Reference *'}</label>
            <textarea id="correction_details" name="correction_details" required placeholder="Describe the factual inaccuracy and cite primary botanical, CITES, or commercial sources..." />
          </div>

          <button type="submit" className="btn-primary" style={{ marginTop: '16px', width: '100%' }}>
            {isAr ? 'إرسال الملاحظة للتدقيق ←' : 'Submit for Editorial Review →'}
          </button>
        </form>
      </div>
    </div>
  );
}

import { buildMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import { FileEdit, CheckCircle2 } from 'lucide-react';

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
    <div className="section">
      <div className="container" style={{ maxWidth: 760 }}>
        <section className="masthead">
          <div className="masthead-inner">
            <div className="hero-tag">
              <FileEdit size={13} />
              <span>{isAr ? 'تصحيحات' : 'Corrections'}</span>
            </div>
            <h1>
              {isAr ? 'تقديم طلب تصحيح أو تدقيق علمي' : 'Submit an Editorial or Directory Correction'}
              <span className="accent">{isAr ? 'سجل تصحيحات شفاف.' : 'A transparent correction register.'}</span>
            </h1>
            <p className="hero-lead">
              {isAr
                ? 'نرحب بملاحظات الخبراء والموردين والباحثين لتصحيح أو تحديث أي معلومات نباتية أو جغرافية أو تجارية.'
                : 'OudGuide maintains a transparent public correction register. If you notice inaccurate botanical terminology, outdated supplier details, or invalid links, submit a correction below.'}
            </p>
          </div>
        </section>

        {submitted && (
          <div className="privacy-shield" style={{ marginTop: 32, borderLeftColor: 'var(--color-emerald)', background: 'linear-gradient(135deg, #f0faf5, #e3f2ea)' }}>
            <CheckCircle2 size={28} className="privacy-shield-icon" style={{ color: 'var(--color-emerald)' }} />
            <div className="privacy-shield-body">
              <h4 style={{ color: 'var(--color-emerald)' }}>
                {isAr ? 'تم استلام طلب التصحيح بنجاح!' : 'Correction Submission Received!'}
              </h4>
              <p>
                {isAr
                  ? 'شكراً لتعاونك. سيتم مراجعة الملاحظة وتوثيق التحديث في السجل التحريري.'
                  : 'Thank you. Our editorial team will review the claim evidence and update the live register.'}
              </p>
            </div>
          </div>
        )}

        <article className="card-frame" style={{ marginTop: 40, padding: 36, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
          <span className="eyebrow eyebrow-crimson" style={{ display: 'block', marginBottom: 8 }}>{isAr ? 'النموذج' : 'Review Form'}</span>
          <h2 className="h3 text-crimson" style={{ marginBottom: 24 }}>{isAr ? 'نموذج التدقيق التحريري' : 'Editorial Review Form'}</h2>
          <form method="POST" action="/api/v1/corrections/form">
            <input type="hidden" name="locale" value={locale} />

            <div className="form-field">
              <label className="form-label" htmlFor="target_url">{isAr ? 'رابط الصفحة المعنية *' : 'Page URL or Route Path *'}</label>
              <input type="text" id="target_url" name="target_url" required placeholder="e.g. /en/guides/what-is-agarwood or business slug" className="form-input" />
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="submitter_email">{isAr ? 'بريدك الإلكتروني للتواصل *' : 'Your Email Address *'}</label>
              <input type="email" id="submitter_email" name="submitter_email" required placeholder="expert@perfumery.example" className="form-input" />
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="correction_details">{isAr ? 'تفاصيل التصحيح والدليل المرجعي *' : 'Correction Details & Evidence Reference *'}</label>
              <textarea id="correction_details" name="correction_details" required placeholder="Describe the factual inaccuracy and cite primary botanical, CITES, or commercial sources..." className="form-textarea" />
            </div>

            <button type="submit" className="btn btn-gold" style={{ width: '100%', marginTop: 8 }}>
              {isAr ? 'إرسال الملاحظة للتدقيق ←' : 'Submit for Editorial Review →'}
            </button>
          </form>
        </article>
      </div>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';
  return buildMetadata({
    path: `/${locale}/corrections`,
    title: isAr ? "تقديم طلب تصحيح أو تدقيق تحريري" : "Submit a Correction or Editorial Review",
    description: isAr ? "أبلغ عن معلومات نباتية أو جغرافية أو تجارية غير دقيقة في سجل دليل العود. تُراجع كل تصحيح ويُحدَّث السجل العلني بعد التحقق." : "Report inaccurate botanical, geographic or commercial information in the OudGuide register. Every correction is reviewed and the public record is updated on verification.",
    locale,
    alternateLocalePath: `/${locale === 'ar' ? 'en' : 'ar'}/corrections`,
  });
}


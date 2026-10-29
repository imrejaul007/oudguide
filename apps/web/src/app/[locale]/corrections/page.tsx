import { FileEdit, CheckCircle2 } from 'lucide-react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { pick } from '@/lib/copy/policy';
import { editorialCopy } from '@/lib/copy/policy';

/**
 * The corrections register.
 *
 * QA-039 requires the correction workflow to stay free and open. It is,
 * and it is the route by which a reader reports an inaccurate claim.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';

  return buildMetadata({
    path: `/${locale}/corrections`,
    title: isAr ? 'تقديم تصحيح أو ملاحظة تحريرية' : 'Submit a Correction or Editorial Note',
    description: isAr
      ? 'أبلغ عن معلومات غير دقيقة في سجل دليل العود. كل ملاحظة تُراجع، ويذكر في السجل ما تغيّر وما لم يتغيّر.'
      : 'Report inaccurate information in the OudGuide register. Every note is reviewed, and the register records what changed and what did not.',
    locale,
    alternateLocalePath: `/${locale === 'ar' ? 'en' : 'ar'}/corrections`,
  });
}

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
              {isAr ? 'تقديم تصحيح أو ملاحظة تحريرية' : 'Submit a correction or an editorial note'}
              <span className="accent">{isAr ? 'سجل تصحيحات شفاف.' : 'A transparent correction register.'}</span>
            </h1>
            <p className="hero-lead">
              {isAr
                ? 'نرحب بأي ملاحظة على معلومات نباتية أو جغرافية أو تجارية. كل ملاحظة تُراجع قبل نشرها، ويُذكر في سجل المراجعة ما تغيّر وما لم يتغيّر.'
                : 'We welcome any note on botanical, geographic or commercial information. Every note is reviewed before it is published, and the review record states what changed and what did not.'}
            </p>
          </div>
        </section>

        {submitted && (
          <div
            className="privacy-shield"
            style={{
              marginTop: 32,
              borderLeftColor: 'var(--color-emerald)',
              background: 'linear-gradient(135deg, var(--green-50), var(--green-100))',
            }}
          >
            <CheckCircle2 size={28} className="privacy-shield-icon" style={{ color: 'var(--color-emerald)' }} />
            <div className="privacy-shield-body">
              <h4 style={{ color: 'var(--color-emerald)' }}>
                {isAr ? 'تم استلام الملاحظة' : 'Your note has been received'}
              </h4>
              <p>
                {isAr
                  ? 'سجّلنا ملاحظتك وستُراجع قبل أي تحديث للسجل العلني.'
                  : 'Your note is recorded and will be reviewed before the public register is updated.'}
              </p>
            </div>
          </div>
        )}

        {/* WHAT THE REGISTER PROMISES */}
        <div
          style={{
            marginTop: 28,
            padding: '22px 26px',
            border: '1px solid var(--line)',
            borderRadius: 6,
            background: 'var(--bg-pearl)',
          }}
        >
          <span className="eyebrow" style={{ display: 'block', marginBottom: 8 }}>
            {isAr ? 'ما الذي يحدث بعد الإرسال' : 'What happens to your note'}
          </span>
          <p className="text-body" style={{ margin: 0 }}>
            {pick(editorialCopy.noUnsupportedAssurances, locale)}
          </p>
        </div>

        <article
          className="card-frame"
          style={{
            marginTop: 32,
            padding: 34,
            maxWidth: 640,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <span className="eyebrow eyebrow-crimson" style={{ display: 'block', marginBottom: 8 }}>
            {isAr ? 'النموذج' : 'The form'}
          </span>
          <h2 className="h3" style={{ marginBottom: 24 }}>
            {isAr ? 'نموذج الملاحظة التحريرية' : 'Editorial note form'}
          </h2>
          <form method="POST" action="/api/v1/corrections/form">
            <input type="hidden" name="locale" value={locale} />

            <div className="form-field">
              <label className="form-label" htmlFor="target_url">
                {isAr ? 'رابط الصفحة المعنية *' : 'The page in question *'}
              </label>
              <input
                type="text"
                id="target_url"
                name="target_url"
                required
                placeholder="/en/guides/oud-basics/what-is-agarwood"
                className="form-input"
              />
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="submitter_email">
                {isAr ? 'بريدك الإلكتروني للتواصل *' : 'Your email address, so we can reply *'}
              </label>
              <input
                type="email"
                id="submitter_email"
                name="submitter_email"
                required
                placeholder="you@yourcompany.com"
                className="form-input"
              />
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="correction_details">
                {isAr ? 'ما الذي يجب تصحيحه، وبأي دليل *' : 'What should change, and what evidence supports it *'}
              </label>
              <textarea
                id="correction_details"
                name="correction_details"
                required
                placeholder={isAr
                  ? 'اذكر الادعاء المحدد، ثم المصدر الذي يصححه.'
                  : 'Name the specific claim, then the source that corrects it.'}
                className="form-textarea"
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: 8 }}>
              {isAr ? 'إرسال الملاحظة ←' : 'Submit for review →'}
            </button>
          </form>
        </article>
      </div>
    </div>
  );
}

import { Scale } from 'lucide-react';
import type { PolicyPage } from '@/lib/copy/policy-pages';
import { directoryCounts } from '@/lib/data';
import { REVIEWER_REGISTER } from '@/lib/reviewer-register';

/**
 * The renderer for the eleven public policy pages.
 *
 * The pages differ in their wording, not in their shape: a masthead, a
 * standfirst, and a series of sections each with a heading and one or
 * more paragraphs. The wording lives in `lib/copy/policy-pages.ts` so
 * that the eleven pages cannot drift apart and so that the Arabic is
 * reviewed in one file rather than in eleven.
 *
 * Every page states what the site actually does. Where a decision has
 * not been approved — the operating entity, the retention periods, the
 * tax treatment, the renewal terms, the price of a supplier
 * introduction — the page names the constraint instead of publishing a
 * policy that does not exist.
 */
export function PolicyPageView({
  page,
  locale,
}: {
  page: PolicyPage;
  locale: string;
}) {
  const isAr = locale === 'ar';

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 920 }}>
        <section className="masthead">
          <div className="masthead-inner">
            <div className="hero-tag">
              <Scale size={13} />
              <span>{isAr ? 'سياسة' : 'Policy'}</span>
            </div>
            <h1>
              {isAr ? page.title.ar : page.title.en}
              <span className="accent">
                {isAr ? page.standfirst.ar : page.standfirst.en}
              </span>
            </h1>
            <p className="hero-lead">
              {isAr
                ? 'هذه الصفحة تصف ما يفعله الموقع فعلاً. وأي بند لم يُعتمد بعد يُذكر هنا كقيد مفتوح لا كسياسة مُطبَّقة.'
                : 'This page describes what the site actually does. Any term that has not yet been approved appears here as an open constraint rather than as a policy in force.'}
            </p>
          </div>
        </section>

        {/*
          The live counts, where the page quotes them.

          Read from the register at render time rather than written into
          the copy: the directory's published-record count changes the
          moment a second supplier is documented, and a policy page that
          still said "one record" would be making a claim the site had
          already outgrown.
        */}
        {page.statesDirectoryCounts && (
          <div className="metrics" style={{ marginTop: 28 }}>
            <div className="metric">
              <div className="metric-value">{directoryCounts.published}</div>
              <div className="metric-label">
                {isAr
                  ? 'سجلاً منشوراً في الدليل'
                  : directoryCounts.published === 1
                    ? 'Published directory record'
                    : 'Published directory records'}
              </div>
            </div>
            <div className="metric">
              <div className="metric-value">{directoryCounts.inResearchReview}</div>
              <div className="metric-label">
                {isAr ? 'قيد المراجعة' : 'In research review'}
              </div>
            </div>
          </div>
        )}

        {/*
          The editorial register, when it carries a record.

          This is the only surface where a named reviewer or operator may
          appear: the schema's Person author and every guide's review-record
          line resolve through this same register, so a claim in the schema
          is visible here. While the register is empty (today) this block
          renders nothing and the "not yet named" copy in the sections is
          the whole of what the page says about who is behind the reviews.
        */}
        {(REVIEWER_REGISTER.named || REVIEWER_REGISTER.operator) && (
          <div className="card-frame" style={{ marginTop: 40, padding: 24 }}>
            <span className="eyebrow" style={{ display: 'block', marginBottom: 8 }}>
              {isAr ? 'السجل التحريري' : 'The editorial register'}
            </span>
            {REVIEWER_REGISTER.named && (
              <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', marginBottom: 12 }}>
                {REVIEWER_REGISTER.named.photoUrl && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={REVIEWER_REGISTER.named.photoUrl}
                    alt={REVIEWER_REGISTER.named.name}
                    width={56}
                    height={56}
                    style={{ borderRadius: '50%', flexShrink: 0 }}
                  />
                )}
                <div>
                  <p className="text-body" style={{ margin: 0, fontWeight: 600 }}>
                    {REVIEWER_REGISTER.named.name}
                    <span className="meta"> · {REVIEWER_REGISTER.named.role}</span>
                  </p>
                  <span className="meta">
                    {isAr ? 'أُكِّد السجل' : 'Record confirmed'}:{' '}
                    {REVIEWER_REGISTER.named.confirmedOn}
                  </span>
                </div>
              </div>
            )}
            {REVIEWER_REGISTER.operator && (
              <p className="text-body" style={{ margin: 0 }}>
                {isAr
                  ? `الكيان التشغيلي: ${REVIEWER_REGISTER.operator.entityName}`
                  : `Operating entity: ${REVIEWER_REGISTER.operator.entityName}`}
                {REVIEWER_REGISTER.operator.note && (
                  <span className="meta">
                    {' '}
                    {isAr ? ` — ${REVIEWER_REGISTER.operator.note}` : ` — ${REVIEWER_REGISTER.operator.note}`}
                  </span>
                )}
              </p>
            )}
          </div>
        )}

        <div style={{ marginTop: 40 }}>
          {page.sections.map((section) => (
            <div key={section.heading.en} className="policy-section-card">
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 500, color: 'var(--green-950)', marginBottom: 12 }}>
                {isAr ? section.heading.ar : section.heading.en}
              </h2>
              {section.body.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-body"
                  style={{
                    color: 'var(--ink)',
                    fontSize: '0.94rem',
                    lineHeight: 1.7,
                    margin: index === section.body.length - 1 ? 0 : '0 0 12px',
                  }}
                >
                  {isAr ? paragraph.ar : paragraph.en}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/*
          What the page rests on.

          The manifest's gate for a public policy route requires sources
          and a reviewed date. Naming the site's own registers is honest:
          these are the internal records the statements are derived from,
          not a bibliography of outside literature.
        */}
        <div className="card-frame" style={{ marginTop: 40, padding: 24 }}>
          <span className="eyebrow" style={{ display: 'block', marginBottom: 8 }}>
            {isAr ? 'ما تقوم عليه هذه الصفحة' : 'What this page rests on'}
          </span>
          <p className="text-body" style={{ margin: '0 0 8px' }}>
            {isAr ? page.basis.ar : page.basis.en}
          </p>
          <span className="meta">
            {isAr ? 'تاريخ آخر مراجعة' : 'Last reviewed'}: {page.reviewedOn}
          </span>
        </div>
      </div>
    </div>
  );
}

import { Scale } from 'lucide-react';
import type { PolicyPage } from '@/lib/copy/policy-pages';
import { directoryCounts } from '@/lib/data';

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

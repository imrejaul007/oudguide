import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  getArticle,
  getBrief,
  articleBreadcrumbs,
  articleDirectAnswer,
  articleH1,
  articleLimitations,
  articleReviewer,
  articleReviewMethod,
  articleSummary,
  articleTitle,
  hubChildren,
  isIndexable,
  isIndexableInLocale,
  manifestRouteFor,
  resolvedRelated,
} from '@/lib/articles';
import { buildMetadata } from '@/lib/metadata';
import { editorialCopy } from '@/lib/copy/policy';
import { pick } from '@/lib/copy/policy';
import { resolveSources } from '@/data/articles/sources';
import { ArrowRight, FileText, ShieldCheck, ExternalLink } from 'lucide-react';

/**
 * The guide renderer.
 *
 * OG-A01 found that unrelated guides shared one fallback body: the same
 * sections on botanical resin formation, copper versus steam distillation,
 * laboratory testing and trade documentation, behind different titles.
 * The manifest's 772 route candidates were all being rendered by the
 * same template.
 *
 * The fix separates two different kinds of page:
 *
 *   - A reviewed article, which has its own body, its own sources, its
 *     own stated limitations and its own reviewer. It is indexable.
 *   - A research brief, which is a manifest candidate that has not been
 *     written yet. It states the question, the intended scope and the
 *     evidence still to be collected. It is labelled as a brief, it is
 *     `noindex`, and it is not in the sitemap.
 *
 * A brief never borrows another page's prose to fill the space, and a
 * review badge never appears on a page that has not been reviewed.
 */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string[] }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const fullSlug = slug.join('/');

  const article = getArticle(fullSlug);

  if (article) {
    return buildMetadata({
      path: `/${locale}/guides/${fullSlug}`,
      title: articleTitle(article, locale),
      description: articleSummary(article, locale),
      locale,
      type: 'article',
      alternateLocalePath: `/${locale === 'ar' ? 'en' : 'ar'}/guides/${fullSlug}`,
      noindex: !isIndexableInLocale(article, locale),
    });
  }

  const brief = getBrief(fullSlug);

  if (brief) {
    const record = brief.record;
    const title = String(record.h1_brief || record.title_brief || '').trim();

    // A brief is not indexable. It is reachable by direct URL so that an
    // editor and a reviewer can see it, and so that an inbound link does
    // not 404 — but it is not offered to a search engine as an answer.
    return buildMetadata({
      path: `/${locale}/guides/${fullSlug}`,
      title: `${title} — research brief`,
      description: `A research brief for ${title}: what this page will cover and the evidence still to be collected. Not yet a finished article.`,
      locale,
      type: 'article',
      noindex: true,
    });
  }

  return { title: 'Guide not found · OudGuide' };
}

export default async function GuideArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string[] }>;
}) {
  const { locale, slug } = await params;
  const isAr = locale === 'ar';
  const fullSlug = slug.join('/');

  const article = getArticle(fullSlug);

  if (article) {
    return <ReviewedArticle article={article} locale={locale} isAr={isAr} />;
  }

  const brief = getBrief(fullSlug);

  if (brief) {
    return <ResearchBrief brief={brief} locale={locale} isAr={isAr} />;
  }

  notFound();
}

/* ==========================================================================
   A reviewed article
   ========================================================================== */

function ReviewedArticle({
  article,
  locale,
  isAr,
}: {
  article: NonNullable<ReturnType<typeof getArticle>>;
  locale: string;
  isAr: boolean;
}) {
  const sources = resolveSources(article.sourceIds);
  const breadcrumbs = articleBreadcrumbs(article, locale);
  const related = resolvedRelated(article, locale);
  const children = hubChildren(article, locale);
  const isHub = article.kind === 'hub';

  return (
    <article className="container container-narrow" style={{ paddingTop: 40, paddingBottom: 60 }}>
      {/* BREADCRUMB — parent hubs, then the article */}
      <nav
        className="meta"
        style={{ marginBottom: 32, textTransform: 'none', letterSpacing: '0.02em' }}
        aria-label={isAr ? 'مسار التنقل' : 'Breadcrumb'}
      >
        {breadcrumbs.map((crumb, index) => (
          <span key={crumb.href}>
            {index > 0 && (
              <span style={{ margin: '0 10px', color: 'var(--line-strong)' }} aria-hidden="true">
                /
              </span>
            )}
            {index === breadcrumbs.length - 1 ? (
              <span style={{ color: 'var(--green-700)' }}>{crumb.label}</span>
            ) : (
              <Link href={crumb.href} style={{ color: 'var(--ink-soft)' }}>
                {crumb.label}
              </Link>
            )}
          </span>
        ))}
      </nav>

      <header style={{ marginBottom: 36 }}>
        <div className="cluster" style={{ gap: 8, marginBottom: 18 }}>
          {isHub ? (
            <span className="badge badge-emerald">
              {isAr ? 'فهرس قسم' : 'Section index'}
            </span>
          ) : (
            <span className="badge badge-emerald">
              {isAr ? 'مقال مُراجَع' : 'Reviewed article'}
            </span>
          )}
          <span className="badge badge-locked">
            {isAr ? `مراجعة ${article.reviewedOn}` : `Reviewed ${article.reviewedOn}`}
          </span>
        </div>

        <h1 style={{ marginBottom: 18, maxWidth: '22ch' }}>{articleH1(article, locale)}</h1>
        <p className="lede">{articleDirectAnswer(article, locale)}</p>
      </header>

      {/* THE ANSWER — the paragraph that exists to answer the question */}
      <div
        style={{
          background: 'var(--bg-eggshell)',
          border: '1px solid var(--line)',
          borderInlineStart: '2px solid var(--green-600)',
          borderRadius: 6,
          padding: '24px 28px',
          marginBottom: 44,
        }}
      >
        <h3 style={{ marginBottom: 10 }}>
          {isAr ? 'الجواب المباشر' : 'The direct answer'}
        </h3>
        <p className="text-body" style={{ margin: 0 }}>
          {articleDirectAnswer(article, locale)}
        </p>
      </div>

      {/* HUB CONTENTS — a hub lists the articles beneath it */}
      {isHub && children.length > 0 && (
        <section style={{ marginBottom: 44 }}>
          <span className="eyebrow" style={{ marginBottom: 14, display: 'block' }}>
            {isAr ? 'في هذا القسم' : 'In this section'}
          </span>
          <div className="grid-2">
            {children.map((child) => (
              <Link
                key={child.slug}
                href={child.href}
                className="card"
                style={{ padding: 22, textDecoration: 'none' }}
              >
                <h3 style={{ fontSize: '1.1rem', marginBottom: 8 }}>{child.label}</h3>
                <p className="text-body" style={{ margin: 0, fontSize: '0.94rem' }}>
                  {child.blurb}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* BODY */}
      <div className="text-body" style={{ fontSize: '1rem' }}>
        {article.sections.map((section, index) => (
          <section key={index}>
            <h2 style={{ marginTop: index === 0 ? 0 : 44, marginBottom: 14 }}>
              {isAr && section.headingAr ? section.headingAr : section.heading}
            </h2>

            {(isAr && section.bodyAr ? section.bodyAr : section.body ?? []).map((paragraph, pIndex) => (
              <p key={pIndex}>{paragraph}</p>
            ))}

            {section.list?.length ? (
              <ul style={{ paddingInlineStart: '22px', margin: '16px 0' }}>
                {(isAr && section.listAr ? section.listAr : section.list).map((item, itemIndex) => (
                  <li key={itemIndex} style={{ marginBottom: '10px' }}>
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}

            {section.callout && (
              <div
                style={{
                  border: '1px solid var(--line)',
                  borderInlineStart: '2px solid var(--green-600)',
                  borderRadius: 6,
                  padding: '18px 22px',
                  margin: '24px 0',
                  background: 'var(--bg-eggshell)',
                }}
              >
                <h3 style={{ fontSize: '1.05rem', marginBottom: 8 }}>
                  {isAr && section.callout.titleAr
                    ? section.callout.titleAr
                    : section.callout.title}
                </h3>
                <p style={{ margin: 0 }}>
                  {isAr && section.callout.bodyAr ? section.callout.bodyAr : section.callout.body}
                </p>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* WORKED EXAMPLE — the manifest's required section for a guide */}
      {article.workedExample && (
        <section style={{ marginTop: 44 }}>
          <span className="eyebrow" style={{ display: 'block', marginBottom: 12 }}>
            {isAr ? 'مثال تطبيقي' : 'A worked example'}
          </span>
          <div
            style={{
              border: '1px solid var(--line)',
              borderRadius: 6,
              padding: '24px 28px',
              background: 'var(--bg-pearl)',
            }}
          >
            <p style={{ marginTop: 0, fontWeight: 600 }}>
              {isAr && article.workedExample.situationAr
                ? article.workedExample.situationAr
                : article.workedExample.situation}
            </p>
            <ol style={{ paddingInlineStart: '20px', margin: '16px 0', lineHeight: 1.7 }}>
              {(isAr && article.workedExample.stepsAr
                ? article.workedExample.stepsAr
                : article.workedExample.steps
              ).map((step, index) => (
                <li key={index} style={{ marginBottom: '8px' }}>
                  {step}
                </li>
              ))}
            </ol>
            <p style={{ marginBottom: 0 }}>
              {isAr && article.workedExample.takeawayAr
                ? article.workedExample.takeawayAr
                : article.workedExample.takeaway}
            </p>
          </div>
        </section>
      )}

      {/* LIMITATIONS — what this page does not establish */}
      <section
        style={{
          marginTop: 44,
          padding: '22px 26px',
          border: '1px solid var(--line)',
          borderRadius: 6,
          background: 'var(--bg-pearl)',
        }}
      >
        <span className="eyebrow" style={{ display: 'block', marginBottom: 8 }}>
          {isAr ? 'ما لا يثبته هذا المقال' : 'What this article does not establish'}
        </span>
        <p className="text-body" style={{ margin: 0 }}>
          {articleLimitations(article, locale)}
        </p>
      </section>

      {/* SOURCES — with the scope each one covers */}
      {sources.length > 0 && (
        <section style={{ marginTop: 40 }}>
          <span className="eyebrow" style={{ display: 'block', marginBottom: 12 }}>
            {isAr ? 'المصادر' : 'Sources'}
          </span>
          <ol style={{ paddingInlineStart: '20px', margin: 0 }}>
            {sources.map((source) => (
              <li key={source.id} style={{ marginBottom: '16px' }}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontWeight: 600, color: 'var(--green-700)' }}
                >
                  {isAr && source.labelAr ? source.labelAr : source.label}
                  <ExternalLink size={11} style={{ marginInlineStart: 6, verticalAlign: 'middle' }} />
                </a>
                <span className="meta" style={{ display: 'block', marginTop: 2, textTransform: 'none' }}>
                  {source.publisher}
                  {isAr && source.publisherAr ? ` · ${source.publisherAr}` : ''} ·{' '}
                  {isAr ? 'تاريخ الاطلاع' : 'retrieved'} {source.retrievedOn}
                </span>
                <span
                  className="text-body"
                  style={{ display: 'block', marginTop: 4, fontSize: '0.92rem', color: 'var(--ink-soft)' }}
                >
                  {isAr && source.scopeAr ? source.scopeAr : source.scope}
                </span>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* REVIEW RECORD — who reviewed it, and how */}
      <section
        style={{
          marginTop: 40,
          paddingTop: 20,
          borderTop: '1px solid var(--line)',
        }}
      >
        <div className="cluster" style={{ gap: 10, alignItems: 'flex-start' }}>
          <ShieldCheck size={18} style={{ color: 'var(--green-600)', flexShrink: 0, marginTop: 2 }} />
          <div>
            <span className="eyebrow" style={{ display: 'block', marginBottom: 4 }}>
              {isAr ? 'سجل المراجعة' : 'Review record'}
            </span>
            <p className="text-body" style={{ margin: 0, fontSize: '0.93rem' }}>
              <strong>{articleReviewer(article, locale)}</strong> · {article.reviewedOn}
              <br />
              {articleReviewMethod(article, locale)}
            </p>
          </div>
        </div>
      </section>

      {/* NEXT STEPS */}
      {article.nextSteps?.length ? (
        <section style={{ marginTop: 32 }}>
          <span className="eyebrow" style={{ display: 'block', marginBottom: 12 }}>
            {isAr ? 'الخطوة التالية' : 'Next steps'}
          </span>
          <ul style={{ paddingInlineStart: '20px', margin: 0 }}>
            {(isAr && article.nextStepsAr ? article.nextStepsAr : article.nextSteps).map(
              (step, index) => (
                <li key={index} style={{ marginBottom: '8px' }}>
                  {step}
                </li>
              )
            )}
          </ul>
        </section>
      ) : null}

      {/* RELATED — resolved against the content layer, so no broken targets */}
      {related.length > 0 && (
        <section style={{ marginTop: 48 }}>
          <div className="rule" style={{ marginBottom: 24 }} />
          <span className="eyebrow" style={{ marginBottom: 14, display: 'block' }}>
            {isAr ? 'اقرأ أيضاً' : 'Related reading'}
          </span>
          <div className="grid-2">
            {related.map((link) => (
              <Link
                key={link.slug}
                href={link.href}
                style={{ padding: '12px 0', borderBottom: '1px solid var(--line)', textDecoration: 'none' }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.05rem',
                    fontWeight: 500,
                    color: 'var(--ink)',
                    display: 'block',
                    marginBottom: 3,
                  }}
                >
                  {link.label}
                </span>
                <span className="meta" style={{ textTransform: 'none', letterSpacing: '0.02em' }}>
                  {link.summary}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* WHOLESALE CTA */}
      <section
        className="section-green grain"
        style={{
          marginTop: 56,
          marginInline: 'calc(var(--gutter) * -1)',
          padding: 'clamp(40px, 5vw, 64px) var(--gutter)',
          borderRadius: 0,
        }}
      >
        <div
          style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 640, margin: '0 auto' }}
        >
          <h2 style={{ color: '#ffffff', marginBottom: 14, fontSize: '1.8rem' }}>
            {isAr ? 'هل تحتاج كميات تجارية أو عينات معتمدة؟' : 'Need commercial volume or bulk samples?'}
          </h2>
          <p
            style={{
              color: 'rgba(232,239,233,0.72)',
              fontSize: '0.95rem',
              lineHeight: 1.68,
              margin: '0 auto 24px',
            }}
          >
            {isAr
              ? 'يقدّم دليل العود خدمة الربط التجاري المحايدة. يعرض الموجز المشفَّر على الموردين المؤهلين دون بيانات المشتري، ولا تُسلَّم بيانات الاتصال إلا للمورد الذي تعتمده بالاسم.'
              : 'OudGuide provides a neutral matching service. A redacted brief reaches qualified suppliers without your identity, and your contact details are released only to a supplier you approve by name.'}
          </p>
          <Link href={`/${locale}/rfq`} className="btn btn-gold btn-lg">
            {isAr ? 'تقديم متطلبات التوريد بالجملة' : 'Submit a wholesale requirement'}
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </article>
  );
}

/* ==========================================================================
   A research brief
   ========================================================================== */

function ResearchBrief({
  brief,
  locale,
  isAr,
}: {
  brief: NonNullable<ReturnType<typeof getBrief>>;
  locale: string;
  isAr: boolean;
}) {
  const record = brief.record;
  const title = String(record.h1_brief || record.title_brief || '').trim();
  const intent = String(record.primary_intent || '').trim();
  const requiredSections = String(record.required_sections || '')
    .split(';')
    .map((s) => s.trim())
    .filter(Boolean);
  const evidence = String(record.evidence_to_collect || '').trim();

  // A brief points at the published pages that do cover adjacent ground,
  // so a reader is not left at a dead end.
  const neighbours = neighboursFor(brief.slug, locale);

  return (
    <article className="container container-narrow" style={{ paddingTop: 40, paddingBottom: 60 }}>
      <nav
        className="meta"
        style={{ marginBottom: 32, textTransform: 'none', letterSpacing: '0.02em' }}
        aria-label={isAr ? 'مسار التنقل' : 'Breadcrumb'}
      >
        <Link href={`/${locale}`} style={{ color: 'var(--ink-soft)' }}>
          {isAr ? 'الرئيسية' : 'Home'}
        </Link>
        <span style={{ margin: '0 10px', color: 'var(--line-strong)' }} aria-hidden="true">
          /
        </span>
        <Link href={`/${locale}/guides`} style={{ color: 'var(--ink-soft)' }}>
          {isAr ? 'الموسوعة' : 'Encyclopedia'}
        </Link>
        <span style={{ margin: '0 10px', color: 'var(--line-strong)' }} aria-hidden="true">
          /
        </span>
        <span style={{ color: 'var(--green-700)' }}>{title}</span>
      </nav>

      <header style={{ marginBottom: 32 }}>
        <div className="cluster" style={{ gap: 8, marginBottom: 18 }}>
          <span className="badge badge-locked">
            <FileText size={12} />
            {isAr ? 'موجز بحثي — غير مكتمل' : 'Research brief — not a finished article'}
          </span>
        </div>

        <h1 style={{ marginBottom: 18, maxWidth: '22ch' }}>{title}</h1>
        <p className="lede">{intent}</p>
      </header>

      <div
        style={{
          background: 'var(--bg-eggshell)',
          border: '1px solid var(--line)',
          borderInlineStart: '2px solid var(--green-600)',
          borderRadius: 6,
          padding: '24px 28px',
          marginBottom: 40,
        }}
      >
        <h3 style={{ marginBottom: 10 }}>{isAr ? 'حالة هذه الصفحة' : 'The status of this page'}</h3>
        <p className="text-body" style={{ margin: 0 }}>
          {pick(editorialCopy.draftNotPublished, locale)}
        </p>
      </div>

      <div className="text-body" style={{ fontSize: '1rem' }}>
        <h2 style={{ marginBottom: 14 }}>
          {isAr ? 'ما الذي ستغطيه هذه الصفحة' : 'What this page will cover'}
        </h2>
        {requiredSections.length > 0 ? (
          <ul style={{ paddingInlineStart: '22px', margin: '16px 0' }}>
            {requiredSections.map((section, index) => (
              <li key={index} style={{ marginBottom: '8px' }}>
                {section}
              </li>
            ))}
          </ul>
        ) : (
          <p>
            {isAr
              ? 'النطاق التفصيلي لم يُحدد بعد.'
              : 'The detailed scope has not been finalised.'}
          </p>
        )}

        <h2 style={{ marginTop: 40, marginBottom: 14 }}>
          {isAr ? 'الأدلة التي يجب جمعها' : 'The evidence still to be collected'}
        </h2>
        <p>{evidence || (isAr ? 'لم يُحدد بعد.' : 'Not yet determined.')}</p>
      </div>

      {neighbours.length > 0 && (
        <section style={{ marginTop: 44 }}>
          <span className="eyebrow" style={{ display: 'block', marginBottom: 12 }}>
            {isAr ? 'صفحات منشورة تغطي موضوعاً مجاوراً' : 'Published pages covering adjacent ground'}
          </span>
          <div className="grid-2">
            {neighbours.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ padding: '12px 0', borderBottom: '1px solid var(--line)', textDecoration: 'none' }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.05rem',
                    fontWeight: 500,
                    color: 'var(--ink)',
                    display: 'block',
                    marginBottom: 3,
                  }}
                >
                  {link.label}
                </span>
                <span className="meta" style={{ textTransform: 'none', letterSpacing: '0.02em' }}>
                  {link.summary}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section style={{ marginTop: 44 }}>
        <div
          style={{
            padding: '20px 24px',
            border: '1px solid var(--line)',
            borderRadius: 6,
            background: 'var(--bg-pearl)',
          }}
        >
          <span className="eyebrow" style={{ display: 'block', marginBottom: 8 }}>
            {isAr ? 'هل لديك ما يسهم به؟' : 'Have something to contribute?'}
          </span>
          <p className="text-body" style={{ margin: '0 0 12px' }}>
            {isAr
              ? 'إذا كانت لديك مصادر أو تصحيح لهذه الصفحة، نرحّب به عبر سجل التصحيحات.'
              : 'If you have a source or a correction for this page, the corrections register takes it.'}
          </p>
          <Link href={`/${locale}/corrections`} className="btn btn-outline btn-sm">
            {isAr ? 'سجل التصحيحات' : 'Corrections register'}
          </Link>
        </div>
      </section>
    </article>
  );
}

/**
 * The published pages a brief should point a reader towards.
 *
 * A brief is a dead end unless it offers somewhere to go. These are
 * resolved against the content layer, so they are real pages.
 */
function neighboursFor(slug: string, locale: string): Array<{
  slug: string;
  label: string;
  href: string;
  summary: string;
}> {
  const article = getArticle(slug);
  if (article) return [];

  const record = manifestRouteFor(slug);
  if (!record) return [];

  // The parent hub is the natural place a reader should go.
  const parentPath = String(record.parent_route || '').replace(/^\/(en|ar)/, '');
  const parentSlug = parentPath.replace(/^\/guides\//, '').replace(/^\//, '').replace(/\/$/, '');

  const parent = parentSlug ? getArticle(parentSlug) : null;
  if (!parent) return [];

  const children = hubChildren(parent, locale).slice(0, 4);
  if (children.length === 0) return [];

  return children.map((child) => {
    const target = getArticle(child.slug);
    return {
      slug: child.slug,
      label: child.label,
      href: child.href,
      summary: target ? articleSummary(target, locale) : child.blurb,
    };
  });
}

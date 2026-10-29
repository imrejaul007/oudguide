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
import { jsonLdScript } from '@/lib/jsonld';
import { SITE_URL } from '@/lib/metadata';
import { editorialCopy } from '@/lib/copy/policy';
import { pick } from '@/lib/copy/policy';
import { resolveSources } from '@/data/articles/sources';
import {
  lineageFor,
  newestCompiledOn,
  oldestCompiledOn,
} from '@/data/datasets/price-snapshot-lineage';
import { ArrowRight, FileText, ShieldCheck, ExternalLink, BookOpenCheck, CheckCircle2, Clock } from 'lucide-react';

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
  /* Origin pages list the region pages the register documents for the
     country. A hub lists every article beneath it, so the two share the
     card grid but the hub carries the section-wide label. */
  const showsChildren = (isHub || article.kind === 'origin') && children.length > 0;
  // The standing Q&As, in the page's own language. The same array the
  // ArticleJsonLd above mirrors as a FAQPage, so the visible block and the
  // schema cannot diverge.
  const faqItems = (isAr && article.faqAr ? article.faqAr : article.faq) ?? [];

  return (
    <article className="container container-narrow" style={{ paddingTop: 40, paddingBottom: 60 }}>
      {/* STRUCTURED DATA — built from the same record the page renders from */}
      <ArticleJsonLd article={article} locale={locale} />

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

      <div className="editorial-hero-card">
        <div className="cluster" style={{ gap: 8, marginBottom: 16 }}>
          {isHub ? (
            <span className="badge badge-emerald">
              <BookOpenCheck size={11} />
              {isAr ? 'فهرس قسم رئيسي' : 'Curated Section Hub'}
            </span>
          ) : (
            <span className="badge badge-emerald">
              <CheckCircle2 size={11} />
              {isAr ? 'مقال تحريري مُراجَع' : 'Reviewed Editorial Guide'}
            </span>
          )}
          <span className="badge badge-locked">
            <Clock size={11} />
            {isAr ? `آخر تدقيق ${article.reviewedOn}` : `Audited ${article.reviewedOn}`}
          </span>
        </div>

        <h1 style={{ marginBottom: 14, color: 'var(--ink)' }}>{articleH1(article, locale)}</h1>
        <p className="lede" style={{ margin: 0 }}>{articleSummary(article, locale)}</p>
      </div>

      {/* THE DIRECT ANSWER — clear authoritative summary */}
      <div className="direct-answer-box">
        <h3>
          <CheckCircle2 size={17} style={{ color: 'var(--green-700)' }} />
          <span>{isAr ? 'الجواب المباشر والملخص التنفيذي' : 'Direct Answer & Executive Summary'}</span>
        </h3>
        <p>{articleDirectAnswer(article, locale)}</p>
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

      {/* A country page lists the region pages documented for that country */}
      {!isHub && showsChildren && (
        <section style={{ marginBottom: 44 }}>
          <span className="eyebrow" style={{ marginBottom: 14, display: 'block' }}>
            {isAr ? 'المناطق الموثَّقة في هذه الدولة' : 'Documented regions in this country'}
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

            {section.image && (
              <figure style={{ margin: '28px 0', border: '1px solid var(--line)', borderRadius: 8, overflow: 'hidden', background: 'var(--bg)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={section.image.src}
                  alt={isAr && section.image.altAr ? section.image.altAr : section.image.alt}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
                {(section.image.caption || (isAr && section.image.captionAr)) && (
                  <figcaption style={{ padding: '10px 14px', fontSize: '0.84rem', color: 'var(--ink-muted)', background: 'var(--bg-eggshell)', borderTop: '1px solid var(--line)' }}>
                    {isAr && section.image.captionAr ? section.image.captionAr : section.image.caption}
                  </figcaption>
                )}
              </figure>
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

      {/* STANDING QUESTIONS — the guide's Q&As, visible and crawlable, and
          the same array the FAQPage schema above is built from. Rendered as
          plain headings and answers, not a client Accordion: a server page,
          and an answer engine needs the Q&A in crawlable HTML, not in
          collapsed content. A guide without standing Q&As carries none. */}
      {faqItems.length > 0 && (
        <section style={{ marginTop: 44 }}>
          <span className="eyebrow" style={{ display: 'block', marginBottom: 12 }}>
            {isAr ? 'أسئلة متكررة' : 'Frequently asked'}
          </span>
          <div style={{ display: 'grid', gap: 24 }}>
            {faqItems.map((item, index) => (
              <div key={index} style={{ borderBottom: '1px solid var(--line)', paddingBottom: 20 }}>
                <h4
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1rem',
                    fontWeight: 500,
                    margin: '0 0 8px',
                  }}
                >
                  {item.question}
                </h4>
                <p style={{ color: 'var(--ink-soft)', fontSize: '0.92rem', lineHeight: 1.65, margin: 0 }}>
                  {item.answer}
                </p>
              </div>
            ))}
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

      {/* SOURCES — Citation Grid */}
      {sources.length > 0 && (
        <section style={{ marginTop: 44 }}>
          <div className="row-between" style={{ marginBottom: 14 }}>
            <div>
              <span className="eyebrow" style={{ display: 'block', marginBottom: 4 }}>
                {isAr ? 'المصادر والوثائق المرجعية' : 'Cited Scientific & Trade Sources'}
              </span>
              <h3 style={{ margin: 0, fontSize: '1.2rem', fontFamily: 'var(--font-display)' }}>
                {isAr ? 'سجل المصادر المحكّمة' : 'Verification Bibliography'}
              </h3>
            </div>
            <span className="badge badge-locked">
              {sources.length} {isAr ? 'مصادر موثقة' : 'Verified Sources'}
            </span>
          </div>
          <div className="citation-grid">
            {sources.map((source) => (
              <div key={source.id} className="citation-card">
                <div>
                  <a href={source.url} target="_blank" rel="noopener noreferrer">
                    <span>{isAr && source.labelAr ? source.labelAr : source.label}</span>
                    <ExternalLink size={12} style={{ flexShrink: 0 }} />
                  </a>
                  <span className="meta" style={{ display: 'block', margin: '6px 0', textTransform: 'none', fontSize: '0.78rem' }}>
                    {source.publisher} · {isAr ? 'اطلاع' : 'Retrieved'} {source.retrievedOn}
                  </span>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--ink-muted)', lineHeight: 1.5 }}>
                    {isAr && source.scopeAr ? source.scopeAr : source.scope}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
              color: 'rgba(233,243,239,0.72)',
              fontSize: '0.95rem',
              lineHeight: 1.68,
              margin: '0 auto 24px',
            }}
          >
            {isAr
              ? 'يقدّم دليل العود خدمة الربط التجاري المحايدة. يعرض الموجز المشفَّر على الموردين المؤهلين دون بيانات المشتري، ولا تُسلَّم بيانات الاتصال إلا للمورد الذي تعتمده بالاسم.'
              : 'OudGuide provides a neutral matching service. A redacted brief reaches qualified suppliers without your identity, and your contact details are released only to a supplier you approve by name.'}
          </p>
          <Link href={`/${locale}/rfq`} className="btn btn-primary btn-lg">
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

/**
 * The JSON-LD script for a reviewed article.
 *
 * It is rendered inside the article so that the schema sits in the same
 * document as the content it describes, and so that it is built from
 * the same record the page renders from.
 */
function ArticleJsonLd({
  article,
  locale,
}: {
  article: NonNullable<ReturnType<typeof getArticle>>;
  locale: string;
}) {
  const path = `/${locale}/guides/${article.slug}`;
  const children = hubChildren(article, locale);
  const isAr = locale === 'ar';
  // The FAQPage is built from the same standing-Q&A array the visible block
  // renders, in the page's own language, so the schema can never carry a
  // question the page does not show — the rule that governs the Dataset and
  // HowTo schemas. A guide without standing Q&As carries neither.
  const visibleFaq = (isAr && article.faqAr ? article.faqAr : article.faq) ?? null;
  const script = jsonLdScript(
    {
      path,
      locale,
      article,
      // A hub lists its children on the page; the ItemList claims that
      // list. A leaf has no children, so its list is empty and no
      // ItemList is emitted for it.
      itemList: children.length > 0 ? children : null,
      // An original-data record (the grade-label catalogue, the price
      // observation baseline) is also a dated dataset: the Dataset schema
      // is built from the record's own declaration, so it records only the
      // variables the page actually publishes.
      dataset: article.dataset
        ? (() => {
            // The dataset's dates follow its own dated readings, not the
            // article's review date: when the record is registered in the
            // price-snapshot lineage, datePublished is the oldest
            // compiledOn and dateModified the newest, so the schema moves
            // the moment a second snapshot lands in the lineage. Records
            // outside the lineage (the grade-label catalogue) keep the
            // article's review date as both.
            const lineageSlug = article.dataset.downloadPath
              ? article.dataset.downloadPath.split('/').pop() ?? null
              : null;
            const published =
              lineageSlug && lineageFor(lineageSlug)
                ? oldestCompiledOn(lineageSlug)
                : null;
            const modified =
              lineageSlug && lineageFor(lineageSlug)
                ? newestCompiledOn(lineageSlug)
                : null;
            return {
              name: articleTitle(article, locale),
              description: articleSummary(article, locale),
              variableMeasured: article.dataset.variableMeasured,
              datePublished: published ?? article.reviewedOn,
              dateModified: modified ?? article.reviewedOn,
              license: article.dataset.license,
              // When the record is also served as a stable file (the price
              // observation baseline is, at /data/gulf-price-baseline), the
              // distribution points a crawler at that file so it reads the
              // data without parsing the article. Absolute, from SITE_URL.
              downloadUrl: article.dataset.downloadPath
                ? `${SITE_URL}${article.dataset.downloadPath}`
                : undefined,
              downloadFormat: 'application/json',
            };
          })()
        : null,
      // A marked procedure (the authenticity protocol) is also a HowTo:
      // its steps are the guide's own rendered section headings, in order,
      // so the schema cannot name a step the page does not show.
      howTo: article.howTo
        ? {
            name: articleTitle(article, locale),
            description: articleSummary(article, locale),
            steps: article.sections.map((section) =>
              locale === 'ar' && section.headingAr ? section.headingAr : section.heading
            ),
          }
        : null,
      title: articleTitle(article, locale),
      description: articleSummary(article, locale),
      // A guide with standing Q&As mirrors them as a FAQPage. The array is
      // the same one the visible block below renders, in the page's own
      // language, so the two agree by construction.
      faq: visibleFaq && visibleFaq.length > 0 ? visibleFaq : null,
      breadcrumbs: articleBreadcrumbs(article, locale).map((crumb) => ({
        label: crumb.label,
        href: crumb.href,
      })),
    },
    SITE_URL
  );

  if (!script) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: script }}
    />
  );
}

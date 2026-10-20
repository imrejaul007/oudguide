import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  articleBreadcrumbs,
  articleDirectAnswer,
  articleLimitations,
  articleReviewer,
  articleReviewMethod,
  articleSummary,
  articleTitle,
  getArticle,
  isIndexableInLocale,
  listReviewedArticles,
  resolvedRelated,
} from '@/lib/articles';
import { buildMetadata } from '@/lib/metadata';
import { resolveSources } from '@/data/articles/sources';

/**
 * A glossary term.
 *
 * The audit found /en/glossary/hindi-muri returning 404: the glossary was
 * never implemented, although the manifest carried thirty-two terminology
 * routes. The route now serves the content layer's reviewed entries, and
 * a term with no reviewed entry is a genuine 404 rather than a page with
 * the manifest's planning metadata on it.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticle(`glossary/${slug}`);

  if (!article) {
    return { title: 'Term not found · OudGuide' };
  }

  return buildMetadata({
    path: `/${locale}/glossary/${slug}`,
    title: articleTitle(article, locale),
    description: articleSummary(article, locale),
    locale,
    type: 'article',
    alternateLocalePath: `/${locale === 'ar' ? 'en' : 'ar'}/glossary/${slug}`,
    noindex: !isIndexableInLocale(article, locale),
  });
}

export default async function GlossaryTermPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const isAr = locale === 'ar';

  const article = getArticle(`glossary/${slug}`);
  if (!article) {
    notFound();
  }

  const sources = resolveSources(article.sourceIds);
  const related = resolvedRelated(article, locale);
  const otherTerms = listReviewedArticles()
    .filter((a) => a.kind === 'glossary' && a.slug !== article.slug)
    .slice(0, 6);

  return (
    <article className="container container-narrow" style={{ paddingTop: 40, paddingBottom: 60 }}>
      <nav
        className="meta"
        style={{ marginBottom: 28, textTransform: 'none', letterSpacing: '0.02em' }}
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
        <span style={{ color: 'var(--green-700)' }}>{articleTitle(article, locale)}</span>
      </nav>

      <header style={{ marginBottom: 28 }}>
        <span className="badge badge-emerald" style={{ marginBottom: 14 }}>
          {isAr ? 'مصطلح تجاري' : 'Trade term'}
        </span>
        <h1 style={{ marginBottom: 16, maxWidth: '22ch' }}>{articleTitle(article, locale)}</h1>
        <p className="lede">{articleDirectAnswer(article, locale)}</p>
      </header>

      <div className="text-body" style={{ fontSize: '1rem' }}>
        {article.sections.map((section, index) => (
          <section key={index}>
            <h2 style={{ marginTop: index === 0 ? 0 : 36, marginBottom: 12 }}>
              {isAr && section.headingAr ? section.headingAr : section.heading}
            </h2>
            {(isAr && section.bodyAr ? section.bodyAr : section.body ?? []).map((paragraph, pIndex) => (
              <p key={pIndex}>{paragraph}</p>
            ))}
            {section.list?.length ? (
              <ul style={{ paddingInlineStart: '22px', margin: '16px 0' }}>
                {(isAr && section.listAr ? section.listAr : section.list).map((item, itemIndex) => (
                  <li key={itemIndex} style={{ marginBottom: '8px' }}>
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
            {section.callout ? (
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
                  {isAr && section.callout.titleAr ? section.callout.titleAr : section.callout.title}
                </h3>
                <p style={{ margin: 0 }}>
                  {isAr && section.callout.bodyAr ? section.callout.bodyAr : section.callout.body}
                </p>
              </div>
            ) : null}
          </section>
        ))}
      </div>

      <section
        style={{
          marginTop: 36,
          padding: '20px 24px',
          border: '1px solid var(--line)',
          borderRadius: 6,
          background: 'var(--bg-pearl)',
        }}
      >
        <span className="eyebrow" style={{ display: 'block', marginBottom: 8 }}>
          {isAr ? 'ما لا يثبته هذا المدخل' : 'What this entry does not establish'}
        </span>
        <p className="text-body" style={{ margin: 0 }}>
          {articleLimitations(article, locale)}
        </p>
      </section>

      {sources.length > 0 && (
        <section style={{ marginTop: 32 }}>
          <span className="eyebrow" style={{ display: 'block', marginBottom: 10 }}>
            {isAr ? 'المصادر' : 'Sources'}
          </span>
          <ul style={{ paddingInlineStart: '20px', margin: 0 }}>
            {sources.map((source) => (
              <li key={source.id} style={{ marginBottom: '12px' }}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontWeight: 600, color: 'var(--green-700)' }}
                >
                  {isAr && source.labelAr ? source.labelAr : source.label}
                </a>
                <span
                  className="text-body"
                  style={{ display: 'block', marginTop: 2, fontSize: '0.9rem', color: 'var(--ink-soft)' }}
                >
                  {isAr && source.scopeAr ? source.scopeAr : source.scope}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section style={{ marginTop: 28, paddingTop: 16, borderTop: '1px solid var(--line)' }}>
        <p className="text-body" style={{ margin: 0, fontSize: '0.9rem' }}>
          <strong>{articleReviewer(article, locale)}</strong> · {article.reviewedOn}
          <br />
          {articleReviewMethod(article, locale)}
        </p>
      </section>

      {related.length > 0 && (
        <section style={{ marginTop: 36 }}>
          <span className="eyebrow" style={{ display: 'block', marginBottom: 12 }}>
            {isAr ? 'مصطلحات ذات صلة' : 'Related terms'}
          </span>
          <div className="grid-2">
            {related.map((link) => (
              <Link
                key={link.slug}
                href={link.href}
                style={{ padding: '10px 0', borderBottom: '1px solid var(--line)', textDecoration: 'none' }}
              >
                <span style={{ fontWeight: 600, color: 'var(--ink)', display: 'block' }}>{link.label}</span>
                <span className="meta" style={{ textTransform: 'none' }}>
                  {link.summary}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {otherTerms.length > 0 && (
        <section style={{ marginTop: 32 }}>
          <span className="eyebrow" style={{ display: 'block', marginBottom: 12 }}>
            {isAr ? 'مصطلحات أخرى' : 'Other terms'}
          </span>
          <div className="cluster" style={{ gap: 8 }}>
            {otherTerms.map((term) => (
              <Link key={term.slug} href={`/${locale}/${term.slug}`} className="chip">
                {articleTitle(term, locale)}
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

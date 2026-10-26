import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  articleDirectAnswer,
  articleLimitations,
  articleSummary,
  articleTitle,
  getArticle,
  hubChildren,
  isIndexableInLocale,
} from '@/lib/articles';
import { buildMetadata, SITE_URL } from '@/lib/metadata';
import { jsonLdScript } from '@/lib/jsonld';
import { resolveSources } from '@/data/articles/sources';

/**
 * The glossary index.
 *
 * The manifest declares a glossary index and it returned 404, while the
 * terminology routes it lists were served at a second URL by the guides
 * catch-all — one body, two paths, two canonicals. The index is the
 * section's own table of contents, and the terminology pages are served
 * at the path the manifest declares.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const article = getArticle('glossary');

  if (!article) {
    return { title: 'Glossary not found · OudGuide' };
  }

  return buildMetadata({
    path: `/${locale}/glossary`,
    title: articleTitle(article, locale),
    description: articleSummary(article, locale),
    locale,
    type: 'website',
    alternateLocalePath: `/${locale === 'ar' ? 'en' : 'ar'}/glossary`,
    noindex: !isIndexableInLocale(article, locale),
  });
}

export default async function GlossaryIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === 'ar';

  const article = getArticle('glossary');
  if (!article) {
    notFound();
  }

  const sources = resolveSources(article.sourceIds);
  const terms = hubChildren(article, locale);

  return (
    <div className="section">
      <div className="container">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              jsonLdScript(
                {
                  path: `/${locale}/glossary`,
                  locale,
                  article,
                  // The page lists the terms it renders; the ItemList
                  // claims that list, from the same array, so the schema
                  // cannot name a term the page does not link to.
                  itemList: terms.length > 0 ? terms : null,
                  title: articleTitle(article, locale),
                  description: articleSummary(article, locale),
                  breadcrumbs: [
                    { label: isAr ? 'الرئيسية' : 'Home', href: `/${locale}` },
                    { label: isAr ? 'المفردات' : 'Glossary', href: `/${locale}/glossary` },
                  ],
                },
                SITE_URL
              ) ?? '',
          }}
        />

        <section className="masthead">
          <div className="masthead-inner">
            <span className="eyebrow" style={{ display: 'block', marginBottom: 10 }}>
              {isAr ? 'المفردات' : 'Terminology'}
            </span>
            <h1>
              {articleTitle(article, locale)}
              <span className="accent">
                {isAr
                  ? `${terms.length} مصطلحاً`
                  : `${terms.length} term${terms.length === 1 ? '' : 's'}`}
              </span>
            </h1>
            <p className="hero-lead">{articleDirectAnswer(article, locale)}</p>
          </div>
        </section>

        {/* HOW THESE ENTRIES ARE WRITTEN */}
        <div className="text-body" style={{ fontSize: '1rem', marginTop: 40 }}>
          {article.sections.map((section, index) => (
            <section key={index}>
              <h2 style={{ marginTop: index === 0 ? 0 : 32, marginBottom: 12 }}>
                {isAr && section.headingAr ? section.headingAr : section.heading}
              </h2>
              {(isAr && section.bodyAr ? section.bodyAr : section.body ?? []).map((paragraph, pIndex) => (
                <p key={pIndex}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>

        {/* THE TERMS */}
        {terms.length > 0 && (
          <section style={{ marginTop: 44 }}>
            <span className="eyebrow" style={{ display: 'block', marginBottom: 12 }}>
              {isAr ? 'المصطلحات' : 'The terms'}
            </span>
            <div className="grid-3">
              {terms.map((term) => (
                <Link
                  key={term.slug}
                  href={term.href}
                  className="card"
                  style={{ padding: 22, textDecoration: 'none' }}
                >
                  <h3 style={{ fontSize: '1rem', marginBottom: 6 }}>{term.label}</h3>
                  <p
                    className="text-body"
                    style={{ margin: 0, fontSize: '0.9rem', color: 'var(--ink-soft)' }}
                  >
                    {term.blurb}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* LIMITATIONS */}
        <section
          style={{
            marginTop: 44,
            padding: '20px 24px',
            border: '1px solid var(--line)',
            borderRadius: 6,
            background: 'var(--bg-pearl)',
          }}
        >
          <span className="eyebrow" style={{ display: 'block', marginBottom: 8 }}>
            {isAr ? 'ما لا يثبته هذا القسم' : 'What this section does not establish'}
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
      </div>
    </div>
  );
}

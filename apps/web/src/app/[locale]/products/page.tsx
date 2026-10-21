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
  listReviewedArticles,
} from '@/lib/articles';
import { buildMetadata, SITE_URL } from '@/lib/metadata';
import { jsonLdScript } from '@/lib/jsonld';
import { resolveSources } from '@/data/articles/sources';

/**
 * The product index.
 *
 * The manifest declares a product index and it returned 404. The
 * twenty-four product families it lists are sections of their own — they
 * are formats, not guides — so they needed an index of their own rather
 * than a place in the encyclopedia.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const article = getArticle('products');

  if (!article) {
    return { title: 'Products not found · OudGuide' };
  }

  return buildMetadata({
    path: `/${locale}/products`,
    title: articleTitle(article, locale),
    description: articleSummary(article, locale),
    locale,
    type: 'website',
    alternateLocalePath: `/${locale === 'ar' ? 'en' : 'ar'}/products`,
    noindex: !isIndexableInLocale(article, locale),
  });
}

export default async function ProductsIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === 'ar';

  const article = getArticle('products');
  if (!article) {
    notFound();
  }

  const sources = resolveSources(article.sourceIds);
  const families = hubChildren(article, locale);
  const count = listReviewedArticles().filter((a) => a.kind === 'product').length;

  return (
    <div className="section">
      <div className="container">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              jsonLdScript(
                {
                  path: `/${locale}/products`,
                  article,
                  title: articleTitle(article, locale),
                  description: articleSummary(article, locale),
                  breadcrumbs: [
                    { label: isAr ? 'الرئيسية' : 'Home', href: `/${locale}` },
                    { label: isAr ? 'الأصناف' : 'Products', href: `/${locale}/products` },
                  ],
                },
                SITE_URL
              ) ?? '',
          }}
        />

        <section className="masthead">
          <div className="masthead-inner">
            <span className="eyebrow" style={{ display: 'block', marginBottom: 10 }}>
              {isAr ? 'أصناف المنتجات' : 'Product families'}
            </span>
            <h1>
              {articleTitle(article, locale)}
              <span className="accent">
                {isAr
                  ? `${count} فئة منتج`
                  : `${count} product famil${count === 1 ? 'y' : 'ies'}`}
              </span>
            </h1>
            <p className="hero-lead">{articleDirectAnswer(article, locale)}</p>
          </div>
        </section>

        {/* HOW THESE PAGES ARE WRITTEN */}
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

        {/* THE FAMILIES */}
        {families.length > 0 && (
          <section style={{ marginTop: 44 }}>
            <span className="eyebrow" style={{ display: 'block', marginBottom: 12 }}>
              {isAr ? 'العائلات' : 'The families'}
            </span>
            <div className="grid-3">
              {families.map((family) => (
                <Link
                  key={family.slug}
                  href={family.href}
                  className="card"
                  style={{ padding: 22, textDecoration: 'none' }}
                >
                  <h3 style={{ fontSize: '1rem', marginBottom: 6 }}>{family.label}</h3>
                  <p
                    className="text-body"
                    style={{ margin: 0, fontSize: '0.9rem', color: 'var(--ink-soft)' }}
                  >
                    {family.blurb}
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

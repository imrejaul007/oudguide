import Link from 'next/link';
import { Compass, ArrowRight, ShieldCheck } from 'lucide-react';
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
import { buildMetadata, SITE_URL } from '@/lib/metadata';
import { jsonLdScript } from '@/lib/jsonld';
import { resolveSources } from '@/data/articles/sources';

/**
 * A product family.
 *
 * The manifest declares twenty-four product-family routes and every one
 * of them returned 404: the content layer had no product-family article
 * type, so there was nothing for a route to serve.
 *
 * A family page explains a FORMAT — what "oud wood" covers, what it is
 * confused with, and which of its fields have no published standard. It
 * is not a product page. It carries no price, no composition and no
 * grade, because no format establishes those on its own; a composition
 * claim belongs to a specific product, a specific formulation and a
 * specific intended use.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticle(`products/${slug}`);

  if (!article) {
    return { title: 'Product family not found · OudGuide' };
  }

  return buildMetadata({
    path: `/${locale}/products/${slug}`,
    title: articleTitle(article, locale),
    description: articleSummary(article, locale),
    locale,
    type: 'article',
    alternateLocalePath: `/${locale === 'ar' ? 'en' : 'ar'}/products/${slug}`,
    noindex: !isIndexableInLocale(article, locale),
  });
}

export default async function ProductFamilyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const isAr = locale === 'ar';

  const article = getArticle(`products/${slug}`);
  if (!article) {
    notFound();
  }

  const sources = resolveSources(article.sourceIds);
  const related = resolvedRelated(article, locale);
  const breadcrumbs = articleBreadcrumbs(article, locale);
  const otherFamilies = listReviewedArticles()
    .filter((a) => a.kind === 'product' && a.slug !== article.slug)
    .slice(0, 8);

  return (
    <article className="container container-narrow" style={{ paddingTop: 40, paddingBottom: 60 }}>
      {/* STRUCTURED DATA — built from the same record the page renders from */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            jsonLdScript(
              {
                path: `/${locale}/products/${slug}`,
                article,
                title: articleTitle(article, locale),
                description: articleSummary(article, locale),
                breadcrumbs: breadcrumbs.map((crumb) => ({
                  label: crumb.label,
                  href: crumb.href,
                })),
              },
              SITE_URL
            ) ?? '',
        }}
      />

      <nav
        className="meta"
        style={{ marginBottom: 28, textTransform: 'none', letterSpacing: '0.02em' }}
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

      <header style={{ marginBottom: 28 }}>
        <span className="badge badge-emerald" style={{ marginBottom: 14 }}>
          {isAr ? 'فئة منتجات' : 'Product family'}
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

      {/* B2B SOURCING BRIDGE — Direct connection to verified producers */}
      <section style={{ margin: '40px 0 20px' }}>
        <div className="card-frame card-frame-accent" style={{ padding: '30px 32px', background: 'var(--bg-eggshell)' }}>
          <div className="row-between" style={{ gap: 16, flexWrap: 'wrap' }}>
            <div style={{ maxWidth: 540 }}>
              <div className="cluster" style={{ gap: 8, marginBottom: 8 }}>
                <ShieldCheck size={16} style={{ color: 'var(--green-700)' }} />
                <span className="eyebrow" style={{ color: 'var(--green-800)', margin: 0 }}>
                  {isAr ? 'التوريد بالجملة والتحقق' : 'Wholesale Sourcing & Verification'}
                </span>
              </div>
              <h3 style={{ fontSize: '1.2rem', margin: '0 0 6px', color: 'var(--ink)' }}>
                {isAr
                  ? `البحث عن موردين معتمدين لـ ${articleTitle(article, locale)}`
                  : `Source verified ${articleTitle(article, locale)}`}
              </h3>
              <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--ink-muted)', lineHeight: 1.6 }}>
                {isAr
                  ? 'تصفح الموردين المعتمدين في الدليل أو قدّم طلب توريد محايد ومشفّر للحصول على عروض مباشرة.'
                  : 'Filter listed distillers and wholesalers handling this material, or submit a confidential RFQ to receive matched proposals.'}
              </p>
            </div>
            <div className="cluster" style={{ gap: 10, flexWrap: 'wrap' }}>
              <Link
                href={`/${locale}/directory?family=${encodeURIComponent(articleTitle(article, 'en'))}`}
                className="btn btn-outline btn-sm"
                style={{ gap: 6, background: '#ffffff' }}
              >
                <Compass size={14} />
                <span>{isAr ? 'عرض في الدليل' : 'Browse Directory'}</span>
              </Link>
              <Link
                href={`/${locale}/rfq`}
                className="btn btn-primary btn-sm"
                style={{ gap: 6 }}
              >
                <span>{isAr ? 'تقديم طلب توريد' : 'Start Wholesale RFQ'}</span>
                <ArrowRight size={13} className="icon-dir-flip" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT STEPS */}
      {article.nextSteps?.length ? (
        <section style={{ marginTop: 36 }}>
          <span className="eyebrow" style={{ display: 'block', marginBottom: 10 }}>
            {isAr ? 'الخطوة التالية' : 'Next steps'}
          </span>
          <ul style={{ paddingInlineStart: '20px', margin: 0 }}>
            {(isAr && article.nextStepsAr ? article.nextStepsAr : article.nextSteps).map((step, index) => (
              <li key={index} style={{ marginBottom: '6px' }}>
                {step}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* LIMITATIONS — what this page does not establish */}
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
          {isAr ? 'ما لا يثبته هذا المقال' : 'What this article does not establish'}
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
            {isAr ? 'أدلة ذات صلة' : 'Related guides'}
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

      {otherFamilies.length > 0 && (
        <section style={{ marginTop: 36 }}>
          <span className="eyebrow" style={{ display: 'block', marginBottom: 12 }}>
            {isAr ? 'أصناف أخرى' : 'Other families'}
          </span>
          <div className="cluster" style={{ gap: 8 }}>
            {otherFamilies.map((family) => (
              <Link
                key={family.slug}
                href={`/${locale}/products/${family.slug.replace('products/', '')}`}
                className="chip"
              >
                {isAr && family.titleAr ? family.titleAr : family.title}
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

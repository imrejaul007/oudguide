import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { articleCounts, hubChildren, listReviewedArticles, articlePath, articleTitle, articleSummary } from '@/lib/articles';
import { getArticle } from '@/lib/articles';
import { FileText, BookOpen, ArrowRight, Package, ScrollText, Globe } from 'lucide-react';

/**
 * The encyclopedia index.
 *
 * The audit found this page rendering "Peer-Reviewed Knowledge Base" and
 * "83 independent editorial and scientific guides" while serving the same
 * fallback body for all of them. The page now states what it actually
 * holds: the published articles, grouped by hub, with the research
 * briefs counted separately rather than folded into the total.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';
  const counts = articleCounts();

  return buildMetadata({
    path: `/${locale}/guides`,
    title: isAr
      ? `الموسوعة — ${counts.reviewed} مقالاً مُراجَعاً`
      : `Encyclopedia — ${counts.reviewed} reviewed articles`,
    description: isAr
      ? 'أدلة تحريرية مُراجَعة عن العود الطبيعي: المادة والتقطير والتقييم والشراء والتجارة والاستخدام، مع المصادر ونطاق كل ادعاء.'
      : 'Reviewed editorial guides on natural oud: the material, distillation, grading, buying, trade and use — with sources and a stated scope for every claim.',
    locale,
    alternateLocalePath: `/${locale === 'ar' ? 'en' : 'ar'}/guides`,
  });
}

export default async function GuidesIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === 'ar';
  const counts = articleCounts();

  // The hubs, in the order a reader meets them.
  const hubSlugs = [
    'oud-basics',
    'quality',
    'buying',
    'using-oud',
    'production',
    'sourcing',
    'trade',
    'fragrance',
    'origins',
    'comparisons',
    'culture',
    'collecting',
  ];

  const hubs = hubSlugs
    .map((slug) => getArticle(slug))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  // Any reviewed article that is not a hub and has no hub parent still
  // deserves to be reachable from the index.
  const orphans = listReviewedArticles().filter(
    (a) => a.kind !== 'hub' && (!a.parent || a.parent === 'guides-index')
  );

  // The most recently reviewed finished articles, newest first.
  const recent = listReviewedArticles()
    .filter((a) => a.kind !== 'hub')
    .sort((a, b) => (b.reviewedOn || '').localeCompare(a.reviewedOn || ''))
    .slice(0, 6);

  return (
    <div className="section">
      <div className="container">
        <section className="masthead">
          <div className="masthead-inner">
            <div className="hero-tag">
              <BookOpen size={13} />
              <span>{isAr ? 'الموسوعة' : 'The Encyclopedia'}</span>
            </div>
            <h1>
              {isAr ? 'مرجع العود والعطور' : 'The Oud and Fragrance Reference'}
              <span className="accent">
                {isAr
                  ? `${counts.reviewed} مقالاً مُراجَعاً، و${counts.briefs} موجزاً بحثياً قيد الإعداد.`
                  : `${counts.reviewed} reviewed articles, and ${counts.briefs} research briefs in preparation.`}
              </span>
            </h1>
            <p className="hero-lead">
              {isAr
                ? 'كل مقال هنا يحمل جوابه الخاص، ومصادره، وحدود ما يثبته. والموجزات البحثية صفحات لم تُكتب بعد، وهي موسومة بوضوح كموجزات وليست مقالات مكتملة.'
                : 'Every article here carries its own answer, its sources, and the limits of what it establishes. The research briefs are pages that have not been written yet; they are labelled as briefs and are not presented as finished articles.'}
            </p>
          </div>
        </section>

        {/* RECENTLY REVIEWED */}
        <section style={{ marginTop: 40, marginBottom: 48 }}>
          <div className="row-between" style={{ marginBottom: 18 }}>
            <div>
              <span className="eyebrow" style={{ display: 'block', marginBottom: 6 }}>
                {isAr ? 'الأحدث مراجعةً' : 'Recently reviewed'}
              </span>
              <h2 className="h2" style={{ margin: 0 }}>
                {isAr ? 'آخر ما أُنهي من المقالات' : 'The latest finished articles'}
              </h2>
            </div>
          </div>
          {recent.length > 0 ? (
            <div className="grid-3">
              {recent.map((a) => {
                const Kind =
                  a.kind === 'product' ? Package : a.kind === 'glossary' ? ScrollText : BookOpen;
                const kindLabel =
                  a.kind === 'product'
                    ? (isAr ? 'صيغة' : 'Product')
                    : a.kind === 'glossary'
                      ? (isAr ? 'مصطلح' : 'Term')
                      : (isAr ? 'دليل' : 'Guide');
                return (
                  <Link
                    key={a.slug}
                    href={articlePath(locale, a.slug)}
                    className="card"
                    style={{ padding: 20, textDecoration: 'none', display: 'block' }}
                  >
                    <div className="cluster" style={{ gap: 8, marginBottom: 10 }}>
                      <span className="badge badge-accent">
                        <Kind size={11} />
                        {kindLabel}
                      </span>
                      {a.reviewedOn && <span className="meta">{a.reviewedOn}</span>}
                    </div>
                    <h3 style={{ fontSize: '1rem', margin: '0 0 6px' }}>
                      {articleTitle(a, locale)}
                    </h3>
                    <p
                      className="text-body"
                      style={{
                        margin: 0,
                        fontSize: '0.88rem',
                        color: 'var(--ink-muted)',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {articleSummary(a, locale)}
                    </p>
                  </Link>
                );
              })}
            </div>
          ) : null}
        </section>

        {/* CROSS-LINK STRIP: discovery is not hub-only */}
        <section style={{ marginBottom: 48 }}>
          <div className="cluster" style={{ gap: 10, flexWrap: 'wrap' }}>
            <Link href={`/${locale}/glossary`} className="btn btn-outline btn-sm">
              <ScrollText size={13} />
              {isAr ? 'قاموس المصطلحات' : 'The glossary'}
            </Link>
            <Link href={`/${locale}/products`} className="btn btn-outline btn-sm">
              <Package size={13} />
              {isAr ? 'عائلات المنتجات' : 'Product families'}
            </Link>
            <Link href={`/${locale}/world`} className="btn btn-outline btn-sm">
              <Globe size={13} />
              {isAr ? 'السجل الجغرافي' : 'The geographic register'}
            </Link>
          </div>
        </section>

        {/* SECTIONS */}
        <div style={{ marginTop: 48 }}>
          {hubs.map((hub) => {
            const children = hubChildren(hub, locale);
            if (children.length === 0) return null;

            return (
              <section key={hub.slug} style={{ marginBottom: 48 }}>
                <div className="row-between" style={{ marginBottom: 8 }}>
                  <div>
                    <span className="eyebrow" style={{ display: 'block', marginBottom: 6 }}>
                      {isAr ? 'قسم' : 'Section'}
                    </span>
                    <h2 className="h2" style={{ margin: 0 }}>
                      <Link href={`/${locale}/guides/${hub.slug}`}>
                        {isAr && hub.titleAr ? hub.titleAr : hub.title}
                      </Link>
                    </h2>
                  </div>
                  <Link
                    href={`/${locale}/guides/${hub.slug}`}
                    className="btn btn-outline btn-sm"
                  >
                    <span>{isAr ? 'فتح القسم' : 'Open the section'}</span>
                    <ArrowRight size={13} className="icon-dir-flip" />
                  </Link>
                </div>
                <p className="lede" style={{ marginBottom: 20, maxWidth: 820 }}>
                  {isAr && hub.summaryAr ? hub.summaryAr : hub.summary}
                </p>

                <div className="grid-3">
                  {children.map((child) => (
                    <Link
                      key={child.slug}
                      href={child.href}
                      className="card"
                      style={{ padding: 24, textDecoration: 'none' }}
                    >
                      <h3 style={{ fontSize: '1.05rem', marginBottom: 8 }}>{child.label}</h3>
                      <p
                        className="text-body"
                        style={{ margin: 0, fontSize: '0.92rem', color: 'var(--ink-soft)' }}
                      >
                        {child.blurb}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* ARTICLES OUTSIDE A HUB */}
        {orphans.length > 0 && (
          <section style={{ marginBottom: 48 }}>
            <span className="eyebrow" style={{ display: 'block', marginBottom: 12 }}>
              {isAr ? 'أخرى' : 'Other articles'}
            </span>
            <div className="grid-3">
              {orphans.map((article) => (
                <Link
                  key={article.slug}
                  href={`/${locale}/guides/${article.slug}`}
                  className="card"
                  style={{ padding: 22, textDecoration: 'none' }}
                >
                  <h3 style={{ fontSize: '1rem', marginBottom: 6 }}>
                    {isAr && article.titleAr ? article.titleAr : article.title}
                  </h3>
                  <p
                    className="text-body"
                    style={{ margin: 0, fontSize: '0.9rem', color: 'var(--ink-soft)' }}
                  >
                    {isAr && article.summaryAr ? article.summaryAr : article.summary}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* THE BRIEFS, COUNTED HONESTLY */}
        <section
          style={{
            marginTop: 24,
            padding: '26px 30px',
            border: '1px solid var(--line)',
            borderRadius: 6,
            background: 'var(--bg-pearl)',
          }}
        >
          <div className="cluster" style={{ gap: 10, marginBottom: 10, alignItems: 'flex-start' }}>
            <FileText size={18} style={{ color: 'var(--green-600)', flexShrink: 0, marginTop: 2 }} />
            <div>
              <h3 style={{ marginBottom: 6, fontSize: '1.15rem' }}>
                {isAr ? 'الموجزات البحثية' : 'Research briefs'}
              </h3>
              <p className="text-body" style={{ margin: 0 }}>
                {isAr
                  ? `هناك ${counts.briefs} موجزاً بحثياً إضافياً في السجل لم يُكتب بعد. كل موجز قابل للوصول على عنوانه الخاص ويبيّن ما يحتاجه، لكن لا واحد منهم يُعرض كمقال، ولا يُقدَّم لمحركات البحث على أنه جواب.`
                  : `There are ${counts.briefs} further pages in the register that have not been written yet. Each one is reachable by its own address and states what it still needs, but none of them is presented as an article, and none of them is offered to search engines as an answer.`}
              </p>
            </div>
          </div>
          <Link href={`/${locale}/guides/oud-basics`} className="btn btn-outline btn-sm" style={{ marginTop: 14 }}>
            <span>{isAr ? 'ابدأ بالمقالات المنشورة' : 'Start with the published articles'}</span>
            <ArrowRight size={13} className="icon-dir-flip" />
          </Link>
        </section>
      </div>
    </div>
  );
}

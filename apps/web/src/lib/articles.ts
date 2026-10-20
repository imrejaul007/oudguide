/**
 * The content layer.
 *
 * OG-A01's core defect was structural: the route manifest held 772 route
 * *candidates*, every one of them marked
 * `content_status: "Research/planning; no finished article supplied"`, and
 * the guide renderer served one hard-coded fallback article for all of
 * them. The titles changed; the answer did not.
 *
 * This module separates the two things that were conflated:
 *
 *   - A route candidate is a plan. It lives in `route_manifest.json` and
 *     its `index_state` decides whether it may be published.
 *   - An article is a reviewed body. It lives under `data/articles/` and
 *     must carry a reviewer, a date, sources with explicit scope, and its
 *     own limitations.
 *
 * A path is published only when BOTH are true: the manifest publishes the
 * route, and a reviewed article exists for it. Everything else is a
 * candidate, and candidates are not linked, not indexed, and not served as
 * finished content.
 */

import type { Article, ArticleKind, ArticleSource } from '../data/articles/types.ts';
import { seed } from './data.ts';
import { articles } from '../data/articles/index.ts';

export type { Article, ArticleKind, ArticleSource, ArticleSection, ArticleRelated } from '../data/articles/types.ts';

/** Locales the site publishes. */
export const SUPPORTED_LOCALES = ['en', 'ar'] as const;
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export function isSupportedLocale(locale: string): locale is SupportedLocale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(locale);
}

/**
 * Normalise a locale to one the site publishes.
 *
 * The middleware used to accept any first path segment and prefix it with
 * `/en`, so `/%24/directory/al-mutalib-perfumes` became
 * `/en/%24/directory/al-mutalib-perfumes` — a URL with a literal `$24`
 * segment that can never match a route (OG-A17). Only the two real locales
 * are recognised; anything else is not a locale.
 */
export function normaliseLocale(raw: string | undefined | null): SupportedLocale {
  const value = String(raw ?? '').trim().toLowerCase();
  return value === 'ar' ? 'ar' : 'en';
}

/** Every article in the content layer, reviewed or draft. */
export function listArticles(kind?: ArticleKind): Article[] {
  return kind ? articles.filter((a) => a.kind === kind) : [...articles];
}

/** Articles with a finished, reviewed body. */
export function listReviewedArticles(): Article[] {
  return articles.filter((a) => a.state === 'reviewed');
}

/** Research briefs. Published as clearly-labelled, non-indexable drafts. */
export function listDraftArticles(): Article[] {
  return articles.filter((a) => a.state === 'draft');
}

/**
 * Look up an article by its content-layer slug (no leading slash).
 */
export function getArticle(slug: string): Article | null {
  const key = normaliseSlug(slug);
  return articles.find((a) => a.slug === key) ?? null;
}

export function normaliseSlug(slug: string): string {
  return String(slug ?? '')
    .replace(/^\/+/, '')
    .replace(/\/+$/, '')
    .trim();
}

/**
 * Look up an article by its public path, in either locale.
 */
export function getArticleByPath(path: string): Article | null {
  const match = String(path ?? '').match(/^\/(?:en|ar)\/guides\/([^?#]+)/i);
  if (!match) return null;
  return getArticle(match[1]);
}

/**
 * The canonical path for an article, without a trailing slash.
 */
export function articlePath(locale: string, slug: string): string {
  return `/${locale}/guides/${normaliseSlug(slug)}`;
}

/**
 * True when the article may appear in the sitemap, in navigation, and in
 * the indexable set.
 *
 * A draft is never indexable. It is not in the sitemap and it is not
 * linked from a public index — it is reachable by direct URL only, and
 * renders with a `noindex` directive so a crawler that finds it elsewhere
 * is told not to index it.
 */
export function isIndexable(article: Article | null): boolean {
  return Boolean(article && article.state === 'reviewed');
}


/**
 * The manifest record for a guide path, if the manifest declares it.
 *
 * The manifest is a register of route *candidates*. Every one of its
 * records carries `content_status: "Research/planning; no finished
 * article supplied"`, which is exactly what a research brief is: a
 * declared question with the evidence still to be collected.
 */
export function manifestRouteFor(slug: string): any | null {
  const key = normaliseSlug(slug);
  const routes = seed.routes as any[];
  const withSlash = `/en/guides/${key}/`;
  const withoutSlash = `/en/guides/${key}`;
  return (
    routes.find((r: any) => r.path === withSlash || r.path === withoutSlash) ?? null
  );
}

/**
 * A guide path that has no reviewed article.
 *
 * These are the manifest's candidate routes that have not been written
 * yet. They are served as research briefs: the question the page is
 * meant to answer, the scope it will cover, and the evidence that still
 * has to be gathered. A brief states its own status; it never presents
 * planning metadata as a finished article.
 */
export function getBrief(slug: string): {
  slug: string;
  record: any;
} | null {
  const key = normaliseSlug(slug);
  const article = getArticle(key);
  if (article) return null;

  const record = manifestRouteFor(key);
  if (!record) return null;

  // Only the editorial families have a brief worth showing. A directory
  // filter path is not a writing project.
  const BRIEFABLE = new Set([
    'Editorial guide',
    'Editorial hub',
    'Origin country',
    'Origin region',
    'Destination buying guide',
    'Origin comparison',
    'Trade terminology',
  ]);
  if (!BRIEFABLE.has(record.family)) return null;

  return { slug: key, record };
}

/**
 * The count of published articles against research briefs.
 *
 * The encyclopedia's own coverage, stated the same way the directory
 * states its own: what is finished, and what is still in progress.
 */
export function articleCounts(): { reviewed: number; briefs: number } {
  let briefs = 0;
  for (const route of seed.routes as any[]) {
    if (!BRIEFABLE_FAMILIES.has(route.family)) continue;
    if (getArticle(route.path.replace(/^\/en\/guides\//, '').replace(/\/$/, ''))) continue;
    briefs++;
  }
  return { reviewed: listReviewedArticles().length, briefs };
}

const BRIEFABLE_FAMILIES = new Set([
  'Editorial guide',
  'Editorial hub',
  'Origin country',
  'Origin region',
  'Destination buying guide',
  'Origin comparison',
  'Trade terminology',
]);

/**
 * Whether a page's Arabic version is ready for public indexation.
 *
 * The editorial runbook's publication gate for the Arabic tree is
 * "bilingual_review: Arabic translation must be reviewed by a human
 * editor before public indexation".
 *
 * The Arabic bodies in this layer are written as reviewed copy, not as
 * machine output, and the content validator rejects the failure modes
 * that make a translation visibly unfinished — replacement characters,
 * stray characters from other scripts, and untranslated Latin fragments
 * inside an Arabic sentence. That is a mechanical check, not a human
 * editorial review, and the runbook asks for the human review.
 *
 * So the honest position is: the Arabic pages are published and
 * readable, and they are NOT yet cleared for indexation. This flag
 * keeps the distinction explicit rather than asserting a review that
 * has not happened.
 */
export const ARABIC_HUMAN_REVIEW_COMPLETE = false;

/**
 * Whether a page should be indexed in the given locale.
 *
 * An English page is indexable when its article is reviewed. An Arabic
 * page additionally requires the bilingual editorial review the runbook
 * specifies, which has not been carried out by a human editor.
 */
export function isIndexableInLocale(article: Article | null, locale: string): boolean {
  if (!isIndexable(article)) return false;
  if (locale === 'ar') return ARABIC_HUMAN_REVIEW_COMPLETE;
  return true;
}

/**
 * The locale-aware title of an article.
 */
export function articleTitle(article: Article, locale: string): string {
  if (locale === 'ar' && article.titleAr) return article.titleAr;
  return article.title;
}

export function articleH1(article: Article, locale: string): string {
  if (locale === 'ar' && article.h1Ar) return article.h1Ar;
  return article.h1;
}

export function articleSummary(article: Article, locale: string): string {
  if (locale === 'ar' && article.summaryAr) return article.summaryAr;
  return article.summary;
}

/**
 * The direct answer — the paragraph that exists to be the answer to the
 * page's question. OG-A01's acceptance test compares these between pages.
 */
export function articleDirectAnswer(article: Article, locale: string): string {
  if (locale === 'ar' && article.directAnswerAr) return article.directAnswerAr;
  return article.directAnswer;
}

export function articleLimitations(article: Article, locale: string): string {
  if (locale === 'ar' && article.limitationsAr) return article.limitationsAr;
  return article.limitations;
}

export function articleReviewer(article: Article, locale: string): string {
  if (locale === 'ar' && article.reviewerAr) return article.reviewerAr;
  return article.reviewer;
}

export function articleReviewMethod(article: Article, locale: string): string {
  if (locale === 'ar' && article.reviewMethodAr) return article.reviewMethodAr;
  return article.reviewMethod;
}

/**
 * The related articles of a page, resolved against the content layer.
 *
 * A related link whose target does not exist as a reviewed article is
 * dropped rather than rendered: the audit found related-content cards
 * pointing at unpublished candidates, which is how broken internal links
 * reached the public site in the first place (OG-A02, OG-A14).
 */
export function resolvedRelated(article: Article, locale: string): Array<{
  slug: string;
  label: string;
  href: string;
  summary: string;
}> {
  const out: Array<{ slug: string; label: string; href: string; summary: string }> = [];

  for (const rel of article.related ?? []) {
    const target = getArticle(rel.slug);
    if (!target) continue;
    if (target.state !== 'reviewed') continue;

    out.push({
      slug: target.slug,
      label: locale === 'ar' && rel.labelAr ? rel.labelAr : rel.label,
      href: articlePath(locale, target.slug),
      summary: articleSummary(target, locale),
    });
  }

  return out;
}

/**
 * The published children of a hub, in the order the hub lists them.
 */
export function hubChildren(article: Article, locale: string): Array<{
  slug: string;
  label: string;
  blurb: string;
  href: string;
}> {
  const out: Array<{ slug: string; label: string; blurb: string; href: string }> = [];

  for (const child of article.children ?? []) {
    const target = getArticle(child.slug);
    if (!target || target.state !== 'reviewed') continue;

    out.push({
      slug: target.slug,
      label: locale === 'ar' && child.labelAr ? child.labelAr : child.label,
      blurb: locale === 'ar' && child.blurbAr ? child.blurbAr : child.blurb,
      href: articlePath(locale, target.slug),
    });
  }

  return out;
}

/**
 * The breadcrumb trail for an article: Home › Encyclopedia › hub › article.
 */
export function articleBreadcrumbs(
  article: Article,
  locale: string
): Array<{ label: string; href: string }> {
  const crumbs: Array<{ label: string; href: string }> = [
    { label: locale === 'ar' ? 'الرئيسية' : 'Home', href: `/${locale}` },
    { label: locale === 'ar' ? 'الموسوعة' : 'Encyclopedia', href: `/${locale}/guides` },
  ];

  if (article.parent) {
    const parent = getArticle(article.parent);
    if (parent) {
      crumbs.push({
        label: locale === 'ar' && parent.titleAr ? parent.titleAr : parent.title,
        href: articlePath(locale, parent.slug),
      });
    }
  }

  crumbs.push({
    label: articleTitle(article, locale),
    href: articlePath(locale, article.slug),
  });

  return crumbs;
}

/**
 * Every published article path for a locale. Used by the sitemap and by
 * the link crawler.
 */
export function publishedArticlePaths(locale: string): string[] {
  return listReviewedArticles().map((a) => articlePath(locale, a.slug));
}

/**
 * A stable fingerprint of an article's body, used by the duplicate-content
 * regression test.
 *
 * Navigation, referral modules and calls to action are excluded, so two
 * pages that differ only in their surroundings still collide. OG-A01's
 * acceptance criterion is exactly this comparison.
 */
export function bodyFingerprint(article: Article): string {
  const parts: string[] = [article.directAnswer];

  for (const section of article.sections) {
    parts.push(section.heading);
    parts.push(...(section.body ?? []));
    parts.push(...(section.list ?? []));
    if (section.callout) {
      parts.push(section.callout.title);
      parts.push(section.callout.body);
    }
  }

  parts.push(article.limitations);

  return parts
    .join('\n')
    .toLowerCase()
    .replace(/[^a-z0-9\n]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

import { MetadataRoute } from 'next';
import { seed } from '@/lib/data';
import {
  ARABIC_HUMAN_REVIEW_COMPLETE,
  articlePath,
  listReviewedArticles,
} from '@/lib/articles';
import { isPublishedPath, normalizePath } from '@/lib/route-resolver';

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.oudguide.com'
).replace(/\/$/, '');

/**
 * The sitemap.
 *
 * A sitemap is an explicit promise that every URL in it resolves and is
 * worth indexing. Two corrections over the previous version:
 *
 * 1. It publishes only what is genuinely published. The manifest's 772
 *    routes are route *candidates* — every one of them still carries
 *    `content_status: "Research/planning; no finished article supplied"`.
 *    Publishing them produced 572 URLs that returned 404.
 *
 * 2. It publishes only what is genuinely worth indexing. The 249
 *    territory pages are ISO registry records: they establish that a
 *    place exists and is a valid destination for a customs form, and
 *    nothing about agarwood. They remain reachable and honest, but they
 *    are not answers, so they are not offered to search engines as
 *    answers. The same reasoning applies to the research briefs.
 *
 * Every URL below is checked against the published-route resolver, so
 * the sitemap and the app cannot disagree about what exists.
 */

/** The static pages the site serves and that are worth indexing. */
const STATIC_PAGES: string[] = [
  '/en',
  '/en/guides',
  '/en/glossary',
  '/en/products',
  '/en/directory',
  '/en/directory/map',
  '/en/world',
  '/en/sourcing',
  '/en/rfq',
  '/en/shortlist',
  '/en/membership',
  '/en/for-businesses',
  '/en/policies',
  '/en/privacy',
  '/en/corrections',
  '/en/partners/opportunities',
];

/**
 * The Arabic tree.
 *
 * An Arabic page is published only where the Arabic version actually
 * exists. The article layer carries a reviewed Arabic body for every
 * published article, so the Arabic encyclopedia is real; the static
 * Arabic pages are published because their shells are translated.
 */
const ARABIC_STATIC_PAGES: string[] = [
  '/ar',
  '/ar/guides',
  '/ar/glossary',
  '/ar/products',
  '/ar/directory',
  '/ar/directory/map',
  '/ar/world',
  '/ar/sourcing',
  '/ar/rfq',
  '/ar/shortlist',
  '/ar/membership',
  '/ar/for-businesses',
  '/ar/policies',
  '/ar/privacy',
  '/ar/corrections',
  '/ar/partners/opportunities',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];
  const seen = new Set<string>();

  const push = (path: string, priority: number, changeFrequency: 'weekly' | 'monthly') => {
    const clean = normalizePath(path);
    if (!clean || seen.has(clean)) return;
    if (!isPublishedPath(clean)) return;
    seen.add(clean);
    urls.push({
      url: `${siteUrl}${clean}`,
      lastModified: new Date('2026-10-20'),
      changeFrequency,
      priority,
    });
  };

  // The home page and the utility pages.
  for (const path of STATIC_PAGES) {
    push(path, path === '/en' ? 0.9 : 0.7, 'monthly');
  }

  // The published articles. The path comes from the article record's own
  // section, so a glossary term is published at /en/glossary/{term} and a
  // product family at /en/products/{family} — the paths the manifest
  // declares — rather than everything being forced under /en/guides.
  for (const article of listReviewedArticles()) {
    push(articlePath('en', article.slug), 0.8, 'weekly');
  }

  // The Arabic tree is published and readable, but the editorial
  // runbook's bilingual_review gate asks for a human editorial review
  // before public indexation, and that review has not been carried out.
  // The Arabic pages therefore carry a noindex directive and stay out
  // of the sitemap until a human editor has signed them off. They
  // remain reachable and linked from the Arabic navigation.
  if (ARABIC_HUMAN_REVIEW_COMPLETE) {
    for (const article of listReviewedArticles()) {
      push(articlePath('ar', article.slug), 0.6, 'weekly');
    }
    for (const path of ARABIC_STATIC_PAGES) {
      push(path, 0.6, 'monthly');
    }
  }

  return urls;
}

/**
 * The territory pages are reachable but not indexed.
 *
 * They are listed here so the reason is recorded in one place rather
 * than being re-decided by each consumer of the route manifest.
 */
export const NON_INDEXABLE_TERRITORY_COUNT = (seed.countries as any[]).length;

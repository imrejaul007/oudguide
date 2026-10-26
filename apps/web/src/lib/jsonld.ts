import type { Article } from '../data/articles/types.ts';
import { resolveSources } from '../data/articles/sources.ts';
import { articleBreadcrumbs, articleTitle } from './articles.ts';

/**
 * Structured data.
 *
 * The audit found that no page emitted any JSON-LD at all — no Article,
 * no BreadcrumbList, no LocalBusiness. The records carry everything the
 * schema needs: a reviewer, a review date, a review method, the
 * source registry, a summary and a direct answer. The data was there
 * and the structured data was not.
 *
 * This module builds it, and it builds it from the same records the
 * pages render from — so a schema can never describe something the page
 * does not say. Two rules govern it:
 *
 *   1. A claim in the schema must be visible on the page. A reviewer
 *      who is not named in the article body is not named in the schema
 *      either.
 *   2. The schema describes the page, it does not promote it. A review
 *      date is a review date; it is not a date of last modification
 *      that would make the page look fresher than it is.
 */

export interface JsonLdOptions {
  /** The canonical path, without a trailing slash. */
  path: string;
  /** The reviewed article this page is built from, when there is one. */
  article?: Article | null;
  /** The visible page title. */
  title: string;
  /** The visible page description. */
  description: string;
  /** The breadcrumb trail, when the page has a hierarchy. */
  breadcrumbs?: Array<{ label: string; href: string }>;
  /** The business this page is about, for a profile page. */
  business?: {
    name: string;
    description?: string | null;
    url?: string | null;
  } | null;
}

/**
 * The Article schema for a reviewed guide.
 *
 * `datePublished` and `dateModified` are both the review date. The page
 * has one date on it — the date the content was reviewed — and a schema
 * that claims a more recent modification than the page shows would be
 * the same class of defect the audit found in the copy.
 */
function articleSchema(options: JsonLdOptions, article: Article): Record<string, unknown> {
  const sources = resolveSources(article.sourceIds);
  const title = articleTitle(article, localeOf(options.path));

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title.slice(0, 110),
    description: article.summary,
    inLanguage: localeOf(options.path) === 'ar' ? 'ar' : 'en',
    datePublished: article.reviewedOn,
    dateModified: article.reviewedOn,
    author: {
      '@type': 'Organization',
      name: article.reviewer,
    },
    publisher: {
      '@type': 'Organization',
      name: 'OudGuide',
    },
    citation: sources.map((source) => ({
      '@type': 'CreativeWork',
      name: source.label,
      url: source.url,
      dateAccessed: source.retrievedOn,
    })),
    about: article.title,
  };
}

/**
 * The BreadcrumbList schema.
 */
function breadcrumbSchema(
  options: JsonLdOptions,
  siteUrl: string
): Record<string, unknown> | null {
  const crumbs = options.breadcrumbs;
  if (!crumbs || crumbs.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      item: `${siteUrl}${crumb.href}`,
    })),
  };
}

/**
 * The LocalBusiness schema for a profile page.
 *
 * Only the fields the page actually publishes are included. Contact
 * details are deliberately left out: the page shows them only for an
 * entitled record, and a schema that published them to a crawler would
 * defeat the contact projection.
 */
function businessSchema(
  options: JsonLdOptions,
  siteUrl: string
): Record<string, unknown> | null {
  const business = options.business;
  if (!business) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: business.name,
    description: business.description ?? options.description,
    url: `${siteUrl}${options.path}`,
  };
}

function localeOf(path: string): string {
  return path.startsWith('/ar/') || path === '/ar' ? 'ar' : 'en';
}

/**
 * Build the JSON-LD graph for a page.
 */
export function buildJsonLd(
  options: JsonLdOptions,
  siteUrl: string
): Record<string, unknown>[] {
  const graph: Record<string, unknown>[] = [];

  if (options.article) {
    graph.push(articleSchema(options, options.article));
  }

  if (options.business) {
    const schema = businessSchema(options, siteUrl);
    if (schema) graph.push(schema);
  }

  const crumbs = breadcrumbSchema(options, siteUrl);
  if (crumbs) graph.push(crumbs);

  return graph;
}

/**
 * The JSON-LD payload for a page, as a string.
 *
 * This is rendered as a `<script type="application/ld+json">` element by
 * the page, rather than through `metadata.other`. Next.js renders the
 * `other` metadata map as `<meta>` elements, which is not where
 * structured data belongs and is not what a crawler reads.
 */
export function jsonLdScript(
  options: JsonLdOptions,
  siteUrl: string
): string | null {
  const graph = buildJsonLd(options, siteUrl);
  if (graph.length === 0) return null;

  return JSON.stringify(
    graph.length === 1 ? graph[0] : { '@context': 'https://schema.org', '@graph': graph }
  );
}

/**
 * The WebSite and SearchAction schema for the home page.
 */
export function websiteSchema(siteUrl: string, locale = 'en'): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'OudGuide',
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/${locale}/directory?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * The Organization schema for OudGuide portal.
 */
export function organizationSchema(siteUrl: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'OudGuide',
    url: siteUrl,
    logo: `${siteUrl}/icon.png`,
    description: 'The independent reference for natural agarwood, Dehn Al Oud and heritage attars.',
  };
}

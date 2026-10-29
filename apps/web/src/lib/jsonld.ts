import type { Article } from '../data/articles/types.ts';
import { resolveSources } from '../data/articles/sources.ts';
import { articleBreadcrumbs, articleTitle } from './articles.ts';
import {
  REVIEWER_REGISTER,
  articleSchemaAuthor,
} from './reviewer-register.ts';

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
  /**
   * The locale the call site already knows.
   *
   * The schema's inLanguage should come from the page's own locale
   * parameter, not be re-derived from the path string. The path-based
   * derivation stays as the fallback for callers that do not pass it, but
   * a caller that knows the locale passes it, so a path that ever
   * changes shape cannot silently flip the language claim.
   */
  locale?: string;
  /**
   * The hub's children, for an ItemList next to the page's Article schema.
   *
   * A hub index page lists its children — the products page its families,
   * the glossary its terms, the encyclopedia its sections — and an
   * Article schema says nothing about that list. The ItemList is built
   * from the same child array the page renders, so it cannot name a
   * child the page does not link to.
   */
  itemList?: Array<{
    label: string;
    href: string;
    /** The items under this one, for a nested index. */
    children?: Array<{ label: string; href: string }>;
  }> | null;
  /**
   * The DefinedTerm this page is about, for a glossary term page.
   *
   * A term page is a definition, not a story, and the schema type that
   * says that is DefinedTerm, with the glossary hub as its term set.
   * When one is passed, the term schema stands in for the Article
   * schema: a page should not claim to be both an article and a term.
   */
  definedTerm?: {
    name: string;
    description: string;
  } | null;
  /**
   * The FAQ Q&A pairs for an FAQPage schema.
   *
   * Extracted by RAG search and AI assistants to directly answer buyer
   * questions. Only real Q&As visible in the DOM qualify.
   */
  faq?: Array<{
    question: string;
    answer: string;
  }> | null;
  /**
   * The Dataset schema for an original data asset.
   *
   * Declares a structured, dated dataset such as the OudGuide price
   * observation baseline.
   */
  dataset?: {
    name: string;
    description: string;
    url?: string;
    license?: string;
    variableMeasured?: string[];
    datePublished?: string;
    dateModified?: string;
    /**
     * The absolute URL of the machine-readable file the dataset is served
     * at (the /data/[slug] route). When present, a distribution is
     * emitted, so a crawler fetching the Dataset knows where to read
     * the data rather than parsing the article's HTML.
     */
    downloadUrl?: string;
    /** The format the download is served in, for the distribution. */
    downloadFormat?: string;
  } | null;
  /**
   * The HowTo schema for an ordered procedure.
   *
   * The steps are built from the article's own rendered sections, so the
   * schema cannot name a step the page does not show. Additive: it
   * stacks next to the Article schema, it does not replace it.
   */
  howTo?: {
    name: string;
    description?: string;
    /** One HowToStep per rendered section, in order. */
    steps: string[];
  } | null;
  /**
   * The Service + Offer schema for a page that publishes a real, approved
   * price — currently only the membership page, where AED 1,200/year is
   * the one figure the page stands behind. The offer records exactly that
   * figure and its currency, and no availability claim, because the page
   * says checkout is not yet active.
   */
  service?: {
    name: string;
    description: string;
    /** The published price figure, as a number. */
    price?: number;
    /** ISO 4217 currency code of the published figure. */
    priceCurrency?: string;
  } | null;
  /**
   * The Product schema for a product-family page.
   *
   * A family page explains a FORMAT a buyer searches for — "oud wood", "oud
   * oil", beads — and the schema type that says that is Product. It is emitted
   * ADDITIVE to the Article schema, which carries the citation and author
   * machinery; the Product carries only the machine signal that the page is
   * about a product. No offers, no sku, no price and no availability: the
   * page publishes none, and a Product schema that invented them would be the
   * fake-signal class the module's opening rule forbids.
   */
  product?: {
    name: string;
    description?: string;
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
function articleSchema(
  options: JsonLdOptions,
  article: Article,
  siteUrl: string
): Record<string, unknown> {
  const sources = resolveSources(article.sourceIds);
  const language = options.locale ?? localeOf(options.path);
  const title = articleTitle(article, language);

  /**
   * The headline is the title, trimmed at a word boundary.
   *
   * The previous `title.slice(0, 110)` cut mid-word with no ellipsis —
   * the metadata layer already trims at word boundaries; the schema layer
   * did not. Slice to 107, drop the partial word, and add the ellipsis
   * only when something was actually cut, so a short title is published
   * verbatim rather than decorated.
   */
  const headline =
    title.length > 110
      ? `${title.slice(0, 107).replace(/\s+\S*$/, '').trimEnd()}…`
      : title;

  /**
   * Author is the named reviewer when the register carries one, and the
   * OudGuide organization otherwise.
   *
   * `articleSchemaAuthor` is the register this module's opening rule asks
   * for: it is the single place a real name may be introduced, and the
   * Person form carries only what the record carries — its own name and
   * role, no photo, URL or affiliation the record does not hold. While
   * the register is empty the organization remains the only accountable
   * entity the schema may honestly name.
   */
  const author = articleSchemaAuthor(REVIEWER_REGISTER, siteUrl);

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description: article.summary,
    inLanguage: language === 'ar' ? 'ar' : 'en',
    datePublished: article.reviewedOn,
    dateModified: article.reviewedOn,
    author,
    publisher: {
      '@type': 'Organization',
      name: 'OudGuide',
      url: `${siteUrl}/en/about`,
      logo: `${siteUrl}/icon.png`,
    },
    /**
     * The page this article describes. Without it a crawler has the
     * content and no address for it; the canonical the page itself
     * declares, so the two cannot drift.
     */
    mainEntityOfPage: { '@type': 'WebPage', url: `${siteUrl}${options.path}` },
    citation: sources.map((source) => ({
      '@type': 'CreativeWork',
      name: source.label,
      url: source.url,
      dateAccessed: source.retrievedOn,
    })),
    about: headline,
  };
}

/**
 * The DefinedTerm schema for a glossary term page.
 *
 * A term entry is a definition, and the schema type that says that is
 * DefinedTerm: the term's name, the direct answer as its description
 * (the definition is the page's lede, so the claim is visible), and the
 * glossary hub as the set the term is defined in.
 */
function definedTermSchema(
  options: JsonLdOptions,
  siteUrl: string
): Record<string, unknown> | null {
  const term = options.definedTerm;
  if (!term) return null;

  const language = options.locale ?? localeOf(options.path);
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: term.name,
    description: term.description,
    inDefinedTermSet: `${siteUrl}/${language === 'ar' ? 'ar' : 'en'}/glossary`,
    inLanguage: language === 'ar' ? 'ar' : 'en',
    mainEntityOfPage: { '@type': 'WebPage', url: `${siteUrl}${options.path}` },
  };
}

/**
 * The ItemList schema for a hub index page.
 *
 * Each item is one of the children the page actually links, from the same
 * array the page renders. The URLs are absolute: a relative item in an
 * ItemList is a URL a crawler has to guess at, and there is nothing to
 * guess — the child href already carries the locale prefix.
 *
 * An item may carry its own children, which is the encyclopedia index's
 * shape: the page draws a card per section and, under it, a card per
 * article in that section. Schema.org models that as a nested ItemList —
 * a ListItem whose `item` is itself an ItemList — so the structure the
 * page renders is the structure the schema declares.
 */
function itemListSchema(
  options: JsonLdOptions,
  siteUrl: string
): Record<string, unknown> | null {
  const items = options.itemList;
  if (!items || items.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      url: `${siteUrl}${item.href}`,
      ...(item.children && item.children.length > 0
        ? {
            item: {
              '@type': 'ItemList',
              numberOfItems: item.children.length,
              itemListElement: item.children.map((child, childIndex) => ({
                '@type': 'ListItem',
                position: childIndex + 1,
                name: child.label,
                url: `${siteUrl}${child.href}`,
              })),
            },
          }
        : {}),
    })),
  };
}

/**
 * The BreadcrumbList schema.
 *
 * A crumb href that does not carry the locale prefix is a latent 404:
 * the audit verified the five current call sites all pass locale-prefixed
 * crumbs, but the next caller has nothing to stop it passing `/products`
 * where `/en/products` is meant, and a schema then points a crawler at a
 * URL that answers 404 or redirects. The guard is the simplest correct
 * behavior — a bare path gets the locale the page itself is in, so a
 * crumb is always an absolute path of the same tree it renders in.
 */
function breadcrumbSchema(
  options: JsonLdOptions,
  siteUrl: string
): Record<string, unknown> | null {
  const crumbs = options.breadcrumbs;
  if (!crumbs || crumbs.length === 0) return null;

  const locale = options.locale ?? localeOf(options.path);

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      item: `${siteUrl}${crumb.href.startsWith(`/${locale}`) ? crumb.href : `/${locale}${crumb.href === '/' ? '' : crumb.href}`}`,
    })),
  };
}

/**
 * The Organization schema for a business profile page.
 *
 * Only the fields the page actually publishes are included. Contact
 * details are deliberately left out: the page shows them only for an
 * entitled record, and a schema that published them to a crawler would
 * defeat the contact projection. The `url` is the profile's own
 * canonical, so a crawler resolving the entity lands on the page it
 * describes and nowhere else.
 *
 * The type stays Organization rather than LocalBusiness: the page
 * publishes no physical address — location, origins and destinations
 * are business attributes, not a street address — and LocalBusiness
 * would be claiming a type whose core property the data does not carry.
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

/**
 * The FAQPage schema for pages rendering visible Q&As.
 */
function faqSchema(
  options: JsonLdOptions
): Record<string, unknown> | null {
  const faq = options.faq;
  if (!faq || faq.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

/**
 * The Dataset schema for structured data assets.
 */
function datasetSchema(
  options: JsonLdOptions,
  siteUrl: string
): Record<string, unknown> | null {
  const ds = options.dataset;
  if (!ds) return null;

  const language = options.locale ?? localeOf(options.path);

  const distribution: Record<string, unknown>[] = [];
  // When the dataset is also served as a stable file, say where, so a
  // crawler that wants the data fetches the file instead of parsing the
  // article. The description is what the record is, not a download.
  if (ds.downloadUrl) {
    distribution.push({
      '@type': 'Distribution',
      downloadUrl: ds.downloadUrl,
      downloadType: 'application/json',
      encodingFormat: ds.downloadFormat ?? 'application/json',
      ...(ds.license ? { license: ds.license } : {}),
      description: ds.description,
    });
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: ds.name,
    description: ds.description,
    url: ds.url ?? `${siteUrl}${options.path}`,
    ...(ds.license ? { license: ds.license } : {}),
    ...(ds.variableMeasured && ds.variableMeasured.length > 0
      ? { variableMeasured: ds.variableMeasured }
      : {}),
    ...(distribution.length > 0 ? { distribution } : {}),
    creator: {
      '@type': 'Organization',
      name: 'OudGuide',
      url: `${siteUrl}/en/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'OudGuide',
      url: `${siteUrl}/en/about`,
      logo: `${siteUrl}/icon.png`,
    },
    inLanguage: language === 'ar' ? 'ar' : 'en',
    datePublished: ds.datePublished ?? (options.article?.reviewedOn ?? '2026-10-26'),
    dateModified: ds.dateModified ?? (options.article?.reviewedOn ?? '2026-10-26'),
  };
}

/**
 * The HowTo schema for an ordered procedure.
 *
 * Each step is one of the page's own section headings, in order, so the
 * schema cannot name a step the page does not render. The full reasoning
 * for each step is in the Article schema that this stacks next to; the
 * HowTo only claims that the page is an ordered set of steps.
 */
function howToSchema(
  options: JsonLdOptions,
  siteUrl: string
): Record<string, unknown> | null {
  const howTo = options.howTo;
  if (!howTo || howTo.steps.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howTo.name,
    ...(howTo.description ? { description: howTo.description } : {}),
    url: `${siteUrl}${options.path}`,
    step: howTo.steps.map((name, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name,
    })),
  };
}

/**
 * The Service + Offer schema for a page that publishes a real, approved
 * price.
 *
 * Today that is only the membership page, where the published figure is
 * the one the page stands behind. The Offer records exactly that figure
 * and its currency; because the page says checkout is not yet active, the
 * Offer omits any availability claim rather than asserting one the page
 * does not make.
 */
function serviceSchema(
  options: JsonLdOptions,
  siteUrl: string
): Record<string, unknown> | null {
  const svc = options.service;
  if (!svc) return null;

  const offer: Record<string, unknown> = {
    '@type': 'Offer',
    url: `${siteUrl}${options.path}`,
    description: svc.description,
  };
  if (svc.price !== undefined && svc.priceCurrency) {
    offer.price = svc.price;
    offer.priceCurrency = svc.priceCurrency;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: svc.name,
    description: svc.description,
    url: `${siteUrl}${options.path}`,
    provider: {
      '@type': 'Organization',
      name: 'OudGuide',
      url: `${siteUrl}/en/about`,
    },
    offers: offer,
  };
}

function localeOf(path: string): string {
  return path.startsWith('/ar/') || path === '/ar' ? 'ar' : 'en';
}

/**
 * Build the JSON-LD graph for a page.
 *
 * A definedTerm and an article are two claims about the same page, and
 * only one of them is true: a glossary term is a definition, so its
 * DefinedTerm schema replaces the Article schema rather than joining it.
 * An ItemList is a third, additive claim — the page lists children —
 * and it stacks next to either of the others.
 */
export function buildJsonLd(
  options: JsonLdOptions,
  siteUrl: string
): Record<string, unknown>[] {
  const graph: Record<string, unknown>[] = [];

  if (options.definedTerm) {
    const term = definedTermSchema(options, siteUrl);
    if (term) graph.push(term);
  } else if (options.article) {
    graph.push(articleSchema(options, options.article, siteUrl));
  }

  if (options.dataset) {
    const ds = datasetSchema(options, siteUrl);
    if (ds) graph.push(ds);
  }

  if (options.howTo) {
    const ht = howToSchema(options, siteUrl);
    if (ht) graph.push(ht);
  }

  if (options.service) {
    const svc = serviceSchema(options, siteUrl);
    if (svc) graph.push(svc);
  }

  if (options.business) {
    const schema = businessSchema(options, siteUrl);
    if (schema) graph.push(schema);
  }

  if (options.product) {
    const product = productSchema(options, siteUrl);
    if (product) graph.push(product);
  }

  if (options.faq && options.faq.length > 0) {
    const faq = faqSchema(options);
    if (faq) graph.push(faq);
  }

  const items = itemListSchema(options, siteUrl);
  if (items) graph.push(items);

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
 * The Product schema for a product-family page.
 *
 * Stacked additively next to the Article schema by buildJsonLd. It claims
 * only that the page is about a product and names it; it carries no offers,
 * sku, price, availability or stock claim, because the family page publishes
 * none of them — price and availability belong to a supplier through the
 * RFQ, not to the format. A Product that asserted any of them would be
 * fabricating the very signals the module's opening rule forbids.
 */
function productSchema(
  options: JsonLdOptions,
  siteUrl: string
): Record<string, unknown> | null {
  const product = options.product;
  if (!product) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    ...(product.description ? { description: product.description } : {}),
    url: `${siteUrl}${options.path}`,
  };
}

/**
 * The Organization schema for OudGuide portal.
 *
 * `sameAs` lists OudGuide's own external profiles. The list starts empty
 * and is owner-filled: a sameAs URL must be a genuine OudGuide profile, and
 * a fabricated one would be the same class of defect the module's opening
 * rule forbids. Until a URL is added here it is not emitted.
 */
const SAME_AS: string[] = [];

export function organizationSchema(siteUrl: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'OudGuide',
    url: siteUrl,
    logo: `${siteUrl}/icon.png`,
    description: 'The independent reference for natural agarwood, Dehn Al Oud and heritage attars.',
    ...(SAME_AS.length > 0 ? { sameAs: SAME_AS } : {}),
  };
}

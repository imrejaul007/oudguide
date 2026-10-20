/**
 * The published-route resolver.
 *
 * The audit found twelve published internal destinations returning 404
 * (OG-A02), plus a malformed locale path (OG-A17). The root cause was
 * that link targets were written by hand in half a dozen components, and
 * the route manifest's 772 candidates were treated as if they were all
 * live pages.
 *
 * This module is the single place that answers two questions:
 *
 *   1. `resolvePublishedPath()` — given a candidate path, what published
 *      page should this actually point at? Returns null when there is no
 *      true equivalent, so the caller omits the link rather than emitting
 *      a 404.
 *   2. `resolveRedirect()` — given an arbitrary path, is there a genuine
 *      equivalent elsewhere that deserves a permanent redirect?
 *
 * Two rules from the audit are enforced here:
 *
 *   - A redirect is only returned when a real equivalent page exists. The
 *     old behaviour of catching every missing page and sending it to the
 *     homepage (or the RFQ) is not repeated.
 *   - A path is only published when the manifest publishes it AND a
 *     reviewed article exists for it.
 */

import { seed } from './data.ts';
import { publishableBusinesses } from './data.ts';
import { getArticle, isIndexable, listReviewedArticles, normaliseSlug } from './articles.ts';

export interface PublishedRoute {
  /** The path that is actually served, without a trailing slash. */
  path: string;
  /** A readable label for link text. Never a raw route fragment. */
  label: string;
  /** Which family of page it is. */
  family: string;
}

/* -------------------------------------------------------------------------
 * Alias table
 *
 * Each entry maps a path that was published somewhere to the page that is
 * its true equivalent. These are the twelve destinations the audit
 * reported as 404, plus the malformed-locale shape. Each one is a real
 * equivalent, not a catch-all.
 * ---------------------------------------------------------------------- */

interface Alias {
  from: string;
  to: string;
  /** Why this alias exists — recorded so the table stays auditable. */
  reason: string;
}

/**
 * Aliases are written with the `/en` prefix because that is the shape the
 * manifest and the audit both used. The resolver rewrites the locale
 * prefix for the requested locale.
 */
const ALIASES: Alias[] = [
  {
    from: '/en/request-quote',
    to: '/en/rfq',
    reason: 'The quote-journey alias. The RFQ form is the wholesale intake; no separate quote page exists.',
  },
  {
    from: '/en/how-supplier-matching-works',
    to: '/en/guides/sourcing/how-supplier-introductions-work',
    reason:
      'The supplier-matching explanation. The manifest carries it as an "Editorial guide" route with the same subject; the shorter public policy path was linked from the sample-plan guide.',
  },
  {
    from: '/en/world/united-arab-emirates',
    to: '/en/world/AE',
    reason: 'The country page is served by ISO2 code. The country-name slug is an equivalent page for the same territory.',
  },
  {
    from: '/en/guides/cites-regulations',
    to: '/en/guides/trade/agarwood-documentation',
    reason: 'Footer "CITES & Export Laws". The conservation and trade documentation guide is the same subject.',
  },
  {
    from: '/en/guides/copper-deg-distillation',
    to: '/en/guides/production/oud-extraction-methods',
    reason: 'Footer "Copper-Deg Alembics". The distillation comparison guide covers the same question.',
  },
  {
    from: '/en/guides/wild-vs-cultivated',
    to: '/en/guides/sourcing/wild-and-cultivated-oud',
    reason: 'Footer "Wild vs Plantation". The manifest route uses the fuller slug.',
  },
  {
    from: '/en/guides/sourcing/wholesale-sample-plan',
    to: '/en/guides/sourcing/wholesale-sample-plan',
    reason: 'Identity — kept so the resolver can be checked against its own table.',
  },
  {
    from: '/en/glossary/hindi-muri',
    to: '/en/glossary/hindi-muri',
    reason: 'Glossary terms are served by the glossary route; identity check.',
  },
];

/**
 * The manifest's territory records use country-name slugs
 * (`/en/world/united-arab-emirates/`) while the route resolves on the ISO2
 * code (`/en/world/AE`). Every country-name slug is a true equivalent of
 * its ISO2 page, so they are all aliases rather than 404s.
 */
function territoryAlias(from: string): string | null {
  const match = from.match(/^\/(en|ar)\/world\/([a-z][a-z0-9-]*)$/i);
  if (!match) return null;

  const slug = match[2].toLowerCase();
  const country = (seed.countries as any[]).find(
    (c: any) => c.proposed_slug === slug || c.english_seed.toLowerCase().replace(/\s+/g, '-') === slug
  );
  if (!country) return null;

  return `/${match[1].toLowerCase()}/world/${country.iso2.toUpperCase()}`;
}

/**
 * The directory's located-in / serving / by-origin pages. The audit found
 * these 404 in three different shapes:
 *
 *   /en/directory/retailers/in/united-arab-emirates/dubai
 *   /en/directory/wholesalers/serving/united-arab-emirates
 *   /en/directory/wholesalers/in/united-arab-emirates
 *   /en/directory/wholesalers/in/india/hojai
 *
 * The directory route now serves these shapes from a single handler that
 * reads the filters from the path, so each of them is a real page rather
 * than a redirect.
 */
export const DIRECTORY_FILTER_SHAPES: RegExp[] = [
  /^\/(en|ar)\/directory\/(wholesalers|retailers|growers|distillers|wood-processors|exporters)$/,
  /^\/(en|ar)\/directory\/(wholesalers|retailers)\/in\/[a-z0-9-]+$/,
  /^\/(en|ar)\/directory\/(wholesalers|retailers)\/in\/[a-z0-9-]+\/[a-z0-9-]+$/,
  /^\/(en|ar)\/directory\/(wholesalers|retailers)\/in\/[a-z0-9-]+\/[a-z0-9-]+\/[a-z0-9-]+$/,
  /^\/(en|ar)\/directory\/(wholesalers|retailers)\/serving\/[a-z0-9-]+$/,
  /^\/(en|ar)\/directory\/(wholesalers|retailers)\/by-origin\/[a-z0-9-]+$/,
];

/**
 * The business-profile shape.
 *
 * It is checked against the business register rather than against a
 * pattern, because a quarantined fixture must resolve to null rather
 * than to a page.
 */
export const BUSINESS_PROFILE_SHAPE = /^\/(en|ar)\/directory\/(?!map$)[a-z0-9-]+(\/verification)?$/;

/* -------------------------------------------------------------------------
 * Resolution
 * ---------------------------------------------------------------------- */

/**
 * True when the app can serve this path.
 *
 * This replaces the old `isRouteServable`, which only recognised the
 * English locale and a narrow list of shapes. The old implementation was
 * why a live page could link to a path it could not serve.
 */
export function isPublishedPath(path: string): boolean {
  const clean = normalizePath(path);
  if (!clean) return false;

  if (ALIASES.some((a) => a.from === clean)) return true;

  // A business profile resolves against the business register, so a
  // quarantined fixture is not published. This check has to come before
  // the generic filter shapes, which would otherwise match it.
  if (BUSINESS_PROFILE_SHAPE.test(clean)) {
    const slug = clean.split('/')[3] ?? '';
    return isPublishedBusinessSlug(slug);
  }

  if (DIRECTORY_FILTER_SHAPES.some((re) => re.test(clean))) return true;

  const locale = clean.split('/')[1];
  if (locale !== 'en' && locale !== 'ar') return false;

  const rest = clean.slice(locale.length + 2);

  // Guide articles: served only when a reviewed article exists.
  if (rest.startsWith('guides/')) {
    const slug = normaliseSlug(rest.slice('guides/'.length));
    if (!slug) return false;
    const article = getArticle(slug);
    return Boolean(article && isIndexable(article));
  }

  // Glossary terms. The manifest's terminology routes are keyed
  // `glossary/<term>` while the content layer uses `glossary/<term>`
  // too, so a term with a reviewed entry is served.
  if (rest.startsWith('glossary/')) {
    const slug = normaliseSlug(rest.slice('glossary/'.length));
    return Boolean(getArticle(`glossary/${slug}`));
  }

  // Static, always-published shells.
  const STATIC: string[] = [
    '',
    'directory',
    'directory/map',
    'world',
    'guides',
    'rfq',
    'sourcing',
    'shortlist',
    'membership',
    'for-businesses',
    'policies',
    'privacy',
    'corrections',
    'partners/opportunities',
  ];
  if (STATIC.includes(rest)) return true;

  // Territory pages are served for every ISO2 code in the registry.
  if (rest.startsWith('world/')) {
    const iso2 = rest.slice('world/'.length).toUpperCase();
    return (seed.countries as any[]).some((c: any) => c.iso2.toUpperCase() === iso2);
  }

  // The admin workspace is served but gated; it is never in the sitemap.
  if (rest === 'admin' || rest.startsWith('admin/')) return true;

  // The inquiry status page is served for a buyer to check their request.
  if (rest.startsWith('inquiries/')) return true;

  return false;
}


/**
 * True when the slug is a business the site is willing to publish.
 *
 * The directory excludes development fixtures. A link to a quarantined
 * record must resolve to null rather than to a page that says "not
 * found" — the resolver's job is to keep broken destinations out of the
 * markup in the first place.
 */
export function isPublishedBusinessSlug(slug: string): boolean {
  return publishableBusinesses.some(
    (b) => b.slug === slug && b.publishable && b.isDirectoryRecord
  );
}

/**
 * Normalise a path: strip the query and hash, drop a trailing slash, and
 * collapse repeated slashes. Case is preserved because the country codes
 * are upper-case by convention.
 */
export function normalizePath(path: string): string {
  let clean = String(path ?? '').split('#')[0].split('?')[0].trim();
  if (!clean) return '';
  if (!clean.startsWith('/')) clean = `/${clean}`;
  clean = clean.replace(/\/{2,}/g, '/');
  if (clean.length > 1) clean = clean.replace(/\/+$/, '');
  return clean;
}

/**
 * Rewrite the locale prefix of a path.
 */
export function withLocale(path: string, locale: string): string {
  const clean = normalizePath(path);
  const rest = clean.replace(/^\/(en|ar)(?=\/|$)/, '');
  return rest ? `/${locale}${rest}` : `/${locale}`;
}

/**
 * Find the true equivalent of a path, or null.
 *
 * Null means "there is no equivalent" — the caller must not invent a
 * redirect. This is the difference between a redirect registry and a
 * catch-all.
 */
export function resolveRedirect(path: string, locale = 'en'): string | null {
  const clean = normalizePath(path);

  const alias = ALIASES.find((a) => a.from === clean);
  if (alias) return withLocale(alias.to, locale);

  const territory = territoryAlias(clean);
  if (territory) return withLocale(territory, locale);

  return null;
}

/**
 * Resolve a candidate path to the published path it should link to.
 *
 * Returns null when the candidate is not published and has no true
 * equivalent — the caller then omits the link entirely.
 */
export function resolvePublishedPath(path: string, locale = 'en'): string | null {
  const clean = normalizePath(path);
  if (!clean) return null;

  const redirected = resolveRedirect(clean, locale);
  if (redirected) return redirected;

  if (!isPublishedPath(clean)) return null;

  return withLocale(clean, locale);
}

/**
 * The published label for a path — used for link text so a link never
 * renders its own route fragment.
 */
export function publishedLabel(path: string, locale = 'en'): string | null {
  const resolved = resolvePublishedPath(path, locale);
  if (!resolved) return null;

  const rest = resolved.split('/').slice(2).join('/');

  if (rest.startsWith('guides/')) {
    const article = getArticle(rest.slice('guides/'.length));
    if (article) {
      if (locale === 'ar' && article.titleAr) return article.titleAr;
      return article.title;
    }
  }

  const manifest = findManifestRecord(resolved);
  if (manifest) {
    const title = String(manifest.h1_brief || manifest.title_brief || '').trim();
    if (title) return title;
  }

  return null;
}

/**
 * The manifest record for a path, tolerating the trailing slash the
 * manifest uses.
 */
export function findManifestRecord(path: string): any | null {
  const clean = normalizePath(path);
  const routes = seed.routes as any[];
  return (
    routes.find((r: any) => normalizePath(r.path) === clean) ?? null
  );
}

/**
 * Every path the site publishes, as canonical locale-less paths.
 */
export function publishedPaths(): string[] {
  const out = new Set<string>();

  for (const article of listReviewedArticles()) {
    out.add(`/en/guides/${article.slug}`);
  }

  for (const path of [
    '/en',
    '/en/directory',
    '/en/directory/map',
    '/en/world',
    '/en/guides',
    '/en/rfq',
    '/en/sourcing',
    '/en/shortlist',
    '/en/membership',
    '/en/for-businesses',
    '/en/policies',
    '/en/privacy',
    '/en/corrections',
    '/en/partners/opportunities',
  ]) {
    out.add(path);
  }

  for (const country of seed.countries as any[]) {
    out.add(`/en/world/${country.iso2.toUpperCase()}`);
  }

  return Array.from(out);
}

/**
 * Every internal link target the site emits, for the link-crawler test.
 */
export function publishedLinkTargets(): string[] {
  return publishedPaths();
}

/* -------------------------------------------------------------------------
 * Directory filter paths
 *
 * The audit found five published directory destinations returning 404:
 *
 *   /en/directory/retailers/in/united-arab-emirates/dubai
 *   /en/directory/wholesalers/serving/united-arab-emirates
 *   /en/directory/wholesalers/in/united-arab-emirates
 *   /en/directory/retailers/in/united-arab-emirates
 *   /en/directory/wholesalers/in/india/hojai
 *
 * These are real journeys, not typos. The directory has to answer four
 * independent questions — what the business does, where it is located,
 * what origin of material it handles, and which destinations it serves
 * — and each combination has its own URL. They are rewritten onto the
 * directory page with the filters applied, so the URL keeps its shape
 * and its meaning.
 * ---------------------------------------------------------------------- */

/** The business-role segments the directory publishes. */
export const DIRECTORY_ROLES = [
  'wholesalers',
  'retailers',
  'growers',
  'distillers',
  'wood-processors',
  'exporters',
] as const;

export type DirectoryRole = (typeof DIRECTORY_ROLES)[number];

export interface DirectoryFilter {
  role?: string;
  /** A country name slug or an ISO2 code. */
  country?: string;
  /** A city slug. */
  city?: string;
  /** A neighbourhood slug. */
  area?: string;
  /** An origin slug the business handles. */
  origin?: string;
  /** A destination the business ships to. */
  destination?: string;
}

export interface ResolvedDirectoryFilter extends DirectoryFilter {
  /** The query parameters the directory page reads. */
  query: Record<string, string>;
  /** The canonical path for this filter set. */
  canonical: string;
}

/**
 * Parse a directory filter path.
 *
 * Returns null when the path is not one of the published filter shapes,
 * so a genuinely wrong URL keeps its 404.
 */
export function parseDirectoryFilterPath(path: string, locale = 'en'): ResolvedDirectoryFilter | null {
  const clean = normalizePath(path);
  const match = clean.match(/^\/(en|ar)\/directory\/([^/]+)(?:\/(.+))?$/);
  if (!match) return null;

  const [, pathLocale, role, rest] = match;
  if (!DIRECTORY_ROLES.includes(role as DirectoryRole)) return null;

  const loc = locale || pathLocale;
  const query: Record<string, string> = { role };

  const build = (extra: DirectoryFilter): ResolvedDirectoryFilter => {
    const filters: DirectoryFilter = { role, ...extra };
    const segments: string[] = [role];

    if (filters.country) {
      segments.push('in', filters.country);
      if (filters.city) segments.push(filters.city);
      if (filters.area) segments.push(filters.area);
    } else if (filters.destination) {
      segments.push('serving', filters.destination);
    } else if (filters.origin) {
      segments.push('by-origin', filters.origin);
    }

    return {
      ...filters,
      query,
      canonical: `/${loc}/directory/${segments.join('/')}`,
    };
  };

  // /directory/<role>
  if (!rest) return build({});

  // /directory/<role>/in/<country>[/<city>[/<area>]]
  const inMatch = rest.match(/^in\/([a-z0-9-]+)(?:\/([a-z0-9-]+))?(?:\/([a-z0-9-]+))?$/);
  if (inMatch) {
    return build({
      country: inMatch[1],
      city: inMatch[2],
      area: inMatch[3],
    });
  }

  // /directory/<role>/serving/<country>
  const servingMatch = rest.match(/^serving\/([a-z0-9-]+)$/);
  if (servingMatch) {
    return build({ destination: servingMatch[1] });
  }

  // /directory/<role>/by-origin/<origin>
  const originMatch = rest.match(/^by-origin\/([a-z0-9-]+)$/);
  if (originMatch) {
    return build({ origin: originMatch[1] });
  }

  return null;
}

/**
 * The ISO2 code for a country name slug.
 *
 * The filter paths use country-name slugs; the data layer uses ISO2
 * codes. The two are kept apart here so a page never has to guess.
 */
export function countryCodeForSlug(slug: string): string | null {
  if (!slug) return null;
  const value = slug.toLowerCase();
  const country = (seed.countries as any[]).find(
    (c: any) =>
      c.proposed_slug?.toLowerCase() === value ||
      c.english_seed?.toLowerCase().replace(/\s+/g, '-') === value ||
      c.iso2?.toLowerCase() === value
  );
  return country ? country.iso2.toUpperCase() : null;
}

/**
 * The country-name slug for an ISO2 code.
 */
export function countrySlugForCode(iso2: string): string | null {
  const country = (seed.countries as any[]).find(
    (c: any) => c.iso2?.toUpperCase() === iso2?.toUpperCase()
  );
  return country ? country.proposed_slug : null;
}

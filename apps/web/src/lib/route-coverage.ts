import { seed } from './data';

/**
 * Route coverage — the single source of truth for which manifest routes
 * the app actually serves.
 *
 * The manifest publishes 772 routes, but the app only implements a subset
 * of the route shapes. Publishing the rest produced 572 sitemap URLs that
 * returned 404, which is the worst possible signal to a search engine: a
 * sitemap is an explicit promise that every URL in it resolves.
 *
 * This module answers one question — "is this manifest path servable?" —
 * and the sitemap, the world index and the territory browser all use it so
 * they can never disagree.
 */

/** Route shapes the app implements under `[locale]`. */
const IMPLEMENTED_PATTERNS: RegExp[] = [
  // /en
  /^\/en\/$/,
  // /en/guides/<any depth> — served by the catch-all
  /^\/en\/guides\/.+/,
  // /en/directory
  /^\/en\/directory\/$/,
  // /en/directory/<business-slug>
  /^\/en\/directory\/[a-z0-9-]+$/,
  // /en/world
  /^\/en\/world\/$/,
  // /en/world/<ISO2>
  /^\/en\/world\/[A-Z]{2}\/$/,
  // Standalone utility pages
  /^\/en\/corrections\/$/,
  /^\/en\/membership\/$/,
  /^\/en\/privacy\/$/,
  /^\/en\/policies\/$/,
  /^\/en\/rfq\/$/,
  /^\/en\/sourcing\/$/,
  /^\/en\/shortlist\/$/,
  /^\/en\/for-businesses\/$/,
  /^\/en\/partners\/opportunities\/$/,
];

/**
 * True when the app can serve this manifest path.
 *
 * The guide catch-all resolves on the slug, so a path is servable when a
 * manifest record with that exact path exists — that is how the catch-all
 * finds it. Every other shape is matched against the implemented patterns.
 */
export function isRouteServable(path: string): boolean {
  if (!path.startsWith('/en/')) return false;

  // The guides catch-all: servable when the manifest has a record for it.
  if (/^\/en\/guides\/.+/.test(path)) {
    return !!findRouteRecord(path);
  }

  return IMPLEMENTED_PATTERNS.some((re) => re.test(path));
}

/** Find the manifest record for a path, tolerating the trailing slash. */
export function findRouteRecord(path: string): any | null {
  const routes = seed.routes as any[];
  const withSlash = path.endsWith('/') ? path : `${path}/`;
  const withoutSlash = path.endsWith('/') ? path.slice(0, -1) : path;

  return (
    routes.find((r: any) => r.path === withSlash || r.path === withoutSlash) ?? null
  );
}

/** Every manifest route the app can serve. */
export function servableRoutes(): any[] {
  return (seed.routes as any[]).filter((r: any) => isRouteServable(r.path));
}

/** Every manifest route the app cannot serve — these must not be published. */
export function unservableRoutes(): any[] {
  return (seed.routes as any[]).filter((r: any) => !isRouteServable(r.path));
}

/**
 * The canonical URL for a territory.
 *
 * The manifest publishes territories as `/en/world/afghanistan/` (a
 * country-name slug), but the route resolves on the ISO2 code — so those
 * 249 URLs could never match and always 404'd. The ISO2 form is the one
 * the app actually serves, so it is the canonical one.
 */
export function territoryPath(iso2: string): string {
  return `/en/world/${iso2.toUpperCase()}/`;
}

/**
 * Build a page description from the manifest.
 *
 * `meta_description_brief` is an instruction to a writer ("Describe the
 * actual editorial guide scope, its useful evidence/results and next
 * action; do not claim verified suppliers…"), not a description. Putting
 * it verbatim into a meta description would publish editorial instructions
 * to search engines, so it is used as guidance and the description is
 * composed from the record's own intent and title instead.
 */
export function pageDescription(record: any): string {
  if (!record) return '';
  const intent = String(record.primary_intent || '').trim();
  const title = String(record.h1_brief || record.title_brief || '').trim();

  if (!intent) return title;

  // The intent is a lowercase phrase describing the page's purpose.
  const sentence = intent.charAt(0).toUpperCase() + intent.slice(1);
  const base = `${sentence} — part of the OudGuide reference on natural oud, agarwood and fragrance sourcing.`;

  return base.length > 158 ? `${base.slice(0, 155).trimEnd()}…` : base;
}

/**
 * A page title.
 *
 * `h1_brief` averages 35 characters, which is inside the 30-65 target.
 * The site name is appended so the title reads as a page title rather than
 * a bare headline.
 */
export function pageTitle(record: any, siteName = 'OudGuide'): string {
  if (!record) return siteName;
  const title = String(record.h1_brief || record.title_brief || '').trim();
  if (!title) return siteName;
  return `${title} · ${siteName}`;
}

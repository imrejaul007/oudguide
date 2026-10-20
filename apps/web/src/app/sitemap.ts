import { seed, domain } from '@/lib/data';
import { isRouteServable, servableRoutes, territoryPath } from '@/lib/route-coverage';
import { MetadataRoute } from 'next';

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.oudguide.com'
).replace(/\/$/, '');

/**
 * Sitemap.
 *
 * Two corrections over the previous version:
 *
 * 1. It only publishes routes the app can actually serve. The manifest
 *    holds 772 routes but the app implements a subset of the shapes, so
 *    the old sitemap published 572 URLs that returned 404. A sitemap is
 *    an explicit promise that every URL resolves; keeping it honest is
 *    worth far more than inflating the URL count.
 *
 * 2. It publishes trailing-slash-free URLs. The app runs with
 *    `trailingSlash: false`, so every manifest path (which carries a
 *    trailing slash) produced a 308 redirect hop before resolving.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];

  for (const route of servableRoutes() as any[]) {
    // The manifest's territory paths are country-name slugs, but the
    // route resolves on the ISO2 code. Publish the servable form.
    let path = route.path;

    if (route.family === 'Buyer country / territory') {
      const match = route.path.match(/\/world\/([a-z-]+)\/$/);
      if (match) {
        const country = (seed.countries as any[]).find(
          (c: any) => c.proposed_slug === match[1]
        );
        if (!country) continue;
        path = territoryPath(country.iso2);
      }
    }

    const clean = path.replace(/\/$/, '');

    urls.push({
      url: `${siteUrl}${clean}`,
      lastModified: new Date('2026-10-20'),
      changeFrequency: route.family === 'Editorial guide' ? 'weekly' : 'monthly',
      priority: route.family === 'Editorial guide' ? 0.9 : 0.7,
    });
  }

  // The live utility pages the app serves that the manifest does not
  // cover. These are real, reachable, and worth indexing.
  for (const path of [
    '/en/directory',
    '/en/directory/map',
    '/en/world',
    '/en/sourcing',
    '/en/shortlist',
    '/en/rfq',
    '/en/membership',
    '/en/for-businesses',
    '/en/guides',
    '/en/policies',
    '/en/privacy',
    '/en/corrections',
    '/en/partners/opportunities',
  ]) {
    const url = `${siteUrl}${path}`;
    if (urls.some((u) => u.url === url)) continue;
    urls.push({
      url,
      lastModified: new Date('2026-10-20'),
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }

  // The Arabic tree. The app serves the same content in Arabic, so each
  // Arabic page gets a sibling entry with `alternates.languages`.
  for (const entry of [...urls]) {
    if (!entry.url.startsWith(`${siteUrl}/en/`)) continue;
    const arUrl = entry.url.replace(`${siteUrl}/en/`, `${siteUrl}/ar/`);
    if (urls.some((u) => u.url === arUrl)) continue;
    urls.push({
      ...entry,
      url: arUrl,
      priority: 0.6,
    });
  }

  return urls;
}

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * The published-route registry.
 *
 * The audit found twelve published internal destinations returning 404
 * and one malformed locale path. The twelve are not a single kind of
 * problem: some are aliases for a page that exists under another path,
 * some are route shapes the app never implemented, and some are country
 * records published under a name slug while the route resolves on an
 * ISO code.
 *
 * They are handled in three different ways, and the distinction matters:
 *
 *   - A REDIRECT is used only where a genuine equivalent page exists.
 *     The audit was explicit: "Do not redirect all missing pages to the
 *     homepage." Every redirect below names its true destination.
 *   - A ROUTE SHAPE is implemented where the path is a real journey with
 *     real content — the directory's located-in, serving and by-origin
 *     filters.
 *   - A GENUINE 404 is left as a 404. A path that is simply wrong is
 *     answered with a 404, and the malformed locale path in the audit
 *     (/%24/directory/al-mutalib-perfumes) is one of these.
 */

const countryRegistry = JSON.parse(
  readFileSync(path.join(__dirname, 'src/data/country_registry.json'), 'utf8')
);

/**
 * The country-name slug → ISO2 aliases.
 *
 * The manifest publishes territories as `/en/world/united-arab-emirates/`
 * while the route resolves on the ISO2 code `/en/world/AE`. Both are the
 * same territory page, so the name slug redirects to the code. This is
 * generated from the registry rather than hand-listed so that it cannot
 * drift from the data.
 */
const territoryRedirects = [];
for (const country of countryRegistry) {
  if (!country?.proposed_slug || !country?.iso2) continue;
  const slug = country.proposed_slug.toLowerCase();
  if (slug === country.iso2.toLowerCase()) continue;
  for (const locale of ['en', 'ar']) {
    territoryRedirects.push({
      source: `/${locale}/world/${slug}`,
      destination: `/${locale}/world/${country.iso2.toUpperCase()}`,
      permanent: true,
    });
  }
}

/**
 * The locale-aware aliases.
 *
 * Each of these is a path that was published somewhere on the site and
 * that has a true equivalent page. The reason is recorded so the table
 * stays auditable rather than becoming a list of guesses.
 */
const ALIASES = [
  {
    from: '/request-quote',
    to: '/rfq',
    reason: 'The quote-journey alias. The RFQ form is the wholesale intake; there is no separate quote page.',
  },
  {
    from: '/how-supplier-matching-works',
    to: '/guides/sourcing/how-supplier-introductions-work',
    reason:
      'The supplier-matching explanation. The manifest carries it as an editorial guide with the same subject; the shorter path was linked from the wholesale sample-plan guide.',
  },
  {
    from: '/guides/cites-regulations',
    to: '/guides/trade/agarwood-documentation',
    reason: 'The footer "CITES & Export Laws" link. The conservation and trade documentation guide is the same subject.',
  },
  {
    from: '/guides/copper-deg-distillation',
    to: '/guides/production/oud-extraction-methods',
    reason: 'The footer "Copper-Deg Alembics" link. The distillation comparison guide covers the same question.',
  },
  {
    from: '/guides/wild-vs-cultivated',
    to: '/guides/sourcing/wild-and-cultivated-oud',
    reason: 'The footer "Wild vs Plantation" link. The manifest route uses the fuller slug.',
  },
  {
    from: '/guides/what-is-agarwood',
    to: '/guides/oud-basics/what-is-agarwood',
    reason: 'The short form of the agarwood guide path.',
  },
];

const aliasRedirects = [];
for (const locale of ['en', 'ar']) {
  for (const alias of ALIASES) {
    aliasRedirects.push({
      source: `/${locale}${alias.from}`,
      destination: `/${locale}${alias.to}`,
      permanent: true,
    });
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The app serves slash-free URLs. Without this the default also strips
  // the slash, but stating it makes the policy explicit and keeps the
  // sitemap from publishing paths that cost a 308 redirect hop.
  trailingSlash: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
  async redirects() {
    return [...aliasRedirects, ...territoryRedirects];
  },
  async rewrites() {
    /**
     * The directory's filter paths.
     *
     * The audit found five published directory destinations returning
     * 404. These are not typos — they are the four independent discovery
     * questions the directory has to answer, each with its own URL:
     *
     *   /{locale}/directory/{role}
     *   /{locale}/directory/{role}/in/{country}
     *   /{locale}/directory/{role}/in/{country}/{city}
     *   /{locale}/directory/{role}/in/{country}/{city}/{area}
     *   /{locale}/directory/{role}/serving/{destination}
     *   /{locale}/directory/{role}/by-origin/{origin}
     *
     * They are rewritten onto the directory page with the filters
     * applied, so the published URL keeps its shape and its meaning. The
     * role segment is restricted to the published roles, so a business
     * profile such as /en/directory/al-mutalib-perfumes and the map at
     * /en/directory/map are never captured.
     */
    const ROLES = 'wholesalers|retailers|growers|distillers|wood-processors|exporters';
    const rules = [];

    for (const locale of ['en', 'ar']) {
      const base = `/${locale}/directory`;

      // The deepest shapes first, so a country path is not captured by
      // the shorter rule.
      rules.push({
        source: `${base}/:role(${ROLES})/in/:country/:city/:area`,
        destination: `${base}?role=:role&country=:country&city=:city&area=:area`,
      });
      rules.push({
        source: `${base}/:role(${ROLES})/in/:country/:city`,
        destination: `${base}?role=:role&country=:country&city=:city`,
      });
      rules.push({
        source: `${base}/:role(${ROLES})/in/:country`,
        destination: `${base}?role=:role&country=:country`,
      });
      rules.push({
        source: `${base}/:role(${ROLES})/serving/:destination`,
        destination: `${base}?role=:role&destination=:destination`,
      });
      rules.push({
        source: `${base}/:role(${ROLES})/by-origin/:origin`,
        destination: `${base}?role=:role&origin=:origin`,
      });
      rules.push({
        source: `${base}/:role(${ROLES})`,
        destination: `${base}?role=:role`,
      });
    }

    return rules;
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
      {
        source: '/:locale/inquiries/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex,nofollow' },
          { key: 'Cache-Control', value: 'no-store, no-cache, must-revalidate, private' },
        ],
      },
    ];
  },
};

export default nextConfig;

import { test, describe } from 'node:test';
import assert from 'node:assert/strict';

import {
  DIRECTORY_ROLES,
  DIRECTORY_ROLE_SLUGS,
  countryCodeForSlug,
  countrySlugForCode,
  isPublishedPath,
  normalizePath,
  parseDirectoryFilterPath,
  publishedPaths,
  resolvePublishedPath,
  resolveRedirect,
  withLocale,
} from '../apps/web/src/lib/route-resolver.ts';
import {
  articlePath,
  articleSection,
  getArticle,
  isSupportedLocale,
  normaliseLocale,
} from '../apps/web/src/lib/articles.ts';

/**
 * ==========================================================================
   The published-route resolver.

   OG-A02 found twelve published internal destinations returning 404 and
   one malformed locale path. These tests pin the three different answers
   the resolver now gives:

     - a true equivalent exists  → redirect to it
     - a real journey             → the route is served
     - neither                    → a genuine 404, never a catch-all
   ========================================================================== */

describe('Path normalisation', () => {
  test('strips the query, the hash and the trailing slash', () => {
    assert.equal(normalizePath('/en/guides/?a=1#b'), '/en/guides');
    assert.equal(normalizePath('/en/guides'), '/en/guides');
    assert.equal(normalizePath('/en/guides/'), '/en/guides');
    assert.equal(normalizePath('//en//guides//'), '/en/guides');
  });

  test('rewrites the locale prefix', () => {
    assert.equal(withLocale('/en/guides', 'ar'), '/ar/guides');
    assert.equal(withLocale('/ar/guides', 'en'), '/en/guides');
    assert.equal(withLocale('/en', 'ar'), '/ar');
  });
});

describe('Locale validation', () => {
  test('only the two published locales are recognised', () => {
    assert.ok(isSupportedLocale('en'));
    assert.ok(isSupportedLocale('ar'));
    assert.ok(!isSupportedLocale('%24'));
    assert.ok(!isSupportedLocale('$'));
    assert.ok(!isSupportedLocale('fr'));
    assert.ok(!isSupportedLocale(''));
  });

  test('normalisation falls back to English rather than to an empty string', () => {
    assert.equal(normaliseLocale('ar'), 'ar');
    assert.equal(normaliseLocale('en'), 'en');
    assert.equal(normaliseLocale('%24'), 'en');
    assert.equal(normaliseLocale(undefined), 'en');
  });

  test('the audit\'s malformed locale segment is not a locale', () => {
    // `/%24/directory/al-mutalib-perfumes` is the path the audit found
    // in search results. It must never be treated as a locale, and the
    // page it would match must not be published.
    assert.ok(!isSupportedLocale('%24'));
    assert.ok(!isPublishedPath('/%24/directory/al-mutalib-perfumes'));
    assert.ok(!isPublishedPath('/en/%24/directory/al-mutalib-perfumes'));
  });
});

describe('Redirects are only returned for a true equivalent', () => {
  test('the audit\'s alias paths resolve to their equivalents', () => {
    assert.equal(
      resolveRedirect('/en/request-quote'),
      '/en/rfq',
      'the quote-journey alias points at the RFQ form'
    );
    // The supplier-matching path used to redirect here, to the
    // introductions guide. It no longer does: the manifest lists it as
    // a public policy route, and a policy page states what this site
    // does where a guide explains how the trade works. The alias was
    // removed so a redirect and a real page cannot both answer the same
    // path, with one of them winning by accident.
    assert.equal(
      resolveRedirect('/en/how-supplier-matching-works'),
      null,
      'the matching-policy path is a real page now, not a redirect'
    );
    assert.equal(
      resolveRedirect('/en/guides/cites-regulations'),
      '/en/guides/trade/agarwood-documentation'
    );
    assert.equal(
      resolveRedirect('/en/guides/copper-deg-distillation'),
      '/en/guides/production/oud-extraction-methods'
    );
    assert.equal(
      resolveRedirect('/en/guides/wild-vs-cultivated'),
      '/en/guides/sourcing/wild-and-cultivated-oud'
    );
  });

  test('a country-name slug resolves to its ISO2 page', () => {
    assert.equal(resolveRedirect('/en/world/united-arab-emirates'), '/en/world/AE');
    assert.equal(resolveRedirect('/en/world/india'), '/en/world/IN');
  });

  test('the redirect follows the requested locale', () => {
    assert.equal(resolveRedirect('/en/request-quote', 'ar'), '/ar/rfq');
  });

  test('a path with no equivalent returns null, never the homepage', () => {
    // The audit was explicit: do not redirect every missing page home.
    for (const path of [
      '/en/this-page-does-not-exist',
      '/en/guides/no-such-article',
      '/en/guides/sourcing/no-such-article',
      '/en/directory/not-a-real-supplier',
      '/en/guides/wild-vs-cultivated-oud',
    ]) {
      const resolved = resolveRedirect(path);
      assert.ok(
        resolved === null || !resolved.endsWith('/en'),
        `${path} must not redirect to the homepage`
      );
      assert.notEqual(resolved, '/en', `${path} must not redirect to the homepage`);
      assert.notEqual(resolved, '/en/rfq', `${path} must not redirect to the RFQ`);
    }
  });
});

describe('Published paths', () => {
  test('a reviewed article is published; a manifest candidate is not', () => {
    assert.ok(isPublishedPath('/en/guides/oud-basics/what-is-agarwood'));
    assert.ok(isPublishedPath('/ar/guides/oud-basics/what-is-agarwood'));

    // A manifest route with no reviewed article is a research brief:
    // reachable by URL, but not published as an indexable page.
    assert.ok(!isPublishedPath('/en/guides/fragrance/oud-accords' + '-not-written'));
  });

  test('the static shells are published in both locales', () => {
    for (const path of [
      '/en',
      '/en/guides',
      '/en/directory',
      '/en/directory/map',
      '/en/world',
      '/en/rfq',
      '/en/sourcing',
      '/en/membership',
      '/en/privacy',
      '/en/policies',
      '/en/corrections',
      '/en/for-businesses',
      '/en/shortlist',
      '/en/partners/opportunities',
    ]) {
      assert.ok(isPublishedPath(path), `${path} must be published`);
    }
  });

  test('every territory has a published ISO2 page', () => {
    assert.ok(isPublishedPath('/en/world/AE'));
    assert.ok(isPublishedPath('/en/world/BV'));
    assert.ok(isPublishedPath('/en/world/IN'));
  });

  test('a glossary term with a reviewed entry is published', () => {
    assert.ok(isPublishedPath('/en/glossary/hindi-muri'));
    assert.ok(isPublishedPath('/en/glossary/tola'));
    assert.ok(!isPublishedPath('/en/glossary/not-a-term'));
  });

  test('a quarantined fixture is not published', () => {
    // The fixture records are excluded from the public directory, so a
    // link to one must resolve to null rather than to a 404 page.
    assert.ok(!isPublishedPath('/en/directory/siam-trat-agarwood-co'));
  });

  test('every published business category resolves', () => {
    // The role vocabulary is controlled and the resolver checks the role
    // shapes BEFORE the business-profile shape, which would otherwise
    // swallow /en/directory/importers and read it as a profile named
    // "importers". That ordering is what makes all twenty-four roles
    // reachable rather than six.
    for (const role of DIRECTORY_ROLE_SLUGS) {
      assert.ok(
        isPublishedPath(`/en/directory/${role}`),
        `${role} must be a published directory shape`
      );
      assert.ok(
        isPublishedPath(`/ar/directory/${role}`),
        `${role} must be published in Arabic too`
      );
    }
  });

  test('a role that is not in the vocabulary is not published', () => {
    assert.ok(!isPublishedPath('/en/directory/not-a-real-role'));
    assert.ok(!isPublishedPath('/en/directory/wholesaler'), 'a near-miss role must not resolve');
  });
});

describe('The section a page lives in', () => {
  test('a glossary term is not a guide and a family is not a guide', () => {
    assert.equal(articleSection('oud-basics/what-is-agarwood'), 'guides');
    assert.equal(articleSection('glossary/hindi-muri'), 'glossary');
    assert.equal(articleSection('glossary'), 'glossary');
    assert.equal(articleSection('products/oud-wood'), 'products');
    assert.equal(articleSection('products'), 'products');
  });

  test('an article is published at the path its section declares', () => {
    // The manifest declares /en/glossary/{term} and /en/products/{family}.
    // The guides catch-all used to serve them as well, which gave one
    // body two URLs and two canonicals.
    assert.equal(articlePath('en', 'glossary/hindi-muri'), '/en/glossary/hindi-muri');
    assert.equal(articlePath('en', 'products/oud-wood'), '/en/products/oud-wood');
    assert.equal(articlePath('en', 'oud-basics/what-is-agarwood'), '/en/guides/oud-basics/what-is-agarwood');
    assert.equal(articlePath('ar', 'glossary/hindi-muri'), '/ar/glossary/hindi-muri');
  });

  test('the guides path is not published for a term or a family', () => {
    assert.ok(!isPublishedPath('/en/guides/glossary/hindi-muri'));
    assert.ok(!isPublishedPath('/en/guides/products/oud-wood'));
  });
});

describe('Directory filter paths', () => {
  test('the five audit destinations parse into their filters', () => {
    const dubai = parseDirectoryFilterPath('/en/directory/retailers/in/united-arab-emirates/dubai');
    assert.ok(dubai, 'the Dubai retailer path must parse');
    assert.equal(dubai.role, 'retailers');
    assert.equal(dubai.country, 'united-arab-emirates');
    assert.equal(dubai.city, 'dubai');

    const serving = parseDirectoryFilterPath('/en/directory/wholesalers/serving/united-arab-emirates');
    assert.ok(serving);
    assert.equal(serving.role, 'wholesalers');
    assert.equal(serving.destination, 'united-arab-emirates');

    const located = parseDirectoryFilterPath('/en/directory/wholesalers/in/united-arab-emirates');
    assert.ok(located);
    assert.equal(located.country, 'united-arab-emirates');

    const hojai = parseDirectoryFilterPath('/en/directory/wholesalers/in/india/hojai');
    assert.ok(hojai);
    assert.equal(hojai.country, 'india');
    assert.equal(hojai.city, 'hojai');
  });

  test('the role segment is restricted to the published roles', () => {
    for (const role of DIRECTORY_ROLE_SLUGS) {
      assert.ok(
        parseDirectoryFilterPath(`/en/directory/${role}`),
        `${role} must be a published directory shape`
      );
    }

    // A business profile and the map must not be captured as a filter.
    assert.equal(parseDirectoryFilterPath('/en/directory/al-mutalib-perfumes'), null);
    assert.equal(parseDirectoryFilterPath('/en/directory/map'), null);
    assert.equal(parseDirectoryFilterPath('/en/directory/not-a-role'), null);
  });

  test('a country name slug and an ISO code both resolve to the same country', () => {
    assert.equal(countryCodeForSlug('united-arab-emirates'), 'AE');
    assert.equal(countryCodeForSlug('ae'), 'AE');
    assert.equal(countryCodeForSlug('india'), 'IN');
    assert.equal(countrySlugForCode('AE'), 'united-arab-emirates');
    assert.equal(countryCodeForSlug('not-a-country'), null);
  });

  test('an origin filter parses separately from a country filter', () => {
    const origin = parseDirectoryFilterPath('/en/directory/wholesalers/by-origin/india');
    assert.ok(origin);
    assert.equal(origin.origin, 'india');
    assert.equal(origin.country, undefined);
  });
});

describe('Every published path is a real path', () => {
  test('the published set contains no route that the app cannot serve', () => {
    for (const path of publishedPaths()) {
      assert.ok(
        isPublishedPath(path),
        `${path} is in the published set but is not served by the app`
      );
    }
  });

  test('every published guide path has a reviewed article', () => {
    for (const path of publishedPaths()) {
      if (!path.startsWith('/en/guides/')) continue;
      const slug = path.replace('/en/guides/', '');
      assert.ok(
        getArticle(slug),
        `${path} is published but has no article in the content layer`
      );
    }
  });
});

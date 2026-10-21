import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

import {
  handlesOrigin,
  holdsRole,
  isInArea,
  isInCity,
  isLocatedIn,
  normalisePlace,
  servesDestination,
  tradesFamily,
  type FilterableBusiness,
} from '../packages/contracts/src/directory-filters.ts';
import { countryCodeForSlug, countrySlugForCode } from '../apps/web/src/lib/country-registry.ts';
import { isPublishedPath, parseDirectoryFilterPath } from '../apps/web/src/lib/route-resolver.ts';

/**
 * ==========================================================================
   The directory's geography filters.

   The role filter shipped. The directory's other four published filter
   paths did not, and they were broken in two different ways:

     /en/directory/wholesalers/in/united-arab-emirates
     /en/directory/wholesalers/in/united-arab-emirates/dubai
     /en/directory/wholesalers/in/united-arab-emirates/dubai/deira
     /en/directory/wholesalers/by-origin/cambodia
     /en/directory/wholesalers/serving/saudi-arabia

   First: the page destructured country, role, search, family, origin
   and destination out of searchParams and forwarded only three of them
   to the browser. The origin and destination were dropped, so those two
   paths returned the UNFILTERED directory. They looked right by
   coincidence — the one published record happens to handle Cambodian
   material and happens to ship to Saudi Arabia.

   Second: the country filter that was forwarded compared an ISO2 code
   against the slug the URL carries. The path says "united-arab-emirates"
   and the record's country_id is "AE", so the comparison never matched
   and every /in/ path returned nothing.

   A published URL that returns 200 and shows the wrong set is a
   correctness problem dressed as a working page, which is what the
   audit found for the role filter and what these tests now hold.
   ========================================================================== */

/** A record that matches Al Mutalib's real published fields. */
function alMutalib(overrides: Partial<FilterableBusiness> = {}): FilterableBusiness {
  return {
    id: 'biz_almutalib_01',
    slug: 'al-mutalib-perfumes',
    name: 'Al Mutalib Perfumes',
    country_id: 'AE',
    country_name: 'United Arab Emirates',
    city: 'Dubai',
    region: 'Deira Perfume Souk',
    street_address: 'Al Sabkha Road, Deira Perfume Souk, Dubai',
    handles_origins: ['India (Assam)', 'Cambodia (Koh Kong)', 'Indonesia (Kalimantan)'],
    serves_destinations: ['AE', 'SA', 'QA', 'KW', 'BH', 'OM', 'JO', 'EG', 'GB', 'US'],
    product_families: ['Oud wood', 'Oud oil', 'Perfume oil', 'Finished perfume', 'Bakhoor/incense'],
    roles: ['distillers', 'wholesalers', 'retailers'],
    ...overrides,
  };
}

describe('The country registry resolves the published slugs', () => {
  test('every country slug the manifest publishes resolves to a code', () => {
    // The published /in/ paths carry a country slug. If a slug does not
    // resolve, the path is rewritten onto the page with a country
    // parameter that no record can match, and the page returns nothing.
    const links = JSON.parse(
      readFileSync('apps/web/src/data/proposed_internal_links.json', 'utf8')
    ) as Array<{ target_path: string }>;

    const paths = [
      ...new Set(
        links
          .map((l) => l.target_path)
          .filter((p) => p && /\/directory\/[a-z-]+\/in\//.test(p))
      ),
    ];

    assert.ok(paths.length > 100, `expected the published /in/ paths, found ${paths.length}`);

    const unresolved = new Set<string>();
    for (const path of paths) {
      const country = path.split('/in/')[1].split('/')[0];
      if (!countryCodeForSlug(country)) unresolved.add(country);
    }

    assert.deepEqual(
      [...unresolved],
      [],
      `these published country slugs do not resolve: ${[...unresolved].join(', ')}`
    );
  });

  test('the awkward slugs resolve, not only the plain ones', () => {
    // The slugs are not all the country name: turkiye, not turkey.
    for (const [slug, code] of [
      ['turkiye', 'TR'],
      ['united-states', 'US'],
      ['south-korea', 'KR'],
      ['south-africa', 'ZA'],
      ['united-arab-emirates', 'AE'],
      ['united-kingdom', 'GB'],
    ] as const) {
      assert.equal(countryCodeForSlug(slug), code, `${slug} must resolve`);
      assert.equal(countrySlugForCode(code), slug, `${code} must map back`);
    }
  });

  test('a slug that is not a country does not resolve', () => {
    assert.equal(countryCodeForSlug('not-a-country'), null);
    assert.equal(countryCodeForSlug(''), null);
  });
});

describe('The three geography questions stay separate', () => {
  test('a business is located where its record says, and nowhere else', () => {
    const b = alMutalib();
    assert.equal(isLocatedIn(b, 'AE'), true);
    assert.equal(isLocatedIn(b, 'ae'), true, 'the comparison is case-insensitive');
    assert.equal(isLocatedIn(b, 'SA'), false, 'it ships to Saudi Arabia; it is not there');
    assert.equal(isLocatedIn(b, 'KH'), false, 'it handles Cambodian material; it is not there');
    assert.equal(isLocatedIn(b, ''), true, 'no filter means no constraint');
  });

  test('a business handles the origin it says, and no other', () => {
    const b = alMutalib();
    assert.equal(handlesOrigin(b, 'cambodia'), true);
    assert.equal(handlesOrigin(b, 'Cambodia'), true, 'the comparison is case-insensitive');
    assert.equal(handlesOrigin(b, 'india'), true);
    assert.equal(handlesOrigin(b, 'thailand'), false);
    assert.equal(handlesOrigin(b, ''), true);
    // The origin vocabulary is country SLUGS, because the published
    // path carries one: /en/directory/wholesalers/by-origin/cambodia.
    // An ISO2 code is a different vocabulary and matches nothing, which
    // is why the page resolves the slug against the record rather than
    // passing the code through.
    assert.equal(handlesOrigin(b, 'kh'), false);
  });

  test('a business serves the destinations it is documented to serve', () => {
    const b = alMutalib();
    assert.equal(servesDestination(b, 'SA'), true);
    assert.equal(servesDestination(b, 'sa'), true);
    assert.equal(servesDestination(b, 'IN'), false, 'India is an origin, not a destination');
    assert.equal(servesDestination(b, ''), true);
  });

  test('the city is matched against the record, not the registry', () => {
    const b = alMutalib();
    assert.equal(isInCity(b, 'dubai'), true);
    assert.equal(isInCity(b, 'Dubai'), true);
    assert.equal(isInCity(b, 'deira'), false, 'Deira is the area, not the city');
    assert.equal(isInCity(b, 'mumbai'), false);
    assert.equal(isInCity(b, ''), true);
  });

  test('the area is matched against the region and the published address', () => {
    const b = alMutalib();
    assert.equal(isInArea(b, 'deira'), true, 'the region names it');
    assert.equal(isInArea(b, 'al-sabkha'), true, 'the address names it');
    assert.equal(isInArea(b, 'mayfair'), false);
    assert.equal(isInArea(b, ''), true);
  });

  test('a place name is compared the same way on both sides', () => {
    // The path carries a slug and the record carries a display name.
    assert.equal(normalisePlace('Kuala Lumpur'), normalisePlace('kuala-lumpur'));
    assert.equal(normalisePlace('Ho Chi Minh City'), normalisePlace('ho-chi-minh-city'));
    assert.equal(normalisePlace(''), '');
  });

  test('the role and the family are still their own questions', () => {
    const b = alMutalib();
    assert.equal(holdsRole(b, 'wholesalers'), true);
    assert.equal(holdsRole(b, 'exporters'), false);
    assert.equal(holdsRole(b, ''), true);
    assert.equal(tradesFamily(b, 'Oud oil'), true);
    assert.equal(tradesFamily(b, 'all'), true);
    assert.equal(tradesFamily(b, 'nonexistent'), false);
  });
});

describe('The published filter paths are published, and they parse', () => {
  test('every published filter shape resolves', () => {
    for (const path of [
      '/en/directory/wholesalers',
      '/en/directory/wholesalers/in/united-arab-emirates',
      '/en/directory/wholesalers/in/united-arab-emirates/dubai',
      '/en/directory/wholesalers/in/united-arab-emirates/dubai/deira',
      '/en/directory/wholesalers/by-origin/cambodia',
      '/en/directory/wholesalers/serving/saudi-arabia',
    ]) {
      assert.ok(isPublishedPath(path), `${path} must be a published shape`);
      assert.ok(parseDirectoryFilterPath(path), `${path} must parse into its filters`);
    }
  });

  test('the parser carries the role and the geography', () => {
    const parsed = parseDirectoryFilterPath('/en/directory/wholesalers/in/united-arab-emirates/dubai/deira');
    assert.ok(parsed);
    assert.equal(parsed.role, 'wholesalers');
    assert.equal(parsed.country, 'united-arab-emirates');
    assert.equal(parsed.city, 'dubai');
    assert.equal(parsed.area, 'deira');
  });

  test('a business profile and the map are not filter shapes', () => {
    assert.equal(parseDirectoryFilterPath('/en/directory/al-mutalib-perfumes'), null);
    assert.equal(parseDirectoryFilterPath('/en/directory/map'), null);
  });
});

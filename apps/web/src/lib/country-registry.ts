import countries from '../data/country_registry.json' with { type: 'json' };

/**
 * The country registry's lookups.
 *
 * The registry carries 249 territories, each with a proposed slug, an
 * English seed, an Arabic seed and an ISO2 code. The directory's
 * published paths carry the SLUG — `/en/directory/wholesalers/in/
 * united-arab-emirates` — and the business records carry the CODE —
 * `country_id: 'AE'`. Something has to resolve one to the other, and
 * this is that place.
 *
 * It lives in its own module rather than in the route resolver because
 * the resolver is server-side: it imports the seed registers and the
 * article layer, and a client component that needs a slug-to-code
 * lookup must not pull that graph into the browser bundle. The
 * directory page resolves the slugs on the server and passes codes down.
 *
 * The resolver's own country helpers delegate here, so there is one
 * implementation of the lookup rather than two that can drift.
 */

interface RegistryCountry {
  iso2: string;
  iso3?: string;
  proposed_slug: string;
  english_seed: string;
  arabic_seed?: string;
}

const REGISTRY = countries as unknown as RegistryCountry[];

/** A slug or an ISO2 code to an ISO2 code, or null when it is neither. */
export function countryCodeForSlug(slug: string): string | null {
  if (!slug) return null;
  const value = slug.toLowerCase().trim();

  const country = REGISTRY.find(
    (c) =>
      c.proposed_slug?.toLowerCase() === value ||
      c.english_seed?.toLowerCase().replace(/\s+/g, '-') === value ||
      c.iso2?.toLowerCase() === value
  );

  return country ? country.iso2.toUpperCase() : null;
}

/** An ISO2 code to the registry's proposed slug, or null. */
export function countrySlugForCode(iso2: string): string | null {
  const country = REGISTRY.find(
    (c) => c.iso2?.toUpperCase() === iso2?.toUpperCase()
  );
  return country ? country.proposed_slug : null;
}

/**
 * The display names for a territory, in both languages.
 *
 * The English seed is the country's own name, not a slug, so a badge
 * reads "India" rather than "india".
 */
export function countryNamesFor(
  slug: string
): { en: string; ar: string; iso2: string } | null {
  if (!slug) return null;
  const value = slug.toLowerCase().trim();

  const country = REGISTRY.find(
    (c) =>
      c.proposed_slug?.toLowerCase() === value ||
      c.english_seed?.toLowerCase().replace(/\s+/g, '-') === value ||
      c.iso2?.toLowerCase() === value
  );

  if (!country) return null;

  return {
    en: country.english_seed,
    ar: country.arabic_seed || country.english_seed,
    iso2: country.iso2.toUpperCase(),
  };
}

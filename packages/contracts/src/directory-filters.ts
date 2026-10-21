/**
 * The directory's filter semantics, in one place.
 *
 * The directory answers five independent questions — what material, what
 * role, where the business is, what origin of material it handles, and
 * which destinations it serves — and each one is a separate filter on
 * the same records. Confusing them was OG-A09: a Dubai company that
 * handles Cambodian agarwood appeared under Cambodian production, and a
 * buyer concluded that Cambodian production was available in Dubai.
 *
 * These helpers are the single definition of what each filter means, so
 * the listing a buyer sees in the page and the listing the domain
 * returns cannot disagree about what "in Cambodia" or "serving Saudi
 * Arabia" means.
 *
 * The vocabulary is deliberate:
 *
 *   location    — an ISO2 code. Where the business physically is.
 *   city        — a slug. Where the business is, within the country.
 *   area        — a slug. A neighbourhood within the city.
 *   origin      — a slug. The origin of the material it handles, which
 *                 is NOT where the business is.
 *   destination — an ISO2 code. The country it is documented to ship to.
 *
 * A slug and a code are not interchangeable, and mixing them is how a
 * published filter path ends up matching nothing: the path carries a
 * slug, the record carries a code, so the comparison has to be resolved
 * before it is made.
 */

/** The fields a filter needs. Every one of them is optional. */
export interface FilterableBusiness {
  /** The ISO2 code of the country the business is located in. */
  country_id: string;
  city?: string | null;
  /** The neighbourhood or district, where the record states one. */
  region?: string | null;
  /** The street address, where the record publishes one. */
  street_address?: string | null;
  /** The origins of the material this business says it works with. */
  handles_origins?: string[];
  /** The ISO2 codes of the countries it is documented to ship to. */
  serves_destinations?: string[];
  product_families?: string[];
  roles?: string[];
}

/**
 * Reduce a place name to a comparable form.
 *
 * A published path carries "united-arab-emirates" and a record carries
 * "United Arab Emirates", or "Deira Perfume Souk" against
 * "deira-perfume-souk". Comparing them raw finds nothing, so both
 * sides are reduced to letters and digits.
 */
export function normalisePlace(value: string | null | undefined): string {
  return (value ?? '').toLowerCase().trim().replace(/[^a-z0-9]+/g, '');
}

/**
 * True when the business is located in the country with this code.
 *
 * Location only. A business that ships to Saudi Arabia is not located
 * in Saudi Arabia, and one that handles Cambodian material is not
 * located in Cambodia.
 */
export function isLocatedIn(business: FilterableBusiness, countryCode: string): boolean {
  if (!countryCode) return true;
  return (business.country_id ?? '').toUpperCase() === countryCode.toUpperCase();
}

/**
 * True when the business is in the city with this slug.
 *
 * A slug, because the published path carries a slug. The record carries
 * a display name, so both sides are reduced before they are compared.
 */
export function isInCity(business: FilterableBusiness, citySlug: string): boolean {
  if (!citySlug) return true;
  const needle = normalisePlace(citySlug);
  if (!needle) return true;
  return normalisePlace(business.city) === needle;
}

/**
 * True when the business is in the area with this slug.
 *
 * The area is a neighbourhood within the city, and only a record that
 * states one can match it. A record with no stated area is not in
 * every area: it is in none of them, and a path that names a
 * neighbourhood is a claim about that neighbourhood.
 *
 * The street address counts as a statement of area. A record whose
 * address is "Al Sabkha Road, Deira Perfume Souk" is in Deira, and the
 * published path `/in/united-arab-emirates/dubai/deira` names it. The
 * address is only on a record whose owner published it, so a locked
 * record simply does not match an area — which is the honest answer,
 * not a missing one.
 */
export function isInArea(business: FilterableBusiness, areaSlug: string): boolean {
  if (!areaSlug) return true;
  const needle = normalisePlace(areaSlug);
  if (!needle) return true;

  const region = normalisePlace(business.region);
  if (region && (region === needle || region.includes(needle))) return true;

  const address = normalisePlace(business.street_address);
  if (address && (address === needle || address.includes(needle))) return true;

  return false;
}

/**
 * True when the business handles material from the origin with this slug.
 *
 * The origin is a country, and the record records it as a display string
 * that carries the region too — "Cambodia (Koh Kong)". The slug is
 * matched against the whole string, so a country slug finds the record.
 */
export function handlesOrigin(business: FilterableBusiness, originSlug: string): boolean {
  if (!originSlug) return true;
  const needle = normalisePlace(originSlug);
  if (!needle) return true;
  return (business.handles_origins ?? []).some((o) =>
    normalisePlace(o).includes(needle)
  );
}

/**
 * True when the business is documented to ship to the destination code.
 *
 * Documented, not inferred: this is the list the record states, and a
 * business absent from it is not claimed to ship there.
 */
export function servesDestination(
  business: FilterableBusiness,
  destinationCode: string
): boolean {
  if (!destinationCode) return true;
  const needle = destinationCode.toUpperCase().trim();
  return (business.serves_destinations ?? []).some((d) => d.toUpperCase() === needle);
}

/**
 * True when the business holds the role.
 *
 * The role is a controlled slug, matched against the record's own list.
 */
export function holdsRole(business: FilterableBusiness, role: string): boolean {
  if (!role) return true;
  return (business.roles ?? []).includes(role);
}

/**
 * True when the business trades the product family.
 *
 * The family is the record's own display string, matched exactly,
 * because the family chips and the records use the same vocabulary.
 */
export function tradesFamily(business: FilterableBusiness, family: string): boolean {
  if (!family || family === 'all') return true;
  return (business.product_families ?? []).includes(family);
}

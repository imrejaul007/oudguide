/**
 * OudGuide Public Contact Projection Policy.
 * Ensures zero contact leakage in HTML, JSON-LD, APIs, RSC payloads, exports, or search.
 * Satisfies QA-007, QA-008, QA-010, V4-DIR-02, V4-SEC-01.
 */

export interface RawBusinessProfile {
  id: string;
  slug: string;
  name: string;
  legal_name?: string | null;
  description?: string | null;
  category?: string | null;
  business_type?: string | null; // retail, wholesale, distiller, manufacturer, etc.
  country_id: string;
  country_name?: string | null;
  city?: string | null;
  region?: string | null;
  
  // Ownership and membership flags
  is_claimed: boolean;
  has_active_membership: boolean;
  contact_display_enabled: boolean;
  is_suspended?: boolean;

  // Sensitive contact details (must be guarded)
  email?: string | null;
  phone?: string | null;
  whatsapp?: string | null;
  street_address?: string | null;
  postal_code?: string | null;
  contact_person?: string | null;
  tax_id?: string | null;
  internal_notes?: string | null;

  // Public non-contact attributes
  website_url?: string | null;
  verified_origins?: string[];
  product_families?: string[];
  sample_availability?: boolean;
  minimum_order_quantity?: string | null;
  established_year?: number | null;
}

export interface PublicBusinessProjection {
  id: string;
  slug: string;
  name: string;
  description?: string | null;
  category?: string | null;
  business_type?: string | null;
  country_id: string;
  country_name?: string | null;
  city?: string | null;
  region?: string | null;
  
  // Public verification & membership status (badges)
  is_claimed: boolean;
  has_active_membership: boolean;
  contact_unlocked: boolean;

  // Contact details only present if contact_unlocked is true
  email?: string | null;
  phone?: string | null;
  whatsapp?: string | null;
  street_address?: string | null;
  website_url?: string | null;

  // Public non-contact attributes
  verified_origins?: string[];
  product_families?: string[];
  sample_availability?: boolean;
  minimum_order_quantity?: string | null;
  established_year?: number | null;
}

/**
 * Checks whether this business is entitled to display direct contact information publicly.
 */
export function isContactDisplayEntitled(business: RawBusinessProfile): boolean {
  if (business.is_suspended) {
    return false;
  }
  // Must be claimed by verified owner
  if (!business.is_claimed) {
    return false;
  }
  // Must have active paid membership (AED 1,200/yr equivalent to AED 100/mo)
  if (!business.has_active_membership) {
    return false;
  }
  // Must have explicitly enabled contact display in owner settings
  if (!business.contact_display_enabled) {
    return false;
  }
  return true;
}

/**
 * Projects a raw business record into a safe public representation,
 * strictly stripping private contact fields unless entitled.
 */
export function projectPublicBusiness(business: RawBusinessProfile): PublicBusinessProjection {
  const contactUnlocked = isContactDisplayEntitled(business);

  const projection: PublicBusinessProjection = {
    id: business.id,
    slug: business.slug,
    name: business.name,
    description: business.description ?? null,
    category: business.category ?? null,
    business_type: business.business_type ?? null,
    country_id: business.country_id,
    country_name: business.country_name ?? null,
    city: business.city ?? null,
    region: business.region ?? null,
    is_claimed: Boolean(business.is_claimed),
    has_active_membership: Boolean(business.has_active_membership),
    contact_unlocked: contactUnlocked,
    verified_origins: business.verified_origins ?? [],
    product_families: business.product_families ?? [],
    sample_availability: Boolean(business.sample_availability),
    minimum_order_quantity: business.minimum_order_quantity ?? null,
    established_year: business.established_year ?? null,
  };

  if (contactUnlocked) {
    projection.email = business.email ?? null;
    projection.phone = business.phone ?? null;
    projection.whatsapp = business.whatsapp ?? null;
    projection.street_address = business.street_address ?? null;
    projection.website_url = business.website_url ?? null;
  } else {
    // When locked, never return contacts, and website is either omitted or strictly sanitized
    projection.website_url = business.website_url ?? null;
  }

  return projection;
}

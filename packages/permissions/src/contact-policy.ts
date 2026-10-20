/**
 * OudGuide Public Contact Projection Policy.
 * Ensures zero contact leakage in HTML, JSON-LD, APIs, RSC payloads, exports, or search.
 * Satisfies QA-007, QA-008, QA-010, V4-DIR-02, V4-SEC-01.
 *
 * The three facts that are commonly conflated are kept separate:
 *
 *   location            — where the business physically is
 *   handles_origins     — the origins of the material it says it works with
 *   serves_destinations — the countries it is documented to ship to
 *
 * A reseller in Dubai that handles Cambodian agarwood has location = AE and
 * handles_origins = ['KH']. It is not a Cambodian producer, and nothing in
 * this policy may imply that it is.
 */

/** How a factual field on a profile came to be published. */
export type VerificationState = 'owner_verified' | 'seller_declared' | 'unverified';

/** A physical place where a business handles material. */
export interface BusinessFacility {
  country_id: string;
  country_name?: string | null;
  city?: string | null;
  region?: string | null;
  /** 'production' | 'processing' | 'storage' — what actually happens there. */
  type: 'production' | 'processing' | 'storage' | string;
  /** True only when the facility itself is documented, not inferred. */
  documented: boolean;
}

export interface BusinessVerification {
  state: VerificationState;
  /** Where the supporting record came from, when there is one. */
  evidence?: string | null;
  checked_on?: string | null;
  /**
   * Which of the optional factual fields are actually backed by evidence.
   * A field that is not listed here is seller-declared and must be labelled
   * as such wherever it is rendered.
   */
  fields: string[];
}

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

  // Commercial and partner state. These are internal: a business may be a
  // paying member without being a partner, and only a partner may receive
  // an introduction.
  is_partner?: boolean;
  partner_approved?: boolean;
  partner_suspended?: boolean;
  jurisdiction_allowed?: boolean;
  /**
   * Whether this business is commercially entitled to receive an
   * introduction. The lead policy checks it, so it must reflect real
   * state rather than a constant.
   */
  commercial_entitlement?: boolean;
  retail_referral_url?: string | null;

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
  /** Origins of the material this business says it works with. */
  handles_origins?: string[];
  /** Destinations this business is documented to ship to, as ISO2 codes. */
  serves_destinations?: string[];
  /** Places where this business actually handles material. */
  facilities?: BusinessFacility[];
  product_families?: string[];
  sample_availability?: boolean;
  minimum_order_quantity?: string | null;
  established_year?: number | null;
  /** What is known about the provenance of each published fact. */
  verification?: BusinessVerification;
  /**
   * True for fixture records that exist only for development. Demo records
   * are never published in the public directory or on the producer map.
   */
  demo?: boolean;
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
  /** The verification state of the profile's own factual record. */
  verification_state: VerificationState;
  /** Which optional facts are evidence-backed rather than seller-declared. */
  verified_fields: string[];
  /** A fixture record. Never published in the directory or on the map. */
  demo: boolean;

  // Contact details only present if contact_unlocked is true
  email?: string | null;
  phone?: string | null;
  whatsapp?: string | null;
  street_address?: string | null;
  website_url?: string | null;

  // Public non-contact attributes
  handles_origins?: string[];
  serves_destinations?: string[];
  facilities?: BusinessFacility[];
  product_families?: string[];
  sample_availability?: boolean;
  minimum_order_quantity?: string | null;
  established_year?: number | null;
}

/**
 * Checks whether this business is entitled to display direct contact information publicly.
 *
 * Owner permission, paid membership and factual verification are three
 * distinct states. Only the first two gate contact publication — a profile
 * that has not been fact-checked can still publish its own contacts, because
 * the owner supplied them.
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
 *
 * A locked profile omits every contact field entirely — including
 * `website_url`. The previous version returned the website in the locked
 * branch, which meant a basic, unpaid, unverified record still published a
 * link to the business, and the whole point of the lock is that the record
 * publishes nothing the owner has not explicitly released.
 */
export function projectPublicBusiness(business: RawBusinessProfile): PublicBusinessProjection {
  const contactUnlocked = isContactDisplayEntitled(business);
  const verification = business.verification;

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
    verification_state: verification?.state ?? 'unverified',
    verified_fields: verification?.fields ?? [],
    demo: Boolean(business.demo),
    handles_origins: business.handles_origins ?? [],
    serves_destinations: business.serves_destinations ?? [],
    facilities: business.facilities ?? [],
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
  }

  return projection;
}

/**
 * A field is evidence-backed when the verification record names it.
 *
 * Rendering an unsourced founding year, minimum order or sample policy as
 * fact is the same failure as rendering an unverified contact: the reader
 * cannot tell the difference between a checked record and a guessed one.
 */
export function isFieldVerified(business: RawBusinessProfile, field: string): boolean {
  return (business.verification?.fields ?? []).includes(field);
}

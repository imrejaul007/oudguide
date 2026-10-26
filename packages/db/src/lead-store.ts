/**
 * The B2B lead store.
 *
 * Before this module the platform had no persistence at all: every
 * inquiry, grant and release lived in a `Map` inside a single domain
 * service instance, which on a serverless host means it is gone by the
 * next request. The buyer carried their own state in a signed cookie, so
 * a buyer's own journey survived — but the operator's view of the leads
 * did not, and a lead could not be handed to a supplier at all.
 *
 * This module is the seam that makes the lead loop real. It defines what
 * a lead IS, in one place, and how it is stored. Two implementations
 * satisfy it:
 *
 *   InMemoryLeadStore — the default. Keeps every existing test green and
 *                       lets the whole portal run with no database.
 *   PostgresLeadStore — the production implementation, backed by Vercel
 *                       Postgres, using the tables in
 *                       `packages/db/migrations/002_b2b_portal.sql`.
 *
 * Two rules hold for every implementation, and they are the reason this
 * type exists rather than a pile of ad-hoc SQL:
 *
 *   1. A lead's buyer identity is write-only for the buyer-facing
 *      surfaces. `listLeads()` never returns the buyer PII; only
 *      `getLeadForOperator()` does. The operator is the only actor
 *      entitled to read a buyer's contact details.
 *
 *   2. An assignment is created only for a supplier that is entitled to
 *      receive one — an active commercial entitlement — and only up to
 *      the recipient cap. Both rules are enforced in the domain layer,
 *      which calls the store only after the policy has passed, so the
 *      store never has to decide a policy question. It records what the
 *      domain decided.
 */

/** The states a lead moves through. */
export type LeadStatus =
  | 'new'
  | 'assigned'
  | 'in_progress'
  | 'closed'
  | 'rejected';

/** The states one supplier's assignment of one lead moves through. */
export type AssignmentState =
  | 'pending'
  | 'accepted'
  | 'quoted'
  | 'declined'
  | 'contacted';

/** The lifecycle of a supplier product listing. */
export type ListingStatus = 'pending' | 'published' | 'removed';

/**
 * A buyer's requirement.
 *
 * This is the record the operator queue lists and the supplier is
 * allowed to see — once the supplier has been assigned it. It is
 * deliberately free of the buyer's identity: the buyer's name, company
 * and contact details live on the lead's contact fields, which only the
 * operator-facing accessor returns.
 */
export interface LeadRequirement {
  /** The material the buyer asked about. */
  product_family: string;
  /** How much. Free-form, because "5 tolas" and "a container" are both real. */
  quantity?: string;
  /** Where the material has to go. An ISO2 code or a country name. */
  destination_country?: string;
  /** When the buyer needs it. Free-form, e.g. "within 4 weeks". */
  timeline?: string;
  /** Any extra detail the buyer wrote. */
  notes?: string;
  /** True when the buyer asked for samples as well as the main lot. */
  samples_requested: boolean;
  /**
   * True when the buyer named one supplier rather than asking to be
   * matched. A named request is only released to that supplier.
   */
  selected_supplier_id?: string;
}

/**
 * The buyer's identity on a lead.
 *
 * Kept apart from the requirement so that a surface that is allowed to
 * show a requirement is not automatically allowed to show who sent it.
 */
export interface LeadContact {
  buyer_name: string;
  buyer_email?: string;
  buyer_phone?: string;
  buyer_whatsapp?: string;
  company_name?: string;
  /** How the buyer wants to be contacted. */
  preferred_channel: 'email' | 'phone' | 'whatsapp' | string;
}

/**
 * A lead as the operator queue and the buyer receipt see it.
 *
 * `contact` is absent unless the caller has asked for it explicitly —
 * `listLeads()` never fills it in.
 */
export interface Lead {
  id: string;
  /** Where the buyer came from, e.g. "homepage-hero" or "product-page". */
  source: string;
  /** The page the request was made on, for attribution. */
  source_url?: string;
  /** The locale the buyer submitted in. */
  locale: string;
  status: LeadStatus;
  requirement: LeadRequirement;
  contact: LeadContact;
  /** True when the buyer agreed to be contacted by matched suppliers. */
  consent_to_contact: boolean;
  /** True when the buyer agreed to receive a quote. */
  consent_to_quote: boolean;
  created_at: Date;
  updated_at: Date;
  /** When the lead should be deleted under the retention rule. */
  delete_after: Date;
  /**
   * The number of suppliers this lead may be assigned to. The default
   * cap is three, matching the introduction cap the reference policy
   * already enforces for the RFQ journey.
   */
  max_recipients: number;
}

/**
 * One supplier's assignment of one lead.
 *
 * An assignment is what makes a supplier an authorised recipient of the
 * buyer's contact details — it is created only after the operator has
 * chosen the supplier and the entitlement checks have passed.
 */
export interface LeadAssignment {
  id: string;
  lead_id: string;
  business_id: string;
  state: AssignmentState;
  assigned_by: string;
  assigned_at: Date;
  notified_at?: Date;
  /** Why the supplier was chosen, e.g. "family match". */
  match_reason?: string;
}

/**
 * A supplier's quote against an assignment.
 */
export interface SupplierQuote {
  id: string;
  assignment_id: string;
  lead_id: string;
  business_id: string;
  /** The quoted price per unit. */
  price?: number;
  currency?: string;
  /** The unit the price is against, e.g. "kg", "tola". */
  unit?: string;
  /** The minimum order this quote applies from. */
  moq?: string;
  /** How long the lead time is. */
  lead_time?: string;
  /** How many days the quote holds for. */
  validity_days?: number;
  /** A free-text note from the supplier. */
  note?: string;
  created_at: Date;
}

/**
 * A supplier account.
 *
 * A supplier signs in to see the leads assigned to their business and to
 * quote against them. The password is never stored — only its hash and
 * the salt it was derived with.
 */
export interface SupplierAccount {
  business_id: string;
  email: string;
  /** The scrypt hash, hex-encoded. */
  password_hash: string;
  /** The scrypt salt, hex-encoded. */
  password_salt: string;
  status: 'active' | 'suspended' | 'pending';
  created_at: Date;
  last_login_at?: Date;
  /** True when the supplier must set a new password before continuing. */
  must_change_password: boolean;
}

/**
 * A product a supplier lists on its storefront.
 */
export interface SupplierListing {
  id: string;
  business_id: string;
  product_family: string;
  name: string;
  description?: string;
  /** The minimum order the supplier sells at. */
  moq?: string;
  /** The unit the MOQ is counted in. */
  unit?: string;
  sample_available: boolean;
  status: ListingStatus;
  created_at: Date;
  updated_at: Date;
}

/**
 * The store's whole surface.
 *
 * Every method is asynchronous, because the Postgres implementation is
 * a database round trip and the in-memory one must satisfy the same
 * contract — an implementation that only works synchronously is one
 * whose callers are written against the wrong shape.
 */
export interface LeadStore {
  // --- Leads -------------------------------------------------------------

  /** Create a lead. Returns the stored record. */
  createLead(lead: Lead): Promise<Lead>;

  /**
   * List leads for the operator queue.
   *
   * The buyer contact fields are NOT populated: this is the queue's
   * summary view. Use `getLeadForOperator` for one lead's contact.
   */
  listLeads(filter?: {
    status?: LeadStatus;
    product_family?: string;
    limit?: number;
  }): Promise<Lead[]>;

  /**
   * One lead, including the buyer contact fields.
   *
   * This is the operator-only accessor. The buyer-facing surface reads
   * the lead through `getLeadSummary`, which omits the contact.
   */
  getLeadForOperator(leadId: string): Promise<Lead | null>;

  /**
   * One lead, WITHOUT the buyer contact fields.
   *
   * This is what the buyer receipt page and the supplier dashboard read
   * before the supplier is authorised.
   */
  getLeadSummary(leadId: string): Promise<Lead | null>;

  /** Update a lead's status. */
  updateLeadStatus(leadId: string, status: LeadStatus): Promise<Lead | null>;

  // --- Assignments -------------------------------------------------------

  /**
   * The assignments on a lead.
   *
   * When `includeContact` is true the buyer contact fields are attached
   * to each assignment — the supplier's view once it has been assigned.
   */
  listAssignments(
    leadId: string,
    options?: { includeContact?: boolean }
  ): Promise<Array<LeadAssignment & { contact?: LeadContact }>>;

  /** The assignments on one supplier's businesses. */
  listAssignmentsForBusiness(
    businessId: string,
    options?: { includeContact?: boolean }
  ): Promise<Array<LeadAssignment & { contact?: LeadContact }>>;

  /** Create an assignment. */
  createAssignment(assignment: LeadAssignment): Promise<LeadAssignment>;

  /** Update an assignment's state. */
  updateAssignmentState(
    assignmentId: string,
    state: AssignmentState
  ): Promise<LeadAssignment | null>;

  /** One assignment, with the lead's contact when requested. */
  getAssignment(
    assignmentId: string,
    options?: { includeContact?: boolean }
  ): Promise<(LeadAssignment & { contact?: LeadContact }) | null>;

  // --- Quotes ------------------------------------------------------------

  /** Record a quote against an assignment. */
  createQuote(quote: SupplierQuote): Promise<SupplierQuote>;

  /** The quotes on a lead. */
  listQuotes(leadId: string): Promise<SupplierQuote[]>;

  /** The quotes a supplier has posted. */
  listQuotesForBusiness(businessId: string): Promise<SupplierQuote[]>;

  // --- Supplier accounts -------------------------------------------------

  /** One supplier account, by email. */
  getSupplierAccountByEmail(email: string): Promise<SupplierAccount | null>;

  /** One supplier account, by business id. */
  getSupplierAccount(businessId: string): Promise<SupplierAccount | null>;

  /** Create or replace a supplier account. */
  saveSupplierAccount(account: SupplierAccount): Promise<SupplierAccount>;

  /** Record a successful sign-in. */
  touchSupplierLogin(businessId: string, at: Date): Promise<void>;

  /**
   * Every supplier account, for the operator's account-management view.
   *
   * The hashes never leave the store: this accessor returns only the
   * operator's facts — who has an account, its state, and when it was
   * created.
   */
  listSupplierAccounts(): Promise<
    Array<{ business_id: string; email: string; status: SupplierAccount['status']; created_at: Date }>
  >;

  // --- Listings ----------------------------------------------------------

  /** Create a listing. */
  createListing(listing: SupplierListing): Promise<SupplierListing>;

  /** The published listings, optionally filtered by family. */
  listPublishedListings(filter?: {
    product_family?: string;
    business_id?: string;
  }): Promise<SupplierListing[]>;

  /** Every listing for one business, in any state. */
  listListingsForBusiness(businessId: string): Promise<SupplierListing[]>;

  /** Every listing, in every state, for the operator's review queue. */
  listAllListings(filter?: {
    status?: ListingStatus;
    business_id?: string;
  }): Promise<SupplierListing[]>;

  /** One listing. */
  getListing(listingId: string): Promise<SupplierListing | null>;

  /** Update a listing's state. */
  updateListingStatus(
    listingId: string,
    status: ListingStatus
  ): Promise<SupplierListing | null>;

  /** Update a listing's editable fields. */
  updateListing(
    listingId: string,
    patch: Partial<
      Pick<
        SupplierListing,
        'name' | 'description' | 'moq' | 'unit' | 'sample_available' | 'product_family'
      >
    >
  ): Promise<SupplierListing | null>;
}

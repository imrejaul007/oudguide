/**
 * The in-memory lead store.
 *
 * This is the default implementation, and it is a complete one — not a
 * stub. It is what the whole portal runs on in development and what the
 * test suite runs against, so the portal can be built and exercised
 * before a database exists.
 *
 * It is also the reference for what the Postgres implementation must do.
 * The two are held to the same contract by `tests/lead-portal.test.ts`,
 * which runs the same assertions against both.
 *
 * The one behaviour that must be identical in both: the buyer's contact
 * fields are attached to a lead's assignments only when the caller asks
 * for them, and are never attached by `listLeads`.
 */

import type {
  AssignmentState,
  Lead,
  LeadAssignment,
  LeadContact,
  LeadStatus,
  LeadStore,
  ListingStatus,
  SupplierAccount,
  SupplierListing,
  SupplierQuote,
} from './lead-store.ts';

function clone<T>(value: T): T {
  return structuredClone(value);
}

/**
 * Split a lead into the part everyone may see and the part only the
 * operator may read.
 */
function withoutContact(lead: Lead): Lead {
  const { contact, ...rest } = lead;
  void contact;
  return clone(rest);
}

export class InMemoryLeadStore implements LeadStore {
  private leads = new Map<string, Lead>();
  private assignments = new Map<string, LeadAssignment>();
  private quotes = new Map<string, SupplierQuote>();
  private accounts = new Map<string, SupplierAccount>();
  private listings = new Map<string, SupplierListing>();

  // --- Leads ---------------------------------------------------------------

  public async createLead(lead: Lead): Promise<Lead> {
    this.leads.set(lead.id, clone(lead));
    return clone(lead);
  }

  public async listLeads(filter?: {
    status?: LeadStatus;
    product_family?: string;
    limit?: number;
  }): Promise<Lead[]> {
    let list = Array.from(this.leads.values());

    if (filter?.status) {
      list = list.filter((l) => l.status === filter.status);
    }
    if (filter?.product_family) {
      const family = filter.product_family.toLowerCase();
      list = list.filter((l) =>
        l.requirement.product_family.toLowerCase().includes(family)
      );
    }

    list.sort((a, b) => b.created_at.getTime() - a.created_at.getTime());

    if (filter?.limit !== undefined) {
      list = list.slice(0, filter.limit);
    }

    // The queue's summary view. The buyer contact is not attached.
    return list.map(withoutContact);
  }

  public async getLeadForOperator(leadId: string): Promise<Lead | null> {
    const lead = this.leads.get(leadId);
    return lead ? clone(lead) : null;
  }

  public async getLeadSummary(leadId: string): Promise<Lead | null> {
    const lead = this.leads.get(leadId);
    return lead ? withoutContact(lead) : null;
  }

  public async updateLeadStatus(leadId: string, status: LeadStatus): Promise<Lead | null> {
    const lead = this.leads.get(leadId);
    if (!lead) return null;
    lead.status = status;
    lead.updated_at = new Date();
    return clone(lead);
  }

  // --- Assignments ---------------------------------------------------------

  public async listAssignments(
    leadId: string,
    options?: { includeContact?: boolean }
  ): Promise<Array<LeadAssignment & { contact?: LeadContact }>> {
    const contact = options?.includeContact ? this.contactFor(leadId) : undefined;
    return Array.from(this.assignments.values())
      .filter((a) => a.lead_id === leadId)
      .sort((a, b) => a.assigned_at.getTime() - b.assigned_at.getTime())
      .map((a) => (contact ? { ...clone(a), contact: clone(contact) } : clone(a)));
  }

  public async listAssignmentsForBusiness(
    businessId: string,
    options?: { includeContact?: boolean }
  ): Promise<Array<LeadAssignment & { contact?: LeadContact }>> {
    const list = Array.from(this.assignments.values())
      .filter((a) => a.business_id === businessId)
      .sort((a, b) => b.assigned_at.getTime() - a.assigned_at.getTime());

    return list.map((a) => {
      const base = clone(a);
      if (!options?.includeContact) return base;
      const contact = this.contactFor(a.lead_id);
      return contact ? { ...base, contact: clone(contact) } : base;
    });
  }

  public async createAssignment(assignment: LeadAssignment): Promise<LeadAssignment> {
    this.assignments.set(assignment.id, clone(assignment));
    return clone(assignment);
  }

  public async updateAssignmentState(
    assignmentId: string,
    state: AssignmentState
  ): Promise<LeadAssignment | null> {
    const assignment = this.assignments.get(assignmentId);
    if (!assignment) return null;
    assignment.state = state;
    return clone(assignment);
  }

  public async getAssignment(
    assignmentId: string,
    options?: { includeContact?: boolean }
  ): Promise<(LeadAssignment & { contact?: LeadContact }) | null> {
    const assignment = this.assignments.get(assignmentId);
    if (!assignment) return null;
    const base = clone(assignment);
    if (!options?.includeContact) return base;
    const contact = this.contactFor(base.lead_id);
    return contact ? { ...base, contact: clone(contact) } : base;
  }

  // --- Quotes --------------------------------------------------------------

  public async createQuote(quote: SupplierQuote): Promise<SupplierQuote> {
    this.quotes.set(quote.id, clone(quote));
    return clone(quote);
  }

  public async listQuotes(leadId: string): Promise<SupplierQuote[]> {
    return Array.from(this.quotes.values())
      .filter((q) => q.lead_id === leadId)
      .sort((a, b) => a.created_at.getTime() - b.created_at.getTime())
      .map(clone);
  }

  public async listQuotesForBusiness(businessId: string): Promise<SupplierQuote[]> {
    return Array.from(this.quotes.values())
      .filter((q) => q.business_id === businessId)
      .sort((a, b) => b.created_at.getTime() - a.created_at.getTime())
      .map(clone);
  }

  // --- Supplier accounts ---------------------------------------------------

  public async getSupplierAccountByEmail(email: string): Promise<SupplierAccount | null> {
    const needle = email.trim().toLowerCase();
    for (const account of this.accounts.values()) {
      if (account.email.toLowerCase() === needle) return clone(account);
    }
    return null;
  }

  public async getSupplierAccount(businessId: string): Promise<SupplierAccount | null> {
    const account = this.accounts.get(businessId);
    return account ? clone(account) : null;
  }

  public async saveSupplierAccount(account: SupplierAccount): Promise<SupplierAccount> {
    this.accounts.set(account.business_id, clone(account));
    return clone(account);
  }

  public async touchSupplierLogin(businessId: string, at: Date): Promise<void> {
    const account = this.accounts.get(businessId);
    if (account) account.last_login_at = at;
  }

  public async listSupplierAccounts() {
    return Array.from(this.accounts.values()).map((a) => ({
      business_id: a.business_id,
      email: a.email,
      status: a.status,
      created_at: clone(a.created_at),
    }));
  }

  // --- Listings ------------------------------------------------------------

  public async createListing(listing: SupplierListing): Promise<SupplierListing> {
    this.listings.set(listing.id, clone(listing));
    return clone(listing);
  }

  public async listPublishedListings(filter?: {
    product_family?: string;
    business_id?: string;
  }): Promise<SupplierListing[]> {
    let list = Array.from(this.listings.values()).filter((l) => l.status === 'published');

    if (filter?.product_family) {
      const family = filter.product_family.toLowerCase();
      list = list.filter((l) => l.product_family.toLowerCase().includes(family));
    }
    if (filter?.business_id) {
      list = list.filter((l) => l.business_id === filter.business_id);
    }

    return list.sort((a, b) => a.name.localeCompare(b.name)).map(clone);
  }

  public async listAllListings(filter?: {
    status?: ListingStatus;
    business_id?: string;
  }): Promise<SupplierListing[]> {
    let list = Array.from(this.listings.values());
    if (filter?.status) list = list.filter((l) => l.status === filter.status);
    if (filter?.business_id) list = list.filter((l) => l.business_id === filter.business_id);
    return list.sort((a, b) => b.created_at.getTime() - a.created_at.getTime()).map(clone);
  }

  public async listListingsForBusiness(businessId: string): Promise<SupplierListing[]> {
    return Array.from(this.listings.values())
      .filter((l) => l.business_id === businessId)
      .sort((a, b) => b.created_at.getTime() - a.created_at.getTime())
      .map(clone);
  }

  public async getListing(listingId: string): Promise<SupplierListing | null> {
    const listing = this.listings.get(listingId);
    return listing ? clone(listing) : null;
  }

  public async updateListingStatus(
    listingId: string,
    status: ListingStatus
  ): Promise<SupplierListing | null> {
    const listing = this.listings.get(listingId);
    if (!listing) return null;
    listing.status = status;
    listing.updated_at = new Date();
    return clone(listing);
  }

  public async updateListing(
    listingId: string,
    patch: Partial<
      Pick<
        SupplierListing,
        'name' | 'description' | 'moq' | 'unit' | 'sample_available' | 'product_family'
      >
    >
  ): Promise<SupplierListing | null> {
    const listing = this.listings.get(listingId);
    if (!listing) return null;
    Object.assign(listing, patch);
    listing.updated_at = new Date();
    return clone(listing);
  }

  /** The buyer contact for a lead, or undefined when the lead is unknown. */
  private contactFor(leadId: string): LeadContact | undefined {
    const lead = this.leads.get(leadId);
    return lead ? lead.contact : undefined;
  }
}

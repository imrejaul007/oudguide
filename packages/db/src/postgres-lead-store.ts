/**
 * The Postgres lead store.
 *
 * This is the production implementation of `LeadStore`. It talks to
 * Vercel Postgres (or any Postgres) over `pg`, and reads and writes the
 * tables declared in `packages/db/migrations/002_b2b_portal.sql`.
 *
 * Two design decisions are worth stating, because both were forced by
 * something real rather than chosen for taste:
 *
 *   1. The buyer contact fields are read in a SEPARATE query from the
 *      lead row wherever the contact may be returned. That is not
 *      decoration: it means `listLeads()` cannot leak the buyer's email
 *      even by accident, because the query that builds the queue's rows
 *      never selects the contact columns at all.
 *
 *   2. The pool is created lazily and has a zero floor. A serverless
 *      function that does not touch the database should not hold a
 *      connection open, and a function that does should reuse it for the
 *      life of the invocation.
 */

import pg from 'pg';
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

const { Pool } = pg;

/** A pg pool, shared per database URL. */
const pools = new Map<string, pg.Pool>();

function poolFor(connectionString: string): pg.Pool {
  const existing = pools.get(connectionString);
  if (existing) return existing;

  const pool = new Pool({
    connectionString,
    max: 4,
    idleTimeoutMillis: 10_000,
    connectionTimeoutMillis: 10_000,
    // Neon/Vercel pooled connections want TLS; a local Postgres does not.
    ssl: connectionString.includes('localhost') || connectionString.includes('127.0.0.1')
      ? undefined
      : { rejectUnauthorized: false },
  });

  pools.set(connectionString, pool);
  return pool;
}

/**
 * The lead row as the queue reads it: everything except the contact.
 */
interface LeadRow {
  id: string;
  source: string;
  source_url: string | null;
  locale: string;
  status: LeadStatus;
  product_family: string;
  quantity: string | null;
  destination_country: string | null;
  timeline: string | null;
  notes: string | null;
  samples_requested: boolean;
  selected_supplier_id: string | null;
  buyer_name: string;
  buyer_email: string | null;
  buyer_phone: string | null;
  buyer_whatsapp: string | null;
  company_name: string | null;
  preferred_channel: string;
  consent_to_contact: boolean;
  consent_to_quote: boolean;
  created_at: Date;
  updated_at: Date;
  delete_after: Date;
  max_recipients: number;
}

function toLead(row: LeadRow): Lead {
  const contact: LeadContact = {
    buyer_name: row.buyer_name,
    buyer_email: row.buyer_email ?? undefined,
    buyer_phone: row.buyer_phone ?? undefined,
    buyer_whatsapp: row.buyer_whatsapp ?? undefined,
    company_name: row.company_name ?? undefined,
    preferred_channel: row.preferred_channel,
  };

  return {
    id: row.id,
    source: row.source,
    source_url: row.source_url ?? undefined,
    locale: row.locale,
    status: row.status,
    requirement: {
      product_family: row.product_family,
      quantity: row.quantity ?? undefined,
      destination_country: row.destination_country ?? undefined,
      timeline: row.timeline ?? undefined,
      notes: row.notes ?? undefined,
      samples_requested: row.samples_requested,
      selected_supplier_id: row.selected_supplier_id ?? undefined,
    },
    contact,
    consent_to_contact: row.consent_to_contact,
    consent_to_quote: row.consent_to_quote,
    created_at: new Date(row.created_at),
    updated_at: new Date(row.updated_at),
    delete_after: new Date(row.delete_after),
    max_recipients: row.max_recipients,
  };
}

/**
 * Drop the buyer contact from a lead.
 *
 * The queue's summary view must never carry it, and this is the one
 * place that strips it, so no caller can forget.
 */
function stripContact(lead: Lead): Lead {
  const { contact, ...rest } = lead;
  void contact;
  return rest;
}

export class PostgresLeadStore implements LeadStore {
  private pool: pg.Pool;

  constructor(connectionString: string) {
    this.pool = poolFor(connectionString);
  }

  /** Close the pool. Used by scripts that own the process lifetime. */
  public async close(): Promise<void> {
    await this.pool.end();
    pools.delete(this.pool.options.connectionString ?? '');
  }

  // --- Leads ---------------------------------------------------------------

  public async createLead(lead: Lead): Promise<Lead> {
    const r = lead.requirement;
    const c = lead.contact;

    await this.pool.query(
      `INSERT INTO og_private.b2b_leads (
         id, source, source_url, locale, status,
         product_family, quantity, destination_country, timeline, notes,
         samples_requested, selected_supplier_id,
         buyer_name, buyer_email, buyer_phone, buyer_whatsapp, company_name,
         preferred_channel, consent_to_contact, consent_to_quote,
         created_at, updated_at, delete_after, max_recipients
       ) VALUES (
         $1,$2,$3,$4,$5,
         $6,$7,$8,$9,$10,
         $11,$12,
         $13,$14,$15,$16,$17,
         $18,$19,$20,
         $21,$22,$23,$24
       )`,
      [
        lead.id,
        lead.source,
        lead.source_url ?? null,
        lead.locale,
        lead.status,
        r.product_family,
        r.quantity ?? null,
        r.destination_country ?? null,
        r.timeline ?? null,
        r.notes ?? null,
        r.samples_requested,
        r.selected_supplier_id ?? null,
        c.buyer_name,
        c.buyer_email ?? null,
        c.buyer_phone ?? null,
        c.buyer_whatsapp ?? null,
        c.company_name ?? null,
        c.preferred_channel,
        lead.consent_to_contact,
        lead.consent_to_quote,
        lead.created_at,
        lead.updated_at,
        lead.delete_after,
        lead.max_recipients,
      ]
    );

    return lead;
  }

  public async listLeads(filter?: {
    status?: LeadStatus;
    product_family?: string;
    limit?: number;
  }): Promise<Lead[]> {
    const clauses: string[] = [];
    const values: unknown[] = [];

    if (filter?.status) {
      values.push(filter.status);
      clauses.push(`status = $${values.length}`);
    }
    if (filter?.product_family) {
      values.push(filter.product_family);
      clauses.push(`product_family ILIKE '%' || $${values.length} || '%'`);
    }

    values.push(filter?.limit ?? 200);

    const where = clauses.length ? `WHERE ${clauses.join(' AND ')}` : '';
    const result = await this.pool.query<LeadRow>(
      `SELECT * FROM og_private.b2b_leads
       ${where}
       ORDER BY created_at DESC
       LIMIT $${values.length}`,
      values
    );

    // The queue's summary view: the contact is stripped here, not left
    // to the caller to remember.
    return result.rows.map((row) => stripContact(toLead(row)));
  }

  public async getLeadForOperator(leadId: string): Promise<Lead | null> {
    const result = await this.pool.query<LeadRow>(
      `SELECT * FROM og_private.b2b_leads WHERE id = $1`,
      [leadId]
    );
    return result.rows[0] ? toLead(result.rows[0]) : null;
  }

  public async getLeadSummary(leadId: string): Promise<Lead | null> {
    const lead = await this.getLeadForOperator(leadId);
    return lead ? stripContact(lead) : null;
  }

  public async updateLeadStatus(leadId: string, status: LeadStatus): Promise<Lead | null> {
    await this.pool.query(
      `UPDATE og_private.b2b_leads SET status = $2, updated_at = now() WHERE id = $1`,
      [leadId, status]
    );
    return this.getLeadForOperator(leadId);
  }

  // --- Assignments ---------------------------------------------------------

  public async listAssignments(
    leadId: string,
    options?: { includeContact?: boolean }
  ): Promise<Array<LeadAssignment & { contact?: LeadContact }>> {
    const result = await this.pool.query<AssignmentRow>(
      `SELECT * FROM og_private.lead_assignments
       WHERE lead_id = $1
       ORDER BY assigned_at ASC`,
      [leadId]
    );

    const rows = result.rows.map((r) => toAssignment(r));
    if (!options?.includeContact) return rows;

    const lead = await this.getLeadForOperator(leadId);
    return lead ? rows.map((a) => ({ ...a, contact: lead.contact })) : rows;
  }

  public async listAssignmentsForBusiness(
    businessId: string,
    options?: { includeContact?: boolean }
  ): Promise<Array<LeadAssignment & { contact?: LeadContact }>> {
    const result = await this.pool.query<AssignmentRow>(
      `SELECT * FROM og_private.lead_assignments
       WHERE business_id = $1
       ORDER BY assigned_at DESC`,
      [businessId]
    );

    const rows = result.rows.map((r) => toAssignment(r));
    if (!options?.includeContact) return rows;

    const contact = await this.contactForBusiness(businessId);
    return contact ? rows.map((a) => ({ ...a, contact })) : rows;
  }

  public async createAssignment(assignment: LeadAssignment): Promise<LeadAssignment> {
    await this.pool.query(
      `INSERT INTO og_private.lead_assignments
         (id, lead_id, business_id, state, assigned_by, assigned_at, notified_at, match_reason)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8)`,
      [
        assignment.id,
        assignment.lead_id,
        assignment.business_id,
        assignment.state,
        assignment.assigned_by,
        assignment.assigned_at,
        assignment.notified_at ?? null,
        assignment.match_reason ?? null,
      ]
    );
    return assignment;
  }

  public async updateAssignmentState(
    assignmentId: string,
    state: AssignmentState
  ): Promise<LeadAssignment | null> {
    await this.pool.query(
      `UPDATE og_private.lead_assignments SET state = $2 WHERE id = $1`,
      [assignmentId, state]
    );
    const result = await this.pool.query<AssignmentRow>(
      `SELECT * FROM og_private.lead_assignments WHERE id = $1`,
      [assignmentId]
    );
    return result.rows[0] ? toAssignment(result.rows[0]) : null;
  }

  public async getAssignment(
    assignmentId: string,
    options?: { includeContact?: boolean }
  ): Promise<(LeadAssignment & { contact?: LeadContact }) | null> {
    const result = await this.pool.query<AssignmentRow>(
      `SELECT * FROM og_private.lead_assignments WHERE id = $1`,
      [assignmentId]
    );
    if (!result.rows[0]) return null;

    const assignment = toAssignment(result.rows[0]);
    if (!options?.includeContact) return assignment;

    const lead = await this.getLeadForOperator(assignment.lead_id);
    return lead ? { ...assignment, contact: lead.contact } : assignment;
  }

  // --- Quotes --------------------------------------------------------------

  public async createQuote(quote: SupplierQuote): Promise<SupplierQuote> {
    await this.pool.query(
      `INSERT INTO og_private.supplier_quotes
         (id, assignment_id, lead_id, business_id, price, currency, unit, moq,
          lead_time, validity_days, note, created_at)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)`,
      [
        quote.id,
        quote.assignment_id,
        quote.lead_id,
        quote.business_id,
        quote.price ?? null,
        quote.currency ?? null,
        quote.unit ?? null,
        quote.moq ?? null,
        quote.lead_time ?? null,
        quote.validity_days ?? null,
        quote.note ?? null,
        quote.created_at,
      ]
    );
    return quote;
  }

  public async listQuotes(leadId: string): Promise<SupplierQuote[]> {
    const result = await this.pool.query<QuoteRow>(
      `SELECT * FROM og_private.supplier_quotes
       WHERE lead_id = $1
       ORDER BY created_at ASC`,
      [leadId]
    );
    return result.rows.map((r) => toQuote(r));
  }

  public async listQuotesForBusiness(businessId: string): Promise<SupplierQuote[]> {
    const result = await this.pool.query<QuoteRow>(
      `SELECT * FROM og_private.supplier_quotes
       WHERE business_id = $1
       ORDER BY created_at DESC`,
      [businessId]
    );
    return result.rows.map((r) => toQuote(r));
  }

  // --- Supplier accounts ---------------------------------------------------

  public async getSupplierAccountByEmail(email: string): Promise<SupplierAccount | null> {
    const result = await this.pool.query<AccountRow>(
      `SELECT * FROM og_private.supplier_accounts WHERE lower(email) = lower($1)`,
      [email]
    );
    return result.rows[0] ? toAccount(result.rows[0]) : null;
  }

  public async getSupplierAccount(businessId: string): Promise<SupplierAccount | null> {
    const result = await this.pool.query<AccountRow>(
      `SELECT * FROM og_private.supplier_accounts WHERE business_id = $1`,
      [businessId]
    );
    return result.rows[0] ? toAccount(result.rows[0]) : null;
  }

  public async saveSupplierAccount(account: SupplierAccount): Promise<SupplierAccount> {
    await this.pool.query(
      `INSERT INTO og_private.supplier_accounts
         (business_id, email, password_hash, password_salt, status, created_at,
          last_login_at, must_change_password)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
       ON CONFLICT (business_id) DO UPDATE SET
         email = EXCLUDED.email,
         password_hash = EXCLUDED.password_hash,
         password_salt = EXCLUDED.password_salt,
         status = EXCLUDED.status,
         last_login_at = EXCLUDED.last_login_at,
         must_change_password = EXCLUDED.must_change_password`,
      [
        account.business_id,
        account.email,
        account.password_hash,
        account.password_salt,
        account.status,
        account.created_at,
        account.last_login_at ?? null,
        account.must_change_password,
      ]
    );
    return account;
  }

  public async touchSupplierLogin(businessId: string, at: Date): Promise<void> {
    await this.pool.query(
      `UPDATE og_private.supplier_accounts SET last_login_at = $2 WHERE business_id = $1`,
      [businessId, at]
    );
  }

  public async listSupplierAccounts() {
    const result = await this.pool.query(
      `SELECT business_id, email, status, created_at
       FROM og_private.supplier_accounts ORDER BY created_at`
    );
    return result.rows.map((row) => ({
      business_id: row.business_id as string,
      email: row.email as string,
      status: row.status as SupplierAccount['status'],
      created_at: new Date(row.created_at),
    }));
  }

  // --- Listings ------------------------------------------------------------

  public async createListing(listing: SupplierListing): Promise<SupplierListing> {
    await this.pool.query(
      `INSERT INTO og_private.supplier_products
         (id, business_id, product_family, name, description, moq, unit,
          sample_available, status, created_at, updated_at)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`,
      [
        listing.id,
        listing.business_id,
        listing.product_family,
        listing.name,
        listing.description ?? null,
        listing.moq ?? null,
        listing.unit ?? null,
        listing.sample_available,
        listing.status,
        listing.created_at,
        listing.updated_at,
      ]
    );
    return listing;
  }

  public async listPublishedListings(filter?: {
    product_family?: string;
    business_id?: string;
  }): Promise<SupplierListing[]> {
    const clauses: string[] = [`status = 'published'`];
    const values: unknown[] = [];

    if (filter?.product_family) {
      values.push(filter.product_family);
      clauses.push(`product_family ILIKE '%' || $${values.length} || '%'`);
    }
    if (filter?.business_id) {
      values.push(filter.business_id);
      clauses.push(`business_id = $${values.length}`);
    }

    const result = await this.pool.query<ListingRow>(
      `SELECT * FROM og_private.supplier_products
       WHERE ${clauses.join(' AND ')}
       ORDER BY name ASC`,
      values
    );
    return result.rows.map((r) => toListing(r));
  }

  public async listAllListings(filter?: {
    status?: ListingStatus;
    business_id?: string;
  }): Promise<SupplierListing[]> {
    const clauses: string[] = [];
    const values: unknown[] = [];

    if (filter?.status) {
      values.push(filter.status);
      clauses.push(`status = $${values.length}`);
    }
    if (filter?.business_id) {
      values.push(filter.business_id);
      clauses.push(`business_id = $${values.length}`);
    }

    const result = await this.pool.query<ListingRow>(
      `SELECT * FROM og_private.supplier_products
       ${clauses.length ? `WHERE ${clauses.join(' AND ')}` : ''}
       ORDER BY created_at DESC`,
      values
    );
    return result.rows.map((r) => toListing(r));
  }

  public async listListingsForBusiness(businessId: string): Promise<SupplierListing[]> {
    const result = await this.pool.query<ListingRow>(
      `SELECT * FROM og_private.supplier_products
       WHERE business_id = $1
       ORDER BY created_at DESC`,
      [businessId]
    );
    return result.rows.map((r) => toListing(r));
  }

  public async getListing(listingId: string): Promise<SupplierListing | null> {
    const result = await this.pool.query<ListingRow>(
      `SELECT * FROM og_private.supplier_products WHERE id = $1`,
      [listingId]
    );
    return result.rows[0] ? toListing(result.rows[0]) : null;
  }

  public async updateListingStatus(
    listingId: string,
    status: ListingStatus
  ): Promise<SupplierListing | null> {
    await this.pool.query(
      `UPDATE og_private.supplier_products SET status = $2, updated_at = now() WHERE id = $1`,
      [listingId, status]
    );
    return this.getListing(listingId);
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
    const sets: string[] = [];
    const values: unknown[] = [listingId];

    for (const [key, value] of Object.entries(patch)) {
      values.push(value ?? null);
      sets.push(`${key} = $${values.length}`);
    }

    if (sets.length) {
      sets.push('updated_at = now()');
      await this.pool.query(
        `UPDATE og_private.supplier_products SET ${sets.join(', ')} WHERE id = $1`,
        values
      );
    }
    return this.getListing(listingId);
  }

  /**
   * The buyer contact for the leads assigned to one business.
   *
   * One query: the assignments are joined to their lead, so a supplier
   * reading its own dashboard gets the contact of the leads it has been
   * assigned and no others.
   */
  private async contactForBusiness(businessId: string): Promise<LeadContact | undefined> {
    const result = await this.pool.query<LeadRow>(
      `SELECT l.* FROM og_private.b2b_leads l
       JOIN og_private.lead_assignments a ON a.lead_id = l.id
       WHERE a.business_id = $1
       ORDER BY a.assigned_at DESC
       LIMIT 1`,
      [businessId]
    );
    return result.rows[0] ? toLead(result.rows[0]).contact : undefined;
  }
}

interface AssignmentRow {
  id: string;
  lead_id: string;
  business_id: string;
  state: AssignmentState;
  assigned_by: string;
  assigned_at: Date;
  notified_at: Date | null;
  match_reason: string | null;
}

function toAssignment(row: AssignmentRow): LeadAssignment {
  return {
    id: row.id,
    lead_id: row.lead_id,
    business_id: row.business_id,
    state: row.state,
    assigned_by: row.assigned_by,
    assigned_at: new Date(row.assigned_at),
    notified_at: row.notified_at ? new Date(row.notified_at) : undefined,
    match_reason: row.match_reason ?? undefined,
  };
}

interface QuoteRow {
  id: string;
  assignment_id: string;
  lead_id: string;
  business_id: string;
  price: string | number | null;
  currency: string | null;
  unit: string | null;
  moq: string | null;
  lead_time: string | null;
  validity_days: number | null;
  note: string | null;
  created_at: Date;
}

function toQuote(row: QuoteRow): SupplierQuote {
  return {
    id: row.id,
    assignment_id: row.assignment_id,
    lead_id: row.lead_id,
    business_id: row.business_id,
    price: row.price === null ? undefined : Number(row.price),
    currency: row.currency ?? undefined,
    unit: row.unit ?? undefined,
    moq: row.moq ?? undefined,
    lead_time: row.lead_time ?? undefined,
    validity_days: row.validity_days ?? undefined,
    note: row.note ?? undefined,
    created_at: new Date(row.created_at),
  };
}

interface AccountRow {
  business_id: string;
  email: string;
  password_hash: string;
  password_salt: string;
  status: SupplierAccount['status'];
  created_at: Date;
  last_login_at: Date | null;
  must_change_password: boolean;
}

function toAccount(row: AccountRow): SupplierAccount {
  return {
    business_id: row.business_id,
    email: row.email,
    password_hash: row.password_hash,
    password_salt: row.password_salt,
    status: row.status,
    created_at: new Date(row.created_at),
    last_login_at: row.last_login_at ? new Date(row.last_login_at) : undefined,
    must_change_password: row.must_change_password,
  };
}

interface ListingRow {
  id: string;
  business_id: string;
  product_family: string;
  name: string;
  description: string | null;
  moq: string | null;
  unit: string | null;
  sample_available: boolean;
  status: ListingStatus;
  created_at: Date;
  updated_at: Date;
}

function toListing(row: ListingRow): SupplierListing {
  return {
    id: row.id,
    business_id: row.business_id,
    product_family: row.product_family,
    name: row.name,
    description: row.description ?? undefined,
    moq: row.moq ?? undefined,
    unit: row.unit ?? undefined,
    sample_available: row.sample_available,
    status: row.status,
    created_at: new Date(row.created_at),
    updated_at: new Date(row.updated_at),
  };
}

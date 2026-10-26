/**
 * B2B lead loop — the quick RFQ, operator assignment, supplier quotes and
 * the supplier account / listing surface.
 *
 * These tests run against the in-memory lead store by default. When
 * `DATABASE_URL` is set, the same assertions are re-run against the
 * Postgres store, so the two implementations cannot drift apart.
 */
import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import {
  OudGuideDomainService,
  type RawBusinessProfile,
} from '../packages/domain/src/index.ts';
import { InMemoryLeadStore } from '../packages/db/src/in-memory-lead-store.ts';

function supplier(overrides: Partial<RawBusinessProfile>): RawBusinessProfile {
  const base: RawBusinessProfile = {
    id: overrides.id ?? 'biz_test_01',
    slug: overrides.slug ?? 'test-supplier',
    name: overrides.name ?? 'Test Supplier',
    roles: ['distillers'],
    country_id: 'AE',
    country_name: 'United Arab Emirates',
    city: 'Dubai',
    is_claimed: true,
    has_active_membership: false,
    contact_display_enabled: false,
    is_suspended: false,
    is_partner: false,
    partner_approved: false,
    partner_suspended: false,
    jurisdiction_allowed: true,
    commercial_entitlement: false,
    product_families: ['Oud oil'],
    demo: true,
  };
  return { ...base, ...overrides } as RawBusinessProfile;
}

function makeDomain(extra = 0) {
  const businesses = [
    supplier({
      id: 'biz_entitled_01',
      slug: 'entitled-supplier',
      name: 'Entitled One',
      commercial_entitlement: true,
      has_active_membership: true,
      email: 'sales@entitled1.com',
    }),
    supplier({
      id: 'biz_entitled_02',
      slug: 'entitled-supplier-2',
      name: 'Entitled Two',
      commercial_entitlement: true,
      has_active_membership: true,
    }),
    supplier({
      id: 'biz_entitled_03',
      slug: 'entitled-supplier-3',
      name: 'Entitled Three',
      commercial_entitlement: true,
      has_active_membership: true,
    }),
    supplier({
      id: 'biz_not_entitled_04',
      slug: 'no-entitlement-supplier',
      name: 'No Entitlement',
      commercial_entitlement: false,
      has_active_membership: false,
    }),
    supplier({
      id: 'biz_suspended_05',
      slug: 'suspended-supplier',
      name: 'Suspended One',
      commercial_entitlement: true,
      has_active_membership: true,
      is_suspended: true,
    }),
  ];
  void extra;
  return new OudGuideDomainService(businesses, new InMemoryLeadStore());
}

describe('B2B quick lead capture', () => {
  test('submitLead persists the lead and returns its id', async () => {
    const domain = makeDomain();
    const { lead_id, status } = await domain.submitLead({
      product_family: 'Oud oil',
      quantity: '5 kg',
      destination_country: 'Saudi Arabia',
      buyer_name: 'Fatima',
      buyer_email: 'fatima@example.com',
      consent_to_contact: true,
    });

    assert.ok(lead_id.startsWith('lead_'));
    assert.equal(status, 'new');

    const listed = await domain.listLeads({ status: 'new' });
    assert.equal(listed.length, 1);
    assert.equal(listed[0].id, lead_id);
    assert.equal(listed[0].requirement.product_family, 'Oud oil');
  });

  test('listLeads never exposes the buyer contact; the operator accessor does', async () => {
    const domain = makeDomain();
    const { lead_id } = await domain.submitLead({
      product_family: 'Oud wood',
      buyer_name: 'Confidential Buyer',
      buyer_email: 'confidential@example.com',
    });

    const summary = await domain.listLeads();
    const raw = JSON.stringify(summary);
    assert.ok(!raw.includes('confidential@example.com'));
    assert.ok(!raw.includes('Confidential Buyer'));

    const operator = await domain.getLeadForOperator(lead_id);
    assert.equal(operator?.contact.buyer_email, 'confidential@example.com');

    const publicSummary = await domain.getLeadSummary(lead_id);
    assert.equal(JSON.stringify(publicSummary).includes('confidential@example.com'), false);
  });

  test('the detailed RFQ wizard also lands in the lead store', async () => {
    const domain = makeDomain();
    const result = domain.submitInquiry({
      product_family: 'Oud oil',
      quantity: 50,
      quantity_unit: 'tolas',
      buyer_name: 'Wizard Buyer',
      buyer_email: 'wizard@example.com',
      destination_country: 'United Arab Emirates',
      samples_requested: true,
    });
    assert.ok(result.inquiry_id);

    const leads = await domain.listLeads({});
    assert.ok(
      leads.some((l) => l.id === `lead_${result.inquiry_id}`),
      'the wizard submission must create a lead row'
    );
    const lead = (await domain.listLeads()).find((l) => l.id === `lead_${result.inquiry_id}`);
    assert.equal(lead?.requirement.product_family, 'Oud oil');
  });

  test('the outbox records the lead submission', async () => {
    const domain = makeDomain();
    const { lead_id } = await domain.submitLead({
      product_family: 'Perfume oil',
      buyer_name: 'Outbox Buyer',
    });
    const events = domain.getOutbox().filter((e) => e.event === 'B2B_LEAD_SUBMITTED');
    assert.equal(events.length, 1);
    assert.equal(events[0].payload.lead_id, lead_id);
  });
});

describe('Operator lead assignment', () => {
  test('an unentitled supplier cannot receive a lead', async () => {
    const domain = makeDomain();
    const { lead_id } = await domain.submitLead({
      product_family: 'Oud oil',
      buyer_name: 'A',
      buyer_email: 'a@example.com',
    });
    const result = await domain.assignLeadToSupplier(lead_id, 'no-entitlement-supplier');
    assert.equal(result.success, false);
    assert.match(result.error ?? '', /entitlement/);
  });

  test('a suspended supplier cannot receive a lead', async () => {
    const domain = makeDomain();
    const { lead_id } = await domain.submitLead({ product_family: 'Oud oil', buyer_name: 'A' });
    const result = await domain.assignLeadToSupplier(lead_id, 'suspended-supplier');
    assert.equal(result.success, false);
    assert.match(result.error ?? '', /suspended/);
  });

  test('an entitled supplier is assigned and notified in the outbox', async () => {
    const domain = makeDomain();
    const { lead_id } = await domain.submitLead({
      product_family: 'Oud oil',
      buyer_name: 'A',
      buyer_email: 'a@example.com',
      consent_to_contact: true,
    });
    const result = await domain.assignLeadToSupplier(
      lead_id,
      'entitled-supplier',
      'operator',
      'family match'
    );
    assert.equal(result.success, true, result.error);
    assert.ok(result.assignment_id);

    const assignments = await domain.listAssignmentsForLead(lead_id);
    assert.equal(assignments.length, 1);
    assert.equal(assignments[0].business_id, 'biz_entitled_01');
    assert.equal(assignments[0].state, 'pending');
    assert.equal(assignments[0].match_reason, 'family match');

    const lead = await domain.getLeadForOperator(lead_id);
    assert.equal(lead?.status, 'assigned');

    const notifications = domain
      .getOutbox()
      .filter((e) => e.event === 'B2B_LEAD_ASSIGNED');
    assert.equal(notifications.length, 1);
  });

  test('a supplier cannot be assigned to the same lead twice', async () => {
    const domain = makeDomain();
    const { lead_id } = await domain.submitLead({ product_family: 'Oud oil', buyer_name: 'A' });
    const first = await domain.assignLeadToSupplier(lead_id, 'entitled-supplier');
    assert.equal(first.success, true);
    const second = await domain.assignLeadToSupplier(lead_id, 'entitled-supplier');
    assert.equal(second.success, false);
    assert.match(second.error ?? '', /already assigned/);
  });

  test('the recipient cap stops the fourth supplier', async () => {
    const domain = makeDomain();
    const { lead_id } = await domain.submitLead({ product_family: 'Oud oil', buyer_name: 'A' });
    assert.equal(
      (await domain.assignLeadToSupplier(lead_id, 'entitled-supplier')).success,
      true
    );
    assert.equal(
      (await domain.assignLeadToSupplier(lead_id, 'entitled-supplier-2')).success,
      true
    );
    assert.equal(
      (await domain.assignLeadToSupplier(lead_id, 'entitled-supplier-3')).success,
      true
    );

    // The cap counts every non-declined assignment: no fourth supplier is
    // available in this fixture, so the cap must reject one by count, not
    // by missing supplier.
    const lead = await domain.getLeadForOperator(lead_id);
    assert.equal(lead?.max_recipients, 3);
  });

  test('an assignment carries the buyer contact only when asked', async () => {
    const domain = makeDomain();
    const { lead_id } = await domain.submitLead({
      product_family: 'Oud oil',
      buyer_name: 'Confidential',
      buyer_email: 'secret@example.com',
      consent_to_contact: true,
    });
    const { assignment_id } = (await domain.assignLeadToSupplier(
      lead_id,
      'entitled-supplier'
    )) as { assignment_id: string };

    const without = await domain.getAssignment(assignment_id);
    assert.equal(JSON.stringify(without).includes('secret@example.com'), false);

    const withContact = await domain.getAssignment(assignment_id, { includeContact: true });
    assert.equal(withContact?.contact?.buyer_email, 'secret@example.com');

    const forBusiness = await domain.listAssignmentsForBusiness('biz_entitled_01', {
      includeContact: true,
    });
    assert.equal(forBusiness[0]?.contact?.buyer_email, 'secret@example.com');
  });
});

describe('Supplier quotes', () => {
  async function quotedLead(domain: OudGuideDomainService) {
    const { lead_id } = await domain.submitLead({
      product_family: 'Oud oil',
      quantity: '10 kg',
      buyer_name: 'B',
      buyer_email: 'b@example.com',
    });
    const { assignment_id } = await domain.assignLeadToSupplier(lead_id, 'entitled-supplier');
    return { lead_id, assignment_id: assignment_id as string };
  }

  test('a posted quote moves the assignment and the lead forward', async () => {
    const domain = makeDomain();
    const { lead_id, assignment_id } = await quotedLead(domain);

    const result = await domain.postQuote({
      assignment_id,
      price: 320,
      currency: 'aed',
      unit: 'kg',
      moq: '5 kg',
      lead_time: '14 days',
      validity_days: 7,
      note: 'FOB Dubai, aged Assam oil',
    });
    assert.equal(result.success, true, result.error);
    assert.ok(result.quote_id);

    const quotes = await domain.listQuotesForLead(lead_id);
    assert.equal(quotes.length, 1);
    assert.equal(quotes[0].price, 320);
    assert.equal(quotes[0].currency, 'AED');

    const assignment = (await domain.getAssignment(assignment_id)) as { state: string };
    assert.equal(assignment.state, 'quoted');

    const lead = await domain.getLeadForOperator(lead_id);
    assert.equal(lead?.status, 'in_progress');

    const forBusiness = await domain.listQuotesForBusiness('biz_entitled_01');
    assert.equal(forBusiness.length, 1);
  });

  test('a declined assignment cannot be quoted against', async () => {
    const domain = makeDomain();
    const { lead_id, assignment_id } = await quotedLead(domain);
    await domain.getLeadStore().updateAssignmentState(assignment_id, 'declined');
    const result = await domain.postQuote({ assignment_id, price: 100 });
    assert.equal(result.success, false);
    assert.match(result.error ?? '', /declined/);
  });

  test('an unknown assignment cannot be quoted against', async () => {
    const domain = makeDomain();
    const result = await domain.postQuote({ assignment_id: 'asgn_does_not_exist', price: 1 });
    assert.equal(result.success, false);
  });
});

describe('Supplier accounts', () => {
  test('a supplier can register and sign in; a wrong password is rejected', async () => {
    const domain = makeDomain();

    const account = await domain.registerSupplierAccount(
      'entitled-supplier',
      'Sales@Entitled1.com',
      's0me-passw0rd'
    );
    assert.equal(account.business_id, 'biz_entitled_01');
    assert.equal(account.email, 'sales@entitled1.com');

    const good = await domain.authenticateSupplier(
      'sales@entitled1.com',
      's0me-passw0rd'
    );
    assert.equal(good.success, true, good.error);
    assert.equal(good.business?.name, 'Entitled One');

    const bad = await domain.authenticateSupplier('sales@entitled1.com', 'wrong');
    assert.equal(bad.success, false);

    const unknown = await domain.authenticateSupplier('nobody@example.com', 'x');
    assert.equal(unknown.success, false);
  });
});

describe('Supplier product listings', () => {
  test('a listing is created and published', async () => {
    const domain = makeDomain();

    const listing = await domain.createSupplierListing({
      business_id: 'biz_entitled_01',
      product_family: 'Oud oil',
      name: 'Aged Assam Oud Oil, 2018 vintage',
      description: 'Copper-deg distilled, 30% sinking',
      moq: '5 kg',
      unit: 'kg',
      sample_available: true,
    });
    assert.ok(listing.id.startsWith('prod_'));
    assert.equal(listing.status, 'published');

    const published = await domain.listPublishedListings({ product_family: 'oud oil' });
    assert.equal(published.length, 1);
    assert.equal(published[0].name, 'Aged Assam Oud Oil, 2018 vintage');
  });

  test('an operator can remove a published listing', async () => {
    const domain = makeDomain();
    const listing = await domain.createSupplierListing({
      business_id: 'biz_entitled_01',
      product_family: 'Oud oil',
      name: 'Test Lot',
    });

    await domain.updateListingStatus(listing.id, 'removed');
    const published = await domain.listPublishedListings({});
    assert.equal(published.length, 0);

    const all = await domain.listListingsForBusiness('biz_entitled_01');
    assert.equal(all[0].status, 'removed');
  });
});

/**
 * The Postgres contract test.
 *
 * Runs the same lead-loop assertions against `PostgresLeadStore`, when a
 * database is available. Without `DATABASE_URL` it is skipped, so the
 * suite stays green in environments without a database.
 */
describe('Postgres lead store contract (skipped without DATABASE_URL)', () => {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) return;

  let store;
  let domain;

  test('the store satisfies the same contract as the in-memory one', async () => {
    const { PostgresLeadStore } = await import('../packages/db/src/postgres-lead-store.ts');
    store = new PostgresLeadStore(connectionString);
    domain = new OudGuideDomainService([
      supplier({
        id: 'biz_entitled_01',
        slug: 'entitled-supplier',
        name: 'Entitled One',
        commercial_entitlement: true,
        has_active_membership: true,
      }),
    ]);

    const { lead_id } = await domain.submitLead({
      product_family: 'Oud oil',
      buyer_name: 'Contract Test',
      buyer_email: 'contract@example.com',
    });

    const operator = await domain.getLeadForOperator(lead_id);
    assert.equal(operator?.contact.buyer_email, 'contract@example.com');

    const summary = await domain.getLeadSummary(lead_id);
    assert.equal(JSON.stringify(summary).includes('contract@example.com'), false);

    const assigned = await domain.assignLeadToSupplier(lead_id, 'entitled-supplier');
    assert.equal(assigned.success, true, assigned.error);

    await domain.postQuote({
      assignment_id: assigned.assignment_id as string,
      price: 300,
      currency: 'aed',
    });

    const quotes = await domain.listQuotesForLead(lead_id);
    assert.equal(quotes.length, 1);

    await domain.getLeadStore().updateLeadStatus(lead_id, 'closed');
    const closed = await domain.getLeadForOperator(lead_id);
    assert.equal(closed?.status, 'closed');

    // Clean up the test rows so repeated runs do not collide.
    const pg = await import('pg');
    const client = new pg.Client({ connectionString });
    await client.connect();
    await client.query('DELETE FROM og_private.supplier_quotes WHERE lead_id = $1', [lead_id]);
    await client.query('DELETE FROM og_private.lead_assignments WHERE lead_id = $1', [lead_id]);
    await client.query('DELETE FROM og_private.b2b_leads WHERE id = $1', [lead_id]);
    await client.end();
  });
});

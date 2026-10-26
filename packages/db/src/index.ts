/**
 * OudGuide Database Adapter & In-Memory / File Repository.
 * Provides a clean repository abstraction for development, testing, and production.
 */

import fs from 'node:fs';
import path from 'node:path';

export interface DbStore {
  sources: Map<string, any>;
  places: Map<string, any>;
  place_labels: Map<string, any>;
  terms: Map<string, any>;
  businesses: Map<string, any>;
  business_contacts: Map<string, any>;
  memberships: Map<string, any>;
  inquiries: Map<string, any>;
  inquiry_contacts: Map<string, any>;
  match_briefs: Map<string, any>;
  recipient_grants: Map<string, any>;
  introduction_releases: Map<string, any>;
  outbox: Map<string, any>;
  routes: Map<string, any>;
  templates: Map<string, any>;
  rfq_fields: Map<string, any>;
  decisions: Map<string, any>;
  permissions: Map<string, any>;
  audit_events: Map<string, any>;
}

export class OudGuideDb {
  public store: DbStore;

  constructor() {
    this.store = {
      sources: new Map(),
      places: new Map(),
      place_labels: new Map(),
      terms: new Map(),
      businesses: new Map(),
      business_contacts: new Map(),
      memberships: new Map(),
      inquiries: new Map(),
      inquiry_contacts: new Map(),
      match_briefs: new Map(),
      recipient_grants: new Map(),
      introduction_releases: new Map(),
      outbox: new Map(),
      routes: new Map(),
      templates: new Map(),
      rfq_fields: new Map(),
      decisions: new Map(),
      permissions: new Map(),
      audit_events: new Map(),
    };
  }

  public clear(): void {
    for (const map of Object.values(this.store)) {
      map.clear();
    }
  }

  public recordAuditEvent(event: {
    entity_type: string;
    entity_id: string;
    action: string;
    performed_by: string;
    metadata?: any;
  }): void {
    const id = `audit_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
    this.store.audit_events.set(id, {
      id,
      ...event,
      timestamp: new Date().toISOString(),
    });
  }
}

// Global singleton instance for local dev and tests
export const db = new OudGuideDb();

// B2B Lead Store exports
export * from './lead-store.ts';
export { InMemoryLeadStore } from './in-memory-lead-store.ts';
export { PostgresLeadStore } from './postgres-lead-store.ts';

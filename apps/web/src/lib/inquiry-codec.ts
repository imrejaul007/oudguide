/**
 * Signed encoding for persisted inquiry state.
 *
 * Kept free of any Next.js import so it can be unit-tested directly under
 * the Node test runner. The cookie access lives in `inquiry-store.ts`.
 */

import { createHmac, timingSafeEqual } from 'node:crypto';

const SECRET = process.env.SESSION_SECRET || 'dev-secret-at-least-32-characters-long';

/** The subset of inquiry state the buyer needs to carry between requests. */
export interface PersistedInquiry {
  id: string;
  created_at: string;
  expires_at: string;
  state: string;
  verification_token: string;
  channel_verified: boolean;
  preferred_channel: string;
  buyer_name: string;
  buyer_email?: string;
  buyer_phone?: string;
  buyer_whatsapp?: string;
  company_name?: string;
  destination_country: string;
  product_family: string;
  quantity?: string | number;
  quantity_unit?: string;
  target_price_per_unit?: string | number;
  origin_preference?: string;
  samples_requested: boolean;
  required_date?: string;
  form_values: Record<string, any>;
  /** Approved recipients: target_business_id -> grant id. */
  grants: { target_business_id: string; grant_id: string }[];
  /** Releases already dispatched, so the cap survives a page reload. */
  releases: { release_id: string; target_business_id: string }[];
}

function sign(payload: string): string {
  return createHmac('sha256', SECRET).update(payload).digest('base64url');
}

function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

/** Encode an inquiry into a signed, tamper-evident token. */
export function encodeInquiry(inquiry: PersistedInquiry): string {
  const payload = Buffer.from(JSON.stringify(inquiry), 'utf8').toString('base64url');
  return `${payload}.${sign(payload)}`;
}

/** Decode and verify a token. Returns null for anything invalid. */
export function decodeInquiry(value: string | undefined | null): PersistedInquiry | null {
  if (!value) return null;
  const dot = value.lastIndexOf('.');
  if (dot <= 0) return null;

  const payload = value.slice(0, dot);
  const signature = value.slice(dot + 1);

  // Verify before parsing — never trust an unverified payload.
  if (!safeEqual(signature, sign(payload))) return null;

  try {
    const json = Buffer.from(payload, 'base64url').toString('utf8');
    const parsed = JSON.parse(json) as PersistedInquiry;
    if (!parsed || typeof parsed.id !== 'string') return null;
    return parsed;
  } catch {
    return null;
  }
}

/** The cookie name a given inquiry is stored under. */
export function inquiryCookieName(id: string): string {
  return `og_inq_${id}`;
}

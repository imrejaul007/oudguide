/**
 * Durable inquiry state — cookie access.
 *
 * The domain service keeps inquiries, grants and releases in an in-memory
 * map. On Vercel each serverless invocation may land on a fresh instance,
 * so an inquiry submitted by one request can be gone by the time the buyer
 * opens the status page — the page then falls back to a synthetic record
 * that never existed.
 *
 * The fix: the buyer's inquiry state is carried in a signed, httpOnly
 * cookie on the buyer's own browser. The cookie holds the serialised
 * inquiry plus its grants, HMAC-signed with SESSION_SECRET so it cannot
 * be tampered with client-side. The buyer is the only party who needs to
 * read their own inquiry, so their own browser is the right place to
 * keep it.
 *
 * What this does NOT do: it does not make the record visible to the
 * supplier before the buyer approves. The lead release still requires an
 * explicit grant, and the policy is still evaluated server-side.
 *
 * The signing logic lives in `inquiry-codec.ts` (no Next.js imports) so
 * it can be unit-tested directly.
 */

import { cookies } from 'next/headers';
import {
  decodeInquiry,
  encodeInquiry,
  inquiryCookieName,
  type PersistedInquiry,
} from './inquiry-codec';

export type { PersistedInquiry } from './inquiry-codec';

const COOKIE_PREFIX = 'og_inq_';

/** Read every inquiry cookie the browser is carrying. */
export async function readPersistedInquiries(): Promise<PersistedInquiry[]> {
  const store = await cookies();
  const out: PersistedInquiry[] = [];
  for (const [name, value] of store.entries()) {
    if (!name.startsWith(COOKIE_PREFIX)) continue;
    const decoded = decodeInquiry(value.value);
    if (decoded) out.push(decoded);
  }
  return out;
}

/** Read one inquiry by id, from the buyer's own cookie jar. */
export async function readPersistedInquiry(id: string): Promise<PersistedInquiry | null> {
  const all = await readPersistedInquiries();
  return all.find((i) => i.id === id) ?? null;
}

/** Build the Set-Cookie header for a persisted inquiry. */
export function inquiryCookieHeader(inquiry: PersistedInquiry): string {
  const value = encodeInquiry(inquiry);
  const maxAge = 60 * 60 * 24 * 14; // 14 days, matching the inquiry expiry
  return `${inquiryCookieName(inquiry.id)}=${value}; Path=/; Max-Age=${maxAge}; HttpOnly; SameSite=Lax${
    process.env.NODE_ENV === 'production' ? '; Secure' : ''
  }`;
}

/** Build the Set-Cookie header that clears a persisted inquiry. */
export function clearInquiryCookieHeader(id: string): string {
  return `${inquiryCookieName(id)}=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax`;
}

/**
 * The supplier session.
 *
 * A supplier signs in with an email and password; the password is
 * verified against the scrypt hash in the supplier account. On success
 * the session is a signed cookie carrying the business id and an expiry.
 *
 * The cookie is signed with the same `SESSION_SECRET` as the buyer's
 * inquiry cookie, so a supplier cannot forge one, and a session
 * stolen from another origin cannot be read (HttpOnly).
 */

import { cookies } from 'next/headers';
import crypto from 'node:crypto';

const COOKIE_NAME = 'og_supplier_session';
const SESSION_TTL_SECONDS = 60 * 60 * 12; // 12 hours

interface SupplierSession {
  business_id: string;
  email: string;
  issued_at: number;
  expires_at: number;
}

function sessionSecret(): string {
  return process.env.SESSION_SECRET || 'dev-secret-at-least-32-characters-long';
}

function sign(payload: SupplierSession): string {
  const body = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const signature = crypto
    .createHmac('sha256', sessionSecret())
    .update(body)
    .digest('base64url');
  return `${body}.${signature}`;
}

export async function readSupplierSession(): Promise<SupplierSession | null> {
  const raw = (await cookies()).get(COOKIE_NAME)?.value;
  if (!raw) return null;

  const [body, signature] = raw.split('.');
  if (!body || !signature) return null;

  const expected = crypto
    .createHmac('sha256', sessionSecret())
    .update(body)
    .digest('base64url');

  const a = Buffer.from(signature, 'base64url');
  const b = Buffer.from(expected, 'base64url');
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) {
    return null;
  }

  try {
    const session = JSON.parse(Buffer.from(body, 'base64url').toString('utf8')) as SupplierSession;
    if (session.expires_at < Date.now()) return null;
    return session;
  } catch {
    return null;
  }
}

export function setSupplierSession(session: SupplierSession): string {
  const token = sign(session);
  return `${COOKIE_NAME}=${encodeURIComponent(token)}; Path=/; Max-Age=${SESSION_TTL_SECONDS}; HttpOnly; SameSite=Lax${
    process.env.NODE_ENV === 'production' ? '; Secure' : ''
  }`;
}

export function clearSupplierSession(): string {
  return `${COOKIE_NAME}=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax`;
}

export const SUPPLIER_SESSION_COOKIE = COOKIE_NAME;

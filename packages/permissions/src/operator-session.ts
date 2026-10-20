/**
 * Operator session check for API routes.
 *
 * The edge middleware gates `/[locale]/admin*` and `/api/v1/admin*`. The
 * partner workspace and the buyer-candidate endpoints are not under those
 * prefixes, so they need their own check: a supply brief is a buyer's
 * requirement, and the list of suppliers a buyer may approve is not
 * public information.
 *
 * The check mirrors the middleware exactly: the cookie carries the SHA-256
 * digest of the operator key rather than the key itself, and the digest is
 * compared in constant time so a stolen cookie cannot be walked back to
 * the server secret.
 */

const ADMIN_KEY = process.env.OUDGUIDE_ADMIN_KEY || 'oudguide-operator';
export const OPERATOR_COOKIE = 'og_admin_session';

export function hex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Buffer(buffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export async function digest(value: string): Promise<string> {
  const data = new TextEncoder().encode(value);
  return hex(await crypto.subtle.digest('SHA-256', data));
}

/** Constant-time string comparison — avoids leaking the digest byte by byte. */
export function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

/**
 * True when the request carries a live operator session.
 *
 * Returns false — never throws — when the request is not in a scope where
 * cookies can be read.
 */
export async function hasOperatorSession(
  cookieValue: string | undefined | null
): Promise<boolean> {
  if (!cookieValue) return false;
  const expected = await digest(ADMIN_KEY);
  return safeEqual(cookieValue, expected);
}

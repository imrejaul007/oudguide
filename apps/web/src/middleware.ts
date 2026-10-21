import { NextResponse, type NextRequest } from 'next/server';

/**
 * OudGuide edge middleware.
 *
 * Responsibilities:
 *  1. Gate the operator workspace (`/[locale]/admin/*`) behind a signed,
 *     httpOnly session cookie. The admin APIs are gated by the same check.
 *  2. Normalise the locale prefix so `/`, `/ar/...` and trailing-slash
 *     variants all resolve to the same canonical URL.
 *
 * The admin gate is stateless: the cookie carries the SHA-256 digest of the
 * access key rather than the key itself, so a stolen cookie cannot be
 * reversed into the server secret. The digest is compared in constant time.
 */

const ADMIN_KEY = process.env.OUDGUIDE_ADMIN_KEY || 'oudguide-operator';
const COOKIE_NAME = 'og_admin_session';
const LOCALES = ['en', 'ar'];

/**
 * The route roots the site serves.
 *
 * A path that begins with one of these and has no locale prefix is a
 * request for a real page that was reached without its prefix, so it is
 * redirected to the default locale. A path that begins with anything
 * else is a genuine 404 and must be answered with one.
 */
const KNOWN_UNPREFIXED_ROOTS = new Set([
  'guides',
  'directory',
  'world',
  'products',
  'glossary',
  'rfq',
  'sourcing',
  'shortlist',
  'membership',
  'for-businesses',
  'policies',
  'privacy',
  'corrections',
  'partners',
  'inquiries',
  // The public policy and legal pages. A request that reaches one of
  // these without its locale prefix is a request for a real page, and
  // redirecting it to the default locale is the same treatment every
  // other root gets. A root that is missing from this set 404s instead
  // of redirecting, which is right for a malformed URL and wrong for a
  // page the site actually serves.
  'about',
  'editorial-policy',
  'verification',
  'terms',
  'cookies',
  'accessibility',
  'advertising',
  'how-supplier-matching-works',
]);

function hex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

async function digest(value: string): Promise<string> {
  const data = new TextEncoder().encode(value);
  return hex(await crypto.subtle.digest('SHA-256', data));
}

/** Constant-time string comparison — avoids leaking the digest byte by byte. */
function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

function isAdminPath(pathname: string): boolean {
  return LOCALES.some(
    (locale) =>
      pathname === `/${locale}/admin` ||
      pathname.startsWith(`/${locale}/admin/`) ||
      pathname === '/admin' ||
      pathname.startsWith('/admin/')
  );
}

function isAdminApi(pathname: string): boolean {
  return pathname.startsWith('/api/v1/admin') || pathname.startsWith('/api/admin');
}

/**
 * Paths that must stay reachable while unauthenticated, otherwise the
 * operator could never sign in: the login page itself and the session
 * endpoint that mints the cookie.
 */
function isExemptPath(pathname: string): boolean {
  if (LOCALES.some((locale) => pathname === `/${locale}/admin/login`)) return true;
  // The session endpoint is the way IN — gating it would lock everyone out.
  if (pathname === '/api/v1/admin/session') return true;
  return false;
}

export async function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // 1. Admin gating ---------------------------------------------------
  const needsGate = isAdminPath(pathname) || isAdminApi(pathname);
  if (needsGate && !isExemptPath(pathname)) {
    const session = request.cookies.get(COOKIE_NAME)?.value;
    const expected = await digest(ADMIN_KEY);

    if (!session || !safeEqual(session, expected)) {
      if (isAdminApi(pathname)) {
        return NextResponse.json(
          { error: 'Operator authentication required' },
          { status: 401 }
        );
      }
      const loginUrl = new URL(`/${request.cookies.get('og_locale')?.value || 'en'}/admin/login`, request.url);
      loginUrl.searchParams.set('from', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // 2. Locale normalisation -------------------------------------------
  // A bare "/" or a non-locale first segment gets sent to the default
  // locale, preserving the rest of the path.
  // API routes are NOT locale-prefixed, so they must be left untouched —
  // redirecting /api/v1/... to /en/api/v1/... would 307 every API call.
  if (pathname.startsWith('/api/')) {
    return NextResponse.next();
  }

  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) {
    const url = request.nextUrl.clone();
    url.pathname = '/en';
    return NextResponse.redirect(url);
  }
  // A first segment that is not a real locale is not a locale-prefixed
  // path at all. It is a malformed URL — the audit found one in search
  // results at /%24/directory/al-mutalib-perfumes, which the old code
  // "normalised" into /en/%24/directory/al-mutalib-perfumes: a path with
  // a literal "$24" segment that can never match a route.
  //
  // The fix is not to rename the segment but to stop pretending it is a
  // locale. A path whose root is one of the site's own routes is a real
  // page reached without its prefix, and is redirected to the default
  // locale. Anything else is a genuine 404 and must stay a 404 — a
  // search engine is not sent to a URL that cannot exist.
  if (!LOCALES.includes(segments[0])) {
    if (!KNOWN_UNPREFIXED_ROOTS.has(segments[0])) {
      return NextResponse.next();
    }

    const url = request.nextUrl.clone();
    url.pathname = `/en${pathname === '/' ? '' : pathname}`;
    return NextResponse.redirect(url);
  }

  // Remember the visitor's locale so the admin login can bounce them back.
  const response = NextResponse.next();
  if (!request.cookies.get('og_locale')) {
    response.cookies.set('og_locale', segments[0], {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax',
    });
  }
  return response;
}

export const config = {
  matcher: [
    /*
     * Match everything except:
     * - _next/static, _next/image (build output)
     * - favicon.ico, and public files with an extension
     * - the API surface, EXCEPT the admin APIs which must be gated
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|webp|ico|css|js|txt|xml|json|woff2?)$).*)',
  ],
};

export { digest as __digestForTests, COOKIE_NAME as __cookieNameForTests };

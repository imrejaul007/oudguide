import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { isPublishedPath, publishedPaths } from '../apps/web/src/lib/route-resolver.ts';

/**
 * ==========================================================================
   Parallel path sets — the "404s while looking published" guard.
   ==========================================================================
   A static route is known to four independent sets:

     1. the resolver's STATIC array   (apps/web/src/lib/route-resolver.ts)
     2. the sitemap's EN/AR statics   (apps/web/src/app/sitemap.ts)
     3. the middleware's redirect set (apps/web/src/middleware.ts)
     4. the header nav (apps/web/src/lib/constants.ts)

   They are *not* meant to be identical: `/en/brands` is published and
   redirectable but deliberately noindexed, so it is in the resolver and
   middleware sets and correctly *absent* from the sitemap. What they must
   stay in step on is the defect class the audit keeps hitting — a URL that
   one set publishes while another set cannot serve, which looks published
   (it is linked, sitemapped or advertised) but answers 404 or 308-to-404.

   So this test does not assert set equality. It asserts three invariants
   that catch that class:

     I1  every EN static path in the sitemap resolves as published — the
         "sitemap promises a dead URL" class (the 570/775 404s of 10-20).
     I2  every top-level root the resolver publishes as static is a known
         middleware redirect root — otherwise the bare-locale request
         (`/brands` with no prefix) 308s to a URL that then 404s.
     I3  every top-level root in the sitemap is a known middleware redirect
         root, so a crawler hitting the bare path is redirected, not lost.

   The resolver is the source of truth for "is this published"; the other
   three are read from source so the test stays a guard on the arrays
   themselves, and fails loudly if any one drifts from the rest.
 */

const WEB = join(process.cwd(), 'apps/web');

/**
 * Extract the string-literal elements of a top-level array declaration
 * (`const NAME: T[] = [ ... ]` or `const NAME = new Set([ ... ])`),
 * reliably.
 *
 * The arrays hold only simple path-string literals, but their bodies carry
 * multi-line block and line comments that themselves contain apostrophes
 * ("the manifest's own routes"). A naive string-literal regex desynchronises
 * on exactly those apostrophes — the defect class that broke the content
 * validator (REGRESSION-08). So this walks the source once, tracking string
 * and comment state, and collects a string literal only at the moment its
 * closing quote is met *while that quote is a real element quote*, never
 * while the walker is inside a comment. The type annotation (`string[]`)
 * and any `new Set(` wrapper are skipped by walking to the declaration's
 * opening '[' after the '='.
 */
function extractStringArray(file: string, name: string): string[] {
  const src = readFileSync(join(WEB, file), 'utf8');
  const head = src.indexOf(`const ${name}`);
  assert.ok(head >= 0, `${file}: no "const ${name}" found`);
  const equals = src.indexOf('=', head);
  assert.ok(equals > head, `${file}: no declaration '=' for ${name}`);

  // Walk to the '[' that opens the element list (handles `new Set([`).
  let i = equals;
  while (i < src.length && src[i] !== '[') i += 1;
  assert.ok(src[i] === '[', `${file}: no '[' after declaration for ${name}`);

  const out: string[] = [];
  let depth = 0;
  let inStr: string | null = null;
  let strStart = -1;
  let inBlock = false;
  let inLine = false;

  for (let j = i; j < src.length; j += 1) {
    const c = src[j];
    const c2 = src[j + 1];

    if (inBlock) {
      if (c === '*' && c2 === '/') {
        inBlock = false;
        j += 1;
      }
      continue;
    }
    if (inLine) {
      if (c === '\n') inLine = false;
      continue;
    }
    if (inStr) {
      // Escape: skip the escaped char. A quote inside a template is inert.
      if (c === '\\') {
        j += 1;
        continue;
      }
      if (c === inStr) {
        const raw = src.slice(strStart, j + 1);
        out.push(unescapeLiteral(raw));
        inStr = null;
      }
      continue;
    }

    if (c === '/' && c2 === '/') {
      inLine = true;
      j += 1;
      continue;
    }
    if (c === '/' && c2 === '*') {
      inBlock = true;
      j += 1;
      continue;
    }
    if (c === "'" || c === '"' || c === '`') {
      inStr = c;
      strStart = j;
      continue;
    }
    if (c === '[') {
      depth += 1;
      continue;
    }
    if (c === ']') {
      depth -= 1;
      if (depth === 0) break;
      continue;
    }
  }
  return out;
}

/** Strip the outer quotes of a string literal and unescape basic sequences. */
function unescapeLiteral(raw: string): string {
  const q = raw[0];
  const inner = raw.slice(1, raw.length - 1);
  // These arrays use only single-quoted, backslash-free path literals, so a
  // light unescape is sufficient; handle the common escapes defensively.
  if (q === "'") return inner.replace(/\\(['\\])/g, '$1');
  if (q === '"') return JSON.parse(raw);
  return inner;
}

const resolverStatic = extractStringArray('src/lib/route-resolver.ts', 'STATIC');
const sitemapEn = extractStringArray('src/app/sitemap.ts', 'STATIC_PAGES').filter((p) =>
  p.startsWith('/en/')
);
const middlewareRoots = extractStringArray('src/middleware.ts', 'KNOWN_UNPREFIXED_ROOTS');

describe('parallel path sets stay in step', () => {
  test('the sets are non-trivial (guard sanity)', () => {
    assert.ok(resolverStatic.length >= 20, `resolver STATIC unexpectedly small: ${resolverStatic.length}`);
    assert.ok(sitemapEn.length >= 20, `sitemap EN statics unexpectedly small: ${sitemapEn.length}`);
    assert.ok(middlewareRoots.length >= 15, `middleware roots unexpectedly small: ${middlewareRoots.length}`);
  });

  test('I1: every EN static in the sitemap resolves as a published path', () => {
    const unpublished = sitemapEn.filter((p) => !isPublishedPath(p));
    assert.deepEqual(
      unpublished,
      [],
      `These sitemap EN statics are not published by the resolver — they would look published but 404: ${unpublished.join(', ')}`
    );
  });

  test('I2: every resolver static top-level root is a middleware redirect root', () => {
    const roots = new Set(middlewareRoots);
    const missing = resolverStatic
      .filter((r) => r !== '')
      .map((r) => r.split('/')[0])
      .filter((r) => !roots.has(r));
    // De-duplicate the offenders.
    assert.deepEqual(
      Array.from(new Set(missing)),
      [],
      `These resolver-published static roots have no bare-URL redirect in the middleware set — /${[...new Set(missing)]} 308s to a 404: ${[...new Set(missing)].join(', ')}`
    );
  });

  test('I3: every sitemap static top-level root is a middleware redirect root', () => {
    const roots = new Set(middlewareRoots);
    const offenders = sitemapEn
      .map((p) => p.replace(/^\/en\//, '').split('/')[0])
      .filter((r) => r && !roots.has(r));
    assert.deepEqual(
      Array.from(new Set(offenders)),
      [],
      `These sitemap static roots are not middleware redirect roots — the bare URL is lost: ${[...new Set(offenders)].join(', ')}`
    );
  });

  test('cross-check: a URL the resolver publishes as static is in the published set', () => {
    // Belt-and-braces: each resolver STATIC entry, as /en/<path>, must be
    // a published path (this is the same invariant as I1 but driven from the
    // resolver side, so a route added to the resolver and not to the sitemap
    // still passes the sitemap gate, and a route missing from the resolver
    // fails here even if nobody sitemaps it).
    const offenders = resolverStatic
      .filter((r) => r !== '')
      .map((r) => `/en/${r}`)
      .filter((p) => !publishedPaths().includes(p) && !isPublishedPath(p));
    assert.deepEqual(
      offenders,
      [],
      `These resolver STATIC paths resolve to nothing: ${offenders.join(', ')}`
    );
  });
});

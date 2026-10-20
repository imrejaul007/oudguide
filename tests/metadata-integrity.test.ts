import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

/* ==========================================================================
   Metadata integrity.

   A `generateMetadata` function is a separate function scope from the page
   component. Referencing a variable that only the component declares (such
   as `isAr`) throws a ReferenceError at render time, which Next.js reports
   as an opaque "An error occurred in the Server Components render".

   That is exactly what happened: 13 pages 500'd in production while the
   build passed cleanly, because TypeScript errors are suppressed by
   `ignoreBuildErrors` and the reference is only resolved at runtime.
   ========================================================================== */

const APP_DIR = 'apps/web/src/app/[locale]';

/** Language keywords — never a variable reference. */
const JS_KEYWORDS = new Set([
  'export', 'async', 'function', 'const', 'let', 'var', 'return', 'if', 'else',
  'for', 'while', 'new', 'typeof', 'await', 'import', 'from', 'default', 'class',
  'extends', 'super', 'this', 'null', 'undefined', 'true', 'false', 'in', 'of',
  'try', 'catch', 'finally', 'throw', 'switch', 'case', 'break', 'continue',
  'do', 'delete', 'instanceof', 'void', 'yield', 'static', 'get', 'set', 'as',
  'type', 'interface', 'enum', 'implements', 'package', 'private', 'public',
  'protected', 'readonly', 'declare', 'abstract', 'satisfies', 'keyof', 'infer',
  'is', 'asserts', 'namespace', 'module', 'require', 'Promise', 'Metadata',
  'string', 'number', 'boolean', 'any', 'unknown', 'never', 'object', 'symbol',
  'bigint', 'undefined',
]);

function pageFiles(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      out.push(...pageFiles(full));
    } else if (entry === 'page.tsx') {
      out.push(full);
    }
  }
  return out;
}

/**
 * Extract the generateMetadata function body.
 *
 * The first `{` after the function name is the params destructuring, so
 * brace-matching from there would stop at `({ params, }` and return a
 * truncated block. The body starts after the return type annotation.
 */
function extractMetadataBlock(source: string): string | null {
  const start = source.indexOf('export async function generateMetadata');
  if (start === -1) return null;

  // Find the return type annotation, then the body brace after it.
  const typeEnd = source.indexOf('Promise<Metadata>', start);
  const bodyStart = source.indexOf('{', typeEnd === -1 ? start : typeEnd);
  if (bodyStart === -1) return null;

  let depth = 0;
  for (let i = bodyStart; i < source.length; i++) {
    if (source[i] === '{') depth++;
    else if (source[i] === '}') {
      depth--;
      if (depth === 0) return source.slice(start, i + 1);
    }
  }
  return null;
}

/**
 * Strip comments and string literals from a block.
 *
 * Identifier scanning must ignore anything that is not code — 'ar' is a
 * value, not a variable reference, and a word in a comment is prose.
 * Replacing each comment and literal with a single space keeps the scan
 * from seeing its contents while leaving the rest of the source intact.
 */
function stripLiterals(block: string): string {
  let out = '';
  let i = 0;
  while (i < block.length) {
    const ch = block[i];

    // Line comment.
    if (ch === '/' && block[i + 1] === '/') {
      while (i < block.length && block[i] !== '\n') i++;
      out += ' ';
      continue;
    }

    // Block comment.
    if (ch === '/' && block[i + 1] === '*') {
      i += 2;
      while (i < block.length && !(block[i] === '*' && block[i + 1] === '/')) i++;
      i += 2;
      out += ' ';
      continue;
    }

    // String or template literal.
    if (ch === "'" || ch === '"' || ch === '`') {
      const quote = ch;
      i++;
      while (i < block.length) {
        if (block[i] === '\\') { i += 2; continue; }
        if (block[i] === quote) { i++; break; }
        i++;
      }
      out += ' ';
      continue;
    }

    out += ch;
    i++;
  }
  return out;
}

/**
 * The names a file brings into scope.
 *
 * A `generateMetadata` function may reference any binding its own module
 * imports. Deriving that set from the file's import statements is far more
 * robust than a hand-maintained allowlist, which goes stale the moment a
 * page starts using a new helper — and a stale allowlist produces false
 * failures that train people to ignore the test.
 */
function importedBindings(source: string): Set<string> {
  const names = new Set<string>();

  // import { a, b as c } from '...'
  for (const match of source.matchAll(/import\s+(?:type\s+)?\{([^}]*)\}\s+from/g)) {
    for (const part of match[1].split(',')) {
      const token = part.trim();
      if (!token) continue;
      const aliased = token.match(/\bas\s+([A-Za-z_$][\w$]*)$/);
      names.add(aliased ? aliased[1] : token);
    }
  }

  // import * as X from '...'
  for (const match of source.matchAll(/import\s+\*\s+as\s+([A-Za-z_$][\w$]*)\s+from/g)) {
    names.add(match[1]);
  }

  // import X from '...'  (and `import X, { y } from '...'`)
  for (const match of source.matchAll(/import\s+([A-Za-z_$][\w$]*)\s*(?:,|from)/g)) {
    names.add(match[1]);
  }

  return names;
}

describe('Per-page metadata', () => {
  const files = pageFiles(APP_DIR);

  test('every page route that declares metadata has exactly one block', () => {
    for (const file of files) {
      const source = readFileSync(file, 'utf8');
      const count = (source.match(/export async function generateMetadata/g) ?? []).length;
      assert.ok(count <= 1, `${file} declares ${count} generateMetadata blocks`);
    }
  });

  test('every page route still has a page component', () => {
    // A route module with no `export default` has no component to render.
    // Next.js reports it as "Functions cannot be passed directly to Client
    // Components", which points at nothing near the real cause, and it
    // happens when a scripted edit rewrites a page file and leaves only
    // the metadata behind. The build passes and the tests pass, because a
    // page with no component is still a valid TypeScript module — so this
    // has to be asserted, not assumed.
    for (const file of files) {
      const source = readFileSync(file, 'utf8');
      assert.ok(
        /export\s+default\s/.test(source),
        `${file} has no default export — the page component is missing`
      );
    }
  });

  test('a metadata function never references a variable it does not declare', () => {
    // The `isAr` mistake: declared inside the page component, referenced
    // inside generateMetadata, where it does not exist. It throws a
    // ReferenceError at render time, which Next.js reports as an opaque
    // "An error occurred in the Server Components render".
    for (const file of files) {
      const source = readFileSync(file, 'utf8');
      const block = extractMetadataBlock(source);
      if (!block) continue;

      // Scan the block with string literals removed, so a value like 'ar'
      // is never mistaken for a variable reference.
      const code = stripLiterals(block);

      // Everything the module itself brings into scope.
      const allowed = importedBindings(source);
      for (const name of [
        'params', 'locale', 'isAr', 'buildMetadata', 'Metadata', 'seed',
        'code', 'country', 'guide', 'fullSlug', 'resolved', 'record',
        'slug', 'iso2', 'type', 'name', 'title', 'description',
        'article', 'brief', 'counts', 'business',
      ]) {
        allowed.add(name);
      }

      for (const match of code.matchAll(/\b([A-Za-z_$][\w$]*)\b/g)) {
        const name = match[1];
        if (allowed.has(name) || JS_KEYWORDS.has(name)) continue;

        const after = code.slice(match.index! + name.length);
        const before = code.slice(0, match.index!);

        // A property access — `seed.countries` — reads a member, not a
        // variable. The dot precedes the property name, so check backwards.
        if (/\.\s*$/.test(before)) continue;

        // An object key or a call target — not a bare read.
        if (/^\s*[:(]/.test(after)) continue;
        if (new RegExp(`\\b(const|let|var|function)\\s+${name}\\b`).test(code)) continue;
        if (new RegExp(`\\b${name}\\s*[,)=:]`).test(before)) continue;
        assert.fail(
          `${file}: generateMetadata references "${name}" but never declares it — ` +
            `this throws a ReferenceError at render time`
        );
      }
    }
  });

  test('every metadata function declares isAr before using it', () => {
    for (const file of files) {
      const source = readFileSync(file, 'utf8');
      const block = extractMetadataBlock(source);
      if (!block) continue;
      if (!/\bisAr\b/.test(block)) continue;

      const declIndex = block.search(/const isAr\b/);
      const useIndex = block.search(/[^.\w]isAr\b/);

      assert.notEqual(declIndex, -1, `${file} uses isAr without declaring it`);
      assert.ok(
        declIndex < useIndex,
        `${file} uses isAr before it is declared`
      );
    }
  });

  test('every metadata function returns a buildMetadata call with a path', () => {
    for (const file of files) {
      const source = readFileSync(file, 'utf8');
      const block = extractMetadataBlock(source);
      if (!block) continue;

      assert.ok(
        /buildMetadata\(\{/.test(block),
        `${file} must build its metadata through buildMetadata`
      );
      assert.ok(
        /path:\s*`/.test(block),
        `${file} must declare a canonical path`
      );
      // The title and description may be literals or computed values passed
      // to buildMetadata, so accept either a keyed property or a shorthand.
      assert.ok(
        /\btitle\b\s*[:,]/.test(block) && /\bdescription\b\s*[:,]/.test(block),
        `${file} must pass both a title and a description`
      );
    }
  });

  test('the guide and territory pages carry their own metadata', () => {
    const guide = readFileSync(join(APP_DIR, 'guides/[...slug]/page.tsx'), 'utf8');
    assert.ok(guide.includes('export async function generateMetadata'));
    // The guide page must resolve its own record. It may do so through the
    // content layer — a reviewed article if one exists, a research brief
    // otherwise — or through the manifest resolver, which knows manifest
    // paths only. Both are legitimate; what is not legitimate is a page
    // that resolves nothing, because then every guide would render the
    // same fallback.
    const resolvesContent = guide.includes('getArticle') && guide.includes('getBrief');
    const resolvesManifest = guide.includes('findRouteRecord');
    assert.ok(
      resolvesContent || resolvesManifest,
      'the guide page must resolve its own record'
    );

    const territory = readFileSync(join(APP_DIR, 'world/[iso2]/page.tsx'), 'utf8');
    assert.ok(territory.includes('export async function generateMetadata'));
  });
});

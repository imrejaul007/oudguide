import { test, describe } from 'node:test';
import assert from 'node:assert/strict';

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

import {
  DISALLOWED_SCRIPT_RANGES,
  REPLACEMENT_CHAR,
  extractStrings,
  scanString,
} from '../apps/web/src/lib/content/text-integrity.ts';

/**
 * ==========================================================================
   Content text integrity, in the suite.
   ==========================================================================
   The content layer's text rules used to live only in
   `scripts/validate-content-text.mjs`. That is a script, not a test, so it
   did not run when the suite did — and it reported PASS on a tree that was
   shipping Arabic strings with Russian text and Chinese characters in them.

   The rules themselves now live in
   `apps/web/src/lib/content/text-integrity.ts`, and both this test and the
   script call them. One definition, enforced in both places.

   Two different scans, because the two defects need different instruments:

   1. WHOLE TREE, WHOLE FILE. A file-level search for a replacement
      character or a character from a script that has no business in this
      content. This is safe on any file type, because it does not try to
      find string boundaries.

   2. CONTENT LAYER, STRING LEVEL. The Latin-in-Arabic rule, which needs
      the actual string a reader sees. The lexical scanner desynchronises
      on TSX template literals with `${...}` interpolation, so this scan
      runs over the two directories whose content is the corpus — the
      article data and the copy module — and not over the page renderers.
   ========================================================================== */

/** Roots scanned at file level. */
const TREE_ROOTS = [
  'apps/web/src',
  'packages',
  'tests',
  'scripts',
];

/**
 * The directories whose string literals are the published corpus.
 *
 * The validator script scans exactly these, and the Latin-in-Arabic rule
 * is only reliable over them.
 */
const CONTENT_DIRS = [
  'apps/web/src/data/articles',
  'apps/web/src/lib/copy',
];

/**
 * The page renderers and the contract modules.
 *
 * The string-level scan used to be limited to the content directories,
 * because the lexical scanner desynchronised on TSX template literals and
 * produced false positives. The scanner is now built on the TypeScript
 * parser, so it sees the exact string literals and the exact JSX text, and
 * the page renderers can be scanned too.
 *
 * That matters because the page renderers are where the Arabic copy a
 * reader actually sees lives. Three defects were found there and fixed:
 * the internal identifier "canRelease" in the admin and inquiry pages, the
 * internal identifier "QA-007" in the public directory FAQ, and the Latin
 * abbreviations "OTP", "RFQ" and "GC-MS" inside Arabic sentences.
 */
const PAGE_DIRS = [
  'apps/web/src/app',
  'apps/web/src/lib',
  'apps/web/src/components',
  'packages/contracts/src',
];

/** Source extensions worth reading. */
const SOURCE_EXTENSIONS = new Set(['.ts', '.tsx', '.mjs', '.js', '.json']);

/** Files that legitimately contain the replacement character. */
const SENTINEL_FILES = new Set(['scripts/validate-content-text.mjs']);

function walk(root: string, out: string[] = []): string[] {
  let stat;
  try {
    stat = statSync(root);
  } catch {
    return out;
  }

  if (stat.isDirectory()) {
    for (const entry of readdirSync(root)) {
      if (entry === 'node_modules' || entry === '.next' || entry === 'dist') continue;
      walk(join(root, entry), out);
    }
    return out;
  }

  const name = root.split('/').pop() ?? '';
  const ext = name.slice(name.lastIndexOf('.'));
  if (SOURCE_EXTENSIONS.has(ext)) out.push(root);
  return out;
}

/** Every source file under the roots, excluding build output. */
function treeFiles(roots: string[]): string[] {
  const out: string[] = [];
  for (const root of roots) walk(root, out);
  return out;
}

function contentFiles(dirs: string[]): string[] {
  const out: string[] = [];
  for (const dir of dirs) walk(dir, out);
  return out;
}

/** Any character from a script that has no business in this content. */
function disallowedCharacters(text: string): Array<{ char: string; name: string }> {
  const found: Array<{ char: string; name: string }> = [];
  for (const ch of text) {
    const cp = ch.codePointAt(0)!;
    for (const [lo, hi, name] of DISALLOWED_SCRIPT_RANGES) {
      if (cp >= lo && cp <= hi) {
        found.push({ char: ch, name });
        break;
      }
    }
  }
  return found;
}

describe('No source file carries a lost character', () => {
  const files = treeFiles(TREE_ROOTS).filter((f) => !SENTINEL_FILES.has(f));

  test('the scan found the source tree', () => {
    assert.ok(
      files.length > 50,
      `expected to scan the source tree, found ${files.length} files`
    );
  });

  test('no source file contains a U+FFFD replacement character', () => {
    const offenders: string[] = [];

    for (const file of files) {
      const text = readFileSync(file, 'utf8');
      let index = text.indexOf(REPLACEMENT_CHAR);
      while (index !== -1) {
        const start = Math.max(0, index - 40);
        const snippet = text.slice(start, index + 40).replace(/\n/g, ' ');
        offenders.push(`${file}: U+FFFD at offset ${index} — ${JSON.stringify(snippet)}`);
        index = text.indexOf(REPLACEMENT_CHAR, index + 1);
      }
    }

    assert.deepEqual(
      offenders,
      [],
      `a replacement character means a character was lost when the file was written:\n  ${offenders.join('\n  ')}`
    );
  });

  test('no source file carries a character from a script that has no place here', () => {
    // A Cyrillic word inside an Arabic sentence, or Chinese characters
    // welded onto an Arabic alias, is the same class of defect as an
    // untranslated English fragment: the reader sees a page that is
    // nominally in their language and is not.
    const offenders: string[] = [];

    for (const file of files) {
      const text = readFileSync(file, 'utf8');
      for (const found of disallowedCharacters(text)) {
        const index = text.indexOf(found.char);
        const line = text.slice(0, index).split('\n').length;
        const snippet = text
          .slice(Math.max(0, index - 50), index + 50)
          .replace(/\n/g, ' ');
        offenders.push(
          `${file}:${line}: ${found.name} character ${JSON.stringify(found.char)} — ${JSON.stringify(snippet)}`
        );
      }
    }

    assert.deepEqual(
      offenders,
      [],
      `a character from another script is contamination:\n  ${offenders.join('\n  ')}`
    );
  });

  test('the two pages that shipped contaminated are clean', () => {
    // Named explicitly so that a regression on any one of them is
    // reported against that page rather than as a tree-wide failure.
    const pages = [
      'apps/web/src/app/[locale]/rfq/page.tsx',
      'apps/web/src/app/[locale]/privacy/page.tsx',
      'apps/web/src/app/[locale]/corrections/page.tsx',
      'apps/web/src/app/[locale]/for-businesses/page.tsx',
      'apps/web/src/app/[locale]/directory/[slug]/verification/page.tsx',
      'apps/web/src/lib/sourcing-assistant.ts',
    ];

    for (const page of pages) {
      const text = readFileSync(page, 'utf8');
      assert.ok(
        !text.includes(REPLACEMENT_CHAR),
        `${page} contains a U+FFFD replacement character`
      );
      assert.deepEqual(
        disallowedCharacters(text),
        [],
        `${page} contains a character from another script`
      );
    }
  });
});

describe('Arabic copy carries no untranslated Latin fragments', () => {
  const files = contentFiles(CONTENT_DIRS);

  test('the scan found the content layer', () => {
    assert.ok(
      files.length >= 15,
      `expected to scan the content layer, found ${files.length} files`
    );
  });

  test('no Arabic string in the content layer contains a Latin fragment', () => {
    const violations = [];

    for (const file of files) {
      const source = readFileSync(file, 'utf8');
      for (const { value, line } of extractStrings(source)) {
        if (!value.trim()) continue;
        violations.push(...scanString(relative(process.cwd(), file), value, `line ${line}`));
      }
    }

    assert.deepEqual(
      violations.map((v) => `${v.file}: ${v.detail}`),
      [],
      `a Latin fragment inside an Arabic string is an untranslated fallback:\n  ${violations
        .map((v) => `${v.file}: ${v.detail}`)
        .join('\n  ')}`
    );
  });
});

describe('Arabic copy in the page renderers carries no untranslated Latin fragments', () => {
  const files = contentFiles(PAGE_DIRS);

  test('the scan found the page renderers', () => {
    assert.ok(
      files.length >= 40,
      `expected to scan the page renderers, found ${files.length} files`
    );
  });

  test('no Arabic string in a page renderer contains a Latin fragment', () => {
    const violations = [];

    for (const file of files) {
      const source = readFileSync(file, 'utf8');
      for (const { value, line } of extractStrings(source)) {
        if (!value.trim()) continue;
        violations.push(...scanString(relative(process.cwd(), file), value, `line ${line}`));
      }
    }

    assert.deepEqual(
      violations.map((v) => `${v.file}: ${v.detail}`),
      [],
      `a Latin fragment inside an Arabic string is an untranslated fallback:\n  ${violations
        .map((v) => `${v.file}: ${v.detail}`)
        .join('\n  ')}`
    );
  });
});

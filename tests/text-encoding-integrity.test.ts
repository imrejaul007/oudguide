import { test, describe } from 'node:test';
import assert from 'node:assert/strict';

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

/**
 * ==========================================================================
   Text encoding integrity.
   ==========================================================================
   Five Arabic strings shipped to production with U+FFFD replacement
   characters in them — the visible form of a character that was lost
   when a file was written by a tool that could not encode it:

     /ar/rfq          'تقديم طلب تور<FFFD><FFFD>د عود بالجملة'   (توريد)
     /ar/privacy      'طل<FFFD><FFFD> نسخة من معاملاتك المسجلة.'  (طلب)
     /ar/corrections  'تقديم تصحيح أو م<FFFD><FFFD>احظة تحريرية'  (ملاحظة)
     /ar/verification 'ثلاثة أمور منفصل<FFFD><FFFD>'             (منفصلة)

   A reader saw a page that was nominally in their language and was not.
   The site has a validator for this — scripts/validate-content-text.mjs —
   but it only scans the content layer (apps/web/src/data/articles and
   apps/web/src/lib/copy), and it is a script rather than a test, so it
   does not run when the suite does. The four corrupted page files were
   outside its scan roots entirely, and it reported PASS.

   So this test does what the script did not: it scans the whole source
   tree, it runs in the suite, and it fails the build.

   The sentinel is built from its codepoint rather than written literally,
   so that this file does not trip its own check.
   ==========================================================================
 */

const REPLACEMENT_CHAR = String.fromCharCode(0xfffd);

const SCAN_ROOTS = [
  'apps/web/src',
  'apps/web/next.config.mjs',
  'packages',
  'tests',
  'scripts',
];

const SOURCE_EXTENSIONS = new Set(['.ts', '.tsx', '.mjs', '.js', '.json']);

/**
 * Files that legitimately contain the replacement character, because it
 * is the sentinel they search for. The text validator is one; this file
 * is not, because it builds the character instead of writing it.
 */
const SENTINEL_FILES = new Set(['scripts/validate-content-text.mjs']);

/** Every source file under the roots, excluding build output. */
function sourceFiles(roots: string[]): string[] {
  const out: string[] = [];

  const walk = (path: string): void => {
    let stat;
    try {
      stat = statSync(path);
    } catch {
      return;
    }
    if (stat.isDirectory()) {
      for (const entry of readdirSync(path)) {
        if (entry === 'node_modules' || entry === '.next' || entry === 'dist') continue;
        walk(join(path, entry));
      }
      return;
    }
    const name = path.split('/').pop() ?? '';
    const ext = name.slice(name.lastIndexOf('.'));
    if (!SOURCE_EXTENSIONS.has(ext)) return;
    if (SENTINEL_FILES.has(path)) return;
    out.push(path);
  };

  for (const root of roots) walk(root);
  return out;
}

describe('No source file carries a lost character', () => {
  const files = sourceFiles(SCAN_ROOTS);

  test('the scan found the source tree', () => {
    assert.ok(files.length > 50, `expected to scan the source tree, found ${files.length} files`);
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

  test('the four pages that shipped corrupted are clean', () => {
    // Named explicitly so that a regression on any one of them is
    // reported against that page rather than as a tree-wide failure.
    const pages = [
      'apps/web/src/app/[locale]/rfq/page.tsx',
      'apps/web/src/app/[locale]/privacy/page.tsx',
      'apps/web/src/app/[locale]/corrections/page.tsx',
      'apps/web/src/app/[locale]/directory/[slug]/verification/page.tsx',
    ];

    for (const page of pages) {
      const text = readFileSync(page, 'utf8');
      assert.ok(
        !text.includes(REPLACEMENT_CHAR),
        `${page} contains a U+FFFD replacement character`
      );
    }
  });
});

#!/usr/bin/env node
/**
 * Content text validator.
 *
 * Two defects this catches that a compiler will not:
 *
 *   1. U+FFFD replacement characters. These appear when an Arabic string is
 *      truncated or re-encoded mid-write, and they are visible to readers.
 *   2. Latin-script fragments inside Arabic strings. A stray English word
 *      in the middle of an Arabic sentence is the same class of defect as
 *      an untranslated fallback body (OG-A13): the page reads as Arabic
 *      chrome wrapped around an untranslated fragment.
 *
 * The rules themselves live in `apps/web/src/lib/content/text-integrity.ts`,
 * which the test suite also calls. That file used to hold the rules on its
 * own, and because this was a script rather than a test it did not run
 * when the suite did. One definition, enforced in both places.
 *
 * Run: node scripts/validate-content-text.mjs
 * Exit code 1 when a violation is found.
 */

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

import {
  extractStrings,
  REPLACEMENT_CHAR,
  scanString,
} from '../apps/web/src/lib/content/text-integrity.ts';

const ROOT = new URL('..', import.meta.url).pathname;

const TARGET_DIRS = [
  'apps/web/src/data/articles',
  'apps/web/src/lib/copy',
];

const violations = [];

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (/\.(ts|tsx)$/.test(entry)) out.push(full);
  }
  return out;
}

let scanned = 0;

for (const dir of TARGET_DIRS) {
  const abs = join(ROOT, dir);
  let files;
  try {
    files = walk(abs);
  } catch {
    continue;
  }

  for (const file of files) {
    const rel = relative(ROOT, file);
    const source = readFileSync(file, 'utf8');
    scanned++;

    // Whole-file replacement-character check.
    if (source.includes(REPLACEMENT_CHAR)) {
      const idx = source.indexOf(REPLACEMENT_CHAR);
      const line = source.slice(0, idx).split('\n').length;
      violations.push({
        file: rel,
        kind: 'replacement-char',
        detail: `line ~${line}: U+FFFD in source — ${JSON.stringify(
          source.slice(Math.max(0, idx - 40), idx + 40)
        )}`,
      });
    }

    for (const { value, line: atLine } of extractStrings(source)) {
      if (!value.trim()) continue;
      violations.push(...scanString(rel, value, `line ${atLine}`));
    }
  }
}

console.log(`Scanned ${scanned} files in ${TARGET_DIRS.join(', ')}.`);

if (violations.length === 0) {
  console.log('PASS — no replacement characters and no untranslated Latin fragments in Arabic copy.');
  process.exit(0);
}

for (const v of violations) {
  console.log(`  [${v.kind}] ${v.file}`);
  console.log(`      ${v.detail}`);
}

console.log(`\nFAIL — ${violations.length} content-text violation(s).`);
process.exit(1);

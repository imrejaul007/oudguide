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
 * Run: node scripts/validate-content-text.mjs
 * Exit code 1 when a violation is found.
 */

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;

const TARGET_DIRS = [
  'apps/web/src/data/articles',
  'apps/web/src/lib/copy',
];

const ARABIC = /[؀-ۿ]/;
const LATIN_WORD = /[A-Za-z][A-Za-z'’-]*/g;

/**
 * Scripts that have no business in this content.
 *
 * A CJK or Hangul character inside an Arabic sentence is the same class of
 * defect as an untranslated English fragment: a reader sees a page that is
 * nominally in their language and is not. It is easy to introduce by
 * accident when an Arabic string is composed in a tool that renders a
 * candidate phrase, so it is checked mechanically rather than by eye.
 */
const DISALLOWED_SCRIPT_RANGES = [
  [0x2e80, 0x9fff, 'CJK'],
  [0x0900, 0x097f, 'Devanagari'],
  [0x0400, 0x04ff, 'Cyrillic'],
  [0x3040, 0x30ff, 'Kana'],
  [0xac00, 0xd7af, 'Hangul'],
  [0x0e00, 0x0e7f, 'Thai'],
  [0x0370, 0x03ff, 'Greek'],
];

/**
 * Tokens that are legitimate inside Arabic copy: brand names, standard
 * abbreviations, unit names and technical terms that are written in Latin
 * script in Arabic trade usage.
 */
const ALLOWED_IN_ARABIC = new Set([
  // Brand and organisation names that are not translated in Arabic usage.
  'OudGuide',
  'IFRA',
  'CITES',
  'GC',
  'MS',
  // Material and format names kept in Latin script in Arabic usage.
  'Dehn',
  'Al',
  'Oud',
  'Bakhoor',
  'Assam',
  'Trat',
  'Koh',
  'Kong',
  'Aquilaria',
  'Gyrinops',
  'Aquilarera',
  'A',
  'crassna',
  'malaccensis',
  'agallocha',
  'versteegii',
  'decempartita',
  'sinensis',
  'yunnanensis',
  'sinoensis',
  'Thymelaeaceae',
  'Santalum',
  'album',
  // Units.
  'kg',
  'ml',
  'gm',
  'ISO',
  'PDF',
  'API',
  'EU',
  'UAE',
  'PDPL',
  'GDPR',
  // Arabic-language brand usage that keeps a Latin token.
  'flake',
  'flakes',
  // Names of registries and databases that are not translated.
  'UNEP-WCMC',
  'FAOLEX',
  'Species',
  'JSON',
  'PDF',
  'HTML',
  // Concentration-label abbreviations used in Arabic trade usage.
  'EDP',
  'EDT',
]);

const violations = [];

function scanString(file, text, label) {
  if (text.includes('�')) {
    const idx = text.indexOf('�');
    violations.push({
      file,
      kind: 'replacement-char',
      detail: `${label}: U+FFFD at offset ${idx} — ${JSON.stringify(text.slice(Math.max(0, idx - 30), idx + 30))}`,
    });
    return;
  }

  // Disallowed scripts are checked before the Arabic-specific rules,
  // because contamination may land in an English string too.
  for (const [lo, hi, name] of DISALLOWED_SCRIPT_RANGES) {
    for (const ch of text) {
      const cp = ch.codePointAt(0);
      if (cp >= lo && cp <= hi) {
        violations.push({
          file,
          kind: 'disallowed-script',
          detail: `${label}: ${name} character ${JSON.stringify(ch)} (U+${cp.toString(16).toUpperCase()}) — ${JSON.stringify(text.slice(0, 60))}`,
        });
        break;
      }
    }
  }

  if (!ARABIC.test(text)) return;

  // Find Latin runs inside an Arabic string.
  const words = text.match(LATIN_WORD);
  if (!words) return;

  const offenders = words.filter((w) => !ALLOWED_IN_ARABIC.has(w) && !/^(EDP|EDT)$/.test(w));
  if (offenders.length) {
    violations.push({
      file,
      kind: 'latin-in-arabic',
      detail: `${label}: Latin fragment(s) ${JSON.stringify(offenders.join(', '))} inside Arabic text`,
    });
  }
}

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (/\.(ts|tsx)$/.test(entry)) out.push(full);
  }
  return out;
}

/**
 * Extract every quoted string from a TypeScript source file.
 *
 * This is a lexical scan, not a parser: it finds the string literals that
 * a reader would see. It deliberately does not try to understand the file.
 */
function extractStrings(source) {
  const out = [];
  let i = 0;
  let line = 1;

  while (i < source.length) {
    const ch = source[i];

    if (ch === '\n') {
      line++;
      i++;
      continue;
    }

    if (ch === "'" || ch === '"' || ch === '`') {
      const quote = ch;
      const startLine = line;
      i++;
      let value = '';

      while (i < source.length) {
        if (source[i] === '\\') {
          value += source[i] + (source[i + 1] ?? '');
          i += 2;
          continue;
        }
        if (source[i] === '\n') line++;
        if (source[i] === quote) {
          i++;
          break;
        }
        value += source[i];
        i++;
      }

      out.push({ value, line: startLine });
      continue;
    }

    i++;
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
    if (source.includes('�')) {
      const idx = source.indexOf('�');
      const line = source.slice(0, idx).split('\n').length;
      violations.push({
        file: rel,
        kind: 'replacement-char',
        detail: `line ~${line}: U+FFFD in source — ${JSON.stringify(source.slice(Math.max(0, idx - 40), idx + 40))}`,
      });
    }

    for (const { value, line: atLine } of extractStrings(source)) {
      if (!value.trim()) continue;
      scanString(rel, value, `line ${atLine}`);
    }
  }
}

console.log(`Scanned ${scanned} files in ${TARGET_DIRS.join(', ')}.`);

if (violations.length === 0) {
  console.log('PASS — no replacement characters and no untranslated Latin fragments in Arabic copy.');
  process.exit(0);
}

console.error(`\nFAIL — ${violations.length} content-text violation(s):\n`);
for (const v of violations) {
  console.error(`  [${v.kind}] ${v.file}`);
  console.error(`      ${v.detail}`);
}
process.exit(1);

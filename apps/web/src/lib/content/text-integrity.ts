/**
 * ==========================================================================
   Text integrity rules for the content layer.
   ==========================================================================

   Two defects that a compiler will not catch, and that a reader sees
   immediately:

     1. A U+FFFD replacement character. It is the visible form of a
        character that was lost when the file was written by a tool that
        could not encode it. Four Arabic strings shipped to production
        in this state.

     2. A Latin fragment inside an Arabic string. A stray English word
        in the middle of an Arabic sentence is the same class of defect
        as an untranslated fallback body (OG-A13): the page reads as
        Arabic chrome wrapped around an untranslated fragment.

   These rules used to live only in `scripts/validate-content-text.mjs`,
   which is a script rather than a test, so it did not run when the suite
   did. The rules live here now, and both the script and the test call
   them, so there is one definition and it is enforced by the suite.

   The rules are deliberately lexical rather than semantic. They cannot
   tell that "Entire" should have been "كل" — only that a Latin word
   appears where an Arabic sentence is being written. That is the part
   that can be checked mechanically, and it is the part that lets a
   human reviewer trust that the rest is sound.
   ========================================================================== */

/** The character a lost codepoint leaves behind. */
export const REPLACEMENT_CHAR = String.fromCharCode(0xfffd);

/** Does the text carry any Arabic script? */
export const ARABIC = /[؀-ۿ]/;

/** A Latin word run, including the apostrophes and hyphens inside it. */
export const LATIN_WORD = /[A-Za-z][A-Za-z'’-]*/g;

/**
 * Scripts that have no business appearing inside this content.
 *
 * A CJK, Hangul, Devanagari or Cyrillic character inside an Arabic
 * sentence is the same class of defect as an untranslated English
 * fragment: a reader sees a page that is nominally in their language
 * and is not.
 */
export const DISALLOWED_SCRIPT_RANGES: Array<[number, number, string]> = [
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
 *
 * A token on this list is allowed in an Arabic string. A token NOT on
 * this list is a defect, and the defect is a Latin word that should have
 * been Arabic.
 */
export const ALLOWED_IN_ARABIC = new Set([
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
  // "Oz" is the Arabic trade spelling of an oud accord, used in the
  // same way as the English term: untranslated, and specific.
  'Oz',
  // Technical terms the English copy also keeps in Latin script.
  'webhook',
]);

export type ViolationKind = 'replacement-char' | 'disallowed-script' | 'latin-in-arabic';

export interface Violation {
  /** The file the violation was found in, relative to the repo root. */
  file: string;
  kind: ViolationKind;
  detail: string;
}

/**
 * Check one string a reader could see.
 *
 * Returns the violations it carries; an empty array means it is clean.
 */
export function scanString(
  file: string,
  text: string,
  label: string
): Violation[] {
  const violations: Violation[] = [];

  if (text.includes(REPLACEMENT_CHAR)) {
    const idx = text.indexOf(REPLACEMENT_CHAR);
    violations.push({
      file,
      kind: 'replacement-char',
      detail: `${label}: U+FFFD at offset ${idx} — ${JSON.stringify(
        text.slice(Math.max(0, idx - 30), idx + 30)
      )}`,
    });
    return violations;
  }

  for (const [lo, hi, name] of DISALLOWED_SCRIPT_RANGES) {
    for (const ch of text) {
      const cp = ch.codePointAt(0);
      if (cp! >= lo && cp! <= hi) {
        violations.push({
          file,
          kind: 'disallowed-script',
          detail: `${label}: ${name} character ${JSON.stringify(ch)} (U+${cp!
            .toString(16)
            .toUpperCase()}) — ${JSON.stringify(text.slice(0, 60))}`,
        });
        break;
      }
    }
  }

  if (!ARABIC.test(text)) return violations;

  const words = text.match(LATIN_WORD);
  if (!words) return violations;

  const offenders = words.filter(
    (w) => !ALLOWED_IN_ARABIC.has(w) && !/^(EDP|EDT)$/.test(w)
  );
  if (offenders.length) {
    violations.push({
      file,
      kind: 'latin-in-arabic',
      detail: `${label}: Latin fragment(s) ${JSON.stringify(
        offenders.join(', ')
      )} inside Arabic text`,
    });
  }

  return violations;
}

/**
 * Extract every quoted string from a TypeScript source file.
 *
 * This is a lexical scan, not a parser: it finds the string literals
 * that a reader would see. It deliberately does not try to understand
 * the file. Comments are skipped, because a comment may contain an
 * apostrophe — "the reviewer's report" — and treating that as a string
 * opener desynchronises the scanner for the rest of the file, which
 * silently skips the strings that follow.
 */
export function extractStrings(source: string): Array<{ value: string; line: number }> {
  const out: Array<{ value: string; line: number }> = [];
  let i = 0;
  let line = 1;

  while (i < source.length) {
    const ch = source[i];

    if (ch === '\n') {
      line++;
      i++;
      continue;
    }

    // Line comments run to the end of the line.
    if (ch === '/' && source[i + 1] === '/') {
      while (i < source.length && source[i] !== '\n') i++;
      continue;
    }

    // Block comments run to the closing marker.
    if (ch === '/' && source[i + 1] === '*') {
      const end = source.indexOf('*/', i + 2);
      if (end === -1) {
        line += source.slice(i).split('\n').length - 1;
        i = source.length;
        continue;
      }
      line += source.slice(i, end + 2).split('\n').length - 1;
      i = end + 2;
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

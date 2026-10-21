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

import ts from 'typescript';

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
/**
 * Tokens that are legitimate in a particular file only.
 *
 * A global allowlist is a hole: "Super" is a correct instruction in the
 * RFQ help text, because the field asks the buyer to repeat the seller's
 * own English grade words, and translating the word would make the
 * instruction wrong. But "Super" appearing inside an article body is
 * contamination. Scoping the allowance to the one file that needs it
 * keeps the instruction correct without opening the hole everywhere.
 */
export const FILE_SCOPED_ALLOWED_IN_ARABIC: Record<string, Set<string>> = {
  'rfq-public-copy.ts': new Set(['Super', 'Double']),
};

/**
 * Split a string into the segments a reader would read as prose.
 *
 * A page mixes Arabic copy with English labels, HTML markup and style
 * blocks. Applying the Latin rule to the whole string would flag an
 * English navigation label on an Arabic page. Splitting on markup, on
 * line breaks and on sentence terminators means the rule is applied to
 * the sentence that contains the defect, and an English label is its own
 * segment with no Arabic in it, so it is not examined.
 */
function proseSegments(text: string): string[] {
  // Drop markup elements, the contents of style and script blocks, and HTML
  // entities. An entity is markup that happens to be spelled with letters,
  // and `&copy;` is not the English word "copy".
  const withoutBlocks = text
    .replace(/<(style|script)\b[^>]*>[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&[#a-zA-Z0-9]+;/g, ' ');

  return withoutBlocks
    .split(/[\n\r]+|(?<=[.!?؟])\s+/)
    .map((segment) => segment.trim())
    .filter(Boolean);
}

/**
 * The proportion of a segment's letters that are Arabic.
 *
 * A segment that is mostly Latin is an English label inside an Arabic
 * page, not an untranslated fragment inside an Arabic sentence, so it is
 * not examined. The threshold is well below the lowest genuine Arabic
 * sentence in the corpus, which measures 38% (a short phrase that names
 * two regulations), and well above the markup and English-label
 * segments, which measure under 10%.
 */
const MIN_ARABIC_SHARE = 0.3;

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

  const scoped = FILE_SCOPED_ALLOWED_IN_ARABIC[
    Object.keys(FILE_SCOPED_ALLOWED_IN_ARABIC).find((key) => file.endsWith(key)) ?? ''
  ];

  const offenders: string[] = [];

  for (const segment of proseSegments(text)) {
    if (!ARABIC.test(segment)) continue;

    const arabicLetters = (segment.match(/[؀-ۿ]/g) ?? []).length;
    const latinLetters = (segment.match(/[A-Za-z]/g) ?? []).length;
    if (arabicLetters + latinLetters === 0) continue;
    if (arabicLetters / (arabicLetters + latinLetters) < MIN_ARABIC_SHARE) continue;

    const words = segment.match(LATIN_WORD);
    if (!words) continue;

    for (const w of words) {
      if (ALLOWED_IN_ARABIC.has(w)) continue;
      if (scoped?.has(w)) continue;
      if (/^(EDP|EDT)$/.test(w)) continue;

      // The tail of a domain name — the "com" in "OudGuide.com" — is a
      // domain, not an untranslated word. It is recognised by the dot in
      // front of it and by a Latin word in front of that dot.
      const at = segment.indexOf(w);
      if (at > 1 && segment[at - 1] === '.' && /[A-Za-z0-9]$/.test(segment[at - 2])) {
        continue;
      }

      if (!offenders.includes(w)) offenders.push(w);
    }
  }

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



/**
 * A string a reader could see, and the line it was written on.
 */
export interface ExtractedString {
  value: string;
  line: number;
}

/**
 * Extract every string a reader could see from a TypeScript source file.
 *
 * This used to be a hand-written lexical scanner, and it was wrong in
 * three separate ways, each of which hid a real defect:
 *
 *   - An apostrophe inside a comment was read as a string opener, which
 *     desynchronised the scanner for the rest of the file.
 *   - A template literal containing an interpolation was not tracked, so
 *     a nested quote inside `${...}` was read as a string opener.
 *   - A regular expression literal was not skipped, so the first quote in
 *     a regex body was read as a string opener.
 *
 * Each of those produced a file that reported PASS without having been
 * checked. The scanner now uses the TypeScript parser instead, which
 * gives the exact string literals and the exact JSX text with no
 * heuristics at all.
 *
 * The exported shape is unchanged: `{ value, line }`.
 *
 * The parser is a build-time and test-time dependency of this module. It
 * is not imported by any application code, so it never reaches the
 * client bundle.
 */
export function extractStrings(source: string): ExtractedString[] {
  const out: ExtractedString[] = [];

  const sourceFile = ts.createSourceFile(
    'content.ts',
    source,
    ts.ScriptTarget.ESNext,
    true,
    ts.ScriptKind.TSX
  );

  const lineOf = (node: import('typescript').Node): number =>
    sourceFile.getLineAndCharacterOfPosition(node.getStart(sourceFile)).line + 1;

  const push = (value: string, line: number): void => {
    if (!value.trim()) return;
    out.push({ value, line });
  };

  const visit = (node: import('typescript').Node): void => {
    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
      // `node.text` is the DECODED value: a literal "\n" in the source is
      // a newline here, which is what a reader sees. The raw source form
      // would leave the two characters backslash and "n", and the scanner
      // would then read that "n" as an English word.
      push(node.text, lineOf(node));
    } else if (ts.isTemplateExpression(node)) {
      // The literal chunks around the interpolations. The interpolation
      // itself is code, not copy, and is not included.
      push(node.head.text, lineOf(node.head));
      for (const span of node.templateSpans) {
        push(span.literal.text, lineOf(span.literal));
      }
    } else if (ts.isJsxText(node)) {
      // Text between JSX tags is copy, and a reader sees it.
      push(node.text, lineOf(node));
    }

    ts.forEachChild(node, visit);
  };

  visit(sourceFile);

  return out;
}

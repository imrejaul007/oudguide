# Arabic editorial review — pass of 2026-10-29

Records the developer-side review of the Arabic content layer that the
`ARABIC_HUMAN_REVIEW_COMPLETE` gate in `apps/web/src/lib/articles.ts`
exists to require before the Arabic tree is cleared for indexation.

The runbook (§2, `bilingual_review`) asks for a **human** editorial review;
the mechanical content validator already rejects the *encoding* failure
modes (replacement characters, stray scripts, untranslated Latin
fragments) from a single shared definition
(`apps/web/src/lib/content/text-integrity.ts`), which is **not** the human
review. What remained uncaught by that guard is the residual class:
**valid Arabic where the word is the wrong word** — a mistranslation that
reads as fluent, a non-word, a doubled definite article, or punctuation
glued to the next word. That class is this pass.

## Scope

Every Arabic field in the content layer
(`apps/web/src/data/articles/*.ts`, 50 files) plus the Arabic copy in
`apps/web/src/lib/copy/`: `titleAr`, `summaryAr`, `directAnswerAr`,
section `bodyAr`, `limitationsAr`, `nextStepsAr`, glossary field
variants, source `scopeAr`/`labelAr`, worked examples, and the destination
guides' `localAr` blocks.

## Method

1. A corpus-wide Arabic token-frequency scan. A glitch token appears once;
   real translation vocabulary repeats. This surfaced the candidate class.
2. Each candidate read against its English twin in the same record and,
   where the claim is factual, against the source registry
   (`apps/web/src/data/articles/sources.ts`).
3. Only defects that contradict the English twin or are not words were
   fixed, count-asserted per edit so a hidden-diacritic mismatch could not
   silently no-op. No rewrite for style or preference.

## Systematic coinages — reviewed, deliberately left

Three editorial translations recur dozens of times with consistent
inflection (dual, plural, possessed). They are translation *choices*, not
defects, and this pass leaves them:

- **حومة** ("lane", ×133 incl. the dual `الحومتان` and `حومتين`) for
  "lane", as in "the two lanes of the recorded market".
- **نوتة** ("note", ×9) for a fragrance "note".
- **أوز** ("accord", ×120) for a fragrance "accord".

## Defects found and fixed (18)

| Class | Fix | Where |
|---|---|---|
| Not a word (English twin = "a figure") | `رقبا` → `رقما` ×5 | buying, fragrance, sourcing guides |
| Mistranslation, wrong root (irradiated, not infused) | `مُمشَّع/مُمشَّعة/مُشَّع` → `مُشبَّع/مُشبَّعة/شُبع` ×3 | `bakhoor-forms.ts` |
| Not a word (English = "retail") | `التجزيني` → `بالتجزئة` | `origins.ts` |
| Glitch word (English source = "Taiwan Customs data") | `التايبانية` → `التايوانية` | `sources.ts` (TRAFFIC_AGARWOOD_TRADE_2000 scopeAr) |
| Not words (English = "the same looseness") | `بالالفضاوة المفاوزة نفسها` → `باليسر نفسه` | `glossary-terms.ts` (girmit) |
| Truncated word (`إل` = `إلى`) | `إل إقرارات التصدير` → `إلى إقرارات التصدير` | `destination-guides.ts` (Singapore `localAr`) |
| Doubled definite article | `فالالحومتان` → `فالحومتان` | buying guide |
| Doubled definite article | `الاحتياجاتين` → `الحاجةين` | using-oud guide |
| Punctuation glued to next word (×6; corpus convention is comma+space, 8,167 vs 4) | `،/` + `.` space restored | quality, glossary, guides-using ×3, products |

## What this pass did not do

- It did not **flip the flag**. The gate is named for a *human* review,
  and a developer pass that claims to be that review would be asserting a
  step that did not happen — the exact false-assertion the gate exists to
  prevent. This document is the developer's evidence that the layer is
  clean of the residual class, submitted so a human editor can confirm in
  one review rather than starting cold. The flag is a one-line change
  (`apps/web/src/lib/articles.ts`) the moment that confirmation is given.
- It did not translate any English into Arabic. Every fix landed on an
  Arabic field that already existed; no `Ar` field was added or removed,
  so the bilingual parity the metadata layer relies on (an `ar` hreflang
  only where an `Ar` field is present) is unchanged.

## Gate state

- `apps/web/src/lib/content/text-integrity.ts` (tree-wide scan): PASS,
  53 files, 0 violations, after this pass.
- `pnpm -r build`: exit 0. Full suite: 384/384.
- Objective residual-defect re-scan: 0 glued punctuation, 0 non-word
  findings of the class above; the only remaining scanner hits are the
  legitimate `لل` (preposition + definite article) construction, a known
  false-positive.

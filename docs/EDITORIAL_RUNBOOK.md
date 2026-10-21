# OudGuide.com — Editorial & Publishing Runbook

## 1. Principles of Neutral Sourcing
1. **Factual Integrity:** Every published claim must trace to a recorded authority, botanical reference (CITES/IUCN), or verified field observation.
2. **Affiliation Transparency:** Any commercial relationship or referral destination (including ae.almutalib.com) must be disclosed with clear rel attributes (`sponsored` or `nofollow`).
3. **Prohibition of Wholesale Scraping:** Never ingest competitor prose or third-party image catalogs without explicit written copyright licenses.

## 2. Route Publication Gates
Every route in `docs/CONTENT_STATUS.csv` must satisfy its `publication_gate`:
- `reviewed_original_prose`: Peer-reviewed original text. The word minimum depends on the
  page kind — see the two tiers below.
- `verified_taxa_or_geography`: Scientific nomenclature and geographic coordinates confirmed.
- `licensed_imagery`: Only images with verified provenance and rights clearance.
- `bilingual_review`: Arabic translation must be reviewed by a human editor before public indexation.

### 2.1 The two prose tiers

One length rule across every page kind is the wrong rule. A guide that answers a
buyer's question needs enough prose to answer it; a reference page — a hub, a
glossary entry, an origin or destination page — is judged on whether its answer,
its sources and its limitations are complete, and a reference page padded to a word
count is the same defect as a fallback body repeated across every URL.

- **Article tier — question-specific guides.** Minimum 600 words of main content.
  These are the pages a buyer relies on to make a decision, so the floor is a proxy
  for "answers the question", not for "is long".
- **Reference tier — hubs, glossary entries, origin and destination pages.** No word
  minimum. Judged on completeness of answer, on the sources being present and
  scoped, and on the limitations being stated. A 200-word hub with four sourced
  child links is not thin; a 600-word hub padded with prose is.

The current corpus did not meet the article tier: 49 of 53 guide articles were
below 600 words of main content. That is recorded as REGRESSION-04 in
`docs/AUDIT_REMEDIATION_MATRIX.csv`, and extending the articles is the outstanding
work. The gate is not lowered to match what was produced.

**The floor is now enforced, not just written down.** `tests/article-tier.test.ts`
asserts it, and the measure it uses is defined once, in `mainWordCount()` in
`apps/web/src/lib/articles.ts`, so the runbook, the audit matrix and the test
cannot drift apart. The measure is: the direct answer, section headings and
bodies, lists, callouts, limitations and next steps — and nothing else.
Navigation, breadcrumbs, the sources block, the referral call to action and the
related links are chrome, and a page that passes the gate on chrome has not
earned it.

Two things are deliberately **not** counted. The worked example, because the
runbook describes it as hypothetical and the manifest gate requires it to say so.
And the checklist, because it is a list of questions to ask rather than an answer.
Counting either would let a guide clear the floor on an illustration or a list
instead of on the prose the floor exists to require.

While the corpus is below the floor, that test is red by design and names every
guide still short and the words it still needs. A red test that names the
remaining gap is more useful in the suite than a gate that is quietly absent.

### 2.1a Three instruments that reported clean

Three separate checks in this project's history reported that something was
fine while a reader was being served a broken page. The three failures are
recorded here because the pattern, not the individual bugs, is what will
produce the next one.

**A content-scoped validator reported PASS on four broken page renderers.**
`scripts/validate-content-text.mjs` scanned `data/articles` and `lib/copy` and
found no replacement characters. The four pages that were actually corrupted —
the RFQ, privacy, corrections and verification renderers — were outside its
scan roots. The validator was correct about what it looked at and silent about
everything else.

**A hand-written scanner reported PASS on a tree it had not read.** The
string scanner in `lib/content/text-integrity.ts` treated an apostrophe
inside a block comment as a string opener, which shifted every subsequent
string boundary by one, so it skipped most of each file. It also read a
literal `\n` as two characters, read regular-expression bodies as code, and
mis-read a self-closing JSX tag as the start of a regex. Each of those is a
silent skip. The scanner now uses the TypeScript parser, so it reads the
actual literals.

**A deploy command reported an error and left the old artifact serving.**
`vercel deploy --prod --yes` returned `{"status": "error", "Error": "fetch
failed"}` — no URL, no code, no indication of what had happened. A retry
against the same commit succeeded. The command could not distinguish "nothing
happened" from "the artifact changed and the receipt was lost", and both
readings look identical from the reader's side, because in either case the
old page kept serving.

The rule these three point to is narrower than it first looks, and it is worth
stating precisely:

> **"PASS" from a tool means "nothing found in the place I looked". Only a
> check that reads the whole tree can be trusted to say "nothing found".**

So the three instruments have different obligations, and each has one:

- A check that asserts on a **slice** — a directory, a file list, a family of
  routes — must say which slice, and the gap between the slice and the whole
  must be covered by something else.
- A check that asserts on a **claim** — a manifest field, a label, a
  directory record — can be wrong about the claim, and needs a reader who
  checks the claim against the tree.
- A check that asserts on **nothing** — a deploy command — must be confirmed
  by an independent read: check that the alias moved, and probe the artifact
  that is actually being served.

Two operational habits follow, and both have already cost time:

- **A URL that failed and a connection that failed are different claims.** A
  sweep of 89 sitemap URLs with six parallel curls reported three connection
  errors, which are not HTTP statuses at all. Re-probed one at a time, all
  three were 200. A sweep that does not distinguish a `000` from a status
  code will report a false outage, and the instinct to escalate on a sweep
  failure is the instinct that produces a pointless rollback.
- **After a deploy, confirm the alias moved and confirm the artifact serves,
  before believing either the success or the failure.** The deployment list
  and the alias are the independent read; the command's own output is not.

### 2.2 Indexation is a separate gate from publication

A page can be published and not indexable. The Arabic tree is published, readable
and linked, and carries `noindex` because `bilingual_review` has not been carried
out by a human editor. The gate lives in the shared metadata builder, so a
renderer that forgets to pass `noindex` still cannot produce an indexable Arabic
page. `ARABIC_HUMAN_REVIEW_COMPLETE` in `apps/web/src/lib/articles.ts` is the
single switch; flipping it is the whole of the change.

## 3. Internal Linking Rules
- Activate links only to routes that are in `published` status.
- Never link to 404s, redirected paths, or unpublished draft routes.
- Anchor text must be descriptive and varied, matching `data/proposed_internal_links.json`.

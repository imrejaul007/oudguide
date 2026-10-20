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

The current corpus does not meet the article tier: 49 of 53 guide articles are
below 600 words of main content. That is recorded as REGRESSION-04 in
`docs/AUDIT_REMEDIATION_MATRIX.csv`, and extending the articles is the outstanding
work. The gate is not lowered to match what was produced.

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

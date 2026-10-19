# OudGuide.com — Editorial & Publishing Runbook

## 1. Principles of Neutral Sourcing
1. **Factual Integrity:** Every published claim must trace to a recorded authority, botanical reference (CITES/IUCN), or verified field observation.
2. **Affiliation Transparency:** Any commercial relationship or referral destination (including ae.almutalib.com) must be disclosed with clear rel attributes (`sponsored` or `nofollow`).
3. **Prohibition of Wholesale Scraping:** Never ingest competitor prose or third-party image catalogs without explicit written copyright licenses.

## 2. Route Publication Gates
Every route in `docs/CONTENT_STATUS.csv` must satisfy its `publication_gate`:
- `reviewed_original_prose`: Peer-reviewed original text (minimum 600 words for guides).
- `verified_taxa_or_geography`: Scientific nomenclature and geographic coordinates confirmed.
- `licensed_imagery`: Only images with verified provenance and rights clearance.
- `bilingual_review`: Arabic translation must be reviewed by a human editor before public indexation.

## 3. Internal Linking Rules
- Activate links only to routes that are in `published` status.
- Never link to 404s, redirected paths, or unpublished draft routes.
- Anchor text must be descriptive and varied, matching `data/proposed_internal_links.json`.

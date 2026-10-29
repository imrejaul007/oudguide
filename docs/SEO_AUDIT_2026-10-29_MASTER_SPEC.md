# OudGuide — Master Spec Audit (Systems 01–20), 2026-10-29

Audit of the live tree at commit `27beebd` (origin/main; production deploy
`oudguide-gejqyx273`) against the master SEO/AEO/GEO specification v1.0
(October 2026). Systems 21–30 and the advanced-requirements / acceptance-
standards sections were **not provided** in the spec handoff and are marked
Not-Tested here, not Fail.

Method: three parallel read-only evidence passes (structured data + technical
+ programmatic; topical + E-E-A-T + AI-readiness; local + video + backlinks),
plus direct verification of every disputed claim against the on-disk source.
Every status below was re-checked where the inspector's claim was testable.

Severity per the spec: P0 critical incident · P1 high · P2 medium · P3 low.
Statuses: Pass / Partial / Fail / N-A / Not-Tested.

Confirmed defects are stated as defects; opportunities and hypotheses are
labeled as such. Missing optional features are not reported as errors.

---

## 0. Corpus & gate state (baseline, 2026-10-29)

| Metric | Value |
|---|---|
| Distinct reviewed article slugs | ~286 (up from 236 on 2026-10-26: +30 editorial guides, +4 glossary trade terms, +1 grading reconciliation, +4 collecting/blending guides) |
| Gate floor (guide tier) | 600 words, `ARTICLE_TIER_MIN_WORDS` (`lib/articles.ts:486`) |
| Source-breadth rule | every article ≥2 registry sources, ≥1 primary/regulatory — `tests/source-breadth.test.ts` |
| Orphan guard | `tests/link-reachability.test.ts` (closes the 93-orphan cluster found 2026-10-26) |
| Text-integrity guard | tree-wide, `tests/content-text-integrity.test.ts` (REGRESSION-08 class) |
| Full suite / build | 375/375 tests, `pnpm -r build` exit 0 (verified this session) |
| Live sitemap | 306 URLs EN; AR excluded while `ARABIC_HUMAN_REVIEW_COMPLETE` is false (`lib/articles.ts:267`) |
| Original datasets | 3 — grade-label catalogue, dated Gulf price baseline (CC BY 4.0, machine-readable at `/data/gulf-price-baseline`), authenticity protocol |

Two P0-class items from the 2026-10-26 audit are confirmed closed:
1. **The B2B build break** (missing `supplier-dashboard-client` import) — the
   component now exists and is tracked; the tree builds green.
2. **Lateral hub-to-hub links** (G-L1) — verified: 12 of 12 hubs carry
   sibling-hub `related` edges (e.g. `quality → production, trade`;
   `sourcing → buying, trade`).

---

## 1. Status table (spec systems 01–20)

| # | System | Status | Top severity |
|---|---|---|---|
| 01 | Topical authority architecture | Partial | P2 (duplicate-intent pairs in `quality/`) |
| 02 | Universal answer hub | Partial (opportunity) | P2 |
| 03 | Page-level FAQ | Pass | P3 |
| 04 | Entity SEO & knowledge relationships | Partial | P2 (no `sameAs`; entity set is editorial, not a registry) |
| 05 | Semantic coverage | Pass (depth caveat) | P3 |
| 06 | Keyword research & clustering | Pass (documented) | P3 — `docs/keyword-research/` carries the EN + AR universes + coverage matrix |
| 07 | Search intent | Pass | — |
| 08 | Original content / information gain | Pass | P3 (quarterly index promised, single snapshot today) |
| 09 | E-E-A-T / credibility / trust | Partial | **P1 owner-blocked** (no named reviewer; no named legal operator) |
| 10 | AI answer readiness / citation-friendliness | Pass | P3 (llms.txt in route file, not lib) |
| 11 | Structured data | Pass | P3 (HowTo emits a relative `url`); **P1 open G-S1: no `Product` schema** |
| 12 | Internal linking | Pass | P3 |
| 13 | Technical foundation | Pass | P3 (hreflang points at noindexed AR; see 16) |
| 14 | Programmatic SEO | Pass | **P2: no parity test across the four parallel path sets** |
| 15 | Local / geographic | Partial (honest) | P3 |
| 16 | Multilingual / international | Partial | P2 (whole AR tree noindexed pending human review) |
| 17 | Images | Pass | P3 (no `next/image`; static SVG/PNG only, all alt'd) |
| 18 | Video | N-A | — (no video content; correct for a text/JSON reference corpus) |
| 19 | Backlinks / digital PR | Partial | P2 (no `sameAs`); external link profile Not-Tested by design |
| 20 | Content freshness | Partial | P2 (quarterly cycle not yet operational; batch-dated reviews) |
| 21–30 | (spec text not provided) | Not-Tested | — |

No P0 defects found in systems 01–20. The only P1s are owner-blocked or
single-line schema work.

---

## 2. Findings by system (confirmed, with evidence)

### 01 — Topical authority
- 12 pillar hubs across six silos; every hub has a `children` table of
  contents plus sibling-hub `related` edges (`hubs.ts`). Layered
  pillar → subtopic (origins/regions, buying-in guides, comparisons) →
  resource structure is coherent.
- **P2 · Duplicate intent, two pairs (confirmed present as of this read):**
  - `quality/lab-report-reading` (in `guides-quality.ts`) vs
    `quality/reading-an-oud-lab-report` (in `seo-gap-pages.ts`) — two pages
    chasing the same "how do I read a lab report" query.
  - `quality/gulf-market-grade-labels` (in `quality-grade-ladder.ts`) vs
    `quality/grade-label-dataset` (in `seo-gap-pages.ts`) — vocabulary page vs
    the dataset record.
  - Remedy: for each pair, designate one canonical and redirect/fold the
    other (the alias-redirect pattern already exists in `next.config.mjs`).
- P3 · Gulf shape/grade vocabulary (Jura, Muri, Girmit, Salla, Digga,
  Qadeem, Kalakasi) is real but shallow — most glossary entries are
  short disclaimers rather than substantive entries. Breadth > depth.

### 02 — Universal answer hub
- No `/answers/` or `/knowledge/` section; no structured Q&A database.
- Answer intent is served per-page (every article carries a `directAnswer`)
  plus the machine-readable `llms.txt`. FAQ content is embedded per-surface
  (directory index, supplier profiles), not consolidated.
- P2 · Opportunity, not defect: a unified answer hub would deduplicate
  "what is oud / how do I check oud" intents at scale. Low priority while
  the per-page answer surface + llms.txt are doing the work.

### 03 — Page-level FAQ
- Hand-authored, few, non-generic: 4 questions on the directory index
  (`directory/page.tsx:199`) and 4 on supplier profiles
  (`directory/[slug]/page.tsx:139`, one dynamic on `minimum_order_quantity`).
- Rendered as visible crawlable HTML (Accordion) **and** emitted as
  `FAQPage` from the same `faqItems` array, so schema cannot out-run the
  visible block (`jsonld.ts:361–371`).
- No copy promises FAQ rich-result visibility; `sources.json:86` records
  the 7-May-2026 FAQ rich-result discontinuation and the policy is
  consistently honored. Pass.

### 04 — Entity SEO
- Single `SOURCE_REGISTRY` confirmed — one file
  (`data/articles/sources.ts`), no duplicate copy (the "registry is one
  file" rule holds).
- **P2 · No `sameAs` anywhere** (grep across `src/lib` returns zero).
  `organizationSchema` (`jsonld.ts:609–620`) self-references only. For a
  site whose moat is an original dataset + cited regulatory corpus, a
  `sameAs` to a genuine external profile (repository, research page,
  professional body) would strengthen entity disambiguation. Use only for
  real profiles per the spec.
- P3 · No unified entity registry: origins, grades and brands are article
  slugs, not a shared table. Entity consistency is maintained editorially.
  Architectural, not a bug.

### 05 — Semantic coverage
- ~100 glossary slugs with spelling-variant notes; each entry separates
  "what the name states" from "what it does not establish". No keyword
  stuffing detected. Pass with the depth caveat above (P3, from 01).

### 06 — Keyword research & clustering
- `docs/keyword-research/` holds the EN universe (40+ SERP probes), the AR
  Gulf universe (20 probes), and a merged COVERAGE_MATRIX mapping each
  cluster to intent, target URL, and vendor-list status. The two structural
  findings are unchanged: the vendor register is the #1 commercial gap, and
  retail product-format confusions were largely closed by
  `products/bakhoor-forms` + `buying/how-to-buy-oud` +
  `using-oud/wood-versus-oil` (the "which product do I actually want"
  conflation root the 10-26 audit called G-T2 is now substantially covered).

### 07 — Search intent
- Coherent mapping: transactional → `products/*` + `buying/*`;
  authenticity → `quality/*` + the authenticity protocol;
  wholesale → `sourcing/*` (MOQ, sample-to-bulk, wholesale sample plan) +
  `/rfq` + supplier matching. The 10 `seo-gap-pages.ts` were chosen to close
  near-zero-coverage queries. No intent mismatch found. Pass.

### 08 — Original content / information gain
- Four genuine, self-labeled moats:
  1. `oud-authenticity-protocol` — ordered 5-check + 2-instrument battery
     authored by OudGuide, emits `Dataset` schema.
  2. `quality/gulf-price-baseline` — dated per-region price-observation
     bands (2026-10-26), CC BY 4.0, machine-readable JSON download.
  3. The "four facts a directory has to keep apart" business model
     (`worked-examples.ts`).
  4. `grade-label-catalogue` — a dated record of which grade labels a named
     retailer displays, recording that none carries a published threshold.
- Each asset states what it is **and is not** (observation vs market
  index/average/forecast). Originality holds. P3: the quarterly cadence is
  promised in-copy (`collecting/investment-value` explicitly forbids
  printing a direction until the quarterly pair lands) but only the first
  snapshot exists — see 20.

### 09 — E-E-A-T / trust
- Strong: 11 policy pages that say what they have *not* done;
  "no sponsored rankings, verification ≠ payment" lines; real
  source-breadth enforcement; two first-party datasets no competitor
  publishes.
- **P1 (owner-blocked) · No named human reviewer.** All ~286 articles
  attribute to the string "OudGuide editorial review"
  (`basics.ts:33`, `hubs.ts:19`, etc.), so the `Article` schema author is
  the organization. Supplying a real name + role upgrades the `Person`
  author surface, the About block, and the E-E-A-T signal in one move.
- **P2 · No named legal operator** — `about/ownership` states honestly
  that the controller is not yet named. Deliberate, but it caps the trust
  signal.
- Paid-listing disclosure is present and consistent (directory FAQ +
  ranking-policy). Pass element.

### 10 — AI answer readiness
- `llms.txt` published at `/llms.txt` (force-static, generated from the live
  corpus at build time): hub structure, the original datasets with their
  machine-readable JSON URLs and dates, market data, commercial surfaces.
  AR tree deliberately excluded (noindexed).
- Every article carries `directAnswer`, `limitations`, reviewer +
  `reviewedOn`; stats carry dates and units; datasets are labeled and
  downloadable. Pass. P3: the generator lives in
  `app/llms.txt/route.ts`, not a reusable lib module — fine, just noted.

### 11 — Structured data
- All JSON-LD in one module (`lib/jsonld.ts`), rendered as script tags,
  never via metadata. Types: `WebSite`+`SearchAction`+`Organization`
  (home, EN only — correct, since AR is noindexed), `Article`+
  `BreadcrumbList`+`ItemList`, `DefinedTerm` (glossary), `Organization`
  (supplier profiles, no contact fields — pinned by
  `tests/jsonld.test.ts:199`), `FAQPage` (directory + profiles, built from
  the visible items), `Dataset` (the two data assets + `/market`),
  `HowTo` (authenticity protocol, built from the article's own sections),
  `Service`+`Offer` (membership, the one real figure AED 1200/yr, no
  availability claim since checkout is not active).
- Fake-signal rules honored: no `aggregateRating`, no `Review`, no
  `GeoCoordinates`, no street address; business schema is `Organization`,
  not `LocalBusiness`, because no physical address is published.
- **P1 · G-S1 still open: no `Product` schema.** Product-family pages
  (`products/[slug]`) emit `Article` via `buildJsonLd` (`jsonld.ts:521`);
  there is no `'Product'` type anywhere in the module. A `Product` type
  with a plain `name`/`description` (no fabricated `offers` or `sku`,
  since no prices are published) is the correct machine signal for a
  product-format page.
- **P3 · `HowTo` emits a relative URL** (`jsonld.ts:457`,
  `url: \`${options.path}\``) while every other builder in the file emits
  the absolute `${siteUrl}${path}`. One-line fix.

### 12 — Internal linking
- Breadcrumbs emitted on the hierarchy pages; pillar → support via hub
  `children` + `related`; orphan prevention is a tree-wide test
  (`tests/link-reachability.test.ts`) that subsumes the 93-orphan cluster
  found on 10-26 (36 destination guides, 40 regions, 4 comparisons, 13
  countries). The 30 new editorial guides and 4 new glossary terms are
  wired as hub children. Pass.

### 13 — Technical foundation
- Canonical: single source in `buildMetadata` (canonical = SITE_URL + path,
  no trailing slash); the former dual-canonical guides catch-all was fixed
  (alias redirects in `next.config.mjs:139–154`).
- `robots.ts` disallows `/api/`, `/*/inquiries/`, `/*/admin`,
  `/*/b2b/quote/`, `/*/b2b/supplier/`; sitemap ref present.
- Sitemap: every URL filtered through `isPublishedPath` — the structural
  fix for the 570/775 sitemap-404 outage of 10-20; 249 territory shells
  intentionally excluded.
- `noindex` enforced in exactly one place (`lib/metadata.ts:106–118` for
  AR-pending-review, plus 7 explicit `noindex:true` pages); pinned by
  `tests/indexability.test.ts`.
- B2B surface independently re-verified this session: the supplier console
  reads the session and redirects unauthenticated visitors to login
  (`b2b/supplier/page.tsx:35–47`); receipts/console are sitemap-excluded
  and robots-disallowed. No leakage.
- No defects found. P3 note: the 404-fix is evidenced structurally in
  source; it was not re-confirmed against production in this pass.

### 14 — Programmatic SEO
- Territory shells (249): noindexed + sitemap-excluded — the near-duplicate
  mitigation works: identical bodies are not offered as answers.
- `products/[slug]`, `glossary/[slug]`, `guides/[...slug]` gated on a
  reviewed, indexable article existing (`route-resolver.ts:238–266`).
- Directory role filters: 24 URLs are rewrites onto one `/directory` page
  with query params; only `/directory` + `/directory/map` are indexable —
  one canonical, not 24 near-duplicates. Acceptable.
- **P2 · Parallel path sets have no parity test.** A route must be in four
  separate arrays — `route-resolver.ts` STATIC, `sitemap.ts` STATIC_PAGES,
  `middleware.ts` KNOWN_UNPREFIXED_ROOTS, `lib/constants.ts` nav — or it
  404s while looking published. `/market` is now in all four (commits
  `cf0d011`/`fdbd2cc`); `/brands` is in three and intentionally noindexed.
  Nothing machine-checks the sets stay in step. Remedy: one test asserting
  membership parity across the four arrays (the one deliberate exception
  being noindexed-only routes).

### 15 — Local / geographic
- Two layers: 249 noindexed ISO registry shells
  (`world/[iso2]` — honest "a place exists" records, `role_status:
  "Not assessed"`) and the real local depth in 35 destination guides
  (`buying/in/*`, with named markets, per-regime controls, institutional
  names) + 14 origin-country articles + 40 origin regions.
- No Google Business Profile references (correct for a remote-supplier
  directory; `Organization` not `LocalBusiness`). Prices/tax rates are
  deliberately not claimed on the destination pages — that load sits on
  the dedicated price-baseline dataset, which the pages link to.
- Location claims are hedged throughout; producing regions outside the 14
  covered countries are marked "Not assessed", not asserted. Pass on
  honesty. P3: the indexable `/world` index sits above 249 noindexed
  children — defensible (the index is a genuine register browser), noted.

### 16 — Multilingual / international
- `hreflang` emitted only where a page passes `alternateLocalePath`
  (39 pages); reciprocity is correct (EN declares AR, AR declares EN);
  `x-default` points at the same page's EN version, not home.
- Arabic bodies are genuine per-article records; the tree-wide
  text-integrity test blocks English bleed into Arabic; `<html lang>` +
  `dir` set per locale; language nav present on desktop and mobile.
- **P2 · The whole AR tree is noindexed** while
  `ARABIC_HUMAN_REVIEW_COMPLETE` is false. Consequences: (a) every EN
  page's hreflang `ar` entry points at a noindexed URL — permitted, but
  the AR variant cannot rank until the flag flips; (b) the strongest AR SERP
  opportunities (سعر عود, عود بالجملة, تصريح سايتس) are suppressed. The 11
  Arabic data files need human review; the encoding guard is already green,
  so this is a review step, not a code step.
- P3 · Verify that every EN static page which has an AR shell actually
  passes `alternateLocalePath` (only 39 pages do today).

### 17 — Images
- All 7 `<img>` tags carry alt text. No broken refs (every referenced SVG
  exists). The known `*.png` `.vercelignore` gotcha is **absent** —
  `.vercelignore` has no image extension, so logo/favicon serving is not
  silently broken. No `next/image` (all static SVG/PNG from `/public`) —
  P3, no perf defect at this image count.

### 18 — Video
- No video content, no `VideoObject`. A reasonable N-A for a
  text/JSON reference + directory + RFQ matching site. If sampling or
  grading walkthroughs are ever published, `VideoObject` (or
  `CreativeWork` with video) would be the eligible markup. No action.

### 19 — Backlinks / digital PR
- On-site levers that can earn legitimate references:
  - the original dataset downloads (`/data/gulf-price-baseline`,
    `/data/grade-label-catalogue`, served as `Content-Disposition:
    attachment` JSON);
  - the CITES/TRAFFIC/ITTO/POWO registry (genuine, stable primary-source
    URLs — a legitimate reason for an industry body to cite the
    compilation);
  - `llms.txt` as an answer-engine surface.
- **P2 · No `sameAs` on the Organization schema** (see 04).
- Paid/sponsored policy is explicit and honored (`external_link_rules.json`:
  "Never sell dofollow SEO credit"; directory + ranking-policy pages state
  no paid ranking). No suspicious link patterns on-site.
- External link profile: Not-Tested by design (needs a GSC/Ahrefs crawl).

### 20 — Content freshness
- Every article carries `reviewedOn` + a named review method. The market
  page carries `datePublished`/`dateModified` (2026-10-26).
- **P2 · The quarterly price cycle is not yet operational:** one dated
  snapshot exists; the "quarterly pair" that would license a direction
  claim does not; there is no scheduling or per-page next-review date.
  P3: the review-date spread is narrow (2026-10-20/21/26) — batch-dated,
  not rolling.
- Content ownership is editorial but generic (ties to the 09 P1).

---

## 3. Diff against the 2026-10-26 audit

**Closed since 10-26:**

| 10-26 item | State now |
|---|---|
| P0 §0 build break (B2B missing import) | Closed — component tracked, green build |
| G-T1 `llms.txt` | Closed — published at `/llms.txt`, corpus-driven |
| G-L1 lateral hub-to-hub links | Closed — 12 of 12 hubs verified |
| G-S2 directory-index `ItemList` | Closed — emitted with `BreadcrumbList` + `FAQPage` |
| G-L2 header nav silos | Closed — Products/Glossary/Origins in the header nav (constants.ts) |
| G-T2 decision/conflation hub | Substantially closed — `products/bakhoor-forms` + `buying/how-to-buy-oud` + `using-oud/wood-versus-oil` |
| Tier-1 #4 CITES expansion | Closed — `trade/cites-import-by-market` exists (US/UAE/EU; KSA/EG/MA expansion remains a content item, not a route gap) |
| Tier-1 #5 Kashmiri/Murūki disambiguation | Closed — `glossary/kashmuri` + `glossary/murruxi` committed 2026-10-26 |

**Still open, and new:**

| # | Item | Severity | Effort |
|---|---|---|---|
| 1 | **Register 5–10 real, owner-verified suppliers** — the #1 commercial gap; every "find me a supplier" query lands on a near-empty filter page today (one verified record: Al Mutalib; demos excluded) | P0→P1 | owner input only — path verified mechanically complete 2026-10-29: records are a data-layer drop-in (`initialBusinesses` in `apps/web/src/lib/data.ts`, the DNS-checked website fixtures are the precedent), accounts are operator-gated (`admin/supplier-accounts`), claims carry the contact-display entitlement (`admin/claims`), listing review is operator-side (`admin/listings`), supplier self-service is whole (login, listings, leads, quotes). No code change to land 5–10 names |
| 2 | **Flip `ARABIC_HUMAN_REVIEW_COMPLETE` after the 11-file AR human review** — unlocks the whole AR market + makes the AR hreflang targets indexable | P1 | human confirmation only — the developer-side pass of the whole AR content layer (all 50 data files + copy, not the stale "11") is done and recorded: `docs/ARABIC_REVIEW_2026-10-29.md` (commit `e0d650d`). 18 count-asserted fixes in the valid-Arabic-but-wrong-word class the encoding guard cannot see; systematic coinages (حومة, نوتة, أوز) reviewed and left; glued punctuation down to 0; tree-wide guard PASS. The flag stays until a human editor confirms, by design: the gate exists to prevent asserting a review that has not happened |
| 3 | **Named reviewer (name + role + photo)** → `Person` author in `Article` schema + About "Reviewed by" block | P1 | mechanism built 2026-10-29 (commit `0bab6b5`) — the editorial register (`lib/reviewer-register.ts`) is the single drop-in: one record (name, role, optional /public photo, operator `confirmedOn`). The Article schema's `author` is `Organization` while the register is empty and a `Person` carrying only the record's own fields when filled; every guide's review-record line resolves through it; the About page renders the register section only when a record exists (claim-in-schema-visible-on-page rule intact). `tests/reviewer-register.test.ts` pins both states. Supplying the record is the entire remaining work |
| 4 | **`Product` schema on product-family pages** (G-S1, open since 10-26) | P1 | **Closed** — commit `d1c3775`: the family page emits a `Product` with `offers`/`sku`/`image` asserted absent (price and availability belong to a supplier through the RFQ, not the format), live-verified on the deployment |
| 5 | **Quarterly price index made operational** — second dated snapshot + `Dataset.dateModified` + the cadence named in-copy | P2 | mechanism built 2026-10-29 (commit `cde6e77`) — the price-snapshot lineage (`datasets/price-snapshot-lineage.ts`) is the single drop-in: adding a second dated, operator-signed snapshot is the whole code change; the Dataset schema's `dateModified` follows the newest reading without a re-review. `directionClaimSupported` keeps a direction claim impossible on one signed baseline (an unsigned snapshot 2 would be a claim on data no one confirmed); `tests/price-snapshot-lineage.test.ts` pins all three rules and proves the drop-in as a property. Owner decisions: confirm the cycle runs and who signs off snapshot 2 |
| 6 | **Duplicate-intent pairs in `quality/`** — designate one canonical per pair, alias-redirect the other | P2 | **Closed** — commit `f7c582f`: the two lab-report guides merged into one canonical page; four inbound references re-pointed; both legacy URLs 308 to the survivor instead of 404. The audit named one pair, and it is the only one |
| 7 | **Parallel path-set parity test** (sitemap ∩ resolver ∩ middleware ∩ nav arrays) | P2 | **Closed** — commit `2beaf32`: `tests/parallel-path-sets.test.ts` pins the four sets in step and cross-checks that a URL the resolver publishes is actually in the published set (the 570/775-404 defect class) |
| 8 | **`Organization.sameAs`** to a genuine external profile (repository, association) | P2 | mechanism built 2026-10-29 (commit `d1c3775`) — `SAME_AS` in `lib/jsonld.ts` starts empty and is owner-filled; an empty list emits nothing (the guard that catches a fabricated profile). Supplying the URLs is the remaining work |
| 9 | `HowTo` absolute URL (one line, `jsonld.ts:457`) | P3 | **Closed** — commit `d1c3775`: `HowTo.url` is `${siteUrl}${options.path}`, absolute |
| 10 | Verify `alternateLocalePath` on every EN static page that has an AR shell | P3 | **Verified 2026-10-29** — every indexable EN static that has an AR shell passes the alternate (the two indexable B2B index pages included); the only five `buildMetadata` callers without it are all non-indexable by design (admin ×2 `noindex`, supplier console + receipt `noindex`, login `index: false`), so they have no AR shell to cross-reference |

Not on the queue, deliberately: the universal answer hub (02) and video
(18) are opportunities/N-A, not defects; glossary depth (01/05) is a
content-ROI call, not a gate.

---

## 4. Owner decisions required

1. Which 5–10 real suppliers to register (names + cities + roles; contact
   fields publish only under the owner-verified states the directory gate
   already enforces).
2. The named reviewer: real name, role, and — for the E-E-A-T lift — a
   photo.
3. The named legal operator/controller for the About page.
4. The 11-file Arabic human review, so the AR noindex flag can flip.
5. Confirmation that the quarterly price-index cycle should run (and who
   signs off snapshot 2).

---

*Verified against: `lib/jsonld.ts`, `lib/metadata.ts`, `lib/route-resolver.ts`,
`lib/articles.ts`, `lib/constants.ts`, `app/robots.ts`, `app/sitemap.ts`,
`app/llms.txt/route.ts`, `app/data/[slug]/route.ts`, `data/articles/*`,
`data/datasets/*`, `components/business/*`, `tests/` (375/375 green),
`docs/keyword-research/*`, `docs/SEO_AUDIT_2026-10-26_FULL.md`, and the
production deploy `oudguide-gejqyx273`.*

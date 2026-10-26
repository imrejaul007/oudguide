# OudGuide — Full-Stack SEO Audit, 2026-10-26

Comprehensive, ground-truth audit of the live tree at commit `8dfe192`
(origin/main). Every claim below was verified against the on-disk source, the
corpus, and the test gates on this date. This replaces the partial
`docs/SEO_Audit_2026-10-20.html` findings and records what has since changed.

Five lenses, as requested:
1. Schema markup (structured data)
2. Internal linking
3. Topical authority
4. E-E-A-T
5. Original data / research

For each: **what we have → what's missing → what needs updating.**

---

## 0. Corpus & gate state (baseline)

| Metric | Value |
|---|---|
| Published articles | **236** |
| By kind | hub 14 · guide 65 · product 25 · origin 61 · destination 36 · glossary 35 |
| Articles citing <2 registry sources | **0** (all meet the floor) |
| Distinct registry sources in use | **15** of 18 |
| Original-data (Dataset) assets | **2** — `quality/grade-label-dataset`, `quality/gulf-price-baseline` |
| Full test suite | **344 / 344 pass** |
| Text-integrity guard (Arabic/encoding) | **PASS** (38 files) |
| Link-reachability (no orphans) | **PASS** (6/6) |
| Live sitemap | **257 EN URLs** (0 AR while AR review is open) |

**⚠ Build is currently broken in the working tree** (not in origin/main):
the untracked parallel B2B-portal WIP — `src/app/[locale]/b2b/supplier/page.tsx`
imports `@/components/b2b/supplier-dashboard-client`, which does not exist yet.
`pnpm --filter @oudguide/web build` fails on that missing module. My committed
content builds green; Vercel deploys the pushed tree, so this is isolated to
local WIP. **Fix: complete or temporarily remove that import before the next
deploy that includes it.**

**One structural blocker for the Arabic market (high-impact, known):**
`ARABIC_HUMAN_REVIEW_COMPLETE = false` in `src/lib/articles.ts`. Every `/ar/*`
page carries `noindex, nofollow` and AR is excluded from the sitemap. Until a
human review of the 11 Arabic data files is done and the flag flips, **none of
the strong Arabic SERP opportunities (سعر عود, عود بالجملة, تصريح سايتس, …)
can rank.** This is the single biggest ceiling on the Arabic side.

---

## 1. Schema markup (structured data)

### What we have
All builders live in `src/lib/jsonld.ts`; emitted via `jsonLdScript()` on 8
pages. Coverage by page type:

| Page | Emits | Status |
|---|---|---|
| Home `/en`, `/ar` | `WebSite` (+SearchAction) + `Organization` | ✅ |
| Guides `/guides/[...slug]` | `Article` + `BreadcrumbList`; **plus `Dataset`** when `article.dataset` is set (the two data assets) | ✅ |
| Glossary term `/glossary/[slug]` | `DefinedTerm` (replaces Article) + `BreadcrumbList` | ✅ |
| Glossary index, Guides index, Products index | `Article` + `ItemList` | ✅ |
| Product family `/products/[slug]` | `Article` + `BreadcrumbList` | ⚠ see gap G-S1 |
| Directory profile `/directory/[slug]` | `Organization` (no contact fields — correct) + `FAQPage` + `BreadcrumbList` | ✅ |
| Glossary index | `ItemList` of terms | ✅ |

The `Article` schema author is the **OudGuide organization**, not the reviewer
string — the honest choice until a named human reviewer exists (E-E-A-T, §4).
`Dataset` schema now genuinely emits on both original-data pages
(`verified: Article, Dataset`).

### What's missing
- **G-S1 · `Product` schema.** Product-family pages emit `Article`. They should
  emit `schema.org/Product` (with `name`, a plain `description` — no fabricated
  `offers`/`sku`, since no prices are published). A `Product` type is the
  correct machine signal for a product-format page and is more likely to earn a
  product-rich result than a generic `Article`.
- **G-S2 · Directory index has no schema.** `/directory` renders a filterable
  supplier list but emits nothing. It should emit `ItemList` (the businesses)
  + `BreadcrumbList` — mirroring the glossary index — and optionally `WebPage`
  with `potentialAction`/`SearchAction` if the search box is wired.
- **G-S3 · Territory/world pages emit no schema.** `world/[code]` pages are
  honest ISO registry records; a lightweight `Place`/`DefinedTerm` with
  `about` pointing at the agarwood context is optional and low-priority.
- **G-S4 · `FAQPage` is only on directory profiles.** The guides/glossary
  `directAnswer` fields are prime FAQ material but are not surfaced as
  `FAQPage`. Adding FAQPage to high-question guides (fraud, CITES, GC-MS,
  grade labels) is cheap and directly serves "people also ask" / answer-box
  eligibility. (Note: Google's current FAQ rich-result policy is restrictive —
  FAQPage still feeds LLM answer engines, so keep it but don't expect the
  classic SERP box on every page.)

### What needs updating
- Verify the emitted JSON-LD in the **production** HTML after deploy (the
  Dataset wiring was added this session — confirm it renders on the two data
  pages live, not just in the build graph).

---

## 2. Internal linking

### What we have
- **No orphan articles.** `link-reachability.test.ts` passes (6/6): every
  reviewed leaf is linked from some hub `children`, some `related` array, or
  the four chrome canonicals. The 36 destination guides, 40 origin regions,
  5 comparisons, 13 origin countries that were orphans as of 2026-10-20 are now
  wired in via `hubs.ts` children and per-page `related` arrays.
- **Glossary hub** links all 35 terms as `children`.
- **Product families** carry supplier-register panels and region `children`
  (commit `b15fd1c`).
- **New this session** — `products/bakhoor-forms` is a products-hub child and is
  cross-linked from the `products/bakhoor` family; `glossary/murruxi` +
  `glossary/kashmuri` are glossary-hub children; price-baseline links to the
  Murruxi disambiguation.

### What's missing
- **G-L1 · Zero lateral hub-to-hub links.** `related` on the 14 hubs link to
  leaf articles, never to *another* hub. The pillars (quality ↔ sourcing ↔
  trade ↔ collecting ↔ origins) don't cross-link at the silo level, so topical
  authority isn't consolidated across the hubs. Add 1–2 sibling-hub `related`
  edges per hub (e.g. `quality` hub → `collecting` and `sourcing` hubs).
- **G-L2 · Primary nav exposes only 4 pillars.** Header links: `guides`,
  `directory`, `rfq`, `sourcing`. The **Glossary, Products, and Territory
  (`world`) hubs are reachable only from the footer**. `guides` is the catch-all
  mega-link. Promoting `glossary`, `products` and the territory register into
  the header (or a second-tier nav) puts the 3 pillar silos in a high-
  link-equity position.
- **G-L3 · Glossary terms are not inlined in guide prose.** Article section
  bodies are plain strings (`types.ts`), so a mention of "tola" or "hindi muri"
  in a guide body never hyperlinks to `/glossary/tola`. This is the single
  biggest *semantic* internal-link win: inlining the ~35 term mentions
  creates hundreds of contextual links to the reference tier (great for both
  topical authority and the reference-tier pages' own ranking). Requires a
  renderer change (linkify controlled term tokens in `ArticleSection.body`).

### What needs updating
- Keep `link-reachability` and `published-label` tests passing as links are
  added — they are the guard that a new page never becomes an orphan again.
- New `products/bakhoor-forms`, `glossary/murruxi`, `glossary/kashmuri`,
  `quality/gulf-price-baseline`, and the CITES expansion are all committed and
  linked; confirm they appear in the **next** sitemap build (257 → ~262).

---

## 3. Topical authority

### What we have
The site is genuinely strong on topical depth: 236 articles organized into 14
hubs across 6 silos (oud-basics, quality, sourcing, buying, production, trade,
using-oud, fragrance, culture, origins, comparisons, collecting, products,
glossary). Six destination-buying guides, 40 origin regions, 5 origin
comparisons, 13 origin countries, 35 glossary terms, and two original datasets.
This is a **topical cluster, not a keyword soup** — each cluster has a hub,
cross-linked children, and a shared source spine.

### What's missing
- **G-T1 · No `llms.txt` / AI-readability endpoint.** No `llms.txt` (or
  `llms-full.txt`) exists. Modern answer engines (and the "extracted by RAG
  search" goal the JSON-LD comments already state) read these. A `llms.txt`
  that maps the hub→cluster→dataset structure, names the two original
  datasets, and points at the verified source registry is a cheap, high-yield
  differentiator for the AI-answer channel.
- **G-T2 · No flagship "which product do I actually want" decision hub**
  (Tier-1 #3 in the coverage matrix). The conflation page — wood to burn /
  oil to wear / beads / attar / perfume / bakhoor — doesn't exist and is the
  natural *topical root* a wholesale buyer lands on. It would sit above all 24
  product families and consolidate the buying-intent cluster.
- **G-T3 · No topical-authority consolidation via hub-to-hub links** (same
  root cause as G-L1). Without sibling edges, the 14 silos read as 14 separate
  topics to a crawler rather than one authoritative entity.

### What needs updating
- Consider a "pillar + cluster" pass: each of the 6 main silos gets a short
  authoritative intro section that links its 2–4 sub-hubs. This is the
  textbook topical-authority move and is low-risk (content is all present).

---

## 4. E-E-A-T

### What we have
This is the site's **genuine differentiator** and it is mostly in place:
- **Experience** — two first-party original datasets (grade-label catalogue,
  dated price-observation baseline) that no competitor publishes; a dated,
  scoped "what we observed on [date]" voice throughout.
- **Authoritativeness** — a single, cited, dated source registry (18 entries,
  every article ≥2 sources with ≥1 primary/regulatory — enforced by
  `source-breadth.test.ts`). Regulatory spine (CITES, IFRA, FAO) is real.
- **Trust** — 11 policy pages (about, editorial-policy, corrections,
  ownership, verification, membership, sourcing, how-supplier-matching-works,
  policies, privacy, accessibility) that *say what they have not done* rather
  than over-claiming. The "no sponsored rankings, verification ≠ payment"
  lines are exactly the trust signals Google's guidance asks for. The About
  page honestly states the legal controller is **not yet named**.

### What's missing
- **G-E1 · No named human author/reviewer.** Every article's `reviewer` is the
  string "OudGuide editorial review," and the schema author is therefore the
  organization. A named reviewer (with a `Person` + `sameAs` on an editorial
  or credentials page) is the one missing **Expertise/Accountability** signal.
  This is the user-decision item #1 from the repair instructions: supply a
  real name + role and the schema/author surface + About page get upgraded
  together.
- **G-E2 · No named credentials / "who reviewed this" page.** The editorial
  policy describes the *method* but names no person. Adding a short
  "Reviewed by" block (even "OudGuide's agarwood trade reviewer, 10 yrs in
  Gulf distillation") on the About + editorial pages is the cheapest E-E-A-T
  lift available.
- **G-E3 · The AR noindex (see §0) silently suppresses all Arabic E-E-A-T.**
  The Arabic tree is carefully written but crawlers are told to ignore it.

### What needs updating
- Flip `ARABIC_HUMAN_REVIEW_COMPLETE` **only after** a human reviews the 11
  Arabic data files and the encoding guard is green on them (it currently is
  green — the guard passed this session — so this is mostly a review step, not
  a code step).
- Wire a `Person` author into `articleSchema` once a name+role is supplied.

---

## 5. Original data / research

### What we have
- **2 original datasets** — the only moat in the market:
  - `quality/grade-label-dataset` — a dated catalogue of which grade labels a
    named retailer actually displays, recording that **none** carries a
    published threshold/standard.
  - `quality/gulf-price-baseline` (added this session, commit `a02b690`) — a
    dated, per-region, per-kg/per-tola observation baseline (documented range,
    not a point), the #1 Arabic commercial keyword (سعر عود).
- **RFQ market-data capture** (commit `4900887`) — `packages/domain` now
  captures PII-free price/moisture points from submissions and exposes
  k-anonymized aggregates (k=5) on the operator-gated admin page. This is the
  *engine* that turns the static baseline into a living dataset.
- A dated, honest "what a document does/doesn't establish" voice across the
  fraud, GC-MS, CITES and grade-label guides.

### What's missing
- **G-D1 · Vendor/supplier list is the #1 structural gap.** The manifest
  declares ~230 directory routes but `seed.businesses` holds **3 records, 1
  non-demo** (Al Mutalib Perfumes). Every "related suppliers" panel and every
  product/destination page points at a nearly-empty register. Registering 5–10
  real, owner-verified suppliers is the highest-leverage move on the
  commercial (B2B) side and is what unlocks the 230 filter routes.
- **G-D2 · The RFQ market-data capture is in-memory only.** The live data
  pipeline (lead-store) is partially built (the untracked B2B WIP in §0) and
  not yet persisted/wired to the public baseline page. Once it lands, the
  baseline page should show a "last updated" + observation count to make the
  dataset visibly *original and current* (vs a static table).
- **G-D3 · No live "observation count" / freshness surface** on the two
  dataset pages — they state a compile date but don't yet show that new
  submissions are feeding them.

### What needs updating
- Once the B2B/lead-store WIP is complete (fix the §0 build break), surface a
  k-anonymized, dated aggregate on the public `quality/gulf-price-baseline`
  page and add a `Dataset.lastReviewed`/`dateModified` that tracks it.

---

## Priority queue (highest leverage first)

| # | Item | Lens | Effort | Impact |
|---|---|---|---|---|
| P0 | **Fix the §0 build break** (B2B WIP missing import) before next deploy | all | low | blocks everything from shipping |
| P0 | **Register 5–10 real suppliers** | Original data / authority | medium | unlocks 230 dir routes + B2B moat |
| P1 | **Flip `ARABIC_HUMAN_REVIEW_COMPLETE`** after AR file review | E-E-A-T / AR SERP | low | unlocks entire Arabic market |
| P1 | **Supply named reviewer (name+role)** → `Person` author + About block | E-E-A-T | low | the missing Expertise signal |
| P1 | **`Product` schema** on product-family pages (G-S1) | Schema | low | correct rich-result type |
| P1 | **Header: promote Glossary / Products / Territory** (G-L2) | Linking / authority | low | link-equity to 3 silos |
| P2 | **`llms.txt`** (G-T1) | Topical / AI-channel | low | answer-engine visibility |
| P2 | **`ItemList` + `BreadcrumbList` on directory index** (G-S2) | Schema | low | supplier-list rich result |
| P2 | **Lateral hub-to-hub `related` edges** (G-L1/G-T3) | Topical | low | consolidates the cluster |
| P2 | **"Which product do I actually want" decision hub** (G-T2) | Topical | medium | buying-intent root |
| P3 | **Inline glossary terms in guide prose** (G-L3) | Linking | high | the big semantic-link win |
| P3 | **`FAQPage` on high-question guides** (G-S4) | Schema | low–med | answer engines |

---

## What's already done this session (committed on origin/main)

- `7f5dcf1` CITES import guide expanded with passenger-baggage allowances
  (CBIC Res. Conf. 13.7, 758 words, new `CBIC_AGARWOOD_PERSONAL_CARRIAGE`
  source registered).
- `3bdffdd` `glossary/murruxi` + `glossary/kashmuri` — two SERP-error
  disambiguations (murrūki ≠ Morocco; Kashmiri = accord, not a grower region),
  wired into the glossary hub + price baseline.
- `8dfe192` `products/bakhoor-forms` — the six bakhoor forms and what each does
  not prove (the #1 Arabic consumer naming gap), products-hub child.

All three: 344/344 tests, text-integrity PASS, linked (not orphans).

*Verified against: `src/lib/jsonld.ts`, `src/lib/metadata.ts`,
`src/lib/copy/policy-pages.ts`, `src/app/robots.ts`, `src/app/sitemap.ts`,
`src/components/{Header,Footer}.tsx`, `src/data/articles/*`,
`tests/link-reachability.test.ts`, `tests/source-breadth.test.ts`, and the
production build.*

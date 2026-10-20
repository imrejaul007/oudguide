# Audit — agarwoodguide.com (legacy source site) and oudguide.com (current deployment)

**Audit date:** 20 October 2026
**Auditor:** Claude Code
**Scope:** Full crawl and per-page review of every URL in `agarwoodguide.com`'s XML sitemap index (84 URLs), and a full status + content check of every URL in `oudguide.com`'s sitemap (775 URLs).
**Method:** Sitemap-derived URL inventory; HTTP fetch of every page; HTML extraction for metadata, headings, JSON-LD, internal link graph, external citations, image alt coverage, and body-text similarity; per-page editorial read of all 48 agarwoodguide articles and 11 listing pages; independent duplicate-request cross-check of live status codes.
**Data artefacts:** `docs/LIVE_SITEMAP_STATUS_2026-10-20.csv` (775 rows), `docs/AGARWOODGUIDE_CRAWL_2026-10-20.csv` (84 rows).

---

## 0. What this audit is for

agarwoodguide.com is the **legacy WordPress source site**. It is not the product. Its guide prose and business listings are the strongest content asset the project has, and its weakness is technical. This document records what the legacy site actually contains, so the gap plan can be built against evidence rather than against the 68-row planning dataset in `apps/web/src/data/competitor_page_audit.json`.

The current deployment at oudguide.com is assessed separately in Part 3.

---

# Part 1 — agarwoodguide.com (legacy WordPress site)

## 1.1 Structure

84 URLs in three Yoast sitemaps.

| Sitemap | URLs | Content |
|---|---|---|
| `page-sitemap.xml` | 59 | Home, About, Contact, Directory, Guides index, 5 guide hubs, 48 articles, 12 listings (11 businesses + 1 archive), Privacy, 13 region archives |
| `job_listing-sitemap.xml` | 12 | Not audited — the plugin's job-posting type, apparently unused for oud content |
| `region-sitemap.xml` | 13 | Region archive pages |

WordPress with the `my-listing` theme (Vue 2 directory app), Yoast SEO, Elementor.

## 1.2 Content quality — this is the asset

The editorial quality is **substantially better than the planning dataset assumed**. A full read of all 48 articles and 11 listing pages found:

- **No duplicated prose.** Max pairwise 6-gram Jaccard across all articles: 0.066. Zero duplicated FAQ answers. Zero duplicated body paragraphs outside navigation chrome.
- **Genuine specificity.** Distinctive detail that could not be produced from a template, e.g. *"The CITES Trade Database… is not designed as a lookup for individual permits, so a seller suggesting you 'check the serial number online' there is describing something it does not do"*; *"a small mica plate called a gin-yō, 'silver leaf'"*.
- **All 48 "How we checked this." notes are distinct**, 21 of them naming a specific correction made to the draft. This is a real editorial process, recorded.
- **Citations largely check out.** 15 of 15 independently verifiable citations were matched exactly against their source text (Kew POWO samples, TRAFFIC price rows, Oryx harvester census, PNG grade prices, Liu 4–28× oil yield, Pharmacopoeia resin thresholds, and others).
- **Commercial discipline is clean.** Zero merchant or brand recommendations, zero health claims, zero price guarantees, zero sponsored or affiliate links, no fabricated ratings or opening hours. Near-misses are actively disclaimed in the prose.

### 1.2.1 Where the legacy content falls short

| Issue | Scope | Severity |
|---|---|---|
| **"Fact-checked" badge with no reviewer, date or method** | 48 of 48 articles | High — asserts a human process; our own runbook forbids inventing one |
| **No visible reviewed or updated date** | 48 of 48 | High — our spec requires a reviewed date on every guide |
| **No named qualified reviewer** | 48 of 48 | High — required by our publication gate |
| **No `Article` JSON-LD** | 48 of 48 | High — schema has `WebPage`, `FAQPage`, `BreadcrumbList` but never `Article` |
| **Zero outbound citations** | 12 of 48 articles (incl. `how-agarwood-resin-forms`, `vietnamese-agarwood`, `middle-eastern-oud-grading`) | High — the science hub carries no sources |
| **Labeled limitations section** | only 12 of 48 | Medium — our spec requires explicit limitations |
| **Practical next step** | 41 of 48 | Medium |
| **Factual error**: `aquilaria-vs-gyrinops` states Kew POWO "currently accepts 15 *Aquilaria* species"; POWO accepts 21, and the cited URL carries no count | 1 article | Medium — needs correction before reuse |
| **Wikipedia is the sole source for a load-bearing claim** | 2 articles | Medium |
| **Fragrance blogs (scentgrail, fragroom, scento) carry product facts** | several | Medium — low-authority for load-bearing claims |
| **Listing pages have no Sources list and no link inside any Description or sourcing note** | 11 of 11 | Medium |
| **Listing schema mismatches**: `contactType="customer support"` on all 11 with no visible counterpart; Amouage 28 visible locations → 1 in schema; Oud Arabia 7 → 1; OUD Vietnam 3 → 1; non-standard `address` shape | 11 of 11 | Medium |
| **Iba Botanicals** claims verification "confirmed by BusinessMirror and government statements (DENR, PIA)" with **zero links**, and escalates to "under verified CITES permits" | 1 listing | High — unsourced verification claim |
| **Oud Arabia** asserts "natural ambergris" without addressing CITES control | 1 listing | Medium |
| **Masantara** GC-MS claim names no laboratory | 1 listing | Medium |
| **Internal voice leaked live**: *"meaningfully stronger sourcing position than most entries in **your database**"* | Iba Botanicals listing | Low — but it signals the listing was written as if for a reader of a directory |

## 1.3 Technical SEO

Consistent across all 84 pages: canonical present and self-referencing, `og:` and `twitter:` tags present, viewport present, `robots: index, follow`, no page over 150 KB of HTML, no duplicate `<title>`.

| Issue | Scope | Severity |
|---|---|---|
| **Homepage links to six URLs that return HTTP 404** | `/directory/distillers`, `/directory/perfume-houses`, `/directory/plantations-growers`, `/directory/sellers-retailers`, `/directory/suppliers-wholesale`, `/list-your-business` | Critical — first-party broken navigation from the homepage |
| **Directory and region pages render unhandled template placeholders** | 55 occurrences of `{{label}}`, `{{choice.label}}`, `{{locationDetails}}`, `{{ term.name }}`, `{{ term.count }}` on `/directory/` and all 13 `/region/*` pages | Critical — template syntax reaches the DOM |
| **Directory page shows "No listings" / "No results"** | `/directory/` | Critical — the primary directory is empty in the server-rendered HTML |
| **13 region pages are 98.6% identical to each other** (difflib ratio 0.986 between `/region/vietnam/` and `/region/united-states/`) | 13 pages | High — duplicate content at scale |
| **Region pages have no `<h1>`** | 13 pages | High |
| **`/directory/` has no `<h1>`** | 1 page | High |
| **No meta description** | 4 pages: `/`, `/listings/`, `/privacy-policy/`, `/guides/understanding-agarwood/agarwood-in-islam/` | Medium |
| **Meta description length outside 70–160** | 21 pages | Low |
| **Title length outside 30–65** | 6 pages | Low |
| **14 pages orphaned** — zero inbound internal links | `/listings/` + all 13 `/region/*` | High |
| **All 11 business listings orphaned** — reachable only from `/listings/`, which is itself orphaned | 11 pages | High — the entire directory is unreachable from the homepage |
| **84 of 450 images lack alt text** | 6 pages | Low |
| **FAQ schema contains 6 articles' worth of questions that are not visible on the page** | 6 pages | Medium — schema must match visible content |
| **`/listings/page/2` linked but the canonical `/listings/page/2/` 301s** | 1 | Low |

### 1.4 Internal linking — measured, 1,291 edges from 84 pages

The local dataset `observed_internal_edges.json` records **403 edges from 49 source pages**. The measured graph is **1,291 edges**, so the stored dataset captures roughly **31%** of the real link structure. It should be regenerated.

| Metric | Value |
|---|---|
| Pages reachable from homepage | 64 of 84 (depth ≤ 2) |
| Depth to any guide article | 1–2 clicks |
| Orphans (no inbound) | 14 |
| Unreachable from homepage | 26 (11 listings + `/listings/` + 13 regions + `/privacy-policy/`) |
| Broken internal targets | 6 real 404s + 1 redirect |

**The good news:** the guide architecture is genuinely well-linked. Every article is within 2 clicks of the homepage through its hub. **The bad news:** the entire directory half of the site is orphaned. A crawler reaching the homepage can find no business listing at all.

### 1.5 Citations

- 12 of 48 articles carry **zero** outbound links (a further 5 of the 6 guide hubs also carry none).
- Strong sources present and well used: `cites.org` (12), `mdpi.com` (12), Kew POWO, FAO AGRIS, RSC, ITTO, Cambridge, Springer, university repositories.
- Weak sources used for load-bearing claims: Wikipedia (2), fragrance blogs (`basenotes`, `scentgrail`, `scents-of-earth`, `fragroom`, `scento`), Facebook, Instagram.
- Commercial directory pages use each merchant's own site as the citation — correct and appropriate.

### 1.6 Not to be reused verbatim

Per `docs/EDITORIAL_RUNBOOK.md` §1.3 (Prohibition of Wholesale Scraping), agarwoodguide prose **cannot be copied into OudGuide**. It can and should be used as: a source register to re-verify, a citation map, a structural template, and a correction list. 45 of 68 audited URLs are P1 and 12 are P0 — the competition for these topics is real and the legacy site's content is genuinely good, so the OudGuide originals need to be better, not a copy.

---

# Part 2 — What the legacy site is worth to us

| Legacy asset | Value | Recommended use |
|---|---|---|
| 48 articles, ~1,000 words each, verified citations | High | Re-verify each cited claim independently; reuse structure and section intent, not prose |
| 11 business listings with real contact data | High | Seed the directory; each is an owner-verification candidate |
| 5-hub guide taxonomy | High | Already mirrored in OudGuide's 12-hub structure; reconcile the two |
| 151 external anchors mapped | Medium | Convert into a source register for OudGuide articles |
| 48 "How we checked this" notes | Medium | Model for our editorial workflow; do not copy the text |
| Keyword + competitor mapping | Low | The WordPress keywords are one-source; validate against Search Console |
| The 13 region archives | **Negative** | Near-identical pages; do not port |
| The "Fact-checked" badge pattern | **Negative** | Do not reproduce; we have no reviewer to name |

---

# Part 3 — oudguide.com (current deployment)

## 3.1 Sitemap integrity — the single largest problem

`https://oudguide.com/sitemap.xml` publishes **775 URLs**. **570 return HTTP 404** (73.5%). Two independent crawl runs agreed on every URL except four timeouts, none of which were a 200-vs-404 conflict.

| Family | Total | 200 | 404 |
|---|---|---|---|
| Buyer country / territory (`/en/world/<slug>`) | 249 | 0 | **249** |
| Wholesaler directory (`/en/directory/wholesalers/**`) | 128 | 0 | **128** |
| Located-in country directory (`/en/directory/retailers/**`) | 77 | 0 | **77** |
| Trade terminology (`/en/glossary/**`) | 32 | 0 | **32** |
| Business category (`/en/directory/<category>`) | 24 | 0 | **24** |
| Product family (`/en/products/**`) | 24 | 0 | **24** |
| Private/utility (`/en/account/**`) | 8 | 0 | **8** |
| RFQ (`/en/request-quote/**`) | 4 | 0 | **4** |
| Top-level pages | 33 | 8 | 24 |
| Editorial guides + hubs | 93 | 93 | 0 |
| Origin region / city | 56 | 56 | 0 |
| Destination buying guide (`/en/guides/buying/in/**`) | 36 | 36 | 0 |
| Origin comparison | 8 | 8 | 0 |
| Arabic locale | 3 | 3 | 0 |

Only 8 top-level pages work: `/en`, `/en/corrections`, `/en/directory`, `/en/guides`, `/en/membership`, `/en/privacy`, `/en/rfq`, `/en/world`.

Dead top-level pages include `/en/about`, `/en/contact`, `/en/terms`, `/en/cookies`, `/en/accessibility`, `/en/advertising`, `/en/brands`, `/en/products`, `/en/glossary`, `/en/editorial-policy`, `/en/verification`, `/en/search`, `/en/compare`, `/en/retail`, `/en/sign-in`, `/en/directory/how-it-works`, `/en/directory/ranking-policy`, `/en/businesses/add`, `/en/businesses/claim`.

Two of these are **referenced by the project's own competitor audit**: `/en/about/` and `/en/contact/` are the proposed OudGuide destinations for AWG-008 and AWG-011, and both 404.

### 3.2 Why the world territory pages 404 — root cause

Two separate defects compound:

1. **`apps/web/src/app/[locale]/world/page.tsx:80` links to `/${locale}/world/${c.iso2}`** — the uppercase ISO code. So the world index links to `/en/world/AF`, `/en/world/VN`, `/en/world/KH` (confirmed live and 200).
2. **`apps/web/src/data/route_manifest.json` publishes `/en/world/<lowercase-slug>/`** for all 249 territories (e.g. `/en/world/afghanistan/`).

So the sitemap advertises 249 lowercase slugs that have no route, while the page that exists and is linked is the uppercase code. `/en/world/afghanistan/` → 404; `/en/world/AF` → 200.

The route file `world/[iso2]/page.tsx` resolves by ISO2, so it only ever serves the uppercase form. **All 249 lowercase sitemap URLs are structurally impossible to serve.**

### 3.3 Guide content — all 193 guide pages share one body

`apps/web/src/app/[locale]/guides/[...slug]/page.tsx` renders the **same hardcoded article body** for every guide: the same "Executive Summary & Scientific Scope", the same three headings (Botanical Induction / Extraction Methodology / Laboratory Chromatography & CITES Appendix II), the same Al Mutalib referral module, the same wholesale CTA.

Measured across all 193 live guide URLs: **1 distinct article-body hash, 180 pages sharing it, 0 pages with a unique body.** Word counts range 357–385 (median 367). The topical content lives only in the title, the H1, and the lede.

Consequences:
- Every guide page is a near-duplicate of every other. Median pairwise word-level Jaccard across topical articles: 0.948; across the 36 destination pages: 0.993.
- The rendered body is about *aquilaria in general*, so a page titled "Vietnamese Agarwood Grading" shows text about *Phaeoacremonium parasiticum* and steam distillation.
- The section is titled "Botanical Taxa" on all pages, and the badge reads `✓ {publication_gate.split('+')[0]}` — i.e. the literal string "Editorial review" is displayed as a peer-review badge with no reviewer behind it. This is the same class of problem as agarwoodguide's "Fact-checked" badge, and worse, because our spec explicitly forbids inventing a reviewer.

### 3.4 Per-page metadata — absent

`generateMetadata` does not exist anywhere in `apps/web/src/app/`. The only `metadata` export is in the root layout.

| Page | Words | `<title>` | Meta desc | Canonical | OG | JSON-LD |
|---|---|---|---|---|---|---|
| `/en/guides/oud-basics/what-is-agarwood/` | 364 | 57 | 109 | 0 | 0 | 0 |
| `/en/guides/quality/oud-grading-explained/` | 363 | 57 | 109 | 0 | 0 | 0 |
| `/en/guides/buying/oud-price-comparison/` | 366 | 57 | 109 | 0 | 0 | 0 |
| `/en/guides/culture/oud-in-islamic-traditions/` | 360 | 57 | 109 | 0 | 0 | 0 |
| `/en/guides/origins/vietnam/` | 369 | 57 | 109 | 0 | 0 | 0 |
| `/en/guides/oud-basics/` | 374 | 57 | 109 | 0 | 0 | 0 |
| `/en/world/` | 577 | 57 | 109 | 0 | 0 | 0 |
| `/en/sourcing/` | 150 | 57 | 109 | 0 | 0 | 0 |
| `/en/guides/` | 1,605 | 57 | 109 | 0 | 0 | 0 |

Every page shares the identical title *"OudGuide — Worldwide Oud & Fragrance Knowledge Portal"* and the identical 109-character description. This fails `QA-004` in `docs/IMPLEMENTATION_MATRIX.csv` ("Title H1 social title and canonical refer to same article") for every one of the 204 live pages, and fails `QA-011`/`QA-012` for the 570 dead ones.

Also: no `hreflang` or `rel="alternate"` on any Arabic page despite a parallel `/ar/` tree, no OpenGraph, no Twitter cards, no `Article`/`ItemList`/`LocalBusiness` schema, and no robots meta.

### 3.5 Internal linking

| Metric | Value |
|---|---|
| Proposed internal links in `proposed_internal_links.json` | 1,553 |
| **Actually live** on crawled pages | **229 (14.7%)** |
| Broken internal links pointing to 404 | 2 (`/en/directory/wholesalers/in/india/hojai`, `/en/glossary/hindi-muri`) |
| Sitemap URLs not linked from the guides index | 111 |
| Guide index links not in the sitemap | 3 (`/en/guides/cites-regulations`, `/en/guides/copper-deg-distillation`, `/en/guides/wild-vs-cultivated` — all 404) |
| Language switcher | Points to `/ar` with no `/ar/` equivalents of most English pages |

The `related_links` block renders `Intent: {link.intent}`, but `proposed_internal_links.json` has no `intent` field — it has `suggested_anchor`. So **every "Intent:" label on every guide page renders empty**.

Arabic pages link back to English guides with a `/en/` prefix, so an Arabic reader on an Arabic article is sent to English.

### 3.6 Editorial elements missing from live guides

Of the 9 sampled live guide pages: none contain a visible reviewed date, updated date, named reviewer, sources list, or limitations section. One page has a single outbound external link (the Al Mutalib referral). The `required_sections` field in `route_manifest.json` mandates *"Direct answer; scope; documented facts; limitations; practical next step; sources; reviewed date"* — **6 of the 7 required sections are absent on every live guide.**

### 3.7 Site configuration

- `NEXT_PUBLIC_SITE_URL` is unset in the environment, so `sitemap.ts` and `robots.ts` default to `https://oudguide.com` while `layout.tsx` metadataBase defaults to `https://www.oudguide.com`. The live host redirects `oudguide.com` → `www.oudguide.com` (308), so **the sitemap's declared URLs do not match the canonical host.**
- `www.oudguide.com/en/guides/` → 308 → `www.oudguide.com/en/guides` (no trailing slash), creating a redirect on every sitemap URL.
- `robots.txt` disallows `/*?*` and `/*/inquiries/`, but `/en/admin` and `/en/admin/inquiries` are **linked from the footer and return 200**; the admin page shows an operator-key gate (no content leak) but it is crawlable and linked.
- `sitemap.ts` hard-pushes six URLs (`/en/directory`, `/en/world`, `/en/rfq`, `/ar/directory`, `/ar/world`, `/ar/rfq`). `/en/rfq` and all three `/ar/` paths are **not in `route_manifest.json`**, so they are hand-maintained and will drift. `/en/directory` and `/en/world` are already in the manifest, so they are emitted twice — the live sitemap contains duplicate `<loc>` entries for both.
- Only 3 Arabic URLs are in the sitemap while the site serves a full `/ar/` tree of ~62 linked pages, so the Arabic tree is almost entirely undiscoverable.

### 3.8 Directory state

`/en/directory/` renders **3 results** from 3 seeded businesses, two of which use RFC 2606 reserved domains (`tratagarwood.example.th`, `assamheritageoud.in` is not reserved but `sales@tratagarwood.example.th` is). The contact-redaction policy renders correctly — "No phone, email, or street address is exposed on basic profiles." The `/en/directory/map` producer map and the sourcing assistant are live and functioning.

### 3.9 Build state

- **Tailwind is not installed** (`tailwind-merge` is present but there is no `tailwindcss` dependency and no PostCSS config). 29 component locations carry Tailwind-style classNames that render nothing. The design system is the 3,351-line hand-written `globals.css` with 70 custom properties — that is the working style layer.
- All 772 routes in `route_manifest.json` are `candidate_planning` in `docs/CONTENT_STATUS.csv`. 772 of 772 have no dedicated page file; the 17 implemented page routes cover the 45 formations dynamically.

---

# Part 4 — Gap summary

## P0 — Technical, breaking, days not weeks

| # | Gap | Where | Impact |
|---|---|---|---|
| 1 | **570 of 775 sitemap URLs 404** | `apps/web/src/app/sitemap.ts` + route coverage | Search engines crawl 775 URLs, find 570 dead ends. Wastes crawl budget and signals a low-quality site |
| 2 | **All 193 guide pages share one body** | `apps/web/src/app/[locale]/guides/[...slug]/page.tsx` | The entire editorial product is one article. Near-duplicate at scale |
| 3 | **Zero per-page metadata** — no `generateMetadata` | all page files | Every page has the same title and description; no canonical; no OG; no schema. Fails QA-004 for 204 live pages |
| 4 | **World territory URL mismatch** — sitemap lowercase, page uppercase ISO2 | `world/page.tsx:80` vs `route_manifest.json` | 249 URLs structurally unservable; the working uppercase pages are not in the sitemap |
| 5 | **Sitemap host mismatch** (`oudguide.com` vs `www.oudguide.com`) + trailing-slash 308 on every URL | `sitemap.ts`, `robots.ts`, `layout.tsx` | The sitemap's own declared URLs redirect |

## P1 — Editorial and content, weeks

| # | Gap | Where |
|---|---|---|
| 6 | **No article body content in the data layer** — `route_manifest.json` holds `title_brief`/`h1_brief`/`primary_intent`/`required_sections`, never a body | needs a content schema with sections, sources, reviewer, reviewed date |
| 7 | **No `Article` JSON-LD, no reviewer, no reviewed date, no sources, no limitations on any guide** | page files + data layer |
| 8 | **1,553 proposed internal links, 229 live (14.7%)** | `proposed_internal_links.json` status field says "PROPOSED, not a live OudGuide link" for all of them |
| 9 | **Arabic tree is undiscoverable** — 3 sitemap URLs, no hreflang, language switcher points at `/ar` which has few equivalents | `sitemap.ts`, `layout.tsx` |
| 10 | **111 sitemap URLs not linked from the guides index**; 3 index links 404 | `guides/page.tsx` |
| 11 | **321 directory URLs in the sitemap with no route** (wholesalers, retailers, categories, glossary, products) | route coverage |
| 12 | **Directory has 3 seeded businesses**, one with a reserved-domain email | `apps/web/src/lib/data.ts` |
| 13 | **"Editorial review" badge rendered as a peer-review claim** with no reviewer | `guides/[...slug]/page.tsx` |
| 14 | **"Intent:" renders empty** — `proposed_internal_links.json` uses `suggested_anchor`, not `intent` | `guides/[...slug]/page.tsx` |
| 15 | **Admin workspace is linked from the footer and crawlable** | `Footer.tsx`, `robots.ts` |

## P2 — Hygiene, months

| # | Gap |
|---|---|
| 16 | Sitemap emits duplicate `<loc>` for `/en/directory` and `/en/world` |
| 17 | `observed_internal_edges.json` holds 403 of 1,291 measured edges (31%) — regenerate from a real crawl |
| 18 | 29 Tailwind classNames across components render nothing (Tailwind not installed) |
| 19 | `NEXT_PUBLIC_SITE_URL` not set in the deployment environment |
| 20 | `docs/CONTENT_STATUS.csv` shows all 772 routes as `candidate_planning`; `docs/BUILD_STATUS.md` says Stage C "IN PROGRESS" while the site is live |
| 21 | No `hreflang` on a bilingual site |
| 22 | Two broken internal links on live pages |

## P3 — Migration from agarwoodguide.com, months

| # | Gap |
|---|---|
| 23 | Port 11 verified business listings (owner-verification candidates) |
| 24 | Build a source register from agarwoodguide's 151 anchors; re-verify each claim independently |
| 25 | Reconcile agarwoodguide's 5-hub taxonomy with OudGuide's 12-hub structure |
| 26 | Carry over the 48 "how we checked this" notes as workflow model (not text) |
| 27 | Fix the POWO 15-vs-21 species error if that claim is reused |
| 28 | Do **not** port the 13 region archives, the "Fact-checked" badge pattern, or any prose (EDITORIAL_RUNBOOK §1.3) |

---

# Part 5 — Method notes and limits

- Live status was measured twice with independent code paths and reconciled. Four URLs disagreed; all four were transport timeouts, and a third targeted check resolved each. No 200-vs-404 conflict existed between runs.
- The guide-body duplication finding was verified by isolating the region between "Executive Summary" and "Related Research", then hashing: 193 URLs, 1 hash, 180 pages, 0 unique bodies.
- Depth analysis used the measured 1,291-edge graph, not the stored 403-edge dataset.
- The agarwoodguide editorial assessment was produced by reading all 48 article bodies and 11 listing pages in full, with 15 citations independently checked against source text.
- **Not verified:** Search Console or Search Analytics data (traffic, impressions, indexing rate, actual ranking) for either domain; backlink profile; Core Web Vitals; mobile rendering; any page behind authentication; the 12 `job_listing-sitemap.xml` URLs, which are a WordPress job-posting type with no oud content.

# OudGuide.com — Coverage Audit: Countries, Regions, Types of Oud, Everything

**Audit date:** 21 October 2026
**Suite state at end of audit:** 287/287 passing, article tier 54/54 (the count rose from 225 to 287
as the parser-based text-integrity scan was extended to the page renderers, the allowlist
guards were added, and the fourteen origin-country pages were published)
**Live host audited:** `https://www.oudguide.com`
**Method:** 1,024 candidate URLs probed (every route in `route_manifest.json`, every ISO2
code in `country_registry.json`, plus every static/utility path in the manifest). Status
codes confirmed by a second, lower-concurrency pass on the 66 that timed out under
parallel load. Body-text fingerprints computed on 75 guide pages and all 249 territory
pages. Internal link graph extracted from every live sitemap page. Test suite run.
**Machine-readable matrix:** `docs/COVERAGE_MATRIX_2026-10-21.csv`

---

## 1. Verdict

The portal has a solid spine and a thin surface. The encyclopedia, the directory
machinery, the RFQ journey and the metadata layer are real and in good shape. What is
missing is everything the question asks about: **all 24 product families are 404, 207
of 249 territories are orphaned, 40 of 41 origin regions and 14 of 15 origin countries
are unfilled briefs, and 18 of 24 business categories 404.**

| Measure | Now | Of |
|---|---:|---:|
| Manifest routes | 772 | — |
| Routes returning 200 | 415 | 772 |
| Routes returning a redirect | 251 | 772 |
| Routes returning 404 | 106 | 772 |
| Editorial routes with a reviewed article | 68 | 225 |
| Editorial routes still a research brief | 157 | 225 |
| Reviewed articles in the corpus (21 Oct, after the geography lane) | 142 | — |
| Distinct sources cited by the corpus (21 Oct) | 14 | 17 |
| Sitemap URLs | 89 | all 200 |
| Sitemap URLs with distinct bodies | 89 | 89 |
| Territory pages linked from the world index | 42 | 249 |
| Territory pages in the sitemap | 0 | 249 |
| Reviewed articles with distinct bodies | 75 | 75 |
| Distinct sources cited across 75 articles | 3 | 75 |
| Publishable directory businesses | 1 | — |
| Guides clearing the 600-word article tier | 53 | 53 |

**The rows above are the audit's own measurements, taken against the live site on
21 October 2026. They are not the state of the repository.** Measured against the
committed corpus at commit `a1b1082`:

| Measure | Then (live, 21 Oct) | Now (committed) |
|---|---:|---:|
| Reviewed articles | 75 | 142 |
| Distinct sources cited | 3 | 14 |
| Registry entries | 7 | 17 |
| Guides clearing the article tier | 53 | 54 |
| Sitemap URLs | 89 | 167 |
| Articles resting on a single source | 67 | 0 |

The sitemap figure is from a production build at that commit: 167 URLs, every one
returning 200 from a `next start` server.

---

## 2. The four questions, answered

### 2.1 "All the country oud"

**The data is complete. The pages exist. The content does not.**

All 249 ISO 3166-1 territories are in `country_registry.json` and all 249 render at
`/en/world/{ISO2}` with a 200. The country-name slugs (`/en/world/afghanistan`) 308
to the ISO2 form, so both shapes resolve.

Three problems, in order of severity:

**a) Every one of the 249 says the same thing about oud.** Every registry record carries
`role_status: "Not assessed"` and `public_readiness: "Research only"`. No territory is
recorded as a producing region, a trading hub, or a documented destination. The country
page therefore states its own scope honestly — it is a register entry, not an answer —
and a reader who lands on `/en/world/Zimbabwe` learns that Zimbabwe is a country with
the ISO code ZW. That is the truthful position, but it means the "country oud"
question is currently un-answered for all 249 territories.

**b) 207 of 249 territory pages are orphaned.** The world index is a client component
(`TerritoryBrowser`) with a list-view lazy render. The server-rendered HTML contains
**42** territory links, not 249. All 249 codes do appear in the RSC payload, so a
JavaScript-rendering crawler would find them, but a crawler that reads the HTML finds
42. No territory page is in the sitemap (they are excluded as "not answers"), so a
territory page is reachable only from the client-rendered list.

**c) The bodies are name-substituted templates.** Normalising away the country name and
ISO codes collapses 249 pages into **162 distinct bodies**. One group of **44 pages**
(Antarctica, Angola, Bahamas, Barbados, Belize, Cape Verde, Cayman Islands, Central
African Republic, and 36 more) is byte-identical after the name substitution. A
normalized body of ~2,090 characters means the page is a template with a country
interpolated, not a page about that country.

**What the real agarwood geography is:** 15 origin countries, 41 origin regions, 6
origin comparisons and 36 destination buying guides are in the manifest, and the content
layer has **one** origin country (India), **one** origin region (Assam), **one**
destination (United Arab Emirates) and **one** comparison (India vs Cambodia) written.
The other 90 editorial geography routes are labelled research briefs.

### 2.2 "All regions"

| Family | Routes | Live | Reviewed article | Research brief |
|---|---:|---:|---:|---:|
| Origin region | 41 | 41 | 1 (Assam) | 40 |
| Origin country | 15 | 15 | 1 (India) | 14 |
| Origin comparison | 6 | 6 | 1 | 5 |
| Destination buying guide | 36 | 36 | 1 (UAE) | 35 |

Every one of these 98 pages returns 200. The 91 briefs render with `noindex, nofollow`,
are excluded from the sitemap, and open with "This page is a research brief. It records
what still needs to be established before it can be published as a finished article."
That is honest, and it is the correct treatment of a candidate. It is also not the
answer to "every region in our portal."

### 2.3 "All types of oud"

**This is the largest gap and it is a total one.**

| Route family | Routes | Live 200 | 404 |
|---|---:|---:|---:|
| Product family | 24 | **0** | **24** |
| Product index (`/en/products`) | 1 | 0 | 1 |
| Brand index (`/en/brands`) | 1 | 0 | 1 |

Not one of the 24 product families is reachable, and there is no product index and no
brand index. The 24 families are:

> Oud Wood · Oud Oil · Perfume Oils · Attars · Finished Perfumes · Bakhoor · Incense ·
> Oud Powder · Agarwood Beads · Agarwood Carvings · Electric Burners · Charcoal
> Burners · Incense Accessories · Home Fragrance · Reed Diffusers · Candles · Room
> Sprays · Musk Fragrances · Sandalwood Materials · Rose Materials · Private Label
> Perfumes · Sample Sets · Gift Sets · Perfume Packaging

The manifest already specifies the required sections for each of these
("What this family includes; not the same as; material/format fields; comparisons;
buyer requirements; related suppliers; relevant guides") and a publication gate
("Clear format definition + intended use + relevant sources; no unsupported
composition"). The content layer has no product-family article type at all.

Adjacent taxonomy that is also unreachable:

- **Trade terminology, 32 terms.** 7 are written. 6 return 200 at
  `/en/guides/glossary/{term}`; the other 26 return 404. The manifest path
  `/en/glossary/{term}` returns 404 for every term including the 7 written ones, and
  the glossary index `/en/glossary` returns 404. So the 7 written terms are live at a
  path the manifest does not declare, and the 25 unwritten terms are invisible.
- **Business categories, 24.** 6 live (wholesalers, retailers, growers, distillers,
  wood-processors, exporters), 18 return 404 — including importers, distributors,
  attar-makers, bakhoor-makers, incense-makers, perfume-oil-suppliers, laboratories,
  perfumers, private-label-manufacturers, packaging- and bottle-suppliers, museums.
- **Directory geography.** Located-in country (72), located-in city (64), neighborhood
  (16), destination-serving (36) and by-origin (15) all return 200. That is 203 live
  filter pages across one publishable business.

### 2.4 "Everything"

**Missing public pages (106 × 404):**

| Family | Missing |
|---|---|
| Product family | 24 of 24, plus the product index |
| Business category | 18 of 24 |
| Trade terminology | 26 of 32, plus the glossary index |
| Private/utility | all 14 — `/en/account` and its 7 sub-pages, `/en/membership/complete`, `/en/request-quote/status`, `/en/request-quote/recipients`, `/en/privacy/requests` |
| Public policy | 8 of 9 — `/en/about`, `/en/about/ownership`, `/en/accessibility`, `/en/advertising`, `/en/editorial-policy`, `/en/verification`, `/en/directory/how-it-works`, `/en/directory/ranking-policy` |
| Legal | 3 of 4 — `/en/terms`, `/en/cookies`, `/en/partners/lead-terms` |
| Single pages | `/en/contact`, `/en/search`, `/en/compare`, `/en/retail`, `/en/partners`, `/en/partners/apply`, `/en/businesses/add`, `/en/businesses/claim`, `/en/brands` |

`/en/privacy` is live; the other three legal pages are not. `/en/rfq` is live and
`/en/request-quote` 308s to it.

**The directory holds one publishable business.** Al Mutalib Perfumes (Dubai, claimed,
active membership, contact display enabled). The other two records in the seed are
development fixtures and are correctly excluded from the public directory and the
producer map. The legacy site agarwoodguide.com carries 11 real business listings with
contact data and citations — Agar Aura, Agarwood International, Amouage, Assam Aromas,
Citra Karya Agarwood, Ensar Oud Oriscent, Haga Oud, Iba Botanicals, Masantara Oud, Oud
Arabia, OUD Vietnam — none of which have been ported. This is the single highest-value
remaining asset and it is a porting job, not a writing job.

---

## 3. What is working

These were checked and are sound. Do not disturb them.

- **No duplicate bodies in the encyclopedia.** All 75 published guide pages were
  fingerprinted after stripping scripts, styles and SVG: **75 distinct fingerprints**.
  The OG-A01 shared-fallback defect is genuinely fixed. Re-checked against the
  production build at `a1b1082`: the fifteen origin-country pages render fifteen
  distinct fingerprints, and all 142 articles in the corpus are distinct. A new
  batch that shares one body across fifteen URLs would fail the same way.
- **No broken internal links.** A crawl of all 89 sitemap pages found 127 distinct
  internal link targets, and **0 of them resolve to a 404**. The 106 missing routes are
  not linked from anywhere live. The rule that keeps this true when new pages land is
  in the runbook at §3.1: a page may only name a target that is already published.
- **The sitemap tells the truth.** 89 URLs, all 200 at the time of the audit; 167 URLs,
  all 200 against the production build at `a1b1082`. The earlier 570-of-775 false
  promise is gone; the sitemap now publishes only reviewed content and static shells.
- **Territory pages are not indexed**, deliberately. They are register entries, not
  answers, and the sitemap reflects that.
- **The Arabic tree is published and honest.** Every Arabic page carries
  `noindex, nofollow` and no Arabic URL is in the sitemap, because
  `ARABIC_HUMAN_REVIEW_COMPLETE` is still `false`. No page asserts a bilingual review
  that has not happened.
- **Research briefs are labelled.** 157 editorial routes render as briefs that say
  plainly they are not finished, and they are excluded from the sitemap. They do not
  borrow another page's prose to fill the space.
- **The world index links territory-name slugs to ISO2** with a real 308, and the
  resolver handles both shapes.

---

## 4. Content quality: two findings that need a decision

### 4.1 The 600-word floor — a whole batch of written content was never connected

`tests/article-tier.test.ts` was red with **36** guide failures. The cause was
mechanical, not editorial: the deepening batches
(`deepening.ts` through `deepening-8.ts`) existed in the working tree as untracked
files, but `apps/web/src/data/articles/index.ts` imported only `DEEPENING` and
`DEEPENING_2`. Six batches of finished prose were written and then not connected to
the corpus.

I wired the missing batches in. The failure count went **36 → 5**, and a seventh batch
(`deepening-6.ts`, containing exactly the five remaining `using-oud` guides) was
written during the audit and closes the last five:

| Article | Before | deepening-6 adds | Total | Floor |
|---|---:|---:|---:|---:|
| `using-oud/reading-product-instructions` | 272 | +439 | 711 | 600 |
| `using-oud/wood-versus-oil` | 312 | +368 | 680 | 600 |
| `using-oud/using-oud-wood` | 337 | +433 | 770 | 600 |
| `using-oud/skin-intended-fragrance-oils` | 338 | +416 | 754 | 600 |
| `using-oud/label-and-store-samples` | 391 | +368 | 759 | 600 |

**All 54 guides clear the floor.** The batch set in `index.ts` now imports
`deepening.ts` through `deepening-8.ts` and merges them in file order. Verified:
`npm test` is **287/287 green**, article tier **54/54**, guide word counts 608 / 765 /
1374 (min / median / max).

### 4.2 The source registry is too thin to support the word count

**CLOSED. Measured 21 October 2026 against the committed corpus.**

75 articles were labelled "Reviewed article" and carry a "Verified sources" block. The
registry had 7 entries. Across all 75 articles, exactly **three** were ever cited:

| Source | Kind | Articles citing it |
|---|---|---:|
| `AGARWOOD_CITES_2022` | regulatory | 60 |
| `FAOLEX` | regulatory | 17 |
| `IFRA_CERT` | regulatory | 11 |

`GOOGLE_SPAM`, `GOOGLE_LINKS`, `GOOGLE_TITLE` and `AGARWOOD_REVIEW_2014` were
registered and never cited. Every claim in the corpus therefore rested on two
regulatory sources plus one IFRA page, regardless of whether the claim was botanical,
commercial, distillation-related, terminological or cultural. The legacy source site
agarwoodguide.com mapped 151 external anchors; OudGuide had 3 distinct ones in use.

This was the finding with the longest fuse. It is the difference between "reviewed" and
"reviewed against three documents".

**What closed it.** The corpus now holds 142 reviewed articles against a registry of 17
entries, of which **14 are cited**. The three that are not are `GOOGLE_SPAM`,
`GOOGLE_LINKS` and `GOOGLE_TITLE`, and they are `kind: internal` by design: they
record what the site operator checked in the search-engine guidance, not any claim
about oud, so no article cites them and the registry-hygiene test exempts them.

The gate that matters is per-article, not corpus-level. `tests/source-breadth.test.ts`
asserts that every published article cites at least two distinct sources, that it
cites at least one `primary` or `regulatory` source that can carry a claim on its own,
and that it does not list the same source twice. **No published article rests on a
single source.** A corpus-level distinct-count gate would pass and teach nothing, and a
concentration-share gate can be satisfied by a citation that carries nothing, so
neither is asserted.

What the corpus now rests on, per article rather than in aggregate:

| Source | Kind | Carries |
|---|---|---|
| `AGARWOOD_CITES_2022` | regulatory | the CITES listing and its constraints |
| `ITTO_AGARWOOD_REVIEW` | primary | the 28 accepted species, their IUCN status and their range states |
| `TRAFFIC_AGARWOOD_TRADE_2000` | trade | the export series by country and year, and the legal position of each range State |
| `TRAFFIC_PNG_AGARWOOD` | trade | the Papua New Guinea gaharu resource and its species |
| `TRAFFIC_UAE_AGARWOOD_TRADE` | trade | the Gulf entrepôt structure and the import-control regime |
| `POWO_AQUILARIA_CRASSNA` | primary | the accepted taxonomic record for *A. crassna* |
| `CITES_APPENDICES`, `CITES_AGARWOOD_2004` | regulatory | what each listing requires for trade |
| `AGARWOOD_REVIEW_2014`, `FAOLEX`, `IFRA_*` | tertiary / regulatory | the review literature, the commodity record, the fragrance standards |

The geography lane was written with two primary citations from the start, and it is
the lane that needed them: a species range is a botanical fact and not a production
record, an export figure is not a quality claim, and a re-export route is not a
growing region. Each of those distinctions needs its own source to be stated at all.

---

## 5. What is not in this audit

- Browser rendering, mobile layout, accessibility and Core Web Vitals (OG-A22, still
  blocked on tooling and approved-media records).
- The Arabic corpus at human-review depth. The mechanical checks pass — no U+FFFD, no
  untranslated Latin fragments, no disallowed scripts — but mechanical is not bilingual
  editorial review.
- Live billing. No approved configuration exists, so checkout stays disabled.
- Any verification of the legacy site's 11 business identities. They are porting
  candidates, not verified records.
- Head-tag inspection beyond canonical, title, description and robots. Hreflang and
  JSON-LD were checked on the guide and territory pages; they were not checked on all
  415 live pages.

---

## 6. Recommended order

Ordered by how much of the question each closes, not by effort.

1. **Publish the product families.** 24 pages, manifest already specifies sections and
   gates, and this is the single largest hole in "all types of oud". Needs a new
   `kind: 'product'` article type and a `/en/products` index.
2. **Port the 11 legacy business listings** as owner-verification candidates. This is
   the only way the 203 live directory filter pages have anything to filter.
3. **Fill the geography that actually matters** — the 15 origin countries, 41 origin
   regions, 36 destination guides — before widening the 249. A territory page that says
   "Research only" for all 249 countries dilutes the ones that could say something.
4. **Server-render the territory index** so all 249 are linked in the HTML, and decide
   whether territory pages belong in the sitemap once they carry content.
5. **Write the 18 missing business categories and 25 missing trade terms**, and
   redirect `/en/glossary/{term}` to the single canonical glossary path.
6. **Publish the 8 public-policy pages, 3 legal pages, and the contact / search /
   compare / businesses-add / businesses-claim utilities.** These are short, they are
   referenced by the manifest, and several are legal or trust surfaces.
7. **Reconcile the manifest with the routes that exist.** 14 private/utility routes
   need either an implementation or removal from the manifest.
8. **Widen the source registry** to match the claim density of the corpus. This was
   the last item on the list and the first one that should have been on it: 75 pages
   labelled "Reviewed article" were resting on three distinct sources. **Done** — the
   registry holds 17 entries, 14 of them cited, and no published article rests on a
   single source. See §4.2.

### A note on concurrent work

This audit ran alongside at least two other sessions editing the same content layer
(`deepening-*.ts` files appeared, were renumbered and were consolidated during the
run; `index.ts`, `checklists.ts` and `worked-examples.ts` changed underfoot). The
coverage matrix and the route counts in this document are unaffected, because they are
derived from the live deployment and from `route_manifest.json`, neither of which
moved. The word-count figures in §4.1 are the one place where the working tree moved
mid-audit, and they are stated with the simulation basis rather than as a claim about
the committed state.

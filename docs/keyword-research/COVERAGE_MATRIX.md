# OudGuide — Keyword Coverage Matrix (merged EN + AR universes)

> Compiled 2026-10-26 from `english-universe.md` (40+ EN SERP probes) and
> `arabic-gulf-universe.md` (20 AR SERP probes), cross-referenced against the live
> corpus: 242 reviewed articles (12 hubs, 24 product families, 34 glossary terms,
> 14 origin countries, 40 regions, 45 destination guides, 6 comparisons, 10 gap pages),
> the 17-source registry, and the directory (230 declared filter routes; **1 live
> supplier record** — Al Mutalib — plus 2 demo records excluded from public listing).
>
> Status key: ✅ we have it · ◐ partial · ✗ missing · 🎯 the build target
>
> The user requirement this plan answers: *for every searched oud-related question,
> retail or wholesale, the site must have the answer, a source, and a vendor list.*

---

## A. What we ALREADY cover (no build needed — just verify + link)

| Keyword cluster | Live page(s) | Vendor list? |
|---|---|---|
| Grades / Gulf labels (VIP, Seufi, sinking) | `quality/*` — 14 pages incl. grade-label dataset + dataset audit | n/a (data asset) |
| Real vs fake (wood + oil + attar) | `quality/fraud-identification`, `quality/assessment-and-testing-limits`, `quality/lab-report-reading`, `quality/attar-evaluation`, `quality/freshness-and-moisture` | ◐ links to directory; no per-supplier "publishes GC-MS" proof points |
| Oud oil vs attar vs dehn al oud | `quality/oud-oil-vs-attar` + glossary `dehn al oud` | ✅ distiller records |
| CITES by market (US/UAE/EU) | `trade/cites-by-market` + `trade/*` | n/a |
| Sourcing / B2B vetting / RFQ | `sourcing/*` (9 pages) + RFQ widget + inquiry flow | ✅ directory (1 record) |
| Species / which makes oud | `oud-basics/which-species` + 14 country pages + 40 regions | ✅ country pages link suppliers |
| 45 destination buying guides | `buying/in/*` (36+ incl. US, UAE, SA, Gulf, Asia) | ✅ each page has a supplier block |
| Bakhoor product family | `products/bakhoor` (formats: charcoal/electric burners, powder, beads) | ✅ register panel |
| Price framework | `quality/price-framework` | n/a (methodology page) |
| Region comparisons | `comparisons/*` (5 pairs) | — |

**Conclusion:** the KNOWLEDGE half of "answer + source + vendor list" is largely built.
The two structural gaps are (1) the vendor list itself, and (2) retail-consumer answer
pages for the product-format confusions.

---

## B. STRUCTURAL GAP #1 — the vendor list ("who can I buy from")

**The problem, stated honestly:** 230 directory filter routes are declared
(`wholesalers/in/*`, `by-origin/*`, `serving/*`) but only **1 live supplier record**
exists (Al Mutalib — claimed, verified member). Two more are demo records excluded from
the public directory. So every "find me a supplier" query today lands on an **empty or
near-empty filter page**, which:
- cannot rank for commercial intent (Google sees no substantive suppliers), and
- reads to a buyer as a broken site.

**Every product-family page already has the register panel** (added 2026-10-26, commit
b15fd1c): who is recorded for the material, roles, verified MOQ/samples, delivery markets,
and an honest "no supplier prices published — quotes come via RFQ" line, with a correct
empty state for families with no suppliers. This panel is the right UX; it just has
one real supplier to show.

**Options (decision needed from owner):**
1. **Register real suppliers (recommended, phased).** Each product-family × origin filter
   gets at least one *owner-verified* listing. Minimum viable: one distiller (Assam),
   one plantation operator (Vietnam/Thailand), one attar house (Kannauj or Gulf),
   one bakhoor maker, one bead maker. ~5–10 records would make every major filter page
   non-empty. Verified fields stay owner-attested (privacy rule: no contact fields on
   basic/expired/suppressed listings — see `operator-gate` memory).
2. **Keep the directory thin but honest.** Every empty filter page already shows the
   empty state + "start an RFQ" CTA. The RFQ price-capture we just built is what makes
   the empty state an *asset* instead of a hole: the first supplier to register gets to
   see the captured demand. No content work needed; the pages just don't rank for
   "supplier" terms until records exist.

Either way, **no fabricated suppliers.** The 2 demo records must stay out of public
listing (the `excludeDemo` flag on the directory page does this).

---

## C. BUILD QUEUE — pages we DON'T have yet

Priority = (SERP weakness × B2B value) ÷ (cost). All follow the house rules: ≥600 words
counted body, ≥2 registry sources with ≥1 primary/regulatory, dated price bands, honest
limitations, bilingual `*Ar` fields with corpus transliterations, no fabricated data.

### Tier 1 — highest leverage, weakest SERP, fits the existing template

1. **Gulf price-baseline dataset** — `quality/gulf-price-baseline` 🎯 (AR cluster 9, EN 3)
   Dated per-region per-kg/per-tola band table for Kan'budi, Hindi/Assam, Lāwī, Ṣumatra,
   Kalimatān, Murūki (with the murūki = market-name disambiguation). Bands cite the
   registry (ITTO/TRAFFIC) + our own grade-label dataset; every band carries its date and
   "documented range, not a point" framing. This is the site's signature B2B asset and
   the #1 Arabic commercial keyword (سعر عود). Links out to 36 destination guides + regions.
   **Status: no page exists; `quality/price-framework` is methodology only.**

2. **Bakhoor three-forms explainer** — `products/bakhoor-forms` (or extend `products/bakhoor`) 🎯
   (AR cluster 6, EN 10): masqī / mūshiq / mumshak + tībār / daq' / ma'mūl. No canonical
   Arabic page exists anywhere; the English bakhoor/dukhoon/mabsoos/maamoul naming is
   unresolved even among vendors. One page owns the taxonomy with ingredient + usage +
   price bands, vendor list = bakhoor makers (currently 0 records → register one).

3. **Wholesale-sourcing decision hub: "which oud product do I actually want"** 🎯
   (EN flag c, "which product" decision guide; AR cluster 10): the conflation page —
   wood chips to burn / oil to wear / beads to pray with / attar to dab / perfume to
   spray / bakhoor to season a home. High-converting hub that doesn't exist anywhere.
   Links to all 24 product families + register panels.

4. **CITES import step-by-step, per market (expand existing)** ◐→🎯
   (AR cluster 11, EN 7): `trade/cites-by-market` exists for US/UAE/EU. Add KSA (ZATCA
   1 kg personal limit, SFDA registration), EG, MA, plus personal-effects table
   (1 kg chips / 24 ml oil / 2 bead sets, Res. 13.7 Rev.17) + EU Annex B (import
   permit ≠ export permit, Reg 338/97) + India plantation quota (2024–27). One page,
   expandable; every market block dated and sourced to CITES/TSP/TRAFFIC.

5. **Kashmiri / Murūki disambiguation** 🎯 (EN 4, AR 3 flag c)
   Kashmiri = Mughal perfume-accord name, not a grower region; Murūki = Gulf market
   name, NOT Morocco (fixes the "Moroccan forests" SERP error). Two short glossary
   entries + a comparison page block. High value: corrects a factual error the whole
   SERP repeats.

### Tier 2 — solid opportunities, moderate effort

6. **Beads real-vs-fake test** 🎯 (EN 13, AR 8): resin veins at bead edges, weight,
   warm-rub test; CITES 2-bead-sets note. Extends the fraud-identification chain.
7. **Musk types table (white/black/ṭahāra/gazāl)** 🎯 (EN 15, AR 7): source, CITES
   status (wild musk = Appendix I — never sell genuine deer musk), price. One page.
8. **Wild vs plantation, with the yield data** ◐→🎯 (EN 9, AR 15): inoculation timeline
   (5–8 yr infect, 1–3 harvest, 10–25 to quality resin), 0.1–0.5% yield, ~70%
   wild-dependent (Mongabay 2025), India's 139M plants + CITES quota. Extends
   `sourcing/wild-cultivated`.
9. **Bakhoor burning protocol + mabkhara types** 🎯 (EN 11, AR 13): charcoal vs electric,
   timing windows, safety, price bands.
10. **Gaharu (Indonesian market) page** 🎯 (AR 16): separate-language quick win —
    gaharu vs oud, grades, dated IDR price bands, Kalimantan/Sumatra supplier map.
    1 page captures a whole market.
11. **Storage & care** 🎯 (EN 16): 15–25 °C / RH 40–60 %, paulownia vs plastic, decades
    of resin stability. Short, easy, feeds retention.
12. **Benefits/claims, citations-first** 🎯 (EN 17): named PubMed/PMC anxiolytic &
    sedation studies vs folklore; "what the science does and does not show." Our
    citation model is the exact differentiator.

### Tier 3 — seasonal / longer tail

13. Gifting-by-occasion guide (Ramadan / National Day / wedding / corporate) 🎯 (AR 14)
14. Gouled/attar longevity table for perfumers ("best oud perfume" natural-vs-synthetic
    angle) 🎯 (EN 14)
15. Gifting × occasions × corporate (AR 14)

### Arabic-side notes (the whole AR tree is noindexed until `ARABIC_HUMAN_REVIEW_COMPLETE` flips)
- Every Tier-1/2 page above is authored bilingual from day one (en + ar fields, 600-word
  floor per language where counted). The 11 Arabic data files must be human-reviewed
  before indexation — that gate is the last structural blocker for Arabic keywords
  (عود بالجملة, سعر عود, تصريح سايتس, دهن العود الأصلي, شراء العود أونلاين).
- Corpus transliteration rule holds: species/org names in Arabic blurbs use
  جيرينوبس / أكيلاريا / مراجعة المنظمة الدولية — never raw Latin.

---

## D. The five "must own" keywords (combined top priority)

From both agents' flag-(a) lists, de-duplicated:

1. **عود بالجملة / "oud wholesale supplier"** — the directory + RFQ is the only neutral
   play; blocked on Tier-1 #B supplier registration.
2. **سعر عود / "assam oud price per kg"** — Tier-1 #1 price-baseline dataset. Highest
   B2B value, every current SERP is a merchant price list.
3. **تصريح سايتس / "import agarwood CITES"** — Tier-1 #4. No Arabic step-by-step exists;
   gates every B2B deal.
4. **دهن العود الأصلي / "how to tell if oud is real"** — already 90% built
   (fraud + GC-MS + freshness + attar eval). The win is *publishing* the chain as one
   navigable trust page + a "suppliers who publish GC-MS" proof filter.
5. **الفرق بين أنواع العود / "cambodian vs indian oud"** — comparisons exist for 5 pairs;
   Tier-1 #3 decision hub + #5 Kashmiri/Murūki disambiguation extend it to the full
   region taxonomy.

---

## E. What I need from the owner to start

- **Tier-1 decision:** which of #1–5 to build first (my recommendation: #1 price-baseline
  dataset, then #4 CITES expansion, then #5 disambiguations, then #2 bakhoor forms,
  then #3 decision hub).
- **Supplier register:** who are the 5–10 real, verifiable suppliers to register
  (names + cities + roles; we publish contact only under the owner-verified states the
  directory gate already enforces).
- **Arabic review:** confirm the 11-file bilingual review can start so `ARABIC_HUMAN_
  REVIEW_COMPLETE` can flip and the AR tree can be indexed.

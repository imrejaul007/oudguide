# Oud Market Competitive Landscape & OudGuide Action Plan — 2026-10-26

Scope: full-market sweep across five research lanes (retail, wholesale/farming, knowledge/SEO,
communities, AI-engine visibility) merged with the local repo inventory and today's
`SEO_Audit_2026-10-26.md`. Goal: make OudGuide the single stop for all oud things — retail,
wholesale, knowledge, sourcing, discussion — and be the source AI engines cite.

Evidence rules applied to all lanes: URLs only from search results or verified fetches;
uncertain items marked (unverified); agency-reported metrics treated as directional.

---

## 1. Executive summary — the five strategic truths

1. **Nobody owns the price data.** "Oud price per gram" (EN) and "اسعار العود" (AR) are both
   unowned SERPs. Two wholesale sites (AgarwoodTown, Oudgo) publish informal price lists;
   nobody publishes a named, dated, downloadable, k-anonymized **grade × origin × format price
   index**. OudGuide already captures PII-free price/density points from RFQs (in-memory today).
   **Graduating that data to a published quarterly index is the single highest-leverage move** —
   it is the "Experian credit score" of the oud vertical: a named, numeric, repeatable asset
   that RAG pipelines extract into answers and that earned media (≈84% of AI citations come from
   earned media) can be built around.
2. **Authenticity is the #1 recurring question in every community** (Basenotes, r/fragrance,
   r/TheOudCollective, r/Incense, Ouddict, r/DesiFragranceAddicts, and the long tail of Gulf
   vendor blogs). Today it exists only as scattered vendor folklore in both languages. A
   named, standardized **authenticity protocol** (burn test, water/density test, GC-MS
   indicators, CITES/documents checklist, visual resin-grain check) in EN + AR, linked from
   every grade/origin/price page, is the content moat that OudGuide's existing grade-label
   dataset and supplier-verification flow are already built to back.
3. **The knowledge field ships no structured data.** Verified: top vendor sites (justoud,
   almutalib, ajmal, ensar, indicana) run Shopify/WordPress article templates with no JSON-LD.
   OudGuide already emits Article/BreadcrumbList/DefinedTerm/ItemList/WebSite schema — the fix
   is to (a) actually wire up the dead `organizationSchema`, and (b) add the missing
   Product/Offer, FAQPage, HowTo, and Dataset types. Every new page is an instant
   differentiation.
4. **The bilingual gap is proven, not assumed.** Ouddict maintains a public thread translating
   Arabic oud content (regional profiles, blending ratios, aging methods) because that knowledge
   is trapped in Arabic social media and old manuscripts. Arabic long-tail is diffused across
   dozens of unlinked Gulf vendor blogs; m-arabi.com is the deepest Arabic attempt but is an
   information-pager, not a linked library. A cross-linked EN↔AR knowledge library with
   hreflang is a structural moat for sovereign Arabic AI (HUMAIN/ALLaM targets 400M+ Arabic
   speakers) and for classic Arabic SERPs alike.
5. **"How to buy oud" is a broken SERP** — musical-instrument shops own it. OudGuide can
   cheaply own the disambiguation (oud resin/fragrance vs. oud lute) and capture high-intent
   fragrance traffic that every fragrance competitor under-serves.

---

## 2. Market map (condensed; full detail in lane reports)

### 2.1 Product taxonomy sold across the market

- **Raw wood**: logs/sawn blocks; chips/chunks/muri/jura/salla/dugga cuts; sinking vs
  non-sinking; powder/dust (Cambodian dust, "4-in-1" mixes); tala (display pieces);
  aged/water-soaked sunken wood; origin lines (Cambodian, Malayan/Kalimantan, Thai, Hindi/NE
  Indian, Burmese, Philippine, Vietnamese, Assam wild).
- **Oil**: pure distilled/attar (deg-bhapka), macerated/dehn oud, oud+sandal co-distilled,
  perfume sprays, roll-ons, "40% ma'attar" style blends, oud-inspired (non-agarwood) oils,
  hydrosols, B2B absolutes/extracts.
- **Incense/burnables**: bakhoor cakes/chips, muattar, bakhoor coins (new format), sticks,
  coils, powder; frankincense as parallel category.
- **Perfume goods**: attars, EDPs, "inspired by" lines, discovery/sampler sets, bespoke tiers
  (Ensar: Oriscent/Semi-Bespoke/Bespoke/Monuments/Tourbillon).
- **Personal items**: kokka tasbih prayer beads, bracelets, oud-infused sejadah.
- **Accessories**: mabkhara (electric, charcoal, glass, USB-portable), charcoal, torches/tongs,
  diffusers/humidifiers.
- **Adjacent**: oud air fresheners, sanitizers, gift boxes, plants/seedlings (farmer class).
- **B2B**: bulk logs/chips, oil extracts, per-destination wholesale catalogs (Al Mutalib model).

Price-band spread: entry chips ~$8–40/10g → super-grade US retail $397–800+ → wholesale SKUs
AED 20,000–50,000 → wild sinking/collector $10k–30k+/kg (outliers to $100k/kg, unverified).

### 2.2 Retail players (32 mapped)

Top in detail: Arabian Oud, Ajmal, Al Haramain, Al Mutalib, Jalali Agarwood, Ensar Oud,
Indica Oud (indicanaoud.com), Oudh Madina, Deraah, Rasasi. One-line: Taif Al Emarat, Oud
Royal, Swiss Arabian, Alkhalis, Oud Arabia, Almajed, Pintanna, Jain Perfumers, Puja
Perfumery, Miya Store, Vanadurgi, Green Agro, Masantara, Parfumane, HAGA/Hoang Giang, Amir
Oud, Agarwood Oud Supply, Lotus Garden, Kingdom of Oud, Pure Oud UK, Jamr Al Oud, Aluxury,
Intense Oud, Cii Stores, Etsy/eBay long tail.

Content programs worth imitating:
- **Al Mutalib** — per-destination-country retail + wholesale catalogs (102 retail city
  slugs, 7 destination countries) with multi-currency switcher. The strongest programmatic
  SEO in the market; OudGuide's territory-label work should *beat* this, not copy it.
- **Indica Oud** — authenticity moat: purity guide, fake-chip spotting, GC-MS explainer.
- **Ensar Oud** — myth-busting editorial ("Thick Oud ≠ Good Oud", "Agarwood: A Reality
  Check", "What is Nu-Oud?") + Trustpilot integration.
- **Ajmal** — geo-localized buying guides ("…in Kuwait") over per-country storefronts.
- **Al Haramain** — "Scan & Check" product verification + authenticity security code.

### 2.3 Wholesale, B2B and production

- **Marketplaces**: Alibaba/TradeKey/Indiamart/TradeIndia/ExportersIndia/TradeWheel/
  GlobalSources/Go4WB all list agarwood with thin listings — no standardized grades, no
  traceability, no inline CITES documentation. That absence *is* OudGuide's directory/RFQ
  angle. China is a trading/processing hub, not an origin.
- **Named suppliers by origin**: India (Vanadurgi ~2.5M trees/10,176 farmers, Lifa, Assam
  Aromas, Syed Al Oud, Tayyab, AWK Research, Baksha Groomtech, Puja); China (AgarwoodTown
  Maoming, Jiangxi Hualong, Guangzhou Flower Flavours); Malaysia (Forest Node, BBB 60k trees,
  Asia Plantation Capital, Plantations International, Malyagar); Indonesia (Masantara,
  Agarwood Nusantara, Indomart); Vietnam (Binh Nghia 21k trees, Oud.vn, HAGA, Nhang Thien);
  Cambodia (Andy Oud, Cambo Oud, Tay Heng); Laos (Agarwood International, Sommay); Brunei
  (near-zero web presence — real gap: Angkasa Oud, Oud Kingdom placeholder domain); Gulf
  buying side (Al Sultan, Al Mutalib, Falwah); Philippines (Crown Agarwood Group —
  vertically integrated with blockchain traceability + CITES permits).
- **Production/farming**: inoculation firms (Vanadurgi, AWK, APC, Forest Node, BBB, Binh
  Nghia, Crown, Agarwood Eco Capital); industry bodies named (Assam/Vietnam/Malaysian
  agarwood associations) but publishing no public price or grade standards — gap.
- **Regulatory**: CITES Appendix II covers all Aquilaria + Gyrinops; every commercial export
  needs a CITES permit + non-detriment finding + legal-origin certificate. India DGFT:
  ~25,000 kg chips/powder + 1,500 kg oil annual cultivated export quota. Vietnam export
  value $162M (2015) → $434M (2019).
- **Grading vocabulary buyers must know**: density tiers (floating 0.36–0.64, semi-sinking
  0.6–0.99, sinking >1.0 g/cm³, 30–50%+ resin); Assam cut terms Muri/Jura/Zura/Salla/Dugga
  (dominant in Dubai souqs; "kalam/kina" are NOT Assam terms — call that out); resin tiers
  Super/2S/3S/Grade A-C, Dhum/Boya sapwood.
- **Published price anchors (2026)**: cultivated floating chips $30–400/kg; Assam commercial
  ₹10k–95k/kg; semi-sinking $3–6k/kg; kynam $400–3,500/kg; AgarwoodTown Oct-2026 index:
  board-head slices $240 → sinking chips $740 → kynam pieces $890 → high-grade board-head
  $4,430/kg; CO₂ kynam oil $1,500/kg, traditional kynam oil $7,000, guo-xiang oil
  $10–12k/kg; standard bakhoor $6,000/kg; wild sinking $10k–30k+/kg.
- **Authentication methods**: burn/heat test (slow bubble, pale smoke, evolving scent vs.
  fast flare, acrid black smoke, oily residue); water-test caveat (floating "sinker" =
  lead-injected scam — density alone proves nothing); X-ray/micro-CT for metal inserts;
  histology (state of the art, PLOS ONE Dec 2024): **resinous included phloem** is the
  marker of genuine agarwood; documents: CITES permit + legal-origin certificate + GC-MS
  oil report.

### 2.4 Knowledge/SERP landscape

- **SERP owners** (full table in lane 3 report): "how to buy oud" is owned by instrument
  shops (disambiguation opportunity); "agarwood grades" is fragmented (justoud, masantara,
  grandawood, SNI 7631:2018 standard, ResearchGate); "oud price per gram" is unowned
  (oudwoodvietnam, kannaujattar price pages, no normalized dataset); "how to store oud" is
  thin (kyarazen, bmvfragrances aging/angle barely owned); "what is oud/agarwood" is
  Wikipedia; **Arabic: ما هو العود / اسعار العود / طريقة اختبار العود are all unowned** —
  definition SERP = Wikipedia + small vendor blogs + YouTube shorts; no Arabic knowledge hub.
- **Domain catalog**: parfumcentral.com and ajmal.com are the only frequent, dated English
  publishers; m-arabi.com is the deepest Arabic attempt; Wikipedia + academic
  (Mohamed & Lee 2016, SNI 7631:2018, CITES/ITTO/IUCN/UNODC reports, PMC studies) carry
  institutional weight; Basenotes + Fragrantica own the collector-discussion SERP;
  YouTube (Feel Oud, Oudimentary, Mystic Oud Elixirs, Ensar) owns how-to video.
- **Collective weaknesses**: no schema.org anywhere in the vendor field; no one interlinks
  origin → grade → price → authenticity → storage → usage as a topic web; no one cleanly
  disambiguates resin vs. instrument.

### 2.5 Communities (where the questions live)

| Community | Intent | What it gives OudGuide |
|---|---|---|
| Basenotes Oudh/Agarwood subforum | High — collector | 598-page oil thread; "Petro-Nuk-oud" adulteration lexicon; price benchmarks; GC-MS as the trusted check |
| r/TheOudCollective + Discord | High — structured | Curated vendor lists; "where do I begin / affordable start / US sources" onboarding gap; why-real-oil-is-rare education threads |
| Ouddict (forum + Discord + FB) | High — artisan | Grade/vendor threads; **public Arabic-translation thread = proof of the bilingual gap** |
| r/DesiFragranceAddicts | High — mass attar spend | Scam complaints, mislabeling, sample-set distrust — OudGuide's corrections/verification story |
| r/Incense | Moderate — wood/chip beginners | $15–30/10g entry price; 160–180°C heating method; Gomi "five tastes"; paper test |
| r/fragrance, r/Perfumes | Mixed — curiosity | "what does real oud actually smell like"; synthetic-vs-real confusion; scatole folklore |
| r/dubai | High (victim side) | Tourist markup, watered-down oils — "did I get scammed" content |
| FB groups (Ajmal, Oudh Lovers, Agarwood Group, trade groups) | High in trade groups | B2B wholesale tone; bakhoor-making; vendor self-promo |
| IG/TikTok educators (Ensar "Ouducation", ABD Majid, Ajmal, Oudvietnam, The Oud Artisan) | High | Brands publish education to drive sales; OudGuide competes in this lane with neutral content |

Top pain points (ranked): authenticity/"is it real", scams & seller trust, price opacity,
oil-vs-wood confusion, grade confusion (Hindi vs Cambodian vs Thai vs Bornean vs Kyara/Kynam,
sinking-grade marketing), onboarding ("where do I start"), usage & storage, sourcing
legality (CITES, wild 2–10% infection rate, 20–50 yr maturation).

**Question bank**: 30 quoted/paraphrased buyer questions with thread links live in the lane
4 report — that is the seed of the FAQ/answer-page backlog.

### 2.6 AI-platform mechanics (2026, verified vs folklore)

Verified per-platform:
- **ChatGPT Search**: Bing + OpenAI's own index + publisher feeds; `OAI-SearchBot` opt-out
  removes you from ChatGPT answers (OpenAI docs).
- **Perplexity**: own index, ~10 sources retrieved, median 3–4 cited; `PerplexityBot`.
- **Google AI Overviews**: no separate AI index — standard Googlebot + organic index;
  passage-level retrieval; `Google-Extended` is training-only, not Overview eligibility.
- **Claude**: Brave Search API backend + first-party MCP; no opt-out surface.
- **HUMAIN Chat (Saudi, ALLaM)**: targets 400M+ Arabic speakers; retrieval internals
  undocumented — clean native-Arabic RTL content is the only known differentiator.

Key data points (corroborated, secondary):
- AI citation ≠ organic rank: only 38% of AI Overview citations come from top-10 organic
  (down from 76% a year earlier); 29.8% of cited domains are absent from page one.
- **Ghost citations**: 62% of AI-cited domains are linked but the brand is never named in the
  answer text → a *named* dataset ("OudGuide Price Index") is worth more than an anonymous one.
- Brand mentions correlate ~3× more strongly with AI visibility than backlinks (r ≈ 0.71 vs
  0.218, Ahrefs 75k-brand study).
- ≈84% of AI citations come from earned media (journalism, encyclopaedias, third-party
  research); ≈0.3% from paid.
- ~55% of AI Overview snippets come from the top 30% of the cited page → answer-first
  40–60-word blocks under H1s.
- Crossover is low (12% of assistant-cited URLs appear in Google top-10) → win each engine's
  own source pools, don't assume one wins all.

Folklore (do not plan around): **`llms.txt`** — Google explicitly says it doesn't use it;
server-log audits show single-digit fetches vs thousands of robots.txt fetches. Ship it only as
<5KB housekeeping, not as a lever. "Schema types win AI answers" — schema wins rich-result
CTR, not AI citations per se; but RAG crawlers do parse JSON-LD for clean Q&A/step blocks.

**robots.txt**: OudGuide's current file allows all (verified in repo) — i.e. GPTBot,
OAI-SearchBot, PerplexityBot, ClaudeBot, Google-Extended are all permitted. This is correct
for the citation goal; keep it, don't add disallows.

### 2.7 OudGuide current state (repo inventory, 2026-10-26)

- **Content**: 166 distinct article titles across 26 data files (basics, quality, sourcing,
  fragrance, glossary, origins, culture, 8 deepening waves); grade-label dataset ("The
  OudGuide grade-label dataset", "What makes this OudGuide's own data").
- **Surfaces**: /glossary (+[slug]), /products (+[slug]), /directory (+map, how-it-works,
  ranking-policy), /sourcing, /rfq (67 fields), /for-businesses, /partners, /membership,
  /corrections, /verification, /shortlist, /world/[iso2] (249 territories), /inquiries, admin.
- **Schema emitted** (`lib/jsonld.ts`): Article, BreadcrumbList, DefinedTerm, ItemList,
  WebPage, WebSite, Organization, SearchAction. Missing: **Product/Offer, FAQPage, HowTo,
  Dataset, ItemReview**. `organizationSchema` exists but is **dead code** (verified in
  today's SEO audit — no caller passes `business:`).
- **Research assets**: 68-URL competitor page audit, 45 keyword patterns (all volumes
  unmeasured), Al Mutalib market taxonomy, 1,553 proposed internal links, 249 territory
  pages, RFQ market-data capture (in-memory, k-anonymized, PII-free).
- **Verified defects** (today's SEO audit, must not be forgotten when building new pages):
  directory profile pages ship the generic 404 title + no canonical/OG/JSON-LD; root-page
  hreflang bug (`/en` emits `ar → /ar`); 36 destination guides + 40/41 origin regions +
  4/5 comparisons + 13 origin-country pages are link orphans; 203/249 territory pages have
  an empty related block; E-E-A-T is person-absent (constant `REVIEWER = "OudGuide editorial
  review"`; blocked on user-supplied reviewer name + role).
- **No `llms.txt`** (fine — low priority per evidence).

---

## 3. Gap analysis: what we must have that nobody else does

| # | Asset | Who has it today | OudGuide state | Δ |
|---|---|---|---|---|
| 1 | Named, dated, downloadable price index (grade × origin × format; EN + AR) | Informal only: AgarwoodTown, Oudgo, oudwoodvietnam | In-memory RFQ capture, unpublished | **Build & publish** — #1 moat |
| 2 | Standardized authenticity protocol (named tests + thresholds, EN + AR) | Scattered vendor folklore; Indica GC-MS explainer; no standard battery | Grade-label dataset + testing-limit articles exist | **Build** |
| 3 | Bilingual cross-linked knowledge library (EN↔AR, hreflang) | Nobody — Ouddict's translation thread proves demand | Articles exist; Arabic gated by human review | **Build** (review pipeline) |
| 4 | Neutral cross-origin supplier directory w/ verification | B2B portals are listing-only, unverified | /directory + /rfq + /verification + /corrections already exist | **Amplify** (index the offline players: Brunei, Cambodian/Laotian/Assam portal-only suppliers) |
| 5 | Compliance layer (CITES, DGFT quotas, permits) surfaced on sourcing flow | B2B portals never surface it; CITES/UNODC/TRAFFIC PDFs carry authority | CITES articles exist | **Build** |
| 6 | Oud-vs-instrument disambiguation on-ramp | Nobody | Glossary terms exist | **Cheap win** |
| 7 | Onboarding set ("where do I begin / affordable start / US buyers") | r/TheOudCollective threads only | Not present | **Build** |
| 8 | Aging/storage/investment-value guide | bmvfragrances + kyarazen only | Not present | **Build** |
| 9 | Oil blending / attar recipe library (mukhallat ratios, maturation) | Take One Thing Off, sedralkhaleej, oudimentary; recipes trapped in Arabic content | Product families exist | **Build** |
| 10 | Grading-system reconciliation (alphabetic + sink + resin-% + SNI 7631:2018 + Japanese rikkoku-gomi) | One system at a time (justoud/masantara/grandawood/IEEE) | Grade-label dataset exists | **Build** |
| 11 | Structured data (Product/Offer/FAQPage/HowTo/Dataset) | Nobody in the field has it | Article/Breadcrumb/DefinedTerm only; org schema dead | **Build** |
| 12 | Named person E-E-A-T surface (reviewer name + role + photo) | Ajmal/Al Sultan editorial | Blocked on user-supplied input | **Unblock** |
| 13 | Quarterly "State of the Oud Market" report + digital PR | Nobody in oud | RFQ aggregates exist | **Build cadence** |

---

## 4. Action plan, ordered by expected impact

### Tier 0 — fix verified defects first (cheap, multiplies everything below)
- Wire `organizationSchema` into the about page (today's audit: dead code).
- Fix root-page hreflang bug; ensure all new pages inherit correct sibling pairs.
- Kill the 4 link-orphan clusters (36 destination guides, 40 origin regions, 4 comparisons,
  13 origin-country pages) via hub children/related arrays — one route missed here 404s while
  looking published.
- Directory profile pages: real titles, canonicals, OG, JSON-LD.
- 203 empty related-block territory pages: fix the `publishedLabel()` resolution bug.

### Tier 1 — the moat (original, named, data assets)
1. **OudGuide Price Index** — persist the RFQ market-data capture (currently in-memory) into a
   durable store; publish quarterly aggregates as an HTML table + `Dataset` JSON-LD +
   downloadable CSV/JSON with a stable URL and "as of" date; EN + AR; normalize to
   g/تولة/أوقية/kg. Name it. Every page that carries a stat says "per the OudGuide Price
   Index" in visible text (anti-ghost-citation).
2. **OudGuide Authenticity Protocol** — named 5-step test battery (burn/heat, density-float,
   visual resin-grain, GC-MS indicators, documents checklist), each step `HowTo`-schema'd
   with named thresholds, answer-first 40–60 word lead, one data point per 150–200 words,
   EN + AR. Cite the PLOS ONE included-phloem study + CITES/UNODC for E-E-A-T.
3. **Origin entity pages** — species × country × region, each with direct definitional
   answer, scent/price band, `DefinedTerm`/`Place` schema, cross-linked into the topic web
   (origin → grade → price → authenticity → storage → blending → usage).

### Tier 2 — structure & crawlability
4. Schema suite: `Product`+`Offer` on product/directory pages, `FAQPage` on guides/glossary
   (visible Q&A blocks, not just markup), keep `DefinedTerm` on glossary, `Dataset` on the
   price index.
5. `/llms.txt` — optional, <5KB housekeeping only (evidence: not a lever).
6. robots.txt stays as-is (already allows every AI retrieval + training crawler).
7. Fix the keyword-pattern volumes ("NOT MEASURED" × 45) with one pass of measured demand
   per cluster, so the content backlog is sized by evidence not guess.

### Tier 3 — Arabic library + content waves (from the question bank)
8. Review-gate the 166 articles into real Arabic: definition cluster (ما هو العود,
   الفرق بين العود والعود الموسيقي), price cluster (اسعار العود), authenticity cluster
   (طريقة اختبار العود), usage/storage, blending (خلط العود والموسك والورد الطائفي).
9. Onboarding wave: "where do I begin / affordable start / buyers in [country]".
10. Aging/investment wave + grading-reconciliation wave + blending-recipe wave.

### Tier 4 — off-site web weight (what actually moves training-time citations)
11. **Wikipedia edit**: EN + AR agarwood/oud articles have no current price ranges — add a
    well-sourced, conservative price-range section citing the OudGuide Price Index. Highest-
    leverage single off-page move (Wikipedia is a top-cited domain class).
12. Quarterly "State of the Oud Market" release: price trends by grade/origin + density
    distributions, pitched to Arabian Business, Zawya, Khaleej Times, Gulf News + 2–3 Western
    outlets; LinkedIn posts from a named person.
13. Researcher/press JSON export endpoint (the data behind the index, not the marketing page).
14. Presence in the top-cited domain classes: Basenotes oud thread participation,
    r/TheOudCollective/r/Incense helpful-answer campaigns (first-person, with OudGuide links
    where the rules allow).

### Ongoing
15. Weekly prompt tracking across ChatGPT/Perplexity/Gemini/AI Overviews for ~20 canonical
    oud questions (EN + AR): track **domain-cited** vs **brand-named** separately
    (ghost-citation split), report monthly.
16. Monthly "Market Note" (200–400 words, 1–2 price movements) for freshness.
17. Supplier registry growth: index the offline/portal-only players (Brunei, Tay Heng, Sommay,
    Cambo Oud, Assam Aromas, Tayyab, Malyagar, Nhang Thien, Binh Nghia) — verified claims,
    honest scope statements per the editorial runbook.

### Explicitly NOT doing (evidence-based)
- Relying on `llms.txt` for citations (Google/OpenAI/Perplexity don't document using it;
  log audits show negligible fetches) — housekeeping only.
- Disallowing any AI crawler in robots.txt (would forfeit the citation goal).
- Adding `Article` schema to product pages or `Video`/`Event` schema to text pages
  (no 2026 rich-result payoff, surface area for errors).
- Copying Al Mutalib's per-country programmatic catalogs 1:1 — OudGuide's territory pages
  must carry real agarwood-relevant content (today: 249 ISO registry records with empty
  related blocks) instead of destination pages that only promise delivery.

---

## 5. Open items blocked on the owner

1. **Reviewer name + role (+ ideally a photo)** for the E-E-A-T surface — blocking item #12
   and the top-of-page trust signal on every buying guide.
2. **Brand naming**: pick the index name ("OudGuide Price Index" vs "Oud Market Index") and
   decide on the composite-score concept (OudGrade 0–100, "Experian credit score of oud") —
   this is a trademark-adjacent decision, so it needs a human call before building.
3. **Persistence layer** for the RFQ market data (in-memory today) — which store fits the
   Vercel deploy shape.
4. **Arabic review capacity**: the 166-article corpus is gated on human Arabic review —
   confirm who/what the pipeline is and the weekly review cadence, since the whole Arabic
   library and the ALLaM/HUMAIN play depend on it.

## 6. Source register (key links)

Retail lane: ajmal, ensaroud, aluxury, indicanaoud, jalaliagarwood, alharamain, almutalib,
oudhmadina (522 — unverified), sa.arabianoud (search).
Wholesale lane: tradekey/indiamart/tradeindia/exportersindia/tradewheel/globalsources/
go4worldbusiness; indianagarwood, agarwoodindia (Lifa), awkresearch, bakshagrotech,
agarwoodtown (public price index), 8flower, forestagarwood, bbb2u, eco-business (APC),
plantationsinternational, masantaraoud, agarwoodnusantara, indomart, agarwood.vn,
oud.vn, hgagarwood, andyoudh, agarwoodinternational, brunei-oud.company,
al-sultan-oud, crownagarwoodgroup, agarwoodecocapital; CITES Tech Series 51, TRAFFIC
Traf-072, DGFT, FRIM/MyBIS, ITTO, Mongabay 2025, CIFOR WP271, MDPI×2, density-gradation
paper, PLOS ONE phloem marker,Yahoo $100k/kg (search).
Knowledge lane: parfumcentral, ajmal blogs, justoud, m-arabi, symphonyoud/palaceoudsa/
zamiloud/oudbarzan/jiblhoud AR vendor blogs, wikipedia EN/AR, ResearchGate (Mohamed & Lee
2016), IEEE SNI 7631:2018, UNM Forest Pathology, PMC 9975615, oudwoodvietnam,
kannaujattar, agarwood.com, fragrancelord, bmvfragrances, kyarazen.
Communities lane: basenotes Oudh subforum + agarwood-oil thread, r/TheOudCollective +
threads, ouddict forums + translation thread + Ouddict Exchange, r/fragrance threads,
r/DesiFragranceAddicts threads, r/Incense threads, r/dubai scam thread, FB groups (Ajmal,
Oudh Lovers, Agarwood Group, bakhoor group), Ensar Ouducation, ABD Majid, TikTok
#agarwood, ningen, sedralkhaleej, oudvietnam video, agarwood.ae.
AI-mechanics lanes: platform.openai.com/docs/bots, developers.openai.com/api/docs/bots,
docs.perplexity.ai, perplexity.ai hub FAQ, developers.google.com/search/docs/fundamentals/
ai-features, brave.com/search/api + MCP blog, humain.com launch page, cxl.com AI Overview
study, frase.io engine-citation study, ahrefs AI-Overview-top-10 study, rankinllm
(brand-mention r-scores), muckrack.com earned-media study, everything-pr.com, ezy.ai +
longato llms.txt log studies, ezY/Longato, searchenginejournal hreflang + FAQ/robots,
getfancy.ai finance-vertical study, reportertoday, otterly.ai 1M-citation report,
iPullRank SQRG/YMYL, arxiv GEO paper (KDD 2024), similarweb GEO-moat case, concurate +
maximuslabs + optimizesteve agency case studies (self-reported — directional only),
scentido.com/llms.txt, quietcom Claus Porto audit, semrush AIO + ghost-citation studies,
washu AIO audit.

Full lane reports (with per-entry verification marks) are in the task transcripts for
af0943a9bfa1c443f, a5201dcf8eb3c52b8, a471afb160ae6684f, a3521bf95033bb85c,
a5faeeaccf3804f80.

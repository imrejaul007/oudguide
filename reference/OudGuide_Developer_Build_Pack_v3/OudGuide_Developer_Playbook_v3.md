# OudGuide.com
## Worldwide portal — developer playbook

**Version 3.0 · 19 October 2026**

A reference audit, information architecture, publishing system, directory specification and permission-controlled supplier-matching model.

**Latest wholesale model:** acquisition stays OudGuide-branded. Al Mutalib or other approved suppliers may fulfil or purchase an introduction. The buyer approves the actual recipients before contact release.

**Delivery status:** research and implementation specification. No website has been deployed. Route candidates are not completed articles or verified seller records.

| Included register | Scope |
|---|---:|
| Reference URLs audited | 68, including all 48 linked guides |
| Recorded reference links | 403 observed edges; partial graph |
| Named English route candidates | 772 |
| Proposed OudGuide internal links | 1,553 |
| Page templates | 45 |
| Country / territory seeds | 249 |
| Conditional requirement fields | 67 possible fields |
| App acceptance requirements | 110; not executed against a portal |
| Executed helper tests | 18 passed |

The workbook and CSV/JSON registers are the detailed inventories. This playbook explains how the records become the product.

---

# 1. Product charter and reference audit

**Project:** OudGuide.com. **Specification version:** 3.0. **Research date:** 19 October 2026. **Status:** developer handoff and researched planning records, not a deployed website or completed seller census.

## 1.1 What is being built

OudGuide is a worldwide reference library, business directory and supplier-introduction service for oud wood, oud oils, perfume oils, attars, finished perfumes and related fragrance products and services. It is not merely a second storefront. Visitors should be able to answer a question, understand a product term, assess the limits of a claim and discover relevant businesses without first submitting a sales inquiry.

The operating model has four income/referral paths: paid profile contact visibility; clearly labelled retail referrals to ae.almutalib.com; OudGuide-branded supplier matching that may introduce Al Mutalib or other approved suppliers; and separately priced, consent-based supplier introductions. Payment for visibility or opportunities never purchases an authenticity verdict, a favourable editorial conclusion or buyer permission.

The latest wholesale decision supersedes the v2 headline routing. The public form is headed **Find suppliers for your wholesale requirement**, not **Request a quote from Al Mutalib**. OudGuide initially receives the request. Actual supplier identities are presented before buyer details are released. Al Mutalib can be one of those suppliers; its representatives identify their company when contacting a buyer. A neutral acquisition brand is compatible with this workflow. Concealing the operator, the affiliation or the eventual data recipient is not part of the implementation.

The two Al Mutalib sites are commercial references and intended image sources. They are not independent scientific references for claims about all oud, nor evidence that all third-party brands or photographs on those sites belong to the operator. Use contextual commercial links, not an automatic keyword-linking network.

## 1.2 Requirements, recommendations and unresolved decisions

**User requirements:** worldwide geographic scope; individual retailer and wholesaler profiles; discovery by seller location, material origin and buyer destination; non-subscribed contacts hidden; annual business membership at AED100/month equivalent; educational origin-country and region trees; use owned-site images; commerce referrals; neutral wholesale intake; ability to fulfil or monetize qualified leads.

**Recommended implementation defaults:** basic profiles retain useful public non-contact facts; name-only records stay unindexed; membership billed AED1,200 upfront annually pending billing approval; maximum three named supplier introductions per request unless the buyer explicitly changes it; initially manual matching rather than opaque automatic allocation; no public star ratings in the first release; English first with Arabic readiness and reviewed translated releases; no instant publication of owner claims.

**Not approved or established:** legal operator name, final privacy wording, worldwide legal coverage, payment provider, lead prices, sales commission terms, refund policy, billing cadence, approved portal logo, development stack versions, hosting/data regions, current complete catalog, image-rights inventory, real supplier counts, measured keyword volumes, budgets and staffing. These are explicit launch gates, not blanks a developer should guess.

## 1.3 Audit coverage and evidence limits

The audit register covers **68 discoverable/reference URLs**: 48 guide articles, five guide hubs, five core pages, six discovered business profiles and four linked destinations that returned 404. The extracted-link register contains **403 recorded edges from 49 source pages**. It includes structural links and selected contextual/related-business links; it is not a complete raw-HTML edge extraction. Exact anchor text was not comprehensively harvested, and the role label is not an exact anchor transcript.

All 48 guides linked from the reference's guides index are represented individually in `competitor_page_audit.csv`. This does not establish that these are every URL on the domain. The JavaScript directory may expose additional businesses, pagination states or endpoints not found here. Robots rules, every sitemap, complete rendered DOM, raw head tags, redirects at every edge, Core Web Vitals, server logs, Search Console, link authority, traffic and rankings were not fully verified. Do not describe this audit as a comprehensive technical crawl or use subset graph counts as full-site metrics.

The reference's own index displays five hubs containing 11, 9, 9, 10 and 9 linked guides, respectively. Source: https://agarwoodguide.com/guides/ . These counts describe the visible index at retrieval, not hidden inventory.

## 1.4 Reference architecture: retain the useful patterns

The five-hub learning sequence is coherent: understanding the material; origins and varieties; quality and authenticity; practical use; purchasing. Hubs distinguish starter reading from additional guides. Articles use an introductory answer, section navigation, comparisons, supporting sources and a next-step pathway. The directory has business-role and geography controls, while the inspected profiles separate descriptions, sourcing notes, public contact fields, locations and related businesses.

Retain the learning sequence, local table of contents, source notes, contextual related reading and structured profile attributes. Expand it for OudGuide into 12 editorial hubs and a richer directory model. Do not reproduce proprietary articles, page designs, photographs, logos, database descriptions or brand endorsements. The competitor is an architectural reference and a discovery lead, not a source license.

## 1.5 Findings and implementation response

| Finding | Observed evidence and limit | OudGuide response |
|---|---|---|
| Directory content is fragile in extracted retrieval | Retrieved directory shows `{{label}}`, `{{locationDetails}}`, repeated filters and an empty-result message. This does not prove what every rendered browser or Googlebot sees. | Server-render real result cards and anchors; browser/no-JavaScript tests; accessible empty states; test hydration separately. |
| Four homepage-linked destinations returned 404 | `/list-your-business/`, `/directory/distillers/`, `/directory/sellers-retailers/`, `/directory/suppliers-wholesale/` returned explicit 404 during the audit. | Route-registry-based navigation; CI link validation; no buttons to planned-only URLs. |
| Retrieved title and article identity disagree | The trade-history URL is retrieved with a CITES-oriented title; the CITES URL with a history-oriented title. Raw head inspection remains necessary. | One content identity produces title, H1, canonical, social metadata and structured data; tests compare all five. |
| A regional count is inconsistent | Regional comparison is retrieved with eight origins in the title while its introduction and main comparison cover seven. | Calculate scope counts from the actual published item collection or avoid a number in metadata. |
| Generic guide-to-directory exits lose context | Inspected origin/quality/buying pages often lead to the directory root rather than a matching subset or specific verified profiles. | Origin-aware and product-aware directory modules, while retaining the buyer's separate destination choice. |
| Related businesses may need stronger reasoning | Six inspected profiles expose related-supplier modules. No public matching methodology was established by this audit. | Show why an item is related; match role, products and documented capabilities; sponsored positions visibly separate. |
| A suspected testing contradiction changed on recheck | An earlier retrieved version raised concern. Latest recheck treats paper/viscosity tests as weak, and buying-oil guidance rejects reliable home purity tests. The earlier conflict was not reproduced. | Do not report it as a current confirmed defect. Maintain claim history and test consistency across pages whenever a claim is revised. |
| Merchant claims can be mistaken for evidence | Inspected profiles attribute some sourcing claims; absence of reviewed permits is also stated. | Store the claimant, source, check scope and expiry independently; never equate membership with verification. |

Primary observation pages: https://agarwoodguide.com/directory/ ; https://agarwoodguide.com/listing/haga-oud/ ; https://agarwoodguide.com/guides/understanding-agarwood/history-of-agarwood-trade/ ; https://agarwoodguide.com/guides/understanding-agarwood/agarwood-cites-conservation/ ; https://agarwoodguide.com/guides/origins-and-varieties/regional-agarwood-comparison/ . Row-level sources are retained in the audit CSV. These observations are not claims about actual traffic, revenue or search penalties.

## 1.6 Internal-link audit interpretation

The recorded subset has 213 selected contextual links, 48 guide-index child links, 48 hub-child links, 24 profile-navigation links, 21 selected homepage links, 20 cross-hub navigation links, 15 related-business links, five index-to-hub links, five homepage hub links and four broken homepage calls to action. These categories sum to 403; they do not include every header/footer link on every page.

The useful pattern is a learning graph rather than isolated posts. The improvement is to attach the next directory step to the subject being discussed. An Assam guide should distinguish businesses in Assam from businesses elsewhere handling Assam-origin material. A UK destination guide should distinguish physically local shops from foreign sellers declaring that they serve the UK. A business profile should lead back to its place, role and relevant subject guides, creating two-way knowledge/discovery navigation.

`observed_link_metrics.csv` reports subset inlinks and outlinks. A zero is not evidence of a real orphan. `proposed_internal_links.csv` is a separate proposed OudGuide graph, not a crawl of an existing OudGuide deployment. Never combine them into one metric.

## 1.7 Owned-site reference audit

The UAE wood collection was retrieved and exposes wood, oil and perfume navigation, product names, quantities, merchant origin wording, retail purchase options and delivery content. The Zura Yaumi page provides product photographs and merchant statements including an origin and age value. These are **merchant claims**, not independently validated scientific or provenance findings. Do not import all promotional language into neutral reference articles.

Four image links were opened and recorded, including a wood image and branded packaging. Two are only small thumbnails and are not suitable hero assets. The collection also exposes third-party merchant/brand names, so the individual image-rights audit must not assume the entire site is exclusively own-brand inventory.

The wholesale homepage had an earlier recorded retrieval but repeated later fetches timed out. Do not infer an outage or configure unverified deep URLs from that failure. Its current catalog, media URLs, quote endpoint and delivery capabilities require authorized confirmation before integration. `almutalib.com` remains a user-specified commercial destination, not a verified API.

## 1.8 What would make OudGuide competitive

The recommendation is to compete on precise geography, a reviewed terminology dictionary, useful non-contact profiles, evidence-aware claims, good samples/quotation workflows and reliable matching. A directory format or keyword-relevant domain does not itself confer a ranking advantage. Google's spam policies specifically distinguish useful resources from doorway pages and scaled content made primarily for ranking manipulation. [[G01](#source-g01)]

Success measures are useful searches, qualified inquiries, buyer-approved introductions, supplier response quality, returning visitors, stale-record reduction, editorial corrections, paid renewals and legitimate commerce referrals. Search impressions and indexed pages are useful diagnostics, not the sole goal.

---

# 2. Information architecture, entity model and interface

## 2.1 Global geography is relational

Keep distinct fields for botanical distribution, claimed material origin, growing/collection location, processing location, business headquarters, physical branches, shipping origin and buyer destination. Cultural association is another relationship. Never use one `country` field for all of them.

The country/territory seed contains 249 ISO-derived entries from the earlier planning workbook, with English and Arabic labels. It is a seed snapshot, not a current authoritative geodata service or evidence of oud production. Store stable external IDs and review ambiguous/disputed display labels. All records start with role `not_assessed`. Country existence never implies production, shipping eligibility or a minimum number of sellers.

Administrative hierarchy is generally country/territory → subdivision → city → district → venue, but natural, historical and trade regions can overlap those boundaries. Store typed `place_relationships`; do not duplicate Kalimantan, Papua or other broad regions just to force a strict tree. Distinguish Indonesian Papua from Papua New Guinea. Store historical aliases and validity periods when boundaries or names change. Exact locations of vulnerable wild resources and confidential suppliers are not public map data.

The first interface provides three independent selectors: **Seller based in**, **Material origin**, **Deliver to**. Each result identifies which match conditions are supported and by what kind of evidence. Business-reported capability is labelled as such. Product family and shipment class are part of destination capability; a perfume shipping statement does not automatically cover raw wood.

## 2.2 Entity catalogue

| Entity group | Canonical records and required relationships |
|---|---|
| Geography | Place; alias; place relation; country code; source; boundary/role review. |
| Industry terms | Taxonomy term; locale label; usage/meaning; synonym-candidate relation; issuer-scoped grade definition; evidence. |
| Science | Botanical taxon or accepted-name reference; specimen/batch claims kept separate; no inferred species from origin label. |
| Businesses | Organization; role; owner claim; team member; branch; public/private contact; status and verification events. |
| Commercial identities | Brand and owner relationships; perfumer/person credits; manufacturer and distributor relationships with dates. |
| Materials and products | Material family; actual batch; finished product; variant; seller offer; unit and availability observation. |
| Capabilities | Product role; handled origins; shipping origin; served destination; samples; minimum quantity; time validity; claim source. |
| Editorial | Page identity; translated revision; structured content blocks; claim uses; reviewer; source; publication state; internal links. |
| Assets | Original source; rights holder; rights scope; subject; product/batch association; dimensions; allowed derivatives; localized alternative text. |
| Matching | Inquiry; private contact; requirements; redacted brief; candidate supplier; recipient approval; release record; quote; event log. |
| Commercial controls | Membership; contact entitlement; partner approval; lead-access offer; order; credit/refund; payment event. |
| Governance | Correction; dispute; abuse report; retention policy; privacy request; audit event; suppression; source expiry. |

The same seller can have multiple roles. The same product can have multiple offers. The same named oud selection can refer to different sellers' batches. A grade is scoped to its issuer. A declared fragrance note is not automatically a chemical ingredient. A branch is not a separate company. A source review verifies a particular claim within its scope; it is not a blanket seal of authenticity.

## 2.3 Main navigation and homepage formation

Desktop top navigation: **Learn**, **Origins**, **Find Businesses**, **Explore the World**, **Products & Fragrance**, **For Businesses**. A separate action starts **Request Suppliers**. Search accepts normal queries and suggests categories: guides, terms, places, businesses and actual product references. Do not force a visitor to choose a country before reading.

Homepage component order: accessible header; concise portal purpose; combined learning/directory search; three pathways (learn, retail discovery, wholesale sourcing); product-family entry cards; origin research entry points; buyer-country entry points; selected reviewed guides; useful directory entries with transparent labels; explanation of matching and paid membership; editorial/ownership links; footer. Populate counters from published records only. Zero researched suppliers means a truthful coverage message, not fake sample businesses.

On mobile, search is a single accessible control followed by an expanded filter drawer. Preserve selected values in state and allow reset per field. Changing material origin must not silently change buyer destination. Map view is optional and loads only after interaction; list view stays primary and accessible. Geolocation is optional, never required; manual country/city entry always works.

## 2.4 Business profile formation

Header: legal/trading name, roles, city/country, profile-claim state, fact-review date and explanation of contact visibility. Use a verified, authorized business logo only when it satisfies the user's image-source restriction; otherwise use a text/initial placeholder. Do not put an Al Mutalib product photo in another seller's header or gallery.

Body order: original factual summary; roles and product families; physical locations; origin claims handled; destinations declared served; samples/MOQs where substantiated; evidence and limitations; contact/matching panel; related businesses with match reason; linked guides; corrections and claim-profile actions. Locations and capabilities must not be converted into stronger guarantees by the template.

A basic unclaimed listing can display useful sourced facts without showing website, email, phone, WhatsApp, social links or exact contact routes. Name-only records are a database/research state, not an SEO page. Corrections and ownership disputes remain available without payment. Claimed and subscribed are separate statuses. An expired subscription hides approved contact fields but does not reset a valid factual verification history.

Paid profile contacts require all of: a current membership entitlement, an authorized owner, explicit publication choice and no moderation hold. Enable fields individually. The public data serializer must not include disabled values, even as hidden HTML, JSON-LD, preloaded JSON, text inside descriptions, API responses or search snippets.

A paid profile may expose a clearly addressed direct inquiry to that business. A basic profile exposes **Find suppliers for this requirement**, with text stating that it is an OudGuide matching request and not a message to the listed company. Preserve a source-profile context internally without silently treating that seller as the recipient.

## 2.5 Directory results and ordering

Default cards show name, roles, place, product fit, origin/destination claim labels, review date and profile link. Do not infer stock or shipping certainty. Explain the match briefly: for example, `Based in Dubai; seller-declared oud-oil supply; UK shipping needs confirmation`.

Organic ordering should use relevance to explicit filters, documented capabilities and information freshness. Paid features may have a separate clearly labelled sponsored module. Do not silently insert membership payment or affiliation into a score labelled `best` or `most trusted`. Display sorting options such as relevance, name and recently reviewed. Distance sorting requires a real location basis and consented/geographically appropriate use.

The default result size is a product decision of 20 cards, not an SEO requirement. Provide normal linked pagination with stable server-side queries. A load-more enhancement must retain crawlable pagination. No-results content states which constraints eliminated results, offers a reversible broader search and allows matching. Never say no businesses exist when the dataset is incomplete.

## 2.6 Guide/article formation

Article header: breadcrumb, H1, scope, author and qualified reviewer when applicable, published/modified dates derived from editorial events, answer summary and a concise evidence note. Body: stable table of contents, question-specific sections, original examples, tables that use real records or clearly hypothetical values, claim limitations and practical next steps. Footer: primary references, related guides, matching directory results and optional commercial modules.

Origin pages distinguish species distribution from proven provenance. Region pages need region-specific evidence beyond a renamed country introduction. Trade-term pages identify market/language usage and unresolved meanings. Quality pages describe issuer criteria and testing limitations. Buyer guides tie destination information to actual product class and dated sources. Fragrance pages separate brand notes, perfumer credits, ingredients, release history and review opinions.

Do not require a rigid word count. Editorial budget bands may help estimation, but a correct 500-word narrow glossary answer can be preferable to 1,500 words of filler. The gate is whether the page fulfills its specific purpose with reliable information and a useful next step.

## 2.7 Visual system and accessibility

Recommended visual direction is editorial rather than a disguised Al Mutalib shop: ivory surface, ink text, restrained deep burgundy accents, abundant whitespace and strong table readability. This is an unapproved direction, not a final brand identity. Do not redesign or repurpose the Al Mutalib falcon as OudGuide's logo without a separate instruction. Use a temporary text wordmark until the portal identity is approved.

Design desktop around an approximately 1,200-pixel content container, article text around 65–75 characters per line, and mobile from 320 pixels upward. These are design starting points, not fixed performance or SEO thresholds. Form labels remain visible; do not use placeholders as labels. Use logical CSS properties for Arabic RTL, preserve correct rendering of Latin product names, international phone numbers and numbers, and test mixed-direction text.

Target WCAG 2.2 AA: keyboard navigation, skip link, visible focus, contrast, accessible dialogs, descriptive labels, error summaries tied to fields, no color-only statuses, captions/alt where appropriate and no compulsory drag gestures. A map is never the only means of finding a business. [[W01](#source-w01)]

## 2.8 Locale and URL rules

Use stable entity IDs and localized slugs. English and Arabic descriptions are translations of one entity, not independent duplicates. Use `/en/` and `/ar/` prefixes; root can be an accessible language/entry page with `x-default` or an agreed single consistent redirect. Do not force redirects based solely on IP. User preferences may suggest a language without trapping visitors.

Use lowercase hyphenated routes, a consistent trailing-slash policy and one canonical hostname. Keep redirects for slug changes. Preserve semantic parents for breadcrumbs even where a term has multiple related origins. Only equivalent reviewed translations participate in reciprocal hreflang; unreviewed automatic copies are not published merely to inflate counts. [[G08](#source-g08)]

The route manifest deliberately includes planning-only places and topics. A URL becomes public only through the publication gate. Country, region, product and grade combinations are represented by relationships and filters first, not an unbounded route Cartesian product.

---

# 3. Content production, SEO, AEO, GEO and links

## 3.1 Editorial hubs and subject coverage

The planned editorial hubs are oud basics, origins, quality, using oud, buying, culture, production, sourcing, trade, fragrance, comparisons and collecting. Product-family pages cover wood, oud oil, perfume oils, attars, finished perfumes, bakhoor, incense, powder, beads, carvings, burners, home fragrance, accessories, samples, gifting and packaging. Directory categories cover the actual supply chain, including growers, distillers, processors, wholesalers, retailers, exporters, importers, distributors, brands, manufacturers, private label, materials, packaging, laboratories, experts, training and cultural organizations.

A country or region guide connects to the product and term entities relevant to it. It does not assert that every global grade, shape or scent descriptor belongs to that region. Names such as Muri, Mori, Salla, Salda, Zawaya, Girmi, Zura, Kudi, Bisa, Malino and Silani start as candidate terminology records. Collect original language, transliteration, market of use, merchant examples and expert interpretation before deciding which are synonyms, distinct selections or ambiguous terms.

Normalize concepts, not user wording. Store misspellings/variants as search aliases when justified; do not automatically publish one URL per spelling. A visitor typing a musical-instrument meaning of oud should see a concise disambiguation rather than an irrelevant fragrance answer. Clinical, regulatory or sustainability claims require the appropriate expertise and source scope, not a seller testimonial.

## 3.2 Research-to-publication pipeline

Every content brief has entity IDs, primary intent, locale/market, questions to answer, evidence to collect, source limitations, associated directory results, original image options, intended internal links, commercial disclosures, reviewer requirements and refresh triggers. A draft cannot supply facts absent from the evidence record. Automated assistance may organize material and draft prose but may not invent sensory testing, travel experience, supplier checks, quotations or scientific certainty.

Workflow: research candidate → sources collected → terminology/geography reconciled → brief approved → original draft → subject review → editorial and commercial-conflict review → links/assets/metadata checked → publish → monitor → update, merge or retire. Store every revision and who approved it. `dateModified` changes for material corrections, not whenever a background job runs.

Maintain a claim registry with claim text, scope, claimant, source, source date, observed date, reviewer, evidence status, confidence rationale and expiry/review trigger. Articles reference claim IDs. Updating the limitations of a purity test should flag all pages that use that test, rather than fixing one article while leaving contradictory copies elsewhere.

Retain a source hierarchy: authorities for legal rules; accepted botanical references for scientific names; original research for measurement claims; official merchant data for what a seller declares; documented interviews for expert opinions; original observations for what the editorial team actually tested. Images are not proof of origin, age, botanical identity, treatment or aroma. Competitor content is a research lead, not independent validation.

## 3.3 Page-level metadata contract

Each published page must have a unique intended title, a clear primary H1, a purpose-specific description, self-consistent canonical, locale, robots policy, social title/image, breadcrumb and relevant structured data. Generate these from the same page record rather than disconnected CMS fields. An editor may override wording without changing identity.

Title example: `Oud wholesalers in Dubai | OudGuide` only when the page lists real matching businesses. Title example: `Assam oud: origin claims, trade terms and buying questions | OudGuide` only after the research exists. Avoid `best`, `verified`, `cheapest`, fixed supplier counts or delivery claims unless supported and kept current. Character counts are preview aids, not hard Google limits. Unique wording is not enough if the underlying page adds no distinct value.

Meta descriptions should describe what the user actually gets. A basic profile with hidden contacts must not advertise `phone number, WhatsApp and website` in the snippet. A sourcing service must not promise to be the named seller whose profile the visitor was reading. An article must not use a merchant product as universal evidence. [[G01](#source-g01), [G07](#source-g07)]

## 3.4 Internal linking model

Use five explicit relationships: parent/child; definition/explanation; comparison; geographically relevant discovery; and action/tool. Every public indexable page should have a discoverable parent or collection entry. Related links should provide an actual next step, not merely increase a count.

The supplied proposed graph contains structural edges and specific authored contextual examples. It is an implementation starting point, not a prescription to render every edge on one screen. Large country/category indexes are grouped and paginated. The navigation does not repeat all countries, terms or products in every footer.

For an origin country: link to documented regions, relevant terminology, botanical explanation, quality limitations, businesses handling that origin and a sourcing checklist. For a region: link to its origin country, relevant actual local businesses, process/term explanations and other related regions only where meaningful. For a destination guide: link to physically local sellers, sellers serving that destination, product-class guidance and the relevant request form. For a business: link back to roles and place, and to relevant guides, without asserting unverified affiliations or capabilities.

Suggested modules normally show a small shortlist rather than exhaustive crosslinks. Module limits such as three related businesses or four related guides are UI defaults, not ranking formulas. Organic related-business selection must not secretly prioritize Al Mutalib. Sponsored entries occupy an explicitly labelled module.

Use real `<a href>` links with concise descriptive text and accessible names. Do not link only through click handlers, empty hash fragments or inaccessible filter controls. Deep links include only safe public context IDs; no buyer names, phones or detailed quote budgets in URLs. Avoid repeated exact-match commercial anchors. [[G02](#source-g02)]

## 3.5 Link resolution and integrity

Store the target entity/page ID, relation type, source block ID and editorial reason. Resolve the current localized URL at render time. A target must be published and public before a normal editorial link is emitted. Links to noindex user utilities such as a form remain legitimate user actions; exclude them from XML sitemaps rather than pretending they are editorial pages.

A merge creates a permanent redirect to the real replacement when equivalent. A deletion without a replacement returns a proper 404 or 410 and updates inbound editorial references. Do not redirect every retired business or guide to a shop homepage. Test redirect loops, chains, broken fragments, language mislinks and backlinks to unpublished targets.

Publish gate checks: all intended indexable pages are reachable from a published index; no broken in-scope links; canonical and hreflang targets resolve; breadcrumbs form a coherent chain; title scope matches content; selected business count equals the visible dataset. Graph reachability is tested on the rendered published subset, not only on planning files.

## 3.6 External linking and the Al Mutalib relationship

There are four distinct external-link classes:

1. Primary evidence citations are ordinary editorial references. They remain available even if most merchant contacts are restricted.
2. Owned-business commercial referrals use clear brand identity and a relevant destination. Ordinary ownership does not automatically make every link paid, but a clearly commercial affiliate/sponsored placement should be qualified appropriately. Do not promise or sell ranking credit.
3. Paid directory website links are labelled commercial features and normally use `rel="sponsored"`; Google also accepts `nofollow` for paid links. [[G04](#source-g04)]
4. Untrusted public submissions use appropriate `ugc`/`nofollow` handling and moderation. Paid user content may need both `sponsored ugc`.

Use Al Mutalib wood and oil collection destinations where actually verified. Product-level links must use a live destination registry and can change when catalog entries move. Wholesale source/brand references can point to almutalib.com where directly relevant; the neutral request form need not leave OudGuide. A backlink is not needed in every paragraph, image or page. Do not hide owned-site links in CSS, insert them into every keyword occurrence, require reciprocal links from businesses or use a network of doorway domains. [[G01](#source-g01)]

The portal remains useful without clicking an Al Mutalib referral. Footer ownership disclosure identifies the actual operating relationship once the legal entity is approved. Commercial modules do not masquerade as independent research. A link to a third-party scientific source is not a prohibited free seller contact.

## 3.7 Images and assets from the two owned sites

Use original authorized bytes from the approved source library, not competitor assets. Record source page, exact source URL, copyright holder, permission scope, depicted subject, actual product/variant if known, master dimensions, checksum, approved crop/focal point, credit, rights expiry and permitted uses. Localize alternative text and captions independently.

For production, ingest approved originals into a controlled media store and generate responsive derivatives. Avoid relying indefinitely on third-party hotlinks. Do not enlarge 120-pixel thumbnails into hero images. Use modern formats where compatible, explicit dimensions and responsive `srcset`/`sizes`; prioritize the actual LCP image and lazy-load noncritical images. [[G06](#source-g06)]

All existing logos, wood shapes, packaging and product details remain accurate; no re-rendering, reshaping or unsupported enhancement. A photograph associated with an Al Mutalib product can illustrate that selection with attribution. It cannot illustrate an unrelated seller's inventory, a specific forest, a laboratory test or an authentic origin specimen unless the rights and identity support that use.

When the owned sites lack a suitable forest, region, distillery or third-party business photo, publish without that photograph or use an accessible typographic/data component. Do not fill the gap with a misleading generic product image. A paid business uploading new images would be an exception to the user's two-site image rule and therefore requires explicit product-owner approval before enabling that feature.

An Al Mutalib photo source may be credited contextually; image attribution is not a mechanism to force a sitewide SEO backlink. Do not copy identical merchant descriptions along with reused images. Portal editorial pages use self-canonicals for their original purpose; only truly duplicated content calls for a duplication decision.

## 3.8 Facets, indexing and sitemaps

Publish a curated allowlist of useful directory landing routes. Arbitrary combinations remain interactive filters. Decide each URL class explicitly: published indexable page; crawlable noindex utility; parameter alias canonicalized to a truly equivalent route; invalid filter returning a useful error; or private route with authorization. A robots disallow is not a substitute for `noindex` on a URL a crawler needs to fetch to see the instruction. [[G03](#source-g03)]

Do not canonicalize materially different pages to a generic parent merely to hide duplication. Use noindex where appropriate and remove useless crawlable permutations. Normalize parameter order and values. Deny infinite page numbers, unknown enumerations and malicious queries. Search results and buyer-specific quote pages are not indexable.

XML sitemap indexes separate editorial, directory profiles, geographic landing pages, product references and locales. Include only published canonical indexable URLs with accurate modification dates. Split before the official protocol limits and validate response format. Sitemap inclusion is not an indexing or ranking guarantee. [[G09](#source-g09)]

## 3.9 AEO and generative-engine discovery

AEO means answering useful questions clearly. GEO here means discovery in generative search, not local geography. Show direct explanations, source references, author/reviewer identity, dates where relevant, comparison tables and explicit uncertainty. Do not create one thin page per conversational rephrasing. The entity IDs and reviewed relationships help make the site understandable without a special AI-only content layer.

Google documents that normal SEO fundamentals apply to its AI features and that no special AI schema or mandatory AI text file replaces them. OpenAI separates OAI-SearchBot search discovery from GPTBot training controls; configure those decisions independently and test CDN/firewall access. Neither crawler access nor schema guarantees citation. [[G05](#source-g05), [O01](#source-o01)]

As of the checked Google documentation, FAQ rich results were removed beginning 7 May 2026. Keep useful Q&A content but do not sell FAQ schema as a rich-result growth feature. Confirm the current feature documentation at implementation. [[G11](#source-g11)]

Use Organization and appropriate Article, BreadcrumbList, LocalBusiness, Product or Event structures only where the actual page meets their semantics and current feature rules. A directory listing is not a product for sale by OudGuide. Do not emit hidden contacts, invented aggregate reviews, product offers without evidence or misleading prices. [[G07](#source-g07)]

## 3.10 Measurement and revision

Track intent-level traffic and conversions without buyer PII. Events include directory search, filter changed, profile viewed, evidence expanded, retail referral, RFQ started/submitted, channel verified, recipient approved, introduction delivered, supplier replied, withdrawal, membership checkout and renewal. Commercial CTR should be read alongside fulfilled user needs, not used to force every page into a shop exit.

Search Console and rank/keyword tools must be connected separately for genuine demand and indexing measurements. No search volumes or difficulty scores in this pack are fabricated. Prioritize queries using measured demand when available, actual inventory/capability, evidence readiness, buyer value and content distinctiveness. Refresh titles, links and pages when those inputs change, not on an arbitrary mass-rewrite schedule.

---

# 4. Wholesale matching, lead sales and membership

## 4.1 Front-end brand versus actual recipient

The public acquisition experience is **OudGuide Supplier Matching**. Its hero, button and initial form do not need to promote Al Mutalib. The actual operator and privacy information remain accurately identified, and eventual suppliers are named before an introduction. An Al Mutalib salesperson does not impersonate an independent OudGuide adviser.

Initial form copy, to be legally reviewed: **Tell us what you need. OudGuide will review your requirement and help you choose suitable suppliers. We may receive a fee from suppliers for introductions. You approve who receives your contact details.**

The submit label is **Submit requirement to OudGuide**. A page-level notice explains whether the request is general matching or addressed to a participating named business. If the source business is not receiving it, say so before submission. Refusing additional matching must not silently redirect a supplier-specific request to Al Mutalib.

The introduction screen identifies each proposed supplier, country, relevant capabilities, relationship to the portal if affiliated, approved contact channels and exactly which information will be shared. The button is **Approve these introductions**. Al Mutalib can appear here as an actual named supplier rather than in the acquisition headline.

## 4.2 Three distinct commercial products

**Directory membership:** business-funded public contact visibility and profile tools. Proposed price is AED1,200 per year, described as AED100 per month equivalent. This assumes annual upfront billing; monthly installments under an annual commitment need a different contract and implementation decision.

**General matching:** a buyer asks OudGuide to help source. Approved partners can express interest in an appropriately redacted brief. The buyer chooses introductions. Al Mutalib can participate on the same permission basis.

**Lead/intro access:** a supplier pays an agreed fee to obtain an approved introduction within a defined scope. This is not unrestricted ownership of personal information. A supplier may not resell it, add unrelated marketing, share it with undisclosed companies or export all inquiries merely because it purchased one opportunity.

These products have separate entitlements, terms and payment records. Membership does not automatically buy lead access. A paid introduction does not buy an authenticity badge. A staff role in portal operations does not authorize affiliated retail/wholesale sales use.

## 4.3 End-to-end wholesale flow

1. A guide, profile or directory opens a requirement form with safe public context: product family, relevant origin/term and source page ID. The buyer separately chooses delivery location. No name, email or phone is stored in URL parameters.
2. OudGuide collects requirements, one contact channel and the service permission. Rate limiting and accessible anti-abuse controls apply. The receipt states that the request has been received, not that suppliers have accepted it or that a quote is guaranteed.
3. Verify the chosen contact channel before external release. Portal operations qualify the requirement, check purpose/product class and reject abuse. Reviewers can ask a service-related clarification as OudGuide, not start an undisclosed sales campaign.
4. Create a redacted matching brief. Remove names, business identity, phone, email, social links, exact street address, identifying free text and original attachments. Use country and necessary coarse geography, quantity/budget bands and structured requirements. Redaction is not automatically anonymization; screen distinctive combinations for re-identification risk. Unapproved users see nothing.
5. Eligible suppliers see the redacted opportunity and can signal capability. Participation requires a contract, identity review, product/destination fit and policy eligibility. Viewing an opportunity does not release contacts. Paid preference is not described as independent best-match ranking.
6. Present the relevant supplier identities to the buyer. The default is at most three, or one if the buyer requests it. This limit is an operational policy, not a promise of three offers. Each additional supplier requires approval. A selected-profile request remains selected-profile-only unless the buyer opts into alternatives.
7. Store a versioned recipient grant: inquiry, business identity, fields, purpose, channels, notice version, approved time, expiry and withdrawal state. Verify these server-side; never trust a client-supplied `consent=true` or a supplied recipient ID as authorization.
8. Confirm commercial eligibility and any payment entitlement. For paid access, authorize/reserve first and capture only according to the agreed fulfilment/refund policy. A pending payment is not permission. An expired or withdrawn grant prevents release even if a supplier has paid; void/refund according to terms.
9. Atomically reserve the permitted introduction slot and create a unique release event/outbox task. Validate approval again immediately before dispatch. Only approved fields and safe scanned attachments are released to the named recipient. A transport acknowledgement is not a supplier reply.
10. Suppliers identify themselves and respond only in the approved channels and purpose. The portal records delivered, acknowledged, quoted and closed states separately. Failure/retry handling must not duplicate sales or introductions. Buyers can see recipients, close the request, withdraw pending permissions and report misuse.

## 4.4 Lead state machine

`draft → submitted → contact_pending → qualified → matching → recipient_approval_pending → authorized → dispatch_pending → delivered → answered → closed`.

Exceptional states include `needs_clarification`, `rejected`, `expired`, `withdrawn`, `delivery_failed` and `held_for_policy_review`. Transitions are server-side events with idempotency keys. The buyer's sourcing state, per-recipient permission state, per-introduction delivery state and payment state are separate; one field cannot represent them safely.

A privacy withdrawal immediately suppresses pending releases and notifies released recipients of the requested change. Do not claim to erase an email already delivered or override a recipient's independent lawful recordkeeping obligations. Account suspension removes future access and triggers review of outstanding introductions. A payment refund does not retroactively authorize further data use.

## 4.5 Exclusivity and shared leads

Define an exclusive lead as an introduction not released to any other supplier within the specified exclusivity scope/period. An Al Mutalib sales introduction counts as a release. It cannot contact the lead first and then sell the same lead as exclusive to someone else. Portal operations processing under a restricted service role is distinct from supplier sales access and must be logged.

For shared leads, state the maximum number of buyers, whether introductions have already occurred and which time window applies. Never silently expand a three-recipient grant into ten recipients. The supplier receives an honest access product, not a sales guarantee. If the requirement is already closed, withdrawn, expired or otherwise invalid, it is not sold as fresh.

Lead pricing is deliberately unpriced in this specification. Set fees after observing qualification cost, buyer acceptance, supplier response, duplicates, disputes and actual value. Keep raw personal information out of public auction pages. The recommendation is manual matching and private approved partner access initially, not an unrestricted downloadable lead marketplace.

## 4.6 Quote fields and validation

The register defines **67 possible fields**, retaining 60 earlier requirement fields and adding seven matching/permission controls. A normal buyer sees only the fields relevant to the selected product. Required first-pass inputs are product family or unsure, purpose, quantity or unsure, destination country/city where known, sample requirement, one contact channel and the actual service choice.

Wood fields include trade name, origin preference, grade wording and issuer if known, physical form/dimensions, quantity/unit, preparation/treatment requirements, intended use, batch repeatability and packaging. Oil fields separate declared pure oud oil, blend, perfume compound and unknown; collect volume or mass without automatic conversion and intended application. Finished perfume/private-label fields include format, concentration wording, bottle size, units, fragrance brief, packaging and manufacturing expectations.

Samples fields include sample count/amount, sample budget, whether fees are acceptable, destination and whether bulk must match the sampled batch. Do not promise free samples, universal minimum orders or guaranteed shipping. Grade labels remain free-text or issuer-scoped references, not a forced universal score.

Validate international phone input with an explicit country choice and a maintained parser; preserve the original entry alongside the normalized form, including the leading plus. Do not coerce every number to UAE length. Validate dates against time zone and allow no firm deadline. Quantity units have a family; grams and millilitres are not converted without actual density. Money uses a currency and basis such as per kilogram or total budget. Reject unsupported HTML and uploaded executable content; allow buyers to say unsure instead of entering invented numbers.

## 4.7 Permission and privacy engineering baseline

This is a worldwide service design, not a legal opinion or a universal consent recipe. A qualified reviewer must map applicable rules for the operator, buyer, recipient location, product class and contact channel before enabling a market. Some obligations depend on unsolicited marketing versus a solicited quotation, business versus individual subscriber, cross-border processing and sales/sharing definitions. A generic `partners may contact you` checkbox is not assumed sufficient.

The UK ICO's data-broker guidance stresses transparency, lawful basis and recipient due diligence, and its electronic-mail guidance addresses bought-in lists and consent where required. These sources are jurisdiction-specific and must not be presented as worldwide clearance. [[P01](#source-p01), [P02](#source-p02)]

Use separate purposes: OudGuide service processing; the selected supplier introduction; optional additional introductions; and optional ongoing marketing. Keep optional marketing unticked and revocable. Record notice text/version and approved suppliers, not merely the existence of a checkbox. Do not make unrelated marketing necessary to submit a quote request. Avoid public buyer profiles, public requests, open attachments and unrestricted exports.

Actual controller/business identity and commercial affiliations need disclosure in the appropriate places, with the named supplier decision visible before data release. A buyer should not learn only during an unexpected call that their details were sold to a different company. Partner contracts prohibit onward resale, require access controls, specify use limits and provide a misuse/removal mechanism. Processor versus controller roles require legal assessment; common ownership is not an automatic exemption.

Retention durations are configuration proposals pending legal review: short-lived drafts; time-limited active requests; periodic review of inactive leads; minimal suppression records; separate legally required billing retention. Do not hardcode indefinite retention or promise instant universal deletion. Every personal-data table has a retention classification and a deletion/hold workflow.

## 4.8 Membership implementation

Plan fields: currency AED; amount 120000 minor units per annual period for the proposed upfront model; public wording AED1,200/year (AED100/month equivalent); tax treatment not assumed; cancellation, renewal and refund wording approved before checkout. Supplier team seats, branch limits and included features must be explicit configuration, not hidden later charges.

Subscription states are pending, active, past_due, cancelled_at_period_end, expired, suspended and refunded as applicable. Source of truth is verified provider events plus reconciliation, not a `success` URL. Verify webhook signatures, deduplicate event IDs and cope with out-of-order delivery; invalid events cannot activate contacts. [[S02](#source-s02)]

Public contacts are recomputed after status changes, owner changes and moderation holds. Purge public CDN/search caches when entitlement expires. The profile itself remains useful and does not turn into a negative label. Emails asking a business to subscribe must not assert that an unclaimed profile means the business is fraudulent or unsafe.

## 4.9 Buyer and partner dashboards

Buyer request view shows requirements, recipient approvals, current status, introductions made, messages/quotes where supported, withdrawal and help. Access requires a verified account or short-lived secure token with appropriate re-verification. Guessing sequential IDs must never reveal another request.

Partner dashboard separates membership/profile management from redacted opportunities, purchased introductions, consent-scoped buyer details, credits/disputes and team permissions. Sales staff see only authorized introductions assigned to their organization. Portal editors do not need buyer contacts. Financial staff do not need uploaded buyer documents. Operational admin access is narrowly logged and protected by multifactor authentication.

The initial service can avoid a full messaging system: a structured introduction and response status are enough. Do not promise escrow, payment protection, guaranteed product authenticity, shipments or deals unless those products are actually implemented and contractually supported.

---

# 5. Engineering architecture and operational contracts

## 5.1 Reference architecture

Use a server-rendered public application, a relational database, an editorial CMS/admin interface, private object storage, a background job/outbox system and a suitable search index. Next.js/TypeScript and PostgreSQL are a reasonable reference stack, not a selected vendor/version commitment. Pin supported versions after engineering validation. Existing Al Mutalib storefronts stay separate commerce systems connected through approved links or authorized integrations; do not reconstruct their checkout inside a directory.

Public content should be cacheable, while account, inquiry, approval and partner data is private and never cached at shared edges. Separate public business summaries from restricted contact data and buyer data at the storage/query boundary. Search indexes contain explicit public projections, not a copy of database rows. Private matching search uses a different index/endpoint with authorization.

The handoff includes a reference SQL schema and OpenAPI contract. They express core entities, constraints and interface intent. They are not a substitute for application authorization, production migrations, provider-specific payment integration, full legal policies, load tests or security review. No deployment has been performed.

## 5.2 Services and ownership

Public content service resolves published pages and localized aliases, builds metadata, breadcrumbs, internal links and permissible media. Directory service applies explicit filters and returns public cards. Business service controls claiming, team membership, public field approval and subscription entitlements. Inquiry service manages private requirements and approval. Matching service sees necessary redacted specifications and candidate capabilities. Release service alone dispatches approved introductions. Billing service validates provider events and reconciles payments. Editorial service manages claims, sources, revisions and publication checks.

Use least-privilege application identities for each boundary. An admin API with a shared all-powerful token exposed to browsers is not acceptable. Hosting dashboards and secrets remain out of the repository. Authorized CRM integration runs server-side; no buyer data is placed in links to almutalib.com or an analytics UTM parameter.

## 5.3 Public contracts

Search endpoints accept typed enums/IDs for role, product family, seller place, origin place, destination and page/cursor. Respond with useful match explanations and coverage status. Unknown IDs produce a clear validation error. Limit query length, facet count and expensive geography operations. Result totals describe researched published entries, not total global sellers.

Page endpoints return published content or a real not-found response. Hidden/private pages never leak drafts in preview cache, JSON metadata or public sitemap generation. Previews require authorization and use noindex/no-store. Page slugs map to immutable IDs with redirect history. A locale fallback is clearly indicated and must not masquerade as a completed translation.

Public business detail response intentionally excludes unrestricted contact fields. The server may add only owner-approved contact projections that satisfy all active entitlement checks. API tests must scan both rendered HTML and JSON for hidden contact canaries. An enriched description that embeds a phone number is reviewed and filtered under the same policy.

## 5.4 Inquiry and partner contracts

Initial RFQ submission is idempotent and creates one private inquiry. Return an opaque receipt ID and a limited status link, not a complete echo of private data. Verify contact ownership before release. No client request can set itself to `approved`, `paid`, `verified` or `delivered`.

Recipient approval references a server-generated supplier candidate and exact notice version. The server checks inquiry ownership, verified channel, request state, allowed geography/channel policy, cap and expiry. Revocation updates grant status and cancels unsent outbox events. Released recipients receive an appropriate suppression/withdrawal update; continued processing is reviewed under their applicable obligations.

Partner opportunity endpoints return redacted structured briefs only. Approved grants unlock a limited projection, not raw inquiry storage. File downloads are separately authorized, signed and expiring. Supplier callbacks are authenticated, idempotent and scoped to the specific introduction. Payment, CRM and notification webhooks each have separate signature/secret validation and anti-replay strategy.

## 5.5 Core validation and error semantics

Use 400/422 for invalid shape/values, 401 for missing authentication, 403 for authenticated but unauthorized actions, 404 where hiding resource existence is appropriate, 409 for stale versions or duplicate conflicting operations, 429 for limits and 5xx for real service failures. Return field errors with human-readable messages and a request ID; no stack traces, SQL errors, secrets or private recipient details.

Use optimistic versions for editorial edits, business ownership changes and consent changes. Payment/release transitions use database transactions and uniqueness constraints. Clock/time handling is UTC internally with display in the requested locale/time zone. Monetary calculations use integer minor units and explicit currencies; amounts in different currencies are not summed without dated conversion policy.

## 5.6 Security baseline

Require strong sessions, secure HttpOnly cookies where applicable, CSRF protection, rate limits, validation, output escaping and a restrictive content security policy suited to approved embeds. Admins and high-risk partner actions use multifactor authentication. Scope roles by organization; test horizontal and vertical authorization. Audit privileged access without logging raw PII.

Uploaded files are allowlisted by content type and extension, size-limited, quarantined, scanned and stored outside executable/public directories. Strip dangerous metadata where suitable, reject active content, and require extra review for documents with personal identifiers. Render safe previews separately. Follow OWASP upload guidance and test actual processing. [[S01](#source-s01)]

Remote image imports require an allowlist, redirect validation, size/time limits, MIME checks and blocking of local/private network destinations. Do not let arbitrary business image URLs become server-side request forgery. Do not import a merchant website wholesale without permission or retain unrelated personal data.

A form request, attachment or retrieved web page is untrusted input. Any future AI assistant must not execute instructions embedded in supplier descriptions, uploaded documents or sources. It should retrieve reviewed facts, cite them, expose uncertainty and avoid autonomous lead release or payment changes. No third-party model receives buyer PII without the appropriate arrangement and approved purpose.

## 5.7 Data and editorial administration

The CMS should support typed blocks: answer, paragraph, definition, table, comparison, attributed quote, evidence note, image, directory module, product example, caution, Q&A and CTA. Each block supports safe links and explicit source/claim associations. A linked claim update flags affected pages for review. Automated drafts are visibly marked in admin and cannot self-publish factual articles or supplier claims.

Business submissions enter a moderation queue. Deduplicate by normalized name, official domain where privately retained, address, owner proof and other evidence; never blindly merge same-name companies. Preserve provenance and disputes when merging. Source expiry flags pages for review rather than fabricating updated facts.

A geography editor manages aliases, boundary/version notes and roles. A taxonomy editor reviews possible synonyms and issuer-scoped grades. A media editor approves rights and subject identity. Public counts are calculated from published eligible records. A dashboard exposes missing sources, stale contacts, broken links, untranslated critical controls and pending ownership disputes.

## 5.8 Jobs, caching and reliability

Recommended jobs: approved catalog/media ingestion; current link checks with a polite rate limit; source review reminders; subscription reconciliation; public search reindex; sitemap generation; cache invalidation; RFQ verification/expiry; outbox dispatch/retry; withdrawal propagation; attachment scan; privacy retention/deletion and backup verification.

Jobs are idempotent and have retry limits, backoff, a dead-letter queue and an operator alert. A duplicate payment event cannot charge twice or activate twice. A notification retry cannot consume another recipient slot. A withdrawn grant is rechecked at dispatch, not only when a job is enqueued.

Backups are encrypted, access-restricted and restore-tested. Define recovery objectives with the owner; proposed starting targets are recovery point no more than one hour for critical transactional data and restoration within four hours, subject to budget and validation. These are engineering targets, not achieved service guarantees. Document how deletions/suppressions propagate when backups are restored.

## 5.9 Performance and accessibility tests

Use actual field data after launch to evaluate Core Web Vitals. Current Google good-experience thresholds reference LCP within 2.5 seconds, INP within 200 milliseconds and CLS no more than 0.1; assessment requires suitable field measurements, not a claim based solely on a local build. [[G10](#source-g10)]

Control large media, maps, tag managers and third-party embeds. No map in the critical path; no image without dimensions; no unnecessary client JavaScript for static articles. Suggested engineering budgets are tested on realistic mobile conditions and real directory datasets, not treated as ranking guarantees. Load tests include country/category queries, large profile inventories, simultaneous quote submissions, subscription events and consent withdrawal during dispatch.

Accessibility testing includes keyboard-only use, screen-reader field announcements, RTL, zoom/reflow, focus after dialog close, errors and loading/empty states. Automated scans supplement rather than replace human tests. [[W01](#source-w01)]

## 5.10 Deployment and rollout

Maintain development, staging and production with distinct credentials, data and integrations. Staging is access-controlled and noindex; never copy real buyer contacts into local seeds. Use synthetic test data marked non-production. CI validates routes, links, schema/contracts, permissions, data migrations, accessibility and contact-leak fixtures. Database migrations are reversible where possible and accompanied by backups for destructive changes.

Launch with a reviewed corpus and end-to-end matched-introduction tests rather than the entire route seed. Canary release new templates, monitor errors and provide rollback. Verify DNS/TLS, preferred hostname, redirects, emails, payment callbacks, approved external destinations, robots, sitemaps, monitoring and restore runbooks. The owner approves actual data region, policies, branding and merchant integrations before production.

---

# 6. Editorial brief formation and publishing operations

## 6.1 The complete brief structure

Every content item uses these fields: stable ID; intended route; page template; locale; primary question; audience stage; geographic role; related entities; primary query cluster; alternative spellings; measured-demand source or `not measured`; existing page overlap; unique value; scope exclusions; evidence requirements; facts and claims; proposed headings; tables/examples; image rights; related directory module; internal links; external evidence links; commercial link choice; author/reviewer; review date; acceptance gate; update triggers and owner.

The route manifest gives each of 772 named English candidates a title/H1 brief, family, phase, intent, parent, required sections, publication gate, evidence brief, internal-link plan, commercial behavior and image policy. These are **briefs**, not 772 completed articles. Candidate countries and term variants are held until researched. The template registry supplies the page-specific component order and acceptance checks; the writer must enrich each brief with real facts.

## 6.2 Worked brief: origin country

**Candidate:** India origin guide. **Intent:** understand documented Indian agarwood context and distinguish origin from seller location. **Audience:** learners and sourcing buyers. **Required research:** accepted botanical references; documented country/region industry context; relevant official trade sources if regulatory claims are included; native terminology review; attributable merchant examples.

**Heading formation:** what the guide covers; Indian/Hindi terminology; documented regions and their different roles; material origin versus trading location; product and trade labels; grade and treatment claims; questions to ask about provenance; where to explore next. A region index links only reviewed regional pages. A supplier module offers two explicitly different pathways: physically based in India and handling India-origin material.

**Do not write without evidence:** countrywide aroma rules, exact species of any listed batch, nationwide current shipping/export permission, universal age, guaranteed authenticity or supplier counts. Al Mutalib product photographs can illustrate clearly named merchant selections, not prove forest origin. The reference competitor is a topic lead; primary research supports the resulting article.

## 6.3 Worked brief: Assam region

**Candidate route:** `/en/guides/origins/india/assam/`. **Distinct value:** region-specific context, documented local terms and actual relevant businesses, not a country page with names replaced. **Required sections:** place identity; connection to India; documented production/processing/trade roles; local terminology; evidence behind specific origin claims; sampling and comparison questions; related source/business guides.

Link to India, the relevant trade glossary, grade limitations, sample-to-bulk guidance and researched local directory results. If Hojai is discussed, distinguish a locality/business location from a blanket origin claim for all material sold there. Avoid exposing wild-tree coordinates or confidential suppliers. No photo is preferable to a generic photograph falsely labelled as an Assam forest.

## 6.4 Worked brief: Hindi Muri term

**Candidate route:** `/en/glossary/hindi-muri/`. **Purpose:** explain documented usage and how buyers should interpret a named selection. Collect exact English/Arabic spellings, named merchant examples, market of usage, photographs with known product association and reviewer comments. Mori and other spellings remain candidate aliases until checked.

Suggested sections: documented usage; what the name does not establish; issuer-specific selections such as Super labels; how physical form should be described; comparing real products and quantities; sample questions; related terms. Separate a general term from each seller's specific product or batch. Do not claim the term always has one shape, grade, botanical identity or exact region without support. Relevant commercial examples are attributed, not the entire definition.

## 6.5 Worked brief: wholesalers in Dubai

**Candidate route:** `/en/directory/wholesalers/in/united-arab-emirates/dubai/`. **Intent:** find businesses physically operating in Dubai, not every foreign supplier willing to ship there. **Required data:** reviewed location and wholesale role; relevant product families; source/verification date; public non-contact summary; contact entitlement; optional destination capability with scope.

Lead with searchable results and concise local context. Filters distinguish product origin and buyer destination. The page can link to Deira only after meaningful neighborhood-specific coverage exists. If the buyer actually wants suppliers delivering to Dubai, offer that separate search; do not merge the two lists without explanation. No fake branches and no Google Business Profile for each portal-covered city.

## 6.6 Worked brief: oud buyers in the United Kingdom

**Candidate:** buyer-country guide or destination directory, depending on primary intent. **Distinct purpose:** choosing locally based sellers versus overseas suppliers and understanding questions about the exact product class and delivery. **Required evidence:** real local coverage and owner-declared destination capabilities; current competent-authority sources for any legal guidance; dates and limitations.

Never imply a global Al Mutalib shipping promise from a UAE storefront. An approved retail link can be shown as a named shopping option with eligibility to confirm. The wholesale matching form asks destination and product class, then may hold the request for policy review. Exact customs obligations need item/jurisdiction review, not country-name boilerplate.

## 6.7 Worked brief: comparing supplier quotes

**Candidate route:** `/en/guides/sourcing/comparing-supplier-quotes/`. **Purpose:** a practical worksheet comparing what is actually quoted. Include a clearly hypothetical table with product identity, seller-defined grade, origin claim/evidence, treatment declaration, sample/batch relationship, net amount, currency, price basis, packaging, shipping inclusions, validity period and payment/returns terms. Never fabricate real supplier quotes or combine grams and millilitres as equivalent.

Offer the sample plan and quantity guide as internal links. The action is **Prepare a supplier requirement**. A commercial explanation says suppliers may pay for introductions, and the buyer controls the recipients. This page is useful even when a buyer never submits a form.

## 6.8 Content quality checklist

A reviewer should be able to answer: What user need is served? What is newly useful compared with existing portal pages? Which claims are established, seller-declared, opinion or uncertain? Do titles and counts match the body? Is an origin claim actually about a batch? Are monetary amounts dated and comparable? Are the sources appropriate? Are all cited links live? Do pictures show what captions claim? Does the page link to a real next step? Is the commercial relationship visible? Are translations and aliases accurate? Does the page remain helpful without a sales click?

Reject name-swapped location text, universal scent stereotypes, guaranteed testing shortcuts, fabricated expert biographies, fake original testing, copied competitor prose, misleading review stars, false counters and automatically generated product-region combinations. Do not convert a merchant's marketing comparison into an independent finding about competitors.

## 6.9 Refresh and retirement

Assign a responsible owner and trigger rather than a fake universal freshness date. Trigger review when a source is replaced, a claim changes, a business corrects data, a destination policy expires, a product/offer moves, an image license changes, a translation diverges or a user reports a meaningful error. Record what changed and why.

Merge overlapping terms/articles only after preserving meaning and redirects. A closed business can retain a clear historical profile when useful, but cannot continue to appear as an active buying match. Profiles with unresolved identity disputes are held or annotated, not sold as trusted. Deleted personal details are removed from public cache/index projections and downstream approved exports as applicable.

## 6.10 People, permissions and capacity

Recommended roles are product owner; editorial lead; oud-domain reviewer; native-language reviewer; directory researcher; verification/moderation operator; matching operator; lead sales partner administrator; engineer; finance; privacy/security reviewer. One person may hold multiple roles initially, but permissions remain separated. Paid affiliate sales staff should not secretly edit independent ranking outcomes or obtain all leads by admin access.

Plan research and publication in batches with observed completion rates. Do not schedule thousands of unique factual pages on the assumption that a template makes all factual research automatic. A released geography page needs actual local utility. A full world registry can exist from day one while public evidence grows progressively.

---

# 7. Page counts, rollout and definition of done

## 7.1 What the page numbers actually mean

The v3 route register contains **772 named English route candidates**. This includes public page candidates and private/noindex utilities. It does not mean 772 written articles, 772 indexable pages, or 772 pages suitable to publish now. Geography seeds and local directories require evidence before publication. The seven dynamic entity templates create additional routes only for genuine researched records.

The sizing model is:

**Potential English routes = 772 named candidates + B + L + R + F + M + E + V**, less candidates that are merged, abandoned or kept unpublished.

B = real business profiles; L = separately useful real branch pages; R = real brand references; F = actual fragrance/product reference pages; M = publishable actual material-batch records; E = documented professional person pages; V = real event pages. Do not use invented entities to reach a target. A French translation of an existing page is a locale version, not a new business or new subject.

**Indexable public URLs** are only the approved published subset of that model. **Translated URLs** are counted separately for the actual reviewed published locale set; they are not automatically the total multiplied by every language. Utility/account pages are never counted as SEO content. This distinction is built into the workbook.

## 7.2 Candidate families

The companion page-count register is the source of truth for exact family totals. Its major groups include 249 buyer country/territory candidates; 15 origin-country candidates; 41 origin-region candidates; 83 editorial-guide candidates; 12 editorial hubs; 32 trade-term candidates; 24 product-family candidates; 24 business categories; 72 physically-located country directories; 64 physically-located city directories; 16 neighborhood directories; 36 wholesale destination directories; 36 destination buying guides; 15 origin-handling directories; six origin comparisons; and supporting indexes, policy, account and inquiry routes.

Countries/territories not in the initial 36 destination-market shortlist remain in the world seed. The architecture supports expansion worldwide without fabricating local seller evidence. Retail destination filtering is required from the initial data model; standalone retail-serving landing pages are added only after reviewed capability data and distinct local utility exist. The named seed is a first planning portfolio, not an assertion that it enumerates all future combinations.

## 7.3 Release sequence

**Foundation release:** approve legal operator, neutral-matching copy, contact visibility versus verification rules, billing cadence, image rights process, partner/data-sharing terms and first market/channel policies. Implement the database, permissions, publishing pipeline, lead grants and source registry. The output is a working platform in staging with synthetic fixtures, not thousands of published pages.

**Representative public release:** publish a coherent reviewed learning corpus, real origin/destination examples, useful business profiles, the free correction/claim process and working retail referrals. Each visitor journey should work end to end. Public no-results states explain coverage. The supplier form may accept inquiries only in legally reviewed operational scope; unapproved data release remains held.

**Paid-directory release:** activate subscription checkout only after feature entitlement, owner proof, cancellation/refund terms, tax handling and webhook reconciliation pass tests. A business must see the actual public contact capability it is buying.

**Partner-introduction release:** enable approved suppliers to review safe briefs, buyer recipient approval, commercial reservations, controlled release and misuse/refund workflows. Manual matching is the recommended starting point. No unrestricted lead export or opaque automatic affiliate routing.

**Global expansion:** add researched markets, regions and terms; reviewed translations; more real businesses and products; additional channels only when policy/operational support exists. Use observed lead quality, user search failures and content gaps to prioritize, not arbitrary page targets.

## 7.4 Required teams and deliverable boundaries

Engineering owns data boundaries, rendering, search, security, APIs, billing integration and reliability. Editorial owns factual research, sources, unique article content, translations and cross-page consistency. Directory operations own business research, corrections and claims. Matching operations own qualification, supplier capability checks and buyer introductions. Legal/privacy and finance approve applicable rules and terms. The product owner approves brand, commercial rules, scope and cost decisions.

The handoff supplies an audit, route/content brief portfolio, proposed link graph, page templates, lead workflow, field registry, source/media examples, core schema, API reference, acceptance register and a tested pure permission helper. It does **not** supply a deployed portal, a verified global business database, production-ready legal terms, complete original prose for every candidate page, original-resolution image downloads, real keyword metrics or completed end-to-end app tests.

Those boundaries are intentional. A developer should not replace unresolved operational facts with plausible guesses. The decision register assigns each such question to an owner and an appropriate release gate.

## 7.5 Definition of done

A release is ready only when: the relevant decisions are approved; the intended pages have real reviewed content; routes and metadata agree; internal links resolve to published useful content; search and geography behave correctly; disabled contacts are absent from every public projection; lead recipients match buyer approvals; payment events cannot bypass permission; media is authorized and accurately labelled; private data is protected; relevant jurisdiction/channel gates exist; accessibility and RTL are tested; monitored email/payment/dispatch work; backups restore; and a rollback has been rehearsed.

The 110 acceptance tests are a pre-launch checklist, all marked **NOT RUN** against a portal because no portal was built in this task. Eighteen unit tests were executed for the included pure release-policy helper and passed. That is a narrow code check, not certification of app security or legal compliance.

## 7.6 Immediate build handoff

Read this playbook, import the CSV/JSON planning registers into the team's project system, review the 20 decision items and finalize the contracts. Start with one origin, one buyer destination, one useful business profile and one permission-controlled inquiry to demonstrate all relationships. Expand after that vertical slice works; do not front-load thousands of generated pages around an untested lead and entitlement system.

---

# 8. Page-template build cards

These 45 formation cards complement the route manifest. Components are ordered intentionally. The full register also includes external-link classification and content-length policies. A route with no reviewed content is not automatically publishable.

## T01 · Home

**Candidate count / generation:** 1

**Page formation:** Purpose + search; learning/retail/wholesale paths; product families; origins; buyer markets; reviewed guides; directory; matching explanation; disclosures

**Publication gate:** Published navigation, helpful records, no fake counters

**Metadata and schema:** Home / Organization; no fabricated ratings

**Internal links:** Parent and useful related entities; form utility links only for tasks

**External links:** Primary sources where relevant; paid/owned commercial links clearly classified

**Content length:** Fit the user purpose; no automatic SEO word minimum

**Implementation note:** Specification only; reviewed facts required

## T02 · Guide index

**Candidate count / generation:** 1

**Page formation:** Scope; 12 hubs; starter pathways; searchable guide list; evidence policy; contextual directory action

**Publication gate:** Only published children; grouped/paginated index

**Metadata and schema:** CollectionPage + BreadcrumbList

**Internal links:** Parent and useful related entities; form utility links only for tasks

**External links:** Primary sources where relevant; paid/owned commercial links clearly classified

**Content length:** Fit the user purpose; no automatic SEO word minimum

**Implementation note:** Specification only; reviewed facts required

## T03 · Directory root

**Candidate count / generation:** 1

**Page formation:** Role/product search; seller location; material origin; destination; readable results; coverage gaps; how matching works

**Publication gate:** SSR cards, independent selectors, accurate counts

**Metadata and schema:** CollectionPage; ItemList semantics only as appropriate

**Internal links:** Parent and useful related entities; form utility links only for tasks

**External links:** Primary sources where relevant; paid/owned commercial links clearly classified

**Content length:** Fit the user purpose; no automatic SEO word minimum

**Implementation note:** Specification only; reviewed facts required

## T04 · World index

**Candidate count / generation:** 1

**Page formation:** Country search; region grouping; country/territory labels; coverage status; buying versus origin explanation

**Publication gate:** Reviewed labels; not every country a producer

**Metadata and schema:** CollectionPage + BreadcrumbList

**Internal links:** Parent and useful related entities; form utility links only for tasks

**External links:** Primary sources where relevant; paid/owned commercial links clearly classified

**Content length:** Fit the user purpose; no automatic SEO word minimum

**Implementation note:** Specification only; reviewed facts required

## T05 · Product index

**Candidate count / generation:** 1

**Page formation:** Format definitions; grouped product families; distinction from fragrance notes; directory and learning paths

**Publication gate:** No automatic note-to-ingredient inference

**Metadata and schema:** CollectionPage

**Internal links:** Parent and useful related entities; form utility links only for tasks

**External links:** Primary sources where relevant; paid/owned commercial links clearly classified

**Content length:** Fit the user purpose; no automatic SEO word minimum

**Implementation note:** Specification only; reviewed facts required

## T06 · Glossary index

**Candidate count / generation:** 1

**Page formation:** Term search; alphabet/native labels; alias status; ambiguity guidance; reviewed entries

**Publication gate:** No one URL for every unverified misspelling

**Metadata and schema:** CollectionPage

**Internal links:** Parent and useful related entities; form utility links only for tasks

**External links:** Primary sources where relevant; paid/owned commercial links clearly classified

**Content length:** Fit the user purpose; no automatic SEO word minimum

**Implementation note:** Specification only; reviewed facts required

## T07 · Brand index

**Candidate count / generation:** 1

**Page formation:** Brand search; country role; actual documented brands; owner/manufacturer distinction

**Publication gate:** No empty invented brands

**Metadata and schema:** CollectionPage

**Internal links:** Parent and useful related entities; form utility links only for tasks

**External links:** Primary sources where relevant; paid/owned commercial links clearly classified

**Content length:** Fit the user purpose; no automatic SEO word minimum

**Implementation note:** Specification only; reviewed facts required

## T08 · Public policy

**Candidate count / generation:** 9

**Page formation:** Policy purpose; operator; scope; definitions; actions; responsible team; version/date; help

**Publication gate:** Actual approved operating policy; no placeholders public

**Metadata and schema:** WebPage

**Internal links:** Parent and useful related entities; form utility links only for tasks

**External links:** Primary sources where relevant; paid/owned commercial links clearly classified

**Content length:** Fit the user purpose; no automatic SEO word minimum

**Implementation note:** Specification only; reviewed facts required

## T09 · Contact form

**Candidate count / generation:** 1

**Page formation:** Purpose; short relevant fields; permission/notice; validation; safe acknowledgement; support

**Publication gate:** Noindex, spam controls, correct recipient and no PII leaks

**Metadata and schema:** No public structured data

**Internal links:** Parent and useful related entities; form utility links only for tasks

**External links:** Primary sources where relevant; paid/owned commercial links clearly classified

**Content length:** Fit the user purpose; no automatic SEO word minimum

**Implementation note:** Specification only; reviewed facts required

## T10 · Correction form

**Candidate count / generation:** 1

**Page formation:** Purpose; short relevant fields; permission/notice; validation; safe acknowledgement; support

**Publication gate:** Noindex, spam controls, correct recipient and no PII leaks

**Metadata and schema:** No public structured data

**Internal links:** Parent and useful related entities; form utility links only for tasks

**External links:** Primary sources where relevant; paid/owned commercial links clearly classified

**Content length:** Fit the user purpose; no automatic SEO word minimum

**Implementation note:** Specification only; reviewed facts required

## T11 · Business intake

**Candidate count / generation:** 1

**Page formation:** Purpose; short relevant fields; permission/notice; validation; safe acknowledgement; support

**Publication gate:** Noindex, spam controls, correct recipient and no PII leaks

**Metadata and schema:** No public structured data

**Internal links:** Parent and useful related entities; form utility links only for tasks

**External links:** Primary sources where relevant; paid/owned commercial links clearly classified

**Content length:** Fit the user purpose; no automatic SEO word minimum

**Implementation note:** Specification only; reviewed facts required

## T12 · Claim flow

**Candidate count / generation:** 1

**Page formation:** Purpose; short relevant fields; permission/notice; validation; safe acknowledgement; support

**Publication gate:** Noindex, spam controls, correct recipient and no PII leaks

**Metadata and schema:** No public structured data

**Internal links:** Parent and useful related entities; form utility links only for tasks

**External links:** Primary sources where relevant; paid/owned commercial links clearly classified

**Content length:** Fit the user purpose; no automatic SEO word minimum

**Implementation note:** Specification only; reviewed facts required

## T13 · Membership

**Candidate count / generation:** 1

**Page formation:** Feature matrix; AED1200 annual assumption; who pays; no verification sale; terms; cancellation; checkout

**Publication gate:** Billing schedule and taxes approved; real features

**Metadata and schema:** Service/WebPage only as supported

**Internal links:** Parent and useful related entities; form utility links only for tasks

**External links:** Primary sources where relevant; paid/owned commercial links clearly classified

**Content length:** Fit the user purpose; no automatic SEO word minimum

**Implementation note:** Specification only; reviewed facts required

## T14 · Legal

**Candidate count / generation:** 4

**Page formation:** Actual operator/controller; relevant terms; rights; commercial/data practices; version; contact

**Publication gate:** Qualified jurisdiction review and product-owner approval

**Metadata and schema:** WebPage

**Internal links:** Parent and useful related entities; form utility links only for tasks

**External links:** Primary sources where relevant; paid/owned commercial links clearly classified

**Content length:** Fit the user purpose; no automatic SEO word minimum

**Implementation note:** Specification only; reviewed facts required

## T15 · RFQ

**Candidate count / generation:** 1

**Page formation:** OudGuide service notice; conditional steps; relevant fields; safe uploads; chosen channel; confirmation

**Publication gate:** Noindex; separate recipient approval before release

**Metadata and schema:** No commercial Product schema

**Internal links:** Parent and useful related entities; form utility links only for tasks

**External links:** Primary sources where relevant; paid/owned commercial links clearly classified

**Content length:** Fit the user purpose; no automatic SEO word minimum

**Implementation note:** Specification only; reviewed facts required

## T16 · Retail handoff

**Candidate count / generation:** 1

**Page formation:** Explain retail choice; named merchant; relevant destination; eligibility note; return-to-guide link

**Publication gate:** No auto-redirect; no implied global fulfillment

**Metadata and schema:** WebPage

**Internal links:** Parent and useful related entities; form utility links only for tasks

**External links:** Primary sources where relevant; paid/owned commercial links clearly classified

**Content length:** Fit the user purpose; no automatic SEO word minimum

**Implementation note:** Specification only; reviewed facts required

## T17 · Search

**Candidate count / generation:** 1

**Page formation:** Query; grouped meaningful results; filters; empty state; related guidance

**Publication gate:** Noindex; sanitize queries; no private data

**Metadata and schema:** No invented search rich-result entitlement

**Internal links:** Parent and useful related entities; form utility links only for tasks

**External links:** Primary sources where relevant; paid/owned commercial links clearly classified

**Content length:** Fit the user purpose; no automatic SEO word minimum

**Implementation note:** Specification only; reviewed facts required

## T18 · Comparison utility

**Candidate count / generation:** 1

**Page formation:** User shortlist; comparable fields; unknowns; sources; next actions

**Publication gate:** Noindex unless a separate reviewed static comparison

**Metadata and schema:** No fabricated Product/AggregateRating

**Internal links:** Parent and useful related entities; form utility links only for tasks

**External links:** Primary sources where relevant; paid/owned commercial links clearly classified

**Content length:** Fit the user purpose; no automatic SEO word minimum

**Implementation note:** Specification only; reviewed facts required

## T19 · Editorial hub

**Candidate count / generation:** 12

**Page formation:** Scope; beginner order; grouped children; definitions; related hubs; relevant businesses; sources

**Publication gate:** Useful hierarchy, not repeated home page

**Metadata and schema:** CollectionPage + BreadcrumbList

**Internal links:** Parent and useful related entities; form utility links only for tasks

**External links:** Primary sources where relevant; paid/owned commercial links clearly classified

**Content length:** Fit the user purpose; no automatic SEO word minimum

**Implementation note:** Specification only; reviewed facts required

## T20 · Editorial guide

**Candidate count / generation:** 83

**Page formation:** Answer; scope; author/reviewer; TOC; evidence sections; table/checklist; limitations; sources; related reading; appropriate action

**Publication gate:** Original question-specific value; claim review

**Metadata and schema:** Article + BreadcrumbList when suitable

**Internal links:** Parent and useful related entities; form utility links only for tasks

**External links:** Primary sources where relevant; paid/owned commercial links clearly classified

**Content length:** Fit the user purpose; no automatic SEO word minimum

**Implementation note:** Specification only; reviewed facts required

## T21 · Origin country

**Candidate count / generation:** 15

**Page formation:** Country identity; documented role; terminology; regions; material versus seller location; claims; source-based trade context; relevant sellers

**Publication gate:** Country role evidence; no nationwide product guarantee

**Metadata and schema:** Article / CollectionPage + BreadcrumbList

**Internal links:** Parent and useful related entities; form utility links only for tasks

**External links:** Primary sources where relevant; paid/owned commercial links clearly classified

**Content length:** Fit the user purpose; no automatic SEO word minimum

**Implementation note:** Specification only; reviewed facts required

## T22 · Origin region

**Candidate count / generation:** 41

**Page formation:** Place identity; relation to country; unique regional evidence; terms; local roles; source claims; actual businesses; sources

**Publication gate:** Region-specific information; not renamed country prose

**Metadata and schema:** Article + BreadcrumbList

**Internal links:** Parent and useful related entities; form utility links only for tasks

**External links:** Primary sources where relevant; paid/owned commercial links clearly classified

**Content length:** Fit the user purpose; no automatic SEO word minimum

**Implementation note:** Specification only; reviewed facts required

## T23 · Buyer country / territory

**Candidate count / generation:** 249

**Page formation:** Place identity; local versus overseas options; directory coverage; product choices; language; dated buyer resources; gaps

**Publication gate:** Actual local/buyer utility; otherwise keep seed unpublished

**Metadata and schema:** CollectionPage + BreadcrumbList

**Internal links:** Parent and useful related entities; form utility links only for tasks

**External links:** Primary sources where relevant; paid/owned commercial links clearly classified

**Content length:** Fit the user purpose; no automatic SEO word minimum

**Implementation note:** Specification only; reviewed facts required

## T24 · Located-in country directory

**Candidate count / generation:** 72

**Page formation:** Location definition; role results; product/origin/destination filters; cities; local context; corrections; sources

**Publication gate:** Actual physical business records

**Metadata and schema:** CollectionPage / ItemList + BreadcrumbList

**Internal links:** Parent and useful related entities; form utility links only for tasks

**External links:** Primary sources where relevant; paid/owned commercial links clearly classified

**Content length:** Fit the user purpose; no automatic SEO word minimum

**Implementation note:** Specification only; reviewed facts required

## T25 · Destination directory

**Candidate count / generation:** 36

**Page formation:** Who serves destination; product-class limits; current capability evidence; shipping origin; buyer guide; RFQ

**Publication gate:** Service capability dated and scoped; not inferred from office

**Metadata and schema:** CollectionPage + BreadcrumbList

**Internal links:** Parent and useful related entities; form utility links only for tasks

**External links:** Primary sources where relevant; paid/owned commercial links clearly classified

**Content length:** Fit the user purpose; no automatic SEO word minimum

**Implementation note:** Specification only; reviewed facts required

## T26 · Destination buying guide

**Candidate count / generation:** 36

**Page formation:** Destination scope; product class; local/overseas choice; documentation questions; sources/date; sellers; sampling

**Publication gate:** Jurisdiction review for legal claims; no universal shipping

**Metadata and schema:** Article + BreadcrumbList

**Internal links:** Parent and useful related entities; form utility links only for tasks

**External links:** Primary sources where relevant; paid/owned commercial links clearly classified

**Content length:** Fit the user purpose; no automatic SEO word minimum

**Implementation note:** Specification only; reviewed facts required

## T27 · Origin-handling directory

**Candidate count / generation:** 15

**Page formation:** Meaning of origin claim; suppliers regardless of office location; sources/status; product filters; destination; origin guide

**Publication gate:** Attributable seller/material relationships

**Metadata and schema:** CollectionPage + BreadcrumbList

**Internal links:** Parent and useful related entities; form utility links only for tasks

**External links:** Primary sources where relevant; paid/owned commercial links clearly classified

**Content length:** Fit the user purpose; no automatic SEO word minimum

**Implementation note:** Specification only; reviewed facts required

## T28 · Located-in city directory

**Candidate count / generation:** 64

**Page formation:** City scope; local results; relevant neighborhoods; distinct destination search; local buying notes; corrections

**Publication gate:** Physical locations, no fabricated branches

**Metadata and schema:** CollectionPage / ItemList + BreadcrumbList

**Internal links:** Parent and useful related entities; form utility links only for tasks

**External links:** Primary sources where relevant; paid/owned commercial links clearly classified

**Content length:** Fit the user purpose; no automatic SEO word minimum

**Implementation note:** Specification only; reviewed facts required

## T29 · Neighborhood directory

**Candidate count / generation:** 16

**Page formation:** Neighborhood identity; meaningful nearby results; parent city; access context; broader search option

**Publication gate:** Distinct neighborhood utility, not keyword-only URL

**Metadata and schema:** CollectionPage + BreadcrumbList

**Internal links:** Parent and useful related entities; form utility links only for tasks

**External links:** Primary sources where relevant; paid/owned commercial links clearly classified

**Content length:** Fit the user purpose; no automatic SEO word minimum

**Implementation note:** Specification only; reviewed facts required

## T30 · Business category

**Candidate count / generation:** 24

**Page formation:** Role definition; businesses; product/location filters; adjacent roles; useful knowledge; submission

**Publication gate:** Actual relevant businesses; sponsorship separate

**Metadata and schema:** CollectionPage + BreadcrumbList

**Internal links:** Parent and useful related entities; form utility links only for tasks

**External links:** Primary sources where relevant; paid/owned commercial links clearly classified

**Content length:** Fit the user purpose; no automatic SEO word minimum

**Implementation note:** Specification only; reviewed facts required

## T31 · Product family

**Candidate count / generation:** 24

**Page formation:** Format definition; not-the-same-as; fields to compare; uses; related materials; actual references; sellers; guides

**Publication gate:** No invented composition or unsafe usage instructions

**Metadata and schema:** CollectionPage / Article, not fake Product offer

**Internal links:** Parent and useful related entities; form utility links only for tasks

**External links:** Primary sources where relevant; paid/owned commercial links clearly classified

**Content length:** Fit the user purpose; no automatic SEO word minimum

**Implementation note:** Specification only; reviewed facts required

## T32 · Trade terminology

**Candidate count / generation:** 32

**Page formation:** Exact spelling; language/market; documented usage; alternative meanings; issuer scope; examples; unknowns; related terms

**Publication gate:** Qualified terminology review; aliases not automatic synonyms

**Metadata and schema:** Article / DefinedTerm semantics where valid

**Internal links:** Parent and useful related entities; form utility links only for tasks

**External links:** Primary sources where relevant; paid/owned commercial links clearly classified

**Content length:** Fit the user purpose; no automatic SEO word minimum

**Implementation note:** Specification only; reviewed facts required

## T33 · Origin comparison

**Candidate count / generation:** 6

**Page formation:** Comparison scope; sourced facts side by side; overlaps; uncertainty; comparing real samples; next steps

**Publication gate:** Distinct need and actual evidence; no scent hierarchy

**Metadata and schema:** Article + BreadcrumbList

**Internal links:** Parent and useful related entities; form utility links only for tasks

**External links:** Primary sources where relevant; paid/owned commercial links clearly classified

**Content length:** Fit the user purpose; no automatic SEO word minimum

**Implementation note:** Specification only; reviewed facts required

## T34 · Private/utility

**Candidate count / generation:** 14

**Page formation:** Authenticated purpose; relevant state; safe actions; errors; support; audit

**Publication gate:** Authorization + no-store + noindex; tenant isolation

**Metadata and schema:** No public structured data

**Internal links:** Parent and useful related entities; form utility links only for tasks

**External links:** Primary sources where relevant; paid/owned commercial links clearly classified

**Content length:** Fit the user purpose; no automatic SEO word minimum

**Implementation note:** Specification only; reviewed facts required

## T35 · Partner programme

**Candidate count / generation:** 1

**Page formation:** Matching role; fees; eligibility; redacted opportunities; recipient permission; limits; apply

**Publication gate:** No promised lead volume or sales guarantee

**Metadata and schema:** WebPage

**Internal links:** Parent and useful related entities; form utility links only for tasks

**External links:** Primary sources where relevant; paid/owned commercial links clearly classified

**Content length:** Fit the user purpose; no automatic SEO word minimum

**Implementation note:** Specification only; reviewed facts required

## T36 · Partner intake

**Candidate count / generation:** 1

**Page formation:** Purpose; short relevant fields; permission/notice; validation; safe acknowledgement; support

**Publication gate:** Noindex, spam controls, correct recipient and no PII leaks

**Metadata and schema:** No public structured data

**Internal links:** Parent and useful related entities; form utility links only for tasks

**External links:** Primary sources where relevant; paid/owned commercial links clearly classified

**Content length:** Fit the user purpose; no automatic SEO word minimum

**Implementation note:** Specification only; reviewed facts required

## T37 · Consent utility

**Candidate count / generation:** 1

**Page formation:** Request identity; actual supplier identities; affiliation; field/channel scope; approvals; refusal; withdrawal

**Publication gate:** Buyer authorization; current grant; no payment override

**Metadata and schema:** No public structured data

**Internal links:** Parent and useful related entities; form utility links only for tasks

**External links:** Primary sources where relevant; paid/owned commercial links clearly classified

**Content length:** Fit the user purpose; no automatic SEO word minimum

**Implementation note:** Specification only; reviewed facts required

## T38 · Privacy utility

**Candidate count / generation:** 1

**Page formation:** Identity verification; requested right; scope; acknowledgement; state; escalation

**Publication gate:** Jurisdiction workflow; no public identifiers

**Metadata and schema:** No public structured data

**Internal links:** Parent and useful related entities; form utility links only for tasks

**External links:** Primary sources where relevant; paid/owned commercial links clearly classified

**Content length:** Fit the user purpose; no automatic SEO word minimum

**Implementation note:** Specification only; reviewed facts required

## D01 · Business profile

**Candidate count / generation:** Variable B

**Page formation:** name; roles; places; attributed claims; contact eligibility; how inquiry works; corrections

**Publication gate:** One independently researched organization; repeat by branches only when meaningful

**Metadata and schema:** Accurate type matched to visible content and current feature eligibility

**Internal links:** Organization/place/role/guide relations; no fake associations

**External links:** Entitlement-aware business contact; ordinary primary evidence remains allowed

**Content length:** Fit purpose; no filler

**Implementation note:** Dynamic entity template; no fabricated seeded entities

## D02 · Branch

**Candidate count / generation:** Variable L

**Page formation:** checked location; opening hours where current; access; parent; verified media or no image

**Publication gate:** Real independently useful physical branch; otherwise section on main profile

**Metadata and schema:** Accurate type matched to visible content and current feature eligibility

**Internal links:** Organization/place/role/guide relations; no fake associations

**External links:** Entitlement-aware business contact; ordinary primary evidence remains allowed

**Content length:** Fit purpose; no filler

**Implementation note:** Dynamic entity template; no fabricated seeded entities

## D03 · Brand

**Candidate count / generation:** Variable R

**Page formation:** identity; documented credits; formats; related references; current sources

**Publication gate:** Distinct brand; ownership and brand/organization relationships

**Metadata and schema:** Accurate type matched to visible content and current feature eligibility

**Internal links:** Organization/place/role/guide relations; no fake associations

**External links:** Entitlement-aware business contact; ordinary primary evidence remains allowed

**Content length:** Fit purpose; no filler

**Implementation note:** Dynamic entity template; no fabricated seeded entities

## D04 · Fragrance reference

**Candidate count / generation:** Variable F

**Page formation:** declared notes; composition evidence separately; release/credits sources; variants; seller offers

**Publication gate:** Identifiable actual released product, not imagined variants

**Metadata and schema:** Accurate type matched to visible content and current feature eligibility

**Internal links:** Organization/place/role/guide relations; no fake associations

**External links:** Entitlement-aware business contact; ordinary primary evidence remains allowed

**Content length:** Fit purpose; no filler

**Implementation note:** Dynamic entity template; no fabricated seeded entities

## D05 · Material batch

**Candidate count / generation:** Variable M

**Page formation:** seller; batch; claim status; grade issuer; quantity; photos; offers; evidence dates

**Publication gate:** Public, sufficiently evidenced batch; no private stock leakage

**Metadata and schema:** Accurate type matched to visible content and current feature eligibility

**Internal links:** Organization/place/role/guide relations; no fake associations

**External links:** Entitlement-aware business contact; ordinary primary evidence remains allowed

**Content length:** Fit purpose; no filler

**Implementation note:** Dynamic entity template; no fabricated seeded entities

## D06 · Expert/person

**Candidate count / generation:** Variable E

**Page formation:** roles; publications; credits; editorial disclosures

**Publication gate:** Consenting/public professional identity, relevant work documented

**Metadata and schema:** Accurate type matched to visible content and current feature eligibility

**Internal links:** Organization/place/role/guide relations; no fake associations

**External links:** Entitlement-aware business contact; ordinary primary evidence remains allowed

**Content length:** Fit purpose; no filler

**Implementation note:** Dynamic entity template; no fabricated seeded entities

## D07 · Event

**Candidate count / generation:** Variable V

**Page formation:** date; location; status; official booking source; no invented events

**Publication gate:** Real event; dates and organizers checked

**Metadata and schema:** Accurate type matched to visible content and current feature eligibility

**Internal links:** Organization/place/role/guide relations; no fake associations

**External links:** Entitlement-aware business contact; ordinary primary evidence remains allowed

**Content length:** Fit purpose; no filler

**Implementation note:** Dynamic entity template; no fabricated seeded entities

# 9. Sources and evidence register

Source IDs in the text point to the following primary references and owned merchant pages. Merchant material substantiates what a merchant publishes, not independent proof of all origin, age or quality claims. Row-level competitor evidence is separately available in the Reference Audit workbook sheet and `data/competitor_page_audit.csv`. Retrieval limits and later errors are retained rather than concealed.

<a id="source-g01"></a>

### G01 · Google spam policies

Doorway, scaled content, paid link and affiliation rules.

Source: [https://developers.google.com/search/docs/essentials/spam-policies](https://developers.google.com/search/docs/essentials/spam-policies)

Checked: 2026-10-19. Status: Public source retrieved.

<a id="source-g02"></a>

### G02 · Google crawlable link guidance

Crawlable anchors and descriptive link text.

Source: [https://developers.google.com/search/docs/crawling-indexing/links-crawlable](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)

Checked: 2026-10-19. Status: Public source retrieved.

<a id="source-g03"></a>

### G03 · Google facet crawling

Control unbounded query combinations.

Source: [https://developers.google.com/crawling/docs/faceted-navigation](https://developers.google.com/crawling/docs/faceted-navigation)

Checked: 2026-10-19. Status: Public source retrieved.

<a id="source-g04"></a>

### G04 · Google outbound link qualification

Sponsored and user-generated links.

Source: [https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links)

Checked: 2026-10-19. Status: Public source retrieved.

<a id="source-g05"></a>

### G05 · Google AI features

Normal SEO eligibility; no special AI schema guarantee.

Source: [https://developers.google.com/search/docs/appearance/ai-features](https://developers.google.com/search/docs/appearance/ai-features)

Checked: 2026-10-19. Status: Public source retrieved.

<a id="source-g06"></a>

### G06 · Google image guidance

Useful images, metadata and discovery.

Source: [https://developers.google.com/search/docs/appearance/google-images](https://developers.google.com/search/docs/appearance/google-images)

Checked: 2026-10-19. Status: Public source retrieved.

<a id="source-g07"></a>

### G07 · Google structured data policies

Visible accurate content and feature-specific eligibility.

Source: [https://developers.google.com/search/docs/appearance/structured-data/sd-policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)

Checked: 2026-10-19. Status: Public source retrieved.

<a id="source-g08"></a>

### G08 · Google localized versions

Reciprocal language variants.

Source: [https://developers.google.com/search/docs/specialty/international/localized-versions](https://developers.google.com/search/docs/specialty/international/localized-versions)

Checked: 2026-10-19. Status: Public source retrieved.

<a id="source-g09"></a>

### G09 · Google sitemap guidance

Canonical URL submission and accurate modification timestamps.

Source: [https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)

Checked: 2026-10-19. Status: Public source retrieved.

<a id="source-g10"></a>

### G10 · Google Core Web Vitals

Field experience metrics, not ranking guarantees.

Source: [https://developers.google.com/search/docs/appearance/core-web-vitals](https://developers.google.com/search/docs/appearance/core-web-vitals)

Checked: 2026-10-19. Status: Public source retrieved.

<a id="source-g11"></a>

### G11 · Google updates / FAQ retirement

FAQ rich results removed from 7 May 2026; current doc change log.

Source: [https://developers.google.com/search/updates](https://developers.google.com/search/updates)

Checked: 2026-10-19. Status: Public source retrieved.

<a id="source-o01"></a>

### O01 · OpenAI crawler documentation

OAI-SearchBot vs GPTBot controls.

Source: [https://developers.openai.com/api/docs/bots](https://developers.openai.com/api/docs/bots)

Checked: 2026-10-19. Status: Public source retrieved.

<a id="source-w01"></a>

### W01 · W3C WCAG 2.2

Accessibility conformance target.

Source: [https://www.w3.org/TR/WCAG22/](https://www.w3.org/TR/WCAG22/)

Checked: 2026-10-19. Status: Public source retrieved.

<a id="source-s01"></a>

### S01 · OWASP file upload guidance

Allowlisting, quarantine and safe storage.

Source: [https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html](https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html)

Checked: 2026-10-19. Status: Public source retrieved.

<a id="source-s02"></a>

### S02 · Stripe webhook documentation

Illustrative provider integration: verify signature and handle duplicates.

Source: [https://docs.stripe.com/webhooks](https://docs.stripe.com/webhooks)

Checked: 2026-10-19. Status: Public source retrieved.

<a id="source-t01"></a>

### T01 · Next.js metadata documentation

Illustrative rendering stack, not selected deployment account.

Source: [https://nextjs.org/docs/app/getting-started/metadata-and-og-images](https://nextjs.org/docs/app/getting-started/metadata-and-og-images)

Checked: 2026-10-19. Status: Public source retrieved.

<a id="source-m01"></a>

### M01 · Al Mutalib wholesale reference

Merchant vocabulary and commercial reference; claims need separate evidence.

Source: [https://almutalib.com/](https://almutalib.com/)

Checked: 2026-10-19. Status: Earlier retrieval recorded; repeated later fetch timed out. Recheck before configuring images or deep links..

<a id="source-m02"></a>

### M02 · Al Mutalib UAE reference

Retail reference and image source, not global fulfillment proof.

Source: [https://ae.almutalib.com/](https://ae.almutalib.com/)

Checked: 2026-10-19. Status: Public source retrieved.

<a id="source-m03"></a>

### M03 · Al Mutalib wood collection

Verified retail collection destination.

Source: [https://ae.almutalib.com/collections/oud](https://ae.almutalib.com/collections/oud)

Checked: 2026-10-19. Status: Public source retrieved.

<a id="source-m04"></a>

### M04 · Al Mutalib oil collection

Verified retail oil destination.

Source: [https://ae.almutalib.com/collections/dehnal-oudh](https://ae.almutalib.com/collections/dehnal-oudh)

Checked: 2026-10-19. Status: Public source retrieved.

<a id="source-m05"></a>

### M05 · Zura Yaumi product

Observed merchant pack labels and product image sources; no independent origin certification.

Source: [https://ae.almutalib.com/products/zura-yaumi](https://ae.almutalib.com/products/zura-yaumi)

Checked: 2026-10-19. Status: Public source retrieved.

<a id="source-p01"></a>

### P01 · ICO data-broker guidance

UK-specific transparency, lawful basis and due diligence; review notice on guidance; not worldwide approval.

Source: [https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/organisations-using-marketing-services-of-data-brokers/](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/organisations-using-marketing-services-of-data-brokers/)

Checked: 2026-10-19. Status: Public source retrieved.

<a id="source-p02"></a>

### P02 · ICO electronic marketing rules

Named third-party consent where applicable; solicited quote response versus ongoing marketing; not one worldwide rule.

Source: [https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-direct-marketing-using-electronic-mail/how-do-we-comply-with-the-pecr-electronic-mail-marketing-rules/](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-direct-marketing-using-electronic-mail/how-do-we-comply-with-the-pecr-electronic-mail-marketing-rules/)

Checked: 2026-10-19. Status: Public source retrieved.

<a id="source-m06"></a>

### M06 · Al Mutalib observed wood photo

Observed Zura Yaumi photo; no visual certification of origin, age, treatment or grade.

Source: [https://ae.almutalib.com/cdn/shop/files/o31.jpg?v=1772876614&width=800](https://ae.almutalib.com/cdn/shop/files/o31.jpg?v=1772876614&width=800)

Checked: 2026-10-19. Status: Public source retrieved.

<a id="source-m07"></a>

### M07 · Al Mutalib observed packaging photo

Packaging image; supplier-photo policy, not another business photo.

Source: [https://ae.almutalib.com/cdn/shop/files/Burgundy_Al_Mutalib_Oud_Box.png?v=1792012648&width=800](https://ae.almutalib.com/cdn/shop/files/Burgundy_Al_Mutalib_Oud_Box.png?v=1792012648&width=800)

Checked: 2026-10-19. Status: Public source retrieved.


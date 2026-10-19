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

Target WCAG 2.2 AA: keyboard navigation, skip link, visible focus, contrast, accessible dialogs, descriptive labels, error summaries tied to fields, no color-only statuses, captions/alt where appropriate and no compulsory drag gestures. A map is never the only means of finding a business. [W01]

## 2.8 Locale and URL rules

Use stable entity IDs and localized slugs. English and Arabic descriptions are translations of one entity, not independent duplicates. Use `/en/` and `/ar/` prefixes; root can be an accessible language/entry page with `x-default` or an agreed single consistent redirect. Do not force redirects based solely on IP. User preferences may suggest a language without trapping visitors.

Use lowercase hyphenated routes, a consistent trailing-slash policy and one canonical hostname. Keep redirects for slug changes. Preserve semantic parents for breadcrumbs even where a term has multiple related origins. Only equivalent reviewed translations participate in reciprocal hreflang; unreviewed automatic copies are not published merely to inflate counts. [G08]

The route manifest deliberately includes planning-only places and topics. A URL becomes public only through the publication gate. Country, region, product and grade combinations are represented by relationships and filters first, not an unbounded route Cartesian product.

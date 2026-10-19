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

The recommendation is to compete on precise geography, a reviewed terminology dictionary, useful non-contact profiles, evidence-aware claims, good samples/quotation workflows and reliable matching. A directory format or keyword-relevant domain does not itself confer a ranking advantage. Google's spam policies specifically distinguish useful resources from doorway pages and scaled content made primarily for ranking manipulation. [G01]

Success measures are useful searches, qualified inquiries, buyer-approved introductions, supplier response quality, returning visitors, stale-record reduction, editorial corrections, paid renewals and legitimate commerce referrals. Search impressions and indexed pages are useful diagnostics, not the sole goal.

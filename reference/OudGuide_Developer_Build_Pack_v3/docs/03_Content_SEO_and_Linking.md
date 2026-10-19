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

Meta descriptions should describe what the user actually gets. A basic profile with hidden contacts must not advertise `phone number, WhatsApp and website` in the snippet. A sourcing service must not promise to be the named seller whose profile the visitor was reading. An article must not use a merchant product as universal evidence. [G01, G07]

## 3.4 Internal linking model

Use five explicit relationships: parent/child; definition/explanation; comparison; geographically relevant discovery; and action/tool. Every public indexable page should have a discoverable parent or collection entry. Related links should provide an actual next step, not merely increase a count.

The supplied proposed graph contains structural edges and specific authored contextual examples. It is an implementation starting point, not a prescription to render every edge on one screen. Large country/category indexes are grouped and paginated. The navigation does not repeat all countries, terms or products in every footer.

For an origin country: link to documented regions, relevant terminology, botanical explanation, quality limitations, businesses handling that origin and a sourcing checklist. For a region: link to its origin country, relevant actual local businesses, process/term explanations and other related regions only where meaningful. For a destination guide: link to physically local sellers, sellers serving that destination, product-class guidance and the relevant request form. For a business: link back to roles and place, and to relevant guides, without asserting unverified affiliations or capabilities.

Suggested modules normally show a small shortlist rather than exhaustive crosslinks. Module limits such as three related businesses or four related guides are UI defaults, not ranking formulas. Organic related-business selection must not secretly prioritize Al Mutalib. Sponsored entries occupy an explicitly labelled module.

Use real `<a href>` links with concise descriptive text and accessible names. Do not link only through click handlers, empty hash fragments or inaccessible filter controls. Deep links include only safe public context IDs; no buyer names, phones or detailed quote budgets in URLs. Avoid repeated exact-match commercial anchors. [G02]

## 3.5 Link resolution and integrity

Store the target entity/page ID, relation type, source block ID and editorial reason. Resolve the current localized URL at render time. A target must be published and public before a normal editorial link is emitted. Links to noindex user utilities such as a form remain legitimate user actions; exclude them from XML sitemaps rather than pretending they are editorial pages.

A merge creates a permanent redirect to the real replacement when equivalent. A deletion without a replacement returns a proper 404 or 410 and updates inbound editorial references. Do not redirect every retired business or guide to a shop homepage. Test redirect loops, chains, broken fragments, language mislinks and backlinks to unpublished targets.

Publish gate checks: all intended indexable pages are reachable from a published index; no broken in-scope links; canonical and hreflang targets resolve; breadcrumbs form a coherent chain; title scope matches content; selected business count equals the visible dataset. Graph reachability is tested on the rendered published subset, not only on planning files.

## 3.6 External linking and the Al Mutalib relationship

There are four distinct external-link classes:

1. Primary evidence citations are ordinary editorial references. They remain available even if most merchant contacts are restricted.
2. Owned-business commercial referrals use clear brand identity and a relevant destination. Ordinary ownership does not automatically make every link paid, but a clearly commercial affiliate/sponsored placement should be qualified appropriately. Do not promise or sell ranking credit.
3. Paid directory website links are labelled commercial features and normally use `rel="sponsored"`; Google also accepts `nofollow` for paid links. [G04]
4. Untrusted public submissions use appropriate `ugc`/`nofollow` handling and moderation. Paid user content may need both `sponsored ugc`.

Use Al Mutalib wood and oil collection destinations where actually verified. Product-level links must use a live destination registry and can change when catalog entries move. Wholesale source/brand references can point to almutalib.com where directly relevant; the neutral request form need not leave OudGuide. A backlink is not needed in every paragraph, image or page. Do not hide owned-site links in CSS, insert them into every keyword occurrence, require reciprocal links from businesses or use a network of doorway domains. [G01]

The portal remains useful without clicking an Al Mutalib referral. Footer ownership disclosure identifies the actual operating relationship once the legal entity is approved. Commercial modules do not masquerade as independent research. A link to a third-party scientific source is not a prohibited free seller contact.

## 3.7 Images and assets from the two owned sites

Use original authorized bytes from the approved source library, not competitor assets. Record source page, exact source URL, copyright holder, permission scope, depicted subject, actual product/variant if known, master dimensions, checksum, approved crop/focal point, credit, rights expiry and permitted uses. Localize alternative text and captions independently.

For production, ingest approved originals into a controlled media store and generate responsive derivatives. Avoid relying indefinitely on third-party hotlinks. Do not enlarge 120-pixel thumbnails into hero images. Use modern formats where compatible, explicit dimensions and responsive `srcset`/`sizes`; prioritize the actual LCP image and lazy-load noncritical images. [G06]

All existing logos, wood shapes, packaging and product details remain accurate; no re-rendering, reshaping or unsupported enhancement. A photograph associated with an Al Mutalib product can illustrate that selection with attribution. It cannot illustrate an unrelated seller's inventory, a specific forest, a laboratory test or an authentic origin specimen unless the rights and identity support that use.

When the owned sites lack a suitable forest, region, distillery or third-party business photo, publish without that photograph or use an accessible typographic/data component. Do not fill the gap with a misleading generic product image. A paid business uploading new images would be an exception to the user's two-site image rule and therefore requires explicit product-owner approval before enabling that feature.

An Al Mutalib photo source may be credited contextually; image attribution is not a mechanism to force a sitewide SEO backlink. Do not copy identical merchant descriptions along with reused images. Portal editorial pages use self-canonicals for their original purpose; only truly duplicated content calls for a duplication decision.

## 3.8 Facets, indexing and sitemaps

Publish a curated allowlist of useful directory landing routes. Arbitrary combinations remain interactive filters. Decide each URL class explicitly: published indexable page; crawlable noindex utility; parameter alias canonicalized to a truly equivalent route; invalid filter returning a useful error; or private route with authorization. A robots disallow is not a substitute for `noindex` on a URL a crawler needs to fetch to see the instruction. [G03]

Do not canonicalize materially different pages to a generic parent merely to hide duplication. Use noindex where appropriate and remove useless crawlable permutations. Normalize parameter order and values. Deny infinite page numbers, unknown enumerations and malicious queries. Search results and buyer-specific quote pages are not indexable.

XML sitemap indexes separate editorial, directory profiles, geographic landing pages, product references and locales. Include only published canonical indexable URLs with accurate modification dates. Split before the official protocol limits and validate response format. Sitemap inclusion is not an indexing or ranking guarantee. [G09]

## 3.9 AEO and generative-engine discovery

AEO means answering useful questions clearly. GEO here means discovery in generative search, not local geography. Show direct explanations, source references, author/reviewer identity, dates where relevant, comparison tables and explicit uncertainty. Do not create one thin page per conversational rephrasing. The entity IDs and reviewed relationships help make the site understandable without a special AI-only content layer.

Google documents that normal SEO fundamentals apply to its AI features and that no special AI schema or mandatory AI text file replaces them. OpenAI separates OAI-SearchBot search discovery from GPTBot training controls; configure those decisions independently and test CDN/firewall access. Neither crawler access nor schema guarantees citation. [G05, O01]

As of the checked Google documentation, FAQ rich results were removed beginning 7 May 2026. Keep useful Q&A content but do not sell FAQ schema as a rich-result growth feature. Confirm the current feature documentation at implementation. [G11]

Use Organization and appropriate Article, BreadcrumbList, LocalBusiness, Product or Event structures only where the actual page meets their semantics and current feature rules. A directory listing is not a product for sale by OudGuide. Do not emit hidden contacts, invented aggregate reviews, product offers without evidence or misleading prices. [G07]

## 3.10 Measurement and revision

Track intent-level traffic and conversions without buyer PII. Events include directory search, filter changed, profile viewed, evidence expanded, retail referral, RFQ started/submitted, channel verified, recipient approved, introduction delivered, supplier replied, withdrawal, membership checkout and renewal. Commercial CTR should be read alongside fulfilled user needs, not used to force every page into a shop exit.

Search Console and rank/keyword tools must be connected separately for genuine demand and indexing measurements. No search volumes or difficulty scores in this pack are fabricated. Prioritize queries using measured demand when available, actual inventory/capability, evidence readiness, buyer value and content distinctiveness. Refresh titles, links and pages when those inputs change, not on an arbitrary mass-rewrite schedule.

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

The UK ICO's data-broker guidance stresses transparency, lawful basis and recipient due diligence, and its electronic-mail guidance addresses bought-in lists and consent where required. These sources are jurisdiction-specific and must not be presented as worldwide clearance. [P01, P02]

Use separate purposes: OudGuide service processing; the selected supplier introduction; optional additional introductions; and optional ongoing marketing. Keep optional marketing unticked and revocable. Record notice text/version and approved suppliers, not merely the existence of a checkbox. Do not make unrelated marketing necessary to submit a quote request. Avoid public buyer profiles, public requests, open attachments and unrestricted exports.

Actual controller/business identity and commercial affiliations need disclosure in the appropriate places, with the named supplier decision visible before data release. A buyer should not learn only during an unexpected call that their details were sold to a different company. Partner contracts prohibit onward resale, require access controls, specify use limits and provide a misuse/removal mechanism. Processor versus controller roles require legal assessment; common ownership is not an automatic exemption.

Retention durations are configuration proposals pending legal review: short-lived drafts; time-limited active requests; periodic review of inactive leads; minimal suppression records; separate legally required billing retention. Do not hardcode indefinite retention or promise instant universal deletion. Every personal-data table has a retention classification and a deletion/hold workflow.

## 4.8 Membership implementation

Plan fields: currency AED; amount 120000 minor units per annual period for the proposed upfront model; public wording AED1,200/year (AED100/month equivalent); tax treatment not assumed; cancellation, renewal and refund wording approved before checkout. Supplier team seats, branch limits and included features must be explicit configuration, not hidden later charges.

Subscription states are pending, active, past_due, cancelled_at_period_end, expired, suspended and refunded as applicable. Source of truth is verified provider events plus reconciliation, not a `success` URL. Verify webhook signatures, deduplicate event IDs and cope with out-of-order delivery; invalid events cannot activate contacts. [S02]

Public contacts are recomputed after status changes, owner changes and moderation holds. Purge public CDN/search caches when entitlement expires. The profile itself remains useful and does not turn into a negative label. Emails asking a business to subscribe must not assert that an unclaimed profile means the business is fraudulent or unsafe.

## 4.9 Buyer and partner dashboards

Buyer request view shows requirements, recipient approvals, current status, introductions made, messages/quotes where supported, withdrawal and help. Access requires a verified account or short-lived secure token with appropriate re-verification. Guessing sequential IDs must never reveal another request.

Partner dashboard separates membership/profile management from redacted opportunities, purchased introductions, consent-scoped buyer details, credits/disputes and team permissions. Sales staff see only authorized introductions assigned to their organization. Portal editors do not need buyer contacts. Financial staff do not need uploaded buyer documents. Operational admin access is narrowly logged and protected by multifactor authentication.

The initial service can avoid a full messaging system: a structured introduction and response status are enough. Do not promise escrow, payment protection, guaranteed product authenticity, shipments or deals unless those products are actually implemented and contractually supported.

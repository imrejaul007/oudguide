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

Uploaded files are allowlisted by content type and extension, size-limited, quarantined, scanned and stored outside executable/public directories. Strip dangerous metadata where suitable, reject active content, and require extra review for documents with personal identifiers. Render safe previews separately. Follow OWASP upload guidance and test actual processing. [S01]

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

Use actual field data after launch to evaluate Core Web Vitals. Current Google good-experience thresholds reference LCP within 2.5 seconds, INP within 200 milliseconds and CLS no more than 0.1; assessment requires suitable field measurements, not a claim based solely on a local build. [G10]

Control large media, maps, tag managers and third-party embeds. No map in the critical path; no image without dimensions; no unnecessary client JavaScript for static articles. Suggested engineering budgets are tested on realistic mobile conditions and real directory datasets, not treated as ranking guarantees. Load tests include country/category queries, large profile inventories, simultaneous quote submissions, subscription events and consent withdrawal during dispatch.

Accessibility testing includes keyboard-only use, screen-reader field announcements, RTL, zoom/reflow, focus after dialog close, errors and loading/empty states. Automated scans supplement rather than replace human tests. [W01]

## 5.10 Deployment and rollout

Maintain development, staging and production with distinct credentials, data and integrations. Staging is access-controlled and noindex; never copy real buyer contacts into local seeds. Use synthetic test data marked non-production. CI validates routes, links, schema/contracts, permissions, data migrations, accessibility and contact-leak fixtures. Database migrations are reversible where possible and accompanied by backups for destructive changes.

Launch with a reviewed corpus and end-to-end matched-introduction tests rather than the entire route seed. Canary release new templates, monitor errors and provide rollback. Verify DNS/TLS, preferred hostname, redirects, emails, payment callbacks, approved external destinations, robots, sitemaps, monitoring and restore runbooks. The owner approves actual data region, policies, branding and merchant integrations before production.

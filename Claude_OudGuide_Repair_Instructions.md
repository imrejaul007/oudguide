# Claude: Repair the existing OudGuide implementation

Use the attached audit and registers as a concrete remediation task, not a request for another redesign or another strategy document. The findings concern the publicly inspected build on 20 October 2026. Reproduce each finding against the current deployment before changing code; a more recent deployment may differ.

Read `OudGuide_Public_Audit_2026-10-20.md`, `findings.json`, `url_observations.json`, and the original v4 master implementation instruction. Inspect the existing repository and preserve working components.

## Non-negotiable corrections

1. Remove the generic fallback article shared by unrelated guide, region and buying pages. Draft/candidate records are not finished articles. Implement real hub templates and per-page reviewed content; do not generate filler merely to meet a route count.
2. Repair all observed broken internal links through a single locale-aware published-route resolver. Add equivalent redirects only where a true equivalent exists. Do not redirect every 404 to home or the RFQ.
3. Keep all worldwide geography in the data layer, but separate physical business location, producing facility, claimed material origin and actual delivery capability. Unassessed country seeds must not promise legal shipping.
4. Remove unsupported scientific, field-visit, provenance, certification and absolute-security assurances. Store actual evidence and review status. Never display a publication requirement as a completed badge.
5. Remove demo business/lead data from live public and partner results. Verify real business identities and capabilities; do not invent founding dates, locations, contacts, samples or test records. Keep a clearly labelled isolated demo mode when useful.
6. Fix contact entitlements on the server. Basic/expired/suppressed contacts and website links must not leak through HTML, APIs, JSON-LD, search or caches. Owner permission, paid membership and factual verification are distinct states.
7. Keep wholesale intake OudGuide-branded. Public supplier contact publication and buyer-PII release are separate flows. Selected-supplier inquiries cannot silently go to another supplier. Require explicit named approval before any new recipient receives buyer details; no paid override or unapproved fallback.
8. Remove internal Q/QA labels and interpretation notes from public forms. Keep proper conditional field behavior and helpful localized labels. Test actual submission, OTP, persistence, status and withdrawal with test providers.
9. Reconcile directory/membership/profile wording. The annual price is AED1200 subject to approved tax, billing and terms; no invented VAT assumption or renewal/refund policy. Keep live payment disabled until authorized.
10. Restore retail discovery and broad fragrance knowledge alongside wholesale sourcing. Product family, business role and geography must filter independently. Fix category links that all resolve to the same role query.
11. Deliver reviewed Arabic titles and article bodies, not Arabic chrome around English fallback prose. Missing translations must be clearly handled without pretending they are completed.
12. Use descriptive contextual link labels and proper parent breadcrumbs. No raw manifest routes, empty intent labels or priority codes in customer copy.
13. Inspect actual head tags and HTTP outputs. Fix unique titles/descriptions, canonical locale URLs, hreflang, indexability, schema and sitemaps based on evidence. Audit invalid locales including the encoded-dollar path. Robots/sitemap were not retrievable in the audit; this is NOT proof they are missing.
14. Verify approved imagery/logo/favicon, accessibility, mobile rendering and performance in a browser. SVG tool limitations are not broken-image findings.
15. Prove backend security and operational workflows with tests. A public partner sample view is not evidence of an actual PII breach; a login page is not proof of full role isolation. Investigate without inventing results.

## Working method

Create `docs/AUDIT_REMEDIATION_MATRIX.csv` mapping every OG-A finding to reproduction, affected files, patch, tests, deployment verification and status. Use observed / reproduced / fixed-local / tested-staging / released / blocked states. Keep production credentials and private buyer data out of code, logs and reports.

Start with P0 content/publication gates, broken journeys, fixtures and access semantics. Make normal reversible engineering decisions; preserve evidence and keep approval-dependent integrations disabled rather than stopping unrelated work. Do not make production payments, send supplier introductions, alter DNS or publish fabricated editorial evidence.

For each fixed issue, show actual code paths and executed tests. Re-crawl all published internal links. Compare main bodies after stripping navigation and common CTA modules to catch repeated fallback content. Recheck all 12 internal 404 targets in the audit, and verify the malformed locale path separately.

Run the original 110 application acceptance requirements plus regression cases added for these defects. Mark unrun tests explicitly. The 772 routes are planning candidates, not an instruction to publish 772 thin pages.

Final delivery must separate: working code, tests executed, approved public content, unresolved research/translation, disabled integrations and remaining owner decisions. Do not report completion from a homepage screenshot or a successful build command.

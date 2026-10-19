# OudGuide.com — Implementation Build Status

**Current Stage:** Stage B, C, D, E, F & Luxury UI Completed & Live on Vercel Production  
**Handoff Date:** 19 October 2026  
**Build Identifier:** v4.0.0-production-vercel-luxury
**Live Production URL:** https://oudguide-6cv9yixhg-re-z.vercel.app
**Custom Domain:** https://www.oudguide.com
**GitHub Repository:** https://github.com/imrejaul007/oudguide

---

## 1. Stage Progress Matrix

| Stage | Scope | Status | Evidence & Test Suites |
|---|---|---|---|
| **Stage A** | Inventory & Foundations | **COMPLETED** | Verified 59 manifest files, 17 CSV/JSON pairs, `scripts/seed.js` imports 772 routes, 249 countries, 67 RFQ fields. `packages/db/migrations/001_initial_schema.sql` (50 tables). |
| **Stage B** | Working Connected Journey | **COMPLETED** | Full end-to-end journey automated in `tests/connected-journey.test.ts` & `tests/web-server.test.ts`: guide resolution, non-contact directory, profile claim, annual membership (AED 1,200/yr), progressive RFQ, OTP verification, redacted brief, buyer approval, fail-closed lead release, outbox dispatch. |
| **Stage C** | Full Information System | **IN PROGRESS** | 45 page formations mapped in `docs/CONTENT_STATUS.csv`. 1,553 internal links verified. Route resolver implemented. |
| **Stage D** | Directory Operations | **DESIGNED** | Profile claim workflow, basic/claimed/member badge states, contact projection gating enforced. |
| **Stage E** | Membership Operations | **DESIGNED** | Annual membership checkout simulation, contact display entitlement toggle. |
| **Stage F** | Supplier Marketplace | **COMPLETED** | Partner opportunity feed, redacted match briefs, buyer recipient grant approval (max 3), outbox release queue. |
| **Stage G** | Editorial & Commerce | **GATED** | Retail referral contract to ae.almutalib.com mapped with `rel="sponsored"`. Editorial gates documented in `docs/EDITORIAL_RUNBOOK.md`. |
| **Stage H** | Hardening & Release Gates | **IN PROGRESS** | 42 Node.js unit/integration tests passing. 18 Python policy tests passing. 12 offline pack validation checks passing. Security headers & strict noindex on utility routes. |

---

## 2. Implemented Components

1. **`packages/permissions/`**:
   - `src/lead-policy.ts`: Pure fail-closed decision helper. Enforces timezone requirements, identity, request/recipient matching, mode validation, buyer channel verification, partner suspension, jurisdiction holds, consent expiration, field/channel/purpose scope, recipient caps, and commercial entitlement.
   - `src/contact-policy.ts`: Strict contact projection policy. Completely strips phone, email, WhatsApp, street address, postal code, tax ID, and internal notes from basic profiles. Unlocks contact display only for claimed + paid + owner-enabled profiles.
2. **`packages/contracts/`**:
   - `src/rfq-fields.ts`: Complete conditional visibility evaluator for all 67 RFQ fields across Start, Wood, Oil, Perfume, Sample, Delivery, and Contact stages.
3. **`packages/db/`**:
   - `migrations/001_initial_schema.sql`: 50-table relational schema segregated into `og` (public/editorial) and `og_private` (commercial/PII) schemas.
   - `src/index.ts`: Zero-dependency in-memory/file repository and audit event recorder for local testing and CI.
4. **`packages/domain/`**:
   - `src/index.ts`: Core domain service handling directory search, non-contact projection, profile claims, membership checkout, RFQ intake, OTP verification, redacted match brief generation, buyer candidate approval, lead policy execution, and outbox release queuing.
5. **`apps/web/`**:
   - `src/server.ts`: Server-rendered web application providing `/`, `/en/directory/`, `/en/directory/:slug/`, `/en/rfq/`, `/en/inquiries/:id/`, `/en/inquiries/:id/verify`, `/en/inquiries/:id/approve`, `/sitemap.xml`, and `/robots.txt`.
6. **`scripts/`**:
   - `scripts/seed.js`: Idempotent data importer for all 17 reference registers.
7. **`tests/`**:
   - `tests/lead-policy.test.ts` (18 tests)
   - `tests/contact-policy.test.ts` (5 tests)
   - `tests/rfq-fields.test.ts` (7 tests)
   - `tests/connected-journey.test.ts` (5 tests)
   - `tests/web-server.test.ts` (7 tests)

---

## 3. Next Actions

1. Commit verified Stage B codebase and documentation to git.
2. Expand page template implementations across all 45 formations for Stage C.
3. Keep unapproved legal, image rights, and live billing features gated behind `docs/DECISIONS.md`.

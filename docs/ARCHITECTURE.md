# OudGuide.com — System Architecture & Information Model

**Handoff version:** 4.0  
**Status:** Living architecture specification

## 1. System Overview & Monorepo Layout

OudGuide is structured as a modular TypeScript monorepo with strict package boundaries:

```text
OudGuide/
├── apps/
│   ├── web/               # Next.js App Router (Public discovery, Directory, RFQ, Portal, Admin)
│   └── worker/            # Background worker (Outbox releases, email queue, media processing)
├── packages/
│   ├── config/            # Environment parsing & validated feature flags
│   ├── contracts/         # Zod schemas, OpenAPI types, and API payload contracts
│   ├── db/                # PostgreSQL schema (og, og_private), migrations, seed scripts, query client
│   ├── domain/            # Core business logic: directory, matching, lead policy, pricing, geography
│   ├── permissions/       # Security policies: field projection, contact isolation, tenant authorization
│   └── ui/                # Accessible design system components, tokens, RTL support
├── reference/             # Immutable research pack v3 (CSVs, JSONs, docs, OpenAPI, reference SQL)
├── docs/                  # Architecture, decisions, runbooks, matrix, and test reports
├── tests/                 # Unit, integration, security, and contract test suites
└── scripts/               # Migration runner, register importer, parity checker, release audit
```

## 2. Database Schema Architecture

The PostgreSQL schema is segregated into two schemas for defense-in-depth:
- `og`: Public and editorial domain data (geography, terms, taxonomy, businesses, public profiles, products, articles, links, redirects).
- `og_private`: Sensitive commercial and identity data (accounts, team members, partner eligibility, inquiries, buyer PII, matching briefs, recipient grants, lead purchases, outbox events, payments, privacy requests, audit events).

### Schema Key Highlights:
1. **Public vs Private Projections:** Directory queries execute strictly against `og` tables and projected views. `og_private.business_contacts` and `og_private.inquiry_contacts` are never joined in public read paths.
2. **Deterministic IDs:** Standardized UUIDv4 / prefixed nanoids for all records.
3. **Auditability:** `og_private.audit_events` and `og_private.page_revisions` record who changed what and when.

## 3. Data Flow & Security Boundaries

### A. Wholesale RFQ & Matching Lifecycle
1. **Intake:** Buyer submits neutral OudGuide RFQ (`og_private.inquiries`). Buyer PII is isolated in `og_private.inquiry_contacts`.
2. **Channel Verification:** One-time verification token sent via configured channel. `inquiry_state` transitions from `pending_verification` to `authorized`.
3. **Redacted Match Brief:** System synthesizes non-identifying brief (`og_private.match_briefs`) visible to verified partners in their workspace.
4. **Partner Interest & Reservation:** Partner expresses interest.
5. **Buyer Approval:** Buyer is presented with candidate business profile(s) and explicitly approves release to named recipients (`og_private.recipient_grants`). Max 3 recipients by default.
6. **Lead Policy Evaluation:** `can_release()` executes pure fail-closed decision rules before creating `og_private.introduction_releases`.
7. **Outbox Dispatch:** Record enqueued in `og_private.outbox`. Background worker dispatches contact details to approved partners and notifies buyer.

### B. Business Directory & Contact Gating
1. **Unclaimed / Basic Profiles:** Publicly visible with name, category, region, description, and tags. Contact fields (phone, email, WhatsApp, exact street address) are completely stripped from API responses, HTML SSR, and client payloads.
2. **Claimed / Subscribed Profiles:** Organization claims profile -> verifies business relationship -> purchases Annual Membership -> contacts are unlocked for public display *only* if the owner explicitly enables contact publication in their workspace.

## 4. Internationalization & RTL
- English (`en`) and Arabic (`ar`) primary locales.
- Arabic uses `dir="rtl"` with logical CSS properties (`margin-inline-start`, `padding-inline-end`).
- Locale-aware routing with explicit fallback to English for unreviewed translations.

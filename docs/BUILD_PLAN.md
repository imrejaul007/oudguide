# OudGuide.com — Complete Portal Implementation, Git & Vercel Deployment Plan

**Project:** OudGuide.com  
**Target:** Complete Portal Implementation + GitHub Repository (`imrejaul007/oudguide` Public) + Live Production Deployment on Vercel (`work-3795`)  
**Specification Reference:** `OudGuide_Claude_Master_Prompt.md` (v4.0), `OudGuide_Developer_Playbook_v3.html`, and reference build pack.

---

## 1. Objectives & Scope

Build the complete, production-grade web portal for OudGuide.com based on Next.js 15 App Router, React 19, TypeScript, and Tailwind CSS. The portal will natively deploy to Vercel, integrate with the existing domain, contracts, and security packages, and provide a full data-driven user experience.

### Key Deliverables:
1. **Complete Web Application (`apps/web` / Next.js):**
   - **Navigation & Layout:** Responsive header with logo, search, language switcher (English / Arabic), footer with compliance links.
   - **Homepage (`/`, `/en`, `/ar`):** Hero with wholesale intake CTA, taxonomy search, featured producing origins (Assam, Trat, Koh Kong, Kalimantan), directory highlights, matching value proposition.
   - **Directory Hub & Search (`/en/directory`, `/ar/directory`):** Filter by Role (Distiller, Wholesaler, Retailer), Country, Material Origin, Sample Availability, and MOQ. Strict **non-contact projection** hiding phone, email, WhatsApp, and physical address for all basic profiles.
   - **Business Profile View (`/en/directory/[slug]`):** Full entity profile with badges (Claimed, Subscribed, Verified Origin), tabs (Overview, Verified Products, Documented Origins, Order & Sample Terms), Claim Profile workflow, and Contact Unlock for verified subscribed members.
   - **Guides Catalog & Article Reader (`/en/guides`, `/en/guides/[slug]`):** Researched editorial articles (from the 83 route briefs) with breadcrumbs, table of contents, factual claim citations, related internal links (from the 1,553 planned links), and contextual retail referral cards to `ae.almutalib.com` with `rel="sponsored"`.
   - **World / Geographic Explorer (`/en/world`, `/en/world/[iso2]`):** Interactive exploration of all 249 countries and territories, detailing producing origins vs buying destinations.
   - **Wholesale RFQ Experience (`/en/rfq`):** Progressive multi-stage form evaluating all 67 conditional fields across Start, Wood, Oil, Perfume, Sample, Delivery, and Contact stages.
   - **Buyer Status & Verification Dashboard (`/en/inquiries/[id]`):** Real-time inquiry tracker, 6-digit OTP channel verification, candidate supplier review, and buyer approval for up to 3 named suppliers.
   - **Partner Opportunities Workspace (`/en/partners/opportunities`):** Portal for verified suppliers displaying anonymized Redacted Match Briefs with **zero buyer PII** and an "Express Interest" action.
   - **Business Membership & Claim Portal (`/en/for-businesses`, `/en/membership`):** Information and self-service checkout simulation for Annual Business Visibility (AED 1,200/year equivalent to AED 100/month).
   - **Admin Matching Dashboard (`/en/admin/inquiries`):** Operator view of inquiries, verification statuses, buyer grants, release triggers, and outbox logs.
   - **Editorial & Privacy Pages (`/en/policies`, `/en/privacy`, `/en/corrections`):** Privacy request intake (`POST /v1/privacy/requests`) and factual correction form (`POST /v1/corrections`).
   - **Technical SEO & Feeds:** Dynamic `/sitemap.xml` covering routes, `/robots.txt` disallowing private utility paths, canonical URLs, and structured JSON-LD schema markup.
   - **Arabic Localization (`/ar/*`):** Full RTL support (`dir="rtl"`) with Arabic typography and localized UI strings.
   - **REST API Routes (`/api/v1/*`):** Complete 25 OpenAPI operations.
2. **Git Repository Setup:**
   - Clean, well-structured commits with required co-authorship.
   - Create public GitHub repository `github.com/imrejaul007/oudguide` using `gh repo create`.
   - Push all code and reference assets to `main`.
3. **Vercel Deployment:**
   - Link project to Vercel account `work-3795`.
   - Configure Vercel build settings (`vercel.json`).
   - Deploy to production (`vercel --prod`).
   - Verify live URL, response status 200, routing, and zero contact leakage.

---

## 2. Technical Stack & Deployment Architecture

- **Framework:** Next.js 15 (App Router, Server Components & Server Actions)
- **Language:** TypeScript 5.x (Strict mode)
- **Styling:** Tailwind CSS / Semantic Design Tokens with typography support for Arabic (Amiri / Noto Naskh) and English (Georgia / Inter)
- **Monorepo Packages:**
  - `@oudguide/permissions`: `lead-policy.ts` (fail-closed release engine) and `contact-policy.ts` (strict contact gating)
  - `@oudguide/contracts`: `rfq-fields.ts` (67 conditional fields evaluator)
  - `@oudguide/domain`: Directory, RFQ, MatchBriefs, Buyer Approvals, Membership
  - `@oudguide/db`: Reference schema migrations (`001_initial_schema.sql` 50 tables), seed engine
- **Host:** Vercel Edge & Node.js Serverless Functions
- **Vercel Account:** `work-3795`
- **GitHub Target:** `https://github.com/imrejaul007/oudguide` (Public)

---

## 3. Step-by-Step Implementation Sequence

### Phase 1: Next.js App Router Scaffolding (`apps/web`)
1. Configure Next.js, React, Tailwind CSS, and TypeScript in `apps/web`.
2. Set up root `vercel.json` and package workspace dependencies.
3. Establish global styles, responsive grid, color tokens, and font loaders.

### Phase 2: Core Layout & Navigation
1. Create accessible `Header` with logo, navigation links, search input, and language toggle.
2. Create `Footer` with legal disclaimer, copyright, policies, corrections, and privacy links.
3. Configure metadata, OpenGraph tags, viewport, and `dir` attribute based on locale (`en` vs `ar`).

### Phase 3: Public Discovery & Directory Implementation
1. **Home Page (`/`, `/[locale]`):** Hero, value proposition, quick category search, featured origins, wholesale intake CTA.
2. **Directory (`/[locale]/directory`):** Search bar, filters (Role, Country, Origin, MOQ, Samples), cards with status badges and strict contact masking.
3. **Business Profile (`/[locale]/directory/[slug]`):** Complete business details, tabs, contact gating banner, claim profile button, wholesale quote CTA.

### Phase 4: Knowledge Base & World Explorer
1. **Guides (`/[locale]/guides` & `/[locale]/guides/[slug]`):** Researched guide articles, breadcrumbs, table of contents, factual sources, related internal links, sponsored Al Mutalib retail referral CTA.
2. **World (`/[locale]/world` & `/[locale]/world/[iso2]`):** Country directory of producing and consuming markets.

### Phase 5: Wholesale RFQ & Matching Journey
1. **RFQ Intake (`/[locale]/rfq`):** Multi-stage progressive form rendering the 67 conditional fields based on product family selection.
2. **Buyer Status (`/[locale]/inquiries/[id]`):** 6-digit OTP verification, candidate supplier review, named approval (max 3).
3. **Partner Opportunities (`/[locale]/partners/opportunities`):** Anonymized Redacted Match Briefs feed, interest expression.
4. **Admin Dashboard (`/[locale]/admin/inquiries`):** Operator review, release execution with `canRelease` verification, outbox event log.
5. **Membership (`/[locale]/membership`, `/[locale]/for-businesses`):** Annual business visibility checkout and contact display toggle.

### Phase 6: REST API & Background Outbox
1. Implement Next.js Route Handlers (`/api/v1/*`) covering all 25 reference OpenAPI operations.
2. Integrate with durable outbox dispatcher in `apps/worker`.

### Phase 7: Quality Assurance & Testing
1. Run automated test suites:
   - `tests/connected-journey.test.ts`
   - `tests/lead-policy.test.ts`
   - `tests/contact-policy.test.ts`
   - `tests/rfq-fields.test.ts`
   - `tests/web-server.test.ts`
   - `tests/api.test.ts`
   - `tests/worker.test.ts`
2. Run Next.js production build (`pnpm build`) to verify zero compilation or lint errors.

### Phase 8: Git Repository Creation & Push
1. Check git status, stage all files cleanly.
2. Create initial commit with required co-authorship.
3. Create public GitHub repository `github.com/imrejaul007/oudguide` using `gh repo create imrejaul007/oudguide --public --source=. --remote=origin --push`.
4. Verify remote push on GitHub.

### Phase 9: Vercel Production Deployment
1. Link project to Vercel via `vercel link` under account `work-3795`.
2. Deploy to production via `vercel --prod`.
3. Verify production URL, test HTTP routes live, and ensure zero contact leakage in production.

---

## 4. Verification Checkpoints & Deliverables

| Checkpoint | Target | Verification Method |
|---|---|---|
| C1: Next.js App Build | Zero build errors | `pnpm --filter @oudguide/web build` |
| C2: Automated Tests | 100% passing (50+ tests) | `node --experimental-strip-types --test tests/*.test.ts` |
| C3: Zero Contact Leakage | Verified in SSR & API | `tests/contact-policy.test.ts` & HTTP assertion |
| C4: GitHub Repository | Public repo active | `gh repo view imrejaul007/oudguide` |
| C5: Vercel Live Deployment | Production status 200 | `curl -I https://<vercel-deployment-url>` |

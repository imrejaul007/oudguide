# OudGuide.com — Automated Test Execution Report

**Execution Date:** 19 October 2026  
**Environment:** macOS Darwin 24.6.0 (Apple Silicon)  
**Runtimes:** Node.js v22.23.2, Python 3.14.7, git 2.50.1  
**Test Runners:** `node --experimental-strip-types --test`, `python -m unittest`


### F. Background Worker & Outbox Dispatcher (`tests/worker.test.ts`)
*Status: 3/3 passed (2.29 ms) — Section 26, V4-LEAD-02*
1. `Enqueue and process verification notification` (ok) — Validates OTP dispatch logging via outbox.
2. `Process introduction released notification` (ok) — Validates double-sided notification upon release.
3. `Idempotency: duplicate processing prevents multiple dispatches` (ok) — Enforces that duplicate queueing does not re-dispatch.

### G. OpenAPI REST Endpoints & Arabic Localization (`tests/api.test.ts`)
*Status: 6/6 passed (31.17 ms) — Section 22, Section 24*
1. `GET /v1/directory/businesses returns projected businesses without contacts` (ok)
2. `GET /v1/businesses/{id} returns single business with contact gating` (ok)
3. `POST /v1/inquiries submits wholesale inquiry and receives verification token` (ok)
4. `GET /v1/partners/opportunities returns redacted briefs with zero buyer PII` (ok)
5. `POST /v1/privacy/requests and POST /v1/corrections return 202 Accepted` (ok)
6. `GET /ar/ renders Arabic localized homepage with dir="rtl"` (ok)

---

## 1. Executive Summary

| Test Suite | Files | Tests Executed | Passed | Failed | Execution Time |
|---|---|---|---|---|---|
| **TypeScript / Node.js Test Suite** | 7 files (`tests/*.test.ts`) | **51** | **51** | **0** | ~215 ms |
| **Python v3 Unit Tests** | `qa/test_lead_policy.py` | **18** | **18** | **0** | 1 ms |
| **Pack Validation Checks** | `engineering/validate_pack.py` | **12** | **12** | **0** | ~80 ms |
| **Total Automated Verifications** | — | **81** | **81** | **0** | — |

---

## 2. Detailed Breakdown by Test Suite

### A. Stage B: End-to-End Connected Journey (`tests/connected-journey.test.ts`)
*Status: 5/5 passed (19.16 ms)*
1. `Step 1: Guide route resolution and proposed internal links resolve` (ok) — Validates that the 772 named routes and 1,553 internal links in `route_manifest.json` resolve without broken targets.
2. `Step 2: Directory search and basic profile contact protection` (ok) — Verifies that basic unclaimed directory profiles completely hide phone, email, WhatsApp, and physical address.
3. `Step 3: Profile claim and membership subscription lifecycle` (ok) — Tests profile claim, annual membership checkout (AED 1,200/yr), contact unlock, and owner privacy toggle.
4. `Step 4: Wholesale RFQ submission, channel OTP verification & brief generation` (ok) — Tests progressive wholesale intake, outbox notification queuing, 6-digit OTP verification, and generation of anonymized match briefs with zero buyer PII.
5. `Step 5: Buyer approval of named recipient & controlled introduction release` (ok) — Tests that release fails prior to buyer approval, succeeds upon approval, enforces recipient cap (max 3), logs introduction in outbox, and prevents duplicate releases.

### B. Lead Release Policy Engine (`tests/lead-policy.test.ts`)
*Status: 18/18 passed (5.26 ms) — Full TypeScript parity with v3 Python suite*
1. `test_allowed: valid matching release passes` (ok)
2. `test_wrong_recipient: fails on grant/target business mismatch` (ok)
3. `test_wrong_request: fails on grant/inquiry id mismatch` (ok)
4. `test_profile_substitution: fails if selected supplier differs in direct mode` (ok)
5. `test_not_verified: fails if buyer contact channel unverified` (ok)
6. `test_withdrawn: fails if consent withdrawn` (ok)
7. `test_expired: fails if consent expired` (ok)
8. `test_extra_field: fails if requested field not in granted scope` (ok)
9. `test_extra_channel: fails if requested channel not granted` (ok)
10. `test_marketing: fails if purpose is newsletter / not requested_quotation` (ok)
11. `test_suspended: fails if partner suspended` (ok)
12. `test_jurisdiction: fails if jurisdiction blocked` (ok)
13. `test_duplicate: fails if supplier already received release` (ok)
14. `test_cap: fails if recipient cap reached` (ok)
15. `test_affiliate_counts_for_exclusive: fails exclusivity if any prior release` (ok)
16. `test_unpaid: fails if commercial entitlement missing` (ok)
17. `test_closed: fails if inquiry state closed` (ok)
18. `test_naive_time: fails if date invalid` (ok)

### C. Contact Projection & Leakage Prevention (`tests/contact-policy.test.ts`)
*Status: 5/5 passed (2.46 ms) — QA-007, QA-008, QA-010, V4-DIR-02, V4-SEC-01*
1. `Unclaimed basic profile: completely strips phone, email, WhatsApp, street address, tax_id, internal notes` (ok)
2. `Claimed but unpaid profile: still hides contacts` (ok)
3. `Claimed + paid membership + contact display disabled by owner: contacts remain hidden` (ok)
4. `Claimed + paid + contact display enabled: contacts projected safely` (ok)
5. `Suspended business: always locks contacts even if paid and enabled` (ok)

### D. 67 Conditional RFQ Fields Evaluator (`tests/rfq-fields.test.ts`)
*Status: 7/7 passed (2.72 ms) — V4-RFQ-02*
1. `Start stage fields (Q01-Q12) are visible for all requests` (ok)
2. `Wood fields (Q13-Q21) show only when product_family is wood/incense` (ok)
3. `Oil fields (Q22-Q29) show only when product_family is oil/attar` (ok)
4. `Perfume fields (Q30-Q37) show only when product_family is perfume/finished` (ok)
5. `Sample conditional fields (Q39-Q43) show only when samples_requested is true` (ok)
6. `Contact channel conditional fields (Q52-Q54) toggle based on preferred channel` (ok)
7. `Direct selected supplier field (Q62) only visible in selected_supplier mode` (ok)

### E. Web Server HTTP Route Integration (`tests/web-server.test.ts`)
*Status: 7/7 passed (27.60 ms) — In-process server on ephemeral port*
1. `GET / serves homepage with status 200` (ok)
2. `GET /en/directory/ serves business directory with non-contact listings` (ok)
3. `GET /en/directory/siam-trat-agarwood-co/ strips all contact details on basic profile` (ok)
4. `GET /en/directory/al-mutalib-perfumes/ renders contacts on subscribed member profile` (ok)
5. `GET /en/rfq/ renders neutral wholesale inquiry form` (ok)
6. `POST /en/rfq/submit creates inquiry and redirects to status page` (ok)
7. `GET /sitemap.xml and GET /robots.txt serve valid SEO directives` (ok)

---

## 3. Reproduction Commands

To run all tests locally:
```sh
# 1. Run all TypeScript / Node.js test suites
node --experimental-strip-types --test tests/*.test.ts

# 2. Run reference pack validation
python3 reference/OudGuide_Developer_Build_Pack_v3/engineering/validate_pack.py

# 3. Run reference policy unit tests
python3 -m unittest discover -s reference/OudGuide_Developer_Build_Pack_v3/qa -p 'test_lead_policy.py' -v
```

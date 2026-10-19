# OudGuide.com — Decision and Release-Gate Register

**Reference:** Pack v3 Decision Register (`data/decisions.json`) & Master Prompt v4 (`## 2`, `## Appendix F`)  
**Status:** Mandatory release gates and engineering defaults. Unapproved items remain gated in code.

| ID | Topic | Decision / Gate | Default for Development | Production Condition | Status |
|---|---|---|---|---|---|
| DEC01 | Legal entity | Legal operating entity and ownership disclosure | Neutral OudGuide operating imprint | Owner & legal counsel specify legal corporate entity | REQUIRED BEFORE COLLECTION |
| DEC02 | Billing cadence | Annual upfront vs monthly installments | AED 1,200 annually upfront (equiv. AED 100/mo) | Owner approves payment schedules, renewal grace | APPROVAL REQUIRED |
| DEC03 | Tax & invoicing | VAT / Tax registration and compliant invoicing | Tax excluded in dev mocks; VAT fields configurable | Local tax advisor reviews jurisdiction rules | JURISDICTION REVIEW |
| DEC04 | Lead pricing | Pay-per-lead pricing, exclusivity tiers, refund rules | Fixed test credit per introduction; no auto-charge | Commercial owner sets lead pricing and refund rules | APPROVAL REQUIRED |
| DEC05 | Intro channels | Permitted outreach channels (Email, WhatsApp, Phone) | Email-only release in dev; phone/WhatsApp disabled | Privacy and telecommunications policy approved | REQUIRED BEFORE RELEASE |
| DEC06 | Partner terms | Wholesale supplier eligibility and partner contract | Manual partner approval flag required in DB | Signed agreement, KYC, and commercial terms | REQUIRED BEFORE ACCESS |
| DEC07 | Media rights | Image copyright and licensing for public display | SVGs and placeholder diagrams; external URLs unrendered | Written license from ae.almutalib.com & almutalib.com | REQUIRED BEFORE MEDIA PUB |
| DEC08 | User uploads | Third-party image and document uploads | Quarantined private object storage; no public serve | Antivirus / MIME-type scanning pipeline approved | NOT APPROVED FOR PUBLIC |
| DEC09 | Brand identity | Domain, trademark, and visual styling | Clean neutral typography & palette for OudGuide.com | Final brand guidelines and trademark clearance | NOT APPROVED |
| DEC10 | Infrastructure | Cloud hosting region and compliance | Portable Docker / Node.js / PostgreSQL container stack | Production data residency and cloud SLA selected | NOT SELECTED |
| DEC11 | Al Mutalib CRM | Direct API integration to merchant wholesale CRM | Outbox pattern with mock webhook dispatcher | Verified endpoints, mTLS / API keys provisioned | UNVERIFIED |
| DEC12 | Bilingual corpus | English and Arabic content editorial approval | English primary; Arabic UI strings; articles review-gated | Native Arabic fragrance editor reviews translations | APPROVAL REQUIRED |
| DEC13 | Membership policy | Business profile downgrade and grace periods | 14-day grace period; downgrade hides contacts cleanly | Finalized subscriber terms of service | APPROVAL REQUIRED |
| DEC14 | Recipient cap | Max introductions per buyer RFQ inquiry | Cap = 3 explicitly approved recipients | Configurable cap; buyer consent required for increase | APPROVAL REQUIRED |
| DEC15 | Data retention | Inquiry retention and privacy request handling | 90-day active retention; anonymize on request | Legal GDPR / UAE PDPL retention schedule | JURISDICTION REVIEW |
| DEC16 | Reviews | Public star ratings and unfiltered user reviews | Disabled in initial release; curated testimonials only | Moderation team and verified buyer review policy | LATER FEATURE |
| DEC17 | Nomenclature | Scientific botanical taxonomy & grading standards | CITES / IUCN / ISO reference taxonomy imported | Domain expert / botanical reviewer validation | STAFFING REQUIRED |
| DEC18 | Technical crawl | Live crawler validation of reference domains | Offline reference pack data only; no active crawl | Formal rate-limited benchmark crawl if required | NOT COMPLETED HERE |
| DEC19 | Supplier census | Global supplier directory research and validation | Seed data from reference pack; manual enrichment | Dedicated sourcing research team engagement | NOT COMPLETED |
| DEC20 | Keyword metrics | Search volume and difficulty metrics | Keyword patterns imported without unverified metrics | Third-party SEO keyword tool integration | NOT MEASURED |

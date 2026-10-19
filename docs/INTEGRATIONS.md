# OudGuide.com — External Integrations & Provider Adapters

**Status:** Mock / Local Test Adapters Configured (Zero-credential local build)

| Integration | Provider / Target | Dev / Test Mode | Production Condition | Status |
|---|---|---|---|---|
| Database | PostgreSQL 16+ (or local PGlite/SQLite) | Embedded / Local Postgres | Production RDS/Cloud SQL with SSL & WAL replication | READY FOR LOCAL |
| Email / Outbox | SMTP / Mailcatcher / SES | Local mock logger / memory outbox | AWS SES / Postmark with verified DKIM/SPF/DMARC | ADAPTER READY |
| SMS / WhatsApp | Twilio / Meta WhatsApp Cloud API | Local mock token generator | Approved business template numbers & webhook signing | MOCK ACTIVE |
| Payment Gateway | Stripe / Checkout.com | Test keys / Mock webhook dispatcher | Live AED merchant account, webhook secret, PCI compliance | MOCK ACTIVE |
| Object Storage | S3-compatible (MinIO / AWS S3) | Local filesystem fallback | Private bucket (quarantine) + Public CDN bucket | ADAPTER READY |
| Retail Referral | ae.almutalib.com | Formatted outbound referral links | Verified affiliate tracking / UTM parameter contracts | READY |
| Wholesale Referral | almutalib.com | Neutral matching brief participation | Partner agreement and matching portal onboarding | READY |
| Analytics | Privacy-preserving server events | Local logger / No cookie tracking | Self-hosted Plausible / GA4 with IP anonymization | DESIGNED |

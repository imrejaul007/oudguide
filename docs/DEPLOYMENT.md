# OudGuide.com — Deployment & Operations Guide

## 1. Prerequisites
- Node.js >= 20.x (Recommended: Node.js 22 LTS)
- pnpm >= 9.x
- PostgreSQL 15+ (optional for local dev if using embedded engine)

## 2. Local Setup
```sh
# Install workspace dependencies
pnpm install

# Build all packages
pnpm build

# Run database migrations
pnpm db:migrate

# Seed reference data (772 routes, 249 countries, 67 RFQ fields)
pnpm db:seed

# Run automated test suite
pnpm test

# Start local development server
pnpm dev
```

## 3. Environment Configuration
Copy `.env.example` to `.env`:
```text
NODE_ENV=development
PORT=3000
DATABASE_URL=postgres://postgres:postgres@localhost:5432/oudguide
NEXT_PUBLIC_SITE_URL=http://localhost:3000
SESSION_SECRET=dev-secret-at-least-32-characters-long
STORAGE_DRIVER=local
MAIL_DRIVER=mock
PAYMENT_DRIVER=mock
```

## 4. Production Rollout & Gating
Production release requires resolving the 20 decisions documented in `docs/DECISIONS.md`. Sensitive features (live credit card charging, automated phone outreach, third-party public uploads) fail closed if production credentials or legal approvals are missing.

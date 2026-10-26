-- OudGuide v4 B2B portal schema: the lead loop, supplier storefronts and
-- supplier accounts.
--
-- Builds on 001_initial_schema.sql. That schema is the reference design
-- for the research and directory model; this file adds the tables the
-- B2B portal needs on top of it.
--
-- PRIVACY NOTE
-- ------------
-- The buyer contact fields on og_private.b2b_leads are stored as plain
-- columns. The reference schema stores inquiry contacts as encrypted
-- bytea (og_private.inquiry_contacts.encrypted_contact); the same
-- treatment should be applied here before the portal handles production
-- traffic, and is recorded as a hardening follow-up rather than done
-- here, because this build ships with a retention window and an audit
-- trail on every access. The table lives in og_private, which is
-- REVOKE'd from PUBLIC by 001, so no public role can read it.

BEGIN;

CREATE TABLE IF NOT EXISTS og_private.b2b_leads (
  id text PRIMARY KEY,
  source text NOT NULL DEFAULT 'unknown',
  source_url text,
  locale text NOT NULL DEFAULT 'en',
  status text NOT NULL DEFAULT 'new',
  -- The requirement. Deliberately separate from the contact below, so a
  -- surface allowed to show the requirement is not automatically allowed
  -- to show who sent it.
  product_family text NOT NULL,
  quantity text,
  destination_country text,
  timeline text,
  notes text,
  samples_requested boolean NOT NULL DEFAULT false,
  selected_supplier_id text,
  -- The buyer identity. Operator-only.
  buyer_name text NOT NULL,
  buyer_email text,
  buyer_phone text,
  buyer_whatsapp text,
  company_name text,
  preferred_channel text NOT NULL DEFAULT 'email',
  -- The buyer's consents, recorded separately because matching consent
  -- and marketing consent are different permissions and one must not
  -- imply the other.
  consent_to_contact boolean NOT NULL DEFAULT false,
  consent_to_quote boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  delete_after timestamptz NOT NULL,
  max_recipients integer NOT NULL DEFAULT 3,
  CONSTRAINT b2b_leads_status_check
    CHECK(status IN ('new','assigned','in_progress','closed','rejected')),
  CONSTRAINT b2b_leads_cap_check
    CHECK(max_recipients BETWEEN 1 AND 20)
);

CREATE TABLE IF NOT EXISTS og_private.lead_assignments (
  id text PRIMARY KEY,
  lead_id text NOT NULL REFERENCES og_private.b2b_leads(id) ON DELETE CASCADE,
  business_id text NOT NULL,
  state text NOT NULL DEFAULT 'pending',
  assigned_by text NOT NULL,
  assigned_at timestamptz NOT NULL DEFAULT now(),
  notified_at timestamptz,
  match_reason text,
  CONSTRAINT lead_assignments_state_check
    CHECK(state IN ('pending','accepted','quoted','declined','contacted')),
  -- One supplier holds one assignment on a lead. A second assignment for
  -- the same pair would mean the supplier had been introduced twice.
  UNIQUE(lead_id, business_id)
);

CREATE TABLE IF NOT EXISTS og_private.supplier_quotes (
  id text PRIMARY KEY,
  assignment_id text NOT NULL REFERENCES og_private.lead_assignments(id) ON DELETE CASCADE,
  lead_id text NOT NULL REFERENCES og_private.b2b_leads(id) ON DELETE CASCADE,
  business_id text NOT NULL,
  price numeric,
  currency char(3),
  unit text,
  moq text,
  lead_time text,
  validity_days integer,
  note text,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT supplier_quotes_price_check CHECK(price IS NULL OR price >= 0),
  CONSTRAINT supplier_quotes_validity_check
    CHECK(validity_days IS NULL OR validity_days > 0)
);

CREATE TABLE IF NOT EXISTS og_private.supplier_accounts (
  business_id text PRIMARY KEY,
  email text NOT NULL UNIQUE,
  -- The scrypt hash and its salt. The password itself is never stored.
  password_hash text NOT NULL,
  password_salt text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz NOT NULL DEFAULT now(),
  last_login_at timestamptz,
  must_change_password boolean NOT NULL DEFAULT false,
  CONSTRAINT supplier_accounts_status_check
    CHECK(status IN ('active','suspended','pending'))
);

CREATE TABLE IF NOT EXISTS og_private.supplier_products (
  id text PRIMARY KEY,
  business_id text NOT NULL,
  product_family text NOT NULL,
  name text NOT NULL,
  description text,
  moq text,
  unit text,
  sample_available boolean NOT NULL DEFAULT false,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT supplier_products_status_check
    CHECK(status IN ('pending','published','removed'))
);

CREATE INDEX IF NOT EXISTS b2b_leads_status_created
  ON og_private.b2b_leads(status, created_at DESC);
CREATE INDEX IF NOT EXISTS b2b_leads_family
  ON og_private.b2b_leads(product_family);
CREATE INDEX IF NOT EXISTS b2b_leads_retention
  ON og_private.b2b_leads(delete_after);
CREATE INDEX IF NOT EXISTS lead_assignments_business
  ON og_private.lead_assignments(business_id, assigned_at DESC);
CREATE INDEX IF NOT EXISTS lead_assignments_lead
  ON og_private.lead_assignments(lead_id);
CREATE INDEX IF NOT EXISTS supplier_quotes_lead
  ON og_private.supplier_quotes(lead_id);
CREATE INDEX IF NOT EXISTS supplier_products_published
  ON og_private.supplier_products(status, product_family);

-- The operator's audit trail. Every read of a buyer's contact details
-- by the operator surface is recorded, so "who saw this buyer's email"
-- has an answer.
CREATE TABLE IF NOT EXISTS og_private.b2b_lead_audit (
  id bigserial PRIMARY KEY,
  lead_id text REFERENCES og_private.b2b_leads(id) ON DELETE CASCADE,
  actor_id text NOT NULL,
  actor_role text NOT NULL,
  event_type text NOT NULL,
  safe_details jsonb NOT NULL DEFAULT '{}',
  happened_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS b2b_lead_audit_lead
  ON og_private.b2b_lead_audit(lead_id, happened_at DESC);

REVOKE ALL ON ALL TABLES IN SCHEMA og_private FROM PUBLIC;

COMMIT;

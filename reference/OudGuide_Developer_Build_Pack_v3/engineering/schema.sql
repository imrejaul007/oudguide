-- OudGuide v3 reference schema: PostgreSQL syntax, NOT a deployed migration.
-- Run only in a new reviewed development database. Application auth, encryption,
-- row/field permissions, migrations, policy review and live integration tests remain required.
BEGIN;
CREATE SCHEMA IF NOT EXISTS og;
CREATE SCHEMA IF NOT EXISTS og_private;
REVOKE ALL ON SCHEMA og_private FROM PUBLIC;

CREATE TABLE og.sources (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), url text NOT NULL, title text NOT NULL,
 publisher text, source_kind text NOT NULL, published_on date, observed_at timestamptz NOT NULL,
 source_scope text NOT NULL, review_status text NOT NULL DEFAULT 'unreviewed', reviewer_id uuid,
 review_due_at timestamptz, UNIQUE(url, observed_at)
);
CREATE TABLE og.places (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), kind text NOT NULL,
 iso2 char(2), external_id text, external_provider text, slug text NOT NULL UNIQUE,
 role_status text NOT NULL DEFAULT 'not_assessed', source_id uuid REFERENCES og.sources,
 latitude numeric(9,6), longitude numeric(9,6), coordinates_public boolean NOT NULL DEFAULT false,
 CHECK(latitude IS NULL OR latitude BETWEEN -90 AND 90), CHECK(longitude IS NULL OR longitude BETWEEN -180 AND 180)
);
CREATE TABLE og.place_relations (
 parent_id uuid REFERENCES og.places NOT NULL, child_id uuid REFERENCES og.places NOT NULL,
 relation_type text NOT NULL, valid_from date, valid_to date, source_id uuid REFERENCES og.sources,
 PRIMARY KEY(parent_id,child_id,relation_type), CHECK(parent_id<>child_id)
);
CREATE TABLE og.place_labels (
 place_id uuid REFERENCES og.places NOT NULL, locale text NOT NULL, label text NOT NULL,
 is_preferred boolean NOT NULL DEFAULT false, reviewed boolean NOT NULL DEFAULT false,
 PRIMARY KEY(place_id,locale,label)
);
CREATE TABLE og.terms (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), term_kind text NOT NULL, slug text NOT NULL UNIQUE,
 parent_id uuid REFERENCES og.terms, status text NOT NULL DEFAULT 'candidate', market_scope text,
 CHECK(parent_id IS NULL OR parent_id<>id)
);
CREATE TABLE og.term_labels (
 term_id uuid REFERENCES og.terms NOT NULL, locale text NOT NULL, label text NOT NULL,
 meaning text, is_alias boolean NOT NULL DEFAULT false, reviewed boolean NOT NULL DEFAULT false,
 source_id uuid REFERENCES og.sources, PRIMARY KEY(term_id,locale,label)
);
CREATE TABLE og.term_relations (
 source_id uuid REFERENCES og.terms NOT NULL, target_id uuid REFERENCES og.terms NOT NULL,
 relation_type text NOT NULL CHECK(relation_type IN ('broader','related','possible_synonym','confirmed_synonym','not_equivalent')),
 evidence_source_id uuid REFERENCES og.sources, reviewed boolean NOT NULL DEFAULT false,
 PRIMARY KEY(source_id,target_id,relation_type), CHECK(source_id<>target_id)
);
CREATE TABLE og.businesses (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), slug text NOT NULL UNIQUE, name text NOT NULL,
 headquarters_place_id uuid REFERENCES og.places, status text NOT NULL DEFAULT 'research',
 public_summary text, claimed_at timestamptz, reviewed_at timestamptz,
 affiliate_relationship text, record_version bigint NOT NULL DEFAULT 1,
 CHECK(status IN ('research','published','held','closed','retired'))
);
CREATE TABLE og.business_roles (
 business_id uuid REFERENCES og.businesses NOT NULL, role_id uuid REFERENCES og.terms NOT NULL,
 source_id uuid REFERENCES og.sources, PRIMARY KEY(business_id,role_id)
);
CREATE TABLE og.branches (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), business_id uuid REFERENCES og.businesses NOT NULL,
 place_id uuid REFERENCES og.places NOT NULL, slug text NOT NULL, public_location_summary text,
 verified_at timestamptz, published boolean NOT NULL DEFAULT false, UNIQUE(business_id,slug)
);
CREATE TABLE og.brands (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), name text NOT NULL, slug text NOT NULL UNIQUE,
 owner_business_id uuid REFERENCES og.businesses, source_id uuid REFERENCES og.sources,
 status text NOT NULL DEFAULT 'research'
);
CREATE TABLE og.products (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), brand_id uuid REFERENCES og.brands,
 family_id uuid REFERENCES og.terms NOT NULL, name text NOT NULL, slug text NOT NULL UNIQUE,
 identity_scope text NOT NULL, status text NOT NULL DEFAULT 'research', source_id uuid REFERENCES og.sources
);
CREATE TABLE og.product_variants (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), product_id uuid REFERENCES og.products NOT NULL,
 label text NOT NULL, net_amount numeric, unit text, attributes jsonb NOT NULL DEFAULT '{}',
 CHECK(net_amount IS NULL OR net_amount>0)
);
CREATE TABLE og.batches (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), business_id uuid REFERENCES og.businesses NOT NULL,
 product_id uuid REFERENCES og.products, batch_reference text NOT NULL, declared_origin_id uuid REFERENCES og.places,
 processing_place_id uuid REFERENCES og.places, attributes jsonb NOT NULL DEFAULT '{}',
 public_status text NOT NULL DEFAULT 'private', UNIQUE(business_id,batch_reference)
);
CREATE TABLE og.claims (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), subject_type text NOT NULL, subject_id uuid NOT NULL,
 claim_type text NOT NULL, claim_text text NOT NULL, claimant_business_id uuid REFERENCES og.businesses,
 source_id uuid REFERENCES og.sources NOT NULL, evidence_status text NOT NULL DEFAULT 'unreviewed',
 scope text NOT NULL, reviewer_id uuid, reviewed_at timestamptz, review_due_at timestamptz,
 supersedes_id uuid REFERENCES og.claims, is_current boolean NOT NULL DEFAULT true
);
-- subject_type/subject_id polymorphic integrity must be checked by the application
-- or replaced by typed association tables in production; do not infer subject validity.
CREATE TABLE og.capabilities (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), business_id uuid REFERENCES og.businesses NOT NULL,
 family_id uuid REFERENCES og.terms NOT NULL, origin_place_id uuid REFERENCES og.places,
 destination_place_id uuid REFERENCES og.places, ship_from_place_id uuid REFERENCES og.places,
 capability_type text NOT NULL, claim_id uuid REFERENCES og.claims NOT NULL,
 valid_until timestamptz, policy_status text NOT NULL DEFAULT 'not_assessed'
);
CREATE TABLE og.offers (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), business_id uuid REFERENCES og.businesses NOT NULL,
 variant_id uuid REFERENCES og.product_variants, batch_id uuid REFERENCES og.batches,
 source_id uuid REFERENCES og.sources NOT NULL, price_minor bigint, currency char(3),
 availability text, observed_at timestamptz NOT NULL, valid_until timestamptz,
 destination_status text NOT NULL DEFAULT 'not_assessed',
 CHECK(variant_id IS NOT NULL OR batch_id IS NOT NULL), CHECK(price_minor IS NULL OR price_minor>=0)
);
CREATE TABLE og.media (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), source_url text NOT NULL, source_page_url text NOT NULL,
 storage_key text, checksum text, width integer, height integer, media_kind text NOT NULL,
 rights_holder text, rights_scope text, rights_status text NOT NULL DEFAULT 'review_required',
 subject_description text NOT NULL, product_id uuid REFERENCES og.products,
 business_id uuid REFERENCES og.businesses, derivatives jsonb NOT NULL DEFAULT '{}',
 CHECK(width IS NULL OR width>0), CHECK(height IS NULL OR height>0)
);
CREATE TABLE og.pages (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), entity_type text NOT NULL, entity_id uuid,
 template_key text NOT NULL, parent_id uuid REFERENCES og.pages, status text NOT NULL DEFAULT 'research',
 published_at timestamptz, retired_at timestamptz, review_due_at timestamptz,
 CHECK(parent_id IS NULL OR parent_id<>id)
);
CREATE TABLE og.page_locales (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), page_id uuid REFERENCES og.pages NOT NULL,
 locale text NOT NULL, path text NOT NULL UNIQUE, title text NOT NULL, h1 text NOT NULL,
 description text, blocks jsonb NOT NULL DEFAULT '[]', robots text NOT NULL DEFAULT 'noindex,follow',
 canonical_path text, translation_status text NOT NULL DEFAULT 'draft', revision bigint NOT NULL DEFAULT 1,
 author_id uuid, reviewer_id uuid, approved_at timestamptz, modified_at timestamptz,
 UNIQUE(page_id,locale)
);
CREATE TABLE og.page_claims (
 locale_page_id uuid REFERENCES og.page_locales NOT NULL, claim_id uuid REFERENCES og.claims NOT NULL,
 block_id text NOT NULL, PRIMARY KEY(locale_page_id,claim_id,block_id)
);
CREATE TABLE og.internal_links (
 source_id uuid REFERENCES og.page_locales NOT NULL, target_id uuid REFERENCES og.page_locales NOT NULL,
 relation text NOT NULL, block_id text NOT NULL, anchor_text text, reason text NOT NULL,
 PRIMARY KEY(source_id,target_id,relation,block_id), CHECK(source_id<>target_id)
);
CREATE TABLE og.redirects (
 source_path text PRIMARY KEY, target_page_id uuid REFERENCES og.pages NOT NULL,
 locale text NOT NULL, status_code integer NOT NULL DEFAULT 301 CHECK(status_code IN (301,308)), reason text NOT NULL
);
CREATE TABLE og_private.accounts (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), auth_subject text NOT NULL UNIQUE,
 verified_at timestamptz, status text NOT NULL DEFAULT 'pending', created_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE og_private.team_members (
 business_id uuid REFERENCES og.businesses NOT NULL, account_id uuid REFERENCES og_private.accounts NOT NULL,
 role text NOT NULL, approved_at timestamptz, revoked_at timestamptz,
 PRIMARY KEY(business_id,account_id,role)
);
CREATE TABLE og_private.owner_claims (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), business_id uuid REFERENCES og.businesses NOT NULL,
 claimant_id uuid REFERENCES og_private.accounts NOT NULL, state text NOT NULL DEFAULT 'pending',
 proof_storage_key text, reviewer_id uuid, decided_at timestamptz
);
CREATE TABLE og_private.business_contacts (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), business_id uuid REFERENCES og.businesses NOT NULL,
 channel text NOT NULL, encrypted_value bytea NOT NULL, owner_publication_approved boolean NOT NULL DEFAULT false,
 verified_at timestamptz, moderation_hold boolean NOT NULL DEFAULT false, changed_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE og_private.memberships (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), business_id uuid REFERENCES og.businesses NOT NULL,
 provider text NOT NULL, provider_subscription_id text NOT NULL UNIQUE, state text NOT NULL,
 period_start timestamptz, period_end timestamptz, amount_minor bigint NOT NULL CHECK(amount_minor>=0),
 currency char(3) NOT NULL, contact_entitlement boolean NOT NULL DEFAULT false,
 terms_version text NOT NULL, updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE og_private.partner_status (
 business_id uuid PRIMARY KEY REFERENCES og.businesses, approved_at timestamptz, suspended_at timestamptz,
 terms_version text NOT NULL, jurisdiction_policy_version text NOT NULL, permitted_channels text[] NOT NULL DEFAULT '{}'
);
CREATE TABLE og_private.inquiries (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), buyer_account_id uuid REFERENCES og_private.accounts,
 opaque_receipt text NOT NULL UNIQUE, mode text NOT NULL CHECK(mode IN ('matching','selected_supplier')),
 selected_business_id uuid REFERENCES og.businesses, source_page_id uuid REFERENCES og.pages,
 state text NOT NULL DEFAULT 'submitted', requirements jsonb NOT NULL,
 service_notice_version text NOT NULL, channel_verified_at timestamptz,
 max_introductions integer NOT NULL DEFAULT 3 CHECK(max_introductions BETWEEN 1 AND 20),
 created_at timestamptz NOT NULL DEFAULT now(), expires_at timestamptz NOT NULL, withdrawn_at timestamptz,
 idempotency_key text NOT NULL UNIQUE, retention_class text NOT NULL,
 CHECK((mode='selected_supplier' AND selected_business_id IS NOT NULL) OR mode='matching')
);
CREATE TABLE og_private.inquiry_contacts (
 inquiry_id uuid PRIMARY KEY REFERENCES og_private.inquiries, encrypted_contact bytea NOT NULL,
 preferred_channel text NOT NULL, encrypted_name bytea, encrypted_company bytea,
 contact_fingerprint text, delete_after timestamptz
);
CREATE TABLE og_private.inquiry_files (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), inquiry_id uuid REFERENCES og_private.inquiries NOT NULL,
 storage_key text NOT NULL UNIQUE, sha256 text NOT NULL, content_type text NOT NULL,
 scan_state text NOT NULL DEFAULT 'quarantine', pii_review_state text NOT NULL DEFAULT 'pending',
 release_allowed boolean NOT NULL DEFAULT false, delete_after timestamptz
);
CREATE TABLE og_private.match_briefs (
 inquiry_id uuid PRIMARY KEY REFERENCES og_private.inquiries, redacted_fields jsonb NOT NULL,
 reidentification_review text NOT NULL, approved_by uuid NOT NULL, approved_at timestamptz NOT NULL, expires_at timestamptz NOT NULL
);
CREATE TABLE og_private.recipient_grants (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), inquiry_id uuid REFERENCES og_private.inquiries NOT NULL,
 business_id uuid REFERENCES og.businesses NOT NULL, state text NOT NULL CHECK(state IN ('pending','approved','withdrawn','expired')),
 fields text[] NOT NULL, channels text[] NOT NULL, purpose text NOT NULL DEFAULT 'requested_quotation',
 notice_version text NOT NULL, recipient_identity_snapshot jsonb NOT NULL, approved_at timestamptz,
 expires_at timestamptz NOT NULL, withdrawn_at timestamptz, revision bigint NOT NULL DEFAULT 1,
 jurisdiction_policy_status text NOT NULL DEFAULT 'held', UNIQUE(inquiry_id,business_id,revision)
);
CREATE TABLE og_private.lead_offers (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), inquiry_id uuid REFERENCES og_private.inquiries NOT NULL,
 business_id uuid REFERENCES og.businesses NOT NULL, price_minor bigint NOT NULL CHECK(price_minor>=0),
 currency char(3) NOT NULL, exclusivity text NOT NULL CHECK(exclusivity IN ('exclusive','shared','direct_inquiry')),
 scope text NOT NULL, terms_version text NOT NULL, expires_at timestamptz NOT NULL, state text NOT NULL DEFAULT 'offered'
);
CREATE TABLE og_private.lead_orders (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), offer_id uuid REFERENCES og_private.lead_offers NOT NULL UNIQUE,
 grant_id uuid REFERENCES og_private.recipient_grants, payment_state text NOT NULL DEFAULT 'pending',
 provider_payment_id text UNIQUE, authorized_at timestamptz, captured_at timestamptz, refunded_at timestamptz
);
CREATE TABLE og_private.introduction_releases (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), inquiry_id uuid REFERENCES og_private.inquiries NOT NULL,
 business_id uuid REFERENCES og.businesses NOT NULL, grant_id uuid REFERENCES og_private.recipient_grants NOT NULL,
 grant_revision bigint NOT NULL, order_id uuid REFERENCES og_private.lead_orders,
 approved_field_set text[] NOT NULL, state text NOT NULL DEFAULT 'reserved', reserved_at timestamptz NOT NULL DEFAULT now(),
 delivered_at timestamptz, cancelled_at timestamptz, UNIQUE(inquiry_id,business_id)
);
-- Release insertion MUST lock inquiry/grant and enforce cap, identity, approval,
-- current policy and entitlement in one transaction. These cross-row invariants
-- are specified in the reference policy and acceptance tests, not magically enforced by this DDL.
CREATE TABLE og_private.outbox (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), event_key text NOT NULL UNIQUE,
 event_type text NOT NULL, aggregate_id uuid NOT NULL, payload_reference text NOT NULL,
 attempts integer NOT NULL DEFAULT 0, available_at timestamptz NOT NULL DEFAULT now(),
 locked_at timestamptz, completed_at timestamptz, cancelled_at timestamptz, last_error_code text
);
CREATE TABLE og_private.payment_events (
 provider text NOT NULL, external_event_id text NOT NULL, payload_hash text NOT NULL,
 verified_at timestamptz NOT NULL, processed_at timestamptz, event_type text NOT NULL,
 PRIMARY KEY(provider,external_event_id)
);
CREATE TABLE og_private.corrections (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), page_id uuid REFERENCES og.pages,
 business_id uuid REFERENCES og.businesses, report_ciphertext bytea NOT NULL,
 state text NOT NULL DEFAULT 'received', created_at timestamptz NOT NULL DEFAULT now(), decided_at timestamptz
);
CREATE TABLE og_private.privacy_requests (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), account_id uuid REFERENCES og_private.accounts,
 inquiry_id uuid REFERENCES og_private.inquiries, request_type text NOT NULL,
 state text NOT NULL DEFAULT 'received', created_at timestamptz NOT NULL DEFAULT now(),
 legal_deadline_at timestamptz, completed_at timestamptz
);
CREATE TABLE og_private.audit_events (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), actor_id uuid, actor_role text,
 event_type text NOT NULL, subject_id uuid, safe_details jsonb NOT NULL DEFAULT '{}',
 happened_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE og.botanical_taxa (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), accepted_name text NOT NULL, authority_name text,
 external_taxon_id text, source_id uuid REFERENCES og.sources NOT NULL, reviewed_at timestamptz
);
CREATE TABLE og.grade_definitions (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), issuer_business_id uuid REFERENCES og.businesses,
 issuer_description text, label text NOT NULL, criteria text NOT NULL, source_id uuid REFERENCES og.sources NOT NULL,
 valid_from date, valid_until date, CHECK(issuer_business_id IS NOT NULL OR issuer_description IS NOT NULL)
);
CREATE TABLE og.people (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), name text NOT NULL, slug text NOT NULL UNIQUE,
 public_professional_summary text, source_id uuid REFERENCES og.sources, status text NOT NULL DEFAULT 'research'
);
CREATE TABLE og.product_credits (
 product_id uuid REFERENCES og.products NOT NULL, person_id uuid REFERENCES og.people NOT NULL,
 role text NOT NULL, source_id uuid REFERENCES og.sources NOT NULL, PRIMARY KEY(product_id,person_id,role)
);
CREATE TABLE og.events (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), name text NOT NULL, slug text NOT NULL UNIQUE,
 organizer_business_id uuid REFERENCES og.businesses, place_id uuid REFERENCES og.places,
 starts_at timestamptz, ends_at timestamptz, status text NOT NULL DEFAULT 'research', source_id uuid REFERENCES og.sources
);
CREATE TABLE og_private.page_revisions (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), page_locale_id uuid REFERENCES og.page_locales NOT NULL,
 version bigint NOT NULL, snapshot jsonb NOT NULL, editor_id uuid, created_at timestamptz NOT NULL DEFAULT now(),
 reason text NOT NULL, UNIQUE(page_locale_id,version)
);
CREATE TABLE og_private.verification_events (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), business_id uuid REFERENCES og.businesses,
 claim_id uuid REFERENCES og.claims, check_scope text NOT NULL, result text NOT NULL,
 evidence_reference text, reviewer_id uuid NOT NULL, checked_at timestamptz NOT NULL DEFAULT now(), expires_at timestamptz
);
CREATE TABLE og_private.suppressions (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), inquiry_id uuid REFERENCES og_private.inquiries,
 business_id uuid REFERENCES og.businesses, scope text NOT NULL, fingerprint text,
 reason text NOT NULL, created_at timestamptz NOT NULL DEFAULT now(), review_after timestamptz
);

CREATE INDEX capability_lookup ON og.capabilities(family_id,destination_place_id,origin_place_id,business_id);
CREATE INDEX published_business_lookup ON og.businesses(status,headquarters_place_id);
CREATE INDEX page_publication_lookup ON og.pages(status,template_key);
CREATE INDEX grant_lookup ON og_private.recipient_grants(inquiry_id,business_id,state,expires_at);
CREATE INDEX outbox_pending ON og_private.outbox(available_at) WHERE completed_at IS NULL AND cancelled_at IS NULL;
-- Explicit public projection: no private contacts or lead tables.
CREATE VIEW og.public_business_cards AS
 SELECT id,slug,name,headquarters_place_id,public_summary,claimed_at,reviewed_at,affiliate_relationship
 FROM og.businesses WHERE status='published';
REVOKE ALL ON ALL TABLES IN SCHEMA og_private FROM PUBLIC;
COMMIT;

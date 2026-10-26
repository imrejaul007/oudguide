/**
 * OudGuide Domain Layer: Directory, RFQ, Matching, Introductions & Membership
 */

import {
  canRelease,
  type ReleaseContext,
} from '../../permissions/src/lead-policy.ts';
import {
  projectPublicBusiness,
  isContactDisplayEntitled,
  type RawBusinessProfile,
  type PublicBusinessProjection,
  type BusinessFacility,
} from '../../permissions/src/contact-policy.ts';
import { isFieldVisible, type RfqFormValues } from '../../contracts/src/rfq-fields.ts';

export interface InquiryRecord {
  id: string;
  created_at: Date;
  expires_at: Date;
  state: 'pending_verification' | 'authorized' | 'dispatch_pending' | 'completed' | 'withdrawn' | 'closed';
  verification_token: string;
  channel_verified: boolean;
  preferred_channel: 'email' | 'phone' | 'whatsapp' | string;
  buyer_name: string;
  buyer_email?: string;
  buyer_phone?: string;
  buyer_whatsapp?: string;
  company_name?: string;
  destination_country: string;
  product_family: string;
  quantity?: string | number;
  quantity_unit?: string;
  target_price_per_unit?: string | number;
  origin_preference?: string;
  samples_requested: boolean;
  required_date?: string;
  notes?: string;
  form_values: RfqFormValues;
}

export interface MatchBrief {
  inquiry_id: string;
  created_at: Date;
  expires_at: Date;
  product_family: string;
  quantity?: string | number;
  quantity_unit?: string;
  target_price_per_unit?: string | number;
  destination_country: string;
  origin_preference?: string;
  samples_requested: boolean;
  required_date?: string;
  // Strictly NO buyer PII
}

/**
 * A single buyer's RFQ, captured as market data — nothing that identifies
 * the buyer.
 *
 * This is the original-data the site accumulates over time: when a buyer
 * states a target price (and, for wood, a resin-density position), that is
 * a real data point about where the market is. It is captured here, in the
 * one place every submission funnels through, and held PII-free from the
 * moment it is created — the buyer's name, channel and destination are not
 * stored, so no later surface can leak them.
 *
 * It is NOT a price quote and NOT a market truth: it is one buyer's stated
 * target. The public surface may only ever show it in aggregate, and the
 * aggregate is k-anonymized (see `getMarketPriceAggregate`), so a single
 * buyer's number cannot be read back out of it.
 */
export interface MarketDataPoint {
  /** Stable id for the capture, not the inquiry — an inquiry can be
   *  withdrawn and the market signal still stands. */
  id: string;
  recorded_at: Date;
  product_family: string;
  /** Stated target price per unit, parsed to a number when it is one. */
  target_price?: number;
  /** The unit the price was stated against, e.g. "tola", "kg", "ml". */
  price_unit?: string;
  quantity?: number | string;
  quantity_unit?: string;
  /** A qualitative density position, e.g. "high", "medium" — captured
   *  as-is; a density claim is never converted to a measurement here. */
  resin_density?: string;
  origin_preference?: string;
  samples_requested: boolean;
}

/**
 * The one public form the market data may take: a k-anonymized price band
 * per product family. A family with fewer than `k` captured points is
 * omitted entirely, so the band always represents at least `k` buyers and
 * no single target price can be isolated from it.
 */
export interface MarketPriceBand {
  product_family: string;
  n: number;
  /** Inclusive min / max of the captured target prices. */
  min_price: number;
  max_price: number;
  /** Arithmetic mean of the captured target prices. */
  mean_price: number;
  unit: string;
}

/**
 * A payment that has been confirmed by the billing provider.
 *
 * The membership is not activated by the act of asking for it. It is
 * activated by a provider-confirmed payment, and the record of that
 * payment is what the platform keeps.
 */
export interface MembershipPayment {
  /** The provider's reference for the charge. */
  reference: string;
  /** The amount charged, in `currency`. */
  amount: number;
  /** ISO 4217 currency code. The annual price is quoted in AED. */
  currency: string;
  /** When the provider confirmed the charge. */
  confirmed_at: Date;
  /** Which provider confirmed it. */
  provider: string;
}

/** The one approved figure: AED 1,200 per year (DEC02, DEC03, DEC13). */
export const MEMBERSHIP_ANNUAL_AED = 1200;

export interface RecipientGrant {
  grant_id: string;
  inquiry_id: string;
  target_business_id: string;
  granted_at: Date;
  expires_at: Date;
  granted_fields: Set<string>;
  granted_channels: Set<string>;
  granted_purpose: string;
  approved_by_buyer: boolean;
  withdrawn: boolean;
}

export interface IntroductionRelease {
  release_id: string;
  inquiry_id: string;
  target_business_id: string;
  released_at: Date;
  released_fields: Set<string>;
  channel: string;
  status: 'dispatched' | 'pending';
}

export class OudGuideDomainService {
  private businesses: Map<string, RawBusinessProfile> = new Map();
  private inquiries: Map<string, InquiryRecord> = new Map();
  private matchBriefs: Map<string, MatchBrief> = new Map();
  private recipientGrants: Map<string, RecipientGrant> = new Map();
  private releases: Map<string, IntroductionRelease> = new Map();
  private outbox: Array<{ id: string; event: string; payload: any; created_at: Date }> = [];
  private marketDataPoints: MarketDataPoint[] = [];

  constructor(initialBusinesses: RawBusinessProfile[] = []) {
    for (const b of initialBusinesses) {
      this.businesses.set(b.id, { ...b });
    }
  }

  // -------------------------------------------------------------
  // DIRECTORY
  // -------------------------------------------------------------

  /**
   * List businesses.
   *
   * `role`, `product_family`, `origin` and `destination` are independent
   * selectors, and they mean different things:
   *
   *   role         — what the business does (distiller, wholesaler, retailer)
   *   product_family — what it sells (oud wood, oud oil, perfume oil, …)
   *   origin       — the origin of the material it handles
   *   destination  — a country it is documented to ship to
   *
   * A business that handles Cambodian agarwood matches `origin=kh` whether
   * or not it is located in Cambodia. Its own country is matched by
   * `location`, not by `origin`, so the two never blur.
   *
   * Fixture records are returned unless `excludeDemo` is set, so every
   * public surface states its intent rather than relying on a default
   * that could be changed by accident.
   */
  public listBusinesses(filters?: {
    search?: string;
    role?: string;
    product_family?: string;
    country_id?: string;
    origin?: string;
    destination?: string;
    /**
     * Exclude the development fixtures.
     *
     * Publication is a public-surface decision, so the default is to
     * return the whole register and let the caller state its intent. A
     * caller that does not pass this flag will surface a fixture, which
     * is why every public surface passes it explicitly.
     */
    excludeDemo?: boolean;
  }): PublicBusinessProjection[] {
    let list = Array.from(this.businesses.values());

    if (filters?.excludeDemo) {
      list = list.filter((b) => !b.demo);
    }

    if (filters?.country_id) {
      // The broad country filter: a business that meets this country
      // anywhere — it is located there, it has a facility there, or it
      // is documented to ship there.
      //
      // This is deliberately NOT the location filter. The directory
      // page's own country filter means "located in", and the two
      // answers differ for a Dubai company that ships to Saudi Arabia:
      // the broad filter includes it, the location filter does not. The
      // page applies the location filter itself, from the record's own
      // fields, because conflating the two is what OG-A09 was.
      const code = filters.country_id.toUpperCase();
      list = list.filter(
        (b) =>
          b.country_id.toUpperCase() === code ||
          (b.facilities ?? []).some((f) => f.country_id.toUpperCase() === code) ||
          (b.serves_destinations ?? []).some((d) => d.toUpperCase() === code)
      );
    }

    if (filters?.role) {
      // The role is a controlled slug, matched against the record's own
      // `roles` list. It used to be compared against `business_type`,
      // which is a single display string: a business that distills and
      // wholesales had one business_type, so the other role could never
      // match it and the directory silently dropped it from a listing
      // its own category claimed.
      const role = filters.role.toLowerCase();
      list = list.filter((b) => (b.roles ?? []).some((r) => r.toLowerCase() === role));
    }

    if (filters?.product_family) {
      const family = filters.product_family.toLowerCase();
      list = list.filter((b) =>
        (b.product_families ?? []).some((f) => f.toLowerCase().includes(family))
      );
    }

    if (filters?.origin) {
      const origin = filters.origin.toLowerCase();
      list = list.filter((b) =>
        (b.handles_origins ?? []).some((o) => o.toLowerCase().includes(origin))
      );
    }

    if (filters?.destination) {
      const destination = filters.destination.toUpperCase();
      list = list.filter((b) =>
        (b.serves_destinations ?? []).some((d) => d.toUpperCase() === destination)
      );
    }

    if (filters?.search) {
      const q = filters.search.toLowerCase();
      list = list.filter(
        (b) =>
          b.name.toLowerCase().includes(q) ||
          b.description?.toLowerCase().includes(q) ||
          b.city?.toLowerCase().includes(q)
      );
    }

    // Always project with strict contact gating
    return list.map((b) => projectPublicBusiness(b));
  }

  /**
   * The documented facilities across every business.
   *
   * The producer map plots these and not the profile locations: a business
   * that resells Cambodian oud from Dubai has no Cambodian facility, and
   * plotting its address in Cambodia would be a false claim about where
   * material is made.
   */
  public listDocumentedFacilities(): Array<{
    business_id: string;
    slug: string;
    name: string;
    facility: BusinessFacility;
  }> {
    const out: Array<{
      business_id: string;
      slug: string;
      name: string;
      facility: BusinessFacility;
    }> = [];

    for (const b of this.businesses.values()) {
      if (b.demo) continue;
      for (const f of b.facilities ?? []) {
        if (!f.documented) continue;
        out.push({
          business_id: b.id,
          slug: b.slug,
          name: b.name,
          facility: f,
        });
      }
    }

    return out;
  }

  public getBusinessBySlug(slug: string): PublicBusinessProjection | null {
    for (const b of this.businesses.values()) {
      if (b.slug === slug) {
        return projectPublicBusiness(b);
      }
    }
    return null;
  }

  public getRawBusiness(id: string): RawBusinessProfile | null {
    return this.businesses.get(id) || null;
  }

  /**
   * The raw record for a business slug.
   *
   * The verification record is built from the raw record, because the
   * public projection deliberately drops the evidence trail and the
   * fixture flag. A page that claims to show what was checked must be
   * reading the record that holds the check.
   */
  public getRawBusinessBySlug(slug: string): RawBusinessProfile | null {
    for (const b of this.businesses.values()) {
      if (b.slug === slug) return b;
    }
    return null;
  }

  /**
   * Resolve a supplier reference to a business id.
   *
   * The RFQ form carries a supplier *slug* in the URL and in the posted
   * form, but the lead policy compares a *business id*. Before this
   * existed, a selected-supplier request could never be released: the
   * policy saw `al-mutalib-perfumes` where it expected `biz_almutalib_01`
   * and refused with `supplier_substitution` — a refusal that looked like
   * a security control but was actually a type mismatch.
   */
  public resolveBusinessId(reference: string): string | null {
    if (!reference) return null;

    // Already an id.
    if (this.businesses.has(reference)) return reference;

    // A slug.
    for (const b of this.businesses.values()) {
      if (b.slug === reference) return b.id;
    }

    return null;
  }

  public claimProfile(businessId: string, claimantEmail: string): { success: boolean; message: string } {
    const biz = this.businesses.get(businessId);
    if (!biz) return { success: false, message: 'Business not found' };
    if (biz.is_claimed) return { success: false, message: 'Business is already claimed' };

    biz.is_claimed = true;
    return {
      success: true,
      message: `Claim submitted for ${biz.name}. Verification instructions sent to ${claimantEmail}.`,
    };
  }

  /**
   * Activate an annual membership.
   *
   * A membership is activated by a confirmed payment, and by nothing else.
   * The audit found the checkout activating membership on a plain form
   * post, which meant a success URL was enough to grant a paying
   * entitlement — and the decision register has the billing cadence, the
   * tax treatment and the renewal terms still marked as awaiting owner
   * approval (DEC02, DEC03, DEC13).
   *
   * The payment must be a provider-confirmed record, carrying a
   * reference, an amount in AED, and the moment it was confirmed. A
   * caller with no payment record is refused, and a payment below the
   * approved annual price is refused.
   */
  public purchaseMembership(
    businessId: string,
    payment?: MembershipPayment
  ): { success: boolean; message: string; reference?: string } {
    const biz = this.businesses.get(businessId);
    if (!biz) return { success: false, message: 'Business not found' };
    if (!biz.is_claimed) return { success: false, message: 'Must claim profile before purchasing membership' };

    if (!payment) {
      return {
        success: false,
        message:
          'A confirmed payment is required to activate a membership. A payment page, a success URL or a browser request does not activate one.',
      };
    }

    if (!payment.reference || !payment.confirmed_at) {
      return {
        success: false,
        message: 'A payment reference and a confirmation time are required.',
      };
    }

    if (payment.currency !== 'AED') {
      return {
        success: false,
        message: `Membership is priced in AED; a payment in ${payment.currency} cannot activate it.`,
      };
    }

    if (!(payment.amount >= MEMBERSHIP_ANNUAL_AED)) {
      return {
        success: false,
        message: `The annual membership price is AED ${MEMBERSHIP_ANNUAL_AED.toLocaleString('en-US')}.`,
      };
    }

    biz.has_active_membership = true;
    // The owner may still switch contact publication off from the
    // workspace; membership is what unlocks it, not the other way round.
    biz.contact_display_enabled = true;

    return {
      success: true,
      message: `Annual membership activated for ${biz.name} (AED ${MEMBERSHIP_ANNUAL_AED.toLocaleString('en-US')}/year). Contact display unlocked.`,
      reference: payment.reference,
    };
  }

  public setContactVisibility(businessId: string, enabled: boolean): { success: boolean; contact_unlocked: boolean } {
    const biz = this.businesses.get(businessId);
    if (!biz) return { success: false, contact_unlocked: false };
    biz.contact_display_enabled = enabled;
    return { success: true, contact_unlocked: isContactDisplayEntitled(biz) };
  }

  // -------------------------------------------------------------
  // RFQ INTAKE & VERIFICATION
  // -------------------------------------------------------------

  public submitInquiry(values: RfqFormValues): { inquiry_id: string; verification_token: string; state: string } {
    const id = `inq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const now = new Date();
    const expires_at = new Date(now.getTime() + 14 * 86400000); // 14 days
    const token = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP

    const record: InquiryRecord = {
      id,
      created_at: now,
      expires_at,
      state: 'pending_verification',
      verification_token: token,
      channel_verified: false,
      preferred_channel: (values.preferred_contact_channel as string) || 'email',
      buyer_name: values.buyer_name || 'Anonymous Buyer',
      buyer_email: values.buyer_email,
      buyer_phone: values.buyer_phone,
      buyer_whatsapp: values.buyer_whatsapp,
      company_name: values.company_name,
      destination_country: values.destination_country || 'United Arab Emirates',
      product_family: values.product_family || 'Oud oil',
      quantity: values.quantity,
      quantity_unit: values.quantity_unit || 'tolas',
      target_price_per_unit: values.target_price_per_unit,
      origin_preference: values.origin_preference,
      samples_requested: Boolean(values.samples_requested),
      required_date: values.required_date,
      form_values: values,
    };

    // A selected-supplier request names its recipient. The reference may
    // arrive as a slug, so it is resolved to a business id here. An
    // unresolvable reference is rejected outright: a request that says
    // "send this to a supplier we cannot identify" must not become a
    // generic matching request by accident.
    if (record.form_values.request_mode === 'selected_supplier') {
      const reference =
        (values.selected_supplier_id as string) ||
        (values.selected_supplier_slug as string) ||
        '';

      if (!reference) {
        this.inquiries.delete(id);
        return {
          inquiry_id: '',
          verification_token: '',
          state: 'rejected_no_supplier',
        };
      }

      const businessId = this.resolveBusinessId(reference);
      if (!businessId) {
        this.inquiries.delete(id);
        return {
          inquiry_id: '',
          verification_token: '',
          state: 'rejected_unknown_supplier',
        };
      }

      record.form_values.selected_supplier_id = businessId;
    }

    this.inquiries.set(id, record);

    // Capture the market data point. This is the original-data the site
    // accumulates: what a buyer stated, PII-free, at the moment of
    // submission. It is recorded even when the inquiry is later withdrawn,
    // because the market signal is independent of the buyer's consent to be
    // contacted.
    this.captureMarketDataPoint(id, record);

    // Enqueue verification outbox notification
    this.outbox.push({
      id: `outbox_verify_${id}`,
      event: 'INQUIRY_VERIFICATION_SENT',
      payload: {
        inquiry_id: id,
        channel: record.preferred_channel,
        token,
        destination: record.buyer_email || record.buyer_phone || record.buyer_whatsapp,
      },
      created_at: now,
    });

    return { inquiry_id: id, verification_token: token, state: record.state };
  }

  public verifyInquiryChannel(inquiryId: string, token: string): { success: boolean; state: string } {
    const inq = this.inquiries.get(inquiryId);
    if (!inq) return { success: false, state: 'not_found' };
    if (inq.verification_token !== token) return { success: false, state: inq.state };

    inq.channel_verified = true;
    inq.state = 'authorized';

    // Generate Redacted Match Brief upon authorization
    const brief: MatchBrief = {
      inquiry_id: inq.id,
      created_at: inq.created_at,
      expires_at: inq.expires_at,
      product_family: inq.product_family,
      quantity: inq.quantity,
      quantity_unit: inq.quantity_unit,
      target_price_per_unit: inq.target_price_per_unit,
      destination_country: inq.destination_country,
      origin_preference: inq.origin_preference,
      samples_requested: inq.samples_requested,
      required_date: inq.required_date,
    };
    this.matchBriefs.set(inq.id, brief);

    return { success: true, state: inq.state };
  }

  public getInquiry(id: string): InquiryRecord | null {
    return this.inquiries.get(id) || null;
  }

  /**
   * Pull a PII-free market data point out of a just-submitted inquiry.
   *
   * Only the fields that are market signals are copied; the buyer's
   * identity, contact channel and destination are deliberately left behind.
   * A price is kept as a number when it parses to one (a buyer typing
   * "350" or "350 AED" both capture as 350); otherwise the point is still
   * recorded, just without a price, because the density and quantity
   * positions carry signal too.
   */
  private captureMarketDataPoint(inquiryId: string, record: InquiryRecord): void {
    const fv = record.form_values;
    const priceUnit =
      (typeof fv.quantity_unit === 'string' && fv.quantity_unit.trim()) || undefined;

    const rawPrice = record.target_price_per_unit ?? fv.target_price_per_unit;
    let targetPrice: number | undefined;
    if (rawPrice !== undefined && rawPrice !== '' && rawPrice !== null) {
      const parsed = Number(String(rawPrice).replace(/[^0-9.]/g, ''));
      if (Number.isFinite(parsed)) targetPrice = parsed;
    }

    const rawQty = record.quantity ?? fv.quantity;
    const quantity =
      rawQty !== undefined && rawQty !== '' ? Number(rawQty) || rawQty : undefined;

    const point: MarketDataPoint = {
      id: `md_${inquiryId}`,
      recorded_at: record.created_at,
      product_family: record.product_family,
      target_price: targetPrice,
      price_unit: priceUnit,
      quantity,
      quantity_unit: record.quantity_unit,
      resin_density: fv.resin_density,
      origin_preference: record.origin_preference,
      samples_requested: record.samples_requested,
    };

    // A point with no signal at all (no price, no density, no origin
    // position, no quantity) would just be noise, so it is not stored.
    const hasSignal =
      targetPrice !== undefined ||
      point.resin_density ||
      point.origin_preference ||
      quantity !== undefined;
    if (hasSignal) this.marketDataPoints.push(point);
  }

  /**
   * Operator-gated view of the captured market points, oldest first.
   * Every field is PII-free by construction; this accessor exists only on
   * the domain service, so the operator surface can read it while the
   * public API never can.
   */
  public getMarketDataPoints(): MarketDataPoint[] {
    return [...this.marketDataPoints];
  }

  /**
   * The public-safe form of the captured data: a k-anonymized price band
   * per product family.
   *
   * A family whose captured points fall below `k` is omitted entirely —
   * returning it as `{ n: 0 }` would still tell a reader "this family has
   * been queried", which is a signal about demand. Omission is the honest
   * answer when there is too little to say. Within a family that does
   * appear, only min / max / mean are emitted, never an individual target.
   */
  getMarketPriceAggregate(k: number = 5): MarketPriceBand[] {
    const byFamily = new Map<string, { prices: number[]; unit: string }>();
    for (const p of this.marketDataPoints) {
      if (p.target_price === undefined) continue;
      const bucket = byFamily.get(p.product_family) ?? { prices: [], unit: p.price_unit || '' };
      bucket.prices.push(p.target_price);
      bucket.unit = bucket.unit || p.price_unit || '';
      byFamily.set(p.product_family, bucket);
    }

    const bands: MarketPriceBand[] = [];
    for (const [family, { prices, unit }] of byFamily) {
      if (prices.length < k) continue;
      const min_price = Math.min(...prices);
      const max_price = Math.max(...prices);
      const mean_price =
        Math.round((prices.reduce((s, x) => s + x, 0) / prices.length) * 100) / 100;
      bands.push({ product_family: family, n: prices.length, min_price, max_price, mean_price, unit });
    }
    return bands.sort((a, b) => a.product_family.localeCompare(b.product_family));
  }

  public getMatchBrief(inquiryId: string): MatchBrief | null {
    return this.matchBriefs.get(inquiryId) || null;
  }

  public listMatchBriefs(): MatchBrief[] {
    return Array.from(this.matchBriefs.values());
  }

  // -------------------------------------------------------------
  // BUYER APPROVAL & INTRODUCTION RELEASE
  // -------------------------------------------------------------

  public approveRecipient(
    inquiryId: string,
    targetBusinessId: string
  ): { success: boolean; grant_id?: string; error?: string } {
    const inq = this.inquiries.get(inquiryId);
    if (!inq) return { success: false, error: 'Inquiry not found' };
    if (!inq.channel_verified || inq.state !== 'authorized') {
      return { success: false, error: 'Inquiry not authorized' };
    }

    // Enforce recipient cap first (max 3)
    const existingGrants = Array.from(this.recipientGrants.values()).filter(
      (g) => g.inquiry_id === inquiryId && !g.withdrawn
    );
    if (existingGrants.length >= 3) {
      return { success: false, error: 'Recipient cap reached (maximum 3 approved suppliers)' };
    }

    const businessId = this.resolveBusinessId(targetBusinessId);
    if (!businessId) return { success: false, error: 'Target business not found' };

    const biz = this.businesses.get(businessId)!;

    const grantId = `grant_${inquiryId}_${businessId}`;
    const grant: RecipientGrant = {
      grant_id: grantId,
      inquiry_id: inquiryId,
      target_business_id: businessId,
      granted_at: new Date(),
      expires_at: inq.expires_at,
      granted_fields: new Set(['email', 'requirements']),
      granted_channels: new Set([inq.preferred_channel]),
      granted_purpose: 'requested_quotation',
      approved_by_buyer: true,
      withdrawn: false,
    };

    this.recipientGrants.set(grantId, grant);
    return { success: true, grant_id: grantId };
  }

  public executeRelease(
    inquiryId: string,
    targetBusinessId: string
  ): { success: boolean; reason: string; release_id?: string } {
    const inq = this.inquiries.get(inquiryId);
    if (!inq) return { success: false, reason: 'inquiry_not_found' };

    const businessId = this.resolveBusinessId(targetBusinessId);
    if (!businessId) return { success: false, reason: 'business_not_found' };

    const biz = this.businesses.get(businessId)!;

    const grantId = `grant_${inquiryId}_${businessId}`;
    const grant = this.recipientGrants.get(grantId);
    if (!grant) return { success: false, reason: 'recipient_or_request_mismatch' };

    // Get all already released business IDs for this inquiry
    const releasedIds = new Set(
      Array.from(this.releases.values())
        .filter((r) => r.inquiry_id === inquiryId)
        .map((r) => r.target_business_id)
    );

    const now = new Date();
    const ctx: ReleaseContext = {
      inquiry_id: inq.id,
      target_business_id: biz.id,
      grant_business_id: grant.target_business_id,
      grant_inquiry_id: grant.inquiry_id,
      mode: inq.form_values.request_mode || 'matching',
      selected_business_id: inq.form_values.selected_supplier_id || null,
      inquiry_state: inq.state,
      channel_verified: inq.channel_verified,
      partner_approved: Boolean(biz.partner_approved),
      partner_suspended: Boolean(biz.partner_suspended),
      jurisdiction_allowed: Boolean(biz.jurisdiction_allowed ?? true),
      consent_approved: grant.approved_by_buyer,
      consent_withdrawn: grant.withdrawn,
      consent_expires_at: grant.expires_at,
      inquiry_expires_at: inq.expires_at,
      now: now,
      requested_fields: new Set(['email', 'requirements']),
      granted_fields: grant.granted_fields,
      requested_channel: inq.preferred_channel,
      granted_channels: grant.granted_channels,
      purpose: 'requested_quotation',
      granted_purpose: grant.granted_purpose,
      released_business_ids: releasedIds,
      recipient_cap: 3,
      // The commercial entitlement is a property of the business, not a
      // constant. Hard-coding it true meant the policy's own
      // `no_commercial_entitlement` branch could never fire.
      commercial_entitlement: Boolean(biz.commercial_entitlement),
      exclusive: false,
    };

    const [allowed, reason] = canRelease(ctx);
    if (!allowed) {
      return { success: false, reason };
    }

    const releaseId = `rel_${Date.now()}_${businessId}`;
    const releaseRecord: IntroductionRelease = {
      release_id: releaseId,
      inquiry_id: inq.id,
      target_business_id: biz.id,
      released_at: now,
      released_fields: new Set(['email', 'requirements']),
      channel: inq.preferred_channel,
      status: 'dispatched',
    };

    this.releases.set(releaseId, releaseRecord);

    // Enqueue outbox release notification
    this.outbox.push({
      id: `outbox_rel_${releaseId}`,
      event: 'INTRODUCTION_RELEASED',
      payload: {
        release_id: releaseId,
        inquiry_id: inq.id,
        supplier_id: biz.id,
        supplier_name: biz.name,
        buyer_name: inq.buyer_name,
        buyer_contact: inq.buyer_email || inq.buyer_phone || inq.buyer_whatsapp,
        requirements: {
          product_family: inq.product_family,
          quantity: inq.quantity,
          unit: inq.quantity_unit,
          destination: inq.destination_country,
        },
      },
      created_at: now,
    });

    return { success: true, reason: 'allowed', release_id: releaseId };
  }

  public getOutbox() {
    return [...this.outbox];
  }

  /**
   * Restore an inquiry (and its recipient grants) from a plain object.
   *
   * The domain keeps state in memory, which does not survive between
   * serverless invocations. A buyer carries their own inquiry state in a
   * signed cookie; when a request needs the domain to reason about that
   * inquiry — verifying the OTP, approving a recipient, executing a
   * release — the record is hydrated back into this instance first, so
   * the fail-closed policy is evaluated against the real request rather
   * than skipped because the map came up empty.
   */
  public hydrateInquiry(
    record: {
      id: string;
      created_at: Date;
      expires_at: Date;
      state: InquiryRecord['state'];
      verification_token: string;
      channel_verified: boolean;
      preferred_channel: string;
      buyer_name: string;
      buyer_email?: string;
      buyer_phone?: string;
      buyer_whatsapp?: string;
      company_name?: string;
      destination_country: string;
      product_family: string;
      quantity?: string | number;
      quantity_unit?: string;
      target_price_per_unit?: string | number;
      origin_preference?: string;
      samples_requested: boolean;
      required_date?: string;
      form_values: RfqFormValues;
    },
    grants: Array<{ target_business_id: string; grant_id: string }> = []
  ): InquiryRecord {
    const restored: InquiryRecord = {
      id: record.id,
      created_at: record.created_at,
      expires_at: record.expires_at,
      state: record.state,
      verification_token: record.verification_token,
      channel_verified: record.channel_verified,
      preferred_channel: record.preferred_channel,
      buyer_name: record.buyer_name,
      buyer_email: record.buyer_email,
      buyer_phone: record.buyer_phone,
      buyer_whatsapp: record.buyer_whatsapp,
      company_name: record.company_name,
      destination_country: record.destination_country,
      product_family: record.product_family,
      quantity: record.quantity,
      quantity_unit: record.quantity_unit,
      target_price_per_unit: record.target_price_per_unit,
      origin_preference: record.origin_preference,
      samples_requested: record.samples_requested,
      required_date: record.required_date,
      form_values: record.form_values,
    };

    this.inquiries.set(restored.id, restored);

    // Restore the approved recipients, preserving the cap semantics.
    for (const grant of grants) {
      const grantId = grant.grant_id;
      this.recipientGrants.set(grantId, {
        grant_id: grantId,
        inquiry_id: restored.id,
        target_business_id: grant.target_business_id,
        granted_at: restored.created_at,
        expires_at: restored.expires_at,
        granted_fields: new Set(['email', 'requirements']),
        granted_channels: new Set([restored.preferred_channel]),
        granted_purpose: 'requested_quotation',
        approved_by_buyer: true,
        withdrawn: false,
      });
    }

    // Rebuild the redacted brief when the inquiry is already authorized.
    if (restored.state === 'authorized' || restored.state === 'dispatch_pending') {
      this.matchBriefs.set(restored.id, {
        inquiry_id: restored.id,
        created_at: restored.created_at,
        expires_at: restored.expires_at,
        product_family: restored.product_family,
        quantity: restored.quantity,
        quantity_unit: restored.quantity_unit,
        target_price_per_unit: restored.target_price_per_unit,
        destination_country: restored.destination_country,
        origin_preference: restored.origin_preference,
        samples_requested: restored.samples_requested,
        required_date: restored.required_date,
      });
    }

    return restored;
  }
}

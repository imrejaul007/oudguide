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

  constructor(initialBusinesses: RawBusinessProfile[] = []) {
    for (const b of initialBusinesses) {
      this.businesses.set(b.id, { ...b });
    }
  }

  // -------------------------------------------------------------
  // DIRECTORY
  // -------------------------------------------------------------

  public listBusinesses(filters?: {
    search?: string;
    role?: string;
    country_id?: string;
    origin?: string;
  }): PublicBusinessProjection[] {
    let list = Array.from(this.businesses.values());

    if (filters?.country_id) {
      list = list.filter((b) => b.country_id.toUpperCase() === filters.country_id!.toUpperCase());
    }

    if (filters?.role) {
      list = list.filter((b) => b.business_type?.toLowerCase() === filters.role!.toLowerCase());
    }

    if (filters?.origin) {
      list = list.filter((b) =>
        b.verified_origins?.some((o) => o.toLowerCase().includes(filters.origin!.toLowerCase()))
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

  public purchaseMembership(businessId: string): { success: boolean; message: string } {
    const biz = this.businesses.get(businessId);
    if (!biz) return { success: false, message: 'Business not found' };
    if (!biz.is_claimed) return { success: false, message: 'Must claim profile before purchasing membership' };

    biz.has_active_membership = true;
    biz.contact_display_enabled = true; // by default unlocked upon paid subscription
    return {
      success: true,
      message: `Annual membership activated for ${biz.name} (AED 1,200/year). Contact display unlocked.`,
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

    this.inquiries.set(id, record);

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

    const biz = this.businesses.get(targetBusinessId);
    if (!biz) return { success: false, error: 'Target business not found' };

    const grantId = `grant_${inquiryId}_${targetBusinessId}`;
    const grant: RecipientGrant = {
      grant_id: grantId,
      inquiry_id: inquiryId,
      target_business_id: targetBusinessId,
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

    const biz = this.businesses.get(targetBusinessId);
    if (!biz) return { success: false, reason: 'business_not_found' };

    const grantId = `grant_${inquiryId}_${targetBusinessId}`;
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
      commercial_entitlement: true,
      exclusive: false,
    };

    const [allowed, reason] = canRelease(ctx);
    if (!allowed) {
      return { success: false, reason };
    }

    const releaseId = `rel_${Date.now()}_${targetBusinessId}`;
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
}

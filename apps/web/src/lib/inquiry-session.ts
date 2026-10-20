import { domain } from './data';
import { readPersistedInquiry, type PersistedInquiry } from './inquiry-store';

/**
 * A normalized inquiry, whichever source it came from.
 *
 * The domain record and the persisted cookie record expose the same
 * fields, so the UI can render either without branching.
 */
export interface LoadedInquiry {
  id: string;
  state: string;
  channel_verified: boolean;
  preferred_channel: string;
  verification_token: string;
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
  form_values: Record<string, any>;
  created_at: Date;
  expires_at: Date;
  grants: { target_business_id: string; grant_id: string }[];
  releases: { release_id: string; target_business_id: string }[];
}

/**
 * Load an inquiry and make it available to the domain service.
 *
 * Order of preference:
 *   1. The in-memory domain record — the same-request truth, and the only
 *      source in the local test server.
 *   2. The buyer's signed cookie — the durable copy. When this is used
 *      the record is hydrated back into the domain so the fail-closed
 *      lead policy is evaluated against the real request instead of
 *      short-circuiting on an empty map.
 */
export async function loadInquiry(id: string): Promise<LoadedInquiry | null> {
  const live = domain.getInquiry(id);
  if (live) {
    return {
      id: live.id,
      state: live.state,
      channel_verified: live.channel_verified,
      preferred_channel: live.preferred_channel,
      verification_token: live.verification_token,
      buyer_name: live.buyer_name,
      buyer_email: live.buyer_email,
      buyer_phone: live.buyer_phone,
      buyer_whatsapp: live.buyer_whatsapp,
      company_name: live.company_name,
      destination_country: live.destination_country,
      product_family: live.product_family,
      quantity: live.quantity,
      quantity_unit: live.quantity_unit,
      target_price_per_unit: live.target_price_per_unit,
      origin_preference: live.origin_preference,
      samples_requested: live.samples_requested,
      required_date: live.required_date,
      form_values: live.form_values as Record<string, any>,
      created_at: live.created_at,
      expires_at: live.expires_at,
      grants: [],
      releases: [],
    };
  }

  const persisted = await readPersistedInquiry(id);
  if (!persisted) return null;

  // Hydrate so the domain can reason about this inquiry (verify, approve,
  // release). Without this the policy would be skipped entirely.
  domain.hydrateInquiry(
    {
      id: persisted.id,
      created_at: new Date(persisted.created_at),
      expires_at: new Date(persisted.expires_at),
      state: persisted.state as any,
      verification_token: persisted.verification_token,
      channel_verified: persisted.channel_verified,
      preferred_channel: persisted.preferred_channel,
      buyer_name: persisted.buyer_name,
      buyer_email: persisted.buyer_email,
      buyer_phone: persisted.buyer_phone,
      buyer_whatsapp: persisted.buyer_whatsapp,
      company_name: persisted.company_name,
      destination_country: persisted.destination_country,
      product_family: persisted.product_family,
      quantity: persisted.quantity,
      quantity_unit: persisted.quantity_unit,
      target_price_per_unit: persisted.target_price_per_unit,
      origin_preference: persisted.origin_preference,
      samples_requested: persisted.samples_requested,
      required_date: persisted.required_date,
      form_values: persisted.form_values,
    },
    persisted.grants
  );

  return {
    ...persisted,
    created_at: new Date(persisted.created_at),
    expires_at: new Date(persisted.expires_at),
  };
}

/** Convert a loaded inquiry back into the persistable shape. */
export function toPersisted(inquiry: LoadedInquiry): PersistedInquiry {
  return {
    id: inquiry.id,
    created_at: inquiry.created_at.toISOString(),
    expires_at: inquiry.expires_at.toISOString(),
    state: inquiry.state,
    verification_token: inquiry.verification_token,
    channel_verified: inquiry.channel_verified,
    preferred_channel: inquiry.preferred_channel,
    buyer_name: inquiry.buyer_name,
    buyer_email: inquiry.buyer_email,
    buyer_phone: inquiry.buyer_phone,
    buyer_whatsapp: inquiry.buyer_whatsapp,
    company_name: inquiry.company_name,
    destination_country: inquiry.destination_country,
    product_family: inquiry.product_family,
    quantity: inquiry.quantity,
    quantity_unit: inquiry.quantity_unit,
    target_price_per_unit: inquiry.target_price_per_unit,
    origin_preference: inquiry.origin_preference,
    samples_requested: inquiry.samples_requested,
    required_date: inquiry.required_date,
    form_values: inquiry.form_values,
    grants: inquiry.grants,
    releases: inquiry.releases,
  };
}

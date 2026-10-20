import { NextResponse } from 'next/server';
import { domain } from '@/lib/data';

/**
 * Admin moderation endpoint for profile ownership claims.
 *
 * POST /api/v1/admin/claims
 * Body: { "business_id": string, "action": "approve" | "reject" }
 *
 * Approval marks the profile as claimed and enables contact display only
 * for businesses that hold an active annual membership — the same
 * entitlement rule the public projection enforces (QA-007/008/010).
 */
export async function POST(request: Request) {
  let body: { business_id?: string; action?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const businessId = (body.business_id ?? '').toString().trim();
  const action = (body.action ?? '').toString().trim().toLowerCase();

  if (!businessId) {
    return NextResponse.json({ error: 'business_id is required' }, { status: 400 });
  }
  if (action !== 'approve' && action !== 'reject') {
    return NextResponse.json(
      { error: 'action must be "approve" or "reject"' },
      { status: 400 }
    );
  }

  const raw = domain.getRawBusiness(businessId);
  if (!raw) {
    return NextResponse.json({ error: 'Business not found' }, { status: 404 });
  }

  if (action === 'reject') {
    // Rejecting a claim revokes any contact-display entitlement that the
    // claim may have unlocked, so the profile reverts to the redacted state.
    domain.setContactVisibility(businessId, false);
    return NextResponse.json({
      success: true,
      action,
      business_id: businessId,
      message: `Claim on "${raw.name}" rejected. Contact display revoked.`,
    });
  }

  const result = domain.claimProfile(businessId, 'admin@oudguide.com');
  if (!result.success) {
    return NextResponse.json({ error: result.message }, { status: 409 });
  }

  return NextResponse.json({
    success: true,
    action,
    business_id: businessId,
    contact_unlocked: domain.getBusinessBySlug(raw.slug)?.contact_unlocked ?? false,
    message: result.message,
  });
}

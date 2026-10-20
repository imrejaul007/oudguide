import { NextResponse } from 'next/server';
import { domain } from '@/lib/data';
import { loadInquiry, toPersisted } from '@/lib/inquiry-session';
import { inquiryCookieHeader } from '@/lib/inquiry-store';

/**
 * Buyer approval of a named recipient (form submission).
 *
 * This route previously redirected with `?approved=...` without ever
 * calling the domain, so the recipient cap, the authorization check and
 * the lead policy were all bypassed in production. It now:
 *   1. calls `approveRecipient`, which enforces the 3-recipient cap and
 *      requires the inquiry to be authorized, and
 *   2. calls `executeRelease`, which runs the fail-closed lead policy
 *      and only then enqueues the introduction for dispatch.
 */
export async function POST(request: Request) {
  const formData = await request.formData();
  const locale = formData.get('locale') || 'en';
  const inquiryId = formData.get('inquiry_id') || '';
  const targetBusinessId = (formData.get('target_business_id') || '').toString();
  const supplierName = formData.get('target_business_name') || 'Approved Supplier';

  const loaded = await loadInquiry(inquiryId);
  if (!loaded) {
    return NextResponse.redirect(
      new URL(`/${locale}/inquiries/${inquiryId}?error=Inquiry+not+found`, request.url),
      303
    );
  }

  const approval = domain.approveRecipient(inquiryId, targetBusinessId);
  if (!approval.success) {
    return NextResponse.redirect(
      new URL(
        `/${locale}/inquiries/${inquiryId}?error=${encodeURIComponent(approval.error || 'Approval refused')}`,
        request.url
      ),
      303
    );
  }

  // Run the lead policy before anything is dispatched.
  const release = domain.executeRelease(inquiryId, targetBusinessId);

  const updated = await loadInquiry(inquiryId);
  const response = NextResponse.redirect(
    new URL(
      `/${locale}/inquiries/${inquiryId}?verified=true&approved=${encodeURIComponent(String(supplierName))}`,
      request.url
    ),
    303
  );

  if (updated) {
    // Record the grant and the release so the cap survives a reload.
    if (!updated.grants.some((g) => g.target_business_id === targetBusinessId)) {
      updated.grants.push({
        target_business_id: targetBusinessId,
        grant_id: approval.grant_id ?? `grant_${inquiryId}_${targetBusinessId}`,
      });
    }
    if (release.success && release.release_id) {
      updated.releases.push({
        release_id: release.release_id,
        target_business_id: targetBusinessId,
      });
    }
    response.headers.append('Set-Cookie', inquiryCookieHeader(toPersisted(updated)));
  }

  return response;
}

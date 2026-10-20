import { NextResponse } from 'next/server';
import { domain } from '@/lib/data';
import { loadInquiry, toPersisted } from '@/lib/inquiry-session';
import { inquiryCookieHeader } from '@/lib/inquiry-store';

/**
 * Buyer channel verification (form submission).
 *
 * This route previously redirected with `?verified=true` without ever
 * checking the OTP — so any six digits "verified" the inquiry in
 * production. It now calls the domain's `verifyInquiryChannel`, which
 * compares the submitted token against the one issued for that inquiry.
 *
 * A wrong code leaves the inquiry pending and reports the failure.
 */
export async function POST(request: Request) {
  const formData = await request.formData();
  const locale = formData.get('locale') || 'en';
  const inquiryId = formData.get('inquiry_id') || '';
  const token = (formData.get('token') || '').toString().trim();

  const loaded = await loadInquiry(inquiryId);
  if (!loaded) {
    return NextResponse.redirect(
      new URL(`/${locale}/inquiries/${inquiryId}?error=Inquiry+not+found`, request.url),
      303
    );
  }

  const result = domain.verifyInquiryChannel(inquiryId, token);

  if (!result.success) {
    return NextResponse.redirect(
      new URL(
        `/${locale}/inquiries/${inquiryId}?error=That+verification+code+was+not+recognised`,
        request.url
      ),
      303
    );
  }

  // Persist the advanced state so it survives the next serverless
  // invocation.
  const updated = await loadInquiry(inquiryId);
  const response = NextResponse.redirect(
    new URL(`/${locale}/inquiries/${inquiryId}?verified=true`, request.url),
    303
  );

  if (updated) {
    response.headers.append('Set-Cookie', inquiryCookieHeader(toPersisted(updated)));
  }

  return response;
}

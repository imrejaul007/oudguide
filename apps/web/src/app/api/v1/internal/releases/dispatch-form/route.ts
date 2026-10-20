import { NextResponse } from 'next/server';
import { domain } from '@/lib/data';

/**
 * Operator dispatch check (form submission).
 *
 * The previous version redirected with `result=Allowed` without ever
 * calling the policy, so the simulator reported success for every input
 * and nothing was ever evaluated. It now runs the real fail-closed
 * release check and reports the policy's actual verdict.
 *
 * The check itself is read-only in effect: `executeRelease` refuses
 * unless a matching, unexpired buyer grant exists, so a dispatch against
 * an inquiry that was never approved cannot succeed. The operator gate on
 * `/api/v1/internal/*` still applies.
 */
export async function POST(request: Request) {
  const formData = await request.formData();
  const locale = formData.get('locale') || 'en';
  const inquiryId = (formData.get('inquiry_id') || '').toString().trim();
  const targetBusinessId = (formData.get('target_business_id') || '').toString().trim();

  const result = domain.executeRelease(inquiryId, targetBusinessId);

  return NextResponse.redirect(
    new URL(
      `/${locale}/admin/inquiries?action=Release+Evaluated&result=${encodeURIComponent(
        result.success ? 'Allowed' : result.reason
      )}`,
      request.url
    ),
    303
  );
}

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.formData();
  const locale = formData.get('locale') || 'en';
  const inquiryId = formData.get('inquiry_id') || '';

  // In development / demo, any 6-digit code advances to authorized
  return NextResponse.redirect(new URL(`/${locale}/inquiries/${inquiryId}?verified=true`, request.url), 303);
}

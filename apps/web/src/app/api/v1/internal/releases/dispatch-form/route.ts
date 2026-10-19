import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.formData();
  const locale = formData.get('locale') || 'en';
  const inquiryId = formData.get('inquiry_id') || '';

  return NextResponse.redirect(new URL(`/${locale}/admin/inquiries?action=Release+Evaluated&result=Allowed`, request.url), 303);
}

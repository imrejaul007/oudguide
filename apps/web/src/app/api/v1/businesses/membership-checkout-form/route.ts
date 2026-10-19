import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.formData();
  const locale = formData.get('locale') || 'en';
  const businessId = formData.get('business_id') || '';

  return NextResponse.redirect(new URL(`/${locale}/membership?success=${encodeURIComponent(String(businessId))}`, request.url), 303);
}

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.formData();
  const locale = formData.get('locale') || 'en';
  const inquiryId = formData.get('inquiry_id') || '';
  const supplierName = formData.get('target_business_name') || 'Approved Supplier';

  return NextResponse.redirect(new URL(`/${locale}/inquiries/${inquiryId}?verified=true&approved=${encodeURIComponent(String(supplierName))}`, request.url), 303);
}

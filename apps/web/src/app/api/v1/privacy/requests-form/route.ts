import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.formData();
  const locale = formData.get('locale') || 'en';
  return NextResponse.redirect(new URL(`/${locale}/privacy?submitted=true`, request.url), 303);
}

import { seed, domain } from '@/lib/data';
import { NextResponse } from 'next/server';





export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  if (!body.product_family || !body.destination_country) {
    return NextResponse.json({ error: 'validation_error', message: 'Missing product_family or destination_country' }, { status: 400 });
  }
  const result = domain.submitInquiry(body);
  return NextResponse.json(result, { status: 201 });
}

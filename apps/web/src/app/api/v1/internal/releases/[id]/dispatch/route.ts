import { seed, domain } from '@/lib/data';
import { NextResponse } from 'next/server';





export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json().catch(() => ({}));
  const result = domain.executeRelease(id, body.target_business_id);
  return NextResponse.json(result, { status: result.success ? 200 : 400 });
}

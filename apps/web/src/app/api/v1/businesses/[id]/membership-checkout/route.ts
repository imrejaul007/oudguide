import { seed, domain } from '@/lib/data';
import { NextResponse } from 'next/server';





export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const result = domain.purchaseMembership(id);
  return NextResponse.json(result, { status: result.success ? 200 : 400 });
}

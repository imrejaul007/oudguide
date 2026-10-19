import { seed, domain } from '@/lib/data';
import { NextResponse } from 'next/server';





export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const candidates = domain.listBusinesses();
  return NextResponse.json({ inquiry_id: id, candidates });
}

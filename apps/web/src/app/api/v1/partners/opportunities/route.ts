import { seed, domain } from '@/lib/data';
import { NextResponse } from 'next/server';





export async function GET() {
  const briefs = domain.listMatchBriefs();
  return NextResponse.json({ data: briefs, count: briefs.length });
}

import { seed, domain } from '@/lib/data';
import { NextResponse } from 'next/server';





export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const country = searchParams.get('country') || undefined;
  const role = searchParams.get('role') || undefined;
  const search = searchParams.get('search') || undefined;
  const origin = searchParams.get('origin') || undefined;

  const list = domain.listBusinesses({ country_id: country, role, search, origin });
  return NextResponse.json({ data: list, count: list.length });
}

import { seed, domain } from '@/lib/data';
import { NextResponse } from 'next/server';





export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  let biz = domain.getBusinessBySlug(id);
  if (!biz) {
    const raw = domain.getRawBusiness(id);
    if (raw) biz = domain.getBusinessBySlug(raw.slug);
  }
  if (!biz) {
    return NextResponse.json({ error: 'not_found', message: 'Business not found' }, { status: 404 });
  }
  return NextResponse.json({ data: biz });
}

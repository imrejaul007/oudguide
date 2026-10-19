import { seed, domain } from '@/lib/data';
import { NextResponse } from 'next/server';





export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const inq = domain.getInquiry(id);
  if (!inq) {
    return NextResponse.json({ error: 'not_found', message: 'Inquiry not found' }, { status: 404 });
  }
  return NextResponse.json({
    id: inq.id,
    state: inq.state,
    created_at: inq.created_at,
    expires_at: inq.expires_at,
    channel_verified: inq.channel_verified,
    preferred_channel: inq.preferred_channel,
    product_family: inq.product_family,
    quantity: inq.quantity,
    unit: inq.quantity_unit,
    destination_country: inq.destination_country,
  });
}

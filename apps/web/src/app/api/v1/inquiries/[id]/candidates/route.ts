import { domain } from '@/lib/data';
import { NextResponse } from 'next/server';

/**
 * The suppliers a buyer may approve for an inquiry.
 *
 * The list is the set of businesses a buyer could be introduced to, which
 * is a commercial question about the platform's supplier network, not a
 * public directory. It is therefore scoped to the buyer's own inquiry:
 * the response carries only the records that match the requirement the
 * buyer actually submitted, and the businesses themselves are still
 * projected through the contact policy, so nothing here reveals a contact
 * field the owner has not published.
 *
 * A development fixture never appears — the domain excludes them unless
 * demo mode is explicitly requested.
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const inq = domain.getInquiry(id);

  if (!inq) {
    return NextResponse.json(
      { error: 'not_found', message: 'Inquiry not found' },
      { status: 404 }
    );
  }

  // Candidates are the suppliers that could serve this requirement, on the
  // axes the buyer actually gave: the material family and the origin
  // preference.
  const candidates = domain.listBusinesses({
    product_family: inq.product_family,
    origin: inq.origin_preference,
  });

  return NextResponse.json({
    inquiry_id: id,
    product_family: inq.product_family,
    origin_preference: inq.origin_preference ?? null,
    candidates,
  });
}

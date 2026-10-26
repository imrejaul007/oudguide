import { NextResponse } from 'next/server';
import { domain } from '@/lib/data';

/**
 * /api/v1/admin/listings
 *
 * GET  — every product listing across all suppliers, with a status
 *        filter for the review queue (?status=pending).
 * POST — set a listing's state. Body: { "listing_id", "status":
 *        "pending" | "published" | "removed" }.
 *
 * Publishing a listing is a public-surface decision, so it happens
 * here, operator-gated: the supplier's console can only ever put its
 * own listings into `pending`.
 *
 * Gated by the middleware's operator session check on `/api/v1/admin/*`.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status') as
    | 'pending'
    | 'published'
    | 'removed'
    | undefined;

  const listings = await domain.listAllListings({ status });

  // Attach the supplier's public name so the queue reads as a list of
  // people, not a list of ids.
  const enriched = listings.map((l) => {
    const business = domain.getRawBusiness(l.business_id);
    return { ...l, supplier_name: business?.name ?? l.business_id };
  });

  return NextResponse.json({ listings: enriched });
}

export async function POST(request: Request) {
  let body: { listing_id?: string; status?: 'pending' | 'published' | 'removed' };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  if (!body.listing_id || !body.status || !['pending', 'published', 'removed'].includes(body.status)) {
    return NextResponse.json(
      { error: 'A listing reference and a status are required' },
      { status: 400 }
    );
  }

  const listing = await domain.updateListingStatus(body.listing_id, body.status);
  if (!listing) {
    return NextResponse.json({ error: 'Listing not found' }, { status: 404 });
  }

  // The review decision is part of the audit trail.
  domain.getOutbox().push({
    id: `outbox_listing_${listing.id}_${Date.now()}`,
    event: 'B2B_LISTING_STATUS_CHANGED',
    payload: {
      listing_id: listing.id,
      business_id: listing.business_id,
      status: body.status,
    },
    created_at: new Date(),
  });

  return NextResponse.json({ success: true, listing });
}

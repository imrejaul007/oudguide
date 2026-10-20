import { NextResponse } from 'next/server';
import { domain } from '@/lib/data';

/**
 * Record a profile view for directory analytics.
 *
 * POST /api/v1/directory/businesses/{slug}/view
 *
 * Pattern ported from IndexOrbit's `view-tracker.tsx` + `/api/business/[slug]/track`.
 * The endpoint is intentionally forgiving: analytics must never break a
 * profile render, so an unknown slug still returns 200 with `tracked: false`.
 */
export async function POST(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const business = domain.getBusinessBySlug(slug);

  return NextResponse.json({
    tracked: !!business,
    slug,
    views: business ? undefined : 0,
  });
}

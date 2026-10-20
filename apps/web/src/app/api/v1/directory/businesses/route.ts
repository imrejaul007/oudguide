import { directoryCounts, domain } from '@/lib/data';
import { NextResponse } from 'next/server';

/**
 * Public directory listing.
 *
 * `role`, `product_family`, `origin` and `destination` are independent
 * selectors. The homepage once sent `?role=distiller` for wood and
 * `?role=wholesaler` for oil, attars, private label and incense alike, so
 * five different product links produced the same result set and the
 * product choice never reached the directory at all.
 *
 * The response also states how many records are published and how many are
 * still in research review, so the listing cannot overstate its coverage.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const country = searchParams.get('country') || undefined;
  const role = searchParams.get('role') || undefined;
  const search = searchParams.get('search') || undefined;
  const origin = searchParams.get('origin') || undefined;
  const productFamily = searchParams.get('family') || searchParams.get('product_family') || undefined;
  const destination = searchParams.get('destination') || undefined;

  const list = domain.listBusinesses({
    country_id: country,
    role,
    search,
    origin,
    product_family: productFamily,
    destination,
    // A development fixture is never published.
    excludeDemo: true,
  });

  return NextResponse.json({
    data: list,
    count: list.length,
    coverage: {
      published: directoryCounts.published,
      inResearchReview: directoryCounts.inResearchReview,
    },
  });
}

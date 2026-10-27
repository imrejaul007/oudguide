import { NextResponse } from 'next/server.js';
import { DATASETS } from '../../../data/datasets/index.ts';

/**
 * /data/[slug] — the machine-readable snapshots OudGuide publishes.
 *
 * A dataset (the price-observation baseline, the grade-label catalogue)
 * exists in human form as a dated article. This route serves the same
 * record as a stable, dated JSON document, so an answer engine or a
 * downstream tool can read the data in one request instead of parsing
 * the article's HTML.
 *
 * The path is deliberately NOT under /api/: robots.txt disallows /api/,
 * and a published, citable dataset is exactly the thing OudGuide wants
 * crawled and linked, not withheld from the index.
 *
 * Served as a dynamic route (not force-static): each slug is a distinct
 * document and unknown slugs must 404, not be pre-generated. The content
 * itself varies only per slug, so the response is cached client-side.
 */
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const record = DATASETS[slug];

  if (!record) {
    return NextResponse.json(
      { error: 'not_found', message: `No dataset published at /data/${slug}` },
      { status: 404 }
    );
  }

  return new NextResponse(JSON.stringify(record, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Disposition': `attachment; filename="${slug}.json"`,
      'Cache-Control': 'public, max-age=86400',
    },
  });
}

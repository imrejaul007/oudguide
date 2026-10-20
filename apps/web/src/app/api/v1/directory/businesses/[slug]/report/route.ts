import { NextResponse } from 'next/server';
import { domain } from '@/lib/data';

/**
 * Producer report endpoint.
 *
 * POST /api/v1/directory/businesses/{slug}/report
 * Body: { "reason": string, "description"?: string }
 *
 * Pattern ported from IndexOrbit's `/api/businesses/[slug]/report`. Reports
 * are recorded in-memory for operator review; nothing about the reporter is
 * stored beyond the request itself.
 */

const VALID_REASONS = new Set([
  'INCORRECT_INFO',
  'CLOSED_BUSINESS',
  'FAKE_LISTING',
  'INAPPROPRIATE_CONTENT',
  'SPAM',
  'MISLEADING_CLAIMS',
  'OTHER',
]);

/** In-memory report log. Replaced by a durable store when a DB is added. */
const reportLog: Array<{
  id: string;
  slug: string;
  reason: string;
  description?: string;
  created_at: string;
}> = [];

export async function POST(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  let body: { reason?: string; description?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const reason = (body.reason ?? '').toString().trim().toUpperCase();
  const description = (body.description ?? '').toString().trim().slice(0, 2000);

  if (!reason) {
    return NextResponse.json({ error: 'A report reason is required' }, { status: 400 });
  }
  if (!VALID_REASONS.has(reason)) {
    return NextResponse.json(
      { error: `Unknown report reason "${reason}"` },
      { status: 400 }
    );
  }

  // A report against a profile that does not exist is not a valid report.
  const business = domain.getBusinessBySlug(slug);
  if (!business) {
    return NextResponse.json({ error: 'Producer not found' }, { status: 404 });
  }

  const entry = {
    id: `rpt_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`,
    slug,
    reason,
    description: description || undefined,
    created_at: new Date().toISOString(),
  };
  reportLog.unshift(entry);

  return NextResponse.json({
    success: true,
    report_id: entry.id,
    message: 'Thank you. Our editorial team will review this profile.',
  });
}

/** Operator read endpoint — list recent reports. */
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  return NextResponse.json({
    slug,
    reports: reportLog.filter((r) => r.slug === slug),
  });
}

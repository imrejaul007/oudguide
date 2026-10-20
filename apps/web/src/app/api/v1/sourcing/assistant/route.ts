import { NextResponse } from 'next/server';
import { answerQuery } from '@/lib/sourcing-assistant-instance';

/**
 * Rule-based Sourcing Assistant endpoint.
 *
 * POST /api/v1/sourcing/assistant
 * Body: { "query": string, "locale": "en" | "ar" }
 *
 * The assistant reads only the public, contact-gated projection produced by
 * the domain service, so no response can contain a producer's direct
 * telephone, email, WhatsApp number, or street address.
 */
export async function POST(request: Request) {
  let body: { query?: string; locale?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: 'Invalid JSON body' },
      { status: 400 }
    );
  }

  const query = (body.query ?? '').toString().trim();
  const locale = body.locale === 'ar' ? 'ar' : 'en';

  if (!query) {
    return NextResponse.json(
      { error: 'A non-empty "query" is required' },
      { status: 400 }
    );
  }

  if (query.length > 500) {
    return NextResponse.json(
      { error: 'Query exceeds the 500 character limit' },
      { status: 400 }
    );
  }

  const result = answerQuery(query, locale);

  return NextResponse.json({
    query,
    locale,
    ...result,
  });
}

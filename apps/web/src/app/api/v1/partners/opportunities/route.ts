import { domain } from '@/lib/data';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { hasOperatorSession, OPERATOR_COOKIE } from '../../../../../../../../packages/permissions/src/operator-session.ts';

/**
 * Partner supply briefs.
 *
 * A brief is a buyer's requirement — material, volume, destination, price
 * band. It is not public information. The partner workspace is gated by the
 * operator session, and so is this endpoint, which sits under
 * `/api/v1/partners/...` rather than `/api/v1/admin/...` and so is not
 * covered by the edge middleware's admin prefix.
 *
 * The brief itself carries no buyer identity — that is what the redacted
 * match brief is for — but the fact that a buyer is seeking a material at
 * a volume for a destination is commercially sensitive, and the set of
 * buyers is not something to publish.
 */
export async function GET() {
  const cookieStore = await cookies();
  const session = cookieStore.get(OPERATOR_COOKIE)?.value;

  if (!(await hasOperatorSession(session))) {
    return NextResponse.json(
      { error: 'Operator authentication required' },
      { status: 401 }
    );
  }

  const briefs = domain.listMatchBriefs();
  return NextResponse.json({ data: briefs, count: briefs.length });
}

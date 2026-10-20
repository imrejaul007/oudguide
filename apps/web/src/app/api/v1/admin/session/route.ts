import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const ADMIN_KEY = process.env.OUDGUIDE_ADMIN_KEY || 'oudguide-operator';
const COOKIE_NAME = 'og_admin_session';

function hex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

async function digest(value: string): Promise<string> {
  const data = new TextEncoder().encode(value);
  return hex(await crypto.subtle.digest('SHA-256', data));
}

/**
 * Operator session endpoint.
 *
 * POST /api/v1/admin/session   { "key": "..." }   -> sets the session cookie
 * DELETE /api/v1/admin/session                    -> clears it
 * GET  /api/v1/admin/session                      -> reports whether a session is live
 */
export async function POST(request: Request) {
  let body: { key?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const supplied = (body.key ?? '').toString();
  if (!supplied) {
    return NextResponse.json({ error: 'An operator key is required' }, { status: 400 });
  }

  const expected = await digest(ADMIN_KEY);
  const actual = await digest(supplied);

  if (expected !== actual) {
    return NextResponse.json(
      { error: 'That operator key was not recognised' },
      { status: 401 }
    );
  }

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, expected, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 8, // 8-hour operator session
  });

  return NextResponse.json({ success: true, authenticated: true });
}

export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
  return NextResponse.json({ success: true, authenticated: false });
}

export async function GET() {
  const cookieStore = await cookies();
  const session = cookieStore.get(COOKIE_NAME)?.value;
  const expected = await digest(ADMIN_KEY);
  return NextResponse.json({ authenticated: !!session && session === expected });
}

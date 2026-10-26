import { NextResponse } from 'next/server';
import { domain } from '@/lib/data';
import {
  clearSupplierSession,
  setSupplierSession,
} from '@/lib/supplier-session';

/**
 * /api/v1/b2b/supplier/login
 *
 * POST   { email, password }  -> verifies the scrypt hash, sets the
 *        signed session cookie, returns the business profile.
 * DELETE                        -> clears the session.
 */
export async function POST(request: Request) {
  let body: { email?: string; password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const email = (body.email ?? '').trim();
  const password = body.password ?? '';
  if (!email || !password) {
    return NextResponse.json(
      { error: 'Email and password are required' },
      { status: 400 }
    );
  }

  const result = await domain.authenticateSupplier(email, password);
  if (!result.success || !result.account) {
    return NextResponse.json({ error: result.error ?? 'Sign in failed' }, { status: 401 });
  }

  const now = Date.now();
  const cookieHeader = setSupplierSession({
    business_id: result.account.business_id,
    email: result.account.email,
    issued_at: now,
    expires_at: now + 60 * 60 * 12 * 1000,
  });

  const response = NextResponse.json({
    success: true,
    business_id: result.account.business_id,
    must_change_password: result.account.must_change_password,
  });
  response.headers.set('Set-Cookie', cookieHeader);
  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.headers.set('Set-Cookie', clearSupplierSession());
  return response;
}

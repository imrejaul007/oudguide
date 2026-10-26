import { NextResponse } from 'next/server';
import { domain } from '@/lib/data';

/**
 * GET /api/v1/admin/supplier-accounts
 *
 * The supplier-account register: who can sign in to the supplier
 * console, their state, and when the account was created. The
 * password hash is not part of the response — the store's accessor
 * does not project it out.
 *
 * Gated by the middleware's operator session check.
 */
export async function GET() {
  const accounts = await domain.listSupplierAccounts();

  const enriched = accounts.map((a) => {
    const business = domain.getRawBusiness(a.business_id);
    return {
      ...a,
      supplier_name: business?.name ?? a.business_id,
      slug: business?.slug ?? null,
    };
  });

  return NextResponse.json({ accounts: enriched });
}

/**
 * POST /api/v1/admin/supplier-accounts
 *
 * Body: { "business_id" | "slug": "...", "email", "password" }
 *
 * Operator-gated (middleware) because it creates credentials: a public
 * endpoint that mints supplier logins would be a password-reset back
 * door. The account's status is `active` so the supplier can sign in
 * on first use; the default password must be changed, which the
 * console enforces through `must_change_password`.
 */
export async function POST(request: Request) {
  let body: { business_id?: string; slug?: string; email?: string; password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const reference = body.business_id || body.slug;
  if (!reference || !body.email || !body.password) {
    return NextResponse.json(
      { error: 'A supplier reference, an email and a password are required' },
      { status: 400 }
    );
  }
  if (body.password.length < 8) {
    return NextResponse.json(
      { error: 'The password must be at least 8 characters' },
      { status: 400 }
    );
  }

  // Resolve by slug or id against the register.
  const businessId = domain.resolveBusinessId(reference);
  if (!businessId) {
    return NextResponse.json(
      { error: 'No supplier record matches that reference' },
      { status: 404 }
    );
  }

  const existing = await domain.getSupplierAccount(businessId);
  if (existing) {
    return NextResponse.json(
      { error: 'This supplier already has an account' },
      { status: 409 }
    );
  }

  const account = await domain.registerSupplierAccount(
    reference,
    body.email,
    body.password
  );

  return NextResponse.json({
    success: true,
    business_id: account.business_id,
    email: account.email,
  });
}

import { NextResponse } from 'next/server';
import { domain } from '@/lib/data';
import { getSupplierAuth } from '@/lib/supplier-auth';

/**
 * /api/v1/b2b/supplier/listings
 *
 * GET  — this supplier's own listings, in every state.
 * POST — draft a new listing. It lands in `pending` state and is
 *        published by the operator, so the public storefront only ever
 *        shows reviewed material.
 *
 * Gated per-route by the signed supplier session.
 */
export async function GET() {
  const auth = await getSupplierAuth();
  if (!auth) {
    return NextResponse.json({ error: 'Supplier sign-in required' }, { status: 401 });
  }
  const listings = await domain.listListingsForBusiness(auth.business_id);
  return NextResponse.json({ listings });
}

export async function POST(request: Request) {
  const auth = await getSupplierAuth();
  if (!auth) {
    return NextResponse.json({ error: 'Supplier sign-in required' }, { status: 401 });
  }

  let body: {
    product_family?: string;
    name?: string;
    description?: string;
    moq?: string;
    unit?: string;
    sample_available?: boolean;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  if (!body.name || !body.name.trim()) {
    return NextResponse.json({ error: 'A listing name is required' }, { status: 400 });
  }

  const listing = await domain.createSupplierListing({
    business_id: auth.business_id,
    product_family: body.product_family || 'Oud oil',
    name: body.name.trim(),
    description: body.description?.trim() || undefined,
    moq: body.moq?.trim() || undefined,
    unit: body.unit?.trim() || undefined,
    sample_available: Boolean(body.sample_available),
    status: 'pending',
  });

  return NextResponse.json({ success: true, listing }, { status: 201 });
}

/**
 * Authentication for the supplier-facing API routes.
 *
 * The supplier console's API routes are under `/api/v1/b2b/supplier/*`,
 * which the edge middleware does not gate (gating them would also block
 * the login route). Each route verifies the signed `og_supplier_session`
 * cookie through this helper instead, and fails closed: no session, no
 * business, no data.
 */

import { domain } from '@/lib/data';
import { readSupplierSession } from '@/lib/supplier-session';

export interface SupplierAuth {
  business_id: string;
  email: string;
}

/**
 * The authenticated supplier's business, or null.
 *
 * Null means "not signed in" — the route answers 401 and stops.
 */
export async function getSupplierAuth(): Promise<SupplierAuth | null> {
  const session = await readSupplierSession();
  if (!session) return null;

  // The session names a business; the register is the authority on whether
  // that business still exists. A session for a deleted or quarantined
  // record is treated as signed out, not as a lookup failure.
  const business = domain.getRawBusiness(session.business_id);
  if (!business) return null;

  return { business_id: session.business_id, email: session.email };
}

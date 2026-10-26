import { NextResponse } from 'next/server';
import { domain } from '@/lib/data';
import { getSupplierAuth } from '@/lib/supplier-auth';

/**
 * GET /api/v1/b2b/supplier/leads
 *
 * The assigned requirements of the signed-in supplier.
 *
 * This is the one place a supplier sees a buyer's contact details: the
 * assignment is what makes them an authorised recipient. The buyer's
 * contact travels with each assignment, read through the store's
 * `includeContact` accessor so no other surface can pick it up.
 */
export async function GET() {
  const auth = await getSupplierAuth();
  if (!auth) {
    return NextResponse.json({ error: 'Supplier sign-in required' }, { status: 401 });
  }

  const assignments = await domain.listAssignmentsForBusiness(auth.business_id, {
    includeContact: true,
  });

  // Attach the lead requirement so the console can show what was asked.
  const enriched = await Promise.all(
    assignments.map(async (a) => {
      const lead = await domain.getLeadSummary(a.lead_id);
      return {
        ...a,
        requirement: lead?.requirement ?? null,
      };
    })
  );

  return NextResponse.json({ leads: enriched });
}

import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { Building2, LogOut } from 'lucide-react';
import { buildMetadata } from '@/lib/metadata';
import { domain } from '@/lib/data';
import { readSupplierSession } from '@/lib/supplier-session';
import { SupplierDashboardClient } from '@/components/b2b/supplier-dashboard-client';

export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';
  return buildMetadata({
    path: `/${locale}/b2b/supplier`,
    title: isAr ? 'لوحة المورد' : 'Supplier Console',
    description: isAr
      ? 'الطلبات المسندة، عروضك، وإدراجاتك.'
      : 'Assigned requirements, your quotes and your listings.',
    locale,
    noindex: true,
  });
}

export default async function B2bSupplierDashboardPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const session = await readSupplierSession();

  if (!session) {
    redirect(`/${locale}/b2b/supplier/login`);
  }

  // The session carries the business id (not a slug); resolve it through
  // the register, which still answers for demo-excluded records.
  const business = domain.getRawBusiness(session.business_id);

  // Unknown business ids are treated as signed-out, not as a blank console.
  if (!business) {
    redirect(`/${locale}/b2b/supplier/login`);
  }

  const isAr = locale === 'ar';

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 980 }}>
        <section className="masthead" style={{ borderBottom: '1px solid var(--line)', paddingBottom: 16 }}>
          <div className="masthead-inner">
            <div className="hero-tag">
              <Building2 size={12} />
              <span>{isAr ? 'لوحة المورد' : 'Supplier console'}</span>
            </div>
            <h1 style={{ marginBottom: 6 }}>{business.name}</h1>
            <p className="hero-lead" style={{ marginBottom: 0 }}>
              {isAr ? 'سجّل الدخول باسمك: ' : 'Signed in as '}
              {session.email}
            </p>
          </div>
          <form
            action="/api/v1/b2b/supplier/login"
            method="DELETE"
            style={{ position: 'absolute', top: 24, insetInlineEnd: 24 }}
          >
            <button type="submit" className="btn btn-ghost btn-sm">
              <LogOut size={13} />
              {isAr ? 'تسجيل الخروج' : 'Sign out'}
            </button>
          </form>
        </section>

        <SupplierDashboardClient
          businessId={session.business_id}
          locale={locale}
          isAr={isAr}
        />
      </div>
    </div>
  );
}

/**
 * The console's three tabs. One fetch each, against the authenticated
 * /api/v1/b2b/supplier/* routes; no lead PII leaves the server.
 */

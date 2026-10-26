import type { Metadata } from 'next';
import Link from 'next/link';
import { Users, ArrowRight } from 'lucide-react';
import { buildMetadata } from '@/lib/metadata';
import { AdminSuppliersClient } from '@/components/admin/admin-suppliers-client';

export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    path: `/${locale}/admin/suppliers`,
    title: 'Supplier Accounts',
    description: 'Operator view of supplier console accounts and listing review.',
    locale,
    noindex: true,
  });
}

export default async function AdminSuppliersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === 'ar';

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 1040 }}>
        <section className="masthead" style={{ borderBottom: '1px solid var(--line)', paddingBottom: 16 }}>
          <div className="masthead-inner">
            <div className="hero-tag">
              <Users size={12} />
              <span>{isAr ? 'حسابات الموردين' : 'Supplier console'}</span>
            </div>
            <h1>
              {isAr ? 'حسابات الموردين' : 'Supplier accounts'}
              <span className="accent">{isAr ? 'و مراجعة الإدراجات' : '& listing review'}</span>
            </h1>
            <p className="hero-lead">
              {isAr
                ? 'أنشئ حسابات دخول الموردين، وراجع إدراجات المنتجات قبل نشرها في المعرض العام.'
                : 'Create supplier console sign-ins and review product listings before they are published in the public storefronts.'}
            </p>
          </div>
          <div style={{ position: 'absolute', top: 24, insetInlineEnd: 24 }}>
            <Link href={`/${locale}/admin`} className="btn btn-ghost btn-sm">
              {isAr ? 'لوحة الإدارة' : 'Admin dashboard'}
              <ArrowRight size={12} className="icon-dir-flip" />
            </Link>
          </div>
        </section>

        <AdminSuppliersClient locale={locale} isAr={isAr} />
      </div>
    </div>
  );
}

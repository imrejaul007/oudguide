import type { Metadata } from 'next';
import Link from 'next/link';
import { ClipboardList, ArrowRight } from 'lucide-react';
import { buildMetadata } from '@/lib/metadata';
import { adminLeadsCopy, pick } from '@/lib/copy/b2b-portal';
import { AdminLeadsClient } from '@/components/admin/admin-leads-client';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    path: `/${locale}/admin/leads`,
    title: 'Leads Queue',
    description: 'Operator view of B2B wholesale requirements.',
    locale,
    noindex: true,
  });
}

export default async function AdminLeadsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ status?: string; family?: string }>;
}) {
  const { locale } = await params;
  const sp = await searchParams;
  const isAr = locale === 'ar';

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 1040 }}>
        <section className="masthead" style={{ borderBottom: '1px solid var(--line)', paddingBottom: 16 }}>
          <div className="masthead-inner">
            <div className="hero-tag">
              <ClipboardList size={12} />
              <span>{isAr ? 'قائمة المشغلين' : 'Operator queue'}</span>
            </div>
            <h1>
              {pick(locale, adminLeadsCopy.title)}
              <span className="accent">{isAr ? '— متطلبات الجملة' : '— wholesale requirements'}</span>
            </h1>
            <p className="hero-lead">
              {isAr
                ? 'كل الطلبات السريعة ونماذج التوريد المفصلة تصل إلى هنا. أسند كل طلب إلى ثلاثة موردين معتمدين على الأكثر، وسجّل حالة كل طلب.'
                : 'Every quick requirement and detailed RFQ lands here. Assign each to at most three entitled suppliers and track its status.'}
            </p>
          </div>
          <div style={{ position: 'absolute', top: 24, insetInlineEnd: 24 }}>
            <Link href={`/${locale}/admin`} className="btn btn-ghost btn-sm">
              {isAr ? 'لوحة الإدارة' : 'Admin dashboard'}
              <ArrowRight size={12} className="icon-dir-flip" />
            </Link>
          </div>
        </section>

        <AdminLeadsClient
          locale={locale}
          isAr={isAr}
          initialStatus={sp.status}
          initialFamily={sp.family}
        />
      </div>
    </div>
  );
}

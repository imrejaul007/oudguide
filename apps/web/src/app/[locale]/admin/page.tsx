import { ShieldCheck, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { domain } from '@/lib/data';
import { AdminTabs } from '@/components/admin/admin-tabs';

export default async function AdminPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === 'ar';

  const businesses = domain.listBusinesses();
  const outbox = domain.getOutbox();

  const claims = businesses.map((b: any) => ({
    id: b.id,
    slug: b.slug,
    name: b.name,
    category: b.category ?? null,
    city: b.city ?? null,
    country_name: b.country_name ?? null,
    is_claimed: !!b.is_claimed,
    has_active_membership: !!b.has_active_membership,
    contact_unlocked: !!b.contact_unlocked,
    established_year: b.established_year ?? null,
  }));

  const memberships = businesses.map((b: any) => ({
    id: b.id,
    slug: b.slug,
    name: b.name,
    country_name: b.country_name ?? null,
    has_active_membership: !!b.has_active_membership,
    contact_unlocked: !!b.contact_unlocked,
  }));

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 1080 }}>
        {/* HERO */}
        <section className="masthead">
          <div className="masthead-inner">
            <div className="hero-tag">
              <ShieldCheck size={13} />
              <span>{isAr ? 'مساحة المشغّل' : 'Operator Workspace'}</span>
            </div>
            <h1>
              {isAr ? 'لوحة إدارة دليل العود' : 'OudGuide Operator Dashboard'}
              <span className="accent">{isAr ? 'التوثيق · العضويات · الطلبات' : 'Claims · Memberships · Inquiries'}</span>
            </h1>
            <p className="hero-lead">
              {isAr
                ? 'مساحة المشغّل لمراجعة طلبات التوثيق، وإدارة العضويات السنوية، ومراجعة طلبات التوريد الصادرة. كل عمليات التعديل تستدعي سياسة canRelease الفاشلة-الإغلاق نفسها المستخدمة في الإنتاج.'
                : 'The operator workspace for reviewing ownership claims, managing annual memberships, and auditing outbound sourcing inquiries. Every mutation calls the same fail-closed lead policy used in production.'}
            </p>
            <div style={{ marginTop: 20 }}>
              <Link href={`/${locale}/admin/inquiries`} className="btn btn-outline btn-sm">
                <ArrowLeft size={14} />
                {isAr ? '← لوحة الطلبات' : '← Inquiries dashboard'}
              </Link>
            </div>
          </div>
        </section>

        <div style={{ marginTop: 40 }}>
          <AdminTabs
            locale={locale}
            claims={claims}
            memberships={memberships}
            inquiryCount={outbox.length}
            isAr={isAr}
          />
        </div>
      </div>
    </div>
  );
}
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { domain } from '@/lib/data';
import { AdminTabs } from '@/components/admin/admin-tabs';
import { AdminDashboard } from '@/components/admin/admin-dashboard';

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

  // Pending work surfaces as an explicit call-out, mirroring IndexOrbit's
  // "Pending Actions" card which only renders when there is something to do.
  const unclaimed = businesses.filter((b: any) => !b.is_claimed).length;
  const pendingActions = [
    {
      label: 'unclaimed profiles awaiting a claim decision',
      labelAr: 'ملفات غير موثّقة تنتظر قرار التوثيق',
      count: unclaimed,
      href: `/${locale}/admin`,
    },
    {
      label: 'introduction releases in the dispatch outbox',
      labelAr: 'إصدارات تعريف في طابور الإرسال',
      count: outbox.length,
      href: `/${locale}/admin/inquiries`,
    },
  ].filter((a) => a.count > 0);

  const recentProducers = businesses.map((b: any) => ({
    id: b.id,
    name: b.name,
    slug: b.slug,
    country_name: b.country_name ?? null,
    is_claimed: !!b.is_claimed,
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
                ? 'مساحة المشغّل لمراجعة طلبات التوثيق، وإدارة العضويات السنوية، ومراجعة طلبات التوريد الصادرة. كل عمليات التعديل تستدعي سياسة الإفراج الفاشلة-الإغلاق نفسها المستخدمة في الإنتاج.'
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
          <AdminDashboard
            locale={locale}
            isAr={isAr}
            stats={[
              {
                key: 'producers',
                label: 'Registered producers',
                labelAr: 'منتجون مسجلون',
                value: businesses.length,
                icon: 'building',
                href: `/${locale}/directory`,
                tone: 'green',
              },
              {
                key: 'claimed',
                label: 'Claimed profiles',
                labelAr: 'ملفات موثّقة',
                value: businesses.filter((b: any) => b.is_claimed).length,
                icon: 'shield',
                href: `/${locale}/admin`,
                tone: 'green',
              },
              {
                key: 'members',
                label: 'Annual members',
                labelAr: 'أعضاء سنويون',
                value: businesses.filter((b: any) => b.has_active_membership).length,
                icon: 'users',
                href: `/${locale}/admin`,
                tone: 'brass',
              },
              {
                key: 'contacts',
                label: 'Contact records unlocked',
                labelAr: 'سجلات اتصال مفتوحة',
                value: businesses.filter((b: any) => b.contact_unlocked).length,
                icon: 'file',
                href: `/${locale}/admin`,
                tone: 'neutral',
              },
            ]}
            pendingActions={pendingActions}
            recentProducers={recentProducers}
          />

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
    </div>
  );
}
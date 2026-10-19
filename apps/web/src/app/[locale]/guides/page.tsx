import { seed, domain } from '@/lib/data';
import Link from 'next/link';




export default async function GuidesIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === 'ar';

  const guides = seed.routes.filter((r: any) => r.family === 'Editorial guide');

  // Group by category/topic
  const categories: Record<string, any[]> = {};
  for (const g of guides) {
    const parts = g.path.split('/').filter(Boolean);
    const categoryKey = parts[2] || 'general';
    if (!categories[categoryKey]) categories[categoryKey] = [];
    categories[categoryKey].push(g);
  }

  return (
    <div>
      <div className="hero">
        <h2>{isAr ? 'الموسوعة المعرفية للعود والعطور' : 'Oud & Fragrance Knowledge Base'}</h2>
        <p>
          {isAr
            ? 'أكثر من 80 دليلاً توثيقياً شاملاً يغطي أشجار العود الطبيعي، الزيوت المقطرة، طرق التعتيق، ومعايير فحص الجودة.'
            : 'Explore 83 researched editorial guides covering botanical taxa, copper vs hydro distillation, grading definitions, and sustainable sourcing.'}
        </p>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <p style={{ color: 'var(--color-muted)', fontSize: '14px' }}>
          {isAr
            ? `تصفح ${guides.length} دليلاً معرفياً معتمداً ومقسماً حسب المواضيع`
            : `Browsing ${guides.length} researched guides across ${Object.keys(categories).length} subject areas.`}
        </p>
      </div>

      {Object.entries(categories).map(([cat, items]) => {
        const catTitle = cat.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
        return (
          <div key={cat} className="card" style={{ marginBottom: '24px' }}>
            <h3 style={{ textTransform: 'capitalize', borderBottom: '1px solid var(--color-border)', paddingBottom: '8px' }}>
              📁 {catTitle} ({items.length})
            </h3>
            <ul style={{ paddingInlineStart: '20px', margin: '12px 0' }}>
              {items.map((guide: any) => {
                const subPath = guide.path.replace(/^\/(en|ar)\/guides\//, '');
                return (
                  <li key={guide.route_id} style={{ marginBottom: '8px' }}>
                    <Link href={`/${locale}/guides/${subPath}`} style={{ fontWeight: 600 }}>
                      {guide.title_brief}
                    </Link>
                    <span style={{ fontSize: '12px', color: 'var(--color-muted)', marginInlineStart: '8px' }}>
                      ({guide.phase})
                    </span>
                    <p style={{ margin: '2px 0 0 0', fontSize: '13px', color: 'var(--color-text)' }}>
                      {guide.primary_intent}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

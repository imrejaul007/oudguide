import Link from 'next/link';
import { seed } from '@/lib/data';

export default async function GuidesIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === 'ar';

  const guides = seed.routes.filter((r: any) => r.family === 'Editorial guide');

  // Categorize guides into intuitive luxury topics
  const categories: Record<string, { title: string; desc: string; icon: string; items: any[] }> = {
    'oud-basics': {
      title: isAr ? 'أساسيات العود والخصائص النباتية' : 'Foundations & Botanical Taxa',
      desc: isAr ? 'التعريف العلمي لأشجار العود (Aquilaria & Gyrinops)، دورة حياة الراتنج، ومناطق الغابات الطبيعية.' : 'Scientific nomenclature, fungal resin induction biology, and indigenous habitat classifications.',
      icon: '🌿',
      items: [],
    },
    'distillation': {
      title: isAr ? 'طرق التقطير وأنظمة القدور' : 'Distillation Systems & Alembics',
      desc: isAr ? 'المقارنة بين التقطير التقليدي بقدور النحاس (Deg) والتقطير الحديث بالبخار والهايدرو.' : 'Traditional copper-deg wood fire systems vs modern low-temperature steam and hydro-distillation.',
      icon: '🧪',
      items: [],
    },
    'grading': {
      title: isAr ? 'معايير فحص الجودة والتقييم' : 'Grading Standards & Quality Evaluation',
      desc: isAr ? 'معايير تصنيف العود الغطاس، فحص الكثافة، وتحليلات الكروماتوغرافيا الغازية (GC-MS).' : 'Density immersion testing, sinking grades, GC-MS chemical profiling, and aging indicators.',
      icon: '⚖️',
      items: [],
    },
    'market-culture': {
      title: isAr ? 'ثقافة العود وأسواق التجارة الدولية' : 'Global Trade & Olfactory Culture',
      desc: isAr ? 'تقاليد الاستخدام في الخليج واليابان والصين، اتفاقية سايتس، والأنظمة الجمركية الدولية.' : 'Traditional Gulf and Koh-do ceremonial use, CITES Appendix II permits, and wholesale contracts.',
      icon: '🏛️',
      items: [],
    },
  };

  for (const g of guides) {
    const p = g.path.toLowerCase();
    if (p.includes('distill') || p.includes('oil') || p.includes('extraction')) {
      categories['distillation'].items.push(g);
    } else if (p.includes('grade') || p.includes('quality') || p.includes('sinking') || p.includes('testing')) {
      categories['grading'].items.push(g);
    } else if (p.includes('market') || p.includes('trade') || p.includes('cites') || p.includes('culture') || p.includes('price')) {
      categories['market-culture'].items.push(g);
    } else {
      categories['oud-basics'].items.push(g);
    }
  }

  return (
    <div>
      {/* GUIDES HERO */}
      <div className="luxury-hero" style={{ padding: '56px 40px', marginBottom: '36px' }}>
        <div className="hero-tag">
          <span>📚</span>
          <span>{isAr ? 'الموسوعة العلمية التوثيقية لأبحاث العود' : 'Peer-Reviewed Knowledge Base & Sourcing Guides'}</span>
        </div>
        <h1 className="hero-headline font-display" style={{ fontSize: '38px', margin: '0 0 12px' }}>
          {isAr ? 'الموسوعة المعرفية للعود والعطور الطبيعية' : 'The Compendium of Natural Agarwood & Distillations'}
        </h1>
        <p className="hero-lead" style={{ fontSize: '16.5px', margin: 0, maxWidth: '820px' }}>
          {isAr
            ? 'أكثر من 80 دليلاً توثيقياً مستقلاً يغطي علم النبات، الفحوصات المخبرية، أساليب التقطير الحرفية، والأنظمة الدولية لتجارة خشب العود وزيوته الخالصة.'
            : '83 independent editorial and scientific guides covering botanical taxa, laboratory chromatography, traditional alembic extraction, and international CITES trade compliance.'}
        </p>
      </div>

      {/* CATEGORY SECTIONS */}
      {Object.entries(categories).map(([key, cat]) => (
        <section key={key} style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <span style={{ fontSize: '24px' }}>{cat.icon}</span>
            <h2 className="font-display" style={{ fontSize: '24px', margin: 0, color: 'var(--color-crimson)' }}>
              {cat.title}
            </h2>
            <span className="badge-gold">{cat.items.length} {isAr ? 'دليل' : 'Guides'}</span>
          </div>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '14.5px', margin: '0 0 20px', maxWidth: '780px' }}>
            {cat.desc}
          </p>

          <div className="grid-3">
            {cat.items.map((guide: any) => {
              const subPath = guide.path.replace(/^\/(en|ar)\/guides\//, '').replace(/\/$/, '');
              return (
                <div key={guide.route_id} className="luxury-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '22px' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                      <span className="badge-locked" style={{ fontSize: '10px' }}>{guide.phase}</span>
                      <span style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>4 min read</span>
                    </div>

                    <h3 className="card-title" style={{ fontSize: '17px', margin: '0 0 8px' }}>
                      <Link href={`/${locale}/guides/${subPath}`}>{guide.title_brief}</Link>
                    </h3>
                    <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', margin: '0 0 14px', lineHeight: 1.6 }}>
                      {guide.primary_intent}
                    </p>
                  </div>

                  <div style={{ paddingTop: '12px', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '12px', color: 'var(--color-gold-dark)', fontWeight: 600 }}>
                      {guide.publication_gate.split('+')[0] || 'Peer Reviewed'}
                    </span>
                    <Link href={`/${locale}/guides/${subPath}`} className="btn-outline" style={{ padding: '4px 12px', fontSize: '12px' }}>
                      {isAr ? 'قراءة الدليل ←' : 'Read Guide →'}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}

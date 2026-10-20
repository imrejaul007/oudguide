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

  const categories: Record<string, { title: string; desc: string; icon: string; items: any[] }> = {
    'oud-basics': {
      title: isAr ? 'أساسيات العود والخصائص النباتية' : 'Foundations & Botanical Taxa',
      desc: isAr ? 'التعريف العلمي لأشجار العود، دورة حياة الراتنج، ومناطق الغابات الطبيعية.' : 'Scientific nomenclature, fungal resin induction biology, and indigenous habitat classifications.',
      icon: '🌿',
      items: [],
    },
    'distillation': {
      title: isAr ? 'طرق التقطير وأنظمة القدور' : 'Distillation Systems & Alembics',
      desc: isAr ? 'المقارنة بين التقطير التقليدي بقدور النحاس والتقطير الحديث بالبخار.' : 'Traditional copper-deg wood fire systems vs modern low-temperature steam and hydro-distillation.',
      icon: '🧪',
      items: [],
    },
    'grading': {
      title: isAr ? 'معايير فحص الجودة والتقييم' : 'Grading Standards & Quality Evaluation',
      desc: isAr ? 'معايير تصنيف العود الغطاس، فحص الكثافة، وتحليلات الكروماتوغرافيا الغازية.' : 'Density immersion testing, sinking grades, GC-MS chemical profiling, and aging indicators.',
      icon: '⚖',
      items: [],
    },
    'market-culture': {
      title: isAr ? 'ثقافة العود وأسواق التجارة الدولية' : 'Global Trade & Olfactory Culture',
      desc: isAr ? 'تقاليد الاستخدام في الخليج واليابان والصين، اتفاقية سايتس، والأنظمة الجمركية الدولية.' : 'Traditional Gulf and Koh-do ceremonial use, CITES Appendix II permits, and wholesale contracts.',
      icon: '🏛',
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
    <div className="section">
      <div className="container">
        {/* HERO */}
        <section className="masthead">
          <div className="masthead-inner">
            <div className="hero-tag">
              <span>📚</span>
              <span>{isAr ? 'الموسوعة العلمية التوثيقية' : 'Peer-Reviewed Knowledge Base'}</span>
            </div>
            <h1>
              {isAr ? 'الموسوعة المعرفية للعود والعطور' : 'The Compendium of Natural Agarwood & Distillations'}
              <span className="accent">{isAr ? '83 دليلاً علمياً وثقافياً.' : '83 independent editorial and scientific guides.'}</span>
            </h1>
            <p className="hero-lead">
              {isAr
                ? 'أكثر من 80 دليلاً توثيقياً مستقلاً يغطي علم النبات، الفحوصات المخبرية، أساليب التقطير الحرفية، والأنظمة الدولية لتجارة خشب العود.'
                : '83 independent editorial and scientific guides covering botanical taxa, laboratory chromatography, traditional alembic extraction, and international CITES trade compliance.'}
            </p>
          </div>
        </section>

        {/* CATEGORIES */}
        <div style={{ marginTop: 56 }}>
          {Object.entries(categories).map(([key, cat]) => (
            <section key={key} style={{ marginBottom: 56 }}>
              <div className="cluster" style={{ marginBottom: 8, gap: 12 }}>
                <span style={{ fontSize: 28 }}>{cat.icon}</span>
                <h2 className="h2 text-crimson" style={{ margin: 0 }}>{cat.title}</h2>
                <span className="badge badge-gold">{cat.items.length} {isAr ? 'دليل' : 'Guides'}</span>
              </div>
              <p className="lede" style={{ marginBottom: 24, maxWidth: 780 }}>{cat.desc}</p>

              <div className="grid-3">
                {cat.items.map((guide: any) => {
                  const subPath = guide.path.replace(/^\/(en|ar)\/guides\//, '').replace(/\/$/, '');
                  return (
                    <article key={guide.route_id} className="card">
                      <div style={{ padding: 24 }}>
                        <div className="cluster" style={{ justifyContent: 'space-between', marginBottom: 12 }}>
                          <span className="badge badge-locked">{guide.phase}</span>
                          <span className="display-serif" style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>4 min</span>
                        </div>
                        <h3 className="discipline-title" style={{ fontSize: '1.05rem', marginBottom: 8 }}>
                          <Link href={`/${locale}/guides/${subPath}`}>{guide.title_brief}</Link>
                        </h3>
                        <p className="display-serif" style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', margin: '0 0 16px', lineHeight: 1.5, fontStyle: 'italic' }}>
                          {guide.primary_intent}
                        </p>
                        <div className="cluster" style={{ justifyContent: 'space-between', borderTop: '1px solid var(--color-border)', paddingTop: 12 }}>
                          <span style={{ fontSize: '0.78rem', color: 'var(--color-gold-dark)', fontWeight: 700, letterSpacing: '0.05em' }}>
                            {guide.publication_gate?.split('+')[0] || 'Peer Reviewed'}
                          </span>
                          <Link href={`/${locale}/guides/${subPath}`} className="btn btn-outline btn-sm">
                            {isAr ? 'قراءة الدليل ←' : 'Read Guide →'}
                          </Link>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { domain } from '@/lib/data';
import { countryNamesFor } from '@/lib/country-registry';

interface CoverageCountsProps {
  locale: string;
  isAr: boolean;
}

/**
 * Location-coverage list, yello.ae-style: a compact set of producing regions,
 * each with a per-country published-record count. The counts are computed the
 * same way the directory computes them — from the published, non-demo
 * records and the country registry — never hard-coded, so a figure that
 * overstates coverage cannot be shown here.
 */
export function CoverageCounts({ locale, isAr }: CoverageCountsProps) {
  // The public register excludes the development fixtures, so the counts
  // reflect real, publishable records only — the same source the directory
  // and the home page's featured block read from.
  const businesses = domain.listBusinesses({ excludeDemo: true }) as unknown as {
    country_id?: string;
  }[];

  const byCountry = new Map<string, number>();
  for (const b of businesses) {
    const code = (b.country_id ?? '').toUpperCase();
    if (!code) continue;
    byCountry.set(code, (byCountry.get(code) ?? 0) + 1);
  }

  // Resolve to named countries, keep only ones that have a published
  // record, order by count descending, take the top six.
  const rows = Array.from(byCountry.entries())
    .map(([code, count]) => {
      const name = countryNamesFor(code);
      return name ? { key: name.iso2, en: name.en, ar: name.ar, count } : null;
    })
    .filter((r): r is { key: string; en: string; ar: string; count: number } => r !== null)
    .sort((a, b) => b.count - a.count)
    .slice(0, 6);

  const totalCovered = rows.length;

  // Graceful degradation: with only a handful of documented countries the
  // "where the register reaches" list under-sells rather than signals
  // breadth, so the band hides until the register actually spans three or
  // more documented countries. It reappears on its own as real records are
  // published — there is no flag to flip by hand.
  if (totalCovered < 3) return null;

  return (
    <section className="section section-sage">
      <div className="container">
        <div className="row-between" style={{ marginBottom: 28 }}>
          <div>
            <span className="eyebrow">
              {isAr ? 'تغطية المناسبات' : 'Where the register reaches'}
            </span>
            <h2 className="h2" style={{ margin: 0 }}>
              {isAr ? 'أبرز المناطق المنتجة والتجارية' : 'Top producing & trading regions'}
            </h2>
          </div>
          <Link href={`/${locale}/world`} className="btn btn-outline btn-sm">
            {isAr ? 'كل الأقاليم' : 'All 249 territories'}
            <ArrowRight size={13} className="icon-dir-flip" />
          </Link>
        </div>

        {rows.length > 0 ? (
          <div className="coverage-grid">
            {rows.map((row) => (
              <Link key={row.key} href={`/${locale}/world/${row.key}`} className="coverage-item">
                <div className="coverage-item-main">
                  <span className="coverage-country">
                    {isAr ? row.ar : row.en}
                  </span>
                  <span className="coverage-count">
                    {row.count} {isAr ? 'سجلاً' : 'record' + (row.count === 1 ? '' : 's')}
                  </span>
                </div>
                <MapPin size={15} className="coverage-item-icon" />
                <ArrowRight size={14} className="icon-dir-flip coverage-item-arrow" />
              </Link>
            ))}
          </div>
        ) : (
          <p className="lede" style={{ margin: 0 }}>
            {isAr
              ? 'لا توجد سجلات منشورة بعد — يُنشر سجل كل مرة يوثَّق فيها مورد.'
              : 'No published records yet — the register grows each time a supplier is documented.'}
          </p>
        )}

        <p className="coverage-footnote">
          {isAr
            ? `تُحتسب الأرقام من السجلات المنشورة فقط، عبر ${totalCovered} مناسبات موثّقة في الدليل.`
            : `Figures count published directory records only, across ${totalCovered} documented ${totalCovered === 1 ? 'country' : 'countries'}.`}
        </p>
      </div>
    </section>
  );
}

import Link from 'next/link';
import { domain } from '@/lib/data';
import { ShortlistPanel, type ShortlistProducer } from '@/components/business/shortlist-panel';
import { Bookmark, Compass } from 'lucide-react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';

/**
 * The buyer shortlist.
 *
 * The shortlist is held in the browser. The list shown here is the
 * published register the browser matches against, so it excludes the
 * development fixtures for the same reason the directory does.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';

  return buildMetadata({
    path: `/${locale}/shortlist`,
    title: isAr ? 'قائمة الموردين المحفوظة' : 'Your saved suppliers',
    description: isAr
      ? 'قارن الموردين المحفوظين جنباً إلى جنب حسب أصناف المواد والحد الأدنى للطلب وتوفر العينات. محفوظة في متصفحك فقط.'
      : 'Compare saved suppliers side by side on material families, minimum order quantities and sample availability. Held in your browser only.',
    locale,
    alternateLocalePath: `/${locale === 'ar' ? 'en' : 'ar'}/shortlist`,
  });
}

export default async function ShortlistPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === 'ar';

  const businesses = domain.listBusinesses({ excludeDemo: true }) as unknown as ShortlistProducer[];

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 1080 }}>
        <section className="masthead">
          <div className="masthead-inner">
            <div className="hero-tag">
              <Bookmark size={12} />
              <span>{isAr ? 'قائمة الحفظ' : 'Shortlist'}</span>
            </div>
            <h1>
              {isAr ? 'موردوك المحفوظون للمقارنة' : 'Your saved suppliers'}
              <span className="accent">
                {isAr
                  ? 'قارن الخصائص التجارية جنباً إلى جنب.'
                  : 'Compare commercial attributes side by side.'}
              </span>
            </h1>
            <p className="hero-lead">
              {isAr
                ? 'تُحفظ قائمتك محلياً في متصفحك. لا تُرسل إلى الخادم ولا تُشارك مع أي طرف ثالث.'
                : 'Your shortlist is stored locally in your browser. It is never sent to the server and never shared with a third party.'}
            </p>
            <div className="masthead-actions">
              <Link href={`/${locale}/directory`} className="btn btn-outline btn-sm">
                <Compass size={14} />
                {isAr ? 'تصفح الدليل' : 'Browse the directory'}
              </Link>
            </div>
          </div>
        </section>

        <div style={{ marginTop: 40 }}>
          <ShortlistPanel locale={locale} isAr={isAr} producers={businesses} />
        </div>
      </div>
    </div>
  );
}

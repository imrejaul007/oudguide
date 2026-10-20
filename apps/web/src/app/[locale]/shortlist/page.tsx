import { buildMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import Link from 'next/link';
import { domain } from '@/lib/data';
import { ShortlistPanel, type ShortlistProducer } from '@/components/business/shortlist-panel';
import { Bookmark, Compass } from 'lucide-react';

export default async function ShortlistPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === 'ar';

  const businesses = domain.listBusinesses() as unknown as ShortlistProducer[];

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
              {isAr ? 'منتجاتك المحفوظة للمقارنة' : 'Your Saved Producers'}
              <span className="accent">
                {isAr
                  ? 'قارن الصفات التجارية بين المنتجين جنباً إلى جنب.'
                  : 'Compare commercial attributes side by side.'}
              </span>
            </h1>
            <p className="hero-lead">
              {isAr
                ? 'تُحفظ قائمتك محلياً في متصفحك فقط. لا تُرسل إلى الخادم ولا تُشارك مع أي طرف ثالث.'
                : 'Your shortlist is stored locally in your browser only. It is never sent to the server and never shared with a third party.'}
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
          <ShortlistPanel
            locale={locale}
            isAr={isAr}
            producers={businesses}
          />
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';
  return buildMetadata({
    path: `/${locale}/shortlist`,
    title: isAr ? "قائمة المنتجين المحفوظة" : "Your Producer Shortlist",
    description: isAr ? "قارن المنتجين المحفوظين جنباً إلى جنب حسب أصناف المواد والأقاليم الموثقة والحد الأدنى للطلب وتوفر العينات، محفوظة في متصفحك." : "Compare saved oud producers side by side on material families, verified origins, minimum order quantities and sample availability, held privately in your browser.",
    locale,
    alternateLocalePath: `/${locale === 'ar' ? 'en' : 'ar'}/shortlist`,
  });
}


import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Building2,
  ClipboardList,
  Quote,
  User,
  ArrowRight,
} from 'lucide-react';
import { buildMetadata } from '@/lib/metadata';
import { portalCopy, pick } from '@/lib/copy/b2b-portal';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';
  return buildMetadata({
    path: `/${locale}/b2b`,
    title: isAr
      ? 'بوابة التوريد بين المؤسسات'
      : 'B2B Sourcing Portal — Request Wholesale Quotes',
    description: isAr
      ? 'بوابة توريد الجملة للعود ومواد العطور: اطلب عروض أسعار من موردين معتمدين، تصفح متاجرهم، وتابع متطلباتك.'
      : 'Wholesale sourcing for oud and fragrance materials: request quotes from verified suppliers, browse their storefronts, and track your requirements.',
    locale,
    alternateLocalePath: `/${locale === 'ar' ? 'en' : 'ar'}/b2b`,
  });
}

export default async function B2bPortalPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === 'ar';

  const tiles = [
    {
      href: `/${locale}/b2b/quote`,
      icon: ClipboardList,
      title: pick(locale, portalCopy.quoteRequestCta),
      body: isAr
        ? 'نموذج قصير — دقيقة واحدة — يصل إلى قائمة المراجعة ثم إلى الموردين المناسبين.'
        : 'A short form — under a minute — into the review queue and on to matching suppliers.',
    },
    {
      href: `/${locale}/b2b/suppliers`,
      icon: Building2,
      title: pick(locale, portalCopy.browseSuppliersCta),
      body: isAr
        ? 'موردون معتمدون مع أدنى كميات الطلب والمواد التي يقدمونها.'
        : 'Verified suppliers with minimum order quantities and the materials they offer.',
    },
    {
      href: `/${locale}/b2b/quote`,
      icon: Quote,
      title: pick(locale, portalCopy.myRequirementsCta),
      body: isAr
        ? 'حالة طلبك الحالي والعروض التي وصلت.'
        : 'Your current requirement and the quotes it has drawn.',
    },
    {
      href: `/${locale}/b2b/supplier/login`,
      icon: User,
      title: pick(locale, portalCopy.supplierLogin),
      body: isAr
        ? 'للموردين المسجلين: الطلبات المسندة، العروض، والإدراجات.'
        : 'For registered suppliers: assigned leads, quotes and listings.',
    },
  ];

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 980 }}>
        <section className="masthead">
          <div className="masthead-inner">
            <div className="hero-tag">
              <Building2 size={12} />
              <span>{isAr ? 'بوابة تجارة الجملة' : 'Wholesale trade'}</span>
            </div>
            <h1>
              {pick(locale, portalCopy.landingTitle)}
              <span className="accent">
                {isAr ? 'للتوريد الحقيقي.' : 'for real sourcing.'}
              </span>
            </h1>
            <p className="hero-lead">{pick(locale, portalCopy.landingSubtitle)}</p>
          </div>
        </section>

        <div className="portal-grid" style={{ marginTop: 24 }}>
          {tiles.map((tile, i) => (
            <Link
              key={i}
              href={tile.href}
              className="portal-tile"
              style={{ textDecoration: 'none' }}
            >
              <div className="portal-tile-icon">
                <tile.icon size={18} />
              </div>
              <div className="portal-tile-title">
                {tile.title}
                <ArrowRight size={13} className="icon-dir-flip" />
              </div>
              <p className="portal-tile-body">{tile.body}</p>
            </Link>
          ))}
        </div>

        <p className="discipline-note" style={{ marginTop: 24 }}>
          {isAr
            ? 'تبقى بيانات اتصال المشتري محجوبة حتى يعتمِد المشتري الموردَ بالاسم لهذا الطلب. لا يعرض البوابة العامة أي سعر؛ تُشارك الأسعار بالجملة عبر عرض السعر.'
            : 'A buyer contact is withheld until the buyer approves a supplier by name for that request. The public portal shows no pricing; wholesale prices are shared through the quote.'}
        </p>
      </div>
    </div>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Building2,
  ClipboardList,
  Quote,
  User,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileText,
  PackageOpen,
  Award,
  Zap,
} from 'lucide-react';
import { buildMetadata } from '@/lib/metadata';
import { portalCopy, pick } from '@/lib/copy/b2b-portal';
import { domain } from '@/lib/data';
import { listReviewedArticles } from '@/lib/articles';
import { HeroQuickRfq } from '@/components/home/hero-quick-rfq';
import { MarketplaceExplorer } from '@/components/home/marketplace-explorer';

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
      ? 'بوابة التوريد بين المؤسسات — تجارة الجملة المباشرة'
      : 'B2B Wholesale Sourcing Portal — Direct Distiller Trade',
    description: isAr
      ? 'بوابة توريد الجملة للعود ومواد العطور: اطلب عروض أسعار مباشرة من المقطرين، تصفح الكتالوج الحي، وتواصل بلا عمولات وساطة.'
      : 'Direct wholesale sourcing for natural agarwood and artisan distillates: request quotes from verified distillers, explore live catalogs, and source with zero broker markups.',
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

  const reviewedArticles = listReviewedArticles();
  const suppliers = domain.listBusinesses({ excludeDemo: true });

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
    <div className="section" style={{ paddingTop: 32 }}>
      <div className="container" style={{ maxWidth: 1080 }}>
        {/* COMMAND MASTHEAD & QUICK RFQ ENGINE */}
        <div className="hero-split-layout" style={{ marginBottom: 44 }}>
          <div>
            <div className="hero-tag" style={{ marginBottom: 16 }}>
              <Zap size={12} style={{ color: 'var(--green-700)' }} />
              <span>{isAr ? 'بوابة تجارة الجملة والربط المباشر' : 'Direct Wholesale Sourcing Command'}</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 3.8vw, 3.1rem)', lineHeight: 1.1, marginBottom: 16 }}>
              {pick(locale, portalCopy.landingTitle)}
              <span className="accent" style={{ display: 'block', color: 'var(--green-700)', fontSize: '0.62em', marginTop: 6 }}>
                {isAr ? 'توريد موثق من المقطرين مباشرة وبلا عمولات وساطة.' : 'Direct distiller procurement with 0% broker markup.'}
              </span>
            </h1>
            <p className="hero-lead" style={{ maxWidth: '52ch', marginBottom: 24 }}>
              {pick(locale, portalCopy.landingSubtitle)}
            </p>

            <div className="cluster" style={{ gap: 16, color: 'var(--ink-muted)', fontSize: '0.84rem' }}>
              <span className="cluster" style={{ gap: 6 }}>
                <CheckCircle2 size={15} style={{ color: 'var(--green-700)' }} />
                <span>{isAr ? 'حماية بيانات المشتري' : 'Confidential Intake'}</span>
              </span>
              <span className="cluster" style={{ gap: 6 }}>
                <CheckCircle2 size={15} style={{ color: 'var(--green-700)' }} />
                <span>{isAr ? 'فحص النقاء المخبري' : 'GC-MS Purity Verification'}</span>
              </span>
              <span className="cluster" style={{ gap: 6 }}>
                <CheckCircle2 size={15} style={{ color: 'var(--green-700)' }} />
                <span>{isAr ? '0% عمولات خفية' : '0% Broker Markups'}</span>
              </span>
            </div>
          </div>

          <div>
            <HeroQuickRfq locale={locale} isAr={isAr} />
          </div>
        </div>

        {/* 4 PROCUREMENT TILES */}
        <div className="portal-grid" style={{ marginBottom: 48 }}>
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

        {/* LIVE WHOLESALE CATALOG EXPLORER */}
        <section style={{ marginBottom: 48 }}>
          <div className="row-between" style={{ marginBottom: 20 }}>
            <div>
              <span className="eyebrow">{isAr ? 'الكتالوج التجاري الحي' : 'Live Wholesale Catalog'}</span>
              <h2 className="h2" style={{ margin: 0 }}>
                {isAr ? 'استكشف أصناف العود واطلب عروض أسعار' : 'Explore Material Families & Request Bulk Quotes'}
              </h2>
            </div>
            <Link href={`/${locale}/b2b/quote`} className="btn btn-outline btn-sm">
              <span>{isAr ? 'طلب تسعير شامل' : 'Open Full RFQ'}</span>
              <ArrowRight size={12} className="icon-dir-flip" />
            </Link>
          </div>

          <MarketplaceExplorer
            locale={locale}
            isAr={isAr}
            reviewedArticles={reviewedArticles}
            producers={suppliers as any[]}
          />
        </section>

        {/* VERIFIED SUPPLIER STOREFRONTS SHOWCASE */}
        <section style={{ marginBottom: 48 }}>
          <div className="row-between" style={{ marginBottom: 20 }}>
            <div>
              <span className="eyebrow">{isAr ? 'الموردون المعتمدون' : 'Verified Distillers'}</span>
              <h2 className="h2" style={{ margin: 0 }}>
                {isAr ? 'متاجر المنتجين الموثقين في الدليل' : 'Verified Producer Storefronts & Facilities'}
              </h2>
            </div>
            <Link href={`/${locale}/b2b/suppliers`} className="btn btn-outline btn-sm">
              <span>{isAr ? `عرض كل الموردين (${suppliers.length})` : `All Suppliers (${suppliers.length})`}</span>
              <ArrowRight size={12} className="icon-dir-flip" />
            </Link>
          </div>

          <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
            {suppliers.slice(0, 4).map((s) => (
              <div key={s.id} className="b2b-card" style={{ padding: 22 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
                  <div style={{ minWidth: 0 }}>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 600, margin: '0 0 4px' }}>
                      <Link href={`/${locale}/b2b/suppliers/${s.slug}`}>{s.name}</Link>
                    </h3>
                    <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--ink-soft)' }}>
                      {[s.city, s.country_name].filter(Boolean).join(', ')}
                      {s.established_year ? ` · Est. ${s.established_year}` : ''}
                    </p>
                  </div>
                  {s.contact_unlocked ? (
                    <span className="badge badge-emerald">
                      <Award size={11} />
                      {isAr ? 'معتمد' : 'Verified'}
                    </span>
                  ) : null}
                </div>

                <div className="b2b-spec-matrix" style={{ margin: '10px 0 14px', padding: '8px 12px' }}>
                  <div className="b2b-spec-item">
                    <span className="b2b-spec-lbl">{isAr ? 'الحد الأدنى' : 'MOQ'}</span>
                    <span className="b2b-spec-val" style={{ fontSize: '0.8rem' }}>{s.minimum_order_quantity || '—'}</span>
                  </div>
                  <div className="b2b-spec-item">
                    <span className="b2b-spec-lbl">{isAr ? 'العينات' : 'Samples'}</span>
                    <span className="b2b-spec-val" style={{ fontSize: '0.8rem', color: s.sample_availability ? 'var(--green-700)' : 'inherit' }}>
                      {s.sample_availability ? (isAr ? 'متاحة' : 'Available') : (isAr ? 'غير متاحة' : '—')}
                    </span>
                  </div>
                </div>

                <div className="b2b-card-actions" style={{ paddingTop: 10 }}>
                  <Link href={`/${locale}/b2b/suppliers/${s.slug}`} className="btn btn-outline btn-sm" style={{ padding: '5px 10px', fontSize: '0.78rem' }}>
                    <span>{isAr ? 'المتجر' : 'Storefront'}</span>
                  </Link>
                  <Link href={`/${locale}/b2b/quote?supplier=${s.slug}`} className="btn btn-primary btn-sm" style={{ padding: '5px 12px', fontSize: '0.78rem', gap: 4 }}>
                    <FileText size={11} />
                    <span>{isAr ? 'طلب تسعير' : 'Get Quote'}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* B2B SOURCING GUARANTEE & CONFIDENTIALITY SHIELD */}
        <div className="privacy-shield" style={{ marginTop: 24 }}>
          <ShieldCheck size={24} className="privacy-shield-icon" />
          <div className="privacy-shield-body">
            <h4>{isAr ? 'بروتوكول حماية المشترين والمطابقة المباشرة' : 'Buyer Confidentiality & Direct Matching Protocol'}</h4>
            <p style={{ margin: 0 }}>
              {isAr
                ? 'تبقى بيانات اتصال المشتري محجوبة حتى يعتمِد المشتري الموردَ بالاسم لهذا الطلب. لا يعرض البوابة العامة أي سعر؛ تُشارك الأسعار بالجملة مباشرة عبر نموذج عرض السعر دون أي عمولات وساطة.'
                : 'Buyer contact details are strictly withheld until the buyer explicitly approves a supplier by name for that request. The public portal shows no public price bias; wholesale prices are shared directly through competitive RFQ quotes with zero intermediary markups.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

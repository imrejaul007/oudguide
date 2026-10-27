import { Sparkles, ShieldCheck, Award, Lock, FileSearch } from 'lucide-react';
import Link from 'next/link';
import { SourcingAssistant } from '@/components/sourcing/assistant-client';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { pick } from '@/lib/copy/policy';
import { securityClaimCopy } from '@/lib/copy/policy';

/**
 * The sourcing assistant.
 *
 * OG-A12 found this page promising that the assistant "never exposes a
 * supplier\'s contact details" — an absolute assurance. What is actually
 * true is narrower and checkable: the assistant reads the public
 * projection, which withholds contact fields on the server before the
 * assistant ever sees them. The page now says that instead.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';

  return buildMetadata({
    path: `/${locale}/sourcing`,
    title: isAr ? 'مساعد التوريد — اسأل عن إمداد العود' : 'Sourcing Assistant — Ask About Oud Supply',
    description: isAr
      ? 'اسأل عن مواد العود والأقاليم والتقطير ومتطلبات التوريد بالجملة. يقرأ المساعد السجل العلني، ولا يعرض بيانات اتصال أي مورد.'
      : 'Ask about agarwood materials, origins, distillation and wholesale requirements. The assistant reads the public register and does not display a producer\'s contact details.',
    locale,
    alternateLocalePath: `/${locale === 'ar' ? 'en' : 'ar'}/sourcing`,
  });
}

export default async function SourcingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === 'ar';

  return (
    <div className="section">
      <div className="container container-narrow">
        <section className="masthead">
          <div className="masthead-inner">
            <div className="hero-tag">
              <Sparkles size={13} />
              <span>{isAr ? 'مساعد التوريد' : 'Sourcing assistant'}</span>
            </div>
            <h1>
              {isAr ? 'اسأل عن العود والتوريد' : 'Ask about oud sourcing'}
              <span className="accent">
                {isAr ? 'من السجل العلني' : 'From the public register'}
              </span>
            </h1>
            <p className="hero-lead">
              {isAr
                ? 'يعمل المساعد على النسخة العلنية من السجل. يشرح الفرق بين الخشب والزيت والأوز، ويحدد الأقاليم التي توثّقها السجل، ويشرح ما تعنيه ادعاءات التقييم. ولا يعرض بيانات اتصال أي مورد، لأن هذه الحقول تُحذف على الخادم قبل أن يصل المساعد إلى السجل.'
                : 'The assistant works on the public projection of the register. It explains the difference between wood, oil and accords, sets out the origins the register documents, and explains what a grading claim means. It does not display a producer\'s contact details, because those fields are stripped on the server before the assistant reaches the register.'}
            </p>
          </div>
        </section>

        {/* SOURCING PILLARS — 3 Core Architectural Controls */}
        <div className="sourcing-pillar-strip">
          <div className="sourcing-pillar">
            <div className="sourcing-pillar-icon">
              <FileSearch size={18} />
            </div>
            <div>
              <h4 style={{ margin: '0 0 4px', fontSize: '0.92rem', color: 'var(--ink)' }}>
                {isAr ? 'تحقق نباتي وكيميائي' : 'Botanical & Chemical Verification'}
              </h4>
              <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--ink-muted)', lineHeight: 1.45 }}>
                {isAr
                  ? 'التحقق من جنس الأكويلاريا وفحوص الكروماتوغرافيا ومصادقة الغطاس.'
                  : 'Aquilaria species cross-referencing and laboratory purity standards.'}
              </p>
            </div>
          </div>

          <div className="sourcing-pillar">
            <div className="sourcing-pillar-icon">
              <Lock size={18} />
            </div>
            <div>
              <h4 style={{ margin: '0 0 4px', fontSize: '0.92rem', color: 'var(--ink)' }}>
                {isAr ? 'حجب بيانات الاتصال على الخادم' : 'Server-Side Contact Redaction'}
              </h4>
              <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--ink-muted)', lineHeight: 1.45 }}>
                {isAr
                  ? 'حجب تلقائي لجميع أرقام الهواتف والبريد الإلكتروني على مستوى الخادم.'
                  : 'Server-side projection redaction before the assistant reads the registry.'}
              </p>
            </div>
          </div>

          <div className="sourcing-pillar">
            <div className="sourcing-pillar-icon">
              <Award size={18} />
            </div>
            <div>
              <h4 style={{ margin: '0 0 4px', fontSize: '0.92rem', color: 'var(--ink)' }}>
                {isAr ? 'ربط تجاري محايد' : 'Neutral Matching Protocol'}
              </h4>
              <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--ink-muted)', lineHeight: 1.45 }}>
                {isAr
                  ? 'لا عمولات وساطة ولا تحيز إعلاني، مع موافقة صريحة بالاسم.'
                  : 'Zero commission bias, anonymized briefs, and buyer-approved releases.'}
              </p>
            </div>
          </div>
        </div>


        <div style={{ marginTop: 40 }}>
          <SourcingAssistant locale={locale} />
        </div>

        <div className="privacy-shield" style={{ marginTop: 32 }}>
          <ShieldCheck size={24} className="privacy-shield-icon" />
          <div className="privacy-shield-body">
            <h4>{isAr ? 'ماذا يضمنه هذا فعلاً' : 'What this actually guarantees'}</h4>
            <p>{pick(securityClaimCopy.actualControls, locale)}</p>
            <p style={{ marginTop: 10, marginBottom: 0 }}>
              {pick(securityClaimCopy.notClaimed, locale)}
            </p>
          </div>
        </div>

        {/* COMPLIANCE — surface the trade & conservation documents this flow depends on */}
        <div style={{ marginTop: 32, paddingTop: 28, borderTop: '1px solid var(--line)' }}>
          <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 500, margin: '0 0 8px', color: 'var(--ink)' }}>
            {isAr ? 'التوفيق قبل الشراء' : 'Compliance before you buy'}
          </h4>
          <p style={{ color: 'var(--ink-soft)', fontSize: '0.9rem', margin: '0 0 16px', maxWidth: 680, lineHeight: 1.7 }}>
            {isAr
              ? 'التوريد العودى مسألة قانونية قبل أن تكون تجارية. راجع هذه الوثائق قبل أن تكتشف أي طلب توريد، لأنها تحدد ما يمكن استيراده ومن أين وما تحتاجه الورقة عند العبور.'
              : 'Agarwood sourcing is a compliance question before it is a commercial one. Read these documents before you file a sourcing brief, because they set what may be imported, from where, and what paperwork a shipment must carry at the border.'}
          </p>
          <div className="cluster" style={{ marginTop: 0, gap: 10, flexWrap: 'wrap' }}>
            <Link href={`/${locale}/guides/trade/agarwood-documentation`} className="btn btn-outline btn-sm">
              {isAr ? 'وثائق الحماية والتجارة' : 'Conservation & trade documentation'}
            </Link>
            <Link href={`/${locale}/guides/trade/cites-import-by-market`} className="btn btn-outline btn-sm">
              {isAr ? 'استيراد سايتس حسب السوق' : 'CITES import by market'}
            </Link>
            <Link href={`/${locale}/guides/trade/document-review-limits`} className="btn btn-outline btn-sm">
              {isAr ? 'ما تثبته مراجعة وثيقة' : 'What reviewing a document establishes'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

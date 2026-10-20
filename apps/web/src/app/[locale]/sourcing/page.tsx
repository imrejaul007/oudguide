import { Sparkles, ShieldCheck } from 'lucide-react';
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
      </div>
    </div>
  );
}

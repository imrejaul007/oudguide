import Link from 'next/link';
import { Building2, Check, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { pick } from '@/lib/copy/policy';
import { contactPolicyCopy, membershipCopy } from '@/lib/copy/policy';

/**
 * The producer page.
 *
 * The old copy promised "publish your verified laboratory testing to a
 * global B2B audience" and "establish international provenance" — both
 * claims the site cannot make, because it verifies nothing on a
 * laboratory's behalf. The page now says what claiming a profile does
 * and what it does not, and separates the free tier from the paid one
 * without promising a verification verdict for money.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';

  return buildMetadata({
    path: `/${locale}/for-businesses`,
    title: isAr ? 'للمقطرين والمزارعين — وثّق ملفك في دليل العود' : 'For Distillers & Growers — Document Your OudGuide Profile',
    description: isAr
      ? 'وثّق ملفك مجاناً كمالك. запишите ما تبيعه ومن أين يأتي، واقترح تصحيحات على ملفك. العضوية السنوية تتيح نشر بيانات اتصالك، لا التوثيق ولا الوصول إلى بيانات المشترين.'
      : 'Document your profile as the owner, free. Record what you sell and where it comes from, and propose corrections to your own listing. The annual membership enables publication of your contact details — it is not a verification, and it is not access to buyer data.',
    locale,
    alternateLocalePath: `/${locale === 'ar' ? 'en' : 'ar'}/for-businesses`,
  });
}

export default async function ForBusinessesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === 'ar';

  const freeFeatures = [
    {
      en: 'A profile you own, with your own description and product families.',
      ar: 'ملف تملكه أنت، بوصفك ومجموعات المنتجات التي تقدمها.',
    },
    {
      en: 'A place to record where your material comes from, separate from where your business is located.',
      ar: 'مكان تسجل فيه منشأ مادتك، منفصلاً عن موقع منشأتك.',
    },
    {
      en: 'The ability to propose corrections to your own listing at any time, free of charge.',
      ar: 'القدرة على اقتراح تصحيحات على ملفك في أي وقت، دون مقابل.',
    },
    {
      en: 'A named owner, so the register records who is behind the listing.',
      ar: 'مالك مسمّى، فيسجّل السجل من يقف خلف الملف.',
    },
  ];

  const memberFeatures = [
    {
      en: 'Publication of the contact fields you choose — email, phone, WhatsApp or address.',
      ar: 'نشر حقول الاتصال التي تختارها — البريد أو الهاتف أو واتساب أو العنوان.',
    },
    {
      en: 'A listing that shows its membership state, so a buyer can see what is and is not verified.',
      ar: 'إدراج يبيّن حالة العضوية، فيرى المشتري ما هو موثّق وما هو غير موثّق.',
    },
    {
      en: 'Inclusion in the wholesale matching flow, where you may be proposed to a buyer.',
      ar: 'الإدراج في مسار التوريد بالجملة، حيث قد يُقترح عليك على مشترٍ.',
    },
  ];

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 1100 }}>
        <section className="masthead">
          <div className="masthead-inner">
            <div className="hero-tag">
              <Building2 size={13} />
              <span>{isAr ? 'لمنتجي العود' : 'For oud producers'}</span>
            </div>
            <h1>
              {isAr ? 'وثّق ملفك في دليل العود' : 'Document your profile on OudGuide'}
              <span className="accent">
                {isAr ? 'التوثيق مجاني. العضوية السنوية اختيارية.' : 'Claiming is free. The annual membership is optional.'}
              </span>
            </h1>
            <p className="hero-lead">
              {isAr
                ? 'يسجّل دليل العود ما يقدّمه كل مورد عن نفسه، ويصف ما هو موثّق وما هو معلن من البائع وما لم يُفحص بعد. وتوثيق الملكية مجاني ولا يحتاج عضوية.'
                : 'OudGuide records what each supplier says about itself, and separates what has been checked from what the seller has declared and what has not been examined. Claiming a profile is free and does not require a membership.'}
            </p>
          </div>
        </section>

        <div className="grid-2" style={{ marginTop: 48, gap: 28 }}>
          {/* FREE TIER */}
          <article className="card-frame" style={{ padding: 34, background: 'var(--bg-pearl)' }}>
            <span className="eyebrow" style={{ display: 'block', marginBottom: 8 }}>
              {isAr ? 'مجاني' : 'Free'}
            </span>
            <h2 className="h3" style={{ marginBottom: 18 }}>
              {isAr ? 'توثيق الملكية' : 'Ownership claim'}
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }} className="stack-3">
              {freeFeatures.map((feature, index) => (
                <li key={index} className="cluster" style={{ gap: 10, alignItems: 'flex-start' }}>
                  <Check size={15} style={{ color: 'var(--green-600)', flexShrink: 0, marginTop: 3 }} />
                  <span style={{ fontSize: '0.93rem' }}>{pick(feature, locale)}</span>
                </li>
              ))}
            </ul>
            <p className="meta" style={{ marginTop: 20, textTransform: 'none' }}>
              {isAr
                ? 'التوثيق لا ينشر بيانات الاتصال، ولا يمنحك وصولاً إلى بيانات المشترين.'
                : 'A claim publishes no contact details and gives you no access to buyer data.'}
            </p>
          </article>

          {/* PAID TIER */}
          <article className="card-frame" style={{ padding: 34 }}>
            <span className="eyebrow eyebrow-crimson" style={{ display: 'block', marginBottom: 8 }}>
              {isAr ? 'العضوية السنوية' : 'Annual membership'}
            </span>
            <h2 className="h3" style={{ marginBottom: 8 }}>
              {pick(membershipCopy.priceHeadline, locale)}
            </h2>
            <p className="text-body" style={{ marginBottom: 18, fontSize: '0.93rem' }}>
              {pick(membershipCopy.priceTaxNote, locale)}
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }} className="stack-3">
              {memberFeatures.map((feature, index) => (
                <li key={index} className="cluster" style={{ gap: 10, alignItems: 'flex-start' }}>
                  <Check size={15} style={{ color: 'var(--green-600)', flexShrink: 0, marginTop: 3 }} />
                  <span style={{ fontSize: '0.93rem' }}>{pick(feature, locale)}</span>
                </li>
              ))}
            </ul>
            <p className="meta" style={{ marginTop: 20, textTransform: 'none' }}>
              {pick(membershipCopy.notABenefit, locale)}
            </p>
          </article>
        </div>

        {/* WHAT WE DO NOT CLAIM */}
        <div
          style={{
            marginTop: 32,
            padding: '24px 28px',
            border: '1px solid var(--line)',
            borderRadius: 6,
            background: 'var(--bg-pearl)',
          }}
        >
          <span className="eyebrow" style={{ display: 'block', marginBottom: 8 }}>
            {isAr ? 'ما لا يدّعيه دليل العود' : 'What OudGuide does not claim'}
          </span>
          <p className="text-body" style={{ marginBottom: 10 }}>
            {pick(contactPolicyCopy.states.factCheck, locale)}
          </p>
          <p className="text-body" style={{ margin: 0 }}>
            {isAr
              ? 'لا يزور دليل العود المعامل، ولا يرسل بريداً موثّقاً، ولا يقدّم نتيجة فحص مخبري نيابةً عنك. وما يُنشر عنك هو ما توثّقه أنت وما نتحقق منه فعلاً.'
              : 'OudGuide does not visit distilleries, does not send a certified letter, and does not publish a laboratory result on your behalf. What appears against your name is what you have documented, plus what has genuinely been checked.'}
          </p>
        </div>

        <section style={{ marginTop: 32, textAlign: 'center' }}>
          <div className="cluster" style={{ gap: 12, justifyContent: 'center' }}>
            <Link href={`/${locale}/directory`} className="btn btn-primary">
              {isAr ? 'تصفح الدليل' : 'Browse the directory'}
              <ArrowRight size={14} />
            </Link>
            <Link href={`/${locale}/membership`} className="btn btn-outline">
              {isAr ? 'اقرأ تفاصيل العضوية' : 'Read the membership details'}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

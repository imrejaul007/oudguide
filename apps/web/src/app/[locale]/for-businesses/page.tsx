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
      ? 'وثّق ملفك مجاناً كمالك. سجّل ما تبيعه ومن أين يأتي، واقترح تصحيحات على ملفك. العضوية السنوية تتيح نشر بيانات اتصالك، لا التوثيق ولا الوصول إلى بيانات المشترين.'
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

        <div className="pricing-grid" style={{ marginTop: 48 }}>
          {/* FREE TIER */}
          <article className="pricing-card">
            <div className="pricing-card-head">
              <span className="pricing-card-tier">{isAr ? 'مجاني' : 'Free'}</span>
            </div>
            <div className="pricing-price">{isAr ? 'وثيقة ملكية' : 'Claim your profile'}</div>
            <p className="pricing-price-note">
              {isAr
                ? 'توثيق الملف مجاني ولا يحتاج إلى عضوية.'
                : 'Ownership claim is free and does not require a membership.'}
            </p>
            <ul className="pricing-list">
              {freeFeatures.map((feature, index) => (
                <li key={index}>
                  <Check size={15} style={{ color: 'var(--green-600)' }} />
                  <span>{pick(feature, locale)}</span>
                </li>
              ))}
            </ul>
            <p className="pricing-card-footnote">
              {isAr
                ? 'توثيق الملف لا ينشر بيانات الاتصال، ولا يمنحك وصولا إلى بيانات المشترين.'
                : 'A claim publishes no contact details and gives you no access to buyer data.'}
            </p>
          </article>

          {/* PAID TIER — the one highlighted */}
          <article className="pricing-card featured">
            <div className="pricing-card-head">
              <span className="pricing-card-tier">
                {isAr ? 'العضوية السنوية' : 'Annual membership'}
              </span>
              <span className="badge badge-gold">{isAr ? 'عضوية تجارية' : 'Commercial'}</span>
            </div>
            <div className="pricing-price">
              {isAr ? '1,200' : 'AED 1,200'}
              <span className="pricing-price-unit">{isAr ? 'درهم سنويا' : 'per year'}</span>
            </div>
            <p className="pricing-price-note">
              {pick(membershipCopy.priceTaxNote, locale)}
            </p>
            <ul className="pricing-list">
              {memberFeatures.map((feature, index) => (
                <li key={index}>
                  <Check size={15} style={{ color: 'var(--brass)' }} />
                  <span>{pick(feature, locale)}</span>
                </li>
              ))}
            </ul>
            <p className="pricing-card-footnote">
              {pick(membershipCopy.notABenefit, locale)}
            </p>
          </article>
        </div>

        {/* WHAT EVERY TIER INCLUDES — the shared-benefits strip */}
        <div className="pricing-include-strip">
          <div className="pricing-include-item">
            <Check size={15} />
            <span>
              {isAr
                ? 'سجل موثّق بحالة المراجعة، بلا ترتيب مدفوع ولا كتلة مميّزة.'
                : 'A documented register with review status — no paid ranking, no featured slot.'}
            </span>
          </div>
          <div className="pricing-include-item">
            <Check size={15} />
            <span>
              {isAr
                ? 'مرشحات مستقلة للصنف والدور والموقع والمنشأ والوجهة.'
                : 'Independent filters for material, role, location, origin and destination.'}
            </span>
          </div>
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

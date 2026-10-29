import Link from 'next/link';
import { Crown, ShieldCheck, Check, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import { buildMetadata, SITE_URL } from '@/lib/metadata';
import { jsonLdScript } from '@/lib/jsonld';
import { contactPolicyCopy, membershipCopy, pick } from '@/lib/copy/policy';

/**
 * The membership page.
 *
 * OG-A19 found this page publishing "0% VAT", automatic renewal and a
 * cancellation policy. The audit did not conclude those were wrong — it
 * concluded they were unverifiable, which is a different problem for a
 * page that says them as fact.
 *
 * The one approved figure is kept: AED 1,200 per year. Everything else is
 * marked as not yet determined, because that is the state of it. Live
 * checkout stays disabled: membership is not activated by a payment page
 * or a webhook alone.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';

  return buildMetadata({
    path: `/${locale}/membership`,
    title: isAr ? 'العضوية السنوية — انشر ملف شركتك' : 'Annual Membership — Publish Your Business Profile',
    description: isAr
      ? 'عضوية سنوية بـ 1,200 درهم. تتيح نشر بيانات اتصالك أنت على ملفك، ولا تمنحك أي بيانات مشترٍ. الدفع غير مفعّل حتى تُعتمد الشروط.'
      : 'Annual membership at AED 1,200. It lets you publish your own contact details on your profile, and grants no access to buyer details. Checkout stays disabled until the terms are approved.',
    locale,
    alternateLocalePath: `/${locale === 'ar' ? 'en' : 'ar'}/membership`,
  });
}

export default async function MembershipPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === 'ar';

  // The one approved figure the page stands behind: AED 1,200 a year.
  // The Service + Offer schema records exactly that figure and currency
  // and makes no availability claim, because the page says checkout is
  // not yet active. It is built from the same description the page
  // renders, so the schema does not say anything the page does not show.
  const membershipSchema = jsonLdScript(
    {
      path: `/${locale}/membership`,
      locale,
      title: isAr
        ? 'العضوية السنوية — انشر ملف شركتك'
        : 'Annual Membership — Publish Your Business Profile',
      description: isAr
        ? 'عضوية سنوية بـ 1,200 درهم. تتيح نشر بيانات اتصالك أنت على ملفك، ولا تمنحك أي بيانات مشترٍ. الدفع غير مفعّل حتى تُعتمد الشروط.'
        : 'Annual membership at AED 1,200. It lets you publish your own contact details on your profile, and grants no access to buyer details. Checkout stays disabled until the terms are approved.',
      service: {
        name: isAr ? 'العضوية التجارية السنوية' : 'OudGuide annual commercial membership',
        description: isAr
          ? 'تنشر العضوية بيانات الاتصال الخاصة بالمورد على ملفه، ولا تمنح أي وصول إلى بيانات المشترين.'
          : 'Membership lets a supplier publish its own contact details on its profile and grants no access to buyer details.',
        price: 1200,
        priceCurrency: 'AED',
      },
      breadcrumbs: [
        { label: isAr ? 'الرئيسية' : 'Home', href: `/${locale}` },
        { label: isAr ? 'العضوية' : 'Membership', href: `/${locale}/membership` },
      ],
    },
    SITE_URL
  );

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 1000 }}>
        {membershipSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: membershipSchema }}
          />
        )}
        <section className="masthead">
          <div className="masthead-inner">
            <div className="hero-tag">
              <Crown size={13} />
              <span>{isAr ? 'العضوية التجارية السنوية' : 'Annual commercial membership'}</span>
            </div>
            <h1>
              {isAr ? 'انشر بيانات اتصالك على ملفك' : 'Publish your contact details on your profile'}
              <span className="accent">{pick(membershipCopy.priceHeadline, locale)}</span>
            </h1>
            <p className="hero-lead">{pick(contactPolicyCopy.supplierPublication, locale)}</p>
          </div>
        </section>

        <div className="pricing-grid" style={{ marginTop: 44 }}>
          {/* WHAT IT GRANTS */}
          <article className="pricing-card featured">
            <div className="row-between" style={{ marginBottom: 10 }}>
              <span className="eyebrow" style={{ color: 'var(--green-700)' }}>
                {isAr ? 'ما تمنحه العضوية' : 'What membership grants'}
              </span>
              <span className="badge badge-gold">{isAr ? 'مزايا معتمدة' : 'Verified'}</span>
            </div>
            <h2 className="h3" style={{ marginBottom: 18 }}>
              {pick(membershipCopy.priceHeadline, locale)}
            </h2>
            <ul style={{ paddingInlineStart: '20px', margin: 0, lineHeight: 1.7 }}>
              {membershipCopy.benefits.map((benefit, index) => (
                <li key={index} style={{ marginBottom: '10px', color: 'var(--ink)' }}>
                  {pick(benefit, locale)}
                </li>
              ))}
            </ul>
          </article>

          {/* WHAT IT DOES NOT GRANT */}
          <article className="pricing-card">
            <span className="eyebrow" style={{ display: 'block', marginBottom: 10 }}>
              {isAr ? 'ما لا تمنحه العضوية' : 'What membership does not grant'}
            </span>
            <p className="text-body" style={{ marginBottom: 18 }}>
              {pick(membershipCopy.notABenefit, locale)}
            </p>
            <p className="text-body" style={{ marginBottom: 0 }}>
              {pick(contactPolicyCopy.buyerRelease, locale)}
            </p>
          </article>
        </div>

        {/* PRICE, TAX, RENEWAL — stated at their actual status */}
        <section
          style={{
            marginTop: 32,
            padding: '26px 30px',
            border: '1px solid var(--line)',
            borderRadius: 6,
            background: 'var(--bg-eggshell)',
          }}
        >
          <span className="eyebrow" style={{ display: 'block', marginBottom: 12 }}>
            {isAr ? 'السعر والشروط' : 'Price and terms'}
          </span>
          <div style={{ lineHeight: 1.7 }}>
            <p className="text-body" style={{ marginBottom: 10 }}>
              <strong style={{ color: 'var(--green-800)', fontSize: '1.05rem' }}>{pick(membershipCopy.priceHeadline, locale)}</strong> —{' '}
              {pick(membershipCopy.priceTaxNote, locale)}
            </p>
            <p className="text-body" style={{ marginBottom: 10 }}>
              {pick(membershipCopy.renewalNote, locale)}
            </p>
            <p className="text-body" style={{ margin: 0 }}>
              {pick(membershipCopy.paymentDisabledNote, locale)}
            </p>
          </div>
        </section>

        {/* THE CALL TO ACTION IS NOT A PAYMENT BUTTON */}
        <section style={{ marginTop: 32, textAlign: 'center' }}>
          <div className="cluster" style={{ gap: 12, justifyContent: 'center' }}>
            <Link href={`/${locale}/for-businesses`} className="btn btn-primary">
              {isAr ? 'وثّق ملفك أولاً' : 'Claim your profile first'}
              <ArrowRight size={14} />
            </Link>
            <Link href={`/${locale}/policies`} className="btn btn-outline">
              {isAr ? 'اقرأ السياسات' : 'Read the policies'}
            </Link>
          </div>
          <p className="meta" style={{ marginTop: 16, textTransform: 'none' }}>
            {isAr
              ? 'توثيق الملف مجاني ولا يحتاج عضوية.'
              : 'Claiming a profile is free and does not require a membership.'}
          </p>
        </section>

        <div className="privacy-shield" style={{ marginTop: 36 }}>
          <ShieldCheck size={24} className="privacy-shield-icon" />
          <div className="privacy-shield-body">
            <h4>{isAr ? 'تذكير' : 'One thing to keep in mind'}</h4>
            <p>{pick(membershipCopy.notABenefit, locale)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

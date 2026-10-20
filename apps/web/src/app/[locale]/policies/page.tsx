import { Scale } from 'lucide-react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { pick } from '@/lib/copy/policy';
import {
  contactPolicyCopy,
  editorialCopy,
  membershipCopy,
  securityClaimCopy,
  buyerApprovalCopy,
} from '@/lib/copy/policy';

/**
 * The operating policies.
 *
 * OG-A06 found this page describing contact unlocking one way while the
 * directory and the profile pages described it another way. The wording
 * now comes from one module, so the three surfaces cannot disagree.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise< { locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';

  return buildMetadata({
    path: `/${locale}/policies`,
    title: isAr ? 'سياسات التشغيل والتحرير' : 'Operating & Editorial Policies',
    description: isAr
      ? 'كيف يطبّق دليل العود حيادية الربط التجاري وإفصاح الروابط التجارية وحماية بيانات الاتصال، وما الذي لا يدّعيه الموقع توثيقاً.'
      : 'How OudGuide applies neutral wholesale matching, commercial-affiliation disclosure and contact-data protection — and what this site does not claim to have verified.',
    locale,
    alternateLocalePath: `/${locale === 'ar' ? 'en' : 'ar'}/policies`,
  });
}

export default async function PoliciesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === 'ar';

  const sections = [
    {
      title: isAr ? 'حيادية الربط التجاري' : 'Neutral wholesale matching',
      body: pick(buyerApprovalCopy.namedRecipient, locale),
      body2: pick(buyerApprovalCopy.additionalRecipientRequiresApproval, locale),
    },
    {
      title: isAr ? 'نشر بيانات اتصال المورد' : 'Supplier contact publication',
      body: pick(contactPolicyCopy.supplierPublication, locale),
      body2: pick(contactPolicyCopy.basicProfile, locale),
    },
    {
      title: isAr ? 'تسليم بيانات المشتري' : 'Buyer-data release',
      body: pick(contactPolicyCopy.buyerRelease, locale),
      body2: pick(buyerApprovalCopy.withdrawal, locale),
    },
    {
      title: isAr ? 'حماية بيانات الاتصال' : 'Contact-data protection',
      body: pick(contactPolicyCopy.notLeaked, locale),
      body2: pick(securityClaimCopy.notClaimed, locale),
    },
    {
      title: isAr ? 'الإفصاح عن الروابط التجارية' : 'Commercial affiliation disclosure',
      body: isAr
        ? 'قد تتضمن بعض الصفحات روابط إحالة إلى متجر تجزئة شريك تجاري. وهي موسومة بوضوح كرابط تجاري مدفوع، وتظهر في موضع واحد محدد، ولا تُستخدم في مسارات الشراء الأساسية.'
        : 'Some pages carry a referral link to a retail partner. It is labelled as a commercial referral, it appears in one clearly marked place, and it is never used in the wholesale intake path.',
      body2: isAr
        ? 'الاشتراك المدفوع لا يشتري رتبة في النتائج ولا ترتيباً في البحث.'
        : 'A paid subscription does not buy a position in the results and does not buy search ranking.',
    },
    {
      title: isAr ? 'العضوية والأسعار' : 'Membership and pricing',
      body: pick(membershipCopy.priceTaxNote, locale),
      body2: pick(membershipCopy.paymentDisabledNote, locale),
    },
    {
      title: isAr ? 'معايير التحرير' : 'Editorial standards',
      body: pick(editorialCopy.noUnsupportedAssurances, locale),
      body2: pick(editorialCopy.draftNotPublished, locale),
    },
  ];

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 920 }}>
        <section className="masthead">
          <div className="masthead-inner">
            <div className="hero-tag">
              <Scale size={13} />
              <span>{isAr ? 'السياسات' : 'Policies'}</span>
            </div>
            <h1>
              {isAr ? 'سياسات التشغيل والتحرير' : 'Operating and editorial policies'}
              <span className="accent">{isAr ? 'حيادية · إفصاح · حماية' : 'Neutral · disclosed · protected'}</span>
            </h1>
            <p className="hero-lead">
              {isAr
                ? 'هذه الصفحة تصف ما يفعله الموقع فعلاً. وما لا يمكن تثبيته، تذكر الصفحة ذلك صراحةً بدل أن تعد به.'
                : 'This page describes what the site actually does. Where something cannot be established, the page says so rather than promising it.'}
            </p>
          </div>
        </section>

        <div style={{ marginTop: 40 }}>
          {sections.map((section) => (
            <section key={section.title} style={{ marginBottom: 32 }}>
              <h2 className="h3" style={{ marginBottom: 10 }}>
                {section.title}
              </h2>
              <p className="text-body" style={{ marginBottom: 8 }}>
                {section.body}
              </p>
              <p className="text-body" style={{ margin: 0 }}>
                {section.body2}
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

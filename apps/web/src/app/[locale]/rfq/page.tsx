import Link from 'next/link';
import { ShieldCheck, Sparkles, Clock, CheckCircle2 } from 'lucide-react';
import { RfqWizard } from '@/components/rfq/rfq-wizard';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { businessSummaryBySlug } from '@/lib/data';
import { buyerApprovalCopy, pick } from '@/lib/copy/policy';

/**
 * The wholesale intake.
 *
 * OG-A11 found this page showing a supplier slug and describing automatic
 * fallback matching, which did not demonstrate that an additional supplier
 * would need a separate buyer approval. The page now names the supplier
 * in full where one was selected, and states the approval rule that the
 * release policy actually enforces.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';

  return buildMetadata({
    path: `/${locale}/rfq`,
    title: isAr ? 'تقديم طلب تور��د عود بالجملة' : 'Submit a Wholesale Oud Requirement',
    description: isAr
      ? 'أرسل متطلباتك بالجملة. يصلك موجز مشفَّر دون بيانات المشتري، ولا تُسلَّم بيانات الاتصال إلا للمورد الذي تعتمده بالاسم.'
      : 'Send a wholesale agarwood, oud oil or attar requirement. Your brief reaches qualified suppliers redacted, and contact details release only to a supplier you approve by name.',
    locale,
    alternateLocalePath: `/${locale === 'ar' ? 'en' : 'ar'}/rfq`,
  });
}

export default async function RfqPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ profile?: string; supplier?: string; country?: string }>;
}) {
  const { locale } = await params;
  const { profile, supplier, country } = await searchParams;
  const isAr = locale === 'ar';

  const supplierSlug = supplier || profile;

  // The readable business name, never the slug. A page that shows
  // "siam-trat-agarwood-co" to a buyer is showing a database key.
  const selectedSummary = supplierSlug ? businessSummaryBySlug[supplierSlug] : undefined;
  const selectedName = selectedSummary?.displayTitle;
  const selectedIsPublishable = Boolean(selectedSummary?.publishable);

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 980 }}>
        <section className="masthead">
          <div className="masthead-inner">
            <div className="hero-tag">
              <Sparkles size={12} />
              <span>{isAr ? 'خدمة التوريد المحايدة' : 'Neutral wholesale sourcing'}</span>
            </div>
            <h1>
              {isAr ? 'متطلبات توريد العود بالجملة' : 'Wholesale oud and fragrance requirements'}
              <span className="accent">
                {isAr ? 'ما ينطبق على طلبك فقط.' : 'Only what applies to your request.'}
              </span>
            </h1>
            <p className="hero-lead">
              {isAr
                ? 'يصلك متطلباتك إلى دليل العود أولاً. يتحول إلى موجز فني خالٍ من اسمك وبيانات اتصالك. لا يصل الطلب إلى مورد إلا بعد أن تعتمده بالاسم لهذا الطلب.'
                : 'Your requirement comes to OudGuide first. It becomes a technical brief with no name and no contact details. Nothing reaches a supplier until you approve them by name for that request.'}
            </p>

            <div className="masthead-actions">
              <span className="badge badge-emerald">
                <ShieldCheck size={12} />
                {isAr ? 'بياناتك تبقى محجوبة حتى موافقتك' : 'Details withheld until you approve'}
              </span>
              <span className="badge badge-locked">
                <Clock size={12} />
                {isAr ? 'عادة خلال 1-2 يوم عمل' : 'typically 1-2 business days'}
              </span>
            </div>
          </div>
        </section>

        {/* A REQUEST ADDRESSED TO A NAMED SUPPLIER */}
        {supplierSlug ? (
          <div className="privacy-shield" style={{ marginTop: 32 }}>
            <span style={{ fontSize: 22 }} aria-hidden="true">🎯</span>
            <div className="privacy-shield-body">
              <h4>
                {selectedName
                  ? isAr
                    ? `طلب تسعير موجّه إلى ${selectedName}`
                    : `Pricing request addressed to ${selectedName}`
                  : isAr
                    ? 'طلب تسعير موجّه إلى منشأة محددة'
                    : 'Pricing request addressed to a named supplier'}
              </h4>
              <p>{pick(buyerApprovalCopy.namedRecipient, locale)}</p>
              <p style={{ marginTop: 10, marginBottom: 0 }}>
                {pick(buyerApprovalCopy.additionalRecipientRequiresApproval, locale)}
              </p>

              {!selectedIsPublishable && (
                <p
                  style={{
                    marginTop: 12,
                    marginBottom: 0,
                    fontSize: '0.9rem',
                  }}
                >
                  {isAr
                    ? 'هذا المورد غير منشور في الدليل العام حالياً، لذا سيُعامل طلبك كطلب توريد عام بدل أن يكون موجّهاً له.'
                    : 'This supplier is not currently published in the public directory, so your request will be handled as a general wholesale requirement rather than as one addressed to them.'}
                </p>
              )}
            </div>
          </div>
        ) : null}

        {/* THE FORM */}
        <div style={{ marginTop: 36 }}>
          <RfqWizard
            locale={locale}
            isAr={isAr}
            selectedSupplier={selectedIsPublishable ? supplierSlug : undefined}
          />
        </div>

        {/* WHAT HAPPENS NEXT */}
        <section style={{ marginTop: 44 }}>
          <div
            style={{
              padding: '26px 30px',
              border: '1px solid var(--line)',
              borderRadius: 6,
              background: 'var(--bg-pearl)',
            }}
          >
            <span className="eyebrow" style={{ display: 'block', marginBottom: 12 }}>
              {isAr ? 'ما يحدث بعد الإرسال' : 'What happens after you submit'}
            </span>
            <ol style={{ paddingInlineStart: '20px', margin: 0, lineHeight: 1.75 }}>
              <li style={{ marginBottom: '8px' }}>
                {isAr
                  ? 'نرسل رمز تحقق إلى قناة الاتصال التي اخترتها. لا يُنشأ أي موجز قبل التحقق.'
                  : 'We send a verification code to the contact channel you chose. No brief is created until it is verified.'}
              </li>
              <li style={{ marginBottom: '8px' }}>
                {isAr
                  ? 'يتحول طلبك إلى موجز فني: الصنف والكمية والوجهة ونطاق السعر، دون اسمك وبيانات اتصالك.'
                  : 'Your request becomes a technical brief — material, volume, destination, price band — with no name and no contact details.'}
              </li>
              <li style={{ marginBottom: '8px' }}>
                {isAr
                  ? 'يرى الموردون المؤهلون الموجز ويعبّرون عن اهتمامهم. التعبير عن الاهتمام ليس موافقة ولا يمنحهم بياناتك.'
                  : 'Eligible suppliers see the brief and may express interest. Expressing interest is not an approval and gives them nothing about you.'}
              </li>
              <li style={{ marginBottom: '8px' }}>
                {isAr
                  ? 'تعتمد المورد الذي تختاره بالاسم، أو ترفضه. رفض مورد إضافي لا يؤثر على المورد الذي اخترته.'
                  : 'You approve the supplier you want by name, or refuse them. Refusing an additional supplier does not affect the one you selected.'}
              </li>
              <li>
                {isAr
                  ? 'عندها فقط، وبالحقول والقناة التي وافقت عليها، تُسلَّم بيانات اتصالك.'
                  : 'Only then, and only for the fields and channel you approved, are your contact details released.'}
              </li>
            </ol>

            <div
              style={{
                marginTop: 20,
                paddingTop: 16,
                borderTop: '1px solid var(--line)',
              }}
            >
              <div className="cluster" style={{ gap: 10, alignItems: 'flex-start' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--green-600)', flexShrink: 0, marginTop: 3 }} />
                <p className="text-body" style={{ margin: 0, fontSize: '0.93rem' }}>
                  {pick(buyerApprovalCopy.withdrawal, locale)}
                </p>
              </div>
            </div>
          </div>
        </section>

        {country ? (
          <p className="meta" style={{ marginTop: 20, textTransform: 'none' }}>
            {isAr ? 'وجهة الطلب' : 'Request destination'}: {country}
          </p>
        ) : null}

        <p style={{ marginTop: 32 }}>
          <Link href={`/${locale}/policies`} className="btn-link" style={{ fontSize: '0.9rem' }}>
            {isAr ? 'سياسات التشغيل ←' : 'Operating policies →'}
          </Link>
        </p>
      </div>
    </div>
  );
}

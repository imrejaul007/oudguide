import { Lock, CheckCircle2 } from 'lucide-react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { pick } from '@/lib/copy/policy';
import { contactPolicyCopy, securityClaimCopy } from '@/lib/copy/policy';

/**
 * The privacy notice.
 *
 * OG-A20 found this page was mainly a rights summary with no description
 * of the operator, the data categories, the recipients, the retention or
 * the commercial relationship. Some of that cannot be written until the
 * operating entity and its processing arrangements are confirmed, so the
 * page says what is known, says what is not yet settled, and does not
 * claim compliance it has not been assessed for.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';

  return buildMetadata({
    path: `/${locale}/privacy`,
    title: isAr ? 'إشعار الخصوصية وحقوق حماية البيانات' : 'Privacy Notice & Data-Subject Rights',
    description: isAr
      ? 'ما البيانات التي يجمعها دليل العود، ولمن تُفصح، وكيف تسحب موافقتك. وأي بنود لم تُعتمد بعد تُذكر صراحةً.'
      : "What OudGuide collects, who it is disclosed to, and how to withdraw consent. Terms that have not yet been approved are stated as such.",
    locale,
    alternateLocalePath: `/${locale === 'ar' ? 'en' : 'ar'}/privacy`,
  });
}

export default async function PrivacyPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ submitted?: string }>;
}) {
  const { locale } = await params;
  const { submitted } = await searchParams;
  const isAr = locale === 'ar';

  const rights = [
    {
      title: isAr ? 'الحذف' : 'Erasure',
      desc: isAr
        ? 'طلب حذف استفساراتك وملفاتك المقدمة.'
        : 'Request deletion of your inquiries and submitted records.',
    },
    {
      title: isAr ? 'سحب الموافقة' : 'Consent withdrawal',
      desc: isAr
        ? 'سحب موافقتك على مشاركة بياناتك مع مورد في أي وقت قبل الإرسال.'
        : 'Revoke your approval for a supplier at any time before dispatch.',
    },
    {
      title: isAr ? 'الاطلاع والتصدير' : 'Access and portability',
      desc: isAr
        ? 'طلب نسخة من معاملاتك المسجلة.'
        : 'Request an export of your recorded transactions.',
    },
    {
      title: isAr ? 'الحجب من الدليل' : 'Directory contact suppression',
      desc: isAr
        ? 'حجب بيانات شركتك من الفهرسة العامة.'
        : 'Suppress your business contacts from public indexing.',
    },
  ];

  const dataCategories = [
    {
      title: isAr ? 'بيانات طلب التوريد' : 'Wholesale request data',
      body: isAr
        ? 'ما تكتبه في نموذج التوريد: الصنف والكمية والوجهة وأي ملاحظات، مع الاسم وبيانات الاتصال التي اخترتها.'
        : 'What you write in the wholesale form: material, quantity, destination and notes, together with the name and contact details you provide.',
    },
    {
      title: isAr ? 'سجل الموافقة' : 'The approval record',
      body: isAr
        ? 'أي مورد اعتمدتِه بالاسم لأي طلب، ووقت الاعتماد، والحقول والقناة التي وافقت عليها.'
        : 'Which supplier you approved by name for which request, when you approved it, and the fields and channel you approved.',
    },
    {
      title: isAr ? 'سجل المورد' : 'Supplier records',
      body: isAr
        ? 'ما يقدّمه المورد عن نفسه، وحالة مراجعته، وحقول الاتصال التي نشرها بإذنه.'
        : 'What a supplier supplies about itself, its review state, and the contact fields its owner has chosen to publish.',
    },
    {
      title: isAr ? 'سجل التصحيحات' : 'Correction records',
      body: isAr
        ? 'ما ترسله عبر نموذج التصحيحات أو طلب الخصوصية، والعنوان الذي ترد منه.'
        : 'What you submit through the corrections or privacy forms, and the address we reply from.',
    },
  ];

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 1000 }}>
        <section className="masthead">
          <div className="masthead-inner">
            <div className="hero-tag">
              <Lock size={13} />
              <span>{isAr ? 'الخصوصية' : 'Privacy'}</span>
            </div>
            <h1>
              {isAr ? 'إشعار الخصوصية وحقوق حماية البيانات' : 'Privacy notice and data-subject rights'}
              <span className="accent">{isAr ? 'ماذا نجمع، ولمن نكشف' : 'What we collect, and who we tell'}</span>
            </h1>
            <p className="hero-lead">
              {isAr
                ? 'هذه الصفحة تصف ما يحدث لبياناتك في هذا الموقع. وأي بند لم يُعتمد بعد — كالجهة المشغِّلة وتفاصيل الاحتفاظ — يُذكر هنا كقيد مفتوح لا كسياسة.'
                : 'This page describes what happens to your data on this site. Any term that has not yet been approved — the operating entity, the retention periods — appears here as an open item rather than as a policy.'}
            </p>
          </div>
        </section>

        {submitted && (
          <div
            className="privacy-shield"
            style={{
              marginTop: 32,
              borderLeftColor: 'var(--color-emerald)',
              background: 'linear-gradient(135deg, #f0faf5, #e3f2ea)',
            }}
          >
            <CheckCircle2 size={28} className="privacy-shield-icon" style={{ color: 'var(--color-emerald)' }} />
            <div className="privacy-shield-body">
              <h4 style={{ color: 'var(--color-emerald)' }}>
                {isAr ? 'تم استلام طلبك' : 'Your request has been received'}
              </h4>
              <p>
                {isAr
                  ? 'سجّلنا طلبك. ستتم معالجته ضمن المدة النظامية.'
                  : 'Your request has been recorded and will be handled within the applicable period.'}
              </p>
            </div>
          </div>
        )}

        {/* WHAT IS COLLECTED */}
        <section style={{ marginTop: 40 }}>
          <h2 className="h3" style={{ marginBottom: 16 }}>
            {isAr ? 'البيانات التي نعالجها' : 'The data we process'}
          </h2>
          <div className="grid-2" style={{ gap: 20 }}>
            {dataCategories.map((item) => (
              <div key={item.title} className="card" style={{ padding: 24 }}>
                <h3 style={{ fontSize: '1rem', marginBottom: 8 }}>{item.title}</h3>
                <p className="text-body" style={{ margin: 0, fontSize: '0.93rem' }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* WHO RECEIVES IT */}
        <section style={{ marginTop: 36 }}>
          <h2 className="h3" style={{ marginBottom: 12 }}>
            {isAr ? 'من يتلقى بياناتك' : 'Who receives your data'}
          </h2>
          <p className="text-body">{pick(contactPolicyCopy.buyerRelease, locale)}</p>
          <p className="text-body" style={{ marginTop: 10 }}>
            {pick(contactPolicyCopy.notLeaked, locale)}
          </p>
        </section>

        {/* SECURITY — stated at the level the tests support */}
        <section style={{ marginTop: 36 }}>
          <h2 className="h3" style={{ marginBottom: 12 }}>
            {isAr ? 'الحماية التي نطبّقها فعلاً' : 'The protections we actually apply'}
          </h2>
          <p className="text-body">{pick(securityClaimCopy.actualControls, locale)}</p>
          <p className="text-body" style={{ marginTop: 10 }}>
            {pick(securityClaimCopy.notClaimed, locale)}
          </p>
        </section>

        {/* OPEN ITEMS */}
        <section
          style={{
            marginTop: 36,
            padding: '24px 28px',
            border: '1px solid var(--line)',
            borderRadius: 6,
            background: 'var(--bg-pearl)',
          }}
        >
          <span className="eyebrow" style={{ display: 'block', marginBottom: 10 }}>
            {isAr ? 'بنود لم تُعتمد بعد' : 'Terms not yet approved'}
          </span>
          <p className="text-body" style={{ margin: 0 }}>
            {isAr
              ? 'اسم الجهة المشغِّلة وعنوانها، ومدة الاحتفاظ بكل نوع من البيانات، ونقل البيانات خارج الاختصاص القضائي، ومراجعة إخطار الخصوصية من مختص. هذه البنود لا تُنشر كسياسة قبل اعتمادها، ولا يدّعي الموقع امتثالاً لمتطلبات لم يُقيَّم فيها.'
              : 'The name and address of the operating entity, the retention period for each data category, the circumstances of any transfer outside your jurisdiction, and a qualified review of this notice. These are not published as policy until they are approved, and the site does not claim compliance with requirements it has not been assessed against.'}
          </p>
        </section>

        {/* RIGHTS */}
        <div className="grid-2" style={{ marginTop: 40, gap: 28 }}>
          <article className="card-frame" style={{ padding: 34 }}>
            <span className="eyebrow eyebrow-crimson" style={{ display: 'block', marginBottom: 8 }}>
              {isAr ? 'الحقوق' : 'Your rights'}
            </span>
            <h2 className="h3" style={{ marginBottom: 16 }}>
              {isAr ? 'حقوقك' : 'What you can require'}
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }} className="stack-4">
              {rights.map((right, index) => (
                <li key={index}>
                  <h3 style={{ fontSize: '0.95rem', marginBottom: 4 }}>{right.title}</h3>
                  <p style={{ fontSize: '0.88rem', margin: 0, color: 'var(--ink-soft)' }}>
                    {right.desc}
                  </p>
                </li>
              ))}
            </ul>
          </article>

          <article className="card-frame" style={{ padding: 34 }}>
            <span className="eyebrow eyebrow-crimson" style={{ display: 'block', marginBottom: 8 }}>
              {isAr ? 'إرسال طلب' : 'Submit a request'}
            </span>
            <h2 className="h3" style={{ marginBottom: 16 }}>
              {isAr ? 'تقديم طلب خصوصية' : 'Make a data-privacy request'}
            </h2>
            <form method="POST" action="/api/v1/privacy/requests-form">
              <input type="hidden" name="locale" value={locale} />

              <div className="form-field">
                <label className="form-label" htmlFor="subject_email">
                  {isAr ? 'بريدك الإلكتروني *' : 'Your email address *'}
                </label>
                <input
                  type="email"
                  id="subject_email"
                  name="subject_email"
                  required
                  placeholder="you@yourcompany.com"
                  className="form-input"
                />
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="request_type">
                  {isAr ? 'نوع الطلب *' : 'What are you asking for? *'}
                </label>
                <select id="request_type" name="request_type" required className="form-select">
                  <option value="erasure">{isAr ? 'حذف شامل للبيانات' : 'Erasure of my data'}</option>
                  <option value="access">{isAr ? 'تصدير نسخة من بياناتي' : 'An export of my data'}</option>
                  <option value="suppression">{isAr ? 'حجب بياناتي من الفهرسة' : 'Suppression from public indexing'}</option>
                  <option value="consent_revocation">
                    {isAr ? 'سحب موافقتي على مشاركة بياناتي' : 'Withdrawal of my consent to share'}
                  </option>
                </select>
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="details">
                  {isAr ? 'تفاصيل تساعدنا على العثور على طلبك' : 'Anything that helps us find your records'}
                </label>
                <textarea
                  id="details"
                  name="details"
                  placeholder={isAr
                    ? 'معرّف الطلب أو اسم الشركة أو رابط الصفحة'
                    : 'Inquiry reference, business name, or the page in question'}
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="btn btn-gold" style={{ width: '100%', marginTop: 8 }}>
                {isAr ? 'إرسال الطلب ←' : 'Submit the request →'}
              </button>
            </form>
          </article>
        </div>
      </div>
    </div>
  );
}

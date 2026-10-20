import { Briefcase, Lock, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { pick } from '@/lib/copy/policy';
import { contactPolicyCopy } from '@/lib/copy/policy';

/**
 * The partner workspace.
 *
 * OG-A04 found this page presenting three opportunities labelled "live"
 * whose identifiers contained the word "sample", plus an internal QA note
 * in the page copy. The sample briefs are gone: they were development
 * fixtures and were never real commercial requirements.
 *
 * The workspace itself is gated. The brief endpoint sits under
 * `/api/v1/partners/...`, which the edge middleware does not cover, so the
 * route enforces the operator session itself. This page therefore explains
 * the access boundary rather than rendering brief records to an anonymous
 * visitor.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';

  return buildMetadata({
    path: `/${locale}/partners/opportunities`,
    title: isAr ? 'بوابة الشركاء — موجزات توريد مشفّرة' : 'Partner Workspace — Redacted Supply Briefs',
    description: isAr
      ? 'مساحة للموردين المعتمدين لمشاهدة الموجزات الفنية المشفّرة. تتطلب الوصول جلسة مشغّل، ولا تعرض الموجزات لهوية المشتري.'
      : 'A workspace for approved suppliers to see redacted technical briefs. Access requires an operator session, and no brief carries buyer identity.',
    locale,
    alternateLocalePath: `/${locale === 'ar' ? 'en' : 'ar'}/partners/opportunities`,
  });
}

export default async function PartnerOpportunitiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === 'ar';

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 900 }}>
        <section className="masthead">
          <div className="masthead-inner">
            <div className="hero-tag">
              <Briefcase size={13} />
              <span>{isAr ? 'مساحة الموردين' : 'Supplier workspace'}</span>
            </div>
            <h1>
              {isAr ? 'موجزات توريد مشفّرة' : 'Redacted supply briefs'}
              <span className="accent">
                {isAr ? 'للموردين المعتمدين فقط.' : 'For approved suppliers only.'}
              </span>
            </h1>
            <p className="hero-lead">
              {isAr
                ? 'الموجز هو متطلب المشتري: الصنف والكمية والوجهة ونطاق السعر. وهو خالٍ من اسم المشتري وبيانات اتصاله. ولا يظهر أي موجز لمن لم يُعتمد.'
                : 'A brief is a buyer\'s requirement: material, volume, destination and price band. It carries no buyer name and no buyer contact details. No brief is shown to a supplier who has not been approved.'}
            </p>
          </div>
        </section>

        {/* THE ACCESS BOUNDARY — stated, not implied */}
        <div className="privacy-shield" style={{ marginTop: 32 }}>
          <Lock size={24} className="privacy-shield-icon" />
          <div className="privacy-shield-body">
            <h4>{isAr ? 'الوصول مقصور على الموردين المعتمدين' : 'Access is restricted to approved suppliers'}</h4>
            <p>
              {isAr
                ? 'هذه المساحة تتطلب جلسة مشغّل معتمدة. الموجزات نفسها لا تُعرض علناً، ونقطة الوصول إليها تتطلب مصادقة.'
                : 'This workspace requires an approved operator session. The briefs themselves are not published, and the endpoint that serves them requires authentication.'}
            </p>
          </div>
        </div>

        <section style={{ marginTop: 36 }}>
          <h2 className="h3" style={{ marginBottom: 18 }}>
            {isAr ? 'ما يراه المورد المعتمد' : 'What an approved supplier sees'}
          </h2>
          <ul style={{ paddingInlineStart: '22px', lineHeight: 1.75 }}>
            <li style={{ marginBottom: '8px' }}>
              {isAr
                ? 'الصنف والكمية والوحدة.'
                : 'The material family, the quantity and the unit.'}
            </li>
            <li style={{ marginBottom: '8px' }}>
              {isAr
                ? 'بلد الوجهة، وتفضيل المنشأ إن ذكرته.'
                : 'The destination country, and the origin preference if the buyer gave one.'}
            </li>
            <li style={{ marginBottom: '8px' }}>
              {isAr
                ? 'نطاق السعر، إن ذكره المشتري.'
                : 'The price band, if the buyer gave one.'}
            </li>
            <li style={{ marginBottom: '8px' }}>
              {isAr
                ? 'هل طُلبت عينات، والتاريخ المستهدف إن وُجد.'
                : 'Whether samples were requested, and the target date if there is one.'}
            </li>
          </ul>

          <div
            style={{
              marginTop: 24,
              padding: '20px 24px',
              border: '1px solid var(--line)',
              borderRadius: 6,
              background: 'var(--bg-pearl)',
            }}
          >
            <div className="cluster" style={{ gap: 10, alignItems: 'flex-start' }}>
              <ShieldCheck size={18} style={{ color: 'var(--green-600)', flexShrink: 0, marginTop: 2 }} />
              <p className="text-body" style={{ margin: 0 }}>
                {pick(contactPolicyCopy.buyerRelease, locale)}
              </p>
            </div>
          </div>
        </section>

        <section style={{ marginTop: 36 }}>
          <h2 className="h3" style={{ marginBottom: 12 }}>
            {isAr ? 'هل أنت مورد؟' : 'Are you a supplier?'}
          </h2>
          <p className="text-body" style={{ marginBottom: 16 }}>
            {isAr
              ? 'ابدأ بتوثيق ملفك كمالك. التسجيل في الدليل مجاني، والعضوية السنوية هي ما يتيح نشر بيانات اتصالك لا ما يتيح الوصول إلى بيانات المشترين.'
              : 'Start by claiming your profile as the owner. Listing in the directory is free. The annual membership is what enables you to publish your own contact details — it is not what gives you access to a buyer\'s details.'}
          </p>
          <a href={`/${locale}/for-businesses`} className="btn btn-outline btn-sm">
            {isAr ? 'لأصحاب الأعمال' : 'For businesses'}
          </a>
        </section>
      </div>
    </div>
  );
}

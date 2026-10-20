import { buildMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Sparkles, Clock } from 'lucide-react';
import { RfqWizard } from '@/components/rfq/rfq-wizard';

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
  const selectedSupplier = supplier || profile;

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 980 }}>
        {/* MASTHEAD */}
        <section className="masthead">
          <div className="masthead-inner">
            <div className="hero-tag">
              <Sparkles size={12} />
              <span>{isAr ? 'خدمة الربط التجاري المحايدة' : 'Neutral Wholesale Sourcing Engine'}</span>
            </div>
            <h1>
              {isAr
                ? 'تقديم متطلبات توريد العود بالجملة'
                : 'Wholesale Fragrance & Raw Material Requirement Intake'}
              <span className="accent">
                {isAr
                  ? '67 مواصفة شرطية — تُعرض فقط ما ينطبق على طلبك.'
                  : '67 conditional specifications — only what applies to you is shown.'}
              </span>
            </h1>
            <p className="hero-lead">
              {isAr
                ? 'يتم تحويل متطلباتك إلى موجز فني مشفر ومحايد يُعرض للموردين المؤهلين. حماية تامة لبياناتك الشخصية ولن يتم تسليم بيانات اتصالك إلا للموردين الذين تعتمد أسماءهم صراحةً.'
                : 'Your specifications are synthesized into an anonymous technical brief. Zero buyer personal data is disclosed until you explicitly approve selected suppliers by name.'}
            </p>

            <div className="masthead-actions">
              <span className="badge badge-emerald">
                <ShieldCheck size={12} />
                {isAr ? 'حماية تامة للبيانات' : 'Zero contact leakage'}
              </span>
              <span className="badge badge-locked">
                <Clock size={12} />
                {isAr ? 'عادة خلال 1-2 يوم عمل' : 'typically 1-2 business days'}
              </span>
            </div>
          </div>
        </section>

        {/* TARGETED INQUIRY */}
        {selectedSupplier && (
          <div className="privacy-shield" style={{ marginTop: 32 }}>
            <span style={{ fontSize: 22 }}>🎯</span>
            <div className="privacy-shield-body">
              <h4>
                {isAr
                  ? `طلب تسعير موجّه لمنشأة محددة: ${selectedSupplier}`
                  : `Direct Inquiry Target: ${selectedSupplier}`}
              </h4>
              <p>
                {isAr
                  ? 'سيتم تقديم هذا الطلب لهذه المنشأة كمرشح رئيسي مع إمكانية ربطك ببدائل مؤهلة في حال عدم توفر المخزون.'
                  : 'This requirement will be routed to this producer as primary recipient with automated fallback matching if required.'}
              </p>
            </div>
          </div>
        )}

        {/* THE WIZARD */}
        <div style={{ marginTop: 40 }}>
          <RfqWizard
            locale={locale}
            isAr={isAr}
            selectedSupplier={selectedSupplier}
          />
        </div>

        <p className="text-body" style={{ fontSize: '0.82rem', marginTop: 28, textAlign: 'center' }}>
          {isAr
            ? 'بإرسال الطلب توافق على معالجة بياناتك لأغراض المطابقة. يمكنك سحب الموافقة في أي وقت من صفحة حالة الطلب.'
            : 'By submitting you consent to inquiry processing for matching purposes. You may withdraw consent at any time from your inquiry status page.'}
        </p>
      </div>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';
  return buildMetadata({
    path: `/${locale}/rfq`,
    title: isAr ? "تقديم طلب توريد عود بالجملة" : "Submit a Wholesale Oud Requirement",
    description: isAr ? "أرسل متطلباتك بالجملة عبر 67 مواصفة شرطية. يصل الموجز المشفر إلى الموردين المؤهلين، ولا تُكشف بيانات الاتصال إلا بموافقتك." : "Send a wholesale agarwood, oud oil or attar requirement through 67 conditional specifications. Your brief reaches qualified producers redacted, and contact details release only after your approval.",
    locale,
    alternateLocalePath: `/${locale === 'ar' ? 'en' : 'ar'}/rfq`,
  });
}


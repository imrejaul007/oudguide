import { Sparkles, ShieldCheck } from 'lucide-react';
import { SourcingAssistant } from '@/components/sourcing/assistant-client';

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
              <span>{isAr ? 'مساعد التوريد' : 'Sourcing Assistant'}</span>
            </div>
            <h1>
              {isAr ? 'اسأل عن العود والتوريد' : 'Ask About Oud Sourcing'}
              <span className="accent">
                {isAr ? '249 دولة · 772 مسار · 67 مواصفة' : '249 territories · 772 briefs · 67 specs'}
              </span>
            </h1>
            <p className="hero-lead">
              {isAr
                ? 'يعمل المساعد مباشرة على سجل OudGuide الموثق بالكامل. يطابق متطلباتك مع المنتجين المؤهلين، ويشرح أقطال التقطير ودرجات التقييم وسياسات سايتس، دون كشف أي بيانات اتصال للموردين.'
                : 'The assistant reads OudGuide\'s complete documented register directly. It matches your requirements against qualified producers and explains distillation, grading, and CITES policy — without ever exposing a supplier\'s contact details.'}
            </p>
          </div>
        </section>

        <div style={{ marginTop: 40 }}>
          <SourcingAssistant locale={locale} />
        </div>

        <div className="privacy-shield" style={{ marginTop: 32 }}>
          <ShieldCheck size={24} className="privacy-shield-icon" />
          <div className="privacy-shield-body">
            <h4>{isAr ? 'حماية بيانات الموردين' : 'Supplier Data Protection'}</h4>
            <p>
              {isAr
                ? 'يعمل المساعد على النسخة العامة المنقّاة من السجل. لا يمكنه عرض أرقام الهواتف أو البريد الإلكتروني أو العناوين الفعلية لأي مورد — تتم الموافقة الصريحة على مشاركة بيانات الاتصال بعد التحقق برمز OTP فقط.'
                : 'The assistant operates on the redacted public projection of the registry. It cannot surface any producer phone, email, WhatsApp, or street address — and explicit buyer approval after OTP verification is required before contact details are ever released.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
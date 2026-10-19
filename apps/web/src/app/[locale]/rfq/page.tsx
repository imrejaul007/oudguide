import Link from 'next/link';
import { ShieldCheck, Send } from 'lucide-react';

export default async function RfqPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ profile?: string; country?: string }>;
}) {
  const { locale } = await params;
  const { profile, country } = await searchParams;
  const isAr = locale === 'ar';

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 920 }}>
        {/* HERO */}
        <section className="hero" style={{ padding: 'clamp(40px, 6vw, 72px) clamp(24px, 4vw, 56px)' }}>
          <div className="hero-content" style={{ textAlign: 'left', margin: 0, maxWidth: 820 }}>
            <div className="hero-tag">
              <span>⚖</span>
              <span>{isAr ? 'خدمة الربط التجاري المحايدة' : 'Neutral Wholesale Sourcing Engine'}</span>
            </div>
            <h1 className="hero-title" style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)' }}>
              {isAr
                ? 'تقديم متطلبات توريد العود بالجملة'
                : 'Wholesale Fragrance & Raw Material Requirement Intake'}
              <span className="accent">
                {isAr
                  ? '67 مواصفة شرطية محمية بسياسة OTP.'
                  : '67 conditional specifications, OTP-gated.'}
              </span>
            </h1>
            <p className="hero-lead" style={{ margin: 0, textAlign: 'left' }}>
              {isAr
                ? 'يتم تحويل متطلباتك إلى موجز فني مشفر ومحايد يُعرض للموردين المؤهلين. حماية تامة لبياناتك الشخصية.'
                : 'Your specifications are synthesized into an anonymous technical brief. Zero buyer personal data is disclosed until you explicitly approve selected suppliers by name.'}
            </p>
          </div>
        </section>

        {profile && (
          <div className="privacy-shield" style={{ marginTop: 32, borderLeftColor: 'var(--color-emerald)', background: 'linear-gradient(135deg, #f0faf5, #e3f2ea)' }}>
            <span style={{ fontSize: 22 }}>🎯</span>
            <div className="privacy-shield-body">
              <h4>{isAr ? `طلب تسعير موجه لشركة محددة: ${profile}` : `Direct Inquiry Target: ${profile}`}</h4>
              <p>
                {isAr
                  ? 'سيتم تقديم هذا الطلب لهذه المنشأة كمرشح رئيسي م�� إمكانية ربطك ببدائل مؤهلة في حال عدم توفر المخزون.'
                  : 'This requirement will be routed to this producer as primary recipient with automated fallback matching if required.'}
              </p>
            </div>
          </div>
        )}

        {/* FORM */}
        <form method="POST" action="/api/v1/inquiries/form" style={{ marginTop: 32 }}>
          <input type="hidden" name="locale" value={locale} />
          {profile && <input type="hidden" name="selected_supplier_slug" value={profile} />}

          {/* STEP 1 */}
          <div className="wizard-step">
            <div className="wizard-header">
              <div className="wizard-num">01</div>
              <div>
                <span className="eyebrow eyebrow-crimson" style={{ display: 'block', marginBottom: 4 }}>Q01 – Q12</span>
                <h2 className="wizard-title">{isAr ? 'الصنف والمواصفات' : 'Product Family & Volume'}</h2>
              </div>
            </div>

            <div className="grid-2">
              <div className="form-field">
                <label className="form-label">{isAr ? 'الصنف الرئيسي' : 'Primary Product Family'}</label>
                <select name="product_family" required className="form-select">
                  <option value="">{isAr ? 'اختر...' : 'Select...'}</option>
                  <option value="oud_wood">{isAr ? 'خشب عود طبيعي' : 'Natural Agarwood Wood'}</option>
                  <option value="oud_oil">{isAr ? 'دهن عود خالص' : 'Pure Dehn Al Oud'}</option>
                  <option value="attar">{isAr ? 'عطور شرقية' : 'Heritage Attars'}</option>
                  <option value="perfume">{isAr ? 'عطور منتهية' : 'Finished Perfume'}</option>
                </select>
              </div>

              <div className="form-field">
                <label className="form-label">{isAr ? 'الكمية التقريبية' : 'Approximate Volume'}</label>
                <input type="text" name="quantity" required placeholder={isAr ? 'مثل: 10 تولات، 50 كجم...' : 'e.g. 10 tolas, 50 kg...'} className="form-input" />
              </div>
            </div>

            <div className="grid-2">
              <div className="form-field">
                <label className="form-label">{isAr ? 'بلد الوصول' : 'Destination Country'}</label>
                <input type="text" name="destination_country" defaultValue={country || ''} className="form-input" />
              </div>

              <div className="form-field">
                <label className="form-label">{isAr ? 'الإطار الزمني' : 'Time Frame'}</label>
                <select name="timeframe" className="form-select">
                  <option value="">{isAr ? 'اختر...' : 'Select...'}</option>
                  <option value="30d">{isAr ? '30 يوم' : '30 days'}</option>
                  <option value="60d">{isAr ? '60 يوم' : '60 days'}</option>
                  <option value="90d">{isAr ? '90 يوم' : '90 days'}</option>
                  <option value="flexible">{isAr ? 'مرن' : 'Flexible'}</option>
                </select>
              </div>
            </div>
          </div>

          {/* STEP 2 — CONTACT (OTP-gated) */}
          <div className="wizard-step">
            <div className="wizard-header">
              <div className="wizard-num" style={{ background: 'linear-gradient(135deg, #7d1f28, var(--color-crimson))', color: 'var(--color-gold-light)' }}>02</div>
              <div>
                <span className="eyebrow eyebrow-crimson" style={{ display: 'block', marginBottom: 4 }}>Q51 – Q54</span>
                <h2 className="wizard-title">{isAr ? 'وسيلة الاتصال المفضلة' : 'Preferred Contact Channel'}</h2>
              </div>
            </div>

            <div className="form-field">
              <label className="form-label">{isAr ? 'قناة الاتصال' : 'Contact Channel'}</label>
              <select name="contact_channel" required className="form-select">
                <option value="email">{isAr ? 'البريد الإلكتروني' : 'Email'}</option>
                <option value="whatsapp">{isAr ? 'واتساب' : 'WhatsApp'}</option>
                <option value="phone">{isAr ? 'اتصال هاتفي' : 'Phone Call'}</option>
              </select>
              <p className="form-help">
                {isAr
                  ? 'سيتم إرسال رمز تحقق لمرة واحدة (OTP) من 6 أرقام إلى القناة المختارة قبل تسليم أي بيانات اتصال.'
                  : 'A 6-digit OTP will be sent to your selected channel before any contact details are released.'}
              </p>
            </div>

            <div className="form-field">
              <label className="form-label">{isAr ? 'تفاصيل الاتصال' : 'Contact Detail'}</label>
              <input type="text" name="contact_value" required placeholder={isAr ? 'بريدك الإلكتروني أو رقمك...' : 'Your email or number...'} className="form-input" />
            </div>
          </div>

          {/* SUBMIT */}
          <div className="cluster" style={{ justifyContent: 'flex-end', marginTop: 24 }}>
            <Link href={`/${locale}/privacy`} className="btn btn-ghost btn-sm">
              <ShieldCheck size={14} />
              {isAr ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </Link>
            <button type="submit" className="btn btn-gold btn-lg">
              <Send size={16} />
              {isAr ? 'إرسال الطلب ←' : 'Submit Inquiry →'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
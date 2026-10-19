import Link from 'next/link';

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
    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '10px 0 60px' }}>
      {/* RFQ HERO BANNER */}
      <div className="luxury-hero" style={{ padding: '44px 36px', marginBottom: '36px' }}>
        <div className="hero-tag">
          <span>⚖️</span>
          <span>{isAr ? 'خدمة الربط التجاري المحايدة والمعتمدة' : 'Neutral Wholesale Sourcing Engine'}</span>
        </div>
        <h1 className="hero-headline font-display" style={{ fontSize: '34px', margin: '0 0 10px' }}>
          {isAr
            ? 'تقديم متطلبات توريد العود والزيوت العطرية بالجملة'
            : 'Wholesale Fragrance & Raw Material Requirement Intake'}
        </h1>
        <p className="hero-lead" style={{ fontSize: '15.5px', margin: 0, maxWidth: '760px' }}>
          {isAr
            ? 'يتم تحويل متطلباتك إلى موجز فني مشفر ومحايد يُعرض للموردين المؤهلين. حماية تامة لبياناتك الشخصية ولن يتم تسليم بيانات اتصالك إلا للموردين الذين تعتمد أسماءهم صراحة.'
            : 'Your specifications are synthesized into an anonymous technical brief. Zero buyer personal data is disclosed until you explicitly approve selected suppliers by name.'}
        </p>
      </div>

      {profile && (
        <div className="form-card" style={{ background: '#f6fbf8', borderColor: '#c8e6d5', padding: '18px 24px', marginBottom: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '18px' }}>🎯</span>
            <strong style={{ color: '#1b4d3e' }}>
              {isAr ? `طلب تسعي�� موجه لشركة محددة: ${profile}` : `Direct Inquiry Target: ${profile}`}
            </strong>
          </div>
          <p style={{ margin: '4px 0 0', fontSize: '13.5px', color: '#385e49' }}>
            {isAr
              ? 'سيتم تقديم هذا الطلب لهذه المنشأة كمرشح رئيسي مع إمكانية ربطك ببدائل مؤهلة في حال عدم توفر المخزون.'
              : 'This requirement will be routed to this producer as primary recipient with automated fallback matching if required.'}
          </p>
        </div>
      )}

      {/* MULTI-STAGE PROGRESSIVE RFQ FORM */}
      <form method="POST" action="/api/v1/inquiries/form">
        <input type="hidden" name="locale" value={locale} />
        {profile && <input type="hidden" name="selected_supplier_slug" value={profile} />}

        {/* STEP 1: MATERIAL & SPECIFICATIONS */}
        <div className="wizard-step">
          <div className="wizard-header">
            <div className="step-num">1</div>
            <div>
              <h2 className="step-title">{isAr ? 'الصنف والمواصفات الفنية (Q01 - Q12)' : 'Product Family & Volume Requirements'}</h2>
              <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-muted)' }}>
                {isAr ? 'حدد نوع العود المطلوب والكمية التقديرية والميزانية المستهدفة.' : 'Specify the core material category, target quantity, and price expectation.'}
              </p>
            </div>
          </div>

          <div className="grid-2">
            <div>
              <label className="form-label" htmlFor="product_family">
                {isAr ? 'فئة الصنف المطلوبة (Q01) *' : 'Product Family (Q01) *'}
              </label>
              <select id="product_family" name="product_family" className="form-select" required defaultValue="Oud oil">
                <option value="Oud wood">{isAr ? 'خشب عود طبيعي / رقائق غابات وبخور' : 'Artisanal Agarwood Wood / Chips / Incense'}</option>
                <option value="Oud oil">{isAr ? 'دهن عود خالص ومقطر (Dehn Al Oud)' : 'Pure Distilled Dehn Al Oud Oil'}</option>
                <option value="Attar">{isAr ? 'عطور شرقية تقليدية ومخلطات (Attar)' : 'Traditional Attar / Pure Sandalwood Co-distillate'}</option>
                <option value="Finished perfume">{isAr ? 'تصنيع عطور فاخرة وتعبئة خاصة (Private Label)' : 'Finished Extrait de Parfum / Private Label'}</option>
                <option value="Bakhoor/incense">{isAr ? 'معمول وبخور ومواد عطرية' : 'Fine Bakhoor / Scented Resins'}</option>
              </select>
            </div>

            <div>
              <label className="form-label" htmlFor="quantity">
                {isAr ? 'الكمية المطلوبة (Q03) *' : 'Target Volume / Quantity (Q03) *'}
              </label>
              <input type="number" id="quantity" name="quantity" className="form-input" min="1" step="any" required defaultValue="10" />
            </div>
          </div>

          <div className="grid-2" style={{ marginTop: '16px' }}>
            <div>
              <label className="form-label" htmlFor="quantity_unit">
                {isAr ? 'وحدة القياس (Q04) *' : 'Unit of Measurement (Q04) *'}
              </label>
              <select id="quantity_unit" name="quantity_unit" className="form-select" required defaultValue="tolas">
                <option value="tolas">Tolas (تولة ~ 12g standard wholesale)</option>
                <option value="kg">Kilograms (كغم - bulk wood/oil)</option>
                <option value="g">Grams (غرام)</option>
                <option value="liters">Liters (لتر)</option>
                <option value="bottles">Finished Bottles (زجاجة عطر)</option>
              </select>
            </div>

            <div>
              <label className="form-label" htmlFor="target_price">
                {isAr ? 'الميزانية المستهدفة للوحدة (Q05)' : 'Target Budget per Unit (Q05)'}
              </label>
              <input type="text" id="target_price" name="target_price_per_unit" className="form-input" placeholder="e.g. 350 AED/tola or $1,200/kg" />
            </div>
          </div>

          <div style={{ marginTop: '16px' }}>
            <label className="form-label" htmlFor="origin_preference">
              {isAr ? 'المصدر أو الإقليم المفضل (Q07)' : 'Origin & Habitat Terroir Preference (Q07)'}
            </label>
            <input
              type="text"
              id="origin_preference"
              name="origin_preference"
              className="form-input"
              placeholder="e.g. India (Assam), Cambodia (Koh Kong), Thailand (Trat), Indonesia (Kalimantan)"
            />
          </div>
        </div>

        {/* STEP 2: DISTILLATION & EXTRACTION SPECIFICATIONS */}
        <div className="wizard-step">
          <div className="wizard-header">
            <div className="step-num">2</div>
            <div>
              <h2 className="step-title">{isAr ? 'المعايير الفنية والتقطير (Q13 - Q29)' : 'Distillation System & Regulatory Documentation'}</h2>
              <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-muted)' }}>
                {isAr ? 'حدد طريقة التقطير المفضلة ومتطلبات شهادات سايتس والفحص المخبري.' : 'Select extraction method, wood treatment, and CITES compliance certificates.'}
              </p>
            </div>
          </div>

          <div className="grid-2">
            <div>
              <label className="form-label" htmlFor="distillation_method">
                {isAr ? 'نظام التقطير المفضل (Q22)' : 'Distillation System (Q22)'}
              </label>
              <select id="distillation_method" name="distillation_method" className="form-select">
                <option value="any">{isAr ? 'غير محدد / بحسب ترشيح المقطر' : 'Any / Distiller Recommendation'}</option>
                <option value="copper_deg">{isAr ? 'قدور نحاس تقليدية بحطب الغابات (Copper Deg)' : 'Traditional Copper Deg (Wood Fire)'}</option>
                <option value="stainless_hydro">{isAr ? 'هايدرو استانلس ستيل حديث بدرجة حرارة منخفضة' : 'Modern Stainless Steel Hydro-distillation'}</option>
                <option value="steam">{isAr ? 'تقطير بالبخار فقط (Steam Distillation)' : 'Low-Temperature Pressurized Steam'}</option>
                <option value="co2_supercritical">{isAr ? 'استخلاص فائق الحرج بثاني أكسيد الكربون (CO2)' : 'Supercritical CO2 Fluid Extraction'}</option>
              </select>
            </div>

            <div>
              <label className="form-label" htmlFor="cites_documentation">
                {isAr ? 'وثائق السايتس والجمارك (Q26)' : 'CITES & Laboratory Certification (Q26)'}
              </label>
              <select id="cites_documentation" name="cites_documentation_required" className="form-select">
                <option value="required">{isAr ? 'شهادة CITES Appendix II إلزامية للشحن الدولي' : 'Mandatory CITES Appendix II & Phytosanitary Certificate'}</option>
                <option value="local_uae">{isAr ? 'تسليم محلي داخل دولة الإمارات' : 'Local UAE Delivery / In-Country Handover'}</option>
                <option value="not_needed">{isAr ? 'غير مطلوبة حالياً' : 'Not Required for Initial Evaluation'}</option>
              </select>
            </div>
          </div>
        </div>

        {/* STEP 3: SAMPLES & QUALIFICATION */}
        <div className="wizard-step">
          <div className="wizard-header">
            <div className="step-num">3</div>
            <div>
              <h2 className="step-title">{isAr ? 'سياسة العينات والفحص (Q38 - Q43)' : 'Sampling Protocol & Evaluation Policy'}</h2>
              <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-muted)' }}>
                {isAr ? 'هل تحتاج إلى عينة فحص مدفوعة أو مجانية قبل تنفيذ الشراء الكامل؟' : 'Indicate whether pre-order olfactory evaluation samples are required.'}
              </p>
            </div>
          </div>

          <div className="grid-2">
            <div>
              <label className="form-label" htmlFor="samples_requested">
                {isAr ? 'هل تحتاج عينة فحص أولاً؟ (Q38) *' : 'Pre-Order Samples Required? (Q38) *'}
              </label>
              <select id="samples_requested" name="samples_requested" className="form-select" required defaultValue="true">
                <option value="true">{isAr ? 'نعم، عينات فحص مطلوبة قبل الشراء التجاري' : 'Yes, evaluation sample required prior to bulk order'}</option>
                <option value="false">{isAr ? 'لا، الشراء فوري بكميات الجملة' : 'No, direct commercial bulk procurement'}</option>
              </select>
            </div>

            <div>
              <label className="form-label" htmlFor="sample_payment">
                {isAr ? 'شروط سداد قيمة العينات (Q39)' : 'Sample Payment Terms (Q39)'}
              </label>
              <select id="sample_payment" name="sample_payment_terms" className="form-select">
                <option value="buyer_pays">{isAr ? 'المشتري يسدد قيمة العينة والشحن السريع' : 'Buyer covers sample fee & express courier'}</option>
                <option value="deductible">{isAr ? 'قيمة العينة تخصم من قيمة الطلب اللاحق' : 'Deductible from subsequent commercial purchase'}</option>
                <option value="complimentary">{isAr ? 'عينات مجانية للمشترين والمصانع المؤهلة' : 'Complimentary for verified institutional perfumers'}</option>
              </select>
            </div>
          </div>
        </div>

        {/* STEP 4: DESTINATION & DELIVERY */}
        <div className="wizard-step">
          <div className="wizard-header">
            <div className="step-num">4</div>
            <div>
              <h2 className="step-title">{isAr ? 'بلد التسليم واللوجستيات (Q44 - Q49)' : 'Delivery Destination & Logistics'}</h2>
              <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-muted)' }}>
                {isAr ? 'الوجهة المحددة لتسليم الشحنة والتخليص الجمركي.' : 'Specify the destination country and port for freight calculation.'}
              </p>
            </div>
          </div>

          <div className="grid-2">
            <div>
              <label className="form-label" htmlFor="destination_country">
                {isAr ? 'بلد التسليم والوصول (Q44) *' : 'Destination Country (Q44) *'}
              </label>
              <input
                type="text"
                id="destination_country"
                name="destination_country"
                className="form-input"
                required
                defaultValue={country || 'United Arab Emirates'}
              />
            </div>

            <div>
              <label className="form-label" htmlFor="destination_city">
                {isAr ? 'المدينة / الميناء الجوي (Q45)' : 'Destination City / Airport (Q45)'}
              </label>
              <input type="text" id="destination_city" name="destination_city" className="form-input" placeholder="e.g. Dubai, London, Riyadh, Paris" />
            </div>
          </div>
        </div>

        {/* STEP 5: BUYER IDENTITY & OTP CHANNEL */}
        <div className="wizard-step">
          <div className="wizard-header">
            <div className="step-num">5</div>
            <div>
              <h2 className="step-title">{isAr ? 'معلومات المشتري والتحقق (Q50 - Q59)' : 'Buyer Identity & Contact Channel Verification'}</h2>
              <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-muted)' }}>
                {isAr ? 'بياناتك الشخصية تخضع لسياسة عدم الإفصاح ولن تُكشف لأي مورد حتى تعتمد اسمه صراحة.' : 'Your details remain in our secure vault. No partner receives your contact coordinates without explicit approval.'}
              </p>
            </div>
          </div>

          <div className="grid-2">
            <div>
              <label className="form-label" htmlFor="buyer_name">
                {isAr ? 'الاسم الكامل أو اسم المسؤول (Q51) *' : 'Contact Person / Representative (Q51) *'}
              </label>
              <input type="text" id="buyer_name" name="buyer_name" className="form-input" required placeholder="e.g. Fatima Al Mansoori" />
            </div>

            <div>
              <label className="form-label" htmlFor="company_name">
                {isAr ? 'اسم الدار أو العلامة التجارية (Q55)' : 'Company / Brand Name (Q55)'}
              </label>
              <input type="text" id="company_name" name="company_name" className="form-input" placeholder="e.g. Mansoor Luxury Fragrances" />
            </div>
          </div>

          <div className="grid-2" style={{ marginTop: '16px' }}>
            <div>
              <label className="form-label" htmlFor="preferred_channel">
                {isAr ? 'وسيلة التحقق والتواصل (Q50) *' : 'Preferred Verification Channel (Q50) *'}
              </label>
              <select id="preferred_channel" name="preferred_contact_channel" className="form-select" required defaultValue="email">
                <option value="email">{isAr ? 'البريد الإلكتروني الرسمي (Email)' : 'Corporate Email'}</option>
                <option value="phone">{isAr ? 'الاتصال الهاتفي المباشر' : 'Direct Telephone Call'}</option>
                <option value="whatsapp">{isAr ? 'واتساب للأعمال (WhatsApp Business)' : 'WhatsApp Business'}</option>
              </select>
            </div>

            <div>
              <label className="form-label" htmlFor="buyer_email">
                {isAr ? 'البريد الإلكتروني (Q52) *' : 'Email Address (Q52) *'}
              </label>
              <input type="email" id="buyer_email" name="buyer_email" className="form-input" required placeholder="buyer@fragrancehouse.example" />
            </div>
          </div>

          <div style={{ marginTop: '16px' }}>
            <label className="form-label" htmlFor="buyer_phone">
              {isAr ? 'رقم الهاتف الدولي / الواتساب (Q53/Q54)' : 'International Phone / WhatsApp Number (Q53/Q54)'}
            </label>
            <input type="tel" id="buyer_phone" name="buyer_phone" className="form-input" placeholder="+971 50 000 0000" />
          </div>

          <div className="privacy-shield" style={{ marginTop: '20px' }}>
            <div className="privacy-shield-icon">🛡️</div>
            <div className="privacy-shield-text">
              <strong>{isAr ? 'ضمان الخصوصية التامة للمشتري (Zero Contact Leakage):' : 'Strict Buyer Privacy Guarantee (Zero Contact Leakage):'}</strong>{' '}
              {isAr
                ? 'عند إرسال هذا الطلب، سنصدر رمز تحقق لمرة واحدة (OTP). لن يُشارك اسمك أو بريدك أو هاتفك مع أي مورد حتى تستعرض عروضهم وتوافق بالاسم على إطلاق بيانات التعريف.'
                : 'Upon submission, a 6-digit one-time code will be dispatched to verify your channel. Eligible distillers will only see your material specifications in an anonymous brief until you explicitly approve them in your inquiry dashboard.'}
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '36px' }}>
          <button type="submit" className="btn-gold" style={{ padding: '14px 44px', fontSize: '16px' }}>
            <span>{isAr ? 'إرسال المتطلبات وإصدار رمز التحقق' : 'Submit Requirement & Issue Verification Code'}</span>
            <span>{isAr ? '←' : '→'}</span>
          </button>
        </div>
      </form>
    </div>
  );
}

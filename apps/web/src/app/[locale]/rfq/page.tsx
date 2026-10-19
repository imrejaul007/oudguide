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
    <div>
      <div className="hero">
        <h2>
          {isAr
            ? 'تقديم متطلبات توريد العود والزيوت العطرية بالجملة'
            : 'Wholesale Oud & Fragrance Requirement Intake'}
        </h2>
        <p>
          {isAr
            ? 'خدمة الربط التجاري المحايدة من دليل العود. سيتم مراجعة طلبك ومشاركته كموجز فني مشفر مع الموردين المعتمدين. لن يتم تسليم معلومات اتصالك لأي مورد إلا بعد موافقتك الصريحة بالاسم.'
            : 'OudGuide neutral supplier matching. Your requirement is synthesized into a redacted technical brief for eligible suppliers. No supplier receives your contact details until you explicitly approve them by name.'}
        </p>
      </div>

      {profile && (
        <div className="banner-success">
          <strong>{isAr ? 'طلب موجه لشركة محددة:' : 'Direct Inquiry for:'}</strong> {profile}
          <p style={{ margin: '4px 0 0 0', fontSize: '13px' }}>
            {isAr
              ? 'سيتم توجيه هذا الطلب بشكل مباشر لهذه الشركة كأولوية أولى، مع خيار ربطك بموردين احتياطيين في حال عدم الاستجابة.'
              : 'This requirement will be presented directly to this supplier as primary candidate, with fallback matching if needed.'}
          </p>
        </div>
      )}

      <form method="POST" action="/api/v1/inquiries/form" style={{ marginTop: '20px' }}>
        <input type="hidden" name="locale" value={locale} />
        {profile && <input type="hidden" name="selected_supplier_slug" value={profile} />}

        {/* STAGE 1: CORE PRODUCT REQUIREMENT (Q01 - Q12) */}
        <div className="section-box">
          <h3>{isAr ? '1. متطلبات الصنف والمواصفات (Q01 - Q12)' : '1. Product Family & Technical Specifications'}</h3>

          <div className="grid-2">
            <div>
              <label htmlFor="product_family">
                {isAr ? 'فئة الصنف المطلوبة (Q01) *' : 'Product Family (Q01) *'}
              </label>
              <select id="product_family" name="product_family" required defaultValue="Oud oil">
                <option value="Oud wood">{isAr ? 'خشب عود طبيعي / رقائق وبخور' : 'Oud wood / chips / natural incense'}</option>
                <option value="Oud oil">{isAr ? 'دهن عود مقطر خالص' : 'Oud oil / Dehn Al Oud'}</option>
                <option value="Attar">{isAr ? 'عطور شرقية وزيوت مركبة (عطار)' : 'Traditional Attar / Perfume oil'}</option>
                <option value="Finished perfume">{isAr ? 'عطور مصنعة وتصنيع خاص (Private Label)' : 'Finished perfume / Private label'}</option>
                <option value="Bakhoor/incense">{isAr ? 'معمول وبخور فاخر' : 'Bakhoor / Incense blends'}</option>
              </select>
            </div>

            <div>
              <label htmlFor="quantity">
                {isAr ? 'الكمية المطلوبة (Q03) *' : 'Target Quantity (Q03) *'}
              </label>
              <input type="number" id="quantity" name="quantity" min="1" step="any" required defaultValue="10" />
            </div>
          </div>

          <div className="grid-2" style={{ marginTop: '12px' }}>
            <div>
              <label htmlFor="quantity_unit">
                {isAr ? 'وحدة القياس (Q04) *' : 'Quantity Unit (Q04) *'}
              </label>
              <select id="quantity_unit" name="quantity_unit" required defaultValue="tolas">
                <option value="tolas">Tolas (تولة - 12g approx)</option>
                <option value="kg">Kilograms (كغم)</option>
                <option value="g">Grams (غرام)</option>
                <option value="liters">Liters (لتر)</option>
                <option value="bottles">Finished Bottles (زجاجة)</option>
              </select>
            </div>

            <div>
              <label htmlFor="target_price">
                {isAr ? 'الميزانية المستهدفة للوحدة (Q05)' : 'Target Price per Unit (Q05)'}
              </label>
              <input type="text" id="target_price" name="target_price_per_unit" placeholder="e.g. 250 USD / 900 AED" />
            </div>
          </div>

          <div style={{ marginTop: '12px' }}>
            <label htmlFor="origin_preference">
              {isAr ? 'المنطقة أو المصدر المفضل (Q07)' : 'Origin & Habitat Preference (Q07)'}
            </label>
            <input
              type="text"
              id="origin_preference"
              name="origin_preference"
              placeholder="e.g. India (Assam), Cambodia (Koh Kong), Thailand (Trat), Indonesia (Kalimantan)"
            />
          </div>

          <div className="grid-2" style={{ marginTop: '12px' }}>
            <div>
              <label htmlFor="wild_vs_cultivated">
                {isAr ? 'طبيعي غابات أم مستزرع (Q08)' : 'Wild Forest vs Plantation (Q08)'}
              </label>
              <select id="wild_vs_cultivated" name="wild_vs_cultivated">
                <option value="either">{isAr ? 'أي منهما (بحسب الجودة والسعر)' : 'Either (judged on scent & price)'}</option>
                <option value="wild_only">{isAr ? 'أشجار غابات طبيعية فقط' : 'Wild forest harvest only'}</option>
                <option value="cultivated_sustainable">{isAr ? 'مستزرع ومستدام بيئياً (CITES)' : 'Cultivated sustainable plantation'}</option>
              </select>
            </div>

            <div>
              <label htmlFor="required_date">
                {isAr ? 'التاريخ المطلوب للتسليم (Q11)' : 'Target Delivery Date (Q11)'}
              </label>
              <input type="date" id="required_date" name="required_date" />
            </div>
          </div>
        </div>

        {/* STAGE 2: SPECIFIC WOOD & OIL ATTRIBUTES (Q13 - Q29) */}
        <div className="section-box">
          <h3>{isAr ? '2. الخصائص الفنية والتقطير (Q13 - Q29)' : '2. Technical & Distillation Criteria'}</h3>
          <div className="grid-2">
            <div>
              <label htmlFor="distillation_method">
                {isAr ? 'طريقة التقطير المفضلة (Q22)' : 'Distillation System (Q22)'}
              </label>
              <select id="distillation_method" name="distillation_method">
                <option value="any">{isAr ? 'غير محدد / بحسب التوصية' : 'Any / Distiller recommendation'}</option>
                <option value="copper_deg">{isAr ? 'قدور نحاس تقليدية (Copper Deg)' : 'Traditional Copper Deg / Wood fire'}</option>
                <option value="stainless_hydro">{isAr ? 'هايدرو استانلس ستيل حديث' : 'Modern Stainless Steel Hydro'}</option>
                <option value="steam">{isAr ? 'تقطير بالبخار فقط' : 'Low-temperature Steam'}</option>
                <option value="co2_supercritical">{isAr ? 'استخلاص ثاني أكسيد الكربون (CO2)' : 'Supercritical CO2 Extraction'}</option>
              </select>
            </div>

            <div>
              <label htmlFor="cites_documentation">
                {isAr ? 'شهادات السايتس والتصدير (Q26)' : 'CITES & Laboratory Documentation (Q26)'}
              </label>
              <select id="cites_documentation" name="cites_documentation_required">
                <option value="required">{isAr ? 'مطلوبة إلزامياً للشحن الدولي' : 'Mandatory CITES Appendix II & COA'}</option>
                <option value="local_uae">{isAr ? 'استلام محلي في الإمارات' : 'Local UAE delivery / In-country pickup'}</option>
                <option value="not_needed">{isAr ? 'غير مطلوبة حالياً' : 'Not required'}</option>
              </select>
            </div>
          </div>
        </div>

        {/* STAGE 3: SAMPLES & QUALIFICATION (Q38 - Q43) */}
        <div className="section-box">
          <h3>{isAr ? '3. العينات وفحص الجودة (Q38 - Q43)' : '3. Sample Policy & Commercial Timeline'}</h3>
          <div className="grid-2">
            <div>
              <label htmlFor="samples_requested">
                {isAr ? 'هل تحتاج إلى عينة فحص أولاً؟ (Q38) *' : 'Do you require evaluation samples? (Q38) *'}
              </label>
              <select id="samples_requested" name="samples_requested" required defaultValue="true">
                <option value="true">{isAr ? 'نعم، عينات فحص مطلوبة قبل الشراء التجاري' : 'Yes, paid/free sample required prior to bulk order'}</option>
                <option value="false">{isAr ? 'لا، الشراء فوري بكميات الجملة' : 'No, immediate commercial bulk order'}</option>
              </select>
            </div>

            <div>
              <label htmlFor="sample_payment">
                {isAr ? 'شروط دفع قيمة العينات (Q39)' : 'Sample Terms (Q39)'}
              </label>
              <select id="sample_payment" name="sample_payment_terms">
                <option value="buyer_pays">{isAr ? 'المشتري يسدد قيمة العينة والشحن' : 'Buyer pays sample fee & express shipping'}</option>
                <option value="deductible">{isAr ? 'تخصم من قيمة الطلب التجاري اللاحق' : 'Deductible from subsequent bulk purchase'}</option>
                <option value="complimentary">{isAr ? 'عينات مجانية للمشترين المؤهلين' : 'Complimentary for verified institutional buyers'}</option>
              </select>
            </div>
          </div>
        </div>

        {/* STAGE 4: DESTINATION & DELIVERY (Q44 - Q49) */}
        <div className="section-box">
          <h3>{isAr ? '4. بلد الوصول والشحن (Q44 - Q49)' : '4. Destination & Delivery Logistics'}</h3>
          <div className="grid-2">
            <div>
              <label htmlFor="destination_country">
                {isAr ? 'بلد التسليم والوصول (Q44) *' : 'Destination Country (Q44) *'}
              </label>
              <input
                type="text"
                id="destination_country"
                name="destination_country"
                required
                defaultValue={country || 'United Arab Emirates'}
              />
            </div>

            <div>
              <label htmlFor="destination_city">
                {isAr ? 'المدينة / الميناء (Q45)' : 'Destination City / Port (Q45)'}
              </label>
              <input type="text" id="destination_city" name="destination_city" placeholder="e.g. Dubai, London, Riyadh" />
            </div>
          </div>
        </div>

        {/* STAGE 5: BUYER CONTACT & CONSENT (Q50 - Q59) */}
        <div className="section-box">
          <h3>{isAr ? '5. معلومات الاتصال والموافقة (Q50 - Q59)' : '5. Buyer Contact & Privacy Consent'}</h3>
          <div className="grid-2">
            <div>
              <label htmlFor="buyer_name">
                {isAr ? 'الاسم الكامل أو اسم المسؤول (Q51) *' : 'Contact Person / Representative (Q51) *'}
              </label>
              <input type="text" id="buyer_name" name="buyer_name" required placeholder="e.g. Fatima Al Mansoori" />
            </div>

            <div>
              <label htmlFor="company_name">
                {isAr ? 'اسم الشركة أو العلامة التجارية (Q55)' : 'Company / Brand Name (Q55)'}
              </label>
              <input type="text" id="company_name" name="company_name" placeholder="e.g. Luxury Attars LLC" />
            </div>
          </div>

          <div className="grid-2" style={{ marginTop: '12px' }}>
            <div>
              <label htmlFor="preferred_channel">
                {isAr ? 'وسيلة الاتصال المعتمدة (Q50) *' : 'Preferred Verification Channel (Q50) *'}
              </label>
              <select id="preferred_channel" name="preferred_contact_channel" required defaultValue="email">
                <option value="email">{isAr ? 'البريد الإلكتروني (Email)' : 'Email'}</option>
                <option value="phone">{isAr ? 'الاتصال الهاتفي المباشر' : 'Direct Phone'}</option>
                <option value="whatsapp">{isAr ? 'واتساب للأعمال (WhatsApp)' : 'WhatsApp Business'}</option>
              </select>
            </div>

            <div>
              <label htmlFor="buyer_email">
                {isAr ? 'البريد الإلكتروني (Q52) *' : 'Email Address (Q52) *'}
              </label>
              <input type="email" id="buyer_email" name="buyer_email" required placeholder="buyer@example.com" />
            </div>
          </div>

          <div style={{ marginTop: '12px' }}>
            <label htmlFor="buyer_phone">
              {isAr ? 'رقم الهاتف / الواتساب الدولي (Q53/Q54)' : 'International Phone / WhatsApp Number (Q53/Q54)'}
            </label>
            <input type="tel" id="buyer_phone" name="buyer_phone" placeholder="+971 50 000 0000" />
          </div>

          <div className="banner-warning" style={{ marginTop: '16px' }}>
            <p style={{ margin: 0, fontSize: '13px' }}>
              🔒 <strong>{isAr ? 'ضمان الخصوصية وعدم كشف البيانات:' : 'Privacy Protection Guarantee:'}</strong>{' '}
              {isAr
                ? 'تخضع بياناتك للحماية بموجب سياسة عدم الإفصاح. سيتم إرسال رمز تحقق لمرة واحدة (OTP). لن يتم تسليم بريدك أو هاتفك لأي مورد حتى تعتمد اسمه صراحة في لوحة المتابعة.'
                : 'Your contact information is protected. We will issue a 6-digit verification code. No supplier receives your contact details until you explicitly approve their name in your inquiry dashboard.'}
            </p>
          </div>
        </div>

        <div style={{ marginTop: '24px', textAlign: 'center' }}>
          <button type="submit" className="btn-primary" style={{ padding: '12px 32px', fontSize: '16px' }}>
            {isAr ? 'إرسال المتطلبات والتحقق ←' : 'Submit Requirement & Issue Verification Code →'}
          </button>
        </div>
      </form>
    </div>
  );
}

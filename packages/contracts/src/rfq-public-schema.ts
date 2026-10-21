/**
 * The public projection of the RFQ form schema.
 *
 * ==========================================================================
   Why this module exists.
   ==========================================================================
   `apps/web/src/data/rfq_fields.json` is the reference schema: 67 fields,
   each with an internal identifier (`Q01`…`Q67`), a stage, an input type,
   a required flag, a list of choices, and a column called
   "Privacy / interpretation" whose values are operator guidance —
   "No exact street address at first step", "Do not reject genuine buyers
   without a registered business", "Do not offer another brand's identity
   without authorization".
 *
   The wizard is a client component and it imported that JSON directly, so
   the whole schema — both internal columns included — was in the browser
   bundle and in the RSC payload. OG-A10 removed the internal vocabulary
   from the *visible* form; it never removed it from the *document*.
 *
   This module is the projection the client is allowed to see. It carries:
 *
 *   - the public key, which is also the form field's name;
 *   - the stage, the input type, the required flag;
 *   - a localised label and help line, in English and Arabic;
 *   - the options, each with the machine value the server reads and the
 *     localised display text.
 *
 * It carries no internal identifier and no interpretation column.
 *
 * ==========================================================================
   The one rule that governs the options.
   ==========================================================================
   An option's VALUE is machine data. The server reads it: the product
 * branch tests `family.includes('wood')`, the introduction path tests
 * `request_mode === 'selected_supplier'`, the sample branch tests
 * `samples_requested === 'Yes'`. A value that is translated stops matching
 * and the branch silently stops opening, and nothing in the browser says
 * so. So the values here are the English tokens the server expects, and
   only the display text is localised.
 *
 * ==========================================================================
   The options are stated explicitly rather than parsed.
   ==========================================================================
   The reference schema's "Validation / choices" column mixes real options
   with prose rules, and the parser that split it produced three defects
   that are on screen today:
 *
 *   - "Email or phone/WhatsApp" parsed as ONE option, so the contact
 *     channel could not be chosen at all;
 *   - "OudGuide matching / chosen supplier only" parsed as one option
 *     whose value is neither 'matching' nor 'selected_supplier', which
 *     is the value the domain checks for exactly;
 *   - "SDS" and "COA" lower-cased to "sDS" and "cOA".
 *
 * So every option list here is written out. `tests/rfq-public-schema.test.ts`
 * checks this projection against the reference schema and against the
 * option-value fixture, so the two cannot drift apart silently.
 * ==========================================================================
 */

/** One option in a select. */
export interface PublicOption {
  /**
   * The machine value. This is what the server receives and reads.
   * Never translate it.
   */
  value: string;
  /** The localised text the buyer sees. */
  label: { en: string; ar: string };
}

/** One field in the public projection. */
export interface PublicField {
  /** The public key. Also the form field's `name` and the DOM `id`. */
  key: string;
  /** The stage the field belongs to. */
  stage: string;
  /** The input type: Select, Text, Textarea, Number, Date, File. */
  inputType: string;
  /** Whether the field must be answered. */
  required: boolean;
  /** The localised label. */
  label: { en: string; ar: string };
  /** The localised help line. Empty when there is nothing to add. */
  help: { en: string; ar: string };
  /** The options, for a choice field. Empty for a free-text field. */
  options: PublicOption[];
}

/**
 * The stages the buyer walks through, in order.
 *
 * The "System" stage holds the server-owned fields, and the "Approval" and
 * "Partner" stages hold a consent-withdrawal control and a server-side
 * offer. None of the three is a stage the wizard draws.
 */
export const PUBLIC_STAGES = [
  'Start',
  'Wood',
  'Oil',
  'Perfume',
  'Sample',
  'Delivery',
  'Contact',
  'Consent',
  'Matching',
] as const;

export type PublicStage = (typeof PUBLIC_STAGES)[number];

/** The localised stage names, as the wizard shows them. */
export const PUBLIC_STAGE_LABELS: Record<string, { en: string; ar: string }> = {
  Start: { en: 'Requirements', ar: 'المتطلبات' },
  Wood: { en: 'Wood & Incense', ar: 'الخشب والبخور' },
  Oil: { en: 'Oils & Attars', ar: 'الزيوت والعطور' },
  Perfume: { en: 'Perfume & Private Label', ar: 'العطور والتصنيع الخاص' },
  Sample: { en: 'Samples', ar: 'العينات' },
  Delivery: { en: 'Delivery & Trade Terms', ar: 'الشحن وشروط التجارة' },
  Contact: { en: 'Contact Channel', ar: 'وسيلة الاتصال' },
  Consent: { en: 'Consent & Permissions', ar: 'الموافقة والصلاحيات' },
  Matching: { en: 'Matching Preferences', ar: 'تفضيلات المطابقة' },
};

const opt = (value: string, en: string, ar: string): PublicOption => ({ value, label: { en, ar } });

/**
 * The public fields, keyed by the public key.
 *
 * Every buyer-facing field is here. A field that is not here is not
 * rendered, and `tests/rfq-public-schema.test.ts` fails if the reference
 * schema holds a buyer-facing field that this projection omits.
 */
export const PUBLIC_FIELDS: Record<string, PublicField> = {
  // ---------------------------------------------------------------- Start
  product_family: {
    key: 'product_family',
    stage: 'Start',
    inputType: 'Select',
    required: true,
    label: { en: 'What are you looking to source?', ar: 'ما الذي تبحث عن توريده؟' },
    help: {
      en: 'Choose the product family. The rest of the form adapts to your answer.',
      ar: 'اختر صنف المنتج. يتكيف باقي النموذج مع إجابتك.',
    },
    options: [
      opt('oud wood', 'Oud wood', 'خشب العود'),
      opt('oud oil', 'Oud oil', 'دهن العود'),
      opt('perfume oil', 'Perfume oil', 'دهن عطري'),
      opt('finished perfume', 'Finished perfume', 'عطر منتهٍ'),
      opt('bakhoor/incense', 'Bakhoor or incense', 'بخور أو مقلية'),
      opt('related products', 'Related products', 'منتجات ذات صلة'),
      opt('not sure', 'Not sure yet', 'لست متأكداً بعد'),
    ],
  },
  purchase_purpose: {
    key: 'purchase_purpose',
    stage: 'Start',
    inputType: 'Select',
    required: true,
    label: { en: 'What is the purchase for?', ar: 'ما الغرض من الشراء؟' },
    help: {
      en: 'Sole traders and buyers still researching are welcome — a registered company is not required.',
      ar: 'التجار المستقلون والمشترون الذين ما زالوا يبحثون مرحب بهم — تسجيل شركة ليس شرطاً.',
    },
    options: [
      opt('wholesale/resale', 'Wholesale or resale', 'جملة أو إعادة بيع'),
      opt('manufacturing', 'Manufacturing', 'تصنيع'),
      opt('private label', 'Private label', 'علامة خاصة'),
      opt('retail/personal', 'Retail or personal use', 'تجزئة أو استخدام شخصي'),
      opt('gifting', 'Gifting', 'هدايا'),
      opt('not sure', 'Not sure yet', 'لست متأكداً بعد'),
    ],
  },
  destination_country: {
    key: 'destination_country',
    stage: 'Start',
    inputType: 'Text',
    required: true,
    label: { en: 'Where should it be delivered?', ar: 'إلى أين يجب التسليم؟' },
    help: {
      en: 'The destination country is used for matching and eligibility checks.',
      ar: 'يُستخدم بلد الوجهة للمطابقة وفحص الأهلية.',
    },
    options: [],
  },
  destination_city: {
    key: 'destination_city',
    stage: 'Start',
    inputType: 'Text',
    required: true,
    label: { en: 'Delivery city', ar: 'مدينة التسليم' },
    help: {
      en: 'Your exact address is not needed at this stage.',
      ar: 'لا حاجة لعنوانك الكامل في هذه المرحلة.',
    },
    options: [],
  },
  quantity: {
    key: 'quantity',
    stage: 'Start',
    inputType: 'Text',
    required: false,
    label: { en: 'Quantity and unit', ar: 'الكمية والوحدة' },
    help: {
      en: 'Give a number and a unit — grams or kilograms for wood, millilitres or litres for oils, bottles for packaged goods. If you are not sure, say so.',
      ar: 'أعطِ رقماً ووحدة — غرام أو كيلوغرام للخشب، ملليلتر أو لتر للزيوت، وزجاجات للعبوات. إذا لم تكن متأكداً فاذكر ذلك.',
    },
    options: [],
  },
  product_trade_name: {
    key: 'product_trade_name',
    stage: 'Start',
    inputType: 'Text',
    required: false,
    label: { en: 'Product or trade name', ar: 'اسم الصنف أو الاسم التجاري' },
    help: {
      en: 'The name the seller uses, such as a grade or a brand. If you have no name yet, leave it blank.',
      ar: 'الاسم الذي يستعمله البائع، كدرجة التداول أو اسم علامة. إن لم يكن لديك اسم بعد، اتركه فارغاً.',
    },
    options: [],
  },
  origin_preference: {
    key: 'origin_preference',
    stage: 'Start',
    inputType: 'Select',
    required: false,
    label: { en: 'Preferred material origin', ar: 'منشأ المادة المفضل' },
    help: {
      en: 'This is your preference. It is not treated as evidence of where material originates.',
      ar: 'هذا تفضيل منك. لا يُعامل كدليل على منشأ المادة.',
    },
    options: [
      opt('any', 'Any origin', 'أي منشأ'),
      opt('specific countries', 'Specific countries', 'بلدان محددة'),
      opt('not sure', 'Not sure yet', 'لست متأكداً بعد'),
    ],
  },
  origin_region: {
    key: 'origin_region',
    stage: 'Start',
    inputType: 'Text',
    required: false,
    label: { en: 'Preferred origin region', ar: 'إقليم المنشأ المفضل' },
    help: {
      en: 'A region within the country, if you have one in mind.',
      ar: 'إقليم داخل البلد المختار، إن كانت لديك مناطق محددة.',
    },
    options: [],
  },
  target_price_per_unit: {
    key: 'target_price_per_unit',
    stage: 'Start',
    inputType: 'Text',
    required: false,
    label: { en: 'Budget', ar: 'الميزانية' },
    help: {
      en: 'This is private and is only shared with a supplier you explicitly approve.',
      ar: 'هذه بيانات خاصة تُشارك فقط مع مورد تعتمد عليه صراحةً.',
    },
    options: [],
  },
  budget_basis: {
    key: 'budget_basis',
    stage: 'Start',
    inputType: 'Select',
    required: true,
    label: { en: 'Is that per unit or for the whole order?', ar: 'هل السعر للوحدة أم للطلب كاملاً؟' },
    help: {
      en: 'Totals and per-unit prices are not comparable, so we ask which one you mean.',
      ar: 'لا يمكن مقارنة المجموع بسعر الوحدة، لذلك نسأل أيهما تقصد.',
    },
    options: [
      opt('total order', 'For the whole order', 'للطلب كاملاً'),
      opt('per gram', 'Per gram', 'لكل غرام'),
      opt('per kg', 'Per kilogram', 'لكل كيلوغرام'),
      opt('per mL', 'Per millilitre', 'لكل ملليلتر'),
      opt('per litre', 'Per litre', 'لكل لتر'),
      opt('per bottle', 'Per bottle', 'لكل زجاجة'),
    ],
  },
  required_date: {
    key: 'required_date',
    stage: 'Start',
    inputType: 'Text',
    required: false,
    label: { en: 'Required delivery date', ar: 'تاريخ التسليم المطلوب' },
    help: {
      en: 'A date you need by. A requested date is not a delivery promise.',
      ar: 'التاريخ الذي تحتاجه. التاريخ المطلوب ليس التزاماً بالتسليم في ذلك اليوم.',
    },
    options: [],
  },
  samples_requested: {
    key: 'samples_requested',
    stage: 'Start',
    inputType: 'Select',
    required: true,
    label: { en: 'Do you want samples first?', ar: 'هل تريد عينات أولاً؟' },
    help: {
      en: 'Answering "advice needed" opens a short sample-planning section.',
      ar: 'الإجابة بـ "أحتاج نصيحة" يفتح قسماً قصيراً لتخطيط العينات.',
    },
    options: [
      opt('yes', 'Yes, send samples', 'نعم، أرسل عينات'),
      opt('no', 'No, order directly', 'لا، أطلب مباشرة'),
      opt('advice needed', 'I need advice on this', 'أحتاج نصيحة في هذا'),
    ],
  },

  // ----------------------------------------------------------------- Wood
  reference_media: {
    key: 'reference_media',
    stage: 'Wood',
    inputType: 'File',
    required: false,
    label: { en: 'Reference media', ar: 'وسائط مرجعية' },
    help: {
      en: 'Optional. Uploaded files stay private to the matching process and are never published.',
      ar: 'اختياري. تبقى الملفات المرفوعة خاصة ضمن عملية المطابقة ولا تُنشر أبداً.',
    },
    options: [],
  },
  acceptance_evidence: {
    key: 'acceptance_evidence',
    stage: 'Wood',
    inputType: 'Text',
    required: false,
    label: { en: 'Acceptance evidence you need', ar: 'أدلة القبول المطلوبة' },
    help: {
      en: 'No single test proves every quality claim. Agree the evidence with the supplier.',
      ar: 'لا يوجد اختبار واحد يثبت كل ادعاء جودة. اتفق على الأدلة مع المورد.',
    },
    options: [],
  },
  trade_grade: {
    key: 'trade_grade',
    stage: 'Wood',
    inputType: 'Text',
    required: false,
    label: { en: 'Trade grade as you would ask for it', ar: 'درجة التداول كما تطلبها' },
    help: {
      en: 'Use the seller\'s own words, such as Super or Double Super. These labels are not standardised across markets.',
      ar: 'استخدم كلمات البائع نفسه مثل Super أو Double Super. هذه التسميات ليست موحدة بين الأسواق.',
    },
    options: [],
  },
  physical_size_form: {
    key: 'physical_size_form',
    stage: 'Wood',
    inputType: 'Text',
    required: false,
    label: { en: 'Physical size and form', ar: 'الحجم والشكل' },
    help: {
      en: 'The form the material takes — pieces, slices, strips, blocks, powder — and the dimensions in millimetres if you know them.',
      ar: 'الشكل الذي توجد به المادة — قطع، شرائح، أشرطة، كتل، مسحوق — والأبعاد بالمليمتر إن كنت تعرفها.',
    },
    options: [],
  },
  intended_use: {
    key: 'intended_use',
    stage: 'Wood',
    inputType: 'Select',
    required: false,
    label: { en: 'Intended use', ar: 'الاستخدام المقصود' },
    help: {
      en: 'What the material is for. It decides which documentation and which handling advice apply.',
      ar: 'ما الغرض من المادة. وهو ما يحدد الوثائق وأنواع الإرشادات التي تنطبق عليها.',
    },
    options: [
      opt('heating/burning', 'Heating or burning', 'تدفئة أو حرق'),
      opt('distillation', 'Distillation', 'تقطير'),
      opt('manufacture', 'Manufacture', 'تصنيع'),
      opt('collecting', 'Collecting', 'جمع'),
      opt('carving', 'Carving', 'نحت'),
      opt('not sure', 'Not sure yet', 'لست متأكداً بعد'),
    ],
  },
  treatment_preference: {
    key: 'treatment_preference',
    stage: 'Wood',
    inputType: 'Select',
    required: false,
    label: { en: 'Treatment disclosure you require', ar: 'الإفصاح عن المعالجة المطلوب' },
    help: {
      en: 'Ask for a written statement of any treatment, infusion or scent addition.',
      ar: 'اطلب بياناً خطياً عن أي معالجة أو نقع أو إضافة عطرية.',
    },
    options: [
      opt('declared untreated', 'Declared untreated', 'معلن أن المادة غير معالجة'),
      opt('infused/scented acceptable', 'Infused or scented is acceptable', 'النقع أو التعطير مقبول'),
      opt('treatment disclosure required', 'A treatment disclosure is required', 'مطلوب الإفصاح عن المعالجة'),
      opt('not sure', 'Not sure yet', 'لست متأكداً بعد'),
    ],
  },
  sourcing_preference: {
    key: 'sourcing_preference',
    stage: 'Wood',
    inputType: 'Select',
    required: false,
    label: { en: 'Sourcing preference', ar: 'تفضيل مصدر التوريد' },
    help: {
      en: 'Whether you need cultivated, documented-wild or unspecified material. A preference is not a specification.',
      ar: 'هل تحتاج مادة مستزرعة أو برية موثقة أم غير محددة. التفضيل ليس مواصفة.',
    },
    options: [
      opt('cultivated', 'Cultivated', 'مستزرعة'),
      opt('documented other source', 'A documented source', 'مصدر موثق'),
      opt('no preference', 'No preference', 'بلا تفضيل'),
      opt('advice needed', 'I need advice on this', 'أحتاج نصيحة في هذا'),
    ],
  },
  resin_density_preference: {
    key: 'resin_density_preference',
    stage: 'Wood',
    inputType: 'Text',
    required: false,
    label: { en: 'Density or resin expectation', ar: 'الكيافة أو الراتنج المتوقع' },
    help: {
      en: 'Describe the evidence you want, not just a sinking label. Density alone does not establish authenticity.',
      ar: 'صف الدليل الذي تريده، لا مجرد تسمية "غطاس". الكثافة وحدها لا تثبت الأصالة.',
    },
    options: [],
  },
  cleaning_preparation: {
    key: 'cleaning_preparation',
    stage: 'Wood',
    inputType: 'Text',
    required: false,
    label: { en: 'Cleaning and preparation', ar: 'التنظيف والتحضير' },
    help: {
      en: 'How the material should arrive — cleaned, minimally processed, or prepared to a stated size.',
      ar: 'كيف تريد أن تصل المادة — منظفة، أو معالجة بأقل قدر ممكن، أو محضّرة بمقاس مذكور.',
    },
    options: [],
  },
  aroma_preferences: {
    key: 'aroma_preferences',
    stage: 'Wood',
    inputType: 'Text',
    required: false,
    label: { en: 'Aroma preferences', ar: 'تفضيلات الطابع' },
    help: {
      en: 'Describe the character you want in your own words, and anything you would rather avoid.',
      ar: 'صف الطابع الذي تريده بكلماتك، وما تفضّل تجنبه.',
    },
    options: [],
  },

  // ------------------------------------------------------------------ Oil
  oil_category: {
    key: 'oil_category',
    stage: 'Oil',
    inputType: 'Select',
    required: true,
    label: { en: 'Oil category', ar: 'صنف الزيت' },
    help: {
      en: 'What the seller is offering. A declared distillation, a blend and a fragrance compound are different products.',
      ar: 'ما يعرضه البائع. التقطير المعلن والمزيج والمركب العطري منتجات مختلفة.',
    },
    options: [
      opt('declared oud oil', 'Declared oud oil', 'دهن عود معلن'),
      opt('attar blend', 'Attar blend', 'عطر شرقي مزيج'),
      opt('fragrance compound', 'Fragrance compound', 'مركب عطري'),
      opt('diluted oil', 'Diluted oil', 'زيت مخفف'),
      opt('not sure', 'Not sure yet', 'لست متأكداً بعد'),
    ],
  },
  distillation_preference: {
    key: 'distillation_preference',
    stage: 'Oil',
    inputType: 'Text',
    required: false,
    label: { en: 'Distillation preference', ar: 'تفضيل طريقة التقطير' },
    help: {
      en: 'The method and the date, if they matter to you. A method stated is a fact; a method assumed is not.',
      ar: 'الطريقة والتاريخ، إن كانا مهمين لك. الطريقة المذكورة واقعة، والطريقة المفترضة ليست واقعة.',
    },
    options: [],
  },
  dilution_carrier_preference: {
    key: 'dilution_carrier_preference',
    stage: 'Oil',
    inputType: 'Text',
    required: false,
    label: { en: 'Dilution or carrier preferences', ar: 'تفضيلات التخفيف أو الحامل' },
    help: {
      en: 'Please note that no skin-safety assurance can be inferred from a product form.',
      ar: 'يرجى ملاحظة أن أمان الاستخدام على الجلد لا يُستنتج من شكل المنتج.',
    },
    options: [],
  },
  batch_age_preference: {
    key: 'batch_age_preference',
    stage: 'Oil',
    inputType: 'Text',
    required: false,
    label: { en: 'Age or batch you are asking for', ar: 'العمر أو الدفعة المطلوبة' },
    help: {
      en: 'State what "aged" means to you and the reference date you mean.',
      ar: 'وضّح ما يعنيه "معتّق" بالنسبة لك وتاريخ المرجع الذي تقصده.',
    },
    options: [],
  },
  technical_documents_needed: {
    key: 'technical_documents_needed',
    stage: 'Oil',
    inputType: 'Select',
    required: false,
    label: { en: 'Technical documents needed', ar: 'الوثائق الفنية المطلوبة' },
    help: {
      en: 'Which documents the supplier has to provide with the oil.',
      ar: 'الوثائق التي يجب أن يقدمها المورد مع الزيت.',
    },
    options: [
      opt('SDS', 'Safety data sheet (SDS)', 'بطاقة بيانات السلامة'),
      opt('applicable conformity information', 'Applicable conformity information', 'معلومات المطابقة المنطبقة'),
      opt('COA', 'Certificate of analysis (COA)', 'شهادة التحليل'),
      opt('batch test report', 'Batch test report', 'تقرير اختبار الدفعة'),
      opt('ingredient information', 'Ingredient information', 'معلومات المكونات'),
    ],
  },
  consistency_requirement: {
    key: 'consistency_requirement',
    stage: 'Oil',
    inputType: 'Select',
    required: false,
    label: { en: 'Consistency requirement', ar: 'متطلبات الثبات' },
    help: {
      en: 'Whether you need the same character every time, or whether a natural variation between batches is acceptable.',
      ar: 'هل تحتاج الطابع نفسه في كل مرة، أم أن التباين الطبيعي بين الدفعات مقبول.',
    },
    options: [
      opt('single batch', 'One single batch', 'دفعة واحدة'),
      opt('repeatable blend', 'A repeatable blend', 'مزيج ثابت التكرار'),
      opt('natural batch variation accepted', 'Natural variation is acceptable', 'التباين الطبيعي مقبول'),
    ],
  },
  packaging_seal: {
    key: 'packaging_seal',
    stage: 'Oil',
    inputType: 'Text',
    required: false,
    label: { en: 'Packaging and seal', ar: 'التعبئة والإحكام' },
    help: {
      en: 'The container and the closure: a bulk container, small bottles, a tamper seal, or something else.',
      ar: 'الوعاء والإغلاق: خزانة كبيرة، أو زجاجات صغيرة، أو ختم مقاوم للعبث، أو غير ذلك.',
    },
    options: [],
  },

  // -------------------------------------------------------------- Perfume
  finished_product_class: {
    key: 'finished_product_class',
    stage: 'Perfume',
    inputType: 'Select',
    required: true,
    label: { en: 'Finished product or your own label', ar: 'منتج منتهٍ أو علامتك الخاصة' },
    help: {
      en: 'A brand\'s identity cannot be used for a private-label order without their authorisation.',
      ar: 'لا يمكن استخدام هوية علامة تجارية في طلب بعلامة خاصة دون إذنها.',
    },
    options: [
      opt('existing branded product', 'An existing branded product', 'منتج بعلامة قائمة'),
      opt('private label', 'Private label', 'علامة خاصة'),
      opt('custom formulation', 'A custom formulation', 'تركيبة مخصصة'),
      opt('not sure', 'Not sure yet', 'لست متأكداً بعد'),
    ],
  },
  concentration_format: {
    key: 'concentration_format',
    stage: 'Perfume',
    inputType: 'Text',
    required: false,
    label: { en: 'Concentration and format', ar: 'التركيز والشكل' },
    help: {
      en: 'The concentration and format you want, such as EDP, EDT, extrait or an oil.',
      ar: 'التركيز والشكل الذي تريده، مثل ماء عطر أو ماء تواليت أو زيت مركّز أو زيت.',
    },
    options: [],
  },
  bottle_size_count: {
    key: 'bottle_size_count',
    stage: 'Perfume',
    inputType: 'Text',
    required: false,
    label: { en: 'Bottle size and count', ar: 'حجم القارورة وعددها' },
    help: {
      en: 'The size of one bottle in millilitres and the number of units separately.',
      ar: 'حجم القارورة الواحدة بالملليلتر وعدد القوارير كل على حدة.',
    },
    options: [],
  },
  scent_brief: {
    key: 'scent_brief',
    stage: 'Perfume',
    inputType: 'Text',
    required: false,
    label: { en: 'Scent brief', ar: 'موجز الرائحة' },
    help: {
      en: 'Describing a scent is not an ingredient declaration. If you need a composition, ask for an ingredient list.',
      ar: 'وصف الرائحة ليس بيان مكونات. إذا كنت تحتاج تركيبة، اطلب قائمة المكونات.',
    },
    options: [],
  },
  branding_label_needs: {
    key: 'branding_label_needs',
    stage: 'Perfume',
    inputType: 'Text',
    required: false,
    label: { en: 'Branding and label needs', ar: 'العلامة والملصق' },
    help: {
      en: 'Brand assets, label languages, pack format and destination requirements.',
      ar: 'أصول العلامة، ولغات الملصق، وشكل العبوة، ومتطلبات الوجهة.',
    },
    options: [],
  },
  development_testing: {
    key: 'development_testing',
    stage: 'Perfume',
    inputType: 'Text',
    required: false,
    label: { en: 'Development and testing', ar: 'التطوير والاختبار' },
    help: {
      en: 'Whether you need a prototype, samples, or stability and compatibility testing.',
      ar: 'هل تحتاج نموذجاً أولياً، أو عينات، أو اختبار ثبات وتوافق.',
    },
    options: [],
  },

  // --------------------------------------------------------------- Sample
  sample_quantity_needed: {
    key: 'sample_quantity_needed',
    stage: 'Sample',
    inputType: 'Text',
    required: false,
    label: { en: 'Sample quantity', ar: 'كمية العينة' },
    help: {
      en: 'This is separate from the eventual bulk order.',
      ar: 'هذا منفصل عن طلب الجملة النهائي.',
    },
    options: [],
  },
  sample_selection_count: {
    key: 'sample_selection_count',
    stage: 'Sample',
    inputType: 'Number',
    required: false,
    label: { en: 'Number of samples to select', ar: 'عدد العينات المطلوبة' },
    help: {
      en: 'How many samples you want to receive for evaluation.',
      ar: 'كم عينة تريد أن تتسلّمها للتقييم.',
    },
    options: [],
  },
  sample_payment_terms: {
    key: 'sample_payment_terms',
    stage: 'Sample',
    inputType: 'Text',
    required: false,
    label: { en: 'Sample budget', ar: 'ميزانية العينات' },
    help: {
      en: 'Sample cost and courier cost are separate expectations, and payment is arranged later.',
      ar: 'تكلفة العينة وتكلفة الشحن توقعات منفصلة، والدفع يُتفق عليه لاحقاً.',
    },
    options: [],
  },
  same_batch_requirement: {
    key: 'same_batch_requirement',
    stage: 'Sample',
    inputType: 'Select',
    required: false,
    label: { en: 'Same-batch requirement', ar: 'شرط الدفعة نفسها' },
    help: {
      en: 'Whether the bulk order must come from the batch you sampled, or whether a small variation is acceptable.',
      ar: 'هل يجب أن يأتي طلب الجملة من الدفعة التي عيّنتها، أم أن تفاوتاً طفيفاً مقبول.',
    },
    options: [
      opt('require bulk from sampled batch', 'Bulk must come from the sampled batch', 'الجملة من الدفعة المعاينة'),
      opt('acceptable variation', 'A small variation is acceptable', 'تفاوت طفيف مقبول'),
      opt('advice needed', 'I need advice on this', 'أحتاج نصيحة في هذا'),
    ],
  },
  sample_destination: {
    key: 'sample_destination',
    stage: 'Sample',
    inputType: 'Text',
    required: true,
    label: { en: 'Sample delivery country and city', ar: 'بلد ومدينة تسليم العينة' },
    help: {
      en: 'Where the samples should go. This is recorded separately from the bulk destination.',
      ar: 'إلى أين تُسلَّم العينات. ويُسجَّل هذا على حدة عن وجهة الجملة.',
    },
    options: [],
  },
  sample_approval_process: {
    key: 'sample_approval_process',
    stage: 'Sample',
    inputType: 'Text',
    required: false,
    label: { en: 'Sample approval process', ar: 'إجراء اعتماد العينة' },
    help: {
      en: 'The criteria you will judge the sample against, who reviews it, and the timeline you are working to.',
      ar: 'المعايير التي ستحكم بها على العينة، ومن يراجعها، والجدول الزمني الذي تعمل ضمنه.',
    },
    options: [],
  },

  // ------------------------------------------------------------- Delivery
  postal_code: {
    key: 'postal_code',
    stage: 'Delivery',
    inputType: 'Text',
    required: true,
    label: { en: 'Postal code', ar: 'الرمز البريدي' },
    help: {
      en: 'Needed only for a meaningful shipping quote. We collect as little address detail as possible.',
      ar: 'مطلوب فقط للحصول على تسعير شحن ذي معنى. نجمع أقل قدر ممكن من بيانات العنوان.',
    },
    options: [],
  },
  delivery_method: {
    key: 'delivery_method',
    stage: 'Delivery',
    inputType: 'Select',
    required: false,
    label: { en: 'Delivery method', ar: 'طريقة التسليم' },
    help: {
      en: 'How the material should travel. Ask the seller for advice if the route is not obvious.',
      ar: 'كيف تُنقل المادة. اسأل البائع عن نصيحة إن كان المسار غير واضح.',
    },
    options: [
      opt('courier', 'Courier', 'شحن سريع'),
      opt('air cargo', 'Air cargo', 'شحن جوي'),
      opt('other', 'Other', 'أخرى'),
      opt('seller advice', 'Ask the seller', 'استشر البائع'),
    ],
  },
  importer_clearance_arrangement: {
    key: 'importer_clearance_arrangement',
    stage: 'Delivery',
    inputType: 'Text',
    required: false,
    label: { en: 'Importer and clearance arrangement', ar: 'ترتيب الاستيراد والتخليص' },
    help: {
      en: 'Who handles the import and the clearance on your side: you, the supplier, or a broker.',
      ar: 'من يتولى الاستيراد والتخليص في جانبك: أنت، أو المورد، أو وكيل.',
    },
    options: [],
  },
  shipping_terms_incoterms: {
    key: 'shipping_terms_incoterms',
    stage: 'Delivery',
    inputType: 'Text',
    required: false,
    label: { en: 'Trade terms preference', ar: 'تفضيلات شروط التجارة' },
    help: {
      en: 'Name the incoterm and place if you know them. We do not assume delivered-duty-paid terms.',
      ar: 'اذكر شرط التجارة والمكان إن كنت تعرفهما. لا نفترض شروط التسليم مع الرسوم مدفوعة.',
    },
    options: [],
  },
  documentation_requirements: {
    key: 'documentation_requirements',
    stage: 'Delivery',
    inputType: 'Text',
    required: false,
    label: { en: 'Documentation you need', ar: 'الوثائق المطلوبة' },
    help: {
      en: 'Requirements depend on the product, the route and the destination jurisdiction.',
      ar: 'تعتمد المتطلبات على المنتج والمسار وجهة الوصول.',
    },
    options: [],
  },
  order_recurrence: {
    key: 'order_recurrence',
    stage: 'Delivery',
    inputType: 'Select',
    required: false,
    label: { en: 'How often will you order?', ar: 'كم مرة ستطلبية؟' },
    help: {
      en: 'A regular order does not create a subscription.',
      ar: 'الطلب المنتظم لا ينشئ اشتراكاً.',
    },
    options: [
      opt('one-off', 'One order only', 'طلب واحد فقط'),
      opt('monthly', 'Monthly', 'شهرياً'),
      opt('quarterly', 'Quarterly', 'كل ثلاثة أشهر'),
      opt('other', 'Other', 'أخرى'),
      opt('not sure', 'Not sure yet', 'لست متأكداً بعد'),
    ],
  },

  // -------------------------------------------------------------- Contact
  buyer_name: {
    key: 'buyer_name',
    stage: 'Contact',
    inputType: 'Text',
    required: true,
    label: { en: 'Your name', ar: 'اسمك' },
    help: {
      en: 'The name that will appear on the request. It is released to a supplier only if you approve them by name.',
      ar: 'الاسم الذي سيظهر في الطلب. ولا يُسلَّم لمورد إلا إذا اعتمدته باسمه.',
    },
    options: [],
  },
  company_name: {
    key: 'company_name',
    stage: 'Contact',
    inputType: 'Text',
    required: false,
    label: { en: 'Company name', ar: 'اسم الشركة' },
    help: {
      en: 'Optional. Sole traders are welcome.',
      ar: 'اختياري. التجار المستقلون مرحب بهم.',
    },
    options: [],
  },
  preferred_contact_channel: {
    key: 'preferred_contact_channel',
    stage: 'Contact',
    inputType: 'Select',
    required: true,
    label: { en: 'Preferred contact channel', ar: 'وسيلة الاتصال المفضلة' },
    help: {
      en: 'How you want to be reached for the verification step, before any supplier is contacted.',
      ar: 'كيف تريد أن يُتواصل معك في خطوة التحقق، قبل الاتصال بأي مورد.',
    },
    options: [
      opt('email', 'Email', 'البريد الإلكتروني'),
      opt('phone', 'Phone', 'الهاتف'),
      opt('whatsapp', 'WhatsApp', 'واتساب'),
    ],
  },
  buyer_email: {
    key: 'buyer_email',
    stage: 'Contact',
    inputType: 'Text',
    required: true,
    label: { en: 'Email address', ar: 'البريد الإلكتروني' },
    help: {
      en: 'Used to verify your contact channel before any introduction is made.',
      ar: 'يُستخدم للتحقق من وسيلة الاتصال قبل أي تعريف.',
    },
    options: [],
  },
  buyer_phone: {
    key: 'buyer_phone',
    stage: 'Contact',
    inputType: 'Text',
    required: true,
    label: { en: 'Phone or WhatsApp', ar: 'الهاتف أو واتساب' },
    help: {
      en: 'Include the country code. We do not need both a phone number and an email address.',
      ar: 'أدرج رمز الدولة. لا نحتاج الرقم والبريد الإلكتروني معاً.',
    },
    options: [],
  },
  language_timezone: {
    key: 'language_timezone',
    stage: 'Contact',
    inputType: 'Text',
    required: false,
    label: { en: 'Language and time zone', ar: 'اللغة والمنطقة الزمنية' },
    help: {
      en: 'The language you want to be contacted in, and your time zone.',
      ar: 'اللغة التي تريد أن يُتواصل معك بها، ومنطقتك الزمنية.',
    },
    options: [],
  },

  // -------------------------------------------------------------- Consent
  processing_notice_display: {
    key: 'processing_notice_display',
    stage: 'Consent',
    inputType: 'Read-only',
    required: false,
    label: { en: 'How your request is processed', ar: 'كيف يُعالَج طلبك' },
    help: {
      en: 'When you approve a request, a technical brief with no buyer identity in it is sent to the suppliers you approve. Producer names are shown on your screen before final approval, and your contact details are released only to a supplier you approve by name for that request.',
      ar: 'عند اعتمادك لطلب، يُرسَل موجز فني خالٍ من أي هوية للمشتري إلى الموردين الذين تعتمدهم. تُعرض أسماء الموردين على شاشتك قبل الموافقة النهائية، ولا تُسلَّم بيانات اتصالك إلا لمورد تعتمد عليه بالاسم لهذا الطلب.',
    },
    options: [],
  },
  consent_approved: {
    key: 'consent_approved',
    stage: 'Consent',
    inputType: 'Checkbox',
    required: false,
    label: { en: 'I understand how my data is used for this request', ar: 'أفهم كيف تُستخدم بياناتي في هذا الطلب' },
    help: {
      en: 'Your contact details are held back until you approve a named recipient.',
      ar: 'تُحجز بيانات الاتصال الخاصة بك حتى تعتمد على مستلم محدد بالاسم.',
    },
    options: [],
  },
  additional_matching_permission: {
    key: 'additional_matching_permission',
    stage: 'Consent',
    inputType: 'Checkbox',
    required: false,
    label: { en: 'Allow OudGuide to suggest additional suppliers', ar: 'السماح لدليل العود باقتراح موردين إضافيين' },
    help: {
      en: 'Optional. A suggested supplier is contacted only if you approve them by name. Refusing this does not cancel a request addressed to a supplier you chose.',
      ar: 'اختياري. ولا يُتصل بالمورد المقترح إلا إذا اعتمدته باسمه. ورفض هذا لا يلغي طلباً موجّهاً إلى مورد اخترته.',
    },
    options: [],
  },
  marketing_permission: {
    key: 'marketing_permission',
    stage: 'Consent',
    inputType: 'Checkbox',
    required: false,
    label: { en: 'Marketing permission', ar: 'إذن التسويق' },
    help: {
      en: 'Separate from the handling of your quotation. Leave unticked to receive only what you asked for.',
      ar: 'منفصل عن معالجة عرض السعر. اتركه غير محدد لتتلقى ما طلبته فقط.',
    },
    options: [],
  },

  // ------------------------------------------------------------- Matching
  request_mode: {
    key: 'request_mode',
    stage: 'Matching',
    inputType: 'Select',
    required: true,
    label: { en: 'Request mode', ar: 'نوع الطلب' },
    help: {
      en: 'Whether OudGuide matches your request to suppliers, or it goes only to the supplier you named.',
      ar: 'هل يطابق دليل العود طلبك مع الموردين، أم يذهب إلى المورد الذي سمّيته وحده.',
    },
    options: [
      opt('matching', 'OudGuide matching', 'مطابقة دليل العود'),
      opt('selected_supplier', 'A supplier I named only', 'المورد الذي سمّيته وحده'),
    ],
  },
  max_recipient_cap: {
    key: 'max_recipient_cap',
    stage: 'Matching',
    inputType: 'Select',
    required: false,
    label: { en: 'Maximum supplier introductions', ar: 'الحد الأقصى لمقدمات التعريف' },
    help: {
      en: 'Each recipient must be approved by you individually. Paying does not add recipients.',
      ar: 'يجب اعتماد كل مستلم منك بشكل فردي. الدفع لا يضيف مستلمين.',
    },
    options: [
      opt('1', 'One supplier', 'مورد واحد'),
      opt('2', 'Two suppliers', 'موردان'),
      opt('3', 'Three suppliers', 'ثلاثة موردين'),
    ],
  },
  redacted_brief_permission: {
    key: 'redacted_brief_permission',
    stage: 'Matching',
    inputType: 'Checkbox',
    required: false,
    label: { en: 'Send my request without my identifying details', ar: 'إرسال طلبي دون بيانات هويتي' },
    help: {
      en: 'The supplier receives a technical brief with no buyer identity in it. Your name is released only if you approve the supplier by name.',
      ar: 'يتلقى المورد موجزاً فنياً خالياً من هوية المشتري. ولا يُسلَّم اسمك إلا إذا اعتمدت المورد باسمه.',
    },
    options: [],
  },
};

/**
 * The public fields, in the order the form walks them.
 *
 * The order is the reference schema's order within each stage, so the
 * form reads the way the schema was designed to read.
 */
export const PUBLIC_FIELD_LIST: PublicField[] = (() => {
  const out: PublicField[] = [];
  for (const stage of PUBLIC_STAGES) {
    for (const key of Object.keys(PUBLIC_FIELDS)) {
      if (PUBLIC_FIELDS[key].stage === stage) out.push(PUBLIC_FIELDS[key]);
    }
  }
  return out;
})();

/**
 * The extra keys a single field also populates.
 *
 * Two fields write more than one value. The phone field also writes the
 * WhatsApp number, because the intake route routes the one answer by the
 * contact channel the buyer chose. The named-recipient field also writes
 * the selected supplier id.
 *
 * This is keyed by the public key, so it carries no internal identifier.
 */
export const PUBLIC_FIELD_EXTRA_KEYS: Record<string, string[]> = {
  buyer_phone: ['buyer_whatsapp'],
  named_recipient_set: ['selected_supplier_id'],
};

/** The localised label for a public field, in the reader's language. */
export function publicLabel(key: string, isAr: boolean): string {
  const field = PUBLIC_FIELDS[key];
  if (!field) return key;
  return isAr ? field.label.ar : field.label.en;
}

/** The localised help line for a public field, or an empty string. */
export function publicHelp(key: string, isAr: boolean): string {
  const field = PUBLIC_FIELDS[key];
  if (!field) return '';
  return isAr ? field.help.ar : field.help.en;
}

/** The localised display text for an option, or the value itself. */
export function publicOptionLabel(key: string, value: string, isAr: boolean): string {
  const field = PUBLIC_FIELDS[key];
  if (!field) return value;
  const option = field.options.find((o) => o.value === value);
  if (!option) return value;
  return isAr ? option.label.ar : option.label.en;
}

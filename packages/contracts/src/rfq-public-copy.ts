/**
 * Public copy for the 67-field RFQ.
 *
 * The reference schema (`rfq_fields.json`) carries two kinds of text:
 *
 *   "Validation / choices"        — options for a select, mixed with prose rules
 *   "Privacy / interpretation"    — an internal handling rule for the platform
 *
 * The privacy column is an internal note. It says things like "Public
 * taxonomy, private buyer answer" and "Do not reject genuine buyers
 * without a registered business" — instructions to the implementation, not
 * help text for the person filling in the form. Rendering it on the page
 * published the internal QA vocabulary to buyers, which is the same class
 * of leak as a publication gate printed as a completed badge.
 *
 * This module is the customer-facing replacement: a localized label and a
 * short help line per field, in English and Arabic. The internal column
 * stays in the schema for the platform's own use.
 */

export interface PublicCopy {
  label: { en: string; ar: string };
  help: { en: string; ar: string };
}

/**
 * Per-field customer-facing copy.
 *
 * Only the fields that need a rewritten label or a real help line are
 * listed. Anything not listed here falls back to the schema's own `Field`
 * label with no help text — the schema labels are already customer-facing
 * English sentences, unlike the privacy column.
 */
export const RFQ_PUBLIC_COPY: Record<string, PublicCopy> = {
  Q01: {
    label: { en: 'What are you looking to source?', ar: 'ما الذي تبحث عن توريده؟' },
    help: {
      en: 'Choose the product family. The rest of the form adapts to your answer.',
      ar: 'اختر صنف المنتج. يتكيف باقي النموذج مع إجابتك.',
    },
  },
  Q02: {
    label: { en: 'What is the purchase for?', ar: 'ما الغرض من الشراء؟' },
    help: {
      en: 'Sole traders and buyers still researching are welcome — a registered company is not required.',
      ar: 'التجار المستقلون والمشترون الذين ما زالوا يبحثون مرحب بهم — تسجيل شركة ليس شرطاً.',
    },
  },
  Q03: {
    label: { en: 'Where should it be delivered?', ar: 'إلى أين يجب التسليم؟' },
    help: {
      en: 'The destination country is used for matching and eligibility checks.',
      ar: 'يُستخدم بلد الوجهة للمطابقة وفحص الأهلية.',
    },
  },
  Q04: {
    label: { en: 'Delivery city', ar: 'مدينة التسليم' },
    help: {
      en: 'Your exact address is not needed at this stage.',
      ar: 'لا حاجة لعنوانك الكامل في هذه المرحلة.',
    },
  },
  Q05: {
    label: { en: 'Quantity and unit', ar: 'الكمية والوحدة' },
    help: {
      en: 'Give a number and a unit — grams or kilograms for wood, millilitres or litres for oils, bottles for packaged goods. If you are not sure, say so.',
      ar: 'أعطِ رقماً ووحدة — غرام أو كيلوغرام للخشب، ملليلتر أو لتر للزيوت، وزجاجات للعبوات. إذا لم تكن متأكداً فاذكر ذلك.',
    },
  },
  Q07: {
    label: { en: 'Preferred material origin', ar: 'منشأ المادة المفضل' },
    help: {
      en: 'This is your preference. It is not treated as evidence of where material originates.',
      ar: 'هذا تفضيل منك. لا يُعامل كدليل على منشأ المادة.',
    },
  },
  Q09: {
    label: { en: 'Budget', ar: 'الميزانية' },
    help: {
      en: 'This is private and is only shared with a supplier you explicitly approve.',
      ar: 'هذه بيانات خاصة تُشارك فقط مع مورد تعتمد عليه صراحةً.',
    },
  },
  Q10: {
    label: { en: 'Is that per unit or for the whole order?', ar: 'هل السعر للوحدة أم للطلب كاملاً؟' },
    help: {
      en: 'Totals and per-unit prices are not comparable, so we ask which one you mean.',
      ar: 'لا يمكن مقارنة المجموع بسعر الوحدة، لذلك نسأل أيهما تقصد.',
    },
  },
  Q12: {
    label: { en: 'Do you want samples first?', ar: 'هل تريد عينات أولاً؟' },
    help: {
      en: 'Answering "advice needed" opens a short sample-planning section.',
      ar: 'الإجابة بـ "أحتاج نصيحة" يفتح قسماً قصيراً لتخطيط العينات.',
    },
  },
  Q13: {
    label: { en: 'Trade grade as you would ask for it', ar: 'درجة التداول كما تطلبها' },
    help: {
      en: 'Use the seller\'s own words, such as Super or Double Super. These labels are not standardised across markets.',
      ar: 'استخدم كلمات البائع نفسه مثل Super أو Double Super. هذه التسميات ليست موحدة بين الأسواق.',
    },
  },
  Q16: {
    label: { en: 'Treatment disclosure you require', ar: 'الإفصاح عن المعالجة المطلوب' },
    help: {
      en: 'Ask for a written statement of any treatment, infusion or scent addition.',
      ar: 'اطلب بياناً خطياً عن أي معالجة أو نقع أو إضافة عطرية.',
    },
  },
  Q18: {
    label: { en: 'Density or resin expectation', ar: 'الكيافة أو الراتنج المتوقع' },
    help: {
      en: 'Describe the evidence you want, not just a sinking label. Density alone does not establish authenticity.',
      ar: 'صف الدليل الذي تريده، لا مجرد تسمية "غطاس". الكثافة وحدها لا تثبت الأصالة.',
    },
  },
  Q21: {
    label: { en: 'Reference media', ar: 'وسائط مرجعية' },
    help: {
      en: 'Optional. Uploaded files stay private to the matching process and are never published.',
      ar: 'اختياري. تبقى الملفات المرفوعة خاصة ضمن عملية المطابقة ولا تُنشر أبداً.',
    },
  },
  Q22: {
    label: { en: 'Acceptance evidence you need', ar: 'أدلة القبول المطلوبة' },
    help: {
      en: 'No single test proves every quality claim. Agree the evidence with the supplier.',
      ar: 'لا يوجد اختبار واحد يثبت كل ادعاء جودة. اتفق على الأدلة مع المورد.',
    },
  },
  Q25: {
    label: { en: 'Dilution or carrier preferences', ar: 'تفضيلات التخفيف أو الحامل' },
    help: {
      en: 'Please note that no skin-safety assurance can be inferred from a product form.',
      ar: 'يرجى ملاحظة أن أمان الاستخدام على الجلد لا يُستنتج من شكل المنتج.',
    },
  },
  Q26: {
    label: { en: 'Age or batch you are asking for', ar: 'العمر أو الدفعة المطلوبة' },
    help: {
      en: 'State what "aged" means to you and the reference date you mean.',
      ar: 'وضّح ما يعنيه "معتّق" بالنسبة لك وتاريخ المرجع الذي تقصده.',
    },
  },
  Q30: {
    label: { en: 'Finished product or your own label', ar: 'منتج منتهٍ أو علامتك الخاصة' },
    help: {
      en: 'A brand\'s identity cannot be used for a private-label order without their authorisation.',
      ar: 'لا يمكن استخدام هوية علامة تجارية في طلب بعلامة خاصة دون إذنها.',
    },
  },
  Q33: {
    label: { en: 'Scent brief', ar: 'موجز الرائحة' },
    help: {
      en: 'Describing a scent is not an ingredient declaration. If you need a composition, ask for an ingredient list.',
      ar: 'وصف الرائحة ليس بيان مكونات. إذا كنت تحتاج تركيبة، اطلب قائمة المكونات.',
    },
  },
  Q36: {
    label: { en: 'Sample quantity', ar: 'كمية العينة' },
    help: {
      en: 'This is separate from the eventual bulk order.',
      ar: 'هذا منفصل عن طلب الجملة النهائي.',
    },
  },
  Q38: {
    label: { en: 'Sample budget', ar: 'ميزانية العينات' },
    help: {
      en: 'Sample cost and courier cost are separate expectations, and payment is arranged later.',
      ar: 'تكلفة العينة وتكلفة الشحن توقعات منفصلة، والدفع يُتفق عليه لاحقاً.',
    },
  },
  Q42: {
    label: { en: 'Postal code', ar: 'الرمز البريدي' },
    help: {
      en: 'Needed only for a meaningful shipping quote. We collect as little address detail as possible.',
      ar: 'مطلوب فقط للحصول على تسعير شحن ذي معنى. نجمع أقل قدر ممكن من بيانات العنوان.',
    },
  },
  Q45: {
    label: { en: 'Trade terms preference', ar: 'تفضيلات شروط التجارة' },
    help: {
      en: 'Name the incoterm and place if you know them. We do not assume delivered-duty-paid terms.',
      ar: 'اذكر شرط التجارة والمكان إن كنت تعرفهما. لا نفترض شروط التسليم مع الرسوم مدفوعة.',
    },
  },
  Q46: {
    label: { en: 'Documentation you need', ar: 'الوثائق المطلوبة' },
    help: {
      en: 'Requirements depend on the product, the route and the destination jurisdiction.',
      ar: 'تعتمد المتطلبات على المنتج والمسار وجهة الوصول.',
    },
  },
  Q47: {
    label: { en: 'How often will you order?', ar: 'كم مرة ستطلبية؟' },
    help: {
      en: 'A regular order does not create a subscription.',
      ar: 'الطلب المنتظم لا ينشئ اشتراكاً.',
    },
  },
  Q49: {
    label: { en: 'Company name', ar: 'اسم الشركة' },
    help: {
      en: 'Optional. Sole traders are welcome.',
      ar: 'اختياري. التجار المستقلون مرحب بهم.',
    },
  },
  Q51: {
    label: { en: 'Email address', ar: 'البريد الإلكتروني' },
    help: {
      en: 'Used to verify your contact channel before any introduction is made.',
      ar: 'يُستخدم للتحقق من وسيلة الاتصال قبل أي تعريف.',
    },
  },
  Q52: {
    label: { en: 'Phone or WhatsApp', ar: 'الهاتف أو واتساب' },
    help: {
      en: 'Include the country code. We do not need both a phone number and an email address.',
      ar: 'أدرج رمز الدولة. لا نحتاج الرقم والبريد الإلكتروني معاً.',
    },
  },
  Q55: {
    label: { en: 'I understand how my data is used for this request', ar: 'أفهم كيف تُستخدم بياناتي في هذا الطلب' },
    help: {
      en: 'Your contact details are held back until you approve a named recipient.',
      ar: 'تُحجز بيانات الاتصال الخاصة بك حتى تعتمد على مستلم محدد بالاسم.',
    },
  },
  Q63: {
    label: { en: 'How many suppliers may receive this request?', ar: 'كم مورداً يمكن أن يتلقى هذا الطلب؟' },
    help: {
      en: 'Each recipient must be approved by you individually. Paying does not add recipients.',
      ar: 'يجب اعتماد كل مستلم منك بشكل فردي. الدفع لا يضيف مستلمين.',
    },
  },
  Q64: {
    label: { en: 'Named suppliers to contact', ar: 'الموردون المحددون للاتصال' },
    help: {
      en: 'Each supplier you name is added individually, and only your approved recipients are contacted.',
      ar: 'يُضاف كل مورد تحدده بشكل فردي، ولا يتم الاتصال إلا بالمستلمين الذين اعتمدتهم.',
    },
  },
};

/** The customer-facing label for a field. */
export function publicLabel(fieldId: string, schemaLabel: string, isAr: boolean): string {
  const copy = RFQ_PUBLIC_COPY[fieldId];
  if (!copy) return schemaLabel;
  return isAr ? copy.label.ar : copy.label.en;
}

/** The customer-facing help line for a field, or an empty string. */
export function publicHelp(fieldId: string, isAr: boolean): string {
  const copy = RFQ_PUBLIC_COPY[fieldId];
  if (!copy) return '';
  return isAr ? copy.help.ar : copy.help.en;
}

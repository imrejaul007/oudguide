/**
 * Canonical copy for the B2B portal.
 *
 * The rule is the one the policy pages set: wording lives in one module,
 * not in each page. Every EN/AR string the portal's public surfaces use
 * is declared here once, and the pages pick the right one with `pick`.
 */

export type BilingualCopy = { en: string; ar: string };

export function pick(locale: string, copy: BilingualCopy): string {
  return locale === 'ar' ? copy.ar : copy.en;
}

export const quickLeadCopy = {
  title: {
    en: 'Get Wholesale Quotes',
    ar: 'احصل على عروض أسعار بالجملة',
  },
  subtitle: {
    en: 'Tell us what you need in under a minute. Matching verified suppliers respond with pricing; you approve every supplier before they see your contact details.',
    ar: 'أخبرنا بما تحتاجه في أقل من دقيقة. يستجيب موردون معتمدون مناسبون بعروض الأسعار، وتُعتمِد كل مورد قبل أن ترى بيانات اتصالك.',
  },
  material: {
    en: 'Material / Product Family',
    ar: 'المادة أو الصنف المطلوب',
  },
  quantity: {
    en: 'Quantity',
    ar: 'الكمية',
  },
  quantityPlaceholder: {
    en: 'e.g. 10 kg, 50 tolas',
    ar: 'مثال: 10 كغ، 50 تولة',
  },
  destination: {
    en: 'Destination Country',
    ar: 'بلد الوجهة',
  },
  timeline: {
    en: 'Needed By',
    ar: 'الفترة الزمنية المطلوبة',
  },
  timelinePlaceholder: {
    en: 'e.g. within 4 weeks',
    ar: 'مثال: خلال 4 أسابيع',
  },
  samples: {
    en: 'Samples before the main order',
    ar: 'عينات قبل الطلب الرئيسي',
  },
  name: {
    en: 'Your Name',
    ar: 'اسمك',
  },
  company: {
    en: 'Company (optional)',
    ar: 'الشركة (اختياري)',
  },
  email: {
    en: 'Email',
    ar: 'البريد الإلكتروني',
  },
  phone: {
    en: 'Phone / WhatsApp (optional)',
    ar: 'الهاتف / واتساب (اختياري)',
  },
  consent: {
    en: 'I agree that OudGuide may share my requirement with matching verified suppliers and that suppliers may contact me about this request.',
    ar: 'أوافق على أن يتشارك دليل العود متطلباتي مع موردين معتمدين مناسبين وأن يتواصل الموردون معي بخصوص هذا الطلب.',
  },
  submit: {
    en: 'Request Quotes',
    ar: 'اطلب عروض الأسعار',
  },
  receipt: {
    en: 'Your requirement has been received',
    ar: 'تم استلام طلبك',
  },
  receiptBody: {
    en: 'Our team reviews every requirement. Matching verified suppliers will respond with pricing; you approve each supplier before they see your contact details.',
    ar: 'تراجع فريقنا كل طلب. سيرد الموردون المعتمدون المناسبون بعروض الأسعار، وتُعتمِد كل مورد قبل أن ترى بيانات اتصالك.',
  },
  receiptStatus: {
    en: 'Review',
    ar: 'قيد المراجعة',
  },
} as const;

export const portalCopy = {
  landingTitle: {
    en: 'B2B Sourcing Portal',
    ar: 'بوابة التوريد بين المؤسسات',
  },
  landingSubtitle: {
    en: 'Wholesale sourcing for oud, attar, bakhoor and fragrance materials: request quotes from verified suppliers, browse supplier storefronts, and track your requirements.',
    ar: 'توريد بالجملة للعود والعطورات والبخور ومواد العطور: اطلب عروض الأسعار من موردين معتمدين، وتصفح متاجر الموردين، وتابع متطلباتك.',
  },
  quoteRequestCta: {
    en: 'Request a Quote',
    ar: 'اطلب عرض سعر',
  },
  browseSuppliersCta: {
    en: 'Browse Suppliers',
    ar: 'تصفح الموردين',
  },
  myRequirementsCta: {
    en: 'My Requirement',
    ar: 'مطلباتي',
  },
  supplierLogin: {
    en: 'Supplier Login',
    ar: 'دخول المورد',
  },
  supplierIndexTitle: {
    en: 'Wholesale Suppliers',
    ar: 'مورّدون بالجملة',
  },
  supplierIndexSubtitle: {
    en: 'Verified suppliers of oud, attar and fragrance materials. Wholesale pricing is shared through the quote request — the public portal lists what a supplier offers and in what minimum quantity.',
    ar: 'موردون معتمدون للعود والعطورات ومواد العطور. تُشارك الأسعار بالجملة عبر طلب عرض السعر؛ يعرض البوابة العامة ما يقدمه المورد وبأقل كمية.',
  },
  supplierStorefrontTitle: {
    en: 'Supplier Storefront',
    ar: 'متجر المورد',
  },
  requestQuoteFor: {
    en: 'Request a Quote',
    ar: 'اطلب عرض سعر',
  },
  moqLabel: {
    en: 'Minimum order',
    ar: 'الحد الأدنى للطلب',
  },
  samplesLabel: {
    en: 'Samples available',
    ar: 'العينات متوفرة',
  },
  familiesLabel: {
    en: 'Materials',
    ar: 'المواد',
  },
  supplierDashboardTitle: {
    en: 'Supplier Dashboard',
    ar: 'لوحة المورد',
  },
  yourLeads: {
    en: 'Assigned Requirements',
    ar: 'الطلبات المسندة',
  },
  yourQuotes: {
    en: 'Your Quotes',
    ar: 'عروضك',
  },
  yourListings: {
    en: 'Your Listings',
    ar: 'منتجاتك',
  },
  signIn: {
    en: 'Sign In',
    ar: 'تسجيل الدخول',
  },
  emailField: {
    en: 'Email',
    ar: 'البريد الإلكتروني',
  },
  passwordField: {
    en: 'Password',
    ar: 'كلمة المرور',
  },
} as const;

export const adminLeadsCopy = {
  title: {
    en: 'Leads Queue',
    ar: 'قائمة العملاء المحتملين',
  },
  newLeads: {
    en: 'New',
    ar: 'جديد',
  },
  assign: {
    en: 'Assign to Supplier',
    ar: 'أسند إلى مورد',
  },
} as const;

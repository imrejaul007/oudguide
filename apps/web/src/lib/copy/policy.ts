/**
 * OudGuide canonical policy copy.
 *
 * The audit found the same rule described three different ways across the
 * directory, the membership page and individual profiles (OG-A06), and found
 * absolute security assurances that no test supports (OG-A12). Both are
 * content problems with a structural cause: the wording lived in page files,
 * so every page invented its own version.
 *
 * This module is the single source for the wording of:
 *
 *   1. Supplier contact publication  — a supplier publishing ITS OWN contacts
 *      to visitors. Requires owner permission plus a paid entitlement.
 *   2. Buyer-data release            — a supplier receiving a buyer's details.
 *      Requires the buyer's explicit, named approval. Never implied by
 *      payment, membership or automated matching.
 *   3. Membership pricing            — AED 1,200 per year, with tax,
 *      invoicing, renewal and cancellation terms marked as not yet approved
 *      rather than asserted (OG-A19).
 *   4. Security claims                — tied to controls that have actually
 *      been exercised, never absolute (OG-A12).
 *
 * These are two genuinely different data flows. Keeping them in one module
 * with two separate exports is what stops them being conflated again.
 *
 * Every string is available in English and Arabic. Arabic text here is
 * written as reviewed copy, not as chrome around English prose (OG-A13).
 */

export interface PolicyCopy {
  en: string;
  ar: string;
}

/* -------------------------------------------------------------------------
 * 1. Contact publication vs buyer-data release
 * ---------------------------------------------------------------------- */

export const contactPolicyCopy = {
  /**
   * What a supplier's paid membership actually grants: permission to publish
   * the supplier's own contact fields to visitors.
   */
  supplierPublication: {
    en: 'Annual membership lets you publish the contact fields you have chosen — email, phone, WhatsApp or address — on your own profile. It publishes your details to visitors. It does not grant you any buyer’s details.',
    ar: 'تتيح لك العضوية السنوية نشر حقول الاتصال التي تختارها — البريد الإلكتروني أو الهاتف أو واتساب أو العنوان — على ملفك الخاص. هذا يعني نشر بياناتك أنت أمام الزوار، ولا يمنحك أي بيانات مشترٍ.',
  } satisfies PolicyCopy,

  /**
   * What buyer-data release requires. This is deliberately a separate rule
   * from supplier publication.
   */
  buyerRelease: {
    en: 'A buyer’s name and contact details are released to a supplier only after that buyer verifies their contact channel and names that supplier for that specific request. Approval applies to one request and one recipient.',
    ar: 'لا يُسلَّم اسم المشتري وبيانات اتصاله لأي مورد إلا بعد أن يتحقق المشتري من قناة الاتصال الخاصة به ويسمّي ذلك المورد بعينه لهذا الطلب تحديداً. الموافقة تخص طلباً واحداً ومستقبلاً واحداً.',
  } satisfies PolicyCopy,

  /**
   * What an anonymous visitor sees on a profile without an active membership.
   */
  basicProfile: {
    en: 'A basic profile shows the business name, where it is located, the product families it offers and its review status. Direct contact fields and the business website are withheld until the owner has both claimed the profile and holds an active membership.',
    ar: 'يعرض الملف الأساسي اسم المنشأة وموقعها وأصناف المنتجات التي تقدمها وحالة المراجعة الخاصة بها. وتُحجب بيانات الاتصال المباشرة وموقع المنشأة حتى يطالب المالك بالملف ويحصل على عضوية سنوية سارية.',
  } satisfies PolicyCopy,

  /**
   * The enumeration and scraping protection rationale. Stated as a design
   * decision with its scope, not as an absolute guarantee.
   */
  notLeaked: {
    en: 'Withheld contact fields are removed before a profile is rendered, so they are absent from the page source, the public JSON, the structured data and the search projection alike. A field that is entitled to appear is published by the owner, not by OudGuide.',
    ar: 'تُحذف حقول الاتصال المحجوبة قبل عرض الملف، لذلك لا تظهر في مصدر الصفحة ولا في بيانات JSON العامة ولا في البيانات المنظمة ولا في فهرس البحث. وأي حقل يستحق النشر ينشره المالك، لا دليل العود.',
  } satisfies PolicyCopy,

  /**
   * The three states a business can be in. These are independent — paying
   * does not produce a verification verdict, and losing a subscription does
   * not erase a completed verification.
   */
  states: {
    ownership: {
      en: 'Owner verified — the business owner has claimed this profile.',
      ar: 'ملكية موثقة — مطالب المالك بهذا الملف.',
    } satisfies PolicyCopy,
    entitlement: {
      en: 'Active membership — an annual subscription is running and the owner has chosen to publish their contact fields.',
      ar: 'عضوية سنوية سارية — اشتراك سنوي قائم، وقد اختار المالك نشر حقول اتصاله.',
    } satisfies PolicyCopy,
    factCheck: {
      en: 'Seller declared — the business supplied this detail. OudGuide has not independently verified it.',
      ar: 'معلن من البائع — زوّدت المنشأة بهذه المعلومة، ولم يوثقها دليل العود بشكل مستقل.',
    } satisfies PolicyCopy,
    reviewed: {
      en: 'Documentation reviewed — OudGuide checked a named document and recorded what it does and does not establish.',
      ar: 'مراجعة مستندات — راجع دليل العود مستنداً محدداً وسجّل ما يثبته وما لا يثبته.',
    } satisfies PolicyCopy,
  },
} as const;

/* -------------------------------------------------------------------------
 * 2. Membership pricing
 * ---------------------------------------------------------------------- */

export const membershipCopy = {
  /**
   * The one price that is approved. AED 1,200 per year.
   */
  priceHeadline: {
    en: 'AED 1,200 per year',
    ar: '1,200 درهم إماراتي سنوياً',
  } satisfies PolicyCopy,

  /**
   * Tax and invoicing. The audit found "0% VAT" published as fact. The
   * approved position is that tax treatment depends on the operating entity
   * and the customer's jurisdiction, and that it has not been confirmed, so
   * the page says that rather than picking a rate (OG-A19).
   */
  priceTaxNote: {
    en: 'The annual price is AED 1,200 before tax. The applicable tax rate and the invoicing entity depend on the registering company and your jurisdiction, and are confirmed on the invoice rather than assumed here.',
    ar: 'السعر السنوي 1,200 درهم إماراتي قبل الضريبة. وتحدّد نسبة الضريبة وجهة التصفير الشركة المسجّلة والاختصاص القضائي للعميل، وتُؤكَّد في الفاتورة لا أن تُفترض هنا.',
  } satisfies PolicyCopy,

  /**
   * Renewal, cancellation and refund terms are not published because they
   * have not been approved. The page says that they are not yet published
   * instead of describing a policy that does not exist (OG-A19).
   */
  renewalNote: {
    en: 'Renewal, cancellation and refund terms have not yet been published. No renewal is scheduled and no payment is taken until these terms are approved and confirmed to you.',
    ar: 'لم تُنشر بعد شروط التجديد أو الإلغاء أو الاسترداد. ولا يوجد تجديد مجدول ولا يُحصَّل أي مبلغ حتى تُعتمد هذه الشروط وتُؤكَّد لك.',
  } satisfies PolicyCopy,

  /**
   * Live checkout is disabled pending approval of the billing configuration.
   */
  paymentDisabledNote: {
    en: 'Checkout is not live. Membership is not activated by a payment page, a success URL or a webhook alone — it is activated on the operating entity’s confirmation.',
    ar: 'الدفع غير مفعّل حالياً. ولا تُفعَّل العضوية بمجرد صفحة دفع أو رابط نجاح أو إشعار webhook، بل تُفعَّل بتأكيد الجهة المشغّلة.',
  } satisfies PolicyCopy,

  /**
   * What membership grants, stated as what it actually changes.
   */
  benefits: [
    {
      en: 'Your own contact fields become publishable on your profile, and only those fields you choose.',
      ar: 'تصبح حقول الاتصال الخاصة بك قابلة للنشر على ملفك، وهي الحقول التي تختارها أنت فقط.',
    } satisfies PolicyCopy,
    {
      en: 'Your profile is listed in the directory and in the wholesale sourcing flow.',
      ar: 'يُدرج ملفك في الدليل وفي مسار التوريد بالجملة.',
    } satisfies PolicyCopy,
    {
      en: 'You can propose corrections to your own listing at any time, free of charge.',
      ar: 'يمكنك اقتراح تصحيحات على ملفك في أي وقت، دون مقابل.',
    } satisfies PolicyCopy,
  ],

  /**
   * The explicit non-benefit: payment is not a verification verdict.
   */
  notABenefit: {
    en: 'Membership is not a verification. It does not make a supplier eligible for a buyer’s details, and it does not turn a seller’s own claims into verified facts.',
    ar: 'العضوية ليست توثيقاً. فهي لا تجعل المورد مؤهلاً للحصول على بيانات المشتري، ولا تحوّل ادعاءات البائع إلى وقائع موثّقة.',
  } satisfies PolicyCopy,
} as const;

/* -------------------------------------------------------------------------
 * 3. Named-recipient approval
 * ---------------------------------------------------------------------- */

export const buyerApprovalCopy = {
  namedRecipient: {
    en: 'This request is addressed to a named supplier. Their business name is shown above and this request will not be sent to anyone else.',
    ar: 'هذا الطلب موجّه إلى مورد محدّد بالاسم، ويظهر اسمه أعلاه، ولن يُرسَل إلى أي طرف آخر.',
  } satisfies PolicyCopy,

  additionalRecipientRequiresApproval: {
    en: 'If OudGuide proposes another supplier, they receive nothing until you approve them by name. Refusing an additional supplier does not affect the supplier you selected.',
    ar: 'إذا اقترح دليل العود مورداً آخر، فلا يتلقى شيئاً حتى توافق عليه باسمك. ورفض مورد إضافي لا يؤثر على المورد الذي اخترته.',
  } satisfies PolicyCopy,

  withdrawal: {
    en: 'You can withdraw a recipient approval at any time. A pending introduction is cancelled, and an introduction already sent cannot be recalled.',
    ar: 'يمكنك سحب الموافقة على أي مورد في أي وقت. يُلغى أي تعريف معلق، أما ما أُرسل بالفعل فلا يمكن استرجاعه.',
  } satisfies PolicyCopy,

  whatTheSupplierReceives: {
    en: 'An approved supplier receives the requirement you wrote: material, quantity, destination and any notes you provided. Your name and contact details are released only with your approval.',
    ar: 'يتلقى المورد المعتمد المتطلبات التي كتبتها: الصنف والكمية والوجهة وأي ملاحظات أضفتها. ويُسلَّم اسمك وبيانات اتصالك بموافقتك فقط.',
  } satisfies PolicyCopy,
} as const;

/* -------------------------------------------------------------------------
 * 4. Security claims
 * ---------------------------------------------------------------------- */

export const securityClaimCopy = {
  /**
   * Replaces absolute assurances such as "your data is never shown to
   * suppliers" (OG-A12). The honest statement describes the flow.
   */
  noAbsoluteSecurity: {
    en: 'Your details are withheld while a request is being prepared and reviewed. They are released to a named supplier only when you approve that supplier for that request. If you approve, they are shared; we do not claim an absolute guarantee.',
    ar: 'تُحجب بياناتك بينما يُعدّ الطلب ويُراجَع. ولا تُسلَّم لمورد محدّد إلا عندما توافق على ذلك المورد لهذا الطلب. فإن وافقت، تُشارَك. ولا ندّعي ضماناً مطلقاً.',
  } satisfies PolicyCopy,

  /**
   * The controls that are actually implemented and exercised by the test
   * suite. Each of these is covered by a named test file.
   */
  actualControls: {
    en: 'Controls that are exercised by the published test suite: contact fields are stripped on the server before rendering, so a locked profile leaks no email, phone, WhatsApp, address or website into the rendered HTML, the public JSON, the structured data or the search projection; a recipient release is refused unless a matching buyer grant exists, is unexpired and names the same recipient; and a selected-supplier request cannot be dispatched to a different business.',
    ar: 'ضوابط تختبرها مجموعة الاختبارات المنشورة: تُحذف حقول الاتصال على الخادم قبل العرض؛ ولا يتسرب أي بريد أو هاتف أو واتساب أو عنوان أو موقع إلى صفحة الملف الأساسي أو JSON العام أو البيانات المنظمة؛ ويُرفض تسليم بيانات المشتري ما لم توجد موافقة مطابقة وسارية باسم المستلم نفسه؛ ولا يمكن إرسال طلب موجّه لمورد إلى منشأة أخرى.',
  } satisfies PolicyCopy,

  /**
   * What the site deliberately does not claim.
   */
  notClaimed: {
    en: 'OudGuide does not claim that no breach is possible, that every supplier has been visited, or that every claim on this site has been independently verified. Where a fact has not been checked, the page says so.',
    ar: 'لا يدّعي دليل العود أن الاختراق مستحيل، ولا أن كل مورد قد زُر، ولا أن كل ادعاء في هذا الموقع موثّق بشكل مستقل. وحيث لا توجد معلومة موثّقة، تذكر الصفحة ذلك صراحة.',
  } satisfies PolicyCopy,
} as const;

/* -------------------------------------------------------------------------
 * 5. Editorial integrity
 * ---------------------------------------------------------------------- */

export const editorialCopy = {
  /**
   * Replaces "peer reviewed", "field documented" and "certified producer"
   * language that the audit found unsupported (OG-A03).
   */
  noUnsupportedAssurances: {
    en: 'Every statement on this page is either a documented fact with a named source, a seller’s own claim marked as such, or a limitation we state openly. A review badge means a review happened and names who did it and when.',
    ar: 'كل عبارة في هذه الصفحة إما واقعة موثّقة بمصدر مذكور، أو ادعاء من البائع موسوم كذلك، أو قيد نذكره بوضوح. وشارة المراجعة تعني أن مراجعة قد جرت وتذكر من أجراها ومتى.',
  } satisfies PolicyCopy,

  /**
   * Used where a research brief exists but no reviewed article does.
   */
  draftNotPublished: {
    en: 'This page is a research brief. It records what still needs to be established before it can be published as a finished article.',
    ar: 'هذه الصفحة موجز بحثي. وهي تسجّل ما يحتاج إلى توثيق قبل نشرها كمقال مكتمل.',
  } satisfies PolicyCopy,

  /**
   * The honest statement for a territory with no assessed capability.
   */
  coverageGap: {
    en: 'This territory is in the register, but its sourcing capability has not been assessed. No supplier, shipping route or regulatory position is claimed for it.',
    ar: 'هذا الإقليم مسجَّل في السجل، لكن لم تُقيَّم قدرته على التوريد بعد. ولا يُدَّعى وجود أي مورد أو مسار شحن أو وضع تنظيمي له.',
  } satisfies PolicyCopy,
} as const;

/* -------------------------------------------------------------------------
 * Helper
 * ---------------------------------------------------------------------- */

/**
 * Pick the right language variant. Unknown locales fall back to English
 * rather than rendering an empty string.
 */
export function pick(copy: PolicyCopy, locale: string): string {
  return locale === 'ar' ? copy.ar : copy.en;
}

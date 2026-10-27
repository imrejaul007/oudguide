/**
 * OudGuide site configuration & navigation taxonomy.
 *
 * IndexOrbit backs its hero image, tagline and popular searches with a
 * `/api/site-settings` endpoint backed by a database. OudGuide has no
 * database layer, so the same concept is expressed as a static, typed
 * configuration object that server components read directly.
 */

export interface SiteSettings {
  siteName: string;
  siteNameAr: string;
  tagline: string;
  taglineAr: string;
  heroImage: string;
  heroImageAr: string;
  contactEmail: string;
  popularSearches: string[];
  popularSearchesAr: string[];
}

export const siteSettings: SiteSettings = {
  siteName: 'OudGuide',
  siteNameAr: 'دليل العود',
  tagline: 'The Global Reference for Natural Oud & Wholesale Sourcing',
  taglineAr: 'المرجع العالمي للعود الطبيعي وتوريد العود بالجملة',
  heroImage: '/images/hero-dehn-al-oud.svg',
  heroImageAr: '/images/hero-dehn-al-oud.svg',
  contactEmail: 'desk@oudguide.com',
  popularSearches: [
    'Sinking grade agarwood',
    'Aged Assam oud oil',
    'Cambodian Koh Kong oud',
    'Trat steam distillation',
    'Sandalwood attar',
    'CITES export permit',
  ],
  popularSearchesAr: [
    'خشب عود غطاس',
    'دهن عود هندي معتق',
    'عود كوه كونغ كمبودي',
    'تقطير ترات بالبخار',
    'عطر صندل تقليدي',
    'تصريح تصدير سايتس',
  ],
};

export interface NavLink {
  label: string;
  labelAr: string;
  href: string;
  description?: string;
  descriptionAr?: string;
}

export interface NavGroup {
  key: string;
  label: string;
  labelAr: string;
  icon: string;
  href: string;
  columns: NavLink[];
}

/**
 * Mega-menu taxonomy. Modelled on IndexOrbit's 3-column mega menu, but
 * grouped by OudGuide's own editorial taxonomy rather than generic
 * business types.
 */
export function getNavGroups(locale: string): NavGroup[] {
  const isAr = locale === 'ar';
  const pick = (en: string, ar: string) => (isAr ? ar : en);

  return [
    {
      key: 'encyclopedia',
      label: pick('Encyclopedia', 'الموسوعة'),
      labelAr: 'الموسوعة',
      icon: 'book',
      href: `/${locale}/guides`,
      columns: [
        {
          label: pick('Foundations', 'الأساسيات'),
          labelAr: 'الأساسيات',
          href: `/${locale}/guides`,
          description: pick('Botanical taxa and resin biology', 'التصنيف النباتي وعلم الراتنج'),
          descriptionAr: 'التصنيف النباتي وعلم الراتنج',
        },
        {
          label: pick('Distillation', 'التقطير'),
          labelAr: 'التقطير',
          // The canonical slug, not the alias. `/guides/copper-deg-distillation`
          // still redirects here for search traffic — the alias redirects
          // stay in next.config.mjs — but a first-party link should point
          // at the page's own address, so it does not spend a redirect hop
          // and so the link and the page agree on which URL is canonical.
          href: `/${locale}/guides/production/oud-extraction-methods`,
          description: pick('Copper deg vs modern steam', 'القدور النحاسية مقابل البخار'),
          descriptionAr: 'القدور النحاسية مقابل البخار',
        },
        {
          label: pick('Grading', 'التقييم'),
          labelAr: 'التقييم',
          href: `/${locale}/guides`,
          description: pick('Sinking grades and GC-MS', 'درجات الغطاس والتحليل الكروماتوغرافي'),
          descriptionAr: 'درجات الغطاس والتحليل الكروماتوغرافي',
        },
        {
          label: pick('Authenticity', 'الأصالة'),
          labelAr: 'الأصالة',
          href: `/${locale}/guides`,
          description: pick('Counterfeit detection methods', 'طرق كشف التزييف التجاري'),
          descriptionAr: 'طرق كشف التزييف التجاري',
        },
        {
          label: pick('CITES & Trade', 'سايتس والتجارة'),
          labelAr: 'سايتس والتجارة',
          // The canonical slug, not the alias. `/guides/cites-regulations`
          // still redirects here for search traffic — the alias redirects
          // stay in next.config.mjs — but a first-party link should point
          // at the page's own address.
          href: `/${locale}/guides/trade/agarwood-documentation`,
          description: pick('Export permits and quotas', 'أذونات التصدير والحصص'),
          descriptionAr: 'أذونات التصدير والحصص',
        },
        {
          label: pick('All Guides', 'كل الأدلة'),
          labelAr: 'كل الأدلة',
          href: `/${locale}/guides`,
          description: pick('Full editorial index', 'الفهرس التحريري الكامل'),
          descriptionAr: 'الفهرس التحريري الكامل',
        },
      ],
    },
    {
      key: 'sourcing',
      label: pick('Sourcing', 'التوريد'),
      labelAr: 'التوريد',
      icon: 'compass',
      href: `/${locale}/directory`,
      columns: [
        {
          label: pick('Producer Directory', 'دليل المنتجين'),
          labelAr: 'دليل المنتجين',
          href: `/${locale}/directory`,
          description: pick('Verified distillers & plantations', 'مقطرون ومزارع معتمدة'),
          descriptionAr: 'مقطرون ومزارع معتمدة',
        },
        {
          label: pick('Origins Map', 'خريطة الأقاليم'),
          labelAr: 'خريطة الأقاليم',
          href: `/${locale}/world`,
          description: pick('249 documented territories', '249 دولة وإقليم موثق'),
          descriptionAr: '249 دولة وإقليم موثق',
        },
        {
          label: pick('Oud Market', 'سوق العود'),
          labelAr: 'سوق العود',
          href: `/${locale}/market`,
          description: pick('Observed price bands, dated', 'نطاقات أسعار مرصودة، مؤرَّخة'),
          descriptionAr: 'نطاقات أسعار مرصودة، مؤرَّخة',
        },
        {
          label: pick('Producer Map', 'خريطة المنتجين'),
          labelAr: 'خريطة المنتجين',
          href: `/${locale}/directory/map`,
          description: pick('Geographic producer view', 'عرض جغرافي للمنتجين'),
          descriptionAr: 'عرض جغرافي للمنتجين',
        },
        {
          label: pick('Sourcing Assistant', 'مساعد التوريد'),
          labelAr: 'مساعد التوريد',
          href: `/${locale}/sourcing`,
          description: pick('Ask questions, get matched', 'اسأل واحصل على ترشيح'),
          descriptionAr: 'اسأل واحصل على ترشيح',
        },
        {
          label: pick('Submit an RFQ', 'تقديم طلب توريد'),
          labelAr: 'تقديم طلب توريد',
          href: `/${locale}/rfq`,
          description: pick('67 conditional specifications', '67 مواصفة شرطية'),
          descriptionAr: '67 مواصفة شرطية',
        },
        {
          label: pick('Partner Portal', 'بوابة الشركاء'),
          labelAr: 'بوابة الشركاء',
          href: `/${locale}/partners/opportunities`,
          description: pick('Redacted supplier briefs', 'موجزات موردين مشفرة'),
          descriptionAr: 'موجزات موردين مشفرة',
        },
      ],
    },
    {
      key: 'business',
      label: pick('For Business', 'لأصحاب الأعمال'),
      labelAr: 'لأصحاب الأعمال',
      icon: 'crown',
      href: `/${locale}/for-businesses`,
      columns: [
        {
          label: pick('Claim Your Profile', 'توثيق ملفك'),
          labelAr: 'توثيق ملفك',
          href: `/${locale}/for-businesses`,
          description: pick('Free verified ownership claim', 'توثيق ملكية مجاني'),
          descriptionAr: 'توثيق ملكية مجاني',
        },
        {
          label: pick('Annual Membership', 'العضوية السنوية'),
          labelAr: 'العضوية السنوية',
          href: `/${locale}/membership`,
          description: pick('AED 1,200/yr for contact display', '1,200 درهم/سنة لإظهار الاتصال'),
          descriptionAr: '1,200 درهم/سنة لإظهار الاتصال',
        },
        {
          label: pick('Wholesale Portal', 'بوابة الجملة'),
          labelAr: 'بوابة الجملة',
          href: `/${locale}/b2b`,
          description: pick('Quick requirements & supplier matching', 'طلبات سريعة ومطابقة الموردين'),
          descriptionAr: 'طلبات سريعة ومطابقة الموردين',
        },
        {
          label: pick('Supplier Storefronts', 'معرضات الموردين'),
          labelAr: 'معرضات الموردين',
          href: `/${locale}/b2b/suppliers`,
          description: pick('Browse wholesale suppliers', 'تصفّح موردين الجملة'),
          descriptionAr: 'تصفّح موردين الجملة',
        },
        {
          label: pick('Privacy Policy', 'سياسة الخصوصية'),
          labelAr: 'سياسة الخصوصية',
          href: `/${locale}/privacy`,
          description: pick('GDPR / UAE PDPL rights', 'حقوق GDPR وPDPL'),
          descriptionAr: 'حقوق GDPR وPDPL',
        },
        {
          label: pick('Corrections', 'التصحيحات'),
          labelAr: 'التصحيحات',
          href: `/${locale}/corrections`,
          description: pick('Editorial review register', 'سجل التدقيق التحريري'),
          descriptionAr: 'سجل التدقيق التحريري',
        },
        {
          label: pick('Operating Policies', 'السياسات'),
          labelAr: 'السياسات',
          href: `/${locale}/policies`,
          description: pick('Neutrality and disclosure rules', 'قواعد الحيادية والإفصاح'),
          descriptionAr: 'قواعد الحيادية والإفصاح',
        },
        {
          label: pick('Admin Portal', 'بوابة الإدارة'),
          labelAr: 'بوابة الإدارة',
          href: `/${locale}/admin/inquiries`,
          description: pick('Moderation and dispatch queues', 'قوائم المراجعة والإرسال'),
          descriptionAr: 'قوائم المراجعة والإرسال',
        },
      ],
    },
  ];
}

/** Top-level navigation items shown in the header bar. */
export function getPrimaryNav(locale: string): { label: string; href: string; groupKey?: string }[] {
  const isAr = locale === 'ar';
  return [
    { label: isAr ? 'الموسوعة' : 'Encyclopedia', href: `/${locale}/guides`, groupKey: 'encyclopedia' },
    { label: isAr ? 'التوريد' : 'Sourcing', href: `/${locale}/directory`, groupKey: 'sourcing' },
    { label: isAr ? 'خريطة الأقاليم' : 'Origins', href: `/${locale}/world` },
    { label: isAr ? 'الأصناف' : 'Products', href: `/${locale}/products` },
    { label: isAr ? 'المفردات' : 'Glossary', href: `/${locale}/glossary` },
    { label: isAr ? 'لأصحاب الأعمال' : 'For Business', href: `/${locale}/for-businesses`, groupKey: 'business' },
    { label: isAr ? 'بوابة الشركاء' : 'Partner Portal', href: `/${locale}/partners/opportunities` },
  ];
}

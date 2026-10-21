/**
 * The copy for the eleven public policy pages.
 *
 * These pages exist because the route manifest listed them and the audit
 * found all eleven returning 404: `/en/about`, `/en/about/ownership`,
 * `/en/editorial-policy`, `/en/verification`, `/en/directory/how-it-works`,
 * `/en/directory/ranking-policy`, `/en/terms`, `/en/cookies`,
 * `/en/accessibility`, `/en/advertising` and
 * `/en/how-supplier-matching-works`.
 *
 * Two rules govern the wording, and both came out of the audit:
 *
 *   1. A policy page states what the site ACTUALLY DOES. Where a
 *      decision has not been made — the operating entity, the retention
 *      periods, the tax treatment, the renewal terms — the page says so
 *      and names the constraint. It does not publish a policy that does
 *      not exist, because a published policy is a promise and a promise
 *      nobody has approved is a defect the reader cannot see.
 *
 *   2. The wording lives here, not in the page files. The same rule
 *      described three different ways across the directory, the
 *      membership page and individual profiles was OG-A06. Eleven pages
 *      each inventing their own wording would repeat it eleven times.
 *
 * Every string exists in English and Arabic. The Arabic is written as
 * copy, not as chrome around English prose: an Arabic page that carries
 * an untranslated fragment is the OG-A13 defect class, and the
 * tree-wide text-integrity test fails on it.
 */

export interface PolicyPageCopy {
  en: string;
  ar: string;
}

export interface PolicySection {
  heading: PolicyPageCopy;
  body: PolicyPageCopy[];
}

export interface PolicyPage {
  /** The path, without the locale prefix. */
  path: string;
  /** The page title, used for the document title and the H1. */
  title: PolicyPageCopy;
  /** The one-line description under the title. */
  standfirst: PolicyPageCopy;
  /** The metadata description. */
  description: PolicyPageCopy;
  /**
   * What the page's statements rest on.
   *
   * The manifest's gate for a public policy route requires sources and a
   * reviewed date, so the page names the internal records it is derived
   * from and the date its content was last reviewed. Naming them is
   * honest: these are the site's own registers, not a bibliography of
   * outside literature.
   */
  basis: PolicyPageCopy;
  /** The date the page's content was last reviewed. */
  reviewedOn: string;
  /**
   * True when the page states the directory's live record counts.
   *
   * A count written into the copy is a count that goes stale. The
   * directory's published-record count changes the moment a second
   * supplier is documented, and a policy page that still said "one
   * record" would be making a claim the site had already outgrown. The
   * figures are read from the register at render time, so the page
   * cannot contradict the directory.
   */
  statesDirectoryCounts?: boolean;
  /** The sections the page is made of. */
  sections: PolicySection[];
}

/* -------------------------------------------------------------------------
 * 1. About OudGuide
 * ---------------------------------------------------------------------- */

const about: PolicyPage = {
  path: 'about',
  basis: {
    en: 'The twenty recorded decisions on the operating entity, billing, tax, data and introductions, and the three business records in the register.',
    ar: 'القرارات العشرون المسجَّلة حول الكيان التشغيلي والفوترة والضرائب والبيانات والتقديمات، وسجلات الأعمال الثلاثة في السجل.',
  },
  reviewedOn: '2026-10-21',
  title: {
    en: 'About OudGuide',
    ar: 'عن دليل العود',
  },
  standfirst: {
    en: 'What this site is, who runs it, and what it does not claim.',
    ar: 'ما هذا الموقع، ومن يديره، وما لا يدّعيه.',
  },
  description: {
    en: 'What OudGuide is: an independent reference on natural agarwood, a register of documented suppliers, and a neutral wholesale request service. What it does not claim.',
    ar: 'ما هو دليل العود: مرجع مستقل في العود الطبيعي، وسجل للموردين الموثقين، وخدمة حيادية لطلبات التوريد بالجملة. وما لا يدّعيه.',
  },
  sections: [
    {
      heading: {
        en: 'What this site is',
        ar: 'ما هذا الموقع',
      },
      body: [
        {
          en: 'OudGuide is three things that share one subject. The first is an encyclopedia of natural agarwood: how the resin forms, how it is distilled, how it is graded, and what the documents that govern its trade actually say. The second is a directory of suppliers, which records what each supplier says about itself and separates what has been checked from what has been declared. The third is a wholesale request service, where a buyer states a requirement and the platform routes it to named suppliers who have been approved to receive it.',
          ar: 'دليل العود ثلاثة أشياء تتقاسم موضوعاً واحداً. الأول موسوعة في العود الطبيعي: كيف يتكوّن الراتنج، وكيف يُقطَّر، وكيف يُقيَّم، وما الذي تقوله الوثائق المنظِّمة لتجارته فعلاً. الثاني دليل للموردين، يسجّل ما يقوله كل مورد عن نفسه ويفصل ما جرى التحقق منه عمّا صرّح به. الثالث خدمة لطلبات التوريد بالجملة، يذكر فيها المشتري متطلباته وتوجّهها المنصّة إلى موردين بالاسم مُعتمد لهم استلامها.',
        },
        {
          en: 'The encyclopedia and the directory are free and open to everyone. There is no subscription to read a guide, and no fee to browse the directory.',
          ar: 'الموسوعة والدليل متاحان مجاناً للجميع. لا اشتراك لقراءة دليل، ولا رسوم لتصفّح الدليل.',
        },
      ],
    },
    {
      heading: {
        en: 'Who runs it',
        ar: 'من يديره',
      },
      body: [
        {
          en: 'The site is operated by OudGuide. The legal operating entity, the registered office and the ownership disclosure are recorded as required before the site collects any data, and that work is not finished. Until it is, this site does not name a controller, does not claim a jurisdiction, and does not ask for the personal information that an identified controller would be obliged to handle under one.',
          ar: 'يدير الموقع جهة هي دليل العود. الكيان التشغيلي القانوني والمكتب المسجّل وإفصاح الملكية مسجَّلة كبنود مطلوبة قبل أن يجمع الموقع أي بيانات، ولم يُنجز ذلك العمل بعد. وإلى ذلك الحين لا يسمّي هذا الموقع جهةَ تحكم، ولا يدّعي اختصاصاً قضائياً، ولا يطلب البيانات الشخصية التي كانت جهةُ تحكم معرَّفة ستلزم بمعالجتها.',
        },
        {
          en: 'The relationship between this site and the businesses it lists is stated on its own page, and the one commercial link the site holds is disclosed in the advertising disclosures.',
          ar: 'العلاقة بين هذا الموقع والأعمال التي يدرجها مبيّنة في صفحة مستقلة لها، والعلاقة التجارية الوحيدة التي يحملها الموقع مُفصَحة في إفصاحات الإعلانات.',
        },
      ],
    },
    {
      heading: {
        en: 'What this site does not claim',
        ar: 'ما لا يدّعيه هذا الموقع',
      },
      body: [
        {
          en: 'It does not claim that it has visited a producer, tested a batch, or verified a laboratory result. A profile badge says what kind of record it is, and the verification page explains what each badge means and what each one does not mean.',
          ar: 'لا يدّعي أنه زار منتجاً أوختبر دفعة أو تحقّق من نتيجة مخبرية. وشارة الملف تقول نوع السجل الذي هو، وصفحة التحقق تشرح ما تعنيه كل شارة وما لا تعنيه.',
        },
        {
          en: 'It does not sell a verified supplier list, and paying for an annual membership does not buy a position in the directory, a ranking in search, or a verification.',
          ar: 'لا يبيع قائمة موردين موثّقين، ولا تشتري العضوية السنوية موقعاً في الدليل ولا ترتيباً في البحث ولا توثيقاً.',
        },
        {
          en: 'The commercial terms for a supplier introduction are not yet approved. The site says so rather than publishing a price and terms it has not settled.',
          ar: 'الشروط التجارية لتقديم مورد لم تُعتمد بعد. ويذكر الموقع ذلك بدل أن ينشر سعراً وشروطاً لم يستقر عليها.',
        },
      ],
    },
  ],
};

/* -------------------------------------------------------------------------
 * 2. Ownership and the Al Mutalib relationship
 * ---------------------------------------------------------------------- */

const ownership: PolicyPage = {
  path: 'about/ownership',
  basis: {
    en: 'The recorded decisions on the legal operating entity and ownership disclosure, the business records, and the rules for external links.',
    ar: 'القرارات المسجَّلة حول الكيان التشغيلي القانوني وإفصاح الملكية، وسجلات الأعمال، وقواعد الروابط الخارجية.',
  },
  reviewedOn: '2026-10-21',
  title: {
    en: 'Ownership and commercial relationships',
    ar: 'الملكية والعلاقات التجارية',
  },
  standfirst: {
    en: 'Who owns this site, who owns the businesses in it, and where the money flows.',
    ar: 'من يملك هذا الموقع، ومن يملك الأعمال فيه، وأين يتدفق المال.',
  },
  description: {
    en: 'Who owns OudGuide, which listed businesses are related to it, how a commercial relationship is disclosed, and which ownership facts are not yet established.',
    ar: 'من يملك دليل العود، وأي الأعمال المدرجة مرتبطة به، وكيف يُفصَح عن العلاقة التجارية، وأي حقائق ملكية لم يُثبَت بعد.',
  },
  sections: [
    {
      heading: {
        en: 'The three things that are kept apart',
        ar: 'الأشياء الثلاثة التي تُفرَّق بينها',
      },
      body: [
        {
          en: 'Three things are commonly confused in a directory of suppliers, and this site keeps them apart. Where a business is located is not the origin of the material it handles: a Dubai company that works with Cambodian agarwood is in the UAE and handles Cambodian material, and it is not a Cambodian producer. Where a business is located is not where it ships: the destinations a business is documented to serve are a separate list. And a business being a member is not a business being verified.',
          ar: 'ثلاثة أمور يخلط بينها عادةً دليل الموردين، ويفرّق بينها هذا الموقع. موقع الشركة ليس منشأ المادة التي تتعامل معها: شركة في دبي تعمل على العود الكمبودي هي في الإمارات وتتعامل مع مادة كمبودية، وليست منتجاً كمبودياً. وموقع الشركة ليس وجهات شحنها: الوجهات الموثَّق أن الشركة تخدمها قائمة منفصلة. وكون الشركة عضواً ليس كونها موثَّقة.',
        },
        {
          en: 'A business becomes a producer only when a facility that does the production is documented at a place. An address on a profile is never plotted as a producing facility.',
          ar: 'لا تصبح الشركة منتجاً إلا إذا وثِّق منشأة يؤدّي الإنتاج فعلاً في موقع ما. ولا يُرسَم عنوانٌ في ملف منشأة إنتاج.',
        },
      ],
    },
    {
      heading: {
        en: 'The commercial relationship',
        ar: 'العلاقة التجارية',
      },
      body: [
        {
          en: 'One business in the register, Al Mutalib Perfumes of Dubai, is related to this site. The relationship is disclosed rather than left for the reader to infer, and it is the only commercial link the site holds.',
          ar: 'أحد الأعمال في السجل، «المتالب للعطور» في دبي، مرتبط بهذا الموقع. تُفصَح هذه العلاقة بدل تركها للتخمين، وهي العلاقة التجارية الوحيدة التي يحملها الموقع.',
        },
        {
          en: 'The disclosure is a limitation on this site, not an advantage for that business. A paid membership does not buy a position in the results, does not buy a ranking in search, and does not buy a verification. The commercial terms for a supplier introduction are separate from the membership terms and have not been approved yet.',
          ar: 'هذا الإفصاح قيدٌ على الموقع لا ميزة لتلك الشركة. فالعضوية المدفوعة لا تشتري موقعاً في النتائج ولا ترتيباً في البحث ولا توثيقاً. وشروط تقديم الموردين التجارية منفصلة عن شروط العضوية ولم تُعتمد بعد.',
        },
        {
          en: 'The retail referral that the relationship carries is labelled as a commercial referral wherever it appears, and it is never used in the wholesale intake path. A request for supply stays on this site and reaches suppliers through the request service.',
          ar: 'الإحالة إلى المتجر التي تحملها هذه العلاقة تُوسم بأنها إحالة تجارية أينما ظهرت، ولا تُستخدم في مسار استقبال طلبات الجملة أبداً. فيبقى طلب التوريد على هذا الموقع ويصل إلى الموردين عبر خدمة الطلبات.',
        },
      ],
    },
    {
      heading: {
        en: 'What is not yet established',
        ar: 'ما لم يثبت بعد',
      },
      body: [
        {
          en: 'The legal operating entity, the registered office, the ownership structure and the invoicing entity are recorded as decisions that have to be taken and approved before this site collects data or takes payment. They are not stated here because they have not been decided, and a page that published an invented answer would be worse than a page that admits the question is open.',
          ar: 'الكيان التشغيلي القانوني والمكتب المسجّل وهيكل الملكية وجهة التصفير مسجَّلة قرارات يجب اتخاذها واعتمادها قبل أن يجمع الموقع بيانات أو يقبض مبلغاً. وهي غير مذكورة هنا لأنها لم تُقرَّر، وصفحة تنشر إجابة مُختلَقة أسوأ من صفحة تعترف بأن السؤال مفتوح.',
        },
      ],
    },
  ],
};

/* -------------------------------------------------------------------------
 * 3. Editorial policy
 * ---------------------------------------------------------------------- */

const editorialPolicy: PolicyPage = {
  path: 'editorial-policy',
  basis: {
    en: 'The editorial runbook, the twenty-five-source registry, and the corrections register.',
    ar: 'دليل التحرير، وسجل المصادر الخمسة والعشرين، وسجل التصحيحات.',
  },
  reviewedOn: '2026-10-21',
  title: {
    en: 'Editorial and source policy',
    ar: 'سياسة التحرير والمصادر',
  },
  standfirst: {
    en: 'What has to be true before a page is published, and what a source has to be.',
    ar: 'ما يجب أن يتحقق قبل نشر صفحة، وما يجب أن يكون المصدر.',
  },
  description: {
    en: 'The publication gates every guide has to clear, the two prose tiers, the source rules, the review record, and the corrections process.',
    ar: 'بوابات النشر التي يجب أن يجتازها كل دليل، ومستويات النص، وقواعد المصادر، وسجل المراجعة، وعملية التصحيحات.',
  },
  sections: [
    {
      heading: {
        en: 'What has to be true before a page is published',
        ar: 'ما يجب أن يتحقق قبل نشر صفحة',
      },
      body: [
        {
          en: 'Every route in the content register carries a publication gate, and a page is published only when it clears the gate its route declares. A guide needs a direct answer that addresses the question, sections that hold documented facts, sources that can be checked, limitations that state what the evidence does not settle, and a practical next step.',
          ar: 'كل مسار في سجل المحتوى يحمل بوابة نشر، ولا تُنشر الصفحة إلا إذا اجتازت البوابة التي يعلنها مسارها. ويحتاج الدليل إلى إجابة مباشرة تعالج السؤال، وأقسام تحمل وقائع موثّقة، ومصادر قابلة للتحقق، وحدود تبيّن ما لا تحسمه الأدلة، وخطوة تالية عملية.',
        },
        {
          en: 'There are two prose tiers. A question-specific guide has to clear a floor of six hundred words of main content. A reference page — a hub, a glossary entry, an origin or destination page — carries no word floor and is judged on whether its answer, its sources and its stated limitations are complete. The measure counts the direct answer, the section bodies, the lists, the callouts, the limitations and the next steps. It does not count navigation, the sources block, the worked example or the checklist, because a page that clears the floor on its furniture has not earned it.',
          ar: 'هناك مستويان للنص. على الدليل الذي يجيب سؤالاً محدداً أن يجتاز حداً أدنى من ستمئة كلمة من المحتوى الرئيس. أما صفحة المرجع — مركزاً أو مصطلحاً في المعجم أو صفحة منشأ أو وجهة — فلا تفرض عليها حداً أدنى من الكلمات، بل يُحكم عليها بكمال إجابتها ومصادرها وحدودها المعلنة. ويعدّ القياس الإجابة المباشرة ونصوص الأقسام والقوائم والتنبيهات والحدود والخطوات التالية. ولا يعدّ التنقل ولا كتلة المصادر ولا المثال التوضيحي ولا قائمة الأسئلة، لأن الصفحة التي تتجاوز الحد بأثاثها لم تكسبه.',
        },
        {
          en: 'The floor is enforced in the test suite rather than in a document. The corpus was below it once, and the test that now fails a short guide is what keeps it there.',
          ar: 'يُطبَّق الحد الأدنى في مجموعة الاختبارات لا في وثيقة. فكان المدونة دونه مرة، والاختبار الذي يُسقط الدليل القصير هو ما يبقيها فوقه.',
        },
      ],
    },
    {
      heading: {
        en: 'What a source has to be',
        ar: 'ما يجب أن يكون المصدر',
      },
      body: [
        {
          en: 'A published claim traces to a recorded authority: a botanical or taxonomic reference, a regulation or treaty text, a standard, or a documented field observation. The source registry records each one with its address, what it is used for, the date it was checked, and whether it is live. A source is cited for the claim it supports, and a page states its own limitations rather than letting the reader infer them.',
          ar: 'يتتبّع كل ادعاء منشور مصدراً مسجَّلاً: مرجعاً نباتياً أو تصنيفياً أو نصّاً لنظام أو لاتفاقية أو معياراً أو ملاحظة ميدانية موثّقة. ويسجّل سجل المصادر كل مصدر بعنوانه، وما يُستخدم لأجله، وتاريخ التحقق منه، وهل هو متاح. ويُستشهد بالمصدر للادعاء الذي يدعمه، وتذكر الصفحة حدودها بنفسها بدل ترك القارئ يستنتجها.',
        },
        {
          en: 'Prose from another publisher is never taken. Each guide on this site is written for it. Photography is restricted to images whose provenance and rights are confirmed; where an image cannot be cleared, the page carries a text placeholder instead of an unlicensed picture.',
          ar: 'لا يُنقل نصٌّ من ناشر آخر. فكل دليل في هذا الموقع مكتوب له. وتُقصر الصور على ما تأكد مصدره وحقوقه؛ وحيث لا يمكن ترخيص صورة، تحمل الصفحة بديلاً نصياً بدل صورة غير مرخّصة.',
        },
      ],
    },
    {
      heading: {
        en: 'The review record and the two languages',
        ar: 'سجل المراجعة واللغتان',
      },
      body: [
        {
          en: 'Every reviewed guide states its reviewer, the method used and the date it was reviewed. A guide that has not been reviewed is published as a research brief: it states the question, the intended scope and the evidence still to be collected, it is labelled as a brief, and it is not offered to search engines as an answer.',
          ar: 'كل دليل مراجَع يذكر مراجعه والمنهج المتبع وتاريخ المراجعة. وأي دليل لم يُراجَع يُنشر كمذكرة بحث: يذكر السؤال والنطاق المقصود والأدلة التي لا تزال قيد الجمع، ويوسم بأنه مذكرة، ولا يُقدَّم لمحركات البحث على أنه إجابة.',
        },
        {
          en: 'The Arabic tree is published and readable but not indexable. A human editorial review of the Arabic has not been carried out, so every Arabic page carries a directive asking crawlers not to index it. That rule is enforced in the one place every page builds its metadata, so a renderer cannot lose it by forgetting.',
          ar: 'الشجرة العربية منشورة ومقروءة لكنها غير قابلة للفهرسة. فالمراجعة التحريرية البشرية للعربية لم تُجرَ، ولذلك تحمل كل صفحة عربية توجيهاً للمحركات ألا تفهرسها. وهذه القاعدة مُطبَّقة في المكان الوحيد الذي تبني فيه كل صفحة بيانات وصفها، فلا يستطيع مُصيِّرٌ أن يفقدها بالنسيان.',
        },
      ],
    },
    {
      heading: {
        en: 'Corrections',
        ar: 'التصحيحات',
      },
      body: [
        {
          en: 'Any reader may submit a correction or an editorial note, free and without an account, naming the page and the evidence for the change. The corrections page states what happens to a note after it is sent.',
          ar: 'يستطيع أي قارئ تقديم تصحيح أو ملاحظة تحريرية، مجاناً ودون حساب، مع ذكر الصفحة والأدلة على التغيير. وتذكر صفحة التصحيحات ما يحدث للملاحظة بعد إرسالها.',
        },
      ],
    },
  ],
};

/* -------------------------------------------------------------------------
 * 4. What the profile labels mean
 * ---------------------------------------------------------------------- */

const verification: PolicyPage = {
  path: 'verification',
  statesDirectoryCounts: true,
  basis: {
    en: 'The contact projection policy, the verification record on each business, and the business register itself.',
    ar: 'سياسة إسقاط بيانات الاتصال، وسجل التحقق على كل عمل، وسجل الأعمال نفسه.',
  },
  reviewedOn: '2026-10-21',
  title: {
    en: 'What our profile labels mean',
    ar: 'ما تعنيه شارات الملفات',
  },
  standfirst: {
    en: 'Every badge on a supplier profile, and what it does not tell you.',
    ar: 'كل شارة على ملف مورد، وما لا تخبرك به.',
  },
  description: {
    en: 'The three profile states — owner-verified, seller-declared and unverified — the membership badge, the contact lock, and what each one does not mean.',
    ar: 'حالات الملف الثلاث — موثَّق من المالك، ومصرَّح من البائع، وغير موثَّق — وشارة العضوية وقفل الاتصال، وما لا يعنيه كل منها.',
  },
  sections: [
    {
      heading: {
        en: 'The three states of a factual record',
        ar: 'حالات السجل الوقائعي الثلاث',
      },
      body: [
        {
          en: 'A supplier profile carries facts. Some of them have been checked against a record, some have been declared by the supplier and not checked, and some have not been examined at all. The profile states which is which, for each field, rather than presenting the whole record as one undifferentiated claim.',
          ar: 'يحمل ملف المورد وقائع. بعضها جرى التحقق منه مقابل سجل، وبعضها صرّح به المورد دون تحقق، وبعضها لم يُفحص أصلاً. ويبيّن الملف أيّها هي أيّها، حقلاً حقلاً، بدل تقديم السجل كله على أنه ادعاء واحد غير مميّز.',
        },
        {
          en: 'Owner-verified means the owner claimed the profile and the ownership itself was confirmed against the supplier’s own records. It is a statement about ownership, not about the quality of the material. Seller-declared means the supplier told us the fact and we have not checked it. Unverified means the field has not been examined, which is not a criticism of the supplier — it is the normal state of a record that has not been through review.',
          ar: '«موثَّق من المالك» يعني أن المالك طالب بالملف وتأكدت الملكية نفسها مقابل سجلات المورد. وهو بيان عن الملكية لا عن جودة المادة. و«مصرَّح من البائع» يعني أن المورد أخبرنا بالواقعة ولم نتحقق منها. و«غير موثَّق» يعني أن الحقل لم يُفحص، وهو ليس انتقاداً للمورد بل الحالة الطبيعية لسجل لم يمر بالمراجعة.',
        },
      ],
    },
    {
      heading: {
        en: 'The membership badge is not a verification',
        ar: 'شارة العضوية ليست توثيقاً',
      },
      body: [
        {
          en: 'A paid annual membership lets a supplier publish the contact fields it has chosen — email, phone, WhatsApp or address — on its own profile. It does not make the supplier eligible for buyer data, it does not turn a seller’s claim into a documented fact, and it does not appear in the directory as a quality signal.',
          ar: 'تتيح العضوية السنوية المدفوعة للمورد نشر حقول الاتصال التي اختارها — بريداً إلكترونياً أو هاتفاً أو واتساب أو عنواناً — على ملفه. وهي لا تجعل المورد مؤهلاً للحصول على بيانات المشتري، ولا تحوّل ادعاء البائع إلى واقعة موثّقة، ولا تظهر في الدليل مؤشراً على الجودة.',
        },
        {
          en: 'A contact lock is the opposite statement. It means the record publishes no contact detail at all, including no website, because the owner has not released one.',
          ar: 'وقفل الاتصال هو البيان المعاكس. فهو يعني أن السجل لا ينشر أي بيانات اتصال، ولا حتى موقعاً إلكترونياً، لأن المالك لم يصرّح بواحد.',
        },
      ],
    },
    {
      heading: {
        en: 'The directory\u2019s published coverage',
        ar: 'تغطية الدليل المنشورة',
      },
      body: [
        {
          en: 'The directory says how many records it publishes and how many are still in review, rather than rounding up. The figures below are the live counts, read from the register when the page is rendered rather than written into this page, so they cannot go stale. The rest are records that have not been documented yet, and a directory that claims to hold hundreds of suppliers it cannot show is not a directory a buyer can rely on.',
          ar: 'يقول الدليل كم سجلاً ينشر وكم قيد المراجعة، بدل تقريب العدد إلى الأعلى. والأرقام أدناه هي الأعداد الحيّة، مقروءة من السجل وقت العرض لا مكتوبة في هذه الصفحة. وما عدا ذلك سجلات لم تُوثَّق بعد، والدليل الذي يدّعيأنه موردون بالمئات وهو لا يستطيع عرضهم ليس دليلاً يعتمد عليه المشتري.',
        },
      ],
    },
  ],
};

/* -------------------------------------------------------------------------
 * 5. How directory discovery works
 * ---------------------------------------------------------------------- */

const directoryHowItWorks: PolicyPage = {
  path: 'directory/how-it-works',
  basis: {
    en: 'The twenty-four role slugs, the three business records, and the published-route resolver that decides which addresses are served.',
    ar: 'معرّفات الأدوار الأربعة والعشرون، وسجلات الأعمال الثلاثة، ومُحلِّل المسارات المنشورة الذي يقرر أي العناوين تُخدَم.',
  },
  reviewedOn: '2026-10-21',
  title: {
    en: 'How directory discovery works',
    ar: 'كيف يعمل البحث في الدليل',
  },
  standfirst: {
    en: 'The five independent questions a buyer can ask, and what each one returns.',
    ar: 'الأسئلة الخمسة المستقلة التي يمكن للمشتري طرحها، وما يرجعه كل منها.',
  },
  description: {
    en: 'How the directory filters: material family, business role, location, origin handled and destination served are five independent questions, and each has its own URL.',
    ar: 'كيف يصفّي الدليل: صنف المادة ودور المورد والموقع والمنشأ الذي يتعامل معه والوجهة التي يخدمها خمسة أسئلة مستقلة، ولكلٍّ منها عنوانه.',
  },
  sections: [
    {
      heading: {
        en: 'Five questions, not one',
        ar: 'خمسة أسئلة لا سؤال واحد',
      },
      body: [
        {
          en: 'A buyer looking for agarwood oil has several different questions, and the directory answers them separately. What material is it? Who trades it — a distiller, a wholesaler, a retailer, a perfumery? Where is the business located? What origin of material does it work with? Which destinations is it documented to ship to? Combining these into a single filter was what made the directory misleading: a Dubai company handling Cambodian agarwood would appear under Cambodian production, and a buyer would conclude that Cambodian production was available in Dubai.',
          ar: 'للمشتري الذي يبحث عن دهن عود أسئلة مختلفة، ويجيب عنها الدليل على حدة. ما المادة؟ ومن يتاجر فيها — مقطّر أم تاجر جملة أم تاجر تجزئة أم عطار؟ أين يقع مقر الشركة؟ ومن أي منشأ تتعامل المادة؟ وإلى أي وجهات موثَّق أن تخدم؟ وجمع هذه في مرشِّح واحد هو ما جعل الدليل مضللاً: كانت شركة في دبي تتعامل مع العود الكمبودي تظهر تحت الإنتاج الكمبودي، فيستنتج المشتري أن الإنتاج الكمبودي متاح في دبي.',
        },
      ],
    },
    {
      heading: {
        en: 'Roles are recorded, not inferred',
        ar: 'الأدوار مسجَّلة لا مستنتجة',
      },
      body: [
        {
          en: 'A business record carries its roles as a list of controlled slugs — wholesalers, retailers, growers, distillers and twenty more. The human-readable category on the profile is a summary of those roles, and it is never parsed to work out what the business does. A reworded label would otherwise silently drop a business out of a listing it belongs to.',
          ar: 'يحمل سجل المورد أدواره قائمة من المعرّفات الخاضعة للضبط — تجار الجملة وتجار التجزئة والمزارعون والمقطّرون وعشرون غيرها. والصنف المقروء على الملف ملخّص تلك الأدوار، ولا يُحلَّل أبداً لمعرفة ما تفعله الشركة. فالصياغة المختلفة تُسقط الشركة من القائمة دون أن ينتبه أحد.',
        },
      ],
    },
    {
      heading: {
        en: 'Each combination has its own address',
        ar: 'كل تركيبة لها عنوانها',
      },
      body: [
        {
          en: 'The filters combine, and each combination is a real page with its own address rather than a redirect or a dead link: a role, a role located in a country, a role located in a city, a role shipping to a destination, a role working with an origin. An address that the site publishes therefore always resolves to the listing it names.',
          ar: 'تتجاور المرشِّحات، وكل تركيبة صفحة حقيقية لها عنوانها الخاص لا إعادة توجيه ولا رابط ميّت: دور، ودور في بلد، ودور في مدينة، ودور يشحن إلى وجهة، ودور يعمل مع منشأ. فكل عنوان ينشره الموقع يصل دائماً إلى القائمة التي يسمّيها.',
        },
      ],
    },
  ],
};

/* -------------------------------------------------------------------------
 * 6. Ranking and sponsorship policy
 * ---------------------------------------------------------------------- */

const rankingPolicy: PolicyPage = {
  path: 'directory/ranking-policy',
  basis: {
    en: 'The domain service that filters the register, and the rules for external links.',
    ar: 'خدمة المجال التي تصفّي السجل، وقواعد الروابط الخارجية.',
  },
  reviewedOn: '2026-10-21',
  title: {
    en: 'Directory ordering and sponsorship',
    ar: 'ترتيب الدليل والرعاية',
  },
  standfirst: {
    en: 'What decides the order of the results, and what money does not buy.',
    ar: 'ما يحدد ترتيب النتائج، وما لا يشتريه المال.',
  },
  description: {
    en: 'How directory results are ordered, what a paid membership does not buy, and how a commercial relationship is disclosed.',
    ar: 'كيف تُرتَّب نتائج الدليل، وما لا تشتريه العضوية المدفوعة، وكيف تُفصَح العلاقة التجارية.',
  },
  sections: [
    {
      heading: {
        en: 'The order the results come in',
        ar: 'الترتيب الذي تأتي به النتائج',
      },
      body: [
        {
          en: 'The directory does not run a paid ranking, and no position in it can be bought. The listing order follows the filters: within the records that match what was asked for, the order is the order the register holds them in. There is no sponsored slot, no "featured supplier" block, and no placement that a payment changes.',
          ar: 'لا يدير الدليل ترتيباً مدفوعاً، ولا يمكن شراء أي موقع فيه. ويتبع ترتيب القائمة المرشِّحات: فداخل السجلات المطابقة لما طُلب، الترتيب هو ترتيب السجل نفسه. ولا توجد خانة مرعاية ولا كتلة «مورد مميّز» ولا موضع يتغيّر بالدفع.',
        },
        {
          en: 'A paid membership publishes contact details on a supplier’s own profile and enables its partner access. It does not move the record up, and it is not a signal that is read as a ranking factor.',
          ar: 'العضوية المدفوعة تنشر بيانات الاتصال على ملف المورد نفسه وتتيح له الوصول الشريكي. وهي لا ترفع السجل ولا تُقرأ إشارةً بوصفها عاملاً في الترتيب.',
        },
      ],
    },
    {
      heading: {
        en: 'How a commercial relationship is disclosed',
        ar: 'كيف يُفصَح عن العلاقة التجارية',
      },
      body: [
        {
          en: 'The site holds one commercial relationship with a business in its register. It is disclosed on the ownership page and here. A referral to that business’s retail site is labelled as a commercial referral wherever it appears, is not used in the wholesale intake path, and does not affect the order of the results.',
          ar: 'يحمل الموقع علاقة تجارية واحدة مع عمل في سجله. وهي مُفصَحة في صفحة الملكية وفي هذه الصفحة. والإحالة إلى متجر ذلك العمل تُوسم بأنها إحالة تجارية أينما ظهرت، ولا تُستخدم في مسار استقبال طلبات الجملة، ولا تؤثر في ترتيب النتائج.',
        },
        {
          en: 'Links to a supplier’s own website on its profile are ordinary links to that supplier’s site. They carry no ranking credit and they are not a purchase of a better position.',
          ar: 'الروابط إلى الموقع الإلكتروني للمورد على ملفه روابط عادية إلى موقع ذلك المورد. وهي لا تحمل أي قيمة في الترتيب ولا تشتري موضعاً أفضل.',
        },
      ],
    },
  ],
};

/* -------------------------------------------------------------------------
 * 7. Terms of use
 * ---------------------------------------------------------------------- */

const terms: PolicyPage = {
  path: 'terms',
  basis: {
    en: 'The recorded decisions on billing, tax, renewal, retention and introduction terms, and the release policy that governs an introduction.',
    ar: 'القرارات المسجَّلة حول الفوترة والضريبة والتجديد والاحتفاظ وشروط التقديم، وسياسة الإفراج التي تحكم التقديم.',
  },
  reviewedOn: '2026-10-21',
  title: {
    en: 'Terms of use',
    ar: 'شروط الاستخدام',
  },
  standfirst: {
    en: 'The terms that are settled, and the ones that are not yet.',
    ar: 'الشروط المستقرة، وتلك التي لم تستقر بعد.',
  },
  description: {
    en: 'The terms of use for OudGuide: what the encyclopedia and directory are for, what a wholesale request means, and which terms are still awaiting approval.',
    ar: 'شروط استخدام دليل العود: ما وُسُعت الموسوعة والدليل لأجله، وما يعنيه طلب التوريد، وأي الشروط لا تزال بانتظار الاعتماد.',
  },
  sections: [
    {
      heading: {
        en: 'What the site offers',
        ar: 'ما يقدّمه الموقع',
      },
      body: [
        {
          en: 'The encyclopedia and the directory are provided for reference and for finding suppliers. Reading them is free. Nothing on this site is a guarantee of the quality, origin, legality or price of any material, and a record in the directory is not an endorsement of the supplier that holds it.',
          ar: 'تُقدَّم الموسوعة والدليل للاسترشاد وللعثور على موردين. وقراءتهما مجانية. ولا شيء في هذا الموقع ضمانٌ لجودة أي مادة أو منشئها أو مشروعيتها أو سعرها، وسجلٌ في الدليل ليس تأييداً للمورد الحائز عليه.',
        },
        {
          en: 'The trade documentation the encyclopedia describes is an explanation of what the instruments say. It is not legal advice, and it does not establish that a particular shipment is compliant. The exporter and the importer hold that judgement, in their own jurisdictions.',
          ar: 'وثائق التجارة التي تصفها الموسوعة شرحٌ لما تقوله الأدوات. وهي ليست استشارة قانونية، ولا تثبت أن شحنة بعينها مطابقة. والمصدِّر والمستورد يملكان هذا التقدير في اختصاصهما القضائي.',
        },
      ],
    },
    {
      heading: {
        en: 'What a wholesale request does and does not create',
        ar: 'ما يفعله طلب التوريد وما لا يفعله',
      },
      body: [
        {
          en: 'A request states a requirement. It is not an order, it is not an offer, and it does not create a contract with any supplier. The platform routes the request to suppliers who have been approved to receive it and who have a commercial entitlement to do so. Whether a supplier accepts, on what terms, and at what price is between the buyer and that supplier.',
          ar: 'الطلب يذكر متطلباً. وهو ليس أمراً ولا عرضاً ولا ينشئ عقداً مع أي مورد. وتوجّه المنصّة الطلب إلى موردين مُعتمد لهم استلامه وممن يملكون حقاً تجارياً لذلك. أما قبول المورد وشروطه وسعره فيتعلق بين المشتري وذاك المورد.',
        },
        {
          en: 'Your details are released to a supplier only after you approve that supplier by name for that request, and only for the fields and the channel you approved. You can withdraw that approval, and an introduction that has already been sent cannot be recalled.',
          ar: 'لا تُفصَح بياناتك لأي مورد إلا بعد أن تعتمد ذلك المورد بالاسم لهذا الطلب، وللحقول والقناة التي وافقت عليها. ويمكنك سحب موافقتك، أما التقديم الذي أُرسل فعلاً فلا يمكن سحبه.',
        },
        {
          en: 'Do not submit information to a request that you are not entitled to share, and do not submit another person’s details as your own.',
          ar: 'لا تُدخل في الطلب معلومات لا تملك حق مشاركتها، ولا تُدخل بيانات شخص آخر على أنها بياناتك.',
        },
      ],
    },
    {
      heading: {
        en: 'The terms that are not yet settled',
        ar: 'الشروط التي لم تستقر بعد',
      },
      body: [
        {
          en: 'The legal operating entity, the governing law and the jurisdiction, the invoicing entity and the tax treatment, the membership renewal and cancellation terms, the retention periods for request records, and the commercial terms and price for a supplier introduction have all been recorded as decisions that require approval before they can be published. They are stated as open here rather than published as settled.',
          ar: 'الكيان التشغيلي القانوني والقانون الحاكم والاختصاص القضائي وجهة التصفير والمعالجة الضريبية وشروط تجديد العضوية وإلغائها ومدد الاحتفاظ بسجلات الطلبات والشروط التجارية وسعر تقديم الموردين، جميعها مسجَّلة قرارات تحتاج إلى اعتماد قبل نشرها. وهي مذكورة هنا كبنود مفتوحة لا منشورة على أنها مستقرة.',
        },
        {
          en: 'Checkout is disabled. A membership is activated by a confirmed payment and by nothing else — not by reaching a payment page, not by a success message, and not by a browser request.',
          ar: 'الدفع معطَّل. وتُفعَّل العضوية بدفع مؤكد وبشيء غيره — لا ببلوغ صفحة دفع ولا برسالة نجاح ولا بطلب من المتصفح.',
        },
      ],
    },
  ],
};

/* -------------------------------------------------------------------------
 * 8. Cookies
 * ---------------------------------------------------------------------- */

const cookies: PolicyPage = {
  path: 'cookies',
  basis: {
    en: 'The inquiry store, the edge middleware and the operator session check — the three places where this site writes a cookie.',
    ar: 'مخزن الطلبات، ووسيط الحافة، وفحص جلسة المشغّل — المواضع الثلاثة التي يكتب فيها هذا الموقع ملف ارتباط.',
  },
  reviewedOn: '2026-10-21',
  title: {
    en: 'Cookie choices',
    ar: 'خيارات ملفات الارتباط',
  },
  standfirst: {
    en: 'Every cookie this site sets, and what it is for.',
    ar: 'كل ملف ارتباط يضعه هذا الموقع، ولأي غرض.',
  },
  description: {
    en: 'The cookies OudGuide sets: a locale preference, the operator session cookie, and the signed cookie that holds a buyer’s own request state. No advertising or analytics cookies.',
    ar: 'ملفات الارتباط التي يضعها دليل العود: تفضيل اللغة، وملف جلسة المشغّل، والملف الموقَّع الذي يحمل حالة طلب المشتري نفسه. ولا توجد ملفات إعلانية أو تحليلية.',
  },
  sections: [
    {
      heading: {
        en: 'The cookies this site sets',
        ar: 'ملفات الارتباط التي يضعها هذا الموقع',
      },
      body: [
        {
          en: 'Three, and no others. A locale cookie remembers which language you last chose, so the site can open in it. A session cookie holds the operator sign-in for the administrative workspace, and carries the digest of the access key rather than the key itself. A signed cookie holds your own request record, so that you can open the status of a request you submitted on a server that does not keep its memory between one visitor and the next.',
          ar: 'ثلاثة، لا غيرها. وملف لغة يتذكّر آخر لغة اخترتها ليفتح الموقع بها. وملف جلسة يحمل تسجيل دخول المشغّل لمساحة الإدارة، ويحمل بصمة مفتاح الوصول لا المفتاح نفسه. وملف موقَّع يحمل سجل طلبك أنت، لتتمكن من فتح حالة طلب قدّمته على خادم لا يحتفظ بذاكرته بين زائر وآخر.',
        },
      ],
    },
    {
      heading: {
        en: 'No advertising and no analytics',
        ar: 'لا إعلانات ولا تحليلات',
      },
      body: [
        {
          en: 'This site runs no advertising network, no analytics tracker and no third-party tag. No script on this site reads a cookie the visitor did not receive from this site, and no visitor data is sold or shared for advertising.',
          ar: 'لا يشغّل هذا الموقع شبكة إعلانات ولا أداة تحليل ولا وسماً من طرف ثالث. ولا يقرأ أي نص برمجي في هذا الموقع ملف ارتباط لم يتلقَّه الزائر من هذا الموقع، ولا تُباع بيانات الزوار ولا تُشارَك لأغراض إعلانية.',
        },
        {
          en: 'Two of the three cookies are necessary for the site to work at all. The locale cookie can be cleared by clearing cookies for this site, and the site will simply open in the default language next time.',
          ar: 'ملفان من الثلاثة ضروريان لعمل الموقع. ويمكن مسح ملف اللغة بمسح ملفات الارتباط لهذا الموقع، وسيفتح الموقع باللغة الافتراضية في المرة التالية.',
        },
      ],
    },
  ],
};

/* -------------------------------------------------------------------------
 * 9. Accessibility
 * ---------------------------------------------------------------------- */

const accessibility: PolicyPage = {
  path: 'accessibility',
  basis: {
    en: 'The editorial runbook, the page renderers, and the design system the components are built from.',
    ar: 'دليل التحرير، ومُصيِّرات الصفحات، ونظام التصميم الذي بُنيت منه المكوّنات.',
  },
  reviewedOn: '2026-10-21',
  title: {
    en: 'Accessibility statement',
    ar: 'بيان إمكانية الوصول',
  },
  standfirst: {
    en: 'What has been built for, what has been checked, and what has not.',
    ar: 'ما بُني لأجله، وما جرى فحصه، وما لم يجرِ.',
  },
  description: {
    en: 'The accessibility of OudGuide: the standards the site is built against, the measures in place, the known gaps, and how to report a barrier.',
    ar: 'إمكانية الوصول في دليل العود: المعايير التي بُني الموقع على أساسها، والتدابير الموجودة، والثغرات المعروفة، وكيفية الإبلاغ عن عائق.',
  },
  sections: [
    {
      heading: {
        en: 'The standard the site is built against',
        ar: 'المعيار الذي بُني الموقع على أساسه',
      },
      body: [
        {
          en: 'The site is built against the Web Content Accessibility Guidelines, at level AA as the target for contrast, focus visibility and the semantics of headings and form controls. It is a target, not a claim: this site has not been through a formal conformance audit by an independent reviewer, and it does not claim one.',
          ar: 'بُني الموقع على أساس إرشادات إتاحة محتوى الويب، بمستوى الاعتثال من الدرجة الثانية، هدفاً للتباين وظهور التركيز ودلالات العناوين وعناصر النموذج. وهو هدف لا ادّعاء: فلم يمرّ هذا الموقع بتدقيق مطابقة رسمي من مُراجع مستقل، ولا يدّعي ذلك.',
        },
      ],
    },
    {
      heading: {
        en: 'What is in place',
        ar: 'ما هو قائم',
      },
      body: [
        {
          en: 'The document language and the text direction are set on every page, so the Arabic tree is right-to-left rather than left-to-right with Arabic in it. Every image carries alternative text, form controls carry labels, interactive elements carry accessible names, and keyboard focus is visible on links, buttons and form fields.',
          ar: 'تُضبط لغة المستند واتجاه النص في كل صفحة، فشجرة العربية من اليمين إلى اليسار لا عربية داخل صفحة من اليسار إلى اليمين. وكل صورة تحمل نصاً بديلاً، وكل عنصر نموذج يحمل تسمية، وكل عنصر تفاعلي يحمل اسماً يمكن الوصول إليه، والتركيز بالقفزة كفاصل مرئي في الروابط والأزرار وحقول النماذج.',
        },
        {
          en: 'The Arabic and English versions of a page carry a link between them, and each page names its own canonical address so that a reader who arrives by search is told which one is the original.',
          ar: 'تحمل نسختا الصفحة العربية والإنجليزية رابطاً بينهما، وتذكر كل صفحة عنوانها الأصلي وحده، فيُقال لقارئ وصل عبر البحث أيّهما هو الأصل.',
        },
      ],
    },
    {
      heading: {
        en: 'What has not been done',
        ar: 'ما لم يُنجَز',
      },
      body: [
        {
          en: 'The site has not been tested with a screen reader across the whole tree, has not been tested at the extreme zoom levels a low-vision reader may use, and has not been tested with voice-control software. A rendered crawl of the site, as opposed to an audit of a sample of addresses, has not been carried out. Those are gaps, and they are stated here rather than implied away by the word "accessible".',
          ar: 'لم يُختبر الموقع بقارئ شاشة في الشجرة كلها، ولم يُختبر عند مستويات التقريب القصوى التي قد يستخدمها قارئ ضعيف البصر، ولم يُختبر ببرمجيات التحكم الصوتي. ولم يُجرَ زحف مُصيَّر للموقع كله، بل تدقيق لعينة من العناوين. وهذه ثغرات، وتُذكر هنا بدل أن يبتلعها لفظ «متاح».',
        },
      ],
    },
    {
      heading: {
        en: 'Reporting a barrier',
        ar: 'الإبلاغ عن عائق',
      },
      body: [
        {
          en: 'If something on this site stops you from reading it, the corrections form takes the note, and a barrier is treated as a defect rather than as an enquiry.',
          ar: 'إذا منعك شيء في هذا الموقع من قراءته، فإن نموذج التصحيحات يستقبل الملاحظة، وتُعامَل العوائق بوصفها عيباً لا استفساراً.',
        },
      ],
    },
  ],
};

/* -------------------------------------------------------------------------
 * 10. Advertising and commercial disclosures
 * ---------------------------------------------------------------------- */

const advertising: PolicyPage = {
  path: 'advertising',
  basis: {
    en: 'The rules for external links, the recorded decisions on pricing and introductions, and the business register.',
    ar: 'قواعد الروابط الخارجية، والقرارات المسجَّلة حول التسعير والتقديمات، وسجل الأعمال.',
  },
  reviewedOn: '2026-10-21',
  title: {
    en: 'Advertising and commercial disclosures',
    ar: 'الإعلانات والإفصاحات التجارية',
  },
  standfirst: {
    en: 'Every commercial relationship this site has, and how it is marked.',
    ar: 'كل علاقة تجارية يحملها هذا الموقع، وكيف تُوسم.',
  },
  description: {
    en: 'The commercial disclosures of OudGuide: the one business relationship it holds, how a referral is labelled, and what the site does not sell.',
    ar: 'الإفصاحات التجارية في دليل العود: علاقة الأعمال الوحيدة التي يحملها، وكيف تُوسم الإحالة، وما لا يبيعه الموقع.',
  },
  sections: [
    {
      heading: {
        en: 'The one relationship this site holds',
        ar: 'العلاقة الوحيدة التي يحملها هذا الموقع',
      },
      body: [
        {
          en: 'OudGuide is related to Al Mutalib Perfumes of Dubai, which is the one published record in the directory. The relationship is stated on the ownership page as well as here. A reader can therefore tell, before clicking anything, that the site and one of the businesses it lists are not independent of each other.',
          ar: 'دليل العود مرتبط بـ«المتالب للعطور» في دبي، وهو السجل المنشور الوحيد في الدليل. وهذه العلاقة مذكورة في صفحة الملكية وكذلك هنا. فيستطيع القارئ أن يعرف قبل الضغط على أي رابط أن الموقع وأحد الأعمال التي يدرجها ليسا مستقلَّين.',
        },
      ],
    },
    {
      heading: {
        en: 'How a commercial link is marked',
        ar: 'كيف تُوسم الرابط التجاري',
      },
      body: [
        {
          en: 'A referral to a partner’s retail site is labelled as a commercial referral wherever it appears, it opens in one clearly marked place rather than being scattered through the prose, and it is never used in the wholesale intake path. A link to a supplier’s own website on its profile is an ordinary link and is labelled as that supplier’s website.',
          ar: 'الإحالة إلى متجر شريك تُوسم بأنها إحالة تجارية أينما ظهرت، وتُفتح في موضع واحد موسوم بوضوح لا متناثرة في النص، ولا تُستخدم في مسار استقبال طلبات الجملة أبداً. أما رابط الموقع الإلكتروني للمورد على ملفه فهو رابط عادي موسوم بأنه موقع ذلك المورد.',
        },
        {
          en: 'Nothing on this site is an advertorial. The encyclopedia does not accept placement in exchange for a mention, and no supplier pays for a passage in a guide or for a place in the directory.',
          ar: 'لا شيء في هذا الموقع إعلانٌ مُموَّل. فالموسوعة لا تقبل إدراجاً مقابل ذكر، ولا يدفع أي مورد مقابل مقطع في دليل أو موضع في الدليل.',
        },
      ],
    },
    {
      heading: {
        en: 'What the site does not sell',
        ar: 'ما لا يبيعه الموقع',
      },
      body: [
        {
          en: 'It does not sell a place in the results, a verified badge, access to buyer contacts, or a supplier list. The annual membership is the only priced product, it is priced at one thousand two hundred dirhams a year before tax, and it grants exactly one thing: publication of the supplier’s own contact fields on its own profile.',
          ar: 'لا يبيع موضعاً في النتائج ولا شارة توثيق ولا وصولاً إلى بيانات اتصال المشترين ولا قائمة موردين. والعضوية السنوية هي المنتج الوحيد المسعَّر، وسعرها ألف ومئتا درهم سنوياً قبل الضريبة، ولا تمنح شيئاً واحداً: نشر حقول اتصال المورد على ملفه.',
        },
        {
          en: 'The commercial terms for a supplier introduction — including its price, its exclusivity and its refund terms — have not been approved, and are recorded as an open decision rather than published as a policy.',
          ar: 'الشروط التجارية لتقديم مورد — بما فيها سعره وحصريتها وشروط استرداده — لم تُعتمد، وهي مسجَّلة قراراً مفتوحاً لا منشورة سياسة.',
        },
      ],
    },
  ],
};

/* -------------------------------------------------------------------------
 * 11. How supplier matching works
 * ---------------------------------------------------------------------- */

const supplierMatching: PolicyPage = {
  path: 'how-supplier-matching-works',
  basis: {
    en: 'The release policy that decides whether a supplier receives a request, the sixty-seven-field request schema, and the permissions register.',
    ar: 'سياسة الإفراج التي تقرر ما إذا كان المورد يستلم طلباً، ومخطّط الطلبات ذو الحقول الواحد والسبعين، وسجل الصلاحيات.',
  },
  reviewedOn: '2026-10-21',
  title: {
    en: 'How supplier matching works',
    ar: 'كيف يعمل الربط مع الموردين',
  },
  standfirst: {
    en: 'Who receives your request, what they receive, and what they never receive.',
    ar: 'من يستلم طلبك، وما يستلمه، وما لا يستلمه أبداً.',
  },
  description: {
    en: 'How OudGuide routes a wholesale request: the approval step, the fields and channel a supplier receives, the recipient cap, and what a supplier never gets.',
    ar: 'كيف يوجّه دليل العود طلب التوريد: خطوة الاعتماد، والحقول والقناة التي يستلمها المورد، وسقف المستلمين، وما لا يصل إلى المورد أبداً.',
  },
  sections: [
    {
      heading: {
        en: 'The request is routed, not broadcast',
        ar: 'الطلب يُوجَّه ولا يُبَثّ',
      },
      body: [
        {
          en: 'A wholesale request is not posted on a forum and not sent to every supplier in the register. It is held, and it is matched against the records that could actually serve it — the product family the buyer wants, the material the business handles, the destinations it is documented to ship to, and whether it holds a commercial entitlement to receive an introduction. Suppliers that fail any of those are not offered the request.',
          ar: 'طلب التوريد لا يُنشر في منتدى ولا يُرسل إلى كل مورد في السجل. بل يُحفظ، ويُطابَق مع السجلات التي يمكنها فعلياً تلبيته — صنف المادة الذي يريده المشتري، والمادة التي تتعامل الشركة معها، والوجهات الموثَّق أنها تخدمها، وهل تملك حقاً تجارياً لاستلام تقديم. والموردون الذين لا يتحقق فيهم شرط من هذه لا يُعرض عليهم الطلب.',
        },
        {
          en: 'A supplier that the buyer selected by name gets that request, and only that request. The platform does not substitute another supplier in its place.',
          ar: 'المورد الذي اختاره المشتري بالاسم يستلم ذلك الطلب وحده. ولا تستبدل المنصّة مورداً آخر مكانه.',
        },
      ],
    },
    {
      heading: {
        en: 'You approve the recipient by name',
        ar: 'تعتمد المستلم بالاسم',
      },
      body: [
        {
          en: 'Before a supplier sees anything about your request, you approve that supplier by name, and the approval is recorded with the time and the fields and the channel you approved. Until you approve, the supplier is offered nothing. If you approve a second supplier, that is a second approval, and refusing one supplier does not affect the one you chose.',
          ar: 'قبل أن يرى أي مورد شيئاً عن طلبك، تعتمد ذلك المورد بالاسم، ويُسجَّل الاعتماد مع الوقت ومع الحقول والقناة التي وافقت عليها. وقبل اعتمادك لا يُعرض على المورد أي شيء. وإذا اعتمدت مورداً ثانياً، فذلك اعتماد ثانٍ، ورفضك مورداً لا يؤثر في المورد الذي اخترته.',
        },
        {
          en: 'You can withdraw an approval. An introduction that has already been sent cannot be recalled, because the supplier has already acted on it.',
          ar: 'يمكنك سحب الاعتماد. أما التقديم الذي أُرسل فعلاً فلا يمكن سحبه، لأن المورد قد تصرف بناءً عليه.',
        },
      ],
    },
    {
      heading: {
        en: 'What a supplier receives',
        ar: 'ما يستلمه المورد',
      },
      body: [
        {
          en: 'Only the fields and the channel you approved, for that request, for that supplier. The approved scope is checked at the moment of release, and a request for anything outside it is refused rather than trimmed silently.',
          ar: 'الحقول والقناة التي وافقت عليها فقط، لذلك الطلب، ولهذا المورد. ويُفحص النطاق المعتمد لحظة الإرسال، ويُرفض أي طلب خارج هذا النطاق بدل اقتطاعه بصمت.',
        },
        {
          en: 'A supplier does not receive your contact details by joining the directory, and does not receive another buyer’s details at all. It cannot export the request list, and it cannot resell or market with what it received.',
          ar: 'لا يستلم المورد بيانات اتصال المشتري بمجرد انضمامه إلى الدليل، ولا يستلم بيانات مشترٍ آخر إطلاقاً. ولا يستطيع تصدير قائمة الطلبات، ولا إعادة بيع ما استلمه أو تسويق به.',
        },
      ],
    },
    {
      heading: {
        en: 'The recipient cap and the approvals that are still pending',
        ar: 'سقف المستلمين والاعتمادات المعلَّقة',
      },
      body: [
        {
          en: 'The recommended default is that a request reaches at most three approved suppliers. That default is a recommendation and the number is not yet approved, so it is stated here as the default the platform applies rather than as a term of service.',
          ar: 'الافتراضي الموصى به أن يصل الطلب إلى ثلاثة موردين معتمدين على الأكثر. وهذا الافتراضي توصية، والرقم لم يُعتمد بعد، فذكر هنا كقيمة تطبّقها المنصّة لا كشرط في الخدمة.',
        },
        {
          en: 'The markets and channels enabled for an introduction, the identity and access contract for partners, the retention period for request records, and the commercial terms and price are all recorded as decisions that have to be approved before they can be published. Until they are, the request service states the constraints it does enforce — the named approval, the field scope, the channel scope, the expiry and the recipient cap — and does not pretend the rest is settled.',
          ar: 'الأسواق والقنوات المفعَّلة للتقديم، وهوية الشركاء وعقد الوصول، ومدة الاحتفاظ بسجلات الطلبات، والشروط التجارية والسعر — جميعها قرارات يجب اعتمادها قبل نشرها. وإلى ذلك الحين تذكر خدمة الطلبات القيود التي تطبّقها فعلاً — الاعتماد بالاسم، ونطاق الحقول، ونطاق القناة، وانتهاء الصلاحية، وسقف المستلمين — ولا تدّعي أن ما عدا ذلك مستقر.',
        },
      ],
    },
  ],
};

/* -------------------------------------------------------------------------
 * The set
 * ---------------------------------------------------------------------- */

/**
 * The eleven policy pages, in the order they are listed.
 */
export const POLICY_PAGES: PolicyPage[] = [
  about,
  ownership,
  editorialPolicy,
  verification,
  directoryHowItWorks,
  rankingPolicy,
  terms,
  cookies,
  accessibility,
  advertising,
  supplierMatching,
];

/**
 * The policy page for a path, or null when the path is not one of them.
 */
export function policyPageFor(path: string): PolicyPage | null {
  const clean = path.replace(/^\/+/, '').replace(/\/+$/, '');
  return POLICY_PAGES.find((p) => p.path === clean) ?? null;
}

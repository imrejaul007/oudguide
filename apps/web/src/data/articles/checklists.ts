/**
 * The comparison or checklist section.
 *
 * The route manifest's `required_sections` for an Editorial guide
 * includes "comparison or checklist" for 40 of the 41 editorial guide
 * routes. A guide that sets out a way of deciding something has to give
 * the reader the decision points, not only the reasoning.
 *
 * Each entry here is a short list of the things to check, in the order
 * a buyer would meet them. The list is attached to the article's first
 * section, so it appears as part of the method rather than as a
 * separate appendix.
 */
export interface Checklist {
  items: string[];
  itemsAr: string[];
}

export const CHECKLISTS: Record<string, Checklist> = {
  'quality/seller-defined-super-grades': {
    items: [
      'Ask what the label denotes in that supplier’s own terms, and get the answer in writing.',
      'Ask what the stated criteria are, and whether they are written down or a judgement.',
      'Ask which plant, which preparation and which batch the lot is, separately from the label.',
      'Compare the lots on the same day, by the same person, on the same attributes.',
      'Record the suppliers’ own words alongside your own scores, so the comparison can be revisited.',
    ],
    itemsAr: [
      'اسأل ما الذي تعنيه التسمية بمصطلحات المورد نفسه، واحصل على الجواب كتابةً.',
      'اسأل ما هي المعايير المذكورة، وهل هي مكتوبة أم هي تقدير.',
      'اسأل عن النبات والمعالجة والدفعة على حدة، بمعزل عن التسمية.',
      'قارن اللوطَين في اليوم نفسه وبنفس الشخص وعلى الصفات نفسها.',
      'سجّل كلمات الموردَين إلى جانب تقييمك، حتى تتاح مراجعة المقارنة لاحقاً.',
    ],
  },

  'quality/sinking-claims': {
    items: [
      'Put the piece in water yourself and record the result.',
      'Weigh it and compare with an unresinated piece of the same species and size.',
      'Ask what treatment the material received before it was offered.',
      'Ask for a batch record that states the treatment.',
      'Record the sinking result as an observation and the treatment as a disclosed fact.',
    ],
    itemsAr: [
      'ضع القطعة في الماء بنفسك وسجّل النتيجة.',
      'زنها وقارنها بقطعة غير محتوِ من النوع والحجم نفسيهما.',
      'اسأل عن المعالجة التي حُصلت عليها المادة قبل عرضها.',
      'اطلب سجل دفعة يذكر المعالجة.',
      'سجّل نتيجة الغطاس بوصفها ملاحظة، والمعالجة بوصفها واقعة مُعلَنة.',
    ],
  },

  'quality/age-claims': {
    items: [
      'Ask which age is meant: the tree, the wound, the resin formation, or the distillation.',
      'Ask what record supports the answer.',
      'Ask for the distillation date if the claim turns out to be about the tree.',
      'Ask how the oil has been stored since it was distilled.',
      'Record the claim with its basis, and the documented date separately.',
    ],
    itemsAr: [
      'اسأل أيّ عمرٍ يُقصد: الشجرة، أم الجرح، أم تكوّن الراتنج، أم التقطير.',
      'اسأل ما السجل الذي يسند الجواب.',
      'اسأل عن تاريخ التقطير إن تبيّن أن الادعاء عن الشجرة.',
      'اسأل كيف حُفظ الزيت منذ تقطيره.',
      'سجّل الادعاء مع أساسه، وسجّل التاريخ الموثّق على حدة.',
    ],
  },

  'quality/lab-report-reading': {
    items: [
      'Check whether the analysed sample was drawn at the works or supplied by the client.',
      'Check the method, and what the method does and does not detect.',
      'Check what the report says about origin, and note what it is silent on.',
      'Ask for the batch record that identifies the sample.',
      'Ask for the scope that covers the questions the report leaves open.',
    ],
    itemsAr: [
      'تحقق إن كانت العيّنة المحلَّلة سحبت من المعمل أم قدّمها العميل.',
      'تحقق من الطريقة، وما تكشفه الطريقة وما لا تكشفه.',
      'تحقق مما يقوله التقرير عن المنشأ، ودوّن ما سكت عنه.',
      'اطلب سجل الدفعة الذي يعرّف العيّنة.',
      'اطلب نطاقاً يغطي الأسئلة التي يتركها التقرير مفتوحة.',
    ],
  },

  'quality/batch-records': {
    items: [
      'An identifier that appears on the delivery paperwork.',
      'A date: produced, distilled or packed.',
      'A description: species, format and treatment.',
      'The party that handled it: producer, distiller or packer.',
      'A copy of the record kept with the retained sample.',
    ],
    itemsAr: [
      'معرّف يظهر على أوراق التسليم.',
      'تاريخ: الإنتاج أو التقطير أو التعبئة.',
      'وصف: النوع والشكل والمعالجة.',
      'الجهة التي تعاملت معه: المُنتِج أو المُقطِّر أو المُعبِّئ.',
      'نسخة من السجل محفوظة مع العيّنة المحتفظ بها.',
    ],
  },

  'quality/photo-evidence-limits': {
    items: [
      'Form: chip size, cut, and how the pieces break.',
      'Condition: clean, cracked, or oil-saturated on the surface.',
      'Comparison: two lots side by side under the same light.',
      'A photograph taken at dispatch, with the batch label in frame.',
      'A weight for one piece, so the image can be checked against something.',
    ],
    itemsAr: [
      'الشكل: حجم الرقائق وطريقة القطع وكيف تتكسر القطع.',
      'الحالة: نظيفة، أم متشققة، أم مشبعة بالزيت على السطح.',
      'المقارنة: لوطان جنباً إلى جنب تحت ضوء واحد.',
      'صورة عند الشحن، وبطاقة الدفعة ظاهرة فيها.',
      'وزن قطعة واحدة، حتى يمكن فحص الصورة مقابل شيء.',
    ],
  },

  'buying/net-weight-and-volume': {
    items: [
      'Net mass, gross mass, or volume — which is the price based on?',
      'The container tare, if the price is a gross figure.',
      'The carrier, and the proportion of actual distilled oil.',
      'Whose density is used to convert, and whether it is stated for this oil.',
      'A written record of the conversion, so the comparison can be repeated.',
    ],
    itemsAr: [
      'الكتلة الصافية أم الإجمالية أم الحجم — أيّها السعر مبني عليه؟',
      'وزن الوعاء، إن كان السعر وزناً إجمالياً.',
      'الحامل، ونسبة الزيت المقطّر الفعلي.',
      'كثافة مَن تُستعمل في التحويل، وهل هي مذكورة لهذا الزيت.',
      'سجل مكتوب للتحويل، حتى تتاح إعادة المقارنة.',
    ],
  },

  'buying/buying-bakhoor': {
    items: [
      'Is the oil a distillation, a blend, or an accord?',
      'Which wood, and was it infused before or after it became resinous?',
      'How much oil per unit of wood?',
      'What the piece smells like at a fresh break, not just on the surface.',
      'The content weight of the jar, not the weight of the jar.',
    ],
    itemsAr: [
      'هل الزيت تقطير أم مزيج أم أوز؟',
      'أي خشب، وهل أُشبِع قبل أن يصير راتنجياً أم بعده؟',
      'كم زيتاً لكل وحدة خشب؟',
      'ما رائحة القطعة عند الكسر الطازج، لا على السطح وحده.',
      'وزن المحتوى، لا وزن العبوة.',
    ],
  },

  'buying/wholesale-versus-retail': {
    items: [
      'Does the route give a product, or a documented purchase?',
      'Is there a batch identity and a record behind it?',
      'What does the quotation assume about quantity?',
      'Is a smaller first order possible, and on what basis?',
      'Can the samples from the exploration stage feed the volume order?',
    ],
    itemsAr: [
      'هل يعطي المسار منتجاً أم شراءً موثّقاً؟',
      'هل هناك هوية دفعة وسجل يسندها؟',
      'ما الذي يفترضه عرض السعر من حيث الكمية؟',
      'هل طلب أول أصغر ممكن، وعلى أي أساس؟',
      'هل يمكن لعينات مرحلة الاستكشاف أن تغذّي طلب الحجم؟',
    ],
  },

  'production/processing-location': {
    items: [
      'Where the wood grew.',
      'Where it was distilled.',
      'Where it was filled and packed.',
      'Which country’s export instrument covers it.',
      'Which country’s import treatment applies to it on arrival.',
    ],
    itemsAr: [
      'حيث نما الخشب.',
      'حيث قُطّر.',
      'حيث عُبِّئ وحُزِّر.',
      'أيّ بلد تغطيه أداة التصدير.',
      'أيّ بلد تنطبق عليه المعالجة عند الوصول.',
    ],
  },

  'trade/document-review-limits': {
    items: [
      'Does the permit match this consignment — species, quantity, origin and date?',
      'Is it for the form in front of you: wood, oil, or a finished product?',
      'What does the certificate of origin say, and what does it not say?',
      'What does the invoice establish, and what does it not?',
      'Is the question of what is inside the parcel still open?',
    ],
    itemsAr: [
      'هل يطابق التصريح هذه الشحنة — النوع والكمية والمنشأ والتاريخ؟',
      'هل هو للشكل الموجود أمامك: خشب، أم زيت، أم منتج منتهٍ؟',
      'ماذا تقول شهادة المنشأ، وماذا لا تقول؟',
      'ماذا تثبت الفاتورة، وماذا لا تثبت؟',
      'هل ما زال سؤال محتوى الطرد مفتوحاً؟',
    ],
  },

  'trade/shipping-wood-oil-perfume': {
    items: [
      'The wood and its plant-material rules.',
      'The oil and its preparation rules: composition, concentration, labelling.',
      'The fragrance and the rules for a formulated product.',
      'Whether the product contains agarwood at all, or an accord.',
      'Whether the three forms share one documentation or need three.',
    ],
    itemsAr: [
      'الخشب وقواعد المادة النباتية.',
      'الزيت وقواعد المستحضر: التركيب والتركيز والبيان.',
      'العطر وقواعد المنتج المركّب.',
      'هل يحتوي المنتج خشب عود أصلاً أم أوزاً.',
      'هل تتشارك الأشكال الثلاثة وثيقة واحدة أم تحتاج ثلاثاً.',
    ],
  },

  'sourcing/sample-to-bulk-matching': {
    items: [
      'The batch reference on the sample and the batch reference on the delivery — the same one?',
      'Whether the supplier will state the link between the two, in writing.',
      'What the delivery paperwork identifies.',
      'What the record says about the sample lot.',
      'If the link cannot be made, whether the order needs a fresh assessment.',
    ],
    itemsAr: [
      'مرجع الدفعة على العيّنة ومرجع الدفعة على التسليم — هل هما واحد؟',
      'هل يصرّح المورد بالصلة بينهما كتابةً.',
      'ماذا تعرّف أوراق التسليم.',
      'ماذا يقول السجل عن لوط العيّنة.',
      'وإن تعذّرت الصلة، هل يحتاج الطلب تقييماً جديداً.',
    ],
  },

  'sourcing/reading-a-quotation': {
    items: [
      'The specification: species, form, treatment, concentration.',
      'The quantity basis and the unit the price is in.',
      'The delivery terms, and what identifies the delivered material.',
      'The payment terms, and what happens if the price is not held.',
      'What happens to the quotation if the market moves.',
    ],
    itemsAr: [
      'المواصفة: النوع والشكل والمعالجة والتركيز.',
      'أساس الكمية والوحدة التي السعر بها.',
      'شروط التسليم، وما الذي يعرّف المادة المسلَّمة.',
      'شروط الدفع، وماذا يحدث إن لم يُحفظ السعر.',
      'ماذا يحدث لعرض السعر إذا تحرك السوق.',
    ],
  },

  'sourcing/minimum-order-quantities': {
    items: [
      'Which format the minimum applies to — oil, chips, or each separately.',
      'The minimum for each format, in writing.',
      'Whether it is a production batch, a packaging run, or a shipping threshold.',
      'Whether a smaller trial order is possible.',
      'What it costs to reorder, and whether the same minimum applies.',
    ],
    itemsAr: [
      'على أي شكل ينطبق الحد — الزيت، أم الرقائق، أم كلٌّ منهما على حدة.',
      'الحد لكل شكل، كتابةً.',
      'هل هو دفعة إنتاج أم جولة تغليف أم عتبة شحن.',
      'هل طلب تجريبي أصغر ممكن.',
      'كم تكلف إعادة الطلب، وهل يطبق الحد نفسه.',
    ],
  },

  'sourcing/supplier-origin-destination': {
    items: [
      'Where the business is located.',
      'Which origins it says it handles.',
      'Which destinations it is documented to ship to, for which product and as at which date.',
      'Whether it has a documented production facility in the origin it handles.',
      'Whether the three facts are recorded separately, or merged into one.',
    ],
    itemsAr: [
      'أين تقع المنشأة.',
      'أي الأصول تقول إنها تتعامل معها.',
      'إلى أي وجهات موثّق أنها تشحن، لأي منتج، وفي أي تاريخ.',
      'هل لها منشأ إنتاج موثّق في المنشأ الذي تتعامل معه.',
      'هل تُسجَّل الوقائع الثلاث منفصلة أم مدمجة في واحدة.',
    ],
  },

  'sourcing/business-evidence-checklist': {
    items: [
      'Has the owner confirmed control of the contact address?',
      'Which particulars have been independently checked?',
      'Which are the seller’s own statement?',
      'Has a named document been reviewed, and what does it establish?',
      'Is each field recorded with its state, rather than a single badge?',
    ],
    itemsAr: [
      'هل أكد المالك التحكم في عنوان الاتصال؟',
      'أيّ البيانات فُحصت بشكل مستقل؟',
      'وأيّها قول المورد نفسه؟',
      'هل روجعت وثيقة مسمّاة، وماذا تثبت؟',
      'هل كل حقل مسجّل بحالته، لا بشارة واحدة؟',
    ],
  },

  'using-oud/label-and-store-samples': {
    items: [
      'Your own identifier, the supplier, the material and the date.',
      'A duplicate of the label, kept with the sample.',
      'The batch reference where there is one, and a note where there is not.',
      'Sealed containers, dark for oil, cool for both, and apart from other fragrance materials.',
      'A one-line note of your own impression, written on the day.',
    ],
    itemsAr: [
      'معرّفك الخاص، واسم المورد، ووصف المادة، والتاريخ.',
      'نسخة من الملصق محفوظة مع العيّنة.',
      'مرجع الدفعة حيث وُجد، وملاحظة حيث لم يوجد.',
      'أوعية محكمة، والداكن للزيت، والبارد للاثنين، ومعزولة عن المواد العطرية الأخرى.',
      'ملاحظة سطر واحد عن تقديرك، مكتوبة في اليوم نفسه.',
    ],
  },

  'using-oud/reading-product-instructions': {
    items: [
      'Is there an intended-use statement, and on the label, the card or the documentation?',
      'Is the product for body contact?',
      'What is it intended for?',
      'Are there conditions attached, and are they specific?',
      'If there is no statement at all, ask the supplier before using it.',
    ],
    itemsAr: [
      'هل يوجد بيان استخدام مقصود، وعلى الملصق أم البطاقة أم الوثائق؟',
      'هل المنتج للملامسة المباشرة بالجسم؟',
      'ما الاستخدام المقصود منه؟',
      'هل هناك شروط مرفقة، وهل هي محددة؟',
      'وإن لم يوجد بيان إطلاقاً، فاسأل المورد قبل الاستعمال.',
    ],
  },

  'fragrance/concentration-labels': {
    items: [
      'What proportion of aromatic material does it contain?',
      'What are the actual materials?',
      'Is the oud a distillation, a blend, or an accord?',
      'Is it intended for skin?',
      'What do the notes describe, and what do they not declare?',
    ],
    itemsAr: [
      'ما نسبة المادة العطرية فيه؟',
      'ما المواد الفعلية؟',
      'هل العود تقطير أم مزيج أم أوز؟',
      'هل هو مخصص للبشرة؟',
      'ماذا تصف النوتات، وماذا لا تعلنه؟',
    ],
  },

  'fragrance/notes-versus-ingredients': {
    items: [
      'Is the oud a distillation, a blend, or an accord?',
      'Does the accord contain any agarwood at all?',
      'What is the material data for the product?',
      'What proportion of the accord is in the finished fragrance?',
      'Is the product intended for skin?',
    ],
    itemsAr: [
      'هل العود تقطير أم مزيج أم أوز؟',
      'هل يحتوي الأوز على أي خشب عود؟',
      'ما بيانات المواد للمنتج؟',
      'ما نسبة الأوز في العطر النهائي؟',
      'هل المنتج مخصص للبشرة؟',
    ],
  },

  'fragrance/oud-accords': {
    items: [
      'What the material is, stated plainly.',
      'What proportion of the accord is in the product.',
      'The conformity documentation, naming product, supplier and intended use.',
      'The material data for the accord itself.',
      'How the product behaves compared with a distillation.',
    ],
    itemsAr: [
      'ما المادة، مصرَّحاً بها بوضوح.',
      'ما نسبة الأوز في المنتج.',
      'وثائق المطابقة، مسمِّيةً المنتج والمورد والاستخدام المقصد.',
      'بيانات المواد للأوز نفسه.',
      'كيف يتصرف المنتج مقارنةً بالتقطير.',
    ],
  },

  'fragrance/bakhoor-versus-raw-wood': {
    items: [
      'Does it smell evenly at a fresh break, or only at the surface?',
      'Is there more weight than the chip size accounts for?',
      'Has the wood been infused, and when?',
      'Is the oil a distillation or an accord?',
      'What will actually be recovered if you distill it?',
    ],
    itemsAr: [
      'هل تفوح منه الرائحة بانتظا عند الكسر الطازج أم على السطح فقط؟',
      'هل الوزن أكبر مما يفسّره حجم الرقائق؟',
      'هل أُشبِع الخشب، ومتى؟',
      'هل الزيت تقطير أم أوز؟',
      'ما الذي سيُستعاد فعلاً إن قطّرته؟',
    ],
  },

  'fragrance/brand-and-manufacturing-origin': {
    items: [
      'Who owns the name.',
      'Who compounds the product.',
      'Where it is compounded and filled.',
      'What the documentation names, which is usually the manufacturer.',
      'Whether the brand and the manufacturer are disclosed as different parties.',
    ],
    itemsAr: [
      'من يملك الاسم.',
      'من يركّب المنتج.',
      'أين يُركَّب ويُعبَّأ.',
      'ماذا تسمّي الوثائق، وهي تسمّي المصنع عادةً.',
      'هل تُفصح العلامة والمصنع عن أنهما طرفا مختلفان.',
    ],
  },

  'fragrance/perfumers-and-credits': {
    items: [
      'Who is named: an individual, a house, or several people.',
      'Whether it covers the range or this product.',
      'Whether it survived a reformulation.',
      'What work the named person actually did.',
      'Whether the credit still matches the product in the bottle.',
    ],
    itemsAr: [
      'مَن ذُكر: شخص، أم دار، أم عدة أشخاص.',
      'هل يشمل الخط أم هذا المنتج.',
      'هل بقي بعد إعاد الصياغة.',
      'ما العمل الذي أداه المسمّى فعلاً.',
      'هل لا يزال الإسناد يطابق المنتج في القارورة.',
    ],
  },

  'collecting/documenting-a-collection': {
    items: [
      'What each piece is, as far as that can be told.',
      'The degree of the origin evidence: documented, remembered, or assumed.',
      'Any batch reference, shop name, or nothing at all.',
      'Where it has been kept and whether it has been treated.',
      'Whether the record would let a stranger identify it again.',
    ],
    itemsAr: [
      'ما كل قطعة بالقدر الذي يمكن معرفةه.',
      'درجة دليل المنشأ: موثّق، أو متذكَّر، أو مفترض.',
      'مرجع دفعة، أو اسم محل، أو لا شيء.',
      'أين حُفظت وهل عولجت.',
      'هل يسمح السجل لشخص غريب بالتعرف عليها مر أخرى.',
    ],
  },

  'comparisons/india-and-cambodia-oud': {
    items: [
      'The species behind each trade name.',
      'The growing region for each.',
      'The distillation method for each.',
      'The samples, assessed the same day by the same person.',
      'The basis for each origin claim, recorded separately from the comparison.',
    ],
    itemsAr: [
      'النوع خلف كل اسم تجاري.',
      'منطقة النمو لكل منهما.',
      'طريقة التقطير لكل منهما.',
      'العيّنات، مقيَّمة في اليوم نفسه وبنفس الشخص.',
      'أساس كل ادعاء منشأ، مسجَّلاً على حدة عن المقارنة.',
    ],
  },
};

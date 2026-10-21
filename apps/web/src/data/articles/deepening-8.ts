import type { Deepening } from './types.ts';

/**
 * The eighth deepening batch.
 *
 * Two guides that sat below the article tier’s 600-word floor:
 * one on documenting a personal collection, one on comparing the
 * Indian and Cambodian origin claims. Both additions stay on the
 * question the page asks, and both take up ground the corpus leaves
 * open — the mechanics of keeping a record, and the confounds in
 * comparing two materials against each other.
 */
export const DEEPENING_8: Record<string, Deepening> = {
  'collecting/documenting-a-collection': {
    sections: [
      {
        heading: 'Write the record so it still works without you',
        headingAr: 'اكتب السجل بحيث يظل نافعاً في غيابك',
        body: [
          'A collection record is read by people who were not there: a buyer, an appraiser, a relative, or you after a year has passed and the circumstances have faded. Write for that reader. The test is whether someone could read your entry and know what the piece is, where it came from, and what has happened to it, without being able to ask you a question.',
          'In practice that means dating every entry, describing a piece in terms the reader can see rather than in terms you know by heart, and expanding any abbreviation the first time it appears. "Shelf two, blue tin, bought at the old quarter" survives a move to another house. "Assam, the father’s lot" does not, because it depends on a chain of shared knowledge the record never states and the reader cannot recover.',
          'It also means keeping the record with the piece rather than only in a notebook, because a notebook and a piece come apart in ordinary ways: a house move, a change of filing system, a sale of part of the collection. Two copies in different places is not redundancy. It is what lets one copy be reconstructed from the other, and a record held in one place is one lost box away from nothing.',
        ],
        bodyAr: [
          'سجل المجموعة يقرؤه من لم يحضر: مشترٍ، أو مُثمِّن، أو أحد من العائلة، أو أنت بعد سنة حين تخفت تفاصيل الأحوال. فاكتب لمَن سيقرأ. والمعيار أن يستطيع من يقرأ مدخلك أن يعرف ما هي القطعة، ومن أين جاءت، وماذا حدث لها، من غير أن يضطر إلى سؤالك.',
          'وعملياً يعني ذلك أن ترقّم كل مدخل، وتصف القطعة بما يراه القارئ لا بما تعرفه أنت عن ظهر قلب، وأن تشرح أي اختصار عند أول ورود له. فعبارة «الرف الثاني، العلبة الزرقاء، اشتريناه من السوق القديم» تصمد عند الانتقال إلى بيت آخر. أما «أسام، دفعة أبي» فلا تصمد، لأنها تقوم على سلسلة من المعرفة المشتركة لا يوردها السجل ولا يستطيع القارئ استرجاعها.',
          'ويعني ذلك أيضاً أن يُحفظ السجل مع القطعة لا في دفتر وحده، لأن الدفتر والقطعة تنفصلان في أحوال عادية: نقل إلى بيت آخر، أو تغيير نظام الملفات، أو بيع جزء من المجموعة. والنسختان في موضعين ليستا تكراراً، بل هما ما يسمح بإعادة بناء إحداهما من الأخرى؛ وأما السجل الذي لا وجود له إلا في موضع واحد ففاصل بينه وبين العدم صندوق مفقود واحد.',
        ],
      },
      {
        heading: 'Record the searches that came to nothing',
        headingAr: 'سجّل البحثات التي لم تجب',
        body: [
          'Most of what a collector does not know, they do not know because nobody looked. A record that mentions only what was found leaves the reader unable to tell an unanswered question from an unasked one. Where a reference was looked for and not present — no invoice retained, nothing written on the container, no supplier name recalled — write that down. "No batch reference on the container; no invoice retained" is a finding, and a finding is different from silence.',
          'This costs a line and it changes the character of the file. It also stops the search being run twice: the next person, or you in a year’s time, knows the question has been asked and what the answer was, instead of starting again from nothing. A gap that is written down is a gap. A gap that is only remembered is an omission that will be made again.',
        ],
        bodyAr: [
          'أكثر ما لا يعرفه الجامع لا يعرفه لأن أحداً لم يبحث. والسجل الذي لا يذكر إلا ما وُجد لا يتيح للقارئ أن يميز بين سؤال لم يُجب عنه وسؤال لم يُطرح أصلاً. فحيث بُحث عن مرجع ولم يوجد — لا فاتورة محفوظة، ولا شيء مكتوب على الوعاء، ولا اسم مورد يُذكر — اكتب ذلك. فعبارة «لا مرجع دفعة على الوعاء، ولا فاتورة محفوظة» نتيجة، والنتيجة شيء غير الصمت.',
          'وهذا يكلّف سطراً واحداً ويغيّر طابع الملف. كما يمنع إعادة البحث: فالقارئ التالي، أو أنت بعد سنة، يعرف أن السؤال طُرح وما كان جوابه، بدل أن يبدأ من الصفر. والثغرة المكتوبة ثغرة، أما الثغرة التي لا تُذكر إلا في الذاكرة فهي نقص سيتكرر.',
        ],
      },
      {
        heading: 'Count what is there, so the record can be checked',
        headingAr: 'عدّ ما هو موجود، ليصحّح السجل',
        body: [
          'A record that describes a group rather than individual pieces cannot be checked. "Chips, bought at the old quarter" tells a reader nothing about whether the group is complete, and completeness is the first thing a buyer asks about a collection they cannot see. Count what is there, and record the count.',
          'For oil the same logic applies to the volume and to the containers, because a small bottle and a large one are both a bottle of oil. For a group of small pieces a weighed total is often more robust than a count, because a chip can be lost without anyone noticing while a change of weight shows up. Whichever figure you use, write it down on the day; a figure written from memory a year later is an estimate wearing the clothes of a measurement.',
        ],
        bodyAr: [
          'السجل الذي يصف مجموعةً لا قطعاً منفردة لا يمكن التحقق منه. فعبارة «رقائق، اشتريناها من السوق القديم» لا تقول للقارئ شيئاً عن اكتمال المجموعة، والاكتمال هو أول ما يسأله المشتري عن مجموعة لا يراها. فعدّ ما هو موجود، وسجّل العدد.',
          'على الزيت ينطبق المنطق نفسه على الحجم وعلى الأوعية، لأن القارورة الصغيرة والكبيرة كلتاهما قارورة زيت. وأما مجموعة القطع الصغيرة فالوزن الكلي أمتن من العدد في أحيان كثيرة، لأن قطعة صغيرة قد تضيع دون أن يلاحظها أحد بينما يظهر الفرق في الوزن. وأي رقم تستعمله فاكتبه في اليوم نفسه؛ فالرقم المكتوب من الذاكرة بعد سنة تقدير يرتدي ثوب القياس.',
        ],
      },
    ],
  },

  'comparisons/india-and-cambodia-oud': {
    sections: [
      {
        heading: 'Two samples differ in more than their origin',
        headingAr: 'العيّنتان تختلفان في أكثر من المنشأ',
        body: [
          'Two samples sold as Indian and Cambodian differ in at least four respects, and a comparison that records only the origin has not recorded enough to explain what it saw. The species differ. The distillation method may differ, and the copper deg tradition of one region is not the method of the other. The form may differ, since one may be a settled oil and the other a recent distillate. And the two reach the buyer at different ages, because oil ages on a seller’s shelf rather than to a schedule.',
          'The consequence is practical. If the method differs between the two samples, a difference in scent between them is not attributable to origin, and a comparison written up as though it were will mislead whoever reads it later. None of this argues against comparing; it argues for comparing on a stated basis. To get anything out of the comparison, either hold the method constant, or record it for both and say which differences the record can explain and which it cannot.',
        ],
        bodyAr: [
          'عيّنتان تُباعان على أنهما هندي وكمبودي تختلفان في أربعة أوجه على الأقل، ومقارنة لا تسجّل إلا المنشأ لم تسجّل ما يكفي لتفسير ما رآه المقارن. فالنوعان يختلفان. وطريقة التقطير قد تختلف، فتقليد القدّ النحاسي في أحد الإقليمين ليس طريقة الآخر. والشكل قد يختلف، فإحداهما قد تكون زيتاً مستقراً والأخرى ناتجاً حديثاً من التقطير. والاثنتان تصلان إلى المشتري في عمرين مختلفين، لأن الزيت يشيخ على رفّ البائع لا على جدول.',
          'والنتيجة عملية. فإذا اختلفت الطريقة بين العيّنتين، لم يكن اختلاف الرائحة بينهما منسوباً إلى المنشأ، والمقارنة المكتوبة وكأنها منسوبة ستضلّ من يقرؤها لاحقاً. وليس في هذا حجة ضد المقارنة، بل حجة على أن تُجرى على أساس معلن. ولكي تفيد المقارنة، يجب إما تثبيت الطريقة، أو تسجيلها للاثنين، وبيان أي الفروق يفسّره السجل وأيها لا يفسّره.',
        ],
      },
      {
        heading: 'The vocabulary of one trade does not carry into the other',
        headingAr: 'مفردات تجارةٍ لا تنتقل إلى الأخرى',
        body: [
          'Each of the two trades has its own vocabulary for the growing districts, the wood types, the customary treatments and the grades, and those vocabularies are local. A term that is precise to someone in one region is either unknown in the other or, worse, understood to mean something else. This is the ordinary way trade terms fail: not through a false claim but through a word that travelled without its meaning.',
          'So the first task in comparing the two is to establish what each side calls things, not to compare the words. Ask each supplier to describe the material in their own terms and write those terms down beside the translation. Where a term has no counterpart, record that it has none rather than substituting the nearest word, because the nearest word is where the error enters. A comparison written entirely in one side’s vocabulary will flatter that side, and the other material will be described in a language it does not speak.',
        ],
        bodyAr: [
          'لكل من التجارتين مفردات خاصة بها في مناطق النمو، وأنواع الخشب، والممارسات المعتادة، والدرجات، وهذه المفردات محلية. فاللفظ الدقيق عند إنسان في أحد الإقليمين إما مجهول في الآخر، أو أسوأ من ذلك، مفهوم على أنه شيء آخر. وهذه هي الطريقة المعتادة لفشل مصطلحات التجارة: لا بادعاء كاذب، بل بكلمة سافرت بلا معناها.',
          'فأولى ما ينبغي في المقارنة أن يُحسم ما يسمي كل طرف الأشياء به، لا أن تُقارن الكلمات. فاطلب من كل مورد أن يصف المادة بمصطلحاته، واكتب تلك المصطلحات إلى جانب الترجمة. وحيث لا مقابل لمصطلح، فسجّل أنه لا مقابل له بدل استبداله بأقرب لفظ، فأقرب لفظ هو مدخل الخطأ. والمقارنة المكتوبة كلها بمفردات طرف واحد تفضّل ذلك الطرف، وتوصف المادة الأخرى بلغة لا تتكلمها.',
        ],
      },
      {
        heading: 'Neither claim is easier to evidence than the other',
        headingAr: 'لا ادعاء أسهل إثباتاً من الآخر',
        body: [
          'It is tempting to treat the two claims as different in kind, one leaning on a long regional tradition and the other on a newer trade. In evidentiary terms they are the same. An origin claim, whichever region it names, rests on the same classes of record: the species, the growing area, whether the material was wild or cultivated, the method, and a chain that reaches the material without a gap. What differs between the two is the paperwork and the wording, not the standard.',
          'The consequence for a comparison is that neither side gets a shortcut. A Cambodian claim carried by a seller’s own description stands in the same position as an Indian claim carried the same way, and the two should be written up with the same degree of hedging. Where one side has more, say which one and say what the extra records establish — and keep the note of what was not established in the same file.',
        ],
        bodyAr: [
          'يغرى المرء بأن يرى ادعاءَي المنشأ مختلفين في الجنس، فيظن أن أحدهما يستند إلى تقليد إقليمي قديم والآخر إلى تجارة أحدث. لكنه من حيث الإثبات سواء. فادعاء المنشأ، أيّ الإقليمين سمّى، يقوم على أصناف السجل نفسها: النوع، ومنطقة النمو، وهل كانت المادة برية أم مستزرعة، وطريقة التقطير، وسلسلة تصل إلى المادة دون ثغرة. وما يختلف بين الاثنين هو الأوراق وصياغتها، لا المعيار.',
          'والنتيجة في المقارنة أن طرفاً لا يحصل على اختصار. فالادعاء الكمبودي الذي يحمله وصف البائع وحده في المؤر نفسه الذي يحمل فيه ادعاء هندي بوصف البائع وحده، وينبغي كتابة الاثنين بالقدر نفسه من التحفظ. وحين يمتلك أحدهما ما هو أكثر، فاذكر أيّهما وماذا تثبته السجلات الزائدة — واحتفظ بملاحظة ما لم يثبت في الملف نفسه.',
        ],
      },
    ],
  },
};

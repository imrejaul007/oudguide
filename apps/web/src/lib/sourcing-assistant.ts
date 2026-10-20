/**
 * OudGuide rule-based Sourcing Assistant.
 *
 * Pattern inspired by IndexOrbit's conversational AI search page, but
 * implemented deterministically over OudGuide's own reference registers
 * (249 territories, 772 route briefs, 67 conditional RFQ fields, and the
 * projected producer directory) so that it:
 *
 *   - needs no external AI provider or API key,
 *   - is fully reproducible and auditable, and
 *   - inherits the contact-projection privacy guard, because every producer
 *     result is read through the projected public listing, which already
 *     strips direct contact details under QA-007/008/010.
 *
 * The core is deliberately dependency-injected: `createSourcingAssistant`
 * takes the data source, so the pure logic can be unit-tested without
 * pulling in the Next.js bundler aliases.
 */

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export type AssistantIntent =
  | 'producer_lookup'
  | 'origin_lookup'
  | 'guide_lookup'
  | 'rfq_guidance'
  | 'authenticity'
  | 'cites'
  | 'pricing'
  | 'help';

/** A producer as seen by the assistant — always the redacted public shape. */
export interface AssistantProducer {
  id: string;
  slug: string;
  name: string;
  description?: string | null;
  city?: string | null;
  country_id?: string;
  country_name?: string | null;
  category?: string | null;
  product_families?: string[];
  verified_origins?: string[];
  contact_unlocked: boolean;
  minimum_order_quantity?: string | null;
  /**
   * Why this producer matched the query.
   * Ported from IndexOrbit's `matchReasons: string[]` in the service layer —
   * a search result that cannot explain itself forces the buyer to guess.
   */
  match_reasons?: string[];
}

export interface AssistantTerritory {
  iso2: string;
  iso3: string;
  english_seed: string;
  arabic_seed: string;
  role_status?: string;
}

export interface AssistantDataSource {
  listProducers(): AssistantProducer[];
  listTerritories(): AssistantTerritory[];
}

export interface AssistantResult {
  intent: AssistantIntent;
  answer: string;
  suggestions: string[];
  producers?: AssistantProducer[];
  references?: { label: string; href: string }[];
  facts?: { label: string; value: string }[];
}

/* ------------------------------------------------------------------ */
/* Intent detection                                                   */
/* ------------------------------------------------------------------ */

const INTENT_RULES: { intent: AssistantIntent; patterns: RegExp[] }[] = [
  {
    intent: 'authenticity',
    patterns: [
      /authentic|fake|counterfeit|adulterat|synthetic|how to (tell|verify)|real oud|spoof/i,
      /\b(scams?|bogus)\b/i,
      /مزيف|تزييف|أصالة|حقيقي|غش|احتيال|مضلل|(original|authentic)/i,
      /كيف (أتحقق|أتعرف|أعرف)|كيفية التحقق/i,
    ],
  },
  {
    intent: 'cites',
    patterns: [
      /cites|appendix|export (permit|licen|regulat)|quota|permissible/i,
      /سايتس|تصدير|تصريح|حصة|ملحق الثاني/i,
    ],
  },
  {
    intent: 'pricing',
    patterns: [
      /price|pricing|cost|how much|per (kg|tola|kilo)|rate|budget|expensive/i,
      /سعر|أسعار|تكلفة|بكم|كم يكلف|ميزانية/i,
    ],
  },
  {
    intent: 'rfq_guidance',
    patterns: [
      /rfq|inquir|request|quote|order|bulk|wholesale|supplier|distiller|manufacturer|want to buy|looking for/i,
      /طلب|توريد|تسعير|عرض سعر|مورد|مقطر|جملة|كمية|أريد|أحتاج|أبحث/i,
    ],
  },
  {
    intent: 'origin_lookup',
    patterns: [
      /\b(assam|bengal|khmerk|koh kong|trat|thailand|cambodia|indonesia|kalimantan|malaysia|laos|vietnam)\b/i,
      /أسام|بنغلاديش|كمبوديا|كوه كونغ|تايلاند|ترات|إندونيسيا|كاليمانتان|ماليزيا|لاوس|فيتنام/i,
    ],
  },
  {
    intent: 'producer_lookup',
    patterns: [
      /\b(who|which|where|find|search|directory|list|available|producer|farm|plantation)\b/i,
      /من|أين|ابحث|دليل|قائمة|متوفر|منتج|مزرعة|مستزرع/i,
    ],
  },
  {
    intent: 'guide_lookup',
    patterns: [
      /guide|learn|read|what is|how (do|does|to)|explain|documentation|methodolog/i,
      /دليل|اقرأ|تعلّم|ما هو|كيف|اشرح|توثيق|طريقة/i,
    ],
  },
];

export function detectIntent(query: string): AssistantIntent {
  const q = query.toLowerCase();
  for (const rule of INTENT_RULES) {
    if (rule.patterns.some((p) => p.test(q))) return rule.intent;
  }
  return 'help';
}

/* ------------------------------------------------------------------ */
/* Matching                                                            */
/* ------------------------------------------------------------------ */

/**
 * Origin hints used for matching.
 *
 * The producer records store origin strings in English ("India (Assam)",
 * "Cambodia (Koh Kong)"), so an Arabic query like "أسام" would match
 * nothing. Each hint therefore carries an English `key` used to test the
 * producer record, plus the Arabic/English aliases used to detect the term
 * in the user's query.
 */
const ORIGIN_HINTS: { key: string; label: string; aliases: string[] }[] = [
  { key: 'assam', label: 'Assam', aliases: ['assam', 'hijai', 'hojai', 'أسام', 'حوجاي', 'هوجاي'] },
  { key: 'meghalaya', label: 'Meghalaya', aliases: ['meghalaya', 'ميغالايا'] },
  { key: 'india', label: 'India', aliases: ['india', 'indian', 'هند', 'هندي', 'ال印度', 'الهند'] },
  { key: 'koh kong', label: 'Koh Kong', aliases: ['koh kong', 'khmerk', 'كوه كونغ', 'كمبوديا', 'كمبودي'] },
  { key: 'cambodia', label: 'Cambodia', aliases: ['cambodia', 'cambodian', 'كمبوديا'] },
  { key: 'trat', label: 'Trat', aliases: ['trat', 'ترات'] },
  { key: 'thailand', label: 'Thailand', aliases: ['thailand', 'thai', 'تايلاند', 'تايلاندي'] },
  { key: 'prachinburi', label: 'Prachinburi', aliases: ['prachinburi', 'براتشينبوري'] },
  { key: 'kalimantan', label: 'Kalimantan', aliases: ['kalimantan', 'borneo', 'كاليمانتان', 'بورنيو'] },
  { key: 'indonesia', label: 'Indonesia', aliases: ['indonesia', 'indonesian', 'إندونيسيا', 'اندونيسيا'] },
  { key: 'merauke', label: 'Merauke', aliases: ['merauke', 'مروكي'] },
  { key: 'sumatra', label: 'Sumatra', aliases: ['sumatra', 'سومترا'] },
  { key: 'malaysia', label: 'Malaysia', aliases: ['malaysia', 'malay', 'ماليزيا', 'ملايو'] },
  { key: 'laos', label: 'Laos', aliases: ['laos', 'لاوس'] },
  { key: 'vietnam', label: 'Vietnam', aliases: ['vietnam', 'vietnamese', 'فيتنام'] },
  { key: 'deira', label: 'Deira, Dubai', aliases: ['deira', 'dubai', 'ديرة', 'دبي'] },
  { key: 'oman', label: 'Muscat, Oman', aliases: ['oman', 'muscat', 'omán', 'عُمان', 'مسقط'] },
];

/**
 * Product-family hints. Same structure: `key` is the English fragment to
 * test against the producer's `product_families`, `aliases` detect the term
 * in the query.
 */
const FAMILY_HINTS: { key: string; label: string; aliases: string[] }[] = [
  { key: 'oud wood', label: 'Oud wood & chips', aliases: ['wood', 'chip', 'sinking', 'resin', 'خشب', 'رقائق', 'غطاس', 'راتنج'] },
  { key: 'oud oil', label: 'Pure Dehn Al Oud', aliases: ['oil', 'dehn', 'دهن', 'زيوت', 'زيت'] },
  { key: 'attar', label: 'Heritage attars', aliases: ['attar', 'عطر شرقي', 'عطور شرقية', 'مخلط'] },
  { key: 'perfume oil', label: 'Perfume oils', aliases: ['perfume oil', 'زيت عطر', 'زيوت عطرية'] },
  { key: 'finished perfume', label: 'Finished perfume', aliases: ['finished perfume', 'perfume', 'عطر منتهي', 'منتهية', 'تصنيع خاص'] },
  { key: 'bakhoor', label: 'Bakhoor & incense', aliases: ['incense', 'bakhoor', 'بخور', 'عود مبخر', 'مبخر'] },
  { key: 'oud', label: 'Oud (any form)', aliases: ['oud', 'عود'] },
];

/**
 * Strip every direct-contact field from a producer record.
 *
 * The public directory projection (QA-007/008/010) releases contact details
 * to entitled members. The assistant applies a STRICTER rule: it is a
 * discovery surface, never a contact surface. A producer's telephone,
 * email, WhatsApp number and street address must never appear in an
 * assistant response — not even for an annual member — because a chat
 * transcript is trivially copy-pasted and shared.
 *
 * The `contact_unlocked` flag is preserved so the UI can still say
 * "contact details available on request".
 */
export function stripContactFields(producer: AssistantProducer): AssistantProducer {
  const {
    email: _email,
    phone: _phone,
    whatsapp: _whatsapp,
    street_address: _street,
    ...safe
  } = producer as AssistantProducer & Record<string, unknown>;
  return safe as AssistantProducer;
}

/**
 * Rank producers against a free-text query using origin hints, product
 * family hints, and weak term overlap.
 */
export function rankProducers(
  query: string,
  producers: AssistantProducer[],
  limit = 4
): AssistantProducer[] {
  const q = query.toLowerCase();
  // A hint "hits" when any of its aliases appears in the query.
  const originHits = ORIGIN_HINTS.filter((h) => h.aliases.some((a) => q.includes(a)));
  const familyHits = FAMILY_HINTS.filter((h) => h.aliases.some((a) => q.includes(a)));

  const scored = producers.map((raw) => {
    // Strip contacts BEFORE any matching or output so they can never leak.
    const b = stripContactFields(raw);

    const haystack = [
      b.name,
      b.description ?? '',
      b.city ?? '',
      b.country_name ?? '',
      (b.verified_origins ?? []).join(' '),
      (b.product_families ?? []).join(' '),
    ]
      .join(' ')
      .toLowerCase();

    const reasons: string[] = [];
    let score = 0;

    // Origin match — the strongest signal for a terroir-driven trade.
    for (const hint of originHits) {
      const matchedOrigin = (b.verified_origins ?? []).find((o) =>
        o.toLowerCase().includes(hint.key)
      );
      if (matchedOrigin) {
        score += 10;
        reasons.push(`Origin: ${matchedOrigin}`);
      } else if (haystack.includes(hint.key)) {
        score += 10;
        reasons.push(`Located in ${hint.label}`);
      }
    }

    // Product family match.
    for (const hint of familyHits) {
      const matchedFamily = (b.product_families ?? []).find((f) =>
        f.toLowerCase().includes(hint.key)
      );
      if (matchedFamily) {
        score += 6;
        reasons.push(`Produces ${matchedFamily}`);
      } else if (haystack.includes(hint.key)) {
        score += 6;
        reasons.push(`Produces ${hint.label}`);
      }
    }

    // Availability of commercial samples.
    if (b.minimum_order_quantity) {
      score += 2;
      reasons.push(`MOQ: ${b.minimum_order_quantity}`);
    }

    // Entitled members can be contacted directly after buyer approval.
    if (b.contact_unlocked) {
      score += 3;
      reasons.push('Verified annual member — contact released after buyer approval');
    }

    // Weak term overlap.
    const terms = q.split(/[^a-z0-9]+/).filter((t) => t.length > 3);
    for (const t of terms) {
      if (haystack.includes(t)) {
        score += 2;
        if (reasons.length < 4) reasons.push(`Matches "${t}"`);
      }
    }

    return { b, score, reasons };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => ({
      ...s.b,
      match_reasons: Array.from(new Set(s.reasons)).slice(0, 4),
    }));
}

const GUIDE_CATALOG: { label: string; href: string; keywords: string[] }[] = [
  {
    label: 'What is Agarwood',
    href: '/guides/oud-basics/what-is-agarwood',
    keywords: ['agarwood', 'oud wood', 'what is', 'oud', 'resin', 'aquilaria', 'gyrinops', 'chip'],
  },
  {
    label: 'Wild vs Plantation',
    href: '/guides/wild-vs-cultivated',
    keywords: ['wild', 'plantation', 'cultivated', 'farmed', 'sustainable', 'inoculated'],
  },
  {
    label: 'Copper-Deg Alembic Distillation',
    href: '/guides/copper-deg-distillation',
    keywords: ['distill', 'distillation', 'alembic', 'copper', 'deg', 'steam', 'extraction', 'made'],
  },
  {
    label: 'CITES & Export Regulations',
    href: '/guides/cites-regulations',
    keywords: ['cites', 'export', 'permit', 'quota', 'regulation', 'legality', 'appendix', 'law'],
  },
];

export function rankGuides(query: string, limit = 4) {
  const q = query.toLowerCase();
  return GUIDE_CATALOG.map((g) => {
    let score = 0;
    for (const kw of g.keywords) if (q.includes(kw)) score += 5;
    // Partial keyword match, e.g. "distill" inside "distillation".
    for (const term of q.split(/[^a-z0-9]+/).filter((t) => t.length > 3)) {
      if (g.keywords.some((kw) => kw.includes(term) || term.includes(kw))) score += 2;
    }
    return { g, score };
  })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.g);
}

export function rankTerritories(
  query: string,
  territories: AssistantTerritory[],
  limit = 5
): AssistantTerritory[] {
  const q = query.toLowerCase();

  /**
   * ISO codes are 2-3 characters, so a plain `includes` would match them
   * anywhere in the query — "assam" contains "AS" (American Samoa) and
   * "AM" (Armenia). Require a word boundary instead.
   */
  const hasCode = (code: string) => {
    const c = code.toLowerCase();
    const pattern = new RegExp(`(^|[^a-z0-9])${c}([^a-z0-9]|$)`, 'i');
    return pattern.test(q);
  };

  return territories
    .map((c) => {
      let score = 0;
      if (hasCode(c.iso2)) score += 10;
      else if (hasCode(c.iso3)) score += 8;
      if (q.includes(String(c.english_seed).toLowerCase())) score += 8;
      if (q.includes(String(c.arabic_seed).toLowerCase())) score += 8;
      return { c, score };
    })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.c);
}

/* ------------------------------------------------------------------ */
/* Answer composition                                                 */
/* ------------------------------------------------------------------ */

const SUGGESTION_SETS: Record<AssistantIntent, string[]> = {
  producer_lookup: [
    'Which distillers ship aged Assam oud oil?',
    'Show me producers offering sinking-grade wood',
    'Who distils attar on Mysore sandalwood?',
  ],
  origin_lookup: [
    'What is special about Koh Kong oud?',
    'Compare Assam and Kalimantan terroir',
    'Which countries export oud under CITES?',
  ],
  guide_lookup: [
    'How is oud oil distilled?',
    'How do I spot fake agarwood?',
    'What does sinking grade mean?',
  ],
  rfq_guidance: [
    'How do I submit a wholesale RFQ?',
    'What information will the supplier see?',
    'How long does matching take?',
  ],
  authenticity: [
    'What is the most common oud fraud?',
    'How is GC-MS used to verify oil?',
    'Which CITES paperwork should I demand?',
  ],
  cites: [
    'Do I need a CITES permit to import oud?',
    'Which species are Appendix II listed?',
    'How are quotas allocated?',
  ],
  pricing: [
    'What determines oud oil price?',
    'Why is sinking wood more expensive?',
    'How is price per tola calculated?',
  ],
  help: [
    'How do I submit a wholesale RFQ?',
    'How do I spot fake agarwood?',
    'Who distils attar on Mysore sandalwood?',
  ],
};

/**
 * Build the assistant from a data source. The returned object exposes the
 * full API surface; the data source is captured in the closure.
 */
export function createSourcingAssistant(data: AssistantDataSource) {
  const matchProducers = (query: string, limit = 4) =>
    rankProducers(query, data.listProducers(), limit);

  const matchGuides = (query: string, limit = 4) => rankGuides(query, limit);

  function answerQuery(query: string, locale: string): AssistantResult {
    const intent = detectIntent(query);
    const isAr = locale === 'ar';
    const suggestions = SUGGESTION_SETS[intent];

    switch (intent) {
      case 'producer_lookup':
      case 'rfq_guidance': {
        const producers = matchProducers(query, 4);
        if (producers.length === 0) {
          return {
            intent,
            answer: isAr
              ? 'لم أجد منتجين مطابقين في الدليل الحالي. جرّب ذكر الإقليم (أسام، كوه كونغ، ترات، كاليمانتان) أو نوع الصنف، أو قدّم طلب توريد محايد لتوسيع نطاق الترشيح.'
              : 'No producers in the current directory matched that. Try naming a terroir (Assam, Koh Kong, Trat, Kalimantan) or a product family, or submit a neutral RFQ to widen the matching pool.',
            suggestions,
          };
        }

        const lines = producers.map((p) => {
          const families = p.product_families?.slice(0, 3).join(', ') || '—';
          const origins = p.verified_origins?.slice(0, 2).join(' · ') || '—';
          return `${p.name} — ${p.city ?? ''}${p.city ? ', ' : ''}${p.country_name ?? ''} · ${families} · ${origins}`;
        });

        // Match reasons — a result that cannot explain itself forces the
        // buyer to guess why it surfaced.
        const reasonBlocks = producers
          .filter((p) => p.match_reasons && p.match_reasons.length > 0)
          .map(
            (p) =>
              `• ${p.name}\n${p.match_reasons!.map((r) => `    — ${r}`).join('\n')}`
          )
          .join('\n');

        const reasonsText = isAr
          ? '\n\nلماذا تطابق كل منتج:\n\n'
          : '\n\nWhy each matched:\n\n';

        return {
          intent,
          answer: isAr
            ? `وجدت ${producers.length} منتجين مطابقين. جميع البيانات أدناه مصدرها من السجل العام الموثق:\n\n${lines.map((l) => `• ${l}`).join('\n')}${reasonsText}${reasonBlocks}\n\nلعرض بيانات الاتصال الكاملة، يجب أن يكون المورد عضواً سنوياً معتمداً، ويجب أن توافق على اسمه صراحةً بعد التحقق برمز OTP.`
            : `I found ${producers.length} matching producers. All of the below comes from the public verified registry:\n\n${lines.map((l) => `• ${l}`).join('\n')}${reasonsText}${reasonBlocks}\n\nFull contact details are only released to a supplier holding an active annual membership, and only after you explicitly approve them by name following OTP verification.`,
          suggestions,
          producers,
        };
      }

      case 'origin_lookup': {
        const territories = rankTerritories(query, data.listTerritories(), 4);
        if (territories.length === 0) {
          return {
            intent,
            answer: isAr
              ? 'يغطي السجل 249 دولة وإقليماً. حدّد الإقليم الذي تقصده — مثل أسام، كوه كونغ، ترات، أو كاليمانتان.'
              : 'The registry spans 249 countries and territories. Name the terroir you mean — Assam, Koh Kong, Trat, or Kalimantan, for example.',
            suggestions,
          };
        }
        const lines = territories.map((t) => `• ${t.english_seed} (${t.iso2} / ${t.iso3}) — ${t.role_status ?? 'Documented'}`);
        return {
          intent,
          answer: isAr
            ? `الأقاليم الموثقة مطابقةً لطلبك:\n\n${lines.join('\n')}\n\nتحتوي كل صفحة إقليمية على ملف نباتي ومرجع التصدير ودرجة الجاهزية العامة.`
            : `Documented territories matching your query:\n\n${lines.join('\n')}\n\nEach territory page carries its botanical profile, export references, and public readiness tier.`,
          suggestions,
          references: territories.map((t) => ({
            label: `${t.english_seed} (${t.iso2})`,
            href: `/world/${t.iso2}`,
          })),
        };
      }

      case 'guide_lookup': {
        const guides = matchGuides(query, 3);
        if (guides.length === 0) {
          return {
            intent,
            answer: isAr
              ? 'تتوفر 83 رسالة إرشادية موثقة. يمكنك تصفح الموسوعة الكاملة أو طرح سؤال محدد مثل: «كيف أتحقق من دهن العود؟»'
              : 'There are 83 documented editorial guides. You can browse the full encyclopedia, or ask something specific like "how do I verify oud oil?"',
            suggestions,
            references: [{ label: isAr ? 'الموسوعة الكاملة' : 'Full encyclopedia', href: '/guides' }],
          };
        }
        return {
          intent,
          answer: isAr
            ? `الرسائل الإرشادية ذات الصلة:\n\n${guides.map((g) => `• ${g.label}`).join('\n')}\n\nهذه الرسائل مستندة إلى المصادر النباتية الأولية ومراجع CITES المنشورة.`
            : `Relevant guides:\n\n${guides.map((g) => `• ${g.label}`).join('\n')}\n\nEach is sourced against primary botanical records and published CITES references.`,
          suggestions,
          references: guides.map((g) => ({ label: g.label, href: g.href })),
        };
      }

      case 'authenticity':
        return {
          intent,
          answer: isAr
            ? 'أشيع أربعة أشكال من الغش التجاري في العود:\n\n• خشب غطاس مزيف: حقن الرصاص أو الشمع في خشب منخفض الجودة. يُكشف بالأشعة السينية وفحص رائحة الاحتراق.\n• تخفيف بالبلاستيك (DPG) والمواد الكيميائية: يُكشف بتحليل GC-MS.\n• انتحال المنشأ النباتي: بيع A. crassna المستزرع على أنه A. agallocha البري من أسام.\n• وثائق تصدير سايتس مزورة: تُكشف بالمطابقة مع سجلات الغابات الوطنية.\n\nاطلب دائماً تحليل GC-MS ووثائق منشأ موثقة قبل أي دفعة كبيرة.'
            : 'The four most common commercial deceptions in oud:\n\n• Fake sinking wood: lead or wax injected into low-grade timber. Detected by X-ray and burning-aroma testing.\n• Plasticizer (DPG) and chemical adulteration: detected by GC-MS chromatography.\n• Misrepresented botanical origin: plantation A. crassna sold as wild Assam A. agallocha.\n• Fabricated CITES export documents: caught by cross-checking national forestry registries.\n\nAlways request a GC-MS panel and documented origin before any sizeable payment.',
          suggestions,
          references: [{ label: isAr ? 'دليل الأصالة الكامل' : 'Full authenticity guide', href: '/guides' }],
        };

      case 'cites':
        return {
          intent,
          answer: isAr
            ? 'تُدرج أنواع Aquilaria وGyrinops ضمن الملحق الثاني من اتفاقية سايتس. هذا يعني:\n\n• يلزم تصريح CITES قبل أي استيراد أو تصدير دولي.\n• يلزم تقييم «غيرضرار» (Non-Detriment Finding) لتأكيد أن الحصاد لا يهددبقاء النوع.\n• تُصدر بعض الدول حصصاً تصديرية سنوية تُدار مركزياً.\n\nنوثّق لوائح سايتس لكل من 249 دولة وإقليم في سجلنا.'
            : 'Aquilaria and Gyrinops species are listed on CITES Appendix II. In practice this means:\n\n• A CITES permit is required before any cross-border import or export.\n• A Non-Detriment Finding must confirm the harvest does not threaten the species.\n• Certain states administer annual export quotas centrally.\n\nWe document each CITES regulation across all 249 registered territories.',
          suggestions,
          references: [{ label: isAr ? 'لوائح سايتس' : 'CITES regulations', href: '/guides/cites-regulations' }],
        };

      case 'pricing':
        return {
          intent,
          answer: isAr
            ? 'تحدَّد أسعار العود عبر ثلاثة عوامل رئيسية:\n\n• كثافة الراتنج ودرجة الغطاس: الخشب الغاطس أثمن بكثير من الخشب الطافٍ في نفس منشأ الراتنج.\n• عمر التقطير وطريقة الاستخلاص: دهن النحاس التقليدي (Deg) أعلى قيمة من البخار الميكانيكي.\n• المنشأ وسجل التوثيق: المصدر الموثق بسجل CITES وسلسلة التوريد يرفع السعر.\n\nاطلب تسعيراً محدداً عبر نموذج RFQ المحايد للحصول على عروض من موردين مطابقين.'
            : 'Oud pricing is driven by three primary factors:\n\n• Resin density and sinking grade: sinking wood commands far more than floating wood from the same resin-bearing source.\n• Age of distillation and extraction method: traditional copper-deg is valued above mechanical steam.\n• Provenance and documentation trail: CITES-traceable origin and a documented supply chain raise the price.\n\nSubmit a neutral RFQ to receive comparable quotes from matched suppliers.',
          suggestions,
          references: [{ label: isAr ? 'تقديم طلب تسعير' : 'Request a quote', href: '/rfq' }],
        };

      case 'help':
      default:
        return {
          intent: 'help',
          answer: isAr
            ? 'المساعد يعمل على سجل OudGuide الموثق بالكامل: 249 دولة وإقليماً، 772 مسار بحثي، 67 مواصفة RFQ شرطية، ودليل المنتجين.\n\nيمكنني مساعدتك في:\n• تحديد المنتجين المطابقين لمتطلباتك\n• مقارنة الأقاليم وبصماتها الشمية\n• شرح طرق التقطير ودرجات التقييم\n• توضيح سياسات سايتس وحماية البيانات\n\nجرّب أحد الاقتراحات أدناه.'
            : 'The assistant reads OudGuide\'s complete documented register: 249 territories, 772 researched route briefs, 67 conditional RFQ specifications, and the producer directory.\n\nI can help you:\n• Match producers to your requirements\n• Compare terroirs and their olfactory signatures\n• Explain distillation methods and grading standards\n• Clarify CITES rules and the contact-protection policy\n\nTry one of the suggestions below.',
          suggestions,
        };
    }
  }

  return { answerQuery, matchProducers, matchGuides };
}

/* ------------------------------------------------------------------ */
/* Production instance                                                 */
/* ------------------------------------------------------------------ */

/**
 * The production instance lives in `sourcing-assistant-instance.ts` so that
 * this module stays free of bundler-alias imports and can be unit-tested
 * directly under the Node test runner. Application code should import
 * `answerQuery` from that module.
 */

import type { Article, ArticleRelated, ArticleSection, WorkedExample } from './types.ts';
import { WORKED_EXAMPLES } from './worked-examples.ts';

/**
 * A compact constructor for a reviewed guide.
 *
 * Every article in this layer carries the same furniture — a direct
 * answer, sections with an Arabic counterpart, sources, limitations, a
 * reviewer and a date. Writing that furniture out by hand for each
 * article invites the copy-paste error that produced the shared
 * fallback body in the first place, so the structure is declared once
 * here and each article supplies only its own substance.
 */

const REVIEWED_ON = '2026-10-20';
const REVIEWER = 'OudGuide editorial review';
const REVIEWER_AR = 'مراجعة تحريرية من دليل العود';
const REVIEW_METHOD =
  'Reviewed against the cited sources, checked for a question-specific answer, and checked that every assurance is either sourced or explicitly marked as a limitation.';
const REVIEW_METHOD_AR =
  'رُوجعت مقابل المصادر المذكورة، ودُقِّق أن لكل صفحة إجابة خاصة بسؤالها، وأن كل ادعاء إمّا مسنود بمصدر أو موسوم صراحةً كقيد.';

export interface SimpleGuideSpec {
  slug: string;
  kind?: Article['kind'];
  title: string;
  titleAr: string;
  summary: string;
  summaryAr: string;
  directAnswer: string;
  directAnswerAr: string;
  /** Section headings and bodies, in order. */
  sections: Array<{
    heading: string;
    headingAr: string;
    body: string[];
    bodyAr: string[];
    list?: string[];
    listAr?: string[];
    callout?: { title: string; titleAr: string; body: string; bodyAr: string };
  }>;
  sourceIds: string[];
  workedExample?: WorkedExample;
  /**
   * For the two original-data records (the grade-label catalogue and the
   * price observation baseline): declare them as data assets, so the page
   * also emits a Dataset schema from the same record.
   */
  dataset?: {
    variableMeasured: string[];
    /** The path where the machine-readable snapshot is served. */
    downloadPath?: string;
    /** A license statement, when OudGuide publishes one for this record. */
    license?: string;
  };
  /**
   * Mark a guide as an ordered procedure, so the page also emits a HowTo
   * schema whose steps are the guide's own sections.
   */
  howTo?: boolean;
  limitations: string;
  limitationsAr: string;
  nextSteps: string[];
  nextStepsAr: string[];
  related: ArticleRelated[];
  parent: string;
}

export function simpleGuide(spec: SimpleGuideSpec): Article {
  const sections: ArticleSection[] = spec.sections.map((s) => ({
    heading: s.heading,
    headingAr: s.headingAr,
    body: s.body,
    bodyAr: s.bodyAr,
    list: s.list,
    listAr: s.listAr,
    callout: s.callout,
  }));

  return {
    slug: spec.slug,
    kind: spec.kind ?? 'guide',
    state: 'reviewed',
    title: spec.title,
    titleAr: spec.titleAr,
    h1: spec.title,
    h1Ar: spec.titleAr,
    summary: spec.summary,
    summaryAr: spec.summaryAr,
    directAnswer: spec.directAnswer,
    directAnswerAr: spec.directAnswerAr,
    sections,
    sourceIds: spec.sourceIds,
    // A worked example is looked up by slug so that the example lives in
    // one table rather than being duplicated into each article.
    workedExample: spec.workedExample ?? WORKED_EXAMPLES[spec.slug],
    dataset: spec.dataset,
    howTo: spec.howTo,
    limitations: spec.limitations,
    limitationsAr: spec.limitationsAr,
    reviewer: REVIEWER,
    reviewerAr: REVIEWER_AR,
    reviewMethod: REVIEW_METHOD,
    reviewMethodAr: REVIEW_METHOD_AR,
    reviewedOn: REVIEWED_ON,
    nextSteps: spec.nextSteps,
    nextStepsAr: spec.nextStepsAr,
    related: spec.related,
    parent: spec.parent,
  };
}

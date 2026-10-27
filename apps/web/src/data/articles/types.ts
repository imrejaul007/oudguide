/**
 * The article schema.
 *
 * OG-A01 required one thing that the previous implementation did not have:
 * a place where a finished, question-specific body lives, separate from the
 * route manifest. The manifest holds *route candidates* — every one of its
 * 772 records carries `content_status: "Research/planning; no finished
 * article supplied"`. A planning brief is not an article, so the two are
 * now different types with different lifecycles.
 *
 * An `Article` here is a reviewed body. An `ArticleDraft` is a research
 * brief: published as a clearly labelled, non-indexable draft, never
 * presented as finished, never counted as coverage.
 */

export type ArticleKind = 'guide' | 'hub' | 'origin' | 'destination' | 'glossary' | 'product' | 'product-index';

/**
 * The editorial state of a piece of content.
 *
 * `reviewed`  — a finished body with a named reviewer and dated sources.
 * `draft`     — a research brief. Visible, clearly labelled, not indexable.
 */
export type ArticleState = 'reviewed' | 'draft';

export interface ArticleSource {
  id: string;
  /** How the source is described to a reader. */
  label: string;
  labelAr?: string;
  url: string;
  /** Who published it. */
  publisher: string;
  publisherAr?: string;
  /** When it was last retrieved and checked. */
  retrievedOn: string;
  /**
   * What this source does and does not establish.
   *
   * This is the field the audit was really asking for: OG-A18 and OG-A03
   * both found claims presented without a traceable evidence trail, and
   * OG-A03's acceptance criterion is that every review record names a
   * reviewer, date, method and scope. A citation without a scope is
   * decoration.
   */
  scope: string;
  scopeAr?: string;
  /**
   * How much weight the claim can carry.
   *
   * `primary`      — the authoritative instrument or the original study.
   * `regulatory`   — an official list, register or legal text.
   * `tertiary`     — a reviewed reference work, not a primary record.
   * `trade`        — published trade literature; useful, not a legal record.
   * `internal`     — OudGuide’s own record of what it checked.
   */
  kind: 'primary' | 'regulatory' | 'tertiary' | 'trade' | 'internal';
}

export interface ArticleSection {
  heading: string;
  headingAr?: string;
  /** Paragraphs. */
  body: string[];
  bodyAr?: string[];
  /** Optional bullet list. */
  list?: string[];
  listAr?: string[];
  /**
   * A short aside the reader should not skip — usually a caveat, a worked
   * example, or a "what this does not prove".
   */
  callout?: {
    title: string;
    titleAr?: string;
    body: string;
    bodyAr?: string;
  };
}

export interface ArticleRelated {
  /** Slug of another article in the content layer. */
  slug: string;
  /** A readable, contextual label. Never a raw route path. */
  label: string;
  labelAr?: string;
}

/**
 * A worked hypothetical example.
 *
 * The route manifest's `required_sections` for an Editorial guide
 * includes "worked hypothetical example" for 40 of the 41 editorial
 * guide routes. A guide that explains a method has to show the method
 * being applied, or the reader has to reconstruct it themselves.
 *
 * The example is hypothetical by design. It uses an invented buyer and
 * an invented lot, and it says so, because a worked example that
 * presented invented specifics as a real transaction would be exactly
 * the fabrication the audit found.
 */
export interface WorkedExample {
  /** The situation, stated plainly. */
  situation: string;
  situationAr?: string;
  /** The steps, each one showing the method being applied. */
  steps: string[];
  stepsAr?: string[];
  /** What the example shows, including what it does not show. */
  takeaway: string;
  takeawayAr?: string;
}

/**
 * Additional sections for an article.
 *
 * The editorial runbook's article tier asks for 600 words of main
 * content on a question-specific guide. Where a guide falls short, the
 * shortfall is closed with more of the thing the guide is about, not
 * with prose that repeats it.
 */
export interface Deepening {
  sections: ArticleSection[];
}

export interface Article {
  /** Path under `/en/guides/` with no leading or trailing slash. */
  slug: string;
  kind: ArticleKind;
  state: ArticleState;

  title: string;
  titleAr?: string;
  h1: string;
  h1Ar?: string;

  /**
   * The one-paragraph answer to the page’s question, written for a reader
   * who has just arrived from a search result. This is what the OG-A01
   * acceptance test compares between pages.
   */
  directAnswer: string;
  directAnswerAr?: string;

  /** Optional one-line summary for cards and related links. */
  summary: string;
  summaryAr?: string;

  sections: ArticleSection[];

  /**
   * A worked example, where the manifest's required_sections asks for
   * one. It is what turns an explanation into a method the reader can
   * repeat.
   */
  workedExample?: WorkedExample;

  /**
   * Sources for the page, as IDs into the shared source registry.
   *
   * Referencing by ID rather than inlining means a missing source is a
   * build and test failure rather than a silent gap: the registry is the
   * single place where a source’s scope is recorded, and the article
   * cannot point at a source that does not exist.
   */
  sourceIds: string[];

  /**
   * What is still not established. Required on every article — a page that
   * cannot state its own limitations has not been reviewed.
   */
  limitations: string;
  limitationsAr?: string;

  /**
   * A named, accountable reviewer with a stated method. OudGuide’s own
   * editorial review is named as such; no external expert is invented.
   */
  reviewer: string;
  reviewerAr?: string;
  reviewMethod: string;
  reviewMethodAr?: string;
  reviewedOn: string;

  /** What a reader can do next. */
  nextSteps: string[];
  nextStepsAr?: string[];

  /** Published sibling articles. Only slugs that exist may be listed. */
  related: ArticleRelated[];

  /**
   * Parent hub slug, used to build a breadcrumb. For a hub, its own parent.
   */
  parent?: string;
  parentLabel?: string;
  parentLabelAr?: string;

  /**
   * Optional grouping for hubs: the sub-sections a hub page lists.
   */
  children?: { slug: string; label: string; labelAr?: string; blurb: string; blurbAr?: string }[];

  /**
   * For origin/destination/glossary articles: the taxonomy key used to
   * look up the related country record.
   */
  taxonomyKey?: string;

  /**
   * Declares that this article is also a structured data asset.
   *
   * The two original-data records — the grade-label catalogue and the
   * price observation baseline — are not merely reviewed articles; they
   * are dated, citable datasets. A `Dataset` schema (built here from the
   * same record the page renders, so it cannot claim a variable the page
   * does not record) says that to a crawler in a way an `Article`
   * schema does not. It is additive: it stacks next to the Article
   * schema, it does not replace it.
   */
  dataset?: {
    /**
     * The variables the data asset records, as short English labels.
     * Each one must be a column the page actually publishes.
     */
    variableMeasured: string[];
    /**
     * The path under the host where the machine-readable snapshot is
     * served (e.g. `/data/gulf-price-baseline`). When present, the
     * Dataset schema's distribution points at it, and llms.txt links
     * to it. Omitted for a dataset that has no published file.
     */
    downloadPath?: string;
    /** A license statement for the record, when OudGuide publishes one. */
    license?: string;
  };

  /**
   * Marks a guide that is an ordered procedure, so the page also emits a
   * HowTo schema. The HowTo's steps are built from the article's own
   * sections in the renderer, so they cannot name a step the page does
   * not render — the same rule that governs the Dataset schema.
   */
  howTo?: boolean;
}

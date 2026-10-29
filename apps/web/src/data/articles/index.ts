import type { Article } from './types.ts';
import { basicsArticles } from './basics.ts';
import { qualityArticles } from './quality.ts';
import { hubArticles } from './hubs.ts';
import { originArticles } from './origins.ts';
import { glossaryArticles } from './glossary.ts';
import { qualityBuyingArticles } from './guides-quality.ts';
import { productionTradeArticles } from './guides-sourcing.ts';
import { usingFragranceArticles } from './guides-using.ts';
import { fragranceSourcingArticles } from './guides-fragrance.ts';
import { WORKED_EXAMPLES } from './worked-examples.ts';
import { CHECKLISTS } from './checklists.ts';
import { DEEPENING } from './deepening.ts';
import { DEEPENING_2 } from './deepening-2.ts';
import { DEEPENING_3 } from './deepening-3.ts';
import { DEEPENING_4 } from './deepening-4.ts';
import { DEEPENING_5 } from './deepening-5.ts';
import { DEEPENING_6 } from './deepening-6.ts';
import { DEEPENING_7 } from './deepening-7.ts';
import { DEEPENING_8 } from './deepening-8.ts';
import { sectionIndexArticles } from './section-indexes.ts';
import { gradeLadderArticles } from './quality-grade-ladder.ts';
import { productFamilyArticles } from './products.ts';
import { bakhoorFormsArticles } from './bakhoor-forms.ts';
import { originCountryArticles } from './origin-countries.ts';
import { originRegionArticles } from './origin-regions.ts';
import { originComparisonArticles } from './origin-comparisons.ts';
import { destinationGuideArticles } from './destination-guides.ts';
import { glossaryTermArticles } from './glossary-terms.ts';
import { seoGapPageArticles } from './seo-gap-pages.ts';
import { priceBaselineArticles } from './price-baseline-dataset.ts';
import { gradingSystemsReconciliationArticles } from './grading-systems-reconciliation.ts';
import { editorialGuideCollecting } from './editorial-guides-collecting.ts';
import { oudAuthenticityProtocolArticles } from './oud-authenticity-protocol.ts';
import { howToBuyOudArticles } from './how-to-buy-oud.ts';
import { gettingStartedWithOudArticles } from './getting-started-with-oud.ts';
import { editorialGuideOudBasics } from './editorial-guides-oud-basics.ts';
import { editorialGuideCulture } from './editorial-guides-culture.ts';
import { editorialGuideComparisons } from './editorial-guides-comparisons.ts';
import { editorialGuideQuality } from './editorial-guides-quality.ts';
import { editorialGuideUsingOud } from './editorial-guides-using-oud.ts';
import { editorialGuideBuying } from './editorial-guides-buying.ts';
import { editorialGuideSourcing } from './editorial-guides-sourcing.ts';
import { editorialGuideTrade } from './editorial-guides-trade.ts';
import { editorialGuideFragrance } from './editorial-guides-fragrance.ts';
import { editorialGuideProduction } from './editorial-guides-production.ts';
import { boyaAndFatOudArticles } from './boya-and-fat-oud-grades.ts';
import { vintageAndBurningArticles } from './vintage-and-burning-guides.ts';

/**
 * The reviewed content layer.
 *
 * Each entry is a finished, question-specific body. They are NOT route
 * briefs: the route manifest’s 772 records are all still marked
 * "Research/planning; no finished article supplied", and they stay that
 * way. This file is where reviewed work lives.
 *
 * Editorial rules applied to every article here:
 *
 *   - The `directAnswer` paragraph answers the page’s own question. It is
 *     not a restatement of the title and it is not shared between pages.
 *   - `limitations` says what the article does not establish. An article
 *     that cannot state its limitations has not been reviewed.
 *   - `sources` are real documents that were retrieved, each with a scope.
 *   - Claims that rest on a source’s *absence* (for example, that CITES
 *     Appendix II does not define a grading vocabulary) say so as such.
 *   - Nothing here asserts a field visit, a laboratory result, a peer
 *     review by a named external expert, or an absolute security
 *     guarantee. Those were the unsupported assurances the audit found.
 */

/**
 * The corpus.
 *
 * The worked example and the checklist are attached here, at the one
 * place the corpus is assembled, so that an article cannot be published
 * without the section the manifest requires for it — whichever file
 * happens to define it.
 */
function withRequiredSections(article: Article): Article {
  const workedExample = article.workedExample ?? WORKED_EXAMPLES[article.slug];
  const checklist = CHECKLISTS[article.slug];
  // A slug may appear in more than one deepening batch; the
  // batches are merged here, in file order, so a later batch
  // never silently drops an earlier batch's sections.
  const deepening = [
    DEEPENING,
    DEEPENING_2,
    DEEPENING_3,
    DEEPENING_4,
    DEEPENING_5,
    DEEPENING_6,
    DEEPENING_7,
    DEEPENING_8,
  ].find((batch) => batch[article.slug]);
  const deepeningSections = deepening ? deepening[article.slug].sections : [];

  if (!workedExample && !checklist && !deepening) return article;

  let sections = checklist
    ? article.sections.map((section, index) =>
        index === 0
          ? {
              ...section,
              list: [...(section.list ?? []), ...checklist.items],
              listAr: [...(section.listAr ?? []), ...(checklist.itemsAr ?? [])],
            }
          : section
      )
    : article.sections;

  if (deepening) {
    // The deepening sections go after the article's own sections and
    // before the worked example, so the reasoning comes first and the
    // demonstration of it follows.
    sections = [...sections, ...deepeningSections];
  }

  return { ...article, workedExample, sections };
}

export const articles: Article[] = [
  ...sectionIndexArticles,
  ...gradeLadderArticles,
  ...productFamilyArticles,
  ...bakhoorFormsArticles,
  ...originCountryArticles,
  ...originRegionArticles,
  ...originComparisonArticles,
  ...destinationGuideArticles,
  ...glossaryTermArticles,
  ...seoGapPageArticles,
  ...priceBaselineArticles,
  ...oudAuthenticityProtocolArticles,
  ...howToBuyOudArticles,
  ...gettingStartedWithOudArticles,
  ...gradingSystemsReconciliationArticles,
  ...editorialGuideCollecting,
  ...editorialGuideOudBasics,
  ...editorialGuideCulture,
  ...editorialGuideComparisons,
  ...editorialGuideQuality,
  ...editorialGuideUsingOud,
  ...editorialGuideBuying,
  ...editorialGuideSourcing,
  ...editorialGuideTrade,
  ...editorialGuideFragrance,
  ...editorialGuideProduction,
  ...boyaAndFatOudArticles,
  ...vintageAndBurningArticles,
  ...basicsArticles,
  ...hubArticles,
  ...qualityArticles,
  ...originArticles,
  ...glossaryArticles,
  ...qualityBuyingArticles,
  ...productionTradeArticles,
  ...usingFragranceArticles,
  ...fragranceSourcingArticles,
].map(withRequiredSections);

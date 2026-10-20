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

export const articles: Article[] = [
  ...basicsArticles,
  ...hubArticles,
  ...qualityArticles,
  ...originArticles,
  ...glossaryArticles,
  ...qualityBuyingArticles,
  ...productionTradeArticles,
  ...usingFragranceArticles,
  ...fragranceSourcingArticles,
];

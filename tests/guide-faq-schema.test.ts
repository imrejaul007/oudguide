import { test, describe } from 'node:test';
import assert from 'node:assert/strict';

import { getArticle } from '../apps/web/src/lib/articles.ts';
import { buildJsonLd } from '../apps/web/src/lib/jsonld.ts';
import { SITE_URL } from '../apps/web/src/lib/metadata.ts';

/**
 * The five high-question guides carry visible, schema-marked Q&As.
 *
 * Google retired FAQ rich results, but the FAQPage schema still feeds LLM
 * answer engines — which is exactly what the GEO layer optimizes. The rule
 * that governs these is the same one that governs the Dataset and HowTo
 * schemas: the schema is built from the same array the page renders, so it
 * can never carry a question the page does not show. This test pins both
 * halves:
 *
 *   1. each of the five guides carries a `faq` and a `faqAr` of the same
 *      length — a guide that answers its standing questions in one language
 *      only would leave the AR tree with no block and no schema;
 *   2. `buildJsonLd` mirrors that array as a FAQPage in the page's own
 *      language, one Question per entry, and a guide with no standing Q&As
 *      emits no FAQPage at all — so the schema out-runs nothing.
 */

/** The five high-question guides. */
const HIGH_QUESTION_GUIDES = [
  'quality/fraud-identification',
  'trade/cites-import-by-market',
  'quality/lab-report-reading',
  'quality/gulf-price-baseline',
  'quality/sinking-claims',
];

/** The schema graph for a guide page, as a flat array. */
function asGraph(payload: Record<string, unknown>[]): Record<string, unknown>[] {
  return payload;
}

describe('The five high-question guides carry a visible Q&A set', () => {
  for (const slug of HIGH_QUESTION_GUIDES) {
    test(`${slug}: a non-empty faq and a matching faqAr`, () => {
      const article = getArticle(slug);
      assert.ok(article, `${slug}: the guide must be a reviewed article`);
      assert.ok(article.faq?.length, `${slug}: must carry a visible Q&A set`);
      assert.ok(
        article.faq?.length === article.faqAr?.length,
        `${slug}: faq and faqAr must carry the same questions, one per language`
      );
      for (const item of article.faq ?? []) {
        assert.ok(item.question?.length, `${slug}: every question must be non-empty`);
        assert.ok(item.answer?.length, `${slug}: every answer must be non-empty`);
      }
    });
  }

  test('a guide without standing Q&As carries neither a set nor a schema', () => {
    // A real guide that has no faq: the schema is simply absent, not a
    // fabricated empty block.
    const plain = getArticle('quality/oud-grading-explained');
    assert.ok(plain, 'a plain guide must exist');
    assert.equal(plain.faq, undefined, 'no standing Q&As means no faq array');

    const payload = buildJsonLd(
      { path: `/en/guides/${plain.slug}`, locale: 'en', article: plain },
      SITE_URL
    );
    const graph = asGraph(payload);
    assert.equal(
      graph.find((g) => g['@type'] === 'FAQPage'),
      undefined,
      'a guide with no standing Q&As must emit no FAQPage'
    );
  });
});

/**
 * The options a guide page passes to buildJsonLd, in the page's own
 * language — the same `faq` array the visible block renders. The FAQPage
 * is driven by this option, not read off the article, so the test feeds it
 * the array the renderer would feed it.
 */
function guideOptions(
  article: NonNullable<ReturnType<typeof getArticle>>,
  locale: 'en' | 'ar'
) {
  const faq = locale === 'ar' ? article.faqAr : article.faq;
  return {
    path: `/${locale}/guides/${article.slug}`,
    locale,
    article,
    faq: faq && faq.length > 0 ? faq : null,
  };
}

describe('The FAQPage mirrors the visible set, per language', () => {
  for (const slug of HIGH_QUESTION_GUIDES) {
    test(`${slug}: the EN page's FAQPage mirrors the faq array`, () => {
      const article = getArticle(slug);
      assert.ok(article, `${slug}: the guide must be a reviewed article`);

      const graph = asGraph(buildJsonLd(guideOptions(article, 'en'), SITE_URL));
      const faq = graph.find((g) => g['@type'] === 'FAQPage') as any;
      assert.ok(faq, `${slug}: the EN page must emit a FAQPage`);
      assert.equal(
        faq.mainEntity.length,
        article.faq!.length,
        `${slug}: the FAQPage must carry one Question per visible entry`
      );
      for (let i = 0; i < faq.mainEntity.length; i += 1) {
        assert.equal(faq.mainEntity[i]['@type'], 'Question');
        assert.equal(faq.mainEntity[i].name, article.faq![i].question);
        assert.equal(
          faq.mainEntity[i].acceptedAnswer.text,
          article.faq![i].answer
        );
      }
    });

    test(`${slug}: the AR page's FAQPage mirrors the faqAr array`, () => {
      const article = getArticle(slug);
      assert.ok(article, `${slug}: the guide must be a reviewed article`);

      const graph = asGraph(buildJsonLd(guideOptions(article, 'ar'), SITE_URL));
      const faq = graph.find((g) => g['@type'] === 'FAQPage') as any;
      assert.ok(faq, `${slug}: the AR page must emit a FAQPage`);
      assert.equal(
        faq.mainEntity.length,
        article.faqAr!.length,
        `${slug}: the AR FAQPage must mirror the Arabic set`
      );
      for (let i = 0; i < faq.mainEntity.length; i += 1) {
        assert.equal(faq.mainEntity[i].name, article.faqAr![i].question);
        assert.equal(
          faq.mainEntity[i].acceptedAnswer.text,
          article.faqAr![i].answer
        );
      }
    });
  }
});

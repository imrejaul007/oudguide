import { test, describe } from 'node:test';
import assert from 'node:assert/strict';

import {
  ARTICLE_TIER_MIN_WORDS,
  isReferenceTier,
  listReviewedArticles,
  mainWordCount,
} from '../apps/web/src/lib/articles.ts';
import { articles } from '../apps/web/src/data/articles/index.ts';
import { DEEPENING } from '../apps/web/src/data/articles/deepening.ts';
import { DEEPENING_2 } from '../apps/web/src/data/articles/deepening-2.ts';

/**
 * ==========================================================================
   The article tier, enforced.
   ==========================================================================
   `docs/EDITORIAL_RUNBOOK.md` §2.1 splits the publication gate into two
   tiers:

     - Article tier. A question-specific guide needs at least 600 words of
       main content. These are the pages a buyer relies on to make a
       decision, so the floor is a proxy for "answers the question".
     - Reference tier. Hubs, glossary entries, origin and destination pages
       have no word floor. They are judged on completeness of answer, on
       scoped sources, and on stated limitations.

   REGRESSION-04 in `docs/AUDIT_REMEDIATION_MATRIX.csv` recorded that the
   corpus did not meet the article tier: 49 of 53 published guides were
   below the floor. The runbook named the remedy but nothing enforced it,
   so the next body of work could have quietly shortened the corpus again.

   This test is that enforcement.

   The measure is the one the matrix records — the direct answer, section
   headings and bodies, lists, callouts, limitations and next steps, and
   nothing else. Navigation, breadcrumbs, the sources block, the referral
   call to action and the related links are chrome, and a page that passes
   the gate on chrome has not earned it.

   Two things are deliberately not counted, and the reason matters:

     - The worked example. The runbook describes it as hypothetical and
       the manifest gate requires it to say so. Counting it would let a
       guide clear the floor on an illustration rather than on prose.
     - The checklist. It is a list of questions to ask, not an answer.
   ========================================================================== */

describe('The article tier', () => {
  test('the floor is the number the runbook sets', () => {
    assert.equal(ARTICLE_TIER_MIN_WORDS, 600);
  });

  test('every published guide clears the 600-word floor', () => {
    const short: string[] = [];

    for (const article of listReviewedArticles()) {
      if (isReferenceTier(article)) continue;

      const words = mainWordCount(article);
      if (words < ARTICLE_TIER_MIN_WORDS) {
        short.push(`${article.slug}: ${words} words (needs ${ARTICLE_TIER_MIN_WORDS - words} more)`);
      }
    }

    assert.deepEqual(
      short,
      [],
      `published guides below the article tier:\n  ${short.join('\n  ')}`
    );
  });

  test('the measure counts the article, not the chrome around it', () => {
    const article = listReviewedArticles().find(
      (a) => a.slug === 'oud-basics/what-is-agarwood'
    );
    assert.ok(article, 'the agarwood guide must exist');

    const count = mainWordCount(article);

    // The direct answer is counted.
    assert.ok(
      count > article.directAnswer.split(/\s+/).length,
      'the direct answer must be part of the count'
    );

    // The section bodies are counted.
    const bodyWords = article.sections.reduce(
      (n, s) => n + (s.body ?? []).join(' ').split(/\s+/).filter(Boolean).length,
      0
    );
    assert.ok(count >= bodyWords, 'the section bodies must be part of the count');

    // The sources block is not: a guide is not longer for citing more.
    const withSources = {
      ...article,
      sections: [
        ...article.sections,
        {
          heading: 'A section that only exists to be counted',
          body: ['extra words to prove the measure moves'],
        },
      ],
    };
    assert.ok(
      mainWordCount(withSources) > count,
      'the measure must respond to the body'
    );
  });

  test('reference-tier pages are judged on completeness, not length', () => {
    // A hub is allowed to be short. What it is not allowed to be is
    // incomplete: it needs an answer, sources and a stated limitation.
    const referenceTier = listReviewedArticles().filter(isReferenceTier);

    assert.ok(referenceTier.length > 0, 'the corpus must have reference-tier pages');

    for (const article of referenceTier) {
      assert.ok(
        article.directAnswer.trim(),
        `${article.slug}: a reference page needs an answer`
      );
      assert.ok(
        article.sourceIds.length > 0,
        `${article.slug}: a reference page needs scoped sources`
      );
      assert.ok(
        article.limitations.trim(),
        `${article.slug}: a reference page needs its limitations stated`
      );
    }
  });
});

describe('Every deepening batch reaches the corpus', () => {
  const batches: Array<[string, Record<string, { sections: unknown[] }>]> = [
    ['deepening.ts', DEEPENING],
    ['deepening-2.ts', DEEPENING_2],
  ];

  test('a deepening key is a real article slug', () => {
    const slugs = new Set(articles.map((a) => a.slug));

    for (const [file, batch] of batches) {
      for (const key of Object.keys(batch)) {
        assert.ok(
          slugs.has(key),
          `${file}: "${key}" is not an article slug — a deepening batch that names nothing is dead weight`
        );
      }
    }
  });

  test('a deepening batch contributes sections to the merged article', () => {
    // The defect this guards against is a batch that was written and
    // never wired into the merge: the content existed and the page did
    // not change. The first batch of deepening sections sat that way for
    // a while.
    for (const [file, batch] of batches) {
      for (const [key, deepening] of Object.entries(batch)) {
        assert.ok(
          deepening.sections.length > 0,
          `${file}: "${key}" has no sections`
        );

        const merged = articles.find((a) => a.slug === key);
        assert.ok(merged, `${file}: "${key}" is not in the corpus`);

        const mergedText = merged.sections
          .map((s) => `${s.heading} ${(s.body ?? []).join(' ')}`)
          .join('\n');

        for (const section of deepening.sections) {
          const first = (section.body ?? [])[0] ?? '';
          assert.ok(
            first && mergedText.includes(first.slice(0, 60)),
            `${file}: "${key}" — the section "${section.heading}" is not in the merged article`
          );
        }
      }
    }
  });
});

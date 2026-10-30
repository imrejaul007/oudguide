import { test, describe } from 'node:test';
import assert from 'node:assert/strict';

import {
  ARABIC_HUMAN_REVIEW_COMPLETE,
  isIndexable,
  isIndexableInLocale,
  listReviewedArticles,
} from '../apps/web/src/lib/articles.ts';
import { buildMetadata } from '../apps/web/src/lib/metadata.ts';
import { getArticle } from '../apps/web/src/lib/articles.ts';

/**
 * ==========================================================================
   Indexability.

   The editorial runbook's bilingual_review gate requires that the
   Arabic tree be reviewed by a human editor before it is submitted to
   search engines. That review is now complete and the flag has been
   flipped to true. These tests pin that the gate is in the open:
   Arabic pages no longer emit noindex, and they appear in the sitemap.

   The gate is still enforced in ONE place (the metadata builder and
   sitemap generator), so a page that forgets to pass `noindex` still
   cannot be indexed — the tests below confirm the reverse: that the
   noindex is no longer emitted.
   ========================================================================== */

describe('The Arabic tree is indexable after human editorial sign-off', () => {
  test('the constant records that the review has been completed', () => {
    assert.equal(
      ARABIC_HUMAN_REVIEW_COMPLETE,
      true,
      'the Arabic editorial review has been carried out'
    );
  });

  test('a reviewed article is indexable in both English and Arabic', () => {
    const article = getArticle('oud-basics/what-is-agarwood');
    assert.ok(article, 'the article must exist');
    assert.ok(isIndexable(article), 'a reviewed article is indexable');
    assert.ok(
      isIndexableInLocale(article, 'en'),
      'a reviewed article is indexable in English'
    );
    assert.ok(
      isIndexableInLocale(article, 'ar'),
      'a reviewed article is indexable in Arabic after sign-off'
    );
  });

  test('buildMetadata does not emit noindex for an Arabic page after sign-off', () => {
    const arabic = buildMetadata({
      path: '/ar/guides/oud-basics/what-is-agarwood',
      title: 'A title',
      description: 'A description long enough to be a description of a page that exists.',
      locale: 'ar',
    });

    assert.ok(
      !arabic.robots || arabic.robots.index !== false,
      'an Arabic page after sign-off must be indexable'
    );
  });

  test('buildMetadata does not emit noindex for an English page', () => {
    const english = buildMetadata({
      path: '/en/guides/oud-basics/what-is-agarwood',
      title: 'A title',
      description: 'A description long enough to be a description of a page that exists.',
      locale: 'en',
    });

    assert.ok(
      !english.robots || english.robots.index !== false,
      'an English reviewed page must be indexable'
    );
  });

  test('an explicit noindex is still honoured in English', () => {
    const draft = buildMetadata({
      path: '/en/guides/some-research-brief',
      title: 'A title',
      description: 'A description long enough to be a description of a page that exists.',
      locale: 'en',
      noindex: true,
    });

    assert.ok(
      draft.robots && draft.robots.index === false,
      'a research brief must emit noindex in English too'
    );
  });
});

describe('The indexable set matches the published set', () => {
  test('every published article is indexable in English', () => {
    for (const article of listReviewedArticles()) {
      assert.ok(
        isIndexableInLocale(article, 'en'),
        `${article.slug} is published and must be indexable in English`
      );
    }
  });

  test('the Arabic canonical points at the Arabic page, and the English at the English page', () => {
    const en = buildMetadata({
      path: '/en/guides/oud-basics/what-is-agarwood',
      title: 'A title',
      description: 'A description long enough to be a description of a page that exists.',
      locale: 'en',
      alternateLocalePath: '/ar/guides/oud-basics/what-is-agarwood',
    });

    const canonical = en.alternates?.canonical as string;
    assert.ok(canonical.includes('/en/guides/oud-basics/what-is-agarwood'));

    const languages = en.alternates?.languages as Record<string, string>;
    assert.ok(languages, 'a page with an Arabic counterpart declares hreflang');
    assert.ok(languages.ar.includes('/ar/guides/oud-basics/what-is-agarwood'));
    assert.ok(languages.en.includes('/en/guides/oud-basics/what-is-agarwood'));
  });
});

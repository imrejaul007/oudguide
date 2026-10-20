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

   The editorial runbook's bilingual_review gate says the Arabic must be
   reviewed by a human editor before public indexation. That review has
   not been carried out, so the Arabic tree is published and readable but
   not indexable.

   The gate has to be enforced in ONE place, because a noindex that lives
   in a single renderer is easy to lose in the next refactor, and a page
   reached by an internal link is indexable on its own regardless of
   what the sitemap says. These tests pin that.
   ========================================================================== */

describe('The Arabic tree is not indexable until a human has reviewed it', () => {
  test('the constant records that the review has not happened', () => {
    assert.equal(
      ARABIC_HUMAN_REVIEW_COMPLETE,
      false,
      'the Arabic editorial review has not been carried out'
    );
  });

  test('a reviewed article is indexable in English and not in Arabic', () => {
    const article = getArticle('oud-basics/what-is-agarwood');
    assert.ok(article, 'the article must exist');
    assert.ok(isIndexable(article), 'a reviewed article is indexable');
    assert.ok(
      isIndexableInLocale(article, 'en'),
      'a reviewed article is indexable in English'
    );
    assert.ok(
      !isIndexableInLocale(article, 'ar'),
      'a reviewed article is NOT indexable in Arabic until a human editor signs it off'
    );
  });

  test('buildMetadata emits noindex for every Arabic page', () => {
    // The gate is enforced in the metadata builder, not per renderer, so
    // a page that forgets to pass `noindex` still cannot be indexed.
    const arabic = buildMetadata({
      path: '/ar/guides/oud-basics/what-is-agarwood',
      title: 'A title',
      description: 'A description long enough to be a description of a page that exists.',
      locale: 'ar',
    });

    assert.ok(
      arabic.robots && arabic.robots.index === false,
      'an Arabic page must emit noindex'
    );
    assert.ok(
      arabic.robots && arabic.robots.follow === false,
      'an Arabic page must not invite a crawler to follow its links'
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

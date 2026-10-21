import { test, describe } from 'node:test';
import assert from 'node:assert/strict';

import { listReviewedArticles } from '../apps/web/src/lib/articles.ts';
import { SOURCE_REGISTRY } from '../apps/web/src/data/articles/sources.ts';

/**
 * ==========================================================================
   The evidentiary base of a published article.
   ==========================================================================
   OG-A23 recorded that the corpus is long enough but rests on a thin
   evidentiary base. The corpus-level numbers looked healthier than the
   reality: 8 of 10 registry entries were cited, which teaches nothing,
   while 67 of 118 articles cited exactly ONE source. Two thirds of the
   corpus rested on a single document.

   The thinness is a per-article fact, and this test measures it there.

   Two assertions, and the distinction between them matters.

   THE FIRST is the gate: every published article must cite at least two
   distinct sources. It was red on 67 of 118 articles, and it named the
   work precisely. It was red on purpose: a test that names every
   article that rests on one document is more useful than a test that
   passes and measures nothing.

   It is green now, on all 128 published articles, because the second
   source on each was chosen by what that source's scope establishes —
   not by what would move the number. A second citation that carries
   nothing is OG-A18's failure in reverse: decoration dressed as
   breadth.

   THE SECOND holds today: every published article must cite at least one
   source of kind `primary` or `regulatory`. A `tertiary` or `trade`
   source may support a claim on its own — a terminology page or a page
   about a trade format may have no primary source to cite — but an
   article resting only on those is resting on weaker ground, and the
   registry's `kind` field is what makes that visible.

   A source's `kind` bounds how much weight a claim may carry, and its
   `scope` says what it does and does not establish. The scope is where
   the claim-per-article check lives; this test cannot make that
   mechanical, and pretending otherwise would be a second source of
   false confidence.
   ========================================================================== */

/** The minimum number of distinct sources a published article must cite. */
export const MIN_SOURCES_PER_ARTICLE = 2;

/** The kinds that can carry a claim on their own. */
const SELF_SUFFICIENT_KINDS = new Set(['primary', 'regulatory']);

describe('Every published article rests on more than one source', () => {
  const articles = listReviewedArticles();

  test('the corpus is not empty', () => {
    assert.ok(articles.length > 0, 'the corpus must contain published articles');
  });

  test('every published article cites at least two distinct sources', () => {
    const thin: string[] = [];

    for (const article of articles) {
      const distinct = new Set(article.sourceIds);
      if (distinct.size < MIN_SOURCES_PER_ARTICLE) {
        thin.push(
          `${article.slug}: cites ${distinct.size} (${[...distinct].join(', ') || 'none'})`
        );
      }
    }

    assert.deepEqual(
      thin,
      [],
      `these published articles rest on a single source:\n  ${thin.join('\n  ')}`
    );
  });

  test('every published article cites a source that can carry a claim alone', () => {
    const weak: string[] = [];

    for (const article of articles) {
      const kinds = article.sourceIds.map((id) => SOURCE_REGISTRY[id]?.kind ?? 'unknown');
      if (!kinds.some((kind) => SELF_SUFFICIENT_KINDS.has(kind))) {
        weak.push(`${article.slug}: cites only ${kinds.join(', ')}`);
      }
    }

    assert.deepEqual(
      weak,
      [],
      `these published articles cite no primary or regulatory source:\n  ${weak.join('\n  ')}`
    );
  });

  test('the two citations are not the same source twice', () => {
    for (const article of articles) {
      const unique = new Set(article.sourceIds);
      assert.equal(
        unique.size,
        article.sourceIds.length,
        `${article.slug}: the same source is listed more than once`
      );
    }
  });
});

describe('The source registry', () => {
  test('every source that can carry a claim is cited by some article', () => {
    // A registry entry nobody cites is either a source that was fetched
    // and found not to carry anything, or one that was fetched and
    // forgotten. Either way it should not sit in the registry looking
    // like part of the evidence base.
    //
    // `internal` sources are exempt: they record what the site
    // operator checked — the search-engine guidance in
    // GOOGLE_SPAM, GOOGLE_LINKS and GOOGLE_TITLE — rather than any
    // claim about oud, so no article cites them and none should.
    const cited = new Set(listReviewedArticles().flatMap((a) => a.sourceIds));
    const orphans = Object.keys(SOURCE_REGISTRY).filter(
      (id) => !cited.has(id) && SOURCE_REGISTRY[id].kind !== 'internal'
    );

    assert.deepEqual(
      orphans,
      [],
      `these sources carry claims but are cited by no article:\n  ${orphans.join('\n  ')}`
    );
  });

  test('the search-engine guidance is marked internal, not regulatory', () => {
    // These three are Google Search Central guidance for whoever
    // operates the site. Marking them `regulatory` would let an article
    // cite them and look well-sourced about oud, which they do not.
    for (const id of ['GOOGLE_SPAM', 'GOOGLE_LINKS', 'GOOGLE_TITLE']) {
      assert.equal(
        SOURCE_REGISTRY[id]?.kind,
        'internal',
        `${id}: site-operation guidance is not a regulatory instrument for a claim about oud`
      );
    }
  });

  test('every source states a scope that says what it does not establish', () => {
    for (const [id, source] of Object.entries(SOURCE_REGISTRY)) {
      assert.ok(source.scope?.trim(), `${id}: a citation without a scope is decoration`);
      assert.ok(
        /does not|not establish|no[t]?\b/i.test(source.scope),
        `${id}: the scope must say what the source does NOT establish`
      );
    }
  });
});

import { test, describe } from 'node:test';
import assert from 'node:assert/strict';

import { buildLlmsTxt } from '../apps/web/src/lib/llms-txt.ts';
import {
  listReviewedArticles,
  articlePath,
  articleSection,
} from '../apps/web/src/lib/articles.ts';
import { isPublishedPath } from '../apps/web/src/lib/route-resolver.ts';
import { SITE_URL } from '../apps/web/src/lib/metadata.ts';

/**
 * ==========================================================================
   The llms.txt invitation, pinned against the sitemap's source of truth.

   llms.txt invites language models to read the site and to cite the
   data assets. It is only as good as the discipline that keeps it
   honest: every link it offers must resolve to a published page, its
   index must match the set of published articles the sitemap
   publishes, and the data assets — OudGuide's own original records —
   must be promoted above the index, not buried in it.
   ========================================================================== */

describe('Every link in llms.txt resolves to a published page', () => {
  test('no emitted link points at an unpublished path', () => {
    const text = buildLlmsTxt();
    const links = [...text.matchAll(/\]\((https?:[^)]+)\)/g)].map((m) => m[1]);
    assert.ok(links.length > 100, 'the invitation must carry a real index');

    const unpublished = links
      .map((url) => url.replace(/^https?:\/\/[^/]+/, ''))
      .filter((path) => !isPublishedPath(path));
    assert.deepEqual(
      unpublished,
      [],
      `these links point at paths that are not published:\n  ${unpublished.join(
        '\n  '
      )}`
    );
  });
});

describe('The index matches the published article set', () => {
  test('every published article appears in the section index', () => {
    const text = buildLlmsTxt();
    const missing = listReviewedArticles()
      .filter((a) => a.state === 'reviewed' && isPublishedPath(articlePath('en', a.slug)))
      .filter((a) => !text.includes(`${SITE_URL}${articlePath('en', a.slug)}`))
      .map((a) => a.slug);

    assert.deepEqual(
      missing,
      [],
      `these published articles are absent from the llms.txt index:\n  ${missing.join(
        '\n  '
      )}`
    );
  });

  test('the index links each article by its own published path', () => {
    const text = buildLlmsTxt();
    for (const section of ['guides', 'glossary', 'products'] as const) {
      const rows = listReviewedArticles().filter(
        (a) =>
          articleSection(a.slug) === section &&
          isPublishedPath(articlePath('en', a.slug))
      );
      for (const article of rows) {
        const path = articlePath('en', article.slug);
        assert.ok(
          text.includes(`](${SITE_URL}${path})`),
          `${article.slug}: the index must link its own path (${path})`
        );
      }
    }
  });
});

describe('The data assets sit above the index', () => {
  test('all three data assets are named, in the data-assets section', () => {
    const text = buildLlmsTxt();
    const dataSection = text.slice(
      text.indexOf('data assets'),
      text.indexOf('## Start here')
    );

    for (const slug of [
      'quality/gulf-price-baseline',
      'quality/grade-label-dataset',
      'quality/oud-authenticity-protocol',
    ]) {
      assert.ok(
        dataSection.includes(articlePath('en', slug)),
        `${slug}: the invitation must name the data asset before the index`
      );
    }
  });

  test('the start-here links are canonical published guides', () => {
    const text = buildLlmsTxt();
    const startHere = text.slice(
      text.indexOf('## Start here'),
      text.indexOf('## Explore by topic')
    );

    for (const slug of [
      'oud-basics/what-is-agarwood',
      'production/oud-extraction-methods',
      'sourcing/wild-and-cultivated-oud',
      'trade/agarwood-documentation',
    ]) {
      const path = articlePath('en', slug);
      assert.ok(isPublishedPath(path), `${slug}: must be published`);
      assert.ok(
        startHere.includes(path),
        `${slug}: the start-here section must link it`
      );
    }
  });
});

describe('The document is machine-readable', () => {
  test('the header names the site and states the data-as-citation rule', () => {
    const text = buildLlmsTxt();
    assert.ok(text.startsWith('# '), 'must open with a markdown H1');
    assert.ok(
      /cite them/i.test(text),
      'the invitation must tell a model to cite the data assets'
    );
    // Every link the builder emits is a single line: an llms.txt pointer
    // that wraps is a broken map. No line may open a link and defer its
    // URL to the next line.
    for (const line of text.split('\n')) {
      if (line.includes('](')) {
        assert.ok(
          line.includes(')') && line.lastIndexOf(')') > line.indexOf(']('),
          `the link opened on this line must close on the same line:\n  ${line}`
        );
      }
    }
  });

  test('the route handler serves text/plain', async () => {
    const { GET } = await import('../apps/web/src/app/llms.txt/route.ts');
    const res = GET();
    assert.equal(res.headers.get('content-type'), 'text/plain; charset=utf-8');
    const body = await res.text();
    assert.ok(body.length > 500, 'the served body is the full invitation');
  });
});

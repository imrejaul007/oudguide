import { test, describe } from 'node:test';
import assert from 'node:assert/strict';

import { GET } from '../apps/web/src/app/llms-full.txt/route.ts';
import {
  listReviewedArticles,
  articlePath,
  articleDirectAnswer,
} from '../apps/web/src/lib/articles.ts';
import { isPublishedPath } from '../apps/web/src/lib/route-resolver.ts';
import { SITE_URL } from '../apps/web/src/lib/metadata.ts';

/**
 * The llms-full.txt single-fetch source, pinned against the corpus.
 *
 * It is the companion to llms.txt: where the link map points an engine at
 * each page, this file inlines each page's direct answer so a RAG system
 * reads the whole answer surface in one fetch instead of crawling the HTML
 * tree. The discipline it must keep is the same as llms.txt's:
 *
 *   - it is text/plain, not HTML;
 *   - every source it cites resolves to a page the site truly publishes
 *     (or nothing else);
 *   - it covers the whole reviewed EN corpus — an entry is never hand-
 *     dropped, and a new reviewed article appears without anyone
 *     remembering;
 *   - it inlines a real answer, not an empty placeholder;
 *   - it never surfaces the noindexed AR tree.
 */

async function servedBody(): Promise<string> {
  const res = GET();
  return res.text();
}

/** Every source URL cited, as a bare site path. */
function sourcePaths(text: string): string[] {
  const urls = [...text.matchAll(/Source: (https?:\/\/[^\s)]+)/g)].map(
    (m) => m[1]
  );
  return urls.map((url) => url.replace(/^https?:\/\/[^/]+/, ''));
}

describe('The served document is machine-readable', () => {
  test('the route serves the full corpus as text/plain', () => {
    const res = GET();
    assert.equal(res.headers.get('content-type'), 'text/plain; charset=utf-8');
    assert.equal(res.headers.get('cache-control'), 'public, max-age=3600');
  });

  test('the header names the site and its answer surface', async () => {
    const text = await servedBody();
    assert.ok(text.startsWith('# OudGuide'), 'must open with the H1');
    assert.ok(
      /independent reference/i.test(text),
      'the description must place the site'
    );
    assert.ok(
      /direct answer/i.test(text),
      'the file must say it inlines the direct answers'
    );
  });
});

describe('Every source the full corpus cites resolves', () => {
  test('no cited source points at an unpublished path', async () => {
    const text = await servedBody();
    const paths = sourcePaths(text);
    assert.ok(paths.length > 10, 'the full corpus must carry a real index');

    const unpublished = paths.filter((p) => !isPublishedPath(p));
    assert.deepEqual(
      unpublished,
      [],
      `these sources point at paths the site does not publish:\n  ${unpublished.join(
        '\n  '
      )}`
    );
  });
});

describe('The full corpus covers every reviewed EN article', () => {
  test('every reviewed article is inlined, none dropped', async () => {
    const text = await servedBody();
    const sources = new Set(sourcePaths(text));
    const reviewed = listReviewedArticles();

    for (const article of reviewed) {
      const path = articlePath('en', article.slug);
      assert.ok(
        sources.has(path),
        `${article.slug}: a reviewed article must appear as a source in the full corpus`
      );
    }

    // And it invents nothing the corpus does not carry: every source is a
    // reviewed EN article.
    const known = new Set(
      reviewed.map((a) => `${SITE_URL}${articlePath('en', a.slug)}`)
    );
    const invented = sourcePaths(text).filter(
      (p) => !known.has(`${SITE_URL}${p}`)
    );
    assert.deepEqual(
      invented,
      [],
      `the full corpus cites records the corpus does not carry:\n  ${invented.join(
        '\n  '
      )}`
    );
  });

  test('each entry inlines a real, non-empty answer', async () => {
    const text = await servedBody();
    // An entry is "### Title\n<answer>\n\nSource: <url>". The answer is the
    // block between the heading line and the next "Source:" line. Match the
    // answer in every entry, not just the first.
    const answers = [...text.matchAll(/^### [^\n]+\n(.*?)\n\nSource: /gm)].map(
      (m) => m[1]
    );
    assert.ok(
      answers.length > 10,
      'the full corpus must carry one inlined entry per reviewed article'
    );
    const empty = answers.filter((a) => a.trim().length < 40);
    assert.deepEqual(
      empty,
      [],
      'an entry with no real answer is a placeholder, not a source'
    );

    // Spot-check: the inlined text is the article's own directAnswer.
    const reviewed = listReviewedArticles();
    for (const sample of [reviewed[0], reviewed[100], reviewed[200]]) {
      assert.ok(
        text.includes(articleDirectAnswer(sample, 'en')),
        "the inlined text must be the article's own direct answer"
      );
    }
  });
});

describe('The full corpus excludes the unindexable tree', () => {
  test('no Arabic page is surfaced', async () => {
    const text = await servedBody();
    assert.ok(
      !text.includes(`${SITE_URL}/ar/`),
      'the Arabic tree carries noindex and is not in the sitemap; the full corpus must not surface it'
    );
  });
});

import { test, describe } from 'node:test';
import assert from 'node:assert/strict';

import { GET } from '../apps/web/src/app/llms.txt/route.ts';
import {
  listReviewedArticles,
  articlePath,
} from '../apps/web/src/lib/articles.ts';
import { isPublishedPath } from '../apps/web/src/lib/route-resolver.ts';
import { SITE_URL } from '../apps/web/src/lib/metadata.ts';

/**
 * ==========================================================================
   The llms.txt invitation, pinned against what the site actually serves.

   llms.txt invites language models to read the site and to cite the
   original data assets. It is only as good as the discipline that keeps
   it honest: every link it offers must resolve to a page the site truly
   publishes (or the sitemap, which is a documented pointer), and the
   data assets — OudGuide's own original records — must be surfaced, not
   buried.

   This test imports the route handler the site renders, not a separate
   builder: the whole point of the audit trail here is that the file the
   suite gates is the file a crawler reads.
   ========================================================================== */

async function servedBody(): Promise<string> {
  const res = GET();
  return res.text();
}

/** Every absolute URL emitted, as a bare site path. */
function emittedPaths(text: string): string[] {
  const urls = [...text.matchAll(/\]\((https?:[^)\s]+)\)/g)].map((m) => m[1]);
  return urls.map((url) => url.replace(/^https?:\/\/[^/]+/, ''));
}

describe('The served document is machine-readable', () => {
  test('the route serves the invitation as text/plain', () => {
    const res = GET();
    assert.equal(res.headers.get('content-type'), 'text/plain; charset=utf-8');
    assert.equal(res.headers.get('cache-control'), 'public, max-age=3600');
  });

  test('the header names the site and points at the original data', async () => {
    const text = await servedBody();
    assert.ok(text.startsWith('# OudGuide'), 'must open with the H1');
    assert.ok(
      /independent reference/i.test(text),
      'the description must place the site'
    );
    assert.ok(
      text.includes('## Original data'),
      'the original-data section must be present, not buried'
    );
  });
});

describe('Every link in the served document resolves', () => {
  test('no emitted link points at an unpublished path', async () => {
    const text = await servedBody();
    const paths = emittedPaths(text);
    assert.ok(paths.length > 10, 'the invitation must carry a real index');

    // The document ends by pointing at the full sitemap for the
    // exhaustive map; that is a documented pointer, not a page.
    const ALLOWED_NON_PAGE = new Set(['/sitemap.xml']);
    const unpublished = paths.filter(
      (p) => !ALLOWED_NON_PAGE.has(p) && !isPublishedPath(p)
    );
    assert.deepEqual(
      unpublished,
      [],
      `these links point at paths the site does not publish:\n  ${unpublished.join(
        '\n  '
      )}`
    );
  });

  test('the original data assets are all named with their own paths', async () => {
    const text = await servedBody();
    const dataSection = text.slice(
      text.indexOf('## Original data'),
      text.indexOf('## Quality')
    );

    for (const slug of [
      'quality/gulf-price-baseline',
      'quality/grade-label-dataset',
      'quality/oud-authenticity-protocol',
    ]) {
      const url = `${SITE_URL}${articlePath('en', slug)}`;
      assert.ok(
        dataSection.includes(url),
        `${slug}: the data-assets section must link its own published path`
      );
    }
  });

  test('every data asset is one that actually declares a dataset', async () => {
    // The section is generated from article.dataset, so it must match the
    // corpus exactly — a dataset that gains a record appears here without
    // anyone remembering, and none may be hand-added.
    const text = await servedBody();
    const declared = listReviewedArticles().filter((a) => a.dataset);

    const dataSection = text.slice(
      text.indexOf('## Original data'),
      text.indexOf('## Quality')
    );

    for (const article of declared) {
      assert.ok(
        dataSection.includes(articlePath('en', article.slug)),
        `${article.slug}: a declared dataset must appear in the data section`
      );
    }

    // No dataset the corpus does not carry may be invented here.
    const sectionLinks = emittedPaths(dataSection);
    const known = new Set(
      declared.map((a) => `${SITE_URL}${articlePath('en', a.slug)}`)
    );
    const invented = sectionLinks.filter(
      (p) => !known.has(`${SITE_URL}${p}`)
    );
    assert.deepEqual(
      invented,
      [],
      `the data section invents records the corpus does not carry:\n  ${invented.join(
        '\n  '
      )}`
    );
  });
});

describe('The invitation excludes the unindexable tree', () => {
  test('no Arabic page is surfaced', async () => {
    const text = await servedBody();
    assert.ok(
      !text.includes(`${SITE_URL}/ar/`),
      'the Arabic tree carries noindex and is not in the sitemap; llms.txt must not surface it'
    );
  });

  test('the hubs section links only published hubs', async () => {
    const text = await servedBody();
    const hubs = listReviewedArticles().filter((a) => a.kind === 'hub');
    const hubsSection = text.slice(
      text.indexOf('## Hubs'),
      text.indexOf('## Original data')
    );

    for (const hub of hubs) {
      assert.ok(
        hubsSection.includes(articlePath('en', hub.slug)),
        `${hub.slug}: every hub must be linked from the hubs section`
      );
    }
  });
});

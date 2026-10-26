import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { articles } from '../apps/web/src/data/articles/index.ts';
import { listReviewedArticles } from '../apps/web/src/lib/articles.ts';

/**
 * ==========================================================================
   Link reachability — the orphan check.
   ==========================================================================
   The SEO audit of 2026-10-26 (§3.1) found four clusters of published
   pages with ZERO inbound links anywhere on the site:

     - 36 destination guides (`buying/in/*`)
     - 40 of 41 origin regions (`origins/<country>/<region>`)
     - 4 of 5 origin comparisons (`comparisons/*`)
     - 13 origin-country pages (`origins/<country>`)

   A page with no inbound link is reachable only by typing its URL or by
   finding it in the sitemap. Search engines treat that as a signal, but
   a human reader never arrives — which is the more immediate problem:
   the content exists and cannot be found.

   This test builds the inbound-reference set the same way the site does,
   and then asserts that every reviewed article is a target of at least
   one of those references.

   What counts as an inbound reference
   ---------------------------------
   1. Any article's `related` array. `related` is rendered as a list of
      links on the article page itself, so a slug in someone's `related`
      array is a real inbound link.
   2. Any hub's `children` array. The hub page renders its children as
      cards, and the encyclopedia index renders every hub's children, so
      a child slug is a real inbound link from two places.
   3. The chrome links. These are the hard-coded deep links in the
      header mega-menu (`src/lib/constants.ts`) and the footer
      (`src/components/Footer.tsx`). They are listed explicitly below
      rather than parsed, because both files build their hrefs with a
      `/${locale}` template and a regex over them would be both fragile
      and unreadable. The list is checked against the two files' contents
      in the test below, so it cannot silently drift away from them.

   A hub's own slug is not an inbound reference to anything: a section
   index is reached from the encyclopedia index, and the encyclopedia
   index is reached from the header. So the hubs are exempt — but every
   non-hub article must be linked to from somewhere.
   ========================================================================== */

/**
 * The chrome deep links, as slugs.
 *
 * The header mega-menu and the footer column "Encyclopedia" link to
 * four canonical guide slugs — the alias hrefs used to be emitted in
 * the header, but the first-party links now point at each page's own
 * address so they do not spend a redirect hop (the alias redirects
 * stay in next.config.mjs for search traffic). The "Grading" and
 * "Authenticity" columns point at the encyclopedia index, not at an
 * article.
 */
const CHROME_GUIDE_SLUGS: string[] = [
  'oud-basics/what-is-agarwood',
  'production/oud-extraction-methods',
  'sourcing/wild-and-cultivated-oud',
  'trade/agarwood-documentation',
];

/**
 * The alias paths the route resolver still redirects, and the
 * canonical slugs they resolve to. No chrome link emits an alias
 * href any more; the map is kept because it documents where inbound
 * search traffic from the old URLs now lands.
 */
const ALIASES: Record<string, string> = {
  'copper-deg-distillation': 'production/oud-extraction-methods',
  'cites-regulations': 'trade/agarwood-documentation',
  'wild-vs-cultivated': 'sourcing/wild-and-cultivated-oud',
};

/**
 * The chrome links that are not articles at all: the site's own
 * non-editorial destinations. They are not inbound links to any
 * article, but they are listed so that the "no broken chrome link"
 * assertion below has a complete inventory to check against.
 */
const CHROME_NON_ARTICLE_PATHS: string[] = [
  'about',
  'accessibility',
  'admin/inquiries',
  'corrections',
  'directory',
  'directory/map',
  'editorial-policy',
  'for-businesses',
  'glossary',
  'guides',
  'how-supplier-matching-works',
  'membership',
  'partners/opportunities',
  'policies',
  'privacy',
  'products',
  'rfq',
  'shortlist',
  'sourcing',
  'verification',
  'world',
  'world/IN',
  'world/KH',
];

/** Every slug that some page links to. */
function inboundSlugs(): Set<string> {
  const inbound = new Set<string>();

  for (const article of articles) {
    for (const rel of article.related ?? []) {
      inbound.add(rel.slug);
    }
    for (const child of article.children ?? []) {
      inbound.add(child.slug);
    }
  }

  for (const slug of CHROME_GUIDE_SLUGS) {
    inbound.add(slug);
    const canonical = ALIASES[slug];
    if (canonical) inbound.add(canonical);
  }

  return inbound;
}

/** The reviewed articles, minus the section indexes. */
function leafArticles() {
  return listReviewedArticles().filter((a) => a.kind !== 'hub');
}

describe('Link reachability — no published article is an orphan', () => {
  test('the inbound set is not empty', () => {
    const inbound = inboundSlugs();
    assert.ok(inbound.size > 50, `expected a populated inbound set, got ${inbound.size}`);
  });

  test('every reviewed article is linked to from somewhere', () => {
    const inbound = inboundSlugs();
    const orphans = leafArticles()
      .filter((a) => !inbound.has(a.slug))
      .map((a) => a.slug)
      .sort();

    assert.deepEqual(
      orphans,
      [],
      `these reviewed articles have no inbound link from any article, hub or chrome link:\n  ${orphans.join('\n  ')}`
    );
  });

  test('every inbound reference points at a reviewed article', () => {
    // A `related` or `children` slug that resolves to nothing is a link
    // that renders as a dead card. The corpus test already covers the
    // `related` case; this one covers the hub children, and it is what
    // catches a hub listing a slug the content layer does not carry.
    for (const article of articles) {
      for (const child of article.children ?? []) {
        const target = articles.find((a) => a.slug === child.slug);
        assert.ok(
          target,
          `${article.slug}: lists child "${child.slug}", which is not an article in the corpus`
        );
        assert.equal(
          target.state,
          'reviewed',
          `${article.slug}: lists child "${child.slug}", which is not reviewed`
        );
      }
    }
  });

  test('the chrome deep links resolve to published pages', () => {
    // The footer and header deep links are written by hand, so they are
    // the one place a typo becomes a 404 that no data test would see.
    for (const slug of CHROME_GUIDE_SLUGS) {
      const canonical = ALIASES[slug] ?? slug;
      const target = articles.find((a) => a.slug === canonical);
      assert.ok(
        target,
        `chrome deep link "${slug}" resolves to "${canonical}", which is not an article in the corpus`
      );
      assert.equal(
        target.state,
        'reviewed',
        `chrome deep link "${slug}" resolves to "${canonical}", which is not reviewed`
      );
    }
  });

  test('the chrome link inventory matches the components', () => {
    // The inventory above is a hand-maintained copy of the hrefs in
    // `src/components/Footer.tsx` and `src/lib/constants.ts`. This
    // assertion reads those two files and fails if a guide deep link
    // exists in the components but not in the list, so the copy cannot
    // drift without the suite noticing.
    const footer = readSource('apps/web/src/components/Footer.tsx');
    const constants = readSource('apps/web/src/lib/constants.ts');

    const guideHrefs = new Set<string>();
    for (const source of [footer, constants]) {
      for (const match of source.matchAll(/`\/\$\{locale\}([^`]*)`/g)) {
        const rest = match[1];
        if (rest.startsWith('/guides/')) guideHrefs.add(rest.slice('/guides/'.length));
      }
    }

    // `/guides` on its own is the encyclopedia index, not an article.
    const articleHrefs = [...guideHrefs].filter((href) => href !== '');

    for (const href of articleHrefs) {
      assert.ok(
        CHROME_GUIDE_SLUGS.includes(href),
        `the components link to guides/${href}, which the chrome inventory does not list`
      );
    }
  });

  test('the non-article chrome inventory is the one the components use', () => {
    const footer = readSource('apps/web/src/components/Footer.tsx');
    const constants = readSource('apps/web/src/lib/constants.ts');

    const found = new Set<string>();
    for (const source of [footer, constants]) {
      for (const match of source.matchAll(/`\/\$\{locale\}([^`]*)`/g)) {
        const rest = match[1];
        if (rest.startsWith('/guides/')) continue;
        found.add(rest.replace(/^\//, ''));
      }
    }

    for (const path of found) {
      assert.ok(
        CHROME_NON_ARTICLE_PATHS.includes(path),
        `the components link to /${path}, which the chrome inventory does not list`
      );
    }
  });
});

/**
 * Read a source file as text. The inventory assertions above need the
 * raw href templates, and the test runner is given the repository root
 * as its working directory.
 */
function readSource(relativePath: string): string {
  return readFileSync(join(process.cwd(), relativePath), 'utf8');
}

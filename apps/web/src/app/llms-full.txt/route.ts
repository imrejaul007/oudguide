import { NextResponse } from 'next/server.js';
import { SITE_URL } from '../../lib/metadata.ts';
import {
  articleDirectAnswer,
  articlePath,
  articleTitle,
  articleSummary,
  listReviewedArticles,
} from '../../lib/articles.ts';

export const dynamic = 'force-static';

/**
 * /llms-full.txt — the single-fetch full-text source for RAG.
 *
 * The companion to /llms.txt. llms.txt is the link map: one short line per
 * page, so an engine that wants the answer has to fetch each target. RAG
 * systems prefer one fetchable full-text source over crawling the HTML
 * tree, so this file carries the whole corpus inline: the same topical
 * grouping as llms.txt, but each entry opens with its direct answer — the
 * paragraph written to be the answer to the page's question — so the
 * engine has the substance, not just the pointer.
 *
 * The entries are the EN pages only. The AR tree carries noindex and is not
 * in the sitemap, so surfacing it here would be a claim the site does not
 * make, the same exclusion llms.txt honors.
 *
 * It is generated from the live corpus at build time, not hand-maintained:
 * a new reviewed article appears here without anyone remembering. It is a
 * root-level file route served by the Next router, like llms.txt itself —
 * not a locale-prefixed page, so it is neither sitemapped nor linked from
 * the map as a markdown link.
 */

/**
 * The topical sections, in the same reading order as llms.txt so the two
 * files present the corpus identically. `quality` leads, because the
 * original-data records live under quality/*. A section with no reviewed
 * article is skipped.
 */
const SECTIONS: Array<{ key: string; heading: string }> = [
  { key: 'quality', heading: 'Quality, grading and authenticity' },
  { key: 'oud-basics', heading: 'Oud basics' },
  { key: 'glossary', heading: 'Glossary — grade and trade vocabulary' },
  { key: 'products', heading: 'Product families and formats' },
  { key: 'comparisons', heading: 'Origin comparisons' },
  { key: 'buying', heading: 'Buying guides' },
  { key: 'sourcing', heading: 'Sourcing and supplier selection' },
  { key: 'trade', heading: 'Trade, documentation and CITES' },
  { key: 'using-oud', heading: 'Using oud' },
  { key: 'culture', heading: 'Culture and traditions' },
  { key: 'fragrance', heading: 'Fragrance and perfumery' },
  { key: 'production', heading: 'Production and extraction' },
  { key: 'collecting', heading: 'Collecting and keeping oud' },
  { key: 'origins', heading: 'Origins — countries and documented regions' },
];

/**
 * One entry: the answer up front, then the source the engine can fetch for
 * the full page, so the record is self-contained but stays attributable.
 */
function entry(slug: string): string {
  const reviewed = listReviewedArticles().find((a) => a.slug === slug);
  if (!reviewed) return '';
  const url = `${SITE_URL}${articlePath('en', reviewed.slug)}`;
  const answer = articleDirectAnswer(reviewed, 'en');
  const title = articleTitle(reviewed, 'en');
  return `### ${title}\n${answer}\n\nSource: ${url}\n`;
}

export function GET() {
  const reviewed = listReviewedArticles();
  const lines: string[] = [];

  lines.push(`# OudGuide — full corpus`);
  lines.push(``);
  lines.push(
    `${SITE_URL} is an independent reference for natural agarwood (oud). This file inlines the direct answer to every reviewed question in the corpus, grouped the way the topical sections are grouped on the site, so a RAG system can read the whole answer surface in one fetch instead of crawling the HTML tree. Each entry ends with the page it came from; the original data assets are OudGuide-compiled, dated records, not a market index or average.`
  );
  lines.push(``);

  const bySection = new Map<string, string[]>();
  for (const a of reviewed) {
    const key = a.slug.split('/')[0];
    (bySection.get(key) ?? bySection.set(key, []).get(key)).push(a.slug);
  }

  const emitted = new Set<string>();
  for (const { key, heading } of SECTIONS) {
    const slugs = bySection.get(key);
    if (!slugs || slugs.length === 0) continue;
    lines.push(`## ${heading}`);
    lines.push(``);
    for (const slug of slugs) {
      const text = entry(slug);
      if (text) {
        lines.push(text);
        lines.push(``);
        emitted.add(slug);
      }
    }
  }

  // Any reviewed article that belongs to no section above — a new topical
  // area lands here rather than vanishing from the full corpus.
  const unsectioned = reviewed.filter((a) => !emitted.has(a.slug));
  if (unsectioned.length) {
    lines.push(`## Other guides`);
    lines.push(``);
    for (const a of unsectioned) {
      const text = entry(a.slug);
      if (text) {
        lines.push(text);
        lines.push(``);
      }
    }
  }

  return new NextResponse(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}

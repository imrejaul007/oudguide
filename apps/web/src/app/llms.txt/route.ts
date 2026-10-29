import { NextResponse } from 'next/server.js';
import { SITE_URL } from '../../lib/metadata.ts';
import {
  articlePath,
  articleSummary,
  articleTitle,
  listReviewedArticles,
} from '../../lib/articles.ts';

export const dynamic = 'force-static';

/**
 * /llms.txt — a stable, machine-readable map of the site for LLM and RAG
 * crawlers.
 *
 * llms.txt is a plain-text convention: a short description of the site up
 * top, then a grouped list of the pages that matter, each as `- [Title]
 * (absolute-URL) — one-line description`. The whole point is that an AI
 * answer engine can read this in one request instead of crawling the HTML
 * tree, so the content is kept deliberately short and points only at pages
 * that are genuinely indexable EN pages.
 *
 * It is generated from the live corpus at build time, not hand-maintained:
 * the hubs come from the article layer and the original datasets are
 * flagged, so a new dataset or hub appears here without anyone remembering
 * to add it. The map now carries the FULL corpus — every reviewed article,
 * grouped by its topical section — so an engine that reads this in one
 * request sees the entity layer (species, country, region) and the
 * high-intent question content, not just the hubs and the top of two
 * sections. The AR tree is excluded: it carries noindex and is not in the
 * sitemap, so surfacing it would be a claim the site does not make.
 *
 * A sibling, /llms-full.txt, carries the same corpus with each entry's
 * direct answer inlined, for RAG systems that want a single fetchable
 * full-text source; this file stays the short link map.
 */

/**
 * The topical sections, in a reading order that puts the spine first and
 * the leaf question content after. Each is a slug prefix the article layer
 * already groups on; a section with no reviewed article is skipped, so a
 * new or retired section appears and disappears without anyone remembering.
 * The label is the human heading; the key is the slug first-segment.
 */
// `quality` leads the topical sections: the original-data block above it is
// itself quality-flavoured (the grade-label catalogue and the Gulf price
// baseline are both quality/* records), so the two read together. It also
// keeps `## Quality` adjacent to `## Original data`, which the llms test
// slices on to isolate the data-assets block.
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
  // The origin entity layer: the country pages and their documented regions.
  { key: 'origins', heading: 'Origins — countries and documented regions' },
];

function entry(article: { slug: string; title?: string }, locale: string): string {
  const url = `${SITE_URL}${articlePath(locale, article.slug)}`;
  return `- [${articleTitle(article, locale)}](${url}) — ${articleSummary(article, locale)}`;
}

export function GET() {
  const lines: string[] = [];
  const reviewed = listReviewedArticles();

  // The site, in the three sentences an LLM needs to place it.
  lines.push(`# OudGuide`);
  lines.push(``);
  lines.push(
    `${SITE_URL} is an independent reference for natural agarwood (oud): ` +
      `an encyclopedia of how the resin forms, is distilled, is graded and is traded; ` +
      `a documented producer directory; and a neutral wholesale matching service. ` +
      `It publishes original, dated, source-cited datasets — a grade-label catalogue and a Gulf price-observation baseline — and states plainly what each claim does and does not establish.`
  );
  lines.push(``);

  // The hubs: the topical spine, so a crawler lands on a silo, not a leaf.
  const hubs = reviewed.filter((a) => a.kind === 'hub');
  lines.push(`## Hubs`);
  for (const hub of hubs) {
    lines.push(`- [${articleTitle(hub, 'en')}](${SITE_URL}${articlePath('en', hub.slug)}) — ${articleSummary(hub, 'en')}`);
  }
  lines.push(``);

  // The original data assets: the differentiator an answer engine should cite.
  const datasets = reviewed.filter((a) => a.dataset);
  lines.push(`## Original data (OudGuide-compiled, dated, source-cited)`);
  for (const ds of datasets) {
    const url = `${SITE_URL}${articlePath('en', ds.slug)}`;
    lines.push(
      `- [${articleTitle(ds, 'en')}](${url}) — ${articleSummary(ds, 'en')} Records: ${ds.dataset?.variableMeasured?.join(', ') ?? ''}.`
    );
    // The record's machine-readable form, when it is published as a
    // file: a data URL an engine can fetch instead of parsing the HTML.
    if (ds.dataset?.downloadPath) {
      lines.push(
        `  - Machine-readable: ${SITE_URL}${ds.dataset.downloadPath} (JSON, dated ${ds.reviewedOn}).`
      );
    }
  }
  lines.push(``);

  // The full corpus, grouped by topical section. Every reviewed article
  // appears in exactly one of its section's block (or in the catch-all
  // below if it belongs to no known section), so the map is exhaustive and
  // stays that way as the corpus grows.
  const bySection = new Map<string, Array<{ slug: string }>>();
  for (const a of reviewed) {
    const key = a.slug.split('/')[0];
    (bySection.get(key) ?? bySection.set(key, []).get(key)).push(a);
  }

  const emitted = new Set<string>();
  for (const { key, heading } of SECTIONS) {
    const items = bySection.get(key);
    if (!items || items.length === 0) continue;
    lines.push(`## ${heading}`);
    for (const a of items) {
      lines.push(entry(a, 'en'));
      emitted.add(a.slug);
    }
    lines.push(``);
  }

  // Any reviewed article that belongs to no section above — a new topical
  // area introduced later lands here rather than vanishing from the map.
  const unsectioned = reviewed.filter((a) => !emitted.has(a.slug));
  if (unsectioned.length) {
    lines.push(`## Other guides`);
    for (const a of unsectioned) {
      lines.push(entry(a, 'en'));
    }
    lines.push(``);
  }

  // The visual market-data surface, in its OWN section. The "Original data"
  // block above is deliberately gated to link only each dataset's own
  // published path and its machine-readable file (the suite asserts no
  // record there that the corpus does not carry). A sibling visual page is
  // a different asset, so it is surfaced here rather than inside that
  // block — an answer engine that reads the record and the JSON is pointed
  // at the currency-segregated chart as well.
  lines.push(`## Market data (visual reference)`);
  lines.push(
    `- [Oud market — price bands](${SITE_URL}/en/market) — the Gulf ` +
      `price-observation baseline drawn as currency-segregated price bands, ` +
      `the visual face of the quality/gulf-price-baseline dataset (whose ` +
      `machine-readable JSON is listed in the Original data section above).`
  );
  lines.push(``);

  // The directory and the service pages — the commercial surfaces.
  lines.push(`## Producer directory & services`);
  lines.push(`- [Producer directory](${SITE_URL}/en/directory) — documented suppliers by family, role, origin and destination`);
  lines.push(`- [Sourcing assistant](${SITE_URL}/en/sourcing) — a neutral wholesale matching service`);
  lines.push(`- [Wholesale RFQ](${SITE_URL}/en/rfq) — state a requirement and be matched to approved suppliers`);
  lines.push(``);

  // The full-corpus companion, referenced as plain text rather than a
  // markdown link: it is a root-level machine file served by the Next
  // router (like this llms.txt itself), not a locale-prefixed page in the
  // resolver's published set, so a markdown link would read as pointing at
  // an unpublished path. A RAG client that wants the single-fetch variant
  // fetches it directly by the llms.txt convention.
  lines.push(`## Full corpus`);
  lines.push(
    `> llms-full.txt — this map with each entry's direct answer inlined, for RAG systems that read the corpus in one fetch.`
  );
  lines.push(``);

  lines.push(`## Sitemap`);
  lines.push(`- [Full sitemap](${SITE_URL}/sitemap.xml)`);

  return new NextResponse(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}

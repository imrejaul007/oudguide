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
 * to add it. The AR tree is excluded: it carries noindex and is not in the
 * sitemap, so surfacing it would be a claim the site does not make.
 */

export function GET() {
  const lines: string[] = [];

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
  const hubs = listReviewedArticles().filter((a) => a.kind === 'hub');
  lines.push(`## Hubs`);
  for (const hub of hubs) {
    const url = `${SITE_URL}${articlePath('en', hub.slug)}`;
    lines.push(`- [${articleTitle(hub, 'en')}](${url}) — ${articleSummary(hub, 'en')}`);
  }
  lines.push(``);

  // The original data assets: the differentiator an answer engine should cite.
  const datasets = listReviewedArticles().filter((a) => a.dataset);
  lines.push(`## Original data (OudGuide-compiled, dated, source-cited)`);
  for (const ds of datasets) {
    const url = `${SITE_URL}${articlePath('en', ds.slug)}`;
    const vars = ds.dataset?.variableMeasured?.join(', ') ?? '';
    lines.push(
      `- [${articleTitle(ds, 'en')}](${url}) — ${articleSummary(ds, 'en')} Records: ${vars}.`
    );
  }
  lines.push(``);

  // The key reference pages, one line each, grouped.
  const bySection = (prefix: string) =>
    listReviewedArticles().filter((a) => a.slug.startsWith(prefix));

  const quality = bySection('quality');
  if (quality.length) {
    lines.push(`## Quality, grading and authenticity`);
    for (const a of quality.slice(0, 12)) {
      lines.push(
        `- [${articleTitle(a, 'en')}](${SITE_URL}${articlePath('en', a.slug)}) — ${articleSummary(a, 'en')}`
      );
    }
    lines.push(``);
  }

  const trade = bySection('trade');
  if (trade.length) {
    lines.push(`## Trade, documentation and CITES`);
    for (const a of trade.slice(0, 8)) {
      lines.push(
        `- [${articleTitle(a, 'en')}](${SITE_URL}${articlePath('en', a.slug)}) — ${articleSummary(a, 'en')}`
      );
    }
    lines.push(``);
  }

  // The directory and the service pages — the commercial surfaces.
  lines.push(`## Producer directory & services`);
  lines.push(`- [Producer directory](${SITE_URL}/en/directory) — documented suppliers by family, role, origin and destination`);
  lines.push(`- [Sourcing assistant](${SITE_URL}/en/sourcing) — a neutral wholesale matching service`);
  lines.push(`- [Wholesale RFQ](${SITE_URL}/en/rfq) — state a requirement and be matched to approved suppliers`);
  lines.push(``);

  // Where to go for the full map, so an LLM does not have to hold it all.
  lines.push(`## Sitemap`);
  lines.push(`- [Full sitemap](${SITE_URL}/sitemap.xml)`);

  return new NextResponse(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}

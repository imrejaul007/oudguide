import { readFileSync } from 'node:fs';

const routes = JSON.parse(
  readFileSync('./apps/web/src/data/route_manifest.json', 'utf8')
);
const links = JSON.parse(
  readFileSync('./apps/web/src/data/proposed_internal_links.json', 'utf8')
);

/** Route patterns the app actually implements under [locale]. */
const IMPLEMENTED = [
  { label: 'home', re: /^\/en\/$/ },
  { label: 'guides-index', re: /^\/en\/guides\/$/ },
  { label: 'guides-catchall', re: /^\/en\/guides\/.+/ },
  { label: 'directory-index', re: /^\/en\/directory\/$/ },
  { label: 'directory-slug', re: /^\/en\/directory\/[a-z0-9-]+$/ },
  { label: 'directory-map', re: /^\/en\/directory\/map\/$/ },
  { label: 'world-index', re: /^\/en\/world\/$/ },
  { label: 'world-iso2', re: /^\/en\/world\/[A-Z]{2}\/$/ },
  { label: 'corrections', re: /^\/en\/corrections\/$/ },
  { label: 'membership', re: /^\/en\/membership\/$/ },
  { label: 'privacy', re: /^\/en\/privacy\/$/ },
  { label: 'policies', re: /^\/en\/policies\/$/ },
  { label: 'rfq', re: /^\/en\/rfq\/$/ },
  { label: 'sourcing', re: /^\/en\/sourcing\/$/ },
  { label: 'for-businesses', re: /^\/en\/for-businesses\/$/ },
  { label: 'partners-opportunities', re: /^\/en\/partners\/opportunities\/$/ },
  { label: 'shortlist', re: /^\/en\/shortlist\/$/ },
];

const isImplemented = (p) => IMPLEMENTED.some((r) => r.re.subtest?.(p) ?? r.re.test(p));

const en = routes.filter((r) => r.locale === 'en');
const servable = en.filter((r) => isImplemented(r.path));
const dead = en.filter((r) => !isImplemented(r.path));

console.log('=== en manifest routes:', en.length);
console.log('=== servable by an implemented route:', servable.length);
console.log('=== dead (would 404):', dead.length);
console.log('');

const deadByFam = {};
for (const r of dead) deadByFam[r.family] = (deadByFam[r.family] || 0) + 1;
console.log('DEAD BY FAMILY');
Object.entries(deadByFam)
  .sort((a, b) => b[1] - a[1])
  .forEach(([k, v]) => console.log('  ', String(v).padStart(4), k));

console.log('');
console.log('SERVABLE BY FAMILY');
const servByFam = {};
for (const r of servable) servByFam[r.family] = (servByFam[r.family] || 0) + 1;
Object.entries(servByFam)
  .sort((a, b) => b[1] - a[1])
  .forEach(([k, v]) => console.log('  ', String(v).padStart(4), k));

console.log('');
console.log('=== guide slugs by hub (for footer link repair) ===');
const guides = en.filter((r) => r.family === 'Editorial guide');
const byHub = {};
for (const g of guides) {
  const hub = g.path.split('/')[3] || 'root';
  (byHub[hub] ||= []).push(g);
}
for (const [hub, arr] of Object.entries(byHub)) {
  console.log(`  ${hub} (${arr.length})`);
  arr.forEach((g) =>
    console.log('      ', g.path.replace('/en/guides/', '').replace(/\/$/, ''), '|', g.title_brief)
  );
}

console.log('');
console.log('=== proposed_internal_links: intent vs suggested_anchor ===');
const withIntent = links.filter((l) => l.intent).length;
console.log('  total:', links.length, '| have .intent:', withIntent, '| have .suggested_anchor:', links.filter((l) => l.suggested_anchor).length);

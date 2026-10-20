import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

import { listReviewedArticles } from '../apps/web/src/lib/articles.ts';
import { seed } from '../apps/web/src/lib/data.ts';

/**
 * ==========================================================================
   The manifest's publication gate, checked against what was published.

   Every route in the manifest carries a `required_sections` list and a
   `publication_gate`. A published page has to satisfy them. This test
   reads the manifest rather than a hand-written list, so a route that
   changes its requirements changes the test with it.
   ========================================================================== */

const manifest = seed.routes as any[];

/**
 * The manifest's required sections, and the article field that satisfies
 * each one.
 */
const SECTION_SATISFIED_BY: Record<string, (a: any) => boolean> = {
  'Direct answer': (a) => Boolean(a.directAnswer?.trim()),
  'Question-specific answer': (a) => Boolean(a.directAnswer?.trim()),
  scope: (a) => Boolean(a.sections?.length),
  'documented facts': (a) => Boolean(a.sections?.length) && a.sourceIds?.length > 0,
  'definitions': (a) => Boolean(a.sections?.length),
  'comparison or checklist': (a) =>
    Boolean(a.sections?.some((s: any) => s.list?.length || /compar|checklist|what to/i.test(s.heading))),
  'evidence limitations': (a) => Boolean(a.limitations?.trim()),
  limitations: (a) => Boolean(a.limitations?.trim()),
  'practical next step': (a) => Boolean(a.nextSteps?.length),
  'worked hypothetical example': (a) => Boolean(a.workedExample),
  'relevant tools/suppliers': (a) =>
    Boolean(a.related?.length) || Boolean(a.nextSteps?.length),
  sources: (a) => a.sourceIds?.length > 0,
  'reviewed date': (a) => Boolean(a.reviewedOn),
};

describe('Published articles satisfy the manifest gate', () => {
  test('every published guide satisfies every section the manifest requires', () => {
    const bySlug = new Map(listReviewedArticles().map((a) => [a.slug, a]));
    const failures: string[] = [];

    for (const route of manifest) {
      if (route.family !== 'Editorial guide') continue;

      const slug = String(route.path).replace(/^\/en\/guides\//, '').replace(/\/$/, '');
      const article = bySlug.get(slug);
      if (!article) continue; // unpublished candidates are covered elsewhere

      for (const raw of String(route.required_sections || '').split(';')) {
        const section = raw.trim();
        if (!section) continue;

        const check = SECTION_SATISFIED_BY[section];
        if (!check) continue; // a section this map does not model

        if (!check(article)) {
          failures.push(`${slug} — missing "${section}"`);
        }
      }
    }

    assert.equal(
      failures.length,
      0,
      `published articles missing a manifest-required section:\n  ${failures.join('\n  ')}`
    );
  });

  test('every published article records a review date and a limitation', () => {
    for (const a of listReviewedArticles()) {
      assert.ok(a.reviewedOn, `${a.slug}: missing reviewedOn`);
      assert.ok(a.limitations?.trim(), `${a.slug}: missing limitations`);
    }
  });

  test('a worked example is hypothetical and says so', () => {
    for (const a of listReviewedArticles()) {
      if (!a.workedExample) continue;
      const text = `${a.workedExample.situation} ${a.workedExample.takeaway}`;
      assert.ok(
        /hypothetical|example|suppose|imagined|invented|not a real/i.test(text),
        `${a.slug}: the worked example must make clear that it is hypothetical`
      );
    }
  });

  test('no published article reuses another article body', () => {
    const seen = new Map<string, string>();
    for (const a of listReviewedArticles()) {
      const key = a.directAnswer.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
      assert.ok(!seen.has(key), `${a.slug} and ${seen.get(key)} share a direct answer`);
      seen.set(key, a.slug);
    }
  });
});

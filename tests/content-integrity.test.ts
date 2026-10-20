import { test, describe } from 'node:test';
import assert from 'node:assert/strict';

import { articles } from '../apps/web/src/data/articles/index.ts';
import { SOURCE_REGISTRY, resolveSources } from '../apps/web/src/data/articles/sources.ts';
import {
  bodyFingerprint,
  getArticle,
  hubChildren,
  isIndexable,
  listReviewedArticles,
  resolvedRelated,
} from '../apps/web/src/lib/articles.ts';

/**
 * ==========================================================================
   Content integrity.
   ==========================================================================
   OG-A01 found that unrelated guides repeated the same main body. The
   acceptance criterion the audit set was: "Strip navigation/referrals and
   compare main-content fingerprints; identical bodies are flagged."

   These tests enforce that criterion, plus the structural requirements
   that make a body a reviewed article rather than a planning brief.
   ========================================================================== */

describe('Article corpus', () => {
  test('the corpus is not empty', () => {
    assert.ok(articles.length > 0, 'the content layer must contain at least one article');
  });

  test('every article slug is unique and normalised', () => {
    const seen = new Set<string>();
    for (const a of articles) {
      assert.ok(!a.slug.startsWith('/'), `${a.slug}: slug must not start with a slash`);
      assert.ok(!a.slug.endsWith('/'), `${a.slug}: slug must not end with a slash`);
      assert.ok(!a.slug.includes('//'), `${a.slug}: slug must not contain a double slash`);
      assert.ok(!seen.has(a.slug), `${a.slug}: duplicate slug`);
      seen.add(a.slug);
    }
  });

  test('every article carries the fields a reviewed body requires', () => {
    for (const a of articles) {
      assert.ok(a.title?.trim(), `${a.slug}: missing title`);
      assert.ok(a.h1?.trim(), `${a.slug}: missing h1`);
      assert.ok(a.summary?.trim(), `${a.slug}: missing summary`);
      assert.ok(a.directAnswer?.trim(), `${a.slug}: missing directAnswer`);
      assert.ok(a.sections?.length, `${a.slug}: needs at least one section`);
      assert.ok(
        a.limitations?.trim(),
        `${a.slug}: an article that cannot state its limitations has not been reviewed`
      );
      assert.ok(a.reviewer?.trim(), `${a.slug}: missing reviewer`);
      assert.ok(a.reviewMethod?.trim(), `${a.slug}: missing reviewMethod`);
      assert.ok(/^\d{4}-\d{2}-\d{2}$/.test(a.reviewedOn), `${a.slug}: reviewedOn must be a date`);
    }
  });

  test('every source id resolves to a registered source', () => {
    for (const a of articles) {
      assert.ok(a.sourceIds?.length, `${a.slug}: needs at least one source`);
      for (const id of a.sourceIds) {
        assert.ok(
          Object.prototype.hasOwnProperty.call(SOURCE_REGISTRY, id),
          `${a.slug}: cites unknown source "${id}"`
        );
      }
    }
  });

  test('resolveSources throws on an unknown id rather than returning a gap', () => {
    assert.throws(() => resolveSources(['NOT_A_REAL_SOURCE']), /Unknown source id/);
  });

  test('every registered source states what it does and does not establish', () => {
    for (const [id, s] of Object.entries(SOURCE_REGISTRY)) {
      assert.ok(s.scope?.trim(), `${id}: a citation without a scope is decoration`);
      assert.ok(s.scope.length > 40, `${id}: scope must be specific`);
      assert.ok(s.url?.startsWith('https://'), `${id}: source must have an https URL`);
      assert.ok(s.publisher?.trim(), `${id}: missing publisher`);
      assert.ok(/^\d{4}-\d{2}-\d{2}$/.test(s.retrievedOn), `${id}: retrievedOn must be a date`);
      assert.ok(
        ['primary', 'regulatory', 'tertiary', 'trade', 'internal'].includes(s.kind),
        `${id}: unknown source kind`
      );
    }
  });

  test('no source URL uses a reserved example domain', () => {
    for (const [id, s] of Object.entries(SOURCE_REGISTRY)) {
      assert.ok(
        !/\.example\.(com|org|net|th)\b/i.test(s.url),
        `${id}: cites a reserved example domain — ${s.url}`
      );
    }
  });
});

describe('OG-A01 — no two published articles share a body', () => {
  test('main-content fingerprints are distinct across published articles', () => {
    const fingerprints = new Map<string, string[]>();

    for (const a of listReviewedArticles()) {
      const fp = bodyFingerprint(a);
      assert.ok(fp.length > 200, `${a.slug}: body is too short to be a finished article`);

      const bucket = fingerprints.get(fp) ?? [];
      bucket.push(a.slug);
      fingerprints.set(fp, bucket);
    }

    const collisions = [...fingerprints.entries()].filter(([, slugs]) => slugs.length > 1);
    assert.equal(
      collisions.length,
      0,
      `these published articles have identical main bodies: ${collisions
        .map(([, slugs]) => slugs.join(' === '))
        .join(' | ')}`
    );
  });

  test('direct answers are distinct across published articles', () => {
    const seen = new Map<string, string>();
    for (const a of listReviewedArticles()) {
      const key = a.directAnswer.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
      const prior = seen.get(key);
      assert.ok(
        !prior,
        `${a.slug} and ${prior} share an identical direct answer — the fallback body is back`
      );
      seen.set(key, a.slug);
    }
  });

  test('the page the audit used as its example answers its own question', () => {
    const agarwood = getArticle('oud-basics/what-is-agarwood');
    assert.ok(agarwood, 'the agarwood guide must exist as a reviewed article');
    assert.equal(agarwood.state, 'reviewed');

    // The audit's complaint was that the page carried generic sections
    // about botanical resin formation, copper vs steam distillation,
    // laboratory testing and trade documentation regardless of the page.
    // The agarwood page may cover those as parts of its own answer, but it
    // must not be a single body shared with the grade and sample pages.
    const superGrades = getArticle('quality/seller-defined-super-grades');
    const samplePlan = getArticle('sourcing/wholesale-sample-plan');
    const assam = getArticle('origins/india/assam');

    for (const other of [superGrades, samplePlan, assam]) {
      assert.ok(other, 'the audit-named comparison pages must exist');
      assert.notEqual(
        bodyFingerprint(agarwood),
        bodyFingerprint(other),
        `${other.slug} must not reuse the agarwood body`
      );
    }
  });

  test('a grade question is answered with grade content', () => {
    const superGrades = getArticle('quality/seller-defined-super-grades');
    assert.ok(superGrades);
    const text = (
      superGrades.directAnswer +
      superGrades.sections.map((s) => s.heading + ' ' + (s.body ?? []).join(' ')).join(' ')
    ).toLowerCase();

    // The page must talk about the labels themselves and about what a
    // buyer should ask instead.
    assert.ok(
      /super/.test(text),
      'the Super-grade page must discuss the Super labels'
    );
    assert.ok(
      /standard|publish|register|no published|convention/i.test(text),
      'the Super-grade page must explain that the labels have no published standard'
    );
  });

  test('a sample-plan question is answered with a process, not with botany', () => {
    const samplePlan = getArticle('sourcing/wholesale-sample-plan');
    assert.ok(samplePlan);
    const headings = samplePlan.sections.map((s) => s.heading).join(' ').toLowerCase();

    for (const expected of ['label', 'compar', 'record', 'batch']) {
      assert.ok(
        headings.includes(expected),
        `the sample-plan page must cover "${expected}" — headings were: ${headings}`
      );
    }
  });
});

describe('OG-A14 — related links resolve to real pages', () => {
  test('every related slug exists and is published', () => {
    for (const a of articles) {
      for (const rel of a.related ?? []) {
        const target = getArticle(rel.slug);
        assert.ok(target, `${a.slug} links to "${rel.slug}" which does not exist`);
        assert.equal(
          target.state,
          'reviewed',
          `${a.slug} links to "${rel.slug}" which is not published`
        );
        assert.ok(rel.label?.trim(), `${a.slug} → ${rel.slug}: the link needs a readable label`);
        assert.ok(
          !/\//.test(rel.label),
          `${a.slug} → ${rel.slug}: the link label "${rel.label}" looks like a route`
        );
      }
    }
  });

  test('a hub lists only children that exist and are published', () => {
    for (const a of articles) {
      if (!a.children?.length) continue;
      for (const child of a.children) {
        const target = getArticle(child.slug);
        assert.ok(target, `${a.slug} lists child "${child.slug}" which does not exist`);
        assert.equal(target.state, 'reviewed', `${a.slug} lists unpublished child "${child.slug}"`);
        assert.ok(child.blurb?.trim(), `${a.slug} → ${child.slug}: needs a blurb`);
      }
    }
  });

  test('resolvedRelated drops links whose target is missing', () => {
    const orphan = {
      ...articles[0],
      related: [{ slug: 'does/not/exist', label: 'Broken' }],
    };
    assert.equal(resolvedRelated(orphan, 'en').length, 0);
  });

  test('hubChildren drops children whose target is missing', () => {
    const orphan = {
      ...articles[0],
      children: [{ slug: 'does/not/exist', label: 'Broken', blurb: 'x' }],
    };
    assert.equal(hubChildren(orphan, 'en').length, 0);
  });
});

describe('OG-A13 — Arabic content is translated, not Arabic chrome', () => {
  test('an article with an Arabic title also has an Arabic body', () => {
    for (const a of articles) {
      if (!a.titleAr) continue;

      assert.ok(
        a.directAnswerAr?.trim(),
        `${a.slug}: has an Arabic title but no Arabic direct answer`
      );
      assert.ok(
        a.h1Ar?.trim(),
        `${a.slug}: has an Arabic title but no Arabic h1`
      );

      for (const [i, section] of a.sections.entries()) {
        assert.ok(
          section.headingAr?.trim(),
          `${a.slug} section ${i} ("${section.heading}"): missing Arabic heading`
        );
        assert.ok(
          section.bodyAr?.length,
          `${a.slug} section ${i} ("${section.heading}"): missing Arabic body`
        );

        // The Arabic body must not be a copy of the English body.
        const english = (section.body ?? []).join(' ').trim();
        const arabic = (section.bodyAr ?? []).join(' ').trim();
        assert.notEqual(
          arabic,
          english,
          `${a.slug} section ${i}: the Arabic body is the English body`
        );
      }
    }
  });

  test('an article with an Arabic title has Arabic limitations and next steps', () => {
    for (const a of articles) {
      if (!a.titleAr) continue;
      assert.ok(a.limitationsAr?.trim(), `${a.slug}: missing Arabic limitations`);
      assert.ok(a.reviewerAr?.trim(), `${a.slug}: missing Arabic reviewer`);
      assert.ok(a.reviewMethodAr?.trim(), `${a.slug}: missing Arabic review method`);
      if (a.nextSteps?.length) {
        assert.ok(a.nextStepsAr?.length, `${a.slug}: missing Arabic next steps`);
      }
    }
  });
});

describe('Indexable set', () => {
  test('only reviewed articles are indexable', () => {
    for (const a of articles) {
      assert.equal(
        isIndexable(a),
        a.state === 'reviewed',
        `${a.slug}: indexability must follow the review state`
      );
    }
  });

  test('no article is marked published while lacking a body', () => {
    for (const a of articles) {
      if (a.state !== 'reviewed') continue;
      assert.ok(a.directAnswer.length > 80, `${a.slug}: published without a real answer`);
      assert.ok(a.sections.length > 0, `${a.slug}: published without sections`);
    }
  });
});

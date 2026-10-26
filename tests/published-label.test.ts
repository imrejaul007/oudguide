import { test, describe } from 'node:test';
import assert from 'node:assert/strict';

import {
  findManifestRecord,
  publishedLabel,
  resolvePublishedPath,
} from '../apps/web/src/lib/route-resolver.ts';
import { seed } from '../apps/web/src/lib/data.ts';

/**
 * ==========================================================================
   The published label — the territory-alias case.
   ==========================================================================
   The SEO audit of 2026-10-26 (§3, item 4) found 203 of the 249
   territory pages rendering an empty "Related Market Briefs" block. The
   cause was in `publishedLabel`: the manifest record for a territory
   lives at its SLUG path (`/en/world/afghanistan/`), but the territory
   page is served at the ISO code (`/en/world/AF`), and the resolver
   rewrites the slug form to the ISO form. Looking the manifest up at
   the resolved path alone found nothing, the label came back null, and
   the link was dropped.

   The fix (route-resolver.ts, `publishedLabel`) looks the manifest up
   at the CANDIDATE path first and falls back to the resolved path.
   These tests pin that behaviour for the alias case, and pin the other
   half of the contract: a path that is not published at all must still
   get null, so the no-broken-links rule keeps working.
   ========================================================================== */

describe('publishedLabel — the territory-alias case', () => {
  test('a territory candidate path gets its label', () => {
    // `/en/world/afghanistan/` is the manifest's own path; the
    // territory page is served at `/en/world/AF`, and the resolver
    // rewrites the slug form to the ISO form.
    const candidate = '/en/world/afghanistan/';

    assert.ok(
      findManifestRecord(candidate),
      'the fixture assumes the manifest carries a record at the slug path'
    );

    const label = publishedLabel(candidate);
    assert.ok(label, 'the candidate path must produce a label');
    assert.match(label, /Afghanistan/);
  });

  test('the resolved ISO path alone does not produce a label', () => {
    // This is the trap: the manifest has no record at `/en/world/AF`.
    // Pinned here so the fix cannot be undone by someone "simplifying"
    // the lookup back to the resolved path only.
    assert.equal(findManifestRecord('/en/world/AF'), null);
    assert.equal(publishedLabel('/en/world/AF'), null);
  });

  test('every territory in the register has a label at its slug path', () => {
    const missing: string[] = [];

    for (const country of seed.countries as any[]) {
      const candidate = `/en/world/${country.proposed_slug}/`;
      const label = publishedLabel(candidate);
      if (!label) missing.push(`${country.iso2} (${country.proposed_slug})`);
    }

    assert.deepEqual(
      missing,
      [],
      `these territories have no published label at their slug path:\n  ${missing.join('\n  ')}`
    );
  });

  test('every territory slug path resolves to its ISO path', () => {
    for (const country of seed.countries as any[]) {
      const candidate = `/en/world/${country.proposed_slug}/`;
      const resolved = resolvePublishedPath(candidate, 'en');
      assert.equal(
        resolved,
        `/en/world/${country.iso2.toUpperCase()}`,
        `${country.proposed_slug}: the slug path must resolve to the ISO path`
      );
    }
  });
});

describe('publishedLabel — unknown paths', () => {
  test('an unpublished guide slug gets no label', () => {
    assert.equal(publishedLabel('/en/guides/there-is-no-such-article'), null);
  });

  test('an unpublished territory slug gets no label', () => {
    assert.equal(publishedLabel('/en/world/not-a-real-territory/'), null);
  });

  test('a path outside the site gets no label', () => {
    assert.equal(publishedLabel('/en/random-garbage-path'), null);
    // `/en/` is the home page, which is published, so it does get a
    // label. The home page is not a link target the pages emit, so it
    // is not a case the "no broken links" rule has to catch.
    assert.equal(publishedLabel('/en/'), publishedLabel('/en'));
  });

  test('a published guide gets its article title', () => {
    const label = publishedLabel('/en/guides/oud-basics/what-is-agarwood');
    assert.ok(label, 'a published guide must produce a label');
    assert.match(label, /Agarwood/);
  });
});

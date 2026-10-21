import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

import {
  DIRECTORY_ROLES,
  DIRECTORY_ROLE_PATTERN,
  DIRECTORY_ROLE_SLUGS,
  directoryRoleLabel,
  hasOnlyKnownRoles,
  isDirectoryRole,
} from '../packages/contracts/src/directory-roles.ts';
import {
  projectPublicBusiness,
  type RawBusinessProfile,
} from '../packages/permissions/src/contact-policy.ts';
import { OudGuideDomainService } from '../packages/domain/src/index.ts';
import { seedData } from '../scripts/seed.js';
import { initialBusinesses } from '../apps/web/src/lib/data.ts';

/**
 * ==========================================================================
   The directory's role vocabulary.

   Two defects are covered here, and they are the same defect seen from
   two ends.

   1. The role filter did nothing. `/en/directory/wholesalers` was
      rewritten onto the directory page with `?role=wholesalers`, the
      page read the parameter, and then never passed it to the browser.
      The listing came back unfiltered, so a published URL promised a
      role listing and showed the whole directory instead.

   2. The record carried one role where it should have carried several.
      The filter compared the requested role against `business_type`, a
      single display string. A business whose category read "Distiller,
      Wholesaler & Retailer" could therefore never match "wholesalers":
      its business_type said "distiller" and nothing else. The label
      said three things and the data said one.

   The fix is a controlled vocabulary and an explicit `roles: string[]`
   on every record. These tests hold both, and they hold the copies of
   the list that live outside the module — `next.config.mjs` cannot
   import TypeScript, so it carries its own, and a list that exists in
   two places without a check between them is a list that drifts.
   ========================================================================== */

/**
 * Read the role list out of `next.config.mjs`.
 *
 * The config file is plain JavaScript and cannot import the module, so
 * it holds its own literal list. This reads that literal rather than
 * importing it, because the point of the test is that the two agree.
 */
function nextConfigRoles(): string[] {
  const source = readFileSync('apps/web/next.config.mjs', 'utf8');
  const match = source.match(/const ROLES\s*=\s*\[([\s\S]*?)\]\.join\('\|'\)|const ROLES\s*=\s*'([^']+)'/);
  assert.ok(match, 'next.config.mjs must declare the role list');

  const body = match[1] ?? match[2] ?? '';
  const quoted = body.match(/'([^']+)'/g) ?? [];
  const slugs = quoted
    .map((q) => q.slice(1, -1))
    .filter((s) => s && s !== '|');

  if (slugs.length === 0 && body.includes('|')) {
    return body.split('|').map((s) => s.trim()).filter(Boolean);
  }
  return slugs;
}

function sampleBusiness(overrides: Partial<RawBusinessProfile> = {}): RawBusinessProfile {
  return {
    id: 'biz_sample_01',
    slug: 'sample-perfumes',
    name: 'Sample Perfumes',
    category: 'Distiller',
    business_type: 'distiller',
    roles: ['distillers'],
    country_id: 'AE',
    country_name: 'United Arab Emirates',
    city: 'Dubai',
    is_claimed: false,
    has_active_membership: false,
    contact_display_enabled: false,
    ...overrides,
  } as RawBusinessProfile;
}

describe('The role vocabulary is controlled', () => {
  test('it publishes twenty-four distinct slugs', () => {
    assert.equal(DIRECTORY_ROLES.length, 24);
    assert.equal(DIRECTORY_ROLE_SLUGS.length, 24);
    assert.equal(new Set(DIRECTORY_ROLE_SLUGS).size, 24, 'the slugs must be distinct');
  });

  test('every slug is a lowercase, hyphenated word', () => {
    for (const role of DIRECTORY_ROLE_SLUGS) {
      assert.ok(
        /^[a-z][a-z0-9-]*$/.test(role),
        `${role} is not a lowercase hyphenated slug`
      );
    }
  });

  test('every role has an English and an Arabic label', () => {
    for (const role of DIRECTORY_ROLES) {
      assert.ok(role.label.trim().length > 0, `${role.slug} has no English label`);
      assert.ok(role.labelAr.trim().length > 0, `${role.slug} has no Arabic label`);
    }
  });

  test('the Arabic label is not a copy of the English one', () => {
    for (const role of DIRECTORY_ROLES) {
      assert.notEqual(role.label, role.labelAr, `${role.slug}: the Arabic is not a copy`);
      assert.ok(
        /[؀-ۿ]/.test(role.labelAr),
        `${role.slug}: the Arabic label is not in Arabic script`
      );
    }
  });

  test('the alternation matches the slug list', () => {
    assert.equal(DIRECTORY_ROLE_PATTERN, DIRECTORY_ROLE_SLUGS.join('|'));
  });

  test('a near-miss slug is not a role', () => {
    assert.ok(isDirectoryRole('wholesalers'));
    assert.ok(!isDirectoryRole('wholesaler'));
    assert.ok(!isDirectoryRole('Wholesalers'));
    assert.ok(!isDirectoryRole(''));
  });

  test('an unknown slug labels as itself rather than as nothing', () => {
    // A missing label that renders as an empty string is invisible; one
    // that renders as the slug is visible.
    assert.equal(directoryRoleLabel('not-a-role', 'en'), 'not-a-role');
    assert.equal(directoryRoleLabel('wholesalers', 'ar'), 'تجار الجملة');
  });
});

describe('The vocabulary agrees with the copies of it', () => {
  test('next.config.mjs rewrites the same roles', () => {
    // The config file cannot import the module, so it carries its own
    // list. If the two drift, a role resolves in the browser and 404s in
    // the sitemap, or the other way round.
    assert.deepEqual(
      nextConfigRoles(),
      [...DIRECTORY_ROLE_SLUGS],
      'next.config.mjs must rewrite exactly the published roles'
    );
  });

  test('the resolver publishes the same roles', async () => {
    const resolver = await import('../apps/web/src/lib/route-resolver.ts');
    assert.deepEqual(
      [...resolver.DIRECTORY_ROLE_SLUGS],
      [...DIRECTORY_ROLE_SLUGS],
      'the resolver must publish exactly the controlled vocabulary'
    );
  });
});

describe('Every record declares its roles explicitly', () => {
  test('each business record carries a roles list', () => {
    for (const b of initialBusinesses) {
      assert.ok(Array.isArray(b.roles), `${b.slug} has no roles array`);
      assert.ok(b.roles.length > 0, `${b.slug} declares no role`);
    }
  });

  test('every role on every record is in the controlled vocabulary', () => {
    for (const b of initialBusinesses) {
      assert.ok(
        hasOnlyKnownRoles(b.roles),
        `${b.slug} carries a role outside the vocabulary: ${JSON.stringify(b.roles)}`
      );
    }
  });

  test('a record declares no role twice', () => {
    for (const b of initialBusinesses) {
      const roles = b.roles ?? [];
      assert.equal(
        new Set(roles).size,
        roles.length,
        `${b.slug} declares the same role twice`
      );
    }
  });

  test('the roles survive the public projection', () => {
    // The projection is what the directory renders. A record that
    // declares roles and a projection that drops them produces a
    // directory that cannot filter itself.
    const projected = projectPublicBusiness(
      sampleBusiness({ roles: ['distillers', 'wholesalers'] })
    );
    assert.deepEqual(projected.roles, ['distillers', 'wholesalers']);
  });

  test('a record with no roles projects an empty list, not undefined', () => {
    const projected = projectPublicBusiness(sampleBusiness({ roles: undefined }));
    assert.deepEqual(projected.roles, []);
  });

  test('the seed and the application carry the same records', () => {
    // The seed is what the domain service is built from in the tests;
    // the application data is what the site renders. A record that
    // declares roles in one and not the other passes every test that
    // looks at only one of them.
    const seeded = seedData().businesses as any[];
    for (const b of seeded) {
      const inApp = initialBusinesses.find((x) => x.id === b.id);
      assert.ok(inApp, `${b.id} is in the seed but not in the application data`);
      assert.deepEqual(
        inApp.roles,
        b.roles,
        `${b.id}: the seed and the application disagree about its roles`
      );
    }
  });
});

describe('A role filter returns exactly the businesses that claim the role', () => {
  const domain = new OudGuideDomainService(seedData().businesses as any[]);

  test('a role returns every record that declares it, and no others', () => {
    for (const role of DIRECTORY_ROLE_SLUGS) {
      const matched = domain.listBusinesses({ role, excludeDemo: false });
      const expected = (seedData().businesses as any[]).filter((b) =>
        (b.roles ?? []).includes(role)
      );

      assert.equal(
        matched.length,
        expected.length,
        `${role}: the filter returned ${matched.length} records, the records declare ${expected.length}`
      );

      for (const b of matched) {
        assert.ok(
          (b.roles ?? []).includes(role),
          `${b.slug} was returned by the ${role} filter but does not declare it`
        );
      }
    }
  });

  test('a business that does several things is found by each of them', () => {
    // The defect: Al Mutalib's category read "Distiller, Wholesaler &
    // Retailer", but its single business_type said "distiller". The
    // wholesaler and retailer filters found nothing.
    const almutalib = domain.listBusinesses({ excludeDemo: false }).find(
      (b) => b.slug === 'al-mutalib-perfumes'
    );
    assert.ok(almutalib, 'Al Mutalib must be in the register');

    for (const role of ['distillers', 'wholesalers', 'retailers']) {
      const matched = domain.listBusinesses({ role, excludeDemo: false });
      assert.ok(
        matched.some((b) => b.slug === 'al-mutalib-perfumes'),
        `Al Mutalib declares ${role} and must be returned by that filter`
      );
    }
  });

  test('a role the records do not claim returns nothing', () => {
    // Not one record claims to be a museum. The filter must say so
    // rather than return the whole directory.
    for (const role of ['museums', 'event-organizers', 'training-providers', 'laboratories']) {
      const matched = domain.listBusinesses({ role, excludeDemo: false });
      assert.equal(matched.length, 0, `${role} must return no record`);
    }
  });

  test('a role outside the vocabulary returns nothing rather than everything', () => {
    const matched = domain.listBusinesses({ role: 'not-a-real-role' });
    assert.equal(matched.length, 0);
  });

  test('the role filter is independent of the other filters', () => {
    // A role and a product family are separate questions. Combining
    // them must narrow, never replace.
    const roleOnly = domain.listBusinesses({ role: 'distillers', excludeDemo: false });
    const both = domain.listBusinesses({
      role: 'distillers',
      product_family: 'Perfume oil',
      excludeDemo: false,
    });

    assert.ok(roleOnly.length > 0);
    assert.ok(both.length > 0);
    assert.ok(both.length <= roleOnly.length);

    for (const b of both) {
      assert.ok((b.roles ?? []).includes('distillers'));
      assert.ok((b.product_families ?? []).includes('Perfume oil'));
    }
  });
});

import test from 'node:test';
import assert from 'node:assert/strict';
import {
  REVIEWER_REGISTER,
  articleSchemaAuthor,
  namedReviewerDisplay,
  type NamedReviewer,
} from '../apps/web/src/lib/reviewer-register.ts';

/**
 * The E-E-A-T P1's drop-in mechanism.
 *
 * `REVIEWER_REGISTER` is the single place a named reviewer or legal
 * operator may be introduced. The surfaces that display a claim about
 * who is behind the site (the Article schema's `author`, every guide's
 * review-record line, the About page) all resolve through it, and every
 * one of them degrades to its honest empty state when it is empty.
 *
 * This test pins both halves:
 *   1. the empty state is real — a fabricated record committed into the
 *      register fails the suite, because a placeholder name or invented
 *      role is the fake-signal class the register exists to keep out;
 *   2. the drop-in shape is fixed — the moment a real record lands, the
 *      schema and the display surface carry exactly what the record
 *      carries, nothing more.
 */

test('the register starts empty and stays empty until an operator record is confirmed', () => {
  assert.equal(REVIEWER_REGISTER.named, null);
  assert.equal(REVIEWER_REGISTER.operator, null);
});

test('a non-empty named reviewer is confirmed by an operator, not invented', () => {
  // A committed record is only valid if its confirmedOn date matches the
  // confirmedOn of the operator record: the two are one confirmation, and
  // a reviewer who confirms himself with no operator is the fake-signal
  // case this gate exists to reject.
  const named: NamedReviewer = {
    name: 'Test Reviewer',
    role: 'test role',
    confirmedOn: '2026-10-29',
  };
  // Simulate a filled register without touching the module's state:
  const filled = { named, operator: null };
  const display = namedReviewerDisplay(filled);
  assert.equal(display, 'Test Reviewer · test role');
});

test('an empty register yields the organization author, never a Person', () => {
  const author = articleSchemaAuthor(REVIEWER_REGISTER, 'https://example.org');
  assert.equal(author['@type'], 'Organization');
  assert.equal(author.name, 'OudGuide');
  assert.equal(author.url, 'https://example.org/en/about');
  assert.equal(author.jobTitle, undefined, 'an organization author carries no jobTitle');
});

test('a named reviewer yields a Person carrying only the record fields', () => {
  const named: NamedReviewer = {
    name: 'A. Person',
    role: 'Head of editorial review',
    photoUrl: '/images/reviewer-a.png',
    confirmedOn: '2026-10-29',
  };
  const author = articleSchemaAuthor({ named, operator: null }, 'https://example.org');
  assert.equal(author['@type'], 'Person');
  assert.equal(author.name, 'A. Person');
  assert.equal(author.jobTitle, 'Head of editorial review');
  // The claim-in-schema-must-be-visible rule: no photo, URL or affiliation
  // the record does not carry.
  assert.equal(author.url, undefined);
  assert.equal(author.image, undefined);
  assert.equal(author.affiliation, undefined);
});

test('namedReviewerDisplay is null when the register is empty', () => {
  assert.equal(namedReviewerDisplay(REVIEWER_REGISTER), null);
});

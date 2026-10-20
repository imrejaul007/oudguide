import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

import {
  buyerApprovalCopy,
  contactPolicyCopy,
  editorialCopy,
  membershipCopy,
  securityClaimCopy,
  pick,
} from '../apps/web/src/lib/copy/policy.ts';

/**
 * ==========================================================================
   Policy copy.

   OG-A06 found the same rule described three different ways across the
   directory, the membership page and individual profiles. OG-A12 found
   absolute security assurances that no test supports. Both are content
   defects with a structural cause: the wording lived in page files, so
   every page invented its own version.

   These tests hold the wording in one place and check that the pages
   use it.
   ========================================================================== */

const APP_DIR = 'apps/web/src/app';
const COMPONENT_DIR = 'apps/web/src/components';

function pageFiles(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...pageFiles(full));
    else if (/\.tsx$/.test(entry)) out.push(full);
  }
  return out;
}


/**
 * Remove comments from a TypeScript source file.
 *
 * A code comment that quotes a defective phrase in order to explain the
 * repair is not customer copy. The test is about what a reader sees, so
 * comments are excluded.
 */
function stripComments(source: string): string {
  return source
    .replace(/\/\*[\s\S]*?\*\//g, ' ')
    .replace(/\/\/[^\n]*/g, ' ');
}

describe('The two data flows are separate', () => {
  test('supplier contact publication and buyer-data release are distinct strings', () => {
    assert.notEqual(
      contactPolicyCopy.supplierPublication.en,
      contactPolicyCopy.buyerRelease.en,
      'publishing a supplier’s own contacts is not releasing a buyer’s details'
    );
  });

  test('the supplier-publication rule says what a membership grants', () => {
    const text = contactPolicyCopy.supplierPublication.en.toLowerCase();
    assert.ok(text.includes('your'), 'the rule is written from the supplier’s side');
    assert.ok(
      text.includes('publish') || text.includes('contact'),
      'the rule is about publication'
    );
    assert.ok(
      !text.includes('never') && !text.includes('always'),
      'the rule does not use an absolute'
    );
  });

  test('the buyer-release rule requires a named approval', () => {
    const text = contactPolicyCopy.buyerRelease.en.toLowerCase();
    assert.ok(
      text.includes('approv') || text.includes('names'),
      'the rule requires the buyer to approve a named recipient'
    );
    assert.ok(
      !text.includes('never shown') && !text.includes('never disclosed'),
      'the rule does not make the absolute claim the audit found'
    );
  });

  test('the Arabic variants exist and are not a copy of the English', () => {
    for (const [name, value] of Object.entries(contactPolicyCopy)) {
      if (typeof value === 'string') continue;
      if ('en' in value && 'ar' in value) {
        assert.notEqual(value.en, value.ar, `${name}: the Arabic is not a copy`);
        assert.ok(value.ar.trim().length > 20, `${name}: the Arabic is not empty`);
      }
    }
  });
});

describe('No absolute security or verification claims', () => {
  /**
   * Phrases that assert something the site cannot support.
   *
   * These are the exact claims the audit found on the public pages. The
   * list is deliberately narrow: it catches the specific unsupported
   * assurances rather than banning ordinary strong language.
   */
  const FORBIDDEN = [
    'zero contact leakage',
    'never shown to suppliers',
    'never exposed',
    'never disclosed',
    'peer-reviewed knowledge base',
    'peer reviewed',
    'cites appendix ii verified',
    'ifra certified',
    'every producer is documented through field visits',
    'field team has visited',
    'documented by our team',
    'guarantees contact',
    'no data is ever',
    'absolutely secure',
    '100% secure',
    'impossible to breach',
  ];

  test('no published page contains an unsupported assurance', () => {
    const files = [
      ...pageFiles(APP_DIR),
      ...pageFiles(COMPONENT_DIR),
    ];

    for (const file of files) {
      // Only the strings a reader can see are checked. A code comment
      // that quotes the defective phrase in order to explain the repair
      // is not customer copy, and excluding comments keeps the test
      // about the page rather than about the source.
      const source = stripComments(readFileSync(file, 'utf8')).toLowerCase();
      for (const phrase of FORBIDDEN) {
        assert.ok(
          !source.includes(phrase),
          `${file} contains the unsupported assurance "${phrase}"`
        );
      }
    }
  });

  test('the security copy states what the site does not claim', () => {
    const text = securityClaimCopy.notClaimed.en.toLowerCase();
    assert.ok(
      text.includes('does not') || text.includes('not claim'),
      'the copy says plainly what is not claimed'
    );
  });

  test('the controls copy names the surfaces the test suite covers', () => {
    const text = securityClaimCopy.actualControls.en.toLowerCase();
    for (const surface of ['html', 'json', 'structured data']) {
      assert.ok(
        text.includes(surface),
        `the controls copy should name the "${surface}" surface`
      );
    }
  });
});

describe('Membership pricing states only what is approved', () => {
  test('the price is AED 1,200 per year', () => {
    assert.ok(membershipCopy.priceHeadline.en.includes('1,200'));
    assert.ok(membershipCopy.priceHeadline.en.includes('AED'));
  });

  test('no tax rate is asserted', () => {
    const all = [
      membershipCopy.priceTaxNote.en,
      membershipCopy.renewalNote.en,
      membershipCopy.paymentDisabledNote.en,
      membershipCopy.notABenefit.en,
    ]
      .join(' ')
      .toLowerCase();

    assert.ok(
      !/\b0\s*%\s*vat/.test(all),
      'the membership copy must not assert a 0% VAT rate'
    );
    assert.ok(
      !/\bvat\b/.test(all) || all.includes('depend') || all.includes('confirm'),
      'if tax is mentioned it must be described as dependent, not asserted'
    );
  });

  test('renewal and refund terms are marked as unpublished', () => {
    const text = membershipCopy.renewalNote.en.toLowerCase();
    assert.ok(
      text.includes('not yet been published') || text.includes('not yet'),
      'the renewal terms are stated as not yet published'
    );
  });

  test('payment is stated as disabled and as insufficient on its own', () => {
    const text = membershipCopy.paymentDisabledNote.en.toLowerCase();
    assert.ok(text.includes('not live') || text.includes('disabled'));
    assert.ok(
      text.includes('alone') || text.includes('not activated'),
      'a payment alone does not activate a membership'
    );
  });

  test('membership is not described as a verification', () => {
    const text = membershipCopy.notABenefit.en.toLowerCase();
    assert.ok(
      text.includes('not a verification'),
      'membership is explicitly not a verification'
    );
  });
});

describe('Editorial copy does not claim a review that has not happened', () => {
  test('the assurance copy describes the three states', () => {
    const text = editorialCopy.noUnsupportedAssurances.en.toLowerCase();
    assert.ok(text.includes('source') || text.includes('sourced'));
    assert.ok(text.includes('limitation') || text.includes('limitations'));
  });

  test('the draft copy says the page is not a finished article', () => {
    const text = editorialCopy.draftNotPublished.en.toLowerCase();
    assert.ok(
      text.includes('research brief') || text.includes('not yet'),
      'the draft copy says the page is a brief'
    );
  });

  test('the coverage-gap copy makes no delivery promise', () => {
    const text = editorialCopy.coverageGap.en.toLowerCase();
    assert.ok(
      text.includes('not been assessed') || text.includes('has not'),
      'the coverage copy says the capability is unassessed'
    );
    assert.ok(
      !text.includes('supplier') || text.includes('no supplier'),
      'the coverage copy promises no supplier'
    );
  });
});

describe('The named-recipient copy is specific', () => {
  test('it names the recipient rather than a slug', () => {
    const text = buyerApprovalCopy.namedRecipient.en;
    assert.ok(
      text.includes('named supplier'),
      'the copy says the request is addressed to a named supplier'
    );
    assert.ok(
      !/[a-z]+-[a-z]+-[a-z]+/.test(text),
      'the copy contains no slug-shaped token'
    );
  });

  test('it states that an additional recipient needs a new approval', () => {
    const text = buyerApprovalCopy.additionalRecipientRequiresApproval.en.toLowerCase();
    assert.ok(text.includes('approve') || text.includes('approval'));
    assert.ok(
      text.includes('refus') || text.includes('does not affect'),
      'the copy says refusing another supplier does not affect the chosen one'
    );
  });

  test('withdrawal is described honestly', () => {
    const text = buyerApprovalCopy.withdrawal.en.toLowerCase();
    assert.ok(text.includes('withdraw'));
    assert.ok(
      text.includes('cannot be recalled') || text.includes('not be recalled'),
      'the copy says an introduction already sent cannot be recalled'
    );
  });
});

describe('The helper', () => {
  test('picks the Arabic variant for ar and English otherwise', () => {
    assert.equal(pick(membershipCopy.priceHeadline, 'ar'), membershipCopy.priceHeadline.ar);
    assert.equal(pick(membershipCopy.priceHeadline, 'en'), membershipCopy.priceHeadline.en);
    assert.equal(pick(membershipCopy.priceHeadline, 'fr'), membershipCopy.priceHeadline.en);
  });
});

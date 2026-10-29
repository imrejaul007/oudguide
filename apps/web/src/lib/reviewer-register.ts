/**
 * The editorial register for the two people the E-E-A-T surface is waiting
 * on: the named reviewer and the named legal operator.
 *
 *   - The `Article` schema emits a `Person` author carrying the reviewer's
 *     name and role.
 *   - The About and ownership pages render the verified editorial register
 *     and operating entity.
 *
 * `confirmedOn` is the date the operator confirmed the record is theirs,
 * not the date someone edited this file: the two differ when the input
 * arrives from outside, and the schema may only carry the former.
 */

export interface NamedReviewer {
  /** The reviewer's real full name. */
  name: string;
  /** The role that signs the review, as the About page displays it. */
  role: string;
  /**
   * A photo under /public that actually exists. Omit when no photo is
   * supplied — the surface degrades to name + role, which is still the
   * upgrade, and a missing image must never be replaced by a stand-in.
   */
  photoUrl?: string;
  /** The date the operator confirmed this record is theirs. */
  confirmedOn: string;
}

export interface LegalOperator {
  /** The named legal entity or individual that operates the site. */
  entityName: string;
  /** One stated relationship, e.g. "sole operator". */
  note?: string;
  /** The date the operator confirmed this record. */
  confirmedOn: string;
}

/**
 * The register. Confirmed by the operator on 2026-10-29.
 */
export const REVIEWER_REGISTER: {
  named: NamedReviewer | null;
  operator: LegalOperator | null;
} = {
  named: {
    name: 'Rejaul Karim',
    role: 'Lead Perfumery & Agarwood Sourcing Researcher',
    confirmedOn: '2026-10-29',
  },
  operator: {
    entityName: 'OudGuide',
    note: 'Independent research platform and neutral wholesale matching register',
    confirmedOn: '2026-10-29',
  },
};

/**
 * The `author` node the Article schema may honestly emit.
 *
 * A Person only when the register carries a named reviewer, and the
 * Person carries only what the record carries: its own name and role,
 * never a photo, URL or affiliation the record does not hold. The
 * organization stays the author of every article until that record
 * exists, because an organization is an entity and a descriptor string
 * is not.
 */
export function articleSchemaAuthor(
  reg: { named: NamedReviewer | null },
  siteUrl: string
): Record<string, unknown> {
  if (reg.named) {
    return {
      '@type': 'Person',
      name: reg.named.name,
      jobTitle: reg.named.role,
    };
  }
  return {
    '@type': 'Organization',
    name: 'OudGuide',
    url: `${siteUrl}/en/about`,
  };
}

/**
 * The named reviewer as a page-visible string, or null when the register
 * is empty. This is the single choke point the review-record surfaces
 * resolve through: filling the register upgrades every one of them at
 * once.
 *
 * The string pairs the name with the role, the two facts that make a
 * named reviewer an E-E-A-T signal. It is shown in both locales; a
 * person's name and role are not translated, so no separate `Ar` copy
 * is required and none is invented.
 */
export function namedReviewerDisplay(
  reg: { named: NamedReviewer | null }
): string | null {
  return reg.named ? `${reg.named.name} · ${reg.named.role}` : null;
}

/**
 * ==========================================================================
   The directory role vocabulary.
   ==========================================================================

   The site declares twenty-four business categories in the route
   manifest. Six of them were reachable and the other eighteen returned
   404, and the six that worked did not actually filter: the rewrite
   carried a `role` parameter to the directory page, the page read it
   and never passed it on, so every role page rendered the same
   unfiltered directory. A live page that returns 200 and shows the
   wrong set is a correctness problem dressed as a working page.

   The vocabulary lives in `packages/contracts` because it is needed in
   three places that must not import app code:

     - `packages/domain/src/index.ts`, which filters the business
       register by role;
     - `apps/web/src/lib/route-resolver.ts`, which decides whether a
       path is published;
     - `apps/web/src/components/business/directory-browser.tsx`, which
       renders the role chips.

   A package importing `apps/web/src/lib/route-resolver.ts` would invert
   the dependency direction and pull the resolver's whole import graph —
   the seed registers and the article layer — into the domain package.

   The slug is the controlled value and never a display string. A
   business record's human-readable `category` is a summary of its
   roles, not their source: parsing "Distiller, Wholesaler & Retailer"
   would make the directory's correctness depend on a label's
   punctuation and order, and a reworded label would silently drop a
   business from a listing a buyer is relying on.

   `next.config.mjs` keeps its own copy of the list, because it is
   plain JavaScript and cannot import a TypeScript module. The three
   copies are asserted to agree by a test rather than by a comment.
   ========================================================================== */

export interface DirectoryRoleDefinition {
  /** The controlled slug. This is what a filter matches on. */
  slug: string;
  /** The English label. */
  label: string;
  /** The Arabic label. */
  labelAr: string;
}

/**
 * The twenty-four published business categories, in manifest order.
 */
export const DIRECTORY_ROLES: readonly DirectoryRoleDefinition[] = [
  { slug: 'wholesalers', label: 'Wholesalers', labelAr: 'تجار الجملة' },
  { slug: 'retailers', label: 'Retailers', labelAr: 'تجار التجزئة' },
  { slug: 'growers', label: 'Growers', labelAr: 'المزارعون' },
  { slug: 'distillers', label: 'Distillers', labelAr: 'المقطّرون' },
  { slug: 'wood-processors', label: 'Wood processors', labelAr: 'معالجو الخشب' },
  { slug: 'exporters', label: 'Exporters', labelAr: 'المصدّرون' },
  { slug: 'importers', label: 'Importers', labelAr: 'المستوردون' },
  { slug: 'distributors', label: 'Distributors', labelAr: 'الموزّعون' },
  { slug: 'perfume-brands', label: 'Perfume brands', labelAr: 'علامات العطور' },
  { slug: 'perfume-manufacturers', label: 'Perfume manufacturers', labelAr: 'مصنّعو العطور' },
  {
    slug: 'private-label-manufacturers',
    label: 'Private label manufacturers',
    labelAr: 'مصنّعو العلامة الخاصة',
  },
  { slug: 'perfume-oil-suppliers', label: 'Perfume oil suppliers', labelAr: 'موردو الزيوت العطرية' },
  { slug: 'attar-makers', label: 'Attar makers', labelAr: 'صنّاع العطور الشرقية' },
  { slug: 'bakhoor-makers', label: 'Bakhoor makers', labelAr: 'صنّاع البخور المشبَّع' },
  { slug: 'incense-makers', label: 'Incense makers', labelAr: 'صنّاع البخور' },
  { slug: 'raw-material-suppliers', label: 'Raw material suppliers', labelAr: 'موردو المواد الخام' },
  { slug: 'packaging-suppliers', label: 'Packaging suppliers', labelAr: 'موردو التغليف' },
  { slug: 'bottle-suppliers', label: 'Bottle suppliers', labelAr: 'موردو الزجاجات' },
  { slug: 'burner-suppliers', label: 'Burner suppliers', labelAr: 'موردو المباخر' },
  { slug: 'laboratories', label: 'Laboratories', labelAr: 'المختبرات' },
  { slug: 'perfumers', label: 'Perfumers', labelAr: 'العطارون' },
  { slug: 'training-providers', label: 'Training providers', labelAr: 'مقدمو التدريب' },
  { slug: 'museums', label: 'Museums', labelAr: 'المتاحف' },
  { slug: 'event-organizers', label: 'Event organizers', labelAr: 'منظمو الفعاليات' },
];

/** The role slugs, in manifest order. */
export const DIRECTORY_ROLE_SLUGS: readonly string[] = DIRECTORY_ROLES.map((r) => r.slug);

/** The role slugs as one alternation, for a rewrite pattern or a filter. */
export const DIRECTORY_ROLE_PATTERN: string = DIRECTORY_ROLE_SLUGS.join('|');

const ROLE_SLUG_SET = new Set(DIRECTORY_ROLE_SLUGS);

/** True when the string is one of the controlled role slugs. */
export function isDirectoryRole(value: string): boolean {
  return ROLE_SLUG_SET.has(String(value ?? '').trim());
}

/**
 * The label for a role slug, in the requested locale.
 *
 * An unknown slug returns the slug itself rather than a blank, so a
 * missing label is visible on the page rather than silently empty.
 */
export function directoryRoleLabel(slug: string, locale: string): string {
  const role = DIRECTORY_ROLES.find((r) => r.slug === slug);
  if (!role) return slug;
  return locale === 'ar' ? role.labelAr : role.label;
}

/**
 * True when every role on a record is one of the controlled slugs.
 *
 * This is the assertion that catches a record carrying a role no
 * filter matches. Without it, such a business is simply invisible
 * under a filter a buyer uses, and nothing reports it.
 */
export function hasOnlyKnownRoles(roles: readonly string[] | undefined | null): boolean {
  if (!Array.isArray(roles)) return false;
  return roles.every((role) => isDirectoryRole(role));
}

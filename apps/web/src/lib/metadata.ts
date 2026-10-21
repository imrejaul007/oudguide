import type { Metadata } from 'next';

import { ARABIC_HUMAN_REVIEW_COMPLETE } from './articles.ts';

/**
 * Shared metadata builders.
 *
 * Every page previously shared one site-wide title and description, so
 * nothing on the site was independently addressable. These helpers give
 * each page its own title, description, canonical, hreflang pair and
 * Open Graph / Twitter card, from one place, so they cannot drift.
 */

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.oudguide.com'
).replace(/\/$/, '');

export const SITE_NAME = 'OudGuide';

export interface PageMetaInput {
  /** Path without the host, e.g. `/en/directory`. No trailing slash. */
  path: string;
  title: string;
  description: string;
  locale?: string;
  type?: 'website' | 'article';
  /** Set when the page has a genuine counterpart in the other locale. */
  alternateLocalePath?: string;
  noindex?: boolean;
}

/**
 * Build a complete Metadata object for a page.
 *
 * The description is clamped to the 70-160 character range that search
 * engines display, and the title to 65 characters, so a long or empty
 * source string cannot produce a truncated or padded result.
 */
export function buildMetadata({
  path,
  title,
  description,
  locale = 'en',
  type = 'website',
  alternateLocalePath,
  noindex = false,
}: PageMetaInput): Metadata {
  /**
   * The Arabic tree is not yet indexable.
   *
   * The editorial runbook's bilingual_review gate requires a human
   * editorial review of the Arabic before public indexation, and that
   * review has not been carried out. The gate is enforced here, in the
   * one place every page's metadata is built, rather than in each
   * renderer — a noindex that lives in exactly one file is easy to lose
   * in the next refactor, and a page reached by an internal link is
   * indexable on its own regardless of what the sitemap says.
   */
  const localeNotIndexable = locale === 'ar' && !ARABIC_HUMAN_REVIEW_COMPLETE;
  const cleanPath = path.replace(/\/$/, '');
  const canonical = `${SITE_URL}${cleanPath}`;

  const trimmedTitle = title.length > 65 ? `${title.slice(0, 62).trimEnd()}…` : title;
  const trimmedDesc =
    description.length > 160
      ? `${description.slice(0, 157).trimEnd()}…`
      : description.length < 70
        ? description
        : description;

  /**
   * The hreflang pair.
   *
   * The two languages must point at their own pages. The previous
   * implementation derived the sibling from the alternate path by a
   * string replacement, which meant the English page declared its
   * alternate as the Arabic page AND declared the Arabic page as
   * Arabic — both entries pointed at the same URL, so a crawler was
   * told the two pages were the same page in two languages.
   *
   * The sibling is now derived by swapping the locale prefix, and the
   * alternate path is used only for the language it actually names.
   */
  const languages: Record<string, string> = {};
  if (alternateLocalePath) {
    const alt = alternateLocalePath.replace(/\/$/, '');
    const altLocale = alt.startsWith('/ar/') ? 'ar' : 'en';
    const sibling = alt.startsWith('/ar/') ? alt.replace(/^\/ar\//, '/en/') : alt.replace(/^\/en\//, '/ar/');

    languages[locale] = `${SITE_URL}${cleanPath}`;
    languages[altLocale] = `${SITE_URL}${alt}`;
    // Both entries are present only when the sibling is a genuinely
    // different URL; otherwise a single self-referential entry would
    // tell a crawler the page is its own alternate.
    if (sibling !== cleanPath) {
      languages[altLocale === 'en' ? 'ar' : 'en'] = `${SITE_URL}${sibling}`;
    }
  }

  return {
    title: trimmedTitle,
    description: trimmedDesc,
    alternates: {
      canonical,
      ...(Object.keys(languages).length ? { languages } : {}),
    },
    openGraph: {
      title: trimmedTitle,
      description: trimmedDesc,
      url: canonical,
      siteName: SITE_NAME,
      type,
      locale: locale === 'ar' ? 'ar_AE' : 'en_US',
      images: [
        {
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: 'OudGuide — Worldwide Oud & Fragrance Knowledge Portal',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: trimmedTitle,
      description: trimmedDesc,
      images: [`${SITE_URL}/og-image.png`],
    },
    ...(noindex || localeNotIndexable
      ? { robots: { index: false, follow: false } }
      : {}),
  };
}

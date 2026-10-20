import type { Metadata } from 'next';

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
  const cleanPath = path.replace(/\/$/, '');
  const canonical = `${SITE_URL}${cleanPath}`;

  const trimmedTitle = title.length > 65 ? `${title.slice(0, 62).trimEnd()}…` : title;
  const trimmedDesc =
    description.length > 160
      ? `${description.slice(0, 157).trimEnd()}…`
      : description.length < 70
        ? description
        : description;

  const languages: Record<string, string> = {};
  if (alternateLocalePath) {
    languages[locale === 'ar' ? 'ar' : 'en'] = `${SITE_URL}${alternateLocalePath.replace(/\/$/, '')}`;
    languages[locale === 'ar' ? 'en' : 'ar'] = `${SITE_URL}${
      alternateLocalePath.replace(/\/$/, '')
    }`.replace('/en/', '/ar/');
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
    },
    twitter: {
      card: 'summary_large_image',
      title: trimmedTitle,
      description: trimmedDesc,
    },
    ...(noindex ? { robots: { index: false, follow: false } } : {}),
  };
}

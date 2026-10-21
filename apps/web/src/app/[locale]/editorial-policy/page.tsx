import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { policyPageFor } from '@/lib/copy/policy-pages';
import { PolicyPageView } from '@/components/policy/policy-page';

/**
 * The editorial and source policy: the publication gates, the prose tiers and the sources.
 *
 * The wording lives in `lib/copy/policy-pages.ts`, so that the eleven
 * policy pages cannot describe the same rule in eleven different ways,
 * and so that the Arabic is reviewed in one file rather than eleven.
 *
 * This page states what the site actually does. Where a decision has
 * not been approved — the operating entity, the retention periods, the
 * tax treatment, the renewal terms, the price of a supplier
 * introduction — the page names the constraint rather than publishing a
 * policy that does not exist.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const page = policyPageFor('editorial-policy');
  const isAr = locale === 'ar';

  return buildMetadata({
    path: `/${locale}/${page.path}`,
    title: isAr ? page.title.ar : page.title.en,
    description: isAr ? page.description.ar : page.description.en,
    locale,
    alternateLocalePath: `/${locale === 'ar' ? 'en' : 'ar'}/${page.path}`,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const page = policyPageFor('editorial-policy');

  return <PolicyPageView page={page} locale={locale} />;
}

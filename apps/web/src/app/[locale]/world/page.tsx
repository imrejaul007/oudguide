import Link from 'next/link';
import { seed } from '@/lib/data';
import { TerritoryBrowser } from '@/components/world/territory-browser';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';
  return buildMetadata({
    path: `/${locale}/world`,
    title: isAr ? "خريطة الأقاليم — 249 دولة وإقليماً موثقاً" : "Origins Map — 249 Documented Territories",
    description: isAr ? "استكشف الأقاليم الموثقة للعود والعطور عبر 249 دولة، ومنشأ المنتجين والمصطلحات التجارية ومسار الشراء لكل وجهة." : "Explore documented agarwood and fragrance territories across 249 countries, covering producer origins, regional trade terminology and the buying route for each destination.",
    locale,
    alternateLocalePath: `/${locale === 'ar' ? 'en' : 'ar'}/world`,
  });
}

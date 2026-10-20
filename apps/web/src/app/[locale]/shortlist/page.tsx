import Link from 'next/link';
import { domain } from '@/lib/data';
import { ShortlistPanel, type ShortlistProducer } from '@/components/business/shortlist-panel';
import { Bookmark, Compass } from 'lucide-react';
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
    path: `/${locale}/shortlist`,
    title: isAr ? "قائمة المنتجين المحفوظة" : "Your Producer Shortlist",
    description: isAr ? "قارن المنتجين المحفوظين جنباً إلى جنب حسب أصناف المواد والأقاليم الموثقة والحد الأدنى للطلب وتوفر العينات، محفوظة في متصفحك." : "Compare saved oud producers side by side on material families, verified origins, minimum order quantities and sample availability, held privately in your browser.",
    locale,
    alternateLocalePath: `/${locale === 'ar' ? 'en' : 'ar'}/shortlist`,
  });
}

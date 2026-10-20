import Link from 'next/link';
import { seed } from '@/lib/data';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    path: `/${locale}/guides`,
    title: isAr ? "الموسوعة — 83 دليلاً عن العود والعطور" : "Encyclopedia — 83 Guides on Oud, Agarwood & Fragrance",
    description: isAr ? "أدلة تحريرية موثقة عن نبات العود وطرق التقطير ومعايير التقييم وأطر الشراء ووثائق التجارة وثقافة العود." : "Documented editorial guides on agarwood botany, distillation methods, grading standards, buying frameworks, trade documentation and the culture of oud worldwide.",
    locale,
    alternateLocalePath: `/${locale === 'ar' ? 'en' : 'ar'}/guides`,
  });
}

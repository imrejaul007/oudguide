import { Scale } from 'lucide-react';
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
    path: `/${locale}/policies`,
    title: isAr ? "سياسات التشغيل والتحرير" : "Operating & Editorial Policies",
    description: isAr ? "كيف يعالج دليل العود الربط التجاري المحايدة والإفصاح عن الروابط التجارية وحماية بيانات الاتصال ومعايير كل ملف منتج." : "How OudGuide handles neutral wholesale matching, commercial affiliation disclosure, contact-data protection and the standards applied to every producer listing.",
    locale,
    alternateLocalePath: `/${locale === 'ar' ? 'en' : 'ar'}/policies`,
  });
}

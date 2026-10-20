import Link from 'next/link';
import { Building2, Crown, Check, ArrowRight } from 'lucide-react';
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
    path: `/${locale}/for-businesses`,
    title: isAr ? "للمقطرين والمزارعين — وثّق ملفك في دليل العود" : "For Distillers & Producers — Claim Your OudGuide Profile",
    description: isAr ? "أثبت مصدرية منتجك، واستقبل موجزات ترشيح المشترين، وانشر نتائج فحوصاتك المخبرية المعتمدة لجمهور B2B عالمي." : "Establish international provenance for your distillery or plantation, receive qualified buyer match briefs, and publish your verified laboratory testing to a global B2B audience.",
    locale,
    alternateLocalePath: `/${locale === 'ar' ? 'en' : 'ar'}/for-businesses`,
  });
}

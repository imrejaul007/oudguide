import Link from 'next/link';
import { domain } from '@/lib/data';
import { DirectoryBrowser } from '@/components/business/directory-browser';
import { Compass, ShieldCheck, Map as MapIcon, Sparkles, Bookmark } from 'lucide-react';
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
    path: `/${locale}/directory`,
    title: isAr ? "دليل المنتجين — مقطرون ومزارع عود معتمدة" : "Producer Directory — Verified Oud Distillers & Plantations",
    description: isAr ? "تصفح مقطرين العود ومزارعه ومورديه المعتمدين في أسام وكمبوديا وتايلاند وإندونيسيا، مع الأقاليم الموثقة والحد الأدنى للطلب." : "Browse verified agarwood distillers, plantations and wholesalers across Assam, Cambodia, Thailand and Indonesia, with documented origins, minimum order quantities and sample availability.",
    locale,
    alternateLocalePath: `/${locale === 'ar' ? 'en' : 'ar'}/directory`,
  });
}

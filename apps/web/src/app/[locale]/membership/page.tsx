import Link from 'next/link';
import { seed } from '@/lib/data';
import { Crown, ShieldCheck, Award, Eye, ExternalLink, CheckCircle2 } from 'lucide-react';
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
    path: `/${locale}/membership`,
    title: isAr ? "العضوية السنوية — انشر ملف شركتك" : "Annual Membership — Publish Your Business Profile",
    description: isAr ? "افتح إظهار بيانات الاتصال على ملفك في دليل OudGuide، واوصل بالمشترين المؤسسيين، وكن ضمن طلبات التوريد المؤهلة." : "Unlock direct contact display on your OudGuide producer profile, reach institutional buyers, and be matched to verified wholesale inquiries across 249 territories.",
    locale,
    alternateLocalePath: `/${locale === 'ar' ? 'en' : 'ar'}/membership`,
  });
}

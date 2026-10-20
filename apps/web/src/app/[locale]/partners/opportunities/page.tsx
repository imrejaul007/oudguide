import { Briefcase, Lock, Globe, Calendar, FileText, CheckCircle2 } from 'lucide-react';
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
    path: `/${locale}/partners/opportunities`,
    title: isAr ? "بوابة الشركاء — موجزات توريد مشفرة" : "Partner Portal — Redacted Supply Briefs",
    description: isAr ? "ي يرى الموردون المعتمدون موجزات فنية مشفرة للطلبات الجارية: الصنف والكمية والوجهة ونطاق السعر، دون هوية المشتري حتى الاعتماد." : "Verified suppliers see redacted technical briefs for live wholesale requirements: material, volume, destination and price band, with no buyer identity until they are approved.",
    locale,
    alternateLocalePath: `/${locale === 'ar' ? 'en' : 'ar'}/partners/opportunities`,
  });
}

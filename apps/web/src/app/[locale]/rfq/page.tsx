import Link from 'next/link';
import { ShieldCheck, Sparkles, Clock } from 'lucide-react';
import { RfqWizard } from '@/components/rfq/rfq-wizard';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    path: `/${locale}/rfq`,
    title: isAr ? "تقديم طلب توريد عود بالجملة" : "Submit a Wholesale Oud Requirement",
    description: isAr ? "أرسل متطلباتك بالجملة عبر 67 مواصفة شرطية. يصل الموجز المشفر إلى الموردين المؤهلين، ولا تُكشف بيانات الاتصال إلا بموافقتك." : "Send a wholesale agarwood, oud oil or attar requirement through 67 conditional specifications. Your brief reaches qualified producers redacted, and contact details release only after your approval.",
    locale,
    alternateLocalePath: `/${locale === 'ar' ? 'en' : 'ar'}/rfq`,
  });
}

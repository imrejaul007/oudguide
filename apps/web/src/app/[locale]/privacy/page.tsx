import { Lock, CheckCircle2 } from 'lucide-react';
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
    path: `/${locale}/privacy`,
    title: isAr ? "إشعار الخصوصية وحقوق حماية البيانات" : "Privacy Notice & Data Subject Rights",
    description: isAr ? "التزامات دليل العود لحماية البيانات وفق GDPR وPDPL، بما فيها حق الاطلاع والمحو وسحب الموافقة وحجب بيانات الاتصال." : "OudGuide data protection commitments under GDPR and the UAE PDPL, including access, erasure, consent withdrawal and contact-suppression rights for buyers and producers.",
    locale,
    alternateLocalePath: `/${locale === 'ar' ? 'en' : 'ar'}/privacy`,
  });
}

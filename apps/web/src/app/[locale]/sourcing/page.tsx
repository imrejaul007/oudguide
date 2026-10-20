import { Sparkles, ShieldCheck } from 'lucide-react';
import { SourcingAssistant } from '@/components/sourcing/assistant-client';
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
    path: `/${locale}/sourcing`,
    title: isAr ? "مساعد التوريد — اسأل عن إمداد العود" : "Sourcing Assistant — Ask About Oud Supply",
    description: isAr ? "اسأل عن مواد العود والأقاليم والتقطير ومتطلبات التوريد بالجملة. يقرأ المساعد سجل OudGuide الموثق ولا يكشف بيانات اتصال أي مورد." : "Ask about agarwood materials, origins, distillation and wholesale requirements. The assistant reads OudGuide's documented register and never exposes a producer's contact details.",
    locale,
    alternateLocalePath: `/${locale === 'ar' ? 'en' : 'ar'}/sourcing`,
  });
}

import { FileEdit, CheckCircle2 } from 'lucide-react';
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
    path: `/${locale}/corrections`,
    title: isAr ? "تقديم طلب تصحيح أو تدقيق تحريري" : "Submit a Correction or Editorial Review",
    description: isAr ? "أبلغ عن معلومات نباتية أو جغرافية أو تجارية غير دقيقة في سجل دليل العود. تُراجع كل تصحيح ويُحدَّث السجل العلني بعد التحقق." : "Report inaccurate botanical, geographic or commercial information in the OudGuide register. Every correction is reviewed and the public record is updated on verification.",
    locale,
    alternateLocalePath: `/${locale === 'ar' ? 'en' : 'ar'}/corrections`,
  });
}

import Link from 'next/link';
import {
  Database,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  BarChart3,
  Map as MapIcon,
} from 'lucide-react';
import { directoryCounts } from '@/lib/data';
import { articleCounts } from '@/lib/articles';

interface DataHubSectionProps {
  locale: string;
  isAr: boolean;
}

/**
 * The public data hub.
 *
 * This section is modelled on yello.ae's "Data Hub" — a visually distinct
 * B2B band that points at a data product — but it inverts the promise that
 * made that page what it is. The live site sells access to a raw business-
 * contact database. OudGuide's whole model withholds contact fields by
 * default, and the producer page states membership is not buyer-data
 * access. What this section may pitch is therefore exactly the public
 * projection the register already shows: documented territories, published
 * records, the price-observation bands, and the four fraud-detection
 * protocols. It links to the surfaces that hold those, and to the B2B
 * portal itself, not to any contacts.
 */
export function DataHubSection({ locale, isAr }: DataHubSectionProps) {
  const published = directoryCounts.published;
  const reviewed = articleCounts().reviewed;

  const features = [
    {
      icon: MapIcon,
      title: isAr ? '249 أقاليم موثّقة' : '249 documented territories',
      desc: isAr
        ? 'حالة التوثيق والجاهزية لكل إقليم، وما هو معلوم عن العود هنا.'
        : 'Documentation and readiness status per territory — what is known about oud here.',
    },
    {
      icon: Database,
      title: isAr
        ? `${published} سجلاً منشوراً`
        : `${published} published records`,
      desc: isAr
        ? 'سجلات مقطرين وموزعين موثّقة، بمسارات منشأ وجهة مستقلة.'
        : 'Documented distiller and wholesaler records, with independent origin and destination paths.',
    },
    {
      icon: BarChart3,
      title: isAr ? 'نطاقات أسعار ملحوظة' : 'Observed price bands',
      desc: isAr
        ? 'أساس السعر المعلن وفق العملة، من السجل — لا عروض أسعار مباشرة.'
        : 'The published price baseline by currency, from the register — no live quotes.',
    },
    {
      icon: AlertTriangle,
      title: isAr ? 'بروتوكولات كشف الغش' : 'Four fraud protocols',
      desc: isAr
        ? 'تقنيات الكشف المخبرية للأشكال الأربعة المستحيلة قبل أي التزام جملة.'
        : 'The four laboratory detection protocols, visible before any wholesale commitment.',
    },
  ];

  return (
    <section className="section section-white">
      <div className="container">
        <div className="data-hub">
          <div className="data-hub-head">
            <span className="eyebrow eyebrow-no-rule">
              <ShieldCheck size={13} />
              {isAr ? 'السجل العلني' : 'The public register'}
            </span>
            <h2 className="h2">
              {isAr
                ? 'بيانات العود التي يمكن رؤيتها قبل الدخول'
                : 'The oud data you can see before signing in'}
            </h2>
            <p className="lede">
              {isAr
                ? `يستمر السجل العلني بـ 249 إقليماً و${published} سجلاً منشوراً و${reviewed} مادة معاد مراجعتها، مع نطاقات أسعار ملحوظة وبروتوكولات كشف غش مخبرية — بلا أي حقول اتصال.`
                : `The public register stands at 249 territories, ${published} published records and ${reviewed} reviewed materials, with observed price bands and laboratory fraud-detection protocols — and no contact fields at all.`}
            </p>
          </div>

          <div className="data-hub-grid">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="data-hub-card">
                  <div className="data-hub-card-icon">
                    <Icon size={18} />
                  </div>
                  <h3 className="data-hub-card-title">{f.title}</h3>
                  <p className="data-hub-card-desc">{f.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="data-hub-cta">
            <p className="data-hub-cta-note">
              {isAr
                ? 'لا يبيع السجل حقول اتصال. الوصول إلى بيانات مشترٍ ليس ميزة متاحة على أي مستوى.'
                : 'The register does not sell contact fields. Access to buyer data is not available at any tier.'}
            </p>
            <div className="cluster" style={{ gap: 12 }}>
              <Link href={`/${locale}/market`} className="btn btn-primary">
                <BarChart3 size={15} />
                <span>{isAr ? 'فتح سوق العود' : 'Open the market data'}</span>
              </Link>
              <Link href={`/${locale}/b2b`} className="btn btn-outline">
                <span>{isAr ? 'بوابة الجملة' : 'Wholesale portal'}</span>
                <ArrowRight size={14} className="icon-dir-flip" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

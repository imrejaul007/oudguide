import Link from 'next/link';
import { ExternalLink, ShoppingBag, ShieldCheck, Truck } from 'lucide-react';
import { getRegisteredDestination } from '@/data/destination-registry';

interface ShopWithPartnerProps {
  destinationId?: string;
  locale: string;
  itemCategoryEn?: string;
  itemCategoryAr?: string;
}

export function ShopWithPartner({
  destinationId = 'almutalib-retail-ae',
  locale,
  itemCategoryEn,
  itemCategoryAr,
}: ShopWithPartnerProps) {
  const isAr = locale === 'ar';
  const dest = getRegisteredDestination(destinationId);
  if (!dest) return null;

  return (
    <div
      className="card-frame retail-partner-callout"
      style={{
        padding: '20px 24px',
        margin: '28px 0',
        borderRadius: 8,
        border: '1px solid var(--border)',
        background: 'var(--surface-sunken)',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <ShoppingBag size={18} style={{ color: 'var(--green-700)' }} />
          <span style={{ fontWeight: 600, fontSize: 15, color: 'var(--text)' }}>
            {dest.callToActionEn && (isAr ? dest.callToActionAr : dest.callToActionEn)}
          </span>
          <span
            style={{
              fontSize: 11,
              padding: '2px 8px',
              borderRadius: 4,
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}
          >
            {isAr ? 'شريك تجزئة معتمد' : 'Verified Retail Partner'}
          </span>
        </div>

        <a
          href={dest.url}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className="action-link"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontWeight: 600,
            fontSize: 14,
            padding: '6px 14px',
            borderRadius: 6,
            background: 'var(--green-700)',
            color: '#fff',
            textDecoration: 'none',
          }}
        >
          <span>{isAr ? 'زيارة المتجر' : 'Visit Storefront'}</span>
          <ExternalLink size={14} />
        </a>
      </div>

      <p className="discipline-body" style={{ margin: 0, fontSize: 13, color: 'var(--text-muted)' }}>
        {itemCategoryEn && (
          <span style={{ display: 'block', marginBottom: 4, color: 'var(--text)', fontWeight: 500 }}>
            {isAr
              ? `منتجات أصيلة متوفرة لطلبات الأفراد: ${itemCategoryAr || itemCategoryEn}`
              : `Curated retail lots available for private order: ${itemCategoryEn}`}
          </span>
        )}
        <Truck size={14} style={{ verticalAlign: '-2px', marginRight: 4, marginLeft: 4 }} />
        {isAr ? dest.shippingScopeNoteAr : dest.shippingScopeNoteEn}
      </p>

      <div style={{ fontSize: 11, color: 'var(--text-faint)', display: 'flex', alignItems: 'center', gap: 6 }}>
        <ShieldCheck size={12} />
        <span>
          {isAr
            ? 'روابط الشركاء التجارية تخضع لمعايير الرقابة والشفافية التحريرية لدى دليل العود.'
            : 'Commercial partner links comply with OudGuide editorial transparency and sponsored link governance.'}
        </span>
      </div>
    </div>
  );
}

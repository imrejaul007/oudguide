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
      <div className="retail-partner-head">
        <div className="retail-partner-info">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <ShoppingBag size={18} style={{ color: 'var(--green-700)', flexShrink: 0 }} />
            <span style={{ fontWeight: 600, fontSize: 15, color: 'var(--text)' }}>
              {dest.callToActionEn && (isAr ? dest.callToActionAr : dest.callToActionEn)}
            </span>
          </div>
          <span className="badge badge-locked" style={{ fontSize: 10, alignSelf: 'flex-start', marginInlineStart: 26 }}>
            {isAr ? 'شريك تجزئة معتمد' : 'Verified Retail Partner'}
          </span>
        </div>

        <a
          href={dest.url}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className="btn btn-primary btn-sm retail-partner-btn"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          <span>{isAr ? 'زيارة المتجر' : 'Visit Storefront'}</span>
          <ExternalLink size={13} />
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

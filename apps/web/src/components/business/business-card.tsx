'use client';

import Link from 'next/link';
import { MapPin, Award, Lock, ArrowRight } from 'lucide-react';
import { BookmarkButton, ShareButton } from './interactive-tools';
import {
  directoryRoleLabel,
} from '../../../../../packages/contracts/src/directory-roles.ts';

export interface BusinessCardData {
  id: string;
  slug: string;
  name: string;
  description?: string | null;
  category?: string | null;
  business_type?: string | null;
  /** The controlled role slugs the directory filters on. */
  roles?: string[];
  country_id: string;
  country_name?: string | null;
  city?: string | null;
  is_claimed: boolean;
  has_active_membership: boolean;
  contact_unlocked: boolean;
  verification_state?: 'owner_verified' | 'seller_declared' | 'unverified';
  verified_fields?: string[];
  demo?: boolean;
  handles_origins?: string[];
  serves_destinations?: string[];
  product_families?: string[];
  sample_availability?: boolean;
  minimum_order_quantity?: string | null;
  established_year?: number | null;
}

interface BusinessCardProps {
  business: BusinessCardData;
  locale: string;
  /**
   * 'full' shows every documented fact (the directory register). 'compact'
   * shows the essentials on a smaller card (the home featured lane).
   */
  variant?: 'full' | 'compact';
  /** When set, the record carries this label (e.g. "Sample record"). */
  sampleLabel?: string | null;
}

const producerCovers: Record<string, string> = {
  'al-mutalib-perfumes': '/images/hero-attar-still.svg',
  'assam-artisan-distillers': '/images/hero-oud-chip.svg',
  'siam-trat-agarwood-co': '/images/hero-dehn-al-oud.svg',
};

export function BusinessCard({ business, locale, variant = 'full', sampleLabel }: BusinessCardProps) {
  const isAr = locale === 'ar';
  const compact = variant === 'compact';

  const locationLabel =
    (business.city ? `${business.city}, ` : '') +
    (business.country_name || business.country_id);

  const roles = (business.roles ?? []).slice(0, compact ? 2 : 3);
  const families = (business.product_families ?? []).slice(0, compact ? 2 : 3);
  const moreFamilies = (business.product_families?.length ?? 0) - families.length;

  const verifiedFacts = (business.verified_fields ?? []).includes('established_year');
  const facts: { label: string; value: string | null }[] = [
    { label: isAr ? 'تأسس في' : 'Established', value: business.established_year ? `${business.established_year}` : null },
    { label: isAr ? 'الحد الأدنى للطلب' : 'Minimum order', value: business.minimum_order_quantity },
    { label: isAr ? 'العينات' : 'Samples', value: business.sample_availability == null ? null : business.sample_availability ? (isAr ? 'متاحة' : 'Available') : (isAr ? 'غير متاحة' : 'Not available') },
    {
      label: isAr ? 'ينقل إلى' : 'Ships to',
      value: business.serves_destinations && business.serves_destinations.length
        ? `${business.serves_destinations.length} ${isAr ? 'وجهات' : 'destination' + (business.serves_destinations.length === 1 ? '' : 's')}`
        : null,
    },
  ];

  return (
    <article className="data-card">
      <div className="data-card-cover">
        <img
          src={producerCovers[business.slug] || '/images/hero-oud-chip.svg'}
          alt={business.name}
        />
        <div className="data-card-cover-overlay" />
      </div>
      <div className="data-card-head">
        <div style={{ flex: 1, minWidth: 0 }}>
          {business.contact_unlocked ? (
            <span className="badge badge-emerald" style={{ display: 'inline-flex', marginBottom: 8 }}>
              <Award size={11} />
              {isAr ? 'عضو معتمد' : 'Verified Member'}
            </span>
          ) : (
            <span className="badge badge-locked" style={{ display: 'inline-flex', marginBottom: 8 }}>
              <Lock size={11} />
              {isAr ? 'ملف محمي' : 'Basic Record'}
            </span>
          )}
          {sampleLabel && (
            <span className="badge badge-gold" style={{ display: 'inline-flex', marginBottom: 8 }}>
              {sampleLabel}
            </span>
          )}
          <h3 className="data-card-name">
            <Link href={`/${locale}/directory/${business.slug}`}>{business.name}</Link>
          </h3>
        </div>
        <div className="cluster" style={{ gap: 4, flexShrink: 0 }}>
          <BookmarkButton slug={business.slug} locale={locale} />
          <ShareButton title={business.name} locale={locale} />
        </div>
      </div>

      <div className="biz-location" style={{ margin: compact ? 0 : 4 }}>
        <MapPin size={11} />
        {locationLabel}
      </div>

      {!compact && business.description && (
        <p style={{ margin: '6px 0 0', fontSize: '0.88rem', lineHeight: 1.6, color: 'var(--ink-muted)' }}>
          {business.description}
        </p>
      )}

      <div className="biz-tags" style={{ marginTop: 4 }}>
        {roles.map((role) => (
          <span key={role} className="chip" style={{ fontSize: '0.72rem' }}>
            {directoryRoleLabel(role, locale)}
          </span>
        ))}
      </div>

      <div>
        <div className="data-card-fact-label" style={{ marginTop: compact ? 0 : 10 }}>
          {isAr ? 'الأصناف المتعامل بها' : 'Materials handled'}
        </div>
        <div className="directory-row-list">
          {families.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
          {moreFamilies > 0 && <li>{isAr ? `+${moreFamilies} أخرى` : `+${moreFamilies} more`}</li>}
        </div>
      </div>

      {!compact && (
        <div className="data-card-facts">
          {facts.map((f) => (
            <div key={f.label}>
              <span className="data-card-fact-label">{f.label}</span>
              <span className="data-card-fact-value">
                {f.value ?? <span style={{ color: 'var(--ink-soft)' }}>—</span>}
              </span>
            </div>
          ))}
        </div>
      )}

      {verifiedFacts && business.established_year && (
        <div className="meta meta-green" style={{ marginTop: compact ? 2 : 8, display: 'flex', gap: 6, alignItems: 'center' }}>
          {isAr ? `تأسس ${business.established_year} (محكَّم)` : `Est. ${business.established_year} (verified)`}
        </div>
      )}

      <div className="cluster" style={{ marginTop: compact ? 10 : 14, gap: 14 }}>
        <Link
          href={`/${locale}/directory/${business.slug}`}
          className="btn btn-outline btn-sm"
          style={{ gap: 6 }}
        >
          {isAr ? 'الملف الكامل' : 'View profile'}
          <ArrowRight size={13} className="icon-dir-flip" />
        </Link>
        <Link
          href={`/${locale}/rfq?supplier=${business.slug}`}
          className="btn-link"
          style={{ fontSize: '0.8rem', display: compact ? 'none' : 'inline-flex', gap: 4, alignItems: 'center' }}
        >
          <span>{isAr ? 'اطلب عرض سعر' : 'Request a quote'}</span>
          <ArrowRight size={12} className="icon-dir-flip" />
        </Link>
      </div>
    </article>
  );
}

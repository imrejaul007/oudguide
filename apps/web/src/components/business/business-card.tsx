'use client';

import Link from 'next/link';
import { MapPin, Award, Lock, ArrowRight, ShieldCheck, CheckCircle2, FileText, Globe } from 'lucide-react';
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

/** Generate a 2-character monogram crest for the supplier mark. */
function getMonogram(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

export function BusinessCard({ business, locale, variant = 'full', sampleLabel }: BusinessCardProps) {
  const isAr = locale === 'ar';
  const compact = variant === 'compact';

  const locationLabel =
    (business.city ? `${business.city}, ` : '') +
    (business.country_name || business.country_id);

  const roles = (business.roles ?? []).slice(0, compact ? 2 : 4);
  const families = (business.product_families ?? []).slice(0, compact ? 2 : 4);
  const moreFamilies = (business.product_families?.length ?? 0) - families.length;

  const verifiedEstablished = (business.verified_fields ?? []).includes('established_year');
  const monogram = getMonogram(business.name);

  return (
    <article className="b2b-card" data-slug={business.slug}>
      {/* Header with Monogram Crest & Business Identity */}
      <div className="b2b-card-head">
        <div className="b2b-card-crest" aria-hidden="true">
          {monogram}
        </div>
        <div className="b2b-card-title-row">
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center', marginBottom: 4 }}>
            {business.contact_unlocked ? (
              <span className="badge badge-emerald" style={{ display: 'inline-flex' }}>
                <Award size={11} />
                {isAr ? 'عضو معتمد' : 'Verified Member'}
              </span>
            ) : business.verification_state === 'owner_verified' ? (
              <span className="badge badge-gold" style={{ display: 'inline-flex' }}>
                <CheckCircle2 size={11} />
                {isAr ? 'ملكية موثقة' : 'Owner Verified'}
              </span>
            ) : (
              <span className="badge badge-locked" style={{ display: 'inline-flex' }}>
                <Lock size={11} />
                {isAr ? 'سجل أساسي' : 'Basic Record'}
              </span>
            )}
            {sampleLabel && (
              <span className="badge badge-gold" style={{ display: 'inline-flex' }}>
                {sampleLabel}
              </span>
            )}
          </div>

          <h3 className="b2b-card-name">
            <Link href={`/${locale}/directory/${business.slug}`}>{business.name}</Link>
          </h3>

          <p className="b2b-card-loc">
            <MapPin size={12} style={{ color: 'var(--green-700)', flexShrink: 0 }} />
            <span>{locationLabel}</span>
          </p>
        </div>

        <div className="cluster" style={{ gap: 4, flexShrink: 0 }}>
          <BookmarkButton slug={business.slug} locale={locale} />
          <ShareButton title={business.name} locale={locale} />
        </div>
      </div>

      {!compact && business.description && (
        <p style={{ margin: '4px 0 10px', fontSize: '0.86rem', lineHeight: 1.6, color: 'var(--ink-muted)' }}>
          {business.description}
        </p>
      )}

      {/* 4-Fact Operational Spec Matrix */}
      <div className="b2b-spec-matrix">
        <div className="b2b-spec-item">
          <span className="b2b-spec-lbl">{isAr ? 'التأسيس' : 'Est.'}</span>
          <span className="b2b-spec-val">
            {business.established_year ? (
              <>
                {business.established_year}
                {verifiedEstablished && (
                  <span style={{ fontSize: '0.68rem', color: 'var(--green-700)', marginInlineStart: 3 }}>✓</span>
                )}
              </>
            ) : '—'}
          </span>
        </div>

        <div className="b2b-spec-item">
          <span className="b2b-spec-lbl">{isAr ? 'الحد الأدنى' : 'Min. Order'}</span>
          <span className="b2b-spec-val" title={business.minimum_order_quantity || undefined}>
            {business.minimum_order_quantity || '—'}
          </span>
        </div>

        <div className="b2b-spec-item">
          <span className="b2b-spec-lbl">{isAr ? 'العينات' : 'Samples'}</span>
          <span className="b2b-spec-val" style={{ color: business.sample_availability ? 'var(--green-700)' : 'inherit' }}>
            {business.sample_availability == null
              ? '—'
              : business.sample_availability
              ? (isAr ? 'متاحة' : 'Available')
              : (isAr ? 'غير متاحة' : 'None')}
          </span>
        </div>

        <div className="b2b-spec-item">
          <span className="b2b-spec-lbl">{isAr ? 'التصدير' : 'Export Reach'}</span>
          <span className="b2b-spec-val">
            {business.serves_destinations?.length
              ? `${business.serves_destinations.length} ${isAr ? 'دول' : 'dests.'}`
              : '—'}
          </span>
        </div>
      </div>

      {/* Sourcing Tags: Roles & Product Families */}
      <div className="b2b-card-tags">
        {roles.map((r) => (
          <span key={r} className="b2b-card-tag" style={{ background: 'var(--green-50)', color: 'var(--green-800)', borderColor: 'var(--green-100)' }}>
            {directoryRoleLabel(r, locale)}
          </span>
        ))}
        {families.map((f) => (
          <span key={f} className="b2b-card-tag">
            {f}
          </span>
        ))}
        {moreFamilies > 0 && (
          <span className="b2b-card-tag" style={{ opacity: 0.75 }}>
            {isAr ? `+${moreFamilies} أخرى` : `+${moreFamilies} more`}
          </span>
        )}
      </div>

      {/* High-Converting Action Footbar */}
      <div className="b2b-card-actions">
        <div className="b2b-card-action-group">
          <Link
            href={`/${locale}/directory/${business.slug}`}
            className="btn btn-outline btn-sm"
          >
            <span>{isAr ? 'عرض الملف' : 'View Storefront'}</span>
            <ArrowRight size={12} className="icon-dir-flip" />
          </Link>
        </div>

        <Link
          href={`/${locale}/b2b/quote?supplier=${business.slug}`}
          className="btn btn-primary btn-sm"
          style={{ gap: 5 }}
        >
          <FileText size={12} />
          <span>{isAr ? 'طلب تسعير' : 'Request Quote'}</span>
        </Link>
      </div>
    </article>
  );
}

'use client';

import Link from 'next/link';
import { MapPin, Award, Lock, Star } from 'lucide-react';
import { BookmarkButton, ShareButton } from './interactive-tools';
import {
  directoryRoleLabel,
} from '../../../../../packages/contracts/src/directory-roles.ts';

const producerCovers: Record<string, string> = {
  'al-mutalib-perfumes': '/images/hero-attar-still.svg',
  'assam-artisan-distillers': '/images/hero-oud-chip.svg',
  'siam-trat-agarwood-co': '/images/hero-dehn-al-oud.svg',
};

interface BusinessCardProps {
  business: {
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
  };
  locale: string;
}

export function BusinessCard({ business, locale }: BusinessCardProps) {
  const isAr = locale === 'ar';
  const coverImage = producerCovers[business.slug] || '/images/hero-oud-chip.svg';

  return (
    <article className="biz-card">
      <div className="biz-cover">
        <div className="biz-cover-badges">
          <span className="badge badge-glass-light">
            <MapPin size={11} />
            {business.city ? `${business.city}, ` : ''}
            {business.country_name || business.country_id}
          </span>
          {business.contact_unlocked ? (
            <span className="badge badge-emerald">
              <Award size={11} />
              {isAr ? 'عضو معتمد' : 'Verified Member'}
            </span>
          ) : (
            <span className="badge badge-glass">
              <Lock size={11} />
              {isAr ? 'ملف محمي' : 'Basic Record'}
            </span>
          )}
        </div>
        <img src={coverImage} alt={business.name} />
      </div>

      <div className="biz-body">
        <div className="cluster" style={{ marginBottom: 8, gap: 6 }}>
          {/* The roles, as the controlled slugs the directory filters on.
              The display label comes from the vocabulary, not from the
              record's free-text category. */}
          {(business.roles ?? []).map((role) => (
            <span key={role} className="badge badge-locked">
              {directoryRoleLabel(role, locale)}
            </span>
          ))}
          {business.established_year &&
            (business.verified_fields ?? []).includes('established_year') && (
              <span className="badge badge-locked">Est. {business.established_year}</span>
            )}
        </div>

        <h3 className="biz-name">
          <Link href={`/${locale}/directory/${business.slug}`}>{business.name}</Link>
        </h3>

        <div className="biz-location">
          <MapPin size={11} />
          {business.city ? `${business.city}, ` : ''}
          {business.country_name || business.country_id}
        </div>

        {business.description && (
          <p className="biz-desc">{business.description}</p>
        )}

        {business.product_families && business.product_families.length > 0 && (
          <div className="biz-tags">
            {business.product_families.slice(0, 3).map((tag) => (
              <span key={tag} className="chip">{tag}</span>
            ))}
          </div>
        )}

        <div className="biz-footer">
          <Link href={`/${locale}/directory/${business.slug}`} className="btn btn-outline btn-sm">
            {isAr ? 'الملف الكامل ←' : 'View Profile →'}
          </Link>
          <div className="biz-cta-group">
            <BookmarkButton slug={business.slug} locale={locale} />
            <ShareButton title={business.name} locale={locale} />
          </div>
        </div>
      </div>
    </article>
  );
}
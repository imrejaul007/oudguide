'use client';

import Link from 'next/link';
import { MapPin, ArrowRight, Award, Check } from 'lucide-react';
import { BookmarkButton } from './interactive-tools';

const producerCovers: Record<string, string> = {
  'al-mutalib-perfumes': '/images/hero-attar-still.svg',
  'assam-artisan-distillers': '/images/hero-oud-chip.svg',
  'siam-trat-agarwood-co': '/images/hero-dehn-al-oud.svg',
};

export interface ShowcaseBusiness {
  id: string;
  slug: string;
  name: string;
  description?: string | null;
  category?: string | null;
  city?: string | null;
  country_name?: string | null;
  is_claimed?: boolean;
  has_active_membership?: boolean;
  contact_unlocked?: boolean;
}

/**
 * Full-bleed overlay showcase card.
 *
 * Pattern ported from IndexOrbit's `showcase-card.tsx`: the entire card is a
 * click target via an absolutely-positioned link overlay, while the
 * bookmark control sits above that overlay on a higher z-index so it stays
 * independently clickable.
 */
export function ShowcaseCard({ business, locale }: { business: ShowcaseBusiness; locale: string }) {
  const isAr = locale === 'ar';
  const coverImage = producerCovers[business.slug] || '/images/hero-oud-chip.svg';
  const verified = business.is_claimed || business.contact_unlocked;

  return (
    <div className="biz-showcase group">
      {/* Background image */}
      <img src={coverImage} alt={business.name} />

      {/* Gradient scrim */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, transparent 28%, rgba(13,10,8,0.94) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Top badges */}
      <div className="biz-showcase-top">
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {business.contact_unlocked && (
            <span className="badge badge-gold">
              <Award size={11} />
              {isAr ? 'عضو معتمد' : 'Verified Member'}
            </span>
          )}
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <BookmarkButton slug={business.slug} locale={locale} variant="floating" />
        </div>
      </div>

      {/* Full-card link overlay */}
      <Link href={`/${locale}/directory/${business.slug}`} className="card-overlay-link">
        <span className="sr-only">{isAr ? 'عرض' : 'View'} {business.name}</span>
      </Link>

      {/* Bottom content */}
      <div className="biz-showcase-bottom">
        <div style={{ minWidth: 0, flex: 1 }}>
          <h3 className="biz-showcase-name">
            {business.name}
            {verified && (
              <span className="verified-tick" title={isAr ? 'ملكية موثقة' : 'Verified ownership'}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
            )}
          </h3>
          {business.description && (
            <p
              className="biz-showcase-meta"
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                marginBottom: 6,
                lineHeight: 1.45,
              }}
            >
              {business.description}
            </p>
          )}
          <p className="biz-showcase-meta">
            <MapPin size={12} />
            {business.city ? `${business.city}, ` : ''}
            {business.country_name || business.country_id}
          </p>
        </div>
        <span className="card-arrow">
          <ArrowRight size={16} />
        </span>
      </div>
    </div>
  );
}

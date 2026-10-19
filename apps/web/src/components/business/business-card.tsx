'use client';

import Link from 'next/link';
import { MapPin, Star, Award, ShieldCheck, Lock, ArrowRight, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface BusinessCardProps {
  business: {
    id: string;
    slug: string;
    name: string;
    description?: string | null;
    category?: string | null;
    business_type?: string | null;
    country_id: string;
    country_name?: string | null;
    city?: string | null;
    is_claimed: boolean;
    has_active_membership: boolean;
    contact_unlocked: boolean;
    verified_origins?: string[];
    product_families?: string[];
    sample_availability?: boolean;
    minimum_order_quantity?: string | null;
    established_year?: number | null;
    email?: string | null;
    phone?: string | null;
    whatsapp?: string | null;
    website_url?: string | null;
  };
  locale: string;
}

// Preset luxury cover photography for distillers and estates
const producerCovers: Record<string, string> = {
  'al-mutalib-perfumes': '/images/hero-dehn-al-oud.svg',
  'assam-artisan-distillers': '/images/hero-attar-still.svg',
  'siam-trat-agarwood-co': '/images/hero-oud-wood.svg',
};

export function BusinessCard({ business, locale }: BusinessCardProps) {
  const isAr = locale === 'ar';
  const coverImage = producerCovers[business.slug] || '/images/hero-oud-wood.svg';

  return (
    <div className="group relative bg-white rounded-2xl border border-[#e6dfd1] overflow-hidden hover:border-[#c59b27]/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Cover Image Container */}
        <div className="relative h-48 w-full bg-[#120e0c] overflow-hidden">
          <img
            src={coverImage}
            alt={business.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Top Floating Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
            <div className="flex gap-1.5 flex-wrap">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#dfba55] text-xs font-bold border border-[#c59b27]/40 shadow-sm">
                <MapPin className="h-3 w-3" />
                {business.city ? `${business.city}, ` : ''}{business.country_name || business.country_id}
              </span>
            </div>

            <div>
              {business.contact_unlocked ? (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold shadow-md">
                  <Award className="h-3 w-3 fill-white" />
                  {isAr ? 'عضو معتمد' : 'Verified Member'}
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#c9c5bc] text-xs font-semibold border border-white/20">
                  <Lock className="h-3 w-3" />
                  {isAr ? 'ملف محمي' : 'Basic Record'}
                </span>
              )}
            </div>
          </div>

          {/* Business Name Overlay on Image */}
          <div className="absolute bottom-3 left-4 right-4 z-10">
            <h3 className="font-serif text-xl font-bold text-white leading-tight drop-shadow-md">
              <Link href={`/${locale}/directory/${business.slug}`} className="hover:text-[#dfba55] transition-colors">
                {business.name}
              </Link>
            </h3>
            <p className="text-xs text-[#dedbd2] font-medium mt-0.5">
              {business.category || business.business_type}
              {business.established_year ? ` · Est. ${business.established_year}` : ''}
            </p>
          </div>
        </div>

        {/* Card Body Content */}
        <div className="p-5">
          <p className="text-sm text-[#68645c] line-clamp-2 leading-relaxed mb-4">
            {business.description}
          </p>

          {/* Documented Origins Pills */}
          {business.verified_origins && business.verified_origins.length > 0 && (
            <div className="mb-4">
              <span className="text-xs font-bold text-[#5c161d] uppercase tracking-wider block mb-1.5">
                {isAr ? 'المصادر المعتمدة:' : 'Documented Terroirs:'}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {business.verified_origins.map((origin, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-0.5 rounded bg-[#f5f0e6] text-[#68645c] border border-[#e6dfd1] font-medium"
                  >
                    {origin}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Verified Contact Details (Strictly Protected unless Unlocked) */}
          {business.contact_unlocked ? (
            <div className="mb-4 p-3 rounded-lg bg-[#f4faf6] border border-[#cce5d6] text-xs text-[#1b4d3e]">
              <div className="font-bold flex items-center gap-1 mb-1">
                <ShieldCheck className="h-3.5 w-3.5 text-[#1b4d3e]" />
                {isAr ? 'بيانات الاتصال المباشرة متاحة' : 'Direct Contact Unlocked'}
              </div>
              <div className="truncate">📧 {business.email}</div>
              {business.phone && <div>📞 {business.phone}</div>}
              {business.whatsapp && <div>💬 WhatsApp: {business.whatsapp}</div>}
            </div>
          ) : (
            <div className="mb-4 p-2.5 rounded-lg bg-[#fbf9f4] border border-[#e6dfd1] text-xs text-[#68645c] flex items-center gap-2">
              <Lock className="h-3.5 w-3.5 text-[#8c6a15] shrink-0" />
              <span>{isAr ? 'أرقام الاتصال محجوبة لحماية المورد.' : 'Contacts protected under non-contact policy.'}</span>
            </div>
          )}
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="px-5 py-3.5 bg-[#fcfaf6] border-t border-[#e6dfd1] flex items-center justify-between gap-3">
        <span className="text-xs text-[#68645c]">
          MOQ: <strong className="text-[#14161d]">{business.minimum_order_quantity || 'Flexible'}</strong>
        </span>

        <div className="flex items-center gap-2">
          <Link href={`/${locale}/directory/${business.slug}`}>
            <Button variant="outline" size="sm" className="text-xs h-8 px-3">
              {isAr ? 'الملف' : 'Profile'}
            </Button>
          </Link>
          <Link href={`/${locale}/rfq?profile=${encodeURIComponent(business.slug)}`}>
            <Button variant="gold" size="sm" className="text-xs h-8 px-3">
              {isAr ? 'تسعير' : 'Quote'}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

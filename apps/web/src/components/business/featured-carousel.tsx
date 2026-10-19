'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Award, ShieldCheck, ArrowRight } from 'lucide-react';
import { BusinessCard } from './business-card';

interface FeaturedCarouselProps {
  businesses: any[];
  locale: string;
}

export function FeaturedCarousel({ businesses, locale }: FeaturedCarouselProps) {
  const isAr = locale === 'ar';
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? businesses.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === businesses.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="badge-gold">
              <Award className="h-3 w-3 inline mr-1 fill-amber-500 text-amber-500" />
              {isAr ? 'المقطرون المعتمدون' : 'Verified Producer Network'}
            </span>
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#5c161d]">
            {isAr ? 'نخبة معامل التقطير والمزارع المستدامة' : 'Featured Distillers & Accredited Plantations'}
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            className="p-2 rounded-full border border-[#e6dfd1] bg-white hover:bg-[#fcfaf6] hover:border-[#c59b27] transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="h-4 w-4 text-[#14161d]" />
          </button>
          <button
            onClick={next}
            className="p-2 rounded-full border border-[#e6dfd1] bg-white hover:bg-[#fcfaf6] hover:border-[#c59b27] transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="h-4 w-4 text-[#14161d]" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {businesses.map((biz) => (
          <BusinessCard key={biz.id} business={biz} locale={locale} />
        ))}
      </div>
    </div>
  );
}

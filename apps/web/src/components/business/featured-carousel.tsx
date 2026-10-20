'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';
import { ShowcaseCard, type ShowcaseBusiness } from './showcase-card';

interface FeaturedCarouselProps {
  businesses: ShowcaseBusiness[];
  locale: string;
  title?: string;
  subtitle?: string;
}

/**
 * Scroll-snap producer carousel with autoplay and hover-pause.
 *
 * Implementation ported from IndexOrbit's `featured-carousel.tsx`: the track
 * is a native horizontal scroller with `scroll-snap-type: x mandatory`,
 * advanced programmatically via `scrollBy({ behavior: 'smooth' })`, with a
 * 4-second autoplay interval that pauses while the pointer is over the track.
 */
export function FeaturedCarousel({
  businesses,
  locale,
  title,
  subtitle,
}: FeaturedCarouselProps) {
  const isAr = locale === 'ar';
  const [isHovered, setIsHovered] = useState(false);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scrollPrev = () => {
    trackRef.current?.scrollBy({ left: -340, behavior: 'smooth' });
  };

  const scrollNext = () => {
    trackRef.current?.scrollBy({ left: 340, behavior: 'smooth' });
  };

  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows);
    return () => {
      el.removeEventListener('scroll', updateArrows);
      window.removeEventListener('resize', updateArrows);
    };
  }, [businesses.length]);

  useEffect(() => {
    if (isHovered) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      const el = trackRef.current;
      if (!el) return;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: 340, behavior: 'smooth' });
      }
    }, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered]);

  if (!businesses || businesses.length === 0) return null;

  return (
    <section className="section-tight">
      <div className="container">
        <div className="row-between" style={{ marginBottom: 28 }}>
          <div>
            <div style={{ marginBottom: 8 }}>
              <span className="badge badge-gold">
                <Award size={11} />
                {isAr ? 'شبكة المنتجين المعتمدين' : 'Verified Producer Network'}
              </span>
            </div>
            <h2 className="h2 text-crimson">
              {title || (isAr ? 'نخبة معامل التقطير والمزارع' : 'Featured Distillers & Plantations')}
            </h2>
            {subtitle && <p className="lede" style={{ marginTop: 6 }}>{subtitle}</p>}
          </div>

          <div className="cluster">
            <button onClick={scrollPrev} disabled={!canPrev} className="carousel-btn" aria-label="Previous">
              <ChevronLeft size={18} />
            </button>
            <button onClick={scrollNext} disabled={!canNext} className="carousel-btn" aria-label="Next">
              <ChevronRight size={18} />
            </button>
            <Link href={`/${locale}/directory`} className="btn btn-outline btn-sm" style={{ marginInlineStart: 8 }}>
              {isAr ? 'كل الدليل ←' : 'Full Directory →'}
            </Link>
          </div>
        </div>

        <div className="carousel-wrap">
          <div
            ref={trackRef}
            className="carousel-track"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {businesses.map((business) => (
              <div key={business.id} className="carousel-item">
                <ShowcaseCard business={business} locale={locale} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { Bookmark, Share2, Check } from 'lucide-react';

interface BookmarkButtonProps {
  slug: string;
  locale?: string;
  label?: string;
  variant?: 'pill' | 'floating';
}

export function BookmarkButton({ slug, locale, label, variant = 'pill' }: BookmarkButtonProps) {
  const [bookmarked, setBookmarked] = useState(false);
  const isAr = locale === 'ar';

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('oudguide_shortlist') || '[]');
      setBookmarked(saved.includes(slug));
    } catch {}
  }, [slug]);

  const toggleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const saved = JSON.parse(localStorage.getItem('oudguide_shortlist') || '[]');
      let updated: string[];
      if (saved.includes(slug)) {
        updated = saved.filter((s: string) => s !== slug);
        setBookmarked(false);
      } else {
        updated = [...saved, slug];
        setBookmarked(true);
      }
      localStorage.setItem('oudguide_shortlist', JSON.stringify(updated));
    } catch {}
  };

  if (variant === 'floating') {
    return (
      <button
        type="button"
        onClick={toggleBookmark}
        className={`floating-bookmark ${bookmarked ? 'saved' : ''}`}
        title={bookmarked ? (isAr ? 'محفوظ في القائمة' : 'Saved in shortlist') : (isAr ? 'حفظ في القائمة' : 'Save supplier')}
        aria-label="Bookmark"
        aria-pressed={bookmarked}
      >
        <Bookmark size={15} fill={bookmarked ? 'currentColor' : 'none'} />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleBookmark}
      className={`icon-tool ${bookmarked ? 'active' : ''}`}
      title={bookmarked ? (isAr ? 'محفوظ' : 'Saved') : (isAr ? 'حفظ' : 'Save')}
      aria-pressed={bookmarked}
    >
      <Bookmark size={13} fill={bookmarked ? 'currentColor' : 'none'} />
      <span>{bookmarked ? (isAr ? 'محفوظ' : 'Saved') : (label || (isAr ? 'حفظ' : 'Save'))}</span>
    </button>
  );
}

interface ShareButtonProps {
  title: string;
  locale?: string;
  url?: string;
}

export function ShareButton({ title, locale, url }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);
  const isAr = locale === 'ar';

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const targetUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ title, url: targetUrl });
        return;
      } catch {}
    }
    try {
      await navigator.clipboard.writeText(targetUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className={`icon-tool ${copied ? 'active' : ''}`}
      title={isAr ? 'مشاركة الملف' : 'Share profile'}
      aria-label="Share"
    >
      {copied ? <Check size={13} /> : <Share2 size={13} />}
      <span>{copied ? (isAr ? 'تم النسخ!' : 'Link Copied!') : (isAr ? 'مشاركة' : 'Share')}</span>
    </button>
  );
}

/**
 * Fire-and-forget profile view tracker.
 *
 * Pattern ported from IndexOrbit's `view-tracker.tsx`. Renders nothing;
 * it records a page view for analytics without blocking render.
 */
export function ViewTracker({ slug, endpoint }: { slug: string; endpoint?: string }) {
  useEffect(() => {
    const track = async () => {
      try {
        await fetch(endpoint || `/api/v1/directory/businesses/${slug}/view`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ slug }),
        });
      } catch {
        // Analytics must never surface an error to the visitor.
      }
    };
    track();
  }, [slug, endpoint]);

  return null;
}

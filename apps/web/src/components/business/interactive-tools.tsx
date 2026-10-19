'use client';

import { useState, useEffect } from 'react';
import { Bookmark, Share2, Check } from 'lucide-react';

interface BookmarkButtonProps {
  slug: string;
  locale?: string;
  label?: string;
}

export function BookmarkButton({ slug, locale, label }: BookmarkButtonProps) {
  const [bookmarked, setBookmarked] = useState(false);
  const isAr = locale === 'ar';

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('oudguide_shortlist') || '[]');
      setBookmarked(saved.includes(slug));
    } catch {}
  }, [slug]);

  const toggleBookmark = () => {
    try {
      const saved = JSON.parse(localStorage.getItem('oudguide_shortlist') || '[]');
      let updated;
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

  return (
    <button
      type="button"
      onClick={toggleBookmark}
      className={`icon-tool ${bookmarked ? 'active' : ''}`}
      title={bookmarked ? 'Saved' : 'Save supplier'}
      aria-label="Bookmark"
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

  const handleShare = async () => {
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
      title="Share profile"
      aria-label="Share"
    >
      {copied ? <Check size={13} /> : <Share2 size={13} />}
      <span>{copied ? (isAr ? 'تم النسخ!' : 'Link Copied!') : (isAr ? 'مشاركة' : 'Share')}</span>
    </button>
  );
}
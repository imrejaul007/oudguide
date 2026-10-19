'use client';

import { useState, useEffect } from 'react';
import { Bookmark, Share2, Check, Heart, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function BookmarkButton({ slug, label }: { slug: string; label?: string }) {
  const [bookmarked, setBookmarked] = useState(false);

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
    <Button
      variant="outline"
      size="sm"
      onClick={toggleBookmark}
      className={`gap-1.5 transition-colors ${bookmarked ? 'border-[#c59b27] bg-[#fffdf8] text-[#8c6a15]' : ''}`}
      title={bookmarked ? 'Saved in shortlist' : 'Add to commercial shortlist'}
    >
      <Bookmark className={`h-4 w-4 ${bookmarked ? 'fill-[#c59b27] text-[#c59b27]' : ''}`} />
      <span>{bookmarked ? 'Saved to Shortlist' : (label || 'Save Supplier')}</span>
    </Button>
  );
}

export function ShareButton({ title, url }: { title: string; url?: string }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const targetUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
    if (navigator.share) {
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
    <Button
      variant="outline"
      size="sm"
      onClick={handleShare}
      className="gap-1.5"
      title="Share verified producer profile"
    >
      {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Share2 className="h-4 w-4" />}
      <span>{copied ? 'Link Copied!' : 'Share Profile'}</span>
    </Button>
  );
}

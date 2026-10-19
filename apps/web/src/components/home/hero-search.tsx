'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, MapPin, Loader2, ArrowRight } from 'lucide-react';

interface HeroSearchProps {
  locale: string;
}

export function HeroSearch({ locale }: HeroSearchProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('oud-oil');
  const [locating, setLocating] = useState(false);
  const [locationName, setLocationName] = useState('');
  const isAr = locale === 'ar';

  const handleLocationClick = () => {
    if (!navigator.geolocation) return;
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`,
            { headers: { 'Accept-Language': isAr ? 'ar' : 'en' } }
          );
          if (res.ok) {
            const data = await res.json();
            const city = data.address?.city || data.address?.town || data.address?.country || '';
            if (city) setLocationName(city);
          }
        } catch {} finally {
          setLocating(false);
        }
      },
      () => setLocating(false)
    );
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery) params.set('search', searchQuery);
    if (category) params.set('role', category === 'oud-wood' ? 'distiller' : 'wholesaler');
    if (locationName) params.set('country', locationName);
    router.push(`/${locale}/directory?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="hero-search">
      <div className="search-field">
        <Search size={18} />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={isAr
            ? 'ابحث بالصنف، المقطر، أو الإقليم...'
            : 'Search by material, distiller, or terroir...'}
        />
      </div>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        aria-label={isAr ? 'الصنف' : 'Category'}
      >
        <option value="oud-wood">{isAr ? 'خشب وبخور' : 'Oud Wood / Chips'}</option>
        <option value="oud-oil">{isAr ? 'دهن عود مقطر' : 'Pure Dehn Al Oud'}</option>
        <option value="attar">{isAr ? 'عطور شرقية' : 'Heritage Attars'}</option>
        <option value="private-label">{isAr ? 'تصنيع خاص' : 'Private Label'}</option>
      </select>

      <button
        type="button"
        onClick={handleLocationClick}
        className="location-trigger"
        disabled={locating}
        aria-label={isAr ? 'كشف الموقع' : 'Detect location'}
      >
        {locating ? <Loader2 size={14} className="spin" /> : <MapPin size={14} />}
        <span>{locationName || (isAr ? 'موقعي' : 'My location')}</span>
      </button>

      <button type="submit" className="btn btn-gold search-button">
        {isAr ? 'بحث' : 'Search'}
        <ArrowRight size={14} />
      </button>
    </form>
  );
}
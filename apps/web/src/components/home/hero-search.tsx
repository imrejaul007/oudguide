'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, MapPin, Loader2, ArrowRight } from 'lucide-react';

interface HeroSearchProps {
  locale: string;
}

/**
 * Reverse-geocode a coordinate into a "City, Country" label.
 * Ported from IndexOrbit's `src/components/home/hero-search.tsx`, with the
 * fallback chain extended to cover village / county tiers.
 */
async function reverseGeocode(lat: number, lng: number, isAr: boolean): Promise<string> {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`,
      { headers: { 'Accept-Language': isAr ? 'ar' : 'en' } }
    );
    if (!res.ok) return `${lat.toFixed(2)}, ${lng.toFixed(2)}`;
    const data = await res.json();
    const city =
      data.address?.city ||
      data.address?.town ||
      data.address?.village ||
      data.address?.county ||
      '';
    const country = data.address?.country || '';
    if (city && country) return `${city}, ${country}`;
    if (city) return city;
    return data.display_name?.split(',').slice(0, 2).join(',') || `${lat.toFixed(2)}, ${lng.toFixed(2)}`;
  } catch {
    return `${lat.toFixed(2)}, ${lng.toFixed(2)}`;
  }
}

export function HeroSearch({ locale }: HeroSearchProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('oud-oil');
  const [locating, setLocating] = useState(false);
  const [locationName, setLocationName] = useState('');
  const [locationError, setLocationError] = useState<string | null>(null);
  const isAr = locale === 'ar';

  const handleLocationClick = () => {
    if (!navigator.geolocation) {
      setLocationError(isAr ? 'المتصفح لا يدعم تحديد الموقع' : 'Geolocation is not supported by your browser');
      return;
    }

    setLocating(true);
    setLocationError(null);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const name = await reverseGeocode(latitude, longitude, isAr);
        setLocationName(name);
        setLocating(false);
      },
      (error) => {
        // Browsers report geolocation failures inconsistently; surface a
        // useful summary rather than the (often empty) raw error.
        const reason =
          error?.code === 1 ? 'permission denied' :
          error?.code === 2 ? 'position unavailable' :
          error?.code === 3 ? 'request timed out' :
          'unknown error';
        setLocationError(
          isAr ? `تعذّر تحديد الموقع (${reason})` : `Couldn't get your location (${reason})`
        );
        setLocating(false);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 300000 }
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
        title={locationError || (isAr ? 'استخدم موقعي الحالي' : 'Use my current location')}
      >
        {locating ? <Loader2 size={14} className="spin" /> : <MapPin size={14} />}
        <span>{locationName || (isAr ? 'موقعي' : 'My location')}</span>
      </button>

      <button type="submit" className="btn btn-primary search-button">
        {isAr ? 'بحث' : 'Search'}
        <ArrowRight size={14} className="icon-dir-flip" />
      </button>

      {locationError && (
        <span
          role="status"
          style={{
            flexBasis: '100%',
            fontSize: '0.75rem',
            color: '#c98a82',
            textAlign: 'center',
            fontFamily: 'var(--font-sans)',
          }}
        >
          {locationError}
        </span>
      )}
    </form>
  );
}

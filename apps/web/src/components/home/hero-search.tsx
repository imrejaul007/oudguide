'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, MapPin, Loader2, Compass } from 'lucide-react';

interface HeroSearchProps {
  locale: string;
}

export function HeroSearch({ locale }: HeroSearchProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('Oud oil');
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
        } catch {
          // graceful fallback
        } finally {
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
    if (category) params.set('role', category === 'Oud wood' ? 'distiller' : 'wholesaler');
    if (locationName) params.set('country', locationName);
    router.push(`/${locale}/directory?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="search-box-hero" style={{ padding: '8px 12px', borderRadius: '14px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: '1 1 240px' }}>
        <Search className="h-5 w-5 text-[#8c6a15] shrink-0" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={isAr ? 'ابحث بالصنف، المقطر، أو المنطقة (Assam, Trat, Koh Kong)...' : 'Search by material, distiller, or terroir (Assam, Trat, Koh Kong)...'}
          style={{ fontSize: '15px' }}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderLeft: isAr ? 'none' : '1px solid #e6dfd1', borderRight: isAr ? '1px solid #e6dfd1' : 'none', paddingInlineStart: '10px' }}>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ fontSize: '13.5px', padding: '8px 12px', background: '#fcfaf6', borderRadius: '8px' }}
        >
          <option value="Oud wood">{isAr ? 'خشب وبخور' : 'Oud Wood / Chips'}</option>
          <option value="Oud oil">{isAr ? 'دهن عود مقطر' : 'Pure Dehn Al Oud'}</option>
          <option value="Attar">{isAr ? 'عطور شرقية وزيوت' : 'Artisan Attars'}</option>
          <option value="Finished perfume">{isAr ? 'تصنيع عطور خاص' : 'Private Label'}</option>
        </select>

        <button
          type="button"
          onClick={handleLocationClick}
          className="p-2 rounded-lg hover:bg-black/5 text-[#8c6a15] transition-colors"
          title={isAr ? 'تحديد الموقع الجغرافي القريب' : 'Detect your nearest fragrance market'}
        >
          {locating ? <Loader2 className="h-4 w-4 animate-spin" /> : <MapPin className="h-4 w-4" />}
        </button>
      </div>

      <button type="submit" className="btn-gold" style={{ padding: '11px 24px', whiteSpace: 'nowrap', border: 'none' }}>
        <span>{isAr ? 'بحث الموردين' : 'Find Suppliers'}</span>
        <span>{isAr ? '←' : '→'}</span>
      </button>
    </form>
  );
}

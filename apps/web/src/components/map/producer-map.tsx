'use client';

import { useEffect, useMemo, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export interface MapRegion {
  key: string;
  iso2: string;
  name: string;
  name_ar: string;
  lat: number;
  lng: number;
  role: 'producer' | 'market';
  producers?: {
    id: string;
    slug: string;
    name: string;
    city?: string | null;
    country_name?: string | null;
    category?: string | null;
  }[];
}

/**
 * Centre the map when the region set changes.
 * Ported from IndexOrbit's `MapCenter` helper in `map/business-map.tsx`.
 */
function MapCenter({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, map.getZoom());
  }, [center, map]);
  return null;
}

/**
 * Fit the viewport to the bounds of all supplied markers.
 */
function FitBounds({ points }: { points: [number, number][] }) {
  const map = useMap();
  useEffect(() => {
    if (points.length === 0) return;
    if (points.length === 1) {
      map.setView(points[0], 6);
      return;
    }
    map.fitBounds(L.latLngBounds(points), { padding: [48, 48] });
  }, [points, map]);
  return null;
}

/** Brass pin icon matching the Cool data-directory palette. */
function brassIcon(role: 'producer' | 'market') {
  const fill = role === 'producer' ? 'var(--brass-light)' : 'var(--terracotta)';
  const stroke = role === 'producer' ? 'var(--color-gold-dark)' : '#6e2a1f';
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 30 40">
      <path d="M15 0C6.7 0 0 6.7 0 15c0 11 15 25 15 25s15-14 15-25C30 6.7 23.3 0 15 0z"
            fill="${fill}" stroke="${stroke}" stroke-width="1.5"/>
      <circle cx="15" cy="15" r="6" fill="var(--bg-paper)" stroke="${stroke}" stroke-width="1"/>
      <circle cx="15" cy="15" r="2.4" fill="${fill}"/>
    </svg>
  `;
  return L.divIcon({
    html: svg,
    className: 'oudguide-pin',
    iconSize: [30, 40],
    iconAnchor: [15, 40],
    popupAnchor: [0, -34],
  });
}

export function ProducerMap({
  regions,
  locale,
  isAr,
}: {
  regions: MapRegion[];
  locale: string;
  isAr: boolean;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const points = useMemo(
    () => regions.map((r) => [r.lat, r.lng] as [number, number]),
    [regions]
  );

  const center = useMemo<[number, number]>(() => {
    if (points.length === 0) return [20, 60];
    const lat = points.reduce((s, p) => s + p[0], 0) / points.length;
    const lng = points.reduce((s, p) => s + p[1], 0) / points.length;
    return [lat, lng];
  }, [points]);

  if (!mounted) {
    return (
      <div className="map-frame" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.85rem',
            color: 'var(--color-text-muted)',
          }}
        >
          {isAr ? 'جارٍ تحميل الخريطة...' : 'Loading map...'}
        </span>
      </div>
    );
  }

  return (
    <div className="map-frame">
      <MapContainer center={center} zoom={3} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        <MapCenter center={center} />
        <FitBounds points={points} />

        {regions.map((region) => (
          <Marker
            key={region.key}
            position={[region.lat, region.lng]}
            icon={brassIcon(region.role)}
          >
            <Popup>
              <p className="map-popup-title">
                {isAr ? region.name_ar : region.name}
              </p>
              <p className="map-popup-meta">
                {region.role === 'producer'
                  ? (isAr ? 'إقليم منتج' : 'Producing terroir')
                  : (isAr ? 'مركز تجاري' : 'Trading hub')}
                {' · '}{region.iso2}
              </p>
              {region.producers && region.producers.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {region.producers.map((p) => (
                    <a
                      key={p.id}
                      href={`/${locale}/directory/${p.slug}`}
                      style={{
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--terracotta)',
                        textDecoration: 'none',
                      }}
                    >
                      → {p.name}
                    </a>
                  ))}
                </div>
              ) : (
                <p className="map-popup-meta" style={{ margin: 0 }}>
                  {isAr ? 'غير مرتبط بمورد مسجل حالياً' : 'No registered producer linked yet'}
                </p>
              )}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

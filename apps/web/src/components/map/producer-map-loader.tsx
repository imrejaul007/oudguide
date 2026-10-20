'use client';

import dynamic from 'next/dynamic';
import type { MapRegion } from './producer-map';

/**
 * Client-only wrapper around the Leaflet map.
 *
 * `next/dynamic` with `ssr: false` is not permitted inside a Server
 * Component, so the map page (a server component) renders this client
 * wrapper instead, which then loads Leaflet on the client only.
 */
const ProducerMap = dynamic(
  () => import('./producer-map').then((m) => m.ProducerMap),
  { ssr: false }
);

export function ProducerMapLoader({
  regions,
  locale,
  isAr,
}: {
  regions: MapRegion[];
  locale: string;
  isAr: boolean;
}) {
  return <ProducerMap regions={regions} locale={locale} isAr={isAr} />;
}

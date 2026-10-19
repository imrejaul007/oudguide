import { seed, domain } from '@/lib/data';
import { MetadataRoute } from 'next';


export default function sitemap(): MetadataRoute.Sitemap {
  
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://oudguide.com';

  const validRoutes = seed.routes.filter(
    (r: any) => r.phase !== 'archived' && !r.path.includes('/inquiries/')
  );

  const urls: MetadataRoute.Sitemap = validRoutes.map((r: any) => ({
    url: `${siteUrl}${r.path}`,
    lastModified: new Date('2026-10-19'),
    changeFrequency: 'weekly',
    priority: r.family === 'Editorial guide' ? 0.9 : 0.7,
  }));

  // Add major utility pages
  urls.push(
    { url: `${siteUrl}/en/directory`, lastModified: new Date(), priority: 0.9 },
    { url: `${siteUrl}/en/world`, lastModified: new Date(), priority: 0.8 },
    { url: `${siteUrl}/en/rfq`, lastModified: new Date(), priority: 0.9 },
    { url: `${siteUrl}/ar/directory`, lastModified: new Date(), priority: 0.9 },
    { url: `${siteUrl}/ar/world`, lastModified: new Date(), priority: 0.8 },
    { url: `${siteUrl}/ar/rfq`, lastModified: new Date(), priority: 0.9 }
  );

  return urls;
}

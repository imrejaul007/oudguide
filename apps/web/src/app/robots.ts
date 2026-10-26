import { MetadataRoute } from 'next';

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.oudguide.com'
).replace(/\/$/, '');

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          // The RFQ verification pages are private, per-buyer surfaces.
          '/*/inquiries/',
          '/api/',
          // The operator workspace is not part of the public site.
          '/*/admin',
          '/*/admin/',
          // The B2B portal's per-buyer receipt pages (/b2b/quote/<id>) are
          // dynamic, one per requirement, and are not part of the site to
          // index. The trailing-slash pattern matches only the receipts,
          // so the indexable /b2b/quote form and the supplier storefronts
          // stay open.
          '/*/b2b/quote/',
          // The supplier console and its sign-in are gated by their own
          // session; they are the B2B equivalent of /inquiries/.
          '/*/b2b/supplier/',
        ],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

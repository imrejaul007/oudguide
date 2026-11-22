const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.oudguide.com'
).replace(/\/$/, '');

export const dynamic = 'force-static';

export function GET() {
  const content = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /*/inquiries/',
    'Disallow: /api/',
    'Disallow: /*/admin',
    'Disallow: /*/admin/',
    'Disallow: /*/b2b/quote/',
    'Disallow: /*/b2b/supplier/',
    'Content-Signal: search=yes, ai-train=no',
    `Sitemap: ${siteUrl}/sitemap.xml`,
    '',
  ].join('\n');

  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}

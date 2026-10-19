import { test, describe, before, after } from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';
import { createOudGuideServer } from '../apps/web/src/server.ts';

describe('Web Server HTTP Route Integration Tests (Stage B)', () => {
  let server: http.Server;
  let baseUrl: string;

  before(async () => {
    server = createOudGuideServer();
    await new Promise<void>((resolve) => {
      server.listen(0, '127.0.0.1', () => {
        const addr = server.address() as any;
        baseUrl = `http://127.0.0.1:${addr.port}`;
        resolve();
      });
    });
  });

  after(async () => {
    await new Promise<void>((resolve) => {
      server.close(() => resolve());
    });
  });

  function fetchHttp(path: string, options: http.RequestOptions = {}, bodyData?: string): Promise<{
    statusCode: number;
    headers: http.IncomingHttpHeaders;
    body: string;
  }> {
    return new Promise((resolve, reject) => {
      const url = new URL(path, baseUrl);
      const req = http.request(url, options, (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          resolve({
            statusCode: res.statusCode || 0,
            headers: res.headers,
            body: data,
          });
        });
      });
      req.on('error', reject);
      if (bodyData) {
        req.write(bodyData);
      }
      req.end();
    });
  }

  test('GET / serves homepage with status 200', async () => {
    const res = await fetchHttp('/');
    assert.equal(res.statusCode, 200);
    assert.match(res.body, /OudGuide/);
    assert.match(res.body, /Find suppliers for your wholesale requirement/);
    assert.match(res.body, /Browse Directory/);
  });

  test('GET /en/directory/ serves business directory with non-contact listings', async () => {
    const res = await fetchHttp('/en/directory/');
    assert.equal(res.statusCode, 200);
    assert.match(res.body, /Business directory/);
    assert.match(res.body, /Al Mutalib Perfumes/);
    assert.match(res.body, /Siam Trat Agarwood Co\./);
  });

  test('GET /en/directory/siam-trat-agarwood-co/ strips all contact details on basic profile', async () => {
    const res = await fetchHttp('/en/directory/siam-trat-agarwood-co/');
    assert.equal(res.statusCode, 200);
    assert.match(res.body, /Siam Trat Agarwood Co\./);
    assert.match(res.body, /Contact hidden — basic profile/);
    assert.match(res.body, /Find suppliers for this requirement/);

    // CRITICAL SECURITY ASSERTION: No phone or email in HTML
    assert.equal(res.body.includes('sales@tratagarwood.example.th'), false);
    assert.equal(res.body.includes('+6639500000'), false);
  });

  test('GET /en/directory/al-mutalib-perfumes/ renders contacts on subscribed member profile', async () => {
    const res = await fetchHttp('/en/directory/al-mutalib-perfumes/');
    assert.equal(res.statusCode, 200);
    assert.match(res.body, /Al Mutalib Perfumes/);
    assert.match(res.body, /Contact Information/);
    assert.match(res.body, /wholesale@almutalib\.com/);
    assert.match(res.body, /\+97142260000/);
  });

  test('GET /en/rfq/ renders neutral wholesale inquiry form', async () => {
    const res = await fetchHttp('/en/rfq/');
    assert.equal(res.statusCode, 200);
    assert.match(res.body, /Request Wholesale Suppliers/);
    assert.match(res.body, /action="\/en\/rfq\/submit"/);
    assert.match(res.body, /name="product_family"/);
    assert.match(res.body, /name="destination_country"/);
  });

  test('POST /en/rfq/submit creates inquiry and redirects to status page', async () => {
    const formData = new URLSearchParams({
      product_family: 'Oud wood',
      quantity: '25',
      quantity_unit: 'kg',
      destination_country: 'United Arab Emirates',
      samples_requested: 'true',
      buyer_name: 'Tariq Al Nuaimi',
      preferred_contact_channel: 'email',
      buyer_email: 'tariq@nuaimi.example',
    }).toString();

    const res = await fetchHttp('/en/rfq/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(formData),
      },
    }, formData);

    assert.equal(res.statusCode, 303);
    const location = res.headers.location || '';
    assert.match(location, /^\/en\/inquiries\/inq_/);

    // Follow redirect to inquiry status page
    const statusRes = await fetchHttp(location);
    assert.equal(statusRes.statusCode, 200);
    assert.match(statusRes.body, /pending_verification/);
    assert.match(statusRes.body, /6-digit verification code/);
  });

  test('GET /sitemap.xml and GET /robots.txt serve valid SEO directives', async () => {
    const sitemap = await fetchHttp('/sitemap.xml');
    assert.equal(sitemap.statusCode, 200);
    assert.match(sitemap.body, /<urlset/);
    assert.match(sitemap.body, /<\/urlset>/);

    const robots = await fetchHttp('/robots.txt');
    assert.equal(robots.statusCode, 200);
    assert.match(robots.body, /User-agent: \*/);
    assert.match(robots.body, /Disallow: \/en\/inquiries\//);
    assert.match(robots.body, /Sitemap:/);
  });
});

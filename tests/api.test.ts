import { test, describe, before, after } from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';
import { createOudGuideServer } from '../apps/web/src/server.ts';

describe('OpenAPI REST Endpoints & Arabic Localization (/v1/*, /ar/)', () => {
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

  function apiRequest(path: string, options: http.RequestOptions = {}, bodyData?: any): Promise<{
    status: number;
    headers: http.IncomingHttpHeaders;
    json: any;
    rawText: string;
  }> {
    return new Promise((resolve, reject) => {
      const url = new URL(path, baseUrl);
      const req = http.request(url, options, (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          let json = null;
          try {
            json = JSON.parse(data);
          } catch {}
          resolve({
            status: res.statusCode || 0,
            headers: res.headers,
            json,
            rawText: data,
          });
        });
      });
      req.on('error', reject);
      if (bodyData) {
        req.setHeader('Content-Type', 'application/json');
        req.write(typeof bodyData === 'string' ? bodyData : JSON.stringify(bodyData));
      }
      req.end();
    });
  }

  test('GET /v1/directory/businesses returns projected businesses without contacts', async () => {
    const res = await apiRequest('/v1/directory/businesses');
    assert.equal(res.status, 200);
    assert.ok(Array.isArray(res.json.data));
    assert.equal(res.json.count >= 3, true);

    const trat = res.json.data.find((b: any) => b.slug === 'siam-trat-agarwood-co');
    assert.ok(trat);
    assert.equal(trat.contact_unlocked, false);
    assert.equal(trat.email, undefined);
    assert.equal(trat.phone, undefined);
    assert.equal(trat.whatsapp, undefined);
    assert.equal(trat.street_address, undefined);
  });

  test('GET /v1/businesses/{id} returns single business with contact gating', async () => {
    const res = await apiRequest('/v1/businesses/siam-trat-agarwood-co');
    assert.equal(res.status, 200);
    assert.equal(res.json.data.name, 'Siam Trat Agarwood Co.');
    assert.equal(res.json.data.contact_unlocked, false);
    assert.equal(res.json.data.email, undefined);
  });

  test('POST /v1/inquiries submits wholesale inquiry and receives verification token', async () => {
    const res = await apiRequest('/v1/inquiries', { method: 'POST' }, {
      product_family: 'Oud oil',
      quantity: 50,
      quantity_unit: 'tolas',
      destination_country: 'United Arab Emirates',
      preferred_contact_channel: 'email',
      buyer_name: 'Zaid Al Qasimi',
      buyer_email: 'zaid@qasimi.example',
      request_mode: 'matching',
    });

    assert.equal(res.status, 201);
    assert.ok(res.json.inquiry_id);
    assert.ok(res.json.verification_token);
    assert.equal(res.json.state, 'pending_verification');

    // 1. Verify channel via API
    const verifyRes = await apiRequest(`/v1/inquiries/${res.json.inquiry_id}/verify`, { method: 'POST' }, {
      token: res.json.verification_token,
    });
    assert.equal(verifyRes.status, 200);
    assert.equal(verifyRes.json.state, 'authorized');

    // 2. Fetch candidate suppliers
    const candRes = await apiRequest(`/v1/inquiries/${res.json.inquiry_id}/candidates`);
    assert.equal(candRes.status, 200);
    assert.ok(Array.isArray(candRes.json.candidates));

    // 3. Buyer approves recipient
    const approveRes = await apiRequest(`/v1/inquiries/${res.json.inquiry_id}/approvals`, { method: 'POST' }, {
      target_business_id: 'biz_almutalib_01',
    });
    assert.equal(approveRes.status, 200);
    assert.equal(approveRes.json.success, true);

    // 4. Dispatch release
    const releaseRes = await apiRequest(`/v1/internal/releases/${res.json.inquiry_id}/dispatch`, { method: 'POST' }, {
      target_business_id: 'biz_almutalib_01',
    });
    assert.equal(releaseRes.status, 200);
    assert.equal(releaseRes.json.reason, 'allowed');
  });

  test('GET /v1/partners/opportunities returns redacted briefs with zero buyer PII', async () => {
    const res = await apiRequest('/v1/partners/opportunities');
    assert.equal(res.status, 200);
    assert.ok(Array.isArray(res.json.data));

    for (const brief of res.json.data) {
      assert.ok(brief.inquiry_id);
      assert.ok(brief.product_family);
      // Zero PII assertions
      assert.equal(brief.buyer_name, undefined);
      assert.equal(brief.buyer_email, undefined);
      assert.equal(brief.buyer_phone, undefined);
      assert.equal(brief.company_name, undefined);
    }
  });

  test('POST /v1/privacy/requests and POST /v1/corrections return 202 Accepted', async () => {
    const privRes = await apiRequest('/v1/privacy/requests', { method: 'POST' }, {
      subject_email: 'user@example.com',
      request_type: 'erasure',
    });
    assert.equal(privRes.status, 202);
    assert.ok(privRes.json.request_id);

    const corrRes = await apiRequest('/v1/corrections', { method: 'POST' }, {
      target_url: '/en/directory/siam-trat-agarwood-co/',
      correction_details: 'Updated distillation coordinates in Trat.',
    });
    assert.equal(corrRes.status, 202);
    assert.ok(corrRes.json.correction_id);
  });

  test('GET /ar/ renders Arabic localized homepage with dir="rtl"', async () => {
    const res = await apiRequest('/ar/');
    assert.equal(res.status, 200);
    assert.match(res.rawText, /dir="rtl"/);
    assert.match(res.rawText, /lang="ar"/);
    assert.match(res.rawText, /دليل العود/);
    assert.match(res.rawText, /تقديم طلب توريد بالجملة/);
  });
});

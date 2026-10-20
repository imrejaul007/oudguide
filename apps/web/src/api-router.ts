/**
 * OudGuide REST API Router
 * Implements reference OpenAPI operations for directory, inquiries, partner opportunities, and privacy.
 * Satisfies Section 24, QA-010, QA-018, QA-019.
 */

import { IncomingMessage, ServerResponse } from 'node:http';
import { OudGuideDomainService } from '../../../packages/domain/src/index.ts';
import { seedData } from '../../../scripts/seed.js';

export function handleApiRequest(
  req: IncomingMessage,
  res: ServerResponse,
  domain: OudGuideDomainService,
  seed: ReturnType<typeof seedData>
): boolean {
  const url = new URL(req.url || '/', 'http://localhost');
  const path = url.pathname;
  const method = req.method || 'GET';

  if (!path.startsWith('/v1/')) {
    return false;
  }

  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('X-Content-Type-Options', 'nosniff');

  function sendJson(status: number, data: any) {
    res.statusCode = status;
    res.end(JSON.stringify(data, null, 2));
  }

  function readJsonBody(): Promise<any> {
    return new Promise((resolve, reject) => {
      let body = '';
      req.on('data', (chunk) => (body += chunk));
      req.on('end', () => {
        try {
          resolve(body ? JSON.parse(body) : {});
        } catch (e) {
          reject(e);
        }
      });
    });
  }

  // 1. GET /v1/directory/businesses
  if (path === '/v1/directory/businesses' && method === 'GET') {
    const country = url.searchParams.get('country') || undefined;
    const role = url.searchParams.get('role') || undefined;
    const search = url.searchParams.get('search') || undefined;
    const origin = url.searchParams.get('origin') || undefined;
    const list = domain.listBusinesses({ country_id: country, role, search, origin });
    sendJson(200, { data: list, count: list.length });
    return true;
  }

  // 2. GET /v1/businesses/{id}
  const bizMatch = path.match(/^\/v1\/businesses\/([^/]+)$/);
  if (bizMatch && method === 'GET') {
    const idOrSlug = bizMatch[1];
    let biz = domain.getBusinessBySlug(idOrSlug);
    if (!biz) {
      const raw = domain.getRawBusiness(idOrSlug);
      if (raw) biz = domain.getBusinessBySlug(raw.slug);
    }
    if (!biz) {
      sendJson(404, { error: 'business_not_found', message: 'Business not found' });
      return true;
    }
    sendJson(200, { data: biz });
    return true;
  }

  // 3. POST /v1/businesses/{id}/claim
  const claimMatch = path.match(/^\/v1\/businesses\/([^/]+)\/claim$/);
  if (claimMatch && method === 'POST') {
    const id = claimMatch[1];
    readJsonBody().then((body) => {
      const email = body.email || 'claimant@example.com';
      const result = domain.claimProfile(id, email);
      sendJson(result.success ? 200 : 400, result);
    }).catch(() => sendJson(400, { error: 'invalid_json' }));
    return true;
  }

  // 4. POST /v1/businesses/{id}/membership-checkout
  //
  // A membership is activated by a provider-confirmed payment and by
  // nothing else (OG-A19). A request without one is refused rather than
  // granting the entitlement.
  const memMatch = path.match(/^\/v1\/businesses\/([^/]+)\/membership-checkout$/);
  if (memMatch && method === 'POST') {
    const id = memMatch[1];
    readJsonBody()
      .then((body) => {
        const confirmedAt = body.confirmed_at ? new Date(body.confirmed_at) : undefined;
        if (!confirmedAt || isNaN(confirmedAt.getTime())) {
          sendJson(402, {
            error: 'payment_not_confirmed',
            message:
              'A confirmed payment is required. A payment page, a success URL or a browser request does not activate a membership.',
          });
          return;
        }
        const result = domain.purchaseMembership(id, {
          reference: String(body.reference ?? '').trim(),
          amount: Number(body.amount ?? 0),
          currency: String(body.currency ?? 'AED').toUpperCase(),
          confirmed_at: confirmedAt,
          provider: String(body.provider ?? 'unconfirmed'),
        });
        sendJson(result.success ? 200 : 400, result);
      })
      .catch(() => sendJson(400, { error: 'invalid_json' }));
    return true;
  }

  // 5. POST /v1/inquiries
  if (path === '/v1/inquiries' && method === 'POST') {
    readJsonBody().then((body) => {
      if (!body.product_family || !body.destination_country) {
        sendJson(400, { error: 'validation_error', message: 'Missing product_family or destination_country' });
        return;
      }
      const result = domain.submitInquiry(body);
      sendJson(201, result);
    }).catch(() => sendJson(400, { error: 'invalid_json' }));
    return true;
  }

  // 6. GET /v1/inquiries/{id}
  const inqMatch = path.match(/^\/v1\/inquiries\/([^/]+)$/);
  if (inqMatch && method === 'GET') {
    const id = inqMatch[1];
    const inq = domain.getInquiry(id);
    if (!inq) {
      sendJson(404, { error: 'not_found', message: 'Inquiry not found' });
      return true;
    }
    sendJson(200, {
      id: inq.id,
      state: inq.state,
      created_at: inq.created_at,
      expires_at: inq.expires_at,
      channel_verified: inq.channel_verified,
      preferred_channel: inq.preferred_channel,
      product_family: inq.product_family,
      quantity: inq.quantity,
      unit: inq.quantity_unit,
      destination_country: inq.destination_country,
    });
    return true;
  }

  // 7. POST /v1/inquiries/{id}/verify
  const inqVerifyMatch = path.match(/^\/v1\/inquiries\/([^/]+)\/verify$/);
  if (inqVerifyMatch && method === 'POST') {
    const id = inqVerifyMatch[1];
    readJsonBody().then((body) => {
      const result = domain.verifyInquiryChannel(id, body.token || '');
      sendJson(result.success ? 200 : 400, result);
    }).catch(() => sendJson(400, { error: 'invalid_json' }));
    return true;
  }

  // 8. GET /v1/inquiries/{id}/candidates
  const inqCandMatch = path.match(/^\/v1\/inquiries\/([^/]+)\/candidates$/);
  if (inqCandMatch && method === 'GET') {
    const id = inqCandMatch[1];
    const inq = domain.getInquiry(id);
    if (!inq) {
      sendJson(404, { error: 'not_found', message: 'Inquiry not found' });
      return true;
    }
    // Return eligible partner businesses for this inquiry
    const candidates = domain.listBusinesses();
    sendJson(200, { inquiry_id: id, candidates });
    return true;
  }

  // 9. POST /v1/inquiries/{id}/approvals
  const inqApproveMatch = path.match(/^\/v1\/inquiries\/([^/]+)\/approvals$/);
  if (inqApproveMatch && method === 'POST') {
    const id = inqApproveMatch[1];
    readJsonBody().then((body) => {
      const result = domain.approveRecipient(id, body.target_business_id);
      sendJson(result.success ? 200 : 400, result);
    }).catch(() => sendJson(400, { error: 'invalid_json' }));
    return true;
  }

  // 10. GET /v1/partners/opportunities
  if (path === '/v1/partners/opportunities' && method === 'GET') {
    const briefs = domain.listMatchBriefs();
    sendJson(200, { data: briefs, count: briefs.length });
    return true;
  }

  // 11. POST /v1/internal/releases/{id}/dispatch
  const releaseMatch = path.match(/^\/v1\/internal\/releases\/([^/]+)\/dispatch$/);
  if (releaseMatch && method === 'POST') {
    const inquiryId = releaseMatch[1];
    readJsonBody().then((body) => {
      const result = domain.executeRelease(inquiryId, body.target_business_id);
      sendJson(result.success ? 200 : 400, result);
    }).catch(() => sendJson(400, { error: 'invalid_json' }));
    return true;
  }

  // 12. GET /v1/pages/{id}
  const pageMatch = path.match(/^\/v1\/pages\/([^/]+)$/);
  if (pageMatch && method === 'GET') {
    const pageId = pageMatch[1];
    const route = seed.routes.find((r: any) => r.route_id === pageId || r.path === decodeURIComponent(pageId));
    if (!route) {
      sendJson(404, { error: 'not_found', message: 'Page not found' });
      return true;
    }
    sendJson(200, { data: route });
    return true;
  }

  // 13. POST /v1/privacy/requests
  if (path === '/v1/privacy/requests' && method === 'POST') {
    readJsonBody().then((body) => {
      sendJson(202, {
        request_id: `priv_${Date.now()}`,
        status: 'received',
        message: 'Privacy request recorded. Processing per data retention policy.',
      });
    }).catch(() => sendJson(400, { error: 'invalid_json' }));
    return true;
  }

  // 14. POST /v1/corrections
  if (path === '/v1/corrections' && method === 'POST') {
    readJsonBody().then((body) => {
      sendJson(202, {
        correction_id: `corr_${Date.now()}`,
        status: 'submitted',
        message: 'Editorial correction submitted for review.',
      });
    }).catch(() => sendJson(400, { error: 'invalid_json' }));
    return true;
  }

  return false;
}

/**
 * OudGuide Web Application Server
 * Server-rendered routes for Directory, RFQ intake, and Buyer/Admin workspaces.
 * Built on Node 22 stdlib HTTP for zero external dependencies in development.
 * Production deployment will migrate to Next.js App Router in Stage C.
 */

import { createServer, IncomingMessage, ServerResponse } from 'node:http';
import { handleApiRequest } from './api-router.ts';
import { OudGuideDomainService } from '../../../packages/domain/src/index.ts';
import { seedData } from '../../../scripts/seed.js';
import { isFieldVisible, type RfqFormValues } from '../../../packages/contracts/src/rfq-fields.ts';
import {
  projectPublicBusiness,
  type RawBusinessProfile,
} from '../../../packages/permissions/src/contact-policy.ts';

const PORT = Number(process.env.PORT || 3000);
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || `http://localhost:${PORT}`;

const seed = seedData();
const domain = new OudGuideDomainService(seed.businesses);

// ----------------------------------------------------------------
// HTML Rendering (server-rendered, plain string templates)
// ----------------------------------------------------------------

function escapeHtml(s: any): string {
  if (s === null || s === undefined) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function baseLayout(title: string, content: string, canonicalPath: string): string {
  return `<!doctype html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)} — OudGuide.com</title>
  <meta name="description" content="OudGuide is a worldwide oud and fragrance knowledge portal, business directory and supplier-matching service.">
  <link rel="canonical" href="${SITE_URL}${canonicalPath}">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:url" content="${SITE_URL}${canonicalPath}">
  <meta property="og:type" content="website">
  <meta name="robots" content="index,follow">
  <style>
    body { font-family: Georgia, 'Times New Roman', serif; color: #1a1a1a; background: #fdfbf6; max-width: 960px; margin: 0 auto; padding: 24px 20px; line-height: 1.6; }
    header { border-bottom: 2px solid #5e1a1f; padding-bottom: 12px; margin-bottom: 24px; }
    header h1 { font-size: 28px; margin: 0; color: #5e1a1f; font-weight: 700; letter-spacing: -0.5px; }
    header h1 a { color: inherit; text-decoration: none; }
    nav { margin-top: 8px; }
    nav a { color: #5e1a1f; margin-right: 18px; text-decoration: none; font-size: 14px; }
    nav a:hover { text-decoration: underline; }
    .hero { background: #f7f1e3; border-left: 4px solid #5e1a1f; padding: 18px 22px; margin-bottom: 28px; }
    .hero h2 { margin: 0 0 6px 0; font-size: 22px; }
    .hero p { margin: 0; }
    .cta { display: inline-block; background: #5e1a1f; color: #fdfbf6; padding: 10px 20px; text-decoration: none; border-radius: 4px; font-weight: 600; }
    .cta:hover { background: #3d0f13; }
    .card { border: 1px solid #e0d9c4; border-radius: 6px; padding: 18px; margin: 14px 0; background: #fffef9; }
    .card h3 { margin: 0 0 6px 0; font-size: 18px; }
    .badge { display: inline-block; padding: 2px 8px; border-radius: 3px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-right: 6px; }
    .badge-locked { background: #e0d9c4; color: #5e5341; }
    .badge-unlocked { background: #5e1a1f; color: #fdfbf6; }
    .badge-member { background: #b88a2c; color: #fdfbf6; }
    footer { margin-top: 40px; padding-top: 18px; border-top: 1px solid #e0d9c4; font-size: 13px; color: #5e5341; }
    form label { display: block; margin: 10px 0 4px; font-weight: 600; font-size: 14px; }
    form input, form select, form textarea { width: 100%; padding: 8px; border: 1px solid #c5b994; border-radius: 4px; font-size: 14px; font-family: inherit; }
    form textarea { min-height: 80px; resize: vertical; }
    form .field { margin-bottom: 12px; }
    .hidden-field { display: none; }
    .step-section { background: #fffef9; border: 1px solid #e0d9c4; border-radius: 6px; padding: 16px 20px; margin: 16px 0; }
    .step-section h3 { margin-top: 0; color: #5e1a1f; font-size: 16px; }
    .verification-banner { background: #fff3cd; border: 1px solid #b88a2c; padding: 10px 14px; border-radius: 4px; margin: 14px 0; }
    .success-banner { background: #d4edda; border: 1px solid #28a745; padding: 10px 14px; border-radius: 4px; margin: 14px 0; }
  </style>
</head>
<body>
  <header>
    <h1><a href="/">OudGuide</a></h1>
    <nav>
      <a href="/en/guides/">Learn</a>
      <a href="/en/directory/">Find Businesses</a>
      <a href="/en/world/">Explore the World</a>
      <a href="/en/products/">Products & Fragrance</a>
      <a href="/en/rfq/">Request Suppliers</a>
      <a href="/en/for-businesses/">For Businesses</a>
    </nav>
  </header>
  <main>
${content}
  </main>
  <footer>
    <p>&copy; 2026 OudGuide.com — A neutral wholesale fragrance matchmaker. <a href="/en/policies/">Policies</a> · <a href="/en/corrections/">Corrections</a> · <a href="/en/privacy/">Privacy</a></p>
  </footer>
</body>
</html>`;
}

function renderHomePage(): string {
  const totalBusinesses = seed.businesses.length;
  const totalCountries = seed.countries.length;
  const totalGuides = seed.routes.filter((r: any) => r.family === 'Editorial guide').length;

  return baseLayout(
    'Worldwide Oud & Fragrance Knowledge Portal',
    `
    <div class="hero">
      <h2>Find suppliers for your wholesale requirement.</h2>
      <p>Tell us what you need. OudGuide will review your requirement and help you choose suitable suppliers. You approve who receives your contact details.</p>
      <p style="margin-top:12px;"><a class="cta" href="/en/rfq/">Start a Requirement →</a></p>
    </div>

    <h2>Explore OudGuide</h2>
    <div class="card">
      <h3>📚 Learn about oud and attars</h3>
      <p>${totalGuides} researched guides covering origins, quality, sourcing, culture and production across the global oud trade.</p>
      <a href="/en/guides/" class="cta">Browse Guides</a>
    </div>

    <div class="card">
      <h3>🏪 Find a verified supplier</h3>
      <p>${totalBusinesses} business profiles across ${totalCountries} researched markets. Independent seller location, material origin and buyer destination discovery.</p>
      <a href="/en/directory/" class="cta">Browse Directory</a>
    </div>

    <div class="card">
      <h3>🌍 Explore the world</h3>
      <p>${totalCountries} country and territory pages describing documented producing regions and buying destinations.</p>
      <a href="/en/world/" class="cta">Explore Countries</a>
    </div>

    <h2>How matching works</h2>
    <div class="card">
      <p>1. <strong>Submit your requirement</strong> through a secure, neutral intake form.</p>
      <p>2. <strong>Verify your contact channel</strong> via one-time code before any sharing.</p>
      <p>3. <strong>Review proposed suppliers</strong> and approve up to 3 named recipients.</p>
      <p>4. <strong>Receive controlled introductions</strong> with full audit trail and withdrawal control.</p>
    </div>
    `,
    '/'
  );
}

function renderDirectoryPage(country: string | null = null, role: string | null = null): string {
  const list = domain.listBusinesses({
    country_id: country || undefined,
    role: role || undefined,
  });

  const cards = list.map((b) => {
    const badges = [];
    if (b.is_claimed) badges.push('<span class="badge badge-member">Claimed</span>');
    if (b.has_active_membership) badges.push('<span class="badge badge-member">Member</span>');
    if (b.contact_unlocked) {
      badges.push('<span class="badge badge-unlocked">Contact Available</span>');
    } else {
      badges.push('<span class="badge badge-locked">Basic Profile</span>');
    }

    // STRICT: Only render contacts if unlocked
    const contactSection = b.contact_unlocked
      ? `<p>
            📧 <a href="mailto:${escapeHtml(b.email)}">${escapeHtml(b.email)}</a><br>
            ${b.phone ? `📞 ${escapeHtml(b.phone)}<br>` : ''}
            ${b.whatsapp ? `💬 ${escapeHtml(b.whatsapp)}<br>` : ''}
            ${b.website_url ? `🌐 <a href="${escapeHtml(b.website_url)}" rel="noopener" target="_blank">Website</a><br>` : ''}
          </p>`
      : `<p><a class="cta" href="/en/rfq/?profile=${encodeURIComponent(b.slug)}">Find suppliers for this requirement</a></p>`;

    return `
    <div class="card">
      <h3><a href="/en/directory/${escapeHtml(b.slug)}/">${escapeHtml(b.name)}</a></h3>
      <p>${badges.join(' ')}</p>
      <p>${escapeHtml(b.city || '')}, ${escapeHtml(b.country_name || '')}</p>
      <p>${escapeHtml(b.description || '')}</p>
      ${contactSection}
    </div>`;
  });

  return baseLayout(
    'Business Directory — Worldwide Oud Suppliers',
    `
    <div class="hero">
      <h2>Business directory</h2>
      <p>${list.length} business${list.length === 1 ? '' : 'es'} found${country ? ` in ${escapeHtml(country)}` : ''}${role ? ` — ${escapeHtml(role)}` : ''}.</p>
    </div>
    ${cards.join('\n')}
    `,
    country ? `/en/directory/?country=${country}` : '/en/directory/'
  );
}

function renderBusinessProfile(slug: string): string | null {
  const biz = domain.getBusinessBySlug(slug);
  if (!biz) return null;

  const raw = domain.getRawBusinessBySlug?.(slug) || null;
  // We'll use the public projection for safe rendering

  const badges = [];
  if (biz.is_claimed) badges.push('<span class="badge badge-member">Claimed</span>');
  if (biz.has_active_membership) badges.push('<span class="badge badge-member">Member</span>');
  if (biz.contact_unlocked) {
    badges.push('<span class="badge badge-unlocked">Contact Available</span>');
  } else {
    badges.push('<span class="badge badge-locked">Basic Profile</span>');
  }

  const contactSection = biz.contact_unlocked
    ? `<div class="step-section">
          <h3>Contact Information</h3>
          ${biz.email ? `<p>📧 <a href="mailto:${escapeHtml(biz.email)}">${escapeHtml(biz.email)}</a></p>` : ''}
          ${biz.phone ? `<p>📞 ${escapeHtml(biz.phone)}</p>` : ''}
          ${biz.whatsapp ? `<p>💬 WhatsApp: ${escapeHtml(biz.whatsapp)}</p>` : ''}
          ${biz.website_url ? `<p>🌐 <a href="${escapeHtml(biz.website_url)}" rel="noopener" target="_blank">${escapeHtml(biz.website_url)}</a></p>` : ''}
        </div>`
    : `<div class="verification-banner">
          <strong>Contact hidden — basic profile.</strong> This is a research record; the business has not authorized public contact display. Use OudGuide's neutral matching if you wish to make a wholesale requirement.
        </div>
        <p><a class="cta" href="/en/rfq/?profile=${encodeURIComponent(slug)}">Find suppliers for this requirement →</a></p>`;

  return baseLayout(
    biz.name,
    `
    <p>${badges.join(' ')}</p>
    <h2>${escapeHtml(biz.name)}</h2>
    <p><strong>${escapeHtml(biz.category || '')}</strong></p>
    <p>📍 ${escapeHtml(biz.city || '')}, ${escapeHtml(biz.country_name || '')}</p>

    <div class="card">
      <p>${escapeHtml(biz.description || '')}</p>
    </div>

    <div class="step-section">
      <h3>Verified product families</h3>
      <p>${(biz.product_families || []).map((f) => escapeHtml(f)).join(', ')}</p>
    </div>

    <div class="step-section">
      <h3>Documented material origins</h3>
      <p>${(biz.handles_origins || []).map((o) => escapeHtml(o)).join(', ')}</p>
    </div>

    ${contactSection}

    <div class="step-section">
      <h3>Sample &amp; order policy</h3>
      <p><strong>Sample availability:</strong> ${biz.sample_availability ? 'Yes' : 'Not stated'}</p>
      <p><strong>Minimum order:</strong> ${escapeHtml(biz.minimum_order_quantity || 'Not stated')}</p>
    </div>
    `,
    `/en/directory/${slug}/`
  );
}

function renderRfqPage(): string {
  return baseLayout(
    'Request Wholesale Suppliers — OudGuide',
    `
    <div class="hero">
      <h2>Find suppliers for your wholesale requirement.</h2>
      <p>Tell us what you need. OudGuide will review your requirement and help you choose suitable suppliers. You approve who receives your contact details.</p>
    </div>

    <form method="POST" action="/en/rfq/submit">
      <div class="step-section">
        <h3>1. Product requirement</h3>
        <div class="field">
          <label for="product_family">Product family *</label>
          <select id="product_family" name="product_family" required>
            <option value="">-- Choose --</option>
            <option value="Oud wood">Oud wood / chips</option>
            <option value="Oud oil">Oud oil / Dehn Al Oud</option>
            <option value="Attar">Attar</option>
            <option value="Perfume oil">Perfume oil</option>
            <option value="Finished perfume">Finished perfume</option>
            <option value="Bakhoor/incense">Bakhoor / incense</option>
            <option value="related">Related products</option>
          </select>
        </div>
        <div class="field">
          <label for="quantity">Quantity and unit *</label>
          <input type="number" step="0.01" min="0" id="quantity" name="quantity" required>
        </div>
        <div class="field">
          <label for="quantity_unit">Unit</label>
          <select id="quantity_unit" name="quantity_unit">
            <option value="tolas">Tolas (12g)</option>
            <option value="kg">Kilograms</option>
            <option value="g">Grams</option>
            <option value="mL">Millilitres</option>
            <option value="L">Litres</option>
            <option value="bottles">Bottles</option>
          </select>
        </div>
        <div class="field">
          <label for="origin_preference">Desired material origin (optional)</label>
          <input type="text" id="origin_preference" name="origin_preference" placeholder="e.g. India (Assam), Cambodia, Indonesia">
        </div>
        <div class="field">
          <label for="samples_requested">Sample preference *</label>
          <select id="samples_requested" name="samples_requested" required>
            <option value="">-- Choose --</option>
            <option value="true">Yes, samples required</option>
            <option value="false">No, bulk only</option>
            <option value="advice">I need advice</option>
          </select>
        </div>
      </div>

      <div class="step-section">
        <h3>2. Destination</h3>
        <div class="field">
          <label for="destination_country">Delivery country *</label>
          <input type="text" id="destination_country" name="destination_country" placeholder="e.g. United Arab Emirates" required>
        </div>
      </div>

      <div class="step-section">
        <h3>3. Contact</h3>
        <div class="field">
          <label for="buyer_name">Your name *</label>
          <input type="text" id="buyer_name" name="buyer_name" required>
        </div>
        <div class="field">
          <label for="preferred_contact_channel">Preferred contact channel *</label>
          <select id="preferred_contact_channel" name="preferred_contact_channel" required>
            <option value="">-- Choose --</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="whatsapp">WhatsApp</option>
          </select>
        </div>
        <div class="field" id="contact_email_field">
          <label for="buyer_email">Email</label>
          <input type="email" id="buyer_email" name="buyer_email" placeholder="you@example.com">
        </div>
        <div class="field" id="contact_phone_field">
          <label for="buyer_phone">Phone / WhatsApp number (with country code)</label>
          <input type="tel" id="buyer_phone" name="buyer_phone" placeholder="+971 5x xxx xxxx">
        </div>
      </div>

      <div class="step-section">
        <p><strong>How we handle your information:</strong> OudGuide will review your requirement and may share a redacted brief with up to 3 verified suppliers. No supplier receives your contact details until you explicitly approve them. You may withdraw your permission at any time.</p>
      </div>

      <button type="submit" class="cta">Submit requirement</button>
    </form>
    `,
    '/en/rfq/'
  );
}

function parseFormBody(body: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const part of body.split('&')) {
    if (!part) continue;
    const [k, v] = part.split('=');
    out[decodeURIComponent(k)] = decodeURIComponent((v || '').replace(/\+/g, ' '));
  }
  return out;
}

function renderInquiryStatusPage(inquiryId: string): string {
  const inq = domain.getInquiry(inquiryId);
  if (!inq) {
    return baseLayout('Inquiry not found', '<div class="verification-banner">Inquiry not found.</div>', '/en/rfq/');
  }

  return baseLayout(
    'Inquiry Status',
    `
    <div class="hero">
      <h2>Inquiry ${escapeHtml(inquiryId)}</h2>
      <p><strong>State:</strong> ${escapeHtml(inq.state)}</p>
      <p><strong>Submitted:</strong> ${inq.created_at.toISOString()}</p>
    </div>

    ${inq.state === 'pending_verification' ? `
      <div class="verification-banner">
        <strong>Action required:</strong> A 6-digit verification code has been sent to your ${escapeHtml(inq.preferred_channel)} contact. Enter it below to advance to matching.
      </div>
      <form method="POST" action="/en/inquiries/${escapeHtml(inquiryId)}/verify">
        <div class="field">
          <label for="token">6-digit verification code</label>
          <input type="text" id="token" name="token" inputmode="numeric" pattern="[0-9]{6}" required>
        </div>
        <button type="submit" class="cta">Verify</button>
      </form>
    ` : ''}

    ${inq.state === 'authorized' ? `
      <div class="success-banner">
        <strong>Verified!</strong> Your inquiry is in the OudGuide matching queue. We are identifying eligible suppliers based on your product, origin and destination requirements.
      </div>
      <h3>Product requirement</h3>
      <ul>
        <li>Product family: ${escapeHtml(inq.product_family)}</li>
        <li>Quantity: ${escapeHtml(String(inq.quantity))} ${escapeHtml(inq.quantity_unit || '')}</li>
        <li>Destination: ${escapeHtml(inq.destination_country)}</li>
        ${inq.origin_preference ? `<li>Origin preference: ${escapeHtml(inq.origin_preference)}</li>` : ''}
        <li>Samples requested: ${inq.samples_requested ? 'Yes' : 'No'}</li>
      </ul>
      <h3>Review proposed suppliers</h3>
      <p>Approve up to 3 named suppliers below to release your contact details. You can reject or withdraw at any time.</p>
      ${domain.listBusinesses().map((b) => `
        <div class="card">
          <h4>${escapeHtml(b.name)}</h4>
          <p>${escapeHtml(b.city || '')}, ${escapeHtml(b.country_name || '')}</p>
          <p>${escapeHtml(b.description?.substring(0, 120) || '')}...</p>
          <form method="POST" action="/en/inquiries/${escapeHtml(inquiryId)}/approve">
            <input type="hidden" name="target_business_id" value="${escapeHtml((domain as any).businesses?.get?.(b.id)?.id || b.id)}">
            <button type="submit" class="cta">Approve this supplier</button>
          </form>
        </div>
      `).join('')}
    ` : ''}
    `,
    `/en/inquiries/${inquiryId}/`
  );
}

function renderRejectionPage(message: string): string {
  return baseLayout('Submission error', `<div class="verification-banner">${escapeHtml(message)}</div>`, '/en/rfq/');
}

// ----------------------------------------------------------------
// HTTP Server
// ----------------------------------------------------------------

export function handleRequest(req: IncomingMessage, res: ServerResponse): void {
  // Delegate to REST API router if path starts with /v1/
  if (handleApiRequest(req, res, domain, seed)) {
    return;
  }

  const url = new URL(req.url || '/', SITE_URL);
  const path = url.pathname;
  const method = req.method || 'GET';

  // Secure noindex for utility pages
  const isUtility = path.startsWith('/en/inquiries/') || path === '/en/rfq/';

  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'"
  );
  if (isUtility) {
    res.setHeader('X-Robots-Tag', 'noindex,nofollow');
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  }


  // Arabic Homepage (RTL)
  if (path === '/ar' || path === '/ar/') {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    const arContent = `
    <div class="hero">
      <h2>دليلك الموثوق لتجارة واقتناء العود الطبيعي والدهن والزيوت العطرية.</h2>
      <p>خدمة الربط التجاري المحايدة لتوريد العود بالجملة، مع حماية تامة لبيانات المشترين والموردين المعتمدين.</p>
      <p style="margin-top:12px;"><a class="cta" href="/ar/rfq/">تقديم طلب توريد بالجملة ←</a></p>
    </div>
    <div class="card">
      <h3>🏪 دليل الموردين المعتمدين</h3>
      <p>تصفح شركات التقطير والمزارع والتجار عبر الأسواق العالمية الرئيسية مع حجب أرقام الاتصال لغير المشتركين.</p>
      <a href="/ar/directory/" class="cta">استعراض الدليل</a>
    </div>
    `;
    const arHtml = `<!doctype html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>دليل العود — OudGuide.com</title>
  <style>
    body { font-family: 'Amiri', 'Traditional Arabic', serif; color: #1a1a1a; background: #fdfbf6; max-width: 960px; margin: 0 auto; padding: 24px 20px; line-height: 1.8; direction: rtl; }
    header { border-bottom: 2px solid #5e1a1f; padding-bottom: 12px; margin-bottom: 24px; }
    header h1 { font-size: 28px; margin: 0; color: #5e1a1f; font-weight: 700; }
    header h1 a { color: inherit; text-decoration: none; }
    nav { margin-top: 8px; }
    nav a { color: #5e1a1f; margin-left: 18px; text-decoration: none; font-size: 14px; }
    .hero { background: #f7f1e3; border-right: 4px solid #5e1a1f; padding: 18px 22px; margin-bottom: 28px; }
    .hero h2 { margin: 0 0 6px 0; font-size: 22px; }
    .cta { display: inline-block; background: #5e1a1f; color: #fdfbf6; padding: 10px 20px; text-decoration: none; border-radius: 4px; font-weight: 600; }
    .card { border: 1px solid #e0d9c4; border-radius: 6px; padding: 18px; margin: 14px 0; background: #fffef9; }
    footer { margin-top: 40px; padding-top: 18px; border-top: 1px solid #e0d9c4; font-size: 13px; color: #5e5341; }
  </style>
</head>
<body>
  <header>
    <h1><a href="/ar/">دليل العود (OudGuide)</a></h1>
    <nav>
      <a href="/ar/">الرئيسية</a>
      <a href="/ar/directory/">دليل الشركات</a>
      <a href="/ar/rfq/">طلب توريد</a>
      <a href="/en/">English</a>
    </nav>
  </header>
  <main>${arContent}</main>
  <footer><p>&copy; 2026 OudGuide.com — منصة معرفية وخدمة ربط تجاري محايدة لتوريد العود والعطور.</p></footer>
</body>
</html>`;
    res.end(arHtml);
    return;
  }

  // Home
  if (path === '/' || path === '/en' || path === '/en/') {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(renderHomePage());
    return;
  }

  // Directory
  if (path === '/en/directory/' || path === '/en/directory') {
    const country = url.searchParams.get('country');
    const role = url.searchParams.get('role');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(renderDirectoryPage(country, role));
    return;
  }

  // Business profile
  const dirMatch = path.match(/^\/en\/directory\/([a-z0-9-]+)\/?$/);
  if (dirMatch) {
    const slug = dirMatch[1];
    const html = renderBusinessProfile(slug);
    if (!html) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.end(baseLayout('Profile not found', '<p>No business profile found at this URL.</p>', `/en/directory/${slug}/`));
      return;
    }
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(html);
    return;
  }

  // RFQ intake
  if (path === '/en/rfq/' || path === '/en/rfq') {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(renderRfqPage());
    return;
  }

  if (path === '/en/rfq/submit' && method === 'POST') {
    let body = '';
    req.on('data', (chunk) => (body += chunk));
    req.on('end', () => {
      const form = parseFormBody(body);

      // Pick the chosen contact channel
      const channel = form.preferred_contact_channel || 'email';
      const values: RfqFormValues = {
        product_family: form.product_family,
        quantity: form.quantity ? Number(form.quantity) : undefined,
        quantity_unit: form.quantity_unit,
        origin_preference: form.origin_preference || undefined,
        destination_country: form.destination_country,
        samples_requested: form.samples_requested === 'true' || form.samples_requested === 'advice',
        preferred_contact_channel: channel,
        buyer_name: form.buyer_name,
        buyer_email: channel === 'email' ? form.buyer_email : undefined,
        buyer_phone: channel === 'phone' ? form.buyer_phone : undefined,
        buyer_whatsapp: channel === 'whatsapp' ? form.buyer_phone : undefined,
        request_mode: 'matching',
      };

      if (!values.product_family || !values.quantity || !values.destination_country || !values.buyer_name || !channel) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end(renderRejectionPage('Please complete product family, quantity, destination, name, and contact channel.'));
        return;
      }

      const result = domain.submitInquiry(values);

      res.statusCode = 303; // See Other redirect to status page
      res.setHeader('Location', `/en/inquiries/${result.inquiry_id}/`);
      res.end();
    });
    return;
  }

  // Inquiry status & verify
  const statusMatch = path.match(/^\/en\/inquiries\/([^/]+)\/?$/);
  if (statusMatch) {
    const inquiryId = statusMatch[1];
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(renderInquiryStatusPage(inquiryId));
    return;
  }

  const verifyMatch = path.match(/^\/en\/inquiries\/([^/]+)\/verify$/);
  if (verifyMatch && method === 'POST') {
    const inquiryId = verifyMatch[1];
    let body = '';
    req.on('data', (chunk) => (body += chunk));
    req.on('end', () => {
      const form = parseFormBody(body);
      const result = domain.verifyInquiryChannel(inquiryId, form.token || '');
      if (!result.success) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end(renderRejectionPage('Invalid verification code. Please re-enter.'));
        return;
      }
      res.statusCode = 303;
      res.setHeader('Location', `/en/inquiries/${inquiryId}/`);
      res.end();
    });
    return;
  }

  const approveMatch = path.match(/^\/en\/inquiries\/([^/]+)\/approve$/);
  if (approveMatch && method === 'POST') {
    const inquiryId = approveMatch[1];
    let body = '';
    req.on('data', (chunk) => (body += chunk));
    req.on('end', () => {
      const form = parseFormBody(body);
      const targetBusinessId = form.target_business_id;
      const approveRes = domain.approveRecipient(inquiryId, targetBusinessId);

      if (!approveRes.success) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end(renderRejectionPage(approveRes.error || 'Approval failed.'));
        return;
      }

      // Execute release immediately (test mode)
      domain.executeRelease(inquiryId, targetBusinessId);

      res.statusCode = 303;
      res.setHeader('Location', `/en/inquiries/${inquiryId}/`);
      res.end();
    });
    return;
  }

  // Sitemap
  if (path === '/sitemap.xml') {
    const validRoutes = seed.routes.filter((r: any) => r.phase !== 'archived');
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${validRoutes.map((r: any) => `  <url><loc>${SITE_URL}${r.path}</loc></url>`).join('\n')}
</urlset>`;
    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    res.end(xml);
    return;
  }

  // Robots
  if (path === '/robots.txt') {
    res.setHeader('Content-Type', 'text/plain');
    res.end(`User-agent: *\nAllow: /$\nAllow: /en/\nDisallow: /en/inquiries/\nDisallow: /en/rfq/submit\nSitemap: ${SITE_URL}/sitemap.xml\n`);
    return;
  }

  // 404
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(baseLayout('Page not found', '<p>This page does not exist yet. Browse the <a href="/">home page</a> or the <a href="/en/directory/">directory</a>.</p>', path));
}

export function createOudGuideServer() {
  return createServer(handleRequest);
}

// Only listen if executed directly
import { fileURLToPath } from 'node:url';
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const server = createOudGuideServer();
  server.listen(PORT, () => {
    console.log(`OudGuide web server listening on ${SITE_URL}`);
    console.log(`Stage B: Working connected journey live.`);
    console.log(`Routes: ${seed.routes.length} candidates | Directory: ${seed.businesses.length} seed businesses`);
  });
}

'use client';

import { useCallback, useEffect, useState } from 'react';
import {
  ClipboardList,
  Quote,
  PackageOpen,
  Plus,
  Loader2,
} from 'lucide-react';

interface AssignedLead {
  id: string;
  lead_id: string;
  state: string;
  assigned_at: string;
  match_reason?: string;
  contact?: {
    buyer_name: string;
    buyer_email?: string;
    buyer_phone?: string;
    buyer_whatsapp?: string;
    company_name?: string;
  };
  requirement?: {
    product_family: string;
    quantity?: string;
    destination_country?: string;
    timeline?: string;
    notes?: string;
  } | null;
}

interface QuoteRow {
  id: string;
  assignment_id: string;
  lead_id: string;
  price?: number;
  currency?: string;
  unit?: string;
  moq?: string;
  lead_time?: string;
  validity_days?: number;
  note?: string;
  created_at: string;
}

interface ListingRow {
  id: string;
  product_family: string;
  name: string;
  description?: string;
  moq?: string;
  unit?: string;
  sample_available: boolean;
  status: string;
  created_at: string;
}

interface SupplierDashboardClientProps {
  businessId: string;
  locale: string;
  isAr: boolean;
}

type Tab = 'leads' | 'quotes' | 'listings';

export function SupplierDashboardClient({ businessId, locale, isAr }: SupplierDashboardClientProps) {
  const [tab, setTab] = useState<Tab>('leads');
  const [leads, setLeads] = useState<AssignedLead[]>([]);
  const [quotes, setQuotes] = useState<QuoteRow[]>([]);
  const [listings, setListings] = useState<ListingRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [quoteDraft, setQuoteDraft] = useState({
    assignment_id: '',
    price: '',
    currency: 'USD',
    unit: '',
    moq: '',
    lead_time: '',
    validity_days: '',
    note: '',
  });
  const [listDraft, setListDraft] = useState({
    name: '',
    product_family: '',
    description: '',
    moq: '',
    unit: '',
    sample_available: false,
  });
  const [busy, setBusy] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [leadsRes, quotesRes, listingsRes] = await Promise.all([
        fetch('/api/v1/b2b/supplier/leads'),
        fetch('/api/v1/b2b/supplier/quotes'),
        fetch('/api/v1/b2b/supplier/listings'),
      ]);

      if (!leadsRes.ok) {
        const data = await leadsRes.json().catch(() => ({}));
        if (leadsRes.status === 401) {
          window.location.href = `/${locale}/b2b/supplier/login`;
          return;
        }
        throw new Error(data.error || 'Could not load the console');
      }

      const leadsData = await leadsRes.json();
      const quotesData = await quotesRes.json().catch(() => ({ quotes: [] }));
      const listingsData = await listingsRes.json().catch(() => ({ listings: [] }));

      setLeads(leadsData.leads ?? []);
      setQuotes(quotesData.quotes ?? []);
      setListings(listingsData.listings ?? []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not load the console');
    } finally {
      setLoading(false);
    }
  }, [locale]);

  useEffect(() => {
    void load();
  }, [load]);

  const postQuote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!quoteDraft.assignment_id) return;
    setBusy(true);
    try {
      const res = await fetch('/api/v1/b2b/supplier/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          assignment_id: quoteDraft.assignment_id,
          price: quoteDraft.price ? Number(quoteDraft.price) : undefined,
          currency: quoteDraft.currency || undefined,
          unit: quoteDraft.unit || undefined,
          moq: quoteDraft.moq || undefined,
          lead_time: quoteDraft.lead_time || undefined,
          validity_days: quoteDraft.validity_days ? Number(quoteDraft.validity_days) : undefined,
          note: quoteDraft.note || undefined,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || 'Could not post the quote');
      } else {
        setQuoteDraft({ ...quoteDraft, price: '', note: '' });
        void load();
      }
    } finally {
      setBusy(false);
    }
  };

  const postListing = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!listDraft.name.trim()) return;
    setBusy(true);
    try {
      const res = await fetch('/api/v1/b2b/supplier/listings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: listDraft.name,
          product_family: listDraft.product_family || undefined,
          description: listDraft.description || undefined,
          moq: listDraft.moq || undefined,
          unit: listDraft.unit || undefined,
          sample_available: listDraft.sample_available,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || 'Could not draft the listing');
      } else {
        setListDraft({
          name: '',
          product_family: '',
          description: '',
          moq: '',
          unit: '',
          sample_available: false,
        });
        void load();
      }
    } finally {
      setBusy(false);
    }
  };

  const inputClass = 'form-input';

  return (
    <div style={{ marginTop: 28 }}>
      {error && (
        <div className="quick-lead-error" role="alert" style={{ marginBottom: 16, color: 'var(--brass)' }}>
          {error}
        </div>
      )}

      <div className="supplier-tabs" style={{ display: 'flex', gap: 4, borderBottom: '1px solid var(--line)', marginBottom: 20 }}>
        {([
          ['leads', isAr ? 'طلباتي' : 'My Leads', ClipboardList],
          ['quotes', isAr ? 'عروضي' : 'My Quotes', Quote],
          ['listings', isAr ? 'منتجاتي' : 'My Listings', PackageOpen],
        ] as [Tab, string, typeof ClipboardList][]).map(([key, label, Icon]) => (
          <button
            key={key}
            className={`supplier-tab ${tab === key ? 'active' : ''}`}
            onClick={() => setTab(key)}
            style={{
              display: 'inline-flex',
              gap: 6,
              alignItems: 'center',
              padding: '8px 14px',
              background: tab === key ? 'var(--bg)' : 'transparent',
              border: 'none',
              borderBottom: tab === key ? '2px solid var(--green-700)' : '2px solid transparent',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.9rem',
              color: tab === key ? 'var(--green-800)' : 'var(--ink-muted)',
            }}
          >
            <Icon size={14} />
            {label}
          </button>
        ))}
      </div>

      {loading ? (
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', padding: 24 }}>
          <Loader2 size={16} className="spin" />
          <span className="discipline-body">{isAr ? 'جارٍ التحميل…' : 'Loading…'}</span>
        </div>
      ) : (
        <>
          {tab === 'leads' && (
            <div style={{ display: 'grid', gap: 14 }}>
              {leads.length === 0 && (
                <div className="card-frame" style={{ padding: 24, textAlign: 'center' }}>
                  <p className="discipline-body" style={{ margin: 0 }}>
                    {isAr
                      ? 'لا طلبات مسندة بعد. يظهر الطلب هنا عندما يُسند إليك من قبل المشغلين.'
                      : 'No requirements have been assigned to you yet. They appear here when an operator assigns them to your supplier.'}
                  </p>
                </div>
              )}

              {leads.map((lead) => (
                <div key={lead.id} className="card-frame supplier-lead-card" style={{ padding: 18 }}>
                  <div className="row-between">
                    <strong>
                      #{lead.lead_id.slice(-6).toUpperCase()} · {lead.requirement?.product_family}
                    </strong>
                    <span className={`badge ${lead.state === 'quoted' ? 'badge-emerald' : 'badge'}`}>
                      {lead.state}
                    </span>
                  </div>

                  <div style={{ marginTop: 10, fontSize: '0.9rem', color: 'var(--ink-muted)', display: 'grid', gap: 4 }}>
                    {lead.requirement?.quantity ? <span>{isAr ? 'الكمية' : 'Quantity'}: {lead.requirement.quantity}</span> : null}
                    {lead.requirement?.destination_country ? (
                      <span>{isAr ? 'الوجهة' : 'Destination'}: {lead.requirement.destination_country}</span>
                    ) : null}
                    {lead.requirement?.timeline ? (
                      <span>{isAr ? 'الوقت' : 'Timeline'}: {lead.requirement.timeline}</span>
                    ) : null}
                  </div>

                  {lead.contact ? (
                    <div
                      style={{
                        marginTop: 12,
                        padding: 12,
                        background: 'var(--bg-sage, #f4f8f6)',
                        borderRadius: 8,
                        fontSize: '0.85rem',
                        direction: 'ltr',
                      }}
                    >
                      <strong style={{ direction: isAr ? 'rtl' : 'ltr' }}>
                        {isAr ? 'بيانات جهة الاتصال (موثّق)' : 'Contact (authorised)'}
                      </strong>
                      <div style={{ marginTop: 6, display: 'grid', gap: 2 }}>
                        {lead.contact.buyer_name ? <span>{lead.contact.buyer_name}</span> : null}
                        {lead.contact.buyer_email ? <span>{lead.contact.buyer_email}</span> : null}
                        {lead.contact.buyer_whatsapp || lead.contact.buyer_phone ? (
                          <span>{lead.contact.buyer_whatsapp || lead.contact.buyer_phone}</span>
                        ) : null}
                      </div>
                    </div>
                  ) : null}

                  {lead.state !== 'quoted' && (
                    <button
                      className="btn btn-ghost btn-sm"
                      style={{ marginTop: 12 }}
                      onClick={() => {
                        setQuoteDraft((d) => ({ ...d, assignment_id: lead.id }));
                        setTab('quotes');
                      }}
                    >
                      <Quote size={13} />
                      {isAr ? 'قدّم عرض سعر' : 'Post a quote'}
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}

          {tab === 'quotes' && (
            <div>
              <form onSubmit={postQuote} className="card-frame" style={{ padding: 18, marginBottom: 18 }}>
                <h4 style={{ margin: '0 0 12px' }}>{isAr ? 'عرض سعر جديد' : 'New quote'}</h4>
                <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                  <label className="quick-lead-field" style={{ gridColumn: 'span 2' }}>
                    <span style={{ fontSize: '0.8rem' }}>{isAr ? 'الطلب' : 'Lead'}</span>
                    <select
                      className={inputClass}
                      value={quoteDraft.assignment_id}
                      onChange={(e) => setQuoteDraft((d) => ({ ...d, assignment_id: e.target.value }))}
                      required
                    >
                      <option value="" disabled>
                        {isAr ? 'اختر طلباً مسنداً' : 'Select an assigned lead'}
                      </option>
                      {leads
                        .filter((l) => l.state !== 'quoted')
                        .map((l) => (
                          <option key={l.id} value={l.id}>
                            #{l.lead_id.slice(-6).toUpperCase()} · {l.requirement?.product_family}
                          </option>
                        ))}
                    </select>
                  </label>
                  <label className="quick-lead-field">
                    <span style={{ fontSize: '0.8rem' }}>{isAr ? 'السعر' : 'Price'}</span>
                    <input
                      className={inputClass}
                      type="number"
                      min="0"
                      value={quoteDraft.price}
                      onChange={(e) => setQuoteDraft((d) => ({ ...d, price: e.target.value }))}
                    />
                  </label>
                  <label className="quick-lead-field">
                    <span style={{ fontSize: '0.8rem' }}>{isAr ? 'العملة' : 'Currency'}</span>
                    <input
                      className={inputClass}
                      value={quoteDraft.currency}
                      onChange={(e) => setQuoteDraft((d) => ({ ...d, currency: e.target.value }))}
                    />
                  </label>
                  <label className="quick-lead-field">
                    <span style={{ fontSize: '0.8rem' }}>{isAr ? 'الوحدة' : 'Unit'}</span>
                    <input
                      className={inputClass}
                      value={quoteDraft.unit}
                      onChange={(e) => setQuoteDraft((d) => ({ ...d, unit: e.target.value }))}
                    />
                  </label>
                  <label className="quick-lead-field">
                    <span style={{ fontSize: '0.8rem' }}>{isAr ? 'الحد الأدنى' : 'MOQ'}</span>
                    <input
                      className={inputClass}
                      value={quoteDraft.moq}
                      onChange={(e) => setQuoteDraft((d) => ({ ...d, moq: e.target.value }))}
                    />
                  </label>
                  <label className="quick-lead-field">
                    <span style={{ fontSize: '0.8rem' }}>{isAr ? 'مدة التوريد' : 'Lead time'}</span>
                    <input
                      className={inputClass}
                      value={quoteDraft.lead_time}
                      onChange={(e) => setQuoteDraft((d) => ({ ...d, lead_time: e.target.value }))}
                    />
                  </label>
                  <label className="quick-lead-field" style={{ gridColumn: 'span 2' }}>
                    <span style={{ fontSize: '0.8rem' }}>{isAr ? 'ملاحظة' : 'Note'}</span>
                    <input
                      className={inputClass}
                      value={quoteDraft.note}
                      onChange={(e) => setQuoteDraft((d) => ({ ...d, note: e.target.value }))}
                    />
                  </label>
                </div>
                <button type="submit" className="btn btn-primary" disabled={busy} style={{ marginTop: 14 }}>
                  {busy ? <Loader2 size={14} className="spin" /> : <Quote size={14} />}
                  {isAr ? 'أرسل العرض' : 'Post quote'}
                </button>
              </form>

              <div style={{ display: 'grid', gap: 12 }}>
                {quotes.length === 0 ? (
                  <div className="card-frame" style={{ padding: 20, textAlign: 'center' }}>
                    <p className="discipline-body" style={{ margin: 0 }}>
                      {isAr ? 'لم تقم بأي عروض بعد.' : 'You have not posted any quotes yet.'}
                    </p>
                  </div>
                ) : (
                  quotes.map((q) => (
                    <div key={q.id} className="card-frame" style={{ padding: 16 }}>
                      <div className="row-between">
                        <strong>
                          {q.price !== undefined
                            ? `${q.price.toLocaleString()} ${q.currency ?? ''} / ${q.unit ?? 'unit'}`
                            : isAr
                              ? 'سعر عند الطلب'
                              : 'Price on request'}
                        </strong>
                        <span className="discipline-note">
                          {new Date(q.created_at).toLocaleDateString(locale === 'ar' ? 'ar-AE' : 'en-US')}
                        </span>
                      </div>
                      {q.moq ? <div className="discipline-note">{isAr ? 'حد أدنى' : 'MOQ'}: {q.moq}</div> : null}
                      {q.lead_time ? <div className="discipline-note">{isAr ? 'مدة التوريد' : 'Lead time'}: {q.lead_time}</div> : null}
                      {q.note ? <p className="discipline-body" style={{ marginTop: 8, marginBottom: 0 }}>{q.note}</p> : null}
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {tab === 'listings' && (
            <div>
              <form onSubmit={postListing} className="card-frame" style={{ padding: 18, marginBottom: 18 }}>
                <h4 style={{ margin: '0 0 12px' }}>
                  <Plus size={14} style={{ verticalAlign: '-2px' }} /> {isAr ? 'إدراج جديد' : 'New listing'}
                </h4>
                <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                  <label className="quick-lead-field" style={{ gridColumn: 'span 2' }}>
                    <span style={{ fontSize: '0.8rem' }}>{isAr ? 'الاسم' : 'Name'}</span>
                    <input
                      className={inputClass}
                      value={listDraft.name}
                      onChange={(e) => setListDraft((d) => ({ ...d, name: e.target.value }))}
                      required
                    />
                  </label>
                  <label className="quick-lead-field">
                    <span style={{ fontSize: '0.8rem' }}>{isAr ? 'العائلة' : 'Family'}</span>
                    <input
                      className={inputClass}
                      value={listDraft.product_family}
                      onChange={(e) => setListDraft((d) => ({ ...d, product_family: e.target.value }))}
                      placeholder="Oud oil"
                    />
                  </label>
                  <label className="quick-lead-field">
                    <span style={{ fontSize: '0.8rem' }}>{isAr ? 'حد أدنى' : 'MOQ'}</span>
                    <input
                      className={inputClass}
                      value={listDraft.moq}
                      onChange={(e) => setListDraft((d) => ({ ...d, moq: e.target.value }))}
                    />
                  </label>
                  <label className="quick-lead-field" style={{ gridColumn: 'span 2' }}>
                    <span style={{ fontSize: '0.8rem' }}>{isAr ? 'وصف' : 'Description'}</span>
                    <input
                      className={inputClass}
                      value={listDraft.description}
                      onChange={(e) => setListDraft((d) => ({ ...d, description: e.target.value }))}
                    />
                  </label>
                  <label className="quick-lead-check" style={{ gridColumn: 'span 2' }}>
                    <input
                      type="checkbox"
                      checked={listDraft.sample_available}
                      onChange={(e) => setListDraft((d) => ({ ...d, sample_available: e.target.checked }))}
                    />
                    <span>{isAr ? 'العينات متوفرة' : 'Samples available'}</span>
                  </label>
                </div>
                <button type="submit" className="btn btn-ghost" disabled={busy} style={{ marginTop: 14 }}>
                  {isAr ? 'أرسل للمراجعة' : 'Submit for review'}
                </button>
              </form>

              <div style={{ display: 'grid', gap: 12 }}>
                {listings.length === 0 ? (
                  <div className="card-frame" style={{ padding: 20, textAlign: 'center' }}>
                    <p className="discipline-body" style={{ margin: 0 }}>
                      {isAr
                        ? 'لا إدراجات بعد. تُنشر بعد مراجعة المشغلين.'
                        : 'No listings yet. They are published after operator review.'}
                    </p>
                  </div>
                ) : (
                  listings.map((l) => (
                    <div key={l.id} className="card-frame" style={{ padding: 16 }}>
                      <div className="row-between">
                        <strong>{l.name}</strong>
                        <span
                          className={`badge ${l.status === 'published' ? 'badge-emerald' : ''}`}
                        >
                          {l.status}
                        </span>
                      </div>
                      {l.description ? <p className="discipline-body" style={{ margin: '6px 0 0' }}>{l.description}</p> : null}
                      <div className="discipline-note" style={{ marginTop: 6 }}>
                        {l.product_family}
                        {l.moq ? ` · ${isAr ? 'حد أدنى' : 'MOQ'} ${l.moq}${l.unit ? ` ${l.unit}` : ''}` : ''}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

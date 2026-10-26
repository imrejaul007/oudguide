'use client';

import { useCallback, useEffect, useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import {
  ClipboardList,
  UserPlus,
  Loader2,
  CheckCircle2,
  XCircle,
  Inbox,
} from 'lucide-react';

interface LeadRow {
  id: string;
  source: string;
  locale: string;
  status: string;
  requirement: {
    product_family: string;
    quantity?: string;
    destination_country?: string;
    timeline?: string;
    notes?: string;
    samples_requested: boolean;
    selected_supplier_id?: string;
  };
  consent_to_contact: boolean;
  consent_to_quote: boolean;
  created_at: string;
  assignment_count?: number;
  quote_count?: number;
  assigned_suppliers?: string[];
}

interface LeadDetail {
  lead: {
    id: string;
    status: string;
    requirement: {
      product_family: string;
      quantity?: string;
      destination_country?: string;
      timeline?: string;
      notes?: string;
      samples_requested: boolean;
    };
    contact?: {
      buyer_name: string;
      buyer_email?: string;
      buyer_phone?: string;
      buyer_whatsapp?: string;
      company_name?: string;
      preferred_channel?: string;
    };
  };
  assignments: Array<{
    id: string;
    state: string;
    business_id: string;
    assigned_at: string;
    match_reason?: string;
    contact?: { buyer_name: string; buyer_email?: string; buyer_whatsapp?: string };
  }>;
  quotes: Array<{
    id: string;
    price?: number;
    currency?: string;
    unit?: string;
    moq?: string;
    lead_time?: string;
    note?: string;
  }>;
}

interface SupplierCandidate {
  id: string;
  slug: string;
  name: string;
  country_name?: string | null;
  entitlement: boolean;
  families: string[];
}

const STATUSES = ['new', 'assigned', 'in_progress', 'closed', 'rejected'] as const;

export function AdminLeadsClient({
  locale,
  isAr,
  initialStatus,
  initialFamily,
}: {
  locale: string;
  isAr: boolean;
  initialStatus?: string;
  initialFamily?: string;
}) {
  const { toast } = useToast();

  const [status, setStatus] = useState<string>(initialStatus ?? 'new');
  const [family, setFamily] = useState<string>(initialFamily ?? '');
  const [leads, setLeads] = useState<LeadRow[]>([]);
  const [suppliers, setSuppliers] = useState<SupplierCandidate[]>([]);
  const [loading, setLoading] = useState(true);

  const [selected, setSelected] = useState<LeadRow | null>(null);
  const [detail, setDetail] = useState<LeadDetail | null>(null);
  const [detailLoading, setDetailLoading] = useState(false);

  const [busy, setBusy] = useState(false);

  const loadLeads = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (status && status !== 'all') params.set('status', status);
      if (family) params.set('product_family', family);
      const res = await fetch(`/api/v1/admin/leads?${params.toString()}`);
      const data = await res.json();
      setLeads(data.leads ?? []);
    } catch {
      // The queue degrades to empty rather than to a white screen.
    } finally {
      setLoading(false);
    }
  }, [status, family]);

  useEffect(() => {
    void loadLeads();
  }, [loadLeads]);

  const loadSuppliers = useCallback(async () => {
    try {
      const res = await fetch('/api/v1/admin/leads/suppliers');
      const data = await res.json();
      setSuppliers(data.suppliers ?? []);
    } catch {
      setSuppliers([]);
    }
  }, []);

  useEffect(() => {
    void loadSuppliers();
  }, [loadSuppliers]);

  const openLead = async (lead: LeadRow) => {
    setSelected(lead);
    setDetail(null);
    setDetailLoading(true);
    try {
      const res = await fetch(`/api/v1/admin/leads/${lead.id}`);
      if (res.ok) {
        setDetail(await res.json());
      }
    } catch {
      setDetail(null);
    } finally {
      setDetailLoading(false);
    }
  };

  const assign = async (supplierId: string, reason: string) => {
    if (!selected) return;
    setBusy(true);
    try {
      const res = await fetch(`/api/v1/admin/leads/${selected.id}/assign`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ business_id: supplierId, match_reason: reason }),
      });
      const data = await res.json();
      if (!res.ok) {
        toast({
          title: isAr ? 'تعذّر الإسناد' : 'Assignment failed',
          description: data.error,
          variant: 'error',
        });
        return;
      }
      toast({
        title: isAr ? 'تم الإسناد' : 'Assigned',
        description: data.supplier_name,
        variant: 'success',
      });
      void openLead(selected);
      void loadLeads();
    } finally {
      setBusy(false);
    }
  };

  const changeStatus = async (next: 'closed' | 'rejected' | 'in_progress') => {
    if (!selected) return;
    setBusy(true);
    try {
      const res = await fetch(`/api/v1/admin/leads/${selected.id}/close`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: next }),
      });
      const data = await res.json();
      if (!res.ok) {
        toast({
          title: isAr ? 'تعذّر تغيير الحالة' : 'Status change failed',
          description: data.error,
          variant: 'error',
        });
        return;
      }
      toast({
        title: isAr ? 'تم تحديث الحالة' : 'Status updated',
        description: next,
        variant: 'success',
      });
      void openLead(selected);
      void loadLeads();
    } finally {
      setBusy(false);
    }
  };

  const eligible = suppliers.filter(
    (s) => s.entitlement && s.families.some((f) => f.toLowerCase().includes('oud'))
  );

  return (
    <div className="leads-queue" style={{ marginTop: 24 }}>
      {/* Filters */}
      <div className="leads-filter-row">
        <div className="filter-chip-row">
          {(['all', ...STATUSES] as const).map((s) => (
            <button
              key={s}
              className={`filter-chip ${status === s ? 'active' : ''}`}
              onClick={() => setStatus(s)}
            >
              {s === 'all' ? (isAr ? 'الكل' : 'All') : s}
            </button>
          ))}
        </div>
        <input
          className="form-input"
          placeholder={isAr ? 'بحث في العائلة' : 'Filter by family'}
          value={family}
          onChange={(e) => setFamily(e.target.value)}
          style={{ width: 180 }}
        />
      </div>

      {loading ? (
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', padding: 24 }}>
          <Loader2 size={16} className="spin" />
          <span className="discipline-body">{isAr ? 'جارٍ التحميل…' : 'Loading…'}</span>
        </div>
      ) : leads.length === 0 ? (
        <div className="card-frame text-center" style={{ padding: 48 }}>
          <Inbox size={20} style={{ opacity: 0.4, margin: '0 auto 12px' }} />
          <h3 className="h3">{isAr ? 'لا توجد طلبات' : 'No leads in this view'}</h3>
          <p className="lede" style={{ marginTop: 8 }}>
            {isAr
              ? 'عندما تصل طلبات توريد سريعة جديدة، تظهر هنا قبل إسنادها.'
              : 'New quick-lead requirements appear here before they are assigned.'}
          </p>
        </div>
      ) : (
        leads.map((lead) => (
          <button
            key={lead.id}
            onClick={() => void openLead(lead)}
            className={`card-frame lead-row ${selected?.id === lead.id ? 'card-frame-accent' : ''}`}
            style={{
              textAlign: 'start',
              width: '100%',
              cursor: 'pointer',
              padding: 18,
            }}
          >
            <div className="lead-row-head">
              <strong>{lead.requirement.product_family}</strong>
              <span className={`badge ${lead.status === 'new' ? 'badge-gold' : 'badge-emerald'}`}>
                {lead.status}
              </span>
            </div>
            <div className="discipline-note">
              #{lead.id.slice(-6).toUpperCase()} · {lead.source} ·{' '}
              {new Date(lead.created_at).toLocaleDateString(
                locale === 'ar' ? 'ar-AE' : 'en-US'
              )}
            </div>
            <div className="discipline-note">
              {lead.assignment_count ?? 0} {isAr ? 'مورد منسب' : 'supplier(s)'} ·{' '}
              {lead.quote_count ?? 0} {isAr ? 'عرض سعر' : 'quote(s)'}
            </div>

            {selected?.id === lead.id && (
              <div style={{ marginTop: 14, borderTop: '1px solid var(--line)', paddingTop: 14 }}>
                {detailLoading ? (
                  <Loader2 size={14} className="spin" />
                ) : detail ? (
                  <div style={{ display: 'grid', gap: 14 }}>
                    {/* Requirement */}
                    <div>
                      <div className="discipline-notes" style={{ marginBottom: 8 }}>
                        <ClipboardList size={12} /> {isAr ? 'المطلوب' : 'Requirement'}
                      </div>
                      <dl className="receipt-requirement">
                        {detail.lead.requirement.quantity ? (
                          <div>
                            <dt>{isAr ? 'الكمية' : 'Quantity'}</dt>
                            <dd>{detail.lead.requirement.quantity}</dd>
                          </div>
                        ) : null}
                        {detail.lead.requirement.destination_country ? (
                          <div>
                            <dt>{isAr ? 'الوجهة' : 'Destination'}</dt>
                            <dd>{detail.lead.requirement.destination_country}</dd>
                          </div>
                        ) : null}
                        {detail.lead.requirement.timeline ? (
                          <div>
                            <dt>{isAr ? 'الوقت' : 'Timeline'}</dt>
                            <dd>{detail.lead.requirement.timeline}</dd>
                          </div>
                        ) : null}
                        {detail.lead.requirement.notes ? (
                          <div>
                            <dt>{isAr ? 'ملاحظات' : 'Notes'}</dt>
                            <dd>{detail.lead.requirement.notes}</dd>
                          </div>
                        ) : null}
                      </dl>
                    </div>

                    {/* Contact — the operator's private PII read */}
                    {detail.lead.contact ? (
                      <div>
                        <div className="discipline-notes" style={{ marginBottom: 8 }}>
                          <ClipboardList size={12} /> {isAr ? 'جهة الاتصال (خاص)' : 'Contact (private)'}
                        </div>
                        <div style={{ fontSize: '0.9rem', display: 'grid', gap: 4 }}>
                          <strong>{detail.lead.contact.buyer_name}</strong>
                          {detail.lead.contact.buyer_email ? (
                            <span>{detail.lead.contact.buyer_email}</span>
                          ) : null}
                          {detail.lead.contact.buyer_whatsapp || detail.lead.contact.buyer_phone ? (
                            <span>
                              {detail.lead.contact.buyer_whatsapp || detail.lead.contact.buyer_phone}
                            </span>
                          ) : null}
                          {detail.lead.contact.company_name ? (
                            <span>{detail.lead.contact.company_name}</span>
                          ) : null}
                        </div>
                      </div>
                    ) : null}

                    {/* Assign */}
                    <div>
                      <div className="discipline-notes" style={{ marginBottom: 8 }}>
                        <UserPlus size={12} /> {isAr ? 'إسناد' : 'Assign'}
                      </div>
                      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 8 }}>
                        {(detail.assignments.length ? detail.assignments : eligible).map((a: any) =>
                          detail.assignments.length ? (
                            <span key={a.id} className="badge badge-emerald">
                              {a.business_id} · {a.state}
                            </span>
                          ) : (
                            <button
                              key={a.id}
                              className="btn btn-ghost btn-sm"
                              disabled={busy}
                              onClick={() => void assign(a.id, 'operator_matched')}
                            >
                              <UserPlus size={12} />
                              {a.name}
                            </button>
                          )
                        )}
                      </div>
                      {detail.assignments.length > 0 &&
                        detail.lead.status !== 'closed' &&
                        detail.lead.status !== 'rejected' && (
                          <div style={{ display: 'flex', gap: 8 }}>
                            <button
                              className="btn btn-ghost btn-sm"
                              disabled={busy}
                              onClick={() => void changeStatus('in_progress')}
                            >
                              {isAr ? 'جاري التنفيذ' : 'Mark in progress'}
                            </button>
                            <button
                              className="btn btn-ghost btn-sm"
                              disabled={busy}
                              onClick={() => void changeStatus('closed')}
                            >
                              <CheckCircle2 size={12} /> {isAr ? 'إغلاق' : 'Close'}
                            </button>
                            <button
                              className="btn btn-ghost btn-sm"
                              disabled={busy}
                              onClick={() => void changeStatus('rejected')}
                            >
                              <XCircle size={12} /> {isAr ? 'رفض' : 'Reject'}
                            </button>
                          </div>
                        )}
                    </div>
                  </div>
                ) : (
                  <span className="discipline-note">{isAr ? 'تعذّر التحميل' : 'Could not load detail'}</span>
                )}
              </div>
            )}
          </button>
        ))
      )}
    </div>
  );
}

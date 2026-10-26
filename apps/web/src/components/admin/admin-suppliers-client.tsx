'use client';

import { useCallback, useEffect, useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import Link from 'next/link';
import {
  Users,
  KeyRound,
  PackageOpen,
  Plus,
  Loader2,
  CheckCircle2,
  XCircle,
} from 'lucide-react';

interface AccountRow {
  business_id: string;
  email: string;
  status: string;
  created_at: string;
  supplier_name?: string;
  slug?: string;
}

interface ListingRow {
  id: string;
  business_id: string;
  supplier_name?: string;
  product_family: string;
  name: string;
  description?: string;
  moq?: string;
  unit?: string;
  sample_available: boolean;
  status: string;
  created_at: string;
}

interface SupplierRecord {
  id: string;
  slug: string;
  name: string;
  entitlement: boolean;
  families: string[];
}

export function AdminSuppliersClient({ locale, isAr }: { locale: string; isAr: boolean }) {
  const { toast } = useToast();
  const [tab, setTab] = useState<'accounts' | 'listings'>('accounts');

  // --- Accounts -----------------------------------------------------------
  const [accounts, setAccounts] = useState<AccountRow[]>([]);
  const [suppliers, setSuppliers] = useState<SupplierRecord[]>([]);
  const [loading, setLoading] = useState(true);

  const [draft, setDraft] = useState({ slug: '', email: '', password: '' });
  const [busy, setBusy] = useState(false);

  const loadAccounts = useCallback(async () => {
    setLoading(true);
    try {
      const [accRes, supRes] = await Promise.all([
        fetch('/api/v1/admin/supplier-accounts'),
        fetch('/api/v1/admin/leads/suppliers'),
      ]);
      const [accData, supData] = await Promise.all([accRes.json(), supRes.json()]);
      setAccounts(accData.accounts ?? []);
      setSuppliers(supData.suppliers ?? []);
    } catch {
      // The console degrades to an empty register, not a white screen.
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadAccounts();
  }, [loadAccounts]);

  const createAccount = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    try {
      const res = await fetch('/api/v1/admin/supplier-accounts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slug: draft.slug,
          email: draft.email,
          password: draft.password,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        toast({
          title: isAr ? 'تعذّر إنشاء الحساب' : 'Account creation failed',
          description: data.error,
          variant: 'error',
        });
        return;
      }
      toast({
        title: isAr ? 'تم إنشاء الحساب' : 'Account created',
        description: `${draft.email} — ${isAr ? 'شاركه مع المورد لتغيير كلمة المرور' : 'share it with the supplier; they must change the password'}`,
        variant: 'success',
      });
      setDraft({ slug: '', email: '', password: '' });
      void loadAccounts();
    } finally {
      setBusy(false);
    }
  };

  // --- Listings ------------------------------------------------------------
  const [listings, setListings] = useState<ListingRow[]>([]);
  const [listingFilter, setListingFilter] = useState('pending');
  const [listingBusy, setListingBusy] = useState<string | null>(null);

  const loadListings = useCallback(async () => {
    try {
      const params = new URLSearchParams();
      if (listingFilter) params.set('status', listingFilter);
      const res = await fetch(`/api/v1/admin/listings?${params.toString()}`);
      const data = await res.json().catch(() => ({}));
      setListings(data.listings ?? []);
    } catch {
      setListings([]);
    }
  }, [listingFilter]);

  useEffect(() => {
    if (tab === 'listings') void loadListings();
  }, [tab, loadListings]);

  const setListingStatus = async (id: string, status: 'published' | 'removed') => {
    setListingBusy(id);
    try {
      const res = await fetch('/api/v1/admin/listings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ listing_id: id, status }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        toast({
          title: isAr ? 'فشل الإجراء' : 'Action failed',
          description: data.error,
          variant: 'error',
        });
        return;
      }
      void loadListings();
    } finally {
      setListingBusy(null);
    }
  };

  const inputClass = 'form-input';

  return (
    <div style={{ marginTop: 24 }}>
      <div className="admin-tabs">
        <button
          className={`admin-tab ${tab === 'accounts' ? 'active' : ''}`}
          onClick={() => setTab('accounts')}
        >
          <KeyRound size={13} style={{ verticalAlign: '-1px' }} />{' '}
          {isAr ? 'حسابات الدخول' : 'Sign-ins'}
        </button>
        <button
          className={`admin-tab ${tab === 'listings' ? 'active' : ''}`}
          onClick={() => setTab('listings')}
        >
          <PackageOpen size={13} style={{ verticalAlign: '-1px' }} />{' '}
          {isAr ? 'مراجعة الإدراجات' : 'Listing review'}
        </button>
      </div>

      {tab === 'accounts' && (
        <div className="stack-4" style={{ marginTop: 20 }}>
          <form onSubmit={createAccount} className="card-frame" style={{ padding: 18 }}>
            <h4 style={{ margin: '0 0 12px' }}>
              <Plus size={14} style={{ verticalAlign: '-2px' }} />{' '}
              {isAr ? 'حساب جديد' : 'New sign-in'}
            </h4>
            <div
              style={{
                display: 'grid',
                gap: 12,
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              }}
            >
              <label className="quick-lead-field">
                <span style={{ fontSize: '0.8rem' }}>{isAr ? 'المورد' : 'Supplier'}</span>
                <select
                  className={inputClass}
                  value={draft.slug}
                  onChange={(e) => setDraft((d) => ({ ...d, slug: e.target.value }))}
                  required
                >
                  <option value="" disabled>
                    {isAr ? 'اختر مورداً' : 'Select a supplier'}
                  </option>
                  {suppliers.map((s) => (
                    <option key={s.id} value={s.slug}>
                      {s.name}
                      {!s.entitlement ? (isAr ? ' (بدون اشتراك)' : ' (no membership)') : ''}
                    </option>
                  ))}
                </select>
              </label>
              <label className="quick-lead-field">
                <span style={{ fontSize: '0.8rem' }}>{isAr ? 'البريد الإلكتروني' : 'Email'}</span>
                <input
                  className={inputClass}
                  type="email"
                  value={draft.email}
                  onChange={(e) => setDraft((d) => ({ ...d, email: e.target.value }))}
                  required
                />
              </label>
              <label className="quick-lead-field">
                <span style={{ fontSize: '0.8rem' }}>
                  {isAr ? 'كلمة مرور مؤقتة (8+ أحرف)' : 'Temporary password (8+ chars)'}
                </span>
                <input
                  className={inputClass}
                  value={draft.password}
                  onChange={(e) => setDraft((d) => ({ ...d, password: e.target.value }))}
                  minLength={8}
                  required
                  autoComplete="off"
                />
              </label>
            </div>
            <button type="submit" className="btn btn-primary btn-sm" disabled={busy} style={{ marginTop: 14 }}>
              {busy ? <Loader2 size={13} className="spin" /> : <Plus size={13} />}
              {isAr ? 'إنشاء' : 'Create'}
            </button>
          </form>

          {loading ? (
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', padding: 24 }}>
              <Loader2 size={16} className="spin" />
            </div>
          ) : accounts.length === 0 ? (
            <div className="card-frame text-center" style={{ padding: 40 }}>
              <p className="discipline-body" style={{ margin: 0 }}>
                {isAr
                  ? 'لا توجد حسابات بعد. أنشئ أول حساب أعلاه.'
                  : 'No sign-ins yet. Create the first one above.'}
              </p>
            </div>
          ) : (
            accounts.map((a) => (
              <div key={a.business_id} className="card-frame" style={{ padding: 16 }}>
                <div className="row-between">
                  <div>
                    <strong>
                      {a.supplier_name ?? a.business_id}
                      {a.slug ? (
                        <Link
                          href={`/${locale}/b2b/suppliers/${a.slug}`}
                          style={{ fontWeight: 400, marginLeft: 8, fontSize: '0.85rem' }}
                        >
                          {isAr ? 'المعرض' : 'storefront'} →
                        </Link>
                      ) : null}
                    </strong>
                    <div className="discipline-note" style={{ marginTop: 4, direction: 'ltr' }}>
                      {a.email}
                    </div>
                  </div>
                  <div className="cluster" style={{ gap: 8 }}>
                    <span className={`badge ${a.status === 'active' ? 'badge-emerald' : 'badge'}`}>
                      {a.status}
                    </span>
                    <span className="discipline-note">
                      {new Date(a.created_at).toLocaleDateString(locale === 'ar' ? 'ar-AE' : 'en-US')}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {tab === 'listings' && (
        <div className="stack-4" style={{ marginTop: 20 }}>
          <div className="filter-chip-row">
            {(['pending', 'published', 'removed'] as const).map((s) => (
              <button
                key={s}
                className={`filter-chip ${listingFilter === s ? 'active' : ''}`}
                onClick={() => setListingFilter(s)}
              >
                {s}
              </button>
            ))}
          </div>

          {listings.length === 0 ? (
            <div className="card-frame text-center" style={{ padding: 40 }}>
              <Users size={20} style={{ opacity: 0.4, margin: '0 auto 12px', display: 'block' }} />
              <p className="discipline-body" style={{ margin: 0 }}>
                {isAr
                  ? listingFilter === 'pending'
                    ? 'لا إدراجات بانتظار المراجعة.'
                    : `لا إدراجات بحالة "${listingFilter}".`
                  : listingFilter === 'pending'
                    ? 'No listings awaiting review.'
                    : `No listings in "${listingFilter}".`}
              </p>
            </div>
          ) : (
            listings.map((l) => (
              <div key={l.id} className="card-frame" style={{ padding: 16 }}>
                <div className="row-between">
                  <div>
                    <strong>{l.name}</strong>
                    <div className="discipline-note" style={{ marginTop: 4 }}>
                      {l.supplier_name ?? l.business_id} · {l.product_family}
                      {l.moq ? ` · ${isAr ? 'حد أدنى' : 'MOQ'} ${l.moq} ${l.unit ?? 'kg'}` : ''}
                      {l.sample_available ? ` · ${isAr ? 'عيّنات متوفرة' : 'samples'}` : ''}
                    </div>
                    {l.description ? (
                      <p className="discipline-body" style={{ margin: '8px 0 0' }}>
                        {l.description}
                      </p>
                    ) : null}
                  </div>
                  <div className="admin-actions" style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
                    {l.status !== 'published' && (
                      <button
                        className="btn btn-primary btn-sm"
                        disabled={listingBusy === l.id}
                        onClick={() => void setListingStatus(l.id, 'published')}
                        title={isAr ? 'نشر في المعرض العام' : 'Publish in the public storefronts'}
                      >
                        <CheckCircle2 size={13} />
                        {isAr ? 'نشر' : 'Publish'}
                      </button>
                    )}
                    {l.status !== 'removed' && (
                      <button
                        className="btn btn-ghost btn-sm"
                        disabled={listingBusy === l.id}
                        onClick={() => void setListingStatus(l.id, 'removed')}
                        title={isAr ? 'إزالة من المعرض' : 'Remove from the storefronts'}
                      >
                        <XCircle size={13} />
                        {isAr ? 'إزالة' : 'Remove'}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

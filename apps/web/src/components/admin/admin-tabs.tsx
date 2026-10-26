'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, XCircle, Users, ArrowRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export interface ClaimRow {
  id: string;
  slug: string;
  name: string;
  category: string | null;
  city: string | null;
  country_name: string | null;
  is_claimed: boolean;
  has_active_membership: boolean;
  contact_unlocked: boolean;
  established_year: number | null;
}

export interface MembershipRow {
  id: string;
  slug: string;
  name: string;
  country_name: string | null;
  has_active_membership: boolean;
  contact_unlocked: boolean;
}

export function AdminTabs({
  locale,
  claims: initialClaims,
  memberships,
  inquiryCount,
  isAr,
}: {
  locale: string;
  claims: ClaimRow[];
  memberships: MembershipRow[];
  inquiryCount: number;
  isAr: boolean;
}) {
  const { toast } = useToast();
  const [tab, setTab] = useState<'claims' | 'membership'>('claims');
  const [claims, setClaims] = useState(initialClaims);
  const [busy, setBusy] = useState<string | null>(null);

  /**
   * Approve or revoke a claim.
   *
   * Uses an optimistic local update so the queue reflects the decision
   * immediately, with a toast for confirmation. IndexOrbit's version does a
   * full page reload, which loses the operator's scroll position and tab
   * selection — poor for a moderation queue.
   */
  const handleAction = async (businessId: string, action: 'approve' | 'reject') => {
    setBusy(businessId);

    const previous = claims;
    // Optimistic: flip the flag immediately, roll back on failure.
    setClaims((prev) =>
      prev.map((c) => (c.id === businessId ? { ...c, is_claimed: action === 'approve' } : c))
    );

    try {
      const res = await fetch('/api/v1/admin/claims', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ business_id: businessId, action }),
      });
      const data = await res.json();

      if (!res.ok) {
        setClaims(previous);
        toast({
          title: isAr ? 'تعذّر تنفيذ الإجراء' : 'Action failed',
          description: data.error,
          variant: 'error',
        });
        return;
      }

      toast({
        title: action === 'approve'
          ? (isAr ? 'تم اعتماد التوثيق' : 'Claim approved')
          : (isAr ? 'تم سحب التوثيق' : 'Claim revoked'),
        description: data.message,
        variant: 'success',
      });
    } catch {
      setClaims(previous);
      toast({
        title: isAr ? 'تعذّر تنفيذ الإجراء' : 'Action failed',
        description: isAr ? 'يرجى المحاولة بعد قليل.' : 'Please try again shortly.',
        variant: 'error',
      });
    } finally {
      setBusy(null);
    }
  };

  return (
    <div>
      {/* Tabs */}
      <div className="admin-tabs">
        <Link href={`/${locale}/admin/inquiries`} className="admin-tab">
          {isAr ? `الطلبات (${inquiryCount})` : `Inquiries (${inquiryCount})`}
        </Link>
        <Link href={`/${locale}/admin/leads`} className="admin-tab">
          {isAr ? 'طلبات الجملة' : 'Wholesale Leads'}
        </Link>
        <Link href={`/${locale}/admin/suppliers`} className="admin-tab">
          {isAr ? 'حسابات الموردين' : 'Supplier Accounts'}
        </Link>
        <button
          className={`admin-tab ${tab === 'claims' ? 'active' : ''}`}
          onClick={() => setTab('claims')}
        >
          {isAr ? `طلبات التوثيق (${claims.length})` : `Profile Claims (${claims.length})`}
        </button>
        <button
          className={`admin-tab ${tab === 'membership' ? 'active' : ''}`}
          onClick={() => setTab('membership')}
        >
          {isAr ? `العضويات (${memberships.length})` : `Memberships (${memberships.length})`}
        </button>
      </div>

      {/* CLAIMS QUEUE */}
      {tab === 'claims' && (
        <div className="stack-4">
          {claims.length === 0 && (
            <div className="card-frame text-center" style={{ padding: 48 }}>
              <h3 className="h3">{isAr ? 'لا توجد طلبات توثيق' : 'No claims in the queue'}</h3>
              <p className="lede" style={{ marginTop: 8 }}>
                {isAr
                  ? 'كل الملفات مملوكة وموثقة حالياً.'
                  : 'Every profile is currently claimed and verified.'}
              </p>
            </div>
          )}

          {claims.map((c) => (
            <div key={c.id} className="admin-row">
              <div style={{ flex: 1, minWidth: 240 }}>
                <div className="cluster" style={{ gap: 8, marginBottom: 8 }}>
                  <span className={`badge ${c.is_claimed ? 'badge-emerald' : 'badge-crimson'}`}>
                    {c.is_claimed ? (isAr ? 'موثّق' : 'Claimed') : (isAr ? 'غير موثّق' : 'Unclaimed')}
                  </span>
                  {c.has_active_membership && (
                    <span className="badge badge-gold">
                      {isAr ? 'عضوية نشطة' : 'Active membership'}
                    </span>
                  )}
                  {c.contact_unlocked && (
                    <span className="badge badge-charcoal">
                      {isAr ? 'الاتصال مفتوح' : 'Contact unlocked'}
                    </span>
                  )}
                </div>
                <h3 className="admin-row-title">
                  <Link href={`/${locale}/directory/${c.slug}`}>{c.name}</Link>
                </h3>
                <p className="admin-row-meta">
                  {c.category || 'Producer'} · {c.city ? `${c.city}, ` : ''}{c.country_name}
                  {c.established_year ? ` · Est. ${c.established_year}` : ''}
                </p>
              </div>

              <div className="admin-actions">
                {!c.is_claimed ? (
                  <button
                    onClick={() => handleAction(c.id, 'approve')}
                    disabled={busy === c.id}
                    className="btn btn-primary btn-sm"
                  >
                    <CheckCircle2 size={14} />
                    {isAr ? 'اعتماد' : 'Approve'}
                  </button>
                ) : (
                  <button
                    onClick={() => handleAction(c.id, 'reject')}
                    disabled={busy === c.id}
                    className="btn btn-outline btn-sm"
                  >
                    <XCircle size={14} />
                    {isAr ? 'سحب التوثيق' : 'Revoke claim'}
                  </button>
                )}
                <Link href={`/${locale}/directory/${c.slug}`} className="btn btn-ghost btn-sm">
                  {isAr ? 'عرض' : 'View'}
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* MEMBERSHIP QUEUE */}
      {tab === 'membership' && (
        <div className="stack-4">
          {memberships.length === 0 && (
            <div className="card-frame text-center" style={{ padding: 48 }}>
              <h3 className="h3">{isAr ? 'لا توجد عضويات' : 'No memberships yet'}</h3>
            </div>
          )}

          {memberships.map((m) => (
            <div key={m.id} className="admin-row">
              <div style={{ flex: 1, minWidth: 240 }}>
                <div className="cluster" style={{ gap: 8, marginBottom: 8 }}>
                  <span className={`badge ${m.has_active_membership ? 'badge-gold' : 'badge-locked'}`}>
                    <Users size={10} />
                    {m.has_active_membership
                      ? (isAr ? 'عضوية سنوية نشطة' : 'Annual membership active')
                      : (isAr ? 'غير مشترك' : 'Not subscribed')}
                  </span>
                  {m.contact_unlocked && (
                    <span className="badge badge-charcoal">
                      {isAr ? 'الاتصال مفتوح' : 'Contact unlocked'}
                    </span>
                  )}
                </div>
                <h3 className="admin-row-title">
                  <Link href={`/${locale}/directory/${m.slug}`}>{m.name}</Link>
                </h3>
                <p className="admin-row-meta">{m.country_name}</p>
              </div>

              <div className="admin-actions">
                <Link
                  href={`/${locale}/membership?success=${encodeURIComponent(m.slug)}`}
                  className="btn btn-outline btn-sm"
                >
                  {isAr ? 'إدارة العضوية' : 'Manage membership'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

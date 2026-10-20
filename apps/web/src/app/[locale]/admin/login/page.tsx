'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ShieldCheck, KeyRound, Loader2, AlertTriangle } from 'lucide-react';

export default function AdminLoginPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return <AdminLoginClient localeFallback="en" params={params} />;
}

function AdminLoginClient({
  localeFallback,
  params,
}: {
  localeFallback: string;
  params: Promise<{ locale: string }>;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [key, setKey] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Resolve the locale once the params promise settles.
  useEffect(() => {
    params.then(({ locale }) => {
      if (locale && locale !== localeFallback) {
        router.replace(`/${locale}/admin/login${searchParams.toString() ? `?${searchParams}` : ''}`);
      }
    });
  }, [params, router, searchParams, localeFallback]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch('/api/v1/admin/session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Authentication failed');
        return;
      }

      const from = searchParams.get('from');
      router.push(from || '/en/admin');
      router.refresh();
    } catch {
      setError('Could not reach the operator service. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="section" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
      <div className="container container-narrow">
        <div className="card-frame" style={{ maxWidth: 460, margin: '0 auto' }}>
          <div className="text-center" style={{ marginBottom: 28 }}>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: '50%',
                background: 'var(--green-700)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 16,
              }}
            >
              <ShieldCheck size={24} style={{ color: '#fff' }} />
            </div>
            <h1 style={{ fontSize: '1.6rem', marginBottom: 8 }}>
              Operator Access
            </h1>
            <p className="text-body" style={{ margin: 0, fontSize: '0.88rem' }}>
              The OudGuide operator workspace is restricted. Enter your operator key to continue.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label className="form-label" htmlFor="operator-key">
                Operator Key
              </label>
              <div style={{ position: 'relative' }}>
                <KeyRound
                  size={16}
                  style={{
                    position: 'absolute',
                    insetInlineStart: 14,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--ink-soft)',
                    pointerEvents: 'none',
                  }}
                />
                <input
                  type="password"
                  id="operator-key"
                  name="key"
                  value={key}
                  onChange={(e) => setKey(e.target.value)}
                  required
                  autoComplete="current-password"
                  className="form-input"
                  style={{ paddingInlineStart: 40 }}
                  placeholder="••••••••••••"
                />
              </div>
            </div>

            {error && (
              <div
                className="cluster"
                role="alert"
                style={{
                  gap: 8,
                  marginBottom: 16,
                  padding: '11px 14px',
                  background: 'var(--terracotta-tint)',
                  border: '1px solid #e8d5cf',
                  borderRadius: 6,
                  color: 'var(--terracotta)',
                  fontSize: '0.85rem',
                }}
              >
                <AlertTriangle size={15} />
                {error}
              </div>
            )}

            <button type="submit" disabled={loading || !key.trim()} className="btn btn-primary btn-block">
              {loading ? <Loader2 size={16} className="spin" /> : <ShieldCheck size={16} />}
              {loading ? 'Verifying…' : 'Unlock Workspace'}
            </button>
          </form>

          <p className="meta" style={{ marginTop: 20, textTransform: 'none', letterSpacing: '0.02em', textAlign: 'center' }}>
            Sessions expire after 8 hours. Contact the platform owner to rotate the operator key.
          </p>
        </div>
      </div>
    </div>
  );
}

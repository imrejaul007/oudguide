'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { LogIn, Loader2, ShieldQuestion } from 'lucide-react';

/**
 * The supplier sign-in form.
 *
 * Posts to /api/v1/b2b/supplier/login; on success the route sets the
 * `og_supplier_session` cookie and this component redirects to the
 * dashboard. EN-only on purpose: the supplier console is an operator
 * surface, the same reasoning as the admin workspace.
 */
export function SupplierLoginForm() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const res = await fetch('/api/v1/b2b/supplier/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push(`/${locale}/b2b/supplier`);
      router.refresh();
      return;
    }

    const data = await res.json().catch(() => ({}));
    setError(data.error || 'Sign in failed.');
    setSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="supplier-login-form" style={{ maxWidth: 420, margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
        <ShieldQuestion size={20} style={{ color: 'var(--green-700)' }} />
        <h3 style={{ margin: 0 }}>Supplier sign in</h3>
      </div>

      <div style={{ display: 'grid', gap: 14 }}>
        <label className="quick-lead-field">
          <span style={{ fontSize: '0.85rem', color: 'var(--ink-muted)' }}>Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@supplier.com"
            required
          />
        </label>

        <label className="quick-lead-field">
          <span style={{ fontSize: '0.85rem', color: 'var(--ink-muted)' }}>Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
      </div>

      {error && <p className="quick-lead-error" role="alert" style={{ color: 'var(--brass)', marginTop: 12 }}>{error}</p>}

      <button
        type="submit"
        className="btn btn-primary btn-lg"
        disabled={submitting}
        style={{ marginTop: 16, width: '100%' }}
      >
        {submitting ? <Loader2 size={15} className="spin" /> : <LogIn size={15} />}
        <span>Sign in</span>
      </button>
    </form>
  );
}

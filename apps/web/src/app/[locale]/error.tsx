'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, Compass, RefreshCw } from 'lucide-react';

/**
 * Branded error boundary for the locale segment.
 *
 * Without this, any thrown error inside a page produced an opaque 500 with
 * no way back. The boundary renders the site chrome and offers a route
 * forward, and it reports the digest so a failure can be traced to the
 * server log entry.
 */
export default function LocaleError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface the failure in the browser console for diagnosis.
    console.error('OudGuide page error:', error);
  }, [error]);

  return (
    <div className="section" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
      <div className="container container-narrow text-center">
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            background: 'var(--terracotta-tint)',
            border: '1px solid #e8d5cf',
            color: 'var(--terracotta)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
          }}
        >
          <AlertTriangle size={26} />
        </div>

        <h1 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', marginBottom: 12 }}>
          Something went wrong on our side
        </h1>
        <p className="lede" style={{ margin: '0 auto 28px', maxWidth: '48ch' }}>
          An unexpected error interrupted this page. Your inquiry data is safe —
          it is stored in your own browser and is not lost.
        </p>

        {error.digest && (
          <p className="meta" style={{ marginBottom: 24, textTransform: 'none', letterSpacing: '0.02em' }}>
            Reference: {error.digest}
          </p>
        )}

        <div className="cluster" style={{ justifyContent: 'center' }}>
          <button onClick={reset} className="btn btn-primary">
            <RefreshCw size={15} />
            Try again
          </button>
          <Link href="/en" className="btn btn-outline">
            <Compass size={15} />
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

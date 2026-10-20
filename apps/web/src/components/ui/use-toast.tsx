'use client';

import * as React from 'react';
import {
  Toast,
  ToastProvider,
  ToastViewport,
  ToastTitle,
  ToastDescription,
  ToastClose,
} from './toaster';

export interface ToastPayload {
  title?: string;
  description?: string;
  variant?: 'default' | 'success' | 'error';
  duration?: number;
}

interface ToastContextValue {
  toast: (payload: ToastPayload) => void;
}

const ToastContext = React.createContext<ToastContextValue | null>(null);

/**
 * Minimal toast provider + hook.
 *
 * Ported from IndexOrbit's toast setup, simplified to a single imperative
 * `toast()` call so any client component can surface a confirmation or an
 * error without prop-drilling a notifier.
 */
export function ToasterProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Array<ToastPayload & { id: number }>>([]);

  const toast = React.useCallback((payload: ToastPayload) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { ...payload, id }]);
  }, []);

  const dismiss = React.useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toast }}>
      <ToastProvider swipeDirection="right">
        {children}
        {toasts.map((t) => (
          <Toast
            key={t.id}
            onOpenChange={(open) => {
              if (!open) dismiss(t.id);
            }}
            duration={t.duration ?? 5000}
            style={{
              borderInlineStartWidth: '2px',
              borderInlineStartColor:
                t.variant === 'error'
                  ? 'var(--terracotta)'
                  : t.variant === 'success'
                    ? 'var(--green-600)'
                    : 'var(--green-300)',
            }}
          >
            <div style={{ minWidth: 0, flex: 1 }}>
              {t.title && <ToastTitle>{t.title}</ToastTitle>}
              {t.description && <ToastDescription>{t.description}</ToastDescription>}
            </div>
            <ToastClose />
          </Toast>
        ))}
        <ToastViewport />
      </ToastProvider>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = React.useContext(ToastContext);
  if (!ctx) {
    throw new Error('useToast must be used within a ToasterProvider');
  }
  return ctx;
}

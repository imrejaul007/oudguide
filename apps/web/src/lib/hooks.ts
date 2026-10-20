'use client';

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';

/**
 * Custom hooks.
 *
 * Ported from IndexOrbit's `src/lib/hooks/index.ts` (useDebounce,
 * useLocalStorage, useMediaQuery, useIsMobile) and extended with the
 * IntersectionObserver helpers that IndexOrbit implements inline in its
 * taxonomy pages.
 */

/** Debounce a rapidly-changing value (search inputs, filters). */
export function useDebounce<T>(value: T, delay = 300): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}

/** Debounce a callback, cancelling the pending call on unmount. */
export function useDebouncedCallback<Args extends unknown[]>(
  fn: (...args: Args) => void,
  delay = 300
) {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fnRef = useRef(fn);
  fnRef.current = fn;

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  return useCallback(
    (...args: Args) => {
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => fnRef.current(...args), delay);
    },
    [delay]
  );
}

/**
 * SSR-safe localStorage with JSON serialisation.
 *
 * Falls back to the initial value when storage is unavailable (private
 * browsing, SSR, quota errors) rather than throwing.
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [stored, setStored] = useState<T>(initialValue);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(key);
      if (raw !== null) setStored(JSON.parse(raw) as T);
    } catch {
      // Unavailable or corrupt — keep the initial value.
    }
    setHydrated(true);
  }, [key]);

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      setStored((prev) => {
        const next = value instanceof Function ? value(prev) : value;
        try {
          window.localStorage.setItem(key, JSON.stringify(next));
        } catch {}
        return next;
      });
    },
    [key]
  );

  return [stored, setValue, hydrated] as const;
}

/** Track a CSS media query. */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mql = window.matchMedia(query);
    setMatches(mql.matches);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [query]);

  return matches;
}

export function useIsMobile(): boolean {
  return useMediaQuery('(max-width: 768px)');
}

/**
 * Observe an element's visibility.
 *
 * IndexOrbit uses this for infinite scroll (a sentinel element) and for
 * lazy-revealing taxonomy sections. Ported here so the pattern is reusable.
 */
export function useIntersectionObserver(
  options?: IntersectionObserverInit & { once?: boolean }
) {
  const { once = true, threshold = 0.1, rootMargin = '0px', ...rest } = options ?? {};
  const ref = useRef<HTMLElement | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting) {
          setHasIntersected(true);
          if (once) observer.unobserve(el);
        }
      },
      { threshold, rootMargin, ...rest }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold, rootMargin, rest]);

  return { ref, isIntersecting, hasIntersected };
}

/**
 * Reveal-on-scroll for section content.
 *
 * Returns a ref to attach and a class to apply — the element starts hidden
 * and animates in once it enters the viewport.
 */
export function useRevealOnScroll() {
  const { ref, hasIntersected } = useIntersectionObserver({
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px',
  });

  const className = useMemo(() => {
    if (hasIntersected) return 'reveal-in';
    return 'reveal-pending';
  }, [hasIntersected]);

  return { ref, className };
}

/**
 * An AbortController tied to the component lifetime, so a superseded
 * request is cancelled rather than left to resolve into stale state.
 * (IndexOrbit uses this pattern in its category search.)
 */
export function useAbortController() {
  const controllerRef = useRef<AbortController | null>(null);

  useEffect(() => () => {
    controllerRef.current?.abort();
  }, []);

  const create = useCallback(() => {
    controllerRef.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;
    return controller;
  }, []);

  return create;
}

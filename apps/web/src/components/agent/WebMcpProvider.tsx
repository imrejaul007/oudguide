'use client';

import { useEffect } from 'react';

/**
 * WebMCP In-Browser Agent Integration
 *
 * Implements W3C WebMCP tool registration on page load.
 * Exposes OudGuide tools to in-browser agents via navigator.modelContext.registerTool()
 * or window.modelContext.registerTool().
 */
export function WebMcpProvider() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const nav = navigator as any;
    const win = window as any;
    const modelContext = nav.modelContext || win.modelContext;

    if (modelContext && typeof modelContext.registerTool === 'function') {
      try {
        // Tool 1: Search Directory
        modelContext.registerTool({
          name: 'search_producers',
          description: 'Search verified distillers, plantations, and wholesalers across global oud producing regions',
          inputSchema: {
            type: 'object',
            properties: {
              query: { type: 'string', description: 'Search keyword or material family' },
              country: { type: 'string', description: 'Country ISO2 code (e.g. IN, TH, KH, AE)' },
              role: { type: 'string', description: 'Role (e.g. distillers, wholesalers, growers)' },
            },
          },
          execute: async (input: { query?: string; country?: string; role?: string }) => {
            const params = new URLSearchParams();
            if (input.query) params.set('search', input.query);
            if (input.country) params.set('country', input.country);
            if (input.role) params.set('role', input.role);
            const res = await fetch(`/api/v1/directory/businesses?${params.toString()}`);
            if (!res.ok) throw new Error('Search failed');
            return await res.json();
          },
        });

        // Tool 2: Market Prices
        modelContext.registerTool({
          name: 'get_market_prices',
          description: 'Retrieve observed benchmark price ranges for natural agarwood and pure distillates',
          inputSchema: {
            type: 'object',
            properties: {
              material: { type: 'string', description: 'Material name (e.g. agarwood-chips, dehn-al-oud)' },
            },
          },
          execute: async () => {
            return {
              membershipPriceAed: 1200,
              benchmarkPriceBands: [
                { material: 'Graded Incense Chips', priceRangeUsd: '$35 - $120 / tola' },
                { material: 'Pure Artisan Dehn Al Oud', priceRangeUsd: '$180 - $450 / tola' },
                { material: 'Wild Sinking Heartwood', priceRangeUsd: 'From $15,000 / kg' },
              ],
            };
          },
        });

        // Tool 3: Wholesale RFQ
        modelContext.registerTool({
          name: 'request_wholesale_quote',
          description: 'Submit buyer procurement requirement for direct wholesale quotations from accredited distillers',
          inputSchema: {
            type: 'object',
            required: ['material', 'volume', 'destination'],
            properties: {
              material: { type: 'string', description: 'Material or product family required' },
              volume: { type: 'string', description: 'Required volume or quantity' },
              destination: { type: 'string', description: 'Destination country' },
            },
          },
          execute: async (input: { material: string; volume: string; destination: string }) => {
            const params = new URLSearchParams({
              family: input.material,
              volume: input.volume,
              country: input.destination,
            });
            return {
              quoteUrl: `/en/b2b/quote?${params.toString()}`,
              status: 'ready_for_submission',
            };
          },
        });
      } catch (err) {
        console.warn('WebMCP registration error:', err);
      }
    }
  }, []);

  return null;
}

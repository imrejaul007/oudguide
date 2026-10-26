import { buildLlmsTxt } from '../../lib/llms-txt.ts';

/**
 * Serves llms.txt at /llms.txt.
 *
 * The content is built from the same source the sitemap and robots are,
 * in src/lib/llms-txt.ts, so the invitation to language models and the
 * sitemap can never disagree about what is published.
 */
export const dynamic = 'force-static';

export function GET(): Response {
  return new Response(buildLlmsTxt(), {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=3600',
    },
  });
}

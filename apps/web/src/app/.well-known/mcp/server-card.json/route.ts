import { NextResponse } from 'next/server';
import { readFileSync } from 'node:fs';
import path from 'node:path';

export const dynamic = 'force-static';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public/.well-known/mcp/server-card.json');
  try {
    const content = readFileSync(filePath, 'utf8');
    return new NextResponse(content, {
      status: 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'public, max-age=86400, s-maxage=86400',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch {
    const fallback = {
      $schema: 'https://modelcontextprotocol.io/schemas/server-card/v1.json',
      name: 'oudguide',
      version: '1.0.0',
      description: 'OudGuide natural agarwood & heritage fragrance intelligence and verified producer directory',
      endpoint: '/api/mcp',
      capabilities: {
        tools: { listChanged: false },
        resources: { subscribe: false, listChanged: false },
        prompts: { listChanged: false },
      },
    };
    return NextResponse.json(fallback, {
      headers: {
        'Cache-Control': 'public, max-age=86400',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
}

import { NextResponse, type NextRequest } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({
    name: 'oudguide-mcp-server',
    version: '1.0.0',
    protocolVersion: '2024-11-05',
    capabilities: {
      tools: {},
      resources: {},
      prompts: {},
    },
  }, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, method } = body || {};

    if (method === 'initialize') {
      return NextResponse.json({
        jsonrpc: '2.0',
        id,
        result: {
          protocolVersion: '2024-11-05',
          capabilities: {
            tools: {},
            resources: {},
            prompts: {},
          },
          serverInfo: {
            name: 'oudguide',
            version: '1.0.0',
          },
        },
      });
    }

    if (method === 'tools/list') {
      return NextResponse.json({
        jsonrpc: '2.0',
        id,
        result: {
          tools: [
            {
              name: 'search_producers',
              description: 'Search verified distillers, plantations, and suppliers across global oud producing regions',
              inputSchema: {
                type: 'object',
                properties: {
                  query: { type: 'string', description: 'Search keyword or material family' },
                  country: { type: 'string', description: 'Country ISO2 code (e.g. IN, TH, KH, AE)' },
                  role: { type: 'string', description: 'Supplier role (e.g. distillers, wholesalers, growers)' },
                },
              },
            },
            {
              name: 'get_market_prices',
              description: 'Retrieve observed benchmark price ranges for natural agarwood and pure distillates',
              inputSchema: {
                type: 'object',
                properties: {
                  material: { type: 'string', description: 'Material name (e.g. agarwood-chips, dehn-al-oud, wild-heartwood)' },
                },
              },
            },
            {
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
            },
          ],
        },
      });
    }

    return NextResponse.json({
      jsonrpc: '2.0',
      id,
      error: {
        code: -32601,
        message: `Method not found: ${method}`,
      },
    }, { status: 404 });
  } catch {
    return NextResponse.json({
      jsonrpc: '2.0',
      error: { code: -32700, message: 'Parse error' },
    }, { status: 400 });
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

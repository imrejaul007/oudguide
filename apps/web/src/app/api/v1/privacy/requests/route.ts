import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  return NextResponse.json({
    request_id: `priv_${Date.now()}`,
    status: 'received',
    message: 'Privacy request recorded. Processing per retention policy.',
  }, { status: 202 });
}

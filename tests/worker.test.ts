import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { OudGuideWorker } from '../apps/worker/src/worker.ts';

describe('Background Worker & Outbox Dispatcher (Section 26, V4-LEAD-02)', () => {
  test('Enqueue and process verification notification', async () => {
    const worker = new OudGuideWorker();
    const item = worker.enqueue('INQUIRY_VERIFICATION_SENT', {
      inquiry_id: 'inq_123',
      channel: 'email',
      destination: 'buyer@example.com',
      token: '654321',
    });

    assert.equal(item.status, 'pending');
    assert.equal(item.attempts, 0);

    const processed = await worker.processNext();
    assert.ok(processed);
    assert.equal(processed.id, item.id);
    assert.equal(processed.status, 'dispatched');
    assert.equal(processed.attempts, 1);
    assert.ok(processed.processed_at);

    // Queue should now have no more pending items
    const next = await worker.processNext();
    assert.equal(next, null);
  });

  test('Process introduction released notification', async () => {
    const worker = new OudGuideWorker();
    worker.enqueue('INTRODUCTION_RELEASED', {
      release_id: 'rel_456',
      inquiry_id: 'inq_123',
      supplier_id: 'biz_01',
      supplier_name: 'Al Mutalib Perfumes',
      buyer_name: 'Fatima',
      buyer_contact: 'fatima@example.com',
      requirements: {
        product_family: 'Oud oil',
        quantity: 10,
        unit: 'tolas',
        destination: 'United Arab Emirates',
      },
    });

    const count = await worker.processAll();
    assert.equal(count, 1);

    const queue = worker.getQueue();
    assert.equal(queue[0].status, 'dispatched');
  });

  test('Idempotency: duplicate processing prevents multiple dispatches', async () => {
    const worker = new OudGuideWorker();
    const item = worker.enqueue('INQUIRY_VERIFICATION_SENT', { token: '111222' });

    await worker.processNext();
    assert.equal(item.status, 'dispatched');

    // Reset status to pending to simulate duplicate queueing
    item.status = 'pending';
    const reprocessed = await worker.processNext();
    assert.equal(reprocessed?.status, 'dispatched');
    // attempts should remain 1 because it early returns from dispatched set
    assert.equal(reprocessed?.attempts, 1);
  });
});

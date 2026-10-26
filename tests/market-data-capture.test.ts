import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { OudGuideDomainService } from '../packages/domain/src/index.ts';

const MINERS: any[] = [
  {
    id: 'b01',
    slug: 'assamm-perfumes',
    name: 'Assamm Perfumes',
    role: 'distiller',
    city: 'Al Ain',
    country: 'United Arab Emirates',
    is_claimed: false,
    has_active_membership: false,
    ownership_verified: true,
  },
];

function makeDomain() {
  return new OudGuideDomainService(MINERS);
}

describe('RFQ market data capture', () => {
  test('a submission with a target price records a PII-free market point', () => {
    const domain = makeDomain();
    domain.submitInquiry({
      product_family: 'Oud oil',
      quantity: 50,
      quantity_unit: 'tolas',
      target_price_per_unit: '350',
      buyer_name: 'Fatima Al Mansoori',
      buyer_email: 'fatima@example.com',
      destination_country: 'United Arab Emirates',
      samples_requested: true,
    });
    const points = domain.getMarketDataPoints();
    assert.equal(points.length, 1);
    const p = points[0];
    assert.equal(p.target_price, 350);
    assert.equal(p.price_unit, 'tolas');
    // PII never enters the point
    const raw = JSON.stringify(p);
    assert.ok(!raw.includes('fatima'), 'buyer name must not appear');
    assert.ok(!raw.includes('example.com'), 'buyer email must not appear');
    assert.ok(!raw.includes('destination'), 'destination must not appear');
  });

  test('a submission with no price, density, origin or quantity records nothing', () => {
    const domain = makeDomain();
    domain.submitInquiry({
      product_family: 'Oud wood',
      buyer_name: 'Someone',
      destination_country: 'India',
      samples_requested: false,
    });
    assert.equal(domain.getMarketDataPoints().length, 0);
  });

  test('density-only submission still captures a point', () => {
    const domain = makeDomain();
    domain.submitInquiry({
      product_family: 'Oud wood',
      resin_density: 'high',
      buyer_name: 'X',
      destination_country: 'UAE',
      samples_requested: false,
    });
    const points = domain.getMarketDataPoints();
    assert.equal(points.length, 1);
    assert.equal(points[0].resin_density, 'high');
    assert.equal(points[0].target_price, undefined);
  });

  test('the k=5 aggregate hides families with fewer than 5 price points', () => {
    const domain = makeDomain();
    for (let i = 0; i < 4; i++) {
      domain.submitInquiry({
        product_family: 'Oud oil',
        target_price_per_unit: String(100 + i * 10),
        buyer_name: `B${i}`,
        destination_country: 'UAE',
      });
    }
    assert.deepEqual(domain.getMarketPriceAggregate(5), []);
    // The fifth one crosses the threshold
    domain.submitInquiry({
      product_family: 'Oud oil',
      target_price_per_unit: '140',
      buyer_name: 'B5',
      destination_country: 'UAE',
    });
    const bands = domain.getMarketPriceAggregate(5);
    assert.equal(bands.length, 1);
    assert.equal(bands[0].product_family, 'Oud oil');
    assert.equal(bands[0].n, 5);
    assert.equal(bands[0].min_price, 100);
    assert.equal(bands[0].max_price, 140);
    assert.equal(bands[0].mean_price, 120);
    // No individual price is emitted
    const raw = JSON.stringify(bands);
    assert.ok(!raw.includes('110'), 'a lone individual target must not be readable');
  });

  test('a price string with a currency suffix parses to a number', () => {
    const domain = makeDomain();
    domain.submitInquiry({
      product_family: 'Oud oil',
      target_price_per_unit: '2,500 AED/kg',
      quantity_unit: 'kg',
      buyer_name: 'Y',
      destination_country: 'UAE',
    });
    const p = domain.getMarketDataPoints()[0];
    assert.equal(p.target_price, 2500);
  });

  test('getMarketDataPoints returns a copy, not the internal array', () => {
    const domain = makeDomain();
    domain.submitInquiry({
      product_family: 'Oud oil',
      target_price_per_unit: '999',
      buyer_name: 'Z',
      destination_country: 'UAE',
    });
    const a = domain.getMarketDataPoints();
    const b = domain.getMarketDataPoints();
    assert.notEqual(a, b);
  });
});

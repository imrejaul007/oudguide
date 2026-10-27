import { gulfPriceBaseline } from './gulf-price-baseline.ts';

/**
 * The machine-readable datasets OudGuide publishes.
 *
 * Each entry is a stable slug (the last segment of the public URL under
 * /data/) mapped to its dated, frozen snapshot. The slug is the public
 * name and must not change once published: the Dataset schema and the
 * llms.txt both link to it, and renaming it orphans the links.
 */
export const DATASETS: Record<string, unknown> = {
  'gulf-price-baseline': gulfPriceBaseline,
};

export const DATASET_SLUGS = Object.keys(DATASETS);

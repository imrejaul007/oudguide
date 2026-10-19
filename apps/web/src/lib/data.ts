import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Direct import of domain services and seed
import { OudGuideDomainService } from '../../../../packages/domain/src/index.ts';
import { seedData } from '../../../../scripts/seed.js';

export const seed = seedData();
export const domain = new OudGuideDomainService(seed.businesses);
export { isFieldVisible } from '../../../../packages/contracts/src/rfq-fields.ts';
export type { RfqFormValues } from '../../../../packages/contracts/src/rfq-fields.ts';
export { projectPublicBusiness } from '../../../../packages/permissions/src/contact-policy.ts';

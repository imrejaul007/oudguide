/**
 * Production instance of the OudGuide Sourcing Assistant.
 *
 * Kept separate from `sourcing-assistant.ts` so the pure core has no
 * bundler-alias imports and remains directly unit-testable under the
 * Node test runner.
 */

import { domain, seed } from './data';
import {
  createSourcingAssistant,
  type AssistantProducer,
  type AssistantTerritory,
} from './sourcing-assistant';

export const sourcingAssistant = createSourcingAssistant({
  listProducers: () =>
    domain.listBusinesses() as unknown as AssistantProducer[],
  listTerritories: () => seed.countries as unknown as AssistantTerritory[],
});

export const answerQuery = sourcingAssistant.answerQuery;
export const matchProducers = sourcingAssistant.matchProducers;
export const matchGuides = sourcingAssistant.matchGuides;

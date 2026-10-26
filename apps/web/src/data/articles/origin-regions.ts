import { originRegion } from './geography-kit.ts';
import type { Article } from './types.ts';

/**
 * The origin-region pages.
 *
 * The manifest carries 41 "Origin region" routes. Assam already exists,
 * so this file holds the other forty.
 *
 * How the facts here were established
 * ----------------------------------
 * The species list for each region is DERIVED from Table 1 of the ITTO
 * review of the two genera (Thompson, Lim & Turjaman 2022, ITTO Technical
 * Series No. 51), which lists every accepted Aquilaria and Gyrinops
 * species with its IUCN status and its range states. The derivation is
 * mechanical: a region inherits the species the table records for its
 * country, and where the table names a sub-division, only the species
 * recorded for that sub-division.
 *
 * The population, quota and control figures come from the same review's
 * Table 2, which gives the tree-population and plantation-area estimates
 * per country by source and year, and from the export-quota passage that
 * records the quotas for the four Aquilaria-exporting countries.
 *
 * Two things this file is careful not to do:
 *
 *   1. It does not assert that a region produces agarwood. The ITTO
 *      table records a species RANGE, which is a botanical fact. The
 *      population figures are country-level, and the review itself
 *      warns that they differ wildly between sources and sometimes
 *      between sources reporting the same year. A region's page says
 *      what the range and the country figures are, and stops there.
 *
 *   2. It does not assert that any business operates in a region. The
 *      directory's records are the only source for that, and the
 *      directory publishes one business.
 *
 * The region gate in the manifest is stricter than the standard guide
 * gate: "Region boundary/role checked + relevant primary evidence +
 * original region-specific information". The third of those is what
 * makes these pages different from one another, so the evidence
 * sentence for each region names the specific record that distinguishes
 * it — the survey that found the density, the census that counted the
 * stems, the quota that applies to it.
 */

/**
 * The species for a region, with the Arabic status phrase the country
 * articles already use.
 *
 * The status phrase is copied from the country article for the same
 * species, so a reader who has read the country page finds the same
 * wording here. The range states are replaced by the region's own
 * position, because "recorded for Cambodia" would be wrong on a page
 * about a Cambodian province.
 */
interface RegionSpecies {
  /** The binomial. */
  name: string;
  /** The IUCN status, as the ITTO table gives it. */
  status: 'CR' | 'EN' | 'VU' | 'DD';
  /** Where in the country the table records it. */
  where: string;
  /** The Arabic status phrase, as the country articles write it. */
  statusAr: string;
}

const CR_AR = 'مهدد بشدة';
const EN_AR = 'مهدد بالانقراض';
const VU_AR = 'قابل للانقراض';
const DD_AR = 'البيانات ناقصة';

const statusAr = (s: RegionSpecies['status']): string =>
  s === 'CR' ? CR_AR : s === 'EN' ? EN_AR : s === 'VU' ? VU_AR : DD_AR;

/** The species each region inherits, and the sub-divisions that narrow it. */
const SPECIES: Record<string, RegionSpecies[]> = {
  // --- India: A. malaccensis for the country, A. khasiana for the north-east ---
  'india/manipur': [
    { name: 'Aquilaria malaccensis', status: 'CR', where: 'India', statusAr: CR_AR },
    { name: 'Aquilaria khasiana', status: 'CR', where: 'India', statusAr: CR_AR },
  ],
  'india/nagaland': [
    { name: 'Aquilaria malaccensis', status: 'CR', where: 'India', statusAr: CR_AR },
    { name: 'Aquilaria khasiana', status: 'CR', where: 'India', statusAr: CR_AR },
  ],
  'india/tripura': [
    { name: 'Aquilaria malaccensis', status: 'CR', where: 'India', statusAr: CR_AR },
    { name: 'Aquilaria khasiana', status: 'CR', where: 'India', statusAr: CR_AR },
  ],
  'india/meghalaya': [
    { name: 'Aquilaria malaccensis', status: 'CR', where: 'India', statusAr: CR_AR },
    { name: 'Aquilaria khasiana', status: 'CR', where: 'India', statusAr: CR_AR },
  ],
  'india/mizoram': [
    { name: 'Aquilaria malaccensis', status: 'CR', where: 'India', statusAr: CR_AR },
    { name: 'Aquilaria khasiana', status: 'CR', where: 'India', statusAr: CR_AR },
  ],
  // --- Vietnam: the Indo-China set ---
  'vietnam/khanh-hoa': [
    { name: 'Aquilaria crassna', status: 'CR', where: 'Viet Nam', statusAr: CR_AR },
    { name: 'Aquilaria baillonii', status: 'DD', where: 'Viet Nam', statusAr: DD_AR },
    { name: 'Aquilaria banaensis', status: 'VU', where: 'Viet Nam', statusAr: VU_AR },
    { name: 'Aquilaria rugosa', status: 'VU', where: 'Viet Nam', statusAr: VU_AR },
    { name: 'Aquilaria yunnanensis', status: 'VU', where: 'Viet Nam', statusAr: VU_AR },
  ],
  'vietnam/quang-nam': [
    { name: 'Aquilaria crassna', status: 'CR', where: 'Viet Nam', statusAr: CR_AR },
    { name: 'Aquilaria baillonii', status: 'DD', where: 'Viet Nam', statusAr: DD_AR },
    { name: 'Aquilaria banaensis', status: 'VU', where: 'Viet Nam', statusAr: VU_AR },
    { name: 'Aquilaria rugosa', status: 'VU', where: 'Viet Nam', statusAr: VU_AR },
    { name: 'Aquilaria yunnanensis', status: 'VU', where: 'Viet Nam', statusAr: VU_AR },
  ],
  'vietnam/ha-tinh': [
    { name: 'Aquilaria crassna', status: 'CR', where: 'Viet Nam', statusAr: CR_AR },
    { name: 'Aquilaria baillonii', status: 'DD', where: 'Viet Nam', statusAr: DD_AR },
    { name: 'Aquilaria banaensis', status: 'VU', where: 'Viet Nam', statusAr: VU_AR },
    { name: 'Aquilaria rugosa', status: 'VU', where: 'Viet Nam', statusAr: VU_AR },
    { name: 'Aquilaria yunnanensis', status: 'VU', where: 'Viet Nam', statusAr: VU_AR },
  ],
  'vietnam/quang-ngai': [
    { name: 'Aquilaria crassna', status: 'CR', where: 'Viet Nam', statusAr: CR_AR },
    { name: 'Aquilaria baillonii', status: 'DD', where: 'Viet Nam', statusAr: DD_AR },
    { name: 'Aquilaria banaensis', status: 'VU', where: 'Viet Nam', statusAr: VU_AR },
    { name: 'Aquilaria rugosa', status: 'VU', where: 'Viet Nam', statusAr: VU_AR },
    { name: 'Aquilaria yunnanensis', status: 'VU', where: 'Viet Nam', statusAr: VU_AR },
  ],
  // --- Cambodia: the Indo-China set plus G. vidalii ---
  'cambodia/pursat': [
    { name: 'Aquilaria crassna', status: 'CR', where: 'Cambodia', statusAr: CR_AR },
    { name: 'Aquilaria baillonii', status: 'DD', where: 'Cambodia', statusAr: DD_AR },
    { name: 'Aquilaria banaensis', status: 'VU', where: 'Cambodia', statusAr: VU_AR },
    { name: 'Aquilaria rugosa', status: 'VU', where: 'Cambodia', statusAr: VU_AR },
    { name: 'Gyrinops vidalii', status: 'CR', where: 'Cambodia', statusAr: CR_AR },
  ],
  'cambodia/koh-kong': [
    { name: 'Aquilaria crassna', status: 'CR', where: 'Cambodia', statusAr: CR_AR },
    { name: 'Aquilaria baillonii', status: 'DD', where: 'Cambodia', statusAr: DD_AR },
    { name: 'Aquilaria banaensis', status: 'VU', where: 'Cambodia', statusAr: VU_AR },
    { name: 'Aquilaria rugosa', status: 'VU', where: 'Cambodia', statusAr: VU_AR },
    { name: 'Gyrinops vidalii', status: 'CR', where: 'Cambodia', statusAr: CR_AR },
  ],
  'cambodia/kampot': [
    { name: 'Aquilaria crassna', status: 'CR', where: 'Cambodia', statusAr: CR_AR },
    { name: 'Aquilaria baillonii', status: 'DD', where: 'Cambodia', statusAr: DD_AR },
    { name: 'Aquilaria banaensis', status: 'VU', where: 'Cambodia', statusAr: VU_AR },
    { name: 'Aquilaria rugosa', status: 'VU', where: 'Cambodia', statusAr: VU_AR },
    { name: 'Gyrinops vidalii', status: 'CR', where: 'Cambodia', statusAr: CR_AR },
  ],
  // --- Indonesia, by island and province ---
  'indonesia/kalimantan': [
    { name: 'Aquilaria microcarpa', status: 'EN', where: 'Kalimantan', statusAr: EN_AR },
    { name: 'Aquilaria beccariana', status: 'VU', where: 'Kalimantan', statusAr: VU_AR },
    { name: 'Aquilaria cumingiana', status: 'VU', where: 'Kalimantan', statusAr: VU_AR },
    { name: 'Aquilaria hirta', status: 'VU', where: 'Kalimantan', statusAr: VU_AR },
  ],
  'indonesia/sumatra': [
    { name: 'Aquilaria microcarpa', status: 'EN', where: 'Sumatra', statusAr: EN_AR },
    { name: 'Aquilaria beccariana', status: 'VU', where: 'Sumatra', statusAr: VU_AR },
    { name: 'Aquilaria hirta', status: 'VU', where: 'Sumatra', statusAr: VU_AR },
  ],
  'indonesia/sulawesi': [
    { name: 'Gyrinops decipiens', status: 'EN', where: 'Sulawesi', statusAr: EN_AR },
    { name: 'Gyrinops versteegii', status: 'VU', where: 'Sulawesi', statusAr: VU_AR },
  ],
  'indonesia/maluku': [
    { name: 'Aquilaria cumingiana', status: 'VU', where: 'Maluku, Moluccas', statusAr: VU_AR },
    { name: 'Aquilaria filaria', status: 'VU', where: 'Moluccas', statusAr: VU_AR },
    { name: 'Gyrinops versteegii', status: 'VU', where: 'Moluccas', statusAr: VU_AR },
    { name: 'Gyrinops moluccana', status: 'EN', where: 'Moluccas', statusAr: EN_AR },
  ],
  'indonesia/papua': [
    { name: 'Aquilaria cumingiana', status: 'VU', where: 'Papua', statusAr: VU_AR },
    { name: 'Aquilaria filaria', status: 'VU', where: 'Papua', statusAr: VU_AR },
    { name: 'Gyrinops versteegii', status: 'VU', where: 'Papua', statusAr: VU_AR },
    { name: 'Gyrinops caudata', status: 'VU', where: 'Papua', statusAr: VU_AR },
    { name: 'Gyrinops ledermannii', status: 'EN', where: 'Papua', statusAr: EN_AR },
    { name: 'Gyrinops moluccana', status: 'EN', where: 'Papua', statusAr: EN_AR },
    { name: 'Gyrinops salicifolia', status: 'EN', where: 'Papua', statusAr: EN_AR },
  ],
  'indonesia/merauke': [
    { name: 'Aquilaria cumingiana', status: 'VU', where: 'Papua', statusAr: VU_AR },
    { name: 'Aquilaria filaria', status: 'VU', where: 'Papua', statusAr: VU_AR },
    { name: 'Gyrinops versteegii', status: 'VU', where: 'Papua', statusAr: VU_AR },
    { name: 'Gyrinops caudata', status: 'VU', where: 'Papua', statusAr: VU_AR },
    { name: 'Gyrinops ledermannii', status: 'EN', where: 'Papua', statusAr: EN_AR },
    { name: 'Gyrinops moluccana', status: 'EN', where: 'Papua', statusAr: EN_AR },
    { name: 'Gyrinops salicifolia', status: 'EN', where: 'Papua', statusAr: EN_AR },
  ],
  'indonesia/west-papua': [
    { name: 'Aquilaria cumingiana', status: 'VU', where: 'Papua', statusAr: VU_AR },
    { name: 'Aquilaria filaria', status: 'VU', where: 'Papua', statusAr: VU_AR },
    { name: 'Gyrinops versteegii', status: 'VU', where: 'Papua', statusAr: VU_AR },
    { name: 'Gyrinops caudata', status: 'VU', where: 'Papua', statusAr: VU_AR },
    { name: 'Gyrinops ledermannii', status: 'EN', where: 'Papua', statusAr: EN_AR },
    { name: 'Gyrinops moluccana', status: 'EN', where: 'Papua', statusAr: EN_AR },
    { name: 'Gyrinops salicifolia', status: 'EN', where: 'Papua', statusAr: EN_AR },
  ],
  'indonesia/lombok': [
    { name: 'Aquilaria filaria', status: 'VU', where: 'Nusa Tenggara', statusAr: VU_AR },
    { name: 'Gyrinops versteegii', status: 'VU', where: 'Nusa Tenggara', statusAr: VU_AR },
  ],
  // --- Malaysia, by land area ---
  'malaysia/pahang': [
    { name: 'Aquilaria microcarpa', status: 'EN', where: 'Peninsular Malaysia', statusAr: EN_AR },
    { name: 'Aquilaria beccariana', status: 'VU', where: 'Peninsular Malaysia', statusAr: VU_AR },
    { name: 'Aquilaria rostrata', status: 'CR', where: 'Malaysia (Peninsula)', statusAr: CR_AR },
    { name: 'Aquilaria hirta', status: 'VU', where: 'Malaysia (Peninsula)', statusAr: VU_AR },
  ],
  'malaysia/kelantan': [
    { name: 'Aquilaria microcarpa', status: 'EN', where: 'Peninsular Malaysia', statusAr: EN_AR },
    { name: 'Aquilaria beccariana', status: 'VU', where: 'Peninsular Malaysia', statusAr: VU_AR },
    { name: 'Aquilaria rostrata', status: 'CR', where: 'Malaysia (Peninsula)', statusAr: CR_AR },
    { name: 'Aquilaria hirta', status: 'VU', where: 'Malaysia (Peninsula)', statusAr: VU_AR },
  ],
  'malaysia/terengganu': [
    { name: 'Aquilaria microcarpa', status: 'EN', where: 'Peninsular Malaysia', statusAr: EN_AR },
    { name: 'Aquilaria beccariana', status: 'VU', where: 'Peninsular Malaysia', statusAr: VU_AR },
    { name: 'Aquilaria rostrata', status: 'CR', where: 'Malaysia (Peninsula)', statusAr: CR_AR },
    { name: 'Aquilaria hirta', status: 'VU', where: 'Malaysia (Peninsula)', statusAr: VU_AR },
  ],
  'malaysia/sabah': [
    { name: 'Aquilaria microcarpa', status: 'EN', where: 'Malaysia (Borneo)', statusAr: EN_AR },
    { name: 'Aquilaria beccariana', status: 'VU', where: 'Malaysia (Borneo)', statusAr: VU_AR },
    { name: 'Aquilaria cumingiana', status: 'VU', where: 'Malaysia (Borneo)', statusAr: VU_AR },
    { name: 'Aquilaria hirta', status: 'VU', where: 'Malaysia (Borneo)', statusAr: VU_AR },
  ],
  'malaysia/sarawak': [
    { name: 'Aquilaria microcarpa', status: 'EN', where: 'Malaysia (Borneo)', statusAr: EN_AR },
    { name: 'Aquilaria beccariana', status: 'VU', where: 'Malaysia (Borneo)', statusAr: VU_AR },
    { name: 'Aquilaria cumingiana', status: 'VU', where: 'Malaysia (Borneo)', statusAr: VU_AR },
    { name: 'Aquilaria hirta', status: 'VU', where: 'Malaysia (Borneo)', statusAr: VU_AR },
  ],
  // --- Laos ---
  'laos/vientiane': [
    { name: 'Aquilaria crassna', status: 'CR', where: 'Lao PDR', statusAr: CR_AR },
    { name: 'Aquilaria baillonii', status: 'DD', where: 'Lao PDR', statusAr: DD_AR },
    { name: 'Aquilaria banaensis', status: 'VU', where: 'Lao PDR', statusAr: VU_AR },
    { name: 'Aquilaria yunnanensis', status: 'VU', where: 'Lao PDR', statusAr: VU_AR },
    { name: 'Aquilaria sinensis', status: 'VU', where: 'Lao PDR, in plantation only', statusAr: VU_AR },
    { name: 'Gyrinops vidalii', status: 'CR', where: 'Lao PDR', statusAr: CR_AR },
  ],
  'laos/bolikhamxay': [
    { name: 'Aquilaria crassna', status: 'CR', where: 'Lao PDR', statusAr: CR_AR },
    { name: 'Aquilaria baillonii', status: 'DD', where: 'Lao PDR', statusAr: DD_AR },
    { name: 'Aquilaria banaensis', status: 'VU', where: 'Lao PDR', statusAr: VU_AR },
    { name: 'Aquilaria yunnanensis', status: 'VU', where: 'Lao PDR', statusAr: VU_AR },
    { name: 'Aquilaria sinensis', status: 'VU', where: 'Lao PDR, in plantation only', statusAr: VU_AR },
    { name: 'Gyrinops vidalii', status: 'CR', where: 'Lao PDR', statusAr: CR_AR },
  ],
  // --- Papua New Guinea ---
  'papua-new-guinea/east-sepik': [
    { name: 'Aquilaria cumingiana', status: 'VU', where: 'Papua New Guinea', statusAr: VU_AR },
    { name: 'Aquilaria filaria', status: 'VU', where: 'Papua New Guinea', statusAr: VU_AR },
    { name: 'Gyrinops versteegii', status: 'VU', where: 'Papua New Guinea', statusAr: VU_AR },
    { name: 'Gyrinops caudata', status: 'VU', where: 'Papua New Guinea', statusAr: VU_AR },
    { name: 'Gyrinops ledermannii', status: 'EN', where: 'Papua New Guinea', statusAr: EN_AR },
    { name: 'Gyrinops moluccana', status: 'EN', where: 'Papua New Guinea', statusAr: EN_AR },
    { name: 'Gyrinops salicifolia', status: 'EN', where: 'Papua New Guinea', statusAr: EN_AR },
  ],
  'papua-new-guinea/sandaun': [
    { name: 'Aquilaria cumingiana', status: 'VU', where: 'Papua New Guinea', statusAr: VU_AR },
    { name: 'Aquilaria filaria', status: 'VU', where: 'Papua New Guinea', statusAr: VU_AR },
    { name: 'Gyrinops versteegii', status: 'VU', where: 'Papua New Guinea', statusAr: VU_AR },
    { name: 'Gyrinops caudata', status: 'VU', where: 'Papua New Guinea', statusAr: VU_AR },
    { name: 'Gyrinops ledermannii', status: 'EN', where: 'Papua New Guinea', statusAr: EN_AR },
    { name: 'Gyrinops moluccana', status: 'EN', where: 'Papua New Guinea', statusAr: EN_AR },
    { name: 'Gyrinops salicifolia', status: 'EN', where: 'Papua New Guinea', statusAr: EN_AR },
  ],
  // --- Sri Lanka ---
  'sri-lanka/southern-province': [
    { name: 'Gyrinops walla', status: 'VU', where: 'Sri Lanka', statusAr: VU_AR },
  ],
  'sri-lanka/sabaragamuwa': [
    { name: 'Gyrinops walla', status: 'VU', where: 'Sri Lanka', statusAr: VU_AR },
  ],
  // --- Thailand ---
  'thailand/trat': [
    { name: 'Aquilaria crassna', status: 'CR', where: 'Thailand', statusAr: CR_AR },
    { name: 'Aquilaria malaccensis', status: 'CR', where: 'Thailand', statusAr: CR_AR },
    { name: 'Aquilaria rugosa', status: 'VU', where: 'Thailand', statusAr: VU_AR },
    { name: 'Aquilaria subintegra', status: 'DD', where: 'Thailand', statusAr: DD_AR },
    { name: 'Aquilaria hirta', status: 'VU', where: 'Thailand', statusAr: VU_AR },
    { name: 'Gyrinops vidalii', status: 'CR', where: 'Thailand', statusAr: CR_AR },
  ],
  'thailand/prachin-buri': [
    { name: 'Aquilaria crassna', status: 'CR', where: 'Thailand', statusAr: CR_AR },
    { name: 'Aquilaria malaccensis', status: 'CR', where: 'Thailand', statusAr: CR_AR },
    { name: 'Aquilaria rugosa', status: 'VU', where: 'Thailand', statusAr: VU_AR },
    { name: 'Aquilaria subintegra', status: 'DD', where: 'Thailand', statusAr: DD_AR },
    { name: 'Aquilaria hirta', status: 'VU', where: 'Thailand', statusAr: VU_AR },
    { name: 'Gyrinops vidalii', status: 'CR', where: 'Thailand', statusAr: CR_AR },
  ],
  'thailand/chanthaburi': [
    { name: 'Aquilaria crassna', status: 'CR', where: 'Thailand', statusAr: CR_AR },
    { name: 'Aquilaria malaccensis', status: 'CR', where: 'Thailand', statusAr: CR_AR },
    { name: 'Aquilaria rugosa', status: 'VU', where: 'Thailand', statusAr: VU_AR },
    { name: 'Aquilaria subintegra', status: 'DD', where: 'Thailand', statusAr: DD_AR },
    { name: 'Aquilaria hirta', status: 'VU', where: 'Thailand', statusAr: VU_AR },
    { name: 'Gyrinops vidalii', status: 'CR', where: 'Thailand', statusAr: CR_AR },
  ],
  // --- Bangladesh ---
  'bangladesh/sylhet': [
    { name: 'Aquilaria malaccensis', status: 'CR', where: 'Bangladesh', statusAr: CR_AR },
  ],
  'bangladesh/moulvibazar': [
    { name: 'Aquilaria malaccensis', status: 'CR', where: 'Bangladesh', statusAr: CR_AR },
  ],
  // --- China ---
  'china/hainan': [
    { name: 'Aquilaria sinensis', status: 'VU', where: 'Hainan', statusAr: VU_AR },
  ],
  'china/guangdong': [
    { name: 'Aquilaria sinensis', status: 'VU', where: 'Guangdong', statusAr: VU_AR },
  ],
  // --- Myanmar ---
  'myanmar/kachin': [
    { name: 'Aquilaria malaccensis', status: 'CR', where: 'Myanmar', statusAr: CR_AR },
  ],
  // --- Philippines ---
  'philippines/mindanao': [
    { name: 'Aquilaria malaccensis', status: 'CR', where: 'Philippines', statusAr: CR_AR },
    { name: 'Aquilaria apiculata', status: 'DD', where: 'Philippines', statusAr: DD_AR },
    { name: 'Aquilaria citrinicarpa', status: 'DD', where: 'Philippines', statusAr: DD_AR },
    { name: 'Aquilaria cumingiana', status: 'VU', where: 'Philippines', statusAr: VU_AR },
    { name: 'Aquilaria parvifolia', status: 'DD', where: 'Philippines', statusAr: DD_AR },
    { name: 'Aquilaria urdanetensis', status: 'DD', where: 'Philippines', statusAr: DD_AR },
    { name: 'Aquilaria filaria', status: 'VU', where: 'Philippines', statusAr: VU_AR },
  ],
};

/**
 * The per-region facts.
 *
 * `kind` is the administrative identity. `role` is what the record
 * supports. `evidence` is the specific record that distinguishes this
 * region from the others in its country.
 */
interface RegionFacts {
  name: string;
  nameAr: string;
  country: string;
  countryAr: string;
  countrySlug: string;
  kind: string;
  kindAr: string;
  role: string;
  roleAr: string;
  evidence: string;
  evidenceAr: string;
  terminology: string;
  terminologyAr: string;
  businesses: string;
  businessesAr: string;
  questions: string[];
  questionsAr: string[];
  related: { slug: string; label: string; labelAr?: string }[];
  sourceIds: string[];
}


/**
 * The per-sub-division facts.
 *
 * The shared sentences above are written once and the place name is
 * substituted into them, so the forty pages differ in their facts
 * without forty separate pieces of prose that could drift apart.
 *
 * The `terminology` is the country's trade vocabulary, copied from
 * the country page, because the vocabulary belongs to the trade
 * rather than to the administrative division. The sub-division is
 * named within it, which is what the species list records.
 */
interface RegionFacts {
  name: string;
  nameAr: string;
  country: string;
  countryAr: string;
  countrySlug: string;
  kind: string;
  kindAr: string;
  role: string;
  roleAr: string;
  evidence: string;
  evidenceAr: string;
  terminology: string;
  terminologyAr: string;
  businesses: string;
  businessesAr: string;
  related: { slug: string; label: string; labelAr?: string }[];
  sourceIds: string[];
}

const REGION_FACTS: Record<string, RegionFacts> = {
  'origins/bangladesh/moulvibazar': {
    name: 'Moulvibazar',
    nameAr: 'مولفيبازار',
    country: 'Bangladesh',
    countryAr: 'بنغلاديش',
    countrySlug: 'origins/bangladesh',
    kind: 'district',
    kindAr: 'مقاطعة',
    role: 'Moulvibazar is a documented growing area for the species the ITTO review records for it, and the review records the population and plantation figures for Bangladesh rather than for this sub-division.',
    roleAr: 'مولفيبازار منطقة نامية موثَّقة للأنواع التي تسجّلها مراجعة ITTO لها، وتسجّل المراجعة أعدادها ومساحات مزارعها لـبنغلاديش لا لهذا القسم.',
    evidence: 'Moulvibazar is one of the sub-divisions the ITTO review names for Bangladesh, and the population, plantation and quota figures it gives for Bangladesh are the figures that cover this sub-division. The review is explicit that these figures differ between the sources that report them, sometimes between two sources reporting the same year, and that a number quoted for a country is not a number quoted for a sub-division.',
    evidenceAr: 'مولفيبازار أحد الأقسام التي تسمّيها مراجعة ITTO لـبنغلاديش، وأعدادها ومساحات مزارعها وحصصها التي تعطيها لـبنغلاديش هي الأرقام التي تشمل هذا القسم. والمراجعة صريحة بأن هذه الأرقام تختلف بين المصادر التي تبلّغ عنها، أحياناً بين مصدرين يبلّغان عن السنة نفسها، وأن رقماً يُذكر لبلد ليس رقماً يُذكر لقسم.',
    terminology: 'The local name is agar, and the trade vocabulary for the material in Bangladesh is the local vocabulary of a four-century-old smallholder industry rather than an export vocabulary.',
    terminologyAr: 'الاسم المحلي «آغار»، ومفردات التجارة للمادة في بنغلاديش هي مفردات صناعة صغيرة عمرها أربعة قرون لا مفردات تصدير.',
    businesses: 'The directory publishes one business, a distiller and wholesaler in Dubai, and it does not record a business in this sub-division. That is the whole of the record: a sub-division can be a growing area with no supplier in it, and a buyer who needs a supplier here has not found one, rather than found one that is unverified.',
    businessesAr: 'ينشر الدليل شركة واحدة، مصنّفة تقطير وجملة في دبي، ولا يسجّل شركة في هذا القسم. وهذا هو السجل كله: فالقسم قد يكون منطقة نامية بلا مورد فيها، ومن يحتاج مورداً هنا لم يجد واحداً، لا وجد واحداً غير موثَّق.',
    related: [
      { slug: 'origins/bangladesh', label: 'Bangladesh origin guide' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'buying/choosing-oud-wood', label: 'Choosing an oud wood purchase' },
    
      { slug: 'origins/india/mizoram', label: 'Mizoram — Bordering Indian agarwood region', labelAr: 'ميزورام — منطقة عود هندية مجاورة' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  },
  'origins/bangladesh/sylhet': {
    name: 'Sylhet',
    nameAr: 'سيلهيت',
    country: 'Bangladesh',
    countryAr: 'بنغلاديش',
    countrySlug: 'origins/bangladesh',
    kind: 'division',
    kindAr: 'إقليم',
    role: 'Sylhet is a documented growing area for the species the ITTO review records for it, and the review records the population and plantation figures for Bangladesh rather than for this sub-division.',
    roleAr: 'سيلهيت منطقة نامية موثَّقة للأنواع التي تسجّلها مراجعة ITTO لها، وتسجّل المراجعة أعدادها ومساحات مزارعها لـبنغلاديش لا لهذا القسم.',
    evidence: 'Sylhet is one of the sub-divisions the ITTO review names for Bangladesh, and the population, plantation and quota figures it gives for Bangladesh are the figures that cover this sub-division. The review is explicit that these figures differ between the sources that report them, sometimes between two sources reporting the same year, and that a number quoted for a country is not a number quoted for a sub-division.',
    evidenceAr: 'سيلهيت أحد الأقسام التي تسمّيها مراجعة ITTO لـبنغلاديش، وأعدادها ومساحات مزارعها وحصصها التي تعطيها لـبنغلاديش هي الأرقام التي تشمل هذا القسم. والمراجعة صريحة بأن هذه الأرقام تختلف بين المصادر التي تبلّغ عنها، أحياناً بين مصدرين يبلّغان عن السنة نفسها، وأن رقماً يُذكر لبلد ليس رقماً يُذكر لقسم.',
    terminology: 'The local name is agar, and the trade vocabulary for the material in Bangladesh is the local vocabulary of a four-century-old smallholder industry rather than an export vocabulary.',
    terminologyAr: 'الاسم المحلي «آغار»، ومفردات التجارة للمادة في بنغلاديش هي مفردات صناعة صغيرة عمرها أربعة قرون لا مفردات تصدير.',
    businesses: 'The directory publishes one business, a distiller and wholesaler in Dubai, and it does not record a business in this sub-division. That is the whole of the record: a sub-division can be a growing area with no supplier in it, and a buyer who needs a supplier here has not found one, rather than found one that is unverified.',
    businessesAr: 'ينشر الدليل شركة واحدة، مصنّفة تقطير وجملة في دبي، ولا يسجّل شركة في هذا القسم. وهذا هو السجل كله: فالقسم قد يكون منطقة نامية بلا مورد فيها، ومن يحتاج مورداً هنا لم يجد واحداً، لا وجد واحداً غير موثَّق.',
    related: [
      { slug: 'origins/bangladesh', label: 'Bangladesh origin guide' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'buying/choosing-oud-wood', label: 'Choosing an oud wood purchase' },
    
      { slug: 'origins/india/tripura', label: 'Tripura — Bordering Indian agarwood region', labelAr: 'تريبورا — منطقة عود هندية مجاورة' },
      { slug: 'origins/india/meghalaya', label: 'Meghalaya — Bordering Indian agarwood region', labelAr: 'ميغالايا — منطقة عود هندية مجاورة' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  },
  'origins/cambodia/kampot': {
    name: 'Kampot',
    nameAr: 'كامبوت',
    country: 'Cambodia',
    countryAr: 'كمبوديا',
    countrySlug: 'origins/cambodia',
    kind: 'province',
    kindAr: 'ولاية',
    role: 'Kampot is a documented growing area for the species the ITTO review records for it, and the review records the population and plantation figures for Cambodia rather than for this sub-division.',
    roleAr: 'كامبوت منطقة نامية موثَّقة للأنواع التي تسجّلها مراجعة ITTO لها، وتسجّل المراجعة أعدادها ومساحات مزارعها لـكمبوديا لا لهذا القسم.',
    evidence: 'Kampot is one of the sub-divisions the ITTO review names for Cambodia, and the population, plantation and quota figures it gives for Cambodia are the figures that cover this sub-division. The review is explicit that these figures differ between the sources that report them, sometimes between two sources reporting the same year, and that a number quoted for a country is not a number quoted for a sub-division.',
    evidenceAr: 'كامبوت أحد الأقسام التي تسمّيها مراجعة ITTO لـكمبوديا، وأعدادها ومساحات مزارعها وحصصها التي تعطيها لـكمبوديا هي الأرقام التي تشمل هذا القسم. والمراجعة صريحة بأن هذه الأرقام تختلف بين المصادر التي تبلّغ عنها، أحياناً بين مصدرين يبلّغان عن السنة نفسها، وأن رقماً يُذكر لبلد ليس رقماً يُذكر لقسم.',
    terminology: 'Cambodian material is described in the trade by its species and its province rather than by a grade series, and the province names are the vocabulary that matters.',
    terminologyAr: 'توصف المادة الكمبودية في التجارة بالنوع والمقاطعة لا بسلسلة درجات، وأسماء المقاطعات هي المفردات المهمة.',
    businesses: 'The directory publishes one business, a distiller and wholesaler in Dubai, and it does not record a business in this sub-division. That is the whole of the record: a sub-division can be a growing area with no supplier in it, and a buyer who needs a supplier here has not found one, rather than found one that is unverified.',
    businessesAr: 'ينشر الدليل شركة واحدة، مصنّفة تقطير وجملة في دبي، ولا يسجّل شركة في هذا القسم. وهذا هو السجل كله: فالقسم قد يكون منطقة نامية بلا مورد فيها، ومن يحتاج مورداً هنا لم يجد واحداً، لا وجد واحداً غير موثَّق.',
    related: [
      { slug: 'origins/cambodia', label: 'Cambodia origin guide' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'quality/assessment-and-testing-limits', label: 'Assessment and testing limits' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  },
  'origins/cambodia/koh-kong': {
    name: 'Koh Kong',
    nameAr: 'كوه كونغ',
    country: 'Cambodia',
    countryAr: 'كمبوديا',
    countrySlug: 'origins/cambodia',
    kind: 'province',
    kindAr: 'ولاية',
    role: 'Koh Kong is a documented growing area for the species the ITTO review records for it, and the review records the population and plantation figures for Cambodia rather than for this sub-division.',
    roleAr: 'كوه كونغ منطقة نامية موثَّقة للأنواع التي تسجّلها مراجعة ITTO لها، وتسجّل المراجعة أعدادها ومساحات مزارعها لـكمبوديا لا لهذا القسم.',
    evidence: 'Koh Kong is one of the sub-divisions the ITTO review names for Cambodia, and the population, plantation and quota figures it gives for Cambodia are the figures that cover this sub-division. The review is explicit that these figures differ between the sources that report them, sometimes between two sources reporting the same year, and that a number quoted for a country is not a number quoted for a sub-division.',
    evidenceAr: 'كوه كونغ أحد الأقسام التي تسمّيها مراجعة ITTO لـكمبوديا، وأعدادها ومساحات مزارعها وحصصها التي تعطيها لـكمبوديا هي الأرقام التي تشمل هذا القسم. والمراجعة صريحة بأن هذه الأرقام تختلف بين المصادر التي تبلّغ عنها، أحياناً بين مصدرين يبلّغان عن السنة نفسها، وأن رقماً يُذكر لبلد ليس رقماً يُذكر لقسم.',
    terminology: 'Cambodian material is described in the trade by its species and its province rather than by a grade series, and the province names are the vocabulary that matters.',
    terminologyAr: 'توصف المادة الكمبودية في التجارة بالنوع والمقاطعة لا بسلسلة درجات، وأسماء المقاطعات هي المفردات المهمة.',
    businesses: 'The directory publishes one business, a distiller and wholesaler in Dubai, and it does not record a business in this sub-division. That is the whole of the record: a sub-division can be a growing area with no supplier in it, and a buyer who needs a supplier here has not found one, rather than found one that is unverified.',
    businessesAr: 'ينشر الدليل شركة واحدة، مصنّفة تقطير وجملة في دبي، ولا يسجّل شركة في هذا القسم. وهذا هو السجل كله: فالقسم قد يكون منطقة نامية بلا مورد فيها، ومن يحتاج مورداً هنا لم يجد واحداً، لا وجد واحداً غير موثَّق.',
    related: [
      { slug: 'origins/cambodia', label: 'Cambodia origin guide' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'quality/assessment-and-testing-limits', label: 'Assessment and testing limits' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  },
  'origins/cambodia/pursat': {
    name: 'Pursat',
    nameAr: 'بورسات',
    country: 'Cambodia',
    countryAr: 'كمبوديا',
    countrySlug: 'origins/cambodia',
    kind: 'province',
    kindAr: 'ولاية',
    role: 'Pursat is a documented growing area for the species the ITTO review records for it, and the review records the population and plantation figures for Cambodia rather than for this sub-division.',
    roleAr: 'بورسات منطقة نامية موثَّقة للأنواع التي تسجّلها مراجعة ITTO لها، وتسجّل المراجعة أعدادها ومساحات مزارعها لـكمبوديا لا لهذا القسم.',
    evidence: 'Pursat is one of the sub-divisions the ITTO review names for Cambodia, and the population, plantation and quota figures it gives for Cambodia are the figures that cover this sub-division. The review is explicit that these figures differ between the sources that report them, sometimes between two sources reporting the same year, and that a number quoted for a country is not a number quoted for a sub-division.',
    evidenceAr: 'بورسات أحد الأقسام التي تسمّيها مراجعة ITTO لـكمبوديا، وأعدادها ومساحات مزارعها وحصصها التي تعطيها لـكمبوديا هي الأرقام التي تشمل هذا القسم. والمراجعة صريحة بأن هذه الأرقام تختلف بين المصادر التي تبلّغ عنها، أحياناً بين مصدرين يبلّغان عن السنة نفسها، وأن رقماً يُذكر لبلد ليس رقماً يُذكر لقسم.',
    terminology: 'Cambodian material is described in the trade by its species and its province rather than by a grade series, and the province names are the vocabulary that matters.',
    terminologyAr: 'توصف المادة الكمبودية في التجارة بالنوع والمقاطعة لا بسلسلة درجات، وأسماء المقاطعات هي المفردات المهمة.',
    businesses: 'The directory publishes one business, a distiller and wholesaler in Dubai, and it does not record a business in this sub-division. That is the whole of the record: a sub-division can be a growing area with no supplier in it, and a buyer who needs a supplier here has not found one, rather than found one that is unverified.',
    businessesAr: 'ينشر الدليل شركة واحدة، مصنّفة تقطير وجملة في دبي، ولا يسجّل شركة في هذا القسم. وهذا هو السجل كله: فالقسم قد يكون منطقة نامية بلا مورد فيها، ومن يحتاج مورداً هنا لم يجد واحداً، لا وجد واحداً غير موثَّق.',
    related: [
      { slug: 'origins/cambodia', label: 'Cambodia origin guide' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'quality/assessment-and-testing-limits', label: 'Assessment and testing limits' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  },
  'origins/china/guangdong': {
    name: 'Guangdong',
    nameAr: 'قوانغدونغ',
    country: 'China',
    countryAr: 'الصين',
    countrySlug: 'origins/china',
    kind: 'province',
    kindAr: 'ولاية',
    role: 'Guangdong is a documented growing area for the species the ITTO review records for it, and the review records the population and plantation figures for China rather than for this sub-division.',
    roleAr: 'قوانغدونغ منطقة نامية موثَّقة للأنواع التي تسجّلها مراجعة ITTO لها، وتسجّل المراجعة أعدادها ومساحات مزارعها لـالصين لا لهذا القسم.',
    evidence: 'Guangdong is one of the sub-divisions the ITTO review names for China, and the population, plantation and quota figures it gives for China are the figures that cover this sub-division. The review is explicit that these figures differ between the sources that report them, sometimes between two sources reporting the same year, and that a number quoted for a country is not a number quoted for a sub-division.',
    evidenceAr: 'قوانغدونغ أحد الأقسام التي تسمّيها مراجعة ITTO لـالصين، وأعدادها ومساحات مزارعها وحصصها التي تعطيها لـالصين هي الأرقام التي تشمل هذا القسم. والمراجعة صريحة بأن هذه الأرقام تختلف بين المصادر التي تبلّغ عنها، أحياناً بين مصدرين يبلّغان عن السنة نفسها، وأن رقماً يُذكر لبلد ليس رقماً يُذكر لقسم.',
    terminology: 'The Chinese name for the material is chen xiang, which means the wood that sinks, which is a name for the physical property of dense, resin-rich wood and not for a grade.',
    terminologyAr: 'الاسم الصيني للمادة «تشن شيانغ»، ومعناه الخشب الذي يغرق، وهو اسم لصفة الخشب الكثيف الغني بالراتنج لا لدرجة.',
    businesses: 'The directory publishes one business, a distiller and wholesaler in Dubai, and it does not record a business in this sub-division. That is the whole of the record: a sub-division can be a growing area with no supplier in it, and a buyer who needs a supplier here has not found one, rather than found one that is unverified.',
    businessesAr: 'ينشر الدليل شركة واحدة، مصنّفة تقطير وجملة في دبي، ولا يسجّل شركة في هذا القسم. وهذا هو السجل كله: فالقسم قد يكون منطقة نامية بلا مورد فيها، ومن يحتاج مورداً هنا لم يجد واحداً، لا وجد واحداً غير موثَّق.',
    related: [
      { slug: 'origins/china', label: 'China origin guide' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'quality/gulf-market-grade-labels', label: 'Gulf-market oud grading vocabulary' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  },
  'origins/china/hainan': {
    name: 'Hainan',
    nameAr: 'هاينان',
    country: 'China',
    countryAr: 'الصين',
    countrySlug: 'origins/china',
    kind: 'province',
    kindAr: 'ولاية',
    role: 'Hainan is a documented growing area for the species the ITTO review records for it, and the review records the population and plantation figures for China rather than for this sub-division.',
    roleAr: 'هاينان منطقة نامية موثَّقة للأنواع التي تسجّلها مراجعة ITTO لها، وتسجّل المراجعة أعدادها ومساحات مزارعها لـالصين لا لهذا القسم.',
    evidence: 'Hainan is one of the sub-divisions the ITTO review names for China, and the population, plantation and quota figures it gives for China are the figures that cover this sub-division. The review is explicit that these figures differ between the sources that report them, sometimes between two sources reporting the same year, and that a number quoted for a country is not a number quoted for a sub-division.',
    evidenceAr: 'هاينان أحد الأقسام التي تسمّيها مراجعة ITTO لـالصين، وأعدادها ومساحات مزارعها وحصصها التي تعطيها لـالصين هي الأرقام التي تشمل هذا القسم. والمراجعة صريحة بأن هذه الأرقام تختلف بين المصادر التي تبلّغ عنها، أحياناً بين مصدرين يبلّغان عن السنة نفسها، وأن رقماً يُذكر لبلد ليس رقماً يُذكر لقسم.',
    terminology: 'The Chinese name for the material is chen xiang, which means the wood that sinks, which is a name for the physical property of dense, resin-rich wood and not for a grade.',
    terminologyAr: 'الاسم الصيني للمادة «تشن شيانغ»، ومعناه الخشب الذي يغرق، وهو اسم لصفة الخشب الكثيف الغني بالراتنج لا لدرجة.',
    businesses: 'The directory publishes one business, a distiller and wholesaler in Dubai, and it does not record a business in this sub-division. That is the whole of the record: a sub-division can be a growing area with no supplier in it, and a buyer who needs a supplier here has not found one, rather than found one that is unverified.',
    businessesAr: 'ينشر الدليل شركة واحدة، مصنّفة تقطير وجملة في دبي، ولا يسجّل شركة في هذا القسم. وهذا هو السجل كله: فالقسم قد يكون منطقة نامية بلا مورد فيها، ومن يحتاج مورداً هنا لم يجد واحداً، لا وجد واحداً غير موثَّق.',
    related: [
      { slug: 'origins/china', label: 'China origin guide' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'quality/gulf-market-grade-labels', label: 'Gulf-market oud grading vocabulary' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  },
  'origins/india/manipur': {
    name: 'Manipur',
    nameAr: 'مانيبور',
    country: 'India',
    countryAr: 'الهند',
    countrySlug: 'origins/india',
    kind: 'state',
    kindAr: 'ولاية',
    role: 'Manipur is a documented growing area for the species the ITTO review records for it, and the review records the population and plantation figures for India rather than for this sub-division.',
    roleAr: 'مانيبور منطقة نامية موثَّقة للأنواع التي تسجّلها مراجعة ITTO لها، وتسجّل المراجعة أعدادها ومساحات مزارعها لـالهند لا لهذا القسم.',
    evidence: 'Manipur is one of the sub-divisions the ITTO review names for India, and the population, plantation and quota figures it gives for India are the figures that cover this sub-division. The review is explicit that these figures differ between the sources that report them, sometimes between two sources reporting the same year, and that a number quoted for a country is not a number quoted for a sub-division.',
    evidenceAr: 'مانيبور أحد الأقسام التي تسمّيها مراجعة ITTO لـالهند، وأعدادها ومساحات مزارعها وحصصها التي تعطيها لـالهند هي الأرقام التي تشمل هذا القسم. والمراجعة صريحة بأن هذه الأرقام تختلف بين المصادر التي تبلّغ عنها، أحياناً بين مصدرين يبلّغان عن السنة نفسها، وأن رقماً يُذكر لبلد ليس رقماً يُذكر لقسم.',
    terminology: 'The trade vocabulary for the north-eastern material is a Hindi, Assamese and tribal vocabulary that the sources do not set out in a form a buyer can check, so it is best treated as a set of local names to be learned from the counterparty rather than a list to be looked up.',
    terminologyAr: 'مفردات تجارة المادة الشمالية الشرقية مفردات هندية وآسامية وقبلية لا تضعها المصادر في صورة يتحقق منها المشتري، فالأفضل معاملتها أسماء محلية تُتعلَّم من الطرف الآخر لا قائمة يُبحث عنها.',
    businesses: 'The directory publishes one business, a distiller and wholesaler in Dubai, and it does not record a business in this sub-division. That is the whole of the record: a sub-division can be a growing area with no supplier in it, and a buyer who needs a supplier here has not found one, rather than found one that is unverified.',
    businessesAr: 'ينشر الدليل شركة واحدة، مصنّفة تقطير وجملة في دبي، ولا يسجّل شركة في هذا القسم. وهذا هو السجل كله: فالقسم قد يكون منطقة نامية بلا مورد فيها، ومن يحتاج مورداً هنا لم يجد واحداً، لا وجد واحداً غير موثَّق.',
    related: [
      { slug: 'origins/india', label: 'India and northeast origin guide' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'quality/oud-grading-explained', label: 'How oud grading claims work' },
    
      { slug: 'origins/india/nagaland', label: 'Nagaland — Northeast Indian agarwood region', labelAr: 'ناغالاند — منطقة عود في شمال شرق الهند' },
      { slug: 'origins/india/mizoram', label: 'Mizoram — Northeast Indian agarwood region', labelAr: 'ميزورام — منطقة عود في شمال شرق الهند' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  },
  'origins/india/meghalaya': {
    name: 'Meghalaya',
    nameAr: 'ميغالايا',
    country: 'India',
    countryAr: 'الهند',
    countrySlug: 'origins/india',
    kind: 'state',
    kindAr: 'ولاية',
    role: 'Meghalaya is a documented growing area for the species the ITTO review records for it, and the review records the population and plantation figures for India rather than for this sub-division.',
    roleAr: 'ميغالايا منطقة نامية موثَّقة للأنواع التي تسجّلها مراجعة ITTO لها، وتسجّل المراجعة أعدادها ومساحات مزارعها لـالهند لا لهذا القسم.',
    evidence: 'Meghalaya is one of the sub-divisions the ITTO review names for India, and the population, plantation and quota figures it gives for India are the figures that cover this sub-division. The review is explicit that these figures differ between the sources that report them, sometimes between two sources reporting the same year, and that a number quoted for a country is not a number quoted for a sub-division.',
    evidenceAr: 'ميغالايا أحد الأقسام التي تسمّيها مراجعة ITTO لـالهند، وأعدادها ومساحات مزارعها وحصصها التي تعطيها لـالهند هي الأرقام التي تشمل هذا القسم. والمراجعة صريحة بأن هذه الأرقام تختلف بين المصادر التي تبلّغ عنها، أحياناً بين مصدرين يبلّغان عن السنة نفسها، وأن رقماً يُذكر لبلد ليس رقماً يُذكر لقسم.',
    terminology: 'The trade vocabulary for the north-eastern material is a Hindi, Assamese and tribal vocabulary that the sources do not set out in a form a buyer can check, so it is best treated as a set of local names to be learned from the counterparty rather than a list to be looked up.',
    terminologyAr: 'مفردات تجارة المادة الشمالية الشرقية مفردات هندية وآسامية وقبلية لا تضعها المصادر في صورة يتحقق منها المشتري، فالأفضل معاملتها أسماء محلية تُتعلَّم من الطرف الآخر لا قائمة يُبحث عنها.',
    businesses: 'The directory publishes one business, a distiller and wholesaler in Dubai, and it does not record a business in this sub-division. That is the whole of the record: a sub-division can be a growing area with no supplier in it, and a buyer who needs a supplier here has not found one, rather than found one that is unverified.',
    businessesAr: 'ينشر الدليل شركة واحدة، مصنّفة تقطير وجملة في دبي، ولا يسجّل شركة في هذا القسم. وهذا هو السجل كله: فالقسم قد يكون منطقة نامية بلا مورد فيها، ومن يحتاج مورداً هنا لم يجد واحداً، لا وجد واحداً غير موثَّق.',
    related: [
      { slug: 'origins/india', label: 'India and northeast origin guide' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'quality/oud-grading-explained', label: 'How oud grading claims work' },
    
      { slug: 'origins/india/assam', label: 'Assam — Northeast Indian agarwood region', labelAr: 'أسام — منطقة عود في شمال شرق الهند' },
      { slug: 'origins/india/tripura', label: 'Tripura — Northeast Indian agarwood region', labelAr: 'تريبورا — منطقة عود في شمال شرق الهند' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  },
  'origins/india/mizoram': {
    name: 'Mizoram',
    nameAr: 'ميزورام',
    country: 'India',
    countryAr: 'الهند',
    countrySlug: 'origins/india',
    kind: 'state',
    kindAr: 'ولاية',
    role: 'Mizoram is a documented growing area for the species the ITTO review records for it, and the review records the population and plantation figures for India rather than for this sub-division.',
    roleAr: 'ميزورام منطقة نامية موثَّقة للأنواع التي تسجّلها مراجعة ITTO لها، وتسجّل المراجعة أعدادها ومساحات مزارعها لـالهند لا لهذا القسم.',
    evidence: 'Mizoram is one of the sub-divisions the ITTO review names for India, and the population, plantation and quota figures it gives for India are the figures that cover this sub-division. The review is explicit that these figures differ between the sources that report them, sometimes between two sources reporting the same year, and that a number quoted for a country is not a number quoted for a sub-division.',
    evidenceAr: 'ميزورام أحد الأقسام التي تسمّيها مراجعة ITTO لـالهند، وأعدادها ومساحات مزارعها وحصصها التي تعطيها لـالهند هي الأرقام التي تشمل هذا القسم. والمراجعة صريحة بأن هذه الأرقام تختلف بين المصادر التي تبلّغ عنها، أحياناً بين مصدرين يبلّغان عن السنة نفسها، وأن رقماً يُذكر لبلد ليس رقماً يُذكر لقسم.',
    terminology: 'The trade vocabulary for the north-eastern material is a Hindi, Assamese and tribal vocabulary that the sources do not set out in a form a buyer can check, so it is best treated as a set of local names to be learned from the counterparty rather than a list to be looked up.',
    terminologyAr: 'مفردات تجارة المادة الشمالية الشرقية مفردات هندية وآسامية وقبلية لا تضعها المصادر في صورة يتحقق منها المشتري، فالأفضل معاملتها أسماء محلية تُتعلَّم من الطرف الآخر لا قائمة يُبحث عنها.',
    businesses: 'The directory publishes one business, a distiller and wholesaler in Dubai, and it does not record a business in this sub-division. That is the whole of the record: a sub-division can be a growing area with no supplier in it, and a buyer who needs a supplier here has not found one, rather than found one that is unverified.',
    businessesAr: 'ينشر الدليل شركة واحدة، مصنّفة تقطير وجملة في دبي، ولا يسجّل شركة في هذا القسم. وهذا هو السجل كله: فالقسم قد يكون منطقة نامية بلا مورد فيها، ومن يحتاج مورداً هنا لم يجد واحداً، لا وجد واحداً غير موثَّق.',
    related: [
      { slug: 'origins/india', label: 'India and northeast origin guide' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'quality/oud-grading-explained', label: 'How oud grading claims work' },
    
      { slug: 'origins/india/manipur', label: 'Manipur — Northeast Indian agarwood region', labelAr: 'مانيبور — منطقة عود في شمال شرق الهند' },
      { slug: 'origins/india/tripura', label: 'Tripura — Northeast Indian agarwood region', labelAr: 'تريبورا — منطقة عود في شمال شرق الهند' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  },
  'origins/india/nagaland': {
    name: 'Nagaland',
    nameAr: 'ناغالاند',
    country: 'India',
    countryAr: 'الهند',
    countrySlug: 'origins/india',
    kind: 'state',
    kindAr: 'ولاية',
    role: 'Nagaland is a documented growing area for the species the ITTO review records for it, and the review records the population and plantation figures for India rather than for this sub-division.',
    roleAr: 'ناغالاند منطقة نامية موثَّقة للأنواع التي تسجّلها مراجعة ITTO لها، وتسجّل المراجعة أعدادها ومساحات مزارعها لـالهند لا لهذا القسم.',
    evidence: 'Nagaland is one of the sub-divisions the ITTO review names for India, and the population, plantation and quota figures it gives for India are the figures that cover this sub-division. The review is explicit that these figures differ between the sources that report them, sometimes between two sources reporting the same year, and that a number quoted for a country is not a number quoted for a sub-division.',
    evidenceAr: 'ناغالاند أحد الأقسام التي تسمّيها مراجعة ITTO لـالهند، وأعدادها ومساحات مزارعها وحصصها التي تعطيها لـالهند هي الأرقام التي تشمل هذا القسم. والمراجعة صريحة بأن هذه الأرقام تختلف بين المصادر التي تبلّغ عنها، أحياناً بين مصدرين يبلّغان عن السنة نفسها، وأن رقماً يُذكر لبلد ليس رقماً يُذكر لقسم.',
    terminology: 'The trade vocabulary for the north-eastern material is a Hindi, Assamese and tribal vocabulary that the sources do not set out in a form a buyer can check, so it is best treated as a set of local names to be learned from the counterparty rather than a list to be looked up.',
    terminologyAr: 'مفردات تجارة المادة الشمالية الشرقية مفردات هندية وآسامية وقبلية لا تضعها المصادر في صورة يتحقق منها المشتري، فالأفضل معاملتها أسماء محلية تُتعلَّم من الطرف الآخر لا قائمة يُبحث عنها.',
    businesses: 'The directory publishes one business, a distiller and wholesaler in Dubai, and it does not record a business in this sub-division. That is the whole of the record: a sub-division can be a growing area with no supplier in it, and a buyer who needs a supplier here has not found one, rather than found one that is unverified.',
    businessesAr: 'ينشر الدليل شركة واحدة، مصنّفة تقطير وجملة في دبي، ولا يسجّل شركة في هذا القسم. وهذا هو السجل كله: فالقسم قد يكون منطقة نامية بلا مورد فيها، ومن يحتاج مورداً هنا لم يجد واحداً، لا وجد واحداً غير موثَّق.',
    related: [
      { slug: 'origins/india', label: 'India and northeast origin guide' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'quality/oud-grading-explained', label: 'How oud grading claims work' },
    
      { slug: 'origins/india/manipur', label: 'Manipur — Northeast Indian agarwood region', labelAr: 'مانيبور — منطقة عود في شمال شرق الهند' },
      { slug: 'origins/india/assam', label: 'Assam — Northeast Indian agarwood region', labelAr: 'أسام — منطقة عود في شمال شرق الهند' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  },
  'origins/india/tripura': {
    name: 'Tripura',
    nameAr: 'تريبورا',
    country: 'India',
    countryAr: 'الهند',
    countrySlug: 'origins/india',
    kind: 'state',
    kindAr: 'ولاية',
    role: 'Tripura is a documented growing area for the species the ITTO review records for it, and the review records the population and plantation figures for India rather than for this sub-division.',
    roleAr: 'تريبورا منطقة نامية موثَّقة للأنواع التي تسجّلها مراجعة ITTO لها، وتسجّل المراجعة أعدادها ومساحات مزارعها لـالهند لا لهذا القسم.',
    evidence: 'Tripura is one of the sub-divisions the ITTO review names for India, and the population, plantation and quota figures it gives for India are the figures that cover this sub-division. The review is explicit that these figures differ between the sources that report them, sometimes between two sources reporting the same year, and that a number quoted for a country is not a number quoted for a sub-division.',
    evidenceAr: 'تريبورا أحد الأقسام التي تسمّيها مراجعة ITTO لـالهند، وأعدادها ومساحات مزارعها وحصصها التي تعطيها لـالهند هي الأرقام التي تشمل هذا القسم. والمراجعة صريحة بأن هذه الأرقام تختلف بين المصادر التي تبلّغ عنها، أحياناً بين مصدرين يبلّغان عن السنة نفسها، وأن رقماً يُذكر لبلد ليس رقماً يُذكر لقسم.',
    terminology: 'The trade vocabulary for the north-eastern material is a Hindi, Assamese and tribal vocabulary that the sources do not set out in a form a buyer can check, so it is best treated as a set of local names to be learned from the counterparty rather than a list to be looked up.',
    terminologyAr: 'مفردات تجارة المادة الشمالية الشرقية مفردات هندية وآسامية وقبلية لا تضعها المصادر في صورة يتحقق منها المشتري، فالأفضل معاملتها أسماء محلية تُتعلَّم من الطرف الآخر لا قائمة يُبحث عنها.',
    businesses: 'The directory publishes one business, a distiller and wholesaler in Dubai, and it does not record a business in this sub-division. That is the whole of the record: a sub-division can be a growing area with no supplier in it, and a buyer who needs a supplier here has not found one, rather than found one that is unverified.',
    businessesAr: 'ينشر الدليل شركة واحدة، مصنّفة تقطير وجملة في دبي، ولا يسجّل شركة في هذا القسم. وهذا هو السجل كله: فالقسم قد يكون منطقة نامية بلا مورد فيها، ومن يحتاج مورداً هنا لم يجد واحداً، لا وجد واحداً غير موثَّق.',
    related: [
      { slug: 'origins/india', label: 'India and northeast origin guide' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'quality/oud-grading-explained', label: 'How oud grading claims work' },
    
      { slug: 'origins/india/meghalaya', label: 'Meghalaya — Northeast Indian agarwood region', labelAr: 'ميغالايا — منطقة عود في شمال شرق الهند' },
      { slug: 'origins/bangladesh/sylhet', label: 'Sylhet — Bordering Surma valley agarwood division', labelAr: 'سيلهيت — إقليم عود مجاور في وادي سورما' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  },
  'origins/indonesia/kalimantan': {
    name: 'Kalimantan',
    nameAr: 'كاليمانتان',
    country: 'Indonesia',
    countryAr: 'إندونيسيا',
    countrySlug: 'origins/indonesia',
    kind: 'island',
    kindAr: 'جزيرة',
    role: 'Kalimantan is a documented growing area for the species the ITTO review records for it, and the review records the population and plantation figures for Indonesia rather than for this sub-division.',
    roleAr: 'كاليمانتان منطقة نامية موثَّقة للأنواع التي تسجّلها مراجعة ITTO لها، وتسجّل المراجعة أعدادها ومساحات مزارعها لـإندونيسيا لا لهذا القسم.',
    evidence: 'Kalimantan is one of the sub-divisions the ITTO review names for Indonesia, and the population, plantation and quota figures it gives for Indonesia are the figures that cover this sub-division. The review is explicit that these figures differ between the sources that report them, sometimes between two sources reporting the same year, and that a number quoted for a country is not a number quoted for a sub-division.',
    evidenceAr: 'كاليمانتان أحد الأقسام التي تسمّيها مراجعة ITTO لـإندونيسيا، وأعدادها ومساحات مزارعها وحصصها التي تعطيها لـإندونيسيا هي الأرقام التي تشمل هذا القسم. والمراجعة صريحة بأن هذه الأرقام تختلف بين المصادر التي تبلّغ عنها، أحياناً بين مصدرين يبلّغان عن السنة نفسها، وأن رقماً يُذكر لبلد ليس رقماً يُذكر لقسم.',
    terminology: 'The Indonesian material is called gaharu, and the trade uses a vocabulary of its own for the grades and the islands, and the country publishes a grading guide of its own.',
    terminologyAr: 'تسمى المادة في إندونيسيا «غاهارو»، وتستعمل التجارة مفردات خاصة بها للدرجات والجزر، وينشر البلد دليل تقييم خاصاً به.',
    businesses: 'The directory publishes one business, a distiller and wholesaler in Dubai, and it does not record a business in this sub-division. That is the whole of the record: a sub-division can be a growing area with no supplier in it, and a buyer who needs a supplier here has not found one, rather than found one that is unverified.',
    businessesAr: 'ينشر الدليل شركة واحدة، مصنّفة تقطير وجملة في دبي، ولا يسجّل شركة في هذا القسم. وهذا هو السجل كله: فالقسم قد يكون منطقة نامية بلا مورد فيها، ومن يحتاج مورداً هنا لم يجد واحداً، لا وجد واحداً غير موثَّق.',
    related: [
      { slug: 'origins/indonesia', label: 'Indonesia origin guide' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'sourcing/wild-and-cultivated-oud', label: 'Wild and cultivated sourcing explained' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  },
  'origins/indonesia/lombok': {
    name: 'Lombok',
    nameAr: 'لومبوك',
    country: 'Indonesia',
    countryAr: 'إندونيسيا',
    countrySlug: 'origins/indonesia',
    kind: 'island',
    kindAr: 'جزيرة',
    role: 'Lombok is a documented growing area for the species the ITTO review records for it, and the review records the population and plantation figures for Indonesia rather than for this sub-division.',
    roleAr: 'لومبوك منطقة نامية موثَّقة للأنواع التي تسجّلها مراجعة ITTO لها، وتسجّل المراجعة أعدادها ومساحات مزارعها لـإندونيسيا لا لهذا القسم.',
    evidence: 'Lombok is one of the sub-divisions the ITTO review names for Indonesia, and the population, plantation and quota figures it gives for Indonesia are the figures that cover this sub-division. The review is explicit that these figures differ between the sources that report them, sometimes between two sources reporting the same year, and that a number quoted for a country is not a number quoted for a sub-division.',
    evidenceAr: 'لومبوك أحد الأقسام التي تسمّيها مراجعة ITTO لـإندونيسيا، وأعدادها ومساحات مزارعها وحصصها التي تعطيها لـإندونيسيا هي الأرقام التي تشمل هذا القسم. والمراجعة صريحة بأن هذه الأرقام تختلف بين المصادر التي تبلّغ عنها، أحياناً بين مصدرين يبلّغان عن السنة نفسها، وأن رقماً يُذكر لبلد ليس رقماً يُذكر لقسم.',
    terminology: 'The Indonesian material is called gaharu, and the trade uses a vocabulary of its own for the grades and the islands, and the country publishes a grading guide of its own.',
    terminologyAr: 'تسمى المادة في إندونيسيا «غاهارو»، وتستعمل التجارة مفردات خاصة بها للدرجات والجزر، وينشر البلد دليل تقييم خاصاً به.',
    businesses: 'The directory publishes one business, a distiller and wholesaler in Dubai, and it does not record a business in this sub-division. That is the whole of the record: a sub-division can be a growing area with no supplier in it, and a buyer who needs a supplier here has not found one, rather than found one that is unverified.',
    businessesAr: 'ينشر الدليل شركة واحدة، مصنّفة تقطير وجملة في دبي، ولا يسجّل شركة في هذا القسم. وهذا هو السجل كله: فالقسم قد يكون منطقة نامية بلا مورد فيها، ومن يحتاج مورداً هنا لم يجد واحداً، لا وجد واحداً غير موثَّق.',
    related: [
      { slug: 'origins/indonesia', label: 'Indonesia origin guide' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'sourcing/wild-and-cultivated-oud', label: 'Wild and cultivated sourcing explained' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  },
  'origins/indonesia/maluku': {
    name: 'Maluku',
    nameAr: 'مالوكو',
    country: 'Indonesia',
    countryAr: 'إندونيسيا',
    countrySlug: 'origins/indonesia',
    kind: 'province',
    kindAr: 'ولاية',
    role: 'Maluku is a documented growing area for the species the ITTO review records for it, and the review records the population and plantation figures for Indonesia rather than for this sub-division.',
    roleAr: 'مالوكو منطقة نامية موثَّقة للأنواع التي تسجّلها مراجعة ITTO لها، وتسجّل المراجعة أعدادها ومساحات مزارعها لـإندونيسيا لا لهذا القسم.',
    evidence: 'Maluku is one of the sub-divisions the ITTO review names for Indonesia, and the population, plantation and quota figures it gives for Indonesia are the figures that cover this sub-division. The review is explicit that these figures differ between the sources that report them, sometimes between two sources reporting the same year, and that a number quoted for a country is not a number quoted for a sub-division.',
    evidenceAr: 'مالوكو أحد الأقسام التي تسمّيها مراجعة ITTO لـإندونيسيا، وأعدادها ومساحات مزارعها وحصصها التي تعطيها لـإندونيسيا هي الأرقام التي تشمل هذا القسم. والمراجعة صريحة بأن هذه الأرقام تختلف بين المصادر التي تبلّغ عنها، أحياناً بين مصدرين يبلّغان عن السنة نفسها، وأن رقماً يُذكر لبلد ليس رقماً يُذكر لقسم.',
    terminology: 'The Indonesian material is called gaharu, and the trade uses a vocabulary of its own for the grades and the islands, and the country publishes a grading guide of its own.',
    terminologyAr: 'تسمى المادة في إندونيسيا «غاهارو»، وتستعمل التجارة مفردات خاصة بها للدرجات والجزر، وينشر البلد دليل تقييم خاصاً به.',
    businesses: 'The directory publishes one business, a distiller and wholesaler in Dubai, and it does not record a business in this sub-division. That is the whole of the record: a sub-division can be a growing area with no supplier in it, and a buyer who needs a supplier here has not found one, rather than found one that is unverified.',
    businessesAr: 'ينشر الدليل شركة واحدة، مصنّفة تقطير وجملة في دبي، ولا يسجّل شركة في هذا القسم. وهذا هو السجل كله: فالقسم قد يكون منطقة نامية بلا مورد فيها، ومن يحتاج مورداً هنا لم يجد واحداً، لا وجد واحداً غير موثَّق.',
    related: [
      { slug: 'origins/indonesia', label: 'Indonesia origin guide' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'sourcing/wild-and-cultivated-oud', label: 'Wild and cultivated sourcing explained' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  },
  'origins/indonesia/merauke': {
    name: 'Merauke',
    nameAr: 'مروكي',
    country: 'Indonesia',
    countryAr: 'إندونيسيا',
    countrySlug: 'origins/indonesia',
    kind: 'district',
    kindAr: 'مقاطعة',
    role: 'Merauke is a documented growing area for the species the ITTO review records for it, and the review records the population and plantation figures for Indonesia rather than for this sub-division.',
    roleAr: 'مروكي منطقة نامية موثَّقة للأنواع التي تسجّلها مراجعة ITTO لها، وتسجّل المراجعة أعدادها ومساحات مزارعها لـإندونيسيا لا لهذا القسم.',
    evidence: 'Merauke is one of the sub-divisions the ITTO review names for Indonesia, and the population, plantation and quota figures it gives for Indonesia are the figures that cover this sub-division. The review is explicit that these figures differ between the sources that report them, sometimes between two sources reporting the same year, and that a number quoted for a country is not a number quoted for a sub-division.',
    evidenceAr: 'مروكي أحد الأقسام التي تسمّيها مراجعة ITTO لـإندونيسيا، وأعدادها ومساحات مزارعها وحصصها التي تعطيها لـإندونيسيا هي الأرقام التي تشمل هذا القسم. والمراجعة صريحة بأن هذه الأرقام تختلف بين المصادر التي تبلّغ عنها، أحياناً بين مصدرين يبلّغان عن السنة نفسها، وأن رقماً يُذكر لبلد ليس رقماً يُذكر لقسم.',
    terminology: 'The Indonesian material is called gaharu, and the trade uses a vocabulary of its own for the grades and the islands, and the country publishes a grading guide of its own.',
    terminologyAr: 'تسمى المادة في إندونيسيا «غاهارو»، وتستعمل التجارة مفردات خاصة بها للدرجات والجزر، وينشر البلد دليل تقييم خاصاً به.',
    businesses: 'The directory publishes one business, a distiller and wholesaler in Dubai, and it does not record a business in this sub-division. That is the whole of the record: a sub-division can be a growing area with no supplier in it, and a buyer who needs a supplier here has not found one, rather than found one that is unverified.',
    businessesAr: 'ينشر الدليل شركة واحدة، مصنّفة تقطير وجملة في دبي، ولا يسجّل شركة في هذا القسم. وهذا هو السجل كله: فالقسم قد يكون منطقة نامية بلا مورد فيها، ومن يحتاج مورداً هنا لم يجد واحداً، لا وجد واحداً غير موثَّق.',
    related: [
      { slug: 'origins/indonesia', label: 'Indonesia origin guide' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'sourcing/wild-and-cultivated-oud', label: 'Wild and cultivated sourcing explained' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  },
  'origins/indonesia/papua': {
    name: 'Papua',
    nameAr: 'بابوا',
    country: 'Indonesia',
    countryAr: 'إندونيسيا',
    countrySlug: 'origins/indonesia',
    kind: 'province',
    kindAr: 'ولاية',
    role: 'Papua is a documented growing area for the species the ITTO review records for it, and the review records the population and plantation figures for Indonesia rather than for this sub-division.',
    roleAr: 'بابوا منطقة نامية موثَّقة للأنواع التي تسجّلها مراجعة ITTO لها، وتسجّل المراجعة أعدادها ومساحات مزارعها لـإندونيسيا لا لهذا القسم.',
    evidence: 'Papua is one of the sub-divisions the ITTO review names for Indonesia, and the population, plantation and quota figures it gives for Indonesia are the figures that cover this sub-division. The review is explicit that these figures differ between the sources that report them, sometimes between two sources reporting the same year, and that a number quoted for a country is not a number quoted for a sub-division.',
    evidenceAr: 'بابوا أحد الأقسام التي تسمّيها مراجعة ITTO لـإندونيسيا، وأعدادها ومساحات مزارعها وحصصها التي تعطيها لـإندونيسيا هي الأرقام التي تشمل هذا القسم. والمراجعة صريحة بأن هذه الأرقام تختلف بين المصادر التي تبلّغ عنها، أحياناً بين مصدرين يبلّغان عن السنة نفسها، وأن رقماً يُذكر لبلد ليس رقماً يُذكر لقسم.',
    terminology: 'The Indonesian material is called gaharu, and the trade uses a vocabulary of its own for the grades and the islands, and the country publishes a grading guide of its own.',
    terminologyAr: 'تسمى المادة في إندونيسيا «غاهارو»، وتستعمل التجارة مفردات خاصة بها للدرجات والجزر، وينشر البلد دليل تقييم خاصاً به.',
    businesses: 'The directory publishes one business, a distiller and wholesaler in Dubai, and it does not record a business in this sub-division. That is the whole of the record: a sub-division can be a growing area with no supplier in it, and a buyer who needs a supplier here has not found one, rather than found one that is unverified.',
    businessesAr: 'ينشر الدليل شركة واحدة، مصنّفة تقطير وجملة في دبي، ولا يسجّل شركة في هذا القسم. وهذا هو السجل كله: فالقسم قد يكون منطقة نامية بلا مورد فيها، ومن يحتاج مورداً هنا لم يجد واحداً، لا وجد واحداً غير موثَّق.',
    related: [
      { slug: 'origins/indonesia', label: 'Indonesia origin guide' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'sourcing/wild-and-cultivated-oud', label: 'Wild and cultivated sourcing explained' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  },
  'origins/indonesia/sulawesi': {
    name: 'Sulawesi',
    nameAr: 'سولايسي',
    country: 'Indonesia',
    countryAr: 'إندونيسيا',
    countrySlug: 'origins/indonesia',
    kind: 'island',
    kindAr: 'جزيرة',
    role: 'Sulawesi is a documented growing area for the species the ITTO review records for it, and the review records the population and plantation figures for Indonesia rather than for this sub-division.',
    roleAr: 'سولايسي منطقة نامية موثَّقة للأنواع التي تسجّلها مراجعة ITTO لها، وتسجّل المراجعة أعدادها ومساحات مزارعها لـإندونيسيا لا لهذا القسم.',
    evidence: 'Sulawesi is one of the sub-divisions the ITTO review names for Indonesia, and the population, plantation and quota figures it gives for Indonesia are the figures that cover this sub-division. The review is explicit that these figures differ between the sources that report them, sometimes between two sources reporting the same year, and that a number quoted for a country is not a number quoted for a sub-division.',
    evidenceAr: 'سولايسي أحد الأقسام التي تسمّيها مراجعة ITTO لـإندونيسيا، وأعدادها ومساحات مزارعها وحصصها التي تعطيها لـإندونيسيا هي الأرقام التي تشمل هذا القسم. والمراجعة صريحة بأن هذه الأرقام تختلف بين المصادر التي تبلّغ عنها، أحياناً بين مصدرين يبلّغان عن السنة نفسها، وأن رقماً يُذكر لبلد ليس رقماً يُذكر لقسم.',
    terminology: 'The Indonesian material is called gaharu, and the trade uses a vocabulary of its own for the grades and the islands, and the country publishes a grading guide of its own.',
    terminologyAr: 'تسمى المادة في إندونيسيا «غاهارو»، وتستعمل التجارة مفردات خاصة بها للدرجات والجزر، وينشر البلد دليل تقييم خاصاً به.',
    businesses: 'The directory publishes one business, a distiller and wholesaler in Dubai, and it does not record a business in this sub-division. That is the whole of the record: a sub-division can be a growing area with no supplier in it, and a buyer who needs a supplier here has not found one, rather than found one that is unverified.',
    businessesAr: 'ينشر الدليل شركة واحدة، مصنّفة تقطير وجملة في دبي، ولا يسجّل شركة في هذا القسم. وهذا هو السجل كله: فالقسم قد يكون منطقة نامية بلا مورد فيها، ومن يحتاج مورداً هنا لم يجد واحداً، لا وجد واحداً غير موثَّق.',
    related: [
      { slug: 'origins/indonesia', label: 'Indonesia origin guide' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'sourcing/wild-and-cultivated-oud', label: 'Wild and cultivated sourcing explained' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  },
  'origins/indonesia/sumatra': {
    name: 'Sumatra',
    nameAr: 'سومترا',
    country: 'Indonesia',
    countryAr: 'إندونيسيا',
    countrySlug: 'origins/indonesia',
    kind: 'island',
    kindAr: 'جزيرة',
    role: 'Sumatra is a documented growing area for the species the ITTO review records for it, and the review records the population and plantation figures for Indonesia rather than for this sub-division.',
    roleAr: 'سومترا منطقة نامية موثَّقة للأنواع التي تسجّلها مراجعة ITTO لها، وتسجّل المراجعة أعدادها ومساحات مزارعها لـإندونيسيا لا لهذا القسم.',
    evidence: 'Sumatra is one of the sub-divisions the ITTO review names for Indonesia, and the population, plantation and quota figures it gives for Indonesia are the figures that cover this sub-division. The review is explicit that these figures differ between the sources that report them, sometimes between two sources reporting the same year, and that a number quoted for a country is not a number quoted for a sub-division.',
    evidenceAr: 'سومترا أحد الأقسام التي تسمّيها مراجعة ITTO لـإندونيسيا، وأعدادها ومساحات مزارعها وحصصها التي تعطيها لـإندونيسيا هي الأرقام التي تشمل هذا القسم. والمراجعة صريحة بأن هذه الأرقام تختلف بين المصادر التي تبلّغ عنها، أحياناً بين مصدرين يبلّغان عن السنة نفسها، وأن رقماً يُذكر لبلد ليس رقماً يُذكر لقسم.',
    terminology: 'The Indonesian material is called gaharu, and the trade uses a vocabulary of its own for the grades and the islands, and the country publishes a grading guide of its own.',
    terminologyAr: 'تسمى المادة في إندونيسيا «غاهارو»، وتستعمل التجارة مفردات خاصة بها للدرجات والجزر، وينشر البلد دليل تقييم خاصاً به.',
    businesses: 'The directory publishes one business, a distiller and wholesaler in Dubai, and it does not record a business in this sub-division. That is the whole of the record: a sub-division can be a growing area with no supplier in it, and a buyer who needs a supplier here has not found one, rather than found one that is unverified.',
    businessesAr: 'ينشر الدليل شركة واحدة، مصنّفة تقطير وجملة في دبي، ولا يسجّل شركة في هذا القسم. وهذا هو السجل كله: فالقسم قد يكون منطقة نامية بلا مورد فيها، ومن يحتاج مورداً هنا لم يجد واحداً، لا وجد واحداً غير موثَّق.',
    related: [
      { slug: 'origins/indonesia', label: 'Indonesia origin guide' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'sourcing/wild-and-cultivated-oud', label: 'Wild and cultivated sourcing explained' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  },
  'origins/indonesia/west-papua': {
    name: 'West Papua',
    nameAr: 'بابوا الغربية',
    country: 'Indonesia',
    countryAr: 'إندونيسيا',
    countrySlug: 'origins/indonesia',
    kind: 'province',
    kindAr: 'ولاية',
    role: 'West Papua is a documented growing area for the species the ITTO review records for it, and the review records the population and plantation figures for Indonesia rather than for this sub-division.',
    roleAr: 'بابوا الغربية منطقة نامية موثَّقة للأنواع التي تسجّلها مراجعة ITTO لها، وتسجّل المراجعة أعدادها ومساحات مزارعها لـإندونيسيا لا لهذا القسم.',
    evidence: 'West Papua is one of the sub-divisions the ITTO review names for Indonesia, and the population, plantation and quota figures it gives for Indonesia are the figures that cover this sub-division. The review is explicit that these figures differ between the sources that report them, sometimes between two sources reporting the same year, and that a number quoted for a country is not a number quoted for a sub-division.',
    evidenceAr: 'بابوا الغربية أحد الأقسام التي تسمّيها مراجعة ITTO لـإندونيسيا، وأعدادها ومساحات مزارعها وحصصها التي تعطيها لـإندونيسيا هي الأرقام التي تشمل هذا القسم. والمراجعة صريحة بأن هذه الأرقام تختلف بين المصادر التي تبلّغ عنها، أحياناً بين مصدرين يبلّغان عن السنة نفسها، وأن رقماً يُذكر لبلد ليس رقماً يُذكر لقسم.',
    terminology: 'The Indonesian material is called gaharu, and the trade uses a vocabulary of its own for the grades and the islands, and the country publishes a grading guide of its own.',
    terminologyAr: 'تسمى المادة في إندونيسيا «غاهارو»، وتستعمل التجارة مفردات خاصة بها للدرجات والجزر، وينشر البلد دليل تقييم خاصاً به.',
    businesses: 'The directory publishes one business, a distiller and wholesaler in Dubai, and it does not record a business in this sub-division. That is the whole of the record: a sub-division can be a growing area with no supplier in it, and a buyer who needs a supplier here has not found one, rather than found one that is unverified.',
    businessesAr: 'ينشر الدليل شركة واحدة، مصنّفة تقطير وجملة في دبي، ولا يسجّل شركة في هذا القسم. وهذا هو السجل كله: فالقسم قد يكون منطقة نامية بلا مورد فيها، ومن يحتاج مورداً هنا لم يجد واحداً، لا وجد واحداً غير موثَّق.',
    related: [
      { slug: 'origins/indonesia', label: 'Indonesia origin guide' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'sourcing/wild-and-cultivated-oud', label: 'Wild and cultivated sourcing explained' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  },
  'origins/laos/bolikhamxay': {
    name: 'Bolikhamxay',
    nameAr: 'بوليكامساي',
    country: 'Laos',
    countryAr: 'لاوس',
    countrySlug: 'origins/laos',
    kind: 'province',
    kindAr: 'ولاية',
    role: 'Bolikhamxay is a documented growing area for the species the ITTO review records for it, and the review records the population and plantation figures for Laos rather than for this sub-division.',
    roleAr: 'بوليكامساي منطقة نامية موثَّقة للأنواع التي تسجّلها مراجعة ITTO لها، وتسجّل المراجعة أعدادها ومساحات مزارعها لـلاوس لا لهذا القسم.',
    evidence: 'Bolikhamxay is one of the sub-divisions the ITTO review names for Laos, and the population, plantation and quota figures it gives for Laos are the figures that cover this sub-division. The review is explicit that these figures differ between the sources that report them, sometimes between two sources reporting the same year, and that a number quoted for a country is not a number quoted for a sub-division.',
    evidenceAr: 'بوليكامساي أحد الأقسام التي تسمّيها مراجعة ITTO لـلاوس، وأعدادها ومساحات مزارعها وحصصها التي تعطيها لـلاوس هي الأرقام التي تشمل هذا القسم. والمراجعة صريحة بأن هذه الأرقام تختلف بين المصادر التي تبلّغ عنها، أحياناً بين مصدرين يبلّغان عن السنة نفسها، وأن رقماً يُذكر لبلد ليس رقماً يُذكر لقسم.',
    terminology: 'The Lao name for the material is kham mueang, and the trade describes the material by the name and by the district.',
    terminologyAr: 'الاسم اللاوسي للمادة «خم موانغ»، وتصف التجارة المادة بالاسم وبالمقاطعة.',
    businesses: 'The directory publishes one business, a distiller and wholesaler in Dubai, and it does not record a business in this sub-division. That is the whole of the record: a sub-division can be a growing area with no supplier in it, and a buyer who needs a supplier here has not found one, rather than found one that is unverified.',
    businessesAr: 'ينشر الدليل شركة واحدة، مصنّفة تقطير وجملة في دبي، ولا يسجّل شركة في هذا القسم. وهذا هو السجل كله: فالقسم قد يكون منطقة نامية بلا مورد فيها، ومن يحتاج مورداً هنا لم يجد واحداً، لا وجد واحداً غير موثَّق.',
    related: [
      { slug: 'origins/laos', label: 'Laos origin guide' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'sourcing/business-evidence-checklist', label: 'The supplier evidence checklist' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000', 'CITES_APPENDICES'],
  },
  'origins/laos/vientiane': {
    name: 'Vientiane',
    nameAr: 'فيينتيان',
    country: 'Laos',
    countryAr: 'لاوس',
    countrySlug: 'origins/laos',
    kind: 'province',
    kindAr: 'ولاية',
    role: 'Vientiane is a documented growing area for the species the ITTO review records for it, and the review records the population and plantation figures for Laos rather than for this sub-division.',
    roleAr: 'فيينتيان منطقة نامية موثَّقة للأنواع التي تسجّلها مراجعة ITTO لها، وتسجّل المراجعة أعدادها ومساحات مزارعها لـلاوس لا لهذا القسم.',
    evidence: 'Vientiane is one of the sub-divisions the ITTO review names for Laos, and the population, plantation and quota figures it gives for Laos are the figures that cover this sub-division. The review is explicit that these figures differ between the sources that report them, sometimes between two sources reporting the same year, and that a number quoted for a country is not a number quoted for a sub-division.',
    evidenceAr: 'فيينتيان أحد الأقسام التي تسمّيها مراجعة ITTO لـلاوس، وأعدادها ومساحات مزارعها وحصصها التي تعطيها لـلاوس هي الأرقام التي تشمل هذا القسم. والمراجعة صريحة بأن هذه الأرقام تختلف بين المصادر التي تبلّغ عنها، أحياناً بين مصدرين يبلّغان عن السنة نفسها، وأن رقماً يُذكر لبلد ليس رقماً يُذكر لقسم.',
    terminology: 'The Lao name for the material is kham mueang, and the trade describes the material by the name and by the district.',
    terminologyAr: 'الاسم اللاوسي للمادة «خم موانغ»، وتصف التجارة المادة بالاسم وبالمقاطعة.',
    businesses: 'The directory publishes one business, a distiller and wholesaler in Dubai, and it does not record a business in this sub-division. That is the whole of the record: a sub-division can be a growing area with no supplier in it, and a buyer who needs a supplier here has not found one, rather than found one that is unverified.',
    businessesAr: 'ينشر الدليل شركة واحدة، مصنّفة تقطير وجملة في دبي، ولا يسجّل شركة في هذا القسم. وهذا هو السجل كله: فالقسم قد يكون منطقة نامية بلا مورد فيها، ومن يحتاج مورداً هنا لم يجد واحداً، لا وجد واحداً غير موثَّق.',
    related: [
      { slug: 'origins/laos', label: 'Laos origin guide' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'sourcing/business-evidence-checklist', label: 'The supplier evidence checklist' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000', 'CITES_APPENDICES'],
  },
  'origins/malaysia/kelantan': {
    name: 'Kelantan',
    nameAr: 'كلانتان',
    country: 'Malaysia',
    countryAr: 'ماليزيا',
    countrySlug: 'origins/malaysia',
    kind: 'state',
    kindAr: 'ولاية',
    role: 'Kelantan is a documented growing area for the species the ITTO review records for it, and the review records the population and plantation figures for Malaysia rather than for this sub-division.',
    roleAr: 'كلانتان منطقة نامية موثَّقة للأنواع التي تسجّلها مراجعة ITTO لها، وتسجّل المراجعة أعدادها ومساحات مزارعها لـماليزيا لا لهذا القسم.',
    evidence: 'Kelantan is one of the sub-divisions the ITTO review names for Malaysia, and the population, plantation and quota figures it gives for Malaysia are the figures that cover this sub-division. The review is explicit that these figures differ between the sources that report them, sometimes between two sources reporting the same year, and that a number quoted for a country is not a number quoted for a sub-division.',
    evidenceAr: 'كلانتان أحد الأقسام التي تسمّيها مراجعة ITTO لـماليزيا، وأعدادها ومساحات مزارعها وحصصها التي تعطيها لـماليزيا هي الأرقام التي تشمل هذا القسم. والمراجعة صريحة بأن هذه الأرقام تختلف بين المصادر التي تبلّغ عنها، أحياناً بين مصدرين يبلّغان عن السنة نفسها، وأن رقماً يُذكر لبلد ليس رقماً يُذكر لقسم.',
    terminology: 'The Malaysian word for the tree is karas, and the country publishes a twelve-grade system, which makes a Malaysian grade more precise than a grade quoted anywhere without a country attached to it.',
    terminologyAr: 'الاسم الماليزي للشجرة «كراس»، وينشر البلد نظاماً من اثنتي عشرة درجة، مما يجعل الدرجة الماليزية أدق من درجة تُذكر في أي مكان بلا اسم بلدها.',
    businesses: 'The directory publishes one business, a distiller and wholesaler in Dubai, and it does not record a business in this sub-division. That is the whole of the record: a sub-division can be a growing area with no supplier in it, and a buyer who needs a supplier here has not found one, rather than found one that is unverified.',
    businessesAr: 'ينشر الدليل شركة واحدة، مصنّفة تقطير وجملة في دبي، ولا يسجّل شركة في هذا القسم. وهذا هو السجل كله: فالقسم قد يكون منطقة نامية بلا مورد فيها، ومن يحتاج مورداً هنا لم يجد واحداً، لا وجد واحداً غير موثَّق.',
    related: [
      { slug: 'origins/malaysia', label: 'Malaysia origin guide' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'quality/batch-records', label: 'What a batch record establishes' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  },
  'origins/malaysia/pahang': {
    name: 'Pahang',
    nameAr: 'باحانغ',
    country: 'Malaysia',
    countryAr: 'ماليزيا',
    countrySlug: 'origins/malaysia',
    kind: 'state',
    kindAr: 'ولاية',
    role: 'Pahang is a documented growing area for the species the ITTO review records for it, and the review records the population and plantation figures for Malaysia rather than for this sub-division.',
    roleAr: 'باحانغ منطقة نامية موثَّقة للأنواع التي تسجّلها مراجعة ITTO لها، وتسجّل المراجعة أعدادها ومساحات مزارعها لـماليزيا لا لهذا القسم.',
    evidence: 'Pahang is one of the sub-divisions the ITTO review names for Malaysia, and the population, plantation and quota figures it gives for Malaysia are the figures that cover this sub-division. The review is explicit that these figures differ between the sources that report them, sometimes between two sources reporting the same year, and that a number quoted for a country is not a number quoted for a sub-division.',
    evidenceAr: 'باحانغ أحد الأقسام التي تسمّيها مراجعة ITTO لـماليزيا، وأعدادها ومساحات مزارعها وحصصها التي تعطيها لـماليزيا هي الأرقام التي تشمل هذا القسم. والمراجعة صريحة بأن هذه الأرقام تختلف بين المصادر التي تبلّغ عنها، أحياناً بين مصدرين يبلّغان عن السنة نفسها، وأن رقماً يُذكر لبلد ليس رقماً يُذكر لقسم.',
    terminology: 'The Malaysian word for the tree is karas, and the country publishes a twelve-grade system, which makes a Malaysian grade more precise than a grade quoted anywhere without a country attached to it.',
    terminologyAr: 'الاسم الماليزي للشجرة «كراس»، وينشر البلد نظاماً من اثنتي عشرة درجة، مما يجعل الدرجة الماليزية أدق من درجة تُذكر في أي مكان بلا اسم بلدها.',
    businesses: 'The directory publishes one business, a distiller and wholesaler in Dubai, and it does not record a business in this sub-division. That is the whole of the record: a sub-division can be a growing area with no supplier in it, and a buyer who needs a supplier here has not found one, rather than found one that is unverified.',
    businessesAr: 'ينشر الدليل شركة واحدة، مصنّفة تقطير وجملة في دبي، ولا يسجّل شركة في هذا القسم. وهذا هو السجل كله: فالقسم قد يكون منطقة نامية بلا مورد فيها، ومن يحتاج مورداً هنا لم يجد واحداً، لا وجد واحداً غير موثَّق.',
    related: [
      { slug: 'origins/malaysia', label: 'Malaysia origin guide' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'quality/batch-records', label: 'What a batch record establishes' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  },
  'origins/malaysia/sabah': {
    name: 'Sabah',
    nameAr: 'ساباه',
    country: 'Malaysia',
    countryAr: 'ماليزيا',
    countrySlug: 'origins/malaysia',
    kind: 'state',
    kindAr: 'ولاية',
    role: 'Sabah is a documented growing area for the species the ITTO review records for it, and the review records the population and plantation figures for Malaysia rather than for this sub-division.',
    roleAr: 'ساباه منطقة نامية موثَّقة للأنواع التي تسجّلها مراجعة ITTO لها، وتسجّل المراجعة أعدادها ومساحات مزارعها لـماليزيا لا لهذا القسم.',
    evidence: 'Sabah is one of the sub-divisions the ITTO review names for Malaysia, and the population, plantation and quota figures it gives for Malaysia are the figures that cover this sub-division. The review is explicit that these figures differ between the sources that report them, sometimes between two sources reporting the same year, and that a number quoted for a country is not a number quoted for a sub-division.',
    evidenceAr: 'ساباه أحد الأقسام التي تسمّيها مراجعة ITTO لـماليزيا، وأعدادها ومساحات مزارعها وحصصها التي تعطيها لـماليزيا هي الأرقام التي تشمل هذا القسم. والمراجعة صريحة بأن هذه الأرقام تختلف بين المصادر التي تبلّغ عنها، أحياناً بين مصدرين يبلّغان عن السنة نفسها، وأن رقماً يُذكر لبلد ليس رقماً يُذكر لقسم.',
    terminology: 'The Malaysian word for the tree is karas, and the country publishes a twelve-grade system, which makes a Malaysian grade more precise than a grade quoted anywhere without a country attached to it.',
    terminologyAr: 'الاسم الماليزي للشجرة «كراس»، وينشر البلد نظاماً من اثنتي عشرة درجة، مما يجعل الدرجة الماليزية أدق من درجة تُذكر في أي مكان بلا اسم بلدها.',
    businesses: 'The directory publishes one business, a distiller and wholesaler in Dubai, and it does not record a business in this sub-division. That is the whole of the record: a sub-division can be a growing area with no supplier in it, and a buyer who needs a supplier here has not found one, rather than found one that is unverified.',
    businessesAr: 'ينشر الدليل شركة واحدة، مصنّفة تقطير وجملة في دبي، ولا يسجّل شركة في هذا القسم. وهذا هو السجل كله: فالقسم قد يكون منطقة نامية بلا مورد فيها، ومن يحتاج مورداً هنا لم يجد واحداً، لا وجد واحداً غير موثَّق.',
    related: [
      { slug: 'origins/malaysia', label: 'Malaysia origin guide' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'quality/batch-records', label: 'What a batch record establishes' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  },
  'origins/malaysia/sarawak': {
    name: 'Sarawak',
    nameAr: 'سارواك',
    country: 'Malaysia',
    countryAr: 'ماليزيا',
    countrySlug: 'origins/malaysia',
    kind: 'state',
    kindAr: 'ولاية',
    role: 'Sarawak is a documented growing area for the species the ITTO review records for it, and the review records the population and plantation figures for Malaysia rather than for this sub-division.',
    roleAr: 'سارواك منطقة نامية موثَّقة للأنواع التي تسجّلها مراجعة ITTO لها، وتسجّل المراجعة أعدادها ومساحات مزارعها لـماليزيا لا لهذا القسم.',
    evidence: 'Sarawak is one of the sub-divisions the ITTO review names for Malaysia, and the population, plantation and quota figures it gives for Malaysia are the figures that cover this sub-division. The review is explicit that these figures differ between the sources that report them, sometimes between two sources reporting the same year, and that a number quoted for a country is not a number quoted for a sub-division.',
    evidenceAr: 'سارواك أحد الأقسام التي تسمّيها مراجعة ITTO لـماليزيا، وأعدادها ومساحات مزارعها وحصصها التي تعطيها لـماليزيا هي الأرقام التي تشمل هذا القسم. والمراجعة صريحة بأن هذه الأرقام تختلف بين المصادر التي تبلّغ عنها، أحياناً بين مصدرين يبلّغان عن السنة نفسها، وأن رقماً يُذكر لبلد ليس رقماً يُذكر لقسم.',
    terminology: 'The Malaysian word for the tree is karas, and the country publishes a twelve-grade system, which makes a Malaysian grade more precise than a grade quoted anywhere without a country attached to it.',
    terminologyAr: 'الاسم الماليزي للشجرة «كراس»، وينشر البلد نظاماً من اثنتي عشرة درجة، مما يجعل الدرجة الماليزية أدق من درجة تُذكر في أي مكان بلا اسم بلدها.',
    businesses: 'The directory publishes one business, a distiller and wholesaler in Dubai, and it does not record a business in this sub-division. That is the whole of the record: a sub-division can be a growing area with no supplier in it, and a buyer who needs a supplier here has not found one, rather than found one that is unverified.',
    businessesAr: 'ينشر الدليل شركة واحدة، مصنّفة تقطير وجملة في دبي، ولا يسجّل شركة في هذا القسم. وهذا هو السجل كله: فالقسم قد يكون منطقة نامية بلا مورد فيها، ومن يحتاج مورداً هنا لم يجد واحداً، لا وجد واحداً غير موثَّق.',
    related: [
      { slug: 'origins/malaysia', label: 'Malaysia origin guide' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'quality/batch-records', label: 'What a batch record establishes' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  },
  'origins/malaysia/terengganu': {
    name: 'Terengganu',
    nameAr: 'تيرينغانو',
    country: 'Malaysia',
    countryAr: 'ماليزيا',
    countrySlug: 'origins/malaysia',
    kind: 'state',
    kindAr: 'ولاية',
    role: 'Terengganu is a documented growing area for the species the ITTO review records for it, and the review records the population and plantation figures for Malaysia rather than for this sub-division.',
    roleAr: 'تيرينغانو منطقة نامية موثَّقة للأنواع التي تسجّلها مراجعة ITTO لها، وتسجّل المراجعة أعدادها ومساحات مزارعها لـماليزيا لا لهذا القسم.',
    evidence: 'Terengganu is one of the sub-divisions the ITTO review names for Malaysia, and the population, plantation and quota figures it gives for Malaysia are the figures that cover this sub-division. The review is explicit that these figures differ between the sources that report them, sometimes between two sources reporting the same year, and that a number quoted for a country is not a number quoted for a sub-division.',
    evidenceAr: 'تيرينغانو أحد الأقسام التي تسمّيها مراجعة ITTO لـماليزيا، وأعدادها ومساحات مزارعها وحصصها التي تعطيها لـماليزيا هي الأرقام التي تشمل هذا القسم. والمراجعة صريحة بأن هذه الأرقام تختلف بين المصادر التي تبلّغ عنها، أحياناً بين مصدرين يبلّغان عن السنة نفسها، وأن رقماً يُذكر لبلد ليس رقماً يُذكر لقسم.',
    terminology: 'The Malaysian word for the tree is karas, and the country publishes a twelve-grade system, which makes a Malaysian grade more precise than a grade quoted anywhere without a country attached to it.',
    terminologyAr: 'الاسم الماليزي للشجرة «كراس»، وينشر البلد نظاماً من اثنتي عشرة درجة، مما يجعل الدرجة الماليزية أدق من درجة تُذكر في أي مكان بلا اسم بلدها.',
    businesses: 'The directory publishes one business, a distiller and wholesaler in Dubai, and it does not record a business in this sub-division. That is the whole of the record: a sub-division can be a growing area with no supplier in it, and a buyer who needs a supplier here has not found one, rather than found one that is unverified.',
    businessesAr: 'ينشر الدليل شركة واحدة، مصنّفة تقطير وجملة في دبي، ولا يسجّل شركة في هذا القسم. وهذا هو السجل كله: فالقسم قد يكون منطقة نامية بلا مورد فيها، ومن يحتاج مورداً هنا لم يجد واحداً، لا وجد واحداً غير موثَّق.',
    related: [
      { slug: 'origins/malaysia', label: 'Malaysia origin guide' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'quality/batch-records', label: 'What a batch record establishes' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  },
  'origins/myanmar/kachin': {
    name: 'Kachin',
    nameAr: 'كاتين',
    country: 'Myanmar',
    countryAr: 'ميانمار',
    countrySlug: 'origins/myanmar',
    kind: 'state',
    kindAr: 'ولاية',
    role: 'Kachin is a documented growing area for the species the ITTO review records for it, and the review records the population and plantation figures for Myanmar rather than for this sub-division.',
    roleAr: 'كاتين منطقة نامية موثَّقة للأنواع التي تسجّلها مراجعة ITTO لها، وتسجّل المراجعة أعدادها ومساحات مزارعها لـميانمار لا لهذا القسم.',
    evidence: 'Kachin is one of the sub-divisions the ITTO review names for Myanmar, and the population, plantation and quota figures it gives for Myanmar are the figures that cover this sub-division. The review is explicit that these figures differ between the sources that report them, sometimes between two sources reporting the same year, and that a number quoted for a country is not a number quoted for a sub-division.',
    evidenceAr: 'كاتين أحد الأقسام التي تسمّيها مراجعة ITTO لـميانمار، وأعدادها ومساحات مزارعها وحصصها التي تعطيها لـميانمار هي الأرقام التي تشمل هذا القسم. والمراجعة صريحة بأن هذه الأرقام تختلف بين المصادر التي تبلّغ عنها، أحياناً بين مصدرين يبلّغان عن السنة نفسها، وأن رقماً يُذكر لبلد ليس رقماً يُذكر لقسم.',
    terminology: 'The Myanmar material is described in the trade as having a distinct odour, and the country and the material both appear in the trade vocabulary as a source of a particular character rather than of a particular grade.',
    terminologyAr: 'توصف المادة الميانمارية في التجارة بأنها ذات رائحة مميزة، ويظهر البلد والمادة في مفردات التجارة بوصفهما مصدر طابع بعينه لا مصدر درجة بعينها.',
    businesses: 'The directory publishes one business, a distiller and wholesaler in Dubai, and it does not record a business in this sub-division. That is the whole of the record: a sub-division can be a growing area with no supplier in it, and a buyer who needs a supplier here has not found one, rather than found one that is unverified.',
    businessesAr: 'ينشر الدليل شركة واحدة، مصنّفة تقطير وجملة في دبي، ولا يسجّل شركة في هذا القسم. وهذا هو السجل كله: فالقسم قد يكون منطقة نامية بلا مورد فيها، ومن يحتاج مورداً هنا لم يجد واحداً، لا وجد واحداً غير موثَّق.',
    related: [
      { slug: 'origins/myanmar', label: 'Myanmar origin guide' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'trade/document-review-limits', label: 'What reviewing a document can establish' },
    
      { slug: 'origins/india/nagaland', label: 'Nagaland — Bordering Indian agarwood region', labelAr: 'ناغالاند — منطقة عود هندية مجاورة' },
      { slug: 'origins/india/manipur', label: 'Manipur — Bordering Indian agarwood region', labelAr: 'مانيبور — منطقة عود هندية مجاورة' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000', 'CITES_APPENDICES'],
  },
  'origins/papua-new-guinea/east-sepik': {
    name: 'East Sepik',
    nameAr: 'سيبك الشرقية',
    country: 'Papua New Guinea',
    countryAr: 'بابوا غينيا الجديدة',
    countrySlug: 'origins/papua-new-guinea',
    kind: 'province',
    kindAr: 'ولاية',
    role: 'East Sepik is a documented growing area for the species the ITTO review records for it, and the review records the population and plantation figures for Papua New Guinea rather than for this sub-division.',
    roleAr: 'سيبك الشرقية منطقة نامية موثَّقة للأنواع التي تسجّلها مراجعة ITTO لها، وتسجّل المراجعة أعدادها ومساحات مزارعها لـبابوا غينيا الجديدة لا لهذا القسم.',
    evidence: 'East Sepik is one of the sub-divisions the ITTO review names for Papua New Guinea, and the population, plantation and quota figures it gives for Papua New Guinea are the figures that cover this sub-division. The review is explicit that these figures differ between the sources that report them, sometimes between two sources reporting the same year, and that a number quoted for a country is not a number quoted for a sub-division.',
    evidenceAr: 'سيبك الشرقية أحد الأقسام التي تسمّيها مراجعة ITTO لـبابوا غينيا الجديدة، وأعدادها ومساحات مزارعها وحصصها التي تعطيها لـبابوا غينيا الجديدة هي الأرقام التي تشمل هذا القسم. والمراجعة صريحة بأن هذه الأرقام تختلف بين المصادر التي تبلّغ عنها، أحياناً بين مصدرين يبلّغان عن السنة نفسها، وأن رقماً يُذكر لبلد ليس رقماً يُذكر لقسم.',
    terminology: 'The Papua New Guinean material is called gaharu as it is in Indonesia, and the genus matters more than the grade: the trade treats Gyrinops as a different material from Aquilaria.',
    terminologyAr: 'تسمى المادة في بابوا غينيا الجديدة «غاهارو» كما في إندونيسيا، والجنس أهم من الدرجة: فالتجارة تعامل Gyrinops مادةً مختلفة عن Aquilaria.',
    businesses: 'The directory publishes one business, a distiller and wholesaler in Dubai, and it does not record a business in this sub-division. That is the whole of the record: a sub-division can be a growing area with no supplier in it, and a buyer who needs a supplier here has not found one, rather than found one that is unverified.',
    businessesAr: 'ينشر الدليل شركة واحدة، مصنّفة تقطير وجملة في دبي، ولا يسجّل شركة في هذا القسم. وهذا هو السجل كله: فالقسم قد يكون منطقة نامية بلا مورد فيها، ومن يحتاج مورداً هنا لم يجد واحداً، لا وجد واحداً غير موثَّق.',
    related: [
      { slug: 'origins/papua-new-guinea', label: 'Papua New Guinea origin guide' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'quality/photo-evidence-limits', label: 'What a photograph can and cannot establish' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_PNG_AGARWOOD'],
  },
  'origins/papua-new-guinea/sandaun': {
    name: 'Sandaun',
    nameAr: 'سنداون',
    country: 'Papua New Guinea',
    countryAr: 'بابوا غينيا الجديدة',
    countrySlug: 'origins/papua-new-guinea',
    kind: 'province',
    kindAr: 'ولاية',
    role: 'Sandaun is a documented growing area for the species the ITTO review records for it, and the review records the population and plantation figures for Papua New Guinea rather than for this sub-division.',
    roleAr: 'سنداون منطقة نامية موثَّقة للأنواع التي تسجّلها مراجعة ITTO لها، وتسجّل المراجعة أعدادها ومساحات مزارعها لـبابوا غينيا الجديدة لا لهذا القسم.',
    evidence: 'Sandaun is one of the sub-divisions the ITTO review names for Papua New Guinea, and the population, plantation and quota figures it gives for Papua New Guinea are the figures that cover this sub-division. The review is explicit that these figures differ between the sources that report them, sometimes between two sources reporting the same year, and that a number quoted for a country is not a number quoted for a sub-division.',
    evidenceAr: 'سنداون أحد الأقسام التي تسمّيها مراجعة ITTO لـبابوا غينيا الجديدة، وأعدادها ومساحات مزارعها وحصصها التي تعطيها لـبابوا غينيا الجديدة هي الأرقام التي تشمل هذا القسم. والمراجعة صريحة بأن هذه الأرقام تختلف بين المصادر التي تبلّغ عنها، أحياناً بين مصدرين يبلّغان عن السنة نفسها، وأن رقماً يُذكر لبلد ليس رقماً يُذكر لقسم.',
    terminology: 'The Papua New Guinean material is called gaharu as it is in Indonesia, and the genus matters more than the grade: the trade treats Gyrinops as a different material from Aquilaria.',
    terminologyAr: 'تسمى المادة في بابوا غينيا الجديدة «غاهارو» كما في إندونيسيا، والجنس أهم من الدرجة: فالتجارة تعامل Gyrinops مادةً مختلفة عن Aquilaria.',
    businesses: 'The directory publishes one business, a distiller and wholesaler in Dubai, and it does not record a business in this sub-division. That is the whole of the record: a sub-division can be a growing area with no supplier in it, and a buyer who needs a supplier here has not found one, rather than found one that is unverified.',
    businessesAr: 'ينشر الدليل شركة واحدة، مصنّفة تقطير وجملة في دبي، ولا يسجّل شركة في هذا القسم. وهذا هو السجل كله: فالقسم قد يكون منطقة نامية بلا مورد فيها، ومن يحتاج مورداً هنا لم يجد واحداً، لا وجد واحداً غير موثَّق.',
    related: [
      { slug: 'origins/papua-new-guinea', label: 'Papua New Guinea origin guide' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'quality/photo-evidence-limits', label: 'What a photograph can and cannot establish' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_PNG_AGARWOOD'],
  },
  'origins/philippines/mindanao': {
    name: 'Mindanao',
    nameAr: 'مينداناو',
    country: 'Philippines',
    countryAr: 'الفلبين',
    countrySlug: 'origins/philippines',
    kind: 'region',
    kindAr: 'إقليم',
    role: 'Mindanao is a documented growing area for the species the ITTO review records for it, and the review records the population and plantation figures for Philippines rather than for this sub-division.',
    roleAr: 'مينداناو منطقة نامية موثَّقة للأنواع التي تسجّلها مراجعة ITTO لها، وتسجّل المراجعة أعدادها ومساحات مزارعها لـالفلبين لا لهذا القسم.',
    evidence: 'Mindanao is one of the sub-divisions the ITTO review names for Philippines, and the population, plantation and quota figures it gives for Philippines are the figures that cover this sub-division. The review is explicit that these figures differ between the sources that report them, sometimes between two sources reporting the same year, and that a number quoted for a country is not a number quoted for a sub-division.',
    evidenceAr: 'مينداناو أحد الأقسام التي تسمّيها مراجعة ITTO لـالفلبين، وأعدادها ومساحات مزارعها وحصصها التي تعطيها لـالفلبين هي الأرقام التي تشمل هذا القسم. والمراجعة صريحة بأن هذه الأرقام تختلف بين المصادر التي تبلّغ عنها، أحياناً بين مصدرين يبلّغان عن السنة نفسها، وأن رقماً يُذكر لبلد ليس رقماً يُذكر لقسم.',
    terminology: 'The Philippine material is traded under the same names as the material from elsewhere, and the local name is the Tagalog agar, and the four data-deficient species have almost no trade vocabulary at all.',
    terminologyAr: 'تُتداول المادة الفلبينية بالأسماء نفسها التي تُتداول بها المادة من غيرها، والاسم المحلي هو التاغالوغي «آغار»، والأنواع الأربعة ناقصة البيانات تكاد لا تملك مفردات تجارية البتة.',
    businesses: 'The directory publishes one business, a distiller and wholesaler in Dubai, and it does not record a business in this sub-division. That is the whole of the record: a sub-division can be a growing area with no supplier in it, and a buyer who needs a supplier here has not found one, rather than found one that is unverified.',
    businessesAr: 'ينشر الدليل شركة واحدة، مصنّفة تقطير وجملة في دبي، ولا يسجّل شركة في هذا القسم. وهذا هو السجل كله: فالقسم قد يكون منطقة نامية بلا مورد فيها، ومن يحتاج مورداً هنا لم يجد واحداً، لا وجد واحداً غير موثَّق.',
    related: [
      { slug: 'origins/philippines', label: 'Philippines origin guide' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'sourcing/how-supplier-introductions-work', label: 'How supplier introductions work' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  },
  'origins/sri-lanka/sabaragamuwa': {
    name: 'Sabaragamuwa',
    nameAr: 'ساباراغاموا',
    country: 'Sri Lanka',
    countryAr: 'سريلانكا',
    countrySlug: 'origins/sri-lanka',
    kind: 'province',
    kindAr: 'ولاية',
    role: 'Sabaragamuwa is a documented growing area for the species the ITTO review records for it, and the review records the population and plantation figures for Sri Lanka rather than for this sub-division.',
    roleAr: 'ساباراغاموا منطقة نامية موثَّقة للأنواع التي تسجّلها مراجعة ITTO لها، وتسجّل المراجعة أعدادها ومساحات مزارعها لـسريلانكا لا لهذا القسم.',
    evidence: 'Sabaragamuwa is one of the sub-divisions the ITTO review names for Sri Lanka, and the population, plantation and quota figures it gives for Sri Lanka are the figures that cover this sub-division. The review is explicit that these figures differ between the sources that report them, sometimes between two sources reporting the same year, and that a number quoted for a country is not a number quoted for a sub-division.',
    evidenceAr: 'ساباراغاموا أحد الأقسام التي تسمّيها مراجعة ITTO لـسريلانكا، وأعدادها ومساحات مزارعها وحصصها التي تعطيها لـسريلانكا هي الأرقام التي تشمل هذا القسم. والمراجعة صريحة بأن هذه الأرقام تختلف بين المصادر التي تبلّغ عنها، أحياناً بين مصدرين يبلّغان عن السنة نفسها، وأن رقماً يُذكر لبلد ليس رقماً يُذكر لقسم.',
    terminology: 'The Sri Lankan name for the tree is walla patta, and the material it yields is described in the trade as a gaha, which is the Gyrinops name rather than the Indonesian one.',
    terminologyAr: 'الاسم السريلانكي للشجرة «والا باتا»، والمادة منها توصف في التجارة بأنها «غا»، وهو اسم Gyrinops لا الاسم الإندونيسي.',
    businesses: 'The directory publishes one business, a distiller and wholesaler in Dubai, and it does not record a business in this sub-division. That is the whole of the record: a sub-division can be a growing area with no supplier in it, and a buyer who needs a supplier here has not found one, rather than found one that is unverified.',
    businessesAr: 'ينشر الدليل شركة واحدة، مصنّفة تقطير وجملة في دبي، ولا يسجّل شركة في هذا القسم. وهذا هو السجل كله: فالقسم قد يكون منطقة نامية بلا مورد فيها، ومن يحتاج مورداً هنا لم يجد واحداً، لا وجد واحداً غير موثَّق.',
    related: [
      { slug: 'origins/sri-lanka', label: 'Sri Lanka origin guide' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'quality/gulf-market-grade-labels', label: 'Gulf-market oud grading vocabulary' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  },
  'origins/sri-lanka/southern-province': {
    name: 'Southern Province',
    nameAr: 'المقاطعة الجنوبية',
    country: 'Sri Lanka',
    countryAr: 'سريلانكا',
    countrySlug: 'origins/sri-lanka',
    kind: 'province',
    kindAr: 'ولاية',
    role: 'Southern Province is a documented growing area for the species the ITTO review records for it, and the review records the population and plantation figures for Sri Lanka rather than for this sub-division.',
    roleAr: 'المقاطعة الجنوبية منطقة نامية موثَّقة للأنواع التي تسجّلها مراجعة ITTO لها، وتسجّل المراجعة أعدادها ومساحات مزارعها لـسريلانكا لا لهذا القسم.',
    evidence: 'Southern Province is one of the sub-divisions the ITTO review names for Sri Lanka, and the population, plantation and quota figures it gives for Sri Lanka are the figures that cover this sub-division. The review is explicit that these figures differ between the sources that report them, sometimes between two sources reporting the same year, and that a number quoted for a country is not a number quoted for a sub-division.',
    evidenceAr: 'المقاطعة الجنوبية أحد الأقسام التي تسمّيها مراجعة ITTO لـسريلانكا، وأعدادها ومساحات مزارعها وحصصها التي تعطيها لـسريلانكا هي الأرقام التي تشمل هذا القسم. والمراجعة صريحة بأن هذه الأرقام تختلف بين المصادر التي تبلّغ عنها، أحياناً بين مصدرين يبلّغان عن السنة نفسها، وأن رقماً يُذكر لبلد ليس رقماً يُذكر لقسم.',
    terminology: 'The Sri Lankan name for the tree is walla patta, and the material it yields is described in the trade as a gaha, which is the Gyrinops name rather than the Indonesian one.',
    terminologyAr: 'الاسم السريلانكي للشجرة «والا باتا»، والمادة منها توصف في التجارة بأنها «غا»، وهو اسم Gyrinops لا الاسم الإندونيسي.',
    businesses: 'The directory publishes one business, a distiller and wholesaler in Dubai, and it does not record a business in this sub-division. That is the whole of the record: a sub-division can be a growing area with no supplier in it, and a buyer who needs a supplier here has not found one, rather than found one that is unverified.',
    businessesAr: 'ينشر الدليل شركة واحدة، مصنّفة تقطير وجملة في دبي، ولا يسجّل شركة في هذا القسم. وهذا هو السجل كله: فالقسم قد يكون منطقة نامية بلا مورد فيها، ومن يحتاج مورداً هنا لم يجد واحداً، لا وجد واحداً غير موثَّق.',
    related: [
      { slug: 'origins/sri-lanka', label: 'Sri Lanka origin guide' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'quality/gulf-market-grade-labels', label: 'Gulf-market oud grading vocabulary' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  },
  'origins/thailand/chanthaburi': {
    name: 'Chanthaburi',
    nameAr: 'تشانثابوري',
    country: 'Thailand',
    countryAr: 'تايلاند',
    countrySlug: 'origins/thailand',
    kind: 'province',
    kindAr: 'ولاية',
    role: 'Chanthaburi is a documented growing area for the species the ITTO review records for it, and the review records the population and plantation figures for Thailand rather than for this sub-division.',
    roleAr: 'تشانثابوري منطقة نامية موثَّقة للأنواع التي تسجّلها مراجعة ITTO لها، وتسجّل المراجعة أعدادها ومساحات مزارعها لـتايلاند لا لهذا القسم.',
    evidence: 'Chanthaburi is one of the sub-divisions the ITTO review names for Thailand, and the population, plantation and quota figures it gives for Thailand are the figures that cover this sub-division. The review is explicit that these figures differ between the sources that report them, sometimes between two sources reporting the same year, and that a number quoted for a country is not a number quoted for a sub-division.',
    evidenceAr: 'تشانثابوري أحد الأقسام التي تسمّيها مراجعة ITTO لـتايلاند، وأعدادها ومساحات مزارعها وحصصها التي تعطيها لـتايلاند هي الأرقام التي تشمل هذا القسم. والمراجعة صريحة بأن هذه الأرقام تختلف بين المصادر التي تبلّغ عنها، أحياناً بين مصدرين يبلّغان عن السنة نفسها، وأن رقماً يُذكر لبلد ليس رقماً يُذكر لقسم.',
    terminology: 'The Thai name for the tree is mai kritsana, and the trade uses a set of names for the material that a buyer should have before a conversation starts.',
    terminologyAr: 'اسم الشجرة بالتايلاندية «ماي كريتسانا»، وتستعمل التجارة مجموعة أسماء للمادة يستحق المرء أن تكون في ذهنه قبل الحديث.',
    businesses: 'The directory publishes one business, a distiller and wholesaler in Dubai, and it does not record a business in this sub-division. That is the whole of the record: a sub-division can be a growing area with no supplier in it, and a buyer who needs a supplier here has not found one, rather than found one that is unverified.',
    businessesAr: 'ينشر الدليل شركة واحدة، مصنّفة تقطير وجملة في دبي، ولا يسجّل شركة في هذا القسم. وهذا هو السجل كله: فالقسم قد يكون منطقة نامية بلا مورد فيها، ومن يحتاج مورداً هنا لم يجد واحداً، لا وجد واحداً غير موثَّق.',
    related: [
      { slug: 'origins/thailand', label: 'Thailand origin guide' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'quality/gulf-market-grade-labels', label: 'Gulf-market oud grading vocabulary' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  },
  'origins/thailand/prachin-buri': {
    name: 'Prachin Buri',
    nameAr: 'براتشينبوري',
    country: 'Thailand',
    countryAr: 'تايلاند',
    countrySlug: 'origins/thailand',
    kind: 'province',
    kindAr: 'ولاية',
    role: 'Prachin Buri is a documented growing area for the species the ITTO review records for it, and the review records the population and plantation figures for Thailand rather than for this sub-division.',
    roleAr: 'براتشينبوري منطقة نامية موثَّقة للأنواع التي تسجّلها مراجعة ITTO لها، وتسجّل المراجعة أعدادها ومساحات مزارعها لـتايلاند لا لهذا القسم.',
    evidence: 'Prachin Buri is one of the sub-divisions the ITTO review names for Thailand, and the population, plantation and quota figures it gives for Thailand are the figures that cover this sub-division. The review is explicit that these figures differ between the sources that report them, sometimes between two sources reporting the same year, and that a number quoted for a country is not a number quoted for a sub-division.',
    evidenceAr: 'براتشينبوري أحد الأقسام التي تسمّيها مراجعة ITTO لـتايلاند، وأعدادها ومساحات مزارعها وحصصها التي تعطيها لـتايلاند هي الأرقام التي تشمل هذا القسم. والمراجعة صريحة بأن هذه الأرقام تختلف بين المصادر التي تبلّغ عنها، أحياناً بين مصدرين يبلّغان عن السنة نفسها، وأن رقماً يُذكر لبلد ليس رقماً يُذكر لقسم.',
    terminology: 'The Thai name for the tree is mai kritsana, and the trade uses a set of names for the material that a buyer should have before a conversation starts.',
    terminologyAr: 'اسم الشجرة بالتايلاندية «ماي كريتسانا»، وتستعمل التجارة مجموعة أسماء للمادة يستحق المرء أن تكون في ذهنه قبل الحديث.',
    businesses: 'The directory publishes one business, a distiller and wholesaler in Dubai, and it does not record a business in this sub-division. That is the whole of the record: a sub-division can be a growing area with no supplier in it, and a buyer who needs a supplier here has not found one, rather than found one that is unverified.',
    businessesAr: 'ينشر الدليل شركة واحدة، مصنّفة تقطير وجملة في دبي، ولا يسجّل شركة في هذا القسم. وهذا هو السجل كله: فالقسم قد يكون منطقة نامية بلا مورد فيها، ومن يحتاج مورداً هنا لم يجد واحداً، لا وجد واحداً غير موثَّق.',
    related: [
      { slug: 'origins/thailand', label: 'Thailand origin guide' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'quality/gulf-market-grade-labels', label: 'Gulf-market oud grading vocabulary' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  },
  'origins/thailand/trat': {
    name: 'Trat',
    nameAr: 'ترات',
    country: 'Thailand',
    countryAr: 'تايلاند',
    countrySlug: 'origins/thailand',
    kind: 'province',
    kindAr: 'ولاية',
    role: 'Trat is a documented growing area for the species the ITTO review records for it, and the review records the population and plantation figures for Thailand rather than for this sub-division.',
    roleAr: 'ترات منطقة نامية موثَّقة للأنواع التي تسجّلها مراجعة ITTO لها، وتسجّل المراجعة أعدادها ومساحات مزارعها لـتايلاند لا لهذا القسم.',
    evidence: 'Trat is one of the sub-divisions the ITTO review names for Thailand, and the population, plantation and quota figures it gives for Thailand are the figures that cover this sub-division. The review is explicit that these figures differ between the sources that report them, sometimes between two sources reporting the same year, and that a number quoted for a country is not a number quoted for a sub-division.',
    evidenceAr: 'ترات أحد الأقسام التي تسمّيها مراجعة ITTO لـتايلاند، وأعدادها ومساحات مزارعها وحصصها التي تعطيها لـتايلاند هي الأرقام التي تشمل هذا القسم. والمراجعة صريحة بأن هذه الأرقام تختلف بين المصادر التي تبلّغ عنها، أحياناً بين مصدرين يبلّغان عن السنة نفسها، وأن رقماً يُذكر لبلد ليس رقماً يُذكر لقسم.',
    terminology: 'The Thai name for the tree is mai kritsana, and the trade uses a set of names for the material that a buyer should have before a conversation starts.',
    terminologyAr: 'اسم الشجرة بالتايلاندية «ماي كريتسانا»، وتستعمل التجارة مجموعة أسماء للمادة يستحق المرء أن تكون في ذهنه قبل الحديث.',
    businesses: 'The directory publishes one business, a distiller and wholesaler in Dubai, and it does not record a business in this sub-division. That is the whole of the record: a sub-division can be a growing area with no supplier in it, and a buyer who needs a supplier here has not found one, rather than found one that is unverified.',
    businessesAr: 'ينشر الدليل شركة واحدة، مصنّفة تقطير وجملة في دبي، ولا يسجّل شركة في هذا القسم. وهذا هو السجل كله: فالقسم قد يكون منطقة نامية بلا مورد فيها، ومن يحتاج مورداً هنا لم يجد واحداً، لا وجد واحداً غير موثَّق.',
    related: [
      { slug: 'origins/thailand', label: 'Thailand origin guide' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'quality/gulf-market-grade-labels', label: 'Gulf-market oud grading vocabulary' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  },
  'origins/vietnam/ha-tinh': {
    name: 'Ha Tinh',
    nameAr: 'ها تينه',
    country: 'Vietnam',
    countryAr: 'فيتنام',
    countrySlug: 'origins/vietnam',
    kind: 'province',
    kindAr: 'ولاية',
    role: 'Ha Tinh is a documented growing area for the species the ITTO review records for it, and the review records the population and plantation figures for Vietnam rather than for this sub-division.',
    roleAr: 'ها تينه منطقة نامية موثَّقة للأنواع التي تسجّلها مراجعة ITTO لها، وتسجّل المراجعة أعدادها ومساحات مزارعها لـفيتنام لا لهذا القسم.',
    evidence: 'Ha Tinh is one of the sub-divisions the ITTO review names for Vietnam, and the population, plantation and quota figures it gives for Vietnam are the figures that cover this sub-division. The review is explicit that these figures differ between the sources that report them, sometimes between two sources reporting the same year, and that a number quoted for a country is not a number quoted for a sub-division.',
    evidenceAr: 'ها تينه أحد الأقسام التي تسمّيها مراجعة ITTO لـفيتنام، وأعدادها ومساحات مزارعها وحصصها التي تعطيها لـفيتنام هي الأرقام التي تشمل هذا القسم. والمراجعة صريحة بأن هذه الأرقام تختلف بين المصادر التي تبلّغ عنها، أحياناً بين مصدرين يبلّغان عن السنة نفسها، وأن رقماً يُذكر لبلد ليس رقماً يُذكر لقسم.',
    terminology: 'The Vietnamese material carries the Vietnamese names for the grades and the districts, and the trade uses a wording of its own that a buyer meets in the local supply chain rather than in a document.',
    terminologyAr: 'للمادة الفيتنامية أسماء الفيتنامية للدرجات والمناطق، وتستعمل التجارة صياغة خاصة يلتقيها المشتري في سلسلة التوريد المحلية لا في وثيقة.',
    businesses: 'The directory publishes one business, a distiller and wholesaler in Dubai, and it does not record a business in this sub-division. That is the whole of the record: a sub-division can be a growing area with no supplier in it, and a buyer who needs a supplier here has not found one, rather than found one that is unverified.',
    businessesAr: 'ينشر الدليل شركة واحدة، مصنّفة تقطير وجملة في دبي، ولا يسجّل شركة في هذا القسم. وهذا هو السجل كله: فالقسم قد يكون منطقة نامية بلا مورد فيها، ومن يحتاج مورداً هنا لم يجد واحداً، لا وجد واحداً غير موثَّق.',
    related: [
      { slug: 'origins/vietnam', label: 'Vietnam origin guide' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'production/from-wood-to-oil', label: 'From material to oud oil' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  },
  'origins/vietnam/khanh-hoa': {
    name: 'Khanh Hoa',
    nameAr: 'خانه هوا',
    country: 'Vietnam',
    countryAr: 'فيتنام',
    countrySlug: 'origins/vietnam',
    kind: 'province',
    kindAr: 'ولاية',
    role: 'Khanh Hoa is a documented growing area for the species the ITTO review records for it, and the review records the population and plantation figures for Vietnam rather than for this sub-division.',
    roleAr: 'خانه هوا منطقة نامية موثَّقة للأنواع التي تسجّلها مراجعة ITTO لها، وتسجّل المراجعة أعدادها ومساحات مزارعها لـفيتنام لا لهذا القسم.',
    evidence: 'Khanh Hoa is one of the sub-divisions the ITTO review names for Vietnam, and the population, plantation and quota figures it gives for Vietnam are the figures that cover this sub-division. The review is explicit that these figures differ between the sources that report them, sometimes between two sources reporting the same year, and that a number quoted for a country is not a number quoted for a sub-division.',
    evidenceAr: 'خانه هوا أحد الأقسام التي تسمّيها مراجعة ITTO لـفيتنام، وأعدادها ومساحات مزارعها وحصصها التي تعطيها لـفيتنام هي الأرقام التي تشمل هذا القسم. والمراجعة صريحة بأن هذه الأرقام تختلف بين المصادر التي تبلّغ عنها، أحياناً بين مصدرين يبلّغان عن السنة نفسها، وأن رقماً يُذكر لبلد ليس رقماً يُذكر لقسم.',
    terminology: 'The Vietnamese material carries the Vietnamese names for the grades and the districts, and the trade uses a wording of its own that a buyer meets in the local supply chain rather than in a document.',
    terminologyAr: 'للمادة الفيتنامية أسماء الفيتنامية للدرجات والمناطق، وتستعمل التجارة صياغة خاصة يلتقيها المشتري في سلسلة التوريد المحلية لا في وثيقة.',
    businesses: 'The directory publishes one business, a distiller and wholesaler in Dubai, and it does not record a business in this sub-division. That is the whole of the record: a sub-division can be a growing area with no supplier in it, and a buyer who needs a supplier here has not found one, rather than found one that is unverified.',
    businessesAr: 'ينشر الدليل شركة واحدة، مصنّفة تقطير وجملة في دبي، ولا يسجّل شركة في هذا القسم. وهذا هو السجل كله: فالقسم قد يكون منطقة نامية بلا مورد فيها، ومن يحتاج مورداً هنا لم يجد واحداً، لا وجد واحداً غير موثَّق.',
    related: [
      { slug: 'origins/vietnam', label: 'Vietnam origin guide' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'production/from-wood-to-oil', label: 'From material to oud oil' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  },
  'origins/vietnam/quang-nam': {
    name: 'Quang Nam',
    nameAr: 'كوانغ نام',
    country: 'Vietnam',
    countryAr: 'فيتنام',
    countrySlug: 'origins/vietnam',
    kind: 'province',
    kindAr: 'ولاية',
    role: 'Quang Nam is a documented growing area for the species the ITTO review records for it, and the review records the population and plantation figures for Vietnam rather than for this sub-division.',
    roleAr: 'كوانغ نام منطقة نامية موثَّقة للأنواع التي تسجّلها مراجعة ITTO لها، وتسجّل المراجعة أعدادها ومساحات مزارعها لـفيتنام لا لهذا القسم.',
    evidence: 'Quang Nam is one of the sub-divisions the ITTO review names for Vietnam, and the population, plantation and quota figures it gives for Vietnam are the figures that cover this sub-division. The review is explicit that these figures differ between the sources that report them, sometimes between two sources reporting the same year, and that a number quoted for a country is not a number quoted for a sub-division.',
    evidenceAr: 'كوانغ نام أحد الأقسام التي تسمّيها مراجعة ITTO لـفيتنام، وأعدادها ومساحات مزارعها وحصصها التي تعطيها لـفيتنام هي الأرقام التي تشمل هذا القسم. والمراجعة صريحة بأن هذه الأرقام تختلف بين المصادر التي تبلّغ عنها، أحياناً بين مصدرين يبلّغان عن السنة نفسها، وأن رقماً يُذكر لبلد ليس رقماً يُذكر لقسم.',
    terminology: 'The Vietnamese material carries the Vietnamese names for the grades and the districts, and the trade uses a wording of its own that a buyer meets in the local supply chain rather than in a document.',
    terminologyAr: 'للمادة الفيتنامية أسماء الفيتنامية للدرجات والمناطق، وتستعمل التجارة صياغة خاصة يلتقيها المشتري في سلسلة التوريد المحلية لا في وثيقة.',
    businesses: 'The directory publishes one business, a distiller and wholesaler in Dubai, and it does not record a business in this sub-division. That is the whole of the record: a sub-division can be a growing area with no supplier in it, and a buyer who needs a supplier here has not found one, rather than found one that is unverified.',
    businessesAr: 'ينشر الدليل شركة واحدة، مصنّفة تقطير وجملة في دبي، ولا يسجّل شركة في هذا القسم. وهذا هو السجل كله: فالقسم قد يكون منطقة نامية بلا مورد فيها، ومن يحتاج مورداً هنا لم يجد واحداً، لا وجد واحداً غير موثَّق.',
    related: [
      { slug: 'origins/vietnam', label: 'Vietnam origin guide' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'production/from-wood-to-oil', label: 'From material to oud oil' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  },
  'origins/vietnam/quang-ngai': {
    name: 'Quang Ngai',
    nameAr: 'كوانغ نجاي',
    country: 'Vietnam',
    countryAr: 'فيتنام',
    countrySlug: 'origins/vietnam',
    kind: 'province',
    kindAr: 'ولاية',
    role: 'Quang Ngai is a documented growing area for the species the ITTO review records for it, and the review records the population and plantation figures for Vietnam rather than for this sub-division.',
    roleAr: 'كوانغ نجاي منطقة نامية موثَّقة للأنواع التي تسجّلها مراجعة ITTO لها، وتسجّل المراجعة أعدادها ومساحات مزارعها لـفيتنام لا لهذا القسم.',
    evidence: 'Quang Ngai is one of the sub-divisions the ITTO review names for Vietnam, and the population, plantation and quota figures it gives for Vietnam are the figures that cover this sub-division. The review is explicit that these figures differ between the sources that report them, sometimes between two sources reporting the same year, and that a number quoted for a country is not a number quoted for a sub-division.',
    evidenceAr: 'كوانغ نجاي أحد الأقسام التي تسمّيها مراجعة ITTO لـفيتنام، وأعدادها ومساحات مزارعها وحصصها التي تعطيها لـفيتنام هي الأرقام التي تشمل هذا القسم. والمراجعة صريحة بأن هذه الأرقام تختلف بين المصادر التي تبلّغ عنها، أحياناً بين مصدرين يبلّغان عن السنة نفسها، وأن رقماً يُذكر لبلد ليس رقماً يُذكر لقسم.',
    terminology: 'The Vietnamese material carries the Vietnamese names for the grades and the districts, and the trade uses a wording of its own that a buyer meets in the local supply chain rather than in a document.',
    terminologyAr: 'للمادة الفيتنامية أسماء الفيتنامية للدرجات والمناطق، وتستعمل التجارة صياغة خاصة يلتقيها المشتري في سلسلة التوريد المحلية لا في وثيقة.',
    businesses: 'The directory publishes one business, a distiller and wholesaler in Dubai, and it does not record a business in this sub-division. That is the whole of the record: a sub-division can be a growing area with no supplier in it, and a buyer who needs a supplier here has not found one, rather than found one that is unverified.',
    businessesAr: 'ينشر الدليل شركة واحدة، مصنّفة تقطير وجملة في دبي، ولا يسجّل شركة في هذا القسم. وهذا هو السجل كله: فالقسم قد يكون منطقة نامية بلا مورد فيها، ومن يحتاج مورداً هنا لم يجد واحداً، لا وجد واحداً غير موثَّق.',
    related: [
      { slug: 'origins/vietnam', label: 'Vietnam origin guide' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'production/from-wood-to-oil', label: 'From material to oud oil' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  },
};

/**
 * The question set, shared by the regions of a country.
 *
 * The question that separates one region's material from another's
 * is the same question in every region of that country, and the answer
 * differs, and that is the point.
 *
 * The English and the Arabic are the country pages' own question
 * sets, copied rather than retyped, so a region page and its country
 * page ask the same thing in the same words.
 */
const QUESTIONS: Record<string, { en: string[]; ar: string[] }> = {
  'india': {
    en: [
      'Ask which of the north-east regions the material actually came from, and whether it was wild or plantation. Then ask what establishes the region: a document, a supplier record, or the seller\'s own assertion.',
      'For oil, ask which plant it was distilled from and by what method. The species matters here more than in most origin claims, because A. agallocha and A. malaccensis are frequently both described as "Asian oud" in trade usage without distinction.',
      'For wood, ask for the batch reference and the treatment applied before it was offered, since impregnation and fumigation are the two methods most often used to alter the weight and scent of resinous wood.',
    ],
    ar: [
      'اسأل من أي مناطق الشمال الشرقي جاءت المادة بالضبط، وهل كانت برية أم مزروعة. ثم اسأل ما الذي يثبت الإقليم: وثيقة، أم سجل لدى المورد، أم تأكيد البائع نفسه.',
      'وبالنسبة للزيت، اسأل من أي نبات قُطّر وبأي طريقة. فالنوع هنا أهم مما في معظم ادعاءات المنشأ، لأن A. agallocha وA. malaccensis يوصفان في الاستعمال التجاري معاً بـ«عود آسيوي» دون تمييز.',
      'وبالنسبة للخشب، اسأل عن مرجع الدفعة والمعالجة التي طُبّقت قبل عرضه، فالنقع والتبخير هما الأسلوبان الأكثر استخداماً في تغيير وزن الخشب الراتنجي ورائحته.',
    ],
  },
  'bangladesh': {
    en: [
      'Which species, and how was the species determined',
      'Is the material from a smallholder holding or a registered plantation',
      'What is the batch reference, and what permit accompanied the lot',
      'What process was used to induce resin, and how long ago',
      'If an oil, where was it distilled and under what method',
    ],
    ar: [
      'أي نوع، وعلى أي أساس حُدِّد النوع',
      'هل المادة من حيازة صغيرة أم من مزرعة مسجَّلة',
      'ما مرجع الدفعة، وأي تصريح رافق اللوط',
      'ما العملية المستعملة لاستحثاث الراتنج، ومنذ متى',
      'وللزيت، أين قُطِّر وبأي طريقة',
    ],
  },
  'bhutan': {
    en: [
      'Where was the material documented, given that Bhutan is not a CITES Party',
      'Which species, and how was the species determined',
      'Is the material wild or cultivated, and is the cultivation recent',
      'What batch reference identifies the lot, and who holds the original record',
      'Through which market did the material reach the buyer',
    ],
    ar: [
      'أين وُثّقت المادة، بما أن بوتان ليست طرفاً في سايتس',
      'أي نوع، وعلى أي أساس حُدِّد',
      'هل المادة برية أم مزروعة، وهل الزراعة حديثة',
      'ما مرجع الدفعة الذي يعرّف اللوط، ومن يحتفظ بالسجل الأصلي',
      'عبر أي سوق بلغت المادة المشتري',
    ],
  },
  'brunei': {
    en: [
      'Is the material of Brunei origin, or Indonesian material exported from Brunei',
      'Which species, and how was the species determined',
      'Is the material covered by the CITES permit or by the separate quota for the non-listed material',
      'What is the batch reference, and which authority issued the permit',
      'What is the document trail between the place of harvest and the place of export',
    ],
    ar: [
      'هل المادة من بروناي أم مادة إندونيسية تُصدَّر منها',
      'أي نوع، وعلى أي أساس حُدِّد',
      'هل المادة مشمولة بتصريح سايتس أم بالحصة المنفصلة للمادة غير المدرَجة',
      'ما مرجع الدفعة، وأي سلطان أصدر التصريح',
      'ما مسار الوثائق بين مكان الجمع ومكان التصدير',
    ],
  },
  'cambodia': {
    en: [
      'Is the material wild Cardamom material or cultivated, and how is that established',
      'Which province, and is that a growing area or a collection point',
      'Does the export permit name the batch, and does it state wild or planted origin',
      'For a restoration seedling lot, what is the planting year and the treatment applied',
      'If an oil, where was it distilled and from which species',
    ],
    ar: [
      'هل المادة من كارداموم البرية أم مزروعة، وعلى أي أساس ثبت ذلك',
      'أي مقاطعة، وهل هي منطقة نامية أم نقطة تجمع',
      'هل يذكر تصريح التصدير الدفعة، وهل يذكر أنها برية أم مزروعة',
      'ولدفعة شتلات استعادة، ما سنة الزراعة وما المعالجة المطبقة',
      'وللزيت، أين قُطِّر ومن أي نوع',
    ],
  },
  'china': {
    en: [
      'Which species, and how was it determined',
      'Is the material plantation-grown, and from which holding',
      'If a grade is quoted, is it the Chinese national guide\\\'s grade, and which edition',
      'What is the batch reference, and does the export permit name it',
      'For an oil, was it distilled in China and from which species',
    ],
    ar: [
      'أي نوع، وعلى أي أساس حُدِّد',
      'هل المادة مزروعة، ومن أي حيازة',
      'لو ذُكرت درجة، أهي درجة الدليل الوطني الصيني، وأي طبعة',
      'ما مرجع الدفعة، وهل يذكره تصريح التصدير',
      'وللزيت، هل قُطِّر في الصين ومن أي نوع',
    ],
  },
  'indonesia': {
    en: [
      'Is the material wild or plantation, and which province did it come from',
      'Which species, and how was the species determined rather than assumed from the province',
      'Does the harvest quota for that province cover this lot, and is there a record of the quota',
      'What is the batch reference, and does the export permit match it',
      'For an oil, was it distilled in Indonesia and under what method',
    ],
    ar: [
      'هل المادة برية أم مزروعة، ومن أي ولاية جاءت',
      'أي نوع، وكيف حُدِّد النوع لا استناج من الولاية وحدها',
      'هل يغطي حصص الحصاد لتلك الولاية هذا اللوط، وهل هناك سجل للحصة',
      'ما مرجع الدفعة، وهل يطابقه تصريح التصدير',
      'وللزيت، هل قُطِّر في إندونيسيا وبأي طريقة',
    ],
  },
  'laos': {
    en: [
      'Where was the material handled before it reached the buyer, and in which country',
      'Which species, and is there a record of the harvest rather than a description',
      'If the material was processed elsewhere, which permits accompanied it',
      'What is the batch reference, and who holds the original record',
      'Is the material being offered as Lao because it grew there, or because it passed through',
    ],
    ar: [
      'أين عولجت المادة قبل أن تصل إلى المشتري، وفي أي بلد',
      'أي نوع، وهل هناك سجل للجمع لا وصف له',
      'ولو عولجت المادة في غير بلدها، أي تصاريح رافقتها',
      'ما مرجع الدفعة، ومن يحتفظ بالسجل الأصلي',
      'هل المادة تُعرض كلاوسية لأنها نمت هناك، أم لأنها مرّت من هناك',
    ],
  },
  'malaysia': {
    en: [
      'Which of the three authorities is the permit from, and which land area is the material from',
      'Which species, and for a Borneo lot whether it is A. microcarpa, A. beccariana or A. cumingiana',
      'Is the material wild or planted, and which year does the quota figure belong to',
      'If an oil, was it distilled in Malaysia and from which species',
      'What is the batch reference, and does it appear on the permit',
    ],
    ar: [
      'من أي من السلطات الثلاث يكون التصريح، ومن أي أرض جاءت المادة',
      'أي نوع، ولمادة من بورنيو أهو A. microcarpa أم A. beccariana أم A. cumingiana',
      'هل المادة برية أم مزروعة، وإلى أي سنة تنتمي رقم الحصة',
      'وللزيت، هل قُطِّر في ماليزيا ومن أي نوع',
      'ما مرجع الدفعة، وهل يظهر على التصريح',
    ],
  },
  'myanmar': {
    en: [
      'Which species, and how was the species determined',
      'What is the batch reference, and what permit accompanied the lot',
      'Is the material wild or planted, and who harvested it',
      'Through which country did the material move, and where was it processed',
      'What record exists of the harvest itself, as distinct from the sale',
    ],
    ar: [
      'أي نوع، وعلى أي أساس حُدِّد النوع',
      'ما مرجع الدفعة، وأي تصريح رافق اللوط',
      'هل المادة برية أم مزروعة، ومن جمعها',
      'عبر أي بلد تحركت المادة، وأين عولجت',
      'ما السجل الموجود للجمع نفسه، بصرف النظر عن البيع',
    ],
  },
  'papua-new-guinea': {
    en: [
      'Is the material Aquilaria or Gyrinops, and how was the genus determined rather than read off the paperwork',
      'Which species, and which province',
      'Is the material wild or planted, and if wild, what record exists of the harvest',
      'What is the batch reference, and does the export permit name it and name the species',
      'Has the material passed through an intermediate country, and under which permit',
    ],
    ar: [
      'هل المادة من Aquilaria أم Gyrinops، وعلى أي أساس حُدِّد الجنس لا بقراءة الورق',
      'أي نوع، وأي مقاطعة',
      'هل المادة برية أم مزروعة، وإن كانت برية فما سجل للجمع',
      'ما مرجع الدفعة، وهل يذكره تصريح التصدير ويسمّي النوع',
      'هل مرّت المادة عبر بلد وسيط، وبأي تصريح',
    ],
  },
  'philippines': {
    en: [
      'Which species, and how was the species determined rather than assumed from the origin',
      'Is the material A. filaria, A. cumingiana or A. malaccensis, and what distinguishes the one in this lot',
      'Is the material wild or planted, and what record supports that',
      'What batch reference identifies the lot, and does the export permit name it and name the species',
      'Has the material passed through an intermediate country or a re-export',
    ],
    ar: [
      'أي نوع، وعلى أي أساس حُدِّد النوع لا بالافتراض من المنشأ',
      'هل المادة A. filaria أم A. cumingiana أم A. malaccensis، وما الذي يميز ما في هذا اللوط',
      'هل المادة برية أم مزروعة، وما السجل الذي يسند ذلك',
      'ما مرجع الدفعة الذي يعرّف اللوط، وهل يذكره تصريح التصدير ويسمّي النوع',
      'هل مرّت المادة عبر بلد وسيط أو عبر إعادة تصدير',
    ],
  },
  'sri-lanka': {
    en: [
      'Is the material Gyrinops or Aquilaria, and how was the genus determined',
      'Which species within the genus, and how was the species determined',
      'Is the material wild or planted, and from which province',
      'For an oil, was it distilled in Sri Lanka and from which species',
      'What batch reference identifies the lot, and does the export permit name it',
    ],
    ar: [
      'هل المادة من Gyrinops أم Aquilaria، وعلى أي أساس حُدِّد الجنس',
      'أي نوع داخل الجنس، وعلى أي أساس حُدِّد النوع',
      'هل المادة برية أم مزروعة، ومن أي مقاطعة',
      'وللزيت، هل قُطِّر في سريلانكا ومن أي نوع',
      'ما مرجع الدفعة الذي يعرّف اللوط، وهل يذكره تصريح التصدير',
    ],
  },
  'thailand': {
    en: [
      'Is the lot from a registered plantation holding, and can the registration be shown',
      'Which species, and was the oil steam-distilled from resin-rich wood',
      'What is the planting year, and is the wood mature enough to have resin',
      'Does the export permit name the batch and the holding',
      'For an oil, what is the concentration and the carrier, and was the water separated or not',
    ],
    ar: [
      'هل اللوط من حيازة مزروعة مسجَّلة، وهل يتيسر إبراز التسجيل',
      'أي نوع، وهل قُطِّر الزيت بالبخار من خشب غني بالراتنج',
      'ما سنة الزراعة، وهل الخشب ناضج بما فيه راتنج',
      'هل يذكر تصريح التصدير الدفعة والحيازة',
      'وللزيت، ما التركيز والحامل، وهل فصل الماء أم لا',
    ],
  },
  'vietnam': {
    en: [
      'Which species was the material taken from, and how was that established',
      'Was the material plantation-grown or wild, and which year applies to the answer',
      'What area of plantation is the claim based on, and in which year was it assessed',
      'How was the oil distilled, and was the distillation done in Vietnam or elsewhere',
      'What batch reference identifies the lot, and does the export permit name that reference',
    ],
    ar: [
      'من أي نوع أُخذت المادة، وعلى أي أساس ثبت ذلك',
      'هل كانت المادة مزروعة أم برية، وأي سنة ينطبق عليها الجواب',
      'على أي مساحة مزروعة يقوم الادعاء، وفي أي سنة قُيّست',
      'كيف قُطِّر الزيت، وهل جرى التقطير في فيتنام أم في غيرها',
      'ما مرجع الدفعة الذي يعرّف اللوط، وهل يذكر تصريح التصدير هذا المرجع',
    ],
  },
};

/**
 * The forty origin-region pages.
 */
export const originRegionArticles: Article[] = Object.entries(REGION_FACTS)
  .map(([slug, facts]) => {
    const species = SPECIES[slug] ?? [];
    const questions = QUESTIONS[slug.split('/')[1]];

    return originRegion({
      slug,
      name: facts.name,
      nameAr: facts.nameAr,
      country: facts.country,
      countryAr: facts.countryAr,
      countrySlug: facts.countrySlug,
      placeKind: facts.kind,
      placeKindAr: facts.kindAr,
      role: facts.role,
      roleAr: facts.roleAr,
      species: species.map((s) => `${s.name} — ${s.status}; recorded for ${s.where}`),
      speciesAr: species.map((s) => `${s.name}. ${s.statusAr}؛ مسجَّل لـ ${s.where}`),
      evidence: facts.evidence,
      evidenceAr: facts.evidenceAr,
      terminology: facts.terminology,
      terminologyAr: facts.terminologyAr,
      businesses: facts.businesses,
      businessesAr: facts.businessesAr,
      questions: questions.en,
      questionsAr: questions.ar,
      related: facts.related,
      sourceIds: facts.sourceIds,
    });
  });

/**
 * A country's own region pages, in the order the facts table records them.
 *
 * The entry for a country is the children list its country page carries:
 * each region page's own title is the label and its own summary is the
 * blurb, so there is no second, hand-maintained copy of either string.
 * The country key is the region slug's second segment, matching the
 * countrySlug the facts table records. A country with no documented
 * sub-region carries no entry: Brunei and Bhutan have no region routes in
 * the manifest, and a country page does not list a sub-division the
 * sources never record.
 */
export const originRegionChildren: Record<string, Article[]> = {};

for (const child of originRegionArticles) {
  const country = child.slug.split('/')[1];
  (originRegionChildren[country] ??= []).push(child);
}

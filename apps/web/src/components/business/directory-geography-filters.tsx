'use client';

import { MapPin } from 'lucide-react';

/**
 * The directory's geography filters.
 *
 * The directory answers three separate geographic questions, and they
 * are the questions that were confused with each other:
 *
 *   located in       — where the business physically is
 *   material origin  — the origin of the material it handles, which is
 *                      NOT where the business is
 *   serves           — the countries it is documented to ship to
 *
 * A Dubai company that handles Cambodian agarwood and ships to Saudi
 * Arabia is in none of Cambodia or Saudi Arabia. The filters keep the
 * three apart, which is what OG-A09 was about.
 *
 * This is its own component so that the browser component's JSX does
 * not have to carry three more blocks of conditional markup. The
 * filtering itself happens in `packages/contracts/src/directory-filters.ts`,
 * so the listing and the domain service cannot disagree about what a
 * filter means.
 */

/** One filter choice: the value the filter matches on, and its name. */
export interface DirectoryFilterOption {
  /** The value the filter compares against. A code or a slug. */
  key: string;
  label: string;
  labelAr: string;
}

export interface DirectoryGeographyFiltersProps {
  locale: string;
  isAr: boolean;

  /** The active filters, each empty when it is not set. */
  country: string;
  city: string;
  area: string;
  origin: string;
  destination: string;

  /** The names of the countries the published records are located in. */
  locationNames: Record<string, string>;

  /** The choices for each filter. */
  locationCountries: DirectoryFilterOption[];
  cityOptions: DirectoryFilterOption[];
  originCountries: DirectoryFilterOption[];
  destinationCountries: DirectoryFilterOption[];

  /** The setters. Each one resets the filters that depend on it. */
  onCountry: (value: string) => void;
  onCity: (value: string) => void;
  onOrigin: (value: string) => void;
  onDestination: (value: string) => void;
}

/** A titled row of filter chips. */
function ChipRow({
  title,
  titleAr,
  allLabel,
  allLabelAr,
  options,
  active,
  onSelect,
  isAr,
  withPin,
}: {
  title: string;
  titleAr: string;
  allLabel: string;
  allLabelAr: string;
  options: DirectoryFilterOption[];
  active: string;
  onSelect: (key: string) => void;
  isAr: boolean;
  withPin?: boolean;
}) {
  if (options.length === 0) return null;

  return (
    <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--color-border)' }}>
      <span className="eyebrow" style={{ display: 'block', marginBottom: 10 }}>
        {isAr ? titleAr : title}
      </span>
      <div className="filter-chip-row">
        <button
          onClick={() => onSelect('')}
          className={`filter-chip ${active === '' ? 'active' : ''}`}
        >
          {isAr ? allLabelAr : allLabel}
        </button>
        {options.map((option) => (
          <button
            key={option.key}
            onClick={() => onSelect(option.key)}
            className={`filter-chip ${active === option.key ? 'active' : ''}`}
          >
            {withPin && <MapPin size={12} />}
            {isAr ? option.labelAr : option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export function DirectoryGeographyFilters({
  isAr,
  country,
  city,
  area,
  origin,
  destination,
  locationNames,
  locationCountries,
  cityOptions,
  originCountries,
  destinationCountries,
  onCountry,
  onCity,
  onOrigin,
  onDestination,
}: DirectoryGeographyFiltersProps) {
  const hasAny = Boolean(country || city || area || origin || destination);
  if (!hasAny && locationCountries.length === 0) return null;

  return (
    <>
      {/*
        The filters that came from the URL, stated where a reader can
        see them.

        A published path like /en/directory/wholesalers/in/united-arab-emirates
        carries a filter the reader cannot see in the panel, because the
        panel is collapsed. Each one is named here, so the listing says
        why it is the listing it is.
      */}
      {hasAny && (
        <div className="cluster" style={{ marginBottom: 14 }}>
          <span className="eyebrow" style={{ marginBottom: 0 }}>
            {isAr ? 'الموقع' : 'Geography'}
          </span>
          {country && (
            <span className="chip">
              {isAr ? 'الموقع في' : 'Located in'}:{' '}
              {locationNames[country] ?? country}
            </span>
          )}
          {city && (
            <span className="chip">
              {isAr ? 'المدينة' : 'City'}: {city.replace(/-/g, ' ')}
            </span>
          )}
          {area && (
            <span className="chip">
              {isAr ? 'المنطقة' : 'Area'}: {area.replace(/-/g, ' ')}
            </span>
          )}
          {origin && (
            <span className="chip">
              {isAr ? 'منشأ المادة' : 'Material origin'}:{' '}
              {origin.replace(/-/g, ' ')}
            </span>
          )}
          {destination && (
            <span className="chip">
              {isAr ? 'يشحن إلى' : 'Ships to'}:{' '}
              {destinationCountries.find((d) => d.key === destination)?.label ??
                destination}
            </span>
          )}
        </div>
      )}

      <ChipRow
        title="Located in"
        titleAr="موقع الشركة"
        allLabel="All locations"
        allLabelAr="كل المواقع"
        options={locationCountries}
        active={country}
        onSelect={onCountry}
        isAr={isAr}
        withPin
      />

      {cityOptions.length > 0 && (
        <ChipRow
          title="City"
          titleAr="المدينة"
          allLabel="All cities"
          allLabelAr="كل المدن"
          options={cityOptions}
          active={city}
          onSelect={onCity}
          isAr={isAr}
        />
      )}

      <ChipRow
        title="Material origin handled"
        titleAr="منشأ المادة التي يتعامل معها"
        allLabel="All origins"
        allLabelAr="كل المنشأ"
        options={originCountries}
        active={origin}
        onSelect={onOrigin}
        isAr={isAr}
      />

      <ChipRow
        title="Destinations served"
        titleAr="الوجهات الموثَّقة"
        allLabel="All destinations"
        allLabelAr="كل الوجهات"
        options={destinationCountries}
        active={destination}
        onSelect={onDestination}
        isAr={isAr}
      />
    </>
  );
}

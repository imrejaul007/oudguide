/**
 * OudGuide formatting & availability helpers.
 *
 * Adapted from the IndexOrbit directory project's `src/lib/utils.ts`.
 * The "opening status" concept is repurposed for distillery/estate working hours,
 * which is the closest domain equivalent to a retail business's opening hours.
 */

export function formatNumber(num: number): string {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toString();
}

export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
}

export function formatRelativeTime(date: Date | string): string {
  const now = new Date();
  const then = new Date(date);
  const diffInSeconds = Math.floor((now.getTime() - then.getTime()) / 1000);

  if (diffInSeconds < 60) return 'just now';

  const minutes = Math.floor(diffInSeconds / 60);
  if (minutes < 60) return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hour${hours === 1 ? '' : 's'} ago`;

  const days = Math.floor(hours / 24);
  if (days < 30) return `${days} day${days === 1 ? '' : 's'} ago`;

  const months = Math.floor(days / 30);
  if (months < 12) return `${months} month${months === 1 ? '' : 's'} ago`;

  const years = Math.floor(months / 12);
  return `${years} year${years === 1 ? '' : 's'} ago`;
}

export function formatTime12h(time: string): string {
  const [hStr, mStr] = time.split(':');
  let h = parseInt(hStr, 10);
  const m = mStr ?? '00';
  const suffix = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  return `${h}:${m} ${suffix}`;
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}

export interface WorkingHours {
  dayOfWeek: number;
  isClosed?: boolean;
  openTime?: string | null;
  closeTime?: string | null;
}

export interface AvailabilityStatus {
  label: 'Open' | 'Closed' | '';
  text: string;
}

/**
 * Live availability for a distillery or estate, given a weekly working-hours
 * schedule. Mirrors IndexOrbit's `getOpeningStatus` but reports in the
 * OudGuide domain vocabulary.
 */
export function getAvailabilityStatus(hours: WorkingHours[] | undefined): AvailabilityStatus {
  if (!hours || hours.length === 0) return { label: '', text: '' };

  const now = new Date();
  const dayOfWeek = now.getDay();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const parseTime = (time: string) => {
    const [h, m] = time.split(':').map(Number);
    return h * 60 + (m || 0);
  };

  const todayHours = hours.find((h) => h.dayOfWeek === dayOfWeek);

  if (todayHours && !todayHours.isClosed && todayHours.openTime && todayHours.closeTime) {
    const openMinutes = parseTime(todayHours.openTime);
    const closeMinutes = parseTime(todayHours.closeTime);

    if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
      const diffMinutes = closeMinutes - currentMinutes;
      if (diffMinutes >= 60) {
        const hoursLeft = Math.floor(diffMinutes / 60);
        const mins = diffMinutes % 60;
        if (mins > 0) {
          return {
            label: 'Open',
            text: `Open · Distillery open for ${hoursLeft}h ${mins}m (closes ${formatTime12h(todayHours.closeTime)})`,
          };
        }
        return {
          label: 'Open',
          text: `Open · Distillery open for ${hoursLeft}h (closes ${formatTime12h(todayHours.closeTime)})`,
        };
      }
      const minsLeft = diffMinutes;
      return {
        label: 'Open',
        text: `Open · Distillery closes in ${minsLeft}m (${formatTime12h(todayHours.closeTime)})`,
      };
    }

    if (currentMinutes < openMinutes) {
      const diffMinutes = openMinutes - currentMinutes;
      if (diffMinutes >= 60) {
        const hoursUntil = Math.floor(diffMinutes / 60);
        return {
          label: 'Closed',
          text: `Closed · Opens in ${hoursUntil}h (${formatTime12h(todayHours.openTime!)})`,
        };
      }
      return {
        label: 'Closed',
        text: `Closed · Opens in ${diffMinutes}m (${formatTime12h(todayHours.openTime!)})`,
      };
    }
  }

  return { label: 'Closed', text: 'Closed · Outside working hours' };
}

/**
 * Default distillation working week used when a producer has not published
 * explicit hours. Distilleries generally run a six-day week.
 */
export const DEFAULT_WORKING_HOURS: WorkingHours[] = [
  { dayOfWeek: 0, isClosed: true },
  { dayOfWeek: 1, openTime: '08:00', closeTime: '18:00' },
  { dayOfWeek: 2, openTime: '08:00', closeTime: '18:00' },
  { dayOfWeek: 3, openTime: '08:00', closeTime: '18:00' },
  { dayOfWeek: 4, openTime: '08:00', closeTime: '18:00' },
  { dayOfWeek: 5, openTime: '08:00', closeTime: '18:00' },
  { dayOfWeek: 6, openTime: '09:00', closeTime: '16:00' },
];

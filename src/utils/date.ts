import type { Lang } from './locale';

const LOCALES: Record<Lang, string> = { en: 'en-US', es: 'es-AR' };

/**
 * `publishedAt` is a date with no time, so `z.coerce.date()` parses it as
 * midnight UTC. Formatting it in the build machine's zone (UTC-3) rolls it
 * back to the previous day, so the date is always pinned to UTC.
 */
export const formatPostDate = (date: Date, lang: Lang, month: 'short' | 'long' = 'long') =>
  date.toLocaleDateString(LOCALES[lang], {
    year: 'numeric',
    month,
    day: '2-digit',
    timeZone: 'UTC',
  });

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);

export const getReadingTime = (content: string) => {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
};

export const sortByPublishedDateDesc = <T extends { data: { publishedAt: Date } }>(
  entries: T[]
) => entries.sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());

export const getTagCounts = <T extends { data: { tags?: string[] } }>(entries: T[]) => {
  const counts = new Map<string, number>();

  for (const entry of entries) {
    for (const tag of entry.data.tags ?? []) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }

  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
};

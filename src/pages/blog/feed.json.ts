import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

/* The blog's machine-readable index.
 *
 * It exists for the piece at the root of the domain (citrus-sinensis), which
 * is a separate Vercel project and used to carry a hand-written copy of this
 * list. Two lists that had to be edited together, in two repositories, with
 * nothing to warn when they drifted: publishing a post here silently left the
 * piece's Writing band a post behind.
 *
 * Now the piece fetches this file. Same origin — the root project rewrites
 * everything but `/` to this site — so no CORS and no absolute host to keep in
 * sync. It is prerendered at build time, so a new post ships with the build
 * that adds it and the piece needs no deploy of its own.
 *
 * English only, by design: the piece is written in English and picking a
 * locale is the consumer's problem, not the feed's.
 */
export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf()
  );

  const body = JSON.stringify({
    posts: posts.map((p) => ({
      slug: p.slug,
      title: p.data.title,
      description: p.data.description,
      url: `/blog/${p.slug}/`,
      publishedAt: p.data.publishedAt.toISOString().slice(0, 10),
      tags: p.data.tags,
      featured: p.data.featured,
    })),
  });

  return new Response(body, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=300, s-maxage=300',
    },
  });
};

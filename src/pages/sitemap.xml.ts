import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../data';

/* Hand-rolled instead of an integration: the repo just had unused deps
 * stripped, and this list is small and fully known at build time — a
 * dependency buys nothing here that a plain APIRoute doesn't already give us.
 *
 * The bare root (`/`) is served by a separate project (citrus-sinensis) but
 * is still a page of this domain, and robots.txt points every crawler here,
 * so it is listed. Which Vercel project renders a URL is an implementation
 * detail no crawler can see.
 */

type Lang = 'en' | 'es';

interface SitemapEntry {
  loc: string;
  lastmod?: string;
  alternates: Partial<Record<Lang | 'x-default', string>>;
}

const escapeXml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

const STATIC_PATHS = ['/home', '/blog', '/projects', '/resume'];

/* Astro 4 keys content-collection entries by `slug`; the Astro 5 content layer
 * keys them by `id` instead. Reading the wrong one yields `undefined`, which
 * would still render as well-formed XML — a sitemap of `/blog/undefined/` that
 * a green build would never report. Fail the build loudly instead.
 */
const postKey = (post: { slug?: string; id?: string }) => {
  const key = post.slug ?? post.id;
  if (typeof key !== 'string' || key.length === 0) {
    throw new Error(
      `sitemap: a blog entry has no usable slug or id (got ${JSON.stringify(key)})`
    );
  }
  return key.replace(/\.mdx?$/, '');
};

const buildEntries = async (): Promise<SitemapEntry[]> => {
  const entries: SitemapEntry[] = [];

  entries.push({ loc: '/', alternates: {} });

  for (const path of STATIC_PATHS) {
    const enPath = `${path}/`;
    const esPath = `/es${path}/`;
    const alternates: SitemapEntry['alternates'] = {
      en: enPath,
      es: esPath,
      'x-default': enPath,
    };
    entries.push({ loc: enPath, alternates });
    entries.push({ loc: esPath, alternates });
  }

  const [enPosts, esPosts] = await Promise.all([
    getCollection('blog', ({ data }) => !data.draft),
    getCollection('blog-es', ({ data }) => !data.draft),
  ]);

  const esSlugs = new Set(esPosts.map(postKey));
  const enSlugs = new Set(enPosts.map(postKey));
  const allSlugs = new Set([...enSlugs, ...esSlugs]);

  for (const slug of allSlugs) {
    const enPost = enPosts.find((p) => postKey(p) === slug);
    const esPost = esPosts.find((p) => postKey(p) === slug);

    const enPath = `/blog/${slug}/`;
    const esPath = `/es/blog/${slug}/`;

    const alternates: SitemapEntry['alternates'] = {};
    if (enPost) {
      alternates.en = enPath;
      alternates['x-default'] = enPath;
    }
    if (esPost) alternates.es = esPath;

    if (enPost) {
      entries.push({
        loc: enPath,
        lastmod: (enPost.data.updatedAt ?? enPost.data.publishedAt).toISOString(),
        alternates,
      });
    }
    if (esPost) {
      entries.push({
        loc: esPath,
        lastmod: (esPost.data.updatedAt ?? esPost.data.publishedAt).toISOString(),
        alternates,
      });
    }
  }

  return entries;
};

const renderUrl = (entry: SitemapEntry) => {
  const loc = escapeXml(new URL(entry.loc, SITE.siteUrl).toString());
  const lastmod = entry.lastmod ? `\n    <lastmod>${escapeXml(entry.lastmod)}</lastmod>` : '';
  const alternates = Object.entries(entry.alternates)
    .map(
      ([hreflang, href]) =>
        `\n    <xhtml:link rel="alternate" hreflang="${escapeXml(hreflang)}" href="${escapeXml(
          new URL(href as string, SITE.siteUrl).toString()
        )}" />`
    )
    .join('');

  return `  <url>\n    <loc>${loc}</loc>${lastmod}${alternates}\n  </url>`;
};

export const GET: APIRoute = async () => {
  const entries = await buildEntries();
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.map(renderUrl).join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=300, s-maxage=300',
    },
  });
};

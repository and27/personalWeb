import { MetadataRoute } from 'next';
import getPosts from '@/lib/getDataEntries';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://andresbanda.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: 'weekly', priority: 1 },
    { url: `${siteUrl}/projects`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/blog`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${siteUrl}/contact`, changeFrequency: 'yearly', priority: 0.5 }
  ];

  let postRoutes: MetadataRoute.Sitemap = [];
  try {
    const posts = (await getPosts({ page: 1, itemsPerPage: 100, locale: 'es' })) || [];
    postRoutes = posts.map((post: any) => ({
      url: `${siteUrl}/blog/${post.fields.slug}`,
      lastModified: post.sys?.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.7
    }));
  } catch {
    // Contentful unavailable at build time — ship static routes only.
  }

  return [...staticRoutes, ...postRoutes];
}

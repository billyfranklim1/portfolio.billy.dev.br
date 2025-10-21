import { MetadataRoute } from 'next';
import { getBlogPosts } from './db/blog';
import { locales } from '@/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://billy.dev.br';

  const staticRoutes = [
    '',
    '/blog',
    '/projects',
    '/work',
    '/uses',
    '/guestbook',
    '/projects/hubnews',
    '/projects/voice-notes',
    '/projects/sistema-reino',
  ];

  // Generate URLs for all locales
  const staticPages = locales.flatMap((locale) =>
    staticRoutes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((loc) => [
            loc === 'pt' ? 'pt-BR' : 'en-US',
            `${baseUrl}/${loc}${route}`,
          ])
        ),
      },
    }))
  );

  // Dynamic blog pages for all locales
  const blogPosts = getBlogPosts();
  const dynamicPages = locales.flatMap((locale) =>
    blogPosts.map((post) => ({
      url: `${baseUrl}/${locale}/blog/${post.slug}`,
      lastModified: post.metadata.publishedAt
        ? new Date(post.metadata.publishedAt)
        : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: Object.fromEntries(
          locales.map((loc) => [
            loc === 'pt' ? 'pt-BR' : 'en-US',
            `${baseUrl}/${loc}/blog/${post.slug}`,
          ])
        ),
      },
    }))
  );

  return [...staticPages, ...dynamicPages];
}

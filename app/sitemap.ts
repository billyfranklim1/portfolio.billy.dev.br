import { MetadataRoute } from 'next'
import { getBlogPosts } from './db/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://billy.dev.br'

  const staticPages = [
    '',
    '/blog',
    '/projects',
    '/work',
    '/uses',
    '/guestbook',
    '/projects/hubnews',
    '/projects/voice-notes',
    '/projects/sistema-reino',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Páginas dinâmicas do blog
  const blogPosts = getBlogPosts()
  const dynamicPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt ? new Date(post.metadata.publishedAt) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...dynamicPages]
}
import { MetadataRoute } from 'next'

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

  // Aqui você pode adicionar páginas dinâmicas do blog
  // const blogPosts = await getBlogPosts()
  // const dynamicPages = blogPosts.map((post) => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: post.updatedAt,
  //   changeFrequency: 'yearly' as const,
  //   priority: 0.6,
  // }))

  return [...staticPages]
}
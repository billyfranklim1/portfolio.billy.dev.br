export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://billy.dev.br/sitemap.xml',
    host: 'https://billy.dev.br',
  };
}

import './global.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from './components/nav';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { SandpackCSS } from './blog/[slug]/sandpack';
import { GoogleAnalytics } from './components/GoogleAnalytics';
import { SkipToContent } from './components/SkipToContent';

export const metadata: Metadata = {
  metadataBase: new URL('https://billy.dev.br'),
  title: {
    default: 'Billy - Engenheiro de Software Full-Stack',
    template: '%s | Billy',
  },
  description: 'Engenheiro de Software Full-Stack com 7 anos de experiência em Laravel, Vue.js e React. Desenvolvimento web, APIs e soluções escaláveis.',
  keywords: 'Billy, Engenheiro de Software, Full-Stack, Laravel, Vue.js, React, Next.js, PHP, JavaScript, TypeScript, Desenvolvimento Web, APIs',
  authors: [{ name: 'Billy' }],
  creator: 'Billy',
  openGraph: {
    title: 'Billy - Engenheiro de Software Full-Stack',
    description: 'Engenheiro de Software Full-Stack com expertise em Laravel, Vue.js e React. Confira meus projetos e artigos sobre desenvolvimento web.',
    url: 'https://billy.dev.br',
    siteName: 'Billy',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: 'https://billy.dev.br/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Billy - Engenheiro de Software',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Billy',
    card: 'summary_large_image',
    creator: '@billyfranklim1',
  },
  alternates: {
    canonical: 'https://billy.dev.br',
    types: {
      'application/rss+xml': 'https://billy.dev.br/rss.xml',
    },
  },
  verification: {
    google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
    yandex: '14d2e73487fa6c71',
  },
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

const Footer = () => {
  return (
    <footer className="flex justify-between items-center text-xs mt-16 mb-8 text-neutral-600 dark:text-neutral-400">
      <span>© 2025 Billy</span>
      <div className="flex space-x-4">
        {/*  */}

      </div>
    </footer>
  );
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
        <SandpackCSS />
      </head>
      <body className="antialiased max-w-2xl flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <SkipToContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Billy',
              jobTitle: 'Engenheiro de Software Full-Stack',
              url: 'https://billy.dev.br',
              sameAs: [
                'https://github.com/billyfranklim1',
                'https://www.linkedin.com/in/billyfranklim/',
                'https://twitter.com/billyfranklim1',
                'https://www.instagram.com/billy.dev.br',
              ],
              knowsAbout: ['Laravel', 'Vue.js', 'React', 'Next.js', 'PHP', 'JavaScript', 'TypeScript'],
            }),
          }}
        />
        <main id="main-content" className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <GoogleAnalytics />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}

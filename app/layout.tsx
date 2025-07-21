import './global.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from './components/nav';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { SandpackCSS } from './blog/[slug]/sandpack';

export const metadata: Metadata = {
  metadataBase: new URL('https://billy.dev.br'),
  title: {
    default: 'Billy Franklim - Engenheiro de Software Full-Stack',
    template: '%s | Billy Franklim',
  },
  description: 'Engenheiro de Software Full-Stack com 7 anos de experiência em Laravel, Vue.js e React. Desenvolvimento web, APIs e soluções escaláveis.',
  keywords: 'Billy Franklim, Engenheiro de Software, Full-Stack, Laravel, Vue.js, React, Next.js, PHP, JavaScript, TypeScript, Desenvolvimento Web, APIs',
  authors: [{ name: 'Billy Franklim' }],
  creator: 'Billy Franklim',
  openGraph: {
    title: 'Billy Franklim - Engenheiro de Software Full-Stack',
    description: 'Engenheiro de Software Full-Stack com expertise em Laravel, Vue.js e React. Confira meus projetos e artigos sobre desenvolvimento web.',
    url: 'https://billy.dev.br',
    siteName: 'Billy Franklim',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: 'https://billy.dev.br/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Billy Franklim - Engenheiro de Software',
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
    title: 'Billy Franklim',
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
    <footer className="flex justify-between items-center text-xs mt-8 mb-4">
      <span>© 2024 Billy. Todos os direitos reservados.</span>
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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-M8LBWHFC6T"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-M8LBWHFC6T');
            `,
          }}
        />
      </head>
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Billy Franklim',
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
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
          <Footer />
        </main>
      </body>
    </html>
  );
}

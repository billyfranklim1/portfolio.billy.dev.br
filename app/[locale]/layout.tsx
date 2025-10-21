import type { Metadata } from 'next';
import { Navbar } from '../components/nav';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { SandpackCSS } from './blog/[slug]/sandpack';
import { GoogleAnalytics } from '../components/GoogleAnalytics';
import { SkipToContent } from '../components/SkipToContent';
import { Suspense } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const t = await getTranslations({ locale: localeParam, namespace: 'metadata' });

  const locale = localeParam === 'pt' ? 'pt_BR' : 'en_US';

  return {
    metadataBase: new URL('https://billy.dev.br'),
    title: {
      default: t('title'),
      template: '%s | Billy',
    },
    description: t('description'),
    keywords: t('keywords'),
    authors: [{ name: 'Billy' }],
    creator: 'Billy',
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: 'https://billy.dev.br',
      siteName: 'Billy',
      locale: locale,
      type: 'website',
      images: [
        {
          url: 'https://billy.dev.br/opengraph-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Billy - Software Engineer',
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
      languages: {
        'pt-BR': 'https://billy.dev.br/pt',
        'en-US': 'https://billy.dev.br/en',
      },
      types: {
        'application/rss+xml': 'https://billy.dev.br/rss.xml',
      },
    },
    verification: {
      google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
      yandex: '14d2e73487fa6c71',
    },
  };
}

const Footer = async ({ locale }: { locale: string }) => {
  const t = await getTranslations({ locale, namespace: 'footer' });

  return (
    <footer className="flex justify-between items-center text-xs mt-16 mb-8 text-neutral-600 dark:text-neutral-400">
      <span>{t('copyright')}</span>
      <div className="flex space-x-4">
        {/*  */}
      </div>
    </footer>
  );
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: 'home' });

  return (
    <NextIntlClientProvider messages={messages}>
      <SandpackCSS />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Billy',
            jobTitle: t('role'),
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
        <SkipToContent />
        <Navbar />
        {children}
        <Suspense fallback={<Footer locale={locale} />}>
          <Footer locale={locale} />
        </Suspense>
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        <Analytics />
        <SpeedInsights />
      </main>
    </NextIntlClientProvider>
  );
}

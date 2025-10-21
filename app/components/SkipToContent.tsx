'use client';

import { useTranslations } from 'next-intl';

export function SkipToContent() {
  const t = useTranslations('aria');

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      aria-label={t('skipToContent')}
    >
      {t('skipToContent')}
    </a>
  );
}

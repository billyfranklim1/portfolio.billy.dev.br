'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { locales, localeNames } from '@/i18n';
import { useTransition } from 'react';

type BlogLanguageSwitcherProps = {
  translations?: {
    [key: string]: string;
  };
  currentSlug: string;
};

export function BlogLanguageSwitcher({ translations, currentSlug }: BlogLanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale: string) => {
    if (newLocale === locale) return;

    startTransition(() => {
      // If we have translations mapping, use it
      if (translations && translations[newLocale]) {
        router.push(`/${newLocale}/blog/${translations[newLocale]}`);
      } else {
        // Fallback to blog list page
        router.push(`/${newLocale}/blog`);
      }
    });
  };

  const flagEmojis: { [key: string]: string } = {
    pt: '🇧🇷',
    en: '🇺🇸',
  };

  return (
    <div className="flex items-center gap-1">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          disabled={isPending || loc === locale}
          className={`text-xl transition-all px-2 py-1 rounded hover:scale-110 ${
            loc === locale
              ? 'opacity-100 scale-110'
              : 'opacity-50 hover:opacity-100'
          }`}
          aria-label={`Switch to ${localeNames[loc]}`}
          aria-current={loc === locale ? 'true' : undefined}
          title={localeNames[loc]}
        >
          {flagEmojis[loc] || loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

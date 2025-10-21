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

  return (
    <div className="flex items-center gap-2">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          disabled={isPending || loc === locale}
          className={`text-sm transition-all px-2 py-1 rounded ${
            loc === locale
              ? 'text-neutral-800 dark:text-neutral-200 font-semibold underline'
              : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200'
          }`}
          aria-label={`Switch to ${localeNames[loc]}`}
          aria-current={loc === locale ? 'true' : undefined}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

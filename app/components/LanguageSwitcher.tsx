'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { locales, localeNames } from '@/i18n';
import { useTransition } from 'react';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale: string) => {
    if (newLocale === locale) return;

    startTransition(() => {
      // Remove current locale from pathname
      const pathWithoutLocale = pathname.replace(`/${locale}`, '');

      // Check if we're on a blog post page
      const blogPostMatch = pathWithoutLocale.match(/^\/blog\/(.+)$/);

      if (blogPostMatch) {
        // We're on a blog post - redirect to blog list instead
        // The BlogLanguageSwitcher in the post page should be used for direct translation
        router.push(`/${newLocale}/blog`);
      } else {
        // Navigate to new locale with same path
        router.push(`/${newLocale}${pathWithoutLocale || ''}`);
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

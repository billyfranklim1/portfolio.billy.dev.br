'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Navbar() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('nav');

  const navItems = [
    { path: '', name: t('home') },
    { path: t('projects'), name: t('projects') },
    { path: t('work'), name: t('work') },
    { path: t('blog'), name: t('blog') },
    { path: t('uses'), name: t('uses') },
  ];

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-col gap-4"
          aria-label={t('home')}
        >
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row space-x-0 pr-10">
              {navItems.map(({ path, name }) => {
                const fullPath = `/${locale}${path ? `/${path}` : ''}`;
                const isActive = pathname === fullPath;

                return (
                  <Link
                    key={path || 'home'}
                    href={fullPath}
                    className={`transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 ${
                      isActive ? 'text-neutral-800 dark:text-neutral-200 font-semibold' : ''
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {name}
                  </Link>
                );
              })}
            </div>
          </div>
          <LanguageSwitcher />
        </nav>
      </div>
    </aside>
  );
}

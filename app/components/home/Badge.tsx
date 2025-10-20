'use client'

import { trackSocialClick } from '../GoogleAnalytics';

interface BadgeProps {
  href: string;
  children: React.ReactNode;
}

export function Badge({ href, children, ...props }: BadgeProps) {
  const handleClick = () => {
    if (href) {
      trackSocialClick(href);
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      onClick={handleClick}
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
      {...props}
    >
      {children}
    </a>
  );
}

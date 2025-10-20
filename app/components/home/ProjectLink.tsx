'use client'

import Link from 'next/link';
import { trackExternalLink, trackProjectView } from '../GoogleAnalytics';

interface ProjectLinkProps {
  name: string;
  description: string;
  url: string;
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ProjectLink({ name, description, url }: ProjectLinkProps) {
  const isExternal = url.startsWith('http');

  const handleClick = () => {
    if (isExternal) {
      trackExternalLink(url, 'project');
    } else {
      trackProjectView(name);
    }
  };

  const linkProps = isExternal ? {
    target: "_blank",
    rel: "noopener noreferrer"
  } : {};

  return (
    <div className="group w-full">
      <Link
        href={url}
        {...linkProps}
        onClick={handleClick}
        className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
      >
        <div className="flex flex-col">
          <p className="font-medium text-neutral-900 dark:text-neutral-100">
            {name}
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            {description}
          </p>
        </div>
        <div className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12">
          <ArrowIcon />
        </div>
      </Link>
    </div>
  );
}

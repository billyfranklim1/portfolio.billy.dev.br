import type { Metadata } from 'next';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { CustomMDX } from 'app/components/mdx';
import { getBlogPosts } from 'app/db/blog';
import { unstable_noStore as noStore } from 'next/cache';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata | undefined> {
  const { locale, slug } = await params;
  let post = getBlogPosts(locale).find((post) => post.slug === slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? `https://billy.dev.br${image}`
    : `https://billy.dev.br/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://billy.dev.br/${locale}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

function formatDate(date: string, locale: string = 'en') {
  noStore();
  let currentDate = new Date();
  if (!date.includes('T')) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = '';

  const translations = {
    pt: {
      yearsAgo: (n: number) => `${n} ano${n > 1 ? 's' : ''} atrás`,
      monthsAgo: (n: number) => `${n} ${n > 1 ? 'meses' : 'mês'} atrás`,
      daysAgo: (n: number) => `${n} dia${n > 1 ? 's' : ''} atrás`,
      today: 'Hoje',
    },
    en: {
      yearsAgo: (n: number) => `${n}y ago`,
      monthsAgo: (n: number) => `${n}mo ago`,
      daysAgo: (n: number) => `${n}d ago`,
      today: 'Today',
    },
  };

  const t = translations[locale as keyof typeof translations] || translations.en;

  if (yearsAgo > 0) {
    formattedDate = t.yearsAgo(yearsAgo);
  } else if (monthsAgo > 0) {
    formattedDate = t.monthsAgo(monthsAgo);
  } else if (daysAgo > 0) {
    formattedDate = t.daysAgo(daysAgo);
  } else {
    formattedDate = t.today;
  }

  const localeCode = locale === 'pt' ? 'pt-BR' : 'en-US';
  let fullDate = targetDate.toLocaleString(localeCode, {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return `${fullDate} (${formattedDate})`;
}

export default async function Blog({ params }: Props) {
  const { locale, slug } = await params;
  let post = getBlogPosts(locale).find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `https://billy.dev.br${post.metadata.image}`
              : `https://billy.dev.br/og?title=${post.metadata.title}`,
            url: `https://billy.dev.br/${locale}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'Billy',
            },
          }),
        }}
      />
      <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt, locale)}
        </p>
      </div>
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}

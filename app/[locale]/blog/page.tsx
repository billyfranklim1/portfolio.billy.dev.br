import Link from 'next/link';
import { getBlogPosts } from 'app/db/blog';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const metadata = {
    pt: {
      title: 'Blog',
      description: 'Artigos sobre desenvolvimento de software, tecnologia, Laravel, Vue.js, React e experiências na área de programação.',
      ogTitle: 'Blog - Billy',
      ogDescription: 'Artigos sobre desenvolvimento de software, tecnologia e experiências na área de programação.',
    },
    en: {
      title: 'Blog',
      description: 'Articles about software development, technology, Laravel, Vue.js, React and experiences in programming.',
      ogTitle: 'Blog - Billy',
      ogDescription: 'Articles about software development, technology and programming experiences.',
    },
  };

  const meta = metadata[locale as keyof typeof metadata] || metadata.en;

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
      type: 'website',
    },
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations();

  let allBlogs = getBlogPosts(locale);

  const content = {
    pt: {
      title: 'leia meu blog',
    },
    en: {
      title: 'read my blog',
    },
  };

  const c = content[locale as keyof typeof content] || content.en;

  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        {c.title}
      </h1>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/${locale}/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </section>
  );
}

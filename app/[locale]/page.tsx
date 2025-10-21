import { Suspense } from "react";
import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import Image from "next/image";
import avatar from "app/avatar.jpg";
import { PreloadResources } from "app/preload";
import {
  getLeeYouTubeSubs,
  getVercelYouTubeSubs,
} from "app/db/queries";
import { Badge } from '../components/home/Badge';
import { ProjectLink } from '../components/home/ProjectLink';
import { BlogLink } from '../components/home/BlogLink';
import { getTranslations } from 'next-intl/server';

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

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home' });
  const tn = await getTranslations({ locale, namespace: 'nav' });
  const tp = await getTranslations({ locale, namespace: 'projects' });

  return (
    <section>
      <PreloadResources />
      <h1 className="font-medium text-2xl mb-2 tracking-tighter text-gray-900 dark:text-gray-400">
        <b className="font-bold dark:text-gray-100 text-gray-900">
          {t('greeting')}
        </b>
        <br />
        {t('role')}
      </h1>
      <div className="flex flex-wrap gap-2 mt-2 mb-10">
        <Badge href="https://www.linkedin.com/in/billyfranklim/">
          <Image
            alt={t('connectLinkedIn')}
            src="/linkedIn.svg"
            width={13}
            height={11}
            style={{ marginRight: '5px' }}
            priority
          />
          LinkedIn
        </Badge>
        <Badge href="https://www.github.com/billyfranklim1">
          <Image
            alt={t('viewGitHub')}
            src="/github-logo.svg"
            width={13}
            height={11}
            style={{ marginRight: '5px' }}
            priority
          />
          GitHub
        </Badge>
        <Badge href="https://www.instagram.com/billy.dev.br">
          <Image
            alt={t('followInstagram')}
            src="/instagram.svg"
            width={13}
            height={11}
            style={{ marginRight: '5px' }}
            priority
          />
          Instagram
        </Badge>
        <Badge href="https://www.twitter.com/billyfranklim1">
          <Image
            alt={t('followTwitter')}
            src="/x.svg"
            width={13}
            height={11}
            style={{ marginRight: '5px' }}
            priority
          />
          X (Twitter)
        </Badge>
      </div>
      <p className="prose prose-neutral dark:prose-invert">
        {locale === 'pt' ? (
          <>
            Eu sou engenheiro de software com 7 anos de experiência. Tendo{' '}
            <Link href={`/${locale}/${tn('work')}`}>trabalhado</Link>{' '}
            em empresas de diversos tamanhos e segmentos, tais como startups, empresas de médio, grande porte e empresas governamentais.
          </>
        ) : (
          <>
            I'm a software engineer with 7 years of experience. I've{' '}
            <Link href={`/${locale}/${tn('work')}`}>worked</Link>{' '}
            in companies of various sizes and sectors, such as startups, medium and large enterprises, and government agencies.
          </>
        )}
        <br />
        <br />
        {locale === 'pt' ? (
          <>
            Minhas principais stacks são{' '}
            <Badge href="https://laravel.com">
              <Image
                src="/laravel.svg"
                alt={t('frameworkLaravel')}
                className="inline-flex mr-1"
                width={13}
                height={11}
                style={{ marginRight: '5px' }}
              />
              Laravel
            </Badge>
            {', '}
            <Badge href="https://vuejs.org">
              <Image
                src="/vue.svg"
                alt={t('frameworkVue')}
                className="inline-flex"
                width={13}
                height={11}
                style={{ marginRight: '5px' }}
              />
              VueJs
            </Badge>
            {', '}
            <Badge href="https://react.dev">
              <svg
                width="13"
                height="11"
                role="img"
                aria-label={t('libraryReact')}
                className="inline-flex mr-1"
              >
                <use href="/sprite.svg#react" />
              </svg>
              React
            </Badge>
            .
          </>
        ) : (
          <>
            My main stacks are{' '}
            <Badge href="https://laravel.com">
              <Image
                src="/laravel.svg"
                alt={t('frameworkLaravel')}
                className="inline-flex mr-1"
                width={13}
                height={11}
                style={{ marginRight: '5px' }}
              />
              Laravel
            </Badge>
            {', '}
            <Badge href="https://vuejs.org">
              <Image
                src="/vue.svg"
                alt={t('frameworkVue')}
                className="inline-flex"
                width={13}
                height={11}
                style={{ marginRight: '5px' }}
              />
              VueJs
            </Badge>
            {', '}
            <Badge href="https://react.dev">
              <svg
                width="13"
                height="11"
                role="img"
                aria-label={t('libraryReact')}
                className="inline-flex mr-1"
              >
                <use href="/sprite.svg#react" />
              </svg>
              React
            </Badge>
            .
          </>
        )}
      </p>

      <div className="prose prose-neutral dark:prose-invert">
        <h3 className="font-medium text-xl tracking-tighter">
          {t('recentPosts')}
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <BlogLink
          slug="arte-aprender-experiencia-transformadora"
          name={locale === 'pt' ? 'A arte de aprender' : 'The art of learning'}
          description={locale === 'pt' ? 'aprendendo a aprender é o segredo' : 'learning to learn is the secret'}
        />
        <BlogLink
          slug="minha-jornada-transformadora-na-tecnologia"
          name={locale === 'pt' ? 'Minha jornada na tecnologia' : 'My journey in tech'}
          description={locale === 'pt' ? 'como entrei na área de tecnologia' : 'how I got into tech'}
        />
      </div>
      <div className="flex justify-end mt-2">
        <Link href={`/${locale}/${tn('blog')}`} className="flex items-center space-3 gap-2 underline font-medium text-xs">
          {t('viewMore')}
        </Link>
      </div>

      <section>
        <h2 className="font-medium text-xl mb-4 tracking-tighter">
          {t('projects')}
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ProjectLink
            name={tp('laravelAuthApi.name')}
            description={tp('laravelAuthApi.description')}
            url="https://github.com/billyfranklim1/laravel-auth-api"
          />
          <ProjectLink
            name={tp('loteria.name')}
            description={tp('loteria.description')}
            url="https://github.com/billyfranklim1/loteria"
          />
        </div>
        <div className="flex justify-end mt-2">
          <Link href={`/${locale}/${tn('projects')}`} className="flex items-center space-3 gap-2 underline font-medium text-xs">
            {t('viewMore')}
          </Link>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-medium text-xl mb-4 tracking-tighter">
          {t('productionProjects')}
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <ProjectLink
            name={tp('hubnews.name')}
            description={tp('hubnews.description')}
            url={`/${locale}/${tn('projects')}/hubnews`}
          />
          <ProjectLink
            name={tp('voiceNotes.name')}
            description={tp('voiceNotes.description')}
            url={`/${locale}/${tn('projects')}/voice-notes`}
          />
          <ProjectLink
            name={tp('sistemaReino.name')}
            description={tp('sistemaReino.description')}
            url={`/${locale}/${tn('projects')}/sistema-reino`}
          />
        </div>
      </section>
    </section>
  );
}

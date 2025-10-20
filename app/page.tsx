import { Suspense } from "react";
import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import Image from "next/image";
import smashing from "public/images/home/smashing.jpg";
import summit from "public/images/home/summit.jpg";
import reactathon from "public/images/home/reactathon.jpg";
import ship from "public/images/home/ship.jpg";
import filming from "public/images/home/filming.jpg";
import meetups from "public/images/home/meetups.jpg";
import vercel from "public/images/home/vercel.jpg";
import avatar from "app/avatar.jpg";
import ViewCounter from "app/blog/view-counter";
import { PreloadResources } from "app/preload";
import {
  getLeeYouTubeSubs,
  getVercelYouTubeSubs,
  getViewsCount,
} from "app/db/queries";
import { Badge } from './components/home/Badge';
import { ProjectLink } from './components/home/ProjectLink';
import { BlogLink } from './components/home/BlogLink';

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

function ChannelLink({ img, link, name }) {
  return (
    <div className="group flex w-full">
      <a
        href={link}
        target="_blank"
        className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
      >
        <div className="flex items-center space-x-3">
          <div className="relative h-16">
            <Image
              alt={name}
              src={img}
              height={64}
              width={64}
              sizes="33vw"
              className="border border-neutral-200 dark:border-neutral-700 rounded-full h-16 w-16"
              priority
            />
            <div className="border border-neutral-200 dark:border-neutral-700 rounded-full bg-white inline-flex p-1 relative h-6 w-6 items-center -top-6 -right-10">
              <svg width="15" height="11" role="img" aria-label="YouTube logo">
                <use href="/sprite.svg#youtube" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-neutral-900 dark:text-neutral-100">
              {name}
            </p>
            <Suspense fallback={<p className="h-6" />}>
              <Subs name={name} />
            </Suspense>
          </div>
        </div>
        <div className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}

async function Subs({ name }: { name: string }) {
  noStore();
  let subscribers;
  if (name === "@leerob") {
    subscribers = await getLeeYouTubeSubs();
  } else {
    subscribers = await getVercelYouTubeSubs();
  }

  return (
    <p className="text-neutral-600 dark:text-neutral-400">
      {subscribers} subscribers
    </p>
  );
}

async function Views({ slug }: { slug: string }) {
  let views = await getViewsCount();
  return <ViewCounter allViews={views} slug={slug} />;
}

export default function Page() {
  return (
    <section>
      <PreloadResources />
      <h1 className="font-medium text-2xl mb-2 tracking-tighter text-gray-900 dark:text-gray-400">
        <b className="font-bold dark:text-gray-100 text-gray-900">
          Olá, meu nome é Billy 👋 .</b> <br></br>Engenheiro de Software Full-Stack.
      </h1>
      <div className="flex flex-wrap gap-2 mt-2 mb-10">
        <Badge href="https://www.linkedin.com/in/billyfranklim/">
          <Image alt="Conecte-se comigo no LinkedIn" src="/linkedIn.svg" width={13}
            height={11} style={{ marginRight: '5px' }} priority />
          LinkedIn
        </Badge>
        <Badge href="https://www.github.com/billyfranklim1">
          <Image alt="Veja meus projetos no GitHub" src="/github-logo.svg" width={13}
            height={11} style={{ marginRight: '5px' }} priority />
          GitHub
        </Badge>
        <Badge href="https://www.instagram.com/billy.dev.br">
          <Image alt="Siga-me no Instagram" src="/instagram.svg" width={13}
            height={11} style={{ marginRight: '5px' }} priority />
          Instagram
        </Badge>
        <Badge href="https://www.twitter.com/billyfranklim1">
          <Image alt="Acompanhe-me no X (Twitter)" src="/x.svg" width={13}
            height={11} style={{ marginRight: '5px' }} priority />
          X (Twitter)
        </Badge>
      </div>
      <p className="prose prose-neutral dark:prose-invert">
        {'Eu sou engenheiro de software com 7 anos de experiência. Tendo '}
        <Link href="/work">trabalhado</Link> 
        {' em empresas de diversos tamanhos e segmentos, tais como startups, empresas de médio, grande porte e empresas governamentais. '}
        <br></br>
        <br></br>

        {'Minhas principais stacks são '}
        <Badge href="https://laravel.com">
          <Image src="/laravel.svg" alt="Framework Laravel" className="inline-flex mr-1" width={13} height={11} style={{ marginRight: '5px' }} />
          Laravel
        </Badge>
        {", "}
        <Badge href="https://vuejs.org">
          <Image src="/vue.svg" alt="Framework Vue.js" className="inline-flex" width={13} height={11} style={{ marginRight: '5px' }} />
          VueJs
        </Badge>
        {", "}
        <Badge href="https://react.dev">
          <svg
            width="13"
            height="11"
            role="img"
            aria-label="Biblioteca React"
            className="inline-flex mr-1"
          >
            <use href="/sprite.svg#react" />
          </svg>
          React
        </Badge>
        .
      </p>

      <div className="prose prose-neutral dark:prose-invert">
        <h3 className="font-medium text-xl tracking-tighter">
          📌 posts recentes
        </h3>
        {/* <p>
          De uma olhada em alguns dos meus post, é uma forma que encontrei de
          compartilhar conhecimento e experiências.
        </p> */}
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <BlogLink
          slug="arte-aprender-experiencia-transformadora"
          name="A arte de aprender"
          description="aprendendo a aprender é o segredo"
        />
        <BlogLink
          slug="minha-jornada-transformadora-na-tecnologia"
          name="Minha jornada na tecnologia"
          description="como entrei na área de tecnologia"
        />
      </div>
      <div className="flex justify-end mt-2">
        <Link href="/blog" className="flex items-center space-3 gap-2 underline font-medium text-xs">
          Ver mais
        </Link>
      </div>

      <section>
        <h2 className="font-medium text-xl mb-4 tracking-tighter">
          💼 alguns dos meus projetos
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ProjectLink
            name="Laravel Auth API"
            description="API de autenticação com Laravel Sanctum"
            url="https://github.com/billyfranklim1/laravel-auth-api"
          />
          <ProjectLink
            name="Loteria"
            description="Um projeto de loteria para estudo de TDD"
            url="https://github.com/billyfranklim1/loteria"
          />
        </div>
        <div className="flex justify-end mt-2">
          <Link href="/projects" className="flex items-center space-3 gap-2 underline font-medium text-xs">
            Ver mais
          </Link>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-medium text-xl mb-4 tracking-tighter">
          🚀 projetos em produção
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <ProjectLink
            name="HubNews AI"
            description="Plataforma de IA para análise de notícias"
            url="/projects/hubnews"
          />
          <ProjectLink
            name="Voice Notes"
            description="App para transcrição de notas de áudio"
            url="/projects/voice-notes"
          />
          <ProjectLink
            name="Sistema Reino"
            description="Gestão completa para igrejas"
            url="/projects/sistema-reino"
          />
        </div>
      </section>

      {/* <div className="my-8 flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 w-full">
        <ChannelLink
          img={avatar}
          name="@leerob"
          link="https://www.youtube.com/@leerob"
        />
        <ChannelLink
          img={vercel}
          name="@vercel"
          link="https://www.youtube.com/@vercelhq"
        />
      </div> */}

      {/* 
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I invest small angel checks into early stage startups building tools
          for developers.
        </p>
      </div>
<div className="columns-2 sm:columns-3 gap-4 my-8">
        <div className="relative h-40 mb-4">
          <Image
            alt="Me speaking on stage at React Summit about the future of Next.js"
            src={summit}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80 mb-4 sm:mb-0">
          <Image
            alt="Me, Lydia, and Delba filming the Next.js Conf keynote"
            src={filming}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-[-16px] sm:object-center"
          />
        </div>
        <div className="relative h-40 sm:h-80 sm:mb-4">
          <Image
            alt="Me standing on stage at Reactathon delivering the keynote"
            src={reactathon}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative h-40 mb-4 sm:mb-0">
          <Image
            alt="Me standing on stage at SmashingConf giving a talk about my optimism for the web"
            src={smashing}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40 mb-4">
          <Image
            alt="Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community"
            src={ship}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80">
          <Image
            alt="My badge on top of a pile of badges from a Vercel meetup we held"
            src={meetups}
            fill
            sizes="(min-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div> 
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I create educational content for developers, teaching them about web
          development, JavaScript and TypeScript, React and Next.js, and more.
          This comes in all forms: blog posts, videos, tweets, conference talks,
          and workshops. You can watch some of my favorites below.
        </p>
      </div>
      
      <div className="my-8 flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 w-full">
        <ChannelLink
          img={avatar}
          name="@leerob"
          link="https://www.youtube.com/@leerob"
        />
        <ChannelLink
          img={vercel}
          name="@vercel"
          link="https://www.youtube.com/@vercelhq"
        />
      </div>
      
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Over the past decade, I've written content on my blog and newsletter.
          I try to keep things simple. You'll find writing about technologies
          I'm interested in at the time, or how I'm learning and growing in my
          career, sharing knowledge along the way.
        </p>
      </div>
      <div className="my-8 flex flex-col space-y-4 w-full">
        <BlogLink
          name="What Makes A Great Developer Experience?"
          slug="developer-experience-examples"
        />
        <BlogLink name="What is Developer Relations?" slug="devrel-at-vercel" />
        <BlogLink name="The Story of Heroku" slug="heroku" />
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I invest small angel checks into early stage startups building tools
          for developers.
        </p>
      </div>
     

      <div className="my-8 flex flex-row space-x-2 w-full h-14 overflow-x-auto">
        <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
          <a href="https://linear.app">
            <svg width="78" height="20" role="img" aria-label="Linear logo">
              <use href="/sprite.svg#linear" />
            </svg>
          </a>
        </div>
        <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
          <a href="https://supabase.com">
            <svg width="100" height="19" role="img" aria-label="Supabase logo">
              <use href="/sprite.svg#supabase" />
            </svg>
          </a>
        </div>
        <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
          <a href="https://www.makeswift.com/blog/makeswift-is-joining-bigcommerce">
            <svg width="96" height="19" role="img" aria-label="Makeswift logo">
              <use href="/sprite.svg#makeswift" />
            </svg>
          </a>
        </div>
        <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
          <a href="https://resend.com">
            <svg width="70" height="17" role="img" aria-label="Resend logo">
              <use href="/sprite.svg#resend" />
            </svg>
          </a>
        </div>
        <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
          <a href="https://bun.sh">
            <svg width="35" height="27" role="img" aria-label="Bun logo">
              <use href="/sprite.svg#bun" />
            </svg>
          </a>
        </div>
      </div>

       
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I've worked with and advised companies on developer marketing,{' '}
          <Link href="/blog/devrel-at-vercel">developer relations</Link>,
          building open-source communities, product-led growth, and more.
        </p>
      </div>

      */}
      {/* <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/billyfranklim/"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">me encontre no linkedin</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/billyfranklim1"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">me encontre no github</p>
          </a>
        </li>
      </ul> */}
    </section>
  );
}

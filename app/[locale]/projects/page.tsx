import type { Metadata } from "next";
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'projectsPage' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

const ProjectsList = ({ projects, viewOnGithub }: { projects: any; viewOnGithub: string }) => {
  return (
    <div>
      {Object.entries(projects).map(([category, projectsInCategory]: [string, any[]]) => (
        <div key={category}>
          <h2 className="font-medium text-xl">{category}</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3" id={category.replace(/[^a-zA-Z]/g, "")}>
            {projectsInCategory.map(project => (
              <div key={project.title} className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded w-full justify-between px-3 py-4">
                <h5 className="font-medium text-base">{project.title}</h5>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">{project.description}</p>
                <div className="flex flex-wrap gap-1 my-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
                <Link target="_blank" href={project.link} className="text-xs hover:underline text-blue-600 dark:text-blue-400">
                  {viewOnGithub}
                </Link>
              </div>
            ))}
          </div>
          <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        </div>
      ))}
    </div>
  );
};

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'projectsPage' });
  const tn = await getTranslations({ locale, namespace: 'nav' });

  const projects = locale === 'pt' ? {
    "🚀 projetos em produção": [
      {
        "title": "HubNews AI",
        "description": "Plataforma de IA para análise e curadoria de notícias em tempo real",
        "link": `/${locale}/${tn('projects')}/hubnews`,
        "tags": ["ia", "react", "next.js", "tensorflow"]
      },
      {
        "title": "Voice Notes",
        "description": "App para transcrição de notas de áudio com IA",
        "link": `/${locale}/${tn('projects')}/voice-notes`,
        "tags": ["ia", "react", "speech-to-text"]
      },
      {
        "title": "Sistema Reino",
        "description": "Sistema completo de gestão para igrejas",
        "link": `/${locale}/${tn('projects')}/sistema-reino`,
        "tags": ["laravel", "vue.js", "saas"]
      },
    ],
    "💻 backend": [
      {
        "title": "Auth API",
        "description": "API de autenticação com Laravel Sanctum",
        "link": "https://github.com/billyfranklim1/laravel-auth-api",
        "tags": ["php", "laravel", "auth", "sanctum"]
      },
      {
        "title": "E-Commerce API",
        "description": "API que simula uma interface de um e-commerce, com entidades de clientes, produtos e pedidos",
        "link": "https://github.com/billyfranklim1/backend-challenge",
        "tags": ["laravel", "api", "php-unit", "docker"]
      },
      {
        "title": "Loteria API",
        "description": "API que simula um jogo de loteria",
        "link": "https://github.com/billyfranklim1/loteria",
        "tags": ["laravel", "api", "php-unit", "docker"]
      },
    ],
    "🌐 frontend": [
      {
        "title": "Pomodoro",
        "description": "Relógio pomodoro, para estudo e trabalho",
        "link": "https://github.com/billyfranklim1/node-api",
        "tags": ["html", "css", "javascript"]
      },
      {
        "title": "Next.js Blog",
        "description": "Blog feito com Next.js",
        "link": "https://github.com/billyfranklim1/nextjs-blog",
        "tags": ["nextjs", "react"]
      },
      {
        "title": "Login React",
        "description": "Tela de login feita com React",
        "link": "https://github.com/billyfranklim1/login-reactjs",
        "tags": ["reactjs", "javascript"]
      },
      {
        "title": "E-commerce - Pastel de ideias",
        "description": "E-commerce de uma pastelaria",
        "link": "https://github.com/billyfranklim1/frontend-challenge",
        "tags": ["vuejs", "javascript", "tailwindcss"]
      },
      {
        "title": "Portfolio",
        "description": "Portfolio landing page",
        "link": "https://github.com/billyfranklim1/portifolio-landing-page",
        "tags": ["html", "css", "javascript"]
      },
      {
        "title": "Netflix Clone Tailwind CSS",
        "description": "Clone da interface do Netflix feito com Tailwind CSS",
        "link": "https://github.com/billyfranklim1/site-clone-netflix-tailwindcss",
        "tags": ["tailwindcss", "html", "css", "javascript"]
      },
      {
        "title": "My Links",
        "description": "Gerenciador de links",
        "link": "https://github.com/billyfranklim1/my-links",
        "tags": ["html", "css", "javascript"]
      },
      {
        "title": "Snake JS",
        "description": "Jogo da cobrinha",
        "link": "https://github.com/billyfranklim1/snake_js",
        "tags": ["javascript", "html", "css"]
      },
    ],
    "📱 mobile": [
      {
        "title": "Login React Native",
        "description": "Tela de login feita com React Native",
        "link": "https://github.com/billyfranklim1/login-react-native",
        "tags": ["react-native", "javascript"]
      }
    ],
    "🤖 ia": [
      {
        "title": "API Movie Recommendation",
        "description": "API de recomendação de filmes usando inteligência artificial",
        "link": "https://github.com/billyfranklim1/movie-recommendation-api",
        "tags": ["gpt", "api", "python"]
      },
      {
        "title": "Gerador de Flashcards Anki",
        "description": "Gera flashcards para Anki usando a API do GPT",
        "link": "https://github.com/billyfranklim1/anki-flashcard-generator",
        "tags": ["gpt", "api", "python"]
      },
    ],
    "📄 scripts": [
      {
        "title": "LinkedIn Job Miner",
        "description": "Minerador de vagas de emprego no LinkedIn",
        "link": "https://github.com/billyfranklim1/LinkedIn-Job-Miner",
        "tags": ["python", "linkedin", "job", "miner"]
      },
      {
        "title": "Birthday Alert",
        "description": "Alerta de aniversário no grupo do WhatsApp",
        "link": "https://github.com/billyfranklim1/birthday",
        "tags": ["python", "whatsapp", "alert"]
      },
      {
        "title": "Twitter Python",
        "description": "Interface de linha de comando para o Twitter",
        "link": "https://github.com/billyfranklim1/twitter-python",
        "tags": ["python", "twitter"]
      },
      {
        "title": "Scrape Google Imagens",
        "description": "Scrape de imagens do Google",
        "link": "https://github.com/billyfranklim1/scrape-google-imagens-php",
        "tags": ["php", "scrape", "google-images"]
      }
    ]
  } : {
    "🚀 production projects": [
      {
        "title": "HubNews AI",
        "description": "AI platform for real-time news analysis and curation",
        "link": `/${locale}/${tn('projects')}/hubnews`,
        "tags": ["ai", "react", "next.js", "tensorflow"]
      },
      {
        "title": "Voice Notes",
        "description": "App for transcribing audio notes with AI",
        "link": `/${locale}/${tn('projects')}/voice-notes`,
        "tags": ["ai", "react", "speech-to-text"]
      },
      {
        "title": "Sistema Reino",
        "description": "Complete church management system",
        "link": `/${locale}/${tn('projects')}/sistema-reino`,
        "tags": ["laravel", "vue.js", "saas"]
      },
    ],
    "💻 backend": [
      {
        "title": "Auth API",
        "description": "Authentication API with Laravel Sanctum",
        "link": "https://github.com/billyfranklim1/laravel-auth-api",
        "tags": ["php", "laravel", "auth", "sanctum"]
      },
      {
        "title": "E-Commerce API",
        "description": "API simulating an e-commerce interface with customer, product, and order entities",
        "link": "https://github.com/billyfranklim1/backend-challenge",
        "tags": ["laravel", "api", "php-unit", "docker"]
      },
      {
        "title": "Lottery API",
        "description": "API simulating a lottery game",
        "link": "https://github.com/billyfranklim1/loteria",
        "tags": ["laravel", "api", "php-unit", "docker"]
      },
    ],
    "🌐 frontend": [
      {
        "title": "Pomodoro",
        "description": "Pomodoro timer for study and work",
        "link": "https://github.com/billyfranklim1/node-api",
        "tags": ["html", "css", "javascript"]
      },
      {
        "title": "Next.js Blog",
        "description": "Blog built with Next.js",
        "link": "https://github.com/billyfranklim1/nextjs-blog",
        "tags": ["nextjs", "react"]
      },
      {
        "title": "React Login",
        "description": "Login screen built with React",
        "link": "https://github.com/billyfranklim1/login-reactjs",
        "tags": ["reactjs", "javascript"]
      },
      {
        "title": "E-commerce - Pastel de ideias",
        "description": "E-commerce for a pastry shop",
        "link": "https://github.com/billyfranklim1/frontend-challenge",
        "tags": ["vuejs", "javascript", "tailwindcss"]
      },
      {
        "title": "Portfolio",
        "description": "Portfolio landing page",
        "link": "https://github.com/billyfranklim1/portifolio-landing-page",
        "tags": ["html", "css", "javascript"]
      },
      {
        "title": "Netflix Clone Tailwind CSS",
        "description": "Netflix interface clone built with Tailwind CSS",
        "link": "https://github.com/billyfranklim1/site-clone-netflix-tailwindcss",
        "tags": ["tailwindcss", "html", "css", "javascript"]
      },
      {
        "title": "My Links",
        "description": "Link manager",
        "link": "https://github.com/billyfranklim1/my-links",
        "tags": ["html", "css", "javascript"]
      },
      {
        "title": "Snake JS",
        "description": "Snake game",
        "link": "https://github.com/billyfranklim1/snake_js",
        "tags": ["javascript", "html", "css"]
      },
    ],
    "📱 mobile": [
      {
        "title": "React Native Login",
        "description": "Login screen built with React Native",
        "link": "https://github.com/billyfranklim1/login-react-native",
        "tags": ["react-native", "javascript"]
      }
    ],
    "🤖 ai": [
      {
        "title": "Movie Recommendation API",
        "description": "Movie recommendation API using artificial intelligence",
        "link": "https://github.com/billyfranklim1/movie-recommendation-api",
        "tags": ["gpt", "api", "python"]
      },
      {
        "title": "Anki Flashcard Generator",
        "description": "Generates flashcards for Anki using GPT API",
        "link": "https://github.com/billyfranklim1/anki-flashcard-generator",
        "tags": ["gpt", "api", "python"]
      },
    ],
    "📄 scripts": [
      {
        "title": "LinkedIn Job Miner",
        "description": "LinkedIn job posting scraper",
        "link": "https://github.com/billyfranklim1/LinkedIn-Job-Miner",
        "tags": ["python", "linkedin", "job", "miner"]
      },
      {
        "title": "Birthday Alert",
        "description": "Birthday alert for WhatsApp groups",
        "link": "https://github.com/billyfranklim1/birthday",
        "tags": ["python", "whatsapp", "alert"]
      },
      {
        "title": "Twitter Python",
        "description": "Command-line interface for Twitter",
        "link": "https://github.com/billyfranklim1/twitter-python",
        "tags": ["python", "twitter"]
      },
      {
        "title": "Google Images Scraper",
        "description": "Google images scraper",
        "link": "https://github.com/billyfranklim1/scrape-google-imagens-php",
        "tags": ["php", "scrape", "google-images"]
      }
    ]
  };

  const categories = locale === 'pt'
    ? ["🚀 projetos em produção", "💻 backend", "🌐 frontend", "📱 mobile", "🤖 IA", "📄 scripts"]
    : ["🚀 production projects", "💻 backend", "🌐 frontend", "📱 mobile", "🤖 AI", "📄 scripts"];

  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        {t('heading')}
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          {t('intro')}{' '}
          <a href="https://github.com/billyfranklim1" target="_blank" rel="noopener noreferrer" className="hover:underline">
            GitHub
          </a>
          . {t('classification')}
        </p>

        <h3 className="font-medium text-xl">{t('searchByCategory')}</h3>
        <div className="flex flex-wrap gap-2 mt-4">
          {categories.map((section) => (
            <Link
              key={section}
              href={`#${section.replace(/[^a-zA-Z]/g, "")}`}
              className="border border-neutral-200 dark:border-neutral-700 rounded-full px-3 md:px-4 py-1 md:py-2 text-xs font-medium no-underline hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              {section}
            </Link>
          ))}
        </div>

        <ProjectsList projects={projects} viewOnGithub={t('viewOnGithub')} />
      </div>
    </section>
  );
}

import { Metadata } from 'next'
import Link from 'next/link'
import { ProjectTracker } from '../../../components/ProjectTracker'
import { getTranslations } from 'next-intl/server'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  const metadata = {
    pt: {
      title: 'HubNews AI - Plataforma de Inteligência Artificial para Análise de Notícias | Billy',
      description: 'HubNews AI é uma plataforma inovadora que utiliza inteligência artificial para análise, curadoria e insights de notícias em tempo real. Desenvolvido por Billy.',
      keywords: 'HubNews, IA, inteligência artificial, análise de notícias, curadoria de conteúdo, news aggregator, AI news, Billy',
      ogTitle: 'HubNews AI - Plataforma de IA para Análise de Notícias',
      ogDescription: 'Plataforma inovadora que utiliza inteligência artificial para análise e curadoria de notícias em tempo real.',
    },
    en: {
      title: 'HubNews AI - Artificial Intelligence Platform for News Analysis | Billy',
      description: 'HubNews AI is an innovative platform that uses artificial intelligence for news analysis, curation and real-time insights. Developed by Billy.',
      keywords: 'HubNews, AI, artificial intelligence, news analysis, content curation, news aggregator, AI news, Billy',
      ogTitle: 'HubNews AI - AI Platform for News Analysis',
      ogDescription: 'Innovative platform that uses artificial intelligence for real-time news analysis and curation.',
    }
  }

  const meta = metadata[locale as keyof typeof metadata] || metadata.en

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
      url: `https://portfolio.billy.dev.br/${locale}/projects/hubnews`,
      siteName: 'Billy Portfolio',
      images: [
        {
          url: '/og-hubnews.jpg',
          width: 1200,
          height: 630,
          alt: 'HubNews AI Platform'
        }
      ],
      locale: locale === 'pt' ? 'pt_BR' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.ogTitle,
      description: meta.ogDescription,
      images: ['/og-hubnews.jpg'],
    },
    alternates: {
      canonical: `https://portfolio.billy.dev.br/${locale}/projects/hubnews`,
      languages: {
        'pt': 'https://portfolio.billy.dev.br/pt/projects/hubnews',
        'en': 'https://portfolio.billy.dev.br/en/projects/hubnews'
      }
    }
  }
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2 py-1 text-xs rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
      {children}
    </span>
  )
}

function Feature({ icon, title, description }: { icon: string, title: string, description: string }) {
  return (
    <div className="flex gap-3 p-4 rounded-lg border border-neutral-200 dark:border-neutral-800">
      <div className="text-xl">{icon}</div>
      <div>
        <h3 className="font-medium mb-1">{title}</h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">{description}</p>
      </div>
    </div>
  )
}

export default async function HubNewsPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations()

  const content = {
    pt: {
      back: '← voltar',
      title: 'HubNews AI',
      subtitle: 'Plataforma de Inteligência Artificial para Análise e Curadoria de Notícias',
      badges: ['Inteligência Artificial', 'Análise de Dados', 'News Aggregation', 'Machine Learning', 'Real-time Analytics'],
      aboutTitle: 'Sobre o Projeto',
      aboutText: 'O HubNews AI é uma plataforma revolucionária que combina o poder da inteligência artificial com análise avançada de dados para transformar a maneira como consumimos e entendemos notícias. Desenvolvido com as mais modernas tecnologias de IA, o projeto oferece curadoria personalizada, análise de sentimentos e identificação de tendências em tempo real.',
      problemTitle: 'Problema Resolvido',
      problemText: 'Em um mundo saturado de informações, tornou-se extremamente difícil filtrar o que é relevante e confiável. O HubNews AI resolve esse problema ao:',
      problemItems: [
        'Agregar notícias de múltiplas fontes confiáveis',
        'Filtrar conteúdo duplicado e de baixa qualidade',
        'Fornecer análises e insights através de IA',
        'Personalizar o conteúdo baseado em interesses do usuário'
      ],
      featuresTitle: 'Principais Funcionalidades',
      features: [
        {
          icon: '🤖',
          title: 'Análise por IA',
          description: 'Algoritmos avançados de machine learning para análise profunda de conteúdo e contexto'
        },
        {
          icon: '📊',
          title: 'Insights em Tempo Real',
          description: 'Dashboards interativos com métricas e tendências atualizadas constantemente'
        },
        {
          icon: '🎯',
          title: 'Curadoria Personalizada',
          description: 'Conteúdo filtrado e organizado de acordo com seus interesses e preferências'
        },
        {
          icon: '🔍',
          title: 'Detecção de Tendências',
          description: 'Identificação automática de tópicos emergentes e padrões de notícias'
        }
      ],
      stackTitle: 'Stack Tecnológica',
      stack: ['React', 'TensorFlow', 'Python', 'Next.js'],
      developedBy: 'Desenvolvido por'
    },
    en: {
      back: '← back',
      title: 'HubNews AI',
      subtitle: 'Artificial Intelligence Platform for News Analysis and Curation',
      badges: ['Artificial Intelligence', 'Data Analysis', 'News Aggregation', 'Machine Learning', 'Real-time Analytics'],
      aboutTitle: 'About the Project',
      aboutText: 'HubNews AI is a revolutionary platform that combines the power of artificial intelligence with advanced data analysis to transform how we consume and understand news. Developed with the most modern AI technologies, the project offers personalized curation, sentiment analysis, and real-time trend identification.',
      problemTitle: 'Problem Solved',
      problemText: 'In a world saturated with information, it has become extremely difficult to filter what is relevant and reliable. HubNews AI solves this problem by:',
      problemItems: [
        'Aggregating news from multiple trusted sources',
        'Filtering duplicate and low-quality content',
        'Providing analysis and insights through AI',
        'Personalizing content based on user interests'
      ],
      featuresTitle: 'Key Features',
      features: [
        {
          icon: '🤖',
          title: 'AI Analysis',
          description: 'Advanced machine learning algorithms for deep content and context analysis'
        },
        {
          icon: '📊',
          title: 'Real-Time Insights',
          description: 'Interactive dashboards with constantly updated metrics and trends'
        },
        {
          icon: '🎯',
          title: 'Personalized Curation',
          description: 'Content filtered and organized according to your interests and preferences'
        },
        {
          icon: '🔍',
          title: 'Trend Detection',
          description: 'Automatic identification of emerging topics and news patterns'
        }
      ],
      stackTitle: 'Technology Stack',
      stack: ['React', 'TensorFlow', 'Python', 'Next.js'],
      developedBy: 'Developed by'
    }
  }

  const c = content[locale as keyof typeof content] || content.en

  return (
    <section>
      <Link href={`/${locale}`} className="mb-8 inline-block">
        {c.back}
      </Link>

      <div className="mb-12">
        <h1 className="font-medium text-2xl mb-4 tracking-tighter">
          {c.title}
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6">
          {c.subtitle}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {c.badges.map((badge) => (
            <Badge key={badge}>{badge}</Badge>
          ))}
        </div>

        <div className="flex gap-4">
          <ProjectTracker
            projectName="HubNews AI"
            externalLink="https://hubnews.ai"
          />
        </div>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none mb-12">
        <h2>{c.aboutTitle}</h2>
        <p>{c.aboutText}</p>

        <h2>{c.problemTitle}</h2>
        <p>{c.problemText}</p>
        <ul>
          {c.problemItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mb-12">
        <h2 className="font-medium text-xl mb-4 tracking-tighter">{c.featuresTitle}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {c.features.map((feature, i) => (
            <Feature
              key={i}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="font-medium text-xl mb-4 tracking-tighter">{c.stackTitle}</h2>
        <div className="flex flex-wrap gap-2">
          {c.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>

      <div className="border-t border-neutral-200 dark:border-neutral-800 pt-8 mt-12">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {c.developedBy} <Link href={`/${locale}`} className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Billy</Link>
        </p>
      </div>
    </section>
  )
}

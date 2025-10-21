import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ProjectTracker } from '../../components/ProjectTracker'

export const metadata: Metadata = {
  title: 'HubNews AI - Plataforma de Inteligência Artificial para Análise de Notícias | Billy',
  description: 'HubNews AI é uma plataforma inovadora que utiliza inteligência artificial para análise, curadoria e insights de notícias em tempo real. Desenvolvido por Billy.',
  keywords: 'HubNews, IA, inteligência artificial, análise de notícias, curadoria de conteúdo, news aggregator, AI news, Billy',
  openGraph: {
    title: 'HubNews AI - Plataforma de IA para Análise de Notícias',
    description: 'Plataforma inovadora que utiliza inteligência artificial para análise e curadoria de notícias em tempo real.',
    url: 'https://portfolio.billy.dev.br/projects/hubnews',
    siteName: 'Billy Portfolio',
    images: [
      {
        url: '/og-hubnews.jpg',
        width: 1200,
        height: 630,
        alt: 'HubNews AI Platform'
      }
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HubNews AI - Plataforma de IA para Análise de Notícias',
    description: 'Plataforma inovadora que utiliza inteligência artificial para análise e curadoria de notícias.',
    images: ['/og-hubnews.jpg'],
  },
  alternates: {
    canonical: 'https://portfolio.billy.dev.br/projects/hubnews'
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

export default function HubNewsPage() {
  return (
    <section>
      <Link href="/" className="mb-8 inline-block">
        ← voltar
      </Link>

      <div className="mb-12">
        <h1 className="font-medium text-2xl mb-4 tracking-tighter">
          HubNews AI
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6">
          Plataforma de Inteligência Artificial para Análise e Curadoria de Notícias
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge>Inteligência Artificial</Badge>
          <Badge>Análise de Dados</Badge>
          <Badge>News Aggregation</Badge>
          <Badge>Machine Learning</Badge>
          <Badge>Real-time Analytics</Badge>
        </div>

        <div className="flex gap-4">
          <ProjectTracker 
            projectName="HubNews AI"
            externalLink="https://hubnews.ai"
          />
        </div>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none mb-12">
        <h2>Sobre o Projeto</h2>
        <p>
          O HubNews AI é uma plataforma revolucionária que combina o poder da inteligência artificial 
          com análise avançada de dados para transformar a maneira como consumimos e entendemos notícias. 
          Desenvolvido com as mais modernas tecnologias de IA, o projeto oferece curadoria personalizada, 
          análise de sentimentos e identificação de tendências em tempo real.
        </p>

        <h2>Problema Resolvido</h2>
        <p>
          Em um mundo saturado de informações, tornou-se extremamente difícil filtrar o que é relevante 
          e confiável. O HubNews AI resolve esse problema ao:
        </p>
        <ul>
          <li>Agregar notícias de múltiplas fontes confiáveis</li>
          <li>Filtrar conteúdo duplicado e de baixa qualidade</li>
          <li>Fornecer análises e insights através de IA</li>
          <li>Personalizar o conteúdo baseado em interesses do usuário</li>
        </ul>
      </div>

      <div className="mb-12">
        <h2 className="font-medium text-xl mb-4 tracking-tighter">Principais Funcionalidades</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Feature 
            icon="🤖"
            title="Análise por IA"
            description="Algoritmos avançados de machine learning para análise profunda de conteúdo e contexto"
          />
          <Feature 
            icon="📊"
            title="Insights em Tempo Real"
            description="Dashboards interativos com métricas e tendências atualizadas constantemente"
          />
          <Feature 
            icon="🎯"
            title="Curadoria Personalizada"
            description="Conteúdo filtrado e organizado de acordo com seus interesses e preferências"
          />
          <Feature 
            icon="🔍"
            title="Detecção de Tendências"
            description="Identificação automática de tópicos emergentes e padrões de notícias"
          />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="font-medium text-xl mb-4 tracking-tighter">Stack Tecnológica</h2>
        <div className="flex flex-wrap gap-2">
          <Badge>React</Badge>
          <Badge>TensorFlow</Badge>
          <Badge>Python</Badge>
          <Badge>Next.js</Badge>
        </div>
      </div>

      <div className="border-t border-neutral-200 dark:border-neutral-800 pt-8 mt-12">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Desenvolvido por <Link href="/" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">Billy</Link>
        </p>
      </div>
    </section>
  )
}
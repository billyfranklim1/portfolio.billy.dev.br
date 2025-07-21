import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'HubNews AI - Plataforma de Inteligência Artificial para Análise de Notícias | Billy Franklim',
  description: 'HubNews AI é uma plataforma inovadora que utiliza inteligência artificial para análise, curadoria e insights de notícias em tempo real. Desenvolvido por Billy Franklim.',
  keywords: 'HubNews, IA, inteligência artificial, análise de notícias, curadoria de conteúdo, news aggregator, AI news, Billy Franklim',
  openGraph: {
    title: 'HubNews AI - Plataforma de IA para Análise de Notícias',
    description: 'Plataforma inovadora que utiliza inteligência artificial para análise e curadoria de notícias em tempo real.',
    url: 'https://portfolio.billy.dev.br/projects/hubnews',
    siteName: 'Billy Franklim Portfolio',
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
    <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
      {children}
    </span>
  )
}

function Feature({ icon, title, description }: { icon: string, title: string, description: string }) {
  return (
    <div className="flex gap-4 p-6 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
      <div className="text-2xl">{icon}</div>
      <div>
        <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  )
}

export default function HubNewsPage() {
  return (
    <section className="max-w-4xl mx-auto">
      <Link 
        href="/"
        className="inline-flex items-center gap-2 mb-8 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Voltar
      </Link>

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          HubNews AI
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
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
          <a
            href="https://hubnews.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Visitar Projeto
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
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
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Principais Funcionalidades</h2>
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
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Stack Tecnológica</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <div className="text-3xl mb-2">⚛️</div>
            <p className="text-sm font-medium">React</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <div className="text-3xl mb-2">🧠</div>
            <p className="text-sm font-medium">TensorFlow</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <div className="text-3xl mb-2">🐍</div>
            <p className="text-sm font-medium">Python</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <div className="text-3xl mb-2">📱</div>
            <p className="text-sm font-medium">Next.js</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
        <p className="text-center text-gray-600 dark:text-gray-400">
          Desenvolvido por <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">Billy Franklim</Link>
        </p>
      </div>
    </section>
  )
}
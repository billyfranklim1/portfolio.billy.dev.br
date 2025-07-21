import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Sistema Reino - Software de Gestão Eclesiástica Completo | Billy',
  description: 'Sistema Reino é um software completo de gestão para igrejas e organizações religiosas. Gerencie membros, finanças, eventos e muito mais. Desenvolvido por Billy.',
  keywords: 'Sistema Reino, gestão de igreja, software eclesiástico, gestão de membros, dízimos e ofertas, Laravel, SaaS, Billy',
  openGraph: {
    title: 'Sistema Reino - Gestão Eclesiástica Completa',
    description: 'Software completo para gestão de igrejas com controle de membros, finanças, eventos e comunicação.',
    url: 'https://portfolio.billy.dev.br/projects/sistema-reino',
    siteName: 'Billy Portfolio',
    images: [
      {
        url: '/og-sistema-reino.jpg',
        width: 1200,
        height: 630,
        alt: 'Sistema Reino - Church Management Software'
      }
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sistema Reino - Gestão Eclesiástica Completa',
    description: 'Software completo para gestão de igrejas com controle de membros, finanças, eventos e comunicação.',
    images: ['/og-sistema-reino.jpg'],
  },
  alternates: {
    canonical: 'https://portfolio.billy.dev.br/projects/sistema-reino'
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

function Stat({ value, label }: { value: string, label: string }) {
  return (
    <div className="text-center">
      <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">{value}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400">{label}</p>
    </div>
  )
}

export default function SistemaReinoPage() {
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
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
          Sistema Reino
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
          Software de Gestão Eclesiástica Completo para Igrejas Modernas
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge>SaaS</Badge>
          <Badge>Church Management</Badge>
          <Badge>Laravel</Badge>
          <Badge>Gestão Financeira</Badge>
          <Badge>LGPD Compliance</Badge>
        </div>

        <div className="flex gap-4">
          <a
            href="https://sistemareino.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors"
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
          O Sistema Reino é uma solução completa de gestão eclesiástica desenvolvida para atender 
          as necessidades específicas de igrejas e organizações religiosas. Com foco em simplicidade 
          e eficiência, a plataforma digitaliza e otimiza todos os processos administrativos, 
          permitindo que líderes religiosos foquem no que realmente importa: cuidar de suas comunidades.
        </p>

        <h2>Problema Resolvido</h2>
        <p>
          Muitas igrejas ainda dependem de processos manuais e planilhas desorganizadas para gerenciar 
          suas operações. O Sistema Reino resolve esses desafios ao oferecer:
        </p>
        <ul>
          <li>Centralização de todos os dados em uma única plataforma</li>
          <li>Automação de processos administrativos repetitivos</li>
          <li>Controle financeiro transparente e seguro</li>
          <li>Comunicação eficiente com a comunidade</li>
          <li>Relatórios e insights para tomada de decisão</li>
        </ul>
      </div>

      <div className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">Impacto Real</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <Stat value="1.200+" label="Igrejas Atendidas" />
          <Stat value="350K+" label="Membros Gerenciados" />
          <Stat value="R$ 45M+" label="Dízimos Processados" />
          <Stat value="98%" label="Satisfação" />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Principais Funcionalidades</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Feature 
            icon="👥"
            title="Gestão de Membros"
            description="Cadastro completo com histórico de participação, grupos e ministérios"
          />
          <Feature 
            icon="💰"
            title="Controle Financeiro"
            description="Gestão de dízimos, ofertas, despesas e relatórios financeiros detalhados"
          />
          <Feature 
            icon="📅"
            title="Agenda e Eventos"
            description="Calendário integrado com controle de presença e inscrições"
          />
          <Feature 
            icon="📊"
            title="Relatórios e Dashboards"
            description="Análises visuais e métricas para apoiar decisões estratégicas"
          />
          <Feature 
            icon="📱"
            title="Comunicação Integrada"
            description="Envio de emails e notificações por WhatsApp em massa"
          />
          <Feature 
            icon="🔒"
            title="Segurança e LGPD"
            description="Dados protegidos com conformidade total à legislação brasileira"
          />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Planos e Preços</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="p-6 rounded-lg border-2 border-gray-200 dark:border-gray-800">
            <h3 className="font-bold text-lg mb-2">Básico</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Para igrejas pequenas</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Até 200 membros
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Módulos essenciais
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Suporte por email
              </li>
            </ul>
          </div>
          
          <div className="p-6 rounded-lg border-2 border-purple-500 dark:border-purple-400 bg-purple-50 dark:bg-purple-900/20">
            <h3 className="font-bold text-lg mb-2">Crescimento</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Mais popular</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Até 1000 membros
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Todos os módulos
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Suporte prioritário
              </li>
            </ul>
          </div>
          
          <div className="p-6 rounded-lg border-2 border-gray-200 dark:border-gray-800">
            <h3 className="font-bold text-lg mb-2">Premium</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Para grandes igrejas</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Membros ilimitados
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Recursos exclusivos
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Suporte dedicado
              </li>
            </ul>
          </div>
        </div>
        
        <p className="text-center mt-6 text-purple-600 dark:text-purple-400 font-semibold">
          14 dias grátis • Sem cartão de crédito
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Stack Tecnológica</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <div className="text-3xl mb-2">🎨</div>
            <p className="text-sm font-medium">Laravel</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <div className="text-3xl mb-2">🎯</div>
            <p className="text-sm font-medium">Vue.js</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <div className="text-3xl mb-2">💾</div>
            <p className="text-sm font-medium">MySQL</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <div className="text-3xl mb-2">☁️</div>
            <p className="text-sm font-medium">AWS</p>
          </div>
        </div>
      </div>

      <div className="mb-12 p-8 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
        <blockquote className="text-center">
          <p className="text-lg italic mb-4 text-gray-700 dark:text-gray-300">
            "O que não pode ser medido, não pode ser gerenciado"
          </p>
          <cite className="text-sm text-gray-600 dark:text-gray-400">- W. E. Deming</cite>
        </blockquote>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
        <p className="text-center text-gray-600 dark:text-gray-400">
          Desenvolvido por <Link href="/" className="text-purple-600 dark:text-purple-400 hover:underline">Billy</Link>
        </p>
      </div>
    </section>
  )
}
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

export default function SistemaReinoPage() {
  return (
    <section>
      <Link href="/" className="mb-8 inline-block">
        ← voltar
      </Link>

      <div className="mb-12">
        <h1 className="font-medium text-2xl mb-4 tracking-tighter">
          Sistema Reino
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6">
          Software de Gestão Eclesiástica Completo para Igrejas Modernas
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge>SaaS</Badge>
          <Badge>Church Management</Badge>
          <Badge>Laravel</Badge>
          <Badge>Gestão Financeira</Badge>
          <Badge>LGPD Compliance</Badge>
        </div>

        <a
          href="https://sistemareino.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm hover:underline"
        >
          Visitar Projeto
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
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

      <div className="mb-12">
        <h2 className="font-medium text-xl mb-4 tracking-tighter">Principais Funcionalidades</h2>
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
        <h2 className="font-medium text-xl mb-4 tracking-tighter">Stack Tecnológica</h2>
        <div className="flex flex-wrap gap-2">
          <Badge>Laravel</Badge>
          <Badge>Vue.js</Badge>
          <Badge>MySQL</Badge>
          <Badge>AWS</Badge>
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
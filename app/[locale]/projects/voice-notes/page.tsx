import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Voice Notes - Aplicação Web para Transcrição e Análise de Áudio | Billy',
  description: 'Voice Notes é uma aplicação web moderna para gravação, transcrição automática e análise inteligente de notas de áudio. Desenvolvido com Laravel e IA por Billy.',
  keywords: 'Voice Notes, transcrição de áudio, notas de voz, Laravel, IA, inteligência artificial, produtividade, Billy',
  openGraph: {
    title: 'Voice Notes - Transcrição e Análise Inteligente de Áudio',
    description: 'Aplicação web para gravação, transcrição automática e análise inteligente de notas de áudio.',
    url: 'https://portfolio.billy.dev.br/projects/voice-notes',
    siteName: 'Billy Portfolio',
    images: [
      {
        url: '/og-voice-notes.jpg',
        width: 1200,
        height: 630,
        alt: 'Voice Notes Application'
      }
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voice Notes - Transcrição e Análise Inteligente de Áudio',
    description: 'Aplicação web para gravação, transcrição automática e análise inteligente de notas de áudio.',
    images: ['/og-voice-notes.jpg'],
  },
  alternates: {
    canonical: 'https://portfolio.billy.dev.br/projects/voice-notes'
  }
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2 py-1 text-xs rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
      {children}
    </span>
  )
}

function Feature({ icon, title, description }: { icon: string, title, description: string }) {
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

export default function VoiceNotesPage() {
  return (
    <section>
      <Link href="/" className="mb-8 inline-block">
        ← voltar
      </Link>

      <div className="mb-12">
        <h1 className="font-medium text-2xl mb-4 tracking-tighter">
          Voice Notes
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6">
          Aplicação Web para Gravação, Transcrição e Análise Inteligente de Notas de Áudio
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge>Laravel</Badge>
          <Badge>Inteligência Artificial</Badge>
          <Badge>Transcrição de Áudio</Badge>
          <Badge>Produtividade</Badge>
          <Badge>SaaS</Badge>
        </div>

        <a
          href="https://voice-notes.laravel.cloud/"
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
          Voice Notes é uma aplicação web inovadora que revoluciona a forma como capturamos e organizamos 
          ideias através de áudio. Desenvolvida com Laravel e integrada com tecnologias de IA de ponta, 
          a plataforma permite que usuários gravem, transcrevam e analisem suas notas de voz de forma 
          eficiente e inteligente.
        </p>

        <h2>Problema Resolvido</h2>
        <p>
          Muitas ideias valiosas se perdem porque é mais rápido falar do que escrever. O Voice Notes 
          resolve esse problema ao oferecer:
        </p>
        <ul>
          <li>Gravação rápida e fácil de notas de áudio</li>
          <li>Transcrição automática com alta precisão</li>
          <li>Organização inteligente com tags e categorias</li>
          <li>Busca avançada em todo o conteúdo transcrito</li>
          <li>Resumos automáticos gerados por IA</li>
        </ul>
      </div>

      <div className="mb-12">
        <h2 className="font-medium text-xl mb-4 tracking-tighter">Principais Funcionalidades</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Feature 
            icon="🎙️"
            title="Gravação de Áudio"
            description="Interface intuitiva para captura rápida de notas de voz com qualidade profissional"
          />
          <Feature 
            icon="📝"
            title="Transcrição Automática"
            description="Conversão precisa de áudio em texto usando tecnologia de IA avançada"
          />
          <Feature 
            icon="🏷️"
            title="Sistema de Tags"
            description="Organização flexível com tags personalizadas e categorização inteligente"
          />
          <Feature 
            icon="💡"
            title="Resumos por IA"
            description="Geração automática de resumos e insights principais de suas notas"
          />
          <Feature 
            icon="💳"
            title="Sistema de Créditos"
            description="Modelo de créditos flexível para análises avançadas e transcrições"
          />
          <Feature 
            icon="🌓"
            title="Modo Escuro/Claro"
            description="Interface adaptável com suporte completo para tema escuro e claro"
          />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="font-medium text-xl mb-4 tracking-tighter">Stack Tecnológica</h2>
        <div className="flex flex-wrap gap-2">
          <Badge>Laravel</Badge>
          <Badge>OpenAI API</Badge>
          <Badge>Vue.js</Badge>
          <Badge>MySQL</Badge>
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
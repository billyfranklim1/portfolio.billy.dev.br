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

export default function VoiceNotesPage() {
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
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent">
          Voice Notes
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
          Aplicação Web para Gravação, Transcrição e Análise Inteligente de Notas de Áudio
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge>Laravel</Badge>
          <Badge>Inteligência Artificial</Badge>
          <Badge>Transcrição de Áudio</Badge>
          <Badge>Produtividade</Badge>
          <Badge>SaaS</Badge>
        </div>

        <div className="flex gap-4">
          <a
            href="https://voice-notes.laravel.cloud/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors"
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
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Principais Funcionalidades</h2>
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
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Stack Tecnológica</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <div className="text-3xl mb-2">🎨</div>
            <p className="text-sm font-medium">Laravel</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <div className="text-3xl mb-2">🤖</div>
            <p className="text-sm font-medium">OpenAI API</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <div className="text-3xl mb-2">🎯</div>
            <p className="text-sm font-medium">Vue.js</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <div className="text-3xl mb-2">💾</div>
            <p className="text-sm font-medium">MySQL</p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Casos de Uso</h2>
        <div className="grid gap-4">
          <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
            <h3 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">👨‍💼 Profissionais</h3>
            <p className="text-sm text-blue-700 dark:text-blue-300">
              Capture ideias durante reuniões, brainstorms ou no trânsito sem perder detalhes importantes
            </p>
          </div>
          <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
            <h3 className="font-semibold mb-2 text-green-900 dark:text-green-100">📚 Estudantes</h3>
            <p className="text-sm text-green-700 dark:text-green-300">
              Grave aulas, palestras e crie resumos automáticos para revisão posterior
            </p>
          </div>
          <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
            <h3 className="font-semibold mb-2 text-purple-900 dark:text-purple-100">🔬 Pesquisadores</h3>
            <p className="text-sm text-purple-700 dark:text-purple-300">
              Documente observações e insights de campo com transcrição e análise automática
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
        <p className="text-center text-gray-600 dark:text-gray-400">
          Desenvolvido por <Link href="/" className="text-green-600 dark:text-green-400 hover:underline">Billy</Link>
        </p>
      </div>
    </section>
  )
}
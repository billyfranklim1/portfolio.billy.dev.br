import { Metadata } from 'next'
import Link from 'next/link'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  const metadata = {
    pt: {
      title: 'Voice Notes - Aplicação Web para Transcrição e Análise de Áudio | Billy',
      description: 'Voice Notes é uma aplicação web moderna para gravação, transcrição automática e análise inteligente de notas de áudio. Desenvolvido com Laravel e IA por Billy.',
      keywords: 'Voice Notes, transcrição de áudio, notas de voz, Laravel, IA, inteligência artificial, produtividade, Billy',
      ogTitle: 'Voice Notes - Transcrição e Análise Inteligente de Áudio',
      ogDescription: 'Aplicação web para gravação, transcrição automática e análise inteligente de notas de áudio.',
    },
    en: {
      title: 'Voice Notes - Web Application for Audio Transcription and Analysis | Billy',
      description: 'Voice Notes is a modern web application for recording, automatic transcription, and intelligent analysis of audio notes. Built with Laravel and AI by Billy.',
      keywords: 'Voice Notes, audio transcription, voice notes, Laravel, AI, artificial intelligence, productivity, Billy',
      ogTitle: 'Voice Notes - Intelligent Audio Transcription and Analysis',
      ogDescription: 'Web application for recording, automatic transcription, and intelligent analysis of audio notes.',
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
      url: `https://portfolio.billy.dev.br/${locale}/projects/voice-notes`,
      siteName: 'Billy Portfolio',
      images: [
        {
          url: '/og-voice-notes.jpg',
          width: 1200,
          height: 630,
          alt: 'Voice Notes Application'
        }
      ],
      locale: locale === 'pt' ? 'pt_BR' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.ogTitle,
      description: meta.ogDescription,
      images: ['/og-voice-notes.jpg'],
    },
    alternates: {
      canonical: `https://portfolio.billy.dev.br/${locale}/projects/voice-notes`,
      languages: {
        'pt': 'https://portfolio.billy.dev.br/pt/projects/voice-notes',
        'en': 'https://portfolio.billy.dev.br/en/projects/voice-notes'
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

export default async function VoiceNotesPage({ params }: Props) {
  const { locale } = await params

  const content = {
    pt: {
      back: '← voltar',
      title: 'Voice Notes',
      subtitle: 'Aplicação Web para Gravação, Transcrição e Análise Inteligente de Notas de Áudio',
      badges: ['Laravel', 'Inteligência Artificial', 'Transcrição de Áudio', 'Produtividade', 'SaaS'],
      visitProject: 'Visitar Projeto',
      aboutTitle: 'Sobre o Projeto',
      aboutText: 'Voice Notes é uma aplicação web inovadora que revoluciona a forma como capturamos e organizamos ideias através de áudio. Desenvolvida com Laravel e integrada com tecnologias de IA de ponta, a plataforma permite que usuários gravem, transcrevam e analisem suas notas de voz de forma eficiente e inteligente.',
      problemTitle: 'Problema Resolvido',
      problemText: 'Muitas ideias valiosas se perdem porque é mais rápido falar do que escrever. O Voice Notes resolve esse problema ao oferecer:',
      problemItems: [
        'Gravação rápida e fácil de notas de áudio',
        'Transcrição automática com alta precisão',
        'Organização inteligente com tags e categorias',
        'Busca avançada em todo o conteúdo transcrito',
        'Resumos automáticos gerados por IA'
      ],
      featuresTitle: 'Principais Funcionalidades',
      features: [
        {
          icon: '🎙️',
          title: 'Gravação de Áudio',
          description: 'Interface intuitiva para captura rápida de notas de voz com qualidade profissional'
        },
        {
          icon: '📝',
          title: 'Transcrição Automática',
          description: 'Conversão precisa de áudio em texto usando tecnologia de IA avançada'
        },
        {
          icon: '🏷️',
          title: 'Sistema de Tags',
          description: 'Organização flexível com tags personalizadas e categorização inteligente'
        },
        {
          icon: '💡',
          title: 'Resumos por IA',
          description: 'Geração automática de resumos e insights principais de suas notas'
        },
        {
          icon: '💳',
          title: 'Sistema de Créditos',
          description: 'Modelo de créditos flexível para análises avançadas e transcrições'
        },
        {
          icon: '🌓',
          title: 'Modo Escuro/Claro',
          description: 'Interface adaptável com suporte completo para tema escuro e claro'
        }
      ],
      stackTitle: 'Stack Tecnológica',
      stack: ['Laravel', 'OpenAI API', 'Vue.js', 'MySQL'],
      developedBy: 'Desenvolvido por'
    },
    en: {
      back: '← back',
      title: 'Voice Notes',
      subtitle: 'Web Application for Recording, Transcription and Intelligent Analysis of Audio Notes',
      badges: ['Laravel', 'Artificial Intelligence', 'Audio Transcription', 'Productivity', 'SaaS'],
      visitProject: 'Visit Project',
      aboutTitle: 'About the Project',
      aboutText: 'Voice Notes is an innovative web application that revolutionizes how we capture and organize ideas through audio. Built with Laravel and integrated with cutting-edge AI technologies, the platform allows users to record, transcribe, and analyze their voice notes efficiently and intelligently.',
      problemTitle: 'Problem Solved',
      problemText: 'Many valuable ideas are lost because speaking is faster than writing. Voice Notes solves this problem by offering:',
      problemItems: [
        'Quick and easy audio note recording',
        'Automatic transcription with high accuracy',
        'Smart organization with tags and categories',
        'Advanced search across all transcribed content',
        'Automatic summaries generated by AI'
      ],
      featuresTitle: 'Key Features',
      features: [
        {
          icon: '🎙️',
          title: 'Audio Recording',
          description: 'Intuitive interface for quick capture of voice notes with professional quality'
        },
        {
          icon: '📝',
          title: 'Automatic Transcription',
          description: 'Precise audio-to-text conversion using advanced AI technology'
        },
        {
          icon: '🏷️',
          title: 'Tag System',
          description: 'Flexible organization with custom tags and smart categorization'
        },
        {
          icon: '💡',
          title: 'AI Summaries',
          description: 'Automatic generation of summaries and key insights from your notes'
        },
        {
          icon: '💳',
          title: 'Credit System',
          description: 'Flexible credit model for advanced analyses and transcriptions'
        },
        {
          icon: '🌓',
          title: 'Dark/Light Mode',
          description: 'Adaptive interface with full support for dark and light themes'
        }
      ],
      stackTitle: 'Technology Stack',
      stack: ['Laravel', 'OpenAI API', 'Vue.js', 'MySQL'],
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

        <a
          href="https://voice-notes.laravel.cloud/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm hover:underline"
        >
          {c.visitProject}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
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

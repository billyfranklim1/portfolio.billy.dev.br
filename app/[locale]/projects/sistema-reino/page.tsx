import { Metadata } from 'next'
import Link from 'next/link'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  const metadata = {
    pt: {
      title: 'Sistema Reino - Software de Gestão Eclesiástica Completo | Billy',
      description: 'Sistema Reino é um software completo de gestão para igrejas e organizações religiosas. Gerencie membros, finanças, eventos e muito mais. Desenvolvido por Billy.',
      keywords: 'Sistema Reino, gestão de igreja, software eclesiástico, gestão de membros, dízimos e ofertas, Laravel, SaaS, Billy',
      ogTitle: 'Sistema Reino - Gestão Eclesiástica Completa',
      ogDescription: 'Software completo para gestão de igrejas com controle de membros, finanças, eventos e comunicação.',
    },
    en: {
      title: 'Sistema Reino - Complete Church Management Software | Billy',
      description: 'Sistema Reino is a complete management software for churches and religious organizations. Manage members, finances, events and much more. Developed by Billy.',
      keywords: 'Sistema Reino, church management, ecclesiastical software, member management, tithes and offerings, Laravel, SaaS, Billy',
      ogTitle: 'Sistema Reino - Complete Church Management',
      ogDescription: 'Complete software for church management with member control, finances, events and communication.',
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
      url: `https://portfolio.billy.dev.br/${locale}/projects/sistema-reino`,
      siteName: 'Billy Portfolio',
      images: [
        {
          url: '/og-sistema-reino.jpg',
          width: 1200,
          height: 630,
          alt: 'Sistema Reino - Church Management Software'
        }
      ],
      locale: locale === 'pt' ? 'pt_BR' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.ogTitle,
      description: meta.ogDescription,
      images: ['/og-sistema-reino.jpg'],
    },
    alternates: {
      canonical: `https://portfolio.billy.dev.br/${locale}/projects/sistema-reino`,
      languages: {
        'pt': 'https://portfolio.billy.dev.br/pt/projects/sistema-reino',
        'en': 'https://portfolio.billy.dev.br/en/projects/sistema-reino'
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

export default async function SistemaReinoPage({ params }: Props) {
  const { locale } = await params

  const content = {
    pt: {
      back: '← voltar',
      title: 'Sistema Reino',
      subtitle: 'Software de Gestão Eclesiástica Completo para Igrejas Modernas',
      badges: ['SaaS', 'Church Management', 'Laravel', 'Gestão Financeira', 'LGPD Compliance'],
      visitProject: 'Visitar Projeto',
      aboutTitle: 'Sobre o Projeto',
      aboutText: 'O Sistema Reino é uma solução completa de gestão eclesiástica desenvolvida para atender as necessidades específicas de igrejas e organizações religiosas. Com foco em simplicidade e eficiência, a plataforma digitaliza e otimiza todos os processos administrativos, permitindo que líderes religiosos foquem no que realmente importa: cuidar de suas comunidades.',
      problemTitle: 'Problema Resolvido',
      problemText: 'Muitas igrejas ainda dependem de processos manuais e planilhas desorganizadas para gerenciar suas operações. O Sistema Reino resolve esses desafios ao oferecer:',
      problemItems: [
        'Centralização de todos os dados em uma única plataforma',
        'Automação de processos administrativos repetitivos',
        'Controle financeiro transparente e seguro',
        'Comunicação eficiente com a comunidade',
        'Relatórios e insights para tomada de decisão'
      ],
      featuresTitle: 'Principais Funcionalidades',
      features: [
        {
          icon: '👥',
          title: 'Gestão de Membros',
          description: 'Cadastro completo com histórico de participação, grupos e ministérios'
        },
        {
          icon: '💰',
          title: 'Controle Financeiro',
          description: 'Gestão de dízimos, ofertas, despesas e relatórios financeiros detalhados'
        },
        {
          icon: '📅',
          title: 'Agenda e Eventos',
          description: 'Calendário integrado com controle de presença e inscrições'
        },
        {
          icon: '📊',
          title: 'Relatórios e Dashboards',
          description: 'Análises visuais e métricas para apoiar decisões estratégicas'
        },
        {
          icon: '📱',
          title: 'Comunicação Integrada',
          description: 'Envio de emails e notificações por WhatsApp em massa'
        },
        {
          icon: '🔒',
          title: 'Segurança e LGPD',
          description: 'Dados protegidos com conformidade total à legislação brasileira'
        }
      ],
      stackTitle: 'Stack Tecnológica',
      stack: ['Laravel', 'Vue.js', 'MySQL', 'AWS'],
      developedBy: 'Desenvolvido por'
    },
    en: {
      back: '← back',
      title: 'Sistema Reino',
      subtitle: 'Complete Church Management Software for Modern Churches',
      badges: ['SaaS', 'Church Management', 'Laravel', 'Financial Management', 'LGPD Compliance'],
      visitProject: 'Visit Project',
      aboutTitle: 'About the Project',
      aboutText: 'Sistema Reino is a complete church management solution developed to meet the specific needs of churches and religious organizations. With a focus on simplicity and efficiency, the platform digitizes and optimizes all administrative processes, allowing religious leaders to focus on what really matters: caring for their communities.',
      problemTitle: 'Problem Solved',
      problemText: 'Many churches still rely on manual processes and disorganized spreadsheets to manage their operations. Sistema Reino solves these challenges by offering:',
      problemItems: [
        'Centralization of all data in a single platform',
        'Automation of repetitive administrative processes',
        'Transparent and secure financial control',
        'Efficient communication with the community',
        'Reports and insights for decision making'
      ],
      featuresTitle: 'Key Features',
      features: [
        {
          icon: '👥',
          title: 'Member Management',
          description: 'Complete registration with participation history, groups and ministries'
        },
        {
          icon: '💰',
          title: 'Financial Control',
          description: 'Management of tithes, offerings, expenses and detailed financial reports'
        },
        {
          icon: '📅',
          title: 'Schedule and Events',
          description: 'Integrated calendar with attendance control and registrations'
        },
        {
          icon: '📊',
          title: 'Reports and Dashboards',
          description: 'Visual analyses and metrics to support strategic decisions'
        },
        {
          icon: '📱',
          title: 'Integrated Communication',
          description: 'Bulk email sending and WhatsApp notifications'
        },
        {
          icon: '🔒',
          title: 'Security and LGPD',
          description: 'Protected data with full compliance with Brazilian legislation'
        }
      ],
      stackTitle: 'Technology Stack',
      stack: ['Laravel', 'Vue.js', 'MySQL', 'AWS'],
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
          href="https://sistemareino.com.br"
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

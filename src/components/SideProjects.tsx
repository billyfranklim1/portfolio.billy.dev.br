import Link from 'next/link'

const sideProjects = [
  {
    title: 'HubNews AI',
    description: 'Plataforma de inteligência artificial para análise e curadoria de notícias',
    link: '/projects/hubnews',
    externalLink: 'https://hubnews.ai',
    tags: ['AI', 'News', 'Analytics'],
    color: 'from-blue-500 to-purple-600'
  },
  {
    title: 'Voice Notes',
    description: 'Aplicação web para gravação, transcrição e análise inteligente de notas de áudio',
    link: '/projects/voice-notes',
    externalLink: 'https://voice-notes.laravel.cloud/',
    tags: ['Laravel', 'AI', 'Productivity'],
    color: 'from-green-500 to-teal-600'
  },
  {
    title: 'Sistema Reino',
    description: 'Software de gestão eclesiástica completo para igrejas e organizações religiosas',
    link: '/projects/sistema-reino',
    externalLink: 'https://sistemareino.com.br',
    tags: ['SaaS', 'Church Management', 'Laravel'],
    color: 'from-purple-500 to-pink-600'
  }
]

export default function SideProjects() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Side Projects
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Projetos em produção que desenvolvi para resolver problemas reais e explorar novas tecnologias
        </p>
        
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {sideProjects.map((project) => (
            <Link
              key={project.title}
              href={project.link}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                  Ver detalhes
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'HubNews AI',
  description: 'Plataforma de inteligência artificial para análise e curadoria de notícias em tempo real.',
};

export default function HubNewsPage() {
  return (
    <section>
      <Link href="/projects" className="text-neutral-600 dark:text-neutral-400 mb-8 inline-block hover:text-neutral-800 dark:hover:text-neutral-200">
        ← Voltar para projetos
      </Link>
      
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        HubNews AI 🤖
      </h1>
      
      <div className="prose prose-neutral dark:prose-invert">
        <p className="text-lg mb-8">
          Plataforma de inteligência artificial para análise e curadoria de notícias em tempo real.
        </p>

        <h2>Sobre o Projeto</h2>
        <p>
          O HubNews AI é uma solução inovadora que utiliza inteligência artificial para 
          analisar, categorizar e resumir notícias de múltiplas fontes em tempo real. 
          A plataforma ajuda profissionais e empresas a se manterem atualizados com as 
          informações mais relevantes do seu setor.
        </p>

        <h2>Tecnologias Utilizadas</h2>
        <ul>
          <li><strong>Backend:</strong> Laravel 10, PHP 8.2</li>
          <li><strong>Frontend:</strong> Vue.js 3, Tailwind CSS</li>
          <li><strong>IA:</strong> OpenAI GPT-4, Python</li>
          <li><strong>Banco de Dados:</strong> PostgreSQL, Redis</li>
          <li><strong>Infraestrutura:</strong> AWS, Docker</li>
        </ul>

        <h2>Principais Funcionalidades</h2>
        <ul>
          <li>Análise automática de sentimento e relevância</li>
          <li>Categorização inteligente de conteúdo</li>
          <li>Resumos executivos gerados por IA</li>
          <li>Dashboard em tempo real com métricas</li>
          <li>API RESTful para integração com outros sistemas</li>
          <li>Sistema de alertas personalizados</li>
        </ul>

        <h2>Desafios Técnicos</h2>
        <p>
          Um dos principais desafios foi otimizar o processamento de grandes volumes 
          de dados em tempo real, mantendo a acurácia da análise. Implementamos um 
          sistema de filas distribuídas com Laravel Horizon e otimizamos as consultas 
          ao banco de dados para garantir performance.
        </p>

        <h2>Resultados</h2>
        <ul>
          <li>Processamento de 10.000+ notícias por dia</li>
          <li>95% de precisão na categorização</li>
          <li>Redução de 80% no tempo de curadoria manual</li>
          <li>200+ usuários ativos</li>
        </ul>

        <div className="mt-8 flex gap-4">
          <a 
            href="https://hubnews.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
          >
            Visitar projeto →
          </a>
        </div>
      </div>
    </section>
  );
}
import Link from 'next/link';

export const metadata = {
  title: 'Sistema Reino',
  description: 'Sistema completo de gestão para igrejas com módulos integrados.',
};

export default function SistemaReinoPage() {
  return (
    <section>
      <Link href="/projects" className="text-neutral-600 dark:text-neutral-400 mb-8 inline-block hover:text-neutral-800 dark:hover:text-neutral-200">
        ← Voltar para projetos
      </Link>
      
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        Sistema Reino ⛪
      </h1>
      
      <div className="prose prose-neutral dark:prose-invert">
        <p className="text-lg mb-8">
          Sistema completo de gestão para igrejas com módulos integrados para todas as necessidades.
        </p>

        <h2>Sobre o Projeto</h2>
        <p>
          O Sistema Reino é uma plataforma completa desenvolvida para atender todas as 
          necessidades de gestão de igrejas modernas. Desde controle de membros até 
          gestão financeira, o sistema oferece uma solução integrada e intuitiva.
        </p>

        <h2>Tecnologias Utilizadas</h2>
        <ul>
          <li><strong>Backend:</strong> Laravel 10, PHP 8.2</li>
          <li><strong>Frontend:</strong> Vue.js 3, Inertia.js</li>
          <li><strong>Banco de Dados:</strong> PostgreSQL</li>
          <li><strong>Relatórios:</strong> Laravel Excel, PDF</li>
          <li><strong>Infraestrutura:</strong> VPS dedicado, Docker</li>
        </ul>

        <h2>Módulos Principais</h2>
        <ul>
          <li><strong>Gestão de Membros:</strong> Cadastro completo, histórico, aniversariantes</li>
          <li><strong>Financeiro:</strong> Dízimos, ofertas, despesas, relatórios</li>
          <li><strong>Células/Pequenos Grupos:</strong> Controle de reuniões e frequência</li>
          <li><strong>Eventos:</strong> Calendário, inscrições, check-in</li>
          <li><strong>EBD:</strong> Gestão de classes e alunos</li>
          <li><strong>Comunicação:</strong> Envio de SMS e e-mails em massa</li>
        </ul>

        <h2>Diferenciais</h2>
        <ul>
          <li>Interface intuitiva e responsiva</li>
          <li>Relatórios personalizáveis</li>
          <li>App mobile para líderes</li>
          <li>Backup automático diário</li>
          <li>Suporte dedicado</li>
          <li>Atualizações constantes</li>
        </ul>

        <h2>Resultados</h2>
        <ul>
          <li>50+ igrejas utilizando o sistema</li>
          <li>10.000+ membros cadastrados</li>
          <li>99.9% de uptime</li>
          <li>Redução de 70% no tempo de gestão administrativa</li>
        </ul>

        <div className="mt-8 flex gap-4">
          <a 
            href="https://sistemareino.com.br" 
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
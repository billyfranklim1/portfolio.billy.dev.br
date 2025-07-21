import Link from 'next/link';

export const metadata = {
  title: 'Voice Notes',
  description: 'Aplicativo para transcrição automática de notas de áudio com inteligência artificial.',
};

export default function VoiceNotesPage() {
  return (
    <section>
      <Link href="/projects" className="text-neutral-600 dark:text-neutral-400 mb-8 inline-block hover:text-neutral-800 dark:hover:text-neutral-200">
        ← Voltar para projetos
      </Link>
      
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        Voice Notes 🎙️
      </h1>
      
      <div className="prose prose-neutral dark:prose-invert">
        <p className="text-lg mb-8">
          App para transcrição automática de notas de áudio com organização inteligente.
        </p>

        <h2>Sobre o Projeto</h2>
        <p>
          Voice Notes é uma aplicação web que permite aos usuários gravar notas de áudio 
          e obter transcrições automáticas com alta precisão. O app organiza automaticamente 
          as notas por contexto e permite busca por conteúdo transcrito.
        </p>

        <h2>Tecnologias Utilizadas</h2>
        <ul>
          <li><strong>Backend:</strong> Laravel 10, PHP 8.2</li>
          <li><strong>Frontend:</strong> Vue.js 3, Tailwind CSS</li>
          <li><strong>Transcrição:</strong> OpenAI Whisper API</li>
          <li><strong>Banco de Dados:</strong> MySQL</li>
          <li><strong>Storage:</strong> AWS S3</li>
        </ul>

        <h2>Principais Funcionalidades</h2>
        <ul>
          <li>Gravação de áudio direto no navegador</li>
          <li>Transcrição automática em múltiplos idiomas</li>
          <li>Edição de transcrições com destaque de mudanças</li>
          <li>Organização por tags e categorias</li>
          <li>Busca full-text nas transcrições</li>
          <li>Exportação em múltiplos formatos (PDF, TXT, DOCX)</li>
        </ul>

        <h2>Desafios Técnicos</h2>
        <p>
          O maior desafio foi implementar a gravação de áudio com qualidade suficiente 
          para transcrição precisa em diferentes navegadores. Utilizamos a Web Audio API 
          e implementamos processamento de áudio no cliente para otimizar a qualidade 
          antes do envio.
        </p>

        <h2>Resultados</h2>
        <ul>
          <li>98% de precisão na transcrição em português</li>
          <li>Suporte para 15+ idiomas</li>
          <li>500+ usuários ativos mensais</li>
          <li>50.000+ minutos transcritos</li>
        </ul>

        <div className="mt-8 flex gap-4">
          <a 
            href="https://voicenotes.app.br" 
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
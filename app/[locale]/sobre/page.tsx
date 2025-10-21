import Image from 'next/image';
import avatar from 'app/avatar.jpg';

export const metadata = {
  title: 'Sobre',
  description: 'Conheça mais sobre Billy, engenheiro de software full-stack com 7 anos de experiência.',
};

export default function SobrePage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        Sobre mim
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="flex-shrink-0">
            <Image
              alt="Billy"
              src={avatar}
              width={150}
              height={150}
              className="rounded-full"
              priority
            />
          </div>
          <div>
            <p>
              Olá! Sou Billy, engenheiro de software full-stack com 7 anos de experiência 
              desenvolvendo soluções web escaláveis e de alta qualidade.
            </p>
            <p>
              Minha jornada na tecnologia começou de forma autodidata, movido pela curiosidade 
              e vontade de criar. Ao longo dos anos, tive a oportunidade de trabalhar em empresas 
              de diversos tamanhos e segmentos, desde startups até empresas governamentais.
            </p>
          </div>
        </div>

        <h2 className="font-medium text-xl mb-4 tracking-tighter">Experiência</h2>
        <p>
          Especializo-me em desenvolvimento full-stack com foco em:
        </p>
        <ul>
          <li><strong>Backend:</strong> Laravel, PHP, APIs RESTful, MySQL, PostgreSQL</li>
          <li><strong>Frontend:</strong> Vue.js, React, Next.js, JavaScript, TypeScript</li>
          <li><strong>DevOps:</strong> Docker, CI/CD, AWS</li>
          <li><strong>Metodologias:</strong> TDD, Agile, Clean Code</li>
        </ul>

        <h2 className="font-medium text-xl mb-4 tracking-tighter">Filosofia</h2>
        <p>
          Acredito que a tecnologia deve resolver problemas reais e melhorar a vida das pessoas. 
          Por isso, sempre busco entender profundamente as necessidades do negócio antes de 
          propor soluções técnicas.
        </p>
        <p>
          Sou um grande defensor do aprendizado contínuo e compartilhamento de conhecimento. 
          Através do meu blog, compartilho experiências e aprendizados que podem ajudar outros 
          desenvolvedores em suas jornadas.
        </p>

        <h2 className="font-medium text-xl mb-4 tracking-tighter">Contato</h2>
        <p>
          Quer conversar sobre tecnologia, projetos ou oportunidades? Entre em contato:
        </p>
        <ul>
          <li>Email: contato@billy.dev.br</li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/billyfranklim/" target="_blank" rel="noopener noreferrer">@billyfranklim</a></li>
          <li>GitHub: <a href="https://github.com/billyfranklim1" target="_blank" rel="noopener noreferrer">@billyfranklim1</a></li>
        </ul>
      </div>
    </section>
  );
}
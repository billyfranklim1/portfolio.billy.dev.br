import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiências",
  description: "Um resumo do meu trabalho e contribuições",
};


export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">minhas experiências</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Na missão de criar produtos que os usuários amam e, ao longo do caminho, compartilhar conhecimento. Aqui está um resumo do meu trabalho até agora.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          DevSkin Consultoria de TI
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Software Engineer
        </p>
        <p>Desde junho de 2022, trabalhando remotamente.</p>
        <ul>
          <li>
            Implemento novos recursos e desenvolvo interfaces e endpoints
            utilizando Vue.js, Laravel e MySQL.
          </li>
          <li>Envolvido em práticas de CI/CD, SCRUM e GITFLOW.</li>
          <li>
            Destaque para a gamificação bem-sucedida de uma plataforma de
            educação.
          </li>
          <li>
            Contribuo para a eficiência e qualidade no ciclo de desenvolvimento
            de software.
          </li>
          <li>Aprimoro habilidades em diversas tecnologias e metodologias.</li>
          <li>
            Colaboro ativamente com equipes multidisciplinares para garantir a
            entrega pontual de projetos.
          </li>
          <li>
            Participo na resolução de problemas e na identificação de soluções
            inovadoras.
          </li>
          <li>
            Realizo testes e depurações para garantir a qualidade do código e a
            estabilidade das aplicações.
          </li>
          <li>
            Mantenho-me atualizado com as últimas tendências em tecnologia e
            melhores práticas de desenvolvimento.
          </li>
          <li>
            Comunico de forma eficaz com colegas de equipe e stakeholders para
            garantir alinhamento e transparência no processo de desenvolvimento.
          </li>
        </ul>
        <div className="flex space-x-2 my-2">
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            React.js
          </span>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            MySQL
          </span>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            PHP
          </span>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            Laravel
          </span>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            Git
          </span>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            Vue.js
          </span>
        </div>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <h2 className="font-medium text-xl mb-1 tracking-tighter">2GO Bank</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Software Engineer
        </p>
        <p>
          Trabalhando remotamente, de junho de 2021 a novembro de 2023 - 2 anos
          e 6 meses.
        </p>
        <p>
          Envolvido no desenvolvimento e implementação do 2GO Bank, um sistema
          bancário, utilizando Laravel, PHP, ElasticSearch.
        </p>
        <ul>
          <li>
            Implementei recursos como transferência PIX, Relatórios, cartão de
            débito e trabalhei na melhoria da experiência do usuário.
          </li>
          <li>
            Colaborei com equipes de gestão de produto e qualidade para entregar
            recursos e correções de bugs de alta qualidade em tempo hábil.
          </li>
          <li>
            Ofereci mentoria para desenvolvedores júnior, garantindo qualidade
            do código e aderência às melhores práticas.
          </li>
          <li>
            Otimizei desempenho e experiência do usuário, implementando novas
            funcionalidades e integrando bibliotecas e ferramentas de terceiros.
          </li>
          <li>
            Contribuí para arquitetura e design, definindo APIs e serviços
            RESTful, assegurando escalabilidade, segurança e manutenção do app.
          </li>
          <li>
            Trabalhei com a equipe de produto para coletar requisitos, projetar
            soluções e estimar esforços para novas funcionalidades.
          </li>
          <li>
            Identifiquei e corrigi bugs, trabalhando de perto com a equipe de QA
            para garantir testes completos antes do lançamento.
          </li>
        </ul>

        <div className="flex space-x-2 my-2">
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            Elasticsearch
          </span>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            React Native
          </span>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            Vuejs
          </span>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            RabbitMQ
          </span>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            React.js
          </span>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            Laravel
          </span>
        </div>



        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          EMSERH - Empresa Maranhense de Serviços Hospitalares
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Analista de Desenvolvimento
        </p>
        <p>
          Trabalhando em São Luís, Maranhão, Brasil, de setembro de 2020 a julho
          de 2021 - 11 meses.
        </p>
        <p>Principal projeto: GMED - Gestão de Medicamentos.</p>
        <ul>
          <li>
            Contribuí para o desenvolvimento do Sistema de Gestão de
            Medicamentos, uma aplicação crítica para gerenciamento de
            medicamentos.
          </li>
          <li>
            Desenvolvi a interface do usuário usando VueJs, proporcionando uma
            experiência suave e amigável.
          </li>
          <li>
            Projetar e desenvolver o back-end usando Laravel, Docker e GraphQL,
            assegurando escalabilidade e alto desempenho da aplicação.
          </li>
          <li>
            Colaborei com equipes multifuncionais, incluindo gestão de produto e
            garantia de qualidade, para entrega pontual de recursos e correções
            de bugs.
          </li>
          <li>
            Orientei e treinei desenvolvedores júnior, fornecendo orientação e
            apoio sobre melhores práticas de desenvolvimento de software e
            gestão de projetos.
          </li>
        </ul>

        <div className="flex space-x-2 my-2">
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            MySQL
          </span>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            PHP
          </span>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            JavaScript
          </span>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            Laravel
          </span>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            Git
          </span>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            Vue.js
          </span>
        </div>


        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Workana</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Desenvolvedor Full Stack
        </p>
        <p>
          De dezembro de 2019 a maio de 2021 - 1 ano e 6 meses em São Paulo,
          Brasil.
        </p>
        <ul>
          <li>
            Responsável por levantamento de requisitos, documentação,
            desenvolvimento e manutenção de um sistema de cotação de produtos
            utilizando ReactJs, VueJs, Laravel e MySql.
          </li>
        </ul>
        <p>
          Competências: React.js · MySQL · PHP · JavaScript · Laravel · Git ·
          Vue.js
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          A2 Produtora
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Desenvolvedor Web
        </p>
        <p>
          De outubro de 2019 a agosto de 2020 - 11 meses no Maranhão, Brasil.
        </p>
        <ul>
          <li>
            Desenvolvimento e manutenção de um sistema de gestão financeira
            com foco em contas a pagar, contas a receber, relatórios e
            dashboards, utilizando tecnologias como Scriptcase, Laravel,
            Slimframework, Redbeanphp, JQuery, VueJS, HTML, CSS e MySQL.
          </li>
        </ul>
        <div className="flex space-x-2 my-2">
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            MySQL
          </span>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            PHP
          </span>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            JavaScript
          </span>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            Laravel
          </span>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            Git
          </span>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            Vue.js
          </span>
        </div>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          SEIJnet Brasil
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Desenvolvedor Web
        </p>
        <p>
          De janeiro de 2019 a setembro de 2019 - 9 meses em São Luís, Maranhão.
        </p>
        <ul>
          <li>
            Experiência no desenvolvimento e manutenção de sistemas de gestão
            de processos advocatícios, utilizando Vue.js, Laravel e outras
            tecnologias.
          </li>
          <li>
            Criação de interfaces amigáveis e intuitivas, colaboração com
            equipes multidisciplinares, resolução de problemas e otimização de
            desempenho dos sistemas.
          </li>
          <li>
            Manutenção das melhores práticas de desenvolvimento web,
            garantindo a escrita de código limpo e bem estruturado para entrega
            de soluções eficientes.
          </li>
        </ul>
        <div className="flex space-x-2 my-2">
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            MySQL
          </span>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            PHP
          </span>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            JavaScript
          </span>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            Laravel
          </span>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            Git
          </span>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            Vue.js
          </span>
        </div>
      </div>
    </section>
  );
}

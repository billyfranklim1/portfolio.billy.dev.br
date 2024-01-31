import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Projetos",
  description: "Alguns projetos públicos que desenvolvi",
};


const ProjectsList = ({ projects }) => {
  return (
    <div>
      {Object.entries(projects).map(([category, projectsInCategory]: [string, any[]]) => (
        <div key={category}>
          <h2 className="font-medium text-xl">{category}</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2" id={category.replace(/[^a-zA-Z]|\p{Emoji}/gu, "")}>
            {projectsInCategory.map(project => (
              <div key={project.title} className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded w-full justify-between px-3 py-4">
                <h5 className="font-medium text-base">{project.title}</h5>
                <p className="text-xs">{project.description}</p>
                <div className="flex space-x-2 my-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
                <a target="_blank" href={project.link} className="text-xs">
                  Ver no github
                </a>
              </div>
            ))}
          </div>
          <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        </div>
      ))}
    </div>
  );
};

export default function WorkPage() {

  const projects = {
    "💻 backend": [
      {
        "title": "laravel-auth-api",
        "description": "",
        "link": "https://github.com/billyfranklim1/laravel-auth-api",
        "tags": ["php", "laravel", "auth"]
      },
      {
        "title": "Backend-challenge",
        "description": "",
        "link": "https://github.com/billyfranklim1/backend-challenge",
        "tags": ["challenge", "backend"]
      },

      {
        "title": "loteria",
        "description": "",
        "link": "https://github.com/billyfranklim1/loteria",
        "tags": ["lottery", "game"]
      },
    ],
    "🌐 frontend": [
      {
        "title": "Pomodoro",
        "description": "",
        "link": "https://github.com/billyfranklim1/node-api",
        "tags": ["nodejs", "api"]
      },
      {
        "title": "Nestes blog",
        "description": "",
        "link": "https://github.com/billyfranklim1/nextjs-blog",
        "tags": ["nextjs", "blog"]
      },
      {
        "title": "Login-react",
        "description": "",
        "link": "https://github.com/billyfranklim1/login-reactjs",
        "tags": ["react", "login"]
      },
      {
        "title": "Front challenge",
        "description": "",
        "link": "https://github.com/billyfranklim1/frontend-challenge",
        "tags": ["frontend", "challenge"]
      },
      {
        "title": "Portifolio",
        "description": "",
        "link": "https://github.com/billyfranklim1/portifolio-landing-page",
        "tags": ["portfolio", "landing-page"]
      },
      {
        "title": "Netflix clone taiilwindcss",
        "description": "",
        "link": "https://github.com/billyfranklim1/site-clone-netflix-tailwindcss",
        "tags": ["tailwindcss", "netflix", "clone"]
      },
      {
        "title": "my-links",
        "description": "",
        "link": "https://github.com/billyfranklim1/my-links",
        "tags": ["links", "management"]
      },
      {
        "title": "snake_js",
        "description": "",
        "link": "https://github.com/billyfranklim1/snake_js",
        "tags": ["javascript", "game", "snake"]
      },
    ],
    "📱 mobile": [
      {
        "title": "Login-react-native",
        "description": "",
        "link": "https://github.com/billyfranklim1/login-react-native",
        "tags": ["react-native", "login"]
      }
    ],
    "🤖 ia": [
      {
        "title": "Api movie recommendation",
        "description": "",
        "link": "https://github.com/billyfranklim1/login-react-native",
        "tags": ["gpt-3", "api", "movie", "recommendation"]
      },
      {
        "title": "gereador de flashcards anki",
        "description": "",
        "link": "https://github.com/billyfranklim1/login-react-native",
        "tags": ["gpt-3", "api", "movie", "recommendation"]
      },
    ],
    "📄 scripts": [
      {
        "title": "LinkedIn-Job-Miner",
        "description": "",
        "link": "https://github.com/billyfranklim1/LinkedIn-Job-Miner",
        "tags": ["linkedin", "job", "miner"]
      },
      {
        "title": "Birthday alert",
        "description": "",
        "link": "https://github.com/billyfranklim1/birthday",
        "tags": ["birthday", "alert"]
      },
      {
        "title": "Twitter python",
        "description": "",
        "link": "https://github.com/billyfranklim1/twitter-python",
        "tags": ["python", "twitter"]
      },
      {
        "title": "Screap google imagem",
        "description": "",
        "link": "https://github.com/billyfranklim1/scrape-google-imagens-php",
        "tags": ["php", "scrape", "google-images"]
      }
    ]
  };
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        meus projetos 🚀
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Aqui estão alguns dos meus projetos públicos. Você pode encontrar mais
          no meu perfil do <a href="https://github.com/billyfranklim1" target="_blank">GitHub</a>. Eles são classificados por tipo, mas muitos
          deles são projetos completos que incluem{" "}
          <span className="font-bold">frontend</span>,{" "}
          <span className="font-bold">backend</span>,{" "}
          <span className="font-bold">mobile</span> e{" "}
          <span className="font-bold">IA</span>.
          Muito desses projetos são feitos para estudo e aprendizado, mas alguns
          são feitos por pura diversão.
        </p>

        <div className="flex space-x-1 mt-4">
          {["💻 backend", "🌐 frontend", "📱 mobile", "🤖 IA", "📄 scripts"].map((section) => (
            <Link 
            key={section} 
            href={`#${section.replace(/[^a-zA-Z]|\p{Emoji}/gu, "")}`} passHref id={`link-${section.replace(/[^a-zA-Z]|\p{Emoji}/gu, "")}`} className={`border border-neutral-200 dark:border-neutral-700 rounded-full px-4 py-2 project-button text-xs font-medium no-underline	`}>
              {section}
            </Link>
          ))}
        </div>

        <ProjectsList projects={projects} />

        {/* <h2 className="font-medium text-xl ">💻 backend</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2" id="backend">
          <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded w-full justify-between px-3 py-4">
            <h5 className="font-medium text-base">Projeto 1</h5>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              blanditiis sint quos{" "}
            </p>

            <div className="flex space-x-2 my-2">
              <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
                #nodejs
              </span>
              <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
                #express
              </span>
              <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
                #mongodb
              </span>
            </div>

            <a target="_blank" href="#" className="text-xs">
              Ver no github
            </a>
          </div>
          <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded w-full justify-between px-3 py-4">
            <h5 className="font-medium text-base">Projeto 2</h5>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              blanditiis sint quos{" "}
            </p>

            <div className="flex space-x-2 my-2">
              <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
                #nodejs
              </span>
              <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
                #express
              </span>
              <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
                #mongodb
              </span>
            </div>

            <a target="_blank" href="#" className="text-xs">
              Ver no github
            </a>
          </div>
        </div>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <h2 className="font-medium text-xl ">🌐 frontend</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2" id="frontend">
          <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded w-full justify-between px-3 py-4">
            <h5 className="font-medium text-base">Projeto 1</h5>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              blanditiis sint quos{" "}
            </p>
            <div className="flex space-x-2 my-2">
              <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
                #nodejs
              </span>
              <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
                #express
              </span>
              <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
                #mongodb
              </span>
            </div>

            <a target="_blank" href="#" className="text-xs">
              Ver no github
            </a>
          </div>
          <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded w-full justify-between px-3 py-4">
            <h5 className="font-medium text-base">Projeto 2</h5>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              blanditiis sint quos{" "}
            </p>

            <div className="flex space-x-2 my-2">
              <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
                #nodejs
              </span>
              <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
                #express
              </span>
              <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
                #mongodb
              </span>
            </div>

            <a target="_blank" href="#" className="text-xs">
              Ver no github
            </a>
          </div>
        </div>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        
        <h2 className="font-medium text-xl ">📱 mobile</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2" id="mobile">
          <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded w-full justify-between px-3 py-4">
            <h5 className="font-medium text-base">Projeto 1</h5>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              blanditiis sint quos{" "}
            </p>
            <div className="flex space-x-2 my-2">
              <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
                #nodejs
              </span>
              <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
                #express
              </span>
              <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
                #mongodb
              </span>
            </div>
            <a target="_blank" href="#" className="text-xs">
              Ver no github
            </a>
          </div>

          <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded w-full justify-between px-3 py-4">
            <h5 className="font-medium text-base">Projeto 2</h5>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              blanditiis sint quos{" "}
            </p>
            <div className="flex space-x-2 my-2">
              <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
                #nodejs
              </span>
              <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
                #express
              </span>
              <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
                #mongodb
              </span>
            </div>
            <a target="_blank" href="#" className="text-xs">
              Ver no github
            </a>
          </div>
        </div>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        
        <h2 className="font-medium text-xl ">
          🤖 IA (Inteligência Artificial)
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2" id="ia">
          <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded w-full justify-between px-3 py-4">
            <h5 className="font-medium text-base">Projeto 1</h5>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              blanditiis sint quos{" "}
            </p>
            <div className="flex space-x-2 my-2">
              <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
                #nodejs
              </span>
              <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
                #express
              </span>
              <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
                #mongodb
              </span>
            </div>
            <a target="_blank" href="#" className="text-xs">
              Ver no github
            </a>
          </div>
          <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded w-full justify-between px-3 py-4">
            <h5 className="font-medium text-base">Projeto 2</h5>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              blanditiis sint quos{" "}
            </p>
            <div className="flex space-x-2 my-2">
              <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
                #nodejs
              </span>
              <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
                #express
              </span>
              <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
                #mongodb
              </span>
            </div>
            <a target="_blank" href="#" className="text-xs">
              Ver no github
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
}

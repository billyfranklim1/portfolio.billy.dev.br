"use client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Alguns projetos públicos que desenvolvi",
};

export default function WorkPage() {
  const navigateToSection = (sectionId) => {
    document.querySelectorAll(".project-button").forEach((btn) => {
      btn.classList.remove("bg-neutral-50", "dark:bg-neutral-800");
    });

    const button = document.getElementById(`btn-${sectionId}`);
    if (button) {
      button.classList.add("bg-neutral-50", "dark:bg-neutral-800");
    }

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
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

        <div className="flex space-x-4 mt-4">
          {["backend", "frontend", "mobile", "ia"].map((section) => (
            <button
              key={section}
              id={`btn-${section}`}
              className={`border border-neutral-200 dark:border-neutral-700 rounded-full px-4 py-2 project-button`}
              onClick={() => navigateToSection(section)}
            >
              {section}
            </button>
          ))}
        </div>

        <h2 className="font-medium text-xl ">💻 backend</h2>
        <div className="grid grid-cols-2 gap-4" id="backend">
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

            <a target="_blank" href="#">
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

            <a target="_blank" href="#">
              Ver no github
            </a>
          </div>
        </div>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <h2 className="font-medium text-xl ">🌐 frontend</h2>
        <div className="grid grid-cols-2 gap-4" id="frontend">
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

            <a target="_blank" href="#">
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

            <a target="_blank" href="#">
              Ver no github
            </a>
          </div>
        </div>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl ">📱 mobile</h2>
        <div className="grid grid-cols-2 gap-4" id="mobile">
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
            <a target="_blank" href="#">
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
            <a target="_blank" href="#">
              Ver no github
            </a>
          </div>
        </div>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl ">
          🤖 IA (Inteligência Artificial)
        </h2>
        <div className="grid grid-cols-2 gap-4" id="ia">
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
            <a target="_blank" href="#">
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
            <a target="_blank" href="#">
              Ver no github
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

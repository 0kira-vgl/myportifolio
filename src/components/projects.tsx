import { ArrowRight, ArrowRightSquare } from "lucide-react";
import { buttonVariants } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export function Projects() {
  return (
    <div className="pt- max-w-7xlp-6 container mx-auto h-screen w-full">
      <div className="items-center justify-center pb-5">
        <h2 className="relative z-10 pb-2 text-center text-4xl font-extrabold text-[#1E293B]">
          Projetos
        </h2>
        <p className="mx-auto max-w-[17rem] text-center text-sm">
          Veja os projetos onde coloquei meus conhecimentos em prática.
        </p>
      </div>

      <div className="mb-8 grid grid-cols-2 gap-12">
        <div className="relative flex h-full flex-col overflow-hidden rounded-xl shadow-lg outline-accent transition-transform duration-500 hover:scale-[1.03]">
          <div className="relative p-2">
            <div className="border-zinc-300relative relative z-20 aspect-video w-full overflow-hidden rounded-lg border-b-[3px] border-zinc-300">
              <div>
                <img
                  src="https://github.com/0kira-vgl/nlwNotes/raw/main/src/assets/thumbnail.png?raw=true"
                  alt="ExplorerNotes Project"
                />
              </div>
            </div>
            <div className="flex grow flex-col p-3">
              <h2 className="text-lg font-bold text-slate-700">
                Explorer Notes
              </h2>
              <p className="mb-3 text-sm text-neutral-500">
                Expert Notes é um aplicativo de notas que permite ao usuário
                criar e gerenciar notas de forma simples e eficiente.
              </p>
              <div className="mt-auto flex justify-between gap-3">
                <div className="flex items-center gap-2">
                  <img
                    title="NextJs"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  />
                  <img
                    title="TypeScript"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                  />
                  <img
                    title="TailwindCSS"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                  />
                  <img
                    title="ViteJs"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
                  />
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="#"
                    className="flex h-9 items-center justify-center rounded-full border border-slate-700 px-8 py-1 text-sm text-slate-700 shadow-md outline-accent"
                  >
                    Ver site
                  </a>
                  <a
                    className={buttonVariants({ className: "cursor-pointer" })}
                  >
                    Repositorio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex h-full flex-col overflow-hidden rounded-xl shadow-lg outline-accent transition-transform duration-500 hover:scale-[1.03]">
          <div className="relative p-2">
            <div className="border-zinc-300relative relative z-20 aspect-video w-full overflow-hidden rounded-lg border-b-[3px] border-zinc-300">
              <img src="./thumbnailPlanner.png" alt="Planner Project" />
            </div>
          </div>
          <div className="flex grow flex-col p-3">
            <h2 className="text-lg font-bold text-slate-700">Plann.er</h2>
            <p className="mb-3 text-sm text-neutral-500">
              Uma aplicação para gerenciamento de viagens e atividades.
            </p>
            <div className="mt-auto flex justify-between gap-3">
              <div className="flex items-center gap-2">
                <img
                  title="NextJs"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                />
                <img
                  title="TypeScript"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                />
                <img
                  title="TailwindCSS"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                />
                <img
                  title="ViteJs"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
                />
              </div>
              <div className="flex items-center justify-center space-x-3">
                <a
                  href="#"
                  className="flex h-9 items-center justify-center rounded-full border border-slate-700 px-8 py-1 text-sm text-slate-700 shadow-md outline-accent"
                >
                  Ver site
                </a>
                <a className={buttonVariants({ className: "cursor-pointer" })}>
                  Repositorio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8 align-super">
        <div>
          <a
            href=""
            className="relative flex h-full flex-col overflow-hidden rounded-xl shadow-lg outline-accent transition-transform duration-500 hover:scale-[1.03]"
          >
            <div className="relative p-2">
              <div className="relative z-20 aspect-video w-full overflow-hidden rounded-lg border-b-[3px] border-zinc-300">
                <img
                  src="https://github.com/0kira-vgl/nlwNotes/raw/main/src/assets/thumbnail.png?raw=true"
                  alt=""
                />
              </div>
            </div>
            <div className="flex grow flex-col p-3">
              <h2 className="text-lg font-bold text-slate-700">
                Explorer Notes
              </h2>
              <p className="mb-3 text-sm text-neutral-500">
                Rede social criada com NodeJS, Express e MySQL.
              </p>
              <div className="mt-auto flex justify-between gap-3">
                <div className="flex items-center gap-2">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                </div>
                <a
                  href=""
                  className="inline-block rounded-full border border-slate-700 px-8 py-1 text-sm text-slate-700 shadow-md outline-accent"
                >
                  Ver mais
                </a>
              </div>
            </div>
          </a>
        </div>

        <div>
          <a
            href=""
            className="relative flex h-full flex-col overflow-hidden rounded-xl shadow-lg outline-accent transition-transform duration-500 hover:scale-[1.03]"
          >
            <div className="relative p-2">
              <div className="relative z-20 aspect-video w-full overflow-hidden rounded-lg border-b-[3px] border-zinc-300">
                <img
                  src="https://github.com/0kira-vgl/nlwNotes/raw/main/src/assets/thumbnail.png?raw=true"
                  alt=""
                />
              </div>
            </div>
            <div className="flex grow flex-col p-3">
              <h2 className="text-lg font-bold text-slate-700">
                Explorer Notes
              </h2>
              <p className="mb-3 text-sm text-neutral-500">
                Rede social criada com NodeJS, Express e MySQL.
              </p>
              <div className="mt-auto flex justify-between gap-3">
                <div className="flex items-center gap-2">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                </div>
                <a
                  href=""
                  className="inline-block rounded-full border border-slate-700 px-8 py-1 text-sm text-slate-700 shadow-md outline-accent"
                >
                  Ver mais
                </a>
              </div>
            </div>
          </a>
        </div>

        <div>
          <a
            href=""
            className="relative flex h-full flex-col overflow-hidden rounded-xl shadow-lg outline-accent transition-transform duration-500 hover:scale-[1.03]"
          >
            <div className="relative p-2">
              <div className="relative z-20 aspect-video w-full overflow-hidden rounded-lg border-b-[3px] border-zinc-300">
                <img
                  src="https://github.com/0kira-vgl/nlwNotes/raw/main/src/assets/thumbnail.png?raw=true"
                  alt=""
                />
              </div>
            </div>
            <div className="flex grow flex-col p-3">
              <h2 className="text-lg font-bold text-slate-700">
                Explorer Notes
              </h2>
              <p className="mb-3 text-sm text-neutral-500">
                Rede social criada com NodeJS, Express e MySQL.
              </p>
              <div className="mt-auto flex justify-between gap-3">
                <div className="flex items-center gap-2">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                </div>
                <a
                  href=""
                  className="inline-block rounded-full border border-slate-700 px-8 py-1 text-sm text-slate-700 shadow-md outline-accent"
                >
                  Ver mais
                </a>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="pb-96 pt-12 text-center">
        <a
          href="https://github.com/0kira-vgl?tab=repositories"
          target="_blank"
          className={buttonVariants({
            className: "group flex items-center justify-center gap-6",
            variant: "outline",
          })}
        >
          Ver mais repositorios
          <ArrowRight className="duration-[0.3s] ease-[ease] group size-5 -translate-x-2 transition-all group-hover:translate-x-0" />
        </a>
      </div>
    </div>
  );
}

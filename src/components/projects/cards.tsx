import {
  TitleCard,
  DescriptionCard,
  IconsCard,
  SiteButtonCard,
  RepoButtonCard,
} from "./cardComponents";
import { SiRadixui } from "react-icons/si";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SiShadcnui } from "react-icons/si";

import Notes from "@/assets/thumbnails/notes.png";
import PizzaShop from "@/assets/thumbnails/pizzaShop.png";
import InOrbit from "@/assets/thumbnails/inOrbit.png";
import Planner from "@/assets/thumbnails/planner.png";
import ToDoApp from "@/assets/thumbnails/toDoApp.png";

export function Cards() {
  return (
    <main>
      <div className="mb-8 gap-8 space-y-8 lg:grid lg:grid-cols-2 lg:space-y-0">
        <div className="flex rounded-xl border shadow-lg transition-transform duration-500 hover:scale-[1.03]">
          <div className="p-2">
            <div className="aspect-video overflow-hidden rounded-lg border-b-[3px] border-zinc-300">
              <Image priority src={Notes} alt="Notes Project" />
            </div>
            <div className="flex grow flex-col p-3">
              <TitleCard>Notes</TitleCard>
              <DescriptionCard>
                Expert Notes é um aplicativo de notas que permite ao usuário
                criar e gerenciar notas de forma simples e eficiente.
              </DescriptionCard>

              <div className="mt-auto flex flex-col gap-3 space-y-1.5 lg:flex-row lg:justify-between lg:space-y-0">
                <div className="flex items-center gap-2">
                  <IconsCard
                    titleicon="ReactJs"
                    alt="ReactJs Icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  />
                  <IconsCard
                    titleicon="TypeScript"
                    alt="TypeScript Icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                  />
                  <IconsCard
                    titleicon="TailwindCSS"
                    alt="TailwindCSS Icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                  />
                  <IconsCard
                    titleicon="ViteJs"
                    alt="ViteJs Icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
                  />
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <SiRadixui className="size-6" />
                      </TooltipTrigger>
                      <TooltipContent side="top">
                        <span className="font-semibold">Radix UI</span>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="flex flex-col justify-center space-y-2 lg:flex-row lg:items-center lg:space-x-3 lg:space-y-0">
                  <SiteButtonCard hrefLink="https://nlwnotes.vercel.app/" />
                  <RepoButtonCard hrefLink="https://github.com/0kira-vgl/nlwNotes" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex rounded-xl border shadow-lg transition-transform duration-500 hover:scale-[1.03]">
          <div className="p-2">
            <div className="aspect-video overflow-hidden rounded-lg border-b-[3px] border-zinc-300">
              <Image priority src={PizzaShop} alt="PizzaShop Project" />
            </div>
            <div className="flex grow flex-col p-3">
              <TitleCard>PizzaShop</TitleCard>
              <DescriptionCard>
                Expert Notes é um aplicativo de notas que permite ao usuário
                criar e gerenciar notas de forma simples e eficiente.
              </DescriptionCard>

              <div className="mt-auto flex flex-col gap-3 space-y-1.5 lg:flex-row lg:justify-between lg:space-y-0">
                <div className="flex items-center gap-2">
                  <IconsCard
                    titleicon="ReactJs"
                    alt="ReactJs Icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  />
                  <IconsCard
                    titleicon="TypeScript"
                    alt="TypeScript Icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                  />
                  <IconsCard
                    titleicon="TailwindCSS"
                    alt="TailwindCSS Icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                  />
                  <IconsCard
                    titleicon="ViteJs"
                    alt="ViteJs Icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
                  />
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <SiShadcnui className="size-5" />
                      </TooltipTrigger>
                      <TooltipContent side="top">
                        <span className="font-semibold">Shadcn UI</span>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="flex flex-col justify-center space-y-2 lg:flex-row lg:items-center lg:space-x-3 lg:space-y-0">
                  <SiteButtonCard hrefLink="https://github.com/" />
                  <RepoButtonCard hrefLink="https://github.com/0kira-vgl/pizzashop" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="gap-8 space-y-8 lg:grid lg:grid-cols-3 lg:space-y-0">
        <div className="flex flex-col rounded-xl border shadow-lg transition-transform duration-500 hover:scale-[1.03]">
          <div className="p-2">
            <div className="aspect-video overflow-hidden rounded-lg border-b-[3px] border-zinc-300">
              <Image priority src={InOrbit} alt="InOrbit Project" />
            </div>
          </div>
          <div className="flex grow flex-col p-3">
            <TitleCard>In Orbit</TitleCard>
            <DescriptionCard>
              O projeto é um site desktop de registro de metas com progresso
              semanal.
            </DescriptionCard>
            <div className="mt-auto flex flex-col gap-3 space-y-1.5 lg:flex-row lg:justify-between lg:space-y-0">
              <div className="flex items-center gap-2">
                <IconsCard
                  titleicon="ReactJs"
                  alt="ReactJs Icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                />
                <IconsCard
                  titleicon="TypeScript"
                  alt="TypeScript Icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                />
                <IconsCard
                  titleicon="TailwindCSS"
                  alt="TailwindCSS Icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                />
                <IconsCard
                  titleicon="ViteJs"
                  alt="ViteJs Icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
                />
              </div>
              <div className="flex flex-col justify-center space-y-2 lg:flex-row lg:items-center lg:space-x-2 lg:space-y-0">
                <SiteButtonCard hrefLink="https://inorbit-two.vercel.app/" />
                <RepoButtonCard hrefLink="https://github.com/0kira-vgl/inorbit" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col rounded-xl border shadow-lg transition-transform duration-500 hover:scale-[1.03]">
          <div className="p-2">
            <div className="aspect-video overflow-hidden rounded-lg border-b-[3px] border-zinc-300">
              <Image priority src={Planner} alt="Planner Project" />
            </div>
          </div>
          <div className="flex grow flex-col p-3">
            <TitleCard>Planner</TitleCard>
            <DescriptionCard>
              O projeto é um site desktop para montar planos de viagem com
              amigos, registrar atividades e links úteis.
            </DescriptionCard>
            <div className="mt-auto flex flex-col gap-3 space-y-1.5 lg:flex-row lg:justify-between lg:space-y-0">
              <div className="flex items-center gap-2">
                <IconsCard
                  titleicon="ReactJs"
                  alt="ReactJs Icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                />
                <IconsCard
                  titleicon="TypeScript"
                  alt="TypeScript Icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                />
                <IconsCard
                  titleicon="TailwindCSS"
                  alt="TailwindCSS Icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                />
                <IconsCard
                  titleicon="ViteJs"
                  alt="ViteJs Icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
                />
              </div>
              <div className="flex flex-col justify-center space-y-2 lg:flex-row lg:items-center lg:space-x-2 lg:space-y-0">
                <SiteButtonCard hrefLink="https://github.com/" />
                <RepoButtonCard hrefLink="https://github.com/0kira-vgl/planner" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col rounded-xl border shadow-lg transition-transform duration-500 hover:scale-[1.03]">
          <div className="p-2">
            <div className="aspect-video overflow-hidden rounded-lg border-b-[3px] border-zinc-300">
              <Image priority src={ToDoApp} alt="ToDoApp Project" />
            </div>
          </div>
          <div className="flex grow flex-col p-3">
            <TitleCard>ToDo App</TitleCard>
            <DescriptionCard>
              Uma de lista de tarefas onde os usuários podem adicionar, marcar
              como concluídas e excluir tarefas.
            </DescriptionCard>
            <div className="mt-auto flex flex-col gap-3 space-y-1.5 lg:flex-row lg:justify-between lg:space-y-0">
              <div className="flex items-center gap-2">
                <IconsCard
                  titleicon="ReactJs"
                  alt="ReactJs Icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                />
                <IconsCard
                  titleicon="TypeScript"
                  alt="TypeScript Icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                />
                <IconsCard
                  titleicon="TailwindCSS"
                  alt="TailwindCSS Icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                />
                <IconsCard
                  titleicon="ViteJs"
                  alt="ViteJs Icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
                />
              </div>
              <div className="flex flex-col justify-center space-y-2 lg:flex-row lg:items-center lg:space-x-2 lg:space-y-0">
                <SiteButtonCard hrefLink="https://to-do-list-0kira-vgl.vercel.app/" />
                <RepoButtonCard hrefLink="https://github.com/0kira-vgl/toDoList" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

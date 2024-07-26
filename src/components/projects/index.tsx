import { ArrowRight } from "lucide-react";
import { buttonVariants } from "../ui/button";
import Image from "next/image";
import {
  DescriptionCard,
  IconsCard,
  SiteButtonCard,
  TitleCard,
  RepoButtonCard,
} from "./card";

import pic1 from "@public/thumbnailPlanner.png";

export function Projects() {
  return (
    <div className="container mx-auto w-full max-w-7xl pb-10">
      <div className="items-center justify-center pb-5">
        <h2 className="relative z-10 pb-2 text-center text-4xl font-extrabold text-[#1E293B]">
          Projetos
        </h2>
        <p className="mx-auto max-w-[17rem] text-center text-sm">
          Veja os projetos onde coloquei meus conhecimentos em prática.
        </p>
      </div>

      <div className="mb-8 grid grid-cols-2 gap-12">
        <div className="relative flex h-full flex-col rounded-xl shadow-lg outline-accent transition-transform duration-500 hover:scale-[1.03]">
          <div className="relative p-2">
            <div className="relative z-20 aspect-video w-full overflow-hidden rounded-lg border-b-[3px] border-zinc-300">
              <Image
                src={pic1}
                alt="ExplorerNotes Project"
                placeholder="blur"
              />
            </div>
            <div className="flex grow flex-col p-3">
              <TitleCard>Explorer Notes</TitleCard>
              <DescriptionCard>
                Expert Notes é um aplicativo de notas que permite ao usuário
                criar e gerenciar notas de forma simples e eficiente.
              </DescriptionCard>
              <div className="mt-auto flex justify-between gap-3">
                <div className="flex items-center gap-2">
                  <IconsCard
                    titleIcon="ReactJs"
                    alt="ReactJs Icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  />
                  <IconsCard
                    titleIcon="TypeScript"
                    alt="TypeScript Icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                  />
                  <IconsCard
                    titleIcon="TailwindCSS"
                    alt="TailwindCSS Icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                  />
                  <IconsCard
                    titleIcon="ViteJs"
                    alt="ViteJs Icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
                  />
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <SiteButtonCard hrefLink="https://github.com/" />
                  <RepoButtonCard hrefLink="https://github.com/0kira-vgl?tab=repositories" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex h-full flex-col rounded-xl shadow-lg outline-accent transition-transform duration-500 hover:scale-[1.03]">
          <div className="relative p-2">
            <div className="relative z-20 aspect-video w-full overflow-hidden rounded-lg border-b-[3px] border-zinc-300">
              <div>
                <Image src={pic1} placeholder="blur" alt="" />
              </div>
            </div>
            <div className="flex grow flex-col p-3">
              <TitleCard>Plann.er</TitleCard>
              <DescriptionCard>
                Uma aplicação para gerenciamento de viagens e atividades.
              </DescriptionCard>
              <div className="mt-auto flex justify-between gap-3">
                <div className="flex items-center gap-2">
                  <IconsCard
                    titleIcon="ReactJs"
                    alt="ReactJs Icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  />
                  <IconsCard
                    titleIcon="TypeScript"
                    alt="TypeScript Icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                  />
                  <IconsCard
                    titleIcon="TailwindCSS"
                    alt="TailwindCSS Icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                  />
                  <IconsCard
                    titleIcon="ViteJs"
                    alt="ViteJs Icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
                  />
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <SiteButtonCard hrefLink="https://github.com/" />
                  <RepoButtonCard hrefLink="https://github.com/0kira-vgl?tab=repositories" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8 align-super">
        <div className="relative flex h-full flex-col rounded-xl shadow-lg outline-accent transition-transform duration-500 hover:scale-[1.03]">
          <div className="relative p-2">
            <div className="relative z-20 aspect-video w-full overflow-hidden rounded-lg border-b-[3px] border-zinc-300">
              <Image src={pic1} placeholder="blur" alt="" />
            </div>
          </div>
          <div className="flex grow flex-col p-3">
            <TitleCard>Explorer Notes</TitleCard>
            <DescriptionCard>
              Expert Notes é um aplicativo de notas que permite ao usuário criar
              e gerenciar notas de forma simples e eficiente.
            </DescriptionCard>
            <div className="mt-auto flex justify-between gap-3">
              <div className="flex items-center gap-2">
                <IconsCard
                  titleIcon="ReactJs"
                  alt="ReactJs Icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                />
                <IconsCard
                  titleIcon="TypeScript"
                  alt="TypeScript Icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                />
                <IconsCard
                  titleIcon="TailwindCSS"
                  alt="TailwindCSS Icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                />
                <IconsCard
                  titleIcon="ViteJs"
                  alt="ViteJs Icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
                />
              </div>
              <div className="flex items-center justify-center space-x-2">
                <SiteButtonCard hrefLink="https://github.com/" />
                <RepoButtonCard hrefLink="https://github.com/0kira-vgl?tab=repositories" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex h-full flex-col rounded-xl shadow-lg outline-accent transition-transform duration-500 hover:scale-[1.03]">
          <div className="relative p-2">
            <div className="relative z-20 aspect-video w-full overflow-hidden rounded-lg border-b-[3px] border-zinc-300">
              <Image src={pic1} placeholder="blur" alt="" />
            </div>
          </div>
          <div className="flex grow flex-col p-3">
            <TitleCard>Explorer Notes</TitleCard>
            <DescriptionCard>
              Expert Notes é um aplicativo de notas que permite ao usuário criar
              e gerenciar notas de forma simples e eficiente.
            </DescriptionCard>
            <div className="mt-auto flex justify-between gap-3">
              <div className="flex items-center gap-2">
                <IconsCard
                  titleIcon="ReactJs"
                  alt="ReactJs Icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                />
                <IconsCard
                  titleIcon="TypeScript"
                  alt="TypeScript Icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                />
                <IconsCard
                  titleIcon="TailwindCSS"
                  alt="TailwindCSS Icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                />
                <IconsCard
                  titleIcon="ViteJs"
                  alt="ViteJs Icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
                />
              </div>
              <div className="flex items-center justify-center space-x-2">
                <SiteButtonCard hrefLink="https://github.com/" />
                <RepoButtonCard hrefLink="https://github.com/0kira-vgl?tab=repositories" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex h-full flex-col rounded-xl shadow-lg outline-accent transition-transform duration-500 hover:scale-[1.03]">
          <div className="relative p-2">
            <div className="relative z-20 aspect-video w-full overflow-hidden rounded-lg border-b-[3px] border-zinc-300">
              <Image src={pic1} placeholder="blur" alt="" />
            </div>
          </div>
          <div className="flex grow flex-col p-3">
            <TitleCard>Explorer Notes</TitleCard>
            <DescriptionCard>
              Expert Notes é um aplicativo de notas que permite ao usuário criar
              e gerenciar notas de forma simples e eficiente.
            </DescriptionCard>
            <div className="mt-auto flex justify-between gap-3">
              <div className="flex items-center gap-2">
                <IconsCard
                  titleIcon="ReactJs"
                  alt="ReactJs Icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                />
                <IconsCard
                  titleIcon="TypeScript"
                  alt="TypeScript Icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                />
                <IconsCard
                  titleIcon="TailwindCSS"
                  alt="TailwindCSS Icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                />
                <IconsCard
                  titleIcon="ViteJs"
                  alt="ViteJs Icon"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
                />
              </div>
              <div className="flex items-center justify-center space-x-2">
                <SiteButtonCard hrefLink="https://github.com/" />
                <RepoButtonCard hrefLink="https://github.com/0kira-vgl?tab=repositories" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-96 pt-12 text-center">
        <a
          href="https://github.com/0kira-vgl?tab=repositories"
          target="_blank"
          className={buttonVariants({
            className: "group flex items-center justify-center gap-5",
            variant: "outline",
          })}
        >
          Ver mais repositórios
          <ArrowRight className="duration-[0.3s] ease-[ease] group size-5 -translate-x-2 transition-all group-hover:translate-x-0" />
        </a>
      </div>
    </div>
  );
}

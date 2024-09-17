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
import * as motion from "framer-motion/client";

import pic1 from "@public/thumbnailPlanner.png";
import InOrbit from "@/assets/thumbnails/inOrbit.svg";
import Planner from "@/assets/thumbnails/planner.svg";

export function Cards() {
  const animationVariants = {
    doubleCards: {
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.4, delay: 0.4, ease: "easeOut" },
    },

    tripleCards: {
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.4, delay: 0.1, ease: "easeOut" },
    },
  };

  return (
    <main>
      <motion.div
        {...animationVariants.doubleCards}
        className="mb-8 gap-8 space-y-8 lg:grid lg:grid-cols-2 lg:space-y-0"
      >
        <div className="flex rounded-xl border shadow-lg transition-transform duration-500 hover:scale-[1.03]">
          <div className="p-2">
            <div className="aspect-video overflow-hidden rounded-lg border-b-[3px] border-zinc-300">
              <Image priority src={pic1} alt="ExplorerNotes Project" />
            </div>
            <div className="flex grow flex-col p-3">
              <TitleCard>Explorer Notes</TitleCard>
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
                  <SiteButtonCard hrefLink="https://github.com/" />
                  <RepoButtonCard hrefLink="https://github.com/0kira-vgl?tab=repositories" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex rounded-xl border shadow-lg transition-transform duration-500 hover:scale-[1.03]">
          <div className="p-2">
            <div className="aspect-video overflow-hidden rounded-lg border-b-[3px] border-zinc-300">
              <Image priority src={InOrbit} alt="InOrbit Project" />
            </div>
            <div className="flex grow flex-col p-3">
              <TitleCard>in.orbit</TitleCard>
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
                  <RepoButtonCard hrefLink="https://github.com/0kira-vgl?tab=repositories" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        {...animationVariants.tripleCards}
        className="gap-8 space-y-8 lg:grid lg:grid-cols-3 lg:space-y-0"
      >
        <div className="flex flex-col rounded-xl border shadow-lg transition-transform duration-500 hover:scale-[1.03]">
          <div className="p-2">
            <div className="aspect-video overflow-hidden rounded-lg border-b-[3px] border-zinc-300">
              <Image priority src={pic1} alt="" />
            </div>
          </div>
          <div className="flex grow flex-col p-3">
            <TitleCard>Explorer Notes</TitleCard>
            <DescriptionCard>
              Expert Notes é um aplicativo de notas que permite ao usuário criar
              e gerenciar notas de forma simples e eficiente.
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
                <RepoButtonCard hrefLink="https://github.com/0kira-vgl?tab=repositories" />
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
            <TitleCard>Explorer Notes</TitleCard>
            <DescriptionCard>
              Expert Notes é um aplicativo de notas que permite ao usuário criar
              e gerenciar notas de forma simples e eficiente.
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
                <RepoButtonCard hrefLink="https://github.com/0kira-vgl?tab=repositories" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col rounded-xl border shadow-lg transition-transform duration-500 hover:scale-[1.03]">
          <div className="p-2">
            <div className="aspect-video overflow-hidden rounded-lg border-b-[3px] border-zinc-300">
              <Image priority src={pic1} alt="" />
            </div>
          </div>
          <div className="flex grow flex-col p-3">
            <TitleCard>Explorer Notes</TitleCard>
            <DescriptionCard>
              Expert Notes é um aplicativo de notas que permite ao usuário criar
              e gerenciar notas de forma simples e eficiente.
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
                <RepoButtonCard hrefLink="https://github.com/0kira-vgl?tab=repositories" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}

import { SiRadixui } from "react-icons/si";
import Image, { ImageProps } from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DemoButton, IconsCard, RepositoryButton } from "./cardElements";

type BigCardsProps = ImageProps & {
  title: string;
  description: string;
  demo: string;
  repository: string;
};

export function Card({
  title,
  description,
  demo,
  repository,
  ...props
}: BigCardsProps) {
  return (
    <div className="flex rounded-xl border shadow-lg transition-transform duration-500 hover:scale-[1.03]">
      <div className="p-2">
        <div className="aspect-video overflow-hidden rounded-lg">
          <Image {...props} priority alt="Notes Project" />
        </div>
        <div className="flex grow flex-col p-3">
          <h2 className="text-lg font-bold text-slate-800 dark:bg-gradient-text-dark dark:bg-clip-text dark:text-neutral-50 dark:text-transparent">
            {title}
          </h2>
          <p className="mb-3 text-sm text-neutral-500 dark:text-description">
            {description}
          </p>

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
              <DemoButton href={demo} />
              <RepositoryButton href={repository} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

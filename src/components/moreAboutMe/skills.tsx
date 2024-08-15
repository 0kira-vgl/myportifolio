import { SiShadcnui, SiRadixui } from "react-icons/si";
import { IconsCard } from "../projects/cardComponents";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export function Skills() {
  return (
    <div className="flex justify-between">
      <div className="space-y-6">
        <div>
          <h2 className="mb-3 text-2xl font-semibold">
            Linguagens e Frameworks
          </h2>
          <div className="flex items-center gap-2">
            <IconsCard
              className="size-14"
              titleIcon="HTML5"
              alt="HTML5 Icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
            />
            <IconsCard
              className="size-14"
              titleIcon="CSS3"
              alt="CSS3 Icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
            />
            <IconsCard
              className="size-14"
              titleIcon="JavaScript"
              alt="JavaScript Icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            />
            <IconsCard
              className="size-14"
              titleIcon="TypeScript"
              alt="TypeScript Icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
            />
            <IconsCard
              className="size-14"
              titleIcon="ReactJs"
              alt="ReactJs Icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            />
            <IconsCard
              className="size-14"
              titleIcon="NextJs"
              alt="NextJs Icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
            />
          </div>
        </div>

        <div>
          <h2 className="mb-3 text-2xl font-semibold">
            Ferramentas de Desenvolvimento
          </h2>
          <div className="flex items-center gap-2">
            <IconsCard
              className="size-14"
              titleIcon="Visual Studio Code"
              alt="Visual Studio Code Icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
            />
            <IconsCard
              className="size-14"
              titleIcon="Git"
              alt="Git Icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
            />
            <IconsCard
              className="size-14"
              titleIcon="GitHub"
              alt="GitHub Icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
            />
            <IconsCard
              className="size-14"
              titleIcon="Figma"
              alt="Figma Icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
            />
            <IconsCard
              className="size-14"
              titleIcon="ViteJs"
              alt="ViteJs Icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
            />
            <IconsCard
              className="size-14"
              titleIcon="TailwindCSS"
              alt="TailwindCSS Icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            />
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <SiShadcnui className="size-11" />
                </TooltipTrigger>
                <TooltipContent side="top">
                  <span className="font-semibold">Shadcn UI</span>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <SiRadixui className="size-12" />
                </TooltipTrigger>
                <TooltipContent side="top">
                  <span className="font-semibold">Radix UI</span>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        <div>
          <h2 className="mb-1.5 text-2xl font-semibold">Idiomas</h2>
          <div className="flex-row text-lg">
            <p className="font-medium">
              <span className="font-semibold">Português (Brasil) / </span>
              fluente
            </p>
            <p className="font-medium">
              <span className="font-semibold">Inglês / </span> Básico
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-3 text-2xl font-semibold">Soft Skills</h2>

        <div>
          <h2>Metodologia Ágil Scrum</h2>
        </div>
      </div>
    </div>
  );
}

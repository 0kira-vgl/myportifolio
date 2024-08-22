import { IconsCard } from "../projects/cardComponents";
import { VscTools } from "react-icons/vsc";
import { LiaLanguageSolid } from "react-icons/lia";
import { LuLanguages } from "react-icons/lu";

export function Skills() {
  return (
    <div>
      <div className="mx-5 space-y-6 lg:container lg:w-full lg:max-w-7xl">
        <div className="group relative w-fit">
          <div className="absolute inset-0 rounded-br-lg rounded-tl-lg rounded-tr-lg bg-gradient-to-r from-[#E44D26] to-[#61DAFB] opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
          <div className="relative rounded-lg bg-white bg-gradient-to-r p-4 dark:bg-black">
            <h2 className="mb-3 flex flex-col items-end text-2xl font-extrabold text-slate-800 dark:bg-gradient-text-dark dark:bg-clip-text dark:text-neutral-100 dark:text-transparent lg:flex-row lg:items-center lg:gap-2">
              <LiaLanguageSolid className="text-slate-800 opacity-50 dark:text-zinc-50 lg:hidden" />
              <span className="hidden lg:block">|</span> Linguagens e Frameworks
              <LiaLanguageSolid className="hidden text-slate-800 opacity-50 dark:text-zinc-50 lg:block" />
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
        </div>

        <div className="group relative w-fit">
          <div className="absolute inset-0 rounded-br-lg rounded-tl-lg rounded-tr-lg bg-gradient-to-r from-[#0081CF] to-[#FAFAFA] opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
          <div className="relative rounded-lg bg-white bg-gradient-to-r p-4 dark:bg-black">
            <div>
              <h2 className="mb-3 flex items-center gap-2 text-2xl font-extrabold text-slate-800 dark:bg-gradient-text-dark dark:bg-clip-text dark:text-neutral-100 dark:text-transparent">
                <span className="hidden lg:block">|</span> Ferramentas de
                Desenvolvimento
                <VscTools className="text-slate-800 opacity-50 dark:text-zinc-50" />
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
              </div>
            </div>
          </div>
        </div>

        <div className="group relative w-fit">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
          <div className="relative rounded-lg bg-white bg-gradient-to-r p-4 dark:bg-black">
            <h2 className="mb-3 flex items-center gap-2 text-2xl font-extrabold text-slate-800 dark:bg-gradient-text-dark dark:bg-clip-text dark:text-neutral-100 dark:text-transparent">
              <span className="">|</span> Idiomas
              <LuLanguages className="text-slate-800 opacity-50 dark:text-zinc-50" />
            </h2>
            <div className="flex flex-col text-slate-800 dark:bg-gradient-text-dark dark:bg-clip-text dark:text-neutral-100 dark:text-transparent">
              <span className="font-semibold">
                <span className="font-extrabold">Português (Brasil) / </span>
                fluente
              </span>
              <span className="font-semibold">
                <span className="font-extrabold">Inglês / </span> Básico
              </span>
            </div>
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

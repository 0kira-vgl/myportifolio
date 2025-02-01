import { DiScrum } from "react-icons/di";
import { LiaLanguageSolid } from "react-icons/lia";
import { LuLanguages } from "react-icons/lu";
import { VscTools } from "react-icons/vsc";
import { IconsCard } from "../projects/cardElements";
import { useTranslations } from "next-intl";
import * as motion from "framer-motion/client";

export function SkillsCard() {
  const t = useTranslations("Skills.SkillsCard");

  const animationVariants = {
    firstLine: {
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.6, delay: 0.2, ease: "easeInOut" },
    },

    secondLine: {
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.5, delay: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <main className="flex flex-col space-y-12 lg:space-y-16">
      <div className="space-y-12 text-center lg:grid lg:grid-cols-2 lg:space-y-0">
        <motion.div
          {...animationVariants.firstLine}
          className="flex flex-col items-center justify-center space-y-3"
        >
          <div className="rounded-lg border p-1.5 shadow-md">
            <LiaLanguageSolid className="size-8 text-slate-800 opacity-50 dark:text-zinc-50" />
          </div>

          <h2 className="text-2xl font-extrabold text-slate-800 dark:bg-gradient-text-dark dark:bg-clip-text dark:text-neutral-100 dark:text-transparent">
            {t("languagesAndFrameworks")}
          </h2>

          <div className="flex items-center gap-2">
            <IconsCard
              className="size-14"
              titleicon="HTML5"
              alt="HTML5 Icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
            />
            <IconsCard
              className="size-14"
              titleicon="CSS3"
              alt="CSS3 Icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
            />
            <IconsCard
              className="size-14"
              titleicon="JavaScript"
              alt="JavaScript Icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            />
            <IconsCard
              className="size-14"
              titleicon="TypeScript"
              alt="TypeScript Icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
            />
            <IconsCard
              className="size-14"
              titleicon="ReactJs / React Native"
              alt="ReactJs Icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            />
            <IconsCard
              className="size-14"
              titleicon="NextJs"
              alt="NextJs Icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
            />
          </div>
        </motion.div>

        <motion.div
          {...animationVariants.firstLine}
          className="flex flex-col items-center justify-center space-y-3"
        >
          <div className="rounded-lg border p-1.5 shadow-md">
            <VscTools className="size-8 text-slate-800 opacity-50 dark:text-zinc-50" />
          </div>

          <h2 className="text-2xl font-extrabold text-slate-800 dark:bg-gradient-text-dark dark:bg-clip-text dark:text-neutral-100 dark:text-transparent">
            {t("devTools")}
          </h2>

          <div className="flex items-center gap-2">
            <IconsCard
              className="size-14"
              titleicon="Visual Studio Code"
              alt="Visual Studio Code Icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
            />
            <IconsCard
              className="size-14"
              titleicon="Git"
              alt="Git Icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
            />
            <IconsCard
              className="size-14"
              titleicon="GitHub"
              alt="GitHub Icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
            />
            <IconsCard
              className="size-14"
              titleicon="Figma"
              alt="Figma Icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
            />
            <IconsCard
              className="size-14"
              titleicon="ViteJs"
              alt="ViteJs Icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
            />
            <IconsCard
              className="size-14"
              titleicon="TailwindCSS"
              alt="TailwindCSS Icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            />
          </div>
        </motion.div>
      </div>

      <div className="space-y-12 text-center lg:grid lg:grid-cols-2 lg:space-y-0">
        <motion.div
          {...animationVariants.secondLine}
          className="flex flex-col items-center justify-center space-y-3"
        >
          <div className="rounded-lg border p-1.5 shadow-md">
            <LuLanguages className="size-8 text-slate-800 opacity-50 dark:text-zinc-50" />
          </div>

          <h2 className="text-2xl font-extrabold text-slate-800 dark:bg-gradient-text-dark dark:bg-clip-text dark:text-neutral-100 dark:text-transparent">
            {t("languages.title")}
          </h2>
          <div className="flex flex-col text-center text-slate-800 dark:bg-gradient-text-dark dark:bg-clip-text dark:text-neutral-100 dark:text-transparent">
            <span className="font-semibold">
              <span className="font-extrabold">{t("languages.pt")} / </span>
              {t("languages.level.pt")}
            </span>
            <span className="font-semibold">
              <span className="font-extrabold">{t("languages.en")} / </span>{" "}
              {t("languages.level.en")}
            </span>
          </div>
        </motion.div>

        <motion.div
          {...animationVariants.secondLine}
          className="flex flex-col items-center justify-center space-y-3"
        >
          <div className="rounded-lg border p-1.5 shadow-md">
            <DiScrum className="size-8 text-slate-800 opacity-50 dark:text-zinc-50" />
          </div>

          <h2 className="text-2xl font-extrabold text-slate-800 dark:bg-gradient-text-dark dark:bg-clip-text dark:text-neutral-100 dark:text-transparent">
            Soft Skills
          </h2>
          <div className="flex flex-col text-center text-slate-800 dark:bg-gradient-text-dark dark:bg-clip-text dark:text-neutral-100 dark:text-transparent">
            <span className="font-semibold">
              <span className="font-extrabold">- Metodologia Scrum </span>
            </span>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

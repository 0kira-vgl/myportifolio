import { ArrowRight } from "lucide-react";
import { buttonVariants } from "../ui/button";
import { Cards } from "./cards";

export function Projects() {
  return (
    <div id="projects" className="container mx-auto w-full max-w-7xl pb-64">
      <div className="items-center justify-center pb-5">
        <h2 className="pb-2 text-center text-4xl font-extrabold text-slate-800 dark:bg-gradient-text-dark dark:bg-clip-text dark:text-neutral-100 dark:text-transparent">
          Projetos
        </h2>
        <p className="mx-auto mb-3 max-w-[17rem] text-center text-sm text-slate-800 dark:text-zinc-500">
          Veja os projetos onde coloquei meus conhecimentos em prática.
        </p>
      </div>

      <Cards />

      <div className="pt-12 text-center">
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

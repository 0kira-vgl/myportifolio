import { RxDoubleArrowDown } from "react-icons/rx";
import { IntroButtons } from "./introButtons";

export function Introduction() {
  return (
    <section
      id="home"
      className="h-screen w-full bg-white bg-pattern bg-center bg-no-repeat pt-8 dark:bg-zinc-950"
    >
      <main className="flex-col items-center justify-center lg:flex lg:pt-16">
        <div className="space-y-2 text-center">
          <p className="hidden text-slate-800 dark:bg-gradient-text-dark dark:bg-clip-text dark:text-slate-200 dark:text-transparent lg:block lg:text-left lg:text-2xl">
            &lt;Hello World! /&gt;
          </p>
          <h1 className="hidden font-semibold text-slate-800 dark:bg-gradient-text-dark dark:bg-clip-text dark:text-transparent lg:block lg:text-7xl">
            Olá, eu sou o Matheus...
          </h1>
          <h2 className="text-5xl font-semibold leading-tight text-slate-800 dark:bg-gradient-text-dark dark:bg-clip-text dark:text-slate-200 dark:text-transparent lg:text-6xl">
            Seu próximo desenvolvedor{" "}
            <span className="bg-gradient-light bg-clip-text font-extrabold text-transparent dark:bg-gradient-dark">
              Front-end ;&#41;
            </span>
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center pt-4 text-center">
          <p className="mx-8 mb-8 mt-2 max-w-[32rem] text-center text-base text-zinc-500 lg:mt-4 lg:text-xl">
            Me chamo Matheus Tiburcio, um dedicado desenvolvedor Front-end.
          </p>

          <IntroButtons />
        </div>
      </main>

      <footer className="flex flex-col items-center justify-center space-y-2 pt-16 font-light text-zinc-600 dark:text-zinc-500 lg:pt-14">
        <span className="animate-bounce">Deslize para baixo...</span>
        <RxDoubleArrowDown className="size-5 animate-bounce" />
      </footer>
    </section>
  );
}

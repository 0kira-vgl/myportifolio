import { Header } from "@/components/header";
import { Projects } from "@/components/projects";
import { AboutMe } from "@/components/aboutMe";
import { RxDoubleArrowDown } from "react-icons/rx";
import { Footer } from "@/components/footer";
import { ScrollTopButton } from "@/components/scrollTopButton";

export default function Home() {
  return (
    <>
      {/* <Header /> */}

      <section
        id="home"
        className="h-screen w-full bg-linear bg-cover dark:bg-zinc-950 dark:bg-pattern dark:bg-center dark:bg-no-repeat"
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

            <div className="w-min gap-4 space-y-4 pt-3 lg:flex lg:space-y-0">
              <a
                href="https://github.com/0kira-vgl"
                target="_blank"
                className="flex min-w-0 flex-1 items-center justify-center gap-3 rounded-full border border-gray-700 bg-gradient-to-r from-gray-800 to-black px-7 py-3 font-semibold text-white duration-200 hover:scale-105 hover:border-gray-800 hover:from-black hover:to-gray-900 hover:text-gray-300"
              >
                <svg
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#FFFFFF"
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  ></path>
                </svg>
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/matheus-tiburcio-82a337276/"
                target="_blank"
                className="flex min-w-0 flex-1 items-center justify-center gap-3 rounded-full border border-blue-600 bg-gradient-to-r from-blue-600 to-blue-800 px-7 py-3 font-semibold text-white duration-200 hover:scale-105 hover:border-blue-800 hover:from-blue-800 hover:to-blue-900 hover:text-gray-300"
              >
                <svg
                  viewBox="0 0 128 128"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#FFFFFF"
                    d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z"
                  ></path>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </main>

        <footer className="flex flex-col items-center justify-center space-y-2 pt-28 font-light text-zinc-600 dark:text-zinc-500 lg:pt-16">
          <span className="animate-bounce">Deslize para baixo...</span>
          <RxDoubleArrowDown className="size-5 animate-bounce" />
        </footer>
      </section>

      <ScrollTopButton />
      <AboutMe />
      <Projects />
      <Footer />
    </>
  );
}

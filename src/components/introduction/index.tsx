import { RxDoubleArrowDown } from "react-icons/rx";
import { IntroButtons } from "./introButtons";
import { CiFilter } from "react-icons/ci";
import { useTranslations } from "next-intl";

export function Introduction() {
  const t = useTranslations("Introduction");

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
            {t("titleName")}
          </h1>
          <h2 className="text-5xl font-semibold leading-tight text-slate-800 dark:bg-gradient-text-dark dark:bg-clip-text dark:text-slate-200 dark:text-transparent lg:text-6xl">
            {t("titleDev")}{" "}
            <span className="bg-gradient-light bg-clip-text font-extrabold text-transparent dark:bg-gradient-dark">
              Front-end ;&#41;
            </span>
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center pt-4 text-center">
          <p className="mx-8 mb-8 mt-2 max-w-[32rem] text-center text-base text-zinc-500 lg:mt-4 lg:text-xl">
            {t("subtitle")}
          </p>

          <IntroButtons />
        </div>
      </main>

      <footer className="flex flex-col items-center justify-center space-y-2 pt-16 font-light text-zinc-600 dark:text-zinc-500 lg:pt-14">
        <span className="animate-bounce"> {t("down")}</span>
        <RxDoubleArrowDown className="size-5 animate-bounce" />
      </footer>

      {/* <div className="group relative w-fit">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
        <button className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-black px-7 py-4 leading-none">
          <span className="flex items-center space-x-5 text-pink-600">
            <CiFilter />
          </span>
          <span className="pr-6 text-gray-600">Labs Release 2021.09</span>
          <span className="pl-6 text-indigo-400 transition duration-200 group-hover:text-gray-100">
            See whats new &rarr;
          </span>
        </button>
      </div> */}
    </section>
  );
}

import { RxDoubleArrowDown } from "react-icons/rx";
import { IntroButtons } from "./introButtons";
import { useTranslations } from "next-intl";
import * as motion from "framer-motion/client";

export function Introduction() {
  const t = useTranslations("Introduction");

  return (
    <section
      id="home"
      className="h-screen w-full bg-pattern bg-center bg-no-repeat pt-8"
    >
      <main className="flex-col items-center justify-center lg:flex lg:pt-16">
        <div className="space-y-2 text-center">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="hidden text-slate-800 dark:bg-gradient-text-dark dark:bg-clip-text dark:text-slate-200 dark:text-transparent lg:block lg:text-left lg:text-2xl"
          >
            &lt;Hello World! /&gt;
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="hidden font-semibold text-slate-800 dark:bg-gradient-text-dark dark:bg-clip-text dark:text-transparent lg:block lg:text-7xl">
              {t("titleName")}
            </h1>
            <h2 className="text-5xl font-semibold leading-tight text-slate-800 dark:bg-gradient-text-dark dark:bg-clip-text dark:text-slate-200 dark:text-transparent lg:text-6xl">
              {t("titleDev")}{" "}
              <span className="bg-gradient-light bg-clip-text font-extrabold text-transparent dark:bg-gradient-dark">
                Front-end ;&#41;
              </span>
            </h2>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col items-center justify-center pt-4 text-center"
        >
          <p className="mx-8 mb-8 mt-2 max-w-[32rem] text-center text-base text-zinc-500 lg:mt-4 lg:text-xl">
            {t("subtitle")}
          </p>
          <IntroButtons />
        </motion.div>
      </main>

      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        className="flex flex-col items-center justify-center space-y-2 pt-16 font-light text-zinc-600 dark:text-zinc-500 lg:pt-14"
      >
        <span className="animate-bounce"> {t("down")}</span>
        <RxDoubleArrowDown className="size-5 animate-bounce" />
      </motion.footer>
    </section>
  );
}

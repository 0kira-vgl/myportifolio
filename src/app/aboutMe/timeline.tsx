"use client";

import { FaPlay } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { FiCompass } from "react-icons/fi";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function Timeline() {
  const t = useTranslations("Timeline");

  const animationProps = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeInOut", delay: 0.1 },
  };

  return (
    <>
      <ol className="relative border-s border-gray-200 dark:border-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <li className="mb-10 ms-6">
            <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-violet-100 ring-4 ring-zinc-100 dark:bg-violet-900 dark:ring-gray-900">
              <FaPlay className="size-3 text-violet-800 dark:text-violet-300" />
            </span>
            <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-800 dark:text-neutral-50">
              {t("item1.title")}
            </h3>
            <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {t("item1.date")}
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {t("item1.description")}
            </p>
          </li>
        </motion.div>

        <motion.div {...animationProps}>
          <li className="mb-10 ms-6">
            <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-violet-100 ring-4 ring-zinc-100 dark:bg-violet-900 dark:ring-gray-900">
              <IoLogoJavascript className="size-3 text-violet-800 dark:text-violet-300" />
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-800 dark:text-neutral-50">
              {t("item2.title")}
            </h3>
            <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {t("item2.date")}
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              {t("item2.description")}
            </p>
          </li>
        </motion.div>

        <motion.div {...animationProps}>
          <li className="mb-10 ms-6">
            <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-violet-100 ring-4 ring-zinc-100 dark:bg-violet-900 dark:ring-gray-900">
              <GrReactjs className="size-3 text-violet-800 dark:text-violet-300" />
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-800 dark:text-neutral-50">
              {t("item3.title")}
            </h3>
            <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {t("item3.date")}
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              {t("item3.description")}
            </p>
          </li>
        </motion.div>

        <motion.div {...animationProps}>
          <li className="ms-6">
            <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-violet-100 ring-4 ring-zinc-100 dark:bg-violet-900 dark:ring-gray-900">
              <FiCompass className="size-3 text-violet-800 dark:text-violet-300" />
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-800 dark:text-neutral-50">
              {t("item4.title")}
              <span className="me-2 ms-3 rounded bg-violet-100 px-2.5 py-0.5 text-sm font-medium text-violet-800 dark:bg-violet-900 dark:text-violet-300">
                {t("item4.badge")}
              </span>
            </h3>
            <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {t("item4.date")}
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              {t.rich("item4.description", {
                mindGroupLink: (chunks) => (
                  <a
                    href="https://www.linkedin.com/company/mind-tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative text-violet-600 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full dark:text-violet-400"
                  >
                    {chunks}
                  </a>
                ),
              })}
            </p>
          </li>
        </motion.div>
      </ol>
    </>
  );
}

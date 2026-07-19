"use client";

import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuFileSpreadsheet } from "react-icons/lu";
import { NameLogo } from "./nameLogo";
import { Separator } from "./ui/separator";
import { scrollToSection } from "@/lib/scrollToSection";

const SECTIONS = ["home", "aboutMe", "skills", "projects", "contact"] as const;

const iconLinkClassName =
  "flex size-9 items-center justify-center rounded-xl border border-zinc-200/60 bg-zinc-50/50 text-zinc-600 transition-all duration-200 hover:border-violet-400 hover:text-violet-500 hover:scale-105 active:scale-95 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-400 dark:hover:border-violet-400 dark:hover:text-violet-400";

const textLinkClassName =
  "text-sm text-zinc-600 transition-colors duration-200 hover:text-violet-500 dark:text-zinc-400 dark:hover:text-violet-400";

export function Footer() {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-zinc-200 bg-zinc-50/60 dark:border-zinc-800 dark:bg-zinc-950/40">
      <div className="mx-auto flex w-[92%] max-w-6xl flex-col gap-10 py-14 sm:gap-12 sm:py-16 lg:flex-row lg:justify-between lg:gap-8">
        <div className="max-w-sm space-y-5">
          <NameLogo className="text-2xl" />
          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {t("Footer.tagline")}
          </p>
          <div className="flex gap-3">
            <a
              href="https://github.com/0kira-vgl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={iconLinkClassName}
            >
              <FaGithub className="size-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/matheus-tiburcio-82a337276/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={iconLinkClassName}
            >
              <FaLinkedinIn className="size-4" />
            </a>
            <a
              href="mailto:matheusgtiburcio@gmail.com"
              aria-label="Email"
              className={iconLinkClassName}
            >
              <MdOutlineMailOutline className="size-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-16">
          <div className="space-y-4">
            <h4 className="font-code text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              {t("Header.navegationTitle")}
            </h4>
            <ul className="space-y-3">
              {SECTIONS.map((key) => (
                <li key={key}>
                  <a
                    href={`#${key}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(key);
                    }}
                    className={textLinkClassName}
                  >
                    {t(`Header.${key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 space-y-4">
            <h4 className="font-code text-xs uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              {t("Footer.contactTitle")}
            </h4>
            <a
              href="mailto:matheusgtiburcio@gmail.com"
              className={`${textLinkClassName} flex items-center gap-2 break-all`}
            >
              <MdOutlineMailOutline className="size-4 shrink-0 text-zinc-400 dark:text-zinc-500" />
              matheusgtiburcio@gmail.com
            </a>
            <a
              href="/Matheus Tiburcio - CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm font-medium text-zinc-700 transition-colors duration-200 hover:border-violet-400 hover:bg-violet-50 hover:text-violet-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-violet-400 dark:hover:bg-violet-950/40 dark:hover:text-violet-400"
            >
              {t("Contact.button")}
              <LuFileSpreadsheet className="size-3.5" />
            </a>
          </div>
        </div>
      </div>

      <Separator />

      <div className="mx-auto flex w-[92%] max-w-6xl items-center justify-center py-6 text-center">
        <span className="font-code text-xs text-zinc-500 dark:text-zinc-500">
          © 2024{currentYear > 2024 ? `-${currentYear}` : ""} Matheus Tiburcio.{" "}
          {t("Footer.rights")}
        </span>
      </div>
    </footer>
  );
}

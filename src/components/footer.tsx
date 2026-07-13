import Link from "next/link";
import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuFileSpreadsheet } from "react-icons/lu";
import { NameLogo } from "./nameLogo";
import { Separator } from "./ui/separator";

const SECTIONS = ["home", "aboutMe", "skills", "projects", "contact"] as const;

const iconLinkClassName =
  "flex size-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 transition-colors duration-200 hover:border-purple-400 hover:text-purple-500 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-purple-400 dark:hover:text-purple-400";

const textLinkClassName =
  "text-sm text-zinc-600 transition-colors duration-200 hover:text-purple-500 dark:text-zinc-400 dark:hover:text-purple-400";

export function Footer() {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex w-[92%] max-w-6xl flex-col gap-12 py-14 lg:flex-row lg:justify-between lg:gap-8">
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

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 sm:gap-16">
          <div className="space-y-3">
            <h4 className="font-code text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
              {t("Header.navegationTitle")}
            </h4>
            <ul className="space-y-2.5">
              {SECTIONS.map((key) => (
                <li key={key}>
                  <Link href={`#${key}`} className={textLinkClassName}>
                    {t(`Header.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-code text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
              {t("Footer.contactTitle")}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:matheusgtiburcio@gmail.com"
                  className={textLinkClassName}
                >
                  matheusgtiburcio@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="/Matheus Tiburcio - CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${textLinkClassName} inline-flex items-center gap-1.5`}
                >
                  {t("Contact.button")}
                  <LuFileSpreadsheet className="size-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Separator />

      <div className="mx-auto w-[92%] max-w-6xl py-6 text-center">
        <span className="font-code text-xs text-zinc-500 dark:text-zinc-500">
          © 2024{currentYear > 2024 ? `–${currentYear}` : ""} Matheus Tiburcio.{" "}
          {t("Footer.rights")}
        </span>
      </div>
    </footer>
  );
}

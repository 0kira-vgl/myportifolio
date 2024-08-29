import Link from "next/link";
import { NameLogo } from "./nameLogo";
import { ModeToggle } from "./modeToggle";
import { useTranslations } from "next-intl";
import { LanguageToggle } from "./languageToggle";

export function Header() {
  const t = useTranslations("Header");

  return (
    <header className="sticky top-0 z-50 hidden h-14 items-center justify-center py-9 backdrop-blur-sm lg:flex lg:items-center lg:justify-center">
      <main className="flex w-[92%] items-center justify-between">
        <div>
          <NameLogo />
        </div>

        <div className="flex items-center gap-x-8">
          <Link className="nav text-xl font-medium" href="#home">
            {t("home")}
          </Link>

          <Link className="nav text-xl font-medium" href="#aboutMe">
            {t("aboutMe")}
          </Link>

          <Link className="nav text-xl font-medium" href="#skills">
            {t("skills")}
          </Link>

          <Link className="nav text-xl font-medium" href="#projects">
            {t("projects")}
          </Link>

          <Link className="nav text-xl font-medium" href="#contact">
            {t("contact")}
          </Link>
        </div>

        <div className="flex gap-3">
          <LanguageToggle />

          <div className="w-px bg-zinc-200 dark:bg-zinc-500" />

          <ModeToggle />
        </div>
      </main>
    </header>
  );
}

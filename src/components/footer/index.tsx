import Link from "next/link";
import { Separator } from "../ui/separator";
import { SocialLinks } from "./socialLinks";
import { buttonVariants } from "../ui/button";
import { LuFileSpreadsheet } from "react-icons/lu";
import { FooterCard } from "./footerCard";
import { NameLogo } from "../nameLogo";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <section
      id="contact"
      className="mx-auto flex h-full w-full flex-col lg:h-screen"
    >
      <FooterCard />

      <main className="flex -translate-y-1/4 flex-col items-center justify-center space-y-10 text-center lg:-translate-y-5">
        <NameLogo />

        <span className="px-10 text-xl font-medium lg:max-w-sm lg:px-0">
          <span className="italic">&quot;{t("quote")}&quot;</span>
          <br />
          <span>- Musashi Miyamoto</span>
        </span>

        <div className="flex gap-8">
          <SocialLinks />
        </div>

        <div>
          <a
            href="/MatheusTiburcioCV.pdf"
            target="_blank"
            className={buttonVariants({
              variant: "outline",
              className: "flex items-center justify-center gap-2",
            })}
          >
            {t("button")}
            <LuFileSpreadsheet className="size-4" />
          </a>
        </div>
      </main>
      <footer className="flex flex-col items-center justify-center text-center lg:mt-auto">
        <Separator />

        <span className="py-3 font-code text-sm text-zinc-800 lg:text-lg">
          © 2024 - Design and Code by Matheus Tiburcio.
        </span>
      </footer>
    </section>
  );
}

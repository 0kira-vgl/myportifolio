import { SocialLinks } from "./socialLinks";
import { buttonVariants } from "../../components/ui/button";
import { LuFileSpreadsheet } from "react-icons/lu";
import { NameLogo } from "../../components/nameLogo";
import { useTranslations } from "next-intl";
import { ContactCard } from "./contactCard";
import { Footer } from "../../components/footer";

export function Contact() {
  const t = useTranslations("Contact");

  return (
    <section
      id="contact"
      className="mx-auto flex h-full w-full flex-col space-y-14 lg:h-screen"
    >
      <ContactCard />

      <main className="flex flex-col items-center justify-center space-y-10 text-center">
        <NameLogo />

        <span className="px-10 text-xl font-medium lg:max-w-sm lg:px-0">
          <span className="italic">&quot;{t("quote")}&quot;</span>
          <br />
          <span>- Musashi Miyamoto</span>
        </span>

        <SocialLinks />

        <div>
          <a
            href="/Matheus Tiburcio - CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
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

      <Footer />
    </section>
  );
}

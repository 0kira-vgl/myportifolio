import { CertificatesCarousel } from "./certificatesCarousel";
import { SkillsCard } from "./skillsCard";
import { useTranslations } from "next-intl";
import { Title, Subtitle } from "../titleAndSubtitle";

export function Skills() {
  const t = useTranslations("Skills");

  return (
    <section id="skills" className="container mx-auto pb-28">
      <header className="items-center justify-center pb-5">
        <Title className="pb-2 text-center text-4xl font-extrabold text-slate-800 dark:bg-gradient-text-dark dark:bg-clip-text dark:text-neutral-100 dark:text-transparent">
          {t("title")}
        </Title>
        <Subtitle className="mx-auto mb-3 max-w-[17rem] text-center text-sm text-slate-800 dark:text-zinc-500">
          {t("subtitle")}
        </Subtitle>
      </header>

      <SkillsCard />

      <footer className="flex flex-col items-center justify-center pt-14">
        <p className="mx-auto mb-3 max-w-[17rem] text-center text-sm text-slate-800 dark:text-zinc-500">
          {t("certificatesSubtitle")}
        </p>

        <CertificatesCarousel />
      </footer>
    </section>
  );
}

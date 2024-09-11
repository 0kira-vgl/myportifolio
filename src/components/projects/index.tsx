import { ArrowRight } from "lucide-react";
import { buttonVariants } from "../ui/button";
import { Cards } from "./cards";
import { useTranslations } from "next-intl";
import { Title, Subtitle } from "../titleAndSubtitle";
import * as motion from "framer-motion/client";

export function Projects() {
  const t = useTranslations("Projects");

  return (
    <section
      id="projects"
      className="mx-5 pb-28 lg:container lg:w-full lg:max-w-7xl"
    >
      <header className="items-center justify-center pb-5">
        <Title>{t("title")}</Title>
        <Subtitle>{t("subtitle")}</Subtitle>
      </header>

      <Cards />

      <motion.footer
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
        className="pt-10 text-center lg:pt-12"
      >
        <a
          href="https://github.com/0kira-vgl?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({
            className: "group flex items-center justify-center gap-5",
            variant: "outline",
          })}
        >
          {t("button")}
          <ArrowRight className="group size-5 -translate-x-2 transition-all group-hover:translate-x-0" />
        </a>
      </motion.footer>
    </section>
  );
}

import { useTranslations } from "next-intl";
import * as motion from "framer-motion/client";

export function ContactCard() {
  const t = useTranslations("Contact.ContactCard");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
      className="mx-5 space-y-4 rounded-2xl border p-7 py-5 text-center text-slate-800 shadow-lg dark:text-zinc-500 lg:mx-16 lg:py-12"
    >
      <h1 className="text-3xl font-semibold dark:bg-gradient-text-dark dark:bg-clip-text dark:text-transparent">
        {t("title")}
      </h1>
      <p className="text-2xl">{t("subtitle")}</p>
    </motion.div>
  );
}

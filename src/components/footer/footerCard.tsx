import { useTranslations } from "next-intl";

export function FooterCard() {
  const t = useTranslations("Footer.FooterCard");

  return (
    <div className="mx-5 -translate-y-1/2 space-y-4 rounded-2xl border p-5 py-10 text-center text-slate-800 shadow-lg dark:text-zinc-500 lg:mx-16 lg:p-16 lg:py-12">
      <h1 className="text-3xl font-semibold dark:bg-gradient-text-dark dark:bg-clip-text dark:text-transparent">
        {t("title")}
      </h1>
      <p className="text-2xl">{t("subtitle")}</p>
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "@/routing";
import { useLocale } from "next-intl";

export function LanguageToggle() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const toggleLanguage = () => {
    sessionStorage.setItem("scrollY", String(window.scrollY));
    router.replace(pathname, { locale: locale === "pt" ? "en" : "pt" });
  };

  return (
    <Button variant="outline" size="icon" onClick={toggleLanguage}>
      <span className="text-xs font-bold transition-all">
        {locale === "pt" ? "EN" : "PT"}
      </span>
      <span className="sr-only">Toggle Language</span>
    </Button>
  );
}

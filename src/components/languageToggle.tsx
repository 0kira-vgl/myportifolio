"use client";

import { Button } from "@/components/ui/button";
import { useLocaleSwitch } from "@/providers/localeSwitchProvider";

export function LanguageToggle() {
  const { locale, switchLocale } = useLocaleSwitch();

  const toggleLanguage = () => {
    switchLocale(locale === "pt" ? "en" : "pt");
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

"use client";

import { Button } from "@/components/ui/button";
import { useLocaleSwitch } from "@/providers/localeSwitchProvider";

import { cn } from "@/lib/utils";

interface LanguageToggleProps {
  className?: string;
}

export function LanguageToggle({ className }: LanguageToggleProps) {
  const { locale, switchLocale } = useLocaleSwitch();

  const toggleLanguage = () => {
    switchLocale(locale === "pt" ? "en" : "pt");
  };

  return (
    <Button variant="outline" size="icon" className={cn("rounded-full", className)} onClick={toggleLanguage}>
      <span className="text-xs font-bold transition-all">
        {locale === "pt" ? "EN" : "PT"}
      </span>
      <span className="sr-only">Toggle Language</span>
    </Button>
  );
}

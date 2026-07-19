"use client";

import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/useActiveSection";
import { scrollToSection } from "@/lib/scrollToSection";

const SECTIONS = ["home", "aboutMe", "skills", "projects", "contact"] as const;

interface NavLinksProps {
  className?: string;
  linkClassName?: string;
  onClick?: () => void;
}

export function NavLinks({ className, linkClassName, onClick }: NavLinksProps) {
  const t = useTranslations("Header");
  const active = useActiveSection();

  const links: { key: (typeof SECTIONS)[number]; label: string }[] = [
    { key: "home", label: t("home") },
    { key: "aboutMe", label: t("aboutMe") },
    { key: "skills", label: t("skills") },
    { key: "projects", label: t("projects") },
    { key: "contact", label: t("contact") },
  ];

  return (
    <div className={className}>
      {links.map(({ key, label }) => (
        <a
          key={key}
          href={`#${key}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(key);
            onClick?.();
          }}
          className={cn(
            "nav transition-colors duration-200",
            linkClassName,
            active === key
              ? "text-purple-500 dark:text-purple-400"
              : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-50",
          )}
        >
          {label}
        </a>
      ))}
    </div>
  );
}

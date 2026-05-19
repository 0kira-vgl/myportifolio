"use client";

import { ToggleTheme } from "./toggleTheme";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { NameLogo } from "./nameLogo";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { LanguageToggle } from "./languageToggle";
import { useTranslations } from "next-intl";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";
import * as motion from "framer-motion/client";

const SECTIONS = ["home", "aboutMe", "skills", "projects", "contact"] as const;

export function MobileNavBar() {
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
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 w-full p-2 py-4 text-center text-zinc-600 backdrop-blur-sm dark:text-zinc-50 lg:hidden"
    >
      <div className="flex items-center justify-center gap-x-7">
        <Sheet>
          <SheetTrigger>
            <div>
              <RxHamburgerMenu className="size-9 cursor-pointer" />
            </div>
          </SheetTrigger>

          <NameLogo className="text-3xl" />

          <ToggleTheme />

          <SheetContent side="left">
            <SheetHeader>
              <div className="py-5">
                <SheetClose asChild>
                  <NameLogo className="text-3xl" />
                </SheetClose>
              </div>
            </SheetHeader>

            <div className="mb-4 px-3 text-xl">
              <h2 className="font-semibold">{t("navegationTitle")}</h2>
            </div>

            <div className="flex flex-col space-y-4 px-3 text-2xl">
              {links.map(({ key, label }) => (
                <SheetClose key={key} asChild>
                  <Link
                    href={`#${key}`}
                    className={cn(
                      "transition-colors duration-200",
                      active === key
                        ? "text-purple-500 dark:text-purple-400"
                        : "text-zinc-600 dark:text-zinc-300",
                    )}
                  >
                    {label}
                  </Link>
                </SheetClose>
              ))}
            </div>

            <SheetFooter className="mt-4 px-3">
              <div className="flex space-x-2">
                <LanguageToggle />
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}

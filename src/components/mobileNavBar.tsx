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
import { Button } from "@/components/ui/button";

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
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 lg:hidden"
    >
      <div className="flex w-full max-w-[480px] items-center justify-between rounded-full bg-white/70 dark:bg-zinc-950/60 py-1.5 pl-5 pr-1.5 border border-zinc-200/50 dark:border-zinc-800/50 shadow-lg backdrop-blur-lg">
        <NameLogo className="text-xl" />

        <div className="flex items-center gap-x-1.5">
          <ToggleTheme className="border-none bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800" />
          
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-9 w-9 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                aria-label="Menu"
              >
                <RxHamburgerMenu className="size-5 text-zinc-600 dark:text-zinc-300" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[80vw] max-w-[300px]">
              <SheetHeader>
                <div className="py-5 flex justify-center">
                  <SheetClose asChild>
                    <NameLogo className="text-2xl" />
                  </SheetClose>
                </div>
              </SheetHeader>

              <div className="mb-6 px-3 text-center text-lg">
                <h2 className="font-semibold text-zinc-500 dark:text-zinc-400">
                  {t("navegationTitle")}
                </h2>
              </div>

              <div className="flex flex-col items-center space-y-5 px-3 text-xl font-medium">
                {links.map(({ key, label }) => (
                  <SheetClose key={key} asChild>
                    <Link
                      href={`#${key}`}
                      className={cn(
                        "transition-colors duration-200 py-1.5 w-full text-center rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900",
                        active === key
                          ? "text-purple-500 dark:text-purple-400 font-semibold"
                          : "text-zinc-600 dark:text-zinc-300",
                      )}
                    >
                      {label}
                    </Link>
                  </SheetClose>
                ))}
              </div>

              <SheetFooter className="mt-8 flex justify-center px-3">
                <div className="flex justify-center w-full">
                  <LanguageToggle />
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}

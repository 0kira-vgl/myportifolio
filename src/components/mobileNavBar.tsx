"use client";

import { Fragment } from "react";
import { ToggleTheme } from "./toggleTheme";
import { RxHamburgerMenu } from "react-icons/rx";
import { scrollToSection } from "@/lib/scrollToSection";
import { NameLogo } from "./nameLogo";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { LanguageToggle } from "./languageToggle";
import { useTranslations } from "next-intl";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";
import * as motion from "framer-motion/client";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuFileSpreadsheet, LuHome } from "react-icons/lu";

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

  const activeIndex = SECTIONS.indexOf(active);
  const trail = links.slice(0, activeIndex + 1);
  const collapsed = trail.length > 3;
  const hiddenCrumbs = collapsed ? trail.slice(1, -2) : [];
  const tailCrumbs = collapsed ? trail.slice(-2) : trail.slice(1);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 lg:hidden"
    >
      <div className="flex w-full max-w-[480px] items-center justify-between rounded-full bg-white/70 dark:bg-zinc-950/60 py-1.5 pl-5 pr-1.5 border border-zinc-200/50 dark:border-zinc-800/50 shadow-lg backdrop-blur-lg">
        <NameLogo className="text-xl" />

        <div className="flex min-w-0 flex-1 items-center justify-center overflow-hidden px-2">
          <Breadcrumb>
            <BreadcrumbList className="flex-nowrap gap-1 text-[11px] tracking-wide sm:gap-1">
              <BreadcrumbItem>
                {activeIndex === 0 ? (
                  <BreadcrumbPage
                    aria-label={t("home")}
                    className="flex items-center text-violet-500 dark:text-violet-400"
                  >
                    <LuHome className="size-3.5" />
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <button
                      type="button"
                      onClick={() => scrollToSection("home")}
                      aria-label={t("home")}
                      className="flex items-center text-zinc-400 hover:text-violet-500 dark:text-zinc-500 dark:hover:text-violet-400"
                    >
                      <LuHome className="size-3.5" />
                    </button>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>

              {hiddenCrumbs.length > 0 && (
                <>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <DropdownMenu>
                      <DropdownMenuTrigger
                        aria-label={t("navegationTitle")}
                        className="flex items-center rounded-sm text-zinc-400 hover:text-violet-500 dark:text-zinc-500 dark:hover:text-violet-400"
                      >
                        <BreadcrumbEllipsis className="size-5" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start">
                        {hiddenCrumbs.map((link) => (
                          <DropdownMenuItem
                            key={link.key}
                            onSelect={() => scrollToSection(link.key)}
                          >
                            {link.label}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </BreadcrumbItem>
                </>
              )}

              {tailCrumbs.map((link, i) => {
                const isLast = i === tailCrumbs.length - 1;
                return (
                  <Fragment key={link.key}>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      {isLast ? (
                        <BreadcrumbPage className="truncate font-medium text-violet-500 dark:text-violet-400">
                          {link.label}
                        </BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink asChild>
                          <button
                            type="button"
                            onClick={() => scrollToSection(link.key)}
                            className="truncate text-zinc-400 hover:text-violet-500 dark:text-zinc-500 dark:hover:text-violet-400"
                          >
                            {link.label}
                          </button>
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                  </Fragment>
                );
              })}
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="flex items-center gap-x-1.5">
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

            <SheetContent
              side="right"
              className="w-[85vw] max-w-[360px] border-l border-zinc-200/40 dark:border-zinc-800/40 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-2xl flex flex-col justify-between p-5 pt-10 shadow-2xl h-full"
            >
              <div className="flex flex-col flex-1">
                {/* Header */}
                <div className="flex justify-between items-center mb-5 pb-3 border-b border-zinc-300 dark:border-zinc-800">
                  <NameLogo className="text-lg" />
                </div>

                {/* Navigation Links */}
                <div className="mb-4">
                  <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-3">
                    {t("navegationTitle")}
                  </h4>
                  <nav className="flex flex-col gap-y-0.5">
                    {links.map(({ key, label }, index) => (
                      <SheetClose key={key} asChild>
                        <a
                          href={`#${key}`}
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(key);
                          }}
                          className={cn(
                            "group flex items-baseline gap-x-4 py-2 border-b border-zinc-200 dark:border-zinc-800/70 w-full text-left transition-all duration-300",
                            active === key
                              ? "text-violet-500 dark:text-violet-400 font-semibold"
                              : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:pl-2"
                          )}
                        >
                          <span className="font-mono text-xs text-zinc-300 dark:text-zinc-700 group-hover:text-violet-500 transition-colors">
                            0{index + 1}
                          </span>
                          <span className="text-lg tracking-tight transition-transform">
                            {label}
                          </span>
                        </a>
                      </SheetClose>
                    ))}
                  </nav>
                </div>

                {/* Social Links */}
                <div className="mt-auto">
                  <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-3">
                    {t("connectTitle")}
                  </h4>
                  <div className="flex gap-x-3">
                    <a
                      href="https://github.com/0kira-vgl"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="flex size-9 items-center justify-center rounded-xl border border-zinc-200/60 text-zinc-600 transition-all duration-200 hover:border-violet-400 hover:text-violet-500 hover:scale-105 active:scale-95 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-violet-400 dark:hover:text-violet-400 bg-zinc-50/50 dark:bg-zinc-900/50"
                    >
                      <FaGithub className="size-4.5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/matheus-tiburcio-82a337276/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="flex size-9 items-center justify-center rounded-xl border border-zinc-200/60 text-zinc-600 transition-all duration-200 hover:border-violet-400 hover:text-violet-500 hover:scale-105 active:scale-95 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-violet-400 dark:hover:text-violet-400 bg-zinc-50/50 dark:bg-zinc-900/50"
                    >
                      <FaLinkedinIn className="size-4.5" />
                    </a>
                    <a
                      href="mailto:matheusgtiburcio@gmail.com"
                      aria-label="Email"
                      className="flex size-9 items-center justify-center rounded-xl border border-zinc-200/60 text-zinc-600 transition-all duration-200 hover:border-violet-400 hover:text-violet-500 hover:scale-105 active:scale-95 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-violet-400 dark:hover:text-violet-400 bg-zinc-50/50 dark:bg-zinc-900/50"
                    >
                      <MdOutlineMailOutline className="size-4.5" />
                    </a>
                    <a
                      href="/Matheus Tiburcio - CV.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Download CV"
                      className="flex size-9 items-center justify-center rounded-xl border border-zinc-200/60 text-zinc-600 transition-all duration-200 hover:border-violet-400 hover:text-violet-500 hover:scale-105 active:scale-95 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-violet-400 dark:hover:text-violet-400 bg-zinc-50/50 dark:bg-zinc-900/50"
                    >
                      <LuFileSpreadsheet className="size-4.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Preferences Footer */}
              <div className="mt-4 flex items-center justify-between rounded-2xl bg-zinc-50/80 dark:bg-zinc-900/50 p-3.5 border border-zinc-100 dark:border-zinc-800/80 w-full shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-300">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  {t("preferencesTitle")}
                </span>
                <div className="flex items-center gap-x-2">
                  <LanguageToggle className="bg-background border-zinc-200/50 dark:border-zinc-800/50 shadow-sm rounded-full" />
                  <div className="h-4 w-px bg-zinc-300 dark:bg-zinc-700" />
                  <ToggleTheme className="bg-background border-zinc-200/50 dark:border-zinc-800/50 shadow-sm rounded-full" />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}

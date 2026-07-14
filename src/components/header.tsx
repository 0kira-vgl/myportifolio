import { NameLogo } from "./nameLogo";
import { ToggleTheme } from "./toggleTheme";
import { LanguageToggle } from "./languageToggle";
import { NavLinks } from "./navLinks";
import * as motion from "framer-motion/client";

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-x-0 top-4 z-50 hidden justify-center px-4 lg:flex"
    >
      <main className="flex w-full max-w-[800px] items-center justify-between rounded-full bg-white/70 dark:bg-zinc-950/60 py-2 pl-6 pr-2 border border-zinc-200/50 dark:border-zinc-800/50 shadow-md backdrop-blur-lg">
        <div>
          <NameLogo className="text-xl" />
        </div>

        <NavLinks
          className="flex items-center gap-x-6"
          linkClassName="text-sm font-medium"
        />

        <div className="flex items-center gap-x-2">
          <LanguageToggle className="border-none bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800" />
          <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800" />
          <ToggleTheme className="border-none bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800" />
        </div>
      </main>
    </motion.header>
  );
}

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
      className="sticky top-0 z-50 hidden h-14 items-center justify-center py-9 backdrop-blur-sm lg:flex"
    >
      <main className="flex w-[92%] items-center justify-between">
        <div>
          <NameLogo className="text-3xl" />
        </div>

        <NavLinks
          className="flex items-center gap-x-8"
          linkClassName="text-xl font-medium"
        />

        <div className="flex gap-2.5">
          <LanguageToggle />
          <div className="w-px bg-zinc-200 dark:bg-zinc-500" />
          <ToggleTheme />
        </div>
      </main>
    </motion.header>
  );
}

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
import * as motion from "framer-motion/client";

export function MobileNavBar() {
  const t = useTranslations("Header");

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
              <SheetClose asChild>
                <Link href="#home">{t("home")}</Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="#aboutMe">{t("aboutMe")}</Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="#skills">{t("skills")}</Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="#projects">{t("projects")}</Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="#contact">{t("contact")}</Link>
              </SheetClose>
            </div>

            {/* <SheetFooter className="mt-4 px-3">
              <div className="flex space-x-2">
                <LanguageToggle />
              </div>
            </SheetFooter> */}
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}

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

export function MobileNavBar() {
  const t = useTranslations("Header");

  return (
    <div className="sticky top-0 z-50 w-full bg-white/5 p-2 py-4 text-center backdrop-blur-sm dark:bg-black/5 lg:hidden">
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

            <SheetFooter className="mt-4 px-3">
              <div className="flex space-x-2">
                <LanguageToggle />
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

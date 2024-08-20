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
import Link from "next/link";

export function MobileNavBar() {
  return (
    <div className="sticky top-0 z-50 w-full bg-white/5 p-2 text-center backdrop-blur-sm dark:bg-black/5 lg:hidden">
      <div className="flex items-center justify-center gap-5">
        <Sheet>
          <SheetTrigger>
            <div>
              <RxHamburgerMenu className="size-9 cursor-pointer" />
            </div>
          </SheetTrigger>

          <NameLogo />

          <SheetContent side="left">
            <SheetHeader>
              <div className="p-4">
                <NameLogo className="text-3xl" />
              </div>
            </SheetHeader>

            <div className="mb-2">
              <h2 className="font-medium">Navege</h2>
            </div>

            <SheetClose className="flex flex-col space-y-2" asChild>
              <Link href="#home">Início</Link>
            </SheetClose>

            <SheetClose className="flex flex-col space-y-2" asChild>
              <Link href="#aboutMe">Sobre mim</Link>
            </SheetClose>

            <SheetClose className="flex flex-col space-y-2" asChild>
              <Link href="#projects">Projetos</Link>
            </SheetClose>

            <SheetClose className="flex flex-col space-y-2" asChild>
              <Link href="#contact">Contato</Link>
            </SheetClose>

            <SheetFooter>footer</SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

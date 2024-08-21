import BrazilFlag from "@public/brazilFlag.svg";
import EuaFlag from "@public/euaFlag.svg";
import { ModeToggle } from "./modeToggle";
import Link from "next/link";
import Image from "next/image";
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

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";

export function MobileNavBar() {
  return (
    <div className="sticky top-0 z-50 w-full bg-white/5 p-2 py-4 text-center backdrop-blur-sm dark:bg-black/5 lg:hidden">
      <div className="flex items-center justify-center gap-x-7">
        <Sheet>
          <SheetTrigger>
            <div>
              <RxHamburgerMenu className="size-9 cursor-pointer" />
            </div>
          </SheetTrigger>

          <NameLogo />

          <SheetContent side="left">
            <SheetHeader>
              <div className="py-7">
                <SheetClose asChild>
                  <NameLogo className="text-3xl" />
                </SheetClose>
              </div>
            </SheetHeader>

            <div className="mb-4 text-xl">
              <h2 className="font-medium">Navegue</h2>
            </div>

            <div className="flex flex-col space-y-4 text-2xl">
              <SheetClose asChild>
                <Link href="#home">Início</Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="#aboutMe">Sobre mim</Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="#projects">Projetos</Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="#contact">Contato</Link>
              </SheetClose>
            </div>

            <SheetFooter className="mt-4">
              <div className="flex space-x-2">
                <Select>
                  <SelectTrigger className="w-[110px] rounded-lg outline-none">
                    <SelectValue placeholder="Idioma" />
                  </SelectTrigger>
                  <SelectContent className="rounded-lg">
                    <SelectItem className="rounded-lg" value="pt">
                      <div className="flex items-center justify-center gap-1">
                        <Image src={BrazilFlag} alt="." className="size-5" />
                        PT-BR
                      </div>
                    </SelectItem>
                    <SelectItem className="rounded-lg" value="us">
                      <div className="flex items-center justify-center gap-1">
                        <Image src={EuaFlag} alt="." className="size-5" />
                        US
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>

                <div className="w-px bg-zinc-200 dark:bg-zinc-500" />

                <ModeToggle />
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

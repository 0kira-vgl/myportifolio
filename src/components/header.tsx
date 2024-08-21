import Image from "next/image";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";
import BrazilFlag from "@public/brazilFlag.svg";
import EuaFlag from "@public/euaFlag.svg";
import Link from "next/link";
import { NameLogo } from "./nameLogo";
import { ModeToggle } from "./modeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 hidden h-14 items-center justify-center py-9 backdrop-blur-sm lg:flex">
      <main className="flex w-[92%] items-center justify-between">
        <div>
          <NameLogo />
        </div>

        <div className="flex items-center gap-x-8">
          <Link className="nav text-xl font-medium" href="#home">
            Início
          </Link>

          <Link className="nav text-xl font-medium" href="#aboutMe">
            Sobre mim
          </Link>

          <Link className="nav text-xl font-medium" href="#projects">
            Projetos
          </Link>

          <Link className="nav text-xl font-medium" href="#contact">
            Contato
          </Link>
        </div>

        <div className="flex gap-3">
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
      </main>
    </header>
  );
}

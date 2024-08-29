"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";
import Image from "next/image";
import BrazilFlag from "@public/brazilFlag.svg";
import EuaFlag from "@public/euaFlag.svg";
import { usePathname, useRouter } from "@/routing";

export function LanguageToggle() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Select>
      <SelectTrigger className="rounded-lg bg-white outline-none dark:bg-zinc-950">
        <SelectValue placeholder="Idioma" />
      </SelectTrigger>
      <SelectContent className="rounded-lg">
        <SelectItem
          className="rounded-lg"
          value="pt"
          onClick={() => router.push(pathname, { locale: "pt" })}
        >
          <div className="flex items-center justify-center gap-1">
            <Image src={BrazilFlag} alt="." className="size-5" />
            PT-BR
          </div>
        </SelectItem>
        <SelectItem
          className="rounded-lg"
          value="us"
          onClick={() => router.push(pathname, { locale: "en" })}
        >
          <div className="flex items-center justify-center gap-1">
            <Image src={EuaFlag} alt="." className="size-5" />
            EN
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}

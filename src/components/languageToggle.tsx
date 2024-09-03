"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import BrazilFlag from "@public/brazilFlag.svg";
import EuaFlag from "@public/euaFlag.svg";
import { usePathname, useRouter } from "@/routing";
import { LuLanguages } from "react-icons/lu";

export function LanguageToggle() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <LuLanguages className="size-[1.2rem]" />
          <span className="sr-only">Toggle Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-lg" align="end">
        <DropdownMenuItem>
          <div className="flex items-center justify-center gap-1">
            <Image src={BrazilFlag} alt="." className="size-5" />
            PT-BR
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex items-center justify-center gap-1">
            <Image src={EuaFlag} alt="." className="size-5" />
            EN
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

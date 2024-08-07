"use client";

import { RxDoubleArrowUp } from "react-icons/rx";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "./ui/tooltip";
import ScrollToTop from "react-scroll-up";

export function ScrollTopButton() {
  return (
    <div className="relative z-[300]">
      <ScrollToTop showUnder={160} duration={100}>
        <TooltipProvider delayDuration={2000}>
          <Tooltip>
            <TooltipTrigger>
              <div className="flex items-center justify-center rounded-full border bg-zinc-50 p-1 shadow-sm dark:bg-zinc-950">
                <RxDoubleArrowUp className="size-8 text-slate-800 dark:text-zinc-50 lg:size-9" />
              </div>
            </TooltipTrigger>
            <TooltipContent className="mb-1">
              <span className="text-xs font-semibold">Voltar ao topo</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </ScrollToTop>
    </div>
  );
}

"use client";

import { RxDoubleArrowUp } from "react-icons/rx";
import ScrollToTop from "react-scroll-up";

export function ScrollTopButton() {
  return (
    <div className="relative z-[300]">
      <ScrollToTop showUnder={160}>
        <div className="flex items-center justify-center rounded-full border bg-zinc-50 p-1 shadow-sm dark:bg-zinc-950">
          <RxDoubleArrowUp className="size-8 text-slate-800 dark:text-zinc-50 lg:size-9" />
        </div>
      </ScrollToTop>
    </div>
  );
}

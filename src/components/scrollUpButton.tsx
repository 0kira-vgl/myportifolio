import Link from "next/link";
import { RxDoubleArrowUp } from "react-icons/rx";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export function ScrollUpButton() {
  return (
    <TooltipProvider delayDuration={2000}>
      <Tooltip>
        <TooltipTrigger>
          <Link
            href="#home"
            className="flex cursor-pointer items-center justify-center rounded-full border bg-background p-2 shadow-md hover:bg-accent hover:duration-300"
          >
            <RxDoubleArrowUp className="size-10 text-accent-foreground" />
          </Link>
        </TooltipTrigger>
        <TooltipContent className="mb-1">
          <span className="text-sm font-semibold">Voltar ao topo</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

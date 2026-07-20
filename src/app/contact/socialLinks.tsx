"use client";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function SocialLinks() {
  return (
    <TooltipProvider>
      <div className="flex gap-7">
        <div>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://github.com/0kira-vgl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex justify-between gap-x-6 py-5 lg:items-center"
              >
                <div>
                  <FaGithub className="size-11 rounded-lg border p-2 shadow-md dark:text-zinc-50" />
                </div>
              </a>
            </TooltipTrigger>
            <TooltipContent side="top">
              <span className="font-semibold">GitHub</span>
            </TooltipContent>
          </Tooltip>
        </div>

        <div>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://www.linkedin.com/in/matheus-tiburcio-82a337276/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex justify-between gap-x-6 py-5 lg:items-center"
              >
                <div>
                  <FaLinkedinIn className="size-11 rounded-lg border p-2 shadow-md dark:text-zinc-50" />
                </div>
              </a>
            </TooltipTrigger>
            <TooltipContent side="top">
              <span className="font-semibold">LinkedIn</span>
            </TooltipContent>
          </Tooltip>
        </div>

        <div>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="mailto:matheusgtiburcio@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="flex justify-between gap-x-6 py-5 lg:items-center"
              >
                <div>
                  <MdOutlineMailOutline className="size-11 rounded-lg border p-2 shadow-md dark:text-zinc-50" />
                </div>
              </a>
            </TooltipTrigger>
            <TooltipContent side="top">
              <span className="font-semibold">Email</span>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  );
}

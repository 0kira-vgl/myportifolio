import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

export function SocialLinks() {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div className="cursor-pointer rounded-full bg-white p-2 shadow-md drop-shadow-md hover:bg-[#161B22] hover:transition hover:duration-300">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/matheus-tiburcio-82a337276/"
              >
                <FaGithub className="size-8 text-black" />
              </a>
            </div>
          </TooltipTrigger>
          <TooltipContent className="bg-[#161B22]">
            <p className="text-sm font-semibold text-zinc-50">GitHub</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div className="cursor-pointer rounded-full bg-white p-2 shadow-md drop-shadow-md hover:bg-[#0077B5] hover:transition hover:duration-300">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/matheus-tiburcio-82a337276/"
              >
                <FaLinkedinIn className="size-8 text-black" />
              </a>
            </div>
          </TooltipTrigger>
          <TooltipContent className="bg-[#0077B5]">
            <p className="text-sm font-semibold text-zinc-50">LinkedIn</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div className="cursor-pointer rounded-full bg-white p-2 shadow-md drop-shadow-md hover:bg-[#EB4336] hover:transition hover:duration-300">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/matheus-tiburcio-82a337276/"
              >
                <MdOutlineMailOutline className="size-8 text-black" />
              </a>
            </div>
          </TooltipTrigger>
          <TooltipContent className="bg-[#EB4336]">
            <p className="text-sm font-semibold text-zinc-50">Email</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}

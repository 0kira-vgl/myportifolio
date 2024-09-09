import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { CgWebsite } from "react-icons/cg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { buttonVariants } from "@/components/ui/button";
import { GoArrowLeft } from "react-icons/go";

export default function Notfound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="w-full max-w-xl px-6 lg:px-0">
        <div className="space-y-6 text-center">
          <span className="font-semibold text-slate-800 dark:text-zinc-50">
            404
          </span>
          <h2 className="text-5xl font-semibold text-slate-800 dark:text-zinc-50">
            This page does not exist
          </h2>

          <p className="text-base text-zinc-500">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
        </div>

        <div className="mt-14">
          <Link
            href="/"
            className="flex justify-between gap-x-6 py-5 lg:items-center"
          >
            <div>
              <CgWebsite className="size-10 rounded-lg border p-2 shadow-md dark:text-zinc-50" />
            </div>
            <div className="flex-auto">
              <h2 className="mb-1.5 text-base font-semibold leading-6">
                My Portfolio
              </h2>
              <span className="text-sm leading-6">
                Check out my portfolio again.
              </span>
            </div>
            <MdKeyboardArrowRight className="size-5 dark:text-zinc-50" />
          </Link>
          <Separator />

          <a
            href="https://github.com/0kira-vgl"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between gap-x-6 py-5 lg:items-center"
          >
            <div>
              <FaGithub className="size-10 rounded-lg border p-2 shadow-md dark:text-zinc-50" />
            </div>
            <div className="flex-auto">
              <h2 className="mb-1.5 text-base font-semibold leading-6">
                My GitHub
              </h2>
              <span className="text-sm leading-6">
                Visit my GitHub profile.
              </span>
            </div>
            <MdKeyboardArrowRight className="size-5 dark:text-zinc-50" />
          </a>
          <Separator />

          <a
            href="https://www.linkedin.com/in/matheus-tiburcio-82a337276/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between gap-x-6 py-5 lg:items-center"
          >
            <div>
              <FaLinkedinIn className="size-10 rounded-lg border p-2 shadow-md dark:text-zinc-50" />
            </div>
            <div className="flex-auto">
              <h2 className="mb-1.5 text-base font-semibold leading-6">
                My LinkedIn
              </h2>
              <span className="text-sm leading-6">
                Visit my LinkedIn profile.
              </span>
            </div>
            <MdKeyboardArrowRight className="size-5 dark:text-zinc-50" />
          </a>
          <Separator />
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className={buttonVariants({
              variant: "outline",
              className: "flex items-center justify-center gap-2",
            })}
          >
            <GoArrowLeft className="size-4" />
            Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}

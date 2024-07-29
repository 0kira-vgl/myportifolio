import Image from "next/image";
import ProfilePic from "@public/cat.jpeg";
import Link from "next/link";

import { Separator } from "../ui/separator";
import { SocialLinks } from "./socialLinks";

export function Foother() {
  return (
    <footer className="mx-auto flex h-full w-full flex-col bg-purple-700 lg:h-screen">
      <div className="mx-5 -translate-y-1/2 space-y-4 rounded-2xl border bg-slate-50 p-5 py-10 text-center text-slate-800 shadow-lg dark:bg-zinc-950 dark:text-neutral-100 lg:mx-16 lg:p-16 lg:py-12">
        <h1 className="text-3xl font-semibold">Vamos começar?</h1>
        <p className="text-2xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, ut
          rem? Vero, tempore! Architecto voluptas sunt accusantium eos eum in?
        </p>
      </div>

      <div className="flex -translate-y-1/3 flex-col items-center justify-center space-y-14 text-center lg:-translate-y-0">
        <Link href="/">
          <Image src={ProfilePic} alt="ProfilePic" className="size-20" />
        </Link>

        <span className="px-10 text-xl lg:max-w-sm lg:px-0">
          Living, learning, & leveling up one day at a time.
        </span>

        <div className="flex gap-8">
          <SocialLinks />
        </div>

        <div className="mb-10">
          <span className="btn-shine">Get early access</span>
        </div>
      </div>
      <div className="text-center lg:mt-auto">
        <Separator className="bg-zinc-800" />
        <span className="font-mono text-sm text-zinc-800 lg:text-lg">
          © 2024 - Design and Code by Matheus Tiburcio.
        </span>
      </div>
    </footer>
  );
}

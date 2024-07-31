import Link from "next/link";
import { Separator } from "../ui/separator";
import { SocialLinks } from "./socialLinks";
import { buttonVariants } from "../ui/button";
import { LuFileSpreadsheet } from "react-icons/lu";
import { FooterCard } from "./footerCard";

export function Footer() {
  return (
    <footer className="mx-auto flex h-full w-full flex-col lg:h-screen">
      <FooterCard />

      <div className="flex -translate-y-1/3 flex-col items-center justify-center space-y-12 text-center lg:-translate-y-5">
        <Link href="/">
          <h3 className="text-shadow font-mono text-4xl">&lt;Matheus /&gt;</h3>
        </Link>

        <span className="px-10 text-xl font-medium lg:max-w-sm lg:px-0">
          <span className="italic">
            &quot;A mente deve ser flexível como a água, para se adaptar e
            superar.&quot;
          </span>
          <br />
          <span>- Musashi Miyamoto</span>
        </span>

        <div className="flex gap-8">
          <SocialLinks />
        </div>

        <div className="mb-10">
          <a
            href="#"
            target="_blank"
            className={buttonVariants({
              variant: "outline",
              className: "flex items-center justify-center gap-2",
            })}
          >
            Veja meu currículo
            <LuFileSpreadsheet className="size-4" />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center lg:mt-auto">
        <Separator />

        <span className="font-code py-3 text-sm text-zinc-800 lg:text-lg">
          © 2024 - Design and Code by Matheus Tiburcio.
        </span>
      </div>
    </footer>
  );
}

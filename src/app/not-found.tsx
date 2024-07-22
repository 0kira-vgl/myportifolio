import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Notfound() {
  return (
    <div className="flex h-screen items-center justify-center bg-zinc-950 text-zinc-50">
      <div>
        <div className="flex items-center space-x-4 text-sm">
          <span className="text-4xl font-semibold">404</span>
          <Separator orientation="vertical" className="h-12 bg-zinc-500" />
          <h2 className="text-base">
            Sorry, the page you are looking for does not exist :&#40;
          </h2>
        </div>
        <div className="items-center justify-center text-center">
          <p className="text-lg">
            Go back to{" "}
            <a href="/" className="font-semibold text-blue-500">
              MyPortfolio
            </a>{" "}
            :&#41;
          </p>
        </div>
        <div className="mt-6 flex items-center justify-center">
          <Image
            src="https://github.com/0kira-vgl/0kira-vgl/assets/125319244/14e56882-3974-4021-b790-3e839dca54a1"
            alt="NyanCat Gif"
            width={100}
            height={100}
            className="text-center"
          />
        </div>
      </div>
    </div>
  );
}

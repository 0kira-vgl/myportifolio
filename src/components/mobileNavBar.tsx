import { RxHamburgerMenu } from "react-icons/rx";
import { NameLogo } from "./nameLogo";

export function MobileNavBar() {
  return (
    <div className="sticky top-0 z-50 w-full bg-white/5 p-2 text-center backdrop-blur-sm dark:bg-black/5 lg:hidden">
      <div className="flex items-center justify-center gap-5">
        <div>
          <RxHamburgerMenu className="size-9 cursor-pointer" />
        </div>

        <NameLogo />
      </div>
    </div>
  );
}

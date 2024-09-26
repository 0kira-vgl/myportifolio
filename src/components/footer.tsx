import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center text-center lg:mt-auto">
      <Separator />

      <span className="py-3 font-code text-sm text-zinc-800 lg:text-lg">
        © 2024 - Design and Code by Matheus Tiburcio.
      </span>
    </footer>
  );
}

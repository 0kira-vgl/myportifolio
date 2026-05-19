import { Separator } from "./ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 flex flex-col items-center justify-center text-center">
      <Separator />
      <span className="py-5 font-code text-sm text-zinc-600 dark:text-zinc-400 lg:text-base">
        © 2024{currentYear > 2024 ? `–${currentYear}` : ""} - Design and Code
        by Matheus Tiburcio.
      </span>
    </footer>
  );
}

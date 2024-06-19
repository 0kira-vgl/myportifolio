import Image from "next/image";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";

export function Header() {
  return (
    <header className="md:flex md:h-20 md:items-center md:justify-center shadow-[0px_-5px_12px_1px_#C8C9C5]">
      <nav className="md:mx-auto md:flex md:w-[92%] md:items-center md:justify-between">
        <div>
          <a href="#">
            <Image src="/text.svg" alt="." width={100} height={100} />
          </a>
        </div>

        <div className="">
          <ul className="md:flex md:items-center gap-[4vh]">
            <li className="my-4 mx-4 md:my-0 md:mx-0">
              <a className="text-xl font-medium" href="">
                Início
              </a>
            </li>
            <li className="my-4 mx-4 md:my-0 md:mx-0">
              <a className="text-xl font-medium" href="">
                Sobre mim
              </a>
            </li>
            <li className="my-4 mx-4 md:my-0 md:mx-0">
              <a className="text-xl font-medium" href="">
                Habilidades
              </a>
            </li>
            <li className="my-4 mx-4 md:my-0 md:mx-0">
              <a className="text-xl font-medium" href="">
                Projetos
              </a>
            </li>
            <li className="my-4 mx-4 md:my-0 md:mx-0">
              <a className="text-xl font-medium" href="">
                Contato
              </a>
            </li>
          </ul>
        </div>

        <div className="md:flex md:gap-3 my-4 mx-4 md:my-0 md:mx-0">
          <Select>
            <SelectTrigger className="w-[100px] rounded-lg outline-none border-none">
              <SelectValue placeholder="Idioma" />
            </SelectTrigger>
            <SelectContent className="rounded-lg">
              <SelectItem className="rounded-lg" value="pt">
                PT-BR
              </SelectItem>
              <SelectItem className="rounded-lg" value="us">
                US
              </SelectItem>
            </SelectContent>
          </Select>

          <div className="md:w-px md:bg-zinc-200" />

          <label className="switch my-4 md:my-0">
            <span className="sun">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g fill="#ffd43b">
                  <circle r="5" cy="12" cx="12"></circle>
                  <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path>
                </g>
              </svg>
            </span>
            <span className="moon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
              </svg>
            </span>
            <input type="checkbox" className="input" />
            <span className="slider"></span>
          </label>
        </div>
      </nav>
    </header>
  );
}

import { FaPlay } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { FiCompass } from "react-icons/fi";

export function Timeline() {
  return (
    <>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <li className="mb-10 ms-6">
          <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-4 ring-zinc-100 dark:bg-blue-900 dark:ring-gray-900">
            <FaPlay className="size-3 text-blue-800 dark:text-blue-300" />
          </span>
          <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
            O Início
          </h3>
          <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Janeiro, 2023
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Comecei na programação com HTML e CSS, criando pequenas páginas e
            descobrindo a magia de dar vida às ideias na web.
          </p>
        </li>

        <li className="mb-10 ms-6">
          <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-4 ring-zinc-100 dark:bg-blue-900 dark:ring-gray-900">
            <IoLogoJavascript className="size-3 text-blue-800 dark:text-blue-300" />
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Explorando o JavaScript
          </h3>
          <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Fevereiro, 2023
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Dei início ao JavaScript, construindo aplicações divertidas e
            básicas, e mergulhando mais fundo no universo da programação.
          </p>
        </li>

        <li className="mb-10 ms-6">
          <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-4 ring-zinc-100 dark:bg-blue-900 dark:ring-gray-900">
            <GrReactjs className="size-3 text-blue-800 dark:text-blue-300" />
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Avançando com React
          </h3>
          <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Junho, 2023
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Após explorar JavaScript, comecei a usar React.js, criando
            interfaces dinâmicas e levando minhas habilidades a um novo patamar.
          </p>
        </li>

        <li className="ms-6">
          <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-4 ring-zinc-100 dark:bg-blue-900 dark:ring-gray-900">
            <FiCompass className="size-3 text-blue-800 dark:text-blue-300" />
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Novos Horizontes
            <span className="me-2 ms-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
              Atualmente
            </span>
          </h3>
          <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Janeiro, 2024
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Com o tempo, fui consolidando minhas habilidades em programação e
            comecei a estudar Next.js, expandindo ainda mais meu conhecimento no
            desenvolvimento web.
          </p>
        </li>
      </ol>
    </>
  );
}

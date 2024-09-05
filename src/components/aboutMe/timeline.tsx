import { FaCircle } from "react-icons/fa";
import { Separator } from "../ui/separator";

export function Timeline() {
  return (
    <div className="mx-auto hidden px-8 py-6 lg:block">
      <div className="grid grid-cols-4 gap-8">
        <div>
          <span className="flex items-center whitespace-nowrap font-semibold">
            <FaCircle className="mr-4 size-1 flex-none align-middle" />
            Jan, 2023
            <Separator className="ml-8 hidden w-40 lg:block" />
          </span>

          <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight">
            O Início
          </h3>
          <p className="mt-1 leading-7 text-description">
            Comecei na programação com HTML e CSS, criando pequenas páginas e
            descobrindo a magia de dar vida às ideias na web.
          </p>
        </div>
        <div>
          <span className="flex items-center whitespace-nowrap font-semibold">
            <FaCircle className="mr-4 size-1 flex-none align-middle" />
            Fev, 2023
            <Separator className="ml-8 hidden w-40 lg:block" />
          </span>

          <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight">
            Explorando o JavaScript
          </h3>
          <p className="mt-1 leading-7 text-description">
            Dei início ao JavaScript, construindo aplicações divertidas e
            básicas, e mergulhando mais fundo no universo da programação.
          </p>
        </div>
        <div>
          <span className="flex items-center whitespace-nowrap font-semibold">
            <FaCircle className="mr-4 size-1 flex-none align-middle" />
            Jun, 2023
            <Separator className="ml-8 hidden w-40 lg:block" />
          </span>

          <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight">
            Avançando com React
          </h3>
          <p className="mt-1 leading-7 text-description">
            Após explorar JavaScript, comecei a usar React.js, criando
            interfaces dinâmicas e levando minhas habilidades a um novo patamar.
          </p>
        </div>
        <div>
          <span className="flex items-center whitespace-nowrap font-semibold">
            <FaCircle className="mr-4 size-1 flex-none align-middle" />
            Jan, 2024
            <Separator className="ml-8 hidden w-40 lg:block" />
          </span>

          <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight">
            Novos Horizontes
          </h3>
          <p className="mt-1 leading-7 text-description">
            Com o tempo, fui consolidando minhas habilidades em programação e
            comecei a estudar Next.js, expandindo ainda mais meu conhecimento no
            desenvolvimento web.
          </p>
        </div>
      </div>
    </div>
  );
}

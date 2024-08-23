import { FaCircle } from "react-icons/fa6";
import { Separator } from "./ui/separator";

export function AboutMe() {
  return (
    <section
      id="aboutMe"
      className="mx-5 space-y-4 pb-64 lg:container lg:w-full lg:max-w-7xl"
    >
      <h2 className="mb-2 text-xl lg:text-3xl">Olá, sou Matheus Tiburcio,</h2>
      <div className="mb-3 lg:text-xl">
        <p>
          {" "}
          de Sorocaba-SP. Estou no ensino médio e curso{" "}
          <span className="rounded-lg bg-purple-400/40 p-1 text-purple-600">
            Técnico em Desenvolvimento de Sistemas
          </span>{" "}
          na Escola Técnica Estadual Rubens de Faria e Souza. Tenho uma grande
          paixão por tecnologia, e meu trabalho se concentra em desenvolvimento
          front-end com ferramentas como{" "}
          <span className="text-purple-600">
            ReactJS, Next.js, Tailwind CSS
          </span>
          , entre outras.
        </p>
        <br />
        <p>
          Já fiz freelance para o exterior usando SquareSpace e, pessoalmente,
          criei meu próprio portfólio, do qual me orgulho muito. Nos próximos
          anos, planejo seguir carreira como programador e também explorar a
          área de cibersegurança, motivado pela constante evolução da tecnologia
          e suas infinitas possibilidades. Fora do trabalho, gosto de cozinhar,
          ler mangás e livros, e ir à academia. Meu pai foi uma grande
          influência para eu seguir nessa área, e estou animado para ver onde
          essa jornada me levará.
        </p>
      </div>

      <Separator className="opacity-45" />

      <div className="mx-auto hidden px-8 py-6 lg:block">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <span className="flex items-center whitespace-nowrap font-semibold">
              <FaCircle className="mr-4 size-1 flex-none align-middle" />
              Aug 2021
              <Separator className="ml-8 hidden w-40 lg:block" />
            </span>

            <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight">
              Founded company
            </h3>
            <p className="mt-1 leading-7 text-description">
              Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur
              asperiores et dolorem dolorem optio voluptate repudiandae.
            </p>
          </div>
          <div>
            <span className="flex items-center whitespace-nowrap font-semibold">
              <FaCircle className="mr-4 size-1 flex-none align-middle" />
              Aug 2021
              <Separator className="ml-8 hidden w-40 lg:block" />
            </span>

            <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight">
              Founded company
            </h3>
            <p className="mt-1 leading-7 text-description">
              Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur
              asperiores et dolorem dolorem optio voluptate repudiandae.
            </p>
          </div>
          <div>
            <span className="flex items-center whitespace-nowrap font-semibold">
              <FaCircle className="mr-4 size-1 flex-none align-middle" />
              Aug 2021
              <Separator className="ml-8 hidden w-40 lg:block" />
            </span>

            <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight">
              Founded company
            </h3>
            <p className="mt-1 leading-7 text-description">
              Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur
              asperiores et dolorem dolorem optio voluptate repudiandae.
            </p>
          </div>
          <div>
            <span className="flex items-center whitespace-nowrap font-semibold">
              <FaCircle className="mr-4 size-1 flex-none align-middle" />
              Aug 2021
              <Separator className="ml-8 hidden w-40 lg:block" />
            </span>

            <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight">
              Founded company
            </h3>
            <p className="mt-1 leading-7 text-description">
              Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur
              asperiores et dolorem dolorem optio voluptate repudiandae.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

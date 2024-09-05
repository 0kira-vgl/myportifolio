import { Title, Subtitle } from "../titleAndSubtitle";
import { Separator } from "../ui/separator";
import { Timeline } from "./timeline";

export function AboutMe() {
  return (
    <section
      id="aboutMe"
      className="mx-5 space-y-4 pb-28 lg:container lg:w-full lg:max-w-7xl"
    >
      <header className="items-center justify-center pb-5">
        <Title>Sobre mim</Title>
        <Subtitle>
          Conheça a história por trás do desenvolvedor, a essência do código.
        </Subtitle>
      </header>

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

      <Timeline />
    </section>
  );
}

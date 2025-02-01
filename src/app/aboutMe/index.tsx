/* eslint-disable react/no-unescaped-entities */
import { Title, Subtitle } from "../../components/titleAndSubtitle";
import { Timeline } from "./timeline";
import { useTranslations } from "next-intl";
import { FaTerminal } from "react-icons/fa6";

export function AboutMe() {
  const t = useTranslations("AboutMe");

  return (
    <section
      id="aboutMe"
      className="container mx-auto pb-28 lg:w-full lg:max-w-7xl"
    >
      <header className="items-center justify-center pb-5">
        <Title>{t("title")}</Title>
        <Subtitle>{t("subtitle")}</Subtitle>
      </header>

      <div className="md:flex">
        <div className="md:grid md:grid-cols-2">
          <div className="pb-10 md:max-w-[540px] md:pb-0">
            <div className="mb-3 rounded-md border border-zinc-200 bg-zinc-50 text-gray-700 dark:border-gray-700 dark:bg-black dark:text-gray-400 lg:text-xl">
              <div className="flex items-center gap-2.5 border-b border-zinc-200 py-2.5 pl-4 dark:border-b-gray-700">
                <FaTerminal className="size-4 text-zinc-500" />

                <h1 className="font-mono text-[13px] text-green-400 lg:text-base">
                  <span className="text-yellow-400">$</span> echo{" "}
                  <span className="text-white">
                    "Olá, sou Matheus Tiburcio"
                    <span className="animate-pulse duration-700">_</span>
                  </span>
                </h1>
              </div>

              <div className="rounded-md bg-white p-4 font-mono text-[15px] text-green-400 shadow-lg dark:bg-zinc-950">
                Sou estudante do ensino médio e curso{" "}
                <span className="text-yellow-400">
                  Técnico em Desenvolvimento de Sistemas{" "}
                </span>
                na{" "}
                <span className="text-yellow-400">
                  ETEC Rubens de Faria e Souza
                </span>
                . Minha paixão por tecnologia me levou a me especializar no{" "}
                <span className="text-yellow-400">
                  desenvolvimento front-end
                </span>
                , trabalhando com{" "}
                <span className="text-yellow-400">
                  ReactJS, React Native, Next.js, Tailwind CSS
                </span>{" "}
                e outras tecnologias modernas.
                <br />
                <br />
                Já tive a oportunidade de realizar{" "}
                <span className="text-yellow-400">
                  freelances para o exterior
                </span>{" "}
                e construir meu próprio portfólio, um projeto do qual me orgulho
                muito. No futuro, quero expandir ainda mais minhas habilidades e
                crescer profissionalmente como desenvolvedor. O que me motiva é
                a{" "}
                <span className="text-yellow-400">
                  constante evolução da tecnologia
                </span>{" "}
                e as infinitas possibilidades que ela proporciona.
                <br />
                <br />
                Além da programação, gosto de{" "}
                <span className="text-yellow-400">
                  cozinhar, ler mangás e livros e ir à academia
                </span>
                . Meu pai foi uma{" "}
                <span className="text-yellow-400">grande influência</span> para
                eu entrar nessa área, e estou sempre em busca de novos desafios
                e aprendizados.
              </div>
            </div>
          </div>

          <Timeline />
        </div>
      </div>
    </section>
  );
}

import { Title, Subtitle } from "../titleAndSubtitle";
import { Timeline } from "./timeline";
import { useTranslations } from "next-intl";

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
            <h2 className="mb-2 text-xl text-gray-500 dark:text-gray-400 lg:text-3xl">
              Olá, sou Matheus Tiburcio,
            </h2>
            <div className="mb-3 text-gray-700 dark:text-gray-400 lg:text-xl">
              <p>
                estou no ensino médio e curso{" "}
                <span className="font-medium text-blue-800 dark:text-blue-300">
                  Técnico em Desenvolvimento de Sistemas
                </span>{" "}
                na Escola Técnica Estadual Rubens de Faria e Souza. Tenho uma
                grande paixão por tecnologia, e meu trabalho se concentra em
                desenvolvimento front-end com ferramentas como ReactJS, Next.js,
                Tailwind CSS, entre outras.
              </p>
              <br />
              <p>
                Já fiz freelances para o exterior e, pessoalmente, criei meu
                próprio portfólio, do qual me orgulho muito. Nos próximos anos,
                planejo seguir carreira como desenvolvedor e também explorar a
                área de cibersegurança, motivado pela constante evolução da
                tecnologia e suas infinitas possibilidades. Fora do trabalho,
                gosto de cozinhar, ler mangás e livros, e ir à academia. Meu pai
                foi uma grande influência para eu seguir nessa área, e estou
                animado para ver onde essa jornada me levará.
              </p>
            </div>
          </div>

          {/* <Separator className="opacity-45" /> */}

          <Timeline />
        </div>
      </div>
    </section>
  );
}

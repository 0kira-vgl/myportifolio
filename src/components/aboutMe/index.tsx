import { IconsCard } from "../projects/cardComponents";
import { buttonVariants } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Separator } from "../ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { CertificatesCarousel } from "./certificatesCarousel";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export function AboutMe() {
  return (
    <section id="aboutMe" className="flex items-center justify-center py-6">
      <Card className="mx-16 h-screen w-full">
        <Tabs defaultValue="aboutMe">
          <CardHeader>
            <TabsList className="max-w-max">
              <TabsTrigger value="aboutMe">Sobre mim</TabsTrigger>
              <TabsTrigger value="skills">Habilidades</TabsTrigger>
              <TabsTrigger value="certificates">Certificados</TabsTrigger>
            </TabsList>
          </CardHeader>

          <CardContent>
            <TabsContent value="aboutMe">
              <div>
                <h2 className="mb-2 text-xl lg:text-3xl">
                  Olá, sou Matheus Tiburcio,
                </h2>
                <div className="mb-3 lg:text-xl">
                  <p>
                    {" "}
                    de Sorocaba-SP. Estou no ensino médio e curso{" "}
                    <span className="rounded-lg bg-purple-400/40 p-1 text-purple-600">
                      Técnico em Desenvolvimento de Sistemas
                    </span>{" "}
                    na Escola Técnica Estadual Rubens de Faria e Souza. Tenho
                    uma grande paixão por tecnologia, e meu trabalho se
                    concentra em desenvolvimento front-end com ferramentas como{" "}
                    <span className="text-purple-600">
                      ReactJS, Next.js, Tailwind CSS
                    </span>
                    , entre outras.
                  </p>
                  <br />
                  <p>
                    Já fiz freelance para o exterior usando SquareSpace e,
                    pessoalmente, criei meu próprio portfólio, do qual me
                    orgulho muito. Nos próximos anos, planejo seguir carreira
                    como programador e também explorar a área de cibersegurança,
                    motivado pela constante evolução da tecnologia e suas
                    infinitas possibilidades. Fora do trabalho, gosto de
                    cozinhar, ler mangás e livros, e ir à academia. Meu pai foi
                    uma grande influência para eu seguir nessa área, e estou
                    animado para ver onde essa jornada me levará.
                  </p>
                </div>

                <Separator />

                <div className="mt-3 flex gap-3">
                  <a
                    href="#"
                    target="_blank"
                    className={buttonVariants({
                      variant: "secondary",
                      className:
                        "flex items-center justify-center gap-2 font-semibold",
                    })}
                  >
                    GitHub
                    <FaGithub className="size-5" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className={buttonVariants({
                      variant: "outline",
                      className:
                        "flex items-center justify-center gap-2 font-semibold",
                    })}
                  >
                    LinkediIn
                    <FaLinkedinIn className="size-5" />
                  </a>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="skills">
              <div className="flex justify-between">
                <div className="space-y-6">
                  <div>
                    <h2 className="mb-3 text-2xl font-semibold">
                      Linguagens e Frameworks
                    </h2>
                    <div className="flex items-center gap-2">
                      <IconsCard
                        className="size-14"
                        titleIcon="HTML5"
                        alt="HTML5 Icon"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                      />
                      <IconsCard
                        className="size-14"
                        titleIcon="CSS3"
                        alt="CSS3 Icon"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                      />
                      <IconsCard
                        className="size-14"
                        titleIcon="JavaScript"
                        alt="JavaScript Icon"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                      />
                      <IconsCard
                        className="size-14"
                        titleIcon="TypeScript"
                        alt="TypeScript Icon"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                      />
                      <IconsCard
                        className="size-14"
                        titleIcon="ReactJs"
                        alt="ReactJs Icon"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                      />
                      <IconsCard
                        className="size-14"
                        titleIcon="NextJs"
                        alt="NextJs Icon"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                      />
                    </div>
                  </div>

                  <div>
                    <h2 className="mb-3 text-2xl font-semibold">
                      Ferramentas de Desenvolvimento
                    </h2>
                    <div className="flex items-center gap-2">
                      <IconsCard
                        className="size-14"
                        titleIcon="Visual Studio Code"
                        alt="Visual Studio Code Icon"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
                      />
                      <IconsCard
                        className="size-14"
                        titleIcon="Git"
                        alt="Git Icon"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                      />
                      <IconsCard
                        className="size-14"
                        titleIcon="GitHub"
                        alt="GitHub Icon"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                      />
                      <IconsCard
                        className="size-14"
                        titleIcon="Figma"
                        alt="Figma Icon"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
                      />
                      <IconsCard
                        className="size-14"
                        titleIcon="ViteJs"
                        alt="ViteJs Icon"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
                      />
                      <IconsCard
                        className="size-14"
                        titleIcon="TailwindCSS"
                        alt="TailwindCSS Icon"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                      />
                    </div>
                  </div>

                  <div>
                    <h2 className="mb-1.5 text-2xl font-semibold">Idiomas</h2>
                    <div className="flex-row text-lg">
                      <p className="font-medium">
                        <span className="font-semibold">
                          Português (Brasil) /{" "}
                        </span>
                        fluente
                      </p>
                      <p className="font-medium">
                        <span className="font-semibold">Inglês / </span> Básico
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="mb-3 text-2xl font-semibold">Soft Skills</h2>

                  <div>
                    <h2>Metodologia Ágil Scrum</h2>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent
              value="certificates"
              className="flex items-center justify-center"
            >
              <CertificatesCarousel />
            </TabsContent>
          </CardContent>
        </Tabs>
      </Card>
    </section>
  );
}

import { Card, CardContent, CardHeader } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { AboutMe } from "./aboutMe";
import { CertificatesCarousel } from "./certificatesCarousel";
import { Skills } from "./skills";

export function MoreAboutMe() {
  return (
    <section
      id="aboutMe"
      className="mx-10 flex items-center justify-center py-6"
    >
      <Card className="h-screen w-full border-none bg-transparent shadow-none">
        <Tabs defaultValue="aboutMe">
          <CardHeader className="flex items-center justify-center lg:items-start lg:justify-start">
            <TabsList className="max-w-max">
              <TabsTrigger value="aboutMe">Sobre mim</TabsTrigger>
              <TabsTrigger value="skills">Habilidades</TabsTrigger>
              <TabsTrigger value="certificates">Certificados</TabsTrigger>
            </TabsList>
          </CardHeader>

          <CardContent>
            <TabsContent value="aboutMe">
              <AboutMe />
            </TabsContent>

            <TabsContent value="skills">
              <Skills />
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

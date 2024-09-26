import { Header } from "@/components/header";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { ScrollTopButton } from "@/components/scrollTopButton";
import { Introduction } from "@/components/introduction";
import { MobileNavBar } from "@/components/mobileNavBar";
import { Skills } from "@/components/skills";
import { AboutMe } from "@/components/aboutMe";

export default function Home() {
  return (
    <>
      <Header />
      <MobileNavBar />
      <Introduction />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <ScrollTopButton />
    </>
  );
}

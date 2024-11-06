import { Header } from "@/components/header";
import { Projects } from "@/app/projects";
import { Contact } from "@/app/contact";
import { ScrollTopButton } from "@/components/scrollTopButton";
import { Introduction } from "@/app/introduction";
import { MobileNavBar } from "@/components/mobileNavBar";
import { Skills } from "@/app/skills";
import { AboutMe } from "@/app/aboutMe";

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

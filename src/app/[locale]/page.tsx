import { Header } from "@/components/header";
import { Projects } from "@/app/projects";
import { Contact } from "@/app/contact";
import { Introduction } from "@/app/introduction";
import { MobileNavBar } from "@/components/mobileNavBar";
import { Skills } from "@/app/skills";
import { AboutMe } from "@/app/aboutMe";
import { BackToTop } from "@/components/BackToTop";

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
      <BackToTop />
    </>
  );
}

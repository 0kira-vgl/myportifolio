import { Header } from "@/components/header";
import { Projects } from "@/app/projects";
import { Contact } from "@/app/contact";
import { Introduction } from "@/app/introduction";
import { MobileNavBar } from "@/components/mobileNavBar";
import { Skills } from "@/app/skills";
import { AboutMe } from "@/app/aboutMe";
import { BackToTop } from "@/components/backToTop";
import { ScrollRestorer } from "@/components/scrollRestorer";

export default function Home() {
  return (
    <>
      <ScrollRestorer />
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

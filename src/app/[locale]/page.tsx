import { Header } from "@/components/header";
import { Projects } from "@/components/projects";
import { Footer } from "@/components/footer";
import { ScrollTopButton } from "@/components/scrollTopButton";
import { Introduction } from "@/components/introduction";
import { MobileNavBar } from "@/components/mobileNavBar";
import { Skills } from "@/components/skills";
import { AboutMe } from "@/components/aboutMe";
import { Notice } from "@/components/notice";

export default function Home() {
  return (
    <>
      <Notice />
      <Header />
      <MobileNavBar />
      <Introduction />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
      <ScrollTopButton />
    </>
  );
}

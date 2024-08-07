import { Header } from "@/components/header";
import { Projects } from "@/components/projects";
import { AboutMe } from "@/components/aboutMe";
import { Footer } from "@/components/footer";
import { ScrollTopButton } from "@/components/scrollTopButton";
import { Introduction } from "@/components/introduction";
import { MobileNavBar } from "@/components/mobileNavBar";

export default function Home() {
  return (
    <>
      <Header />
      <MobileNavBar />
      <Introduction />
      <AboutMe />
      <Projects />
      <Footer />
      <ScrollTopButton />
    </>
  );
}

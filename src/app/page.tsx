import { Header } from "@/components/header";
import { Projects } from "@/components/projects";
import { MoreAboutMe } from "@/components/moreAboutMe";
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
      <MoreAboutMe />
      <Projects />
      <Footer />
      <ScrollTopButton />
    </>
  );
}

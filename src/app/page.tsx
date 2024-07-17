import { Header } from "@/components/header";
import Introduction from "./intro/page";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <>
      <Header />
      <Introduction />
      <Projects />
    </>
  );
}

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import Work from "@/components/Work";
import Stack from "@/components/Stack";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Showcase />
        <Work />
        <Stack />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

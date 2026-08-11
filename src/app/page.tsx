import Nav from "@/components/Nav";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Leadership from "@/components/sections/Leadership";
import Projects from "@/components/sections/Projects";
import Recommendations from "@/components/sections/Recommendations";
import Skills from "@/components/sections/Skills";
import Ticker from "@/components/sections/Ticker";
import Cursor from "@/components/ui/Cursor";
import Preloader from "@/components/ui/Preloader";
import ScrollProgress from "@/components/ui/ScrollProgress";
import SmoothScroll from "@/components/providers/SmoothScroll";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Preloader />
      <Cursor />
      <ScrollProgress />
      <Nav />

      <main className="grain relative">
        <Hero />
        <Ticker />
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Leadership />
        <Recommendations />
        <Contact />
      </main>
    </>
  );
}

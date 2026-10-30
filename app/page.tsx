import Navbar from "@/components/Navbar";
import CommandPalette from "@/components/CommandPalette";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <CommandPalette />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
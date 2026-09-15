import { Analytics } from "@vercel/analytics/react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Credentials from "./components/Credentials";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-slate-200 antialiased">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Credentials />
      </main>
      <Contact />
      <Analytics />
    </div>
  );
}

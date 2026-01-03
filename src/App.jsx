import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import DigitalRain from "./components/DigitalRain";


import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("hero");

  return (
    <div id="root">
      <DigitalRain /> {/* background digital rain */}
      {/* Navbar */}
      <Navbar setActiveSection={setActiveSection} activeSection={activeSection} />

      {/* Sections */}
      {activeSection === "hero" && (
        <section id="hero">
          <Hero />
        </section>
      )}

      {activeSection === "projects" && (
        <section id="projects">
          <Projects />
        </section>
      )}

      {activeSection === "skills" && (
        <section id="skills">
          <Skills />
        </section>
      )}

      {activeSection === "contact" && (
        <section id="contact">
          <Contact />
        </section>
      )}
    </div>
  );
}

export default App;

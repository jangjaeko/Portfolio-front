import React from "react";
import FirstSection from "./FirstSection/FirstSection";
import AboutMe from "./AboutMe/AboutMe";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
export default function Main() {
  return (
    <div>
      <section id="section-0">
        <FirstSection />
      </section>
      <section id="section-1">
        <AboutMe />
      </section>
      <section id="section-2">
        <Skills />
      </section>
      <section id="section-3">
        <Projects />
      </section>
    </div>
  );
}

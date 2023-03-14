import React from "react";
import FirstSection from "./FirstSection/FirstSection";
import AboutMe from "./AboutMe/AboutMe";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Career from "./Career/Career";
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
      <section id="section-4">
        <Career />
      </section>
    </div>
  );
}

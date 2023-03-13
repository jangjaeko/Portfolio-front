import React from "react";
import FirstSection from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";
import Skills from "./Skills/Skills";
export default function Main() {
  return (
    <div>
      <section id="section-1">
        <FirstSection />
      </section>
      <section id="section-2">
        <SecondSection />
      </section>
      <section id="section-3">
        <Skills />
      </section>
    </div>
  );
}

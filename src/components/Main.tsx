import React from "react";
import FirstSection from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";

export default function Main() {
  return (
    <div>
      <FirstSection />
      <section id="section-1">
        <SecondSection />
      </section>
    </div>
  );
}

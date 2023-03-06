import { Fragment } from "react";
import FirstSection from "./components/FirstSection/FirstSection";
import Header from "./components/Header/Header";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <FirstSection />
    </Fragment>
  );
}

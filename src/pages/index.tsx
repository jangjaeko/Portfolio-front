import Footer from "@/components/Footer/Footer";
import GoTopBtn from "@/components/GoTopBtn/GoTopBtn";
import Main from "@/components/Main";
import { Fragment } from "react";

import Header from "../components/Header/Header";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Main />
      <GoTopBtn />
      <Footer />
    </Fragment>
  );
}

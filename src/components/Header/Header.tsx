import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "../../styles/header.module.scss";
import Hambur from "./Hamburger.png";
import styled from "styled-components";

interface Props {}

export default function Header() {
  const [ToggleOn, setToggleOn] = useState(false);
  const router = useRouter();
  const gotoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const section1 = "About Me";
  const section2 = "Skills";
  const section3 = "Projects";
  const section4 = "Career";
  const handleClickScroll = (item: string) => {
    const se1 = document.getElementById("section-1");
    const se2 = document.getElementById("section-2");
    const se3 = document.getElementById("section-3");
    const se4 = document.getElementById("section-4");
    if (item === section1 && se1) {
      se1.scrollIntoView({ behavior: "smooth" });
    } else if (item === section2 && se2) {
      se2.scrollIntoView({ behavior: "smooth" });
    } else if (item === section3 && se3) {
      se3.scrollIntoView({ behavior: "smooth" });
    } else if (item === section4 && se4) {
      se4.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.flexItems}>
        {/* <Link href="/" className={styles.box}> */}
        {/* <Image
          onClick={() => alert("ddd")}
          src={Headerimg}
          width={51}
          height={58}
          alt={""}
        /> */}
        <LogoText onClick={() => gotoTop()}>JJH's Portpolio</LogoText>
        {/* </Link> */}
      </div>
      <Menu>
        <TitleColor onClick={() => handleClickScroll(section1)}>
          {section1}
        </TitleColor>
        <TitleColor onClick={() => handleClickScroll(section2)}>
          {section2}
        </TitleColor>
        {/* <TitleColor>Archiving</TitleColor> */}
        <TitleColor onClick={() => handleClickScroll(section3)}>
          {section3}
        </TitleColor>
        <TitleColor onClick={() => handleClickScroll(section4)}>
          {section4}
        </TitleColor>
      </Menu>
      <Hamburger>
        <Image src={Hambur} alt="" style={{ width: "4vh", height: "3vh" }} />
      </Hamburger>
    </header>
  );
}

const TitleColor = styled.h2`
  color: #1263ce;
  margin-left: 2vw;
  font-size: 1rem;
  font-family: PreLight;
`;
const LogoText = styled.h2`
  color: #1263ce;
  margin-left: 2vw;
  font-size: 1rem;
  font-family: PreBold;
`;
const Menu = styled.div`
  ${({ theme }) => theme.common.flexRow}
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const Hamburger = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  width: 6vh;
  height: 7vh;
  ${({ theme }) => theme.device.tabletS} {
    display: none;
  }
`;

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
  const handleClickScroll = () => {
    const element = document.getElementById("section-1");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
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
        <TitleColor>About Me</TitleColor>
        <TitleColor onClick={() => handleClickScroll()}>Skills</TitleColor>
        <TitleColor>Archiving</TitleColor>
        <TitleColor>Projects</TitleColor>
        <TitleColor>Career</TitleColor>
      </Menu>
      <Hamburger>
        <Image src={Hambur} alt="" style={{ width: "4vh", height: "3vh" }} />
      </Hamburger>
    </header>
  );
}

const TitleColor = styled.h2`
  color: ${({ theme }) => theme.colors.orange};
  margin-left: 2vw;
  font-size: 1rem;
  font-family: PreLight;
`;
const LogoText = styled.h2`
  color: ${({ theme }) => theme.colors.orange};
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

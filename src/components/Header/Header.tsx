import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "../../styles/header.module.scss";
import Headerimg from "./headerimg.png";
import styled from "styled-components";

interface Props {}

export default function Header() {
  const router = useRouter();
  const gotoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
        <TitleColor>Skills</TitleColor>
        <TitleColor>Archiving</TitleColor>
        <TitleColor>Projects</TitleColor>
        <TitleColor>Career</TitleColor>
      </Menu>
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
`;

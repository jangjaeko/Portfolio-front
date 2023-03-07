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
  const gotodown = () => {
    window.scrollTo({
      top: 1000,
      behavior: "smooth",
    });
  };

  return (
    <header className={styles.header}>
      <div className={styles.flexItems}>
        {/* <Link href="/" className={styles.box}> */}
        <Image
          onClick={() => alert("ddd")}
          src={Headerimg}
          width={51}
          height={58}
          alt={""}
        />
        {/* </Link> */}
      </div>
      <div>
        <TitleColor>awewda</TitleColor>
      </div>
    </header>
  );
}

const TitleColor = styled.h2`
  color: ${({ theme }) => theme.colors.orange};
`;

import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Insta from "./images/instagram .png";
import Linked from "./images/linkedin.png";
import Github from "./images/github.png";
import Link from "next/link";
export default function Footer() {
  return (
    <MainView>
      <Social>
        <Link href="https://www.instagram.com/lkjhgf45/" passHref={true}>
          <Image
            src={Insta}
            style={{ width: "5vh", height: "5vh", marginRight: "1vh" }}
            alt=""
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/jaeho-jang-09b1ab268/"
          passHref={true}
        >
          <Image
            src={Linked}
            style={{ width: "5vh", height: "5vh", marginRight: "1vh" }}
            alt=""
          />
        </Link>
        <Link href="https://github.com/jangjaeko/" passHref={true}>
          <Image
            src={Github}
            style={{ width: "5vh", height: "5vh", marginRight: "1vh" }}
            alt=""
          />
        </Link>
      </Social>
      <Copyright>© 2021. Jang JaeHo. All rights reserved.</Copyright>
      <Copyright>Made By Next.js</Copyright>
    </MainView>
  );
}

const MainView = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn};
  background-color: #222222;
  padding-top: 5vh;
  padding-bottom: 5vh;
`;
const Copyright = styled.span`
  font-family: PreLight;
  color: #ffffff;
  margin-top: 1vh;
`;

const Social = styled.div`
  ${({ theme }) => theme.common.flexCenterRow}
`;

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Logo from "./images/Cla.png";
import { BsFillAwardFill } from "react-icons/bs";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { BsBookmarkFill } from "react-icons/bs";

export default function Cla() {
  return (
    <div style={{ width: "40vw" }}>
      <Left>
        <Image src={Logo} style={{ width: "15vh", height: "10vh" }} alt="" />
      </Left>

      <Right>
        <Title> 클라코퍼레이션 (CLA Corporation)</Title>
        <DateText>2021.11 ~ 2022.08</DateText>
        <ComDesc>기술혁신을 통한 투명한 인플루언서 마케팅 스타트업</ComDesc>
        <hr style={{ width: "100%" }} />
        <DateText>
          {" "}
          <BsFillPatchCheckFill
            size={25}
            style={{ marginBottom: 5, marginRight: 5 }}
          />{" "}
          Major Work
        </DateText>
        <Desc>
          - React-native 와 Node JS 이용한 크로스 플랫폼 앱 개발
          <br />- React 를 이용한 웹 프론트 개발 <br />
          <br />
        </Desc>
        <hr style={{ width: "100%" }} />
        <DateText>
          {" "}
          <BsFillPatchCheckFill
            size={25}
            style={{ marginBottom: 5, marginRight: 5 }}
          />
          Major Project
        </DateText>
        <hr style={{ width: "100%" }} />
        <DateText>
          {" "}
          <BsFillCalendarCheckFill
            size={25}
            style={{ marginBottom: 5, marginRight: 5 }}
          />{" "}
          Project Name : MarkIn App
        </DateText>
        <Work>
          <BsBookmarkFill
            size={20}
            style={{ marginBottom: 5, marginRight: 5 }}
          />
          Language and development environment
        </Work>
        <Desc>- React-native, JavaScript, HTML/CSS, TypeScript, Git</Desc>
        <Work>
          <BsFillAwardFill
            size={20}
            style={{ marginBottom: 5, marginRight: 5 }}
          />
          Main tasks and details
        </Work>
        <Desc>
          - React-native 를 사용하여 크로스플랫폼 프론트앤드 개발
          <br /> - NodeJS 를 통한 백앤드 개발 <br />- 출시 및 버전관리
        </Desc>
        {/* 프로젝트 2 */}
        <hr style={{ width: "100%" }} />
        <DateText>
          {" "}
          <BsFillCalendarCheckFill
            size={25}
            style={{ marginBottom: 5, marginRight: 5 }}
          />{" "}
          Project Name : Creplanet Web
        </DateText>
        <Work>
          <BsBookmarkFill
            size={20}
            style={{ marginBottom: 5, marginRight: 5 }}
          />
          Language and development environment
        </Work>
        <Desc>- React, javascript, HTML/CSS, TypeScript, Git</Desc>
        <Work>
          <BsFillAwardFill
            size={20}
            style={{ marginBottom: 5, marginRight: 5 }}
          />
          Main tasks and details
        </Work>
        <Desc>
          - React 를 이용하여 프론트앤드 개발 <br />- FireBase 를 이용한 무중단
          배포
        </Desc>
      </Right>
    </div>
  );
}

const Left = styled.div`
  width: 100%;
`;
const Right = styled.div`
  ${({ theme }) => theme.common.flexColumn};
  width: 100%;
  background-color: #ffffff;
`;
const Title = styled.span`
  font-family: PreExBold;
  color: #333333;
  font-size: 1.5rem;
`;
const DateText = styled.span`
  font-family: PreBold;
  font-size: 1rem;
`;
const ComDesc = styled.span`
  font-family: PreBold;
  font-size: 1rem;
`;
const Work = styled.span`
  font-family: PreMedium;
  margin-top: 10px;
`;
const Desc = styled.span`
  font-family: PreLight;
`;

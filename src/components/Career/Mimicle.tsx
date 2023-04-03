import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Logo from "./images/미미클.png";
import { BsFillAwardFill } from "react-icons/bs";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { BsBookmarkFill } from "react-icons/bs";

export default function Mimicle() {
  return (
    <div style={{ width: "40vw" }}>
      <Left>
        <Image src={Logo} style={{ width: "15vh", height: "10vh" }} alt="" />
      </Left>

      <Right>
        <Title> 미미클 (Mimicle)</Title>
        <DateText>2021.11 ~ 2022.08</DateText>
        <ComDesc>그림을 통한 감정 공유 플랫폼 스타트업</ComDesc>
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
          - 바닐라 JS로 만든 파일을 FTP 방식으로 웹앱 형식의 앱 제작 및 배포
          <br />
          - 스페인어앱 개발 유지/보수
          <br />
          - 프랑스어앱 개발 배포 유지/보수
          <br />
          - 데이터베이스 수정 및 개발
          <br />
          - 기능 개발
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
          Project Name : Mimicle ES App
        </DateText>
        <Work>
          <BsBookmarkFill
            size={20}
            style={{ marginBottom: 5, marginRight: 5 }}
          />
          Language and development environment
        </Work>
        <Desc>- JavaScript, Html, PHP, CSS, Mysql</Desc>
        <Work>
          <BsFillAwardFill
            size={20}
            style={{ marginBottom: 5, marginRight: 5 }}
          />
          Main tasks and details
        </Work>
        <Desc>
          - 바닐라 JS로 만든 파일을 FTP 방식으로 웹앱 형식의 앱 제작 및 배포
          <br /> - 데이터베이스 수정 및 개발 <br />- 모바일 환경 적용하여 반응형
          페이지 제작
          <br />- 서비스 주요 기능 및 오류 처리
        </Desc>
        {/* 프로젝트 2 */}
        <hr style={{ width: "100%" }} />
        <DateText>
          {" "}
          <BsFillCalendarCheckFill
            size={25}
            style={{ marginBottom: 5, marginRight: 5 }}
          />{" "}
          Project Name : Mimicle FR App
        </DateText>
        <Work>
          <BsBookmarkFill
            size={20}
            style={{ marginBottom: 5, marginRight: 5 }}
          />
          Language and development environment
        </Work>
        <Desc>- JavaScript, Html, PHP, CSS, Mysql</Desc>
        <Work>
          <BsFillAwardFill
            size={20}
            style={{ marginBottom: 5, marginRight: 5 }}
          />
          Main tasks and details
        </Work>
        <Desc>
          - 바닐라 JS로 만든 파일을 FTP 방식으로 웹앱 형식의 앱 제작 및 배포
          <br />- 데이터베이스 수정 및 개발 <br />- 모바일 환경 적용하여 반응형
          페이지 제작
          <br />- 서비스 주요 기능 및 오류 처리
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

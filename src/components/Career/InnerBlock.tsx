import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Cla from "./images/Cla.png";
export default function InnerBlock() {
  return (
    <Layer>
      <Left>
        <Image src={Cla} style={{ width: "15vh", height: "10vh" }} alt="" />
      </Left>
      <Right>
        <Title>클라코퍼레이션</Title>
        <DateText>2021.11 ~ 2022.08</DateText>
        <ComDesc>기술혁신을 통한 투명한 인플루언서 마케팅 스타트업</ComDesc>
        <hr style={{ width: "100%" }} />
        <DateText>주요 업무</DateText>
        <Desc>
          - React-native 와 Node JS 이용한 크로스 플랫폼 앱 개발
          <br />- React 를 이용한 웹 프론트 개발 <br />
          <br />
        </Desc>
        <hr style={{ width: "100%" }} />
        <DateText>주요 프로젝트</DateText>
        <hr style={{ width: "100%" }} />
        <DateText>프로젝트 명 : MarkIn App</DateText>
        <Work>사용언어 및 개발환경</Work>
        <Desc>- React-native, JavaScript, HTML/CSS, TypeScript, Git</Desc>
        <Work>주요업무 및 상세역할</Work>
        <Desc>
          - React-native 를 사용하여 크로스플랫폼 프론트앤드 개발
          <br /> - NodeJS 를 통한 백앤드 개발 <br />- 출시 및 버전관리
        </Desc>
      </Right>
    </Layer>
  );
}

const Layer = styled.div`
  width: 100%;
  ${({ theme }) => theme.common.flexCenterRow};
  background-color: #ffffff;
  border-radius: 10px;
`;
const Left = styled.div`
  width: 30%;
  padding: 10%;
  boder-style: solid;
  border-right-color: #000000;
  border-right-width: 15px;
`;
const Right = styled.div`
  ${({ theme }) => theme.common.flexColumn};
  width: 70%;
  padding: 10%;
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
`;
const Desc = styled.span`
  font-family: PreLight;
`;

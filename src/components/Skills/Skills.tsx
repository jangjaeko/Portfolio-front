import React from "react";
import styled from "styled-components";
import Image from "next/image";
import boot from "./images/bootstrap.png";
import ht from "./images/css.png";
import jq from "./images/ajax.png";
import ne from "./images/next.png";
import re from "./images/react.png";
import red from "./images/redux.png";
import ty from "./images/typescript.png";
import node from "./images/node.png";
import nest from "./images/nest.svg";
export default function Skills() {
  return (
    <MainView>
      <Title>Skills</Title>
      <ContentDiv className="row" style={{ width: "100%" }}>
        <div className="col-md-6  col-lg-4">
          <BigSection>
            <SkillsTitle>Frontend</SkillsTitle>
            <Hline />
            <LogoImages src={ht} alt="" />
            <LogoImages src={ty} alt="" />
            <LogoImages src={re} alt="" />
            <LogoImages src={red} alt="" />
            <LogoImages src={ne} alt="" />
            <LogoImages src={jq} alt="" />
            <LogoImages src={boot} alt="" />
          </BigSection>
        </div>
        <div className="col-md-6  col-lg-4">
          <BigSection>
            <SkillsTitle>Backend</SkillsTitle>
            <Hline />
            <LogoImages src={node} alt="" />
            <LogoImages src={nest} alt="" />
          </BigSection>
          <BigSection style={{ marginTop: "5vh" }}>
            <SkillsTitle>Mobile App</SkillsTitle>
            <Hline />
          </BigSection>
        </div>
        <div className="col-md-6  col-lg-4">
          <BigSection>
            <SkillsTitle>Version Control</SkillsTitle>
            <Hline />
          </BigSection>
        </div>
      </ContentDiv>
    </MainView>
  );
}

const MainView = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn};
  background-color: #cddff5;
  padding-top: 10vh;
  padding-bottom: 10vh;
`;

const Title = styled.span`
  font-family: PreExBold;
  color: #1263ce;
  font-size: 1.8rem;
`;

const BigSection = styled.div`
  ${({ theme }) => theme.common.flexColumn};
  background-color: #ffffff;
  border-radius: 15px;
  width: 80%;
  padding: 10%;
  margin-top: 5vh;
  box-shadow: 0.5px 0.5px 0.5px 0px;
`;

const SkillsTitle = styled.span`
  color: #1263ce;
`;

const ContentDiv = styled.span`
    margin-top: 2vh,
    display: flex,
    align-Items: center,
    
`;
const Hline = styled.div`
  width: 100%;
  height: 0.3vh;
  background-color: #1263ce;
  margin-top: 2vh;
`;

const LogoImages = styled(Image)`
  width: 100%;
  height: 13vh;
  margin-top: 3vh;
`;

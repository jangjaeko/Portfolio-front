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
import rn from "./images/RN.png";
import fb from "./images/Firebase.png";
import gh from "./images/github.png";
import sl from "./images/Slacklogo.png";
import fi from "./images/figma.png";
import ji from "./images/jira.png";
import gi from "./images/git.png";
import my from "./images/mysql.png";
import php from "./images/php.png";
import word from "./images/wordpress.png";
export default function Skills() {
  return (
    <MainView>
      <Title>Skills</Title>
      <ContentDiv className="row">
        <div
          className="col-md-6  col-lg-4"
          //   style={{
          //     display: "flex",
          //     justifyContent: "center",
          //   }}
        >
          <BigSection>
            <SkillsTitle>Frontend</SkillsTitle>
            <Hline />
            <LogoImages src={ht} alt="" />
            <LogoImages src={ty} alt="" />
            <LogoImages src={re} alt="" />
            <LogoImages src={red} alt="" />
            <LogoImages src={ne} alt="" />
            <LogoImages src={jq} alt="" />
            <SLogoImages src={boot} alt="" />
            <BLogoImages src={word} alt="" />
          </BigSection>
        </div>
        <div className="col-md-6  col-lg-4">
          <BigSection>
            <SkillsTitle>Backend</SkillsTitle>
            <Hline />
            <LogoImages src={node} alt="" />
            <SLogoImages src={nest} alt="" />
            <SLogoImages src={fb} alt="" />
            <LogoImages src={my} alt="" />
            <LogoImages src={php} alt="" />
          </BigSection>
          <BigSection style={{ marginTop: "5vh" }}>
            <SkillsTitle>Mobile App</SkillsTitle>
            <Hline />
            <SLogoImages src={rn} alt="" />
          </BigSection>
        </div>
        <div className="col-md-6  col-lg-4">
          <BigSection>
            <SkillsTitle>Version Control</SkillsTitle>
            <Hline />
            <LogoImages src={gh} alt="" />
            <SLogoImages src={gi} alt="" />
          </BigSection>
          <BigSection>
            <SkillsTitle>Communication</SkillsTitle>
            <Hline />
            <BLogoImages src={sl} alt="" />
            <BLogoImages src={fi} alt="" />
            <BLogoImages src={ji} alt="" />
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
  font-size: 2.5rem;
`;

const BigSection = styled.div`
  ${({ theme }) => theme.common.flexColumn};
  background-color: #ffffff;
  border-radius: 15px;
  width: 90%;
  padding: 10%;
  margin-top: 5vh;
  margin-left: 5%;
  box-shadow: 0.5px 0.5px 0.5px 0px;
`;

const SkillsTitle = styled.span`
  color: #1263ce;
`;

const ContentDiv = styled.div`
  display: flex;
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;
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

const SLogoImages = styled(Image)`
  width: 100%;
  height: 10vh;
  margin-top: 2vh;
`;
const BLogoImages = styled(Image)`
  width: 100%;
  height: 15vh;
  margin-top: 1vh;
`;

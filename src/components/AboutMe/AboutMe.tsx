import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Name from "./images/name.png";
import birth from "./images/birth.png";
import address from "./images/address.png";
import email from "./images/email.png";
import github from "./images/github.png";
import education from "./images/education.png";
import Link from "next/link";
export default function SecondSection() {
  return (
    <MainView>
      <div style={{ borderBottomWidth: 10, borderBottomColor: "#000000" }}>
        <Title> About Me</Title>
      </div>
      <div
        style={{
          width: "15vw",
          height: "1vh",
          backgroundColor: "#444444",
          marginTop: "2vh",
        }}
      ></div>
      <div
        className="row"
        style={{
          marginTop: "2vh",
          display: "flex",
          alignItems: "center",
          width: "100%",
          paddingTop: "10vh",
          paddingBottom: "10vh",
        }}
      >
        <div className="col-md-6  col-lg-4 col-sm-12">
          <InfoSection>
            <IconSection>
              <Image
                src={Name}
                style={{ width: "5vh", height: "5vh" }}
                alt=""
              />
            </IconSection>
            <Content>
              <ContentTitle>Name</ContentTitle>
              <ContentSub>Jang Jaeho (Michael)</ContentSub>
            </Content>
          </InfoSection>
        </div>
        <div className="col-md-6  col-lg-4 col-sm-12">
          <InfoSection>
            <IconSection>
              <Image
                src={birth}
                style={{ width: "5vh", height: "5vh" }}
                alt=""
              />
            </IconSection>
            <Content>
              <ContentTitle>Birth</ContentTitle>
              <ContentSub>1997.06.26</ContentSub>
            </Content>
          </InfoSection>
        </div>
        <div className="col-md-6  col-lg-4 col-sm-12">
          <InfoSection>
            <IconSection>
              <Image
                src={address}
                style={{ width: "5vh", height: "5vh" }}
                alt=""
              />
            </IconSection>
            <Content>
              <ContentTitle>Address</ContentTitle>
              <ContentSub>Seoul, Korea</ContentSub>
            </Content>
          </InfoSection>
        </div>
        <div className="col-md-6  col-lg-4 col-sm-12">
          <InfoSection>
            <IconSection>
              <Image
                src={email}
                style={{ width: "5vh", height: "5vh" }}
                alt=""
              />
            </IconSection>
            <Content>
              <ContentTitle>Email</ContentTitle>
              <ContentSub>jangjaeko45@gmail.com</ContentSub>
            </Content>
          </InfoSection>
        </div>
        <div className="col-md-6  col-lg-4 col-sm-12">
          <InfoSection>
            <IconSection>
              <Image
                src={github}
                style={{ width: "6vh", height: "6vh" }}
                alt=""
              />
            </IconSection>
            <Content>
              <ContentTitle>Github</ContentTitle>
              <Link href="https://github.com/jangjaeko/" passHref={true}>
                <ContentSub>https://github.com/jangjaeko</ContentSub>
              </Link>
            </Content>
          </InfoSection>
        </div>
        <div className="col-md-6  col-lg-4 col-sm-12">
          <InfoSection>
            <IconSection>
              <Image
                src={education}
                style={{ width: "5vh", height: "5vh" }}
                alt=""
              />
            </IconSection>
            <Content>
              <ContentTitle>Education</ContentTitle>
              <ContentSub>Sejoing Univ</ContentSub>
              <ContentSub>Software Engineering</ContentSub>
            </Content>
          </InfoSection>
        </div>
      </div>
    </MainView>
  );
}
const MainView = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn};
  padding-top: 10vh;
  padding-bottom: 10vh;
`;

const Title = styled.span`
  font-family: PreExBold;
  color: #1263ce;
  font-size: 1.8rem;
`;

const InfoSection = styled.div`
  ${({ theme }) => theme.common.flexRow};
  padding-left: 10%;
  margin-top: 2vh;
`;

const Content = styled.div`
  width: 60%;
  height: 10vh;
  ${({ theme }) => theme.common.flexColumn};
`;
const IconSection = styled.div`
  width: 30%;
  ${({ theme }) => theme.common.flexCenterColumn};
`;
const ContentTitle = styled.span`
  font-family: PreBold;
  color: #1263ce;
  text-align: left;
`;
const ContentSub = styled.span`
  font-family: PreMedium;
  color: #8eccff;
  text-align: left;
`;

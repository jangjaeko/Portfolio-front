import React from "react";
import styled from "styled-components";
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
          backgroundColor: "#1263ce",
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
        <div className="col-md-6  col-lg-4">
          <InfoSection>
            <Content>
              <ContentTitle>Name</ContentTitle>
              <ContentSub>Jang Jaeho (Michael)</ContentSub>
            </Content>
          </InfoSection>
        </div>
        <div className="col-md-6  col-lg-4">
          <InfoSection>
            <Content>
              <ContentTitle>Birth</ContentTitle>
              <ContentSub>1997.06.26</ContentSub>
            </Content>
          </InfoSection>
        </div>
        <div className="col-md-6  col-lg-4">
          <InfoSection>
            <Content>
              <ContentTitle>Address</ContentTitle>
              <ContentSub>Seoul, Korea</ContentSub>
            </Content>
          </InfoSection>
        </div>
        <div className="col-md-6  col-lg-4">
          <InfoSection>
            <Content>
              <ContentTitle>Name</ContentTitle>
              <ContentSub>Chang Jaeho (Michael)</ContentSub>
            </Content>
          </InfoSection>
        </div>
        <div className="col-md-6  col-lg-4">
          <InfoSection>
            <Content>
              <ContentTitle>Name</ContentTitle>
              <ContentSub>Chang Jaeho (Michael)</ContentSub>
            </Content>
          </InfoSection>
        </div>
        <div className="col-md-6  col-lg-4" style={{ marginTop: "3vh" }}>
          <InfoSection>
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
  ${({ theme }) => theme.common.flexColumn};
`;

const Content = styled.div`
  ${({ theme }) => theme.common.flexColumn};
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

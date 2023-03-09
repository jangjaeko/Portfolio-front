import React from "react";
import styled from "styled-components";
export default function SecondSection() {
  return (
    <MainView style={{ height: "60vh" }}>
      <div style={{ borderBottomWidth: 10, borderBottomColor: "#000000" }}>
        <Title> About Me</Title>
      </div>
      <div
        style={{
          width: "15vw",
          height: "1vh",
          backgroundColor: "black",
          marginTop: "2vh",
        }}
      ></div>
      <div
        className="row"
        style={{
          marginTop: "2vh",
          display: "flex",
          alignItems: "center",

          paddingLeft: "10vw",
        }}
      >
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
              <ContentSub>Computer Software Engineering</ContentSub>
            </Content>
          </InfoSection>
        </div>
      </div>
    </MainView>
  );
}
const MainView = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn};
  background-image: url("./Backgroudimg.jpg");
`;

const Title = styled.span`
  font-family: PreExBold;
  color: #000000;
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
  color: #555555;
  text-align: left;
`;
const ContentSub = styled.span`
  font-family: PreMedium;
  color: #555555;
  text-align: left;
`;

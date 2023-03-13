import React from "react";
import styled from "styled-components";
export default function Skills() {
  return (
    <MainView>
      <Title>Skills</Title>
      <ContentDiv className="row" style={{ width: "100%" }}>
        <div className="col-md-6  col-lg-4">
          <BigSection>
            <SkillsTitle>Frontend</SkillsTitle>
            <hr style={{ width: "100%", color: "#1263CE" }} />
          </BigSection>
        </div>
        <div className="col-md-6  col-lg-4">
          <BigSection>
            <SkillsTitle>Backend</SkillsTitle>
            <hr style={{ width: "100%", color: "#1263CE" }} />
          </BigSection>
          <BigSection style={{ marginTop: "5vh" }}>
            <SkillsTitle>Mobile App</SkillsTitle>
            <hr style={{ width: "100%", color: "#1263CE" }} />
          </BigSection>
        </div>
        <div className="col-md-6  col-lg-4">
          <BigSection>
            <SkillsTitle>Version Control</SkillsTitle>
            <hr style={{ width: "100%", color: "#1263CE" }} />
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

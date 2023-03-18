import React from "react";
import styled from "styled-components";
import Image from "next/image";

export default function Projects() {
  return (
    <MainView>
      <Title>Projects</Title>
      <BigSection>
        <span>asdasdsa</span>
        <ContentDiv className="row">
          <div className="col-md-12  col-lg-6">gallery</div>
          <div className="col-md-12  col-lg-6">text</div>
        </ContentDiv>
      </BigSection>
    </MainView>
  );
}

const MainView = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn};
  background-color: #1263ce;
  padding-top: 10vh;
  padding-bottom: 10vh;
`;

const Title = styled.span`
  font-family: PreExBold;
  color: #cddff5;
  font-size: 1.8rem;
`;
const BigSection = styled.div`
  ${({ theme }) => theme.common.flexAlignCenter};
  background-color: #ffffff;
  border-radius: 15px;
  width: 75%;
  padding: 10%;
  margin-top: 5vh;
  box-shadow: 0.5px 0.5px 0.5px 0px;
`;
const ContentDiv = styled.div`
  display: flex;
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;
`;

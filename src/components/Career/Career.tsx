import React from "react";
import styled from "styled-components";
export default function Career() {
  return (
    <MainView>
      <Title>Career</Title>
      <Layer>
        <Left>Logo</Left>
        <Right>text</Right>
      </Layer>
    </MainView>
  );
}

const MainView = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn};
  background-color: #123123;
  padding-top: 10vh;
  padding-bottom: 10vh;
  padding-left: 10%;
  padding-right: 10%;
`;

const Title = styled.span`
  font-family: PreExBold;
  color: #cddff5;
  font-size: 1.8rem;
`;

const Layer = styled.div`
  width: 100%;
  ${({ theme }) => theme.common.flexRow};
`;
const Left = styled.div`
  width: 30%;
`;
const Right = styled.div`
  width: 30%;
`;

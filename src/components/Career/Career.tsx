import React from "react";
import styled from "styled-components";
export default function Career() {
  return (
    <MainView>
      <Title>Career</Title>
    </MainView>
  );
}

const MainView = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn};
  background-color: #123123;
  padding-top: 10vh;
  padding-bottom: 10vh;
`;

const Title = styled.span`
  font-family: PreExBold;
  color: #cddff5;
  font-size: 1.8rem;
`;

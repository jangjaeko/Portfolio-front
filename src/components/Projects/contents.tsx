import React from "react";
import styled from "styled-components";
import axios from "axios";
export default function contents() {
  return <MainView>contents</MainView>;
}

const MainView = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn};
  background-color: #1263ce;
  padding-top: 10vh;
  padding-bottom: 10vh;
`;

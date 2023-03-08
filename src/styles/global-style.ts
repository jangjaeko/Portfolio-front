import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  @font-face {
    font-family: "PreMedi";
    src: local("PreMedi"), url("../fonts/Pretendard-Medium.ttf") format("truetype");
  }
  html {
    box-sizing: border-box;
    font-size: 20px;
    min-width: 320px;
  }
  a { cursor: pointer; text-decoration: none; }
 
`;

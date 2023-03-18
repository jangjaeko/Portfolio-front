import { DefaultTheme } from "styled-components";

const pixelToRem = (size: number) => `${size / 16}rem`;
const fontstyle = {
  preLight: `
  @font-face {
    font-family: "PreLight";
    src: url("../fonts/Pretendard-Medium.ttf");
  }
`,
};
const fonts = {
  title: `
      font-size : ${pixelToRem(15)};
      font-family :"PreBold";
      `,
  greyWord: `
      
      font-family :PreMedium;
      color :#6d7683;
      
    `,
};
const fontSizes = {
  title: pixelToRem(15),
  subtitle: pixelToRem(30),
  paragraph: pixelToRem(18),
  big: pixelToRem(50),
  bigbtn: "0.8vw",
  smallbtn: pixelToRem(10),
};
// 자주 사용하는 색
const colors = {
  primary: "#4455EF",
  Secondary: "#EBED6F",
  Sub_title: "#6d768380",
  gra: "#191BB9",
  green: "#3cb46e",
  pink: "#DE44EF",
  blue: "#4455EF",
  orange: "#FF7E00",
  red: "#EF4455",
  kakao: "#FCEC5C",
  bc: "#FAFAFF",
  Title: "#353D4A",
  bluebc: "rgba(234,235,254,0.5)",
  grey: "#6D7683",
  footer: "#1E1E1E",
};

// 자주 사용하는 스타일 속성
const common = {
  flexCenter: `
      display: flex;
      align-items: center;
      justify-content: center;
    `,
  flexAlign: `
    display: flex;
    align-items: center;
    `,
  flexAlignCenter: `
    display: flex;
    flex-direction: column;
    align-items: center;
    `,
  flexColumn: `
      display: flex;
      flex-direction: column;
    `,
  flexCenterColumn: `
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `,
  flexJuCenterColumn: `
      display: flex;
      flex-direction: column;
      justify-content: center;
    `,
  flexCenterRow: `
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    `,
  flexRow: `
      display: flex;
      flex-direction: row;
    `,
  navView: `
      padding-top: 60px;
      width:100%;
    `,
};

// theme 객체에 감싸서 반환한다.

const size = {
  mobile: "475px",
  tabletS: "576px",
  tabletM: "768px",
  tabletL: "992px",
  laptop: "1200px",
};

const device = {
  mobile: `@media (min-width: ${size.mobile})`,
  tabletS: `@media screen and (min-width: 900px)`,
  tabletM: `@media (min-width: ${size.tabletM})`,
  tabletL: `@media (min-width: ${size.tabletL})`,
  laptop: `@media (min-width: ${size.laptop})`,
};

export const theme: DefaultTheme = {
  fonts,
  colors,
  common,
  device,
  fontSizes,
  fontstyle,
};

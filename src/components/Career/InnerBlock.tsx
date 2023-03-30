import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Cla from "./Cla";
import { BsFillAwardFill } from "react-icons/bs";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { BsBookmarkFill } from "react-icons/bs";
import Mimicle from "./Mimicle";
export default function InnerBlock() {
  return (
    <Layer>
      <Cla />
      <hr style={{ width: "100%" }} />
      <Mimicle />
    </Layer>
  );
}

const Layer = styled.div`
  width: 100%;
  ${({ theme }) => theme.common.flexCenterColumn};
  background-color: #ffffff;
  border-radius: 10px;
  padding: 5%;
  margin-top: 3%;
`;
const Left = styled.div`
  width: 100%;
`;
const Right = styled.div`
  ${({ theme }) => theme.common.flexColumn};
  width: 100%;
  background-color: #ffffff;
`;
const Title = styled.span`
  font-family: PreExBold;
  color: #333333;
  font-size: 1.5rem;
`;
const DateText = styled.span`
  font-family: PreBold;
  font-size: 1rem;
`;
const ComDesc = styled.span`
  font-family: PreBold;
  font-size: 1rem;
`;
const Work = styled.span`
  font-family: PreMedium;
  margin-top: 10px;
`;
const Desc = styled.span`
  font-family: PreLight;
`;

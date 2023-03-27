import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Bg from "./images/Backgroundimg.jpg";
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { firestore } from "../../Firebase/firebaseConfig";
export default function FirstSection() {
  // React.useEffect(() => {
  //   //파이어베이스 잘 db확인해보기
  //   console.log(firestore);

  //   // collection(db정보,콜렉션 이름)
  //   // collection(db,"card")
  //   //collection의 모든 도큐먼트 정보 가져오기
  //   const query = getDocs(collection(firestore, "collection(db,card)"));
  //   console.log(query);
  // }, []);
  // const gotodown = () => {
  //   window.scrollTo({
  //     top: 100,
  //     behavior: "smooth",
  //   });
  // };
  return (
    <MainView style={{ height: "80vh" }}>
      <Image
        src={Bg}
        style={{
          position: "absolute",
          zIndex: -10,
          opacity: 0.88,
          width: "100vw",
          height: "80vh",
        }}
        alt=""
      />
      <Title style={{ marginTop: "4vh" }} onClick={() => gotodown()}>
        {" "}
        장재호(Michael)'s Portpolio
      </Title>
      <Title>- Web / App Developer -</Title>
      <div
        style={{
          width: "15vw",
          height: "1vh",
          backgroundColor: "#FFFFFF",
          marginTop: "2vh",
        }}
      ></div>
      <SubText style={{ marginTop: "5vh" }}>
        안녕하세요.
        <br />
        공부가 취미인 풀 스택 웹 개발자입니다.
        <br />
        매우 꼼꼼한 성격, 그리고 공부를 밥 먹듯이 하는 습관이 저의 장점입니다.
      </SubText>
    </MainView>
  );
}

const MainView = styled.div`
  ${({ theme }) => theme.common.flexCenterColumn};
  background-image: url("./Backgroudimg.jpg");
`;
const Title = styled.span`
  font-family: PreExBold;
  color: #ffffff;
  font-size: 1.8rem;
`;
const SubText = styled.span`
  font-family: PreBold;
  color: #ffffff;
  font-size: 1rem;
  text-align: center;
  line-height: 1.5rem;
`;

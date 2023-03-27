// Import the functions you need from the SDKs you need
import admin from "firebase-admin";

import "firebase/compat/auth";
import "firebase/compat/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDL0iyArMIaHz9Lv3-Xr2h1ZAEPUAxpe-0",
  authDomain: "jjh-portfolio.firebaseapp.com",
  databaseURL: "https://jjh-portfolio-default-rtdb.firebaseio.com",
  projectId: "jjh-portfolio",
  storageBucket: "jjh-portfolio.appspot.com",
  messagingSenderId: "568567761602",
  appId: "1:568567761602:web:76f9947c2f0ffb356b895b",
  measurementId: "G-DVGPSS0FVJ",
};

// firebaseConfig 정보로 firebase 시작
admin.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = admin.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
// 다른 곳에서 불러올때 firestore로 불러와야 함!!
export { firestore };

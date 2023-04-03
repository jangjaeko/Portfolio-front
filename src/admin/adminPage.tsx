import React from "react";
var serviceAccount = require("./serviceAccountKey.json");
const { firestore } = require("firebase-admin");
var admin = require("firebase-admin");
const db = firestore();
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://jjh-portfolio-default-rtdb.firebaseio.com",
});
export default function adminPage() {
  let testRef = db.collection("test");

  testRef.get().then((querySnapshot: any[]) => {
    querySnapshot.forEach((document) => {
      console.log(document.data());
    });
  });

  const testData = {
    id: 1,
    name: "testData",
  };

  // db.collection("testData").doc(testData.id.toString()).set(testData);

  db.collection("testData")
    .doc("1")
    .delete()
    .then((res: any) => {
      console.log("success");
    });

  return <div>admin</div>;
}

// app.listen(port, () => {
//   console.log(`server is listening at localhost:${process.env.PORT}`);
// });

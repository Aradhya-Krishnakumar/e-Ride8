import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDA2tZ00vJdA0ULxBeVCnxpbRyEK97OIv8",
  authDomain: "pro-c71-72d46.firebaseapp.com",
  projectId: "pro-c71-72d46",
  storageBucket: "pro-c71-72d46.appspot.com",
  messagingSenderId: "1097206761221",
  appId: "1:1097206761221:web:86d00bf7e31fa825bbd96c"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

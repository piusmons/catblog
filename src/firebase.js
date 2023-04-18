import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
    apiKey: "AIzaSyCdNdezHnyRjfZiSB7_xEFdbgY1KiDmrIM",
    authDomain: "catblog-66475.firebaseapp.com",
    projectId: "catblog-66475",
    storageBucket: "catblog-66475.appspot.com",
    messagingSenderId: "863754873930",
    appId: "1:863754873930:web:b3907ae0ec1032900a0ab3",
    measurementId: "G-28CKR56D6Z"
  };


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
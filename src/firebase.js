import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFw3i2hIAQSBBIg2m4iMThTvESUPdUfAM",
  authDomain: "clone-621cc.firebaseapp.com",
  projectId: "clone-621cc",
  storageBucket: "clone-621cc.appspot.com",
  messagingSenderId: "1081261646555",
  appId: "1:1081261646555:web:d645826ea290556eaba2fe",
  measurementId: "G-VT7G2GXX42",
};
const app = initializeApp(firebaseConfig);
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const db = getFirestore(app);
// const auth = app.auth();
const auth = getAuth(app);
export { db, auth };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCnNx4j16PlDNVXMd2LSbfp5MeNgCZuFE",
  authDomain: "masjit-1155c.firebaseapp.com",
  projectId: "masjit-1155c",
  storageBucket: "masjit-1155c.appspot.com",
  messagingSenderId: "416927785004",
  appId: "1:416927785004:web:ee446e3b6887aa976a7189",
  measurementId: "G-S7L68SQ18C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
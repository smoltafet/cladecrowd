// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
import { getDocs, collection } from "firebase/firestore"; 


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
const db = getFirestore(app);
const auth = getAuth(app);

async function getAllProperties() {
  const querySnapshot = await getDocs(collection(db, "properties"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
}

const data = getAllProperties();

export {db, auth, data};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore' ;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjHT488nlE2PnyOf09Dd1PshjyUqccDos",
  authDomain: "noa-bank.firebaseapp.com",
  projectId: "noa-bank",
  storageBucket: "noa-bank.appspot.com",
  messagingSenderId: "913723817570",
  appId: "1:913723817570:web:23c37da3faad7300c21b3b",
  measurementId: "G-W4KT68DD6K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
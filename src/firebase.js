// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getfirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOikYC0udSxsQnWCtclU8O0V2SCRzfWhE",
  authDomain: "react-industry-54256.firebaseapp.com",
  projectId: "react-industry-54256",
  storageBucket: "react-industry-54256.appspot.com",
  messagingSenderId: "412785995208",
  appId: "1:412785995208:web:11f50c02e681ee939e64fd",
  measurementId: "G-EXC7JFFM5F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getfirestore(app);
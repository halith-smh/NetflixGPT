// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { FIREBASE_API, FIREBASE_APP_ID } from "./constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_API,
  authDomain: "netflixgpt-by-smh.firebaseapp.com",
  projectId: "netflixgpt-by-smh",
  storageBucket: "netflixgpt-by-smh.appspot.com",
  messagingSenderId: "59383730481",
  appId: FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
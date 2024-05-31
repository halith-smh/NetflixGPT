// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3D-s2UExK2u1ZpgqGRTz9lx-pH-UlyJ8",
  authDomain: "netflixgpt-by-smh.firebaseapp.com",
  projectId: "netflixgpt-by-smh",
  storageBucket: "netflixgpt-by-smh.appspot.com",
  messagingSenderId: "59383730481",
  appId: "1:59383730481:web:00c9a2a82f4935b4f56010"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
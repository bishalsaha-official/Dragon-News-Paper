// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRy91a8RCNTSqsEKLIOVF5hmw-PrpbLDM",
  authDomain: "dragon-news-paper-bee34.firebaseapp.com",
  projectId: "dragon-news-paper-bee34",
  storageBucket: "dragon-news-paper-bee34.firebasestorage.app",
  messagingSenderId: "55432995958",
  appId: "1:55432995958:web:6c21f782e70113014eeb57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
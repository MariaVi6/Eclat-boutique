// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3IDr1vwew8yqhWNuYBBIPyyaCkMo_MB8",
  authDomain: "eclat-d5365.firebaseapp.com",
  projectId: "eclat-d5365",
  storageBucket: "eclat-d5365.firebasestorage.app",
  messagingSenderId: "974663675429",
  appId: "1:974663675429:web:9465d0e0618057cdce19cc",
  measurementId: "G-KFYZ8RY49C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
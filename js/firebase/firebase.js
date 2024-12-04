import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyA3IDr1vwew8yqhWNuYBBIPyyaCkMo_MB8",
  authDomain: "eclat-d5365.firebaseapp.com",
  projectId: "eclat-d5365",
  storageBucket: "eclat-d5365.firebasestorage.app",
  messagingSenderId: "974663675429",
  appId: "1:974663675429:web:9465d0e0618057cdce19cc",
  measurementId: "G-KFYZ8RY49C"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}
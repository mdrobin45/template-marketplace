import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUh9V-OYEKHzhRektoCSElcWaLT9T-JE8",
  authDomain: "theme-bazaar.firebaseapp.com",
  projectId: "theme-bazaar",
  storageBucket: "theme-bazaar.appspot.com",
  messagingSenderId: "498909207218",
  appId: "1:498909207218:web:23ad95cfd89eadf10907ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
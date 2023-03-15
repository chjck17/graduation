// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDudaPM-L0rO6L7117gbz_sNyPxvovQJSE",
  authDomain: "teste-41251.firebaseapp.com",
  projectId: "teste-41251",
  storageBucket: "teste-41251.appspot.com",
  messagingSenderId: "176404451701",
  appId: "1:176404451701:web:e3853d7fe7ec762c7d433c",
  measurementId: "G-4REMRHTXCJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
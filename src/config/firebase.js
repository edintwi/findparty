// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA665wi1yGF0fevGFKJO8vlI5AHcO4T84o",
  authDomain: "findparty-57ee1.firebaseapp.com",
  projectId: "findparty-57ee1",
  storageBucket: "findparty-57ee1.appspot.com",
  messagingSenderId: "1099077448265",
  appId: "1:1099077448265:web:d9beb488f2c01e28308598",
  measurementId: "G-PPM8NB1XKV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


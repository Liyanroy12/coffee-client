// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgvEy6XqFx_AVnHdLvBH6hA6hQ006QxCM",
  authDomain: "coffee-store-e410f.firebaseapp.com",
  projectId: "coffee-store-e410f",
  storageBucket: "coffee-store-e410f.firebasestorage.app",
  messagingSenderId: "968387920924",
  appId: "1:968387920924:web:ce5ff2e1a230f20eab0bd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
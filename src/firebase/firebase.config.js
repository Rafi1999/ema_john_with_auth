// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQgPkUn1J8j0ShO8HJC0mwcWDZBY530Qs",
  authDomain: "ema-john-with-auth-f8d9e.firebaseapp.com",
  projectId: "ema-john-with-auth-f8d9e",
  storageBucket: "ema-john-with-auth-f8d9e.appspot.com",
  messagingSenderId: "784671330355",
  appId: "1:784671330355:web:ddf5a6c558d8b07acb1346"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
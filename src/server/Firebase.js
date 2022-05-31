npm install -g firebase-tools// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBd8pC7Jlh3218yL1NIANetXf4IgFioo2g",
  authDomain: "calander-io.firebaseapp.com",
  projectId: "calander-io",
  storageBucket: "calander-io.appspot.com",
  messagingSenderId: "779193475272",
  appId: "1:779193475272:web:6f24c81a9b3aa4eb8185fd",
  measurementId: "G-ND73SJZGTR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const app = firebase.initializeApp({
  apiKey: "AIzaSyBd8pC7Jlh3218yL1NIANetXf4IgFioo2g",
  authDomain: "calander-io.firebaseapp.com",
  projectId: "calander-io",
  storageBucket: "calander-io.appspot.com",
  messagingSenderId: "779193475272",
  appId: "1:779193475272:web:6f24c81a9b3aa4eb8185fd",
  measurementId: "G-ND73SJZGTR"
});

export const auth = app.auth();
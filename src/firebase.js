import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCJYSbFAR7Oja1BkZfO-Bah5Vwph9m9LRs",
  authDomain: "project-f2a74.firebaseapp.com",
  projectId: "project-f2a74",
  storageBucket: "project-f2a74.appspot.com",
  messagingSenderId: "888779761349",
  appId: "1:888779761349:web:3611e39f9fb40b44d432ac",
  measurementId: "G-58PPK739HF",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

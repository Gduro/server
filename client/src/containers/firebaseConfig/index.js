// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {getDatabase } from "firebase/database";
import 'firebase/storage';
import "firebase/auth";
import 'firebase/firestore';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy-BCym7JMAhsDoJJArNuH6oTepL8kvFE",
  authDomain: "zenonklausof.firebaseapp.com",
  databaseURL: "https://zenonklausof-default-rtdb.firebaseio.com",
  projectId: "zenonklausof",
  storageBucket: "zenonklausof.appspot.com",
  messagingSenderId: "170570011425",
  appId: "1:170570011425:web:de682b45f1d52174612460"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db =getDatabase(app);
const auth = getAuth(app);
const projectFirestore = getFirestore(app);
const projectStorage = getStorage(app);
export{auth,db, projectStorage, projectFirestore};
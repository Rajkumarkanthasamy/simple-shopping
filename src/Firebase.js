import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBLnh3MDa39My9b86wXqVhAc4z5Rrcvi0I",
  authDomain: "world-h25.firebaseapp.com",
  projectId: "world-h25",
  storageBucket: "world-h25.appspot.com",
  messagingSenderId: "960198213901",
  appId: "1:960198213901:web:b1ec37114798f37b60f044",
  measurementId: "G-CGMCVKEC0T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth();

export default {app, auth};

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import {ref, onUnmounted } from 'vue'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBN6JWUK9uiClmMTBWQ7M8iUXDYDrGUwVo",
    authDomain: "h3-kenneth-loevgreen.firebaseapp.com",
    projectId: "h3-kenneth-loevgreen",
    storageBucket: "h3-kenneth-loevgreen.appspot.com",
    messagingSenderId: "953341880348",
    appId: "1:953341880348:web:f1b7a1c2a33fb1e02d57d9",
};

const config = firebase.initializeApp(firebaseConfig, "Config");

const db = config.firestore();
const userCollection = db.collection("users");

export const createUser = user => {
    return userCollection.add(user);
};


/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBN6JWUK9uiClmMTBWQ7M8iUXDYDrGUwVo",
  authDomain: "h3-kenneth-loevgreen.firebaseapp.com",
  projectId: "h3-kenneth-loevgreen",
  storageBucket: "h3-kenneth-loevgreen.appspot.com",
  messagingSenderId: "953341880348",
  appId: "1:953341880348:web:f1b7a1c2a33fb1e02d57d9",
  measurementId: "G-5XBBVMV19Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

*/
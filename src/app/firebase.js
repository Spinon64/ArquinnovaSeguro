import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyDr6ysAL8R-EtVS4BYNfyvXW-MNj3T2uDA",
  authDomain: "arquinnova-cfff4.firebaseapp.com",
  projectId: "arquinnova-cfff4",
  storageBucket: "arquinnova-cfff4.appspot.com",
  messagingSenderId: "434018687447",
  appId: "1:434018687447:web:6722c846493620c50fd392",
  measurementId: "G-JYXXMQSMQE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
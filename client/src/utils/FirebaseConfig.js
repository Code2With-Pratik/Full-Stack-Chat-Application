import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDGrA2NZO9MNRMTdX4Npy_oXBg6-l346w4",
    authDomain: "chat-app-54c61.firebaseapp.com",
    projectId: "chat-app-54c61",
    storageBucket: "chat-app-54c61.firebasestorage.app",
    messagingSenderId: "1078773432419",
    appId: "1:1078773432419:web:260b596a6d813ced36b856",
    measurementId: "G-XNQLFZKM25"
  };

  const app = initializeApp(firebaseConfig);
  export const firebaseAuth = getAuth(app);
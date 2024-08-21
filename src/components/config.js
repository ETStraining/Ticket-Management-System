import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7vruMzFCO_2JfGnepAecND2KcExQZ1wQ",
  authDomain: "booking-19d96.firebaseapp.com",
  projectId: "booking-19d96",
  storageBucket: "booking-19d96.appspot.com",
  messagingSenderId: "621085860110",
  appId: "1:621085860110:web:0daf84358a61b6fbfcf75f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Firebase Auth
export const auth = getAuth(app);

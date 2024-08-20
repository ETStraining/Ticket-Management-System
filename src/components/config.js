import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7vruMzFCO_2JfGnepAecND2KcExQZ1wQ",
  authDomain: "booking-19d96.firebaseapp.com",
  projectId: "booking-19d96",
  storageBucket: "booking-19d96.appspot.com",
  messagingSenderId: "621085860110",
  appId: "1:621085860110:web:0daf84358a61b6fbfcf75f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

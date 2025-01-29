import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2mwnclhWd9F3wpBZS2Sln3Y3zNedZ2bU",
  authDomain: "online-bank-ab9b6.firebaseapp.com",
  projectId: "online-bank-ab9b6",
  storageBucket: "online-bank-ab9b6.firebasestorage.app",
  messagingSenderId: "885605176606",
  appId: "1:885605176606:web:72b29b88e8f0b3929ba50f",
  measurementId: "G-PDWML1Q428",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const cardsCollection = collection(db, "cards");

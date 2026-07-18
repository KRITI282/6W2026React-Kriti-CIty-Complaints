// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp1oR4DZv3Lkf2NU0cWyxIQ0eGRXxHvXI",
  authDomain: "kriti-wardpulse-50b5e.firebaseapp.com",
  projectId: "kriti-wardpulse-50b5e",
  storageBucket: "kriti-wardpulse-50b5e.firebasestorage.app",
  messagingSenderId: "124310334600",
  appId: "1:124310334600:web:00bbdbb21aca265057c33d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);
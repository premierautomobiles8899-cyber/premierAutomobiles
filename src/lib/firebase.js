import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMPqI7qD1KeIdyt9hEwN7Cu7_Vz4K3RjY",
  authDomain: "premier-f33d7.firebaseapp.com",
  projectId: "premier-f33d7",
  storageBucket: "premier-f33d7.firebasestorage.app",
  messagingSenderId: "928781414875",
  appId: "1:928781414875:web:ed55de56e21bc1e464f7fe"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBpmTCPVy4HQTGEe4pbYFYrQgPRN5TPeSs",
//   authDomain: "premierautomobiles-b3418.firebaseapp.com",
//   projectId: "premierautomobiles-b3418",
//   storageBucket: "premierautomobiles-b3418.firebasestorage.app",
//   messagingSenderId: "863478673766",
//   appId: "1:863478673766:web:e9973c728cf54e08f058a7",
//   measurementId: "G-PQG51554GY"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

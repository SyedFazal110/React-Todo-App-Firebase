import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyAvIfNmLheWNGX5PEVreNUkKim3Sk8P--Y",
  authDomain: "react-todo-app-firebase-83964.firebaseapp.com",
  projectId: "react-todo-app-firebase-83964",
  storageBucket: "react-todo-app-firebase-83964.appspot.com",
  messagingSenderId: "235507300649",
  appId: "1:235507300649:web:c3c23565c326c6258b1f38",
  measurementId: "G-YNBBF99X24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

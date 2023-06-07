import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNCFvALNuP_oVJUTNf9CgtkhppHz9Yr_Q",
  authDomain: "healthcare-rm.firebaseapp.com",
  databaseURL:
    "https://healthcare-rm-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "healthcare-rm",
  storageBucket: "healthcare-rm.appspot.com",
  messagingSenderId: "943372053800",
  appId: "1:943372053800:web:2879cbc254b14dbe16341d",
  measurementId: "G-66XNH2SGSF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuth = new GoogleAuthProvider();

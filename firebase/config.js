// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjiRGmdtlwGcVbFgHTPwZffDoV2SGuiG8",
  authDomain: "linkedin-clone-44bfd.firebaseapp.com",
  projectId: "linkedin-clone-44bfd",
  storageBucket: "linkedin-clone-44bfd.appspot.com",
  messagingSenderId: "336036401676",
  appId: "1:336036401676:web:705797fc64c58894249429",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
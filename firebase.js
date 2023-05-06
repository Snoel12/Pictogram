// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWlOHEZoFNvWHKGHZ_i_ambiDoWb6L27I",
  authDomain: "pictogram-4c1c2.firebaseapp.com",
  projectId: "pictogram-4c1c2",
  storageBucket: "pictogram-4c1c2.appspot.com",
  messagingSenderId: "464226254838",
  appId: "1:464226254838:web:bdec200473cd49bba051d7",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };

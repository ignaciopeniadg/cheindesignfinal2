// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDHslenFqKajz6wypmEPJ0dqO9s1WwJydw",
    authDomain: "cheindesign-f2b2a.firebaseapp.com",
    projectId: "cheindesign-f2b2a",
    storageBucket: "cheindesign-f2b2a.appspot.com",
    messagingSenderId: "425939772007",
    appId: "1:425939772007:web:ee2dd3ba1f3cd0424b2ac2",
    //measurementId: "G-VX49QFS51V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app)
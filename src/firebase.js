import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyANQqn8qKhtOwANUeGEh7Ysw6nda4bUE4M",
    authDomain: "gatekeeper-86560.firebaseapp.com",
    projectId: "gatekeeper-86560",
    storageBucket: "gatekeeper-86560.appspot.com",
    messagingSenderId: "224077517107",
    appId: "1:224077517107:web:ca33ef0ae594111053ee46",
    measurementId: "G-DPBS3ZJK0Q"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db }
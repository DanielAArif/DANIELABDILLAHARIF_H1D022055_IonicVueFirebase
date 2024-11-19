// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCQ15CTIyh7UbfUDb5GBeYVbh********",
    authDomain: "vue-firebase-d7a12.firebaseapp.com",
    projectId: "vue-firebase-d7a12",
    storageBucket: "vue-firebase-d7a12.firebasestorage.app",
    messagingSenderId: "985093640397",
    appId: "1:985093640397:web:249da801ddd9b7be7ed984",
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
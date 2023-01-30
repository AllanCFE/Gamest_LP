import { initializeApp, getApps, getApp } from 'firebase/app';
import {  getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: "gamest-br.appspot.com",
    messagingSenderId: "121601058091",
    appId: "1:121601058091:web:47442b26c162b7f7c2916e",
    measurementId: "G-L4DVNT9XFT"
};


// Initialize Firebase
const app = getApps().length > 0 ? getApp : initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export {app, db, storage}
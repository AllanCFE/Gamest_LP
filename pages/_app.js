import '../styles/globals.css'
import { initializeApp, getApps } from 'firebase/app';



const firebaseConfig = initializeApp({
  apiKey: "AIzaSyBBQZFxYcJXbyqHURsR_9jMRrPCmfGfMwg",
  authDomain: "gamest-274e0.firebaseapp.com",
  projectId: "gamest-274e0",
  storageBucket: "gamest-274e0.appspot.com",
  messagingSenderId: "60293567425",
  appId: "1:60293567425:web:60a3b4854867c1b89a9540",
  measurementId: "G-6NKTGLHLYM"
})

// Initialize Firebase
var app;
if(!getApps().length){
  app = initializeApp(firebaseConfig);
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

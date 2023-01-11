import '../styles/globals.css'
import { initializeApp, getApps } from 'firebase/app';
import { Analytics } from '@vercel/analytics/react';
import GAnalytics from '../Components/GAnalytics/GAnalytics';


const firebaseConfig = {
  apiKey: "AIzaSyCZumn-Ii27Svxr7IO_sq6LpC0UjXfXojA",
  authDomain: "gamest-br.firebaseapp.com",
  projectId: "gamest-br",
  storageBucket: "gamest-br.appspot.com",
  messagingSenderId: "121601058091",
  appId: "1:121601058091:web:47442b26c162b7f7c2916e",
  measurementId: "G-L4DVNT9XFT"
};


// Initialize Firebase
var app;
if(!getApps().length){
  app = initializeApp(firebaseConfig);
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
      <GAnalytics />
    </>
  )
}

export default MyApp

import '../styles/globals.css'
import { initializeApp, getApps } from 'firebase/app';
import { Analytics } from '@vercel/analytics/react';
import GAnalytics from '../Components/GAnalytics/GAnalytics';
import { AppProps } from 'next/app';


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
var app;
if(!getApps().length){
  app = initializeApp(firebaseConfig);
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
      <GAnalytics />
    </>
  )
}

export default MyApp

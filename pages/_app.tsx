import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react';
import GAnalytics from '../Components/GAnalytics/GAnalytics';
import { AppProps } from 'next/app';
import {app} from '../Firebase/Firebase.config';

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

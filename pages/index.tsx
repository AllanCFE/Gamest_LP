import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../Components/Navbar/Navbar'
import NewCover from '../Components/NewCover/NewCover'
import Footer from '../Components/Footer/Footer'
import InovAtiva from '../Components/InovAtiva/InovAtiva'
import Partners from '../Components/Partners/Partners'
import CardsArea from '../Components/CardsArea/CardsArea'
import CTA_Company from '../Components/CTA_Company/CTA_Company'
import CTA_User from '../Components/CTA_User/CTA_User'
import Actuation from '../Components/Actuation/Actuation'

export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Gamest</title>
        <meta name="description" content="Gamest - Conectamos talentos à indústria de games" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      
        <Navbar />

        <NewCover />

        <CTA_Company />

        <InovAtiva />

        <CardsArea />

        <Actuation />
        
        <CTA_User />

        <Partners />

        <Footer />
      </main>
    </div>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../Components/Navbar/Navbar'
import Cover from '../Components/Cover/Cover'
import CardsArea from '../Components/CardsArea/CardsArea'
import ContactForm from '../Components/ContactForm/ContactForm'
import Footer from '../Components/Footer/Footer'

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

        <Cover />

        <CardsArea />

        <Footer />
      </main>
    </div>
  )
}

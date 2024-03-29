import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../Components/Navbar/Navbar'
import ContactForm from '../Components/ContactForm/ContactForm'
import Footer from '../Components/Footer/Footer'

function contact() {
    return (
        <div className={styles.container}>
        <Head>
          <title>Gamest</title>
          <meta name="description" content="Gamest - Conectamos talentos à indústria de games" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
        
          <Navbar />
  
          <ContactForm />
  
          <Footer />
        </main>
      </div>
    );
}

export default contact;